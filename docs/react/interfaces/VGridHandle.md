[**API**](../../API.md)

***

# Interface: VGridHandle

Defined in: [src/react/VGrid.tsx:105](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L105)

Methods of [VGrid](../functions/experimental_VGrid.md).

## Methods

### getItemOffset()

> **getItemOffset**(`indexX`, `indexY`): \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:143](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L143)

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

Defined in: [src/react/VGrid.tsx:149](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L149)

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

Defined in: [src/react/VGrid.tsx:155](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L155)

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

Defined in: [src/react/VGrid.tsx:161](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L161)

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

Defined in: [src/react/VGrid.tsx:167](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L167)

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

Defined in: [src/react/VGrid.tsx:109](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L109)

Get current scrollTop.

***

### scrollLeft

> `readonly` **scrollLeft**: `number`

Defined in: [src/react/VGrid.tsx:113](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L113)

Get current scrollLeft.

***

### scrollHeight

> `readonly` **scrollHeight**: `number`

Defined in: [src/react/VGrid.tsx:117](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L117)

Get current scrollHeight.

***

### scrollWidth

> `readonly` **scrollWidth**: `number`

Defined in: [src/react/VGrid.tsx:121](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L121)

Get current scrollWidth.

***

### viewportHeight

> `readonly` **viewportHeight**: `number`

Defined in: [src/react/VGrid.tsx:125](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L125)

Get current offsetHeight.

***

### viewportWidth

> `readonly` **viewportWidth**: `number`

Defined in: [src/react/VGrid.tsx:129](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L129)

Get current offsetWidth.

***

### findStartIndex()

> **findStartIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:133](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L133)

Find the start index of visible range of items.

#### Returns

\[`number`, `number`\]

***

### findEndIndex()

> **findEndIndex**: () => \[`number`, `number`\]

Defined in: [src/react/VGrid.tsx:137](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/react/VGrid.tsx#L137)

Find the end index of visible range of items.

#### Returns

\[`number`, `number`\]
