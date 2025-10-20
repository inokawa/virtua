/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render nothing", () => {
    const COUNT = 0;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer
          ssrCount={COUNT}
          bufferSize={BUFFER_SIZE}
          itemSize={ITEM_SIZE}
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToString and vertical", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer
          ssrCount={COUNT}
          bufferSize={BUFFER_SIZE}
          itemSize={ITEM_SIZE}
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToStaticMarkup and vertical", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToStaticMarkup(
      <div id={LIST_ID}>
        <WindowVirtualizer
          ssrCount={COUNT}
          bufferSize={BUFFER_SIZE}
          itemSize={ITEM_SIZE}
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToString and horizontal", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer
          ssrCount={COUNT}
          bufferSize={BUFFER_SIZE}
          itemSize={ITEM_SIZE}
          horizontal
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToStaticMarkup and horizontal", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = renderToStaticMarkup(
      <div id={LIST_ID}>
        <WindowVirtualizer
          ssrCount={COUNT}
          bufferSize={BUFFER_SIZE}
          itemSize={ITEM_SIZE}
          horizontal
        >
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount
    ).toEqual(COUNT);
  });
});
