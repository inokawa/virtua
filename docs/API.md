# API

## Table of contents

### Functions

- [VList](API.md#vlist)
- [VGrid](API.md#vgrid)

### Interfaces

- [VListProps](interfaces/VListProps.md)
- [VListHandle](interfaces/VListHandle.md)
- [CustomItemComponentProps](interfaces/CustomItemComponentProps.md)
- [VGridProps](interfaces/VGridProps.md)
- [VGridHandle](interfaces/VGridHandle.md)
- [CustomCellComponentProps](interfaces/CustomCellComponentProps.md)
- [CustomWindowComponentProps](interfaces/CustomWindowComponentProps.md)

### Type Aliases

- [CustomItemComponent](API.md#customitemcomponent)
- [ScrollMode](API.md#scrollmode)
- [CustomCellComponent](API.md#customcellcomponent)
- [WindowComponentAttributes](API.md#windowcomponentattributes)
- [CustomWindowComponent](API.md#customwindowcomponent)

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

node_modules/@types/react/index.d.ts:383

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

node_modules/@types/react/index.d.ts:383

## Type Aliases

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomItemComponentProps`](interfaces/CustomItemComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VList.tsx:151](https://github.com/inokawa/virtua/blob/3512cbe/src/react/VList.tsx#L151)

___

### ScrollMode

Ƭ **ScrollMode**: ``"reverse"`` \| ``"rtl"``

#### Defined in

[src/react/VList.tsx:32](https://github.com/inokawa/virtua/blob/3512cbe/src/react/VList.tsx#L32)

___

### CustomCellComponent

Ƭ **CustomCellComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomCellComponentProps`](interfaces/CustomCellComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VGrid.tsx:38](https://github.com/inokawa/virtua/blob/3512cbe/src/react/VGrid.tsx#L38)

___

### WindowComponentAttributes

Ƭ **WindowComponentAttributes**: `Pick`<`React.HTMLAttributes`<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"``\> & `React.AriaAttributes`

#### Defined in

[src/react/DefaultWindow.tsx:9](https://github.com/inokawa/virtua/blob/3512cbe/src/react/DefaultWindow.tsx#L9)

___

### CustomWindowComponent

Ƭ **CustomWindowComponent**: typeof `DefaultWindow`

#### Defined in

[src/react/DefaultWindow.tsx:63](https://github.com/inokawa/virtua/blob/3512cbe/src/react/DefaultWindow.tsx#L63)
