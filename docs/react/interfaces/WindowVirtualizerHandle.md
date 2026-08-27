[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/react/WindowVirtualizer.tsx:38](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L38)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/react/WindowVirtualizer.tsx:55](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L55)

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

Defined in: [src/react/WindowVirtualizer.tsx:60](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L60)

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

Defined in: [src/react/WindowVirtualizer.tsx:65](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L65)

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

Defined in: [src/react/WindowVirtualizer.tsx:71](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L71)

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

> `readonly` **cache**: [`CacheSnapshot`](../type-aliases/CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:42](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L42)

Get current [CacheSnapshot](../type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L46)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:50](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/react/WindowVirtualizer.tsx#L50)

Get current offsetHeight, or offsetWidth if horizontal: true.
