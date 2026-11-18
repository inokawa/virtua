[**API**](../../API.md)

***

# Interface: VMasonryHandle

Defined in: [src/angular/VMasonry.ts:50](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L50)

Methods of [VMasonry](../classes/VMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/VMasonry.ts:71](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L71)

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

Defined in: [src/angular/VMasonry.ts:76](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L76)

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

Defined in: [src/angular/VMasonry.ts:82](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L82)

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

Defined in: [src/angular/VMasonry.ts:87](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L87)

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

Defined in: [src/angular/VMasonry.ts:92](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L92)

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

Defined in: [src/angular/VMasonry.ts:54](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L54)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/VMasonry.ts:58](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L58)

Get current scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/angular/VMasonry.ts:62](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L62)

Get current scrollHeight.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/VMasonry.ts:66](https://github.com/inokawa/virtua/blob/cc1019763046a65e7a5fbfa4f30e1b58c75a7aeb/src/angular/VMasonry.ts#L66)

Get current clientHeight.
