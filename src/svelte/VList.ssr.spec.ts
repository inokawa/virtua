/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { render } from "svelte/server";
import { JSDOM } from "jsdom";
import VList from "./VList.svelte";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render nothing", () => {
    const COUNT = 0;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const { body } = render(VList, {
      props: {
        data: Array.from({ length: 1000 }),
        children: (() => {}) as any, // FIXME
        ssrCount: COUNT,
        id: LIST_ID,
        bufferSize: BUFFER_SIZE,
        itemSize: ITEM_SIZE,
      },
    });
    expect(body).toMatchSnapshot();
    expect(
      new JSDOM(body).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount,
    ).toEqual(COUNT);
  });

  it("should render items with ssrCount in vertical mode", () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const { body } = render(VList, {
      props: {
        data: Array.from({ length: 1000 }),
        children: (() => {}) as any, // FIXME
        ssrCount: COUNT,
        id: LIST_ID,
        bufferSize: BUFFER_SIZE,
        itemSize: ITEM_SIZE,
      },
    });
    expect(body).toMatchSnapshot();
    expect(
      new JSDOM(body).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount,
    ).toEqual(COUNT);
  });

  it("should render items with ssrCount in horizontal mode", () => {
    const COUNT = 5;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const { body } = render(VList, {
      props: {
        data: Array.from({ length: 1000 }),
        children: (() => {}) as any, // FIXME
        ssrCount: COUNT,
        id: LIST_ID,
        bufferSize: BUFFER_SIZE,
        itemSize: ITEM_SIZE,
        horizontal: true,
      },
    });
    expect(body).toMatchSnapshot();
    expect(
      new JSDOM(body).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount,
    ).toEqual(COUNT);
  });
});
