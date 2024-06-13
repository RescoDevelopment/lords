import { ErrorPath } from "@types";

export const error =
  (provider: string) => (path: ErrorPath, reason: string) => {
    console.error(`${provider}:${path}: ${reason}`);
    throw { provider, path, reason, ERROR: 1 };
  };

export const isError = (value: any) => value.ERROR == 1;
