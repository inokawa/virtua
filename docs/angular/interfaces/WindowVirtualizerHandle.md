[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/angular/WindowVirtualizer.ts:39](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L39)

Methods of [WindowVirtualizer](../classes/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/WindowVirtualizer.ts:56](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L56)

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

Defined in: [src/angular/WindowVirtualizer.ts:61](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L61)

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

Defined in: [src/angular/WindowVirtualizer.ts:66](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L66)

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

Defined in: [src/angular/WindowVirtualizer.ts:72](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L72)

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

## Properties

### getCache

> **getCache**: () => [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/angular/WindowVirtualizer.ts:43](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L43)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/angular/WindowVirtualizer.ts:47](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L47)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/angular/WindowVirtualizer.ts:51](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L51)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`
