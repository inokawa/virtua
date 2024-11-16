[**API**](../../API.md) • **Docs**

***

# Interface: VListHandle

Methods of [VList](../type-aliases/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

#### Defined in

[src/svelte/Virtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L99)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

#### Defined in

[src/svelte/Virtualizer.type.ts:104](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L104)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

• **index**: `number`

index of item

• **opts?**: [`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/svelte/Virtualizer.type.ts:110](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L110)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

• **offset**: `number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

#### Defined in

[src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L115)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

• **offset**: `number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

#### Defined in

[src/svelte/Virtualizer.type.ts:120](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L120)

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

#### Defined in

[src/svelte/Virtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L78)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

#### Defined in

[src/svelte/Virtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L82)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)

#### Defined in

[src/svelte/Virtualizer.type.ts:86](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L86)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

#### Defined in

[src/svelte/Virtualizer.type.ts:90](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L90)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)

#### Defined in

[src/svelte/Virtualizer.type.ts:94](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/svelte/Virtualizer.type.ts#L94)
