[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/solid/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L36)

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/solid/WindowVirtualizer.tsx:53](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L53)

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

Defined in: [src/solid/WindowVirtualizer.tsx:58](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L58)

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

Defined in: [src/solid/WindowVirtualizer.tsx:63](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L63)

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

Defined in: [src/solid/WindowVirtualizer.tsx:69](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L69)

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

Defined in: [src/solid/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L40)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:44](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L44)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:48](https://github.com/inokawa/virtua/blob/1b83b98ac0cb439da47c9a595a56aba452ce673c/src/solid/WindowVirtualizer.tsx#L48)

Get current clientHeight of the document, or clientWidth if horizontal: true.
