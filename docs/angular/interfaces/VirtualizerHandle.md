[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/angular/Virtualizer.ts:50](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L50)

Methods of [Virtualizer](../classes/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/Virtualizer.ts:71](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L71)

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

Defined in: [src/angular/Virtualizer.ts:76](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L76)

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

Defined in: [src/angular/Virtualizer.ts:81](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L81)

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

Defined in: [src/angular/Virtualizer.ts:87](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L87)

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

Defined in: [src/angular/Virtualizer.ts:92](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L92)

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

Defined in: [src/angular/Virtualizer.ts:97](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L97)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/angular/Virtualizer.ts:54](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L54)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/angular/Virtualizer.ts:58](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L58)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/angular/Virtualizer.ts:62](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L62)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/angular/Virtualizer.ts:66](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/Virtualizer.ts#L66)

Get current offsetHeight, or offsetWidth if horizontal: true.
