export type Or<$Left, $Right> = $Left | $Right;
export type Optional<$Type> = $Type | undefined;

export type _Some<T> = {
  value: T;
};

export type Option<T> = _Some<T> | undefined;

export type ErrorPath = `${string}/${string}` | `${string}/${string}/${string}`;
