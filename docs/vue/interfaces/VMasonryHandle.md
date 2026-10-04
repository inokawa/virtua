[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/vue/VMasonry.tsx:130](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L130)

Methods of [VMasonry](../variables/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/VMasonry.tsx:151](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L151)

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

Defined in: [src/vue/VMasonry.tsx:156](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L156)

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

Defined in: [src/vue/VMasonry.tsx:162](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L162)

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

Defined in: [src/vue/VMasonry.tsx:167](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L167)

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

Defined in: [src/vue/VMasonry.tsx:172](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L172)

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

Defined in: [src/vue/VMasonry.tsx:134](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L134)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/VMasonry.tsx:138](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L138)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/VMasonry.tsx:142](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L142)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/VMasonry.tsx:146](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/vue/VMasonry.tsx#L146)

Get current clientHeight.
