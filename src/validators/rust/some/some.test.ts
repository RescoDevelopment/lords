import { expect, test } from "vitest";
import Some from "@validators/rust/some";

test("Some: It should have tag Some", () => {
  const thisHasSome = Some("cs");
  expect(thisHasSome.tag).toBe("Some");
});
