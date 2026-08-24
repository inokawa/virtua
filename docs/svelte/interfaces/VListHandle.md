[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/svelte/VList.type.ts:33](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/VList.type.ts#L33)

Methods of [VList](../type-aliases/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:114](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L114)

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

Defined in: [src/svelte/Virtualizer.type.ts:119](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L119)

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

Defined in: [src/svelte/Virtualizer.type.ts:124](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L124)

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

Defined in: [src/svelte/Virtualizer.type.ts:130](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L130)

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

Defined in: [src/svelte/Virtualizer.type.ts:135](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L135)

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

Defined in: [src/svelte/Virtualizer.type.ts:140](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L140)

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

### getCache

> **getCache**: () => [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/Virtualizer.type.ts:97](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L97)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getCache`](VirtualizerHandle.md#getcache)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:101](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L101)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:105](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L105)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:109](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/Virtualizer.type.ts#L109)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)
