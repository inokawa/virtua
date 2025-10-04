[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/svelte/VList.type.ts:29](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/VList.type.ts#L29)

Methods of [VList](../type-aliases/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:103](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L103)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:108](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L108)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/svelte/Virtualizer.type.ts:114](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L114)

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

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/svelte/Virtualizer.type.ts:119](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L119)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/svelte/Virtualizer.type.ts:124](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L124)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L82)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:86](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L86)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:90](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L90)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:94](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L94)

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:98](https://github.com/inokawa/virtua/blob/31a99c52032d2689a883051e912b017fa9d7a559/src/svelte/Virtualizer.type.ts#L98)

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)
