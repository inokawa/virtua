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

[src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L59)

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

[src/react/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L65)

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

[src/react/Virtualizer.tsx:70](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L70)

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

[src/react/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L75)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`cache`](VirtualizerHandle.md#cache)

#### Defined in

[src/react/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L42)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/react/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L46)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

#### Defined in

[src/react/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L50)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

#### Defined in

[src/react/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/react/Virtualizer.tsx#L54)
