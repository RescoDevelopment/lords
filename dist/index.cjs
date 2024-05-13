"use strict";
var p = Object.create;
var s = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, E = Object.prototype.hasOwnProperty;
var x = (t, n) => {
    for (var e in n) s(t, e, {get: n[e], enumerable: !0})
}, f = (t, n, e, o) => {
    if (n && typeof n == "object" || typeof n == "function") for (let r of u(n)) !E.call(t, r) && r !== e && s(t, r, {
        get: () => n[r],
        enumerable: !(o = d(n, r)) || o.enumerable
    });
    return t
};
var v = (t, n, e) => (e = t != null ? p(m(t)) : {}, f(n || !t || !t.__esModule ? s(e, "default", {
    value: t,
    enumerable: !0
}) : e, t)), h = t => f(s({}, "__esModule", {value: !0}), t);
var k = {};
x(k, {
    EventEmitter: () => $,
    Some: () => S,
    flat: () => w,
    quickSort: () => i,
    runTime: () => g,
    yamlValidator: () => T
});
module.exports = h(k);
var $ = () => {
    let t = new Map;
    return {
        listen: (n, e) => (t.has(n) || t.set(n, new Set), t.get(n).add(e), () => {
            t.has(n) && t.get(n).delete(e)
        }), publish: async (n, e) => {
            if (console.log(t), t.has(n)) {
                let o = t.get(n);
                for (let r of o.values()) await r(e)
            } else throw Error(`Event ${n} doesn't exist`)
        }, clear: n => {
            t.delete(n)
        }
    }
};
var g = (t, n, ...e) => {
    let o = performance.now();
    for (let r = 0; r < n; r++) t(...e);
    return performance.now() - o
};

function l(t, n = []) {
    for (let e = 0; e < t.length; e++) {
        let o = t[e];
        Array.isArray(o) ? l(o, n) : n.push(o)
    }
    return n
}

function w(t) {
    return l(t)
}

function i(t) {
    if (t.length <= 1) return t;
    let n = t[t.length - 1], e = [], o = [];
    for (let r of t.slice(0, t.length - 1)) r <= n ? e.push(r) : o.push(r);
    return [...i(e), n, ...i(o)]
}

var c = v(require("js-yaml"), 1), T = () => ({
    validate: (t, n) => {
        let e = c.load(t);
        if (!e || typeof e != "object") throw new Error("Invalid YAML data");
        for (let o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
            let r = n[o], a = e[o];
            if (a === void 0) throw new Error(`Key '${o}' not found in YAML data`);
            for (let y of r) if (!y(a)) throw new Error(`Validation failed for ${o}: ${a}`)
        }
        return !0
    }
});
var S = t => ({tag: "Some", value: t});
0 && (module.exports = {EventEmitter, Some, flat, quickSort, runTime, yamlValidator});
