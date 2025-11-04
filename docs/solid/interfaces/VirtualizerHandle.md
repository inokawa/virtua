[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/solid/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L41)

Methods of [Virtualizer](../functions/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/Virtualizer.tsx:70](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L70)

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

Defined in: [src/solid/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L75)

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

Defined in: [src/solid/Virtualizer.tsx:81](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L81)

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

Defined in: [src/solid/Virtualizer.tsx:86](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L86)

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

Defined in: [src/solid/Virtualizer.tsx:91](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L91)

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

Defined in: [src/solid/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L45)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L49)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L53)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:57](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L57)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L61)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/cfffda19cedc05da98b190d8729de5abea160d59/src/solid/Virtualizer.tsx#L65)

Find the end index of visible range of items.

#### Returns

`number`
