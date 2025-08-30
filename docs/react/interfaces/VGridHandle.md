[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:107](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L107)

Methods of [VGrid](../variables/experimental_VGrid.md).

## Methods

### getItemOffset()

> **getItemOffset**(`indexX`, `indexY`): \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:145](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L145)

Get item offset from start.

#### Parameters

##### indexX

`number`

horizontal index of item

##### indexY

`number`

vertical of item

#### Returns

\[`number`, `number`\]

***

### getItemSize()

> **getItemSize**(`indexX`, `indexY`): \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:151](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L151)

Get item size.

#### Parameters

##### indexX

`number`

horizontal index of item

##### indexY

`number`

vertical of item

#### Returns

\[`number`, `number`\]

***

### scrollToIndex()

> **scrollToIndex**(`indexX`, `indexY`): `void`

Defined in: [src/react/VGrid.tsx:157](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L157)

Scroll to the item specified by index.

#### Parameters

##### indexX

`number`

horizontal index of item

##### indexY

`number`

vertical index of item

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`offsetX`, `offsetY`): `void`

Defined in: [src/react/VGrid.tsx:163](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L163)

Scroll to the given offset.

#### Parameters

##### offsetX

`number`

offset from left

##### offsetY

`number`

offset from top

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offsetX`, `offsetY`): `void`

Defined in: [src/react/VGrid.tsx:169](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L169)

Scroll by the given offset.

#### Parameters

##### offsetX

`number`

horizontal offset from current position

##### offsetY

`number`

vertical offset from current position

#### Returns

`void`

## Properties

### scrollTop

> `readonly` **scrollTop**: `number`

Defined in: [src/react/VGrid.tsx:111](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L111)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:115](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L115)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:119](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L119)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:123](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L123)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:127](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L127)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:131](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L131)

Get current offsetWidth.

***

### findStartIndex()

> **findStartIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:135](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L135)

Find the start index of visible range of items.

#### Returns

\[`number`, `number`\]

***

### findEndIndex()

> **findEndIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:139](https://github.com/inokawa/virtua/blob/6ace69a73fb00a1c5dfd30a8b96e49ce7660d8e0/src/react/VGrid.tsx#L139)

Find the end index of visible range of items.

#### Returns

\[`number`, `number`\]
