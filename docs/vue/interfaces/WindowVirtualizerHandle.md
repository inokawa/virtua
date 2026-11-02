[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Defined in: [src/vue/WindowVirtualizer.tsx:104](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L104)

Methods of [WindowVirtualizer](../variables/WindowVirtualizer.md).

## Methods

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/vue/WindowVirtualizer.tsx:121](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L121)

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

Defined in: [src/vue/WindowVirtualizer.tsx:126](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L126)

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

Defined in: [src/vue/WindowVirtualizer.tsx:131](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L131)

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

Defined in: [src/vue/WindowVirtualizer.tsx:137](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L137)

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

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/WindowVirtualizer.tsx:108](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L108)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:112](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L112)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/vue/WindowVirtualizer.tsx:116](https://github.com/inokawa/virtua/blob/3f6c3167db43f53d99aec3cdb031925569fe1cdd/src/vue/WindowVirtualizer.tsx#L116)

Get current clientHeight of the document, or clientWidth if horizontal: true.
