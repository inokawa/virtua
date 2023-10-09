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

[src/react/VList.tsx:75](https://github.com/inokawa/virtua/blob/257e20bb/src/react/VList.tsx#L75)

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

[src/react/VList.tsx:80](https://github.com/inokawa/virtua/blob/257e20bb/src/react/VList.tsx#L80)

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

[src/react/VList.tsx:85](https://github.com/inokawa/virtua/blob/257e20bb/src/react/VList.tsx#L85)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/VList.tsx:57](https://github.com/inokawa/virtua/blob/257e20bb/src/react/VList.tsx#L57)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VList.tsx:61](https://github.com/inokawa/virtua/blob/257e20bb/src/react/VList.tsx#L61)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VList.tsx:65](https://github.com/inokawa/virtua/blob/257e20bb/src/react/VList.tsx#L65)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VList.tsx:69](https://github.com/inokawa/virtua/blob/257e20bb/src/react/VList.tsx#L69)
