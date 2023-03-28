# API

## Table of contents

### Functions

- [List](API.md#list)

### Interfaces

- [ListProps](interfaces/ListProps.md)
- [ListHandle](interfaces/ListHandle.md)
- [CustomComponentProps](interfaces/CustomComponentProps.md)

### Type Aliases

- [CustomComponent](API.md#customcomponent)

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

node_modules/@types/react/index.d.ts:350

## Type Aliases

### CustomComponent

Ƭ **CustomComponent**: `React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<[`CustomComponentProps`](interfaces/CustomComponentProps.md)\> & `React.RefAttributes`<`any`\>\>

#### Defined in

[src/List.tsx:197](https://github.com/inokawa/virtua/blob/c382460/src/List.tsx#L197)
