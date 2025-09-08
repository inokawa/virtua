[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/svelte/Virtualizer.type.ts:74](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L74)

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L99)

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

Defined in: [src/svelte/Virtualizer.type.ts:104](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L104)

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

Defined in: [src/svelte/Virtualizer.type.ts:110](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L110)

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

Defined in: [src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L115)

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

Defined in: [src/svelte/Virtualizer.type.ts:120](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L120)

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

Defined in: [src/svelte/Virtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L78)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

***

### getScrollSize()

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L82)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

***

### getViewportSize()

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:86](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L86)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:90](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L90)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:94](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/svelte/Virtualizer.type.ts#L94)

Find the end index of visible range of items.

#### Returns

`number`
