[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/svelte/WindowVirtualizer.type.ts:7](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L7)

Props of [WindowVirtualizer](../variables/VList.md).

## Type Parameters

• **T**

## Properties

### data

> **data**: `T`[]

Defined in: [src/svelte/WindowVirtualizer.type.ts:11](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L11)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/WindowVirtualizer.type.ts:15](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L15)

The elements renderer snippet.

***

### getKey()?

> `optional` **getKey**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:20](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L20)

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

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:25](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L25)

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/svelte/WindowVirtualizer.type.ts:32](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L32)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/svelte/WindowVirtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L36)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/svelte/WindowVirtualizer.type.ts:40](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L40)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### onscroll()?

> `optional` **onscroll**: () => `void`

Defined in: [src/svelte/WindowVirtualizer.type.ts:44](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L44)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onscrollend()?

> `optional` **onscrollend**: () => `void`

Defined in: [src/svelte/WindowVirtualizer.type.ts:48](https://github.com/inokawa/virtua/blob/7faa1c9626ffccb8cf89f6e34847fc072e89e4cf/src/svelte/WindowVirtualizer.type.ts#L48)

Callback invoked when scrolling stops.

#### Returns

`void`
