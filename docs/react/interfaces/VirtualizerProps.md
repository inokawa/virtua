[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/react/Virtualizer.tsx:95](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L95)

Props of [Virtualizer](../variables/Virtualizer.md).

## Type Parameters

### T

`T` = `undefined`

## Properties

### children

> **children**: `ReactNode` \| (`data`, `index`) => `ReactElement`

Defined in: [src/react/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L101)

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.data](#data) to create elements lazily.

***

### data?

> `optional` **data**: `ArrayLike`\<`T`\>

Defined in: [src/react/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L105)

The data items rendered by this component. If you set a function to [VirtualizerProps.children](#children), you have to set this prop.

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/react/Virtualizer.tsx:110](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L110)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/react/Virtualizer.tsx:117](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L117)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/react/Virtualizer.tsx:121](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L121)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/react/Virtualizer.tsx:125](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L125)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted**: readonly `number`[]

Defined in: [src/react/Virtualizer.tsx:129](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L129)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/Virtualizer.tsx:135](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L135)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/react/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L139)

If you put an element before virtualizer, you have to define its height with this prop.

***

### ssrCount?

> `optional` **ssrCount**: `number`

Defined in: [src/react/Virtualizer.tsx:143](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L143)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L148)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/Virtualizer.tsx:153](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L153)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef**: `RefObject`\<`null` \| `HTMLElement`\>

Defined in: [src/react/Virtualizer.tsx:157](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L157)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/react/Virtualizer.tsx:162](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L162)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/react/Virtualizer.tsx:166](https://github.com/inokawa/virtua/blob/89b9568b97601da9b779332f422c8054b3c48a08/src/react/Virtualizer.tsx#L166)

Callback invoked when scrolling stops.

#### Returns

`void`
