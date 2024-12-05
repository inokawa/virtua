[**API**](../../API.md)

***

# Interface: VGridHandle

Methods of [VGrid](../functions/experimental_VGrid.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`indexX`, `indexY`): `void`

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

#### Defined in

[src/react/VGrid.tsx:132](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L132)

***

### scrollTo()

> **scrollTo**(`offsetX`, `offsetY`): `void`

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

#### Defined in

[src/react/VGrid.tsx:138](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L138)

***

### scrollBy()

> **scrollBy**(`offsetX`, `offsetY`): `void`

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

#### Defined in

[src/react/VGrid.tsx:144](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L144)

## Properties

### scrollTop

> `readonly` **scrollTop**: `number`

Get current scrollTop.

#### Defined in

[src/react/VGrid.tsx:106](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L106)

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Get current scrollLeft.

#### Defined in

[src/react/VGrid.tsx:110](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L110)

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Get current scrollHeight.

#### Defined in

[src/react/VGrid.tsx:114](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L114)

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Get current scrollWidth.

#### Defined in

[src/react/VGrid.tsx:118](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L118)

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Get current offsetHeight.

#### Defined in

[src/react/VGrid.tsx:122](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L122)

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Get current offsetWidth.

#### Defined in

[src/react/VGrid.tsx:126](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/react/VGrid.tsx#L126)
