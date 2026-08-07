[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/angular/VList.ts:20](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L20)

Methods of [VList](../classes/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/Virtualizer.ts:63](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L63)

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

Defined in: [src/angular/Virtualizer.ts:68](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L68)

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

Defined in: [src/angular/Virtualizer.ts:73](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L73)

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

Defined in: [src/angular/Virtualizer.ts:79](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L79)

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

Defined in: [src/angular/Virtualizer.ts:84](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L84)

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

Defined in: [src/angular/Virtualizer.ts:89](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L89)

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

> **getCache**: () => [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/angular/Virtualizer.ts:46](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L46)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getCache`](VirtualizerHandle.md#getcache)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/angular/Virtualizer.ts:50](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L50)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/angular/Virtualizer.ts:54](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L54)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/angular/Virtualizer.ts:58](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/Virtualizer.ts#L58)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)
