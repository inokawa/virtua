/**
 * @jsxImportSource solid-js
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString } from "solid-js/web";
import { VList } from "./VList.js";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render items with renderToString and vertical", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToString(() => (
      <VList
        data={Array.from({ length: 1000 }).map((_, i) => i)}
        id={LIST_ID}
        ssrCount={COUNT}
        bufferSize={BUFFER_SIZE}
        itemSize={ITEM_SIZE}
      >
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount,
    ).toEqual(COUNT);
  });

  it("should render items with renderToString and horizontal", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToString(() => (
      <VList
        data={Array.from({ length: 1000 }).map((_, i) => i)}
        id={LIST_ID}
        ssrCount={COUNT}
        bufferSize={BUFFER_SIZE}
        itemSize={ITEM_SIZE}
        horizontal
      >
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount,
    ).toEqual(COUNT);
  });
});
