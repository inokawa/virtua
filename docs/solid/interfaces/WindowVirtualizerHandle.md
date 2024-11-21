[**API**](../../API.md) • **Docs**

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

• **index**: `number`

index of item

• **opts?**: [`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Defined in

[src/solid/WindowVirtualizer.tsx:45](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L45)

## Properties

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:35](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L35)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:39](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/solid/WindowVirtualizer.tsx#L39)
