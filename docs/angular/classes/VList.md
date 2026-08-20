[**API**](../../API.md)

***

# Class: VList\<T\>

Defined in: [src/angular/VList.ts:57](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L57)

Virtualized list component. See [VListHandle](../interfaces/VListHandle.md).

The host element is the scrollable viewport of the list.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`VListHandle`](../interfaces/VListHandle.md)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/angular/VList.ts:140](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L140)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

##### Returns

[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`cache`](../interfaces/VListHandle.md#cache)

***

### scrollOffset

#### Get Signature

> **get** **scrollOffset**(): `number`

Defined in: [src/angular/VList.ts:143](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L143)

Get current scrollTop, or scrollLeft if horizontal: true.

##### Returns

`number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`scrollOffset`](../interfaces/VListHandle.md#scrolloffset)

***

### scrollSize

#### Get Signature

> **get** **scrollSize**(): `number`

Defined in: [src/angular/VList.ts:146](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L146)

Get current scrollHeight, or scrollWidth if horizontal: true.

##### Returns

`number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`scrollSize`](../interfaces/VListHandle.md#scrollsize)

***

### viewportSize

#### Get Signature

> **get** **viewportSize**(): `number`

Defined in: [src/angular/VList.ts:149](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L149)

Get current offsetHeight, or offsetWidth if horizontal: true.

##### Returns

`number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`viewportSize`](../interfaces/VListHandle.md#viewportsize)

## Constructors

### Constructor

> **new VList**\<`T`\>(): `VList`\<`T`\>

#### Returns

`VList`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/VList.ts:126](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L126)

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

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/VList.ts:152](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L152)

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

Defined in: [src/angular/VList.ts:155](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L155)

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

Defined in: [src/angular/VList.ts:158](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L158)

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

Defined in: [src/angular/VList.ts:161](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L161)

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

Defined in: [src/angular/VList.ts:164](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L164)

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

Defined in: [src/angular/VList.ts:167](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L167)

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

Defined in: [src/angular/VList.ts:61](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L61)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/VList.ts:66](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L66)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### itemProps

> `readonly` **itemProps**: `InputSignal`\<`ItemProps`\<`T`\> \| `undefined`\>

Defined in: [src/angular/VList.ts:71](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L71)

A function that provides properties/attributes for item element

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:76](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L76)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:83](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L83)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:87](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L87)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift

> `readonly` **shift**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/VList.ts:91](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L91)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal

> `readonly` **horizontal**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/VList.ts:95](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L95)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/VList.ts:99](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L99)

List of indexes that should be always mounted, even when off screen.

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/VList.ts:105](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L105)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VListHandle.cache](../interfaces/VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### scroll

> `readonly` **scroll**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VList.ts:110](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L110)

Emitted whenever scroll offset changes. The value is current scrollTop, or scrollLeft if horizontal: true.

***

### scrollEnd

> `readonly` **scrollEnd**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VList.ts:114](https://github.com/inokawa/virtua/blob/329107ea3e5e2d221e21ecfae4c3d369be29aa07/src/angular/VList.ts#L114)

Emitted when scrolling stops.
