# Module: react

## Table of contents

### Functions

- [VList](react.md#vlist)
- [WVList](react.md#wvlist)
- [experimental\_VGrid](react.md#experimental_vgrid)

### Interfaces

- [CacheSnapshot](../interfaces/react.CacheSnapshot.md)
- [ScrollToIndexOpts](../interfaces/react.ScrollToIndexOpts.md)
- [VListProps](../interfaces/react.VListProps.md)
- [VListHandle](../interfaces/react.VListHandle.md)
- [WVListProps](../interfaces/react.WVListProps.md)
- [WVListHandle](../interfaces/react.WVListHandle.md)
- [VGridProps](../interfaces/react.VGridProps.md)
- [VGridHandle](../interfaces/react.VGridHandle.md)
- [CustomCellComponentProps](../interfaces/react.CustomCellComponentProps.md)
- [CustomViewportComponentProps](../interfaces/react.CustomViewportComponentProps.md)
- [CustomItemComponentProps](../interfaces/react.CustomItemComponentProps.md)

### Type Aliases

- [ScrollToIndexAlign](react.md#scrolltoindexalign)
- [CustomCellComponent](react.md#customcellcomponent)
- [ViewportComponentAttributes](react.md#viewportcomponentattributes)
- [CustomViewportComponent](react.md#customviewportcomponent)
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

node_modules/@types/react/index.d.ts:393

___

### WVList

▸ **WVList**(`props`): `ReactNode`

Virtualized list component controlled by the window scrolling. See [WVListProps](../interfaces/react.WVListProps.md) and [WVListHandle](../interfaces/react.WVListHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WVListProps`](../interfaces/react.WVListProps.md) & `RefAttributes`\<[`WVListHandle`](../interfaces/react.WVListHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:393

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

node_modules/@types/react/index.d.ts:393

## Type Aliases

### ScrollToIndexAlign

Ƭ **ScrollToIndexAlign**: ``"start"`` \| ``"center"`` \| ``"end"`` \| ``"nearest"``

#### Defined in

[src/core/types.ts:11](https://github.com/inokawa/virtua/blob/735e8bf3/src/core/types.ts#L11)

___

### CustomCellComponent

Ƭ **CustomCellComponent**: `React.ForwardRefExoticComponent`\<`React.PropsWithoutRef`\<[`CustomCellComponentProps`](../interfaces/react.CustomCellComponentProps.md)\> & `React.RefAttributes`\<`any`\>\>

#### Defined in

[src/react/VGrid.tsx:46](https://github.com/inokawa/virtua/blob/735e8bf3/src/react/VGrid.tsx#L46)

___

### ViewportComponentAttributes

Ƭ **ViewportComponentAttributes**: `Pick`\<`React.HTMLAttributes`\<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"`` \| ``"onKeyDown"``\> & `React.AriaAttributes`

#### Defined in

[src/react/Viewport.tsx:9](https://github.com/inokawa/virtua/blob/735e8bf3/src/react/Viewport.tsx#L9)

___

### CustomViewportComponent

Ƭ **CustomViewportComponent**: typeof `Viewport`

#### Defined in

[src/react/Viewport.tsx:64](https://github.com/inokawa/virtua/blob/735e8bf3/src/react/Viewport.tsx#L64)

___

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`\<`React.PropsWithoutRef`\<[`CustomItemComponentProps`](../interfaces/react.CustomItemComponentProps.md)\> & `React.RefAttributes`\<`any`\>\>

#### Defined in

[src/react/ListItem.tsx:23](https://github.com/inokawa/virtua/blob/735e8bf3/src/react/ListItem.tsx#L23)
