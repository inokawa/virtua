[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:110](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L110)

Methods of [VGrid](../variables/experimental_VGrid.md).

## Methods

### getItemOffset()

> **getItemOffset**(`indexX`, `indexY`): \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:148](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L148)

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

Defined in: [src/react/VGrid.tsx:154](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L154)

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

### resizeCols()

> **resizeCols**(`cols`): `void`

Defined in: [src/react/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L159)

Resize individual columns.

#### Parameters

##### cols

[`VGridItemResize`](../type-aliases/VGridItemResize.md)[]

array of `[index, size]` to update column sizes

#### Returns

`void`

***

### resizeRows()

> **resizeRows**(`rows`): `void`

Defined in: [src/react/VGrid.tsx:164](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L164)

Resize individual rows.

#### Parameters

##### rows

[`VGridItemResize`](../type-aliases/VGridItemResize.md)[]

array of `[index, size]` to update row sizes

#### Returns

`void`

***

### scrollToIndex()

> **scrollToIndex**(`indexX`, `indexY`): `void`

Defined in: [src/react/VGrid.tsx:170](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L170)

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

Defined in: [src/react/VGrid.tsx:176](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L176)

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

Defined in: [src/react/VGrid.tsx:182](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L182)

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

Defined in: [src/react/VGrid.tsx:114](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L114)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:118](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L118)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:122](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L122)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:126](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L126)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:130](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L130)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:134](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L134)

Get current offsetWidth.

***

### findStartIndex()

> **findStartIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:138](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L138)

Find the start index of visible range of items.

#### Returns

\[`number`, `number`\]

***

### findEndIndex()

> **findEndIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:142](https://github.com/inokawa/virtua/blob/71c97bdad291763ca5072b4af388608178a6e6ea/src/react/VGrid.tsx#L142)

Find the end index of visible range of items.

#### Returns

\[`number`, `number`\]
