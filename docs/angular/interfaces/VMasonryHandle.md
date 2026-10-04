[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/angular/VMasonry.ts:98](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L98)

Methods of [VMasonry](../classes/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/VMasonry.ts:119](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L119)

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

Defined in: [src/angular/VMasonry.ts:124](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L124)

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

Defined in: [src/angular/VMasonry.ts:130](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L130)

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

Defined in: [src/angular/VMasonry.ts:135](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L135)

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

Defined in: [src/angular/VMasonry.ts:140](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L140)

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

Defined in: [src/angular/VMasonry.ts:102](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L102)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/VMasonry.ts:106](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L106)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/angular/VMasonry.ts:110](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L110)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/VMasonry.ts:114](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L114)

Get current clientHeight.
