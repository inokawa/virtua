[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Props of [Virtualizer](../variables/VList.md).

## Type Parameters

• **T**

## Properties

### data

> **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/svelte/Virtualizer.type.ts:12](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L12)

***

### children

> **children**: `Snippet`\<[`T`, `number`]\>

The elements renderer snippet.

#### Defined in

[src/svelte/Virtualizer.type.ts:16](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L16)

***

### getKey()?

> `optional` **getKey**: (`data`, `index`) => `string` \| `number`

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Parameters

##### data

`T`

##### index

`number`

#### Returns

`string` \| `number`

#### Default

```ts
defaultGetKey (returns index of item)
```

#### Defined in

[src/svelte/Virtualizer.type.ts:21](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L21)

***

### as?

> `optional` **as**: keyof SvelteHTMLElements

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/svelte/Virtualizer.type.ts:26](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L26)

***

### item?

> `optional` **item**: keyof SvelteHTMLElements

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/svelte/Virtualizer.type.ts:31](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L31)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/svelte/Virtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L36)

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

#### Defined in

[src/svelte/Virtualizer.type.ts:40](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L40)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/svelte/Virtualizer.type.ts:47](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L47)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/svelte/Virtualizer.type.ts:51](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L51)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/svelte/Virtualizer.type.ts:55](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L55)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/svelte/Virtualizer.type.ts:59](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L59)

***

### onscroll()?

> `optional` **onscroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Defined in

[src/svelte/Virtualizer.type.ts:64](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L64)

***

### onscrollend()?

> `optional` **onscrollend**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/svelte/Virtualizer.type.ts:68](https://github.com/inokawa/virtua/blob/8d5222c7e9c2619e43b1dc82d4eede5869ba50ca/src/svelte/Virtualizer.type.ts#L68)
