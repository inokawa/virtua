[**API**](../../API.md)

***

# Class: WindowMasonry\<T\>

Defined in: src/angular/WindowMasonry.ts:128

Virtualized masonry component controlled by window scrolling. See [WindowMasonryHandle](../interfaces/WindowMasonryHandle.md).

The host element grows with its content. Do not give it a fixed height or scrollable overflow.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: src/angular/WindowMasonry.ts:354

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

##### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`cache`](../interfaces/WindowMasonryHandle.md#cache)

***

### scrollOffset

#### Get Signature

> **get** **scrollOffset**(): `number`

Defined in: src/angular/WindowMasonry.ts:357

Get current scrollTop of the document.

##### Returns

`number`

Get current scrollTop of the document.

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`scrollOffset`](../interfaces/WindowMasonryHandle.md#scrolloffset)

***

### scrollSize

#### Get Signature

> **get** **scrollSize**(): `number`

Defined in: src/angular/WindowMasonry.ts:360

Get the virtual masonry extent, at least the document viewport height. This does not include other document content.

##### Returns

`number`

Get the virtual masonry extent, at least the document viewport height. This does not include other document content.

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`scrollSize`](../interfaces/WindowMasonryHandle.md#scrollsize)

***

### viewportSize

#### Get Signature

> **get** **viewportSize**(): `number`

Defined in: src/angular/WindowMasonry.ts:363

Get current clientHeight of the document.

##### Returns

`number`

Get current clientHeight of the document.

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`viewportSize`](../interfaces/WindowMasonryHandle.md#viewportsize)

## Constructors

### Constructor

> **new WindowMasonry**\<`T`\>(): `WindowMasonry`\<`T`\>

Defined in: src/angular/WindowMasonry.ts:279

#### Returns

`WindowMasonry`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: src/angular/WindowMasonry.ts:316

A callback method that is invoked immediately after the
default change detector has checked the directive's
data-bound properties for the first time,
and before any of the view or content children have been checked.
It is invoked only once when the directive is instantiated.

#### Returns

`void`

#### Implementation of

`OnInit.ngOnInit`

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: src/angular/WindowMasonry.ts:366

Get item offset from the start of the masonry, excluding its document offset.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`getItemOffset`](../interfaces/WindowMasonryHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: src/angular/WindowMasonry.ts:369

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`getItemSize`](../interfaces/WindowMasonryHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: src/angular/WindowMasonry.ts:372

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

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`scrollToIndex`](../interfaces/WindowMasonryHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: src/angular/WindowMasonry.ts:375

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from the start of the document

#### Returns

`void`

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`scrollTo`](../interfaces/WindowMasonryHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: src/angular/WindowMasonry.ts:378

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`scrollBy`](../interfaces/WindowMasonryHandle.md#scrollby)

## Properties

### data

> `readonly` **data**: `InputSignal`\<readonly `T`[]\>

Defined in: src/angular/WindowMasonry.ts:132

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: src/angular/WindowMasonry.ts:137

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### lanes

> `readonly` **lanes**: `InputSignal`\<`number`\>

Defined in: src/angular/WindowMasonry.ts:142

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap

> `readonly` **gap**: `InputSignal`\<`number` \| `undefined`\>

Defined in: src/angular/WindowMasonry.ts:147

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: src/angular/WindowMasonry.ts:154

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: src/angular/WindowMasonry.ts:159

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: src/angular/WindowMasonry.ts:163

List of indexes that should be always mounted, even when off screen.

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: src/angular/WindowMasonry.ts:169

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowMasonryHandle.cache](../interfaces/WindowMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: src/angular/WindowMasonry.ts:175

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with `cache` to show them on the server.**

***

### scrolled

> `readonly` **scrolled**: `OutputEmitterRef`\<`number`\>

Defined in: src/angular/WindowMasonry.ts:180

Emitted whenever scroll offset changes. The value is current document scrollTop.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: src/angular/WindowMasonry.ts:184

Emitted when scrolling stops.

***

### resized

> `readonly` **resized**: `OutputEmitterRef`\<`void`\>

Defined in: src/angular/WindowMasonry.ts:188

Emitted when the size of the viewport or the items changes.
