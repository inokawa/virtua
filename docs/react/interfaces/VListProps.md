[**API**](../../API.md) • **Docs**

***

# Interface: VListProps

Props of [VList](../functions/VList.md).

## Extends

- `Pick`\<[`VirtualizerProps`](VirtualizerProps.md), `"children"` \| `"count"` \| `"overscan"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"cache"` \| `"ssrCount"` \| `"item"` \| `"onScroll"` \| `"onScrollEnd"` \| `"onRangeChange"` \| `"keepMounted"`\>.[`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md)

## Properties

### reverse?

> `optional` **reverse**: `boolean`

If true, items are aligned to the end of the list when total size of items are smaller than viewport size. It's useful for chat like app.

#### Defined in

[src/react/VList.tsx:39](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/VList.tsx#L39)

***

### children

> **children**: `ReactNode` \| (`index`) => `ReactElement`\<`any`, string \| JSXElementConstructor\<any\>\>

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.count](VirtualizerProps.md#count) to create elements lazily.

#### Inherited from

`Pick.children`

#### Defined in

[src/react/Virtualizer.tsx:87](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L87)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop or scrollLeft.

#### Returns

`void`

#### Inherited from

`Pick.onScroll`

#### Defined in

[src/react/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L148)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Inherited from

`Pick.shift`

#### Defined in

[src/react/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L111)

***

### count?

> `optional` **count**: `number`

If you set a function to [VirtualizerProps.children](VirtualizerProps.md#children), you have to set total number of items to this prop.

#### Inherited from

`Pick.count`

#### Defined in

[src/react/Virtualizer.tsx:91](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L91)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Inherited from

`Pick.overscan`

#### Defined in

[src/react/Virtualizer.tsx:96](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L96)

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

List of indexes that should be always mounted, even when off screen.

#### Inherited from

`Pick.keepMounted`

#### Defined in

[src/react/Virtualizer.tsx:100](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L100)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

#### Defined in

[src/react/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L107)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

#### Defined in

[src/react/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L115)

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

You can restore cache by passing a [CacheSnapshot](CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VirtualizerHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Inherited from

`Pick.cache`

#### Defined in

[src/react/Virtualizer.tsx:121](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L121)

***

### ssrCount?

> `optional` **ssrCount**: `number`

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.

#### Inherited from

`Pick.ssrCount`

#### Defined in

[src/react/Virtualizer.tsx:129](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L129)

***

### item?

> `optional` **item**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Inherited from

`Pick.item`

#### Defined in

[src/react/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L139)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

#### Defined in

[src/react/Virtualizer.tsx:152](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L152)

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

#### Inherited from

`Pick.onRangeChange`

#### Defined in

[src/react/Virtualizer.tsx:156](https://github.com/inokawa/virtua/blob/c4486f49befc33ff316c88e078ef51a7edac3edc/src/react/Virtualizer.tsx#L156)

***

### className?

> `optional` **className**: `string`

#### Inherited from

`ViewportComponentAttributes.className`

#### Defined in

node\_modules/@types/react/index.d.ts:2897

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`ViewportComponentAttributes.style`

#### Defined in

node\_modules/@types/react/index.d.ts:2908

***

### id?

> `optional` **id**: `string`

#### Inherited from

`ViewportComponentAttributes.id`

#### Defined in

node\_modules/@types/react/index.d.ts:2903

***

### role?

> `optional` **role**: `AriaRole`

#### Inherited from

`ViewportComponentAttributes.role`

#### Defined in

node\_modules/@types/react/index.d.ts:2917

***

### tabIndex?

> `optional` **tabIndex**: `number`

#### Inherited from

`ViewportComponentAttributes.tabIndex`

#### Defined in

node\_modules/@types/react/index.d.ts:2909

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLElement`\>

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2429

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLElement`\>

#### Inherited from

`ViewportComponentAttributes.onWheel`

#### Defined in

node\_modules/@types/react/index.d.ts:2563

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

#### Defined in

node\_modules/@types/react/index.d.ts:2593

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

#### Defined in

node\_modules/@types/react/index.d.ts:2595

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"inline"` \| `"none"` \| `"both"` \| `"list"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

#### Defined in

node\_modules/@types/react/index.d.ts:2600

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`ViewportComponentAttributes.aria-braillelabel`

#### Defined in

node\_modules/@types/react/index.d.ts:2606

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`ViewportComponentAttributes.aria-brailleroledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2611

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

#### Inherited from

`ViewportComponentAttributes.aria-busy`

#### Defined in

node\_modules/@types/react/index.d.ts:2612

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

#### Defined in

node\_modules/@types/react/index.d.ts:2617

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2622

***

### aria-colindex?

> `optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2627

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`ViewportComponentAttributes.aria-colindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2632

***

### aria-colspan?

> `optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

#### Defined in

node\_modules/@types/react/index.d.ts:2637

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

#### Defined in

node\_modules/@types/react/index.d.ts:2642

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"page"` \| `"false"` \| `"true"` \| `"location"` \| `"date"` \| `"step"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

#### Defined in

node\_modules/@types/react/index.d.ts:2644

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

#### Defined in

node\_modules/@types/react/index.d.ts:2649

***

### aria-description?

> `optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-description`

#### Defined in

node\_modules/@types/react/index.d.ts:2654

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

#### Defined in

node\_modules/@types/react/index.d.ts:2659

***

### aria-disabled?

> `optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

#### Defined in

node\_modules/@types/react/index.d.ts:2664

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"copy"` \| `"none"` \| `"link"` \| `"move"` \| `"execute"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

#### Defined in

node\_modules/@types/react/index.d.ts:2669

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

#### Defined in

node\_modules/@types/react/index.d.ts:2674

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

#### Defined in

node\_modules/@types/react/index.d.ts:2676

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

#### Defined in

node\_modules/@types/react/index.d.ts:2681

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

#### Defined in

node\_modules/@types/react/index.d.ts:2686

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"false"` \| `"true"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

#### Defined in

node\_modules/@types/react/index.d.ts:2688

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2693

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"false"` \| `"true"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2698

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

#### Defined in

node\_modules/@types/react/index.d.ts:2700

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

#### Defined in

node\_modules/@types/react/index.d.ts:2705

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

#### Defined in

node\_modules/@types/react/index.d.ts:2710

***

### aria-level?

> `optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

#### Defined in

node\_modules/@types/react/index.d.ts:2712

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

#### Defined in

node\_modules/@types/react/index.d.ts:2714

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

#### Defined in

node\_modules/@types/react/index.d.ts:2716

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

#### Defined in

node\_modules/@types/react/index.d.ts:2718

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2720

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

#### Defined in

node\_modules/@types/react/index.d.ts:2722

***

### aria-owns?

> `optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

#### Defined in

node\_modules/@types/react/index.d.ts:2728

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

#### Defined in

node\_modules/@types/react/index.d.ts:2733

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

#### Defined in

node\_modules/@types/react/index.d.ts:2738

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

#### Defined in

node\_modules/@types/react/index.d.ts:2743

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

#### Defined in

node\_modules/@types/react/index.d.ts:2748

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

#### Defined in

node\_modules/@types/react/index.d.ts:2753

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

#### Defined in

node\_modules/@types/react/index.d.ts:2766

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2768

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2773

***

### aria-rowindex?

> `optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2778

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`ViewportComponentAttributes.aria-rowindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2783

***

### aria-rowspan?

> `optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

#### Defined in

node\_modules/@types/react/index.d.ts:2788

***

### aria-selected?

> `optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

#### Defined in

node\_modules/@types/react/index.d.ts:2793

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

#### Defined in

node\_modules/@types/react/index.d.ts:2798

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

#### Defined in

node\_modules/@types/react/index.d.ts:2800

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

#### Defined in

node\_modules/@types/react/index.d.ts:2802

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

#### Defined in

node\_modules/@types/react/index.d.ts:2804

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

#### Defined in

node\_modules/@types/react/index.d.ts:2809

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

#### Defined in

node\_modules/@types/react/index.d.ts:2811
