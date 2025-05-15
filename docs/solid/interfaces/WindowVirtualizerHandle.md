[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/solid/WindowVirtualizer.tsx:35](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/solid/WindowVirtualizer.tsx#L35)

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Defined in: [src/solid/WindowVirtualizer.tsx:53](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/solid/WindowVirtualizer.tsx#L53)

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

Defined in: [src/solid/WindowVirtualizer.tsx:39](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/solid/WindowVirtualizer.tsx#L39)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/solid/WindowVirtualizer.tsx:43](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/solid/WindowVirtualizer.tsx#L43)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/solid/WindowVirtualizer.tsx:47](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/solid/WindowVirtualizer.tsx#L47)

Find the end index of visible range of items.

#### Returns

`number`
