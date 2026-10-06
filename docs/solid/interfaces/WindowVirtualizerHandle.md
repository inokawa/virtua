[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/solid/WindowVirtualizer.tsx:37](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L37)

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/solid/WindowVirtualizer.tsx:54](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L54)

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

Defined in: [src/solid/WindowVirtualizer.tsx:59](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L59)

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

Defined in: [src/solid/WindowVirtualizer.tsx:64](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L64)

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

Defined in: [src/solid/WindowVirtualizer.tsx:70](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L70)

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

Defined in: [src/solid/WindowVirtualizer.tsx:41](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L41)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:45](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L45)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:49](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/WindowVirtualizer.tsx#L49)

Get current clientHeight of the document, or clientWidth if horizontal: true.
