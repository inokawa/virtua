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

[src/svelte/Virtualizer.type.ts:97](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L97)

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

[src/svelte/Virtualizer.type.ts:102](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L102)

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

[src/svelte/Virtualizer.type.ts:108](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L108)

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

[src/svelte/Virtualizer.type.ts:113](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L113)

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

[src/svelte/Virtualizer.type.ts:118](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L118)

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

#### Defined in

[src/svelte/Virtualizer.type.ts:84](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L84)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

#### Defined in

[src/svelte/Virtualizer.type.ts:88](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L88)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)

#### Defined in

[src/svelte/Virtualizer.type.ts:92](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/svelte/Virtualizer.type.ts#L92)
