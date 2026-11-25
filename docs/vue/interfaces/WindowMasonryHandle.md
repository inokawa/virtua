[**API**](../../API.md)

***

# Interface: WindowMasonryHandle

Defined in: [src/vue/WindowMasonry.tsx:34](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/vue/WindowMasonry.tsx#L34)

Methods of [WindowMasonry](../variables/WindowMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/WindowMasonry.tsx:51](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/vue/WindowMasonry.tsx#L51)

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

Defined in: [src/vue/WindowMasonry.tsx:56](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/vue/WindowMasonry.tsx#L56)

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

Defined in: [src/vue/WindowMasonry.tsx:62](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/vue/WindowMasonry.tsx#L62)

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

Defined in: [src/vue/WindowMasonry.tsx:38](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/vue/WindowMasonry.tsx#L38)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/WindowMasonry.tsx:42](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/vue/WindowMasonry.tsx#L42)

Get current scrollTop.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/WindowMasonry.tsx:46](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/vue/WindowMasonry.tsx#L46)

Get current clientHeight of the document.
