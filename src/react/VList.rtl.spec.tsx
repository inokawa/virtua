import { afterEach, it, expect, describe } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { VList } from "./VList";
import { setupJsDomEnv } from "../../scripts/spec";

Object.defineProperty(CSSStyleDeclaration.prototype, "direction", {
  get() {
    return "rtl";
  },
});

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupJsDomEnv({
  itemWidth: ITEM_WIDTH,
  itemHeight: ITEM_HEIGHT,
  viewportHeight: VIEWPORT_HEIGHT,
});

afterEach(cleanup);

describe("rtl", () => {
  it("should not work in vertical", () => {
    const { asFragment } = render(
      <VList>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should work in horizontal", () => {
    const { asFragment } = render(
      <VList horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
