[**API**](../../API.md)

***

# Type Alias: GridAxis\<T\>

> **GridAxis**\<`T`\> = `number` \| readonly `T`[]

Defined in: [src/core/layouts/grid.ts:13](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/layouts/grid.ts#L13)

The rows or the columns of the grid.

- If a number is set, the grid has that many rows/columns, and the cells receive their indexes.
- If an array is set, the grid has one row/column per item, and the cells receive the items.

## Type Parameters

### T

`T` = `number`
