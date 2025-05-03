[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/solid/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L96)

Props of [Virtualizer](../functions/Virtualizer.md).

## Type Parameters

• **T**

## Properties

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Defined in: [src/solid/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L100)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

##### handle?

[`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: `T`[]

Defined in: [src/solid/Virtualizer.tsx:104](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L104)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:108](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L108)

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

Defined in: [src/solid/Virtualizer.tsx:113](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L113)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### as?

> `optional` **as**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:118](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L118)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:123](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L123)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Defined in: [src/solid/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L127)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L134)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:138](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L138)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:142](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L142)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L148)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/solid/Virtualizer.tsx:152](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L152)

If you put an element before virtualizer, you have to define its height with this prop.

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:157](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L157)

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

Defined in: [src/solid/Virtualizer.tsx:161](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L161)

Callback invoked when scrolling stops.

#### Returns

`void`
