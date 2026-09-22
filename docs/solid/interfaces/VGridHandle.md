[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/solid/VGrid.tsx:50](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L50)

Methods of [VGrid](../functions/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/solid/VGrid.tsx:79](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L79)

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

Defined in: [src/solid/VGrid.tsx:84](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L84)

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

Defined in: [src/solid/VGrid.tsx:89](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L89)

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

Defined in: [src/solid/VGrid.tsx:94](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L94)

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

Defined in: [src/solid/VGrid.tsx:99](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L99)

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

Defined in: [src/solid/VGrid.tsx:104](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L104)

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

Defined in: [src/solid/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L109)

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

Defined in: [src/solid/VGrid.tsx:114](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L114)

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

Defined in: [src/solid/VGrid.tsx:119](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L119)

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

Defined in: [src/solid/VGrid.tsx:54](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L54)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/solid/VGrid.tsx:58](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L58)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/solid/VGrid.tsx:62](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L62)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/solid/VGrid.tsx:66](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L66)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/solid/VGrid.tsx:70](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L70)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/solid/VGrid.tsx:74](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/solid/VGrid.tsx#L74)

Get current clientWidth.
