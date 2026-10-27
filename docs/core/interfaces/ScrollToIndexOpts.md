[**API**](../../API.md)

***

# Interface: ScrollToIndexOpts

Defined in: [src/core/scroll-to.ts:18](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L18)

## Properties

### align?

> `optional` **align?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:23](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L23)

Alignment of item in the viewport. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### smooth?

> `optional` **smooth?**: `boolean`

Defined in: [src/core/scroll-to.ts:29](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L29)

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

***

### offset?

> `optional` **offset?**: `number`

Defined in: [src/core/scroll-to.ts:34](https://github.com/inokawa/virtua/blob/33a84f7f4040b7ca71a6e3142021833e1b90de99/src/core/scroll-to.ts#L34)

Additional offset from the scrolled position.

#### Default Value

```ts
0
```
