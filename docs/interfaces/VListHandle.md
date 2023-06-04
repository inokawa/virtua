# Interface: VListHandle

Methods of [VList](../API.md#vlist).

## Table of contents

### Methods

- [scrollToIndex](VListHandle.md#scrolltoindex)
- [scrollTo](VListHandle.md#scrollto)
- [scrollBy](VListHandle.md#scrollby)

### Properties

- [scrollOffset](VListHandle.md#scrolloffset)
- [scrollSize](VListHandle.md#scrollsize)
- [viewportSize](VListHandle.md#viewportsize)

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

[src/react/VList.tsx:212](https://github.com/inokawa/virtua/blob/c2090fa/src/react/VList.tsx#L212)

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

[src/react/VList.tsx:217](https://github.com/inokawa/virtua/blob/c2090fa/src/react/VList.tsx#L217)

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

[src/react/VList.tsx:222](https://github.com/inokawa/virtua/blob/c2090fa/src/react/VList.tsx#L222)

## Properties

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VList.tsx:199](https://github.com/inokawa/virtua/blob/c2090fa/src/react/VList.tsx#L199)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VList.tsx:203](https://github.com/inokawa/virtua/blob/c2090fa/src/react/VList.tsx#L203)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VList.tsx:207](https://github.com/inokawa/virtua/blob/c2090fa/src/react/VList.tsx#L207)
