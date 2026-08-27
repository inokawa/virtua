[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/solid/WindowVirtualizer.tsx:35](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L35)

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/solid/WindowVirtualizer.tsx:52](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L52)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/WindowVirtualizer.tsx:57](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L57)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/solid/WindowVirtualizer.tsx:62](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L62)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/solid/WindowVirtualizer.tsx:68](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L68)

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

> `readonly` **cache**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/WindowVirtualizer.tsx:39](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L39)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:43](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L43)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:47](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/solid/WindowVirtualizer.tsx#L47)

Get current offsetHeight, or offsetWidth if horizontal: true.
