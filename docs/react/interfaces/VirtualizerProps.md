[**API**](../../API.md) • **Docs**

***

# Interface: VirtualizerProps

Props of [Virtualizer](../functions/Virtualizer.md).

## Properties

### children

> **children**: `ReactNode` \| (`index`) => `ReactElement`\<`any`, string \| JSXElementConstructor\<any\>\>

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.count](VirtualizerProps.md#count) to create elements lazily.

#### Defined in

[src/react/Virtualizer.tsx:98](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L98)

***

### count?

> `optional` **count**: `number`

If you set a function to [VirtualizerProps.children](VirtualizerProps.md#children), you have to set total number of items to this prop.

#### Defined in

[src/react/Virtualizer.tsx:102](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L102)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/react/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L107)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/Virtualizer.tsx:114](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L114)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/react/Virtualizer.tsx:118](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L118)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/Virtualizer.tsx:122](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L122)

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

List of indexes that should be always mounted, even when off screen.

#### Defined in

[src/react/Virtualizer.tsx:126](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L126)

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Defined in

[src/react/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L132)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/react/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L136)

***

### ssrCount?

> `optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/react/Virtualizer.tsx:140](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L140)

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:145](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L145)

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:150](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L150)

***

### scrollRef?

> `optional` **scrollRef**: `RefObject`\<`HTMLElement`\>

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

#### Defined in

[src/react/Virtualizer.tsx:154](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L154)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:159](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L159)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:163](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L163)
