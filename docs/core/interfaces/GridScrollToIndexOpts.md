[**API**](../../API.md)

***

# Interface: GridScrollToIndexOpts

Defined in: [src/core/scroll-to.ts:38](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L38)

The cell to scroll to and the options of the scroll. The axis whose index is omitted is not scrolled.

## Properties

### rowIndex?

> `optional` **rowIndex?**: `number`

Defined in: [src/core/scroll-to.ts:42](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L42)

The row index of the cell.

***

### colIndex?

> `optional` **colIndex?**: `number`

Defined in: [src/core/scroll-to.ts:46](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L46)

The column index of the cell.

***

### rowAlign?

> `optional` **rowAlign?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:51](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L51)

Alignment of the cell in the viewport, excluding the rows sticking over it. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### colAlign?

> `optional` **colAlign?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:56](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L56)

Alignment of the cell in the viewport, excluding the columns sticking over it. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```
