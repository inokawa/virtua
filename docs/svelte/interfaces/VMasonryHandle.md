[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/svelte/VMasonry.type.ts:77](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L77)

Methods of [VMasonry](../variables/VList.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/svelte/VMasonry.type.ts:98](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L98)

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

Defined in: [src/svelte/VMasonry.type.ts:103](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L103)

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

Defined in: [src/svelte/VMasonry.type.ts:109](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L109)

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

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/svelte/VMasonry.type.ts:114](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L114)

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

Defined in: [src/svelte/VMasonry.type.ts:119](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L119)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### getCache

> **getCache**: () => [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/VMasonry.type.ts:81](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L81)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/VMasonry.type.ts:85](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L85)

Get current scrollTop.

#### Returns

`number`

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/svelte/VMasonry.type.ts:89](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L89)

Get current scrollHeight.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/VMasonry.type.ts:93](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VMasonry.type.ts#L93)

Get current clientHeight.

#### Returns

`number`
