[**API**](../../API.md) • **Docs**

***

# Interface: VListHandle

Methods of [VList](../functions/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

#### Defined in

[src/solid/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L61)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

#### Defined in

[src/solid/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L66)

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

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/solid/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L72)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

• **offset**: `number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

#### Defined in

[src/solid/Virtualizer.tsx:77](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L77)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

• **offset**: `number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

#### Defined in

[src/solid/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L82)

## Properties

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/solid/Virtualizer.tsx:40](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L40)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

#### Defined in

[src/solid/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L44)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

#### Defined in

[src/solid/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L48)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

#### Defined in

[src/solid/Virtualizer.tsx:52](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L52)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)

#### Defined in

[src/solid/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/solid/Virtualizer.tsx#L56)
