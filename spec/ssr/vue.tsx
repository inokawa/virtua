/** @jsxImportSource vue */
import {
  VGrid,
  VList,
  VMasonry,
  WindowVirtualizer,
} from "../../src/vue/index.js";
import type {
  SsrEntry,
  SsrFixtures,
  SsrGridProps,
  SsrMasonryProps,
  SsrProps,
} from "../browser/index.js";
import { onTestFinished } from "vitest";
import { type FunctionalComponent, createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { range } from "../utils.js";

const List = (props: SsrProps) => (
  <VList
    data={range(1000)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
    style={{ width: "400px", height: "400px" }}
  >
    {{ default: ({ item }: { item: number }) => <div>item-{item}</div> }}
  </VList>
);

const Window = (props: SsrProps) => (
  <WindowVirtualizer
    data={range(1000)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
  >
    {{ default: ({ item }: { item: number }) => <div>item-{item}</div> }}
  </WindowVirtualizer>
);

const Grid = (props: SsrGridProps) => (
  <VGrid
    rows={1000}
    rowHeight={40}
    cols={1000}
    colWidth={100}
    ssrRowCount={props.ssrRowCount}
    ssrColCount={props.ssrColCount}
    style={{ width: "400px", height: "400px" }}
  >
    {{
      default: ({
        cell: { rowIndex, colIndex },
      }: {
        cell: { rowIndex: number; colIndex: number };
      }) => <div>{`row-${rowIndex}/col-${colIndex}`}</div>,
    }}
  </VGrid>
);

const Masonry = (props: SsrMasonryProps) => (
  <VMasonry
    data={range(1000)}
    lanes={4}
    itemSize={100}
    ssrCount={props.ssrCount}
    cache={props.cache}
    style={{ width: "400px", height: "400px" }}
  >
    {{
      default: ({ item }: { item: number }) => (
        <div style={{ height: "100px" }}>item-{item}</div>
      ),
    }}
  </VMasonry>
);

// TypeScript cannot relate the props to the fixture chosen by the name
const fixtures: Record<keyof SsrFixtures, FunctionalComponent<any>> = {
  list: List,
  window: Window,
  grid: Grid,
  masonry: Masonry,
};

export const render: SsrEntry["render"] = (name, props) => {
  const Fixture = fixtures[name];
  return renderToString(createSSRApp({ render: () => <Fixture {...props} /> }));
};

export const hydrate: SsrEntry["hydrate"] = (root, name, props) => {
  const Fixture = fixtures[name];
  const app = createSSRApp({ render: () => <Fixture {...props} /> });
  app.mount(root);
  onTestFinished(() => app.unmount());
};
