/**
 * @jsxImportSource solid-js
 */
import {
  VGrid,
  VList,
  VMasonry,
  WindowVirtualizer,
} from "../../src/solid/index.js";
import type { SsrEntry, SsrFixtures, SsrProps } from "../browser/index.js";
import { onTestFinished } from "vitest";
import type { Component } from "solid-js";
import {
  generateHydrationScript,
  hydrate as hydrateSolid,
  renderToString,
} from "solid-js/web";
import { range } from "../utils.js";

const List = (props: SsrProps) => (
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

const Window = (props: SsrProps) => (
  <WindowVirtualizer
    data={range(1000)}
    ssrCount={props.ssrCount}
    itemSize={props.itemSize}
    horizontal={props.horizontal}
  >
    {(d) => <div>item-{d}</div>}
  </WindowVirtualizer>
);

const Grid = () => (
  <VGrid
    rows={1000}
    rowHeight={40}
    cols={1000}
    colWidth={100}
    style={{ width: "400px", height: "400px" }}
  >
    {(_row, _col, { rowIndex, colIndex }) => (
      <div>{`row-${rowIndex}/col-${colIndex}`}</div>
    )}
  </VGrid>
);

const Masonry = () => (
  <VMasonry lanes={2} data={range(1000)} style={{ height: "400px" }}>
    {(d) => <div>item-{d}</div>}
  </VMasonry>
);

// TypeScript cannot relate the props to the fixture chosen by the name
const fixtures: Record<keyof SsrFixtures, Component<any>> = {
  list: List,
  window: Window,
  grid: Grid,
  masonry: Masonry,
};

export const render: SsrEntry["render"] = (name, props) => {
  const Fixture = fixtures[name];
  return (
    generateHydrationScript() + renderToString(() => <Fixture {...props} />)
  );
};

export const hydrate: SsrEntry["hydrate"] = (root, name, props) => {
  // solid needs its hydration script, which is inert when set with innerHTML
  new Function(root.querySelector("script")!.textContent!)();
  const Fixture = fixtures[name];
  onTestFinished(hydrateSolid(() => <Fixture {...props} />, root));
};
