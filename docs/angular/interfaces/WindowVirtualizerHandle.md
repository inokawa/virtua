[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/angular/WindowVirtualizer.ts:42](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L42)

Methods of [WindowVirtualizer](../classes/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/WindowVirtualizer.ts:59](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L59)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/WindowVirtualizer.ts:64](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L64)

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

Defined in: [src/angular/WindowVirtualizer.ts:69](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L69)

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

Defined in: [src/angular/WindowVirtualizer.ts:75](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L75)

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

Defined in: [src/angular/WindowVirtualizer.ts:46](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L46)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/WindowVirtualizer.ts:50](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L50)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/WindowVirtualizer.ts:54](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/angular/WindowVirtualizer.ts#L54)

Get current clientHeight of the document, or clientWidth if horizontal: true.
