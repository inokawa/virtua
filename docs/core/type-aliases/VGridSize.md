[**API**](../../API.md)

***

# Type Alias: VGridSize\<T\>

> **VGridSize**\<`T`\> = [`VGridTrackSize`](VGridTrackSize.md) \| `VGridSizeKey`\<`T`\>

Defined in: [src/core/layouts/grid.ts:35](https://github.com/inokawa/virtua/blob/98128f6af2bcee92d634e81a236794faecf5c1dd/src/core/layouts/grid.ts#L35)

The sizes of the rows or the columns in pixels.

- A number is used as is, and never measured.
- `"auto"` fits the largest rendered cell. The auto columns also share the space left in the viewport, as the columns of a table.
- A key reads the size, a number or `"auto"`, from the item of each row/column, and a missing size is `"auto"`.

The form of the size, a number, `"auto"` or a key, must not be changed after mount. To switch it, remount the grid.

## Type Parameters

### T

`T` = `number`
