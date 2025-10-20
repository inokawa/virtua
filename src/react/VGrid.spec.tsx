import { afterEach, it, expect, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import { VGrid } from "./VGrid.js";
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
    <VGrid
      id="id"
      className="class"
      tabIndex={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
      row={100}
      col={100}
    >
      {({ rowIndex, colIndex }) => (
        <div>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("grid", async () => {
  it("should render 1 children", async () => {
    const { asFragment } = await render(
      <VGrid row={1} col={1}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 4x4 children", async () => {
    const { asFragment } = await render(
      <VGrid row={4} col={4}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 100x100 children", async () => {
    const { asFragment } = await render(
      <VGrid row={100} col={100}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 10000x10000 children", async () => {
    const { asFragment } = await render(
      <VGrid row={10000} col={10000}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render non elements", async () => {
    const { asFragment } = await render(
      <VGrid row={6} col={1}>
        {({ rowIndex }) =>
          rowIndex === 0
            ? "string"
            : rowIndex === 1
            ? true
            : rowIndex === 2
            ? false
            : rowIndex === 3
            ? null
            : rowIndex === 4
            ? undefined
            : 123
        }
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render fragments", async () => {
    const { asFragment } = await render(
      <VGrid row={2} col={1}>
        {({ rowIndex }) =>
          rowIndex === 0 ? (
            <>
              <div>fragment</div>
              <div>fragment</div>
              <div>fragment</div>
            </>
          ) : (
            <>
              <div>fragment</div>
            </>
          )
        }
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    );
    const { asFragment } = await render(
      <VGrid row={100} col={100}>
        {({ rowIndex, colIndex }) => (
          <Comp>
            {rowIndex} / {colIndex}
          </Comp>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <VGrid row={4} col={4} style={{ width: 100, height: 100 }}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
