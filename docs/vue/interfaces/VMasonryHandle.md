[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/vue/VMasonry.tsx:132](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L132)

Methods of [VMasonry](../variables/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/VMasonry.tsx:153](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L153)

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

Defined in: [src/vue/VMasonry.tsx:158](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L158)

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

Defined in: [src/vue/VMasonry.tsx:164](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L164)

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

Defined in: [src/vue/VMasonry.tsx:169](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L169)

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

Defined in: [src/vue/VMasonry.tsx:174](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L174)

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

Defined in: [src/vue/VMasonry.tsx:136](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L136)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/VMasonry.tsx:140](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L140)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/VMasonry.tsx:144](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L144)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/VMasonry.tsx:148](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VMasonry.tsx#L148)

Get current clientHeight.
