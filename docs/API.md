# API

## Table of contents

### Functions

- [List](API.md#list)

### Interfaces

- [ListProps](interfaces/ListProps.md)
- [ListHandle](interfaces/ListHandle.md)
- [CustomItemComponentProps](interfaces/CustomItemComponentProps.md)
- [CustomWindowComponentProps](interfaces/CustomWindowComponentProps.md)

### Type Aliases

- [CustomItemComponent](API.md#customitemcomponent)
- [CustomWindowComponent](API.md#customwindowcomponent)

## Functions

### List

▸ **List**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Virtualized list component. See [ListProps](interfaces/ListProps.md) and [ListHandle](interfaces/ListHandle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ListProps`](interfaces/ListProps.md) & `RefAttributes`<[`ListHandle`](interfaces/ListHandle.md)\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:361

## Type Aliases

### CustomItemComponent

Ƭ **CustomItemComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomItemComponentProps`](interfaces/CustomItemComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/react/List.tsx:199](https://github.com/inokawa/virtua/blob/e00e786/src/react/List.tsx#L199)

___

### CustomWindowComponent

Ƭ **CustomWindowComponent**: typeof `DefaultWindow`

#### Defined in

[src/react/List.tsx:138](https://github.com/inokawa/virtua/blob/e00e786/src/react/List.tsx#L138)
