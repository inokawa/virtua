import {
  ACTION_ITEM_RESIZE,
  ACTION_VIEWPORT_RESIZE,
  type VirtualStore,
} from "./store.js";
import {
  createResizeObserver,
  createScrollObserver,
  type ScrollObserver,
} from "./observer.js";
import { type ItemResize } from "./types.js";
import { createPromise, NULL, timeout } from "./utils.js";
import { getCurrentDocument, getCurrentWindow } from "./environment.js";

/**
 * @internal
 */
export interface Driver {
  $observe(containerElement: HTMLElement, viewport?: HTMLElement): void;
  $dispose(): void;
  $observeItem(el: HTMLElement, index: number): () => void;
  $scroll(getTargetOffset: () => number, smooth?: boolean): void;
  $effect(): void;
  $getBaseOffset(): number;
}

/**
 * @internal
 */
export type DriverFactory = (
  store: VirtualStore,
  isHorizontal: boolean,
) => Driver;

/**
 * @internal
 */
export const createContainerDriver: DriverFactory = (store, isHorizontal) => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();

  const mountedIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    for (const {
      target,
      contentRect: { width, height },
    } of entries) {
      if (target === viewportElement) {
        // https://github.com/inokawa/virtua/issues/964
        if (width || height) {
          store.$update(ACTION_VIEWPORT_RESIZE, isHorizontal ? width : height);
        }
        // Skip zero-sized rects that may be observed under `display: none` style
      } else if ((target as HTMLElement).offsetParent) {
        const index = mountedIndexes.get(target);
        if (index != NULL) {
          resizes.push([index, isHorizontal ? width : height]);
        }
      }
    }

    if (resizes.length) {
      store.$update(ACTION_ITEM_RESIZE, resizes);
    }
  });

  return {
    $observe(containerElement, viewport = containerElement.parentElement!) {
      resizeObserver._observe((viewportElement = viewport));

      scrollObserver = createScrollObserver(
        store,
        viewport,
        viewport,
        isHorizontal,
        isHorizontal && getComputedStyle(viewport).direction === "rtl",
        () => {
          const overflowKey = isHorizontal ? "overflowX" : "overflowY";
          // If we update scroll position while touching on iOS, the position will be reverted.
          // However iOS WebKit fires touch events only once at the beginning of momentum scrolling.
          // That means we have no reliable way to confirm still touched or not if user touches more than once during momentum scrolling...
          // This is a hack for the suspectable situations, inspired by https://github.com/prud/ios-overflow-scroll-to-top
          const style = viewport.style;
          const prev = style[overflowKey];
          style[overflowKey] = "hidden";
          timeout(() => {
            style[overflowKey] = prev;
          });
        },
      );

      initialized[1](true);
    },
    $dispose() {
      resizeObserver._dispose();
      scrollObserver && scrollObserver._dispose();
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $observeItem(el, index) {
      mountedIndexes.set(el, index);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    async $scroll(getTargetOffset, smooth) {
      // Wait for element assign. The element may be undefined if scrollRef prop is used and scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        scrollObserver!._scroll(getTargetOffset, smooth);
      }
    },
    $effect() {
      scrollObserver && scrollObserver._fixScrollJump();
    },
    $getBaseOffset: store.$getStartSpacerSize,
  };
};

/**
 * @internal
 */
export const createWindowDriver: DriverFactory = (store, isHorizontal) => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let cleanupOnWindowResize: (() => void) | undefined;
  let getBaseOffset: (() => number) | undefined;
  let onViewportResize: (() => void) | undefined;
  let initialized = createPromise<boolean>();

  const mountedIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    for (const {
      target,
      contentRect: { width, height },
    } of entries) {
      if (target === viewportElement) {
        // Scrollbar appearance/disappearance changes client size without firing window resize events
        onViewportResize && onViewportResize();
        // Skip zero-sized rects that may be observed under `display: none` style
      } else if ((target as HTMLElement).offsetParent) {
        const index = mountedIndexes.get(target);
        if (index != NULL) {
          resizes.push([index, isHorizontal ? width : height]);
        }
      }
    }

    if (resizes.length) {
      store.$update(ACTION_ITEM_RESIZE, resizes);
    }
  });

  return {
    $observe(container) {
      const document = getCurrentDocument(container);
      const window = getCurrentWindow(document);
      const viewport = (viewportElement =
        document.scrollingElement! as HTMLElement);
      // Detect RTL document
      const isRtl =
        isHorizontal && getComputedStyle(viewport).direction === "rtl";

      const calcOffsetToViewport = (
        node: HTMLElement,
        viewport: HTMLElement,
        until: HTMLElement,
        isHorizontal: boolean,
        offset: number = 0,
      ): number => {
        // TODO calc offset only when it changes (maybe impossible)
        const offsetKey = isHorizontal ? "offsetLeft" : "offsetTop";
        const offsetSum =
          offset +
          (isRtl
            ? viewport.clientWidth - node[offsetKey] - node.offsetWidth
            : node[offsetKey]);

        const parent = node.offsetParent;
        if (node === until || !parent) {
          return offsetSum;
        }

        return calcOffsetToViewport(
          parent as HTMLElement,
          viewport,
          until,
          isHorizontal,
          offsetSum,
        );
      };

      const baseOffset = (getBaseOffset = () => {
        return calcOffsetToViewport(
          container,
          viewport,
          document.body,
          isHorizontal,
        );
      });

      const onWindowResize = (onViewportResize = () => {
        store.$update(
          ACTION_VIEWPORT_RESIZE,
          viewport[isHorizontal ? "clientWidth" : "clientHeight"],
        );
      });
      window.addEventListener("resize", onWindowResize);

      // https://github.com/inokawa/virtua/issues/792
      resizeObserver._observe(viewport);

      cleanupOnWindowResize = () => {
        window.removeEventListener("resize", onWindowResize);
      };

      // TODO support case two window scrollers exist in the same view
      scrollObserver = createScrollObserver(
        store,
        window,
        viewport,
        isHorizontal,
        isRtl,
        NULL,
        baseOffset,
      );

      initialized[1](true);
    },
    $dispose() {
      cleanupOnWindowResize && cleanupOnWindowResize();
      resizeObserver._dispose();
      scrollObserver && scrollObserver._dispose();
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $observeItem(el, index) {
      mountedIndexes.set(el, index);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    async $scroll(getTargetOffset, smooth) {
      // Wait for element assign. The element may be undefined if scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        scrollObserver!._scroll(getTargetOffset, smooth);
      }
    },
    $effect() {
      scrollObserver && scrollObserver._fixScrollJump();
    },
    $getBaseOffset() {
      // Calculate target scroll position including container's offset from document
      return getBaseOffset!();
    },
  };
};

/**
 * @internal
 */
export type GridDriver = {
  $scroll(isHorizontal: boolean, getTargetOffset: () => number): void;
  $observe(containerElement: HTMLElement): void;
  $dispose(): void;
  $observeItem(
    el: HTMLElement,
    rowIndex: number | undefined,
    colIndex: number | undefined,
  ): () => void;
  $effect(): void;
};

/**
 * @internal
 */
export const createContainerGridDriver = (
  rowStore: VirtualStore,
  colStore: VirtualStore,
): GridDriver => {
  let viewportElement: HTMLElement | undefined;
  let rowScrollObserver: ScrollObserver | undefined;
  let colScrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();

  const mountedRowIndexes = new WeakMap<Element, number>();
  const mountedColIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const rowResizes: ItemResize[] = [];
    const colResizes: ItemResize[] = [];
    for (const {
      target,
      contentRect: { width, height },
    } of entries) {
      if (target === viewportElement) {
        // https://github.com/inokawa/virtua/issues/964
        if (width || height) {
          rowStore.$update(ACTION_VIEWPORT_RESIZE, height);
          colStore.$update(ACTION_VIEWPORT_RESIZE, width);
        }
        // Skip zero-sized rects that may be observed under `display: none` style
      } else if ((target as HTMLElement).offsetParent) {
        const rowIndex = mountedRowIndexes.get(target);
        const colIndex = mountedColIndexes.get(target);
        if (rowIndex != NULL) {
          rowResizes.push([rowIndex, height]);
        }
        if (colIndex != NULL) {
          colResizes.push([colIndex, width]);
        }
      }
    }

    if (rowResizes.length) {
      rowStore.$update(ACTION_ITEM_RESIZE, rowResizes);
    }
    if (colResizes.length) {
      colStore.$update(ACTION_ITEM_RESIZE, colResizes);
    }
  });

  return {
    async $scroll(isHorizontal, getTargetOffset) {
      // Wait for element assign. The element may be undefined if scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        (isHorizontal ? colScrollObserver : rowScrollObserver)!._scroll(
          getTargetOffset,
        );
      }
    },
    $observe(containerElement) {
      const viewport = (viewportElement = containerElement.parentElement!);
      resizeObserver._observe(viewport);

      const observe = (store: VirtualStore, isHorizontal: boolean) =>
        createScrollObserver(
          store,
          viewport,
          viewport,
          isHorizontal,
          isHorizontal && getComputedStyle(viewport).direction === "rtl",
          () => {
            const overflowKey = isHorizontal ? "overflowX" : "overflowY";
            // If we update scroll position while touching on iOS, the position will be reverted.
            // However iOS WebKit fires touch events only once at the beginning of momentum scrolling.
            // That means we have no reliable way to confirm still touched or not if user touches more than once during momentum scrolling...
            // This is a hack for the suspectable situations, inspired by https://github.com/prud/ios-overflow-scroll-to-top
            const style = viewport.style;
            const prev = style[overflowKey];
            style[overflowKey] = "hidden";
            timeout(() => {
              style[overflowKey] = prev;
            });
          },
        );
      rowScrollObserver = observe(rowStore, false);
      colScrollObserver = observe(colStore, true);

      initialized[1](true);
    },
    $dispose() {
      resizeObserver._dispose();
      rowScrollObserver && rowScrollObserver._dispose();
      colScrollObserver && colScrollObserver._dispose();
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $observeItem(el, rowIndex, colIndex) {
      // An undefined index skips reporting the size of that axis, for cells whose row/column size is given instead of measured.
      if (rowIndex != NULL) {
        mountedRowIndexes.set(el, rowIndex);
      }
      if (colIndex != NULL) {
        mountedColIndexes.set(el, colIndex);
      }
      resizeObserver._observe(el);
      return () => {
        mountedRowIndexes.delete(el);
        mountedColIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    $effect() {
      rowScrollObserver && rowScrollObserver._fixScrollJump();
      colScrollObserver && colScrollObserver._fixScrollJump();
    },
  };
};
