import { minLength, minValue, number, string } from "@the-minimal/validator";
import { expect, test } from "vitest";
import { yamlValidator, type ValidationFunction } from "./index";

test("yamlValidator - validate with valid YAML data", () => {
  const validator = yamlValidator();

  const yamlData = `
    value1: "cs"
    value2: 123
  `;

  const requirements: Record<string, ValidationFunction[]> = {
    value1: [string, minLength(2)],
    value2: [number, minValue(122)],
  };

  const result = validator.validate(yamlData, requirements);

  expect(result).toBe(true);
});

test("yamlValidator - validate with invalid YAML data", () => {
  const validator = yamlValidator();

  const yamlData = `
    value1: "cs"
    value2: "123"
  `;

  const stringval = (value: any) => {
    if (!(typeof value === "string")) {
      throw new Error("This is not a string!");
    }
  };

  const requirements: Record<string, ValidationFunction[]> = {
    value1: [stringval],
    value2: [stringval],
  };

  expect(() => validator.validate(yamlData, requirements)).toThrow();
});

test("yamlValidator - validate with missing key in YAML data", () => {
  const validator = yamlValidator();

  const yamlData = `
    value1: "cs"
  `;

  const requirements: Record<string, ValidationFunction[]> = {
    value1: [(value: any) => typeof value === "string"],
    value2: [(value: any) => typeof value === "number"],
  };

  expect(() => validator.validate(yamlData, requirements)).toThrowError(
    "Key 'value2' not found in YAML data"
  );
});
