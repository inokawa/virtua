[**API**](../../API.md)

***

# Interface: WindowVirtualizerProps\<T\>

Defined in: [src/solid/WindowVirtualizer.tsx:52](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L52)

Props of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Type Parameters

• **T**

## Properties

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:56](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L56)

Get reference to [WindowVirtualizerHandle](WindowVirtualizerHandle.md).

#### Parameters

##### handle?

[`WindowVirtualizerHandle`](WindowVirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: `T`[]

Defined in: [src/solid/WindowVirtualizer.tsx:60](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L60)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/WindowVirtualizer.tsx:64](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L64)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`number`

#### Returns

`Element`

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:69](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L69)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/WindowVirtualizer.tsx:76](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L76)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:80](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L80)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/WindowVirtualizer.tsx:84](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L84)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### onScroll()?

> `optional` **onScroll**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:88](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L88)

Callback invoked whenever scroll offset changes.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/WindowVirtualizer.tsx:92](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/WindowVirtualizer.tsx#L92)

Callback invoked when scrolling stops.

#### Returns

`void`
