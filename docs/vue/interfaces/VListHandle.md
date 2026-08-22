[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/vue/VList.tsx:18](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/VList.tsx#L18)

Methods of [VList](../variables/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/Virtualizer.tsx:141](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L141)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findItemIndex`](VirtualizerHandle.md#finditemindex)

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:146](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L146)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:151](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L151)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/vue/Virtualizer.tsx:157](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L157)

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

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:162](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L162)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:167](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L167)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L124)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L128)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L132)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/e93e426489b1c24a6cec4a0c3c999edcebe352fd/src/vue/Virtualizer.tsx#L136)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)
