[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/angular/Virtualizer.ts:42](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L42)

Methods of [Virtualizer](../classes/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/Virtualizer.ts:63](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L63)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/Virtualizer.ts:68](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L68)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/angular/Virtualizer.ts:73](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L73)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/angular/Virtualizer.ts:79](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L79)

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

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/angular/Virtualizer.ts:84](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L84)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/angular/Virtualizer.ts:89](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L89)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### getCache

> **getCache**: () => [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/angular/Virtualizer.ts:46](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L46)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/angular/Virtualizer.ts:50](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L50)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/angular/Virtualizer.ts:54](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L54)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/angular/Virtualizer.ts:58](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/Virtualizer.ts#L58)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`
