# Class: VList

[vue](../modules/vue.md).VList

## Table of contents

### Methods

- [$watch](vue.VList.md#$watch)
- [scrollToIndex](vue.VList.md#scrolltoindex)
- [scrollTo](vue.VList.md#scrollto)
- [scrollBy](vue.VList.md#scrollby)

### Properties

- [$](vue.VList.md#$)
- [$data](vue.VList.md#$data)
- [$props](vue.VList.md#$props)
- [$attrs](vue.VList.md#$attrs)
- [$refs](vue.VList.md#$refs)
- [$slots](vue.VList.md#$slots)
- [$root](vue.VList.md#$root)
- [$parent](vue.VList.md#$parent)
- [$emit](vue.VList.md#$emit)
- [$el](vue.VList.md#$el)
- [$options](vue.VList.md#$options)
- [$forceUpdate](vue.VList.md#$forceupdate)
- [$nextTick](vue.VList.md#$nexttick)
- [onScroll](vue.VList.md#onscroll)
- [shift](vue.VList.md#shift)
- [data](vue.VList.md#data)
- [overscan](vue.VList.md#overscan)
- [itemSize](vue.VList.md#itemsize)
- [horizontal](vue.VList.md#horizontal)
- [onScrollEnd](vue.VList.md#onscrollend)
- [onRangeChange](vue.VList.md#onrangechange)
- [scrollOffset](vue.VList.md#scrolloffset)
- [scrollSize](vue.VList.md#scrollsize)
- [viewportSize](vue.VList.md#viewportsize)

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

[src/vue/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/Virtualizer.tsx#L49)

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

[src/vue/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/Virtualizer.tsx#L54)

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

[src/vue/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/Virtualizer.tsx#L59)

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

• **$props**: `Partial`\<\{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean }\> & `Omit`\<\{ `shift`: `boolean` = Boolean; `data`: `unknown`[] ; `overscan`: `number` ; `horizontal`: `boolean` = Boolean; `itemSize?`: `number` = Number; `onScroll`: `undefined` \| (...`args`: [offset: number]) => `any` ; `onScrollEnd`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  } & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps` & `Readonly`\<`ExtractPropTypes`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }\>\> & \{ `onScroll`: `undefined` \| (...`args`: [offset: number]) => `any` ; `onScrollEnd`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  }, `DefaultKeys`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }\>\>

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

• **$options**: `ComponentOptionsBase`\<`ResolveProps`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }, \{ `scroll`: (`offset`: `number`) => `void` ; `scrollEnd`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }\>, `VListHandle`, {}, {}, {}, `ComponentOptionsMixin`, `ComponentOptionsMixin`, \{ `scroll`: (`offset`: `number`) => `void` ; `scrollEnd`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }, `string`, \{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean }, {}, `string`, `SlotsType`\<\{ `default`: `any`  }\>\> & `MergedComponentOptionsOverride`

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

[src/vue/VList.tsx:34](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/VList.tsx#L34)

___

### data

• `Readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/VList.tsx:18](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/VList.tsx#L18)

___

### overscan

• `Readonly` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/vue/VList.tsx:23](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/VList.tsx#L23)

___

### itemSize

• `Optional` `Readonly` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/VList.tsx:30](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/VList.tsx#L30)

___

### horizontal

• `Readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/VList.tsx:38](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/VList.tsx#L38)

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

[src/vue/Virtualizer.tsx:35](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/Virtualizer.tsx#L35)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/vue/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/Virtualizer.tsx#L39)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/vue/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/9a5dd870/src/vue/Virtualizer.tsx#L43)
