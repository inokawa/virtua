[**API**](../../API.md)

***

# Type Alias: GridAxis\<T\>

> **GridAxis**\<`T`\> = `number` \| readonly `T`[]

Defined in: [src/core/layouts/grid.ts:13](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/core/layouts/grid.ts#L13)

The rows or the columns of the grid.

- If a number is set, the grid has that many rows/columns, and the cells receive their indexes.
- If an array is set, the grid has one row/column per item, and the cells receive the items.

## Type Parameters

### T

`T` = `number`
