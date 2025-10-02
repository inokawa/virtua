[**API**](../../API.md)

***

# Interface: VirtualizerProps

Defined in: [src/react/Virtualizer.tsx:94](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L94)

Props of [Virtualizer](../variables/Virtualizer.md).

## Properties

### children

> **children**: `ReactNode` \| (`index`) => `ReactElement`

Defined in: [src/react/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L100)

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.count](#count) to create elements lazily.

***

### count?

> `optional` **count**: `number`

Defined in: [src/react/Virtualizer.tsx:104](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L104)

If you set a function to [VirtualizerProps.children](#children), you have to set total number of items to this prop.

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/react/Virtualizer.tsx:109](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L109)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/react/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L116)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/react/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L120)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/react/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L124)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

Defined in: [src/react/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L128)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L134)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/react/Virtualizer.tsx:138](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L138)

If you put an element before virtualizer, you have to define its height with this prop.

***

### ssrCount?

> `optional` **ssrCount**: `number`

Defined in: [src/react/Virtualizer.tsx:142](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L142)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/Virtualizer.tsx:147](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L147)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/Virtualizer.tsx:152](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L152)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef**: `RefObject`\<`null` \| `HTMLElement`\>

Defined in: [src/react/Virtualizer.tsx:156](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L156)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/react/Virtualizer.tsx:161](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L161)

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

Defined in: [src/react/Virtualizer.tsx:165](https://github.com/inokawa/virtua/blob/c57dcc6eb20a033518f26125d7ede7064cf208b7/src/react/Virtualizer.tsx#L165)

Callback invoked when scrolling stops.

#### Returns

`void`
