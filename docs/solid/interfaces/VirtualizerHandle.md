[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/solid/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L45)

Methods of [Virtualizer](../functions/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/solid/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L66)

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

Defined in: [src/solid/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L71)

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

Defined in: [src/solid/Virtualizer.tsx:76](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L76)

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

Defined in: [src/solid/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L82)

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

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/solid/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L87)

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

Defined in: [src/solid/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L92)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L49)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L53)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:57](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L57)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/Virtualizer.tsx#L61)

Get current clientHeight, or clientWidth if horizontal: true.
