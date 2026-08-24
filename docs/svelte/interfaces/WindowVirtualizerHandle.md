[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/svelte/WindowVirtualizer.type.ts:64](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L64)

Methods of [WindowVirtualizer](../variables/VList.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:81](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L81)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:86](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L86)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:91](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L91)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:97](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L97)

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

> **getCache**: () => [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/WindowVirtualizer.type.ts:68](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L68)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:72](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L72)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:76](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/svelte/WindowVirtualizer.type.ts#L76)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`
