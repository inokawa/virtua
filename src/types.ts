export type ObserverHandle = {
  _init: (rootElement: HTMLElement, wrapperElement: HTMLElement) => () => void;
  _observe: (itemElement: HTMLElement, index: number) => () => void;
};
