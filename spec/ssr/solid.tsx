/**
 * @jsxImportSource solid-js
 */
import { VGrid, VList } from "../../src/solid/index.js";
import type { SsrProps } from "../browser/index.js";
import { generateHydrationScript, renderToString } from "solid-js/web";
import { range } from "../utils.js";

export const List = (props: SsrProps) => (
  <VList
    data={range(1000)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
    style={{ width: "400px", height: "400px" }}
  >
    {(d) => <div>item-{d}</div>}
  </VList>
);

export const render = (props: SsrProps) =>
  generateHydrationScript() + renderToString(() => <List {...props} />);

export const Grid = () => (
  <VGrid
    rows={1000}
    rowHeight={40}
    cols={1000}
    colWidth={100}
    style={{ width: "400px", height: "400px" }}
  >
    {(_row, _col, { rowIndex, colIndex }) => (
      <div>{`item-${rowIndex}/item-${colIndex}`}</div>
    )}
  </VGrid>
);

export const renderGrid = () =>
  generateHydrationScript() + renderToString(() => <Grid />);
