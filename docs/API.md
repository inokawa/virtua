# API

## Table of contents

### Functions

- [VList](API.md#vlist)
- [VGrid](API.md#vgrid)
- [WVList](API.md#wvlist)

### Interfaces

- [CacheSnapshot](interfaces/CacheSnapshot.md)
- [VListProps](interfaces/VListProps.md)
- [VListHandle](interfaces/VListHandle.md)
- [VGridProps](interfaces/VGridProps.md)
- [VGridHandle](interfaces/VGridHandle.md)
- [CustomCellComponentProps](interfaces/CustomCellComponentProps.md)
- [WVListProps](interfaces/WVListProps.md)
- [WVListHandle](interfaces/WVListHandle.md)
- [CustomViewportComponentProps](interfaces/CustomViewportComponentProps.md)
- [CustomItemComponentProps](interfaces/CustomItemComponentProps.md)

### Type Aliases

- [ScrollToIndexAlign](API.md#scrolltoindexalign)
- [ScrollMode](API.md#scrollmode)
- [CustomCellComponent](API.md#customcellcomponent)
- [ViewportComponentAttributes](API.md#viewportcomponentattributes)
- [CustomViewportComponent](API.md#customviewportcomponent)
- [CustomItemComponent](API.md#customitemcomponent)

## Functions

### VList

▸ **VList**(`props`): `ReactNode`

Virtualized list component. See [VListProps](interfaces/VListProps.md) and [VListHandle](interfaces/VListHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VListProps`](interfaces/VListProps.md) & `RefAttributes`<[`VListHandle`](interfaces/VListHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:393

___

### VGrid

▸ **VGrid**(`props`): `ReactNode`

Virtualized grid component. See [VGridProps](interfaces/VGridProps.md) and [VGridHandle](interfaces/VGridHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VGridProps`](interfaces/VGridProps.md) & `RefAttributes`<[`VGridHandle`](interfaces/VGridHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:393

___

### WVList

▸ **WVList**(`props`): `ReactNode`

Virtualized list component controlled by the window scrolling. See [WVListProps](interfaces/WVListProps.md) and [WVListHandle](interfaces/WVListHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WVListProps`](interfaces/WVListProps.md) & `RefAttributes`<[`WVListHandle`](interfaces/WVListHandle.md)\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:393

## Type Aliases

### ScrollToIndexAlign

Ƭ **ScrollToIndexAlign**: ``"start"`` \| ``"end"``

Alignment of item when calling scrollToIndex method.

- `start`(default): Align the item to the start of the list.
- `end`: Align the item to the end of the list.

#### Defined in

[src/core/types.ts:25](https://github.com/inokawa/virtua/blob/d011b3fe/src/core/types.ts#L25)

___

### ScrollMode

Ƭ **ScrollMode**: ``"reverse"`` \| ``"rtl"``

#### Defined in

[src/react/VList.tsx:38](https://github.com/inokawa/virtua/blob/d011b3fe/src/react/VList.tsx#L38)

___

### CustomCellComponent

Ƭ **CustomCellComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomCellComponentProps`](interfaces/CustomCellComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VGrid.tsx:45](https://github.com/inokawa/virtua/blob/d011b3fe/src/react/VGrid.tsx#L45)

___

### ViewportComponentAttributes

Ƭ **ViewportComponentAttributes**: `Pick`<`React.HTMLAttributes`<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"``\> & `React.AriaAttributes`

#### Defined in

[src/react/Viewport.tsx:9](https://github.com/inokawa/virtua/blob/d011b3fe/src/react/Viewport.tsx#L9)

___

### CustomViewportComponent

Ƭ **CustomViewportComponent**: typeof `Viewport`

#### Defined in

[src/react/Viewport.tsx:63](https://github.com/inokawa/virtua/blob/d011b3fe/src/react/Viewport.tsx#L63)

___

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomItemComponentProps`](interfaces/CustomItemComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/ListItem.tsx:23](https://github.com/inokawa/virtua/blob/d011b3fe/src/react/ListItem.tsx#L23)
