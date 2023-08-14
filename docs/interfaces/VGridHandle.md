# Interface: VGridHandle

Methods of [VGrid](../API.md#vgrid).

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

[src/react/VGrid.tsx:163](https://github.com/inokawa/virtua/blob/b0609094/src/react/VGrid.tsx#L163)

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

[src/react/VGrid.tsx:169](https://github.com/inokawa/virtua/blob/b0609094/src/react/VGrid.tsx#L169)

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

[src/react/VGrid.tsx:175](https://github.com/inokawa/virtua/blob/b0609094/src/react/VGrid.tsx#L175)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: [x: number, y: number]

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VGrid.tsx:149](https://github.com/inokawa/virtua/blob/b0609094/src/react/VGrid.tsx#L149)

___

### scrollSize

• `Readonly` **scrollSize**: [width: number, height: number]

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VGrid.tsx:153](https://github.com/inokawa/virtua/blob/b0609094/src/react/VGrid.tsx#L153)

___

### viewportSize

• `Readonly` **viewportSize**: [width: number, height: number]

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VGrid.tsx:157](https://github.com/inokawa/virtua/blob/b0609094/src/react/VGrid.tsx#L157)
