[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/react/VMasonry.tsx:89](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L89)

Methods of [VMasonry](../variables/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/VMasonry.tsx:110](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L110)

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

Defined in: [src/react/VMasonry.tsx:115](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L115)

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

Defined in: [src/react/VMasonry.tsx:121](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L121)

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

Defined in: [src/react/VMasonry.tsx:126](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L126)

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

Defined in: [src/react/VMasonry.tsx:131](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L131)

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

Defined in: [src/react/VMasonry.tsx:93](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L93)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/VMasonry.tsx:97](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L97)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/VMasonry.tsx:101](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L101)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/VMasonry.tsx:105](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/react/VMasonry.tsx#L105)

Get current clientHeight.
