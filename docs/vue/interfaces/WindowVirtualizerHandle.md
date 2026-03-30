[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/vue/WindowVirtualizer.tsx:94](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L94)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/WindowVirtualizer.tsx:111](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L111)

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

Defined in: [src/vue/WindowVirtualizer.tsx:116](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L116)

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

Defined in: [src/vue/WindowVirtualizer.tsx:121](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L121)

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

Defined in: [src/vue/WindowVirtualizer.tsx:127](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L127)

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

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/vue/WindowVirtualizer.tsx:98](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L98)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:102](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L102)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:106](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/WindowVirtualizer.tsx#L106)

Get current offsetHeight, or offsetWidth if horizontal: true.
