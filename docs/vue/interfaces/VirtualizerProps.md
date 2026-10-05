[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/vue/Virtualizer.tsx:38](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L38)

Props of [Virtualizer](../variables/Virtualizer.md).

## Extends

- `PublicProps`

## Type Parameters

### T

`T` = `unknown`

## Properties

### data

> **data**: `T`[]

Defined in: [src/vue/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L42)

The data items rendered by this component.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/vue/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L47)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/vue/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L54)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/vue/Virtualizer.tsx:60](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L60)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/vue/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L64)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### startMargin?

> `optional` **startMargin?**: `number`

Defined in: [src/vue/Virtualizer.tsx:68](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L68)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/vue/Virtualizer.tsx:72](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L72)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

***

### scrollRef?

> `optional` **scrollRef?**: `HTMLElement`

Defined in: [src/vue/Virtualizer.tsx:76](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L76)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### as?

> `optional` **as?**: keyof IntrinsicElementAttributes

Defined in: [src/vue/Virtualizer.tsx:81](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L81)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item?**: keyof IntrinsicElementAttributes

Defined in: [src/vue/Virtualizer.tsx:86](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L86)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### itemProps?

> `optional` **itemProps?**: `ItemProps`\<`T`\>

Defined in: [src/vue/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L92)

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/vue/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L96)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/vue/Virtualizer.tsx:102](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L102)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/vue/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L107)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/vue/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/vue/Virtualizer.tsx#L111)

Callback invoked when scrolling stops.

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
