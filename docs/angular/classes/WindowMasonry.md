[**API**](../../API.md)

***

# Class: WindowMasonry\<T\>

Defined in: [src/angular/WindowMasonry.ts:112](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L112)

[VMasonry](VMasonry.md) controlled by the window scrolling. See [WindowMasonryHandle](../interfaces/WindowMasonryHandle.md).

The host element is the container of the items.

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

Defined in: [src/angular/WindowMasonry.ts:300](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L300)

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

Defined in: [src/angular/WindowMasonry.ts:303](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L303)

Get current scrollTop.

##### Returns

`number`

Get current scrollTop.

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`scrollOffset`](../interfaces/WindowMasonryHandle.md#scrolloffset)

***

### viewportSize

#### Get Signature

> **get** **viewportSize**(): `number`

Defined in: [src/angular/WindowMasonry.ts:306](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L306)

Get current clientHeight of the document.

##### Returns

`number`

Get current clientHeight of the document.

#### Implementation of

[`WindowMasonryHandle`](../interfaces/WindowMasonryHandle.md).[`viewportSize`](../interfaces/WindowMasonryHandle.md#viewportsize)

## Constructors

### Constructor

> **new WindowMasonry**\<`T`\>(): `WindowMasonry`\<`T`\>

Defined in: [src/angular/WindowMasonry.ts:233](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L233)

#### Returns

`WindowMasonry`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/WindowMasonry.ts:270](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L270)

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

Defined in: [src/angular/WindowMasonry.ts:309](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L309)

Get item offset from start.

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

Defined in: [src/angular/WindowMasonry.ts:312](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L312)

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

Defined in: [src/angular/WindowMasonry.ts:315](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L315)

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

## Properties

### data

> `readonly` **data**: `InputSignal`\<readonly `T`[]\>

Defined in: [src/angular/WindowMasonry.ts:116](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L116)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/WindowMasonry.ts:121](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L121)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### lanes

> `readonly` **lanes**: `InputSignal`\<`number`\>

Defined in: [src/angular/WindowMasonry.ts:126](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L126)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap

> `readonly` **gap**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowMasonry.ts:131](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L131)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowMasonry.ts:138](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L138)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowMasonry.ts:143](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L143)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/WindowMasonry.ts:149](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L149)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowMasonryHandle.cache](../interfaces/WindowMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowMasonry.ts:155](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L155)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with `cache` to show them on the server.**

***

### scrolled

> `readonly` **scrolled**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/WindowMasonry.ts:161](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L161)

Emitted whenever scroll offset changes.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/WindowMasonry.ts:165](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L165)

Emitted when scrolling stops.

***

### resized

> `readonly` **resized**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/WindowMasonry.ts:169](https://github.com/inokawa/virtua/blob/a222bccde53f570ca5f937d4f2e857f1fe69bb2c/src/angular/WindowMasonry.ts#L169)

Emitted when the size of the viewport or the items changes.
