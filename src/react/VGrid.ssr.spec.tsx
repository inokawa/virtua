/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { VGrid } from "./VGrid.js";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render items with renderToString and vertical", () => {
    const ROW_COUNT = 10;
    const COL_COUNT = 20;
    const OVERSCAN = 4;
    const html = renderToString(
      <VGrid
        id={LIST_ID}
        initialRowCount={ROW_COUNT}
        initialColCount={COL_COUNT}
        overscan={OVERSCAN}
        row={1000}
        col={5000}
      >
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex}-{colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual((ROW_COUNT + OVERSCAN) * (COL_COUNT + OVERSCAN));
  });

  it("should render items with renderToStaticMarkup and vertical", () => {
    const ROW_COUNT = 10;
    const COL_COUNT = 20;
    const OVERSCAN = 4;
    const html = renderToStaticMarkup(
      <VGrid
        id={LIST_ID}
        initialRowCount={ROW_COUNT}
        initialColCount={COL_COUNT}
        overscan={OVERSCAN}
        row={1000}
        col={5000}
      >
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex}-{colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual((ROW_COUNT + OVERSCAN) * (COL_COUNT + OVERSCAN));
  });
});
