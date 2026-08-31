[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/vue/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L120)

Methods of [Virtualizer](../variables/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/Virtualizer.tsx:141](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L141)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:146](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L146)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/vue/Virtualizer.tsx:151](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L151)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/vue/Virtualizer.tsx:157](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L157)

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

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:162](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L162)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/vue/Virtualizer.tsx:167](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L167)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L124)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/Virtualizer.tsx:128](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L128)

Get current scrollTop, or scrollLeft if horizontal: true.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L132)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/b7002d7c35b5fa4eb682193a59bc5bbee0a17049/src/vue/Virtualizer.tsx#L136)

Get current offsetHeight, or offsetWidth if horizontal: true.
