[**API**](../../API.md)

***

# Interface: VirtualizerProps

Props of [Virtualizer](../functions/Virtualizer.md).

## Properties

### children

> **children**: `ReactNode` \| (`index`) => `ReactElement`\<`any`, string \| JSXElementConstructor\<any\>\>

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.count](VirtualizerProps.md#count) to create elements lazily.

#### Defined in

[src/react/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L100)

***

### count?

> `optional` **count**: `number`

If you set a function to [VirtualizerProps.children](VirtualizerProps.md#children), you have to set total number of items to this prop.

#### Defined in

[src/react/Virtualizer.tsx:104](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L104)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/react/Virtualizer.tsx:109](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L109)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L116)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/react/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L120)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L124)

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

List of indexes that should be always mounted, even when off screen.

#### Defined in

[src/react/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L128)

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Defined in

[src/react/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L134)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/react/Virtualizer.tsx:138](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L138)

***

### ssrCount?

> `optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/react/Virtualizer.tsx:142](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L142)

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:147](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L147)

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:152](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L152)

***

### scrollRef?

> `optional` **scrollRef**: `RefObject`\<`HTMLElement`\>

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

#### Defined in

[src/react/Virtualizer.tsx:156](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L156)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:161](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L161)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:165](https://github.com/inokawa/virtua/blob/0345a8b0716d4f6d9809727c10b6fd29b8b00699/src/react/Virtualizer.tsx#L165)
