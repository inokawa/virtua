[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/solid/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L96)

Props of [Virtualizer](../functions/Virtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: (`handle?`) => `void`

Defined in: [src/solid/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L100)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

##### handle?

[`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/Virtualizer.tsx:104](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L104)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:108](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L108)

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

Defined in: [src/solid/Virtualizer.tsx:113](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L113)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### as?

> `optional` **as?**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:118](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L118)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:123](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L123)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef?**: `HTMLElement`

Defined in: [src/solid/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L127)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L134)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:138](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L138)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:142](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L142)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/solid/Virtualizer.tsx:146](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L146)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:152](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L152)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin?**: `number`

Defined in: [src/solid/Virtualizer.tsx:156](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L156)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:161](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L161)

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

Defined in: [src/solid/Virtualizer.tsx:165](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/solid/Virtualizer.tsx#L165)

Callback invoked when scrolling stops.

#### Returns

`void`
