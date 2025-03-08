[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/solid/Virtualizer.tsx:37](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L37)

Methods of [Virtualizer](../functions/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L62)

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

Defined in: [src/solid/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L67)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Defined in: [src/solid/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L73)

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

Defined in: [src/solid/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L78)

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

Defined in: [src/solid/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L83)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L41)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L45)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L49)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L53)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:57](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L57)

Find the end index of visible range of items.

#### Returns

`number`
