# Module: solid

## Table of contents

### Functions

- [VList](solid.md#vlist)
- [Virtualizer](solid.md#virtualizer)
- [WindowVirtualizer](solid.md#windowvirtualizer)

### Interfaces

- [VListProps](../interfaces/solid.VListProps.md)
- [VListHandle](../interfaces/solid.VListHandle.md)
- [VirtualizerProps](../interfaces/solid.VirtualizerProps.md)
- [VirtualizerHandle](../interfaces/solid.VirtualizerHandle.md)
- [WindowVirtualizerProps](../interfaces/solid.WindowVirtualizerProps.md)

## Functions

### VList

▸ **VList**\<`T`\>(`props`): `Element`

Virtualized list component. See [VListProps](../interfaces/solid.VListProps.md) and [VListHandle](../interfaces/solid.VListHandle.md).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VListProps`](../interfaces/solid.VListProps.md)\<`T`\> |

#### Returns

`Element`

#### Defined in

[src/solid/VList.tsx:39](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/solid/VList.tsx#L39)

___

### Virtualizer

▸ **Virtualizer**\<`T`\>(`props`): `Element`

Customizable list virtualizer for advanced usage. See [VirtualizerProps](../interfaces/solid.VirtualizerProps.md) and [VirtualizerHandle](../interfaces/solid.VirtualizerHandle.md).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VirtualizerProps`](../interfaces/solid.VirtualizerProps.md)\<`T`\> |

#### Returns

`Element`

#### Defined in

[src/solid/Virtualizer.tsx:156](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/solid/Virtualizer.tsx#L156)

___

### WindowVirtualizer

▸ **WindowVirtualizer**\<`T`\>(`props`): `Element`

[Virtualizer](solid.md#virtualizer) controlled by the window scrolling. See [WindowVirtualizerProps](../interfaces/solid.WindowVirtualizerProps.md) and [WindowVirtualizer](solid.md#windowvirtualizer).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WindowVirtualizerProps`](../interfaces/solid.WindowVirtualizerProps.md)\<`T`\> |

#### Returns

`Element`

#### Defined in

[src/solid/WindowVirtualizer.tsx:93](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/solid/WindowVirtualizer.tsx#L93)
