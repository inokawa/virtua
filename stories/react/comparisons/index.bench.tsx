import React, { ReactNode } from "react";
import { bench, describe } from "vitest";
import { render } from "vitest-browser-react";
import {
  DynamicItem,
  HeavyDOMItem,
  HeavyJsItem,
  SimpleItem,
} from "./components/common";
import { VirtuaList } from "./components/virtua";
import { VirtuaList as VirtuaListRender } from "./components/virtua-render";
import { ReactVirtualList } from "./components/react-virtual";
import { ReactVirtuosoList } from "./components/react-virtuoso";
import { ReactVirtualizedList } from "./components/react-virtualized";
import { ReactWindowList } from "./components/react-window";
import { version as VirtuaVersion } from "virtua/package.json";
import { version as ReactVirtualizedVersion } from "react-virtualized/package.json";
import { version as ReactWindowVirsion } from "react-window/package.json";
import { version as ReactVirtuosoVirsion } from "react-virtuoso/package.json";
import { version as ReactVirtualVersion } from "@tanstack/react-virtual/package.json";

const components: [string, typeof VirtuaList][] = [
  [`virtua@${VirtuaVersion} (elements)`, VirtuaList],
  [`virtua@${VirtuaVersion} (render prop)`, VirtuaListRender],
  [`react-virtualized@${ReactVirtualizedVersion}`, ReactVirtualizedList],
  [`react-window@${ReactWindowVirsion}`, ReactWindowList],
  [`react-virtuoso@${ReactVirtuosoVirsion}`, ReactVirtuosoList],
  [`@tanstack/react-virtual@${ReactVirtualVersion}`, ReactVirtualList],
];

const VIEWPORT_SIZE = 50 * 30;

const Viewport = ({ children }: { children: ReactNode }) => (
  <div style={{ height: VIEWPORT_SIZE, width: "500px" }}>{children}</div>
);

[1000, 100000].forEach((count) => {
  const itemComponents: [string, typeof SimpleItem][] = [
    ["same sized items", SimpleItem],
    ["dynamic sized items", DynamicItem],
    ["heavy DOM", HeavyDOMItem],
    ["heavy JS", HeavyJsItem],
  ];

  itemComponents.forEach(([name, ItemComponent]) => {
    describe(`mount / ${count} items / ${name}`, () => {
      components.forEach(([name, Component]) => {
        bench(name, async () => {
          const screen = render(
            <Viewport>
              <Component count={count} Component={ItemComponent} />
            </Viewport>
          );

          await Promise.all([screen.getByText("0"), screen.getByText("29")]);
        });
      });
    });
  });
});
