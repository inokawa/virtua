# Interface: VListHandle

[solid](../modules/solid.md).VListHandle

Methods of [VList](../modules/solid.md#vlist).

## Table of contents

### Methods

- [scrollToIndex](solid.VListHandle.md#scrolltoindex)
- [scrollTo](solid.VListHandle.md#scrollto)
- [scrollBy](solid.VListHandle.md#scrollby)

### Properties

- [scrollOffset](solid.VListHandle.md#scrolloffset)
- [scrollSize](solid.VListHandle.md#scrollsize)
- [viewportSize](solid.VListHandle.md#viewportsize)

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

[src/solid/VList.tsx:57](https://github.com/inokawa/virtua/blob/86625a37/src/solid/VList.tsx#L57)

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

[src/solid/VList.tsx:62](https://github.com/inokawa/virtua/blob/86625a37/src/solid/VList.tsx#L62)

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

[src/solid/VList.tsx:67](https://github.com/inokawa/virtua/blob/86625a37/src/solid/VList.tsx#L67)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/solid/VList.tsx:43](https://github.com/inokawa/virtua/blob/86625a37/src/solid/VList.tsx#L43)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/solid/VList.tsx:47](https://github.com/inokawa/virtua/blob/86625a37/src/solid/VList.tsx#L47)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/solid/VList.tsx:51](https://github.com/inokawa/virtua/blob/86625a37/src/solid/VList.tsx#L51)
