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

[src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L59)

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

[src/react/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L65)

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

[src/react/Virtualizer.tsx:70](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L70)

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

[src/react/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L75)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

Get current [CacheSnapshot](react.CacheSnapshot.md).

#### Defined in

[src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L42)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L46)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L50)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/react/Virtualizer.tsx#L54)
