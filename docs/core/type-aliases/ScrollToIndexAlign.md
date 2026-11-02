[**API**](../../API.md)

***

# Type Alias: ScrollToIndexAlign

> **ScrollToIndexAlign** = `"start"` \| `"center"` \| `"end"` \| `"nearest"`

Defined in: [src/core/driver.ts:37](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/core/driver.ts#L37)

Alignment of item in the viewport.

- `start`: Align the item to the start.
- `center`: Align the item to the center.
- `end`: Align the item to the end.
- `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
