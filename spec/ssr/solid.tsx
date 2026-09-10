/**
 * @jsxImportSource solid-js
 */
import { VList } from "../../src/solid/index.js";
import type { SsrProps } from "../browser/index.js";
import { generateHydrationScript, renderToString } from "solid-js/web";

export const List = (props: SsrProps) => (
  <VList
    data={Array.from({ length: 1000 }, (_, i) => i)}
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
