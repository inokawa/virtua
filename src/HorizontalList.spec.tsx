import { afterEach, it, expect } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";

import { HorizontalList } from ".";

const ITEM_WIDTH = 50;
const ITEM_HEIGHT = 100;
const VIEWPORT_WIDTH = ITEM_WIDTH * 10;

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

    if (this.first) {
      // HACK: first observing should be root
      const entry: Pick<ResizeObserverEntry, "contentRect" | "target"> = {
        contentRect: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: VIEWPORT_WIDTH,
          height: ITEM_HEIGHT,
          x: 0,
          y: 0,
          toJSON() {},
        },
        target: e,
      };
      this.callback([entry] as any, this);
      this.first = false;
      return;
    }

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
  observers = new Set<Element>();
  callback: IntersectionObserverCallback;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  disconnect() {
    this.observers.clear();
  }
  observe(e: HTMLElement) {
    this.observers.add(e);
  }
  unobserve() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = "";
  thresholds = [];
};

afterEach(cleanup);

it("should render 1 children", async () => {
  const { asFragment } = render(
    <HorizontalList>
      <div>0</div>
    </HorizontalList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render 5 children", () => {
  const { asFragment } = render(
    <HorizontalList>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </HorizontalList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render many children", () => {
  const { asFragment } = render(
    <HorizontalList>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </HorizontalList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render non elements", () => {
  const { asFragment } = render(
    <HorizontalList>
      string
      {true}
      {false}
      {null}
      {undefined}
      {123}
    </HorizontalList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render fragments", () => {
  const { asFragment } = render(
    <HorizontalList>
      <>
        <div>fragment</div>
        <div>fragment</div>
        <div>fragment</div>
      </>
      <>
        <div>fragment</div>
      </>
    </HorizontalList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render component", () => {
  const Comp = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  const { asFragment } = render(
    <HorizontalList>
      <Comp>component</Comp>
      <Comp>component</Comp>
      <Comp>component</Comp>
    </HorizontalList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with given width / height", () => {
  const { asFragment } = render(
    <HorizontalList style={{ width: 100, height: 800 }}>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </HorizontalList>
  );
  expect(asFragment()).toMatchSnapshot();
});
