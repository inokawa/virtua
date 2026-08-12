/** @vitest-environment node */
import { renderToStaticMarkup, renderToString } from "octane/server";
import { describe, expect, it } from "vitest";
import { ListFixture, WindowFixture } from "../../spec/octane-fixtures.tsrx";

const items = Array.from({ length: 100 }, (_, id) => ({
  id,
  label: `Item ${id}`,
}));

describe("Octane SSR", () => {
  it.each([renderToString, renderToStaticMarkup])(
    "renders the requested VList item count",
    (render) => {
      const { html } = render(ListFixture, { items, ssrCount: 10 });
      expect(html.match(/data-index=/g) ?? []).toHaveLength(10);
      expect(html).toContain('id="octane-list"');
    },
  );

  it.each([renderToString, renderToStaticMarkup])(
    "renders the requested WindowVirtualizer item count",
    (render) => {
      const { html } = render(WindowFixture, { items, ssrCount: 8 });
      expect(html.match(/data-index=/g) ?? []).toHaveLength(8);
      expect(html).toContain('id="window-list"');
    },
  );
});
