[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:105](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L105)

Methods of [VGrid](../functions/experimental_VGrid.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`indexX`, `indexY`): `void`

Defined in: [src/react/VGrid.tsx:135](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L135)

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

Defined in: [src/react/VGrid.tsx:141](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L141)

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

Defined in: [src/react/VGrid.tsx:147](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L147)

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

Defined in: [src/react/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L109)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:113](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L113)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:117](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L117)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:121](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L121)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:125](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L125)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:129](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/react/VGrid.tsx#L129)

Get current offsetWidth.
