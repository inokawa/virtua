[**API**](../../API.md) • **Docs**

***

# Class: WindowVirtualizer

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

##### default()

> **default**: (`arg`) => `VNode`\<`RendererNode`, `RendererElement`, `object`\>[]

###### Parameters

• **arg**

• **arg.item**: `any`

• **arg.index**: `number`

###### Returns

`VNode`\<`RendererNode`, `RendererElement`, `object`\>[]

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

> **$emit**: (`event`, ...`args`) => `void` & (`event`, ...`args`) => `void`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:125

***

### $el

> **$el**: `any`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:126

***

### $options

> **$options**: `ComponentOptionsBase`\<`ResolveProps`\<`object`, `object`\>, `void`, `object`, `object`, `object`, `ComponentOptionsMixin`, `ComponentOptionsMixin`, `object`, `string`, `object`, `object`, `string`, `SlotsType`\<`object`\>\> & `MergedComponentOptionsOverride`

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

[src/vue/WindowVirtualizer.tsx:59](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/vue/WindowVirtualizer.tsx#L59)

***

### data

> `readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/WindowVirtualizer.tsx:43](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/vue/WindowVirtualizer.tsx#L43)

***

### overscan?

> `readonly` `optional` **overscan**: `number` = `Number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/vue/WindowVirtualizer.tsx:48](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/vue/WindowVirtualizer.tsx#L48)

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/WindowVirtualizer.tsx:55](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/vue/WindowVirtualizer.tsx#L55)

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/WindowVirtualizer.tsx:63](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/vue/WindowVirtualizer.tsx#L63)

***

### as

> `readonly` **as**: keyof `IntrinsicElementAttributes`

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/vue/WindowVirtualizer.tsx:68](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/vue/WindowVirtualizer.tsx#L68)

***

### item

> `readonly` **item**: keyof `IntrinsicElementAttributes`

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/vue/WindowVirtualizer.tsx:73](https://github.com/inokawa/virtua/blob/98aa56b9fcaf2174be1b18d019adf2076098e81d/src/vue/WindowVirtualizer.tsx#L73)

***

### onScrollEnd

> **onScrollEnd**: `undefined` \| (...`args`) => `any`
