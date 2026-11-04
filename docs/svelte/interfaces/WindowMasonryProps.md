[**API**](../../API.md)

***

# Interface: WindowMasonryProps\<T\>

Defined in: [src/svelte/WindowMasonry.type.ts:7](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L7)

Props of [WindowMasonry](../variables/VList.md).

## Type Parameters

### T

`T`

## Properties

### data

> **data**: readonly `T`[]

Defined in: [src/svelte/WindowMasonry.type.ts:11](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L11)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/WindowMasonry.type.ts:15](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L15)

The elements renderer snippet.

***

### getKey?

> `optional` **getKey?**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/WindowMasonry.type.ts:20](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L20)

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

### lanes

> **lanes**: `number`

Defined in: [src/svelte/WindowMasonry.type.ts:24](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L24)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/svelte/WindowMasonry.type.ts:29](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L29)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/svelte/WindowMasonry.type.ts:36](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L36)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/svelte/WindowMasonry.type.ts:41](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L41)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/WindowMasonry.type.ts:47](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L47)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowMasonryHandle.getCache](WindowMasonryHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/svelte/WindowMasonry.type.ts:53](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L53)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with `cache` to show them on the server.**

***

### onscroll?

> `optional` **onscroll?**: () => `void`

Defined in: [src/svelte/WindowMasonry.type.ts:57](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L57)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onscrollend?

> `optional` **onscrollend?**: () => `void`

Defined in: [src/svelte/WindowMasonry.type.ts:61](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L61)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onresize?

> `optional` **onresize?**: () => `void`

Defined in: [src/svelte/WindowMasonry.type.ts:65](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/svelte/WindowMasonry.type.ts#L65)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
