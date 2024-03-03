import { afterEach, it, expect, describe } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { WindowVirtualizer } from "./WindowVirtualizer";
import { setupJsDomEnv } from "../../scripts/spec";

Object.defineProperty(CSSStyleDeclaration.prototype, "direction", {
  get() {
    return "rtl";
  },
});

setupJsDomEnv({
  itemWidth: 100,
  itemHeight: 50,
});

afterEach(cleanup);

describe("rtl", () => {
  it("should not work in vertical", () => {
    const { asFragment } = render(
      <WindowVirtualizer>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should work in horizontal", () => {
    const { asFragment } = render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
