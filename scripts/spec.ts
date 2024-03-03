export const setupJsDomEnv = ({
  viewportHeight,
  itemHeight,
  itemWidth,
}: {
  itemWidth: number;
  itemHeight: number;
  viewportHeight?: number;
}) => {
  // https://github.com/jsdom/jsdom/issues/1261#issuecomment-362928131
  Object.defineProperty(global.HTMLElement.prototype, "offsetParent", {
    get() {
      return this.parentNode;
    },
  });

  const createResizeObserverEntry = (
    e: HTMLElement,
    { width, height }: { width: number; height: number }
  ): ResizeObserverEntry => {
    const entry: Pick<ResizeObserverEntry, "contentRect" | "target"> = {
      contentRect: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: width,
        height: height,
        x: 0,
        y: 0,
        toJSON() {},
      },
      target: e,
    };
    return entry as any;
  };

  global.ResizeObserver = viewportHeight
    ? // overflow scroll
      class {
        first = false;
        constructor(private callback: ResizeObserverCallback) {}
        disconnect() {}
        observe(e: HTMLElement) {
          this.callback(
            [
              createResizeObserverEntry(e, {
                width: itemWidth,
                height: this.first ? viewportHeight : itemHeight,
              }),
            ],
            this
          );
          // HACK: first observing should be root
          this.first = false;
        }
        unobserve(_target: Element) {}
      }
    : // window scroll
      class {
        constructor(private callback: ResizeObserverCallback) {}
        disconnect() {}
        observe(e: HTMLElement) {
          this.callback(
            [
              createResizeObserverEntry(e, {
                width: itemWidth,
                height: itemHeight,
              }),
            ],
            this
          );
        }
        unobserve(_target: Element) {}
      };
};
