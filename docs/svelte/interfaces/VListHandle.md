[**API**](../../API.md) • **Docs**

***

# Interface: VListHandle

Methods of [VList](../type-aliases/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

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

[src/svelte/Virtualizer.type.ts:105](https://github.com/inokawa/virtua/blob/6cd860619e919a666920e5c0cef1f2aae0f982a7/src/svelte/Virtualizer.type.ts#L105)

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

[src/svelte/Virtualizer.type.ts:110](https://github.com/inokawa/virtua/blob/6cd860619e919a666920e5c0cef1f2aae0f982a7/src/svelte/Virtualizer.type.ts#L110)

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

[src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/6cd860619e919a666920e5c0cef1f2aae0f982a7/src/svelte/Virtualizer.type.ts#L115)

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Get current scrollTop or scrollLeft.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

#### Defined in

[src/svelte/Virtualizer.type.ts:91](https://github.com/inokawa/virtua/blob/6cd860619e919a666920e5c0cef1f2aae0f982a7/src/svelte/Virtualizer.type.ts#L91)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Get current scrollHeight or scrollWidth.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

#### Defined in

[src/svelte/Virtualizer.type.ts:95](https://github.com/inokawa/virtua/blob/6cd860619e919a666920e5c0cef1f2aae0f982a7/src/svelte/Virtualizer.type.ts#L95)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Get current offsetHeight or offsetWidth.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)

#### Defined in

[src/svelte/Virtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/6cd860619e919a666920e5c0cef1f2aae0f982a7/src/svelte/Virtualizer.type.ts#L99)
