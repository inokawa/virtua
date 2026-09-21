[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/vue/VGrid.tsx:138](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L138)

Methods of [VGrid](../variables/VGrid.md).

## Methods

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/vue/VGrid.tsx:167](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L167)

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

Defined in: [src/vue/VGrid.tsx:172](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L172)

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

Defined in: [src/vue/VGrid.tsx:177](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L177)

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

Defined in: [src/vue/VGrid.tsx:182](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L182)

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

Defined in: [src/vue/VGrid.tsx:187](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L187)

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

Defined in: [src/vue/VGrid.tsx:192](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L192)

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

Defined in: [src/vue/VGrid.tsx:197](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L197)

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

Defined in: [src/vue/VGrid.tsx:202](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L202)

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

Defined in: [src/vue/VGrid.tsx:207](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L207)

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

Defined in: [src/vue/VGrid.tsx:142](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L142)

Get current scrollTop.

***

### horizontalScrollOffset

> `readonly` **horizontalScrollOffset**: `number`

Defined in: [src/vue/VGrid.tsx:146](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L146)

Get current scrollLeft. Always positive even in RTL.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/vue/VGrid.tsx:150](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L150)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/vue/VGrid.tsx:154](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L154)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/vue/VGrid.tsx:158](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L158)

Get current clientHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/vue/VGrid.tsx:162](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/vue/VGrid.tsx#L162)

Get current clientWidth.
