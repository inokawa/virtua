/**
 * @jsxImportSource solid-js
 */
import { it, expect, describe } from "vitest";
import { Virtualizer } from "./Virtualizer.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { type JSX } from "solid-js";
import { render } from "../../spec/solid.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

it("should change components", () => {
  const { asFragment } = render(() => (
    <div style={{ "overflow-y": "auto" }}>
      <Virtualizer data={range(5)} as="ul" item="li">
        {(d) => <div>{d}</div>}
      </Virtualizer>
    </div>
  ));
  expect(asFragment()).toMatchSnapshot();
});

it("should render with keepMounted", () => {
  const { asFragment } = render(() => (
    <div style={{ "overflow-y": "auto" }}>
      <Virtualizer
        data={range(100)}
        keepMounted={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
      >
        {(d) => <div>{d}</div>}
      </Virtualizer>
    </div>
  ));
  expect(asFragment()).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", () => {
    const { asFragment } = render(() => (
      <div style={{ "overflow-y": "auto" }}>
        <Virtualizer data={[]}>{(d) => <div>{d}</div>}</Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(() => (
      <div style={{ "overflow-y": "auto" }}>
        <Virtualizer data={range(5)}>{(d) => <div>{d}</div>}</Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(() => (
      <div style={{ "overflow-y": "auto" }}>
        <Virtualizer data={range(100)}>{(d) => <div>{d}</div>}</Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = (props: { children: JSX.Element }) => (
      <div>{props.children}</div>
    );
    const { asFragment } = render(() => (
      <div style={{ "overflow-y": "auto" }}>
        <Virtualizer data={range(3)}>{(d) => <Comp>{d}</Comp>}</Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", () => {
    const { asFragment } = render(() => (
      <div style={{ "overflow-x": "auto" }}>
        <Virtualizer data={[]} horizontal>
          {(d) => <div>{d}</div>}
        </Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(() => (
      <div style={{ "overflow-x": "auto" }}>
        <Virtualizer data={range(5)} horizontal>
          {(d) => <div>{d}</div>}
        </Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(() => (
      <div style={{ "overflow-x": "auto" }}>
        <Virtualizer data={range(100)} horizontal>
          {(d) => <div>{d}</div>}
        </Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = (props: { children: JSX.Element }) => (
      <div>{props.children}</div>
    );
    const { asFragment } = render(() => (
      <div style={{ "overflow-x": "auto" }}>
        <Virtualizer data={range(3)} horizontal>
          {(d) => <Comp>{d}</Comp>}
        </Virtualizer>
      </div>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});
