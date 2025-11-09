[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/react/Virtualizer.tsx:98](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L98)

Props of [Virtualizer](../variables/Virtualizer.md).

## Type Parameters

### T

`T` = `unknown`

## Properties

### children

> **children**: `ReactNode` \| (`data`, `index`) => `ReactElement`

Defined in: [src/react/Virtualizer.tsx:104](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L104)

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.data](#data) to create elements lazily.

***

### data?

> `optional` **data**: `ArrayLike`\<`T`\>

Defined in: [src/react/Virtualizer.tsx:108](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L108)

The data items rendered by this component. If you set a function to [VirtualizerProps.children](#children), you have to set this prop.

***

### bufferSize?

> `optional` **bufferSize**: `number`

Defined in: [src/react/Virtualizer.tsx:113](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L113)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/react/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L120)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/react/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L124)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/react/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L128)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted**: readonly `number`[]

Defined in: [src/react/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L132)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/Virtualizer.tsx:138](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L138)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/react/Virtualizer.tsx:142](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L142)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### ssrCount?

> `optional` **ssrCount**: `number`

Defined in: [src/react/Virtualizer.tsx:146](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L146)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### as?

> `optional` **as**: [`CustomContainerComponent`](../type-aliases/CustomContainerComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/Virtualizer.tsx:151](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L151)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/Virtualizer.tsx:156](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L156)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef**: `RefObject`\<`null` \| `HTMLElement`\>

Defined in: [src/react/Virtualizer.tsx:160](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L160)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/react/Virtualizer.tsx:165](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L165)

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

Defined in: [src/react/Virtualizer.tsx:169](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L169)

Callback invoked when scrolling stops.

#### Returns

`void`
