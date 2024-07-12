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

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:131

## Properties

### $

> **$**: `ComponentInternalInstance`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:118

***

### $data

> **$data**: `object`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:119

***

### $props

> **$props**: `Partial`\<`object`\> & `Omit`\<`object` & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps` & `Readonly`\<`ExtractPropTypes`\<`object`\>\> & `object`, `DefaultKeys`\<`object`\>\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:120

***

### $attrs

> **$attrs**: `Data`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:121

***

### $refs

> **$refs**: `Data`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:122

***

### $slots

> **$slots**: `Readonly`\<`object`\>

#### Type declaration

##### default

> **default**: `any`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:123

***

### $root

> **$root**: `null` \| `ComponentPublicInstance`\<`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `false`, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `object`, `object`, `string`, `object`\>, `object`, `object`\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:124

***

### $parent

> **$parent**: `null` \| `ComponentPublicInstance`\<`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `false`, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `object`, `object`, `string`, `object`\>, `object`, `object`\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:125

***

### $emit

> **$emit**: (`event`, ...`args`) => `void` & (`event`, ...`args`) => `void`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:126

***

### $el

> **$el**: `any`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:127

***

### $options

> **$options**: `ComponentOptionsBase`\<`ResolveProps`\<`object`, `object`\>, `void`, `object`, `object`, `object`, `ComponentOptionsMixin`, `ComponentOptionsMixin`, `object`, `string`, `object`, `object`, `string`, `SlotsType`\<`object`\>\> & `MergedComponentOptionsOverride`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:128

***

### $forceUpdate()

> **$forceUpdate**: () => `void`

#### Returns

`void`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:129

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

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:130

***

### shift

> `readonly` **shift**: `boolean` = `Boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/vue/WindowVirtualizer.tsx:49](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/vue/WindowVirtualizer.tsx#L49)

***

### data

> `readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/WindowVirtualizer.tsx:33](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/vue/WindowVirtualizer.tsx#L33)

***

### overscan

> `readonly` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/vue/WindowVirtualizer.tsx:38](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/vue/WindowVirtualizer.tsx#L38)

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/WindowVirtualizer.tsx:45](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/vue/WindowVirtualizer.tsx#L45)

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/WindowVirtualizer.tsx:53](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/vue/WindowVirtualizer.tsx#L53)

***

### as

> `readonly` **as**: keyof `IntrinsicElementAttributes`

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/vue/WindowVirtualizer.tsx:58](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/vue/WindowVirtualizer.tsx#L58)

***

### item

> `readonly` **item**: keyof `IntrinsicElementAttributes`

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/vue/WindowVirtualizer.tsx:63](https://github.com/inokawa/virtua/blob/f2de1ad1dcae7dcd92746003a86e94d236b5972c/src/vue/WindowVirtualizer.tsx#L63)

***

### onScrollEnd

> **onScrollEnd**: `undefined` \| (...`args`) => `any`

***

### onRangeChange

> **onRangeChange**: `undefined` \| (...`args`) => `any`
