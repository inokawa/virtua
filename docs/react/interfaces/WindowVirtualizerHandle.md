[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/react/WindowVirtualizer.tsx:34](https://github.com/inokawa/virtua/blob/34eed8b48e1c1faedc2591408cf599f908a493e8/src/react/WindowVirtualizer.tsx#L34)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/react/WindowVirtualizer.tsx:52](https://github.com/inokawa/virtua/blob/34eed8b48e1c1faedc2591408cf599f908a493e8/src/react/WindowVirtualizer.tsx#L52)

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

Defined in: [src/react/WindowVirtualizer.tsx:38](https://github.com/inokawa/virtua/blob/34eed8b48e1c1faedc2591408cf599f908a493e8/src/react/WindowVirtualizer.tsx#L38)

Get current [CacheSnapshot](CacheSnapshot.md).

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/react/WindowVirtualizer.tsx:42](https://github.com/inokawa/virtua/blob/34eed8b48e1c1faedc2591408cf599f908a493e8/src/react/WindowVirtualizer.tsx#L42)

Find the start index of visible range of items.

#### Returns

`number`

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/react/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/34eed8b48e1c1faedc2591408cf599f908a493e8/src/react/WindowVirtualizer.tsx#L46)

Find the end index of visible range of items.

#### Returns

`number`
