[**API**](../../API.md)

***

# Class: Virtualizer\<T\>

Defined in: [src/angular/Virtualizer.ts:137](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L137)

Customizable list virtualizer for advanced usage. See [VirtualizerHandle](../interfaces/VirtualizerHandle.md).

The host element is the container of the items. Use the attribute selector to change its tag,
like `<ul virtuaVirtualizer [data]="data">`.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`VirtualizerHandle`](../interfaces/VirtualizerHandle.md)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Defined in: [src/angular/Virtualizer.ts:368](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L368)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

##### Returns

[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md)

Get current [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md).

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`cache`](../interfaces/VirtualizerHandle.md#cache)

***

### scrollOffset

#### Get Signature

> **get** **scrollOffset**(): `number`

Defined in: [src/angular/Virtualizer.ts:371](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L371)

Get current scrollTop, or scrollLeft if horizontal: true.

##### Returns

`number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`scrollOffset`](../interfaces/VirtualizerHandle.md#scrolloffset)

***

### scrollSize

#### Get Signature

> **get** **scrollSize**(): `number`

Defined in: [src/angular/Virtualizer.ts:374](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L374)

Get current scrollHeight, or scrollWidth if horizontal: true.

##### Returns

`number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`scrollSize`](../interfaces/VirtualizerHandle.md#scrollsize)

***

### viewportSize

#### Get Signature

> **get** **viewportSize**(): `number`

Defined in: [src/angular/Virtualizer.ts:377](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L377)

Get current offsetHeight, or offsetWidth if horizontal: true.

##### Returns

`number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`viewportSize`](../interfaces/VirtualizerHandle.md#viewportsize)

## Constructors

### Constructor

> **new Virtualizer**\<`T`\>(): `Virtualizer`\<`T`\>

Defined in: [src/angular/Virtualizer.ts:299](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L299)

#### Returns

`Virtualizer`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/Virtualizer.ts:340](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L340)

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

Defined in: [src/angular/Virtualizer.ts:380](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L380)

Find nearest item index from offset.

#### Parameters

##### offset

`number`

offset in pixels from the start of the scroll container

#### Returns

`number`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`findItemIndex`](../interfaces/VirtualizerHandle.md#finditemindex)

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/angular/Virtualizer.ts:383](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L383)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`getItemOffset`](../interfaces/VirtualizerHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/angular/Virtualizer.ts:386](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L386)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`getItemSize`](../interfaces/VirtualizerHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts?`): `void`

Defined in: [src/angular/Virtualizer.ts:389](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L389)

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

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`scrollToIndex`](../interfaces/VirtualizerHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/angular/Virtualizer.ts:392](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L392)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`scrollTo`](../interfaces/VirtualizerHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/angular/Virtualizer.ts:395](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L395)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`scrollBy`](../interfaces/VirtualizerHandle.md#scrollby)

## Properties

### data

> `readonly` **data**: `InputSignal`\<readonly `T`[]\>

Defined in: [src/angular/Virtualizer.ts:141](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L141)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/Virtualizer.ts:146](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L146)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### itemProps

> `readonly` **itemProps**: `InputSignal`\<`ItemProps`\<`T`\> \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:151](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L151)

A function that provides properties/attributes for item element

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:156](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L156)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### scrollRef

> `readonly` **scrollRef**: `InputSignal`\<`HTMLElement` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:160](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L160)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:167](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L167)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:171](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L171)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift

> `readonly` **shift**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/Virtualizer.ts:175](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L175)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal

> `readonly` **horizontal**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/Virtualizer.ts:179](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L179)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:183](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L183)

List of indexes that should be always mounted, even when off screen.

***

### cacheProp

> `readonly` **cacheProp**: `InputSignal`\<[`CacheSnapshot`](../../react/type-aliases/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:189](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L189)

You can restore cache by passing a [CacheSnapshot](../../react/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](../interfaces/VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin

> `readonly` **startMargin**: `InputSignal`\<`number`\>

Defined in: [src/angular/Virtualizer.ts:193](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L193)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### scroll

> `readonly` **scroll**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/Virtualizer.ts:198](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L198)

Emitted whenever scroll offset changes. The value is current scrollTop, or scrollLeft if horizontal: true.

***

### scrollEnd

> `readonly` **scrollEnd**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/Virtualizer.ts:202](https://github.com/inokawa/virtua/blob/db45242c520cde38c38f994dbae0ae7f5538323a/src/angular/Virtualizer.ts#L202)

Emitted when scrolling stops.
