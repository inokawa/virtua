[**API**](../../API.md)

***

# Class: VList

## Methods

### $watch()

> **$watch**\<`T`\>(`source`, `cb`, `options`?): `WatchStopHandle`

#### Type Parameters

• **T** *extends* `string` \| (...`args`) => `any`

#### Parameters

##### source

`T`

##### cb

`T` *extends* (...`args`) => `R` ? (...`args`) => `any` : (...`args`) => `any`

##### options?

`WatchOptions`\<`boolean`\>

#### Returns

`WatchStopHandle`

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:130

***

### getItemOffset()

> **getItemOffset**(`index`): `number`

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:60](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L60)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:65](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L65)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:71](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L71)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:76](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L76)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Defined in

[src/vue/Virtualizer.tsx:81](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L81)

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

###### arg

###### arg.item

`any`

###### arg.index

`number`

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

##### this

`T`

##### fn?

(`this`) => `R`

#### Returns

`Promise`\<`Awaited`\<`R`\>\>

#### Defined in

node\_modules/@vue/runtime-core/dist/runtime-core.d.ts:129

***

### onScroll()?

> `optional` **onScroll**: (...`args`) => `any`

#### Parameters

##### args

...[`number`]

#### Returns

`any`

***

### shift

> `readonly` **shift**: `boolean` = `Boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/vue/VList.tsx:37](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L37)

***

### data

> `readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/VList.tsx:21](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L21)

***

### overscan?

> `readonly` `optional` **overscan**: `number` = `Number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/vue/VList.tsx:26](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L26)

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/VList.tsx:33](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L33)

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/VList.tsx:41](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L41)

***

### keepMounted?

> `readonly` `optional` **keepMounted**: `number`[]

List of indexes that should be always mounted, even when off screen.

#### Defined in

[src/vue/VList.tsx:55](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L55)

***

### ssrCount?

> `readonly` `optional` **ssrCount**: `number` = `Number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/vue/VList.tsx:45](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L45)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: (...`args`) => `any`

#### Parameters

##### args

...[]

#### Returns

`any`

***

### itemProps?

> `readonly` `optional` **itemProps**: `ItemProps`

A function that provides properties/attributes for item element

**This prop will be merged into `item` prop in the future**

#### Defined in

[src/vue/VList.tsx:51](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/VList.tsx#L51)

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Defined in

[src/vue/Virtualizer.tsx:39](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L39)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Defined in

[src/vue/Virtualizer.tsx:43](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L43)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Defined in

[src/vue/Virtualizer.tsx:47](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L47)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:51](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L51)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:55](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/vue/Virtualizer.tsx#L55)
