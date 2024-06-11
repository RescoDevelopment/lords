type Listener<T> = (v: T) => Promise<void>;
type Events = Record<string, unknown>;
declare const EventEmitter: <$Events extends Events>() => {
    listen: <$Event extends keyof $Events>(eventName: $Event, listener: Listener<$Events[$Event]>) => () => void;
    publish: <$Event_1 extends keyof $Events>(eventName: $Event_1, value: $Events[$Event_1]) => Promise<void>;
    clear: <$Event_2 extends keyof $Events>(eventName: $Event_2) => void;
};

declare const runTime: <T extends (...args: any[]) => any>(fn: T, count: number, ...args: Parameters<T>[]) => number;

declare function flat(arr: any[]): any[];

type Or<$Left, $Right> = $Left | $Right;
type _Some<T> = {
    value: T;
};
type Option<T> = _Some<T> | undefined;
type ErrorPath = `${string}/${string}` | `${string}/${string}/${string}`;

declare function quickSort<T = Or<string, number>>(arr: T[]): T[];

declare const error: (provider: string) => (path: ErrorPath, reason: string) => never;
declare const isError: (value: any) => boolean;

type ValidationFunction = (value: any) => unknown;
declare const yamlValidator: () => {
    validate: (yamlData: string, requirements: Record<string, ValidationFunction[]>) => boolean;
};

declare const Some: <T>(value: T) => _Some<T>;

export { EventEmitter, type Option, Some, type ValidationFunction, error, flat, isError, quickSort, runTime, yamlValidator };
