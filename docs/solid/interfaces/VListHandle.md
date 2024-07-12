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

[src/solid/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/solid/Virtualizer.tsx#L55)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

• **index**: `number`

index of item

• **opts?**: [`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

#### Defined in

[src/solid/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/solid/Virtualizer.tsx#L61)

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

[src/solid/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/solid/Virtualizer.tsx#L66)

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

[src/solid/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/solid/Virtualizer.tsx#L71)

## Properties

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

#### Defined in

[src/solid/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/solid/Virtualizer.tsx#L42)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

#### Defined in

[src/solid/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/solid/Virtualizer.tsx#L46)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

#### Defined in

[src/solid/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/solid/Virtualizer.tsx#L50)
