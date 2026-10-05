[**API**](../../API.md)

***

# Interface: VListProps\<T\>

Defined in: [src/vue/VList.tsx:23](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/VList.tsx#L23)

Props of [VList](../variables/VList.md).

## Extends

- `PublicProps`.`Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"data"` \| `"bufferSize"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"cache"` \| `"ssrCount"` \| `"itemProps"` \| `"onScroll"` \| `"onScrollEnd"` \| `"onResize"` \| `"keepMounted"`\>

## Type Parameters

### T

`T` = `unknown`

## Properties

### key?

> `optional` **key?**: `PropertyKey`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1213

#### Inherited from

`PublicProps.key`

***

### ref?

> `optional` **ref?**: `VNodeRef`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1214

#### Inherited from

`PublicProps.ref`

***

### ref\_for?

> `optional` **ref\_for?**: `boolean`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1215

#### Inherited from

`PublicProps.ref_for`

***

### ref\_key?

> `optional` **ref\_key?**: `string`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1216

#### Inherited from

`PublicProps.ref_key`

***

### onVnodeBeforeMount?

> `optional` **onVnodeBeforeMount?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1217

#### Inherited from

`PublicProps.onVnodeBeforeMount`

***

### onVnodeMounted?

> `optional` **onVnodeMounted?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1218

#### Inherited from

`PublicProps.onVnodeMounted`

***

### onVnodeBeforeUpdate?

> `optional` **onVnodeBeforeUpdate?**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1219

#### Inherited from

`PublicProps.onVnodeBeforeUpdate`

***

### onVnodeUpdated?

> `optional` **onVnodeUpdated?**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1220

#### Inherited from

`PublicProps.onVnodeUpdated`

***

### onVnodeBeforeUnmount?

> `optional` **onVnodeBeforeUnmount?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1221

#### Inherited from

`PublicProps.onVnodeBeforeUnmount`

***

### onVnodeUnmounted?

> `optional` **onVnodeUnmounted?**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1222

#### Inherited from

`PublicProps.onVnodeUnmounted`

***

### class?

> `optional` **class?**: `unknown`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1401

#### Inherited from

`PublicProps.class`

***

### style?

> `optional` **style?**: `unknown`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1402

#### Inherited from

`PublicProps.style`

***

### data

> **data**: `T`[]

Defined in: [src/vue/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L43)

The data items rendered by this component.

#### Inherited from

`Pick.data`

***

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/vue/Virtualizer.tsx:108](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L108)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Inherited from

`Pick.onScroll`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/vue/Virtualizer.tsx:112](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L112)

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/vue/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L116)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

#### Inherited from

`Pick.onResize`

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/vue/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L61)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

#### Inherited from

`Pick.shift`

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/vue/Virtualizer.tsx:48](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L48)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

#### Inherited from

`Pick.bufferSize`

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/vue/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L55)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/vue/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L65)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/vue/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L97)

List of indexes that should be always mounted, even when off screen.

#### Inherited from

`Pick.keepMounted`

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:103](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L103)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Inherited from

`Pick.cache`

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/vue/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L73)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

#### Inherited from

`Pick.ssrCount`

***

### itemProps?

> `optional` **itemProps?**: `ItemProps`\<`T`\>

Defined in: [src/vue/Virtualizer.tsx:93](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/vue/Virtualizer.tsx#L93)

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

#### Inherited from

`Pick.itemProps`
