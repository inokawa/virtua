[**API**](../../API.md)

***

# Interface: VirtualizerProps\<T\>

Defined in: [src/solid/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L89)

Props of [Virtualizer](../functions/Virtualizer.md).

## Type Parameters

• **T**

## Properties

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Defined in: [src/solid/Virtualizer.tsx:93](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L93)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

##### handle?

[`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

***

### data

> **data**: `T`[]

Defined in: [src/solid/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L97)

The data items rendered by this component.

***

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L101)

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

Defined in: [src/solid/Virtualizer.tsx:106](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L106)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

***

### as?

> `optional` **as**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L111)

Component or element type for container element.

#### Default Value

```ts
"div"
```

***

### item?

> `optional` **item**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L116)

Component or element type for item element.

#### Default Value

```ts
"div"
```

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Defined in: [src/solid/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L120)

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L127)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:131](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L131)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:135](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L135)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

***

### startMargin?

> `optional` **startMargin**: `number`

Defined in: [src/solid/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L139)

If you put an element before virtualizer, you have to define its height with this prop.

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:144](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L144)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L148)

Callback invoked when scrolling stops.

#### Returns

`void`
