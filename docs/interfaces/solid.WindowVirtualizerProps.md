# Interface: WindowVirtualizerProps\<T\>

[solid](../modules/solid.md).WindowVirtualizerProps

Props of [WindowVirtualizer](../modules/solid.md#windowvirtualizer).

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [data](solid.WindowVirtualizerProps.md#data)
- [children](solid.WindowVirtualizerProps.md#children)
- [overscan](solid.WindowVirtualizerProps.md#overscan)
- [itemSize](solid.WindowVirtualizerProps.md#itemsize)
- [shift](solid.WindowVirtualizerProps.md#shift)
- [horizontal](solid.WindowVirtualizerProps.md#horizontal)
- [onScrollEnd](solid.WindowVirtualizerProps.md#onscrollend)
- [onRangeChange](solid.WindowVirtualizerProps.md#onrangechange)

## Properties

### data

• **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/WindowVirtualizer.tsx:48](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L48)

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

[src/solid/WindowVirtualizer.tsx:52](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L52)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/solid/WindowVirtualizer.tsx:57](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L57)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/WindowVirtualizer.tsx:64](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L64)

___

### shift

• `Optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/WindowVirtualizer.tsx:68](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L68)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/WindowVirtualizer.tsx:72](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L72)

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

[src/solid/WindowVirtualizer.tsx:76](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L76)

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

[src/solid/WindowVirtualizer.tsx:80](https://github.com/inokawa/virtua/blob/6233dda9/src/solid/WindowVirtualizer.tsx#L80)
