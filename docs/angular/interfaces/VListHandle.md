[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/angular/VList.ts:25](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/VList.ts#L25)

Methods of [VList](../classes/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/Virtualizer.ts:72](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L72)

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

Defined in: [src/angular/Virtualizer.ts:77](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L77)

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

Defined in: [src/angular/Virtualizer.ts:82](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L82)

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

Defined in: [src/angular/Virtualizer.ts:88](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L88)

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

Defined in: [src/angular/Virtualizer.ts:93](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L93)

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

Defined in: [src/angular/Virtualizer.ts:98](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L98)

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

> `readonly` **cache**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/angular/Virtualizer.ts:55](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L55)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/Virtualizer.ts:59](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L59)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/angular/Virtualizer.ts:63](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L63)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/Virtualizer.ts:67](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/angular/Virtualizer.ts#L67)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)
