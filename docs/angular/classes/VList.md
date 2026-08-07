[**API**](../../API.md)

***

# Class: VList\<T\>

Defined in: [src/angular/VList.ts:50](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L50)

Virtualized list component. See [VListHandle](../interfaces/VListHandle.md).

The host element is the scrollable viewport of the list.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`VListHandle`](../interfaces/VListHandle.md)

## Constructors

### Constructor

> **new VList**\<`T`\>(): `VList`\<`T`\>

#### Returns

`VList`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/VList.ts:119](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L119)

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

Defined in: [src/angular/VList.ts:133](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L133)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`getCache`](../interfaces/VListHandle.md#getcache)

***

### getScrollOffset()

> **getScrollOffset**(): `number`

Defined in: [src/angular/VList.ts:136](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L136)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`getScrollOffset`](../interfaces/VListHandle.md#getscrolloffset)

***

### getScrollSize()

> **getScrollSize**(): `number`

Defined in: [src/angular/VList.ts:139](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L139)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`getScrollSize`](../interfaces/VListHandle.md#getscrollsize)

***

### getViewportSize()

> **getViewportSize**(): `number`

Defined in: [src/angular/VList.ts:142](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L142)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`getViewportSize`](../interfaces/VListHandle.md#getviewportsize)

***

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/VList.ts:145](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L145)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`findItemIndex`](../interfaces/VListHandle.md#finditemindex)

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/VList.ts:148](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L148)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`getItemOffset`](../interfaces/VListHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/angular/VList.ts:151](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L151)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`getItemSize`](../interfaces/VListHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/angular/VList.ts:154](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L154)

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

[`VListHandle`](../interfaces/VListHandle.md).[`scrollToIndex`](../interfaces/VListHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/angular/VList.ts:157](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L157)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`scrollTo`](../interfaces/VListHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/angular/VList.ts:160](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L160)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`scrollBy`](../interfaces/VListHandle.md#scrollby)

## Properties

### data

> `readonly` **data**: `InputSignal`\<readonly `T`[]\>

Defined in: [src/angular/VList.ts:54](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L54)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/VList.ts:59](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L59)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### itemProps

> `readonly` **itemProps**: `InputSignal`\<`ItemProps`\<`T`\> \| `undefined`\>

Defined in: [src/angular/VList.ts:64](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L64)

A function that provides properties/attributes for item element

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:69](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L69)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:76](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L76)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:80](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L80)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift

> `readonly` **shift**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/VList.ts:84](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L84)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal

> `readonly` **horizontal**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/VList.ts:88](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L88)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/VList.ts:92](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L92)

List of indexes that should be always mounted, even when off screen.

***

### cache

> `readonly` **cache**: `InputSignal`\<[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/VList.ts:98](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L98)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VListHandle.getCache](../interfaces/VListHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### scroll

> `readonly` **scroll**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VList.ts:103](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L103)

Emitted whenever scroll offset changes. The value is current scrollTop, or scrollLeft if horizontal: true.

***

### scrollEnd

> `readonly` **scrollEnd**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VList.ts:107](https://github.com/inokawa/virtua/blob/ad645ca4fb9921adbf297457a1f43d806d57cfc8/src/angular/VList.ts#L107)

Emitted when scrolling stops.
