[**API**](../../API.md)

***

# Interface: VGridProps\<R, C\>

Defined in: [src/svelte/VGrid.type.ts:14](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L14)

Props of [VGrid](../variables/VList.md).

## Extends

- `Omit`\<`ViewportComponentAttributes`, `"role"`\>

## Type Parameters

### R

`R` = `number`

### C

`C` = `number`

## Indexable

> \[`key`: `symbol`\]: `false` \| `Attachment`\<`HTMLDivElement`\> \| `null` \| `undefined`

> \[`key`: `` `data-${string}` ``\]: `any`

## Properties

### children

> **children**: `Snippet`\<\[`R`, `C`, `Readonly`\<[`GridCell`](../../core/interfaces/GridCell.md)\>\]\>

Defined in: [src/svelte/VGrid.type.ts:24](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L24)

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

Defined in: [src/svelte/VGrid.type.ts:28](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L28)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> **cols**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>

Defined in: [src/svelte/VGrid.type.ts:32](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L32)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> **rowHeight**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>

Defined in: [src/svelte/VGrid.type.ts:36](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L36)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> **colWidth**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>

Defined in: [src/svelte/VGrid.type.ts:40](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L40)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows?

> `optional` **headerRows?**: `number`

Defined in: [src/svelte/VGrid.type.ts:47](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L47)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows?

> `optional` **sectionRows?**: readonly `number`[]

Defined in: [src/svelte/VGrid.type.ts:53](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L53)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows?

> `optional` **footerRows?**: `number`

Defined in: [src/svelte/VGrid.type.ts:60](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L60)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols?

> `optional` **headerCols?**: `number`

Defined in: [src/svelte/VGrid.type.ts:67](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L67)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols?

> `optional` **footerCols?**: `number`

Defined in: [src/svelte/VGrid.type.ts:74](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L74)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans?

> `optional` **spans?**: readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[]

Defined in: [src/svelte/VGrid.type.ts:80](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L80)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted?

> `optional` **keepMounted?**: readonly [`GridCell`](../../core/interfaces/GridCell.md)[]

Defined in: [src/svelte/VGrid.type.ts:84](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L84)

List of cells that should be always mounted, even when off screen.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/svelte/VGrid.type.ts:89](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L89)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/svelte/VGrid.type.ts:94](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L94)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort?

> `optional` **ariaSort?**: [`GridCell`](../../core/interfaces/GridCell.md) & `object`

Defined in: [src/svelte/VGrid.type.ts:98](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L98)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

#### Type Declaration

##### order

> **order**: `"ascending"` \| `"descending"` \| `"other"`

***

### onverticalscroll?

> `optional` **onverticalscroll?**: (`offset`) => `void`

Defined in: [src/svelte/VGrid.type.ts:103](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L103)

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

Defined in: [src/svelte/VGrid.type.ts:108](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L108)

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

Defined in: [src/svelte/VGrid.type.ts:112](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/svelte/VGrid.type.ts#L112)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### slot?

> `optional` **slot?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:777

#### Inherited from

`Omit.slot`

***

### style?

> `optional` **style?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:779

#### Inherited from

`Omit.style`

***

### title?

> `optional` **title?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:781

#### Inherited from

`Omit.title`

***

### dir?

> `optional` **dir?**: `"rtl"` \| `"auto"` \| `"ltr"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:759

#### Inherited from

`Omit.dir`

***

### property?

> `optional` **property?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:798

#### Inherited from

`Omit.property`

***

### is?

> `optional` **is?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:835

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

`Omit.is`

***

### draggable?

> `optional` **draggable?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:760

#### Inherited from

`Omit.draggable`

***

### hidden?

> `optional` **hidden?**: `boolean` \| `""` \| `"until-found"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:772

#### Inherited from

`Omit.hidden`

***

### id?

> `optional` **id?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:773

#### Inherited from

`Omit.id`

***

### lang?

> `optional` **lang?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:774

#### Inherited from

`Omit.lang`

***

### translate?

> `optional` **translate?**: `""` \| `"yes"` \| `"no"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:782

#### Inherited from

`Omit.translate`

***

### about?

> `optional` **about?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:794

#### Inherited from

`Omit.about`

***

### datatype?

> `optional` **datatype?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:795

#### Inherited from

`Omit.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/svelte/elements.d.ts:796

#### Inherited from

`Omit.inlist`

***

### prefix?

> `optional` **prefix?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:797

#### Inherited from

`Omit.prefix`

***

### resource?

> `optional` **resource?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:799

#### Inherited from

`Omit.resource`

***

### typeof?

> `optional` **typeof?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:800

#### Inherited from

`Omit.typeof`

***

### vocab?

> `optional` **vocab?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:801

#### Inherited from

`Omit.vocab`

***

### color?

> `optional` **color?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:805

#### Inherited from

`Omit.color`

***

### results?

> `optional` **results?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:811

#### Inherited from

`Omit.results`

***

### security?

> `optional` **security?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:812

#### Inherited from

`Omit.security`

***

### unselectable?

> `optional` **unselectable?**: `"off"` \| `"on"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:813

#### Inherited from

`Omit.unselectable`

***

### popover?

> `optional` **popover?**: `""` \| `"auto"` \| `"manual"` \| `"hint"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:784

#### Inherited from

`Omit.popover`

***

### inert?

> `optional` **inert?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:783

#### Inherited from

`Omit.inert`

***

### part?

> `optional` **part?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:775

#### Inherited from

`Omit.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:481

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`Omit.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:483

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`Omit.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:488

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`Omit.aria-autocomplete`

***

### aria-busy?

> `optional` **aria-busy?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:490

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

`Omit.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:495

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`Omit.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:500

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`Omit.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:505

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`Omit.aria-colindex`

***

### aria-colspan?

> `optional` **aria-colspan?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:510

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`Omit.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:515

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`Omit.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `"time"` \| `"page"` \| `"step"` \| `"location"` \| `"date"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:517

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`Omit.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:522

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`Omit.aria-describedby`

***

### aria-details?

> `optional` **aria-details?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:527

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:532

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`Omit.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:537

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:542

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`Omit.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:544

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`Omit.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:549

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`Omit.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:554

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `"dialog"` \| `"menu"` \| `"grid"` \| `"listbox"` \| `"tree"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:556

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`Omit.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:561

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `"grammar"` \| `"spelling"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:566

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`Omit.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:568

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`Omit.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:573

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`Omit.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:578

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:580

Defines the hierarchical level of an element within a structure.

#### Inherited from

`Omit.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:582

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`Omit.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:584

Indicates whether an element is modal when displayed.

#### Inherited from

`Omit.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:586

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`Omit.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:588

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`Omit.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:590

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`Omit.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:596

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`Omit.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:601

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`Omit.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:606

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`Omit.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:611

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`Omit.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:616

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:621

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`Omit.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:635

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`Omit.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:637

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`Omit.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:642

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`Omit.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:647

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`Omit.aria-rowindex`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:652

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`Omit.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:657

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`Omit.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:662

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`Omit.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:664

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`Omit.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:666

Defines the maximum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:668

Defines the minimum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:673

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`Omit.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:675

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`Omit.aria-valuetext`

***

### contextmenu?

> `optional` **contextmenu?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:758

#### Inherited from

`Omit.contextmenu`

***

### radiogroup?

> `optional` **radiogroup?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:788

#### Inherited from

`Omit.radiogroup`

***

### class?

> `optional` **class?**: `ClassValue` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:756

#### Inherited from

`Omit.class`

***

### onabort?

> `optional` **onabort?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:193

#### Inherited from

`Omit.onabort`

***

### onanimationend?

> `optional` **onanimationend?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:403

#### Inherited from

`Omit.onanimationend`

***

### onanimationiteration?

> `optional` **onanimationiteration?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:406

#### Inherited from

`Omit.onanimationiteration`

***

### onanimationstart?

> `optional` **onanimationstart?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:400

#### Inherited from

`Omit.onanimationstart`

***

### onauxclick?

> `optional` **onauxclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:264

#### Inherited from

`Omit.onauxclick`

***

### onbeforeinput?

> `optional` **onbeforeinput?**: `EventHandler`\<`InputEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:131

#### Inherited from

`Omit.onbeforeinput`

***

### onbeforematch?

> `optional` **onbeforematch?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:452

#### Inherited from

`Omit.onbeforematch`

***

### onbeforetoggle?

> `optional` **onbeforetoggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:160

#### Inherited from

`Omit.onbeforetoggle`

***

### onblur?

> `optional` **onblur?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:123

#### Inherited from

`Omit.onblur`

***

### oncancel?

> `optional` **oncancel?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:455

#### Inherited from

`Omit.oncancel`

***

### oncanplay?

> `optional` **oncanplay?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:196

#### Inherited from

`Omit.oncanplay`

***

### oncanplaythrough?

> `optional` **oncanplaythrough?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:199

#### Inherited from

`Omit.oncanplaythrough`

***

### onchange?

> `optional` **onchange?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:128

#### Inherited from

`Omit.onchange`

***

### onclick?

> `optional` **onclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:267

#### Inherited from

`Omit.onclick`

***

### onclose?

> `optional` **onclose?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:458

#### Inherited from

`Omit.onclose`

***

### oncontextmenu?

> `optional` **oncontextmenu?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:270

#### Inherited from

`Omit.oncontextmenu`

***

### oncopy?

> `optional` **oncopy?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:92

#### Inherited from

`Omit.oncopy`

***

### oncuechange?

> `optional` **oncuechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:202

#### Inherited from

`Omit.oncuechange`

***

### oncut?

> `optional` **oncut?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:95

#### Inherited from

`Omit.oncut`

***

### ondblclick?

> `optional` **ondblclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:273

#### Inherited from

`Omit.ondblclick`

***

### ondrag?

> `optional` **ondrag?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:276

#### Inherited from

`Omit.ondrag`

***

### ondragend?

> `optional` **ondragend?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:279

#### Inherited from

`Omit.ondragend`

***

### ondragenter?

> `optional` **ondragenter?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:282

#### Inherited from

`Omit.ondragenter`

***

### ondragleave?

> `optional` **ondragleave?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:288

#### Inherited from

`Omit.ondragleave`

***

### ondragover?

> `optional` **ondragover?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:291

#### Inherited from

`Omit.ondragover`

***

### ondragstart?

> `optional` **ondragstart?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:294

#### Inherited from

`Omit.ondragstart`

***

### ondrop?

> `optional` **ondrop?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:297

#### Inherited from

`Omit.ondrop`

***

### ondurationchange?

> `optional` **ondurationchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:205

#### Inherited from

`Omit.ondurationchange`

***

### onemptied?

> `optional` **onemptied?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:208

#### Inherited from

`Omit.onemptied`

***

### onended?

> `optional` **onended?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:214

#### Inherited from

`Omit.onended`

***

### onerror?

> `optional` **onerror?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:155

#### Inherited from

`Omit.onerror`

***

### onfocus?

> `optional` **onfocus?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:114

#### Inherited from

`Omit.onfocus`

***

### onformdata?

> `optional` **onformdata?**: `EventHandler`\<`FormDataEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:147

#### Inherited from

`Omit.onformdata`

***

### ongotpointercapture?

> `optional` **ongotpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:346

#### Inherited from

`Omit.ongotpointercapture`

***

### oninput?

> `optional` **oninput?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:135

#### Inherited from

`Omit.oninput`

***

### oninvalid?

> `optional` **oninvalid?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:144

#### Inherited from

`Omit.oninvalid`

***

### onkeydown?

> `optional` **onkeydown?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:182

#### Inherited from

`Omit.onkeydown`

***

### onkeypress?

> `optional` **onkeypress?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:185

#### Inherited from

`Omit.onkeypress`

***

### onkeyup?

> `optional` **onkeyup?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:188

#### Inherited from

`Omit.onkeyup`

***

### onload?

> `optional` **onload?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:152

#### Inherited from

`Omit.onload`

***

### onloadeddata?

> `optional` **onloadeddata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:217

#### Inherited from

`Omit.onloadeddata`

***

### onloadedmetadata?

> `optional` **onloadedmetadata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:220

#### Inherited from

`Omit.onloadedmetadata`

***

### onloadstart?

> `optional` **onloadstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:223

#### Inherited from

`Omit.onloadstart`

***

### onlostpointercapture?

> `optional` **onlostpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:373

#### Inherited from

`Omit.onlostpointercapture`

***

### onmousedown?

> `optional` **onmousedown?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:300

#### Inherited from

`Omit.onmousedown`

***

### onmouseenter?

> `optional` **onmouseenter?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:303

#### Inherited from

`Omit.onmouseenter`

***

### onmouseleave?

> `optional` **onmouseleave?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:305

#### Inherited from

`Omit.onmouseleave`

***

### onmousemove?

> `optional` **onmousemove?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:307

#### Inherited from

`Omit.onmousemove`

***

### onmouseout?

> `optional` **onmouseout?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:310

#### Inherited from

`Omit.onmouseout`

***

### onmouseover?

> `optional` **onmouseover?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:313

#### Inherited from

`Omit.onmouseover`

***

### onmouseup?

> `optional` **onmouseup?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:316

#### Inherited from

`Omit.onmouseup`

***

### onpaste?

> `optional` **onpaste?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:98

#### Inherited from

`Omit.onpaste`

***

### onpause?

> `optional` **onpause?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:226

#### Inherited from

`Omit.onpause`

***

### onplay?

> `optional` **onplay?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:229

#### Inherited from

`Omit.onplay`

***

### onplaying?

> `optional` **onplaying?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:232

#### Inherited from

`Omit.onplaying`

***

### onpointercancel?

> `optional` **onpointercancel?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:349

#### Inherited from

`Omit.onpointercancel`

***

### onpointerdown?

> `optional` **onpointerdown?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:352

#### Inherited from

`Omit.onpointerdown`

***

### onpointerenter?

> `optional` **onpointerenter?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:355

#### Inherited from

`Omit.onpointerenter`

***

### onpointerleave?

> `optional` **onpointerleave?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:358

#### Inherited from

`Omit.onpointerleave`

***

### onpointermove?

> `optional` **onpointermove?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:361

#### Inherited from

`Omit.onpointermove`

***

### onpointerout?

> `optional` **onpointerout?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:364

#### Inherited from

`Omit.onpointerout`

***

### onpointerover?

> `optional` **onpointerover?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:367

#### Inherited from

`Omit.onpointerover`

***

### onpointerup?

> `optional` **onpointerup?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:370

#### Inherited from

`Omit.onpointerup`

***

### onprogress?

> `optional` **onprogress?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:235

#### Inherited from

`Omit.onprogress`

***

### onratechange?

> `optional` **onratechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:238

#### Inherited from

`Omit.onratechange`

***

### onreset?

> `optional` **onreset?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:138

#### Inherited from

`Omit.onreset`

***

### onresize?

> `optional` **onresize?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:390

#### Inherited from

`Omit.onresize`

***

### onseeked?

> `optional` **onseeked?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:241

#### Inherited from

`Omit.onseeked`

***

### onseeking?

> `optional` **onseeking?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:244

#### Inherited from

`Omit.onseeking`

***

### onselect?

> `optional` **onselect?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:321

#### Inherited from

`Omit.onselect`

***

### onselectionchange?

> `optional` **onselectionchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:324

#### Inherited from

`Omit.onselectionchange`

***

### onselectstart?

> `optional` **onselectstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:327

#### Inherited from

`Omit.onselectstart`

***

### onstalled?

> `optional` **onstalled?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:247

#### Inherited from

`Omit.onstalled`

***

### onsubmit?

> `optional` **onsubmit?**: `EventHandler`\<`SubmitEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:141

#### Inherited from

`Omit.onsubmit`

***

### onsuspend?

> `optional` **onsuspend?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:250

#### Inherited from

`Omit.onsuspend`

***

### ontimeupdate?

> `optional` **ontimeupdate?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:253

#### Inherited from

`Omit.ontimeupdate`

***

### ontoggle?

> `optional` **ontoggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:163

#### Inherited from

`Omit.ontoggle`

***

### ontouchcancel?

> `optional` **ontouchcancel?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:332

#### Inherited from

`Omit.ontouchcancel`

***

### ontouchend?

> `optional` **ontouchend?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:335

#### Inherited from

`Omit.ontouchend`

***

### ontouchmove?

> `optional` **ontouchmove?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:338

#### Inherited from

`Omit.ontouchmove`

***

### ontouchstart?

> `optional` **ontouchstart?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:341

#### Inherited from

`Omit.ontouchstart`

***

### ontransitioncancel?

> `optional` **ontransitioncancel?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:420

#### Inherited from

`Omit.ontransitioncancel`

***

### ontransitionend?

> `optional` **ontransitionend?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:417

#### Inherited from

`Omit.ontransitionend`

***

### ontransitionrun?

> `optional` **ontransitionrun?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:414

#### Inherited from

`Omit.ontransitionrun`

***

### ontransitionstart?

> `optional` **ontransitionstart?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:411

#### Inherited from

`Omit.ontransitionstart`

***

### onvolumechange?

> `optional` **onvolumechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:256

#### Inherited from

`Omit.onvolumechange`

***

### onwaiting?

> `optional` **onwaiting?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:259

#### Inherited from

`Omit.onwaiting`

***

### onwheel?

> `optional` **onwheel?**: `WheelEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:395

#### Inherited from

`Omit.onwheel`

***

### ongamepadconnected?

> `optional` **ongamepadconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:378

#### Inherited from

`Omit.ongamepadconnected`

***

### ongamepaddisconnected?

> `optional` **ongamepaddisconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:380

#### Inherited from

`Omit.ongamepaddisconnected`

***

### onmessage?

> `optional` **onmessage?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:439

#### Inherited from

`Omit.onmessage`

***

### onmessageerror?

> `optional` **onmessageerror?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:442

#### Inherited from

`Omit.onmessageerror`

***

### accesskey?

> `optional` **accesskey?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:753

#### Inherited from

`Omit.accesskey`

***

### autocapitalize?

> `optional` **autocapitalize?**: `"none"` \| `"off"` \| `"on"` \| `"sentences"` \| `"words"` \| `"characters"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:754

#### Inherited from

`Omit.autocapitalize`

***

### contenteditable?

> `optional` **contenteditable?**: `"inherit"` \| `"plaintext-only"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:757

#### Inherited from

`Omit.contenteditable`

***

### enterkeyhint?

> `optional` **enterkeyhint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:762

#### Inherited from

`Omit.enterkeyhint`

***

### inputmode?

> `optional` **inputmode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:820

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

`Omit.inputmode`

***

### spellcheck?

> `optional` **spellcheck?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:778

#### Inherited from

`Omit.spellcheck`

***

### itemid?

> `optional` **itemid?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:809

#### Inherited from

`Omit.itemid`

***

### itemprop?

> `optional` **itemprop?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:806

#### Inherited from

`Omit.itemprop`

***

### itemref?

> `optional` **itemref?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:810

#### Inherited from

`Omit.itemref`

***

### itemscope?

> `optional` **itemscope?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:807

#### Inherited from

`Omit.itemscope`

***

### itemtype?

> `optional` **itemtype?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:808

#### Inherited from

`Omit.itemtype`

***

### autofocus?

> `optional` **autofocus?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:755

#### Inherited from

`Omit.autofocus`

***

### elementtiming?

> `optional` **elementtiming?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:761

#### Inherited from

`Omit.elementtiming`

***

### tabindex?

> `optional` **tabindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:780

#### Inherited from

`Omit.tabindex`

***

### oncompositionend?

> `optional` **oncompositionend?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:103

#### Inherited from

`Omit.oncompositionend`

***

### oncompositionstart?

> `optional` **oncompositionstart?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:106

#### Inherited from

`Omit.oncompositionstart`

***

### oncompositionupdate?

> `optional` **oncompositionupdate?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:109

#### Inherited from

`Omit.oncompositionupdate`

***

### oncontentvisibilityautostatechange?

> `optional` **oncontentvisibilityautostatechange?**: `ContentVisibilityAutoStateChangeEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:171

#### Inherited from

`Omit.oncontentvisibilityautostatechange`

***

### ondragexit?

> `optional` **ondragexit?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:285

#### Inherited from

`Omit.ondragexit`

***

### onfocusin?

> `optional` **onfocusin?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:117

#### Inherited from

`Omit.onfocusin`

***

### onfocusout?

> `optional` **onfocusout?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:120

#### Inherited from

`Omit.onfocusout`

***

### onfullscreenchange?

> `optional` **onfullscreenchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:461

#### Inherited from

`Omit.onfullscreenchange`

***

### onfullscreenerror?

> `optional` **onfullscreenerror?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:464

#### Inherited from

`Omit.onfullscreenerror`

***

### on:abort?

> `optional` **on:abort?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:192

#### Inherited from

`Omit.on:abort`

***

### on:animationend?

> `optional` **on:animationend?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:402

#### Inherited from

`Omit.on:animationend`

***

### on:animationiteration?

> `optional` **on:animationiteration?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:405

#### Inherited from

`Omit.on:animationiteration`

***

### on:animationstart?

> `optional` **on:animationstart?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:399

#### Inherited from

`Omit.on:animationstart`

***

### on:auxclick?

> `optional` **on:auxclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:263

#### Inherited from

`Omit.on:auxclick`

***

### on:beforeinput?

> `optional` **on:beforeinput?**: `EventHandler`\<`InputEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:130

#### Inherited from

`Omit.on:beforeinput`

***

### on:beforematch?

> `optional` **on:beforematch?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:451

#### Inherited from

`Omit.on:beforematch`

***

### on:beforetoggle?

> `optional` **on:beforetoggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:159

#### Inherited from

`Omit.on:beforetoggle`

***

### on:blur?

> `optional` **on:blur?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:122

#### Inherited from

`Omit.on:blur`

***

### on:cancel?

> `optional` **on:cancel?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:454

#### Inherited from

`Omit.on:cancel`

***

### on:canplay?

> `optional` **on:canplay?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:195

#### Inherited from

`Omit.on:canplay`

***

### on:canplaythrough?

> `optional` **on:canplaythrough?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:198

#### Inherited from

`Omit.on:canplaythrough`

***

### on:change?

> `optional` **on:change?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:127

#### Inherited from

`Omit.on:change`

***

### on:click?

> `optional` **on:click?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:266

#### Inherited from

`Omit.on:click`

***

### on:close?

> `optional` **on:close?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:457

#### Inherited from

`Omit.on:close`

***

### on:compositionend?

> `optional` **on:compositionend?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:102

#### Inherited from

`Omit.on:compositionend`

***

### on:compositionstart?

> `optional` **on:compositionstart?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:105

#### Inherited from

`Omit.on:compositionstart`

***

### on:compositionupdate?

> `optional` **on:compositionupdate?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:108

#### Inherited from

`Omit.on:compositionupdate`

***

### on:contentvisibilityautostatechange?

> `optional` **on:contentvisibilityautostatechange?**: `ContentVisibilityAutoStateChangeEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:167

#### Inherited from

`Omit.on:contentvisibilityautostatechange`

***

### on:contextmenu?

> `optional` **on:contextmenu?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:269

#### Inherited from

`Omit.on:contextmenu`

***

### on:copy?

> `optional` **on:copy?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:91

#### Inherited from

`Omit.on:copy`

***

### on:cuechange?

> `optional` **on:cuechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:201

#### Inherited from

`Omit.on:cuechange`

***

### on:cut?

> `optional` **on:cut?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:94

#### Inherited from

`Omit.on:cut`

***

### on:dblclick?

> `optional` **on:dblclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:272

#### Inherited from

`Omit.on:dblclick`

***

### on:drag?

> `optional` **on:drag?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:275

#### Inherited from

`Omit.on:drag`

***

### on:dragend?

> `optional` **on:dragend?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:278

#### Inherited from

`Omit.on:dragend`

***

### on:dragenter?

> `optional` **on:dragenter?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:281

#### Inherited from

`Omit.on:dragenter`

***

### on:dragexit?

> `optional` **on:dragexit?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:284

#### Inherited from

`Omit.on:dragexit`

***

### on:dragleave?

> `optional` **on:dragleave?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:287

#### Inherited from

`Omit.on:dragleave`

***

### on:dragover?

> `optional` **on:dragover?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:290

#### Inherited from

`Omit.on:dragover`

***

### on:dragstart?

> `optional` **on:dragstart?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:293

#### Inherited from

`Omit.on:dragstart`

***

### on:drop?

> `optional` **on:drop?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:296

#### Inherited from

`Omit.on:drop`

***

### on:durationchange?

> `optional` **on:durationchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:204

#### Inherited from

`Omit.on:durationchange`

***

### on:emptied?

> `optional` **on:emptied?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:207

#### Inherited from

`Omit.on:emptied`

***

### on:ended?

> `optional` **on:ended?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:213

#### Inherited from

`Omit.on:ended`

***

### on:error?

> `optional` **on:error?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:154

#### Inherited from

`Omit.on:error`

***

### on:focus?

> `optional` **on:focus?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:113

#### Inherited from

`Omit.on:focus`

***

### on:focusin?

> `optional` **on:focusin?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:116

#### Inherited from

`Omit.on:focusin`

***

### on:focusout?

> `optional` **on:focusout?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:119

#### Inherited from

`Omit.on:focusout`

***

### on:formdata?

> `optional` **on:formdata?**: `EventHandler`\<`FormDataEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:146

#### Inherited from

`Omit.on:formdata`

***

### on:fullscreenchange?

> `optional` **on:fullscreenchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:460

#### Inherited from

`Omit.on:fullscreenchange`

***

### on:fullscreenerror?

> `optional` **on:fullscreenerror?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:463

#### Inherited from

`Omit.on:fullscreenerror`

***

### on:gotpointercapture?

> `optional` **on:gotpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:345

#### Inherited from

`Omit.on:gotpointercapture`

***

### on:input?

> `optional` **on:input?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:134

#### Inherited from

`Omit.on:input`

***

### on:invalid?

> `optional` **on:invalid?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:143

#### Inherited from

`Omit.on:invalid`

***

### on:keydown?

> `optional` **on:keydown?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:181

#### Inherited from

`Omit.on:keydown`

***

### on:keypress?

> `optional` **on:keypress?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:184

#### Inherited from

`Omit.on:keypress`

***

### on:keyup?

> `optional` **on:keyup?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:187

#### Inherited from

`Omit.on:keyup`

***

### on:load?

> `optional` **on:load?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:151

#### Inherited from

`Omit.on:load`

***

### on:loadeddata?

> `optional` **on:loadeddata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:216

#### Inherited from

`Omit.on:loadeddata`

***

### on:loadedmetadata?

> `optional` **on:loadedmetadata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:219

#### Inherited from

`Omit.on:loadedmetadata`

***

### on:loadstart?

> `optional` **on:loadstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:222

#### Inherited from

`Omit.on:loadstart`

***

### on:lostpointercapture?

> `optional` **on:lostpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:372

#### Inherited from

`Omit.on:lostpointercapture`

***

### on:mousedown?

> `optional` **on:mousedown?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:299

#### Inherited from

`Omit.on:mousedown`

***

### on:mouseenter?

> `optional` **on:mouseenter?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:302

#### Inherited from

`Omit.on:mouseenter`

***

### on:mouseleave?

> `optional` **on:mouseleave?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:304

#### Inherited from

`Omit.on:mouseleave`

***

### on:mousemove?

> `optional` **on:mousemove?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:306

#### Inherited from

`Omit.on:mousemove`

***

### on:mouseout?

> `optional` **on:mouseout?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:309

#### Inherited from

`Omit.on:mouseout`

***

### on:mouseover?

> `optional` **on:mouseover?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:312

#### Inherited from

`Omit.on:mouseover`

***

### on:mouseup?

> `optional` **on:mouseup?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:315

#### Inherited from

`Omit.on:mouseup`

***

### on:paste?

> `optional` **on:paste?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:97

#### Inherited from

`Omit.on:paste`

***

### on:pause?

> `optional` **on:pause?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:225

#### Inherited from

`Omit.on:pause`

***

### on:play?

> `optional` **on:play?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:228

#### Inherited from

`Omit.on:play`

***

### on:playing?

> `optional` **on:playing?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:231

#### Inherited from

`Omit.on:playing`

***

### on:pointercancel?

> `optional` **on:pointercancel?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:348

#### Inherited from

`Omit.on:pointercancel`

***

### on:pointerdown?

> `optional` **on:pointerdown?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:351

#### Inherited from

`Omit.on:pointerdown`

***

### on:pointerenter?

> `optional` **on:pointerenter?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:354

#### Inherited from

`Omit.on:pointerenter`

***

### on:pointerleave?

> `optional` **on:pointerleave?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:357

#### Inherited from

`Omit.on:pointerleave`

***

### on:pointermove?

> `optional` **on:pointermove?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:360

#### Inherited from

`Omit.on:pointermove`

***

### on:pointerout?

> `optional` **on:pointerout?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:363

#### Inherited from

`Omit.on:pointerout`

***

### on:pointerover?

> `optional` **on:pointerover?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:366

#### Inherited from

`Omit.on:pointerover`

***

### on:pointerup?

> `optional` **on:pointerup?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:369

#### Inherited from

`Omit.on:pointerup`

***

### on:progress?

> `optional` **on:progress?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:234

#### Inherited from

`Omit.on:progress`

***

### on:ratechange?

> `optional` **on:ratechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:237

#### Inherited from

`Omit.on:ratechange`

***

### on:reset?

> `optional` **on:reset?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:137

#### Inherited from

`Omit.on:reset`

***

### on:resize?

> `optional` **on:resize?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:389

#### Inherited from

`Omit.on:resize`

***

### on:scroll?

> `optional` **on:scroll?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:383

#### Inherited from

`Omit.on:scroll`

***

### on:scrollend?

> `optional` **on:scrollend?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:386

#### Inherited from

`Omit.on:scrollend`

***

### on:seeked?

> `optional` **on:seeked?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:240

#### Inherited from

`Omit.on:seeked`

***

### on:seeking?

> `optional` **on:seeking?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:243

#### Inherited from

`Omit.on:seeking`

***

### on:select?

> `optional` **on:select?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:320

#### Inherited from

`Omit.on:select`

***

### on:selectionchange?

> `optional` **on:selectionchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:323

#### Inherited from

`Omit.on:selectionchange`

***

### on:selectstart?

> `optional` **on:selectstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:326

#### Inherited from

`Omit.on:selectstart`

***

### on:stalled?

> `optional` **on:stalled?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:246

#### Inherited from

`Omit.on:stalled`

***

### on:submit?

> `optional` **on:submit?**: `EventHandler`\<`SubmitEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:140

#### Inherited from

`Omit.on:submit`

***

### on:suspend?

> `optional` **on:suspend?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:249

#### Inherited from

`Omit.on:suspend`

***

### on:timeupdate?

> `optional` **on:timeupdate?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:252

#### Inherited from

`Omit.on:timeupdate`

***

### on:toggle?

> `optional` **on:toggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:162

#### Inherited from

`Omit.on:toggle`

***

### on:touchcancel?

> `optional` **on:touchcancel?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:331

#### Inherited from

`Omit.on:touchcancel`

***

### on:touchend?

> `optional` **on:touchend?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:334

#### Inherited from

`Omit.on:touchend`

***

### on:touchmove?

> `optional` **on:touchmove?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:337

#### Inherited from

`Omit.on:touchmove`

***

### on:touchstart?

> `optional` **on:touchstart?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:340

#### Inherited from

`Omit.on:touchstart`

***

### on:transitioncancel?

> `optional` **on:transitioncancel?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:419

#### Inherited from

`Omit.on:transitioncancel`

***

### on:transitionend?

> `optional` **on:transitionend?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:416

#### Inherited from

`Omit.on:transitionend`

***

### on:transitionrun?

> `optional` **on:transitionrun?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:413

#### Inherited from

`Omit.on:transitionrun`

***

### on:transitionstart?

> `optional` **on:transitionstart?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:410

#### Inherited from

`Omit.on:transitionstart`

***

### on:volumechange?

> `optional` **on:volumechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:255

#### Inherited from

`Omit.on:volumechange`

***

### on:waiting?

> `optional` **on:waiting?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:258

#### Inherited from

`Omit.on:waiting`

***

### on:wheel?

> `optional` **on:wheel?**: `WheelEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:394

#### Inherited from

`Omit.on:wheel`

***

### placeholder?

> `optional` **placeholder?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:776

#### Inherited from

`Omit.placeholder`

***

### writingsuggestions?

> `optional` **writingsuggestions?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:785

#### Inherited from

`Omit.writingsuggestions`

***

### autosave?

> `optional` **autosave?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:804

#### Inherited from

`Omit.autosave`

***

### bind:innerHTML?

> `optional` **bind:innerHTML?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:840

Elements with the contenteditable attribute support `innerHTML`, `textContent` and `innerText` bindings.

#### Inherited from

`Omit.bind:innerHTML`

***

### bind:textContent?

> `optional` **bind:textContent?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:844

Elements with the contenteditable attribute support `innerHTML`, `textContent` and `innerText` bindings.

#### Inherited from

`Omit.bind:textContent`

***

### bind:innerText?

> `optional` **bind:innerText?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:848

Elements with the contenteditable attribute support `innerHTML`, `textContent` and `innerText` bindings.

#### Inherited from

`Omit.bind:innerText`

***

### bind:focused?

> `readonly` `optional` **bind:focused?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:850

#### Inherited from

`Omit.bind:focused`

***

### bind:offsetWidth?

> `readonly` `optional` **bind:offsetWidth?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:851

#### Inherited from

`Omit.bind:offsetWidth`

***

### bind:offsetHeight?

> `readonly` `optional` **bind:offsetHeight?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:852

#### Inherited from

`Omit.bind:offsetHeight`

***

### oncopycapture?

> `optional` **oncopycapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:93

#### Inherited from

`Omit.oncopycapture`

***

### oncutcapture?

> `optional` **oncutcapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:96

#### Inherited from

`Omit.oncutcapture`

***

### onpastecapture?

> `optional` **onpastecapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:99

#### Inherited from

`Omit.onpastecapture`

***

### oncompositionendcapture?

> `optional` **oncompositionendcapture?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:104

#### Inherited from

`Omit.oncompositionendcapture`

***

### oncompositionstartcapture?

> `optional` **oncompositionstartcapture?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:107

#### Inherited from

`Omit.oncompositionstartcapture`

***

### oncompositionupdatecapture?

> `optional` **oncompositionupdatecapture?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:110

#### Inherited from

`Omit.oncompositionupdatecapture`

***

### onfocuscapture?

> `optional` **onfocuscapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:115

#### Inherited from

`Omit.onfocuscapture`

***

### onfocusincapture?

> `optional` **onfocusincapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:118

#### Inherited from

`Omit.onfocusincapture`

***

### onfocusoutcapture?

> `optional` **onfocusoutcapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:121

#### Inherited from

`Omit.onfocusoutcapture`

***

### onblurcapture?

> `optional` **onblurcapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:124

#### Inherited from

`Omit.onblurcapture`

***

### onchangecapture?

> `optional` **onchangecapture?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:129

#### Inherited from

`Omit.onchangecapture`

***

### onbeforeinputcapture?

> `optional` **onbeforeinputcapture?**: `EventHandler`\<`InputEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:132

#### Inherited from

`Omit.onbeforeinputcapture`

***

### oninputcapture?

> `optional` **oninputcapture?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:136

#### Inherited from

`Omit.oninputcapture`

***

### onresetcapture?

> `optional` **onresetcapture?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:139

#### Inherited from

`Omit.onresetcapture`

***

### onsubmitcapture?

> `optional` **onsubmitcapture?**: `EventHandler`\<`SubmitEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:142

#### Inherited from

`Omit.onsubmitcapture`

***

### oninvalidcapture?

> `optional` **oninvalidcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:145

#### Inherited from

`Omit.oninvalidcapture`

***

### onformdatacapture?

> `optional` **onformdatacapture?**: `EventHandler`\<`FormDataEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:148

#### Inherited from

`Omit.onformdatacapture`

***

### onloadcapture?

> `optional` **onloadcapture?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:153

#### Inherited from

`Omit.onloadcapture`

***

### onerrorcapture?

> `optional` **onerrorcapture?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:156

#### Inherited from

`Omit.onerrorcapture`

***

### onbeforetogglecapture?

> `optional` **onbeforetogglecapture?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:161

#### Inherited from

`Omit.onbeforetogglecapture`

***

### ontogglecapture?

> `optional` **ontogglecapture?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:164

#### Inherited from

`Omit.ontogglecapture`

***

### oncontentvisibilityautostatechangecapture?

> `optional` **oncontentvisibilityautostatechangecapture?**: `ContentVisibilityAutoStateChangeEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:175

#### Inherited from

`Omit.oncontentvisibilityautostatechangecapture`

***

### onkeydowncapture?

> `optional` **onkeydowncapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:183

#### Inherited from

`Omit.onkeydowncapture`

***

### onkeypresscapture?

> `optional` **onkeypresscapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:186

#### Inherited from

`Omit.onkeypresscapture`

***

### onkeyupcapture?

> `optional` **onkeyupcapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:189

#### Inherited from

`Omit.onkeyupcapture`

***

### onabortcapture?

> `optional` **onabortcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:194

#### Inherited from

`Omit.onabortcapture`

***

### oncanplaycapture?

> `optional` **oncanplaycapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:197

#### Inherited from

`Omit.oncanplaycapture`

***

### oncanplaythroughcapture?

> `optional` **oncanplaythroughcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:200

#### Inherited from

`Omit.oncanplaythroughcapture`

***

### oncuechangecapture?

> `optional` **oncuechangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:203

#### Inherited from

`Omit.oncuechangecapture`

***

### ondurationchangecapture?

> `optional` **ondurationchangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:206

#### Inherited from

`Omit.ondurationchangecapture`

***

### onemptiedcapture?

> `optional` **onemptiedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:209

#### Inherited from

`Omit.onemptiedcapture`

***

### on:encrypted?

> `optional` **on:encrypted?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:210

#### Inherited from

`Omit.on:encrypted`

***

### onencrypted?

> `optional` **onencrypted?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:211

#### Inherited from

`Omit.onencrypted`

***

### onencryptedcapture?

> `optional` **onencryptedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:212

#### Inherited from

`Omit.onencryptedcapture`

***

### onendedcapture?

> `optional` **onendedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:215

#### Inherited from

`Omit.onendedcapture`

***

### onloadeddatacapture?

> `optional` **onloadeddatacapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:218

#### Inherited from

`Omit.onloadeddatacapture`

***

### onloadedmetadatacapture?

> `optional` **onloadedmetadatacapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:221

#### Inherited from

`Omit.onloadedmetadatacapture`

***

### onloadstartcapture?

> `optional` **onloadstartcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:224

#### Inherited from

`Omit.onloadstartcapture`

***

### onpausecapture?

> `optional` **onpausecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:227

#### Inherited from

`Omit.onpausecapture`

***

### onplaycapture?

> `optional` **onplaycapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:230

#### Inherited from

`Omit.onplaycapture`

***

### onplayingcapture?

> `optional` **onplayingcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:233

#### Inherited from

`Omit.onplayingcapture`

***

### onprogresscapture?

> `optional` **onprogresscapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:236

#### Inherited from

`Omit.onprogresscapture`

***

### onratechangecapture?

> `optional` **onratechangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:239

#### Inherited from

`Omit.onratechangecapture`

***

### onseekedcapture?

> `optional` **onseekedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:242

#### Inherited from

`Omit.onseekedcapture`

***

### onseekingcapture?

> `optional` **onseekingcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:245

#### Inherited from

`Omit.onseekingcapture`

***

### onstalledcapture?

> `optional` **onstalledcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:248

#### Inherited from

`Omit.onstalledcapture`

***

### onsuspendcapture?

> `optional` **onsuspendcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:251

#### Inherited from

`Omit.onsuspendcapture`

***

### ontimeupdatecapture?

> `optional` **ontimeupdatecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:254

#### Inherited from

`Omit.ontimeupdatecapture`

***

### onvolumechangecapture?

> `optional` **onvolumechangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:257

#### Inherited from

`Omit.onvolumechangecapture`

***

### onwaitingcapture?

> `optional` **onwaitingcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:260

#### Inherited from

`Omit.onwaitingcapture`

***

### onauxclickcapture?

> `optional` **onauxclickcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:265

#### Inherited from

`Omit.onauxclickcapture`

***

### onclickcapture?

> `optional` **onclickcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:268

#### Inherited from

`Omit.onclickcapture`

***

### oncontextmenucapture?

> `optional` **oncontextmenucapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:271

#### Inherited from

`Omit.oncontextmenucapture`

***

### ondblclickcapture?

> `optional` **ondblclickcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:274

#### Inherited from

`Omit.ondblclickcapture`

***

### ondragcapture?

> `optional` **ondragcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:277

#### Inherited from

`Omit.ondragcapture`

***

### ondragendcapture?

> `optional` **ondragendcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:280

#### Inherited from

`Omit.ondragendcapture`

***

### ondragentercapture?

> `optional` **ondragentercapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:283

#### Inherited from

`Omit.ondragentercapture`

***

### ondragexitcapture?

> `optional` **ondragexitcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:286

#### Inherited from

`Omit.ondragexitcapture`

***

### ondragleavecapture?

> `optional` **ondragleavecapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:289

#### Inherited from

`Omit.ondragleavecapture`

***

### ondragovercapture?

> `optional` **ondragovercapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:292

#### Inherited from

`Omit.ondragovercapture`

***

### ondragstartcapture?

> `optional` **ondragstartcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:295

#### Inherited from

`Omit.ondragstartcapture`

***

### ondropcapture?

> `optional` **ondropcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:298

#### Inherited from

`Omit.ondropcapture`

***

### onmousedowncapture?

> `optional` **onmousedowncapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:301

#### Inherited from

`Omit.onmousedowncapture`

***

### onmousemovecapture?

> `optional` **onmousemovecapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:308

#### Inherited from

`Omit.onmousemovecapture`

***

### onmouseoutcapture?

> `optional` **onmouseoutcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:311

#### Inherited from

`Omit.onmouseoutcapture`

***

### onmouseovercapture?

> `optional` **onmouseovercapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:314

#### Inherited from

`Omit.onmouseovercapture`

***

### onmouseupcapture?

> `optional` **onmouseupcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:317

#### Inherited from

`Omit.onmouseupcapture`

***

### onselectcapture?

> `optional` **onselectcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:322

#### Inherited from

`Omit.onselectcapture`

***

### onselectionchangecapture?

> `optional` **onselectionchangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:325

#### Inherited from

`Omit.onselectionchangecapture`

***

### onselectstartcapture?

> `optional` **onselectstartcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:328

#### Inherited from

`Omit.onselectstartcapture`

***

### ontouchcancelcapture?

> `optional` **ontouchcancelcapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:333

#### Inherited from

`Omit.ontouchcancelcapture`

***

### ontouchendcapture?

> `optional` **ontouchendcapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:336

#### Inherited from

`Omit.ontouchendcapture`

***

### ontouchmovecapture?

> `optional` **ontouchmovecapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:339

#### Inherited from

`Omit.ontouchmovecapture`

***

### ontouchstartcapture?

> `optional` **ontouchstartcapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:342

#### Inherited from

`Omit.ontouchstartcapture`

***

### ongotpointercapturecapture?

> `optional` **ongotpointercapturecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:347

#### Inherited from

`Omit.ongotpointercapturecapture`

***

### onpointercancelcapture?

> `optional` **onpointercancelcapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:350

#### Inherited from

`Omit.onpointercancelcapture`

***

### onpointerdowncapture?

> `optional` **onpointerdowncapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:353

#### Inherited from

`Omit.onpointerdowncapture`

***

### onpointerentercapture?

> `optional` **onpointerentercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:356

#### Inherited from

`Omit.onpointerentercapture`

***

### onpointerleavecapture?

> `optional` **onpointerleavecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:359

#### Inherited from

`Omit.onpointerleavecapture`

***

### onpointermovecapture?

> `optional` **onpointermovecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:362

#### Inherited from

`Omit.onpointermovecapture`

***

### onpointeroutcapture?

> `optional` **onpointeroutcapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:365

#### Inherited from

`Omit.onpointeroutcapture`

***

### onpointerovercapture?

> `optional` **onpointerovercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:368

#### Inherited from

`Omit.onpointerovercapture`

***

### onpointerupcapture?

> `optional` **onpointerupcapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:371

#### Inherited from

`Omit.onpointerupcapture`

***

### onlostpointercapturecapture?

> `optional` **onlostpointercapturecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:374

#### Inherited from

`Omit.onlostpointercapturecapture`

***

### on:gamepadconnected?

> `optional` **on:gamepadconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:377

#### Inherited from

`Omit.on:gamepadconnected`

***

### on:gamepaddisconnected?

> `optional` **on:gamepaddisconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:379

#### Inherited from

`Omit.on:gamepaddisconnected`

***

### onscrollcapture?

> `optional` **onscrollcapture?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:385

#### Inherited from

`Omit.onscrollcapture`

***

### onscrollendcapture?

> `optional` **onscrollendcapture?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:388

#### Inherited from

`Omit.onscrollendcapture`

***

### onresizecapture?

> `optional` **onresizecapture?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:391

#### Inherited from

`Omit.onresizecapture`

***

### onwheelcapture?

> `optional` **onwheelcapture?**: `WheelEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:396

#### Inherited from

`Omit.onwheelcapture`

***

### onanimationstartcapture?

> `optional` **onanimationstartcapture?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:401

#### Inherited from

`Omit.onanimationstartcapture`

***

### onanimationendcapture?

> `optional` **onanimationendcapture?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:404

#### Inherited from

`Omit.onanimationendcapture`

***

### onanimationiterationcapture?

> `optional` **onanimationiterationcapture?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:407

#### Inherited from

`Omit.onanimationiterationcapture`

***

### ontransitionstartcapture?

> `optional` **ontransitionstartcapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:412

#### Inherited from

`Omit.ontransitionstartcapture`

***

### ontransitionruncapture?

> `optional` **ontransitionruncapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:415

#### Inherited from

`Omit.ontransitionruncapture`

***

### ontransitionendcapture?

> `optional` **ontransitionendcapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:418

#### Inherited from

`Omit.ontransitionendcapture`

***

### ontransitioncancelcapture?

> `optional` **ontransitioncancelcapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:421

#### Inherited from

`Omit.ontransitioncancelcapture`

***

### on:outrostart?

> `optional` **on:outrostart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:424

#### Inherited from

`Omit.on:outrostart`

***

### onoutrostart?

> `optional` **onoutrostart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:425

#### Inherited from

`Omit.onoutrostart`

***

### onoutrostartcapture?

> `optional` **onoutrostartcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:426

#### Inherited from

`Omit.onoutrostartcapture`

***

### on:outroend?

> `optional` **on:outroend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:427

#### Inherited from

`Omit.on:outroend`

***

### onoutroend?

> `optional` **onoutroend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:428

#### Inherited from

`Omit.onoutroend`

***

### onoutroendcapture?

> `optional` **onoutroendcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:429

#### Inherited from

`Omit.onoutroendcapture`

***

### on:introstart?

> `optional` **on:introstart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:430

#### Inherited from

`Omit.on:introstart`

***

### onintrostart?

> `optional` **onintrostart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:431

#### Inherited from

`Omit.onintrostart`

***

### onintrostartcapture?

> `optional` **onintrostartcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:432

#### Inherited from

`Omit.onintrostartcapture`

***

### on:introend?

> `optional` **on:introend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:433

#### Inherited from

`Omit.on:introend`

***

### onintroend?

> `optional` **onintroend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:434

#### Inherited from

`Omit.onintroend`

***

### onintroendcapture?

> `optional` **onintroendcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:435

#### Inherited from

`Omit.onintroendcapture`

***

### on:message?

> `optional` **on:message?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:438

#### Inherited from

`Omit.on:message`

***

### onmessagecapture?

> `optional` **onmessagecapture?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:440

#### Inherited from

`Omit.onmessagecapture`

***

### on:messageerror?

> `optional` **on:messageerror?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:441

#### Inherited from

`Omit.on:messageerror`

***

### onmessageerrorcapture?

> `optional` **onmessageerrorcapture?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:443

#### Inherited from

`Omit.onmessageerrorcapture`

***

### on:visibilitychange?

> `optional` **on:visibilitychange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:446

#### Inherited from

`Omit.on:visibilitychange`

***

### onvisibilitychange?

> `optional` **onvisibilitychange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:447

#### Inherited from

`Omit.onvisibilitychange`

***

### onvisibilitychangecapture?

> `optional` **onvisibilitychangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:448

#### Inherited from

`Omit.onvisibilitychangecapture`

***

### onbeforematchcapture?

> `optional` **onbeforematchcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:453

#### Inherited from

`Omit.onbeforematchcapture`

***

### oncancelcapture?

> `optional` **oncancelcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:456

#### Inherited from

`Omit.oncancelcapture`

***

### onclosecapture?

> `optional` **onclosecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:459

#### Inherited from

`Omit.onclosecapture`

***

### onfullscreenchangecapture?

> `optional` **onfullscreenchangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:462

#### Inherited from

`Omit.onfullscreenchangecapture`

***

### onfullscreenerrorcapture?

> `optional` **onfullscreenerrorcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:465

#### Inherited from

`Omit.onfullscreenerrorcapture`

***

### bind:contentRect?

> `readonly` `optional` **bind:contentRect?**: `DOMRectReadOnly` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:468

#### Inherited from

`Omit.bind:contentRect`

***

### bind:contentBoxSize?

> `readonly` `optional` **bind:contentBoxSize?**: `ResizeObserverSize`[] \| `null`

Defined in: node\_modules/svelte/elements.d.ts:469

#### Inherited from

`Omit.bind:contentBoxSize`

***

### bind:borderBoxSize?

> `readonly` `optional` **bind:borderBoxSize?**: `ResizeObserverSize`[] \| `null`

Defined in: node\_modules/svelte/elements.d.ts:470

#### Inherited from

`Omit.bind:borderBoxSize`

***

### bind:devicePixelContentBoxSize?

> `readonly` `optional` **bind:devicePixelContentBoxSize?**: `ResizeObserverSize`[] \| `null`

Defined in: node\_modules/svelte/elements.d.ts:471

#### Inherited from

`Omit.bind:devicePixelContentBoxSize`

***

### bind:clientWidth?

> `readonly` `optional` **bind:clientWidth?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:472

#### Inherited from

`Omit.bind:clientWidth`

***

### bind:clientHeight?

> `readonly` `optional` **bind:clientHeight?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:473

#### Inherited from

`Omit.bind:clientHeight`

***

### xmlns?

> `optional` **xmlns?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:475

#### Inherited from

`Omit.xmlns`
