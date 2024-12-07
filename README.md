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
 ✓ index.bench.tsx (36) 98015ms
   ✓ mount / 1000 items / same sized items (6) 5101ms
     name                                 hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · virtua@0.39.0 (elements)         149.40   4.7000  33.5000   6.6933   6.4000  33.5000  33.5000  33.5000  ±12.08%       75   fastest
   · virtua@0.39.0 (render prop)     64.5035  13.8000  19.1000  15.5030  17.2000  19.1000  19.1000  19.1000   ±3.55%       33
   · react-virtualized@9.22.5        32.2826  28.6000  34.0000  30.9765  32.5000  34.0000  34.0000  34.0000   ±2.78%       17
   · react-window@1.8.10             27.4026  30.7000  81.0000  36.4929  34.9000  81.0000  81.0000  81.0000  ±20.46%       14   slowest
   · react-virtuoso@4.12.3           35.3496  25.9000  30.8000  28.2889  28.9000  30.8000  30.8000  30.8000   ±2.32%       18
   · @tanstack/react-virtual@3.11.0  27.8385  34.2000  39.0000  35.9214  37.2000  39.0000  39.0000  39.0000   ±2.53%       14
   ✓ mount / 1000 items / dynamic sized items (6) 4870ms
     name                                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · virtua@0.39.0 (elements)        26.9646  34.8000  39.2000  37.0857  38.4000  39.2000  39.2000  39.2000  ±2.24%       14
   · virtua@0.39.0 (render prop)     27.5482  34.6000  38.6000  36.3000  37.2000  38.6000  38.6000  38.6000  ±2.03%       14   fastest
   · react-virtualized@9.22.5        20.9884  43.8000  50.8000  47.6455  49.7000  50.8000  50.8000  50.8000  ±3.52%       11
   · react-window@1.8.10             20.2840  44.0000  66.3000  49.3000  49.1000  66.3000  66.3000  66.3000  ±8.46%       11   slowest
   · react-virtuoso@4.12.3           23.5064  39.8000  44.7000  42.5417  43.9000  44.7000  44.7000  44.7000  ±2.71%       12
   · @tanstack/react-virtual@3.11.0  21.0970  44.1000  49.2000  47.4000  48.4000  49.2000  49.2000  49.2000  ±2.26%       11
   ✓ mount / 1000 items / same sized, heavy items (6) 28506ms
     name                                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · virtua@0.39.0 (elements)        12.5992  75.4000  83.4000  79.3700  80.2000  83.4000  83.4000  83.4000  ±2.00%       10
   · virtua@0.39.0 (render prop)     15.3633  63.5000  67.8000  65.0900  65.1000  67.8000  67.8000  67.8000  ±1.40%       10
   · react-virtualized@9.22.5         2.5050   385.20   488.00   399.20   391.70   488.00   488.00   488.00  ±5.63%       10   slowest
   · react-window@1.8.10              2.9734   330.30   345.70   336.31   339.70   345.70   345.70   345.70  ±0.94%       10
   · react-virtuoso@4.12.3           18.6498  49.8000  59.7000  53.6200  56.1000  59.7000  59.7000  59.7000  ±4.25%       10   fastest
   · @tanstack/react-virtual@3.11.0   3.1405   315.90   322.10   318.42   320.20   322.10   322.10   322.10  ±0.48%       10
   ✓ mount / 100000 items / same sized items (6) 10629ms
     name                                 hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · virtua@0.39.0 (elements)         3.3494   267.10   430.20   298.56   289.10   430.20   430.20   430.20  ±11.35%       10   slowest
   · virtua@0.39.0 (render prop)     15.9033  60.4000  64.9000  62.8800  64.1000  64.9000  64.9000  64.9000   ±1.76%       10   fastest
   · react-virtualized@9.22.5        13.7043  69.4000  75.5000  72.9700  74.4000  75.5000  75.5000  75.5000   ±2.09%       10
   · react-window@1.8.10             12.1374  77.1000  85.0000  82.3900  84.3000  85.0000  85.0000  85.0000   ±1.94%       10
   · react-virtuoso@4.12.3           14.1323  66.7000  73.6000  70.7600  72.8000  73.6000  73.6000  73.6000   ±2.30%       10
   · @tanstack/react-virtual@3.11.0   9.8600  96.1000   108.60   101.42   104.60   108.60   108.60   108.60   ±2.81%       10
   ✓ mount / 100000 items / dynamic sized items (6) 12819ms
     name                                 hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · virtua@0.39.0 (elements)         3.2517   296.80   323.40   307.53   313.30   323.40   323.40   323.40   ±2.00%       10   slowest
   · virtua@0.39.0 (render prop)     12.6326  75.9000  81.4000  79.1600  80.3000  81.4000  81.4000  81.4000   ±1.52%       10   fastest
   · react-virtualized@9.22.5        11.4903  83.5000  88.3000  87.0300  88.1000  88.3000  88.3000  88.3000   ±1.17%       10
   · react-window@1.8.10             10.5899  92.2000  97.4000  94.4300  95.0000  97.4000  97.4000  97.4000   ±1.06%       10
   · react-virtuoso@4.12.3           10.3831  76.9000   184.90  96.3100   100.30   184.90   184.90   184.90  ±24.53%       10
   · @tanstack/react-virtual@3.11.0   9.4545   102.70   109.80   105.77   106.80   109.80   109.80   109.80   ±1.47%       10
   ✓ mount / 100000 items / same sized, heavy items (6) 36012ms
     name                                 hz      min     max     mean      p75     p99    p995    p999      rme  samples
   · virtua@0.39.0 (elements)         3.0557   322.40  334.60   327.26   329.70  334.60  334.60  334.60   ±0.87%       10
   · virtua@0.39.0 (render prop)      9.2507   103.80  112.90   108.10   112.60  112.90  112.90  112.90   ±2.39%       10
   · react-virtualized@9.22.5         1.9927   425.90  939.70   501.83   436.60  939.70  939.70  939.70  ±23.72%       10   slowest
   · react-window@1.8.10              2.6018   379.80  389.50   384.35   387.20  389.50  389.50  389.50   ±0.60%       10
   · react-virtuoso@4.12.3           10.6270  87.3000  100.30  94.1000  98.1000  100.30  100.30  100.30   ±3.27%       10   fastest
   · @tanstack/react-virtual@3.11.0   2.6173   373.50  396.60   382.07   383.70  396.60  396.60  396.60   ±1.15%       10

 BENCH  Summary

  virtua@0.39.0 (elements) - index.bench.tsx > mount / 1000 items / same sized items
    2.32x faster than virtua@0.39.0 (render prop)
    4.23x faster than react-virtuoso@4.12.3
    4.63x faster than react-virtualized@9.22.5
    5.37x faster than @tanstack/react-virtual@3.11.0
    5.45x faster than react-window@1.8.10

  virtua@0.39.0 (render prop) - index.bench.tsx > mount / 1000 items / dynamic sized items
    1.02x faster than virtua@0.39.0 (elements)
    1.17x faster than react-virtuoso@4.12.3
    1.31x faster than @tanstack/react-virtual@3.11.0
    1.31x faster than react-virtualized@9.22.5
    1.36x faster than react-window@1.8.10

  react-virtuoso@4.12.3 - index.bench.tsx > mount / 1000 items / same sized, heavy items
    1.21x faster than virtua@0.39.0 (render prop)
    1.48x faster than virtua@0.39.0 (elements)
    5.94x faster than @tanstack/react-virtual@3.11.0
    6.27x faster than react-window@1.8.10
    7.44x faster than react-virtualized@9.22.5

  virtua@0.39.0 (render prop) - index.bench.tsx > mount / 100000 items / same sized items
    1.13x faster than react-virtuoso@4.12.3
    1.16x faster than react-virtualized@9.22.5
    1.31x faster than react-window@1.8.10
    1.61x faster than @tanstack/react-virtual@3.11.0
    4.75x faster than virtua@0.39.0 (elements)

  virtua@0.39.0 (render prop) - index.bench.tsx > mount / 100000 items / dynamic sized items
    1.10x faster than react-virtualized@9.22.5
    1.19x faster than react-window@1.8.10
    1.22x faster than react-virtuoso@4.12.3
    1.34x faster than @tanstack/react-virtual@3.11.0
    3.88x faster than virtua@0.39.0 (elements)

  react-virtuoso@4.12.3 - index.bench.tsx > mount / 100000 items / same sized, heavy items
    1.15x faster than virtua@0.39.0 (render prop)
    3.48x faster than virtua@0.39.0 (elements)
    4.06x faster than @tanstack/react-virtual@3.11.0
    4.08x faster than react-window@1.8.10
    5.33x faster than react-virtualized@9.22.5
```

## Contribute

All contributions are welcome.
If you find a problem, feel free to create an [issue](https://github.com/inokawa/virtua/issues) or a [PR](https://github.com/inokawa/virtua/pulls). If you have a question, ask in [discussions](https://github.com/inokawa/virtua/discussions).

### Making a Pull Request

1. Fork this repo.
2. Run `npm install`.
3. Commit your fix.
4. Make a PR and confirm all the CI checks passed.
