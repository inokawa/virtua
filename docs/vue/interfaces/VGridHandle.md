[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/vue/VGrid.tsx:141](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L141)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/vue/VGrid.tsx:170](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L170)

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

Defined in: [src/vue/VGrid.tsx:175](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L175)

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

Defined in: [src/vue/VGrid.tsx:180](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L180)

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

Defined in: [src/vue/VGrid.tsx:185](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L185)

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

Defined in: [src/vue/VGrid.tsx:190](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L190)

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

Defined in: [src/vue/VGrid.tsx:195](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L195)

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

Defined in: [src/vue/VGrid.tsx:200](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L200)

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

Defined in: [src/vue/VGrid.tsx:205](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L205)

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

Defined in: [src/vue/VGrid.tsx:210](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L210)

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

Defined in: [src/vue/VGrid.tsx:145](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L145)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/vue/VGrid.tsx:149](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L149)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/vue/VGrid.tsx:153](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L153)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/vue/VGrid.tsx:157](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L157)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/vue/VGrid.tsx:161](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L161)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/vue/VGrid.tsx:165](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/VGrid.tsx#L165)

Get current clientWidth.
