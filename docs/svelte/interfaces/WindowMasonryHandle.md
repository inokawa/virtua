[**API**](../../API.md)

***

# Interface: WindowMasonryHandle

Defined in: src/svelte/WindowMasonry.type.ts:77

Methods of [WindowMasonry](../variables/VList.md).

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: src/svelte/WindowMasonry.type.ts:98

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

Defined in: src/svelte/WindowMasonry.type.ts:103

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

Defined in: src/svelte/WindowMasonry.type.ts:109

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

Defined in: src/svelte/WindowMasonry.type.ts:114

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from the document start

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: src/svelte/WindowMasonry.type.ts:119

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### getCache

> **getCache**: () => [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: src/svelte/WindowMasonry.type.ts:81

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: src/svelte/WindowMasonry.type.ts:85

Get current document scrollTop.

#### Returns

`number`

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: src/svelte/WindowMasonry.type.ts:89

Get the masonry's total height, at least the document viewport height. This is the masonry extent, rather than the document's scrollHeight.

#### Returns

`number`

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: src/svelte/WindowMasonry.type.ts:93

Get current clientHeight of the document.

#### Returns

`number`
