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

[src/solid/WindowVirtualizer.tsx:55](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L55)

***

### data

> **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/WindowVirtualizer.tsx:59](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L59)

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

[src/solid/WindowVirtualizer.tsx:63](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L63)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/solid/WindowVirtualizer.tsx:68](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L68)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/WindowVirtualizer.tsx:75](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L75)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/WindowVirtualizer.tsx:79](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L79)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/WindowVirtualizer.tsx:83](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L83)

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

[src/solid/WindowVirtualizer.tsx:88](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L88)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/solid/WindowVirtualizer.tsx:92](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L92)
