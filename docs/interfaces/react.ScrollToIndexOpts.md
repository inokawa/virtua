# Interface: ScrollToIndexOpts

[react](../modules/react.md).ScrollToIndexOpts

## Table of contents

### Properties

- [align](react.ScrollToIndexOpts.md#align)
- [smooth](react.ScrollToIndexOpts.md#smooth)
- [offset](react.ScrollToIndexOpts.md#offset)

## Properties

### align

• `Optional` **align**: [`ScrollToIndexAlign`](../modules/react.md#scrolltoindexalign)

Alignment of item.

- `start`: Align the item to the start of the list.
- `center`: Align the item to the center of the list.
- `end`: Align the item to the end of the list.
- `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

**`Default Value`**

```ts
"start"
```

#### Defined in

[src/core/types.ts:29](https://github.com/inokawa/virtua/blob/b44a9200/src/core/types.ts#L29)

___

### smooth

• `Optional` **smooth**: `boolean`

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

#### Defined in

[src/core/types.ts:35](https://github.com/inokawa/virtua/blob/b44a9200/src/core/types.ts#L35)

___

### offset

• `Optional` **offset**: `number`

Additional offset from the scrolled position.

**`Default Value`**

```ts
0
```

#### Defined in

[src/core/types.ts:40](https://github.com/inokawa/virtua/blob/b44a9200/src/core/types.ts#L40)
