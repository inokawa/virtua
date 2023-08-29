# virtua

![npm](https://img.shields.io/npm/v/virtua) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/virtua) ![npm](https://img.shields.io/npm/dw/virtua) [![check](https://github.com/inokawa/virtua/actions/workflows/check.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/check.yml) [![demo](https://github.com/inokawa/virtua/actions/workflows/demo.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/demo.yml)

> A zero-config, fast and small (~3kB) virtual list and grid component for [React](https://github.com/facebook/react).

![example](./example.gif)

If you want to check the difference with the alternatives right away, [see comparison section](#comparison).

## Motivation

This project is a challenge to rethink virtualization. The goals are...

- **Zero-config virtualization:** This library is designed to give the best performance without configuration. It also handles common hard things in the real world (dynamic size measurement, scroll position adjustment while reverse scrolling and imperative scrolling, etc).
- **Fast:** Scrolling without frame drop needs optimization in many aspects (reduce CPU usage, reduce GC, [reduce layout recalculation](https://gist.github.com/paulirish/5d52fb081b3570c81e3a), optimize with CSS, optimize for frameworks, etc). We are trying to combine the best of them.
- **Small:** Its bundle size should be small as much as possible to be friendly with modern web development. Currently each components are ~3kB gzipped and the total is [~5kB gzipped](https://bundlephobia.com/package/virtua).
- **Flexible:** Aiming to support many usecases - fixed size, dynamic size, horizontal scrolling, reverse scrolling, rtl direction, sticky, infinite scrolling, placeholder, scrollTo, scroll restoration, dnd, table, and more. See [live demo](#demo).
- **Framework agnostic (WIP):** Currently only for [React](https://react.dev/) but we could support [Vue](https://vuejs.org/), [Svelte](https://svelte.dev/), [Solid](https://www.solidjs.com/), [Angular](https://angular.io/), [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) and more in the future.

## Demo

https://inokawa.github.io/virtua/

## Install

```sh
npm install virtua
```

### Requirements

- react >= 16.14

If you use ESM and webpack 5, use react >= 18 to avoid [Can't resolve `react/jsx-runtime` error](https://github.com/facebook/react/issues/20235).

If you use this lib in [legacy browsers which does not have ResizeObserver](https://caniuse.com/?search=resizeobserver), you should use [polyfill](https://github.com/juggle/resize-observer#switching-between-native-and-polyfilled-versions).

## Usage

### Vertical scroll

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

### Horizontal scroll

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

### Vertical and horizontal scroll

```tsx
import { VGrid } from "virtua";

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

### Window scroll

```tsx
import { WVList } from "virtua";

export const App = () => {
  return (
    <div style={{ padding: 200 }}>
      <WVList>
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
      </WVList>
    </div>
  );
};
```

### React Server Components (RSC) support

This library is marked as a Client Component. You can render RSC as children of VList or WVList.

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

And see [examples](./stories) for more usages.

## Documentation

- [API reference](./docs/API.md)

### FAQs

#### Is there any way to improve performance further?

In complex usage, children element generation can be a performance bottle neck if you re-render frequently the parent of virtual scroller and the children are tons of items, because React element generation is not free and new React element instance breaks some of memoization inside virtual scroller. In that case use useMemo to reduce computation and keep the elements' instance the same.

```tsx
const elements = useMemo(
  () => array.map((d) => <Component key={d.id} {...d} />),
  [array]
);
const [position, setPosition] = useState(0);
return (
  <div>
    <div>position: {position}</div>
    <VList onScroll={(offset) => setPosition(offset)}>{elements}</VList>
  </div>
);
```

#### What is `ResizeObserver loop completed with undelivered notifications.` error?

It may be dispatched by ResizeObserver in this lib [as described in spec](https://www.w3.org/TR/resize-observer/#deliver-resize-error). If it bothers you,
[you can safely ignore it](https://github.com/DevExpress/testcafe/issues/4857#issuecomment-598775956).

## Comparison

### Features

|                                                    | [virtua](https://github.com/inokawa/virtua)              | [react-virtuoso](https://github.com/petyosi/react-virtuoso)       | [react-window](https://github.com/bvaughn/react-window)                                            | [react-virtualized](https://github.com/bvaughn/react-virtualized)                                                                                                      | [@tanstack/react-virtual](https://github.com/TanStack/virtual)            | [react-cool-virtual](https://github.com/wellyshen/react-cool-virtual) |
| :------------------------------------------------- | :------------------------------------------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :-------------------------------------------------------------------- |
| Bundle size                                        | [4.7kB gzipped](https://bundlephobia.com/package/virtua) | [16.3kB gzipped](https://bundlephobia.com/package/react-virtuoso) | [6.4kB gzipped](https://bundlephobia.com/package/react-window)                                     | [27.3kB gzipped](https://bundlephobia.com/package/react-virtualized)                                                                                                   | [2.3kB gzipped](https://bundlephobia.com/package/@tanstack/react-virtual) | [3.1kB gzipped](https://bundlephobia.com/package/react-cool-virtual)  |
| Vertical scroll                                    | ✅                                                       | ✅                                                                | ✅                                                                                                 | ✅                                                                                                                                                                     | 🟠 (needs customization)                                                  | 🟠 (needs customization)                                              |
| Horizontal scroll                                  | ✅                                                       | ❌                                                                | ✅                                                                                                 | ✅                                                                                                                                                                     | 🟠 (needs customization)                                                  | 🟠 (needs customization)                                              |
| Grid (Virtualization for two dimension)            | ✅ (VGrid)                                               | ❌                                                                | ✅ (FixedSizeGrid / VariableSizeGrid)                                                              | ✅ ([Grid](https://github.com/bvaughn/react-virtualized/blob/master/docs/Grid.md))                                                                                     | 🟠 (needs customization)                                                  | 🟠 (needs customization)                                              |
| Table                                              | 🟠 (needs customization)                                 | ✅ (TableVirtuoso)                                                | 🟠 (needs customization)                                                                           | ✅ ([Table](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md))                                                                                   | 🟠 (needs customization)                                                  | 🟠 (needs customization)                                              |
| Window scroller                                    | ✅ (WVList)                                              | ✅                                                                | ❌                                                                                                 | ✅ ([WindowScroller](https://github.com/bvaughn/react-virtualized/blob/master/docs/WindowScroller.md))                                                                 | ✅                                                                        | ❌                                                                    |
| Dynamic list size                                  | ✅                                                       | ✅                                                                | 🟠 (needs [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md)) | 🟠 (needs [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md))                                                                     | ✅                                                                        | ✅                                                                    |
| Dynamic item size                                  | ✅                                                       | ✅                                                                | 🟠 (needs additional codes and has wrong destination when scrolling to item imperatively)          | 🟠 (needs [CellMeasurer](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md) and has wrong destination when scrolling to item imperatively) | 🟠 (has wrong destination when scrolling to item imperatively)            | 🟠 (has wrong destination when scrolling to item imperatively)        |
| Reverse scroll                                     | ✅                                                       | ✅                                                                | ❌                                                                                                 | ❌                                                                                                                                                                     | ❌                                                                        | ❌                                                                    |
| Reverse scroll in iOS Safari                       | ❌                                                       | ✅                                                                | ❌                                                                                                 | ❌                                                                                                                                                                     | ❌                                                                        | ❌                                                                    |
| Infinite scroll                                    | ✅                                                       | ✅                                                                | 🟠 (needs [react-window-infinite-loader](https://github.com/bvaughn/react-window-infinite-loader)) | 🟠 (needs [InfiniteLoader](https://github.com/bvaughn/react-virtualized/blob/master/docs/InfiniteLoader.md))                                                           | ✅                                                                        | ✅                                                                    |
| Reverse (bi-directional) infinite scroll           | ✅                                                       | ✅                                                                | ❌                                                                                                 | ❌                                                                                                                                                                     | ❌                                                                        | 🟠 (has startItem method but its scroll position can be inaccurate)   |
| Scroll restoration                                 | ✅                                                       | ✅ (getState)                                                     | ❌                                                                                                 | ❌                                                                                                                                                                     | ❌                                                                        | ❌                                                                    |
| Smooth scroll                                      | ❌                                                       | ✅                                                                | ❌                                                                                                 | ❌                                                                                                                                                                     | ✅                                                                        | ✅                                                                    |
| RTL direction                                      | ✅                                                       | ❌                                                                | ✅                                                                                                 | ❌                                                                                                                                                                     | ❌                                                                        | ❌                                                                    |
| SSR support                                        | ✅                                                       | ✅                                                                | ✅                                                                                                 | ✅                                                                                                                                                                     | ✅                                                                        | ✅                                                                    |
| React Server Components (RSC) support              | ✅                                                       | ?                                                                 | ?                                                                                                  | ?                                                                                                                                                                      | ✅ (hook)                                                                 | ✅ (hook)                                                             |
| Display exceeding browser's max element size limit | ❌                                                       | ❌                                                                | ❌                                                                                                 | ✅                                                                                                                                                                     | ❌                                                                        | ❌                                                                    |

- ✅ - Built-in supported
- 🟠 - Supported but partial, limited or requires some user custom code
- ❌ - Not officially supported

### Benchmarks

WIP

Basically by design, this library uses children instead of render prop like other virtual scrollers.
It reduces rerender during scrolling with [caching element instances](https://github.com/facebook/react/issues/8669#issuecomment-270032204). However it may make component's mount slower if you display million items.

## Contribute

All contributions are welcome.
If you find a problem, feel free to create an [issue](https://github.com/inokawa/virtua/issues) or a [PR](https://github.com/inokawa/virtua/pulls).

### Making a Pull Request

1. Fork this repo.
2. Run `npm install`.
3. Commit your fix.
4. Make a PR and confirm all the CI checks passed.
