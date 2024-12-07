# virtua

![npm](https://img.shields.io/npm/v/virtua) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/virtua) ![npm](https://img.shields.io/npm/dw/virtua) [![Best of JS](https://img.shields.io/endpoint?url=https://bestofjs-serverless.now.sh/api/project-badge?fullName=inokawa%2Fvirtua%26since=daily)](https://bestofjs.org/projects/virtua) [![check](https://github.com/inokawa/virtua/actions/workflows/check.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/check.yml) [![demo](https://github.com/inokawa/virtua/actions/workflows/demo.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/demo.yml)

> A zero-config, fast and small (~3kB) virtual list (and grid) component for [React](https://github.com/facebook/react), [Vue](https://vuejs.org/), [Solid](https://www.solidjs.com/) and [Svelte](https://svelte.dev/).

![example](./example.gif)

If you want to check the difference with the alternatives right away, [see comparison section](#comparison).

## Motivation

This project is a challenge to rethink virtualization. The goals are...

- **Zero-config virtualization:** This library is designed to give the best performance without configuration. It also handles common hard things in the real world (dynamic size measurement, scroll position adjustment while reverse scrolling and imperative scrolling, iOS support, etc).
- **Fast:** Natural virtual scrolling needs optimization in many aspects (eliminate frame drops by reducing CPU usage and GC, reduce [synchronous layout recalculation](https://gist.github.com/paulirish/5d52fb081b3570c81e3a), reduce visual jumps on repaint, optimize with CSS, optimize for frameworks, etc). We are trying to combine the best of them.
- **Small:** Its bundle size should be small as much as possible to be friendly with modern web development. Currently each components are ~3kB gzipped and tree-shakeable. The total size for React is [~5kB gzipped](https://bundlephobia.com/package/virtua).
- **Flexible:** Aiming to support many usecases - fixed size, dynamic size, horizontal scrolling, reverse scrolling, RTL, mobile, infinite scrolling, scroll restoration, DnD, keyboard navigation, sticky, placeholder and more. See [live demo](#demo).
- **Framework agnostic:** [React](https://react.dev/), [Vue](https://vuejs.org/), [Solid](https://www.solidjs.com/) and [Svelte](https://svelte.dev/) are supported. We could support other frameworks in the future.

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

const sizes = [20, 40, 180, 77];
const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);
</script>

<template>
  <VList :data="data" :style="{ height: '800px' }" #default="{ item, index }">
    <div
      :key="index"
      :style="{
        height: item + 'px',
        background: 'white',
        borderBottom: 'solid 1px #ccc',
      }"
    >
      {{ index }}
    </div>
  </VList>
</template>
```

### Solid

`solid-js >= 1.0` is required.

```tsx
import { VList } from "virtua/solid";

export const App = () => {
  const sizes = [20, 40, 80, 77];
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);

  return (
    <VList data={data} style={{ height: "800px" }}>
      {(d, i) => (
        <div
          style={{
            height: d + "px",
            "border-bottom": "solid 1px #ccc",
            background: "#fff",
          }}
        >
          {i}
        </div>
      )}
    </VList>
  );
};
```

### Svelte

`svelte >= 5.0` is required.

```svelte
<script lang="ts">
  import { VList } from "virtua/svelte";

  const sizes = [20, 40, 180, 77];

  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4] );
</script>

<VList {data} style="height: 100vh;" getKey={(_, i) => i}>
  {#snippet children(item, index)}
    <div
      style="
        height: {item}px;
        background: white;
        border-bottom: solid 1px #ccc;
      "
    >
      {index}
    </div>
  {/snippet}
</VList>
```

## Documentation

- [API reference](./docs/API.md)
- [Storybook examples](./stories) for more usages

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

It may be dispatched by ResizeObserver in this lib [as described in spec](https://www.w3.org/TR/resize-observer/#deliver-resize-error), and [this is a common problem with ResizeObserver](https://github.com/w3c/csswg-drafts/issues/5488). If it bothers you,
[you can safely ignore it](https://github.com/DevExpress/testcafe/issues/4857#issuecomment-598775956).

Especially for `webpack-dev-server`, [you can filter out the specific error with `devServer.client.overlay.runtimeErrors` option](https://webpack.js.org/configuration/dev-server/#overlay).

#### Why `VListHandle.viewportSize` is 0 on mount?

`viewportSize` will be calculated by ResizeObserver so it's 0 until the first measurement.

#### What is `Cannot find module 'virtua/vue(solid|svelte)' or its corresponding type declarations` error?

This package uses [exports of package.json](https://nodejs.org/api/packages.html#package-entry-points) for entry point of Vue/Solid/Svelte adapter. This field can't be resolved in TypeScript with `moduleResolution: node`. Try `moduleResolution: bundler` or `moduleResolution: nodenext` instead.

## Comparison

### Features

|                                                                                                                                                                | [virtua](https://github.com/inokawa/virtua)                                                                      | [react-virtuoso](https://github.com/petyosi/react-virtuoso)                                                                      | [react-window](https://github.com/bvaughn/react-window)                                                                      | [react-virtualized](https://github.com/bvaughn/react-virtualized)                                                                                                      | [@tanstack/react-virtual](https://github.com/TanStack/virtual)                                                                                     | [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list)                                                                    | [react-cool-virtual](https://github.com/wellyshen/react-cool-virtual)                                                                    |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Bundle size                                                                                                                                                    | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/virtua)](https://bundlephobia.com/package/virtua) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-virtuoso)](https://bundlephobia.com/package/react-virtuoso) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-window)](https://bundlephobia.com/package/react-window) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-virtualized)](https://bundlephobia.com/package/react-virtualized)                                 | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@tanstack/react-virtual)](https://bundlephobia.com/package/@tanstack/react-virtual) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-tiny-virtual-list)](https://bundlephobia.com/package/react-tiny-virtual-list) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-cool-virtual)](https://bundlephobia.com/package/react-cool-virtual) |
| Vertical scroll                                                                                                                                                | ✅                                                                                                               | ✅                                                                                                                               | ✅                                                                                                                           | ✅                                                                                                                                                                     | 🟠 (needs customization)                                                                                                                           | ✅                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Horizontal scroll                                                                                                                                              | ✅                                                                                                               | ✅                                                                                                                               | ✅ ([may be dropped in v2](https://github.com/bvaughn/react-window/issues/302))                                              | ✅                                                                                                                                                                     | 🟠 (needs customization)                                                                                                                           | ✅                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Horizontal scroll in RTL direction                                                                                                                             | ✅                                                                                                               | ❌                                                                                                                               | ✅ ([may be dropped in v2](https://github.com/bvaughn/react-window/issues/302))                                              | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Grid (Virtualization for two dimension)                                                                                                                        | 🟠 (experimental_VGrid)                                                                                          | ❌                                                                                                                               | ✅ (FixedSizeGrid / VariableSizeGrid)                                                                                        | ✅ ([Grid](https://github.com/bvaughn/react-virtualized/blob/master/docs/Grid.md))                                                                                     | 🟠 (needs customization)                                                                                                                           | ❌                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Table                                                                                                                                                          | 🟠 (needs customization)                                                                                         | ✅ (TableVirtuoso)                                                                                                               | 🟠 (needs customization)                                                                                                     | 🟠 ([Table](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md) but it's built with div)                                                           | 🟠 (needs customization)                                                                                                                           | ❌                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Window scroller                                                                                                                                                | ✅ (WindowVirtualizer)                                                                                           | ✅                                                                                                                               | ❌                                                                                                                           | ✅ ([WindowScroller](https://github.com/bvaughn/react-virtualized/blob/master/docs/WindowScroller.md))                                                                 | ✅ (useWindowVirtualizer)                                                                                                                          | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Dynamic list size                                                                                                                                              | ✅                                                                                                               | ✅                                                                                                                               | 🟠 (needs [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md))                           | 🟠 (needs [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md))                                                                     | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| Dynamic item size                                                                                                                                              | ✅                                                                                                               | ✅                                                                                                                               | 🟠 (needs additional codes and has wrong destination when scrolling to item imperatively)                                    | 🟠 (needs [CellMeasurer](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md) and has wrong destination when scrolling to item imperatively) | 🟠 (has wrong destination when scrolling to item imperatively)                                                                                     | ❌                                                                                                                                                 | 🟠 (has wrong destination when scrolling to item imperatively)                                                                           |
| Reverse scroll                                                                                                                                                 | ✅                                                                                                               | ✅                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Reverse scroll in iOS Safari                                                                                                                                   | 🟠 ([user must release scroll](https://github.com/inokawa/virtua/issues/473))                                    | 🟠 ([has glitch with unknown sized items](https://github.com/petyosi/react-virtuoso/issues/945))                                 | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Infinite scroll                                                                                                                                                | ✅                                                                                                               | ✅                                                                                                                               | 🟠 (needs [react-window-infinite-loader](https://github.com/bvaughn/react-window-infinite-loader))                           | 🟠 (needs [InfiniteLoader](https://github.com/bvaughn/react-virtualized/blob/master/docs/InfiniteLoader.md))                                                           | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| Reverse (bi-directional) infinite scroll                                                                                                                       | ✅                                                                                                               | ✅                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | 🟠 (has startItem method but its scroll position can be inaccurate)                                                                      |
| Scroll restoration                                                                                                                                             | ✅                                                                                                               | ✅ (getState)                                                                                                                    | ❌                                                                                                                           | ❌                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |
| Smooth scroll                                                                                                                                                  | ✅                                                                                                               | ✅                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| SSR support                                                                                                                                                    | ✅                                                                                                               | ✅                                                                                                                               | ✅                                                                                                                           | ✅                                                                                                                                                                     | ✅                                                                                                                                                 | ❌                                                                                                                                                 | ✅                                                                                                                                       |
| Render React Server Components (RSC) as children                                                                                                               | ✅                                                                                                               | ❌                                                                                                                               | ❌                                                                                                                           | ❌                                                                                                                                                                     | 🟠(needs customization)                                                                                                                            | ❌                                                                                                                                                 | 🟠 (needs customization)                                                                                                                 |
| Display exceeding [browser's max element size](https://stackoverflow.com/questions/10882769/do-the-browsers-have-a-maximum-height-for-the-body-document) limit | ❌                                                                                                               | ❌                                                                                                                               | ❌                                                                                                                           | ✅                                                                                                                                                                     | ❌                                                                                                                                                 | ❌                                                                                                                                                 | ❌                                                                                                                                       |

- ✅ - Built-in supported
- 🟠 - Supported but partial, limited or requires some user custom code
- ❌ - Not officially supported

### Benchmark

A rough benchmark with vitest running on headless Chromium.

> [!WARNING]
> Each virtualization library has different characteristics. Their performance on browser varies depending on library settings and situations.

```sh
npm install
npm run bench
```

This is a result in my Intel MacBook Pro 2018.

```
 ✓ index.bench.tsx (48) 264126ms
   ✓ mount / 1000 items / same sized items (6) 5167ms
     name                                 hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · virtua@0.39.0 (elements)         144.38   5.2000  27.6000   6.9260   6.6000  27.6000  27.6000  27.6000   ±9.91%       73   fastest
   · virtua@0.39.0 (render prop)     61.9133  12.7000  21.2000  16.1516  16.9000  21.2000  21.2000  21.2000   ±4.49%       31
   · react-virtualized@9.22.5        31.6456  29.3000  33.8000  31.6000  33.4000  33.8000  33.8000  33.8000   ±2.64%       16
   · react-window@1.8.10             27.6954  30.4000  86.4000  36.1071  33.3000  86.4000  86.4000  86.4000  ±23.21%       14   slowest
   · react-virtuoso@4.12.3           36.6512  25.4000  29.7000  27.2842  28.4000  29.7000  29.7000  29.7000   ±2.44%       19
   · @tanstack/react-virtual@3.11.0  28.3286  33.4000  38.1000  35.3000  36.4000  38.1000  38.1000  38.1000   ±2.35%       15
   ✓ mount / 1000 items / dynamic sized items (6) 4825ms
     name                                 hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · virtua@0.39.0 (elements)        27.5645  33.6000  38.7000  36.2786  37.3000  38.7000  38.7000  38.7000   ±2.50%       14
   · virtua@0.39.0 (render prop)     27.7338  33.7000  39.1000  36.0571  37.5000  39.1000  39.1000  39.1000   ±2.79%       14   fastest
   · react-virtualized@9.22.5        21.3717  44.1000  49.3000  46.7909  48.9000  49.3000  49.3000  49.3000   ±2.89%       11
   · react-window@1.8.10             20.6884  43.3000  64.2000  48.3364  47.7000  64.2000  64.2000  64.2000  ±10.12%       11   slowest
   · react-virtuoso@4.12.3           24.1411  38.9000  43.8000  41.4231  42.8000  43.8000  43.8000  43.8000   ±2.40%       13
   · @tanstack/react-virtual@3.11.0  21.5433  44.4000  49.4000  46.4182  47.3000  49.4000  49.4000  49.4000   ±1.96%       11
   ✓ mount / 1000 items / heavy DOM (6) 17132ms
     name                                 hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · virtua@0.39.0 (elements)        16.4204  56.3000  69.2000  60.9000  61.7000  69.2000  69.2000  69.2000   ±3.96%       10   fastest
   · virtua@0.39.0 (render prop)     10.4756  77.7000   106.60  95.4600   103.00   106.60   106.60   106.60   ±8.07%       10
   · react-virtualized@9.22.5         4.8735   160.90   361.70   205.19   201.80   361.70   361.70   361.70  ±21.34%       10
   · react-window@1.8.10              4.5566   201.40   230.40   219.46   225.40   230.40   230.40   230.40   ±2.97%       10
   · react-virtuoso@4.12.3            4.8400   200.10   215.30   206.61   209.70   215.30   215.30   215.30   ±1.68%       10
   · @tanstack/react-virtual@3.11.0   3.3565   264.10   426.10   297.93   295.00   426.10   426.10   426.10  ±11.10%       10   slowest
   ✓ mount / 1000 items / heavy JS (6) 48444ms
     name                                hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · virtua@0.39.0 (elements)        3.4565  262.00  317.00  289.31  293.50  317.00  317.00  317.00  ±3.97%       10
   · virtua@0.39.0 (render prop)     3.6686  266.80  278.10  272.58  276.80  278.10  278.10  278.10  ±1.10%       10
   · react-virtualized@9.22.5        1.6057  592.80  825.70  622.78  604.70  825.70  825.70  825.70  ±8.22%       10   slowest
   · react-window@1.8.10             1.7930  532.50  638.80  557.72  565.10  638.80  638.80  638.80  ±4.01%       10
   · react-virtuoso@4.12.3           3.7942  240.60  292.90  263.56  276.20  292.90  292.90  292.90  ±4.77%       10   fastest
   · @tanstack/react-virtual@3.11.0  1.7890  512.40  767.50  558.98  553.70  767.50  767.50  767.50  ±9.66%       10
   ✓ mount / 100000 items / same sized items (6) 30778ms
     name                                hz     min     max    mean     p75     p99    p995    p999      rme  samples
   · virtua@0.39.0 (elements)        1.8634  478.40  956.20  536.64  493.40  956.20  956.20  956.20  ±19.68%       10   slowest
   · virtua@0.39.0 (render prop)     3.5119  264.30  301.30  284.75  291.50  301.30  301.30  301.30   ±2.56%       10   fastest
   · react-virtualized@9.22.5        3.4047  284.80  302.10  293.71  296.90  302.10  302.10  302.10   ±1.27%       10
   · react-window@1.8.10             3.2766  296.60  317.00  305.19  309.80  317.00  317.00  317.00   ±1.71%       10
   · react-virtuoso@4.12.3           3.4557  275.30  321.00  289.38  289.00  321.00  321.00  321.00   ±3.42%       10
   · @tanstack/react-virtual@3.11.0  3.0618  314.70  341.80  326.60  332.00  341.80  341.80  341.80   ±1.85%       10
   ✓ mount / 100000 items / dynamic sized items (6) 32889ms
     name                                hz     min       max    mean     p75       p99      p995      p999      rme  samples
   · virtua@0.39.0 (elements)        1.7017  486.60  1,349.20  587.64  510.30  1,349.20  1,349.20  1,349.20  ±32.59%       10   slowest
   · virtua@0.39.0 (render prop)     3.3421  284.50    313.30  299.21  303.60    313.30    313.30    313.30   ±2.12%       10
   · react-virtualized@9.22.5        3.3629  285.90    314.80  297.36  300.60    314.80    314.80    314.80   ±1.93%       10
   · react-window@1.8.10             3.2632  300.40    321.10  306.45  310.40    321.10    321.10    321.10   ±1.58%       10
   · react-virtuoso@4.12.3           3.3731  285.70    312.50  296.46  307.20    312.50    312.50    312.50   ±2.53%       10   fastest
   · @tanstack/react-virtual@3.11.0  2.4953  307.40  1,144.40  400.76  329.90  1,144.40  1,144.40  1,144.40  ±46.67%       10
   ✓ mount / 100000 items / heavy DOM (6) 45815ms
     name                                hz     min       max    mean     p75       p99      p995      p999      rme  samples
   · virtua@0.39.0 (elements)        1.8797  513.50    552.90  531.99  541.00    552.90    552.90    552.90   ±1.74%       10
   · virtua@0.39.0 (render prop)     2.8553  327.80    364.00  350.22  359.30    364.00    364.00    364.00   ±2.52%       10   fastest
   · react-virtualized@9.22.5        1.8016  423.60  1,201.20  555.07  461.10  1,201.20  1,201.20  1,201.20  ±32.57%       10
   · react-window@1.8.10             2.1025  439.20    497.30  475.63  487.20    497.30    497.30    497.30   ±2.74%       10
   · react-virtuoso@4.12.3           2.1951  442.60    467.50  455.57  459.60    467.50    467.50    467.50   ±1.20%       10
   · @tanstack/react-virtual@3.11.0  1.4734  547.00  1,736.80  678.71  571.30  1,736.80  1,736.80  1,736.80  ±39.19%       10   slowest
   ✓ mount / 100000 items / heavy JS (6) 78926ms
     name                                hz     min       max    mean     p75       p99      p995      p999      rme  samples
   · virtua@0.39.0 (elements)        1.0982  730.80  2,364.80  910.58  768.60  2,364.80  2,364.80  2,364.80  ±40.15%       10
   · virtua@0.39.0 (render prop)     1.8695  510.80    561.60  534.89  552.10    561.60    561.60    561.60   ±2.43%       10   fastest
   · react-virtualized@9.22.5        1.0132  813.90  2,005.70  986.98  917.90  2,005.70  2,005.70  2,005.70  ±26.46%       10   slowest
   · react-window@1.8.10             1.2407  769.60    864.50  806.01  858.50    864.50    864.50    864.50   ±3.46%       10
   · react-virtuoso@4.12.3           1.6482  504.20  1,332.60  606.73  531.50  1,332.60  1,332.60  1,332.60  ±30.12%       10
   · @tanstack/react-virtual@3.11.0  1.0522  769.70  2,150.60  950.36  821.90  2,150.60  2,150.60  2,150.60  ±32.16%       10

 BENCH  Summary

  virtua@0.39.0 (elements) - index.bench.tsx > mount / 1000 items / same sized items
    2.33x faster than virtua@0.39.0 (render prop)
    3.94x faster than react-virtuoso@4.12.3
    4.56x faster than react-virtualized@9.22.5
    5.10x faster than @tanstack/react-virtual@3.11.0
    5.21x faster than react-window@1.8.10

  virtua@0.39.0 (render prop) - index.bench.tsx > mount / 1000 items / dynamic sized items
    1.01x faster than virtua@0.39.0 (elements)
    1.15x faster than react-virtuoso@4.12.3
    1.29x faster than @tanstack/react-virtual@3.11.0
    1.30x faster than react-virtualized@9.22.5
    1.34x faster than react-window@1.8.10

  virtua@0.39.0 (elements) - index.bench.tsx > mount / 1000 items / heavy DOM
    1.57x faster than virtua@0.39.0 (render prop)
    3.37x faster than react-virtualized@9.22.5
    3.39x faster than react-virtuoso@4.12.3
    3.60x faster than react-window@1.8.10
    4.89x faster than @tanstack/react-virtual@3.11.0

  react-virtuoso@4.12.3 - index.bench.tsx > mount / 1000 items / heavy JS
    1.03x faster than virtua@0.39.0 (render prop)
    1.10x faster than virtua@0.39.0 (elements)
    2.12x faster than react-window@1.8.10
    2.12x faster than @tanstack/react-virtual@3.11.0
    2.36x faster than react-virtualized@9.22.5

  virtua@0.39.0 (render prop) - index.bench.tsx > mount / 100000 items / same sized items
    1.02x faster than react-virtuoso@4.12.3
    1.03x faster than react-virtualized@9.22.5
    1.07x faster than react-window@1.8.10
    1.15x faster than @tanstack/react-virtual@3.11.0
    1.88x faster than virtua@0.39.0 (elements)

  react-virtuoso@4.12.3 - index.bench.tsx > mount / 100000 items / dynamic sized items
    1.00x faster than react-virtualized@9.22.5
    1.01x faster than virtua@0.39.0 (render prop)
    1.03x faster than react-window@1.8.10
    1.35x faster than @tanstack/react-virtual@3.11.0
    1.98x faster than virtua@0.39.0 (elements)

  virtua@0.39.0 (render prop) - index.bench.tsx > mount / 100000 items / heavy DOM
    1.30x faster than react-virtuoso@4.12.3
    1.36x faster than react-window@1.8.10
    1.52x faster than virtua@0.39.0 (elements)
    1.58x faster than react-virtualized@9.22.5
    1.94x faster than @tanstack/react-virtual@3.11.0

  virtua@0.39.0 (render prop) - index.bench.tsx > mount / 100000 items / heavy JS
    1.13x faster than react-virtuoso@4.12.3
    1.51x faster than react-window@1.8.10
    1.70x faster than virtua@0.39.0 (elements)
    1.78x faster than @tanstack/react-virtual@3.11.0
    1.85x faster than react-virtualized@9.22.5
```

## Contribute

All contributions are welcome.
If you find a problem, feel free to create an [issue](https://github.com/inokawa/virtua/issues) or a [PR](https://github.com/inokawa/virtua/pulls). If you have a question, ask in [discussions](https://github.com/inokawa/virtua/discussions).

### Making a Pull Request

1. Fork this repo.
2. Run `npm install`.
3. Commit your fix.
4. Make a PR and confirm all the CI checks passed.
