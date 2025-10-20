import { afterEach, it, expect, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import { VList } from "./VList.js";
import { forwardRef } from "react";
import { CustomItemComponentProps } from "./types.js";
import { setupResizeJsDom } from "../../scripts/spec.js";
import { render } from "../../scripts/spec-react.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

afterEach(cleanup);

it("should pass attributes to element", async () => {
  const { asFragment } = await render(
    <VList
      id="id"
      className="class"
      tabIndex={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
    >
      <div>0</div>
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should pass index to items", async () => {
  const Item = forwardRef<HTMLDivElement, CustomItemComponentProps>(
    ({ index, ...rest }, ref) => {
      return <div ref={ref} data-index={index} {...rest} />;
    }
  );
  const { asFragment } = await render(
    <VList item={Item}>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with render prop", async () => {
  const items = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    label: "This is " + i,
  }));
  const { asFragment } = await render(
    <VList data={items}>
      {(item) => {
        return <div key={item.id}>{item.label}</div>;
      }}
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const { asFragment } = await render(
    <VList keepMounted={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </VList>
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("vertical", async () => {
  it("should render 0 children", async () => {
    const { asFragment } = await render(<VList>{[]}</VList>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { asFragment } = await render(
      <VList>
        <div>0</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { asFragment } = await render(
      <VList>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { asFragment } = await render(
      <VList>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { asFragment } = await render(
      <VList>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", async () => {
    const { asFragment } = await render(
      <VList>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", async () => {
    const { asFragment } = await render(
      <VList>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = await render(
      <VList>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <VList style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render 1 children", async () => {
    const { asFragment } = await render(
      <VList horizontal>
        <div>0</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { asFragment } = await render(
      <VList horizontal>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { asFragment } = await render(
      <VList horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { asFragment } = await render(
      <VList horizontal>
        {Array.from({ length: 10000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", async () => {
    const { asFragment } = await render(
      <VList horizontal>
        string
        {true}
        {false}
        {null}
        {undefined}
        {123}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", async () => {
    const { asFragment } = await render(
      <VList horizontal>
        <>
          <div>fragment</div>
          <div>fragment</div>
          <div>fragment</div>
        </>
        <>
          <div>fragment</div>
        </>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = await render(
      <VList horizontal>
        <Comp>component</Comp>
        <Comp>component</Comp>
        <Comp>component</Comp>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <VList horizontal style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("reverse", async () => {
  it("should render many items", async () => {
    const { asFragment } = await render(
      <VList reverse>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
