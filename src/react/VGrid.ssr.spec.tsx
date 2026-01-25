/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { VGrid } from "./VGrid.js";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render nothing", () => {
    const ROW_COUNT = 0;
    const COL_COUNT = 0;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToString(
      <VGrid
        id={LIST_ID}
        ssrRowCount={ROW_COUNT}
        ssrColCount={COL_COUNT}
        cellHeight={ITEM_SIZE}
        cellWidth={ITEM_SIZE}
        bufferSize={BUFFER_SIZE}
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
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToString(
      <VGrid
        id={LIST_ID}
        ssrRowCount={ROW_COUNT}
        ssrColCount={COL_COUNT}
        cellHeight={ITEM_SIZE}
        cellWidth={ITEM_SIZE}
        bufferSize={BUFFER_SIZE}
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

  it("should render items with renderToStaticMarkup and vertical", () => {
    const ROW_COUNT = 10;
    const COL_COUNT = 20;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToStaticMarkup(
      <VGrid
        id={LIST_ID}
        ssrRowCount={ROW_COUNT}
        ssrColCount={COL_COUNT}
        cellHeight={ITEM_SIZE}
        cellWidth={ITEM_SIZE}
        bufferSize={BUFFER_SIZE}
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
