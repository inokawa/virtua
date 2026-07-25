[**API**](../../API.md)

***

# Class: WindowVirtualizer\<T\>

Defined in: [src/angular/WindowVirtualizer.ts:109](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L109)

[Virtualizer](Virtualizer.md) controlled by the window scrolling. See [WindowVirtualizerHandle](../interfaces/WindowVirtualizerHandle.md).

The host element is the container of the items. Use the attribute selector to change its tag,
like `<ul virtuaWindowVirtualizer [data]="data">`.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md)

## Constructors

### Constructor

> **new WindowVirtualizer**\<`T`\>(): `WindowVirtualizer`\<`T`\>

Defined in: [src/angular/WindowVirtualizer.ts:215](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L215)

#### Returns

`WindowVirtualizer`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/WindowVirtualizer.ts:248](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L248)

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

### getCache()

> **getCache**(): [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/angular/WindowVirtualizer.ts:276](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L276)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`getCache`](../interfaces/WindowVirtualizerHandle.md#getcache)

***

### getScrollOffset()

> **getScrollOffset**(): `number`

Defined in: [src/angular/WindowVirtualizer.ts:279](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L279)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`getScrollOffset`](../interfaces/WindowVirtualizerHandle.md#getscrolloffset)

***

### getViewportSize()

> **getViewportSize**(): `number`

Defined in: [src/angular/WindowVirtualizer.ts:282](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L282)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`getViewportSize`](../interfaces/WindowVirtualizerHandle.md#getviewportsize)

***

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/WindowVirtualizer.ts:285](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L285)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`findItemIndex`](../interfaces/WindowVirtualizerHandle.md#finditemindex)

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/WindowVirtualizer.ts:288](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L288)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`getItemOffset`](../interfaces/WindowVirtualizerHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/angular/WindowVirtualizer.ts:291](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L291)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`getItemSize`](../interfaces/WindowVirtualizerHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/angular/WindowVirtualizer.ts:294](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L294)

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

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`scrollToIndex`](../interfaces/WindowVirtualizerHandle.md#scrolltoindex)

## Properties

### data

> `readonly` **data**: `InputSignal`\<readonly `T`[]\>

Defined in: [src/angular/WindowVirtualizer.ts:113](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L113)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/WindowVirtualizer.ts:118](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L118)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowVirtualizer.ts:124](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L124)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowVirtualizer.ts:131](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L131)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift

> `readonly` **shift**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/WindowVirtualizer.ts:135](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L135)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal

> `readonly` **horizontal**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/WindowVirtualizer.ts:139](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L139)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cache

> `readonly` **cache**: `InputSignal`\<[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/WindowVirtualizer.ts:145](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L145)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.getCache](../interfaces/WindowVirtualizerHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### scroll

> `readonly` **scroll**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/WindowVirtualizer.ts:151](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L151)

Emitted whenever scroll offset changes.

***

### scrollEnd

> `readonly` **scrollEnd**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/WindowVirtualizer.ts:155](https://github.com/inokawa/virtua/blob/3d5ac6d6aeae344ebb61ba2774de6c1fe13b1269/src/angular/WindowVirtualizer.ts#L155)

Emitted when scrolling stops.
