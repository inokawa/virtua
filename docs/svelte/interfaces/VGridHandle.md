[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/svelte/VGrid.type.ts:122](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L122)

Methods of [VGrid](../variables/VList.md).

## Methods

### getVerticalScrollOffset()

> **getVerticalScrollOffset**(): `number`

Defined in: [src/svelte/VGrid.type.ts:126](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L126)

Get current scrollTop.

#### Returns

`number`

***

### getHorizontalScrollOffset()

> **getHorizontalScrollOffset**(): `number`

Defined in: [src/svelte/VGrid.type.ts:130](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L130)

Get current scrollLeft. Always positive even in RTL.

#### Returns

`number`

***

### getScrollHeight()

> **getScrollHeight**(): `number`

Defined in: [src/svelte/VGrid.type.ts:134](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L134)

Get current scrollHeight.

#### Returns

`number`

***

### getScrollWidth()

> **getScrollWidth**(): `number`

Defined in: [src/svelte/VGrid.type.ts:138](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L138)

Get current scrollWidth.

#### Returns

`number`

***

### getViewportHeight()

> **getViewportHeight**(): `number`

Defined in: [src/svelte/VGrid.type.ts:142](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L142)

Get current clientHeight.

#### Returns

`number`

***

### getViewportWidth()

> **getViewportWidth**(): `number`

Defined in: [src/svelte/VGrid.type.ts:146](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L146)

Get current clientWidth.

#### Returns

`number`

***

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/svelte/VGrid.type.ts:151](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L151)

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

Defined in: [src/svelte/VGrid.type.ts:156](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L156)

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

Defined in: [src/svelte/VGrid.type.ts:161](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L161)

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

Defined in: [src/svelte/VGrid.type.ts:166](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L166)

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

Defined in: [src/svelte/VGrid.type.ts:171](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L171)

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

Defined in: [src/svelte/VGrid.type.ts:176](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L176)

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

Defined in: [src/svelte/VGrid.type.ts:181](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L181)

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

Defined in: [src/svelte/VGrid.type.ts:186](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L186)

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

Defined in: [src/svelte/VGrid.type.ts:191](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VGrid.type.ts#L191)

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
