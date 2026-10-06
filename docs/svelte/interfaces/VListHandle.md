[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/svelte/VList.type.ts:34](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/VList.type.ts#L34)

Methods of [VList](../type-aliases/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/svelte/Virtualizer.type.ts:120](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L120)

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

Defined in: [src/svelte/Virtualizer.type.ts:125](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L125)

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

Defined in: [src/svelte/Virtualizer.type.ts:130](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L130)

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

Defined in: [src/svelte/Virtualizer.type.ts:136](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L136)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../core/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/svelte/Virtualizer.type.ts:141](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L141)

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

Defined in: [src/svelte/Virtualizer.type.ts:146](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L146)

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

### getCache

> **getCache**: () => [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/Virtualizer.type.ts:103](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L103)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getCache`](VirtualizerHandle.md#getcache)

***

### getScrollOffset

> **getScrollOffset**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:107](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L107)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollOffset`](VirtualizerHandle.md#getscrolloffset)

***

### getScrollSize

> **getScrollSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:111](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L111)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getScrollSize`](VirtualizerHandle.md#getscrollsize)

***

### getViewportSize

> **getViewportSize**: () => `number`

Defined in: [src/svelte/Virtualizer.type.ts:115](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/svelte/Virtualizer.type.ts#L115)

Get current clientHeight, or clientWidth if horizontal: true.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getViewportSize`](VirtualizerHandle.md#getviewportsize)
