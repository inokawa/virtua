import { it, expect, describe } from "vitest";
import { Virtualizer } from "./Virtualizer.js";
import { forwardRef } from "react";
import { type CustomItemComponentProps } from "./types.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/react.js";

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
  const items = Array.from({ length: 1000 }).map((_, i) => ({
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
          {Array.from({ length: 100 }).map((_, i) => (
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

  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <div style={{ width: 100, height: 800, overflowY: "auto" }}>
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
          {Array.from({ length: 100 }).map((_, i) => (
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

  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <div style={{ width: 100, height: 800, overflowX: "auto" }}>
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
});
