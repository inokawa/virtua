[**API**](../../API.md)

***

# Class: VGrid\<R, C\>

Defined in: [src/angular/VGrid.ts:313](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L313)

Virtualized grid component for tabular data. See [VGridHandle](../interfaces/VGridHandle.md).

The host element is the scrollable viewport of the grid.

## Type Parameters

### R

`R` = `number`

### C

`C` = `number`

## Implements

- `OnInit`
- [`VGridHandle`](../interfaces/VGridHandle.md)

## Accessors

### verticalScrollOffset

#### Get Signature

> **get** **verticalScrollOffset**(): `number`

Defined in: [src/angular/VGrid.ts:608](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L608)

Get current scrollTop.

##### Returns

`number`

Get current scrollTop.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`verticalScrollOffset`](../interfaces/VGridHandle.md#verticalscrolloffset)

***

### horizontalScrollOffset

#### Get Signature

> **get** **horizontalScrollOffset**(): `number`

Defined in: [src/angular/VGrid.ts:611](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L611)

Get current scrollLeft. Always positive even in RTL.

##### Returns

`number`

Get current scrollLeft. Always positive even in RTL.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`horizontalScrollOffset`](../interfaces/VGridHandle.md#horizontalscrolloffset)

***

### scrollHeight

#### Get Signature

> **get** **scrollHeight**(): `number`

Defined in: [src/angular/VGrid.ts:614](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L614)

Get current scrollHeight.

##### Returns

`number`

Get current scrollHeight.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`scrollHeight`](../interfaces/VGridHandle.md#scrollheight)

***

### scrollWidth

#### Get Signature

> **get** **scrollWidth**(): `number`

Defined in: [src/angular/VGrid.ts:617](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L617)

Get current scrollWidth.

##### Returns

`number`

Get current scrollWidth.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`scrollWidth`](../interfaces/VGridHandle.md#scrollwidth)

***

### viewportHeight

#### Get Signature

> **get** **viewportHeight**(): `number`

Defined in: [src/angular/VGrid.ts:620](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L620)

Get current clientHeight.

##### Returns

`number`

Get current clientHeight.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`viewportHeight`](../interfaces/VGridHandle.md#viewportheight)

***

### viewportWidth

#### Get Signature

> **get** **viewportWidth**(): `number`

Defined in: [src/angular/VGrid.ts:623](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L623)

Get current clientWidth.

##### Returns

`number`

Get current clientWidth.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`viewportWidth`](../interfaces/VGridHandle.md#viewportwidth)

## Constructors

### Constructor

> **new VGrid**\<`R`, `C`\>(): `VGrid`\<`R`, `C`\>

Defined in: [src/angular/VGrid.ts:502](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L502)

#### Returns

`VGrid`\<`R`, `C`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/VGrid.ts:550](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L550)

A callback method that is invoked immediately after the
default change detector has checked the directive's
data-bound properties for the first time,
and before any of the view or content children have been checked.
It is invoked only once when the directive is instantiated.

#### Returns

`void`

#### Implementation of

`OnInit.ngOnInit`

***

### findRowIndex()

> **findRowIndex**(`offset`): `number`

Defined in: [src/angular/VGrid.ts:626](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L626)

Find nearest row index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the top of the scroll container

#### Returns

`number`

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`findRowIndex`](../interfaces/VGridHandle.md#findrowindex)

***

### findColIndex()

> **findColIndex**(`offset`): `number`

Defined in: [src/angular/VGrid.ts:629](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L629)

Find nearest column index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`findColIndex`](../interfaces/VGridHandle.md#findcolindex)

***

### getRowOffset()

> **getRowOffset**(`index`): `number`

Defined in: [src/angular/VGrid.ts:632](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L632)

Get offset of the row from the top.

#### Parameters

##### index

`number`

index of row

#### Returns

`number`

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`getRowOffset`](../interfaces/VGridHandle.md#getrowoffset)

***

### getColOffset()

> **getColOffset**(`index`): `number`

Defined in: [src/angular/VGrid.ts:635](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L635)

Get offset of the column from the start.

#### Parameters

##### index

`number`

index of column

#### Returns

`number`

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`getColOffset`](../interfaces/VGridHandle.md#getcoloffset)

***

### getRowSize()

> **getRowSize**(`index`): `number`

Defined in: [src/angular/VGrid.ts:638](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L638)

Get size of the row.

#### Parameters

##### index

`number`

index of row

#### Returns

`number`

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`getRowSize`](../interfaces/VGridHandle.md#getrowsize)

***

### getColSize()

> **getColSize**(`index`): `number`

Defined in: [src/angular/VGrid.ts:641](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L641)

Get size of the column.

#### Parameters

##### index

`number`

index of column

#### Returns

`number`

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`getColSize`](../interfaces/VGridHandle.md#getcolsize)

***

### scrollToIndex()

> **scrollToIndex**(`opts`): `void`

Defined in: [src/angular/VGrid.ts:644](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L644)

Scroll to the cell specified by the indexes. The cell is not hidden behind the rows and the columns sticking over it.

#### Parameters

##### opts

[`GridScrollToIndexOpts`](../../core/interfaces/GridScrollToIndexOpts.md)

the indexes of the cell and the options. See [GridScrollToIndexOpts](../../core/interfaces/GridScrollToIndexOpts.md).

#### Returns

`void`

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`scrollToIndex`](../interfaces/VGridHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/angular/VGrid.ts:655](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L655)

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

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`scrollTo`](../interfaces/VGridHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/angular/VGrid.ts:664](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L664)

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

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`scrollBy`](../interfaces/VGridHandle.md#scrollby)

## Properties

### rows

> `readonly` **rows**: `InputSignal`\<[`GridAxis`](../../core/type-aliases/GridAxis.md)\<`R`\>\>

Defined in: [src/angular/VGrid.ts:317](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L317)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> `readonly` **cols**: `InputSignal`\<[`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>\>

Defined in: [src/angular/VGrid.ts:321](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L321)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> `readonly` **rowHeight**: `InputSignal`\<[`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>\>

Defined in: [src/angular/VGrid.ts:325](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L325)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> `readonly` **colWidth**: `InputSignal`\<[`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>\>

Defined in: [src/angular/VGrid.ts:329](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L329)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows

> `readonly` **headerRows**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:336](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L336)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows

> `readonly` **sectionRows**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:342](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L342)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows

> `readonly` **footerRows**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:349](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L349)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols

> `readonly` **headerCols**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:356](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L356)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols

> `readonly` **footerCols**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:363](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L363)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans

> `readonly` **spans**: `InputSignal`\<readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:369](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L369)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly [`GridCell`](../../core/interfaces/GridCell.md)[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:373](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L373)

List of cells that should be always mounted, even when off screen.

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:378](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L378)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap

> `readonly` **gap**: `InputSignal`\<`number`\>

Defined in: [src/angular/VGrid.ts:383](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L383)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort

> `readonly` **ariaSort**: `InputSignal`\<[`GridCell`](../../core/interfaces/GridCell.md) & `object` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:387](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L387)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

***

### verticalScrolled

> `readonly` **verticalScrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VGrid.ts:394](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L394)

Emitted whenever the vertical scroll offset changes. The value is current scrollTop.

***

### horizontalScrolled

> `readonly` **horizontalScrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VGrid.ts:398](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L398)

Emitted whenever the horizontal scroll offset changes. The value is current scrollLeft, which is always positive even in RTL.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VGrid.ts:402](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/angular/VGrid.ts#L402)

Emitted when scrolling stops.
