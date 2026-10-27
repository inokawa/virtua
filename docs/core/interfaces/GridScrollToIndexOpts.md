[**API**](../../API.md)

***

# Interface: GridScrollToIndexOpts

Defined in: [src/core/scroll-to.ts:40](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L40)

The cell to scroll to and the options of the scroll. The axis whose index is omitted is not scrolled.

## Properties

### rowIndex?

> `optional` **rowIndex?**: `number`

Defined in: [src/core/scroll-to.ts:44](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L44)

The row index of the cell.

***

### colIndex?

> `optional` **colIndex?**: `number`

Defined in: [src/core/scroll-to.ts:48](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L48)

The column index of the cell.

***

### rowAlign?

> `optional` **rowAlign?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:53](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L53)

Alignment of the cell in the viewport, excluding the rows sticking over it. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### colAlign?

> `optional` **colAlign?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:58](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L58)

Alignment of the cell in the viewport, excluding the columns sticking over it. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```
