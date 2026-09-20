[**API**](../../API.md)

***

# Interface: ScrollToIndexOpts

Defined in: [src/core/scroll-to.ts:16](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L16)

## Properties

### align?

> `optional` **align?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:21](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L21)

Alignment of item in the viewport. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### smooth?

> `optional` **smooth?**: `boolean`

Defined in: [src/core/scroll-to.ts:27](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L27)

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

***

### offset?

> `optional` **offset?**: `number`

Defined in: [src/core/scroll-to.ts:32](https://github.com/inokawa/virtua/blob/9f196281641a5d909a4821151d7b15da70842c65/src/core/scroll-to.ts#L32)

Additional offset from the scrolled position.

#### Default Value

```ts
0
```
