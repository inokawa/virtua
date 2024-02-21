# Interface: VirtualizerProps

[react](../modules/react.md).VirtualizerProps

Props of [Virtualizer](../modules/react.md#virtualizer).

## Table of contents

### Properties

- [children](react.VirtualizerProps.md#children)
- [count](react.VirtualizerProps.md#count)
- [overscan](react.VirtualizerProps.md#overscan)
- [itemSize](react.VirtualizerProps.md#itemsize)
- [shift](react.VirtualizerProps.md#shift)
- [horizontal](react.VirtualizerProps.md#horizontal)
- [cache](react.VirtualizerProps.md#cache)
- [startMargin](react.VirtualizerProps.md#startmargin)
- [endMargin](react.VirtualizerProps.md#endmargin)
- [ssrCount](react.VirtualizerProps.md#ssrcount)
- [as](react.VirtualizerProps.md#as)
- [item](react.VirtualizerProps.md#item)
- [scrollRef](react.VirtualizerProps.md#scrollref)
- [onScroll](react.VirtualizerProps.md#onscroll)
- [onScrollEnd](react.VirtualizerProps.md#onscrollend)
- [onRangeChange](react.VirtualizerProps.md#onrangechange)

## Properties

### children

• **children**: `ReactNode` \| (`index`: `number`) => `ReactElement`\<`any`, string \| JSXElementConstructor\<any\>\>

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.count](react.VirtualizerProps.md#count) to create elements lazily.

#### Defined in

[src/react/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L87)

___

### count

• `Optional` **count**: `number`

If you set a function to [VirtualizerProps.children](react.VirtualizerProps.md#children), you have to set total number of items to this prop.

#### Defined in

[src/react/Virtualizer.tsx:91](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L91)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/react/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L96)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/Virtualizer.tsx:103](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L103)

___

### shift

• `Optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/react/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L107)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L111)

___

### cache

• `Optional` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](react.CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](react.VirtualizerHandle.md#cache).

#### Defined in

[src/react/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L115)

___

### startMargin

• `Optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/react/Virtualizer.tsx:119](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L119)

___

### endMargin

• `Optional` **endMargin**: `number`

If you put an element after virtualizer, you have to define its height with this prop.

#### Defined in

[src/react/Virtualizer.tsx:123](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L123)

___

### ssrCount

• `Optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/react/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L127)

___

### as

• `Optional` **as**: [`CustomContainerComponent`](../modules/react.md#customcontainercomponent) \| keyof IntrinsicElements

Component or element type for container element.

**`Default Value`**

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L132)

___

### item

• `Optional` **item**: [`CustomItemComponent`](../modules/react.md#customitemcomponent) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](react.CustomItemComponentProps.md) as props.

**`Default Value`**

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:137](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L137)

___

### scrollRef

• `Optional` **scrollRef**: `RefObject`\<`HTMLElement`\>

Reference to the scrollable element. The default will get the parent element of virtualizer.

#### Defined in

[src/react/Virtualizer.tsx:141](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L141)

___

### onScroll

• `Optional` **onScroll**: (`offset`: `number`) => `void`

Callback invoked whenever scroll offset changes.

**`Param`**

Current scrollTop or scrollLeft.

#### Type declaration

▸ (`offset`): `void`

Callback invoked whenever scroll offset changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Current scrollTop or scrollLeft. |

##### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:146](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L146)

___

### onScrollEnd

• `Optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Type declaration

▸ (): `void`

Callback invoked when scrolling stops.

##### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:150](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L150)

___

### onRangeChange

• `Optional` **onRangeChange**: (`startIndex`: `number`, `endIndex`: `number`) => `void`

Callback invoked when visible items range changes.

#### Type declaration

▸ (`startIndex`, `endIndex`): `void`

Callback invoked when visible items range changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | The start index of viewable items. |
| `endIndex` | `number` | The end index of viewable items. |

##### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:154](https://github.com/inokawa/virtua/blob/2a92d85a/src/react/Virtualizer.tsx#L154)
