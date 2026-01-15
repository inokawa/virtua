[**API**](../../API.md)

***

# Class: VList

Defined in: [src/vue/VList.tsx:65](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L65)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L56)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L61)

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

Defined in: [src/vue/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L66)

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

Defined in: [src/vue/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L72)

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

Defined in: [src/vue/Virtualizer.tsx:77](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L77)

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

Defined in: [src/vue/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L82)

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

Defined in: [src/vue/VList.tsx:38](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L38)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### data

> `readonly` **data**: `unknown`[]

Defined in: [src/vue/VList.tsx:22](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L22)

The data items rendered by this component.

***

### bufferSize?

> `readonly` `optional` **bufferSize**: `number` = `Number`

Defined in: [src/vue/VList.tsx:27](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L27)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Defined in: [src/vue/VList.tsx:34](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L34)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

Defined in: [src/vue/VList.tsx:42](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L42)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `readonly` `optional` **keepMounted**: readonly `number`[]

Defined in: [src/vue/VList.tsx:56](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L56)

List of indexes that should be always mounted, even when off screen.

***

### ssrCount?

> `readonly` `optional` **ssrCount**: `number` = `Number`

Defined in: [src/vue/VList.tsx:46](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L46)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### itemProps?

> `readonly` `optional` **itemProps**: `ItemProps`

Defined in: [src/vue/VList.tsx:52](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/VList.tsx#L52)

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

***

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L39)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L43)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L47)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/d459b9be951b5905f920be6dc33995479f38a66a/src/vue/Virtualizer.tsx#L51)

Get current offsetHeight, or offsetWidth if horizontal: true.
