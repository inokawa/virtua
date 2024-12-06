[**API**](../../API.md)

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

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

#### Defined in

[src/solid/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L62)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

#### Defined in

[src/solid/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L67)

***

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

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/solid/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L73)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

#### Defined in

[src/solid/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L78)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

#### Defined in

[src/solid/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L83)

## Properties

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/solid/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L41)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

#### Defined in

[src/solid/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L45)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

#### Defined in

[src/solid/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L49)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

#### Defined in

[src/solid/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L53)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)

#### Defined in

[src/solid/Virtualizer.tsx:57](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/solid/Virtualizer.tsx#L57)
