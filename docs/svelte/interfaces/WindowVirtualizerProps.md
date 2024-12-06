[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Props of [WindowVirtualizer](../variables/VList.md).

## Type Parameters

• **T**

## Properties

### data

> **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:11](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L11)

***

### children

> **children**: `Snippet`\<[`T`, `number`]\>

The elements renderer snippet.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:15](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L15)

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

[src/svelte/WindowVirtualizer.type.ts:20](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L20)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:25](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L25)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:32](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L32)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L36)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:40](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L40)

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

[src/svelte/WindowVirtualizer.type.ts:45](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L45)

***

### onscrollend()?

> `optional` **onscrollend**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:49](https://github.com/inokawa/virtua/blob/d38b45573a7cac6e3633108c8eb946f094cdcc02/src/svelte/WindowVirtualizer.type.ts#L49)
