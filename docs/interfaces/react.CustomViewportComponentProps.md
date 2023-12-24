# Interface: CustomViewportComponentProps

[react](../modules/react.md).CustomViewportComponentProps

Props of customized scrollable component.

## Table of contents

### Properties

- [children](react.CustomViewportComponentProps.md#children)
- [attrs](react.CustomViewportComponentProps.md#attrs)
- [height](react.CustomViewportComponentProps.md#height)
- [width](react.CustomViewportComponentProps.md#width)
- [scrolling](react.CustomViewportComponentProps.md#scrolling)

## Properties

### children

• **children**: `ReactNode`

Renderable item elements.

#### Defined in

[src/react/Viewport.tsx:22](https://github.com/inokawa/virtua/blob/401edf3d/src/react/Viewport.tsx#L22)

___

### attrs

• **attrs**: [`ViewportComponentAttributes`](../modules/react.md#viewportcomponentattributes)

Attributes that should be passed to the scrollable element.

#### Defined in

[src/react/Viewport.tsx:26](https://github.com/inokawa/virtua/blob/401edf3d/src/react/Viewport.tsx#L26)

___

### height

• **height**: `undefined` \| `number`

Total height of items. It's undefined if component is not vertically scrollable.

#### Defined in

[src/react/Viewport.tsx:30](https://github.com/inokawa/virtua/blob/401edf3d/src/react/Viewport.tsx#L30)

___

### width

• **width**: `undefined` \| `number`

Total width of items. It's undefined if component is not horizontally scrollable.

#### Defined in

[src/react/Viewport.tsx:34](https://github.com/inokawa/virtua/blob/401edf3d/src/react/Viewport.tsx#L34)

___

### scrolling

• **scrolling**: `boolean`

Currently component is scrolling or not.

#### Defined in

[src/react/Viewport.tsx:38](https://github.com/inokawa/virtua/blob/401edf3d/src/react/Viewport.tsx#L38)
