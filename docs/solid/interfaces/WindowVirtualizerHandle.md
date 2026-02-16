[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/solid/WindowVirtualizer.tsx:34](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L34)

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/solid/WindowVirtualizer.tsx:51](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L51)

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

Defined in: [src/solid/WindowVirtualizer.tsx:56](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L56)

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

Defined in: [src/solid/WindowVirtualizer.tsx:61](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L61)

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

Defined in: [src/solid/WindowVirtualizer.tsx:67](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L67)

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

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:38](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L38)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:42](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L42)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/solid/WindowVirtualizer.tsx#L46)

Get current offsetHeight, or offsetWidth if horizontal: true.
