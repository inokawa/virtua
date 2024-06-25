# Class: WindowVirtualizer

[vue](../modules/vue.md).WindowVirtualizer

## Table of contents

### Methods

- [$watch](vue.WindowVirtualizer.md#$watch)

### Properties

- [$](vue.WindowVirtualizer.md#$)
- [$data](vue.WindowVirtualizer.md#$data)
- [$props](vue.WindowVirtualizer.md#$props)
- [$attrs](vue.WindowVirtualizer.md#$attrs)
- [$refs](vue.WindowVirtualizer.md#$refs)
- [$slots](vue.WindowVirtualizer.md#$slots)
- [$root](vue.WindowVirtualizer.md#$root)
- [$parent](vue.WindowVirtualizer.md#$parent)
- [$emit](vue.WindowVirtualizer.md#$emit)
- [$el](vue.WindowVirtualizer.md#$el)
- [$options](vue.WindowVirtualizer.md#$options)
- [$forceUpdate](vue.WindowVirtualizer.md#$forceupdate)
- [$nextTick](vue.WindowVirtualizer.md#$nexttick)
- [shift](vue.WindowVirtualizer.md#shift)
- [data](vue.WindowVirtualizer.md#data)
- [overscan](vue.WindowVirtualizer.md#overscan)
- [itemSize](vue.WindowVirtualizer.md#itemsize)
- [horizontal](vue.WindowVirtualizer.md#horizontal)
- [onScrollEnd](vue.WindowVirtualizer.md#onscrollend)
- [onRangeChange](vue.WindowVirtualizer.md#onrangechange)

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

• **$props**: `Partial`\<\{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean }\> & `Omit`\<\{ `shift`: `boolean` = Boolean; `data`: `unknown`[] ; `overscan`: `number` ; `horizontal`: `boolean` = Boolean; `itemSize?`: `number` = Number; `onScrollEnd`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  } & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps` & `Readonly`\<`ExtractPropTypes`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }\>\> & \{ `onScrollEnd`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  }, `DefaultKeys`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }\>\>

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

• **$emit**: (`event`: ``"scrollEnd"``, ...`args`: []) => `void` & (`event`: ``"rangeChange"``, ...`args`: [startIndex: number, endIndex: number]) => `void`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:126

___

### $el

• **$el**: `any`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:127

___

### $options

• **$options**: `ComponentOptionsBase`\<`ResolveProps`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `itemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }, \{ `scrollEnd`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }\>, `void`, {}, {}, {}, `ComponentOptionsMixin`, `ComponentOptionsMixin`, \{ `scrollEnd`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }, `string`, \{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean }, {}, `string`, `SlotsType`\<\{ `default`: `any`  }\>\> & `MergedComponentOptionsOverride`

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

### shift

• `Readonly` **shift**: `boolean` = `Boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/vue/WindowVirtualizer.tsx:47](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/WindowVirtualizer.tsx#L47)

___

### data

• `Readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/WindowVirtualizer.tsx:31](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/WindowVirtualizer.tsx#L31)

___

### overscan

• `Readonly` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/vue/WindowVirtualizer.tsx:36](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/WindowVirtualizer.tsx#L36)

___

### itemSize

• `Optional` `Readonly` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/WindowVirtualizer.tsx:43](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/WindowVirtualizer.tsx#L43)

___

### horizontal

• `Readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/WindowVirtualizer.tsx:51](https://github.com/inokawa/virtua/blob/c838c301e98bd6d7e11745e97de78ae29c8fe7ab/src/vue/WindowVirtualizer.tsx#L51)

___

### onScrollEnd

• **onScrollEnd**: `undefined` \| (...`args`: []) => `any`

___

### onRangeChange

• **onRangeChange**: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`
