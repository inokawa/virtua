[**API**](../../API.md) • **Docs**

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/cde6b757a74b1e8c69e920fc596425ef39738abf/src/react/WindowVirtualizer.tsx#L36)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/cde6b757a74b1e8c69e920fc596425ef39738abf/src/react/WindowVirtualizer.tsx#L40)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:44](https://github.com/inokawa/virtua/blob/cde6b757a74b1e8c69e920fc596425ef39738abf/src/react/WindowVirtualizer.tsx#L44)
