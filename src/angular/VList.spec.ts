import { it, expect, describe } from "vitest";
import { Component, input } from "@angular/core";
import { VList } from "./VList.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/angular.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

@Component({
  selector: "test-host-attrs",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data()"
      [horizontal]="horizontal()"
      id="id"
      class="class"
      tabindex="0"
      role="list"
      aria-label="test"
      style="background: red; width: 100px; height: 800px;"
    >
      <ng-template let-item let-index="index"
        ><div>{{ item }}</div></ng-template
      >
    </virtua-vlist>
  `,
})
class AttrsHost {
  readonly data = input.required<number[]>();
  readonly horizontal = input(false);
}

describe("vertical", () => {
  it("should pass attributes to element", async () => {
    const { container } = await render(AttrsHost, { data: range(1) });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should pass attributes to element", async () => {
    const { container } = await render(AttrsHost, {
      data: range(1),
      horizontal: true,
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
