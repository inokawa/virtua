[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/svelte/VGrid.type.ts:134](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L134)

Methods of [VGrid](../variables/VList.md).

## Methods

### getVerticalScrollOffset()

> **getVerticalScrollOffset**(): `number`

Defined in: [src/svelte/VGrid.type.ts:138](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L138)

Get current scrollTop.

#### Returns

`number`

***

### getHorizontalScrollOffset()

> **getHorizontalScrollOffset**(): `number`

Defined in: [src/svelte/VGrid.type.ts:142](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L142)

Get current scrollLeft. Always positive even in RTL.

#### Returns

`number`

***

### getScrollHeight()

> **getScrollHeight**(): `number`

Defined in: [src/svelte/VGrid.type.ts:146](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L146)

Get current scrollHeight.

#### Returns

`number`

***

### getScrollWidth()

> **getScrollWidth**(): `number`

Defined in: [src/svelte/VGrid.type.ts:150](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L150)

Get current scrollWidth.

#### Returns

`number`

***

### getViewportHeight()

> **getViewportHeight**(): `number`

Defined in: [src/svelte/VGrid.type.ts:154](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L154)

Get current clientHeight.

#### Returns

`number`

***

### getViewportWidth()

> **getViewportWidth**(): `number`

Defined in: [src/svelte/VGrid.type.ts:158](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L158)

Get current clientWidth.

#### Returns

`number`

***

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/svelte/VGrid.type.ts:163](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L163)

Find nearest row index from offset, which is 0 if there are no rows.

#### Parameters

##### offset

`number`

offset in pixels from the top of the scroll container

#### Returns

`number`

***

### findColIndex()

> **findColIndex**(`offset`): `number`

Defined in: [src/svelte/VGrid.type.ts:168](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L168)

Find nearest column index from offset, which is 0 if there are no columns.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/svelte/VGrid.type.ts:173](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L173)

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

Defined in: [src/svelte/VGrid.type.ts:178](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L178)

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

Defined in: [src/svelte/VGrid.type.ts:183](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L183)

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

Defined in: [src/svelte/VGrid.type.ts:188](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L188)

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

Defined in: [src/svelte/VGrid.type.ts:193](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L193)

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

Defined in: [src/svelte/VGrid.type.ts:198](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L198)

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

Defined in: [src/svelte/VGrid.type.ts:203](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/svelte/VGrid.type.ts#L203)

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
