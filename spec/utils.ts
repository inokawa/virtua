export const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export const range = <T = number>(
  length: number,
  cb: (i: number) => T = (i) => i as T,
): T[] => {
  const array: T[] = [];
  for (let i = 0; i < length; i++) {
    array.push(cb(i));
  }
  return array;
};
