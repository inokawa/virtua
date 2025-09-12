[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps

Defined in: [src/react/WindowVirtualizer.tsx:57](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L57)

Props of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Properties

### children

> **children**: `ReactNode` \| (`index`) => `ReactElement`

Defined in: [src/react/WindowVirtualizer.tsx:63](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L63)

Elements rendered by this component.

You can also pass a function and set [WindowVirtualizerProps.count](#count) to create elements lazily.

***

### count?

> `optional` **count**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:67](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L67)

If you set a function to [WindowVirtualizerProps.children](#children), you have to set total number of items to this prop.

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:72](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L72)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:79](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L79)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:83](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L83)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/react/WindowVirtualizer.tsx:87](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L87)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:93](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L93)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount?

> `optional` **ssrCount**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:97](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L97)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:102](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L102)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/WindowVirtualizer.tsx:107](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L107)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### onScroll()?

> `optional` **onScroll**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:111](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L111)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/react/WindowVirtualizer.tsx:115](https://github.com/inokawa/virtua/blob/08ba8af88012acd329d137156b5773a651017381/src/react/WindowVirtualizer.tsx#L115)

Callback invoked when scrolling stops.

#### Returns

`void`
