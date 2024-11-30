[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Defined in

[src/solid/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/solid/WindowVirtualizer.tsx#L46)

## Properties

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/solid/WindowVirtualizer.tsx#L36)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/solid/WindowVirtualizer.tsx#L40)
