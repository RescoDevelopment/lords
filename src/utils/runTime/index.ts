export const runTime = <T extends (...args: any[]) => any>(
  fn: T,
  count: number,
  ...args: Parameters<T>[]
): number => {
  const start = performance.now();

  for (let i = 0; i < count; i++) {
    fn(...args);
  }

  return performance.now() - start;
};
