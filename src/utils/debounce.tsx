export const debounce = (func: (...params: any[]) => void, n: number) => {
  let timer: NodeJS.Timeout | undefined = undefined;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), n);
  };
};
