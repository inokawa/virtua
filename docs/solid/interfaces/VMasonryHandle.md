[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/solid/VMasonry.tsx:81](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L81)

Methods of [VMasonry](../functions/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/VMasonry.tsx:102](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L102)

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

Defined in: [src/solid/VMasonry.tsx:107](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L107)

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

Defined in: [src/solid/VMasonry.tsx:113](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L113)

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

Defined in: [src/solid/VMasonry.tsx:118](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L118)

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

Defined in: [src/solid/VMasonry.tsx:123](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L123)

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

Defined in: [src/solid/VMasonry.tsx:85](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L85)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/VMasonry.tsx:89](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L89)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/VMasonry.tsx:93](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L93)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/VMasonry.tsx:97](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L97)

Get current clientHeight.
