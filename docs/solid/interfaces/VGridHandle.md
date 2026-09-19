[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/solid/VGrid.tsx:49](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L49)

Methods of [VGrid](../functions/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/solid/VGrid.tsx:78](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L78)

Find nearest row index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the top of the scroll container

#### Returns

`number`

***

### findColIndex()

> **findColIndex**(`offset`): `number`

Defined in: [src/solid/VGrid.tsx:83](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L83)

Find nearest column index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/solid/VGrid.tsx:88](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L88)

Get offset of the row from the top.

#### Parameters

##### index

`number`

index of row

#### Returns

`number`

***

### getColOffset()

> **getColOffset**(`index`): `number`

Defined in: [src/solid/VGrid.tsx:93](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L93)

Get offset of the column from the start.

#### Parameters

##### index

`number`

index of column

#### Returns

`number`

***

### getRowSize()

> **getRowSize**(`index`): `number`

Defined in: [src/solid/VGrid.tsx:98](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L98)

Get size of the row.

#### Parameters

##### index

`number`

index of row

#### Returns

`number`

***

### getColSize()

> **getColSize**(`index`): `number`

Defined in: [src/solid/VGrid.tsx:103](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L103)

Get size of the column.

#### Parameters

##### index

`number`

index of column

#### Returns

`number`

***

### scrollToIndex()

> **scrollToIndex**(`opts`): `void`

Defined in: [src/solid/VGrid.tsx:108](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L108)

Scroll to the cell specified by the indexes. The cell is not hidden behind the rows and the columns sticking over it.

#### Parameters

##### opts

[`VGridScrollToIndexOpts`](../../core/interfaces/VGridScrollToIndexOpts.md)

the indexes of the cell and the options. See [VGridScrollToIndexOpts](../../core/interfaces/VGridScrollToIndexOpts.md).

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/solid/VGrid.tsx:113](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L113)

Scroll to the given offsets from the top/start of the scroll container.

#### Parameters

##### offset

the offsets. The axis whose offset is omitted is not scrolled.

###### vertical?

`number`

###### horizontal?

`number`

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/solid/VGrid.tsx:118](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L118)

Scroll by the given offsets from the current position.

#### Parameters

##### offset

the offsets. The axis whose offset is omitted is not scrolled.

###### vertical?

`number`

###### horizontal?

`number`

#### Returns

`void`

## Properties

### verticalScrollOffset

> `readonly` **verticalScrollOffset**: `number`

Defined in: [src/solid/VGrid.tsx:53](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L53)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/solid/VGrid.tsx:57](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L57)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/solid/VGrid.tsx:61](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L61)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/solid/VGrid.tsx:65](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L65)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/solid/VGrid.tsx:69](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L69)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/solid/VGrid.tsx:73](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/solid/VGrid.tsx#L73)

Get current clientWidth.
