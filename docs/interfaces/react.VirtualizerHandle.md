# Interface: VirtualizerHandle

[react](../modules/react.md).VirtualizerHandle

Methods of [Virtualizer](../modules/react.md#virtualizer).

## Hierarchy

- **`VirtualizerHandle`**

  ↳ [`VListHandle`](react.VListHandle.md)

## Table of contents

### Methods

- [scrollToIndex](react.VirtualizerHandle.md#scrolltoindex)
- [scrollTo](react.VirtualizerHandle.md#scrollto)
- [scrollBy](react.VirtualizerHandle.md#scrollby)

### Properties

- [cache](react.VirtualizerHandle.md#cache)
- [scrollOffset](react.VirtualizerHandle.md#scrolloffset)
- [scrollSize](react.VirtualizerHandle.md#scrollsize)
- [viewportSize](react.VirtualizerHandle.md#viewportsize)

## Methods

### scrollToIndex

▸ **scrollToIndex**(`index`, `opts?`): `void`

Scroll to the item specified by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |
| `opts?` | [`ScrollToIndexOpts`](react.ScrollToIndexOpts.md) | options |

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/5476616c/src/react/Virtualizer.tsx#L62)

___

### scrollTo

▸ **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | offset from start |

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/5476616c/src/react/Virtualizer.tsx#L67)

___

### scrollBy

▸ **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | offset from current position |

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/5476616c/src/react/Virtualizer.tsx#L72)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

Get current [CacheSnapshot](react.CacheSnapshot.md).

#### Defined in

[src/react/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/5476616c/src/react/Virtualizer.tsx#L44)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/5476616c/src/react/Virtualizer.tsx#L48)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/Virtualizer.tsx:52](https://github.com/inokawa/virtua/blob/5476616c/src/react/Virtualizer.tsx#L52)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/5476616c/src/react/Virtualizer.tsx#L56)
