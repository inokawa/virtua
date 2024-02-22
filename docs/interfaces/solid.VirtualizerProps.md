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
- [itemSize](solid.VirtualizerProps.md#itemsize)
- [shift](solid.VirtualizerProps.md#shift)
- [horizontal](solid.VirtualizerProps.md#horizontal)
- [onScroll](solid.VirtualizerProps.md#onscroll)
- [onScrollEnd](solid.VirtualizerProps.md#onscrollend)
- [onRangeChange](solid.VirtualizerProps.md#onrangechange)

## Properties

### ref

• `Optional` **ref**: (`handle?`: [`VirtualizerHandle`](solid.VirtualizerHandle.md)) => `void`

Get reference to [VirtualizerHandle](solid.VirtualizerHandle.md).

#### Type declaration

▸ (`handle?`): `void`

Get reference to [VirtualizerHandle](solid.VirtualizerHandle.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `handle?` | [`VirtualizerHandle`](solid.VirtualizerHandle.md) |

##### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:79](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L79)

___

### data

• **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L83)

___

### children

• **children**: (`data`: `T`, `index`: `number`) => `Element`

The elements renderer function.

#### Type declaration

▸ (`data`, `index`): `Element`

The elements renderer function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `index` | `number` |

##### Returns

`Element`

#### Defined in

[src/solid/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L87)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/solid/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L92)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/Virtualizer.tsx:99](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L99)

___

### shift

• `Optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/Virtualizer.tsx:103](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L103)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L107)

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

[src/solid/Virtualizer.tsx:112](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L112)

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

[src/solid/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L116)

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

[src/solid/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/b44a9200/src/solid/Virtualizer.tsx#L120)
