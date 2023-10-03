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

▸ **scrollToIndex**(`index`, `align?`): `void`

Scroll to the item specified by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |
| `align?` | [`ScrollToIndexAlign`](../API.md#scrolltoindexalign) | alignment of item |

#### Returns

`void`

#### Defined in

[src/react/VList.tsx:77](https://github.com/inokawa/virtua/blob/c2ef64d1/src/react/VList.tsx#L77)

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

[src/react/VList.tsx:82](https://github.com/inokawa/virtua/blob/c2ef64d1/src/react/VList.tsx#L82)

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

[src/react/VList.tsx:87](https://github.com/inokawa/virtua/blob/c2ef64d1/src/react/VList.tsx#L87)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/VList.tsx:59](https://github.com/inokawa/virtua/blob/c2ef64d1/src/react/VList.tsx#L59)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VList.tsx:63](https://github.com/inokawa/virtua/blob/c2ef64d1/src/react/VList.tsx#L63)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VList.tsx:67](https://github.com/inokawa/virtua/blob/c2ef64d1/src/react/VList.tsx#L67)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VList.tsx:71](https://github.com/inokawa/virtua/blob/c2ef64d1/src/react/VList.tsx#L71)
