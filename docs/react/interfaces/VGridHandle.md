[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:45](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L45)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/react/VGrid.tsx:74](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L74)

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

Defined in: [src/react/VGrid.tsx:79](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L79)

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

Defined in: [src/react/VGrid.tsx:84](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L84)

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

Defined in: [src/react/VGrid.tsx:89](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L89)

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

Defined in: [src/react/VGrid.tsx:94](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L94)

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

Defined in: [src/react/VGrid.tsx:99](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L99)

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

Defined in: [src/react/VGrid.tsx:104](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L104)

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

Defined in: [src/react/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L109)

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

Defined in: [src/react/VGrid.tsx:114](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L114)

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

Defined in: [src/react/VGrid.tsx:49](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L49)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/react/VGrid.tsx:53](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L53)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:57](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L57)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:61](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L61)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:65](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L65)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:69](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/react/VGrid.tsx#L69)

Get current clientWidth.
