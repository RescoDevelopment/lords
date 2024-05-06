import { Some } from "@types";
const Some = <T>(value: T): Some<T> => ({ tag: "Some", value });
export default Some;
