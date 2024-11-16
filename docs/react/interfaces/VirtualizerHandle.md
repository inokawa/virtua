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

[src/react/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L64)

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

[src/react/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L69)

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

[src/react/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L75)

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

[src/react/Virtualizer.tsx:80](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L80)

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

[src/react/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L85)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L39)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L43)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L47)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Defined in

[src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L51)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L55)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/Virtualizer.tsx#L59)
