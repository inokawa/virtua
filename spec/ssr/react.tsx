import { VGrid, VList } from "../../src/react/index.js";
import type { SsrProps } from "../browser/index.js";
import { renderToString } from "react-dom/server";

export const List = (props: SsrProps) => (
  <VList
    data={Array.from({ length: 1000 }, (_, i) => i)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
    style={{ width: 400, height: 400 }}
  >
    {(d) => <div key={d}>item-{d}</div>}
  </VList>
);

export const render = (props: SsrProps) => renderToString(<List {...props} />);

export const Grid = () => (
  <VGrid
    rows={1000}
    rowHeight={40}
    cols={1000}
    colWidth={100}
    style={{ width: 400, height: 400 }}
  >
    {(rowIndex, colIndex) => <div>{`item-${rowIndex}/item-${colIndex}`}</div>}
  </VGrid>
);

export const renderGrid = () => renderToString(<Grid />);
