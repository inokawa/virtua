[**API**](../../API.md)

***

# Interface: ScrollToIndexOpts

Defined in: [src/core/driver.ts:39](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/core/driver.ts#L39)

## Properties

### align?

> `optional` **align?**: [`ScrollToIndexAlign`](../type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/driver.ts:44](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/core/driver.ts#L44)

Alignment of item in the viewport. See [ScrollToIndexAlign](../type-aliases/ScrollToIndexAlign.md) for the values.

#### Default Value

```ts
"start"
```

***

### smooth?

> `optional` **smooth?**: `boolean`

Defined in: [src/core/driver.ts:50](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/core/driver.ts#L50)

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

***

### offset?

> `optional` **offset?**: `number`

Defined in: [src/core/driver.ts:55](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/core/driver.ts#L55)

Additional offset from the scrolled position.

#### Default Value

```ts
0
```
