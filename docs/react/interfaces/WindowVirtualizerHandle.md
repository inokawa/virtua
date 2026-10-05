[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/react/WindowVirtualizer.tsx:39](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L39)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/react/WindowVirtualizer.tsx:56](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L56)

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

Defined in: [src/react/WindowVirtualizer.tsx:61](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L61)

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

Defined in: [src/react/WindowVirtualizer.tsx:66](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L66)

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

Defined in: [src/react/WindowVirtualizer.tsx:72](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L72)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../core/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/react/WindowVirtualizer.tsx:43](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L43)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:47](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L47)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/WindowVirtualizer.tsx:51](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/WindowVirtualizer.tsx#L51)

Get current clientHeight of the document, or clientWidth if horizontal: true.
