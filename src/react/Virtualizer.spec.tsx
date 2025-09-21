import { afterEach, it, expect, vi } from "vitest";
import { render as _render, cleanup } from "@testing-library/react";
import { Virtualizer } from ".";
import { setupResizeJsDom } from "../../scripts/spec";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const render = (...args: Parameters<typeof _render>) => {
  const res = _render(...args);
  vi.runAllTicks();
  return res;
};

afterEach(cleanup);

it("should change components", () => {
  const { asFragment } = render(
    <div style={{ overflowY: "auto" }}>
      <Virtualizer as="ul" item="li">
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Virtualizer>
    </div>
  );
  expect(asFragment()).toMatchSnapshot();
});
