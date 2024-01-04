# Interface: VListHandle

[react](../modules/react.md).VListHandle

Methods of [VList](../modules/react.md#vlist).

## Table of contents

### Methods

- [scrollToIndex](react.VListHandle.md#scrolltoindex)
- [scrollTo](react.VListHandle.md#scrollto)
- [scrollBy](react.VListHandle.md#scrollby)

### Properties

- [cache](react.VListHandle.md#cache)
- [scrollOffset](react.VListHandle.md#scrolloffset)
- [scrollSize](react.VListHandle.md#scrollsize)
- [viewportSize](react.VListHandle.md#viewportsize)

## Methods

### scrollToIndex

▸ **scrollToIndex**(`index`, `opts?`): `void`

Scroll to the item specified by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |
| `opts?` | [`ScrollToIndexOpts`](react.ScrollToIndexOpts.md) | options |

#### Returns

`void`

#### Defined in

[src/react/VList.tsx:70](https://github.com/inokawa/virtua/blob/de57a89c/src/react/VList.tsx#L70)

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

[src/react/VList.tsx:75](https://github.com/inokawa/virtua/blob/de57a89c/src/react/VList.tsx#L75)

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

[src/react/VList.tsx:80](https://github.com/inokawa/virtua/blob/de57a89c/src/react/VList.tsx#L80)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

Get current [CacheSnapshot](react.CacheSnapshot.md).

#### Defined in

[src/react/VList.tsx:52](https://github.com/inokawa/virtua/blob/de57a89c/src/react/VList.tsx#L52)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/VList.tsx:56](https://github.com/inokawa/virtua/blob/de57a89c/src/react/VList.tsx#L56)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/VList.tsx:60](https://github.com/inokawa/virtua/blob/de57a89c/src/react/VList.tsx#L60)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/VList.tsx:64](https://github.com/inokawa/virtua/blob/de57a89c/src/react/VList.tsx#L64)
