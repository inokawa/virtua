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

[src/solid/VList.tsx:56](https://github.com/inokawa/virtua/blob/76146876/src/solid/VList.tsx#L56)

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

[src/solid/VList.tsx:61](https://github.com/inokawa/virtua/blob/76146876/src/solid/VList.tsx#L61)

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

[src/solid/VList.tsx:66](https://github.com/inokawa/virtua/blob/76146876/src/solid/VList.tsx#L66)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/solid/VList.tsx:42](https://github.com/inokawa/virtua/blob/76146876/src/solid/VList.tsx#L42)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/solid/VList.tsx:46](https://github.com/inokawa/virtua/blob/76146876/src/solid/VList.tsx#L46)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/solid/VList.tsx:50](https://github.com/inokawa/virtua/blob/76146876/src/solid/VList.tsx#L50)
