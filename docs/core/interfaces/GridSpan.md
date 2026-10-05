[**API**](../../API.md)

***

# Interface: GridSpan

Defined in: [src/core/grid.ts:24](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/core/grid.ts#L24)

A cell merged over multiple rows and/or columns in the grid.

[GridCell.rowIndex](GridCell.md#rowindex) and [GridCell.colIndex](GridCell.md#colindex) point to the origin cell (top row, start column) of the merged area.

## Extends

- [`GridCell`](GridCell.md)

## Properties

### rowSpan?

> `optional` **rowSpan?**: `number`

Defined in: [src/core/grid.ts:29](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/core/grid.ts#L29)

The number of rows the cell spans.

#### Default Value

```ts
1
```

***

### colSpan?

> `optional` **colSpan?**: `number`

Defined in: [src/core/grid.ts:34](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/core/grid.ts#L34)

The number of columns the cell spans.

#### Default Value

```ts
1
```

***

### rowIndex

> **rowIndex**: `number`

Defined in: [src/core/grid.ts:12](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/core/grid.ts#L12)

The row index of the cell.

#### Inherited from

[`GridCell`](GridCell.md).[`rowIndex`](GridCell.md#rowindex)

***

### colIndex

> **colIndex**: `number`

Defined in: [src/core/grid.ts:16](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/core/grid.ts#L16)

The column index of the cell.

#### Inherited from

[`GridCell`](GridCell.md).[`colIndex`](GridCell.md#colindex)
