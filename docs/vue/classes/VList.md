[**API**](../../API.md) • **Docs**

***

# Class: VList

## Methods

### $watch()

> **$watch**\<`T`\>(`source`, `cb`, `options`?): `WatchStopHandle`

#### Type Parameters

• **T** *extends* `string` \| (...`args`) => `any`

#### Parameters

• **source**: `T`

• **cb**: `T` *extends* (...`args`) => `R` ? (...`args`) => `any` : (...`args`) => `any`

• **options?**: `WatchOptions`\<`boolean`\>

#### Returns

`WatchStopHandle`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:130

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

• **index**: `number`

index of item

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/Virtualizer.tsx#L51)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

• **index**: `number`

index of item

• **opts?**: [`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:57](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/Virtualizer.tsx#L57)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

• **offset**: `number`

offset from start

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/Virtualizer.tsx#L62)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

• **offset**: `number`

offset from current position

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/Virtualizer.tsx#L67)

## Properties

### $

> **$**: `ComponentInternalInstance`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:117

***

### $data

> **$data**: `object`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:118

***

### $props

> **$props**: `Partial`\<`object`\> & `Omit`\<`object` & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps` & `Readonly`\<`ExtractPropTypes`\<`object`\>\> & `object`, `DefaultKeys`\<`object`\>\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:119

***

### $attrs

> **$attrs**: `Data`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:120

***

### $refs

> **$refs**: `Data`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:121

***

### $slots

> **$slots**: `Readonly`\<`object`\>

#### Type declaration

##### default

> **default**: `any`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:122

***

### $root

> **$root**: `null` \| `ComponentPublicInstance`\<`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `false`, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `object`, `object`, `string`, `object`\>, `object`, `object`\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:123

***

### $parent

> **$parent**: `null` \| `ComponentPublicInstance`\<`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `false`, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `object`, `object`, `string`, `object`\>, `object`, `object`\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:124

***

### $emit

> **$emit**: (`event`, ...`args`) => `void` & (`event`, ...`args`) => `void` & (`event`, ...`args`) => `void`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:125

***

### $el

> **$el**: `any`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:126

***

### $options

> **$options**: `ComponentOptionsBase`\<`ResolveProps`\<`object`, `object`\>, `VListHandle`, `object`, `object`, `object`, `ComponentOptionsMixin`, `ComponentOptionsMixin`, `object`, `string`, `object`, `object`, `string`, `SlotsType`\<`object`\>\> & `MergedComponentOptionsOverride`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:127

***

### $forceUpdate()

> **$forceUpdate**: () => `void`

#### Returns

`void`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:128

***

### $nextTick()

> **$nextTick**: \<`T`, `R`\>(`this`, `fn`?) => `Promise`\<`Awaited`\<`R`\>\>

#### Type Parameters

• **T** = `void`

• **R** = `void`

#### Parameters

• **this**: `T`

• **fn?**

#### Returns

`Promise`\<`Awaited`\<`R`\>\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:129

***

### onScroll

> **onScroll**: `undefined` \| (...`args`) => `any`

***

### shift

> `readonly` **shift**: `boolean` = `Boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/vue/VList.tsx:34](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/VList.tsx#L34)

***

### data

> `readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/VList.tsx:18](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/VList.tsx#L18)

***

### overscan

> `readonly` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/vue/VList.tsx:23](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/VList.tsx#L23)

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/VList.tsx:30](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/VList.tsx#L30)

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/VList.tsx:38](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/VList.tsx#L38)

***

### ssrCount?

> `readonly` `optional` **ssrCount**: `number` = `Number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/vue/VList.tsx:42](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/VList.tsx#L42)

***

### onScrollEnd

> **onScrollEnd**: `undefined` \| (...`args`) => `any`

***

### onRangeChange

> **onRangeChange**: `undefined` \| (...`args`) => `any`

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/vue/Virtualizer.tsx:38](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/Virtualizer.tsx#L38)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/vue/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/Virtualizer.tsx#L42)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/vue/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/bc9902049dc1e9e77258e865d2ec1befc66a7e39/src/vue/Virtualizer.tsx#L46)
