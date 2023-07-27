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

[src/react/VList.tsx:59](https://github.com/inokawa/virtua/blob/44078c6/src/react/VList.tsx#L59)

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

[src/react/VList.tsx:64](https://github.com/inokawa/virtua/blob/44078c6/src/react/VList.tsx#L64)

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

[src/react/VList.tsx:69](https://github.com/inokawa/virtua/blob/44078c6/src/react/VList.tsx#L69)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/VList.tsx:42](https://github.com/inokawa/virtua/blob/44078c6/src/react/VList.tsx#L42)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VList.tsx:46](https://github.com/inokawa/virtua/blob/44078c6/src/react/VList.tsx#L46)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VList.tsx:50](https://github.com/inokawa/virtua/blob/44078c6/src/react/VList.tsx#L50)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VList.tsx:54](https://github.com/inokawa/virtua/blob/44078c6/src/react/VList.tsx#L54)
