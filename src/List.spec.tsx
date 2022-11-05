import { afterEach, it, expect, describe } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";

import { List } from ".";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

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
          width: ITEM_HEIGHT,
          height: VIEWPORT_HEIGHT,
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

describe("layout === vertical", () => {
  it("should render 1 children", async () => {
    const { asFragment } = render(
      <List>
        <div>0</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <List>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render many children", () => {
    const { asFragment } = render(
      <List>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <List>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <List>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <List>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <List style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("layout === horizontal", () => {
  it("should render 1 children", async () => {
    const { asFragment } = render(
      <List layout="horizontal">
        <div>0</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(
      <List layout="horizontal">
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render many children", () => {
    const { asFragment } = render(
      <List layout="horizontal">
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", () => {
    const { asFragment } = render(
      <List layout="horizontal">
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", () => {
    const { asFragment } = render(
      <List layout="horizontal">
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = render(
      <List layout="horizontal">
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const { asFragment } = render(
      <List layout="horizontal" style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
