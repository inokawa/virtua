/** @jsxImportSource vue */
import { VGrid, VList } from "../../src/vue/index.js";
import type { SsrProps } from "../browser/index.js";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";

export const List = (props: SsrProps) => (
  <VList
    data={Array.from({ length: 1000 }, (_, i) => i)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
    style={{ width: "400px", height: "400px" }}
  >
    {{ default: ({ item }: { item: number }) => <div>item-{item}</div> }}
  </VList>
);

export const render = (props: SsrProps) =>
  renderToString(createSSRApp({ render: () => <List {...props} /> }));

export const Grid = () => (
  <VGrid
    rows={1000}
    rowHeight={40}
    cols={1000}
    colWidth={100}
    style={{ width: "400px", height: "400px" }}
  >
    {{
      default: ({
        cell: { rowIndex, colIndex },
      }: {
        cell: { rowIndex: number; colIndex: number };
      }) => <div>{`item-${rowIndex}/item-${colIndex}`}</div>,
    }}
  </VGrid>
);

export const renderGrid = () =>
  renderToString(createSSRApp({ render: () => <Grid /> }));
