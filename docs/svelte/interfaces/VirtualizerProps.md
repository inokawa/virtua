[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/svelte/Virtualizer.type.ts:8](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L8)

Props of [Virtualizer](../variables/VList.md).

## Type Parameters

### T

`T`

## Properties

### data

> **data**: readonly `T`[]

Defined in: [src/svelte/Virtualizer.type.ts:12](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L12)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/Virtualizer.type.ts:16](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L16)

The elements renderer snippet.

***

### getKey()?

> `optional` **getKey**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/Virtualizer.type.ts:21](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L21)

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

***

### as?

> `optional` **as**: keyof SvelteHTMLElements

Defined in: [src/svelte/Virtualizer.type.ts:26](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L26)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: keyof SvelteHTMLElements

Defined in: [src/svelte/Virtualizer.type.ts:31](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L31)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L36)

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Defined in: [src/svelte/Virtualizer.type.ts:40](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L40)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:47](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L47)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:51](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L51)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:55](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L55)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### keepMounted?

> `optional` **keepMounted**: readonly `number`[]

Defined in: [src/svelte/Virtualizer.type.ts:59](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L59)

List of indexes that should be always mounted, even when off screen.

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:63](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L63)

The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.

***

### onscroll()?

> `optional` **onscroll**: (`offset`) => `void`

Defined in: [src/svelte/Virtualizer.type.ts:68](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L68)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

***

### onscrollend()?

> `optional` **onscrollend**: () => `void`

Defined in: [src/svelte/Virtualizer.type.ts:72](https://github.com/inokawa/virtua/blob/5072790752661114900e737891909dbe90b54dd0/src/svelte/Virtualizer.type.ts#L72)

Callback invoked when scrolling stops.

#### Returns

`void`
