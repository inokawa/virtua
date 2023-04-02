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
- [innerStyle](ListProps.md#innerstyle)
- [element](ListProps.md#element)
- [innerElement](ListProps.md#innerelement)
- [itemElement](ListProps.md#itemelement)
- [onEndReached](ListProps.md#onendreached)

## Properties

### children

• **children**: `ReactNode`

Elements rendered by this component.

#### Defined in

[src/react/List.tsx:228](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L228)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

40

#### Defined in

[src/react/List.tsx:233](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L233)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

6

#### Defined in

[src/react/List.tsx:238](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L238)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/List.tsx:242](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L242)

___

### rtl

• `Optional` **rtl**: `boolean`

You have to set true if you use this component under `direction: rtl` style.

#### Defined in

[src/react/List.tsx:246](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L246)

___

### endThreshold

• `Optional` **endThreshold**: `number`

Number of items to be the margin from the end of the scroll. See also [onEndReached](ListProps.md#onendreached).

**`Default Value`**

0

#### Defined in

[src/react/List.tsx:251](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L251)

___

### style

• `Optional` **style**: `CSSProperties`

Inline style prop to override style of scrollable element.

#### Defined in

[src/react/List.tsx:255](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L255)

___

### innerStyle

• `Optional` **innerStyle**: `CSSProperties`

Inline style prop to override style of inner element.

#### Defined in

[src/react/List.tsx:259](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L259)

___

### element

• `Optional` **element**: `CustomElementType`

Customized element type for scrollable element.

**`Default Value`**

"div"

#### Defined in

[src/react/List.tsx:264](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L264)

___

### innerElement

• `Optional` **innerElement**: `CustomElementType`

Customized element type for inner element.

**`Default Value`**

"div"

#### Defined in

[src/react/List.tsx:269](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L269)

___

### itemElement

• `Optional` **itemElement**: `CustomElementType`

Customized element type for item element.

**`Default Value`**

"div"

#### Defined in

[src/react/List.tsx:274](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L274)

___

### onEndReached

• `Optional` **onEndReached**: () => `void`

#### Type declaration

▸ (): `void`

Callback invoked when scrolling reached to the end. The margin from the end is specified by [endThreshold](ListProps.md#endthreshold).

##### Returns

`void`

#### Defined in

[src/react/List.tsx:278](https://github.com/inokawa/virtua/blob/537df5d/src/react/List.tsx#L278)
