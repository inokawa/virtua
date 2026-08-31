[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/svelte/Virtualizer.type.ts:9](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L9)

Props of [Virtualizer](../variables/VList.md).

## Type Parameters

### T

`T`

## Properties

### data

> **data**: readonly `T`[]

Defined in: [src/svelte/Virtualizer.type.ts:13](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L13)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/Virtualizer.type.ts:17](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L17)

The elements renderer snippet.

***

### getKey?

> `optional` **getKey?**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/Virtualizer.type.ts:22](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L22)

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

Defined in: [src/svelte/Virtualizer.type.ts:27](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L27)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: keyof SvelteHTMLElements

Defined in: [src/svelte/Virtualizer.type.ts:32](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L32)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### itemProps?

> `optional` **itemProps?**: `ItemProps`\<`T`\>

Defined in: [src/svelte/Virtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L36)

A function that provides properties/attributes for item element

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:41](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L41)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### scrollRef?

> `optional` **scrollRef?**: `HTMLElement`

Defined in: [src/svelte/Virtualizer.type.ts:45](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L45)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:52](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L52)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:56](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L56)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:60](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L60)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:64](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L64)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/svelte/Virtualizer.type.ts:68](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L68)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/Virtualizer.type.ts:74](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L74)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.getCache](VListHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin?**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L78)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### onscroll?

> `optional` **onscroll?**: (`offset`) => `void`

Defined in: [src/svelte/Virtualizer.type.ts:83](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L83)

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

Defined in: [src/svelte/Virtualizer.type.ts:87](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/svelte/Virtualizer.type.ts#L87)

Callback invoked when scrolling stops.

#### Returns

`void`
