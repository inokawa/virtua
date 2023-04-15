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

[src/react/List.tsx:209](https://github.com/inokawa/virtua/blob/bcc05ab/src/react/List.tsx#L209)

___

### scrollSize

• **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/List.tsx:213](https://github.com/inokawa/virtua/blob/bcc05ab/src/react/List.tsx#L213)

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

[src/react/List.tsx:218](https://github.com/inokawa/virtua/blob/bcc05ab/src/react/List.tsx#L218)

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

[src/react/List.tsx:223](https://github.com/inokawa/virtua/blob/bcc05ab/src/react/List.tsx#L223)
