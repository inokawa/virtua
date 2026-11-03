[**API**](../../API.md)

***

# Interface: WindowMasonryHandle

Defined in: src/vue/WindowMasonry.tsx:36

Methods of [WindowMasonry](../variables/WindowMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: src/vue/WindowMasonry.tsx:57

Get item offset from the start of the masonry.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: src/vue/WindowMasonry.tsx:62

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

Defined in: src/vue/WindowMasonry.tsx:68

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

Defined in: src/vue/WindowMasonry.tsx:73

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

Defined in: src/vue/WindowMasonry.tsx:78

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

Defined in: src/vue/WindowMasonry.tsx:40

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: src/vue/WindowMasonry.tsx:44

Get current scrollTop. This is the document offset.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: src/vue/WindowMasonry.tsx:48

Get the masonry scroll extent, at least the viewport size. This does not include the rest of the document.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: src/vue/WindowMasonry.tsx:52

Get the document viewport height.
