[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L42)

Methods of [Virtualizer](../variables/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L71)

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

Defined in: [src/react/Virtualizer.tsx:76](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L76)

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

Defined in: [src/react/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L82)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](ScrollToIndexOpts.md)

options

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/react/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L87)

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

Defined in: [src/react/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L92)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L46)

Get current [CacheSnapshot](CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L50)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L54)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L58)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L62)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/95f7baa9d41005ec345c4c24d32d7e368d440bb8/src/react/Virtualizer.tsx#L66)

Find the end index of visible range of items.

#### Returns

`number`
