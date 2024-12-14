[**API**](../../API.md)

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

##### handle?

[`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:93](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L93)

***

### data

> **data**: `T`[]

The data items rendered by this component.

#### Defined in

[src/solid/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L97)

***

### children()

> **children**: (`data`, `index`) => `Element`

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`number`

#### Returns

`Element`

#### Defined in

[src/solid/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L101)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Defined in

[src/solid/Virtualizer.tsx:106](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L106)

***

### as?

> `optional` **as**: `ValidComponent`

Component or element type for container element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L111)

***

### item?

> `optional` **item**: `ValidComponent`

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Defined in

[src/solid/Virtualizer.tsx:116](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L116)

***

### scrollRef?

> `optional` **scrollRef**: `HTMLElement`

Reference to the scrollable element. The default will get the direct parent element of virtualizer.

#### Defined in

[src/solid/Virtualizer.tsx:120](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L120)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/solid/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L127)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/solid/Virtualizer.tsx:131](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L131)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/solid/Virtualizer.tsx:135](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L135)

***

### startMargin?

> `optional` **startMargin**: `number`

If you put an element before virtualizer, you have to define its height with this prop.

#### Defined in

[src/solid/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L139)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:144](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L144)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Defined in

[src/solid/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/07a9bf9ed8118e1336c76ca2d56bbd6662d2b6ba/src/solid/Virtualizer.tsx#L148)
