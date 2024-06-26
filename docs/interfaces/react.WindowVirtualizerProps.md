# Interface: WindowVirtualizerProps

[react](../modules/react.md).WindowVirtualizerProps

Props of [WindowVirtualizer](../modules/react.md#windowvirtualizer).

## Table of contents

### Properties

- [children](react.WindowVirtualizerProps.md#children)
- [count](react.WindowVirtualizerProps.md#count)
- [overscan](react.WindowVirtualizerProps.md#overscan)
- [itemSize](react.WindowVirtualizerProps.md#itemsize)
- [shift](react.WindowVirtualizerProps.md#shift)
- [horizontal](react.WindowVirtualizerProps.md#horizontal)
- [cache](react.WindowVirtualizerProps.md#cache)
- [ssrCount](react.WindowVirtualizerProps.md#ssrcount)
- [as](react.WindowVirtualizerProps.md#as)
- [item](react.WindowVirtualizerProps.md#item)
- [onScrollEnd](react.WindowVirtualizerProps.md#onscrollend)
- [onRangeChange](react.WindowVirtualizerProps.md#onrangechange)

## Properties

### children

• **children**: `ReactNode` \| (`index`: `number`) => `ReactElement`\<`any`, string \| JSXElementConstructor\<any\>\>

Elements rendered by this component.

You can also pass a function and set [WindowVirtualizerProps.count](react.WindowVirtualizerProps.md#count) to create elements lazily.

#### Defined in

[src/react/WindowVirtualizer.tsx:49](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L49)

___

### count

• `Optional` **count**: `number`

If you set a function to [WindowVirtualizerProps.children](react.WindowVirtualizerProps.md#children), you have to set total number of items to this prop.

#### Defined in

[src/react/WindowVirtualizer.tsx:53](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L53)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/react/WindowVirtualizer.tsx:58](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L58)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/WindowVirtualizer.tsx:65](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L65)

___

### shift

• `Optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/react/WindowVirtualizer.tsx:69](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L69)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/WindowVirtualizer.tsx:73](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L73)

___

### cache

• `Optional` **cache**: [`CacheSnapshot`](react.CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](react.CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](react.WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Defined in

[src/react/WindowVirtualizer.tsx:79](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L79)

___

### ssrCount

• `Optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/react/WindowVirtualizer.tsx:83](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L83)

___

### as

• `Optional` **as**: [`CustomContainerComponent`](../modules/react.md#customcontainercomponent) \| keyof IntrinsicElements

Component or element type for container element.

**`Default Value`**

```ts
"div"
```

#### Defined in

[src/react/WindowVirtualizer.tsx:88](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L88)

___

### item

• `Optional` **item**: [`CustomItemComponent`](../modules/react.md#customitemcomponent) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](react.CustomItemComponentProps.md) as props.

**`Default Value`**

```ts
"div"
```

#### Defined in

[src/react/WindowVirtualizer.tsx:93](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L93)

___

### onScrollEnd

• `Optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/react/WindowVirtualizer.tsx:97](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L97)

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

[src/react/WindowVirtualizer.tsx:101](https://github.com/inokawa/virtua/blob/0581bc9da8f43b9ce79d94b16ddd7bd93360b17f/src/react/WindowVirtualizer.tsx#L101)
