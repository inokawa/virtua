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
- [CustomWindowComponentProps](interfaces/CustomWindowComponentProps.md)
- [CustomItemComponentProps](interfaces/CustomItemComponentProps.md)

### Type Aliases

- [ScrollMode](API.md#scrollmode)
- [CustomCellComponent](API.md#customcellcomponent)
- [WindowComponentAttributes](API.md#windowcomponentattributes)
- [CustomWindowComponent](API.md#customwindowcomponent)
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

node_modules/@types/react/index.d.ts:392

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

node_modules/@types/react/index.d.ts:392

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

node_modules/@types/react/index.d.ts:392

## Type Aliases

### ScrollMode

Ƭ **ScrollMode**: ``"reverse"`` \| ``"rtl"``

#### Defined in

[src/react/VList.tsx:34](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/VList.tsx#L34)

___

### CustomCellComponent

Ƭ **CustomCellComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomCellComponentProps`](interfaces/CustomCellComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VGrid.tsx:43](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/VGrid.tsx#L43)

___

### WindowComponentAttributes

Ƭ **WindowComponentAttributes**: `Pick`<`React.HTMLAttributes`<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"``\> & `React.AriaAttributes`

#### Defined in

[src/react/Window.tsx:9](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/Window.tsx#L9)

___

### CustomWindowComponent

Ƭ **CustomWindowComponent**: typeof `Window`

#### Defined in

[src/react/Window.tsx:63](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/Window.tsx#L63)

___

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomItemComponentProps`](interfaces/CustomItemComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/ListItem.tsx:23](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/ListItem.tsx#L23)
