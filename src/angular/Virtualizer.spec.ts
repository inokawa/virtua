import { it, expect, describe } from "vitest";
import { Component, input } from "@angular/core";
import { Virtualizer } from "./Virtualizer.js";
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

// Virtualizer observes its parent element as the scrollable container, so it
// has to be rendered inside a scrollable element.
@Component({
  selector: "test-host",
  imports: [Virtualizer],
  template: `
    <div style="overflow: auto;">
      <div
        virtuaVirtualizer
        [data]="data()"
        [horizontal]="horizontal()"
        [keepMounted]="keepMounted()"
      >
        <ng-template let-item let-index="index"
          ><div>{{ item }}</div></ng-template
        >
      </div>
    </div>
  `,
})
class Host {
  readonly data = input.required<number[]>();
  readonly horizontal = input(false);
  readonly keepMounted = input<number[] | undefined>(undefined);
}

// A host that renders a nested element, mirroring the "component" cases
// of the other frameworks (a custom component wrapping the item).
@Component({
  selector: "test-host-component",
  imports: [Virtualizer],
  template: `
    <div style="overflow: auto;">
      <div virtuaVirtualizer [data]="data()" [horizontal]="horizontal()">
        <ng-template let-item let-index="index">
          <div>
            <div>{{ item }}</div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
})
class ComponentHost {
  readonly data = input.required<number[]>();
  readonly horizontal = input(false);
}

// The attribute selector can be applied to any container element.
@Component({
  selector: "test-host-ul",
  imports: [Virtualizer],
  template: `
    <div style="overflow: auto;">
      <ul virtuaVirtualizer [data]="data()">
        <ng-template let-item let-index="index"
          ><div>{{ item }}</div></ng-template
        >
      </ul>
    </div>
  `,
})
class UlHost {
  readonly data = input.required<number[]>();
}

it("should change container element", async () => {
  const { container } = await render(UlHost, { data: range(5) });
  expect(container.innerHTML).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const { container } = await render(Host, {
    data: range(100),
    keepMounted: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
  });
  expect(container.innerHTML).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", async () => {
    const { container } = await render(Host, { data: [] });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(Host, { data: range(5) });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(Host, { data: range(100) });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(ComponentHost, { data: range(3) });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", async () => {
    const { container } = await render(Host, { data: [], horizontal: true });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(Host, {
      data: range(5),
      horizontal: true,
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(Host, {
      data: range(100),
      horizontal: true,
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(ComponentHost, {
      data: range(3),
      horizontal: true,
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
