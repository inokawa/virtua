# Class: Virtualizer

[vue](../modules/vue.md).Virtualizer

## Table of contents

### Methods

- [$watch](vue.Virtualizer.md#$watch)
- [getItemOffset](vue.Virtualizer.md#getitemoffset)
- [scrollToIndex](vue.Virtualizer.md#scrolltoindex)
- [scrollTo](vue.Virtualizer.md#scrollto)
- [scrollBy](vue.Virtualizer.md#scrollby)

### Properties

- [$](vue.Virtualizer.md#$)
- [$data](vue.Virtualizer.md#$data)
- [$props](vue.Virtualizer.md#$props)
- [$attrs](vue.Virtualizer.md#$attrs)
- [$refs](vue.Virtualizer.md#$refs)
- [$slots](vue.Virtualizer.md#$slots)
- [$root](vue.Virtualizer.md#$root)
- [$parent](vue.Virtualizer.md#$parent)
- [$emit](vue.Virtualizer.md#$emit)
- [$el](vue.Virtualizer.md#$el)
- [$options](vue.Virtualizer.md#$options)
- [$forceUpdate](vue.Virtualizer.md#$forceupdate)
- [$nextTick](vue.Virtualizer.md#$nexttick)
- [onScroll](vue.Virtualizer.md#onscroll)
- [shift](vue.Virtualizer.md#shift)
- [data](vue.Virtualizer.md#data)
- [overscan](vue.Virtualizer.md#overscan)
- [itemSize](vue.Virtualizer.md#itemsize)
- [horizontal](vue.Virtualizer.md#horizontal)
- [startMargin](vue.Virtualizer.md#startmargin)
- [ssrCount](vue.Virtualizer.md#ssrcount)
- [scrollRef](vue.Virtualizer.md#scrollref)
- [onScrollEnd](vue.Virtualizer.md#onscrollend)
- [onRangeChange](vue.Virtualizer.md#onrangechange)
- [scrollOffset](vue.Virtualizer.md#scrolloffset)
- [scrollSize](vue.Virtualizer.md#scrollsize)
- [viewportSize](vue.Virtualizer.md#viewportsize)

## Methods

### $watch

▸ **$watch**\<`T`\>(`source`, `cb`, `options?`): `WatchStopHandle`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `T` |
| `cb` | `T` extends (...`args`: `any`) => `R` ? (...`args`: [`R`, `R`]) => `any` : (...`args`: `any`) => `any` |
| `options?` | `WatchOptions`\<`boolean`\> |

#### Returns

`WatchStopHandle`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:131

___

### getItemOffset

▸ **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L50)

___

### scrollToIndex

▸ **scrollToIndex**(`index`, `opts?`): `void`

Scroll to the item specified by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |
| `opts?` | [`ScrollToIndexOpts`](../interfaces/react.ScrollToIndexOpts.md) | options |

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:56](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L56)

___

### scrollTo

▸ **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | offset from start |

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:61](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L61)

___

### scrollBy

▸ **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | offset from current position |

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:66](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L66)

## Properties

### $

• **$**: `ComponentInternalInstance`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:118

___

### $data

• **$data**: `Object`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:119

___

### $props

• **$props**: `Partial`\<\{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean; `startMargin`: `number`  }\> & `Omit`\<\{ `shift`: `boolean` = Boolean; `data`: `unknown`[] ; `overscan`: `number` ; `horizontal`: `boolean` = Boolean; `startMargin`: `number` ; `itemSize?`: `number` = Number; `ssrCount?`: `number` = Number; `scrollRef?`: `HTMLElement` ; `onScroll`: `undefined` \| (...`args`: [offset: number]) => `any` ; `onScrollEnd`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  } & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps` & `Readonly`\<`ExtractPropTypes`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean; `startMargin`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 0 } ; `ssrCount`: `NumberConstructor` = Number; `scrollRef`: `PropType`\<`HTMLElement`\>  }\>\> & \{ `onScroll`: `undefined` \| (...`args`: [offset: number]) => `any` ; `onScrollEnd`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  }, `DefaultKeys`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean; `startMargin`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 0 } ; `ssrCount`: `NumberConstructor` = Number; `scrollRef`: `PropType`\<`HTMLElement`\>  }\>\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:120

___

### $attrs

• **$attrs**: `Data`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:121

___

### $refs

• **$refs**: `Data`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:122

___

### $slots

• **$slots**: `Readonly`\<\{ `default`: `any`  }\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:123

___

### $root

• **$root**: ``null`` \| `ComponentPublicInstance`\<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`, {}\>, {}, {}\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:124

___

### $parent

• **$parent**: ``null`` \| `ComponentPublicInstance`\<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`, {}\>, {}, {}\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:125

___

### $emit

• **$emit**: (`event`: ``"scroll"``, ...`args`: [offset: number]) => `void` & (`event`: ``"scrollEnd"``, ...`args`: []) => `void` & (`event`: ``"rangeChange"``, ...`args`: [startIndex: number, endIndex: number]) => `void`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:126

___

### $el

• **$el**: `any`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:127

___

### $options

• **$options**: `ComponentOptionsBase`\<`ResolveProps`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean; `startMargin`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 0 } ; `ssrCount`: `NumberConstructor` = Number; `scrollRef`: `PropType`\<`HTMLElement`\>  }, \{ `scroll`: (`offset`: `number`) => `void` ; `scrollEnd`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }\>, `VirtualizerHandle`, {}, {}, {}, `ComponentOptionsMixin`, `ComponentOptionsMixin`, \{ `scroll`: (`offset`: `number`) => `void` ; `scrollEnd`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }, `string`, \{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean; `startMargin`: `number`  }, {}, `string`, `SlotsType`\<\{ `default`: `any`  }\>\> & `MergedComponentOptionsOverride`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:128

___

### $forceUpdate

• **$forceUpdate**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:129

___

### $nextTick

• **$nextTick**: \<T, R\>(`this`: `T`, `fn?`: (`this`: `T`) => `R`) => `Promise`\<`Awaited`\<`R`\>\>

#### Type declaration

▸ \<`T`, `R`\>(`this`, `fn?`): `Promise`\<`Awaited`\<`R`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |
| `R` | `void` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `fn?` | (`this`: `T`) => `R` |

##### Returns

`Promise`\<`Awaited`\<`R`\>\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:130

___

### onScroll

• **onScroll**: `undefined` \| (...`args`: [offset: number]) => `any`

___

### shift

• `Readonly` **shift**: `boolean` = `Boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/vue/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L89)

___

### data

• `Readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L73)

___

### overscan

• `Readonly` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/vue/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L78)

___

### itemSize

• `Optional` `Readonly` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L85)

___

### horizontal

• `Readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/Virtualizer.tsx:93](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L93)

___

### startMargin

• `Readonly` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/vue/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L97)

___

### ssrCount

• `Optional` `Readonly` **ssrCount**: `number` = `Number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/vue/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L101)

___

### scrollRef

• `Optional` `Readonly` **scrollRef**: `HTMLElement`

Reference to the scrollable element. The default will get the parent element of virtualizer.

#### Defined in

[src/vue/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L105)

___

### onScrollEnd

• **onScrollEnd**: `undefined` \| (...`args`: []) => `any`

___

### onRangeChange

• **onRangeChange**: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/vue/Virtualizer.tsx:37](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L37)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/vue/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L41)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/vue/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/Virtualizer.tsx#L45)
