# Interface: VListHandle

Methods of [VList](../API.md#vlist).

## Table of contents

### Methods

- [scrollToIndex](VListHandle.md#scrolltoindex)
- [scrollTo](VListHandle.md#scrollto)
- [scrollBy](VListHandle.md#scrollby)

### Properties

- [cache](VListHandle.md#cache)
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

[src/react/VList.tsx:64](https://github.com/inokawa/virtua/blob/e247ef1/src/react/VList.tsx#L64)

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

[src/react/VList.tsx:69](https://github.com/inokawa/virtua/blob/e247ef1/src/react/VList.tsx#L69)

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

[src/react/VList.tsx:74](https://github.com/inokawa/virtua/blob/e247ef1/src/react/VList.tsx#L74)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/VList.tsx:47](https://github.com/inokawa/virtua/blob/e247ef1/src/react/VList.tsx#L47)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VList.tsx:51](https://github.com/inokawa/virtua/blob/e247ef1/src/react/VList.tsx#L51)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VList.tsx:55](https://github.com/inokawa/virtua/blob/e247ef1/src/react/VList.tsx#L55)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VList.tsx:59](https://github.com/inokawa/virtua/blob/e247ef1/src/react/VList.tsx#L59)
