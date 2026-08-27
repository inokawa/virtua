[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/vue/WindowVirtualizer.tsx:98](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L98)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/WindowVirtualizer.tsx:115](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L115)

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

Defined in: [src/vue/WindowVirtualizer.tsx:120](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L120)

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

Defined in: [src/vue/WindowVirtualizer.tsx:125](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L125)

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

Defined in: [src/vue/WindowVirtualizer.tsx:131](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L131)

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

> `readonly` **cache**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/WindowVirtualizer.tsx:102](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L102)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:106](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L106)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:110](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/WindowVirtualizer.tsx#L110)

Get current offsetHeight, or offsetWidth if horizontal: true.
