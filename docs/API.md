# API

## Table of contents

### Functions

- [VList](API.md#vlist)
- [VGrid](API.md#vgrid)

### Interfaces

- [VListProps](interfaces/VListProps.md)
- [VListHandle](interfaces/VListHandle.md)
- [CustomItemComponentProps](interfaces/CustomItemComponentProps.md)
- [CustomWindowComponentProps](interfaces/CustomWindowComponentProps.md)
- [VGridProps](interfaces/VGridProps.md)
- [VGridHandle](interfaces/VGridHandle.md)
- [CustomCellComponentProps](interfaces/CustomCellComponentProps.md)
- [CustomGridWindowComponentProps](interfaces/CustomGridWindowComponentProps.md)

### Type Aliases

- [CustomItemComponent](API.md#customitemcomponent)
- [CustomWindowComponent](API.md#customwindowcomponent)
- [CustomCellComponent](API.md#customcellcomponent)
- [CustomGridWindowComponent](API.md#customgridwindowcomponent)
- [WindowComponentAttributes](API.md#windowcomponentattributes)

## Functions

### VList

▸ **VList**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Virtualized list component. See [VListProps](interfaces/VListProps.md) and [VListHandle](interfaces/VListHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VListProps`](interfaces/VListProps.md) & `RefAttributes`<[`VListHandle`](interfaces/VListHandle.md)\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

___

### VGrid

▸ **VGrid**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Virtualized grid component. See [VGridProps](interfaces/VGridProps.md) and [VGridHandle](interfaces/VGridHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VGridProps`](interfaces/VGridProps.md) & `RefAttributes`<[`VGridHandle`](interfaces/VGridHandle.md)\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

## Type Aliases

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomItemComponentProps`](interfaces/CustomItemComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VList.tsx:184](https://github.com/inokawa/virtua/blob/8e03f83/src/react/VList.tsx#L184)

___

### CustomWindowComponent

Ƭ **CustomWindowComponent**: typeof `DefaultWindow`

#### Defined in

[src/react/VList.tsx:122](https://github.com/inokawa/virtua/blob/8e03f83/src/react/VList.tsx#L122)

___

### CustomCellComponent

Ƭ **CustomCellComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomCellComponentProps`](interfaces/CustomCellComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VGrid.tsx:32](https://github.com/inokawa/virtua/blob/8e03f83/src/react/VGrid.tsx#L32)

___

### CustomGridWindowComponent

Ƭ **CustomGridWindowComponent**: typeof `DefaultWindow`

#### Defined in

[src/react/VGrid.tsx:147](https://github.com/inokawa/virtua/blob/8e03f83/src/react/VGrid.tsx#L147)

___

### WindowComponentAttributes

Ƭ **WindowComponentAttributes**: `Pick`<`React.HTMLAttributes`<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"``\> & `React.AriaAttributes`

#### Defined in

[src/react/types.ts:1](https://github.com/inokawa/virtua/blob/8e03f83/src/react/types.ts#L1)
