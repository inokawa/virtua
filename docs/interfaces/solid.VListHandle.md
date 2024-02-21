# Interface: VListHandle

[solid](../modules/solid.md).VListHandle

Methods of [VList](../modules/solid.md#vlist).

## Hierarchy

- [`VirtualizerHandle`](solid.VirtualizerHandle.md)

  ↳ **`VListHandle`**

## Table of contents

### Methods

- [getItemOffset](solid.VListHandle.md#getitemoffset)
- [scrollToIndex](solid.VListHandle.md#scrolltoindex)
- [scrollTo](solid.VListHandle.md#scrollto)
- [scrollBy](solid.VListHandle.md#scrollby)

### Properties

- [scrollOffset](solid.VListHandle.md#scrolloffset)
- [scrollSize](solid.VListHandle.md#scrollsize)
- [viewportSize](solid.VListHandle.md#viewportsize)

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

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[getItemOffset](solid.VirtualizerHandle.md#getitemoffset)

#### Defined in

[src/solid/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/2a92d85a/src/solid/Virtualizer.tsx#L53)

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

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[scrollToIndex](solid.VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/solid/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/2a92d85a/src/solid/Virtualizer.tsx#L59)

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

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[scrollTo](solid.VirtualizerHandle.md#scrollto)

#### Defined in

[src/solid/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/2a92d85a/src/solid/Virtualizer.tsx#L64)

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

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[scrollBy](solid.VirtualizerHandle.md#scrollby)

#### Defined in

[src/solid/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/2a92d85a/src/solid/Virtualizer.tsx#L69)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[scrollOffset](solid.VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/solid/Virtualizer.tsx:40](https://github.com/inokawa/virtua/blob/2a92d85a/src/solid/Virtualizer.tsx#L40)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[scrollSize](solid.VirtualizerHandle.md#scrollsize)

#### Defined in

[src/solid/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/2a92d85a/src/solid/Virtualizer.tsx#L44)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[viewportSize](solid.VirtualizerHandle.md#viewportsize)

#### Defined in

[src/solid/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/2a92d85a/src/solid/Virtualizer.tsx#L48)
