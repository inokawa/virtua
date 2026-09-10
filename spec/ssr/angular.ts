import {
  Component,
  InjectionToken,
  inject,
  provideZonelessChangeDetection,
} from "@angular/core";
import {
  bootstrapApplication,
  provideClientHydration,
} from "@angular/platform-browser";
import {
  provideServerRendering,
  renderApplication,
} from "@angular/platform-server";
import { VList } from "../../src/angular/index.js";
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

export const render = async (props: SsrProps) => {
  const html = await renderApplication(
    (context) =>
      bootstrapApplication(
        SsrVListHost,
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
    { document: "<html><body><ssr-vlist></ssr-vlist></body></html>" },
  );
  // renderApplication returns a whole document, but the spec hydrates a container
  return html.slice(html.indexOf("<body>") + 6, html.lastIndexOf("</body>"));
};
