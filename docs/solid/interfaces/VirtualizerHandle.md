[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/solid/Virtualizer.tsx:40](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L40)

Methods of [Virtualizer](../functions/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L69)

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

Defined in: [src/solid/Virtualizer.tsx:74](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L74)

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

Defined in: [src/solid/Virtualizer.tsx:80](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L80)

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

Defined in: [src/solid/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L85)

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

Defined in: [src/solid/Virtualizer.tsx:90](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L90)

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

Defined in: [src/solid/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L44)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L48)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:52](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L52)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L56)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:60](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L60)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/solid/Virtualizer.tsx#L64)

Find the end index of visible range of items.

#### Returns

`number`
