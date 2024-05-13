import { _Some } from "../../../types";
export const Some = <T>(value: T): _Some<T> => ({ tag: "Some", value });
