# Interface: VGridHandle

[react](../modules/react.md).VGridHandle

Methods of [VGrid](../modules/react.md#experimental_vgrid).

## Table of contents

### Methods

- [scrollToIndex](react.VGridHandle.md#scrolltoindex)
- [scrollTo](react.VGridHandle.md#scrollto)
- [scrollBy](react.VGridHandle.md#scrollby)

### Properties

- [scrollOffset](react.VGridHandle.md#scrolloffset)
- [scrollSize](react.VGridHandle.md#scrollsize)
- [viewportSize](react.VGridHandle.md#viewportsize)

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

[src/react/VGrid.tsx:122](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L122)

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

[src/react/VGrid.tsx:128](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L128)

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

[src/react/VGrid.tsx:134](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L134)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: [x: number, y: number]

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VGrid.tsx:108](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L108)

___

### scrollSize

• `Readonly` **scrollSize**: [width: number, height: number]

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VGrid.tsx:112](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L112)

___

### viewportSize

• `Readonly` **viewportSize**: [width: number, height: number]

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VGrid.tsx:116](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L116)
