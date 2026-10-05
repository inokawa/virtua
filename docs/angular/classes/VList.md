[**API**](../../API.md)

***

# Class: VList\<T\>

Defined in: [src/angular/VList.ts:58](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L58)

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

> **get** **cache**(): [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/angular/VList.ts:146](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L146)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

##### Returns

[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Get current [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md).

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`cache`](../interfaces/VListHandle.md#cache)

***

### scrollOffset

#### Get Signature

> **get** **scrollOffset**(): `number`

Defined in: [src/angular/VList.ts:149](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L149)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

##### Returns

`number`

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Implementation of

[`VListHandle`](../interfaces/VListHandle.md).[`scrollOffset`](../interfaces/VListHandle.md#scrolloffset)

***

### scrollSize

#### Get Signature

> **get** **scrollSize**(): `number`

Defined in: [src/angular/VList.ts:152](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L152)

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

Defined in: [src/angular/VList.ts:155](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L155)

Get current clientHeight, or clientWidth if horizontal: true.

##### Returns

`number`

Get current clientHeight, or clientWidth if horizontal: true.

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

Defined in: [src/angular/VList.ts:133](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L133)

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

Defined in: [src/angular/VList.ts:158](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L158)

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

Defined in: [src/angular/VList.ts:161](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L161)

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

Defined in: [src/angular/VList.ts:164](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L164)

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

Defined in: [src/angular/VList.ts:167](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L167)

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

[`VListHandle`](../interfaces/VListHandle.md).[`scrollToIndex`](../interfaces/VListHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/angular/VList.ts:170](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L170)

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

Defined in: [src/angular/VList.ts:173](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L173)

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

Defined in: [src/angular/VList.ts:62](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L62)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/VList.ts:67](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L67)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### itemProps

> `readonly` **itemProps**: `InputSignal`\<`ItemProps`\<`T`\> \| `undefined`\>

Defined in: [src/angular/VList.ts:72](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L72)

A function that provides properties/attributes for item element

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:77](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L77)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:84](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L84)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/VList.ts:88](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L88)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift

> `readonly` **shift**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/VList.ts:94](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L94)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal

> `readonly` **horizontal**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/VList.ts:98](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L98)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/VList.ts:102](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L102)

List of indexes that should be always mounted, even when off screen.

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/VList.ts:108](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L108)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VListHandle.cache](../interfaces/VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### scrolled

> `readonly` **scrolled**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/VList.ts:113](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L113)

Emitted whenever scroll offset changes. The value is current scrollTop, or scrollLeft if horizontal: true.

***

### scrollEnded

> `readonly` **scrollEnded**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VList.ts:117](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L117)

Emitted when scrolling stops.

***

### resized

> `readonly` **resized**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/VList.ts:121](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/angular/VList.ts#L121)

Emitted when the size of the viewport or the items changes.
