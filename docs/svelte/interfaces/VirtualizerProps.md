[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/svelte/Virtualizer.type.ts:9](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L9)

Props of [Virtualizer](../variables/VList.md).

## Type Parameters

### T

`T`

## Properties

### data

> **data**: readonly `T`[]

Defined in: [src/svelte/Virtualizer.type.ts:13](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L13)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/Virtualizer.type.ts:17](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L17)

The elements renderer snippet.

***

### getKey?

> `optional` **getKey?**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/Virtualizer.type.ts:22](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L22)

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

### as?

> `optional` **as?**: keyof SvelteHTMLElements

Defined in: [src/svelte/Virtualizer.type.ts:27](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L27)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: keyof SvelteHTMLElements

Defined in: [src/svelte/Virtualizer.type.ts:32](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L32)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### itemProps?

> `optional` **itemProps?**: `ItemProps`\<`T`\>

Defined in: [src/svelte/Virtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L36)

A function that provides properties/attributes for item element

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:41](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L41)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### scrollRef?

> `optional` **scrollRef?**: `HTMLElement`

Defined in: [src/svelte/Virtualizer.type.ts:45](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L45)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:52](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L52)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:56](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L56)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:62](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L62)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:66](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L66)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/svelte/Virtualizer.type.ts:70](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L70)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/Virtualizer.type.ts:76](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L76)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.getCache](VListHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:80](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L80)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### onscroll?

> `optional` **onscroll?**: (`offset`) => `void`

Defined in: [src/svelte/Virtualizer.type.ts:85](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L85)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

***

### onscrollend?

> `optional` **onscrollend?**: () => `void`

Defined in: [src/svelte/Virtualizer.type.ts:89](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L89)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onresize?

> `optional` **onresize?**: () => `void`

Defined in: [src/svelte/Virtualizer.type.ts:93](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L93)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
