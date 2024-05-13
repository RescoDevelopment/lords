import { describe, expect, it } from "vitest";
import { quickSort } from "./index";

describe("Quick sort tests", () => {
  it("Includes duplicate numbers", () => {
    const sortThis = [1, 2, 33, 31, 1, 2, 63, 123, 6, 32, 943, 346, 24];
    const sorted = [1, 1, 2, 2, 6, 24, 31, 32, 33, 63, 123, 346, 943];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("Only 1 ", () => {
    const sortThis = [24];
    const sorted = [24];
    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("Already in order", () => {
    const sortThis = [1, 1, 2, 2, 6, 24, 31, 32, 33, 63, 123, 346, 943];
    const sorted = [1, 1, 2, 2, 6, 24, 31, 32, 33, 63, 123, 346, 943];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("All on the left", () => {
    const sortThis = [1, 2, 33, 31, 1, 2, 63, 123, 6, 32, 943, 346, 24, 2999];
    const sorted = [1, 1, 2, 2, 6, 24, 31, 32, 33, 63, 123, 346, 943, 2999];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("All on the right", () => {
    const sortThis = [1, 2, 33, 31, 1, 2, 63, 123, 6, 32, 943, 346, 24, 0];
    const sorted = [0, 1, 1, 2, 2, 6, 24, 31, 32, 33, 63, 123, 346, 943];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });
});

describe("Quick sort tests", () => {
  it("Includes duplicate strings", () => {
    const sortThis = ["Sony X", "Samsung Y", "Sony X", "Dell XX2"];
    const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("Only 1 ", () => {
    const sortThis = ["Sony X"];
    const sorted = ["Sony X"];
    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("Already in order", () => {
    const sortThis = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];
    const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("All on the left", () => {
    const sortThis = ["Sony X", "Samsung Y", "Sony X", "Dell XX2"];
    const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });

  it("All on the right", () => {
    const sortThis = ["Dell XX2", "Sony X", "Samsung Y", "Sony X"];
    const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];

    expect(quickSort(sortThis)).toStrictEqual(sorted);
  });
});
