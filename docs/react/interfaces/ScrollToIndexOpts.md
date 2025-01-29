[**API**](../../API.md)

***

# Interface: ScrollToIndexOpts

## Properties

### align?

> `optional` **align**: [`ScrollToIndexAlign`](../type-aliases/ScrollToIndexAlign.md)

Alignment of item.

- `start`: Align the item to the start of the list.
- `center`: Align the item to the center of the list.
- `end`: Align the item to the end of the list.
- `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

#### Default Value

```ts
"start"
```

#### Defined in

[src/core/types.ts:32](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/core/types.ts#L32)

***

### smooth?

> `optional` **smooth**: `boolean`

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

#### Defined in

[src/core/types.ts:38](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/core/types.ts#L38)

***

### offset?

> `optional` **offset**: `number`

Additional offset from the scrolled position.

#### Default Value

```ts
0
```

#### Defined in

[src/core/types.ts:43](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/core/types.ts#L43)
