/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { render } from "svelte/server";
import { JSDOM } from "jsdom";
import VListSSR from "./VList.ssr.test.svelte";

const LIST_ID = "list-id";

describe("Svelte SSR", () => {
  it("should render items with ssrCount in vertical mode", () => {
    const COUNT = 10;
    const { body } = render(VListSSR, {
      props: {
        ssrCount: COUNT,
        id: LIST_ID,
        horizontal: false,
      },
    });

    const dom = new JSDOM(body);
    const listRoot = dom.window.document.getElementById(LIST_ID);
    expect(listRoot).not.toBeNull();

    const virtualizer = listRoot!.firstElementChild;
    expect(virtualizer).not.toBeNull();

    const items = virtualizer!.children;
    expect(items.length).toEqual(COUNT);
  });

  it("should render items with ssrCount in horizontal mode", () => {
    const COUNT = 5;
    const { body } = render(VListSSR, {
      props: {
        ssrCount: COUNT,
        id: LIST_ID,
        horizontal: false,
      },
    });

    const dom = new JSDOM(body);
    const listRoot = dom.window.document.getElementById(LIST_ID);

    const items = listRoot!.firstElementChild!.children;
    expect(items.length).toEqual(COUNT);
  });
});
