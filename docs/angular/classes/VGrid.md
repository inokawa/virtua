[**API**](../../API.md)

***

# Class: VGrid\<R, C\>

Defined in: [src/angular/VGrid.ts:309](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L309)

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

Defined in: [src/angular/VGrid.ts:600](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L600)

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

Defined in: [src/angular/VGrid.ts:603](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L603)

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

Defined in: [src/angular/VGrid.ts:606](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L606)

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

Defined in: [src/angular/VGrid.ts:609](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L609)

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

Defined in: [src/angular/VGrid.ts:612](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L612)

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

Defined in: [src/angular/VGrid.ts:615](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L615)

Get current clientWidth.

##### Returns

`number`

Get current clientWidth.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`viewportWidth`](../interfaces/VGridHandle.md#viewportwidth)

## Constructors

### Constructor

> **new VGrid**\<`R`, `C`\>(): `VGrid`\<`R`, `C`\>

Defined in: [src/angular/VGrid.ts:490](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L490)

#### Returns

`VGrid`\<`R`, `C`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/VGrid.ts:542](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L542)

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

Defined in: [src/angular/VGrid.ts:618](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L618)

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

Defined in: [src/angular/VGrid.ts:621](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L621)

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

Defined in: [src/angular/VGrid.ts:624](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L624)

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

Defined in: [src/angular/VGrid.ts:627](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L627)

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

Defined in: [src/angular/VGrid.ts:630](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L630)

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

Defined in: [src/angular/VGrid.ts:633](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L633)

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

Defined in: [src/angular/VGrid.ts:636](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L636)

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

Defined in: [src/angular/VGrid.ts:647](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L647)

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

Defined in: [src/angular/VGrid.ts:656](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L656)

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

Defined in: [src/angular/VGrid.ts:313](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L313)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> `readonly` **cols**: `InputSignal`\<[`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>\>

Defined in: [src/angular/VGrid.ts:317](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L317)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> `readonly` **rowHeight**: `InputSignal`\<[`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>\>

Defined in: [src/angular/VGrid.ts:321](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L321)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> `readonly` **colWidth**: `InputSignal`\<[`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>\>

Defined in: [src/angular/VGrid.ts:325](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L325)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows

> `readonly` **headerRows**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:332](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L332)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows

> `readonly` **sectionRows**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:338](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L338)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows

> `readonly` **footerRows**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:345](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L345)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols

> `readonly` **headerCols**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:352](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L352)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols

> `readonly` **footerCols**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:359](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L359)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans

> `readonly` **spans**: `InputSignal`\<readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:365](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L365)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly [`GridCell`](../../core/interfaces/GridCell.md)[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:369](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L369)

List of cells that should be always mounted, even when off screen.

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:374](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L374)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap

> `readonly` **gap**: `InputSignal`\<`number`\>

Defined in: [src/angular/VGrid.ts:379](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L379)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort

> `readonly` **ariaSort**: `InputSignal`\<[`GridCell`](../../core/interfaces/GridCell.md) & `object` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:383](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L383)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

***

### verticalScrolled

> `readonly` **verticalScrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VGrid.ts:390](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L390)

Emitted whenever the vertical scroll offset changes. The value is current scrollTop.

***

### horizontalScrolled

> `readonly` **horizontalScrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VGrid.ts:394](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L394)

Emitted whenever the horizontal scroll offset changes. The value is current scrollLeft, which is always positive even in RTL.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VGrid.ts:398](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/angular/VGrid.ts#L398)

Emitted when scrolling stops.
