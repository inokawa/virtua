import { afterEach, it, expect, describe, jest } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";
import { VGrid } from "./VGrid";

jest.mock("../core/environment", () => {
  const originalModule = jest.requireActual("../core/environment");
  return {
    ...(originalModule as any),
    isRTLDocument: () => true,
  };
});

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

// https://github.com/jsdom/jsdom/issues/1261#issuecomment-362928131
Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  get() {
    return this.parentNode;
  },
});

global.ResizeObserver = class {
  observers = new Set<Element>();
  callback: ResizeObserverCallback;
  first = false;
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }
  disconnect() {
    this.observers.clear();
  }
  observe(e: HTMLElement) {
    this.observers.add(e);

    const entry: Pick<ResizeObserverEntry, "contentRect" | "target"> = {
      contentRect: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: ITEM_WIDTH,
        height: this.first ? VIEWPORT_HEIGHT : ITEM_HEIGHT,
        x: 0,
        y: 0,
        toJSON() {},
      },
      target: e,
    };
    this.callback([entry] as any, this);
    // HACK: first observing should be root
    this.first = false;
  }
  unobserve(_target: Element) {}
};

afterEach(cleanup);

describe("rtl", () => {
  it("should work", () => {
    const { asFragment } = render(
      <VGrid row={100} col={100}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
