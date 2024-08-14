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

[src/react/VGrid.tsx:134](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L134)

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

[src/react/VGrid.tsx:140](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L140)

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

[src/react/VGrid.tsx:146](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L146)

## Properties

### scrollTop

> `readonly` **scrollTop**: `number`

Get current scrollTop.

#### Defined in

[src/react/VGrid.tsx:108](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L108)

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Get current scrollLeft.

#### Defined in

[src/react/VGrid.tsx:112](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L112)

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Get current scrollHeight.

#### Defined in

[src/react/VGrid.tsx:116](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L116)

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Get current scrollWidth.

#### Defined in

[src/react/VGrid.tsx:120](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L120)

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Get current offsetHeight.

#### Defined in

[src/react/VGrid.tsx:124](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L124)

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Get current offsetWidth.

#### Defined in

[src/react/VGrid.tsx:128](https://github.com/inokawa/virtua/blob/70149236634a031ce9b50980d45a8d922859c032/src/react/VGrid.tsx#L128)
