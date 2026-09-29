[**API**](../../API.md)

***

# Type Alias: ScrollToIndexAlign

> **ScrollToIndexAlign** = `"start"` \| `"center"` \| `"end"` \| `"nearest"`

Defined in: [src/core/scroll-to.ts:15](https://github.com/inokawa/virtua/blob/d1123ca925d85826d3e17bb8ef4c8c85282b1d8e/src/core/scroll-to.ts#L15)

Alignment of item in the viewport.

- `start`: Align the item to the start.
- `center`: Align the item to the center.
- `end`: Align the item to the end.
- `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
