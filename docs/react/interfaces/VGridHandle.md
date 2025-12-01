[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L109)

Methods of [VGrid](../variables/experimental_VGrid.md).

## Methods

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/react/VGrid.tsx:148](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L148)

Get row offset from start.

#### Parameters

##### index

`number`

index of row

#### Returns

`number`

***

### getColOffset()

> **getColOffset**(`index`): `number`

Defined in: [src/react/VGrid.tsx:153](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L153)

Get col offset from start.

#### Parameters

##### index

`number`

index of col

#### Returns

`number`

***

### getRowSize()

> **getRowSize**(`index`): `number`

Defined in: [src/react/VGrid.tsx:158](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L158)

Get row size.

#### Parameters

##### index

`number`

index of row

#### Returns

`number`

***

### getColSize()

> **getColSize**(`index`): `number`

Defined in: [src/react/VGrid.tsx:163](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L163)

Get col size.

#### Parameters

##### index

`number`

index of col

#### Returns

`number`

***

### resizeCols()

> **resizeCols**(`cols`): `void`

Defined in: [src/react/VGrid.tsx:168](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L168)

Resize individual columns.

#### Parameters

##### cols

[`VGridItemResize`](../type-aliases/VGridItemResize.md)[]

array of `[index, size]` to update column sizes

#### Returns

`void`

***

### resizeRows()

> **resizeRows**(`rows`): `void`

Defined in: [src/react/VGrid.tsx:173](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L173)

Resize individual rows.

#### Parameters

##### rows

[`VGridItemResize`](../type-aliases/VGridItemResize.md)[]

array of `[index, size]` to update row sizes

#### Returns

`void`

***

### scrollToIndex()

> **scrollToIndex**(`indexX?`, `indexY?`): `void`

Defined in: [src/react/VGrid.tsx:179](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L179)

Scroll to the item specified by index.

#### Parameters

##### indexX?

`number`

horizontal index of item

##### indexY?

`number`

vertical index of item

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offsetX?`, `offsetY?`): `void`

Defined in: [src/react/VGrid.tsx:185](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L185)

Scroll to the given offset.

#### Parameters

##### offsetX?

`number`

offset from left

##### offsetY?

`number`

offset from top

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offsetX?`, `offsetY?`): `void`

Defined in: [src/react/VGrid.tsx:191](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L191)

Scroll by the given offset.

#### Parameters

##### offsetX?

`number`

horizontal offset from current position

##### offsetY?

`number`

vertical offset from current position

#### Returns

`void`

## Properties

### scrollTop

> `readonly` **scrollTop**: `number`

Defined in: [src/react/VGrid.tsx:113](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L113)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:117](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L117)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:121](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L121)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:125](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L125)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:129](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L129)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:133](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L133)

Get current offsetWidth.

***

### findRowIndex()

> **findRowIndex**: (`offset`) => `number`

Defined in: [src/react/VGrid.tsx:138](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L138)

Find nearest row index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### findColIndex()

> **findColIndex**: (`offset`) => `number`

Defined in: [src/react/VGrid.tsx:143](https://github.com/inokawa/virtua/blob/f062d44f00ef139357d4909c2cead7e57ebe2453/src/react/VGrid.tsx#L143)

Find nearest col index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`
