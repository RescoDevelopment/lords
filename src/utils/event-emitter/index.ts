type Listener<T> = (v: T) => Promise<void>;
type Events = Record<string, unknown>;

const EventEmitter = <$Events extends Events>() => {
  const events = new Map<string, Set<Listener<unknown>>>();

  return {
    listen: <$Event extends keyof $Events>(
      eventName: $Event,
      listener: Listener<$Events[$Event]>,
    ) => {
      if (!events.has(eventName as any)) {
        events.set(eventName as any, new Set());
      }

      const listeners = events.get(eventName as any) as Set<Listener<any>>;

      listeners.add(listener);

      return () => {
        if (events.has(eventName as any)) {
          (events.get(eventName as any) as Set<Listener<any>>).delete(listener);
        }
      };
    },
    publish: async <$Event extends keyof $Events>(
      eventName: $Event,
      value: $Events[$Event],
    ) => {
      console.log(events);
      if (events.has(eventName as any)) {
        const listeners = events.get(eventName as any) as Set<Listener<any>>;

        for (const listener of listeners.values()) {
          await listener(value);
        }
      } else {
        throw Error(`Event ${eventName as any} doesn't exist`);
      }
    },
    clear: <$Event extends keyof $Events>(eventName: $Event) => {
      events.delete(eventName as any);
    },
  };
};

export default EventEmitter;
