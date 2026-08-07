[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/svelte/Virtualizer.type.ts:93](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L93)

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:114](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L114)

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

Defined in: [src/svelte/Virtualizer.type.ts:119](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L119)

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

Defined in: [src/svelte/Virtualizer.type.ts:124](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L124)

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

Defined in: [src/svelte/Virtualizer.type.ts:130](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L130)

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

Defined in: [src/svelte/Virtualizer.type.ts:135](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L135)

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

Defined in: [src/svelte/Virtualizer.type.ts:140](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L140)

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

Defined in: [src/svelte/Virtualizer.type.ts:97](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L97)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:101](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L101)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:105](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L105)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:109](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/svelte/Virtualizer.type.ts#L109)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`
