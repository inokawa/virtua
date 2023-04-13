# Interface: ListHandle

Methods of [List](../API.md#list).

## Table of contents

### Properties

- [scrollOffset](ListHandle.md#scrolloffset)
- [scrollSize](ListHandle.md#scrollsize)

### Methods

- [scrollToIndex](ListHandle.md#scrolltoindex)
- [scrollToOffset](ListHandle.md#scrolltooffset)

## Properties

### scrollOffset

• **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/List.tsx:207](https://github.com/inokawa/virtua/blob/0de8d13/src/react/List.tsx#L207)

___

### scrollSize

• **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/List.tsx:211](https://github.com/inokawa/virtua/blob/0de8d13/src/react/List.tsx#L211)

## Methods

### scrollToIndex

▸ **scrollToIndex**(`index`): `void`

Scroll to the item specified by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |

#### Returns

`void`

#### Defined in

[src/react/List.tsx:216](https://github.com/inokawa/virtua/blob/0de8d13/src/react/List.tsx#L216)

___

### scrollToOffset

▸ **scrollToOffset**(`offset`): `void`

Scroll to the item specified by offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | offset from start |

#### Returns

`void`

#### Defined in

[src/react/List.tsx:221](https://github.com/inokawa/virtua/blob/0de8d13/src/react/List.tsx#L221)
