# Interface: VGridHandle

Methods of [VGrid](../API.md#experimental_vgrid).

## Table of contents

### Methods

- [scrollToIndex](VGridHandle.md#scrolltoindex)
- [scrollTo](VGridHandle.md#scrollto)
- [scrollBy](VGridHandle.md#scrollby)

### Properties

- [scrollOffset](VGridHandle.md#scrolloffset)
- [scrollSize](VGridHandle.md#scrollsize)
- [viewportSize](VGridHandle.md#viewportsize)

## Methods

### scrollToIndex

▸ **scrollToIndex**(`indexX`, `indexY`): `void`

Scroll to the item specified by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `indexX` | `number` | horizontal index of item |
| `indexY` | `number` | vertical index of item |

#### Returns

`void`

#### Defined in

[src/react/VGrid.tsx:136](https://github.com/inokawa/virtua/blob/e7a6e317/src/react/VGrid.tsx#L136)

___

### scrollTo

▸ **scrollTo**(`offsetX`, `offsetY`): `void`

Scroll to the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offsetX` | `number` | offset from left |
| `offsetY` | `number` | offset from top |

#### Returns

`void`

#### Defined in

[src/react/VGrid.tsx:142](https://github.com/inokawa/virtua/blob/e7a6e317/src/react/VGrid.tsx#L142)

___

### scrollBy

▸ **scrollBy**(`offsetX`, `offsetY`): `void`

Scroll by the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offsetX` | `number` | horizontal offset from current position |
| `offsetY` | `number` | vertical offset from current position |

#### Returns

`void`

#### Defined in

[src/react/VGrid.tsx:148](https://github.com/inokawa/virtua/blob/e7a6e317/src/react/VGrid.tsx#L148)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: [x: number, y: number]

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VGrid.tsx:122](https://github.com/inokawa/virtua/blob/e7a6e317/src/react/VGrid.tsx#L122)

___

### scrollSize

• `Readonly` **scrollSize**: [width: number, height: number]

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VGrid.tsx:126](https://github.com/inokawa/virtua/blob/e7a6e317/src/react/VGrid.tsx#L126)

___

### viewportSize

• `Readonly` **viewportSize**: [width: number, height: number]

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VGrid.tsx:130](https://github.com/inokawa/virtua/blob/e7a6e317/src/react/VGrid.tsx#L130)
