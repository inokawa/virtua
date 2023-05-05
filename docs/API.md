# API

## Table of contents

### Interfaces

- [VListProps](interfaces/VListProps.md)
- [VListHandle](interfaces/VListHandle.md)
- [CustomItemComponentProps](interfaces/CustomItemComponentProps.md)
- [CustomWindowComponentProps](interfaces/CustomWindowComponentProps.md)

### Type Aliases

- [CustomItemComponent](API.md#customitemcomponent)
- [CustomWindowComponent](API.md#customwindowcomponent)
- [WindowComponentAttributes](API.md#windowcomponentattributes)

### Functions

- [VList](API.md#vlist)

## Type Aliases

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomItemComponentProps`](interfaces/CustomItemComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/VList.tsx:197](https://github.com/inokawa/virtua/blob/3a77116/src/react/VList.tsx#L197)

___

### CustomWindowComponent

Ƭ **CustomWindowComponent**: typeof `DefaultWindow`

#### Defined in

[src/react/VList.tsx:135](https://github.com/inokawa/virtua/blob/3a77116/src/react/VList.tsx#L135)

___

### WindowComponentAttributes

Ƭ **WindowComponentAttributes**: `Pick`<`React.HTMLAttributes`<`HTMLElement`\>, ``"className"`` \| ``"style"`` \| ``"id"`` \| ``"role"`` \| ``"tabIndex"``\> & `React.AriaAttributes`

#### Defined in

[src/react/VList.tsx:93](https://github.com/inokawa/virtua/blob/3a77116/src/react/VList.tsx#L93)

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
