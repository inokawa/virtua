[**API**](../../API.md)

***

# Interface: WindowMasonryProps\<T\>

Defined in: [src/solid/WindowMasonry.tsx:75](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L75)

Props of [WindowMasonry](../functions/WindowMasonry.md).

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: [`WindowMasonryHandle`](WindowMasonryHandle.md) \| ((`handle?`) => `void`)

Defined in: [src/solid/WindowMasonry.tsx:79](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L79)

Get reference to [WindowMasonryHandle](WindowMasonryHandle.md).

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/WindowMasonry.tsx:83](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L83)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowMasonry.tsx:87](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L87)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`Accessor`\<`number`\>

#### Returns

`Element`

***

### lanes

> **lanes**: `number`

Defined in: [src/solid/WindowMasonry.tsx:91](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L91)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:96](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L96)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:103](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L103)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:108](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L108)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/WindowMasonry.tsx:114](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L114)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowMasonryHandle.cache](WindowMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:120](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L120)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with `cache` to show them on the server.**

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/solid/WindowMasonry.tsx:124](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L124)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/WindowMasonry.tsx:128](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L128)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/solid/WindowMasonry.tsx:132](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L132)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
