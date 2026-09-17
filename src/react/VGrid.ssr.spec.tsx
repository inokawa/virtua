/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { VGrid } from "./VGrid.js";
import { JSDOM } from "jsdom";

const GRID_ID = "grid-id";

describe("SSR", () => {
  it("should render no cells", () => {
    const html = renderToString(
      <VGrid id={GRID_ID} rows={1000} rowHeight={100} cols={5000} colWidth={60}>
        {(rowIndex, colIndex) => (
          <div>
            {rowIndex}-{colIndex}
          </div>
        )}
      </VGrid>,
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(GRID_ID)!.children[0]!
        .childElementCount,
    ).toEqual(0);
  });
});
