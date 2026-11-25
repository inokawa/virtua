[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/solid/WindowVirtualizer.tsx:73](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L73)

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: [`WindowVirtualizerHandle`](WindowVirtualizerHandle.md)

Defined in: [src/solid/WindowVirtualizer.tsx:77](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L77)

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/WindowVirtualizer.tsx:81](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L81)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowVirtualizer.tsx:85](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L85)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`Accessor`\<`number`\>

#### Returns

`Element`

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:90](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L90)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:97](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L97)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:101](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L101)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:107](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L107)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:111](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L111)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:117](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L117)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll?

> `optional` **onScroll?**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:121](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L121)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:125](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L125)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:129](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/WindowVirtualizer.tsx#L129)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`
