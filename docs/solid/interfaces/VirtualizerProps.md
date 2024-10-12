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

[src/solid/Virtualizer.tsx:81](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L81)

***

### data

> **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L85)

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

[src/solid/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L89)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/solid/Virtualizer.tsx:94](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L94)

***

### as?

> `optional` **as**: `ValidComponent`

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:99](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L99)

***

### item?

> `optional` **item**: `ValidComponent`

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:104](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L104)

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Reference to the scrollable element. The default will get the parent element of virtualizer.

#### Defined in

[src/solid/Virtualizer.tsx:108](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L108)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L115)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/Virtualizer.tsx:119](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L119)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/Virtualizer.tsx:123](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L123)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/solid/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L127)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop or scrollLeft.

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L132)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L136)

***

### onRangeChange()?

> `optional` **onRangeChange**: (`startIndex`, `endIndex`) => `void`

Callback invoked when visible items range changes.

#### Parameters

• **startIndex**: `number`

The start index of viewable items.

• **endIndex**: `number`

The end index of viewable items.

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:140](https://github.com/inokawa/virtua/blob/21b5b4e90d3d1661add9e7a1149339bf1d18958e/src/solid/Virtualizer.tsx#L140)
