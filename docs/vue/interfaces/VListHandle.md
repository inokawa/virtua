[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/vue/VList.tsx:18](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/VList.tsx#L18)

Methods of [VList](../variables/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/Virtualizer.tsx:138](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L138)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findItemIndex`](VirtualizerHandle.md#finditemindex)

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:143](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L143)

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

Defined in: [src/vue/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L148)

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

Defined in: [src/vue/Virtualizer.tsx:154](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L154)

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

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:159](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L159)

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

Defined in: [src/vue/Virtualizer.tsx:164](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L164)

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

> `readonly` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:121](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L121)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:125](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L125)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:129](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L129)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:133](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/Virtualizer.tsx#L133)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)
