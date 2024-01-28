/**
 * @jsxImportSource solid-js
 */
import {
  createMemo,
  createRoot,
  createSignal,
  onCleanup,
  untrack,
  JSX,
  Signal,
} from "solid-js";
import { ItemsRange } from "../core/store";

interface RenderedNode<T> {
  _data: Signal<T>;
  _element: JSX.Element;
  _dispose: () => void;
}

/**
 * https://github.com/solidjs/solid/blob/main/packages/solid/src/reactive/array.ts
 * https://github.com/solidjs/solid/blob/main/packages/solid/src/render/flow.ts
 * https://github.com/solidjs/solid/discussions/366
 * @internal
 */
export const RangedFor = <T,>(props: {
  _each: T[];
  _range: ItemsRange;
  _render: (data: T, index: number) => JSX.Element;
}): JSX.Element => {
  let prev = new Map<number, RenderedNode<T>>();

  onCleanup(() => {
    for (const node of prev.values()) {
      node._dispose();
    }
  });

  return createMemo(() => {
    const list = props._each;
    const [start, end] = props._range;
    const current = new Map<number, RenderedNode<T>>();
    const items: JSX.Element[] = [];

    return untrack(() => {
      for (let i = start; i <= end; i++) {
        const newData: T = list[i]!;
        const lookup = prev.get(i);
        items.push(
          lookup
            ? lookup._element
            : createRoot((dispose) => {
                const data = createSignal(newData);
                const result = props._render(data[0](), i);
                current.set(i, {
                  _data: data,
                  _element: result,
                  _dispose: dispose,
                });
                return result;
              })
        );
        if (lookup) {
          if (newData !== lookup._data) {
            lookup._data[1](
              newData as Exclude<T, Function> // TODO improve type
            );
          }
          current.set(i, lookup);
        }
      }
      for (const [key, node] of prev.entries()) {
        if (!current.has(key)) {
          node._dispose();
        }
      }
      prev = current;
      return items;
    });
  }) as unknown as JSX.Element; // TODO improve type
};
