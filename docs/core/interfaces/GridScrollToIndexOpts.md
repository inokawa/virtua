[**API**](../../API.md)

***

# Interface: GridScrollToIndexOpts

Defined in: [src/core/driver.ts:61](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L61)

The cell to scroll to and the options of the scroll. The axis whose index is omitted is not scrolled.

## Properties

### rowIndex?

> `optional` **rowIndex?**: `number`

Defined in: [src/core/driver.ts:65](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L65)

The row index of the cell.

***

### colIndex?

> `optional` **colIndex?**: `number`

Defined in: [src/core/driver.ts:69](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L69)

The column index of the cell.

***

### rowAlign?

> `optional` **rowAlign?**: [`ScrollToIndexAlign`](../type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/driver.ts:74](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L74)

Alignment of the cell in the viewport, excluding the rows sticking over it. See [ScrollToIndexAlign](../type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### colAlign?

> `optional` **colAlign?**: [`ScrollToIndexAlign`](../type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/driver.ts:79](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L79)

Alignment of the cell in the viewport, excluding the columns sticking over it. See [ScrollToIndexAlign](../type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### rowOffset?

> `optional` **rowOffset?**: `number`

Defined in: [src/core/driver.ts:83](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L83)

Additional vertical offset from the scrolled position, or the scrollTop to scroll to if [GridScrollToIndexOpts.rowIndex](#rowindex) is omitted.

***

### colOffset?

> `optional` **colOffset?**: `number`

Defined in: [src/core/driver.ts:87](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L87)

Additional horizontal offset from the scrolled position, or the scrollLeft to scroll to if [GridScrollToIndexOpts.colIndex](#colindex) is omitted.
