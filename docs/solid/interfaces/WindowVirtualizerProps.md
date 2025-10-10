[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/solid/WindowVirtualizer.tsx:58](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L58)

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref()?

> `optional` **ref**: (`handle?`) => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:62](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L62)

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

#### Parameters

##### handle?

[`WindowVirtualizerHandle`](WindowVirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/WindowVirtualizer.tsx:66](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L66)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowVirtualizer.tsx:70](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L70)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`Accessor`\<`number`\>

#### Returns

`Element`

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:75](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L75)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:82](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L82)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:86](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L86)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:90](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L90)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:96](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L96)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll()?

> `optional` **onScroll**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:100](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L100)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:104](https://github.com/inokawa/virtua/blob/b9c4491d8dae78e5f58fc42b558b3af89abe1188/src/solid/WindowVirtualizer.tsx#L104)

Callback invoked when scrolling stops.

#### Returns

`void`
