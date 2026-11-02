[**API**](../../API.md)

***

# Interface: VirtualizerHandle

Defined in: [src/react/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L43)

Methods of [Virtualizer](../variables/Virtualizer.md).

## Extended by

- [`VListHandle`](VListHandle.md)

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/react/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L64)

Find nearest item index from offset, which is 0 if there are no items.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/react/Virtualizer.tsx:69](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L69)

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

Defined in: [src/react/Virtualizer.tsx:74](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L74)

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

Defined in: [src/react/Virtualizer.tsx:80](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L80)

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

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/react/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L85)

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

Defined in: [src/react/Virtualizer.tsx:90](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L90)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/react/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L47)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/react/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L51)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/react/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L55)

Get current scrollHeight, or scrollWidth if horizontal: true.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/react/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/react/Virtualizer.tsx#L59)

Get current clientHeight, or clientWidth if horizontal: true.
