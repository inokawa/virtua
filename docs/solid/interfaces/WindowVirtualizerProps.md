[**API**](../../API.md) • **Docs**

***

# Interface: WindowVirtualizerProps\<T\>

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

• **T**

## Properties

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

#### Parameters

• **handle?**: [`WindowVirtualizerHandle`](WindowVirtualizerHandle.md)

#### Returns

`void`

#### Defined in

[src/solid/WindowVirtualizer.tsx:49](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L49)

***

### data

> **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/WindowVirtualizer.tsx:53](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L53)

***

### children()

> **children**: (`data`, `index`) => `Element`

The elements renderer function.

#### Parameters

• **data**: `T`

• **index**: `number`

#### Returns

`Element`

#### Defined in

[src/solid/WindowVirtualizer.tsx:57](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L57)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/solid/WindowVirtualizer.tsx:62](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L62)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/WindowVirtualizer.tsx:69](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L69)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/WindowVirtualizer.tsx:73](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L73)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/WindowVirtualizer.tsx:77](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L77)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Defined in

[src/solid/WindowVirtualizer.tsx:82](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L82)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/solid/WindowVirtualizer.tsx:86](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/WindowVirtualizer.tsx#L86)
