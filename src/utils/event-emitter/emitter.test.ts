import { expect, test } from "vitest";
import EventEmitter from "./index";

test("EventEmitter - listen and publish events", async () => {
  const emitter = EventEmitter<{
    event1: { name: string };
    event2: { name: string };
  }>();

  const listener1 = async ({ name }: { name: string }) => console.log(name);

  const unsubscribe1 = emitter.listen("event1", listener1);
  const unsubscribe2 = emitter.listen("event2", listener1);

  await emitter.publish("event1", { name: "data1" });
  await emitter.publish("event2", { name: "data1" });

  unsubscribe1();
  unsubscribe2();
});

test("EventEmitter - throw error for non-existing event", async () => {
  const emitter = EventEmitter();

  expect.assertions(1);
  try {
    await emitter.publish("nonExistingEvent", "data");
  } catch (error) {
    expect((error as any).message).toBe("Event nonExistingEvent doesn't exist");
  }
});
