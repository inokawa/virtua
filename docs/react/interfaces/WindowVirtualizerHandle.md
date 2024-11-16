[**API**](../../API.md) • **Docs**

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/WindowVirtualizer.tsx#L36)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/WindowVirtualizer.tsx#L40)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:44](https://github.com/inokawa/virtua/blob/da030dacd100511f676477a3b0a55aed96ffd083/src/react/WindowVirtualizer.tsx#L44)
