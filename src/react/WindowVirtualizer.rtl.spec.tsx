import { afterEach, it, expect, describe } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";
import { WindowVirtualizer } from "./WindowVirtualizer";

Object.defineProperty(CSSStyleDeclaration.prototype, "direction", {
  get() {
    return "rtl";
  },
});

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;

// https://github.com/jsdom/jsdom/issues/1261#issuecomment-362928131
Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  get() {
    return this.parentNode;
  },
});

global.ResizeObserver = class {
  constructor(private callback: ResizeObserverCallback) {}
  disconnect() {}
  observe(e: HTMLElement) {
    const entry: Pick<ResizeObserverEntry, "contentRect" | "target"> = {
      contentRect: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        x: 0,
        y: 0,
        toJSON() {},
      },
      target: e,
    };
    this.callback([entry] as any, this);
  }
  unobserve(_target: Element) {}
};
global.IntersectionObserver = class {
  constructor(_callback: IntersectionObserverCallback) {}
  disconnect() {}
  observe(_e: HTMLElement) {}
  unobserve() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = "";
  thresholds = [];
};

afterEach(cleanup);

describe("rtl", () => {
  it("should not work in vertical", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should work in horizontal", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
