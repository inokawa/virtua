# Interface: VListHandle

[react](../modules/react.md).VListHandle

Methods of [VList](../modules/react.md#vlist).

## Hierarchy

- [`VirtualizerHandle`](react.VirtualizerHandle.md)

  ↳ **`VListHandle`**

## Table of contents

### Methods

- [getItemOffset](react.VListHandle.md#getitemoffset)
- [scrollToIndex](react.VListHandle.md#scrolltoindex)
- [scrollTo](react.VListHandle.md#scrollto)
- [scrollBy](react.VListHandle.md#scrollby)

### Properties

- [cache](react.VListHandle.md#cache)
- [scrollOffset](react.VListHandle.md#scrolloffset)
- [scrollSize](react.VListHandle.md#scrollsize)
- [viewportSize](react.VListHandle.md#viewportsize)

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

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[getItemOffset](react.VirtualizerHandle.md#getitemoffset)

#### Defined in

[src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L59)

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

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollToIndex](react.VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/react/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L65)

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

[src/react/Virtualizer.tsx:70](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L70)

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

[src/react/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L75)

## Properties

### cache

• `Readonly` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

Get current [CacheSnapshot](react.CacheSnapshot.md).

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[cache](react.VirtualizerHandle.md#cache)

#### Defined in

[src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L42)

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollOffset](react.VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L46)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[scrollSize](react.VirtualizerHandle.md#scrollsize)

#### Defined in

[src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L50)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Inherited from

[VirtualizerHandle](react.VirtualizerHandle.md).[viewportSize](react.VirtualizerHandle.md#viewportsize)

#### Defined in

[src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L54)
