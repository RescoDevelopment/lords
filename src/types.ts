export type Or<$Left, $Right> = $Left | $Right;
export type Optional<$Type> = $Type | undefined;

export type Some<T> = {
  readonly tag: "Some";
  readonly value: T;
};

export type None = { readonly tag: "None" };
export type Option<T> = Some<T> | None;
