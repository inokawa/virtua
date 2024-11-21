[**API**](../../API.md) • **Docs**

***

# Interface: VGridHandle

Methods of [VGrid](../functions/experimental_VGrid.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`indexX`, `indexY`): `void`

Scroll to the item specified by index.

#### Parameters

• **indexX**: `number`

horizontal index of item

• **indexY**: `number`

vertical index of item

#### Returns

`void`

#### Defined in

[src/react/VGrid.tsx:131](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L131)

***

### scrollTo()

> **scrollTo**(`offsetX`, `offsetY`): `void`

Scroll to the given offset.

#### Parameters

• **offsetX**: `number`

offset from left

• **offsetY**: `number`

offset from top

#### Returns

`void`

#### Defined in

[src/react/VGrid.tsx:137](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L137)

***

### scrollBy()

> **scrollBy**(`offsetX`, `offsetY`): `void`

Scroll by the given offset.

#### Parameters

• **offsetX**: `number`

horizontal offset from current position

• **offsetY**: `number`

vertical offset from current position

#### Returns

`void`

#### Defined in

[src/react/VGrid.tsx:143](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L143)

## Properties

### scrollTop

> `readonly` **scrollTop**: `number`

Get current scrollTop.

#### Defined in

[src/react/VGrid.tsx:105](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L105)

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Get current scrollLeft.

#### Defined in

[src/react/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L109)

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Get current scrollHeight.

#### Defined in

[src/react/VGrid.tsx:113](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L113)

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Get current scrollWidth.

#### Defined in

[src/react/VGrid.tsx:117](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L117)

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Get current offsetHeight.

#### Defined in

[src/react/VGrid.tsx:121](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L121)

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Get current offsetWidth.

#### Defined in

[src/react/VGrid.tsx:125](https://github.com/inokawa/virtua/blob/32f9f6b9c3b95459050bec74dc68e5e83f575685/src/react/VGrid.tsx#L125)
