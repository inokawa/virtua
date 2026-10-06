[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/react/WindowVirtualizer.tsx:78](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L78)

Props of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Type Parameters

### T

`T` = `unknown`

## Properties

### children

> **children**: `ReactNode` \| ((`data`, `index`) => `ReactElement`)

Defined in: [src/react/WindowVirtualizer.tsx:84](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L84)

Elements rendered by this component.

You can also pass a function and set [WindowVirtualizerProps.data](#data) to create elements lazily.

***

### data?

> `optional` **data?**: `ArrayLike`\<`T`\>

Defined in: [src/react/WindowVirtualizer.tsx:88](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L88)

The data items rendered by this component. If you set a function to [WindowVirtualizerProps.children](#children), you have to set this prop.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:93](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L93)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:100](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L100)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:106](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L106)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:110](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L110)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:116](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L116)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:120](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L120)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### as?

> `optional` **as?**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:125](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L125)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:130](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L130)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:134](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L134)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:138](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L138)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:142](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/WindowVirtualizer.tsx#L142)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
