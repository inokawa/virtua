# virtua

![npm](https://img.shields.io/npm/v/virtua) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/virtua) ![npm](https://img.shields.io/npm/dw/virtua) [![check](https://github.com/inokawa/virtua/actions/workflows/check.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/check.yml) [![demo](https://github.com/inokawa/virtua/actions/workflows/demo.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/demo.yml)

> A zero-config, fast and small (~3kB) virtual list (and grid) component for [React](https://github.com/facebook/react) and [Vue](https://vuejs.org/).

![example](./example.gif)

If you want to check the difference with the alternatives right away, [see comparison section](#comparison).

## Motivation

This project is a challenge to rethink virtualization. The goals are...

- **Zero-config virtualization:** This library is designed to give the best performance without configuration. It also handles common hard things in the real world (dynamic size measurement, scroll position adjustment while reverse scrolling and imperative scrolling, iOS support, etc).
- **Fast:** Natural virtual scrolling needs optimization in many aspects (eliminate frame drops by reducing CPU usage and GC and [layout recalculation](https://gist.github.com/paulirish/5d52fb081b3570c81e3a), reduce visual jumps on repaint, optimize with CSS, optimize for frameworks, etc). We are trying to combine the best of them.
- **Small:** Its bundle size should be small as much as possible to be friendly with modern web development. Currently each components are ~3kB gzipped. The total is [~5kB gzipped](https://bundlephobia.com/package/virtua) and tree-shakeable.
- **Flexible:** Aiming to support many usecases - fixed size, dynamic size, horizontal scrolling, reverse scrolling, RTL, mobile, infinite scrolling, scroll restoration, DnD, keyboard navigation, sticky, placeholder and more. See [live demo](#demo).
- **Framework agnostic:** Currently [React](https://react.dev/) and [Vue](https://vuejs.org/) are supported. We could support [Svelte](https://svelte.dev/), [Solid](https://www.solidjs.com/), [Angular](https://angular.io/), [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) and more in the future.

## Demo

https://inokawa.github.io/virtua/

## Install

```sh
npm install virtua
```

If you use this lib in [legacy browsers which does not have ResizeObserver](https://caniuse.com/?search=resizeobserver), you should use [polyfill](https://github.com/juggle/resize-observer#switching-between-native-and-polyfilled-versions).

## Getting started

### React

`react >= 16.14` is required.

If you use ESM and webpack 5, use react >= 18 to avoid [Can't resolve `react/jsx-runtime` error](https://github.com/facebook/react/issues/20235).

#### Vertical scroll

```tsx
import { VList } from "virtua";

export const App = () => {
  return (
    <VList style={{ height: 800 }}>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: Math.floor(Math.random() * 10) * 10 + 10,
            borderBottom: "solid 1px gray",
            background: "white",
          }}
        >
          {i}
        </div>
      ))}
    </VList>
  );
};
```

#### Horizontal scroll

```tsx
import { VList } from "virtua";

export const App = () => {
  return (
    <VList style={{ height: 400 }} horizontal>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: Math.floor(Math.random() * 10) * 10 + 10,
            borderRight: "solid 1px gray",
            background: "white",
          }}
        >
          {i}
        </div>
      ))}
    </VList>
  );
};
```

#### Customization

`VList` is a recommended solution which works like a drop-in replacement of simple list built with scrollable `div` (or removed [virtual-scroller element](https://github.com/WICG/virtual-scroller)). For more complicated styling or markup, use `Virtualizer`.

```tsx
import { Virtualizer } from "virtua";

export const App = () => {
  return (
    <div style={{ overflowY: "auto", height: 800 }}>
      <div style={{ height: 40 }}>header</div>
      <Virtualizer startMargin={40}>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div
            key={i}
            style={{
              height: Math.floor(Math.random() * 10) * 10 + 10,
              borderBottom: "solid 1px gray",
              background: "white",
            }}
          >
            {i}
          </div>
        ))}
      </Virtualizer>
    </div>
  );
};
```

#### Window scroll

```tsx
import { WindowVirtualizer } from "virtua";

export const App = () => {
  return (
    <div style={{ padding: 200 }}>
      <WindowVirtualizer>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div
            key={i}
            style={{
              height: Math.floor(Math.random() * 10) * 10 + 10,
              borderBottom: "solid 1px gray",
              background: "white",
            }}
          >
            {i}
          </div>
        ))}
      </WindowVirtualizer>
    </div>
  );
};
```

#### Vertical and horizontal scroll

```tsx
import { experimental_VGrid as VGrid } from "virtua";

export const App = () => {
  return (
    <VGrid style={{ height: 800 }} row={1000} col={500}>
      {({ rowIndex, colIndex }) => (
        <div
          style={{
            width: ((colIndex % 3) + 1) * 100,
            border: "solid 1px gray",
            background: "white",
          }}
        >
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>
  );
};
```

#### React Server Components (RSC) support

This library is marked as a Client Component. You can render RSC as children of `VList`, `Virtualizer` or `WindowVirtualizer`.

```tsx
// page.tsx in App Router of Next.js

export default async () => {
  const articles = await fetchArticles();
  return (
    <div>
      <div>This is Server Component</div>
      <VList style={{ height: 300 }}>
        {articles.map((a) => (
          <div key={a.id} style={{ border: "solid 1px gray", height: 80 }}>
            {a.content}
          </div>
        ))}
      </VList>
    </div>
  );
};
```

### Vue

`vue >= 3.2` is required.

```vue
<script setup>
import { VList } from "virtua/vue";

const heights = [20, 40, 180, 77];
const data = Array.from({ length: 1000 }).map((_, i) => ({
  id: i,
  height: heights[i % 4] + "px",
}));
</script>

<template>
  <VList :data="data">
    <template #default="item">
      <div
        :key="item.id"
        :style="{
          height: item.height,
          background: 'white',
          borderBottom: 'solid 1px #ccc',
        }"
      >
        {{ item.id }}
      </div>
    </template>
  </VList>
</template>
```

## Documentation

- [API reference](./docs/API.md)
- [Examples](./stories) for more usages

### FAQs

#### Is there any way to improve performance further?

In complex usage, especially if you re-render frequently the parent of virtual scroller or the children are tons of items, children element creation can be a performance bottle neck. That's because creating React elements is fast enough but not free and new React element instances break some of memoization inside virtual scroller.

One solution is memoization with [`useMemo`](https://react.dev/reference/react/useMemo). You can use it to reduce computation and keep the elements' instance the same. And if you want to pass state from parent to the items, using [`context`](https://react.dev/learn/passing-data-deeply-with-context) instead of props may be better because it doesn't break the memoization.

```tsx
const elements = useMemo(
  () => tooLongArray.map((d) => <Component key={d.id} {...d} />),
  [tooLongArray]
);
const [position, setPosition] = useState(0);
return (
  <div>
    <div>position: {position}</div>
    <VList onScroll={(offset) => setPosition(offset)}>{elements}</VList>
  </div>
);
```

The other solution is using [`render prop`](https://legacy.reactjs.org/docs/render-props.html) as children to create elements lazily. It will effectively reduce cost on start up when you render many items (>1000). An important point is that newly created elements from `render prop` will disable [optimization possible with cached element instances](https://github.com/facebook/react/issues/8669#issuecomment-270032204). We recommend using [`memo`](https://react.dev/reference/react/memo) to reduce calling render function of your item components during scrolling.

```tsx
const Component = memo(HeavyItem);

<VList count={items.length}>
  {(i) => {
    const item = items[i];
    return <Component key={item.id} data={item} />;
  }}
</VList>;
```

Decreasing `overscan` prop may also improve perf in case that components are large and heavy.

Virtua try to suppress glitch caused by resize as much as possible, but it will also require additional work. If your item contains something resized often, such as lazy loaded image, we recommend to set height or min-height to it if possible.

#### What is `ResizeObserver loop completed with undelivered notifications.` error?

It may be dispatched by ResizeObserver in this lib [as described in spec](https://www.w3.org/TR/resize-observer/#deliver-resize-error). If it bothers you,
[you can safely ignore it](https://github.com/DevExpress/testcafe/issues/4857#issuecomment-598775956).

## Comparison

### Features

|                                                    | [virtua](https://github.com/inokawa/virtua)                                                                      | [react-virtuoso](https://github.com/petyosi/react-virtuoso)                                                                      | [react-window](https://github.com/bvaughn/react-window)                                                                      | [react-virtualized](https://github.com/bvaughn/react-virtualized)                                                                                                      | [@tanstack/react-virtual](https://github.com/TanStack/virtual)                                                                                     | [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list)                                                                    | [react-cool-virtual](https://github.com/wellyshen/react-cool-virtual)                                                                    |
| :------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Bundle size                                        | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/virtua)](https://bundlephobia.com/package/virtua) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-virtuoso)](https://bundlephobia.com/package/react-virtuoso) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-window)](https://bundlephobia.com/package/react-window) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-virtualized)](https://bundlephobia.com/package/react-virtualized)                                 | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@tanstack/react-virtual)](https://bundlephobia.com/package/@tanstack/react-virtual) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-tiny-virtual-list)](https://bundlephobia.com/package/react-tiny-virtual-list) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-cool-virtual)](https://bundlephobia.com/package/react-cool-virtual) |
| Vertical scroll                                    | ✅                                                                                                               | ✅                                                                                                                               | ✅                                                                                                                           | ✅                                                                                                                                                                     | 🟠 (needs customization)                                                                                                                           | ✅                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Horizontal scroll                                  | ✅                                                                                                               | ❌                                                                                                                               | ✅ ([may be dropped in v2](https://github.com/bvaughn/react-window/issues/302))                                              | ✅                                                                                                                                                                     | 🟠 (needs customization)                                                                                                                           | ✅                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Horizontal scroll in RTL direction                 | ✅                                                                                                               | ❌                                                                                                                               | ✅ ([may be dropped in v2](https://github.com/bvaughn/react-window/issues/302))                                              | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Grid (Virtualization for two dimension)            | 🟠 (experimental_VGrid)                                                                                          | ❌                                                                                                                               | ✅ (FixedSizeGrid / VariableSizeGrid)                                                                                        | ✅ ([Grid](https://github.com/bvaughn/react-virtualized/blob/master/docs/Grid.md))                                                                                     | 🟠 (needs customization)                                                                                                                           | ❌                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Table                                              | 🟠 (needs customization)                                                                                         | ✅ (TableVirtuoso)                                                                                                               | 🟠 (needs customization)                                                                                                     | ✅ ([Table](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md))                                                                                   | 🟠 (needs customization)                                                                                                                           | ❌                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Window scroller                                    | ✅ (WindowVirtualizer)                                                                                           | ✅                                                                                                                               | ❌                                                                                                                           | ✅ ([WindowScroller](https://github.com/bvaughn/react-virtualized/blob/master/docs/WindowScroller.md))                                                                 | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Dynamic list size                                  | ✅                                                                                                               | ✅                                                                                                                               | 🟠 (needs [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md))                           | 🟠 (needs [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md))                                                                     | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| Dynamic item size                                  | ✅                                                                                                               | ✅                                                                                                                               | 🟠 (needs additional codes and has wrong destination when scrolling to item imperatively)                                    | 🟠 (needs [CellMeasurer](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md) and has wrong destination when scrolling to item imperatively) | 🟠 (has wrong destination when scrolling to item imperatively)                                                                                     | ❌                                                                                                                                                 | 🟠 (has wrong destination when scrolling to item imperatively)                                                                           |
| Reverse scroll                                     | ✅                                                                                                               | ✅                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Reverse scroll in iOS Safari                       | ✅                                                                                                               | 🟠 ([has glitch with unknown sized items](https://github.com/petyosi/react-virtuoso/issues/945))                                 | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Infinite scroll                                    | ✅                                                                                                               | ✅                                                                                                                               | 🟠 (needs [react-window-infinite-loader](https://github.com/bvaughn/react-window-infinite-loader))                           | 🟠 (needs [InfiniteLoader](https://github.com/bvaughn/react-virtualized/blob/master/docs/InfiniteLoader.md))                                                           | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| Reverse (bi-directional) infinite scroll           | ✅                                                                                                               | ✅                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | 🟠 (has startItem method but its scroll position can be inaccurate)                                                                      |
| Scroll restoration                                 | ✅                                                                                                               | ✅ (getState)                                                                                                                    | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Smooth scroll                                      | ✅                                                                                                               | ✅                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| SSR support                                        | ✅                                                                                                               | ✅                                                                                                                               | ✅                                                                                                                           | ✅                                                                                                                                                                     | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| Render React Server Components (RSC) as children   | ✅                                                                                                               | ❌                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | 🟠(needs customization)                                                                                                                            | ❌                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Display exceeding browser's max element size limit | ❌                                                                                                               | ❌                                                                                                                               | ❌                                                                                                                           | ✅                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |

- ✅ - Built-in supported
- 🟠 - Supported but partial, limited or requires some user custom code
- ❌ - Not officially supported

### Benchmarks

WIP

## Contribute

All contributions are welcome.
If you find a problem, feel free to create an [issue](https://github.com/inokawa/virtua/issues) or a [PR](https://github.com/inokawa/virtua/pulls). If you have a question, ask in [discussions](https://github.com/inokawa/virtua/discussions).

### Making a Pull Request

1. Fork this repo.
2. Run `npm install`.
3. Commit your fix.
4. Make a PR and confirm all the CI checks passed.
