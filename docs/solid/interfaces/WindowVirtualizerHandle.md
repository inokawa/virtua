[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/solid/WindowVirtualizer.tsx:32](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/WindowVirtualizer.tsx#L32)

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Defined in: [src/solid/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/WindowVirtualizer.tsx#L46)

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

## Properties

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/solid/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/WindowVirtualizer.tsx#L36)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/solid/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/WindowVirtualizer.tsx#L40)

Find the end index of visible range of items.

#### Returns

`number`
