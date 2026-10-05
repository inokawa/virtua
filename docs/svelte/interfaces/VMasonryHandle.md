[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/svelte/VMasonry.type.ts:71](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L71)

Methods of [VMasonry](../variables/VList.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/svelte/VMasonry.type.ts:92](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L92)

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

Defined in: [src/svelte/VMasonry.type.ts:97](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L97)

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

Defined in: [src/svelte/VMasonry.type.ts:103](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L103)

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

Defined in: [src/svelte/VMasonry.type.ts:108](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L108)

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

Defined in: [src/svelte/VMasonry.type.ts:113](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L113)

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

Defined in: [src/svelte/VMasonry.type.ts:75](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L75)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/VMasonry.type.ts:79](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L79)

Get current scrollTop.

#### Returns

`number`

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/svelte/VMasonry.type.ts:83](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L83)

Get current scrollHeight.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/VMasonry.type.ts:87](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L87)

Get current clientHeight.

#### Returns

`number`
