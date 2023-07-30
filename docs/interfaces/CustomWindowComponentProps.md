# Interface: CustomWindowComponentProps

Props of customized scrollable component.

## Table of contents

### Properties

- [children](CustomWindowComponentProps.md#children)
- [attrs](CustomWindowComponentProps.md#attrs)
- [height](CustomWindowComponentProps.md#height)
- [width](CustomWindowComponentProps.md#width)
- [scrolling](CustomWindowComponentProps.md#scrolling)

## Properties

### children

• **children**: `ReactNode`

Renderable item elements.

#### Defined in

[src/react/Window.tsx:22](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/Window.tsx#L22)

___

### attrs

• **attrs**: [`WindowComponentAttributes`](../API.md#windowcomponentattributes)

Attributes that should be passed to the scrollable element.

#### Defined in

[src/react/Window.tsx:26](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/Window.tsx#L26)

___

### height

• **height**: `undefined` \| `number`

Total height of items. It's undefined if component is not vertically scrollable.

#### Defined in

[src/react/Window.tsx:30](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/Window.tsx#L30)

___

### width

• **width**: `undefined` \| `number`

Total width of items. It's undefined if component is not horizontally scrollable.

#### Defined in

[src/react/Window.tsx:34](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/Window.tsx#L34)

___

### scrolling

• **scrolling**: `boolean`

Currently component is scrolling or not.

#### Defined in

[src/react/Window.tsx:38](https://github.com/inokawa/virtua/blob/4d79b6b/src/react/Window.tsx#L38)
