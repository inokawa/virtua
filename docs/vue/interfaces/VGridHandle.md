[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/vue/VGrid.tsx:147](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L147)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/vue/VGrid.tsx:176](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L176)

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

Defined in: [src/vue/VGrid.tsx:181](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L181)

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

Defined in: [src/vue/VGrid.tsx:186](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L186)

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

Defined in: [src/vue/VGrid.tsx:191](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L191)

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

Defined in: [src/vue/VGrid.tsx:196](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L196)

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

Defined in: [src/vue/VGrid.tsx:201](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L201)

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

Defined in: [src/vue/VGrid.tsx:206](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L206)

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

Defined in: [src/vue/VGrid.tsx:211](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L211)

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

Defined in: [src/vue/VGrid.tsx:216](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L216)

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

Defined in: [src/vue/VGrid.tsx:151](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L151)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/vue/VGrid.tsx:155](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L155)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/vue/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L159)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/vue/VGrid.tsx:163](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L163)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/vue/VGrid.tsx:167](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L167)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/vue/VGrid.tsx:171](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VGrid.tsx#L171)

Get current clientWidth.
