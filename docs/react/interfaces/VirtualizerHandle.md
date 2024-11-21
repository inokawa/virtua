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

[src/react/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L65)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Defined in

[src/react/Virtualizer.tsx:70](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L70)

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

[src/react/Virtualizer.tsx:76](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L76)

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

[src/react/Virtualizer.tsx:81](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L81)

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

[src/react/Virtualizer.tsx:86](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L86)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/Virtualizer.tsx:40](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L40)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L44)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L48)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:52](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L52)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L56)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/Virtualizer.tsx:60](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/Virtualizer.tsx#L60)
