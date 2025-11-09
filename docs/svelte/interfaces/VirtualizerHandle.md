[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/svelte/Virtualizer.type.ts:84](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L84)

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:113](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L113)

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

Defined in: [src/svelte/Virtualizer.type.ts:118](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L118)

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

Defined in: [src/svelte/Virtualizer.type.ts:124](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L124)

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

Defined in: [src/svelte/Virtualizer.type.ts:129](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L129)

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

Defined in: [src/svelte/Virtualizer.type.ts:134](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L134)

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

Defined in: [src/svelte/Virtualizer.type.ts:88](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L88)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

***

### getScrollOffset()

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:92](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L92)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getScrollSize()

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:96](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L96)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

***

### getViewportSize()

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:100](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L100)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:104](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L104)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:108](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/svelte/Virtualizer.type.ts#L108)

Find the end index of visible range of items.

#### Returns

`number`
