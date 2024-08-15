[**API**](../../API.md) • **Docs**

***

# Interface: WindowVirtualizerProps

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Properties

### children

> **children**: `ReactNode` \| (`index`) => `ReactElement`\<`any`, string \| JSXElementConstructor\<any\>\>

Elements rendered by this component.

You can also pass a function and set [WindowVirtualizerProps.count](WindowVirtualizerProps.md#count) to create elements lazily.

#### Defined in

[src/react/WindowVirtualizer.tsx:50](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L50)

***

### count?

> `optional` **count**: `number`

If you set a function to [WindowVirtualizerProps.children](WindowVirtualizerProps.md#children), you have to set total number of items to this prop.

#### Defined in

[src/react/WindowVirtualizer.tsx:54](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L54)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/react/WindowVirtualizer.tsx:59](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L59)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/WindowVirtualizer.tsx:66](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L66)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/react/WindowVirtualizer.tsx:70](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L70)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/WindowVirtualizer.tsx:74](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L74)

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Defined in

[src/react/WindowVirtualizer.tsx:80](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L80)

***

### ssrCount?

> `optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/react/WindowVirtualizer.tsx:84](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L84)

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/WindowVirtualizer.tsx:89](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L89)

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/WindowVirtualizer.tsx:94](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L94)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/react/WindowVirtualizer.tsx:98](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L98)

***

### onRangeChange()?

> `optional` **onRangeChange**: (`startIndex`, `endIndex`) => `void`

Callback invoked when visible items range changes.

#### Parameters

• **startIndex**: `number`

The start index of viewable items.

• **endIndex**: `number`

The end index of viewable items.

#### Returns

`void`

#### Defined in

[src/react/WindowVirtualizer.tsx:102](https://github.com/inokawa/virtua/blob/1d47c9dfe46a1eb142dc7f013014bc102340e99f/src/react/WindowVirtualizer.tsx#L102)
