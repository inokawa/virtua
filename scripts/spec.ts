export const setupResizeJsDom = ({
  itemSize,
  viewportSize,
}: {
  itemSize: { width: number; height: number };
  viewportSize?: { width: number; height: number };
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

  global.ResizeObserver = class {
    private flushing = false;
    private queues: ResizeObserverEntry[] = [];
    constructor(private callback: ResizeObserverCallback) {}
    disconnect() {}
    observe(e: HTMLElement) {
      const overflowStyle =
        e.style.overflow || e.style.overflowY || e.style.overflowX;
      if (overflowStyle.includes("scroll") || overflowStyle.includes("auto")) {
        if (!viewportSize) return;
        this.queues.push(createResizeObserverEntry(e, viewportSize));
      } else {
        this.queues.push(createResizeObserverEntry(e, itemSize));
      }

      if (!this.flushing) {
        this.flushing = true;
        queueMicrotask(() => {
          this.flushing = false;
          const queues = this.queues;
          this.queues = [];
          this.callback(queues, this);
        });
      }
    }
    unobserve(_target: Element) {}
  };
};
