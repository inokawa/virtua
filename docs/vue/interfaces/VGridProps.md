[**API**](../../API.md)

***

# Interface: VGridProps\<R, C\>

Defined in: [src/vue/VGrid.tsx:49](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L49)

Props of [VGrid](../variables/VGrid.md).

## Extends

- `PublicProps`

## Type Parameters

### R

`R` = `number`

### C

`C` = `number`

## Properties

### rows

> **rows**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`R`\>

Defined in: [src/vue/VGrid.tsx:53](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L53)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> **cols**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>

Defined in: [src/vue/VGrid.tsx:57](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L57)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> **rowHeight**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>

Defined in: [src/vue/VGrid.tsx:61](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L61)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> **colWidth**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>

Defined in: [src/vue/VGrid.tsx:65](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L65)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows?

> `optional` **headerRows?**: `number`

Defined in: [src/vue/VGrid.tsx:72](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L72)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows?

> `optional` **sectionRows?**: readonly `number`[]

Defined in: [src/vue/VGrid.tsx:78](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L78)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows?

> `optional` **footerRows?**: `number`

Defined in: [src/vue/VGrid.tsx:85](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L85)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols?

> `optional` **headerCols?**: `number`

Defined in: [src/vue/VGrid.tsx:92](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L92)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols?

> `optional` **footerCols?**: `number`

Defined in: [src/vue/VGrid.tsx:99](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L99)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans?

> `optional` **spans?**: readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[]

Defined in: [src/vue/VGrid.tsx:105](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L105)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted?

> `optional` **keepMounted?**: readonly [`GridCell`](../../core/interfaces/GridCell.md)[]

Defined in: [src/vue/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L109)

List of cells that should be always mounted, even when off screen.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/vue/VGrid.tsx:114](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L114)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/vue/VGrid.tsx:119](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L119)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort?

> `optional` **ariaSort?**: [`GridCell`](../../core/interfaces/GridCell.md) & `object`

Defined in: [src/vue/VGrid.tsx:123](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L123)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

#### Type Declaration

##### order

> **order**: `"ascending"` \| `"descending"` \| `"other"`

***

### onVerticalScroll?

> `optional` **onVerticalScroll?**: (`offset`) => `void`

Defined in: [src/vue/VGrid.tsx:128](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L128)

Callback invoked whenever the vertical scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop.

#### Returns

`void`

***

### onHorizontalScroll?

> `optional` **onHorizontalScroll?**: (`offset`) => `void`

Defined in: [src/vue/VGrid.tsx:133](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L133)

Callback invoked whenever the horizontal scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollLeft. Always positive even in RTL.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/vue/VGrid.tsx:137](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L137)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/vue/VGrid.tsx:141](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VGrid.tsx#L141)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

***

### key?

> `optional` **key?**: `PropertyKey`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1213

#### Inherited from

`PublicProps.key`

***

### ref?

> `optional` **ref?**: `VNodeRef`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1214

#### Inherited from

`PublicProps.ref`

***

### ref\_for?

> `optional` **ref\_for?**: `boolean`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1215

#### Inherited from

`PublicProps.ref_for`

***

### ref\_key?

> `optional` **ref\_key?**: `string`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1216

#### Inherited from

`PublicProps.ref_key`

***

### onVnodeBeforeMount?

> `optional` **onVnodeBeforeMount?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1217

#### Inherited from

`PublicProps.onVnodeBeforeMount`

***

### onVnodeMounted?

> `optional` **onVnodeMounted?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1218

#### Inherited from

`PublicProps.onVnodeMounted`

***

### onVnodeBeforeUpdate?

> `optional` **onVnodeBeforeUpdate?**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1219

#### Inherited from

`PublicProps.onVnodeBeforeUpdate`

***

### onVnodeUpdated?

> `optional` **onVnodeUpdated?**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1220

#### Inherited from

`PublicProps.onVnodeUpdated`

***

### onVnodeBeforeUnmount?

> `optional` **onVnodeBeforeUnmount?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1221

#### Inherited from

`PublicProps.onVnodeBeforeUnmount`

***

### onVnodeUnmounted?

> `optional` **onVnodeUnmounted?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1222

#### Inherited from

`PublicProps.onVnodeUnmounted`

***

### class?

> `optional` **class?**: `unknown`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1401

#### Inherited from

`PublicProps.class`

***

### style?

> `optional` **style?**: `unknown`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1402

#### Inherited from

`PublicProps.style`
