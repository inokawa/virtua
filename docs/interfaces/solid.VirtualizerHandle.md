# Interface: VirtualizerHandle

[solid](../modules/solid.md).VirtualizerHandle

Methods of [Virtualizer](../modules/solid.md#virtualizer).

## Hierarchy

- **`VirtualizerHandle`**

  ↳ [`VListHandle`](solid.VListHandle.md)

## Table of contents

### Methods

- [scrollToIndex](solid.VirtualizerHandle.md#scrolltoindex)
- [scrollTo](solid.VirtualizerHandle.md#scrollto)
- [scrollBy](solid.VirtualizerHandle.md#scrollby)

### Properties

- [scrollOffset](solid.VirtualizerHandle.md#scrolloffset)
- [scrollSize](solid.VirtualizerHandle.md#scrollsize)
- [viewportSize](solid.VirtualizerHandle.md#viewportsize)

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

[src/solid/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/06dc6181/src/solid/Virtualizer.tsx#L55)

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

[src/solid/Virtualizer.tsx:60](https://github.com/inokawa/virtua/blob/06dc6181/src/solid/Virtualizer.tsx#L60)

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

[src/solid/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/06dc6181/src/solid/Virtualizer.tsx#L65)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/solid/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/06dc6181/src/solid/Virtualizer.tsx#L41)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/solid/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/06dc6181/src/solid/Virtualizer.tsx#L45)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/solid/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/06dc6181/src/solid/Virtualizer.tsx#L49)
