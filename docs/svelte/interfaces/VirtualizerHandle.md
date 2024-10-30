[**API**](../../API.md) • **Docs**

***

# Interface: VirtualizerHandle

Methods of [Virtualizer](../variables/VList.md).

## Extended by

- [`VListHandle`](VListHandle.md)

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

#### Defined in

[src/svelte/Virtualizer.type.ts:105](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/svelte/Virtualizer.type.ts#L105)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

• **offset**: `number`

offset from start

#### Returns

`void`

#### Defined in

[src/svelte/Virtualizer.type.ts:110](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/svelte/Virtualizer.type.ts#L110)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

• **offset**: `number`

offset from current position

#### Returns

`void`

#### Defined in

[src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/svelte/Virtualizer.type.ts#L115)

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Get current scrollTop or scrollLeft.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:91](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/svelte/Virtualizer.type.ts#L91)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Get current scrollHeight or scrollWidth.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:95](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/svelte/Virtualizer.type.ts#L95)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Get current offsetHeight or offsetWidth.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:99](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/svelte/Virtualizer.type.ts#L99)
