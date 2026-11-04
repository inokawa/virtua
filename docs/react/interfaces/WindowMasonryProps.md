[**API**](../../API.md)

***

# Interface: WindowMasonryProps\<T\>

Defined in: [src/react/WindowMasonry.tsx:69](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L69)

Props of [WindowMasonry](../variables/WindowMasonry.md).

## Type Parameters

### T

`T`

## Properties

### children

> **children**: (`data`, `index`) => `ReactElement`

Defined in: [src/react/WindowMasonry.tsx:73](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L73)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`number`

#### Returns

`ReactElement`

***

### data

> **data**: `ArrayLike`\<`T`\>

Defined in: [src/react/WindowMasonry.tsx:77](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L77)

The data items rendered by this component.

***

### lanes

> **lanes**: `number`

Defined in: [src/react/WindowMasonry.tsx:81](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L81)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/react/WindowMasonry.tsx:86](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L86)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/react/WindowMasonry.tsx:93](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L93)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/react/WindowMasonry.tsx:98](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L98)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/react/WindowMasonry.tsx:104](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L104)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowMasonryHandle.cache](WindowMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/react/WindowMasonry.tsx:110](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L110)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with `cache` to show them on the server.**

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/react/WindowMasonry.tsx:114](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L114)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/react/WindowMasonry.tsx:118](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L118)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/react/WindowMasonry.tsx:122](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/WindowMasonry.tsx#L122)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
