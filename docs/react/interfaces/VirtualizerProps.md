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

[src/react/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L92)

***

### count?

> `optional` **count**: `number`

If you set a function to [VirtualizerProps.children](VirtualizerProps.md#children), you have to set total number of items to this prop.

#### Defined in

[src/react/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L96)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/react/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L101)

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

List of indexes that should be always mounted, even when off screen.

#### Defined in

[src/react/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L105)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/Virtualizer.tsx:112](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L112)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/react/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L116)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L120)

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Defined in

[src/react/Virtualizer.tsx:126](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L126)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/react/Virtualizer.tsx:130](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L130)

***

### ssrCount?

> `optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/react/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L134)

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L139)

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:144](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L144)

***

### scrollRef?

> `optional` **scrollRef**: `RefObject`\<`HTMLElement`\>

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

#### Defined in

[src/react/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L148)

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

[src/react/Virtualizer.tsx:153](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L153)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:157](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L157)

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

[src/react/Virtualizer.tsx:163](https://github.com/inokawa/virtua/blob/2bf55a31e3bee8397ca25af4a973a53323737c4b/src/react/Virtualizer.tsx#L163)
