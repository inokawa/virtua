[**API**](../../API.md)

***

# Type Alias: GridSize\<T\>

> **GridSize**\<`T`\> = [`GridTrackSize`](GridTrackSize.md) \| `GridSizeKey`\<`T`\>

Defined in: [src/core/layouts/grid.ts:37](https://github.com/inokawa/virtua/blob/aa14d9ee791ea80eb3d89c2fee927273b8a89b8c/src/core/layouts/grid.ts#L37)

The sizes of the rows or the columns in pixels.

- A number is used as is, and never measured.
- `"auto"` fits the largest rendered cell. The auto columns also share the space left in the viewport, as the columns of a table.
- A key reads the size, a number or `"auto"`, from the item of each row/column, and a missing size is `"auto"`.

The form of the size, a number, `"auto"` or a key, must not be changed after mount. To switch it, remount the grid.

## Type Parameters

### T

`T` = `number`
