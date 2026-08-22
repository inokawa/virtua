[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:111](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L111)

Methods of [VGrid](../variables/experimental_VGrid.md).

## Methods

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/react/VGrid.tsx:150](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L150)

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

Defined in: [src/react/VGrid.tsx:155](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L155)

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

Defined in: [src/react/VGrid.tsx:160](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L160)

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

Defined in: [src/react/VGrid.tsx:165](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L165)

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

Defined in: [src/react/VGrid.tsx:170](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L170)

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

Defined in: [src/react/VGrid.tsx:175](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L175)

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

Defined in: [src/react/VGrid.tsx:181](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L181)

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

Defined in: [src/react/VGrid.tsx:187](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L187)

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

Defined in: [src/react/VGrid.tsx:193](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L193)

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

Defined in: [src/react/VGrid.tsx:115](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L115)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:119](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L119)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:123](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L123)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:127](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L127)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:131](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L131)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:135](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L135)

Get current offsetWidth.

***

### findRowIndex

> **findRowIndex**: (`offset`) => `number`

Defined in: [src/react/VGrid.tsx:140](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L140)

Find nearest row index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### findColIndex

> **findColIndex**: (`offset`) => `number`

Defined in: [src/react/VGrid.tsx:145](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/react/VGrid.tsx#L145)

Find nearest col index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`
