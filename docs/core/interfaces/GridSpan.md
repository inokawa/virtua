[**API**](../../API.md)

***

# Interface: GridSpan

Defined in: [src/core/grid.ts:34](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/grid.ts#L34)

A cell merged over multiple rows and/or columns in the grid.

[GridCell.rowIndex](GridCell.md#rowindex) and [GridCell.colIndex](GridCell.md#colindex) point to the origin cell (top row, start column) of the merged area.

## Extends

- [`GridCell`](GridCell.md)

## Properties

### rowSpan?

> `optional` **rowSpan?**: `number`

Defined in: [src/core/grid.ts:39](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/grid.ts#L39)

The number of rows the cell spans.

#### Default Value

```ts
1
```

***

### colSpan?

> `optional` **colSpan?**: `number`

Defined in: [src/core/grid.ts:44](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/grid.ts#L44)

The number of columns the cell spans.

#### Default Value

```ts
1
```

***

### rowIndex

> **rowIndex**: `number`

Defined in: [src/core/grid.ts:22](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/grid.ts#L22)

The row index of the cell.

#### Inherited from

[`GridCell`](GridCell.md).[`rowIndex`](GridCell.md#rowindex)

***

### colIndex

> **colIndex**: `number`

Defined in: [src/core/grid.ts:26](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/grid.ts#L26)

The column index of the cell.

#### Inherited from

[`GridCell`](GridCell.md).[`colIndex`](GridCell.md#colindex)
