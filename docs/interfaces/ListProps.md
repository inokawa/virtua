# Interface: ListProps

Props of [List](../API.md#list).

## Table of contents

### Properties

- [children](ListProps.md#children)
- [itemSize](ListProps.md#itemsize)
- [overscan](ListProps.md#overscan)
- [horizontal](ListProps.md#horizontal)
- [rtl](ListProps.md#rtl)
- [endThreshold](ListProps.md#endthreshold)
- [style](ListProps.md#style)
- [element](ListProps.md#element)
- [itemElement](ListProps.md#itemelement)
- [onEndReached](ListProps.md#onendreached)
- [onScroll](ListProps.md#onscroll)
- [onScrollStop](ListProps.md#onscrollstop)

## Properties

### children

• **children**: `ReactNode`

Elements rendered by this component.

#### Defined in

[src/react/List.tsx:242](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L242)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

40

#### Defined in

[src/react/List.tsx:247](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L247)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

4

#### Defined in

[src/react/List.tsx:252](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L252)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/List.tsx:256](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L256)

___

### rtl

• `Optional` **rtl**: `boolean`

You have to set true if you use this component under `direction: rtl` style.

#### Defined in

[src/react/List.tsx:260](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L260)

___

### endThreshold

• `Optional` **endThreshold**: `number`

Number of items to be the margin from the end of the scroll. See also [onEndReached](ListProps.md#onendreached).

**`Default Value`**

0

#### Defined in

[src/react/List.tsx:265](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L265)

___

### style

• `Optional` **style**: `CSSProperties`

Inline style prop to override style of scrollable element.

#### Defined in

[src/react/List.tsx:269](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L269)

___

### element

• `Optional` **element**: `ForwardRefExoticComponent`<[`CustomWindowComponentProps`](CustomWindowComponentProps.md) & `RefAttributes`<`any`\>\>

Customized element type for scrollable element.

**`Default Value`**

DefaultWindow

#### Defined in

[src/react/List.tsx:274](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L274)

___

### itemElement

• `Optional` **itemElement**: `CustomItemComponentOrElement`

Customized element type for item element.

**`Default Value`**

"div"

#### Defined in

[src/react/List.tsx:279](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L279)

___

### onEndReached

• `Optional` **onEndReached**: () => `void`

#### Type declaration

▸ (): `void`

Callback invoked when scrolling reached to the end. The margin from the end is specified by [endThreshold](ListProps.md#endthreshold).

##### Returns

`void`

#### Defined in

[src/react/List.tsx:283](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L283)

___

### onScroll

• `Optional` **onScroll**: (`offset`: `number`) => `void`

#### Type declaration

▸ (`offset`): `void`

Callback invoked whenever scroll offset changes.

##### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

##### Returns

`void`

#### Defined in

[src/react/List.tsx:287](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L287)

___

### onScrollStop

• `Optional` **onScrollStop**: () => `void`

#### Type declaration

▸ (): `void`

Callback invoked when scrolling stops.

##### Returns

`void`

#### Defined in

[src/react/List.tsx:291](https://github.com/inokawa/virtua/blob/6085b71/src/react/List.tsx#L291)
