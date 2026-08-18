[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/svelte/WindowVirtualizer.type.ts:60](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L60)

Methods of [WindowVirtualizer](../variables/VList.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:77](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L77)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L82)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:87](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L87)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:93](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L93)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:64](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L64)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:68](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L68)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:72](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/svelte/WindowVirtualizer.type.ts#L72)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`
