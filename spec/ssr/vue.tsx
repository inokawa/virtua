/** @jsxImportSource vue */
import { VList } from "../../src/vue/index.js";
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
