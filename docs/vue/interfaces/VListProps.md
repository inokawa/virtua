[**API**](../../API.md)

***

# Interface: VListProps\<T\>

Defined in: [src/vue/VList.tsx:25](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/VList.tsx#L25)

Props of [VList](../variables/VList.md).

## Extends

- `PublicProps`.`Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"data"` \| `"bufferSize"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"cache"` \| `"ssrCount"` \| `"itemProps"` \| `"onScroll"` \| `"onScrollEnd"` \| `"keepMounted"`\>

## Type Parameters

### T

`T` = `unknown`

## Properties

### key?

> `optional` **key**: `PropertyKey`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:907

#### Inherited from

`PublicProps.key`

***

### ref?

> `optional` **ref**: `VNodeRef`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:908

#### Inherited from

`PublicProps.ref`

***

### ref\_for?

> `optional` **ref\_for**: `boolean`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:909

#### Inherited from

`PublicProps.ref_for`

***

### ref\_key?

> `optional` **ref\_key**: `string`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:910

#### Inherited from

`PublicProps.ref_key`

***

### onVnodeBeforeMount?

> `optional` **onVnodeBeforeMount**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:911

#### Inherited from

`PublicProps.onVnodeBeforeMount`

***

### onVnodeMounted?

> `optional` **onVnodeMounted**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:912

#### Inherited from

`PublicProps.onVnodeMounted`

***

### onVnodeBeforeUpdate?

> `optional` **onVnodeBeforeUpdate**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:913

#### Inherited from

`PublicProps.onVnodeBeforeUpdate`

***

### onVnodeUpdated?

> `optional` **onVnodeUpdated**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:914

#### Inherited from

`PublicProps.onVnodeUpdated`

***

### onVnodeBeforeUnmount?

> `optional` **onVnodeBeforeUnmount**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:915

#### Inherited from

`PublicProps.onVnodeBeforeUnmount`

***

### onVnodeUnmounted?

> `optional` **onVnodeUnmounted**: `VNodeMountHook` \| `VNodeMountHook`[]

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:916

#### Inherited from

`PublicProps.onVnodeUnmounted`

***

### class?

> `optional` **class**: `unknown`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1052

#### Inherited from

`PublicProps.class`

***

### style?

> `optional` **style**: `unknown`

Defined in: node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:1053

#### Inherited from

`PublicProps.style`

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/vue/Virtualizer.tsx:102](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L102)

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

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/vue/Virtualizer.tsx:106](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L106)

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/vue/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L55)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Inherited from

`Pick.shift`

***

### data

> **data**: `T`[]

Defined in: [src/vue/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L39)

The data items rendered by this component.

#### Inherited from

`Pick.data`

***

### bufferSize?

> `optional` **bufferSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:44](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L44)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

#### Inherited from

`Pick.bufferSize`

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/vue/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L51)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/vue/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L59)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

***

### keepMounted?

> `optional` **keepMounted**: readonly `number`[]

Defined in: [src/vue/Virtualizer.tsx:91](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L91)

List of indexes that should be always mounted, even when off screen.

#### Inherited from

`Pick.keepMounted`

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L97)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Inherited from

`Pick.cache`

***

### ssrCount?

> `optional` **ssrCount**: `number`

Defined in: [src/vue/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L67)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

#### Inherited from

`Pick.ssrCount`

***

### itemProps?

> `optional` **itemProps**: `ItemProps`\<`T`\>

Defined in: [src/vue/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/9c681e31a83b3fd8a7071755f1371bc1f6dcc04c/src/vue/Virtualizer.tsx#L87)

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

#### Inherited from

`Pick.itemProps`
