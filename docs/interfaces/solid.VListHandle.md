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

[src/solid/Virtualizer.tsx:52](https://github.com/inokawa/virtua/blob/42725126/src/solid/Virtualizer.tsx#L52)

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

[src/solid/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/42725126/src/solid/Virtualizer.tsx#L58)

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

[src/solid/Virtualizer.tsx:63](https://github.com/inokawa/virtua/blob/42725126/src/solid/Virtualizer.tsx#L63)

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

[src/solid/Virtualizer.tsx:68](https://github.com/inokawa/virtua/blob/42725126/src/solid/Virtualizer.tsx#L68)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[scrollOffset](solid.VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/solid/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/42725126/src/solid/Virtualizer.tsx#L39)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[scrollSize](solid.VirtualizerHandle.md#scrollsize)

#### Defined in

[src/solid/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/42725126/src/solid/Virtualizer.tsx#L43)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Inherited from

[VirtualizerHandle](solid.VirtualizerHandle.md).[viewportSize](solid.VirtualizerHandle.md#viewportsize)

#### Defined in

[src/solid/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/42725126/src/solid/Virtualizer.tsx#L47)
