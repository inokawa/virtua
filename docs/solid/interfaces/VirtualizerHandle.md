[**API**](../../API.md) • **Docs**

***

# Interface: VirtualizerHandle

Methods of [Virtualizer](../functions/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Defined in

[src/solid/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/0da7ed85f75cef651eeadd5badc2727731b4dcb5/src/solid/Virtualizer.tsx#L55)

***

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

[src/solid/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/0da7ed85f75cef651eeadd5badc2727731b4dcb5/src/solid/Virtualizer.tsx#L61)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

• **offset**: `number`

offset from start

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/0da7ed85f75cef651eeadd5badc2727731b4dcb5/src/solid/Virtualizer.tsx#L66)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

• **offset**: `number`

offset from current position

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/0da7ed85f75cef651eeadd5badc2727731b4dcb5/src/solid/Virtualizer.tsx#L71)

## Properties

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/solid/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/0da7ed85f75cef651eeadd5badc2727731b4dcb5/src/solid/Virtualizer.tsx#L42)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/solid/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/0da7ed85f75cef651eeadd5badc2727731b4dcb5/src/solid/Virtualizer.tsx#L46)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/solid/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/0da7ed85f75cef651eeadd5badc2727731b4dcb5/src/solid/Virtualizer.tsx#L50)
