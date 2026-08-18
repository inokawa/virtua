[**API**](../../API.md)

***

# Class: Virtualizer\<T\>

Defined in: [src/angular/Virtualizer.ts:127](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L127)

Customizable list virtualizer for advanced usage. See [VirtualizerHandle](../interfaces/VirtualizerHandle.md).

The host element is the container of the items. Use the attribute selector to change its tag,
like `<ul virtuaVirtualizer [data]="data">`.

## Type Parameters

### T

`T`

## Implements

- `OnInit`
- [`VirtualizerHandle`](../interfaces/VirtualizerHandle.md)

## Constructors

### Constructor

> **new Virtualizer**\<`T`\>(): `Virtualizer`\<`T`\>

Defined in: [src/angular/Virtualizer.ts:291](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L291)

#### Returns

`Virtualizer`\<`T`\>

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [src/angular/Virtualizer.ts:334](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L334)

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

Defined in: [src/angular/Virtualizer.ts:362](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L362)

Get current [CacheSnapshot](../../react/interfaces/CacheSnapshot.md).

#### Returns

[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`getCache`](../interfaces/VirtualizerHandle.md#getcache)

***

### getScrollOffset()

> **getScrollOffset**(): `number`

Defined in: [src/angular/Virtualizer.ts:365](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L365)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`number`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`getScrollOffset`](../interfaces/VirtualizerHandle.md#getscrolloffset)

***

### getScrollSize()

> **getScrollSize**(): `number`

Defined in: [src/angular/Virtualizer.ts:368](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L368)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Returns

`number`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`getScrollSize`](../interfaces/VirtualizerHandle.md#getscrollsize)

***

### getViewportSize()

> **getViewportSize**(): `number`

Defined in: [src/angular/Virtualizer.ts:371](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L371)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Returns

`number`

#### Implementation of

[`VirtualizerHandle`](../interfaces/VirtualizerHandle.md).[`getViewportSize`](../interfaces/VirtualizerHandle.md#getviewportsize)

***

### findItemIndex()

> **findItemIndex**(`offset`): `number`

Defined in: [src/angular/Virtualizer.ts:374](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L374)

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

Defined in: [src/angular/Virtualizer.ts:377](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L377)

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

Defined in: [src/angular/Virtualizer.ts:380](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L380)

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

Defined in: [src/angular/Virtualizer.ts:383](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L383)

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

Defined in: [src/angular/Virtualizer.ts:386](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L386)

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

Defined in: [src/angular/Virtualizer.ts:389](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L389)

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

Defined in: [src/angular/Virtualizer.ts:131](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L131)

The data items rendered by this component.

***

### getKey

> `readonly` **getKey**: `InputSignal`\<(`data`, `index`) => `string` \| `number`\>

Defined in: [src/angular/Virtualizer.ts:136](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L136)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### itemProps

> `readonly` **itemProps**: `InputSignal`\<`ItemProps`\<`T`\> \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:141](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L141)

A function that provides properties/attributes for item element

***

### bufferSize

> `readonly` **bufferSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:146](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L146)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### scrollRef

> `readonly` **scrollRef**: `InputSignal`\<`HTMLElement` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:150](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L150)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize

> `readonly` **itemSize**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:157](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L157)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### ssrCount

> `readonly` **ssrCount**: `InputSignal`\<`number` \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:161](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L161)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### shift

> `readonly` **shift**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/Virtualizer.ts:165](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L165)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal

> `readonly` **horizontal**: `InputSignal`\<`boolean`\>

Defined in: [src/angular/Virtualizer.ts:169](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L169)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted

> `readonly` **keepMounted**: `InputSignal`\<readonly `number`[] \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:173](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L173)

List of indexes that should be always mounted, even when off screen.

***

### cache

> `readonly` **cache**: `InputSignal`\<[`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md) \| `undefined`\>

Defined in: [src/angular/Virtualizer.ts:179](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L179)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.getCache](../interfaces/VListHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### startMargin

> `readonly` **startMargin**: `InputSignal`\<`number`\>

Defined in: [src/angular/Virtualizer.ts:183](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L183)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### scroll

> `readonly` **scroll**: `OutputEmitterRef`\<`number`\>

Defined in: [src/angular/Virtualizer.ts:188](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L188)

Emitted whenever scroll offset changes. The value is current scrollTop, or scrollLeft if horizontal: true.

***

### scrollEnd

> `readonly` **scrollEnd**: `OutputEmitterRef`\<`void`\>

Defined in: [src/angular/Virtualizer.ts:192](https://github.com/inokawa/virtua/blob/517c6bb928165336184c109922faf0ad789d1367/src/angular/Virtualizer.ts#L192)

Emitted when scrolling stops.
