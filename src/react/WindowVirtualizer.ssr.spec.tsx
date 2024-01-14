/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { WindowVirtualizer } from "./WindowVirtualizer";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render items with renderToString and vertical", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer ssrCount={COUNT} overscan={OVERSCAN}>
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
    ).toEqual(COUNT + OVERSCAN);
  });

  it("should render items with renderToStaticMarkup and vertical", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToStaticMarkup(
      <div id={LIST_ID}>
        <WindowVirtualizer ssrCount={COUNT} overscan={OVERSCAN}>
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
    ).toEqual(COUNT + OVERSCAN);
  });

  it("should render items with renderToString and horizontal", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer
          ssrCount={COUNT}
          overscan={OVERSCAN}
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
    ).toEqual(COUNT + OVERSCAN);
  });

  it("should render items with renderToStaticMarkup and horizontal", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToStaticMarkup(
      <div id={LIST_ID}>
        <WindowVirtualizer
          ssrCount={COUNT}
          overscan={OVERSCAN}
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
    ).toEqual(COUNT + OVERSCAN);
  });
});
