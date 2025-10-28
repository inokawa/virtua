[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/react/VList.tsx:12](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/VList.tsx#L12)

Methods of [VList](../variables/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:68](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L68)

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

Defined in: [src/react/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L73)

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

Defined in: [src/react/Virtualizer.tsx:79](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L79)

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

Defined in: [src/react/Virtualizer.tsx:84](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L84)

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

Defined in: [src/react/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L89)

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

Defined in: [src/react/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L43)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L47)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L51)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L55)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L59)

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:63](https://github.com/inokawa/virtua/blob/1ff5411536e2b87ecd49256c9dcae583bb8a7836/src/react/Virtualizer.tsx#L63)

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)
