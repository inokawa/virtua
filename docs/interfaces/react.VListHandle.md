# Interface: VListHandle

[react](../modules/react.md).VListHandle

Methods of [VList](../modules/react.md#vlist).

## Hierarchy

- [`VirtualizerHandle`](react.VirtualizerHandle.md)

  ↳ **`VListHandle`**

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

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollToIndex](react.VirtualizerHandle.md#scrolltoindex)

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

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollTo](react.VirtualizerHandle.md#scrollto)

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

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollBy](react.VirtualizerHandle.md#scrollby)

#### Defined in

[src/react/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L71)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

Get current [CacheSnapshot](react.CacheSnapshot.md).

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[cache](react.VirtualizerHandle.md#cache)

#### Defined in

[src/react/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L43)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollOffset](react.VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L47)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollSize](react.VirtualizerHandle.md#scrollsize)

#### Defined in

[src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L51)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[viewportSize](react.VirtualizerHandle.md#viewportsize)

#### Defined in

[src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/06dc6181/src/react/Virtualizer.tsx#L55)
