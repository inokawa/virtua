import {
  Component,
  InjectionToken,
  inject,
  provideZonelessChangeDetection,
  type Provider,
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
import { VGrid, VList } from "../../src/angular/index.js";
import type { SsrProps } from "../browser/index.js";

export const SSR_PROPS = new InjectionToken<SsrProps>("ssrProps");

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
export class SsrVListHost {
  protected readonly props = inject(SSR_PROPS);
  protected readonly data = Array.from({ length: 1000 }, (_, i) => i);
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
      style="width: 400px; height: 400px"
    >
      <ng-template let-cell="cell"
        ><div>
          item-{{ cell.rowIndex }}/item-{{ cell.colIndex }}
        </div></ng-template
      >
    </virtua-vgrid>
  `,
})
export class SsrVGridHost {}

const renderHost = async (
  host: Type<unknown>,
  selector: string,
  providers: Provider[],
) => {
  const html = await renderApplication(
    (context) =>
      bootstrapApplication(
        host,
        {
          providers: [
            provideZonelessChangeDetection(),
            provideServerRendering(),
            provideClientHydration(),
            ...providers,
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

export const render = (props: SsrProps) =>
  renderHost(SsrVListHost, "ssr-vlist", [
    { provide: SSR_PROPS, useValue: props },
  ]);

export const renderGrid = () => renderHost(SsrVGridHost, "ssr-vgrid", []);
