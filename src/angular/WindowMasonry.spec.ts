import { it, expect, vi } from "vitest";
import { Component, input, viewChild } from "@angular/core";
import { WindowMasonry } from "./WindowMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/angular.js";
import { delay, range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;

setupResizeJsDom({
  itemSize: { width: 100, height: ITEM_HEIGHT },
});

@Component({
  selector: "test-host",
  imports: [WindowMasonry],
  template: `
    <virtua-window-masonry
      [lanes]="lanes()"
      [gap]="gap()"
      [keepMounted]="keepMounted()"
      [data]="data()"
      id="masonry"
      class="gallery"
      role="list"
      aria-label="test"
      style="background: red;"
    >
      <ng-template let-item let-index="index"
        ><div>{{ item }}/{{ index }}</div></ng-template
      >
    </virtua-window-masonry>
  `,
})
class Host {
  readonly lanes = input(2);
  readonly gap = input<number>();
  readonly keepMounted = input<readonly number[]>();
  readonly data = input.required<number[]>();
  readonly masonry = viewChild.required(WindowMasonry);
}

it("should grow naturally and measure the document viewport", async () => {
  const { fixture, container } = await render(Host, { data: range(100) });
  const outer = container.querySelector("virtua-window-masonry") as HTMLElement;
  expect(outer.style.overflowY).toBe("");
  expect(outer.style.contain).toBe("");
  expect(outer.style.height).toBe("");
  expect(outer.style.background).toBe("red");
  expect(outer.id).toBe("masonry");
  expect(outer.className).toBe("gallery");
  expect(outer.getAttribute("aria-label")).toBe("test");
  expect(outer.children).toHaveLength(1);
  expect((outer.firstElementChild as HTMLElement).style.height).toBe("2500px");
  const masonry = fixture.componentInstance.masonry();
  expect(masonry.viewportSize).toBe(window.innerHeight);
  expect(masonry.scrollSize).toBe(2500);
  expect(masonry.getItemOffset(2)).toBe(50);
  expect(masonry.getItemSize(0)).toBe(50);
});

it("should render no items for empty data", async () => {
  const { fixture, container } = await render(Host, { data: [] });
  const outer = container.querySelector("virtua-window-masonry")!;
  expect(outer.firstElementChild!.childElementCount).toBe(0);
  expect(fixture.componentInstance.masonry().scrollSize).toBe(
    window.innerHeight,
  );
});

it("should keep requested offscreen items mounted", async () => {
  const { container } = await render(Host, {
    data: range(100),
    keepMounted: [99],
  });
  expect(container.textContent).toContain("99/99");
});

it("should relayout lanes and gaps without remounting items", async () => {
  const { fixture, container } = await render(Host, { data: range(100) });
  const getItem = () =>
    [...container.querySelectorAll("div")].find(
      (e) => !e.children.length && e.textContent === "0/0",
    )!;
  const item = getItem();
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  fixture.componentRef.setInput("lanes", 4);
  vi.runAllTicks();
  await delay(100);
  expect(getItem()).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe("25%");

  fixture.componentRef.setInput("gap", 8);
  vi.runAllTicks();
  await delay(100);
  expect(getItem()).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe(
    "calc(25% - 6px)",
  );
});
