[**API**](../../API.md)

***

# Interface: WindowMasonryProps\<T\>

Defined in: [src/solid/WindowMasonry.tsx:72](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L72)

Props of [WindowMasonry](../functions/WindowMasonry.md).

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: [`WindowMasonryHandle`](WindowMasonryHandle.md)

Defined in: [src/solid/WindowMasonry.tsx:76](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L76)

Get reference to [WindowMasonryHandle](WindowMasonryHandle.md).

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/WindowMasonry.tsx:80](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L80)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowMasonry.tsx:84](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L84)

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

Defined in: [src/solid/WindowMasonry.tsx:88](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L88)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:93](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L93)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:100](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L100)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:105](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L105)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/WindowMasonry.tsx:111](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L111)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowMasonryHandle.cache](WindowMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/solid/WindowMasonry.tsx:117](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L117)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with `cache` to show them on the server.**

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/solid/WindowMasonry.tsx:121](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L121)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/WindowMasonry.tsx:125](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L125)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/solid/WindowMasonry.tsx:129](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowMasonry.tsx#L129)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
