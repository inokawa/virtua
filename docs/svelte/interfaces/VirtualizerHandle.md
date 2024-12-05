[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L99)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:104](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L104)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

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

#### Defined in

[src/svelte/Virtualizer.type.ts:110](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L110)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Defined in

[src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L115)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Defined in

[src/svelte/Virtualizer.type.ts:120](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L120)

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L78)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L82)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:86](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L86)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:90](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L90)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:94](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/svelte/Virtualizer.type.ts#L94)
