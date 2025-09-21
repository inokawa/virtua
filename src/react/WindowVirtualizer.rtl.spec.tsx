import { afterEach, it, expect, describe, vi } from "vitest";
import { render as _render, cleanup } from "@testing-library/react";
import { WindowVirtualizer } from "./WindowVirtualizer";
import { setupResizeJsDom } from "../../scripts/spec";

Object.defineProperty(CSSStyleDeclaration.prototype, "direction", {
  get() {
    return "rtl";
  },
});

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
});

const render = (...args: Parameters<typeof _render>) => {
  const res = _render(...args);
  vi.runAllTicks();
  return res;
};

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
