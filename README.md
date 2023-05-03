# virtua

![npm](https://img.shields.io/npm/v/virtua) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/virtua) ![npm](https://img.shields.io/npm/dw/virtua) [![check](https://github.com/inokawa/virtua/actions/workflows/check.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/check.yml) [![demo](https://github.com/inokawa/virtua/actions/workflows/demo.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/demo.yml)

A zero-config, fast and small (3kB) virtual list component for [React](https://github.com/facebook/react).

## Motivation

This project is a challenge to rethink virtualization. The goals are...

- **Minimal setup:** This library is designed to give the best performance with no configuration, not like alternatives, and also it handles common hard things in the real world (dynamic size measurement, scroll position adjustment in bottom-up scrolling and imperative scrolling, etc).
- **Fast:** Scrolling without frame drop needs optimization in many aspects (reduce CPU usage, reduce GC, [reduce layout recalculation](https://gist.github.com/paulirish/5d52fb081b3570c81e3a), optimize for frameworks, etc). We are trying to combine the best of them.
- **Small:** Its bundle size should be small as much as possible to be friendly with modern web development. Currently [about 3kB gzipped](https://bundlephobia.com/package/virtua).
- **Flexible:** Aiming to support many usecases - fixed size, dynamic size, horizontal scrolling, reverse scrolling, rtl direction, sticky, infinite scrolling, placeholder, scrollTo, dnd, table, and more. See [live demo](#demo).
- **Framework agnostic (WIP):** Currently only for React but we could support Vue, Svelte, Solid, Web Components and more in the future.

## Demo

https://inokawa.github.io/virtua/

## Install

```sh
npm install virtua
```

### Requirements

- react >= 16.14

If you use ESM and webpack 5, use react >= 18 to avoid [Can't resolve `react/jsx-runtime` error](https://github.com/facebook/react/issues/20235).

## Usage

```tsx
import { List } from "virtua";

export const App = () => {
  return (
    <List style={{ height: 800 }}>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: Math.floor(Math.random() * 10) * 10 + 5,
            borderBottom: "solid 1px gray",
            background: "white",
          }}
        >
          {i}
        </div>
      ))}
    </List>
  );
};
```

And see [examples](./stories) for more usages.

## Documentation

- [API reference](./docs/API.md)

## Benchmarks

WIP

## Contribute

All contributions are welcome.
If you find a problem, feel free to create an [issue](https://github.com/inokawa/virtua/issues) or a [PR](https://github.com/inokawa/virtua/pulls).

### Making a Pull Request

1. Clone this repo.
2. Run `npm install`.
3. Commit your fix.
4. Make a PR and confirm all the CI checks passed.
