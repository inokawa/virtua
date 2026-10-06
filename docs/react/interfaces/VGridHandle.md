[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:51](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L51)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/react/VGrid.tsx:80](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L80)

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

Defined in: [src/react/VGrid.tsx:85](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L85)

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

Defined in: [src/react/VGrid.tsx:90](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L90)

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

Defined in: [src/react/VGrid.tsx:95](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L95)

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

Defined in: [src/react/VGrid.tsx:100](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L100)

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

Defined in: [src/react/VGrid.tsx:105](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L105)

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

Defined in: [src/react/VGrid.tsx:110](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L110)

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

Defined in: [src/react/VGrid.tsx:115](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L115)

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

Defined in: [src/react/VGrid.tsx:120](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L120)

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

Defined in: [src/react/VGrid.tsx:55](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L55)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/react/VGrid.tsx:59](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L59)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:63](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L63)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:67](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L67)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:71](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L71)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:75](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VGrid.tsx#L75)

Get current clientWidth.
