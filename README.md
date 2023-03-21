# virtua

![npm](https://img.shields.io/npm/v/virtua) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/virtua) [![check](https://github.com/inokawa/virtua/actions/workflows/check.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/check.yml) [![demo](https://github.com/inokawa/virtua/actions/workflows/demo.yml/badge.svg)](https://github.com/inokawa/virtua/actions/workflows/demo.yml)

Simple, fast, small and flexible virtual list component for [React](https://github.com/facebook/react).

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

## Contribute

All contributions are welcome.
If you find a problem, feel free to create an [issue](https://github.com/inokawa/virtua/issues) or a [PR](https://github.com/inokawa/virtua/pulls).

### Making a Pull Request

1. Clone this repo.
2. Run `npm install`.
3. Commit your fix.
4. Make a PR and confirm all the CI checks passed.
