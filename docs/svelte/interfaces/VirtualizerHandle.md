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

[src/svelte/Virtualizer.type.ts:98](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/svelte/Virtualizer.type.ts#L98)

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

[src/svelte/Virtualizer.type.ts:103](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/svelte/Virtualizer.type.ts#L103)

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

[src/svelte/Virtualizer.type.ts:108](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/svelte/Virtualizer.type.ts#L108)

## Properties

### getScrollOffset()

> **getScrollOffset**: () => `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:84](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/svelte/Virtualizer.type.ts#L84)

***

### getScrollSize()

> **getScrollSize**: () => `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:88](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/svelte/Virtualizer.type.ts#L88)

***

### getViewportSize()

> **getViewportSize**: () => `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Defined in

[src/svelte/Virtualizer.type.ts:92](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/svelte/Virtualizer.type.ts#L92)
