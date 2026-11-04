import { it, expect, vi } from "vitest";
import { Component, input } from "@angular/core";
import { WindowMasonry } from "./WindowMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/angular.js";
import { delay, range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
});

@Component({
  selector: "test-host",
  imports: [WindowMasonry],
  template: `
    <virtua-window-masonry [lanes]="lanes()" [data]="data()">
      <ng-template let-item
        ><div>{{ item }}</div></ng-template
      >
    </virtua-window-masonry>
  `,
})
class Host {
  readonly lanes = input<number>(2);
  readonly data = input.required<number[]>();
}

it("should render 0 children", async () => {
  const { container } = await render(Host, { data: [] });
  expect(container.innerHTML).toMatchSnapshot();
});

it("should lay out the items again with the new lanes without remounting them", async () => {
  const { fixture, container } = await render(Host, {
    lanes: 2,
    data: range(100),
  });
  const getItem = () =>
    [...container.querySelectorAll("div")].find(
      (e) => !e.children.length && e.textContent === "0",
    )!;
  const item = getItem();
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  fixture.componentRef.setInput("lanes", 4);
  vi.runAllTicks();
  await delay(100);
  expect(getItem()).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe("25%");
});
