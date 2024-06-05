import { describe, it, expect } from "vitest";
import { error, isError } from "./index";
import { ErrorPath } from "@types";

describe("Error Handling Functions", () => {
  describe("error function", () => {
    it("should throw an error object with the correct properties", () => {
      const provider = "TestProvider";
      const path = "value1/value2";
      const reason = "Something went wrong";

      const createError = error(provider);

      try {
        createError(path, reason);
      } catch (err) {
        expect(err).toEqual({
          provider,
          path,
          reason,
          ERROR: 1,
        });
      }
    });
  });

  describe("isError function", () => {
    it("should return true for error objects created by the error function", () => {
      const provider = "TestProvider";
      const path = "value1/value2" as ErrorPath;
      const reason = "Something went wrong";

      const createError = error(provider);

      let err;
      try {
        createError(path, reason);
      } catch (e) {
        err = e;
      }

      expect(isError(err)).toBe(true);
    });

    it("should return false for non-error objects", () => {
      const nonErrorObject = { some: "value" };
      expect(isError(nonErrorObject)).toBe(false);

      const anotherNonErrorObject = { ERROR: 0 };
      expect(isError(anotherNonErrorObject)).toBe(false);
    });
  });
});
