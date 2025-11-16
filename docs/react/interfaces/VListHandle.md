[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/react/VList.tsx:12](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/VList.tsx#L12)

Methods of [VList](../variables/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:68](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L68)

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

Defined in: [src/react/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L73)

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

Defined in: [src/react/Virtualizer.tsx:79](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L79)

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

Defined in: [src/react/Virtualizer.tsx:84](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L84)

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

Defined in: [src/react/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L89)

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

Defined in: [src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L46)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L50)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L54)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L58)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

***

### findItemIndex()

> **findItemIndex**: (`offset`) => `number`

Defined in: [src/react/Virtualizer.tsx:63](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/react/Virtualizer.tsx#L63)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findItemIndex`](VirtualizerHandle.md#finditemindex)
