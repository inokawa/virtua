[**API**](../../API.md)

***

# Class: WindowVirtualizer

Defined in: [src/vue/WindowVirtualizer.tsx:85](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L85)

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

Defined in: [src/vue/WindowVirtualizer.tsx:68](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L68)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### data

> `readonly` **data**: `unknown`[]

Defined in: [src/vue/WindowVirtualizer.tsx:52](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L52)

The data items rendered by this component.

***

### bufferSize?

> `readonly` `optional` **bufferSize**: `number` = `Number`

Defined in: [src/vue/WindowVirtualizer.tsx:57](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L57)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Defined in: [src/vue/WindowVirtualizer.tsx:64](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L64)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

Defined in: [src/vue/WindowVirtualizer.tsx:72](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L72)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### as

> `readonly` **as**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/WindowVirtualizer.tsx:77](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L77)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item

> `readonly` **item**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/WindowVirtualizer.tsx:82](https://github.com/inokawa/virtua/blob/dc2f657ff6a1dc801789978a3ca99ff4f4adf618/src/vue/WindowVirtualizer.tsx#L82)

Component or element type for item element.

#### Default Value

```ts
"div"
```
