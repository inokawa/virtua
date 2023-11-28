# Interface: ScrollToIndexOpts

## Table of contents

### Properties

- [align](ScrollToIndexOpts.md#align)
- [smooth](ScrollToIndexOpts.md#smooth)

## Properties

### align

• `Optional` **align**: [`ScrollToIndexAlign`](../API.md#scrolltoindexalign)

Alignment of item.

- `start`(default): Align the item to the start of the list.
- `center`: Align the item to the center of the list.
- `end`: Align the item to the end of the list.
- `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

#### Defined in

[src/core/types.ts:36](https://github.com/inokawa/virtua/blob/b8f459ef/src/core/types.ts#L36)

___

### smooth

• `Optional` **smooth**: `boolean`

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

#### Defined in

[src/core/types.ts:42](https://github.com/inokawa/virtua/blob/b8f459ef/src/core/types.ts#L42)
