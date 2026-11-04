[**API**](../../API.md)

***

# Interface: WindowMasonryHandle

Defined in: [src/solid/WindowMasonry.tsx:41](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L41)

Methods of [WindowMasonry](../functions/WindowMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/WindowMasonry.tsx:58](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L58)

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

Defined in: [src/solid/WindowMasonry.tsx:63](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L63)

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

Defined in: [src/solid/WindowMasonry.tsx:69](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L69)

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

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/WindowMasonry.tsx:45](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L45)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/WindowMasonry.tsx:49](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L49)

Get current scrollTop.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/WindowMasonry.tsx:53](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/solid/WindowMasonry.tsx#L53)

Get current clientHeight of the document.
