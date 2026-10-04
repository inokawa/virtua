[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/react/WindowVirtualizer.tsx:77](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L77)

Props of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Type Parameters

### T

`T` = `unknown`

## Properties

### children

> **children**: `ReactNode` \| ((`data`, `index`) => `ReactElement`)

Defined in: [src/react/WindowVirtualizer.tsx:83](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L83)

Elements rendered by this component.

You can also pass a function and set [WindowVirtualizerProps.data](#data) to create elements lazily.

***

### data?

> `optional` **data?**: `ArrayLike`\<`T`\>

Defined in: [src/react/WindowVirtualizer.tsx:87](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L87)

The data items rendered by this component. If you set a function to [WindowVirtualizerProps.children](#children), you have to set this prop.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:92](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L92)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:99](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L99)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:105](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L105)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:109](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L109)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:115](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L115)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:119](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L119)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### as?

> `optional` **as?**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:124](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L124)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:129](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L129)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:133](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L133)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:137](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/react/WindowVirtualizer.tsx#L137)

Callback invoked when scrolling stops.

#### Returns

`void`
