[**API**](../../API.md)

***

# Class: Virtualizer

Defined in: [src/vue/Virtualizer.tsx:150](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L150)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L56)

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

Defined in: [src/vue/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L61)

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

Defined in: [src/vue/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L66)

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

Defined in: [src/vue/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L72)

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

Defined in: [src/vue/Virtualizer.tsx:77](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L77)

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

Defined in: [src/vue/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L82)

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

Defined in: [src/vue/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L105)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### data

> `readonly` **data**: `unknown`[]

Defined in: [src/vue/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L89)

The data items rendered by this component.

***

### bufferSize?

> `readonly` `optional` **bufferSize**: `number` = `Number`

Defined in: [src/vue/Virtualizer.tsx:94](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L94)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Defined in: [src/vue/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L101)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

Defined in: [src/vue/Virtualizer.tsx:109](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L109)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `readonly` `optional` **keepMounted**: readonly `number`[]

Defined in: [src/vue/Virtualizer.tsx:141](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L141)

List of indexes that should be always mounted, even when off screen.

***

### startMargin

> `readonly` **startMargin**: `number`

Defined in: [src/vue/Virtualizer.tsx:113](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L113)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### ssrCount?

> `readonly` `optional` **ssrCount**: `number` = `Number`

Defined in: [src/vue/Virtualizer.tsx:117](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L117)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### as

> `readonly` **as**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/Virtualizer.tsx:126](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L126)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item

> `readonly` **item**: keyof `IntrinsicElementAttributes`

Defined in: [src/vue/Virtualizer.tsx:131](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L131)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `readonly` `optional` **scrollRef**: `HTMLElement`

Defined in: [src/vue/Virtualizer.tsx:121](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L121)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemProps?

> `readonly` `optional` **itemProps**: `ItemProps`

Defined in: [src/vue/Virtualizer.tsx:137](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L137)

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

***

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L39)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L43)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L47)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/vue/Virtualizer.tsx#L51)

Get current offsetHeight, or offsetWidth if horizontal: true.
