[**API**](../../API.md)

***

# Interface: WindowMasonryHandle

Defined in: src/react/WindowMasonry.tsx:38

Methods of [WindowMasonry](../variables/WindowMasonry.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: src/react/WindowMasonry.tsx:59

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

Defined in: src/react/WindowMasonry.tsx:64

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

Defined in: src/react/WindowMasonry.tsx:70

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

Defined in: src/react/WindowMasonry.tsx:75

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start of the document

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: src/react/WindowMasonry.tsx:80

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

Defined in: src/react/WindowMasonry.tsx:42

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: src/react/WindowMasonry.tsx:46

Get current document scrollTop.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: src/react/WindowMasonry.tsx:50

Get the masonry's total scrollable size, at least the viewport height. This does not include other document content.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: src/react/WindowMasonry.tsx:54

Get current document clientHeight.
