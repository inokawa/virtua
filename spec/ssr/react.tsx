import {
  VGrid,
  VList,
  VMasonry,
  WindowVirtualizer,
} from "../../src/react/index.js";
import type { SsrEntry, SsrFixtures, SsrProps } from "../browser/index.js";
import { onTestFinished } from "vitest";
import type { FC } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { range } from "../utils.js";

const List = (props: SsrProps) => (
  <VList
    data={range(1000)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
    style={{ width: 400, height: 400 }}
  >
    {(d) => <div key={d}>item-{d}</div>}
  </VList>
);

const Window = (props: SsrProps) => (
  <WindowVirtualizer
    data={range(1000)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
  >
    {(d) => <div key={d}>item-{d}</div>}
  </WindowVirtualizer>
);

const Grid = () => (
  <VGrid
    rows={1000}
    rowHeight={40}
    cols={1000}
    colWidth={100}
    style={{ width: 400, height: 400 }}
  >
    {(rowIndex, colIndex) => <div>{`row-${rowIndex}/col-${colIndex}`}</div>}
  </VGrid>
);

const Masonry = () => (
  <VMasonry lanes={2} data={range(1000)} style={{ height: 400 }}>
    {(d) => <div key={d}>item-{d}</div>}
  </VMasonry>
);

// TypeScript cannot relate the props to the fixture chosen by the name
const fixtures: Record<keyof SsrFixtures, FC<any>> = {
  list: List,
  window: Window,
  grid: Grid,
  masonry: Masonry,
};

export const render: SsrEntry["render"] = (name, props) => {
  const Fixture = fixtures[name];
  return renderToString(<Fixture {...props} />);
};

export const hydrate: SsrEntry["hydrate"] = (root, name, props) => {
  const Fixture = fixtures[name];
  const reactRoot = hydrateRoot(root, <Fixture {...props} />);
  onTestFinished(() => reactRoot.unmount());
};
