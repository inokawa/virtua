[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/vue/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L159)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/vue/VGrid.tsx:188](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L188)

Find nearest row index from offset, which is 0 if there are no rows.

#### Parameters

##### offset

`number`

offset in pixels from the top of the scroll container

#### Returns

`number`

***

### findColIndex()

> **findColIndex**(`offset`): `number`

Defined in: [src/vue/VGrid.tsx:193](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L193)

Find nearest column index from offset, which is 0 if there are no columns.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/vue/VGrid.tsx:198](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L198)

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

Defined in: [src/vue/VGrid.tsx:203](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L203)

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

Defined in: [src/vue/VGrid.tsx:208](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L208)

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

Defined in: [src/vue/VGrid.tsx:213](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L213)

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

Defined in: [src/vue/VGrid.tsx:218](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L218)

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

Defined in: [src/vue/VGrid.tsx:223](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L223)

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

Defined in: [src/vue/VGrid.tsx:228](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L228)

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

Defined in: [src/vue/VGrid.tsx:163](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L163)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/vue/VGrid.tsx:167](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L167)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/vue/VGrid.tsx:171](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L171)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/vue/VGrid.tsx:175](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L175)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/vue/VGrid.tsx:179](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L179)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/vue/VGrid.tsx:183](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/vue/VGrid.tsx#L183)

Get current clientWidth.
