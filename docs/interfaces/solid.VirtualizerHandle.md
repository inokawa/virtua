# Interface: VirtualizerHandle

[solid](../modules/solid.md).VirtualizerHandle

Methods of [Virtualizer](../modules/solid.md#virtualizer).

## Hierarchy

- **`VirtualizerHandle`**

  ↳ [`VListHandle`](solid.VListHandle.md)

## Table of contents

### Methods

- [getItemOffset](solid.VirtualizerHandle.md#getitemoffset)
- [scrollToIndex](solid.VirtualizerHandle.md#scrolltoindex)
- [scrollTo](solid.VirtualizerHandle.md#scrollto)
- [scrollBy](solid.VirtualizerHandle.md#scrollby)

### Properties

- [scrollOffset](solid.VirtualizerHandle.md#scrolloffset)
- [scrollSize](solid.VirtualizerHandle.md#scrollsize)
- [viewportSize](solid.VirtualizerHandle.md#viewportsize)

## Methods

### getItemOffset

▸ **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |

#### Returns

`number`

#### Defined in

[src/solid/Virtualizer.tsx:52](https://github.com/inokawa/virtua/blob/790b0083d06e536a7c4515467b154fa8fa57f390/src/solid/Virtualizer.tsx#L52)

___

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

[src/solid/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/790b0083d06e536a7c4515467b154fa8fa57f390/src/solid/Virtualizer.tsx#L58)

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

[src/solid/Virtualizer.tsx:63](https://github.com/inokawa/virtua/blob/790b0083d06e536a7c4515467b154fa8fa57f390/src/solid/Virtualizer.tsx#L63)

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

[src/solid/Virtualizer.tsx:68](https://github.com/inokawa/virtua/blob/790b0083d06e536a7c4515467b154fa8fa57f390/src/solid/Virtualizer.tsx#L68)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/solid/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/790b0083d06e536a7c4515467b154fa8fa57f390/src/solid/Virtualizer.tsx#L39)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/solid/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/790b0083d06e536a7c4515467b154fa8fa57f390/src/solid/Virtualizer.tsx#L43)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/solid/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/790b0083d06e536a7c4515467b154fa8fa57f390/src/solid/Virtualizer.tsx#L47)
