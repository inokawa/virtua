[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:47](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L47)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/react/VGrid.tsx:76](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L76)

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

Defined in: [src/react/VGrid.tsx:81](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L81)

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

Defined in: [src/react/VGrid.tsx:86](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L86)

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

Defined in: [src/react/VGrid.tsx:91](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L91)

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

Defined in: [src/react/VGrid.tsx:96](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L96)

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

Defined in: [src/react/VGrid.tsx:101](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L101)

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

Defined in: [src/react/VGrid.tsx:106](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L106)

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

Defined in: [src/react/VGrid.tsx:111](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L111)

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

Defined in: [src/react/VGrid.tsx:116](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L116)

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

Defined in: [src/react/VGrid.tsx:51](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L51)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/react/VGrid.tsx:55](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L55)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:59](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L59)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:63](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L63)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:67](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L67)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:71](https://github.com/inokawa/virtua/blob/93318cc12ea63472268ab80ad4573f25f56694a8/src/react/VGrid.tsx#L71)

Get current clientWidth.
