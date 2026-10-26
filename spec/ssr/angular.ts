import {
  Component,
  InjectionToken,
  inject,
  provideZonelessChangeDetection,
  reflectComponentType,
  type Type,
} from "@angular/core";
import {
  bootstrapApplication,
  provideClientHydration,
} from "@angular/platform-browser";
import {
  provideServerRendering,
  renderApplication,
} from "@angular/platform-server";
import {
  VGrid,
  VList,
  VMasonry,
  WindowVirtualizer,
} from "../../src/angular/index.js";
import { onTestFinished } from "vitest";
import type {
  SsrEntry,
  SsrFixtures,
  SsrGridProps,
  SsrMasonryProps,
  SsrProps,
} from "../browser/index.js";
import { range } from "../utils.js";

const SSR_PROPS = new InjectionToken<SsrFixtures[keyof SsrFixtures]>(
  "ssrProps",
);

@Component({
  selector: "ssr-vlist",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data"
      [ssrCount]="props.ssrCount"
      [itemSize]="props.itemSize"
      [horizontal]="props.horizontal ?? false"
      style="width: 400px; height: 400px"
    >
      <ng-template let-item
        ><div>item-{{ item }}</div></ng-template
      >
    </virtua-vlist>
  `,
})
class SsrVListHost {
  protected readonly props = inject(SSR_PROPS) as SsrProps;
  protected readonly data = range(1000);
}

@Component({
  selector: "ssr-window-virtualizer",
  imports: [WindowVirtualizer],
  template: `
    <virtua-window-virtualizer
      [data]="data"
      [ssrCount]="props.ssrCount"
      [itemSize]="props.itemSize"
      [horizontal]="props.horizontal ?? false"
    >
      <ng-template let-item
        ><div>item-{{ item }}</div></ng-template
      >
    </virtua-window-virtualizer>
  `,
})
class SsrWindowVirtualizerHost {
  protected readonly props = inject(SSR_PROPS) as SsrProps;
  protected readonly data = range(1000);
}

@Component({
  selector: "ssr-vgrid",
  imports: [VGrid],
  template: `
    <virtua-vgrid
      [rows]="1000"
      [rowHeight]="40"
      [cols]="1000"
      [colWidth]="100"
      [ssrRowCount]="props.ssrRowCount"
      [ssrColCount]="props.ssrColCount"
      style="width: 400px; height: 400px"
    >
      <ng-template let-cell="cell"
        ><div>row-{{ cell.rowIndex }}/col-{{ cell.colIndex }}</div></ng-template
      >
    </virtua-vgrid>
  `,
})
class SsrVGridHost {
  protected readonly props = inject(SSR_PROPS) as SsrGridProps;
}

@Component({
  selector: "ssr-vmasonry",
  imports: [VMasonry],
  template: `
    <virtua-vmasonry
      [data]="data"
      [lanes]="4"
      [itemSize]="100"
      [ssrCount]="props.ssrCount"
      [cache]="props.cache"
      style="width: 400px; height: 400px"
    >
      <ng-template let-item
        ><div style="height: 100px">item-{{ item }}</div></ng-template
      >
    </virtua-vmasonry>
  `,
})
class SsrVMasonryHost {
  protected readonly props = inject(SSR_PROPS) as SsrMasonryProps;
  protected readonly data = range(1000);
}

const fixtures: Record<keyof SsrFixtures, Type<unknown>> = {
  list: SsrVListHost,
  window: SsrWindowVirtualizerHost,
  grid: SsrVGridHost,
  masonry: SsrVMasonryHost,
};

export const render: SsrEntry["render"] = async (name, props) => {
  const host = fixtures[name];
  const { selector } = reflectComponentType(host)!;
  const html = await renderApplication(
    (context) =>
      bootstrapApplication(
        host,
        {
          providers: [
            provideZonelessChangeDetection(),
            provideServerRendering(),
            provideClientHydration(),
            { provide: SSR_PROPS, useValue: props },
          ],
        },
        context,
      ),
    { document: `<html><body><${selector}></${selector}></body></html>` },
  );
  // renderApplication returns a whole document, but the spec hydrates a container
  const body = html.slice(
    html.indexOf("<body>") + 6,
    html.lastIndexOf("</body>"),
  );
  // The template ids count the templates the server rendered before, so they depend on the tests run
  return body.replace(/"t\d+"/g, '"t"');
};

export const hydrate: SsrEntry["hydrate"] = (root, name, props) => {
  // angular verifies the marker comment it emitted against the document
  const marker = root.firstChild!.cloneNode() as Comment;
  document.head.appendChild(marker);
  onTestFinished(() => marker.remove());
  const app = bootstrapApplication(fixtures[name], {
    providers: [
      provideZonelessChangeDetection(),
      provideClientHydration(),
      { provide: SSR_PROPS, useValue: props },
    ],
  });
  onTestFinished(async () => (await app).destroy());
};
