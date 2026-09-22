[**API**](../../API.md)

***

# Interface: VGridProps\<R, C\>

Defined in: [src/svelte/VGrid.type.ts:14](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L14)

Props of [VGrid](../variables/VList.md).

## Extends

- `Omit`\<`ViewportComponentAttributes`, `"role"`\>

## Type Parameters

### R

`R` = `number`

### C

`C` = `number`

## Properties

### children

> **children**: `Snippet`\<\[`R`, `C`, `Readonly`\<[`GridCell`](../../core/interfaces/GridCell.md)\>\]\>

Defined in: [src/svelte/VGrid.type.ts:24](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L24)

A snippet to create cell elements rendered by this component.

#### Param

**row**

the item of [VGridProps.rows](#rows) at the row of the cell, or the row index if [VGridProps.rows](#rows) is a number

#### Param

**col**

the item of [VGridProps.cols](#cols) at the column of the cell, or the column index if [VGridProps.cols](#cols) is a number

#### Param

**cell**

the row index and the column index of the cell

***

### rows

> **rows**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`R`\>

Defined in: [src/svelte/VGrid.type.ts:28](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L28)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> **cols**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>

Defined in: [src/svelte/VGrid.type.ts:32](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L32)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> **rowHeight**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>

Defined in: [src/svelte/VGrid.type.ts:36](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L36)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> **colWidth**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>

Defined in: [src/svelte/VGrid.type.ts:40](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L40)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows?

> `optional` **headerRows?**: `number`

Defined in: [src/svelte/VGrid.type.ts:47](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L47)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows?

> `optional` **sectionRows?**: readonly `number`[]

Defined in: [src/svelte/VGrid.type.ts:53](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L53)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows?

> `optional` **footerRows?**: `number`

Defined in: [src/svelte/VGrid.type.ts:60](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L60)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols?

> `optional` **headerCols?**: `number`

Defined in: [src/svelte/VGrid.type.ts:67](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L67)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols?

> `optional` **footerCols?**: `number`

Defined in: [src/svelte/VGrid.type.ts:74](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L74)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans?

> `optional` **spans?**: readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[]

Defined in: [src/svelte/VGrid.type.ts:80](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L80)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted?

> `optional` **keepMounted?**: readonly [`GridCell`](../../core/interfaces/GridCell.md)[]

Defined in: [src/svelte/VGrid.type.ts:84](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L84)

List of cells that should be always mounted, even when off screen.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/svelte/VGrid.type.ts:89](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L89)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/svelte/VGrid.type.ts:94](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L94)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort?

> `optional` **ariaSort?**: [`GridCell`](../../core/interfaces/GridCell.md) & `object`

Defined in: [src/svelte/VGrid.type.ts:98](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L98)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

#### Type Declaration

##### order

> **order**: `"ascending"` \| `"descending"` \| `"other"`

***

### onverticalscroll?

> `optional` **onverticalscroll?**: (`offset`) => `void`

Defined in: [src/svelte/VGrid.type.ts:103](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L103)

Callback invoked whenever the vertical scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop.

#### Returns

`void`

***

### onhorizontalscroll?

> `optional` **onhorizontalscroll?**: (`offset`) => `void`

Defined in: [src/svelte/VGrid.type.ts:108](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L108)

Callback invoked whenever the horizontal scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollLeft. Always positive even in RTL.

#### Returns

`void`

***

### onscrollend?

> `optional` **onscrollend?**: () => `void`

Defined in: [src/svelte/VGrid.type.ts:112](https://github.com/inokawa/virtua/blob/d2c401060e6d18a2ba3047dfbec3d3261c983fcc/src/svelte/VGrid.type.ts#L112)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### style?

> `optional` **style?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:779

#### Inherited from

`Omit.style`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:647

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-rowindex`](VListProps.md#aria-rowindex)

***

### aria-colindex?

> `optional` **aria-colindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:505

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-colindex`](VListProps.md#aria-colindex)

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:652

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-rowspan`](VListProps.md#aria-rowspan)

***

### aria-colspan?

> `optional` **aria-colspan?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:510

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-colspan`](VListProps.md#aria-colspan)

***

### id?

> `optional` **id?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:773

#### Inherited from

`Omit.id`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:481

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-activedescendant`](VListProps.md#aria-activedescendant)

***

### aria-atomic?

> `optional` **aria-atomic?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:483

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-atomic`](VListProps.md#aria-atomic)

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:488

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-autocomplete`](VListProps.md#aria-autocomplete)

***

### aria-busy?

> `optional` **aria-busy?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:490

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-busy`](VListProps.md#aria-busy)

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:495

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-checked`](VListProps.md#aria-checked)

***

### aria-colcount?

> `optional` **aria-colcount?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:500

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-colcount`](VListProps.md#aria-colcount)

***

### aria-controls?

> `optional` **aria-controls?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:515

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-controls`](VListProps.md#aria-controls)

***

### aria-current?

> `optional` **aria-current?**: `"time"` \| `"page"` \| `"step"` \| `"location"` \| `"date"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:517

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-current`](VListProps.md#aria-current)

***

### aria-describedby?

> `optional` **aria-describedby?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:522

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

[`VListProps`](VListProps.md).[`aria-describedby`](VListProps.md#aria-describedby)

***

### aria-details?

> `optional` **aria-details?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:527

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-details`](VListProps.md#aria-details)

***

### aria-disabled?

> `optional` **aria-disabled?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:532

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-disabled`](VListProps.md#aria-disabled)

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:537

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

[`VListProps`](VListProps.md).[`aria-dropeffect`](VListProps.md#aria-dropeffect)

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:542

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-errormessage`](VListProps.md#aria-errormessage)

***

### aria-expanded?

> `optional` **aria-expanded?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:544

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-expanded`](VListProps.md#aria-expanded)

***

### aria-flowto?

> `optional` **aria-flowto?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:549

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-flowto`](VListProps.md#aria-flowto)

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:554

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

[`VListProps`](VListProps.md).[`aria-grabbed`](VListProps.md#aria-grabbed)

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `"dialog"` \| `"menu"` \| `"grid"` \| `"listbox"` \| `"tree"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:556

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-haspopup`](VListProps.md#aria-haspopup)

***

### aria-hidden?

> `optional` **aria-hidden?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:561

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-hidden`](VListProps.md#aria-hidden)

***

### aria-invalid?

> `optional` **aria-invalid?**: `"grammar"` \| `"spelling"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:566

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-invalid`](VListProps.md#aria-invalid)

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:568

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-keyshortcuts`](VListProps.md#aria-keyshortcuts)

***

### aria-label?

> `optional` **aria-label?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:573

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-label`](VListProps.md#aria-label)

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:578

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-labelledby`](VListProps.md#aria-labelledby)

***

### aria-level?

> `optional` **aria-level?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:580

Defines the hierarchical level of an element within a structure.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-level`](VListProps.md#aria-level)

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:582

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-live`](VListProps.md#aria-live)

***

### aria-modal?

> `optional` **aria-modal?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:584

Indicates whether an element is modal when displayed.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-modal`](VListProps.md#aria-modal)

***

### aria-multiline?

> `optional` **aria-multiline?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:586

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-multiline`](VListProps.md#aria-multiline)

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:588

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-multiselectable`](VListProps.md#aria-multiselectable)

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:590

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-orientation`](VListProps.md#aria-orientation)

***

### aria-owns?

> `optional` **aria-owns?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:596

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-owns`](VListProps.md#aria-owns)

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:601

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-placeholder`](VListProps.md#aria-placeholder)

***

### aria-posinset?

> `optional` **aria-posinset?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:606

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-posinset`](VListProps.md#aria-posinset)

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:611

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-pressed`](VListProps.md#aria-pressed)

***

### aria-readonly?

> `optional` **aria-readonly?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:616

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-readonly`](VListProps.md#aria-readonly)

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:621

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-relevant`](VListProps.md#aria-relevant)

***

### aria-required?

> `optional` **aria-required?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:635

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-required`](VListProps.md#aria-required)

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:637

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-roledescription`](VListProps.md#aria-roledescription)

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:642

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-rowcount`](VListProps.md#aria-rowcount)

***

### aria-selected?

> `optional` **aria-selected?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:657

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-selected`](VListProps.md#aria-selected)

***

### aria-setsize?

> `optional` **aria-setsize?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:662

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-setsize`](VListProps.md#aria-setsize)

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:664

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-sort`](VListProps.md#aria-sort)

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:666

Defines the maximum allowed value for a range widget.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuemax`](VListProps.md#aria-valuemax)

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:668

Defines the minimum allowed value for a range widget.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuemin`](VListProps.md#aria-valuemin)

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:673

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuenow`](VListProps.md#aria-valuenow)

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:675

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuetext`](VListProps.md#aria-valuetext)

***

### class?

> `optional` **class?**: `ClassValue` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:756

#### Inherited from

`Omit.class`

***

### tabindex?

> `optional` **tabindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:780

#### Inherited from

`Omit.tabindex`
