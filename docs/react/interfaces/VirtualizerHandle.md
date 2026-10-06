[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L46)

Methods of [Virtualizer](../variables/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/react/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L67)

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

Defined in: [src/react/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L72)

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

Defined in: [src/react/Virtualizer.tsx:77](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L77)

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

Defined in: [src/react/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L83)

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

Defined in: [src/react/Virtualizer.tsx:88](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L88)

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

Defined in: [src/react/Virtualizer.tsx:93](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L93)

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

Defined in: [src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L50)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L54)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L58)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L62)

Get current clientHeight, or clientWidth if horizontal: true.
