import { it, expect, describe, onTestFinished } from "vitest";
import { Virtualizer } from "./Virtualizer.js";
import { forwardRef, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import { type CustomItemComponentProps } from "./types.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/react.js";
import { range } from "../../spec/utils.js";
import { collectGarbage } from "../../spec/gc.js";

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

type Item = { id: number };
// the row element must hold the item itself: the element array of a render, not only its data, can be retained
const Row = ({ item }: { item: Item }) => <div>{item.id}</div>;
const DataList = ({ items }: { items: Item[] }) => (
  <div style={{ overflowY: "auto" }}>
    <Virtualizer data={items} ssrCount={10}>
      {(item) => <Row key={item.id} item={item} />}
    </Virtualizer>
  </div>
);
const ChildrenList = ({ items }: { items: Item[] }) => (
  <div style={{ overflowY: "auto" }}>
    <Virtualizer ssrCount={10}>
      {items.map((item) => (
        <Row key={item.id} item={item} />
      ))}
    </Virtualizer>
  </div>
);

it.each([
  ["data", DataList],
  ["children", ChildrenList],
])("should release the first render's %s once it is gone", async (_, List) => {
  const container = document.body.appendChild(document.createElement("div"));
  const root = createRoot(container);
  onTestFinished(() => {
    act(() => root.unmount());
    container.remove();
  });
  const show = (ui: ReactElement) => act(() => root.render(ui));
  const first = new WeakRef(range(50, (i) => ({ id: i })));
  const firstRow = new WeakRef(first.deref()![0]!);
  show(<List items={first.deref()!} />);
  // Development React keeps an Error per fiber for owner stacks, and V8 keeps the closure scope
  // of every frame in it alive; a row fiber from the first render, or one still listed in a
  // container fiber's deletions, would pin that render regardless. Each later list has new keys,
  // so the previous rows unmount, and two more renders let both container fibers drop their deletions.
  for (let generation = 1; generation <= 3; generation++) {
    show(<List items={range(50, (i) => ({ id: generation * 100 + i }))} />);
  }

  await collectGarbage();

  expect(first.deref()).toBeUndefined();
  expect(firstRow.deref()).toBeUndefined();
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
