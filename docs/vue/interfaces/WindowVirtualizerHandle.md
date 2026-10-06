[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/vue/WindowVirtualizer.tsx:105](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L105)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/WindowVirtualizer.tsx:122](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L122)

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

Defined in: [src/vue/WindowVirtualizer.tsx:127](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L127)

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

Defined in: [src/vue/WindowVirtualizer.tsx:132](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L132)

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

Defined in: [src/vue/WindowVirtualizer.tsx:138](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L138)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../core/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/WindowVirtualizer.tsx:109](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L109)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:113](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L113)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:117](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/WindowVirtualizer.tsx#L117)

Get current clientHeight of the document, or clientWidth if horizontal: true.
