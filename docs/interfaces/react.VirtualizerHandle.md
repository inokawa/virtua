# Interface: VirtualizerHandle

[react](../modules/react.md).VirtualizerHandle

Methods of [Virtualizer](../modules/react.md#virtualizer).

## Hierarchy

- **`VirtualizerHandle`**

  ↳ [`VListHandle`](react.VListHandle.md)

## Table of contents

### Methods

- [scrollToIndex](react.VirtualizerHandle.md#scrolltoindex)
- [scrollTo](react.VirtualizerHandle.md#scrollto)
- [scrollBy](react.VirtualizerHandle.md#scrollby)

### Properties

- [cache](react.VirtualizerHandle.md#cache)
- [scrollOffset](react.VirtualizerHandle.md#scrolloffset)
- [scrollSize](react.VirtualizerHandle.md#scrollsize)
- [viewportSize](react.VirtualizerHandle.md#viewportsize)

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

[src/react/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L61)

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

[src/react/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L66)

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

[src/react/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L71)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

Get current [CacheSnapshot](react.CacheSnapshot.md).

#### Defined in

[src/react/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L43)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L47)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L51)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L55)
