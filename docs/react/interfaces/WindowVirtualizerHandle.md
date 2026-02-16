[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/react/WindowVirtualizer.tsx:37](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L37)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/react/WindowVirtualizer.tsx:54](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L54)

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

Defined in: [src/react/WindowVirtualizer.tsx:59](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L59)

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

Defined in: [src/react/WindowVirtualizer.tsx:64](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L64)

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

Defined in: [src/react/WindowVirtualizer.tsx:70](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L70)

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

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:41](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L41)

Get current [CacheSnapshot](CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:45](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L45)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:49](https://github.com/inokawa/virtua/blob/14c0c394b486addb82096fbb4d836502954d951c/src/react/WindowVirtualizer.tsx#L49)

Get current offsetHeight, or offsetWidth if horizontal: true.
