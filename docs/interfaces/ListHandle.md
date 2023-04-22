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

[src/react/List.tsx:218](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L218)

___

### scrollSize

• **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/List.tsx:222](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L222)

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

[src/react/List.tsx:227](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L227)

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

[src/react/List.tsx:232](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L232)
