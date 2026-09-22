[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/angular/VGrid.ts:56](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L56)

Methods of [VGrid](../classes/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/angular/VGrid.ts:85](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L85)

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

Defined in: [src/angular/VGrid.ts:90](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L90)

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

Defined in: [src/angular/VGrid.ts:95](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L95)

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

Defined in: [src/angular/VGrid.ts:100](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L100)

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

Defined in: [src/angular/VGrid.ts:105](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L105)

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

Defined in: [src/angular/VGrid.ts:110](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L110)

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

Defined in: [src/angular/VGrid.ts:115](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L115)

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

Defined in: [src/angular/VGrid.ts:120](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L120)

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

Defined in: [src/angular/VGrid.ts:125](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L125)

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

Defined in: [src/angular/VGrid.ts:60](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L60)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/angular/VGrid.ts:64](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L64)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/angular/VGrid.ts:68](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L68)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/angular/VGrid.ts:72](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L72)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/angular/VGrid.ts:76](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L76)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/angular/VGrid.ts:80](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/angular/VGrid.ts#L80)

Get current clientWidth.
