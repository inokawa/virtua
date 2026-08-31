[**API**](../../API.md)

***

# Class: WindowVirtualizer\<T\>

Defined in: [src/angular/WindowVirtualizer.ts:112](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L112)

[Virtualizer](Virtualizer.md) controlled by the window scrolling. See [WindowVirtualizerHandle](../interfaces/WindowVirtualizerHandle.md).

The host element is the container of the items. Use the attribute selector to change its tag,
like `<ul virtuaWindowVirtualizer [data]="data">`.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/angular/WindowVirtualizer.ts:283](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L283)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

##### Returns

[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`cache`](../interfaces/WindowVirtualizerHandle.md#cache)

***

### scrollOffset

#### Get Signature

> **get** **scrollOffset**(): `number`

Defined in: [src/angular/WindowVirtualizer.ts:286](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L286)

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

##### Returns

`number`

Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`scrollOffset`](../interfaces/WindowVirtualizerHandle.md#scrolloffset)

***

### viewportSize

#### Get Signature

> **get** **viewportSize**(): `number`

Defined in: [src/angular/WindowVirtualizer.ts:289](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L289)

Get current clientHeight of the document, or clientWidth if horizontal: true.

##### Returns

`number`

Get current clientHeight of the document, or clientWidth if horizontal: true.

#### Implementation of

[`WindowVirtualizerHandle`](../interfaces/WindowVirtualizerHandle.md).[`viewportSize`](../interfaces/WindowVirtualizerHandle.md#viewportsize)

## Constructors

### Constructor

> **new WindowVirtualizer**\<`T`\>(): `WindowVirtualizer`\<`T`\>

Defined in: [src/angular/WindowVirtualizer.ts:223](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L223)

#### Returns

`WindowVirtualizer`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/WindowVirtualizer.ts:255](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L255)

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

Defined in: [src/angular/WindowVirtualizer.ts:292](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L292)

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

Defined in: [src/angular/WindowVirtualizer.ts:295](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L295)

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

Defined in: [src/angular/WindowVirtualizer.ts:298](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L298)

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

Defined in: [src/angular/WindowVirtualizer.ts:301](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L301)

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

Defined in: [src/angular/WindowVirtualizer.ts:116](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L116)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/WindowVirtualizer.ts:121](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L121)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowVirtualizer.ts:127](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L127)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowVirtualizer.ts:134](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L134)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/WindowVirtualizer.ts:138](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L138)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift

> `readonly` **shift**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/WindowVirtualizer.ts:142](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L142)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal

> `readonly` **horizontal**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/WindowVirtualizer.ts:146](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L146)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/WindowVirtualizer.ts:152](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L152)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [WindowVirtualizerHandle.cache](../interfaces/WindowVirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### scroll

> `readonly` **scroll**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/WindowVirtualizer.ts:158](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L158)

Emitted whenever scroll offset changes.

***

### scrollEnd

> `readonly` **scrollEnd**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/WindowVirtualizer.ts:162](https://github.com/inokawa/virtua/blob/4a6e216e9675c139ab0ea2110d5a95aa08068d24/src/angular/WindowVirtualizer.ts#L162)

Emitted when scrolling stops.
