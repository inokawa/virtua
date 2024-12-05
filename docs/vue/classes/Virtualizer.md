[**API**](../../API.md)

***

# Class: Virtualizer

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

[src/vue/Virtualizer.tsx:59](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L59)

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

[src/vue/Virtualizer.tsx:64](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L64)

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

[src/vue/Virtualizer.tsx:70](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L70)

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

[src/vue/Virtualizer.tsx:75](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L75)

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

[src/vue/Virtualizer.tsx:80](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L80)

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

> **$options**: `ComponentOptionsBase`\<`ResolveProps`\<`object`, `object`\>, `VirtualizerHandle`, `object`, `object`, `object`, `ComponentOptionsMixin`, `ComponentOptionsMixin`, `object`, `string`, `object`, `object`, `string`, `SlotsType`\<`object`\>\> & `MergedComponentOptionsOverride`

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

[src/vue/Virtualizer.tsx:103](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L103)

***

### data

> `readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L87)

***

### overscan?

> `readonly` `optional` **overscan**: `number` = `Number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/vue/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L92)

***

### itemSize?

> `readonly` `optional` **itemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/Virtualizer.tsx:99](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L99)

***

### horizontal

> `readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L107)

***

### startMargin

> `readonly` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/vue/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L111)

***

### ssrCount?

> `readonly` `optional` **ssrCount**: `number` = `Number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Defined in

[src/vue/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L115)

***

### as

> `readonly` **as**: keyof `IntrinsicElementAttributes`

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/vue/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L124)

***

### item

> `readonly` **item**: keyof `IntrinsicElementAttributes`

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/vue/Virtualizer.tsx:129](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L129)

***

### scrollRef?

> `readonly` `optional` **scrollRef**: `HTMLElement`

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

#### Defined in

[src/vue/Virtualizer.tsx:119](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L119)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: (...`args`) => `any`

#### Parameters

##### args

...[]

#### Returns

`any`

***

### scrollOffset

> `readonly` **scrollOffset**: `number`

Get current scrollTop, or scrollLeft if horizontal: true.

#### Defined in

[src/vue/Virtualizer.tsx:38](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L38)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Defined in

[src/vue/Virtualizer.tsx:42](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L42)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Defined in

[src/vue/Virtualizer.tsx:46](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L46)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:50](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L50)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/vue/Virtualizer.tsx:54](https://github.com/inokawa/virtua/blob/0a4513b80d8d679540fff553774df27612ecd80e/src/vue/Virtualizer.tsx#L54)
