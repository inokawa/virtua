/**
 * @jest-environment node
 */
import { it, describe, expect } from "@jest/globals";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { WVList } from "./WVList";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render items with renderToString and vertical", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToString(
      <WVList id={LIST_ID} initialItemCount={COUNT} overscan={OVERSCAN}>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WVList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT + OVERSCAN);
  });

  it("should render items with renderToStaticMarkup and vertical", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToStaticMarkup(
      <WVList id={LIST_ID} initialItemCount={COUNT} overscan={OVERSCAN}>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WVList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT + OVERSCAN);
  });

  it("should render items with renderToString and horizontal", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToString(
      <WVList
        id={LIST_ID}
        initialItemCount={COUNT}
        overscan={OVERSCAN}
        horizontal
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WVList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT + OVERSCAN);
  });

  it("should render items with renderToStaticMarkup and horizontal", () => {
    const COUNT = 10;
    const OVERSCAN = 4;
    const html = renderToStaticMarkup(
      <WVList
        id={LIST_ID}
        initialItemCount={COUNT}
        overscan={OVERSCAN}
        horizontal
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </WVList>
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT + OVERSCAN);
  });
});
