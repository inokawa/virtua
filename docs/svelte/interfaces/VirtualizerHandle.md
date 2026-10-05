[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/svelte/Virtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L99)

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:120](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L120)

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

Defined in: [src/svelte/Virtualizer.type.ts:125](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L125)

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

Defined in: [src/svelte/Virtualizer.type.ts:130](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L130)

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

Defined in: [src/svelte/Virtualizer.type.ts:136](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L136)

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

Defined in: [src/svelte/Virtualizer.type.ts:141](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L141)

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

Defined in: [src/svelte/Virtualizer.type.ts:146](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L146)

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

Defined in: [src/svelte/Virtualizer.type.ts:103](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L103)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:107](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L107)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Returns

`number`

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:111](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L111)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/Virtualizer.type.ts#L115)

Get current clientHeight, or clientWidth if horizontal: true.

#### Returns

`number`
