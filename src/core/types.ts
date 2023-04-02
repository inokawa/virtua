export type DeepReadonly<T> = {
  readonly [key in keyof T]: DeepReadonly<T[key]>;
};

export type Writeable<T> = {
  -readonly [key in keyof T]: Writeable<T[key]>;
};
