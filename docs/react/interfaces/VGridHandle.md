[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:108](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L108)

Methods of [VGrid](../variables/experimental_VGrid.md).

## Methods

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/react/VGrid.tsx:147](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L147)

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

Defined in: [src/react/VGrid.tsx:152](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L152)

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

Defined in: [src/react/VGrid.tsx:157](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L157)

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

Defined in: [src/react/VGrid.tsx:162](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L162)

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

Defined in: [src/react/VGrid.tsx:167](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L167)

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

Defined in: [src/react/VGrid.tsx:172](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L172)

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

Defined in: [src/react/VGrid.tsx:178](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L178)

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

Defined in: [src/react/VGrid.tsx:184](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L184)

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

Defined in: [src/react/VGrid.tsx:190](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L190)

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

Defined in: [src/react/VGrid.tsx:112](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L112)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:116](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L116)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:120](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L120)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:124](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L124)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:128](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L128)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:132](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L132)

Get current offsetWidth.

***

### findRowIndex

> **findRowIndex**: (`offset`) => `number`

Defined in: [src/react/VGrid.tsx:137](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L137)

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

Defined in: [src/react/VGrid.tsx:142](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/react/VGrid.tsx#L142)

Find nearest col index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`
