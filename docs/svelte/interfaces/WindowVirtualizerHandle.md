[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/svelte/WindowVirtualizer.type.ts:70](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L70)

Methods of [WindowVirtualizer](../variables/VList.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:87](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L87)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:92](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L92)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:97](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L97)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:103](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L103)

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

## Properties

### getCache

> **getCache**: () => [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/WindowVirtualizer.type.ts:74](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L74)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L78)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/WindowVirtualizer.type.ts#L82)

Get current clientHeight of the document, or clientWidth if horizontal: true.

#### Returns

`number`
