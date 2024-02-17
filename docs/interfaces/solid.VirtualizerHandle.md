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

[src/solid/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/12562528/src/solid/Virtualizer.tsx#L54)

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

[src/solid/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/12562528/src/solid/Virtualizer.tsx#L59)

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

[src/solid/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/12562528/src/solid/Virtualizer.tsx#L64)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/solid/Virtualizer.tsx:40](https://github.com/inokawa/virtua/blob/12562528/src/solid/Virtualizer.tsx#L40)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/solid/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/12562528/src/solid/Virtualizer.tsx#L44)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/solid/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/12562528/src/solid/Virtualizer.tsx#L48)
