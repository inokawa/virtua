[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/solid/WindowVirtualizer.tsx:75](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L75)

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: [`WindowVirtualizerHandle`](WindowVirtualizerHandle.md) \| ((`handle?`) => `void`)

Defined in: [src/solid/WindowVirtualizer.tsx:79](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L79)

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/WindowVirtualizer.tsx:83](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L83)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowVirtualizer.tsx:87](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L87)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`Accessor`\<`number`\>

#### Returns

`Element`

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:92](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L92)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:99](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L99)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:103](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L103)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:107](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L107)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:111](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L111)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:117](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L117)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:121](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L121)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:125](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L125)

Callback invoked when scrolling stops.

#### Returns

`void`
