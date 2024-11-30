[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Defined in

[src/solid/WindowVirtualizer.tsx:46](https://github.com/inokawa/virtua/blob/e7edf00e268ee12af9ee8e11abed3a725aa02859/src/solid/WindowVirtualizer.tsx#L46)

## Properties

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/e7edf00e268ee12af9ee8e11abed3a725aa02859/src/solid/WindowVirtualizer.tsx#L36)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/solid/WindowVirtualizer.tsx:40](https://github.com/inokawa/virtua/blob/e7edf00e268ee12af9ee8e11abed3a725aa02859/src/solid/WindowVirtualizer.tsx#L40)