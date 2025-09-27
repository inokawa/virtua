[**API**](../../API.md)

***

# Class: WindowVirtualizer

Defined in: [src/vue/WindowVirtualizer.tsx:85](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L85)

## Properties

### onScroll()?

> `optional` **onScroll**: (...`args`) => `any`

#### Parameters

##### args

...\[\]

#### Returns

`any`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: (...`args`) => `any`

#### Parameters

##### args

...\[\]

#### Returns

`any`

***

### shift

> `readonly` **shift**: `boolean` = `Boolean`

Defined in: [src/vue/WindowVirtualizer.tsx:68](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L68)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### data

> `readonly` **data**: `unknown`[]

Defined in: [src/vue/WindowVirtualizer.tsx:52](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L52)

The data items rendered by this component.

***

### overscan?

> `readonly` `optional` **overscan**: `number` = `Number`

Defined in: [src/vue/WindowVirtualizer.tsx:57](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L57)

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Defined in: [src/vue/WindowVirtualizer.tsx:64](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L64)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

Defined in: [src/vue/WindowVirtualizer.tsx:72](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L72)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### as

> `readonly` **as**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/WindowVirtualizer.tsx:77](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L77)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item

> `readonly` **item**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/WindowVirtualizer.tsx:82](https://github.com/inokawa/virtua/blob/a15901437620886aba5695328028f01892b50f09/src/vue/WindowVirtualizer.tsx#L82)

Component or element type for item element.

#### Default Value

```ts
"div"
```
