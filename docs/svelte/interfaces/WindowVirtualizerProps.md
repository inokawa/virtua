[**API**](../../API.md) • **Docs**

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

[src/svelte/WindowVirtualizer.type.ts:10](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L10)

***

### children

> **children**: `Snippet`\<[`T`, `number`]\>

The elements renderer snippet.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:14](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L14)

***

### getKey()?

> `optional` **getKey**: (`data`, `index`) => `string` \| `number`

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Parameters

• **data**: `T`

• **index**: `number`

#### Returns

`string` \| `number`

#### Default

```ts
defaultGetKey (returns index of item)
```

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:19](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L19)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:24](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L24)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:31](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L31)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:35](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L35)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:39](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L39)

***

### onscroll()?

> `optional` **onscroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:44](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L44)

***

### onscrollend()?

> `optional` **onscrollend**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/svelte/WindowVirtualizer.type.ts:48](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/svelte/WindowVirtualizer.type.ts#L48)
