export type DeepReadonly<T> = {
  readonly [key in keyof T]: DeepReadonly<T[key]>;
};

export type Writeable<T> = {
  -readonly [key in keyof T]: Writeable<T[key]>;
};

export type ObserverHandle = {
  _init: (rootElement: HTMLElement, wrapperElement: HTMLElement) => () => void;
  _observe: (itemElement: HTMLElement, index: number) => () => void;
};
