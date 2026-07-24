/**
 * @jsxImportSource solid-js
 */
import { it, expect, describe, afterEach } from "vitest";
import { cleanup } from "@solidjs/testing-library";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { type JSX } from "solid-js";
import { render } from "../../spec/solid.js";

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

afterEach(cleanup);

describe("vertical", () => {
  it("should render 0 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={[]}>{(d) => <div>{d}</div>}</WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(1)}>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(5)}>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(100)}>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(10000)}>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = (props: { children: JSX.Element }) => (
      <div>{props.children}</div>
    );
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(3)}>
        {(d) => <Comp>{d}</Comp>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={[]} horizontal>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(1)} horizontal>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(5)} horizontal>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(100)} horizontal>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(10000)} horizontal>
        {(d) => <div>{d}</div>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = (props: { children: JSX.Element }) => (
      <div>{props.children}</div>
    );
    const { asFragment } = render(() => (
      <WindowVirtualizer data={range(3)} horizontal>
        {(d) => <Comp>{d}</Comp>}
      </WindowVirtualizer>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});
