import { afterEach, it, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Virtualizer } from ".";
import { setupJsDomEnv } from "../../scripts/spec";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupJsDomEnv({
  itemWidth: ITEM_WIDTH,
  itemHeight: ITEM_HEIGHT,
  viewportHeight: VIEWPORT_HEIGHT,
});

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
