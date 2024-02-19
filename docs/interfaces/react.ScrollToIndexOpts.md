# Interface: ScrollToIndexOpts

[react](../modules/react.md).ScrollToIndexOpts

## Table of contents

### Properties

- [align](react.ScrollToIndexOpts.md#align)
- [smooth](react.ScrollToIndexOpts.md#smooth)

## Properties

### align

• `Optional` **align**: [`ScrollToIndexAlign`](../modules/react.md#scrolltoindexalign)

Alignment of item.

- `start`(default): Align the item to the start of the list.
- `center`: Align the item to the center of the list.
- `end`: Align the item to the end of the list.
- `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

#### Defined in

[src/core/types.ts:27](https://github.com/inokawa/virtua/blob/9bad093d/src/core/types.ts#L27)

___

### smooth

• `Optional` **smooth**: `boolean`

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

#### Defined in

[src/core/types.ts:33](https://github.com/inokawa/virtua/blob/9bad093d/src/core/types.ts#L33)
