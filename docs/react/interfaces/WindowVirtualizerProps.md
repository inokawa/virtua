[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/react/WindowVirtualizer.tsx:58](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L58)

Props of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Type Parameters

### T

`T` = `unknown`

## Properties

### children

> **children**: `ReactNode` \| (`data`, `index`) => `ReactElement`

Defined in: [src/react/WindowVirtualizer.tsx:64](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L64)

Elements rendered by this component.

You can also pass a function and set [WindowVirtualizerProps.data](#data) to create elements lazily.

***

### data?

> `optional` **data**: `ArrayLike`\<`T`\>

Defined in: [src/react/WindowVirtualizer.tsx:68](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L68)

The data items rendered by this component. If you set a function to [WindowVirtualizerProps.children](#children), you have to set this prop.

***

### bufferSize?

> `optional` **bufferSize**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:73](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L73)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:80](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L80)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:84](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L84)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:88](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L88)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:94](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L94)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:98](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L98)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:103](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L103)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:108](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L108)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### onScroll()?

> `optional` **onScroll**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:112](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L112)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:116](https://github.com/inokawa/virtua/blob/abf3f68debe26f3e9ab924819f65d2702d5707c4/src/react/WindowVirtualizer.tsx#L116)

Callback invoked when scrolling stops.

#### Returns

`void`
