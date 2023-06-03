import {
  ACTION_ITEM_RESIZE,
  ACTION_WINDOW_RESIZE,
  ItemResize,
  VirtualStore,
} from "./store";
import { exists, once } from "./utils";

export const createResizer = (store: VirtualStore) => {
  let resized = false;
  let rootElement: HTMLElement | undefined;
  const sizeKey = store._isHorizontal() ? "width" : "height";
  const mountedIndexes = new WeakMap<Element, number>();

  // Initialize ResizeObserver lazily for SSR
  const getResizeObserver = once(() => {
    return new ResizeObserver((entries) => {
      // https://www.w3.org/TR/resize-observer/#intro
      const resizes: ItemResize[] = [];
      for (const { target, contentRect } of entries) {
        if (target === rootElement) {
          store._update(ACTION_WINDOW_RESIZE, contentRect[sizeKey]);
        } else {
          const index = mountedIndexes.get(target);
          if (exists(index)) {
            resizes.push([index, contentRect[sizeKey]]);
          }
        }
      }

      if (resizes.length) {
        store._update(ACTION_ITEM_RESIZE, resizes);
        resized = true;
      }
    });
  });

  return {
    _observeRoot(root: HTMLElement) {
      rootElement = root;
      const ro = getResizeObserver();
      ro.observe(root);
      return () => {
        ro.disconnect();
      };
    },
    _observeItem(el: HTMLElement, i: number) {
      const ro = getResizeObserver();
      mountedIndexes.set(el, i);
      ro.observe(el);
      return () => {
        mountedIndexes.delete(el);
        ro.unobserve(el);
      };
    },
    _isJustResized(): boolean {
      const prev = resized;
      resized = false;
      return prev;
    },
  };
};

export type Resizer = ReturnType<typeof createResizer>;
