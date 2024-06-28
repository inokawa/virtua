# Interface: VirtualizerProps\<T\>

[solid](../modules/solid.md).VirtualizerProps

Props of [Virtualizer](../modules/solid.md#virtualizer).

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [ref](solid.VirtualizerProps.md#ref)
- [data](solid.VirtualizerProps.md#data)
- [children](solid.VirtualizerProps.md#children)
- [overscan](solid.VirtualizerProps.md#overscan)
- [as](solid.VirtualizerProps.md#as)
- [item](solid.VirtualizerProps.md#item)
- [scrollRef](solid.VirtualizerProps.md#scrollref)
- [itemSize](solid.VirtualizerProps.md#itemsize)
- [shift](solid.VirtualizerProps.md#shift)
- [horizontal](solid.VirtualizerProps.md#horizontal)
- [startMargin](solid.VirtualizerProps.md#startmargin)
- [onScroll](solid.VirtualizerProps.md#onscroll)
- [onScrollEnd](solid.VirtualizerProps.md#onscrollend)
- [onRangeChange](solid.VirtualizerProps.md#onrangechange)

## Properties

### ref

• `Optional` **ref**: (`handle?`: [`VirtualizerHandle`](solid.VirtualizerHandle.md)) => `void`

Get reference to [VirtualizerHandle](solid.VirtualizerHandle.md).

#### Type declaration

▸ (`handle?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `handle?` | [`VirtualizerHandle`](solid.VirtualizerHandle.md) |

##### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L82)

___

### data

• **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/Virtualizer.tsx:86](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L86)

___

### children

• **children**: (`data`: `T`, `index`: `number`) => `Element`

The elements renderer function.

#### Type declaration

▸ (`data`, `index`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `index` | `number` |

##### Returns

`Element`

#### Defined in

[src/solid/Virtualizer.tsx:90](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L90)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/solid/Virtualizer.tsx:95](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L95)

___

### as

• `Optional` **as**: `ValidComponent`

Component or element type for container element.

**`Default Value`**

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L100)

___

### item

• `Optional` **item**: `ValidComponent`

Component or element type for item element.

**`Default Value`**

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L105)

___

### scrollRef

• `Optional` **scrollRef**: `HTMLElement`

Reference to the scrollable element. The default will get the parent element of virtualizer.

#### Defined in

[src/solid/Virtualizer.tsx:109](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L109)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L116)

___

### shift

• `Optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L120)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L124)

___

### startMargin

• `Optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/solid/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L128)

___

### onScroll

• `Optional` **onScroll**: (`offset`: `number`) => `void`

Callback invoked whenever scroll offset changes.

#### Type declaration

▸ (`offset`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Current scrollTop or scrollLeft. |

##### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:133](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L133)

___

### onScrollEnd

• `Optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:137](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L137)

___

### onRangeChange

• `Optional` **onRangeChange**: (`startIndex`: `number`, `endIndex`: `number`) => `void`

Callback invoked when visible items range changes.

#### Type declaration

▸ (`startIndex`, `endIndex`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | The start index of viewable items. |
| `endIndex` | `number` | The end index of viewable items. |

##### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:141](https://github.com/inokawa/virtua/blob/d0d02377f34098a2105ecf6e624698c2df2ab54d/src/solid/Virtualizer.tsx#L141)
