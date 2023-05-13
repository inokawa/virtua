# API

## Table of contents

### Functions

- [VList](API.md#vlist)

### Interfaces

- [VListProps](interfaces/VListProps.md)
- [VListHandle](interfaces/VListHandle.md)
- [CustomItemComponentProps](interfaces/CustomItemComponentProps.md)
- [CustomWindowComponentProps](interfaces/CustomWindowComponentProps.md)

### Type Aliases

- [CustomItemComponent](API.md#customitemcomponent)
- [CustomWindowComponent](API.md#customwindowcomponent)
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

node_modules/@types/react/ts5.0/index.d.ts:345

## Type Aliases

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomItemComponentProps`](interfaces/CustomItemComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VList.tsx:193](https://github.com/inokawa/virtua/blob/8c6c738/src/react/VList.tsx#L193)

___

### CustomWindowComponent

Ƭ **CustomWindowComponent**: typeof `DefaultWindow`

#### Defined in

[src/react/VList.tsx:131](https://github.com/inokawa/virtua/blob/8c6c738/src/react/VList.tsx#L131)

___

### WindowComponentAttributes

Ƭ **WindowComponentAttributes**: `Pick`<`React.HTMLAttributes`<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"``\> & `React.AriaAttributes`

#### Defined in

[src/react/VList.tsx:89](https://github.com/inokawa/virtua/blob/8c6c738/src/react/VList.tsx#L89)