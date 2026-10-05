[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/svelte/WindowVirtualizer.type.ts:7](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L7)

Props of [WindowVirtualizer](../variables/VList.md).

## Type Parameters

### T

`T`

## Properties

### data

> **data**: readonly `T`[]

Defined in: [src/svelte/WindowVirtualizer.type.ts:11](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L11)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/WindowVirtualizer.type.ts:15](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L15)

The elements renderer snippet.

***

### getKey?

> `optional` **getKey?**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:20](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L20)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:25](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L25)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:32](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L32)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L36)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/svelte/WindowVirtualizer.type.ts:42](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L42)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/svelte/WindowVirtualizer.type.ts:46](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L46)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/WindowVirtualizer.type.ts:52](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L52)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.getCache](WindowVirtualizerHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onscroll?

> `optional` **onscroll?**: () => `void`

Defined in: [src/svelte/WindowVirtualizer.type.ts:56](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L56)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onscrollend?

> `optional` **onscrollend?**: () => `void`

Defined in: [src/svelte/WindowVirtualizer.type.ts:60](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L60)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onresize?

> `optional` **onresize?**: () => `void`

Defined in: [src/svelte/WindowVirtualizer.type.ts:64](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L64)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
