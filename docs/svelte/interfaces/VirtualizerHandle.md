[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/svelte/Virtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L78)

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:103](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L103)

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

Defined in: [src/svelte/Virtualizer.type.ts:108](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L108)

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

Defined in: [src/svelte/Virtualizer.type.ts:114](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L114)

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

Defined in: [src/svelte/Virtualizer.type.ts:119](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L119)

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

Defined in: [src/svelte/Virtualizer.type.ts:124](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L124)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L82)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getScrollSize()

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:86](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L86)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

***

### getViewportSize()

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:90](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L90)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:94](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L94)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:98](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/svelte/Virtualizer.type.ts#L98)

Find the end index of visible range of items.

#### Returns

`number`
