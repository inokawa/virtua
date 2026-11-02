[**API**](../../API.md)

***

# Class: VGrid\<R, C\>

Defined in: [src/angular/VGrid.ts:311](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L311)

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

Defined in: [src/angular/VGrid.ts:642](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L642)

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

Defined in: [src/angular/VGrid.ts:645](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L645)

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

Defined in: [src/angular/VGrid.ts:648](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L648)

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

Defined in: [src/angular/VGrid.ts:651](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L651)

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

Defined in: [src/angular/VGrid.ts:654](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L654)

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

Defined in: [src/angular/VGrid.ts:657](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L657)

Get current clientWidth.

##### Returns

`number`

Get current clientWidth.

#### Implementation of

[`VGridHandle`](../interfaces/VGridHandle.md).[`viewportWidth`](../interfaces/VGridHandle.md#viewportwidth)

## Constructors

### Constructor

> **new VGrid**\<`R`, `C`\>(): `VGrid`\<`R`, `C`\>

Defined in: [src/angular/VGrid.ts:516](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L516)

#### Returns

`VGrid`\<`R`, `C`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/VGrid.ts:560](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L560)

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

Defined in: [src/angular/VGrid.ts:660](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L660)

Find nearest row index from offset, which is 0 if there are no rows.

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

Defined in: [src/angular/VGrid.ts:663](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L663)

Find nearest column index from offset, which is 0 if there are no columns.

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

Defined in: [src/angular/VGrid.ts:666](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L666)

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

Defined in: [src/angular/VGrid.ts:669](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L669)

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

Defined in: [src/angular/VGrid.ts:672](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L672)

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

Defined in: [src/angular/VGrid.ts:675](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L675)

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

Defined in: [src/angular/VGrid.ts:678](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L678)

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

Defined in: [src/angular/VGrid.ts:681](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L681)

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

Defined in: [src/angular/VGrid.ts:690](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L690)

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

Defined in: [src/angular/VGrid.ts:315](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L315)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> `readonly` **cols**: `InputSignal`\<[`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>\>

Defined in: [src/angular/VGrid.ts:319](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L319)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> `readonly` **rowHeight**: `InputSignal`\<[`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>\>

Defined in: [src/angular/VGrid.ts:323](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L323)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> `readonly` **colWidth**: `InputSignal`\<[`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>\>

Defined in: [src/angular/VGrid.ts:327](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L327)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows

> `readonly` **headerRows**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:334](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L334)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows

> `readonly` **sectionRows**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:340](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L340)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows

> `readonly` **footerRows**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:347](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L347)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols

> `readonly` **headerCols**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:354](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L354)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols

> `readonly` **footerCols**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:361](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L361)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans

> `readonly` **spans**: `InputSignal`\<readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:367](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L367)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly [`GridCell`](../../core/interfaces/GridCell.md)[] \| `undefined`\>

Defined in: [src/angular/VGrid.ts:371](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L371)

List of cells that should be always mounted, even when off screen.

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:376](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L376)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### ssrRowCount

> `readonly` **ssrRowCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:382](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L382)

A prop for SSR. If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**Set `ssrColCount` too, as a cell is mounted only when both its row and its column are.**

***

### ssrColCount

> `readonly` **ssrColCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:388](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L388)

A prop for SSR. If set, the specified amount of columns will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**Set `ssrRowCount` too, as a cell is mounted only when both its row and its column are.**

***

### gap

> `readonly` **gap**: `InputSignal`\<`number`\>

Defined in: [src/angular/VGrid.ts:393](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L393)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort

> `readonly` **ariaSort**: `InputSignal`\<[`GridCell`](../../core/interfaces/GridCell.md) & `object` \| `undefined`\>

Defined in: [src/angular/VGrid.ts:397](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L397)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

***

### verticalScrolled

> `readonly` **verticalScrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VGrid.ts:404](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L404)

Emitted whenever the vertical scroll offset changes. The value is current scrollTop.

***

### horizontalScrolled

> `readonly` **horizontalScrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VGrid.ts:408](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L408)

Emitted whenever the horizontal scroll offset changes. The value is current scrollLeft, which is always positive even in RTL.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VGrid.ts:412](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L412)

Emitted when scrolling stops.

***

### resized

> `readonly` **resized**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VGrid.ts:416](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/angular/VGrid.ts#L416)

Emitted when the size of the viewport or the items changes.
