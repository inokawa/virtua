[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:102](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L102)

Methods of [VGrid](../functions/experimental_VGrid.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`indexX`, `indexY`): `void`

Defined in: [src/react/VGrid.tsx:132](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L132)

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

Defined in: [src/react/VGrid.tsx:138](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L138)

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

Defined in: [src/react/VGrid.tsx:144](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L144)

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

Defined in: [src/react/VGrid.tsx:106](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L106)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:110](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L110)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:114](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L114)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:118](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L118)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:122](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L122)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:126](https://github.com/inokawa/virtua/blob/6f0a2cc73821555ca70fe196669f946c5e86c72d/src/react/VGrid.tsx#L126)

Get current offsetWidth.
