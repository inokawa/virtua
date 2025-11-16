[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/solid/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L41)

Methods of [Virtualizer](../functions/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L67)

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

Defined in: [src/solid/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L72)

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

Defined in: [src/solid/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L78)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/solid/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L83)

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

Defined in: [src/solid/Virtualizer.tsx:88](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L88)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L45)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L49)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L53)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:57](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L57)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findItemIndex()

> **findItemIndex**: (`offset`) => `number`

Defined in: [src/solid/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/5e7be16c9ad0cffebf703be63d25c8d831494a07/src/solid/Virtualizer.tsx#L62)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`
