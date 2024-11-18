[**API**](../../API.md) • **Docs**

***

# Interface: VirtualizerProps\<T\>

Props of [Virtualizer](../functions/Virtualizer.md).

## Type Parameters

• **T**

## Properties

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

• **handle?**: [`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:92](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L92)

***

### data

> **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L96)

***

### children()

> **children**: (`data`, `index`) => `Element`

The elements renderer function.

#### Parameters

• **data**: `T`

• **index**: `number`

#### Returns

`Element`

#### Defined in

[src/solid/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L100)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/solid/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L105)

***

### as?

> `optional` **as**: `ValidComponent`

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:110](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L110)

***

### item?

> `optional` **item**: `ValidComponent`

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L115)

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

#### Defined in

[src/solid/Virtualizer.tsx:119](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L119)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/Virtualizer.tsx:126](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L126)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/Virtualizer.tsx:130](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L130)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/Virtualizer.tsx:134](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L134)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/solid/Virtualizer.tsx:138](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L138)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:143](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L143)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:147](https://github.com/inokawa/virtua/blob/7b801f16c7f1cf5eb033801b816966faaa8a6b18/src/solid/Virtualizer.tsx#L147)
