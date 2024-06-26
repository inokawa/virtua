# Module: react

## Table of contents

### Functions

- [VList](react.md#vlist)
- [Virtualizer](react.md#virtualizer)
- [WindowVirtualizer](react.md#windowvirtualizer)
- [experimental\_VGrid](react.md#experimental_vgrid)

### Interfaces

- [CacheSnapshot](../interfaces/react.CacheSnapshot.md)
- [ScrollToIndexOpts](../interfaces/react.ScrollToIndexOpts.md)
- [VListProps](../interfaces/react.VListProps.md)
- [VListHandle](../interfaces/react.VListHandle.md)
- [VirtualizerProps](../interfaces/react.VirtualizerProps.md)
- [VirtualizerHandle](../interfaces/react.VirtualizerHandle.md)
- [WindowVirtualizerProps](../interfaces/react.WindowVirtualizerProps.md)
- [WindowVirtualizerHandle](../interfaces/react.WindowVirtualizerHandle.md)
- [VGridProps](../interfaces/react.VGridProps.md)
- [VGridHandle](../interfaces/react.VGridHandle.md)
- [CustomCellComponentProps](../interfaces/react.CustomCellComponentProps.md)
- [CustomContainerComponentProps](../interfaces/react.CustomContainerComponentProps.md)
- [CustomItemComponentProps](../interfaces/react.CustomItemComponentProps.md)

### Type Aliases

- [ScrollToIndexAlign](react.md#scrolltoindexalign)
- [CustomCellComponent](react.md#customcellcomponent)
- [ViewportComponentAttributes](react.md#viewportcomponentattributes)
- [CustomContainerComponent](react.md#customcontainercomponent)
- [CustomItemComponent](react.md#customitemcomponent)

## Functions

### VList

▸ **VList**(`props`): `ReactNode`

Virtualized list component. See [VListProps](../interfaces/react.VListProps.md) and [VListHandle](../interfaces/react.VListHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VListProps`](../interfaces/react.VListProps.md) & `RefAttributes`\<[`VListHandle`](../interfaces/react.VListHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

[src/react/VList.tsx:44](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/VList.tsx#L44)

___

### Virtualizer

▸ **Virtualizer**(`props`): `ReactNode`

Customizable list virtualizer for advanced usage. See [VirtualizerProps](../interfaces/react.VirtualizerProps.md) and [VirtualizerHandle](../interfaces/react.VirtualizerHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VirtualizerProps`](../interfaces/react.VirtualizerProps.md) & `RefAttributes`\<[`VirtualizerHandle`](../interfaces/react.VirtualizerHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

[src/react/Virtualizer.tsx:171](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/Virtualizer.tsx#L171)

___

### WindowVirtualizer

▸ **WindowVirtualizer**(`props`): `ReactNode`

[Virtualizer](react.md#virtualizer) controlled by the window scrolling. See [WindowVirtualizerProps](../interfaces/react.WindowVirtualizerProps.md) and [WindowVirtualizer](react.md#windowvirtualizer).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WindowVirtualizerProps`](../interfaces/react.WindowVirtualizerProps.md) & `RefAttributes`\<[`WindowVirtualizerHandle`](../interfaces/react.WindowVirtualizerHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

[src/react/WindowVirtualizer.tsx:116](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L116)

___

### experimental\_VGrid

▸ **experimental_VGrid**(`props`): `ReactNode`

Virtualized grid component. See [VGridProps](../interfaces/react.VGridProps.md) and [VGridHandle](../interfaces/react.VGridHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VGridProps`](../interfaces/react.VGridProps.md) & `RefAttributes`\<[`VGridHandle`](../interfaces/react.VGridHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

[src/react/VGrid.tsx:206](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/VGrid.tsx#L206)

## Type Aliases

### ScrollToIndexAlign

Ƭ **ScrollToIndexAlign**: ``"start"`` \| ``"center"`` \| ``"end"`` \| ``"nearest"``

#### Defined in

[src/core/types.ts:19](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/core/types.ts#L19)

___

### CustomCellComponent

Ƭ **CustomCellComponent**: `React.ForwardRefExoticComponent`\<`React.PropsWithoutRef`\<[`CustomCellComponentProps`](../interfaces/react.CustomCellComponentProps.md)\> & `React.RefAttributes`\<`any`\>\>

#### Defined in

[src/react/VGrid.tsx:38](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/VGrid.tsx#L38)

___

### ViewportComponentAttributes

Ƭ **ViewportComponentAttributes**: `Pick`\<`React.HTMLAttributes`\<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"`` \| ``"onKeyDown"``\> & `React.AriaAttributes`

#### Defined in

[src/react/types.ts:3](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/types.ts#L3)

___

### CustomContainerComponent

Ƭ **CustomContainerComponent**: `React.ForwardRefExoticComponent`\<`React.PropsWithoutRef`\<[`CustomContainerComponentProps`](../interfaces/react.CustomContainerComponentProps.md)\> & `React.RefAttributes`\<`any`\>\>

#### Defined in

[src/react/types.ts:14](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/types.ts#L14)

___

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`\<`React.PropsWithoutRef`\<[`CustomItemComponentProps`](../interfaces/react.CustomItemComponentProps.md)\> & `React.RefAttributes`\<`any`\>\>

#### Defined in

[src/react/types.ts:28](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/types.ts#L28)
