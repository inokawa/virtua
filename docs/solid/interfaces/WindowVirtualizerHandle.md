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

[src/solid/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/solid/WindowVirtualizer.tsx#L46)

## Properties

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/solid/WindowVirtualizer.tsx#L36)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/solid/WindowVirtualizer.tsx#L40)
