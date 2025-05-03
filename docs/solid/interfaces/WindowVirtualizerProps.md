[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/solid/WindowVirtualizer.tsx:59](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L59)

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

• **T**

## Properties

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:63](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L63)

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

#### Parameters

##### handle?

[`WindowVirtualizerHandle`](WindowVirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: `T`[]

Defined in: [src/solid/WindowVirtualizer.tsx:67](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L67)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowVirtualizer.tsx:71](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L71)

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

Defined in: [src/solid/WindowVirtualizer.tsx:76](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L76)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:83](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L83)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:87](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L87)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:91](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L91)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:97](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L97)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll()?

> `optional` **onScroll**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:101](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L101)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:105](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/WindowVirtualizer.tsx#L105)

Callback invoked when scrolling stops.

#### Returns

`void`
