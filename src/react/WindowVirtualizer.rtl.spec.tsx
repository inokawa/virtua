import { afterEach, it, expect, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { setupResizeJsDom } from "../../scripts/spec.js";
import { render } from "../../scripts/spec-react.js";

Object.defineProperty(CSSStyleDeclaration.prototype, "direction", {
  get() {
    return "rtl";
  },
});

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
});

afterEach(cleanup);

describe("rtl", async () => {
  it("should not work in vertical", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should work in horizontal", async () => {
    const { asFragment } = await render(
      <WindowVirtualizer horizontal>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WindowVirtualizer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
