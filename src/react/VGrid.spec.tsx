import { afterEach, it, expect, describe } from "vitest";
import { cleanup, waitFor } from "@testing-library/react";
import { VGrid } from "./VGrid.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/react.js";

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
    </VGrid>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should not render stale indexes while dimensions shrink", async () => {
  const renderCell =
    (rowLimit: number, colLimit: number) =>
    ({ rowIndex, colIndex }: { rowIndex: number; colIndex: number }) => {
      if (rowIndex >= rowLimit || colIndex >= colLimit) {
        throw new Error(`rendered stale cell ${rowIndex}-${colIndex}`);
      }
      return <div>{`${rowIndex}-${colIndex}`}</div>;
    };
  const { rerender, getByText } = await render(
    <VGrid row={4} col={4}>
      {renderCell(4, 4)}
    </VGrid>,
  );

  rerender(
    <VGrid row={2} col={2}>
      {renderCell(2, 2)}
    </VGrid>,
  );

  expect(getByText("0-0")).toBeTruthy();
  expect(getByText("1-1")).toBeTruthy();
});

it("should render newly added cells while dimensions grow", async () => {
  const renderCell = ({
    rowIndex,
    colIndex,
  }: {
    rowIndex: number;
    colIndex: number;
  }) => <div>{`${rowIndex}-${colIndex}`}</div>;
  const { rerender, getByText } = await render(
    <VGrid row={1} col={1}>
      {renderCell}
    </VGrid>,
  );

  rerender(
    <VGrid row={4} col={4}>
      {renderCell}
    </VGrid>,
  );

  await waitFor(() => expect(getByText("3-3")).toBeTruthy());
});

describe("grid", async () => {
  it("should render 0 children", async () => {
    const { asFragment } = await render(
      <VGrid row={0} col={0}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { asFragment } = await render(
      <VGrid row={1} col={1}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>,
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
      </VGrid>,
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
      </VGrid>,
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
      </VGrid>,
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
      </VGrid>,
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
      </VGrid>,
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
      </VGrid>,
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
      </VGrid>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
