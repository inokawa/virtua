[**API**](../../API.md)

***

# Interface: ScrollToIndexOpts

Defined in: [src/core/scroll-to.ts:17](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/core/scroll-to.ts#L17)

## Properties

### align?

> `optional` **align?**: [`ScrollToIndexAlign`](../../react/type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/scroll-to.ts:22](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/core/scroll-to.ts#L22)

Alignment of item in the viewport. See [ScrollToIndexAlign](../../react/type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### smooth?

> `optional` **smooth?**: `boolean`

Defined in: [src/core/scroll-to.ts:28](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/core/scroll-to.ts#L28)

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

***

### offset?

> `optional` **offset?**: `number`

Defined in: [src/core/scroll-to.ts:33](https://github.com/inokawa/virtua/blob/53a86201788dd26097bd4fcf48f3a759950cb78c/src/core/scroll-to.ts#L33)

Additional offset from the scrolled position.

#### Default Value

```ts
0
```
