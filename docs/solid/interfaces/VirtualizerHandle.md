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

[src/solid/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L61)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Defined in

[src/solid/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L66)

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

[src/solid/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L72)

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

[src/solid/Virtualizer.tsx:77](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L77)

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

[src/solid/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L82)

## Properties

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Defined in

[src/solid/Virtualizer.tsx:40](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L40)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Defined in

[src/solid/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L44)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Defined in

[src/solid/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L48)

***

### startIndex

> `readonly` **startIndex**: `number`

Get the start index of visible range of items.

#### Defined in

[src/solid/Virtualizer.tsx:52](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L52)

***

### endIndex

> `readonly` **endIndex**: `number`

Get the end index of visible range of items.

#### Defined in

[src/solid/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/solid/Virtualizer.tsx#L56)
