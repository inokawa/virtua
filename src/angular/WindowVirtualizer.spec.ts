import { it, expect, describe } from "vitest";
import { Component, input } from "@angular/core";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/angular.js";

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

@Component({
  selector: "test-host",
  imports: [WindowVirtualizer],
  template: `
    <virtua-window-virtualizer [data]="data()" [horizontal]="horizontal()">
      <ng-template let-item let-index="index"
        ><div>{{ item }}</div></ng-template
      >
    </virtua-window-virtualizer>
  `,
})
class Host {
  readonly data = input.required<number[]>();
  readonly horizontal = input(false);
}

// A host that renders a nested element, mirroring the "component" cases
// of the other frameworks (a custom component wrapping the item).
@Component({
  selector: "test-host-component",
  imports: [WindowVirtualizer],
  template: `
    <virtua-window-virtualizer [data]="data()" [horizontal]="horizontal()">
      <ng-template let-item let-index="index">
        <div>
          <div>{{ item }}</div>
        </div>
      </ng-template>
    </virtua-window-virtualizer>
  `,
})
class ComponentHost {
  readonly data = input.required<number[]>();
  readonly horizontal = input(false);
}

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
