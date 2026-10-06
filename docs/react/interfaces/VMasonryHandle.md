[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/react/VMasonry.tsx:90](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L90)

Methods of [VMasonry](../variables/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/VMasonry.tsx:111](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L111)

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

Defined in: [src/react/VMasonry.tsx:116](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L116)

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

Defined in: [src/react/VMasonry.tsx:122](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L122)

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

Defined in: [src/react/VMasonry.tsx:127](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L127)

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

Defined in: [src/react/VMasonry.tsx:132](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L132)

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

Defined in: [src/react/VMasonry.tsx:94](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L94)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/VMasonry.tsx:98](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L98)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/VMasonry.tsx:102](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L102)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/VMasonry.tsx:106](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VMasonry.tsx#L106)

Get current clientHeight.
