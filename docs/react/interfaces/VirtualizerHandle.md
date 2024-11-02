[**API**](../../API.md) • **Docs**

***

# Interface: VirtualizerHandle

Methods of [Virtualizer](../functions/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Defined in

[src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L59)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

• **index**: `number`

index of item

• **opts?**: [`ScrollToIndexOpts`](ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L65)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

• **offset**: `number`

offset from start

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:70](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L70)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

• **offset**: `number`

offset from current position

#### Returns

`void`

#### Defined in

[src/react/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L75)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L42)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L46)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L50)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/14b234e8961e7ac5ef0ab5b2e4930d837883b8d5/src/react/Virtualizer.tsx#L54)
