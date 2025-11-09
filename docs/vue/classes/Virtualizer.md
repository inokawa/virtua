[**API**](../../API.md)

***

# Class: Virtualizer

Defined in: [src/vue/Virtualizer.tsx:153](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L153)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L64)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L69)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/vue/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L75)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:80](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L80)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L85)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### onScroll()?

> `optional` **onScroll**: (...`args`) => `any`

#### Parameters

##### args

...\[`number`\]

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

Defined in: [src/vue/Virtualizer.tsx:108](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L108)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### data

> `readonly` **data**: `unknown`[]

Defined in: [src/vue/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L92)

The data items rendered by this component.

***

### bufferSize?

> `readonly` `optional` **bufferSize**: `number` = `Number`

Defined in: [src/vue/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L97)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Defined in: [src/vue/Virtualizer.tsx:104](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L104)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

Defined in: [src/vue/Virtualizer.tsx:112](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L112)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `readonly` `optional` **keepMounted**: readonly `number`[]

Defined in: [src/vue/Virtualizer.tsx:144](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L144)

List of indexes that should be always mounted, even when off screen.

***

### startMargin

> `readonly` **startMargin**: `number`

Defined in: [src/vue/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L116)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### ssrCount?

> `readonly` `optional` **ssrCount**: `number` = `Number`

Defined in: [src/vue/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L120)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### as

> `readonly` **as**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/Virtualizer.tsx:129](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L129)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item

> `readonly` **item**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L134)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `readonly` `optional` **scrollRef**: `HTMLElement`

Defined in: [src/vue/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L124)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemProps?

> `readonly` `optional` **itemProps**: `ItemProps`

Defined in: [src/vue/Virtualizer.tsx:140](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L140)

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

***

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L39)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L43)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L47)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L51)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/vue/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L55)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/vue/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/vue/Virtualizer.tsx#L59)

Find the end index of visible range of items.

#### Returns

`number`
