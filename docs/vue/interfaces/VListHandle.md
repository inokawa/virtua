[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/vue/VList.tsx:18](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VList.tsx#L18)

Methods of [VList](../variables/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/Virtualizer.tsx:145](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L145)

Find nearest item index from offset, which is 0 if there are no items.

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

Defined in: [src/vue/Virtualizer.tsx:150](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L150)

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

Defined in: [src/vue/Virtualizer.tsx:155](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L155)

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

Defined in: [src/vue/Virtualizer.tsx:161](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L161)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../core/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:166](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L166)

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

Defined in: [src/vue/Virtualizer.tsx:171](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L171)

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

> `readonly` **cache**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L128)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L132)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L136)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:140](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/Virtualizer.tsx#L140)

Get current clientHeight, or clientWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)
