/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { JSDOM } from "jsdom";
import { range } from "../../spec/utils.js";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render nothing", () => {
    const COUNT = 0;
    const ITEM_SIZE = 100;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer ssrCount={COUNT} itemSize={ITEM_SIZE}>
          {range(1000, (i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>,
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount,
    ).toEqual(COUNT);
  });

  it("should render items with renderToString and vertical", () => {
    const COUNT = 10;
    const ITEM_SIZE = 100;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer ssrCount={COUNT} itemSize={ITEM_SIZE}>
          {range(1000, (i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>,
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount,
    ).toEqual(COUNT);
  });

  it("should render items with renderToString and horizontal", () => {
    const COUNT = 10;
    const ITEM_SIZE = 100;
    const html = renderToString(
      <div id={LIST_ID}>
        <WindowVirtualizer ssrCount={COUNT} itemSize={ITEM_SIZE} horizontal>
          {range(1000, (i) => (
            <div key={i}>{i}</div>
          ))}
        </WindowVirtualizer>
      </div>,
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!
        .firstElementChild!.childElementCount,
    ).toEqual(COUNT);
  });
});
