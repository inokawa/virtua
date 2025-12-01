[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L42)

Methods of [Virtualizer](../variables/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/react/Virtualizer.tsx:63](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L63)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:68](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L68)

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

Defined in: [src/react/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L73)

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

Defined in: [src/react/Virtualizer.tsx:79](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L79)

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

Defined in: [src/react/Virtualizer.tsx:84](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L84)

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

Defined in: [src/react/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L89)

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

Defined in: [src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L46)

Get current [CacheSnapshot](CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L50)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L54)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:58](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/Virtualizer.tsx#L58)

Get current offsetHeight, or offsetWidth if horizontal: true.
