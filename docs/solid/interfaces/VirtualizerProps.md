[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/solid/Virtualizer.tsx:94](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L94)

Props of [Virtualizer](../functions/Virtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref()?

> `optional` **ref**: (`handle?`) => `void`

Defined in: [src/solid/Virtualizer.tsx:98](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L98)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

##### handle?

[`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/Virtualizer.tsx:102](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L102)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:106](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L106)

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

Defined in: [src/solid/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L111)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### as?

> `optional` **as**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L116)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:121](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L121)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Defined in: [src/solid/Virtualizer.tsx:125](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L125)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L132)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L136)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:140](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L140)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted**: readonly `number`[]

Defined in: [src/solid/Virtualizer.tsx:144](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L144)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:150](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L150)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/solid/Virtualizer.tsx:154](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L154)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:159](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L159)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:163](https://github.com/inokawa/virtua/blob/5341cd8c4d3a71dc1bc6bd235aa0bf16f0bf7697/src/solid/Virtualizer.tsx#L163)

Callback invoked when scrolling stops.

#### Returns

`void`
