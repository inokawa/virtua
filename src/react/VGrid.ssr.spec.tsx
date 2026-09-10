/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { VGrid } from "./VGrid.js";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render nothing", () => {
    const ROW_COUNT = 0;
    const COL_COUNT = 0;
    const CELL_HEIGHT = 100;
    const CELL_WIDTH = 60;
    const html = renderToString(
      <VGrid
        id={LIST_ID}
        ssrRowCount={ROW_COUNT}
        ssrColCount={COL_COUNT}
        cellHeight={CELL_HEIGHT}
        cellWidth={CELL_WIDTH}
        row={1000}
        col={5000}
      >
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex}-{colIndex}
          </div>
        )}
      </VGrid>,
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount,
    ).toEqual(ROW_COUNT * COL_COUNT);
  });

  it("should render items with renderToString and vertical", () => {
    const ROW_COUNT = 10;
    const COL_COUNT = 20;
    const CELL_HEIGHT = 100;
    const CELL_WIDTH = 60;
    const html = renderToString(
      <VGrid
        id={LIST_ID}
        ssrRowCount={ROW_COUNT}
        ssrColCount={COL_COUNT}
        cellHeight={CELL_HEIGHT}
        cellWidth={CELL_WIDTH}
        row={1000}
        col={5000}
      >
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex}-{colIndex}
          </div>
        )}
      </VGrid>,
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount,
    ).toEqual(ROW_COUNT * COL_COUNT);
  });
});
