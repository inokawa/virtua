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

[src/react/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L87)

***

### count?

> `optional` **count**: `number`

If you set a function to [VirtualizerProps.children](VirtualizerProps.md#children), you have to set total number of items to this prop.

#### Defined in

[src/react/Virtualizer.tsx:91](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L91)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/react/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L96)

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

List of indexes that should be always mounted, even when off screen.

#### Defined in

[src/react/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L100)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L107)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/react/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L111)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L115)

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Defined in

[src/react/Virtualizer.tsx:121](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L121)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/react/Virtualizer.tsx:125](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L125)

***

### ssrCount?

> `optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/react/Virtualizer.tsx:129](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L129)

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L134)

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L139)

***

### scrollRef?

> `optional` **scrollRef**: `RefObject`\<`HTMLElement`\>

Reference to the scrollable element. The default will get the parent element of virtualizer.

#### Defined in

[src/react/Virtualizer.tsx:143](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L143)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop or scrollLeft.

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L148)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:152](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L152)

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

[src/react/Virtualizer.tsx:156](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/react/Virtualizer.tsx#L156)
