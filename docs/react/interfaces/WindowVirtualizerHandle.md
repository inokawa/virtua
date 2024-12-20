[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

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

#### Defined in

[src/react/WindowVirtualizer.tsx:51](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/react/WindowVirtualizer.tsx#L51)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/WindowVirtualizer.tsx:37](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/react/WindowVirtualizer.tsx#L37)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:41](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/react/WindowVirtualizer.tsx#L41)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:45](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/react/WindowVirtualizer.tsx#L45)
