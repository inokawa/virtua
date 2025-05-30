[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/react/VList.tsx:12](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/VList.tsx#L12)

Methods of [VList](../variables/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L67)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L72)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/react/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L78)

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

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/react/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L83)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/react/Virtualizer.tsx:88](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L88)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L42)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L46)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L50)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L54)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L58)

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/55ee1f74fd220eab46df8d649d0d7b2c4046c731/src/react/Virtualizer.tsx#L62)

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)
