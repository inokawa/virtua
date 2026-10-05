[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/solid/VMasonry.tsx:82](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L82)

Methods of [VMasonry](../functions/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/VMasonry.tsx:103](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L103)

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

Defined in: [src/solid/VMasonry.tsx:108](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L108)

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

Defined in: [src/solid/VMasonry.tsx:114](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L114)

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

Defined in: [src/solid/VMasonry.tsx:119](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L119)

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

Defined in: [src/solid/VMasonry.tsx:124](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L124)

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

Defined in: [src/solid/VMasonry.tsx:86](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L86)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/VMasonry.tsx:90](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L90)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/VMasonry.tsx:94](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L94)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/VMasonry.tsx:98](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/solid/VMasonry.tsx#L98)

Get current clientHeight.
