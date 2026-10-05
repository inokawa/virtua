[**API**](../../API.md)

***

# Class: VMasonry\<T\>

Defined in: [src/angular/VMasonry.ts:178](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L178)

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

Defined in: [src/angular/VMasonry.ts:404](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L404)

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

Defined in: [src/angular/VMasonry.ts:407](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L407)

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

Defined in: [src/angular/VMasonry.ts:410](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L410)

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

Defined in: [src/angular/VMasonry.ts:413](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L413)

Get current clientHeight.

##### Returns

`number`

Get current clientHeight.

#### Implementation of

[`VMasonryHandle`](../interfaces/VMasonryHandle.md).[`viewportSize`](../interfaces/VMasonryHandle.md#viewportsize)

## Constructors

### Constructor

> **new VMasonry**\<`T`\>(): `VMasonry`\<`T`\>

Defined in: [src/angular/VMasonry.ts:323](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L323)

#### Returns

`VMasonry`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/VMasonry.ts:365](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L365)

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

Defined in: [src/angular/VMasonry.ts:416](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L416)

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

Defined in: [src/angular/VMasonry.ts:419](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L419)

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

Defined in: [src/angular/VMasonry.ts:422](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L422)

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

Defined in: [src/angular/VMasonry.ts:425](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L425)

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

Defined in: [src/angular/VMasonry.ts:428](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L428)

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

Defined in: [src/angular/VMasonry.ts:182](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L182)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/VMasonry.ts:187](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L187)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### lanes

> `readonly` **lanes**: `InputSignal`\<`number`\>

Defined in: [src/angular/VMasonry.ts:192](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L192)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap

> `readonly` **gap**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:197](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L197)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:204](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L204)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:209](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L209)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:213](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L213)

List of indexes that should be always mounted, even when off screen.

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/VMasonry.ts:219](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L219)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VMasonryHandle.cache](../interfaces/VMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### scrolled

> `readonly` **scrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VMasonry.ts:224](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L224)

Emitted whenever scroll offset changes. The value is current scrollTop.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VMasonry.ts:228](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L228)

Emitted when scrolling stops.

***

### resized

> `readonly` **resized**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VMasonry.ts:232](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VMasonry.ts#L232)

Emitted when the size of the viewport or the items changes.
