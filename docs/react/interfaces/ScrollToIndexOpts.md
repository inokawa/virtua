[**API**](../../API.md)

***

# Interface: ScrollToIndexOpts

Defined in: [src/core/types.ts:21](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/core/types.ts#L21)

## Properties

### align?

> `optional` **align**: [`ScrollToIndexAlign`](../type-aliases/ScrollToIndexAlign.md)

Defined in: [src/core/types.ts:32](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/core/types.ts#L32)

Alignment of item.

- `start`: Align the item to the start of the list.
- `center`: Align the item to the center of the list.
- `end`: Align the item to the end of the list.
- `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

#### Default Value

```ts
"start"
```

***

### smooth?

> `optional` **smooth**: `boolean`

Defined in: [src/core/types.ts:38](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/core/types.ts#L38)

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

***

### offset?

> `optional` **offset**: `number`

Defined in: [src/core/types.ts:43](https://github.com/inokawa/virtua/blob/3489326d86582a5e93a5773f522c17ad61899945/src/core/types.ts#L43)

Additional offset from the scrolled position.

#### Default Value

```ts
0
```
