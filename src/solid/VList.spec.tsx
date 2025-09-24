/**
 * @jsxImportSource solid-js
 */
import { it, expect, describe, afterEach, vi } from "vitest";
import { render as _render, cleanup } from "@solidjs/testing-library";
import { VList } from "./VList";
import { setupResizeJsDom } from "../../scripts/spec";
import { type JSX } from "solid-js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

const render = (...args: Parameters<typeof _render>) => {
  const res = _render(...args);
  vi.runAllTicks();
  return res;
};

afterEach(cleanup);

it("should pass attributes to element", () => {
  const wrapper = render(() => (
    <VList
      data={range(1)}
      id="id"
      class="class"
      tab-index={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
    >
      {(d) => <div>{d}</div>}
    </VList>
  ));
  expect(wrapper.baseElement).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", () => {
    const wrapper = render(() => (
      <VList data={[]}>{(d) => <div>{d}</div>}</VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1 children", () => {
    const wrapper = render(() => (
      <VList data={range(1)}>{(d) => <div>{d}</div>}</VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const wrapper = render(() => (
      <VList data={range(5)}>{(d) => <div>{d}</div>}</VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const wrapper = render(() => (
      <VList data={range(100)}>{(d) => <div>{d}</div>}</VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const wrapper = render(() => (
      <VList data={range(1000)}>{(d) => <div>{d}</div>}</VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const wrapper = render(() => (
      <VList data={range(10000)}>{(d) => <div>{d}</div>}</VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = (props: { children: JSX.Element }) => (
      <div>{props.children}</div>
    );
    const { asFragment } = render(() => (
      <VList data={range(3)}>{(d) => <Comp>{d}</Comp>}</VList>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const wrapper = render(() => (
      <VList data={range(5)} style={{ width: "100px", height: "800px" }}>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", () => {
    const wrapper = render(() => (
      <VList data={[]} horizontal>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1 children", () => {
    const wrapper = render(() => (
      <VList data={range(1)} horizontal>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const wrapper = render(() => (
      <VList data={range(5)} horizontal>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const wrapper = render(() => (
      <VList data={range(100)} horizontal>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const wrapper = render(() => (
      <VList data={range(1000)} horizontal>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const wrapper = render(() => (
      <VList data={range(10000)} horizontal>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = (props: { children: JSX.Element }) => (
      <div>{props.children}</div>
    );
    const { asFragment } = render(() => (
      <VList data={range(3)} horizontal>
        {(d) => <Comp>{d}</Comp>}
      </VList>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const wrapper = render(() => (
      <VList
        data={range(5)}
        style={{ width: "100px", height: "800px" }}
        horizontal
      >
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(wrapper.baseElement).toMatchSnapshot();
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
