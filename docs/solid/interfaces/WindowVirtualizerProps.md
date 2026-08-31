[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/solid/WindowVirtualizer.tsx:74](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L74)

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: (`handle?`) => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:78](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L78)

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

#### Parameters

##### handle?

[`WindowVirtualizerHandle`](WindowVirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/WindowVirtualizer.tsx:82](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L82)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowVirtualizer.tsx:86](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L86)

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

Defined in: [src/solid/WindowVirtualizer.tsx:91](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L91)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:98](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L98)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:102](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L102)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:106](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L106)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:110](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L110)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:116](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L116)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:120](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L120)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:124](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L124)

Callback invoked when scrolling stops.

#### Returns

`void`
