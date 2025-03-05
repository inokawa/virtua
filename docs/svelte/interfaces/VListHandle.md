[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/svelte/VList.type.ts:25](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/VList.type.ts#L25)

Methods of [VList](../type-aliases/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L99)

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

Defined in: [src/svelte/Virtualizer.type.ts:104](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L104)

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

> **scrollToIndex**(`index`, `opts`?): `void`

Defined in: [src/svelte/Virtualizer.type.ts:110](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L110)

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

Defined in: [src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L115)

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

Defined in: [src/svelte/Virtualizer.type.ts:120](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L120)

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

Defined in: [src/svelte/Virtualizer.type.ts:78](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L78)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:82](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L82)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:86](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L86)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:90](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L90)

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:94](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/svelte/Virtualizer.type.ts#L94)

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)
