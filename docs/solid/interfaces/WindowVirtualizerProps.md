[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/solid/WindowVirtualizer.tsx:73](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L73)

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref()?

> `optional` **ref**: (`handle?`) => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:77](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L77)

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

#### Parameters

##### handle?

[`WindowVirtualizerHandle`](WindowVirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/WindowVirtualizer.tsx:81](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L81)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowVirtualizer.tsx:85](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L85)

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

> `optional` **bufferSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:90](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L90)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:97](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L97)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:101](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L101)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:105](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L105)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:111](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L111)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll()?

> `optional` **onScroll**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:115](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L115)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:119](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/solid/WindowVirtualizer.tsx#L119)

Callback invoked when scrolling stops.

#### Returns

`void`
