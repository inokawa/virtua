[**API**](../../API.md)

***

# Interface: VMasonryProps\<T\>

Defined in: [src/vue/VMasonry.tsx:180](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L180)

Props of [VMasonry](../variables/VMasonry.md).

## Extends

- `PublicProps`

## Type Parameters

### T

`T`

## Properties

### data

> **data**: `T`[]

Defined in: [src/vue/VMasonry.tsx:184](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L184)

The data items rendered by this component.

***

### lanes

> **lanes**: `number`

Defined in: [src/vue/VMasonry.tsx:188](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L188)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/vue/VMasonry.tsx:193](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L193)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/vue/VMasonry.tsx:200](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L200)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/vue/VMasonry.tsx:205](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L205)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/vue/VMasonry.tsx:209](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L209)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/VMasonry.tsx:215](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L215)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VMasonryHandle.cache](VMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/vue/VMasonry.tsx:220](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L220)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/vue/VMasonry.tsx:224](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L224)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/vue/VMasonry.tsx:228](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/vue/VMasonry.tsx#L228)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

***

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
