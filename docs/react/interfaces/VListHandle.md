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

[src/react/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L67)

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

[src/react/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L72)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/react/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L78)

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

[src/react/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L83)

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

[src/react/Virtualizer.tsx:88](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L88)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

#### Defined in

[src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L42)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L46)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

#### Defined in

[src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L50)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

#### Defined in

[src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L54)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

#### Defined in

[src/react/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L58)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)

#### Defined in

[src/react/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/react/Virtualizer.tsx#L62)
