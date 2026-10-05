[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/angular/VList.ts:25](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L25)

Methods of [VList](../classes/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/Virtualizer.ts:73](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L73)

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

Defined in: [src/angular/Virtualizer.ts:78](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L78)

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

Defined in: [src/angular/Virtualizer.ts:83](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L83)

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

Defined in: [src/angular/Virtualizer.ts:89](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L89)

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

Defined in: [src/angular/Virtualizer.ts:94](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L94)

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

Defined in: [src/angular/Virtualizer.ts:99](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L99)

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

Defined in: [src/angular/Virtualizer.ts:56](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L56)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/Virtualizer.ts:60](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L60)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/angular/Virtualizer.ts:64](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L64)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/Virtualizer.ts:68](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/Virtualizer.ts#L68)

Get current clientHeight, or clientWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)
