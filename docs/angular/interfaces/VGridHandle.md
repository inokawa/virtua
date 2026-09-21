[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/angular/VGrid.ts:55](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L55)

Methods of [VGrid](../classes/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/angular/VGrid.ts:84](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L84)

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

Defined in: [src/angular/VGrid.ts:89](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L89)

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

Defined in: [src/angular/VGrid.ts:94](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L94)

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

Defined in: [src/angular/VGrid.ts:99](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L99)

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

Defined in: [src/angular/VGrid.ts:104](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L104)

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

Defined in: [src/angular/VGrid.ts:109](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L109)

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

Defined in: [src/angular/VGrid.ts:114](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L114)

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

Defined in: [src/angular/VGrid.ts:119](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L119)

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

Defined in: [src/angular/VGrid.ts:124](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L124)

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

Defined in: [src/angular/VGrid.ts:59](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L59)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/angular/VGrid.ts:63](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L63)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/angular/VGrid.ts:67](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L67)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/angular/VGrid.ts:71](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L71)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/angular/VGrid.ts:75](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L75)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/angular/VGrid.ts:79](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L79)

Get current clientWidth.
