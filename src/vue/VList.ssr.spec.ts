/**
 * @vitest-environment node
 */
import { it, describe, expect } from "vitest";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { VList } from "./VList.js";
import { JSDOM } from "jsdom";

const LIST_ID = "list-id";

describe("SSR", () => {
  it("should render items with renderToString and vertical", async () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = await renderToString(
      createSSRApp({
        components: { VList },
        template: `
        <VList :data="${JSON.stringify(
          Array.from({ length: 1000 }).map((_, i) => i)
        )}" :id="'${LIST_ID}'" :ssrCount="${COUNT}" :bufferSize="${BUFFER_SIZE}" :itemSize="${ITEM_SIZE}" #default="{item}">
          <div :key="item">
            {{ item }}
          </div>
        </VList>
        `,
      })
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT);
  });

  it("should render items with renderToString and horizontal", async () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const BUFFER_SIZE = ITEM_SIZE * 4;
    const html = await renderToString(
      createSSRApp({
        components: { VList },
        template: `
        <VList :data="${JSON.stringify(
          Array.from({ length: 1000 }).map((_, i) => i)
        )}" :id="'${LIST_ID}'" :ssrCount="${COUNT}" :bufferSize="${BUFFER_SIZE}" :itemSize="${ITEM_SIZE}" #default="{item}" :horizontal="true">
          <div :key="item">
            {{ item }}
          </div>
        </VList>
        `,
      })
    );
    expect(html).toMatchSnapshot();

    expect(
      new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
        .childElementCount
    ).toEqual(COUNT);
  });
});
