[**API**](../../API.md)

***

# Interface: WindowMasonryHandle

Defined in: src/angular/WindowMasonry.ts:50

Methods of [WindowMasonry](../classes/WindowMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: src/angular/WindowMasonry.ts:71

Get item offset from the start of the masonry, excluding its document offset.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: src/angular/WindowMasonry.ts:76

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

Defined in: src/angular/WindowMasonry.ts:82

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

Defined in: src/angular/WindowMasonry.ts:87

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from the start of the document

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: src/angular/WindowMasonry.ts:92

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

Defined in: src/angular/WindowMasonry.ts:54

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: src/angular/WindowMasonry.ts:58

Get current scrollTop of the document.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: src/angular/WindowMasonry.ts:62

Get the virtual masonry extent, at least the document viewport height. This does not include other document content.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: src/angular/WindowMasonry.ts:66

Get current clientHeight of the document.
