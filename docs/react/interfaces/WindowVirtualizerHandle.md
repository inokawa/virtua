[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/react/WindowVirtualizer.tsx:33](https://github.com/inokawa/virtua/blob/a48577a29001b7d13366f89308b2cb5c0b65e4c0/src/react/WindowVirtualizer.tsx#L33)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/react/WindowVirtualizer.tsx:51](https://github.com/inokawa/virtua/blob/a48577a29001b7d13366f89308b2cb5c0b65e4c0/src/react/WindowVirtualizer.tsx#L51)

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

Defined in: [src/react/WindowVirtualizer.tsx:37](https://github.com/inokawa/virtua/blob/a48577a29001b7d13366f89308b2cb5c0b65e4c0/src/react/WindowVirtualizer.tsx#L37)

Get current [CacheSnapshot](CacheSnapshot.md).

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/react/WindowVirtualizer.tsx:41](https://github.com/inokawa/virtua/blob/a48577a29001b7d13366f89308b2cb5c0b65e4c0/src/react/WindowVirtualizer.tsx#L41)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/react/WindowVirtualizer.tsx:45](https://github.com/inokawa/virtua/blob/a48577a29001b7d13366f89308b2cb5c0b65e4c0/src/react/WindowVirtualizer.tsx#L45)

Find the end index of visible range of items.

#### Returns

`number`
