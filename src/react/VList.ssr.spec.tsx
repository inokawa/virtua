/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { VList } from "./VList";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render items with renderToString and vertical", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const OVERSCAN = 4;
    const BUFFER_SIZE = ITEM_SIZE * OVERSCAN;
    const html = renderToString(
      <VList
        id={LIST_ID}
        ssrCount={COUNT}
        bufferSize={BUFFER_SIZE}
        itemSize={ITEM_SIZE}
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToStaticMarkup and vertical", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const OVERSCAN = 4;
    const BUFFER_SIZE = ITEM_SIZE * OVERSCAN;
    const html = renderToStaticMarkup(
      <VList
        id={LIST_ID}
        ssrCount={COUNT}
        bufferSize={BUFFER_SIZE}
        itemSize={ITEM_SIZE}
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToString and horizontal", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const OVERSCAN = 4;
    const BUFFER_SIZE = ITEM_SIZE * OVERSCAN;
    const html = renderToString(
      <VList
        id={LIST_ID}
        ssrCount={COUNT}
        bufferSize={BUFFER_SIZE}
        itemSize={ITEM_SIZE}
        horizontal
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToStaticMarkup and horizontal", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const OVERSCAN = 4;
    const BUFFER_SIZE = ITEM_SIZE * OVERSCAN;
    const html = renderToStaticMarkup(
      <VList
        id={LIST_ID}
        ssrCount={COUNT}
        bufferSize={BUFFER_SIZE}
        itemSize={ITEM_SIZE}
        horizontal
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </VList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT);
  });
});
