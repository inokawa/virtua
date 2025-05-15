[**API**](../../API.md)

***

# Interface: VListProps\<T\>

Defined in: [src/svelte/VList.type.ts:7](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/VList.type.ts#L7)

Props of [VList](../type-aliases/VList.md).

## Extends

- `Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"data"` \| `"getKey"` \| `"overscan"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"children"` \| `"onscroll"` \| `"onscrollend"`\>.`ViewportComponentAttributes`

## Type Parameters

• **T**

## Properties

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/Virtualizer.type.ts:16](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L16)

The elements renderer snippet.

#### Inherited from

`Pick.children`

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:51](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L51)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Inherited from

`Pick.shift`

***

### data

> **data**: `T`[]

Defined in: [src/svelte/Virtualizer.type.ts:12](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L12)

The data items rendered by this component.

#### Inherited from

`Pick.data`

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:36](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L36)

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Inherited from

`Pick.overscan`

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/svelte/Virtualizer.type.ts:47](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L47)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/svelte/Virtualizer.type.ts:55](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L55)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

***

### onscroll()?

> `optional` **onscroll**: (`offset`) => `void`

Defined in: [src/svelte/Virtualizer.type.ts:64](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L64)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Inherited from

`Pick.onscroll`

***

### onscrollend()?

> `optional` **onscrollend**: () => `void`

Defined in: [src/svelte/Virtualizer.type.ts:68](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L68)

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onscrollend`

***

### getKey()?

> `optional` **getKey**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/Virtualizer.type.ts:21](https://github.com/inokawa/virtua/blob/f141590c318c92fb814be380223b1e62dac03ace/src/svelte/Virtualizer.type.ts#L21)

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

#### Inherited from

`Pick.getKey`

***

### style?

> `optional` **style**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:749

#### Inherited from

`ViewportComponentAttributes.style`

***

### id?

> `optional` **id**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:743

#### Inherited from

`ViewportComponentAttributes.id`

***

### role?

> `optional` **role**: `null` \| `AriaRole`

Defined in: node\_modules/svelte/elements.d.ts:761

#### Inherited from

`ViewportComponentAttributes.role`

***

### class?

> `optional` **class**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:726

#### Inherited from

`ViewportComponentAttributes.class`

***

### tabindex?

> `optional` **tabindex**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:750

#### Inherited from

`ViewportComponentAttributes.tabindex`

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:451

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:453

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `null` \| `"inline"` \| `"none"` \| `"both"` \| `"list"`

Defined in: node\_modules/svelte/elements.d.ts:458

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-busy?

> `optional` **aria-busy**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:460

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked**: `null` \| `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/svelte/elements.d.ts:465

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:470

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:475

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colspan?

> `optional` **aria-colspan**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:480

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:485

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current**: `null` \| `"time"` \| `"page"` \| `"location"` \| `"step"` \| `"date"` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:487

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:492

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-details?

> `optional` **aria-details**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:497

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:502

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `null` \| `"copy"` \| `"none"` \| `"link"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/svelte/elements.d.ts:507

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:512

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:514

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:519

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:524

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup**: `null` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"tree"` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:526

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:531

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid**: `null` \| `"grammar"` \| `"spelling"` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:536

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:538

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:543

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:548

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:550

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live**: `null` \| `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/svelte/elements.d.ts:552

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:554

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:556

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:558

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation**: `null` \| `"horizontal"` \| `"vertical"`

Defined in: node\_modules/svelte/elements.d.ts:560

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:566

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:571

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:576

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed**: `null` \| `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/svelte/elements.d.ts:581

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:586

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant**: `null` \| `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/svelte/elements.d.ts:591

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:605

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:607

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:612

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:617

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowspan?

> `optional` **aria-rowspan**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:622

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected**: `null` \| `Booleanish`

Defined in: node\_modules/svelte/elements.d.ts:627

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:632

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort**: `null` \| `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Defined in: node\_modules/svelte/elements.d.ts:634

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:636

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:638

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow**: `null` \| `number`

Defined in: node\_modules/svelte/elements.d.ts:643

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext**: `null` \| `string`

Defined in: node\_modules/svelte/elements.d.ts:645

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`
