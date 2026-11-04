[**API**](../../API.md)

***

# Interface: WindowMasonryHandle

Defined in: [src/angular/WindowMasonry.ts:47](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L47)

Methods of [WindowMasonry](../classes/WindowMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/WindowMasonry.ts:64](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L64)

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

Defined in: [src/angular/WindowMasonry.ts:69](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L69)

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

Defined in: [src/angular/WindowMasonry.ts:75](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L75)

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

Defined in: [src/angular/WindowMasonry.ts:51](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L51)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/WindowMasonry.ts:55](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L55)

Get current scrollTop.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/WindowMasonry.ts:59](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L59)

Get current clientHeight of the document.
