[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/solid/Virtualizer.tsx:98](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L98)

Props of [Virtualizer](../functions/Virtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: [`VirtualizerHandle`](VirtualizerHandle.md) \| ((`handle?`) => `void`)

Defined in: [src/solid/Virtualizer.tsx:102](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L102)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/Virtualizer.tsx:106](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L106)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:110](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L110)

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

Defined in: [src/solid/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L115)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### as?

> `optional` **as?**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L120)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:125](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L125)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef?**: `HTMLElement`

Defined in: [src/solid/Virtualizer.tsx:129](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L129)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L136)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/solid/Virtualizer.tsx:140](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L140)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:146](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L146)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:150](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L150)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/solid/Virtualizer.tsx:154](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L154)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:160](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L160)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin?**: `number`

Defined in: [src/solid/Virtualizer.tsx:164](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L164)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:169](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L169)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:173](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L173)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:177](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/Virtualizer.tsx#L177)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
