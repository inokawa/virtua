[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/solid/VMasonry.tsx:42](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L42)

Methods of [VMasonry](../functions/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/VMasonry.tsx:63](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L63)

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

Defined in: [src/solid/VMasonry.tsx:68](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L68)

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

Defined in: [src/solid/VMasonry.tsx:74](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L74)

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

Defined in: [src/solid/VMasonry.tsx:79](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L79)

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

Defined in: [src/solid/VMasonry.tsx:84](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L84)

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

Defined in: [src/solid/VMasonry.tsx:46](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L46)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/VMasonry.tsx:50](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L50)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/VMasonry.tsx:54](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L54)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/VMasonry.tsx:58](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VMasonry.tsx#L58)

Get current clientHeight.
