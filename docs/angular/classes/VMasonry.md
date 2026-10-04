[**API**](../../API.md)

***

# Class: VMasonry\<T\>

Defined in: [src/angular/VMasonry.ts:176](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L176)

Virtualized masonry component. See [VMasonryHandle](../interfaces/VMasonryHandle.md).

The host element is the scrollable viewport of the masonry.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`VMasonryHandle`](../interfaces/VMasonryHandle.md)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/angular/VMasonry.ts:365](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L365)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

##### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`cache`](../interfaces/VMasonryHandle.md#cache)

***

### scrollOffset

#### Get Signature

> **get** **scrollOffset**(): `number`

Defined in: [src/angular/VMasonry.ts:368](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L368)

Get current scrollTop.

##### Returns

`number`

Get current scrollTop.

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`scrollOffset`](../interfaces/VMasonryHandle.md#scrolloffset)

***

### scrollSize

#### Get Signature

> **get** **scrollSize**(): `number`

Defined in: [src/angular/VMasonry.ts:371](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L371)

Get current scrollHeight.

##### Returns

`number`

Get current scrollHeight.

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`scrollSize`](../interfaces/VMasonryHandle.md#scrollsize)

***

### viewportSize

#### Get Signature

> **get** **viewportSize**(): `number`

Defined in: [src/angular/VMasonry.ts:374](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L374)

Get current clientHeight.

##### Returns

`number`

Get current clientHeight.

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`viewportSize`](../interfaces/VMasonryHandle.md#viewportsize)

## Constructors

### Constructor

> **new VMasonry**\<`T`\>(): `VMasonry`\<`T`\>

Defined in: [src/angular/VMasonry.ts:289](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L289)

#### Returns

`VMasonry`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/VMasonry.ts:329](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L329)

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

Defined in: [src/angular/VMasonry.ts:377](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L377)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`getItemOffset`](../interfaces/VMasonryHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/angular/VMasonry.ts:380](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L380)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`getItemSize`](../interfaces/VMasonryHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/angular/VMasonry.ts:383](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L383)

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

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`scrollToIndex`](../interfaces/VMasonryHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/angular/VMasonry.ts:386](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L386)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`scrollTo`](../interfaces/VMasonryHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/angular/VMasonry.ts:389](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L389)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`scrollBy`](../interfaces/VMasonryHandle.md#scrollby)

## Properties

### data

> `readonly` **data**: `InputSignal`\<readonly `T`[]\>

Defined in: [src/angular/VMasonry.ts:180](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L180)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/VMasonry.ts:185](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L185)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### lanes

> `readonly` **lanes**: `InputSignal`\<`number`\>

Defined in: [src/angular/VMasonry.ts:190](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L190)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap

> `readonly` **gap**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:195](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L195)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:202](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L202)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:207](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L207)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:213](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L213)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VMasonryHandle.cache](../interfaces/VMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### scrolled

> `readonly` **scrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VMasonry.ts:218](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L218)

Emitted whenever scroll offset changes. The value is current scrollTop.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VMasonry.ts:222](https://github.com/inokawa/virtua/blob/b906c6eff324cbe837d791f641d8acb810bb7a37/src/angular/VMasonry.ts#L222)

Emitted when scrolling stops.
