[**API**](../../API.md)

***

# Interface: GridScrollToIndexOpts

Defined in: [src/core/scroll-to.ts:39](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/scroll-to.ts#L39)

The cell to scroll to and the options of the scroll. The axis whose index is omitted is not scrolled.

## Properties

### rowIndex?

> `optional` **rowIndex?**: `number`

Defined in: [src/core/scroll-to.ts:43](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/scroll-to.ts#L43)

The row index of the cell.

***

### colIndex?

> `optional` **colIndex?**: `number`

Defined in: [src/core/scroll-to.ts:47](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/scroll-to.ts#L47)

The column index of the cell.

***

### rowAlign?

> `optional` **rowAlign?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:52](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/scroll-to.ts#L52)

Alignment of the cell in the viewport, excluding the rows sticking over it. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### colAlign?

> `optional` **colAlign?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:57](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/core/scroll-to.ts#L57)

Alignment of the cell in the viewport, excluding the columns sticking over it. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```
