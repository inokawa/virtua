[**API**](../../API.md) • **Docs**

***

# Interface: VListHandle

Methods of [VList](../functions/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

#### Defined in

[src/react/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L64)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

#### Defined in

[src/react/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L69)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

• **index**: `number`

index of item

• **opts?**: [`ScrollToIndexOpts`](ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/react/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L75)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

• **offset**: `number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

#### Defined in

[src/react/Virtualizer.tsx:80](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L80)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

• **offset**: `number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

#### Defined in

[src/react/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L85)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

#### Defined in

[src/react/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L39)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/react/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L43)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

#### Defined in

[src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L47)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

#### Defined in

[src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L51)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

#### Defined in

[src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L55)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)

#### Defined in

[src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/react/Virtualizer.tsx#L59)
