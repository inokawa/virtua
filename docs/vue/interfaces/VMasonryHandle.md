[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/vue/VMasonry.tsx:128](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L128)

Methods of [VMasonry](../variables/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/VMasonry.tsx:149](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L149)

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

Defined in: [src/vue/VMasonry.tsx:154](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L154)

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

Defined in: [src/vue/VMasonry.tsx:160](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L160)

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

Defined in: [src/vue/VMasonry.tsx:165](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L165)

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

Defined in: [src/vue/VMasonry.tsx:170](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L170)

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

Defined in: [src/vue/VMasonry.tsx:132](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L132)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/VMasonry.tsx:136](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L136)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/VMasonry.tsx:140](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L140)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/VMasonry.tsx:144](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/VMasonry.tsx#L144)

Get current clientHeight.
