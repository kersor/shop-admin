export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};