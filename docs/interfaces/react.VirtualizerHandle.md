# Interface: VirtualizerHandle

[react](../modules/react.md).VirtualizerHandle

Methods of [Virtualizer](../modules/react.md#virtualizer).

## Hierarchy

- **`VirtualizerHandle`**

  ↳ [`VListHandle`](react.VListHandle.md)

## Table of contents

### Methods

- [getItemOffset](react.VirtualizerHandle.md#getitemoffset)
- [scrollToIndex](react.VirtualizerHandle.md#scrolltoindex)
- [scrollTo](react.VirtualizerHandle.md#scrollto)
- [scrollBy](react.VirtualizerHandle.md#scrollby)

### Properties

- [cache](react.VirtualizerHandle.md#cache)
- [scrollOffset](react.VirtualizerHandle.md#scrolloffset)
- [scrollSize](react.VirtualizerHandle.md#scrollsize)
- [viewportSize](react.VirtualizerHandle.md#viewportsize)

## Methods

### getItemOffset

▸ **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |

#### Returns

`number`

#### Defined in

[src/react/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L58)

___

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

[src/react/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L64)

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

[src/react/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L69)

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

[src/react/Virtualizer.tsx:74](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L74)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

Get current [CacheSnapshot](react.CacheSnapshot.md).

#### Defined in

[src/react/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L41)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L45)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L49)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/8bd5d933/src/react/Virtualizer.tsx#L53)
