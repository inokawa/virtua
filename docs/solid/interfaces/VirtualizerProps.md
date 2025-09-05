[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/solid/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L97)

Props of [Virtualizer](../functions/Virtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref()?

> `optional` **ref**: (`handle?`) => `void`

Defined in: [src/solid/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L101)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

##### handle?

[`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: `T`[]

Defined in: [src/solid/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L105)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:109](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L109)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`Accessor`\<`number`\>

#### Returns

`Element`

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/solid/Virtualizer.tsx:114](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L114)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### as?

> `optional` **as**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:119](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L119)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L124)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Defined in: [src/solid/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L128)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:135](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L135)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L139)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:143](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L143)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

Defined in: [src/solid/Virtualizer.tsx:147](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L147)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:153](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L153)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/solid/Virtualizer.tsx:157](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L157)

If you put an element before virtualizer, you have to define its height with this prop.

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:162](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L162)

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

Defined in: [src/solid/Virtualizer.tsx:166](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L166)

Callback invoked when scrolling stops.

#### Returns

`void`
