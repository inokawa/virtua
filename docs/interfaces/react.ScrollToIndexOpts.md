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

[src/core/types.ts:32](https://github.com/inokawa/virtua/blob/347eaf0ee4d42b83126888b3a0a52172043fa2e0/src/core/types.ts#L32)

___

### smooth

• `Optional` **smooth**: `boolean`

If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).

**Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**

#### Defined in

[src/core/types.ts:38](https://github.com/inokawa/virtua/blob/347eaf0ee4d42b83126888b3a0a52172043fa2e0/src/core/types.ts#L38)

___

### offset

• `Optional` **offset**: `number`

Additional offset from the scrolled position.

**`Default Value`**

```ts
0
```

#### Defined in

[src/core/types.ts:43](https://github.com/inokawa/virtua/blob/347eaf0ee4d42b83126888b3a0a52172043fa2e0/src/core/types.ts#L43)
