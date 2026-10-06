[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/angular/VMasonry.ts:100](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L100)

Methods of [VMasonry](../classes/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/VMasonry.ts:121](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L121)

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

Defined in: [src/angular/VMasonry.ts:126](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L126)

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

Defined in: [src/angular/VMasonry.ts:132](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L132)

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

Defined in: [src/angular/VMasonry.ts:137](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L137)

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

Defined in: [src/angular/VMasonry.ts:142](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L142)

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

Defined in: [src/angular/VMasonry.ts:104](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L104)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/VMasonry.ts:108](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L108)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/angular/VMasonry.ts:112](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L112)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/VMasonry.ts:116](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/VMasonry.ts#L116)

Get current clientHeight.
