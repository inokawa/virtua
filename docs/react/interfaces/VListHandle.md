[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/react/VList.tsx:12](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/VList.tsx#L12)

Methods of [VList](../variables/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/react/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L64)

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

Defined in: [src/react/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L69)

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

Defined in: [src/react/Virtualizer.tsx:74](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L74)

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

Defined in: [src/react/Virtualizer.tsx:80](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L80)

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

Defined in: [src/react/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L85)

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

Defined in: [src/react/Virtualizer.tsx:90](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L90)

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

Defined in: [src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L47)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L51)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L55)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/react/Virtualizer.tsx#L59)

Get current clientHeight, or clientWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)
