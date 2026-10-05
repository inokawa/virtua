[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/solid/VGrid.tsx:52](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L52)

Methods of [VGrid](../functions/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/solid/VGrid.tsx:81](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L81)

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

Defined in: [src/solid/VGrid.tsx:86](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L86)

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

Defined in: [src/solid/VGrid.tsx:91](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L91)

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

Defined in: [src/solid/VGrid.tsx:96](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L96)

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

Defined in: [src/solid/VGrid.tsx:101](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L101)

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

Defined in: [src/solid/VGrid.tsx:106](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L106)

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

Defined in: [src/solid/VGrid.tsx:111](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L111)

Scroll to the cell specified by the indexes. The cell is not hidden behind the rows and the columns sticking over it.

#### Parameters

##### opts

[`GridScrollToIndexOpts`](../../core/interfaces/GridScrollToIndexOpts.md)

the indexes of the cell and the options. See [GridScrollToIndexOpts](../../core/interfaces/GridScrollToIndexOpts.md).

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/solid/VGrid.tsx:116](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L116)

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

Defined in: [src/solid/VGrid.tsx:121](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L121)

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

Defined in: [src/solid/VGrid.tsx:56](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L56)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/solid/VGrid.tsx:60](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L60)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/solid/VGrid.tsx:64](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L64)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/solid/VGrid.tsx:68](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L68)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/solid/VGrid.tsx:72](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L72)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/solid/VGrid.tsx:76](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VGrid.tsx#L76)

Get current clientWidth.
