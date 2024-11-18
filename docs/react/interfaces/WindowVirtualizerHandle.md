[**API**](../../API.md) • **Docs**

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/WindowVirtualizer.tsx#L36)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/WindowVirtualizer.tsx#L40)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:44](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/WindowVirtualizer.tsx#L44)
