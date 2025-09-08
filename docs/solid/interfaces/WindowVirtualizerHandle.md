[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/solid/WindowVirtualizer.tsx:34](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/solid/WindowVirtualizer.tsx#L34)

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/solid/WindowVirtualizer.tsx:52](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/solid/WindowVirtualizer.tsx#L52)

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

Defined in: [src/solid/WindowVirtualizer.tsx:38](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/solid/WindowVirtualizer.tsx#L38)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/solid/WindowVirtualizer.tsx:42](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/solid/WindowVirtualizer.tsx#L42)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/solid/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/solid/WindowVirtualizer.tsx#L46)

Find the end index of visible range of items.

#### Returns

`number`
