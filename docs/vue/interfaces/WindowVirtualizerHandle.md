[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/vue/WindowVirtualizer.tsx:93](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L93)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/WindowVirtualizer.tsx:110](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L110)

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

Defined in: [src/vue/WindowVirtualizer.tsx:115](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L115)

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

Defined in: [src/vue/WindowVirtualizer.tsx:120](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L120)

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

Defined in: [src/vue/WindowVirtualizer.tsx:126](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L126)

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

Defined in: [src/vue/WindowVirtualizer.tsx:97](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L97)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:101](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L101)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:105](https://github.com/inokawa/virtua/blob/999051328a6324a7656aeca6f86ac1a6503bfbe7/src/vue/WindowVirtualizer.tsx#L105)

Get current offsetHeight, or offsetWidth if horizontal: true.
