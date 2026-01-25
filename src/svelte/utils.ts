export const styleToString = (
  obj: Record<string, string | undefined>,
): string => {
  return Object.keys(obj).reduce((acc, k) => {
    const value = obj[k];
    if (value == null) {
      return acc;
    }
    return acc + `${k}:${value};`;
  }, "");
};

export const defaultGetKey = (_data: unknown, i: number) => "_" + i;
