import { afterEach, it, expect, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { forwardRef } from "react";
import { type CustomItemComponentProps } from "./types.js";
import { setupResizeJsDom } from "../../scripts/spec.js";
import { render } from "../../scripts/spec-react.js";

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
});

afterEach(cleanup);

it("should pass index to items", async () => {
  const Item = forwardRef<HTMLDivElement, CustomItemComponentProps>(
    ({ index, ...rest }, ref) => {
      return <div ref={ref} data-index={index} {...rest} />;
    },
  );
  const { asFragment } = await render(
    <WindowVirtualizer item={Item}>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </WindowVirtualizer>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with render prop", async () => {
  const items = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    label: "This is " + i,
  }));
  const { asFragment } = await render(
    <WindowVirtualizer data={items}>
      {(item) => {
        return <div key={item.id}>{item.label}</div>;
      }}
    </WindowVirtualizer>,
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("vertical", async () => {
  it("should render 1 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer>
        <div>0</div>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = await render(
      <WindowVirtualizer>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <div style={{ width: 100, height: 800 }}>
        <WindowVirtualizer>
          <div>0</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </WindowVirtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render 1 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        <div>0</div>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </WindowVirtualizer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <div style={{ width: 100, height: 800 }}>
        <WindowVirtualizer horizontal>
          <div>0</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </WindowVirtualizer>
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
