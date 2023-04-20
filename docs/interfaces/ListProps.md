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

## Properties

### children

• **children**: `ReactNode`

Elements rendered by this component.

#### Defined in

[src/react/List.tsx:241](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L241)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

40

#### Defined in

[src/react/List.tsx:246](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L246)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

4

#### Defined in

[src/react/List.tsx:251](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L251)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/List.tsx:255](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L255)

___

### rtl

• `Optional` **rtl**: `boolean`

You have to set true if you use this component under `direction: rtl` style.

#### Defined in

[src/react/List.tsx:259](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L259)

___

### endThreshold

• `Optional` **endThreshold**: `number`

Number of items to be the margin from the end of the scroll. See also [onEndReached](ListProps.md#onendreached).

**`Default Value`**

0

#### Defined in

[src/react/List.tsx:264](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L264)

___

### style

• `Optional` **style**: `CSSProperties`

Inline style prop to override style of scrollable element.

#### Defined in

[src/react/List.tsx:268](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L268)

___

### element

• `Optional` **element**: `ForwardRefExoticComponent`<[`CustomWindowComponentProps`](CustomWindowComponentProps.md) & `RefAttributes`<`any`\>\>

Customized element type for scrollable element.

**`Default Value`**

DefaultWindow

#### Defined in

[src/react/List.tsx:273](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L273)

___

### itemElement

• `Optional` **itemElement**: `CustomItemComponentOrElement`

Customized element type for item element.

**`Default Value`**

"div"

#### Defined in

[src/react/List.tsx:278](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L278)

___

### onEndReached

• `Optional` **onEndReached**: () => `void`

#### Type declaration

▸ (): `void`

Callback invoked when scrolling reached to the end. The margin from the end is specified by [endThreshold](ListProps.md#endthreshold).

##### Returns

`void`

#### Defined in

[src/react/List.tsx:282](https://github.com/inokawa/virtua/blob/0778171/src/react/List.tsx#L282)
