[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/react/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L39)

Methods of [Virtualizer](../variables/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:68](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L68)

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

Defined in: [src/react/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L73)

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

Defined in: [src/react/Virtualizer.tsx:79](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L79)

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

Defined in: [src/react/Virtualizer.tsx:84](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L84)

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

Defined in: [src/react/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L89)

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

Defined in: [src/react/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L43)

Get current [CacheSnapshot](CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L47)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L51)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L55)

Get current offsetHeight, or offsetWidth if horizontal: true.

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L59)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/react/Virtualizer.tsx:63](https://github.com/inokawa/virtua/blob/cb302e3f486df2598a08c73194aca97575ded23a/src/react/Virtualizer.tsx#L63)

Find the end index of visible range of items.

#### Returns

`number`
