# Interface: VListHandle

Methods of [VList](../API.md#vlist).

## Table of contents

### Properties

- [scrollOffset](VListHandle.md#scrolloffset)
- [scrollSize](VListHandle.md#scrollsize)
- [viewportSize](VListHandle.md#viewportsize)

### Methods

- [scrollToIndex](VListHandle.md#scrolltoindex)
- [scrollTo](VListHandle.md#scrollto)
- [scrollBy](VListHandle.md#scrollby)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VList.tsx:212](https://github.com/inokawa/virtua/blob/c8b3bd6/src/react/VList.tsx#L212)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VList.tsx:216](https://github.com/inokawa/virtua/blob/c8b3bd6/src/react/VList.tsx#L216)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VList.tsx:220](https://github.com/inokawa/virtua/blob/c8b3bd6/src/react/VList.tsx#L220)

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

[src/react/VList.tsx:225](https://github.com/inokawa/virtua/blob/c8b3bd6/src/react/VList.tsx#L225)

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

[src/react/VList.tsx:230](https://github.com/inokawa/virtua/blob/c8b3bd6/src/react/VList.tsx#L230)

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

[src/react/VList.tsx:235](https://github.com/inokawa/virtua/blob/c8b3bd6/src/react/VList.tsx#L235)
