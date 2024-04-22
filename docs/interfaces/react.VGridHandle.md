# Interface: VGridHandle

[react](../modules/react.md).VGridHandle

Methods of [VGrid](../modules/react.md#experimental_vgrid).

## Table of contents

### Methods

- [scrollToIndex](react.VGridHandle.md#scrolltoindex)
- [scrollTo](react.VGridHandle.md#scrollto)
- [scrollBy](react.VGridHandle.md#scrollby)

### Properties

- [scrollTop](react.VGridHandle.md#scrolltop)
- [scrollLeft](react.VGridHandle.md#scrollleft)
- [scrollHeight](react.VGridHandle.md#scrollheight)
- [scrollWidth](react.VGridHandle.md#scrollwidth)
- [viewportHeight](react.VGridHandle.md#viewportheight)
- [viewportWidth](react.VGridHandle.md#viewportwidth)

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

[src/react/VGrid.tsx:133](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L133)

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

[src/react/VGrid.tsx:139](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L139)

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

[src/react/VGrid.tsx:145](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L145)

## Properties

### scrollTop

• `Readonly` **scrollTop**: `number`

Get current scrollTop.

#### Defined in

[src/react/VGrid.tsx:107](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L107)

___

### scrollLeft

• `Readonly` **scrollLeft**: `number`

Get current scrollLeft.

#### Defined in

[src/react/VGrid.tsx:111](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L111)

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

Get current scrollHeight.

#### Defined in

[src/react/VGrid.tsx:115](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L115)

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

Get current scrollWidth.

#### Defined in

[src/react/VGrid.tsx:119](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L119)

___

### viewportHeight

• `Readonly` **viewportHeight**: `number`

Get current offsetHeight.

#### Defined in

[src/react/VGrid.tsx:123](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L123)

___

### viewportWidth

• `Readonly` **viewportWidth**: `number`

Get current offsetWidth.

#### Defined in

[src/react/VGrid.tsx:127](https://github.com/inokawa/virtua/blob/86627b53/src/react/VGrid.tsx#L127)
