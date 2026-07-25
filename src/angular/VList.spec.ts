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
  selector: "test-host",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data()"
      [horizontal]="horizontal()"
      [keepMounted]="keepMounted()"
    >
      <ng-template let-item let-index="index"
        ><div>{{ item }}</div></ng-template
      >
    </virtua-vlist>
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
  imports: [VList],
  template: `
    <virtua-vlist [data]="data()" [horizontal]="horizontal()">
      <ng-template let-item let-index="index">
        <div>
          <div>{{ item }}</div>
        </div>
      </ng-template>
    </virtua-vlist>
  `,
})
class ComponentHost {
  readonly data = input.required<number[]>();
  readonly horizontal = input(false);
}

@Component({
  selector: "test-host-attrs",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data()"
      id="id"
      class="class"
      tabindex="0"
      role="list"
      aria-label="test"
      style="background: red;"
    >
      <ng-template let-item let-index="index"
        ><div>{{ item }}</div></ng-template
      >
    </virtua-vlist>
  `,
})
class AttrsHost {
  readonly data = input.required<number[]>();
}

@Component({
  selector: "test-host-sized",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data()"
      [horizontal]="horizontal()"
      style="width: 100px; height: 800px;"
    >
      <ng-template let-item let-index="index"
        ><div>{{ item }}</div></ng-template
      >
    </virtua-vlist>
  `,
})
class SizedHost {
  readonly data = input.required<number[]>();
  readonly horizontal = input(false);
}

it("should pass attributes to element", async () => {
  const { container } = await render(AttrsHost, { data: range(1) });
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

  it("should render 1 children", async () => {
    const { container } = await render(Host, { data: range(1) });
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

  it("should render 10000 children", async () => {
    const { container } = await render(Host, { data: range(10000) });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(ComponentHost, { data: range(3) });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { container } = await render(SizedHost, { data: range(5) });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", async () => {
    const { container } = await render(Host, { data: [], horizontal: true });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { container } = await render(Host, {
      data: range(1),
      horizontal: true,
    });
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

  it("should render 10000 children", async () => {
    const { container } = await render(Host, {
      data: range(10000),
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

  it("should render with given width / height", async () => {
    const { container } = await render(SizedHost, {
      data: range(5),
      horizontal: true,
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
