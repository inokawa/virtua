[**API**](../../API.md)

***

# Type Alias: GridAxis\<T\>

> **GridAxis**\<`T`\> = `number` \| readonly `T`[]

Defined in: [src/core/layouts/grid.ts:15](https://github.com/inokawa/virtua/blob/6e1d827fca052a14dd7ad0e8ee61a0863827345f/src/core/layouts/grid.ts#L15)

The rows or the columns of the grid.

- If a number is set, the grid has that many rows/columns, and the cells receive their indexes.
- If an array is set, the grid has one row/column per item, and the cells receive the items.

## Type Parameters

### T

`T` = `number`
