[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/svelte/WindowVirtualizer.type.ts:7](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L7)

Props of [WindowVirtualizer](../variables/VList.md).

## Type Parameters

### T

`T`

## Properties

### data

> **data**: readonly `T`[]

Defined in: [src/svelte/WindowVirtualizer.type.ts:11](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L11)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/WindowVirtualizer.type.ts:15](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L15)

The elements renderer snippet.

***

### getKey?

> `optional` **getKey?**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:20](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L20)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Parameters

##### data

`T`

##### index

`number`

#### Returns

`string` \| `number`

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:25](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L25)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:32](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L32)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L36)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/svelte/WindowVirtualizer.type.ts:40](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L40)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/svelte/WindowVirtualizer.type.ts:44](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L44)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/WindowVirtualizer.type.ts:50](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L50)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.getCache](WindowVirtualizerHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onscroll?

> `optional` **onscroll?**: () => `void`

Defined in: [src/svelte/WindowVirtualizer.type.ts:54](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L54)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onscrollend?

> `optional` **onscrollend?**: () => `void`

Defined in: [src/svelte/WindowVirtualizer.type.ts:58](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L58)

Callback invoked when scrolling stops.

#### Returns

`void`
