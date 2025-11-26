[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:110](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L110)

Methods of [VGrid](../variables/experimental_VGrid.md).

## Methods

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/react/VGrid.tsx:149](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L149)

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

Defined in: [src/react/VGrid.tsx:154](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L154)

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

Defined in: [src/react/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L159)

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

Defined in: [src/react/VGrid.tsx:164](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L164)

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

Defined in: [src/react/VGrid.tsx:169](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L169)

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

Defined in: [src/react/VGrid.tsx:174](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L174)

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

Defined in: [src/react/VGrid.tsx:180](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L180)

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

Defined in: [src/react/VGrid.tsx:186](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L186)

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

Defined in: [src/react/VGrid.tsx:192](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L192)

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

Defined in: [src/react/VGrid.tsx:114](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L114)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:118](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L118)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:122](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L122)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:126](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L126)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:130](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L130)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:134](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L134)

Get current offsetWidth.

***

### findRowIndex()

> **findRowIndex**: (`offset`) => `number`

Defined in: [src/react/VGrid.tsx:139](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L139)

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

Defined in: [src/react/VGrid.tsx:144](https://github.com/inokawa/virtua/blob/3978d71562fd6722a9a9ac1e3f11debe3d25f24f/src/react/VGrid.tsx#L144)

Find nearest col index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`
