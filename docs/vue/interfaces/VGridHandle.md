[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/vue/VGrid.tsx:139](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L139)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/vue/VGrid.tsx:168](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L168)

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

Defined in: [src/vue/VGrid.tsx:173](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L173)

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

Defined in: [src/vue/VGrid.tsx:178](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L178)

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

Defined in: [src/vue/VGrid.tsx:183](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L183)

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

Defined in: [src/vue/VGrid.tsx:188](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L188)

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

Defined in: [src/vue/VGrid.tsx:193](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L193)

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

Defined in: [src/vue/VGrid.tsx:198](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L198)

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

Defined in: [src/vue/VGrid.tsx:203](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L203)

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

Defined in: [src/vue/VGrid.tsx:208](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L208)

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

Defined in: [src/vue/VGrid.tsx:143](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L143)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/vue/VGrid.tsx:147](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L147)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/vue/VGrid.tsx:151](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L151)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/vue/VGrid.tsx:155](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L155)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/vue/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L159)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/vue/VGrid.tsx:163](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/vue/VGrid.tsx#L163)

Get current clientWidth.
