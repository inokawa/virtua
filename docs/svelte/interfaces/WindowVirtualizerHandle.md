[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/svelte/WindowVirtualizer.type.ts:66](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L66)

Methods of [WindowVirtualizer](../variables/VList.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:83](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L83)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:88](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L88)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:93](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L93)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L99)

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

Defined in: [src/svelte/WindowVirtualizer.type.ts:70](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L70)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:74](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L74)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/WindowVirtualizer.type.ts#L78)

Get current clientHeight of the document, or clientWidth if horizontal: true.

#### Returns

`number`
