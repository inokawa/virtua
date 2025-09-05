[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L109)

Methods of [VGrid](../variables/experimental_VGrid.md).

## Methods

### getItemOffset()

> **getItemOffset**(`indexX`, `indexY`): \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:147](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L147)

Get item offset from start.

#### Parameters

##### indexX

`number`

horizontal index of item

##### indexY

`number`

vertical of item

#### Returns

\[`number`, `number`\]

***

### getItemSize()

> **getItemSize**(`indexX`, `indexY`): \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:153](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L153)

Get item size.

#### Parameters

##### indexX

`number`

horizontal index of item

##### indexY

`number`

vertical of item

#### Returns

\[`number`, `number`\]

***

### resizeCols()

> **resizeCols**(`cols`): `void`

Defined in: [src/react/VGrid.tsx:158](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L158)

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

Defined in: [src/react/VGrid.tsx:163](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L163)

Resize individual rows.

#### Parameters

##### rows

[`VGridItemResize`](../type-aliases/VGridItemResize.md)[]

array of `[index, size]` to update row sizes

#### Returns

`void`

***

### scrollToIndex()

> **scrollToIndex**(`indexX`, `indexY`): `void`

Defined in: [src/react/VGrid.tsx:169](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L169)

Scroll to the item specified by index.

#### Parameters

##### indexX

`number`

horizontal index of item

##### indexY

`number`

vertical index of item

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offsetX`, `offsetY`): `void`

Defined in: [src/react/VGrid.tsx:175](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L175)

Scroll to the given offset.

#### Parameters

##### offsetX

`number`

offset from left

##### offsetY

`number`

offset from top

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offsetX`, `offsetY`): `void`

Defined in: [src/react/VGrid.tsx:181](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L181)

Scroll by the given offset.

#### Parameters

##### offsetX

`number`

horizontal offset from current position

##### offsetY

`number`

vertical offset from current position

#### Returns

`void`

## Properties

### scrollTop

> `readonly` **scrollTop**: `number`

Defined in: [src/react/VGrid.tsx:113](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L113)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:117](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L117)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:121](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L121)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:125](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L125)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:129](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L129)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:133](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L133)

Get current offsetWidth.

***

### findStartIndex()

> **findStartIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:137](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L137)

Find the start index of visible range of items.

#### Returns

\[`number`, `number`\]

***

### findEndIndex()

> **findEndIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:141](https://github.com/inokawa/virtua/blob/75785cbff53d7623e0d1d97028eb886458aa7636/src/react/VGrid.tsx#L141)

Find the end index of visible range of items.

#### Returns

\[`number`, `number`\]
