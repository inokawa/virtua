[**API**](../../API.md)

***

# Type Alias: VGridAxis\<T\>

> **VGridAxis**\<`T`\> = `number` \| readonly `T`[]

Defined in: [src/core/layouts/grid.ts:14](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/core/layouts/grid.ts#L14)

The rows or the columns of the grid.

- If a number is set, the grid has that many rows/columns, and the cells receive their indexes.
- If an array is set, the grid has one row/column per item, and the cells receive the items.

## Type Parameters

### T

`T` = `number`
