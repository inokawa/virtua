import { it, expect, describe, vi } from "vitest";
import { Virtualizer } from "./Virtualizer.js";
import { createRef, forwardRef, StrictMode } from "react";
import { render as renderSync } from "@testing-library/react";
import { type CustomItemComponentProps } from "./types.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/react.js";
import { range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

it("should change components", async () => {
  const { asFragment } = await render(
    <div style={{ overflowY: "auto" }}>
      <Virtualizer as="ul" item="li">
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Virtualizer>
    </div>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should pass index to items", async () => {
  const Item = forwardRef<HTMLDivElement, CustomItemComponentProps>(
    ({ index, ...rest }, ref) => {
      return <div ref={ref} data-index={index} {...rest} />;
    },
  );
  const { asFragment } = await render(
    <div style={{ overflowY: "auto" }}>
      <Virtualizer item={Item}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Virtualizer>
    </div>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with render prop", async () => {
  const items = range(1000, (i) => ({
    id: i,
    label: "This is " + i,
  }));
  const { asFragment } = await render(
    <div style={{ overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(item) => {
          return <div key={item.id}>{item.label}</div>;
        }}
      </Virtualizer>
    </div>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const { asFragment } = await render(
    <div style={{ overflowY: "auto" }}>
      <Virtualizer keepMounted={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}>
        {range(100, (i) => (
          <div key={i}>{i}</div>
        ))}
      </Virtualizer>
    </div>,
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("scrollRef observation", () => {
  it("should observe a parent's ref after it is assigned in Strict Mode", async () => {
    const scrollRef = createRef<HTMLDivElement>();
    const observe = vi.spyOn(ResizeObserver.prototype, "observe");
    try {
      const { unmount } = await render(
        <StrictMode>
          <div ref={scrollRef} style={{ overflowY: "auto" }}>
            <Virtualizer scrollRef={scrollRef}>
              <div>0</div>
            </Virtualizer>
          </div>
        </StrictMode>,
      );
      expect(
        observe.mock.calls.filter(([el]) => el === scrollRef.current),
      ).toHaveLength(1);
      unmount();
    } finally {
      observe.mockRestore();
    }
  });

  it("should not observe a retained scrollRef after unmounting before the microtask", () => {
    const scrollRef = { current: document.createElement("div") };
    const observe = vi.spyOn(ResizeObserver.prototype, "observe");
    try {
      const { unmount } = renderSync(
        <Virtualizer scrollRef={scrollRef}>
          <div>0</div>
        </Virtualizer>,
      );
      unmount();
      vi.runAllTicks();
      expect(
        observe.mock.calls.filter(([el]) => el === scrollRef.current),
      ).toHaveLength(0);
    } finally {
      observe.mockRestore();
    }
  });

  it("should ignore a scrollRef cleared before the microtask", () => {
    const scrollRef: { current: HTMLDivElement | null } = {
      current: document.createElement("div"),
    };
    const { unmount } = renderSync(
      <Virtualizer scrollRef={scrollRef}>
        <div>0</div>
      </Virtualizer>,
    );
    scrollRef.current = null;
    expect(() => vi.runAllTicks()).not.toThrow();
    unmount();
  });
});

describe("vertical", async () => {
  it("should render 0 children", async () => {
    const { asFragment } = await render(
      <div style={{ overflowY: "auto" }}>
        <Virtualizer>{[]}</Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { asFragment } = await render(
      <div style={{ overflowY: "auto" }}>
        <Virtualizer>
          <div>0</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { asFragment } = await render(
      <div style={{ overflowY: "auto" }}>
        <Virtualizer>
          {range(100, (i) => (
            <div key={i}>{i}</div>
          ))}
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", async () => {
    const { asFragment } = await render(
      <div style={{ overflowY: "auto" }}>
        <Virtualizer>
          string
          {true}
          {false}
          {null}
          {undefined}
          {123}
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", async () => {
    const { asFragment } = await render(
      <div style={{ overflowY: "auto" }}>
        <Virtualizer>
          <>
            <div>fragment</div>
            <div>fragment</div>
            <div>fragment</div>
          </>
          <>
            <div>fragment</div>
          </>
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = await render(
      <div style={{ overflowY: "auto" }}>
        <Virtualizer>
          <Comp>component</Comp>
          <Comp>component</Comp>
          <Comp>component</Comp>
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render 0 children", async () => {
    const { asFragment } = await render(
      <div style={{ overflowX: "auto" }}>
        <Virtualizer horizontal>{[]}</Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { asFragment } = await render(
      <div style={{ overflowX: "auto" }}>
        <Virtualizer horizontal>
          <div>0</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { asFragment } = await render(
      <div style={{ overflowX: "auto" }}>
        <Virtualizer horizontal>
          {range(100, (i) => (
            <div key={i}>{i}</div>
          ))}
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", async () => {
    const { asFragment } = await render(
      <div style={{ overflowX: "auto" }}>
        <Virtualizer horizontal>
          string
          {true}
          {false}
          {null}
          {undefined}
          {123}
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", async () => {
    const { asFragment } = await render(
      <div style={{ overflowX: "auto" }}>
        <Virtualizer horizontal>
          <>
            <div>fragment</div>
            <div>fragment</div>
            <div>fragment</div>
          </>
          <>
            <div>fragment</div>
          </>
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = await render(
      <div style={{ overflowX: "auto" }}>
        <Virtualizer horizontal>
          <Comp>component</Comp>
          <Comp>component</Comp>
          <Comp>component</Comp>
        </Virtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
