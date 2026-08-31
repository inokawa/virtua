[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/react/WindowVirtualizer.tsx:77](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L77)

Props of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Type Parameters

### T

`T` = `unknown`

## Properties

### children

> **children**: `ReactNode` \| ((`data`, `index`) => `ReactElement`)

Defined in: [src/react/WindowVirtualizer.tsx:83](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L83)

Elements rendered by this component.

You can also pass a function and set [WindowVirtualizerProps.data](#data) to create elements lazily.

***

### data?

> `optional` **data?**: `ArrayLike`\<`T`\>

Defined in: [src/react/WindowVirtualizer.tsx:87](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L87)

The data items rendered by this component. If you set a function to [WindowVirtualizerProps.children](#children), you have to set this prop.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:92](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L92)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:99](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L99)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:103](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L103)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:107](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L107)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../type-aliases/CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:113](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L113)

You can restore cache by passing a [CacheSnapshot](../type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:117](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L117)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### as?

> `optional` **as?**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:122](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L122)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:127](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L127)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:131](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L131)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:135](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/react/WindowVirtualizer.tsx#L135)

Callback invoked when scrolling stops.

#### Returns

`void`
