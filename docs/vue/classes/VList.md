[**API**](../../API.md)

***

# Class: VList

Defined in: [src/vue/VList.tsx:58](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L58)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:60](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L60)

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

Defined in: [src/vue/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L65)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Defined in: [src/vue/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L71)

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

Defined in: [src/vue/Virtualizer.tsx:76](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L76)

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

Defined in: [src/vue/Virtualizer.tsx:81](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L81)

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

### shift

> `readonly` **shift**: `boolean` = `Boolean`

Defined in: [src/vue/VList.tsx:37](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L37)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### data

> `readonly` **data**: `unknown`[]

Defined in: [src/vue/VList.tsx:21](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L21)

The data items rendered by this component.

***

### overscan?

> `readonly` `optional` **overscan**: `number` = `Number`

Defined in: [src/vue/VList.tsx:26](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L26)

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Defined in: [src/vue/VList.tsx:33](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L33)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

Defined in: [src/vue/VList.tsx:41](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L41)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `readonly` `optional` **keepMounted**: `number`[]

Defined in: [src/vue/VList.tsx:55](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L55)

List of indexes that should be always mounted, even when off screen.

***

### ssrCount?

> `readonly` `optional` **ssrCount**: `number` = `Number`

Defined in: [src/vue/VList.tsx:45](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L45)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

***

### onScrollEnd()?

> `optional` **onScrollEnd**: (...`args`) => `any`

#### Parameters

##### args

...\[\]

#### Returns

`any`

***

### itemProps?

> `readonly` `optional` **itemProps**: `ItemProps`

Defined in: [src/vue/VList.tsx:51](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/VList.tsx#L51)

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L39)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L43)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L47)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/vue/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L51)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/vue/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/41a33aaa191d1b7d2f2edf9ebdf280019e03fb14/src/vue/Virtualizer.tsx#L55)

Find the end index of visible range of items.

#### Returns

`number`
