export type ObserverHandle = {
  _init: (rootElement: HTMLElement) => () => void;
  _observe: (itemElement: HTMLElement, index: number) => () => void;
};
