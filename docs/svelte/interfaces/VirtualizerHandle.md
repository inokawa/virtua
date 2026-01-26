[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/svelte/Virtualizer.type.ts:88](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L88)

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:109](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L109)

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

Defined in: [src/svelte/Virtualizer.type.ts:114](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L114)

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

Defined in: [src/svelte/Virtualizer.type.ts:119](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L119)

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

Defined in: [src/svelte/Virtualizer.type.ts:125](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L125)

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

Defined in: [src/svelte/Virtualizer.type.ts:130](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L130)

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

Defined in: [src/svelte/Virtualizer.type.ts:135](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L135)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### getCache()

> **getCache**: () => [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/svelte/Virtualizer.type.ts:92](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L92)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

***

### getScrollOffset()

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:96](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L96)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getScrollSize()

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:100](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L100)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

***

### getViewportSize()

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:104](https://github.com/inokawa/virtua/blob/762643c18afdf1278f9d1363ad56bf06e72beed8/src/svelte/Virtualizer.type.ts#L104)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`
