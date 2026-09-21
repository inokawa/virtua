[**API**](../../API.md)

***

# Interface: VGridProps\<R, C\>

Defined in: [src/solid/VGrid.tsx:124](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L124)

Props of [VGrid](../functions/VGrid.md).

## Extends

- `Omit`\<[`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md), `"role"`\>

## Type Parameters

### R

`R` = `number`

### C

`C` = `number`

## Properties

### ref?

> `optional` **ref?**: [`VGridHandle`](VGridHandle.md) \| ((`handle?`) => `void`)

Defined in: [src/solid/VGrid.tsx:131](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L131)

Get reference to [VGridHandle](VGridHandle.md).

***

### children

> **children**: (`row`, `col`, `cell`) => `Element`

Defined in: [src/solid/VGrid.tsx:138](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L138)

A function to create cell elements rendered by this component.

#### Parameters

##### row

`R`

the item of [VGridProps.rows](#rows) at the row of the cell, or the row index if [VGridProps.rows](#rows) is a number

##### col

`C`

the item of [VGridProps.cols](#cols) at the column of the cell, or the column index if [VGridProps.cols](#cols) is a number

##### cell

`Readonly`\<[`GridCell`](../../core/interfaces/GridCell.md)\>

the row index and the column index of the cell

#### Returns

`Element`

***

### rows

> **rows**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`R`\>

Defined in: [src/solid/VGrid.tsx:142](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L142)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> **cols**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>

Defined in: [src/solid/VGrid.tsx:146](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L146)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> **rowHeight**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>

Defined in: [src/solid/VGrid.tsx:150](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L150)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> **colWidth**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>

Defined in: [src/solid/VGrid.tsx:154](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L154)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows?

> `optional` **headerRows?**: `number`

Defined in: [src/solid/VGrid.tsx:161](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L161)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows?

> `optional` **sectionRows?**: readonly `number`[]

Defined in: [src/solid/VGrid.tsx:167](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L167)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows?

> `optional` **footerRows?**: `number`

Defined in: [src/solid/VGrid.tsx:174](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L174)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols?

> `optional` **headerCols?**: `number`

Defined in: [src/solid/VGrid.tsx:181](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L181)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols?

> `optional` **footerCols?**: `number`

Defined in: [src/solid/VGrid.tsx:188](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L188)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans?

> `optional` **spans?**: readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[]

Defined in: [src/solid/VGrid.tsx:194](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L194)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted?

> `optional` **keepMounted?**: readonly [`GridCell`](../../core/interfaces/GridCell.md)[]

Defined in: [src/solid/VGrid.tsx:198](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L198)

List of cells that should be always mounted, even when off screen.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/VGrid.tsx:203](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L203)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/solid/VGrid.tsx:208](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L208)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort?

> `optional` **ariaSort?**: [`GridCell`](../../core/interfaces/GridCell.md) & `object`

Defined in: [src/solid/VGrid.tsx:212](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L212)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

#### Type Declaration

##### order

> **order**: `"ascending"` \| `"descending"` \| `"other"`

***

### onVerticalScroll?

> `optional` **onVerticalScroll?**: (`offset`) => `void`

Defined in: [src/solid/VGrid.tsx:217](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L217)

Callback invoked whenever the vertical scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop.

#### Returns

`void`

***

### onHorizontalScroll?

> `optional` **onHorizontalScroll?**: (`offset`) => `void`

Defined in: [src/solid/VGrid.tsx:222](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L222)

Callback invoked whenever the horizontal scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollLeft. Always positive even in RTL.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/VGrid.tsx:226](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/VGrid.tsx#L226)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### style?

> `optional` **style?**: `CSSProperties`

Defined in: [src/solid/types.ts:7](https://github.com/inokawa/virtua/blob/0bbc9b0af5fcd1d7a0f9d2733e888d4f63efa9f9/src/solid/types.ts#L7)

#### Inherited from

`Omit.style`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1086

Defines an element's row index or position with respect to the total number of rows within a
table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-rowindex`](VListProps.md#aria-rowindex)

***

### aria-colindex?

> `optional` **aria-colindex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:872

Defines an element's column index or position with respect to the total number of columns
within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-colindex`](VListProps.md#aria-colindex)

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1094

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-rowspan`](VListProps.md#aria-rowspan)

***

### aria-colspan?

> `optional` **aria-colspan?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:881

Defines the number of columns spanned by a cell or gridcell within a table, grid, or
treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-colspan`](VListProps.md#aria-colspan)

***

### id?

> `optional` **id?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:688

#### Inherited from

`Omit.id`

***

### tabIndex?

> `optional` **tabIndex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:694

#### Inherited from

`Omit.tabIndex`

***

### onKeyDown?

> `optional` **onKeyDown?**: `EventHandlerUnion`\<`HTMLElement`, `KeyboardEvent`, `EventHandler`\<`HTMLElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:341

#### Inherited from

`Omit.onKeyDown`

***

### onWheel?

> `optional` **onWheel?**: `EventHandlerUnion`\<`HTMLElement`, `WheelEvent`, `EventHandler`\<`HTMLElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:401

#### Inherited from

`Omit.onWheel`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:816

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-activedescendant`](VListProps.md#aria-activedescendant)

***

### aria-atomic?

> `optional` **aria-atomic?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:821

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-atomic`](VListProps.md#aria-atomic)

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:848

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-autocomplete`](VListProps.md#aria-autocomplete)

***

### aria-braillelabel?

> `optional` **aria-braillelabel?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:828

Similar to the global aria-label. Defines a string value that labels the current element,
which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-braillelabel`](VListProps.md#aria-braillelabel)

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:842

Defines a human-readable, author-localized abbreviated description for the role of an element
intended to be converted into Braille. Braille is not a one-to-one transliteration of letters
and numbers, but rather it includes various abbreviations, contractions, and characters that
represent words (known as logograms).

Instead of converting long role descriptions to Braille, the aria-brailleroledescription
attribute allows for providing an abbreviated version of the aria-roledescription value,
which is a human-readable, author-localized description for the role of an element, for
improved user experience with braille interfaces.

#### See

aria-roledescription.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-brailleroledescription`](VListProps.md#aria-brailleroledescription)

***

### aria-busy?

> `optional` **aria-busy?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:853

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-busy`](VListProps.md#aria-busy)

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:859

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-checked`](VListProps.md#aria-checked)

***

### aria-colcount?

> `optional` **aria-colcount?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:865

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-colcount`](VListProps.md#aria-colcount)

***

### aria-colindextext?

> `optional` **aria-colindextext?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:874

Defines a human-readable text alternative of the numeric aria-colindex.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-colindextext`](VListProps.md#aria-colindextext)

***

### aria-controls?

> `optional` **aria-controls?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:888

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-controls`](VListProps.md#aria-controls)

***

### aria-current?

> `optional` **aria-current?**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:893

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-current`](VListProps.md#aria-current)

***

### aria-describedby?

> `optional` **aria-describedby?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:908

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

[`VListProps`](VListProps.md).[`aria-describedby`](VListProps.md#aria-describedby)

***

### aria-description?

> `optional` **aria-description?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:914

Defines a string value that describes or annotates the current element.

#### See

aria-describedby

#### Inherited from

[`VListProps`](VListProps.md).[`aria-description`](VListProps.md#aria-description)

***

### aria-details?

> `optional` **aria-details?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:920

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-details`](VListProps.md#aria-details)

***

### aria-disabled?

> `optional` **aria-disabled?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:927

Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-disabled`](VListProps.md#aria-disabled)

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:934

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

[`VListProps`](VListProps.md).[`aria-dropeffect`](VListProps.md#aria-dropeffect)

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:940

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-errormessage`](VListProps.md#aria-errormessage)

***

### aria-expanded?

> `optional` **aria-expanded?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:945

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-expanded`](VListProps.md#aria-expanded)

***

### aria-flowto?

> `optional` **aria-flowto?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:951

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-flowto`](VListProps.md#aria-flowto)

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:957

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

[`VListProps`](VListProps.md).[`aria-grabbed`](VListProps.md#aria-grabbed)

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:962

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-haspopup`](VListProps.md#aria-haspopup)

***

### aria-hidden?

> `optional` **aria-hidden?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:977

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-hidden`](VListProps.md#aria-hidden)

***

### aria-invalid?

> `optional` **aria-invalid?**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:983

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-invalid`](VListProps.md#aria-invalid)

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:988

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-keyshortcuts`](VListProps.md#aria-keyshortcuts)

***

### aria-label?

> `optional` **aria-label?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:994

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-label`](VListProps.md#aria-label)

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1000

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-labelledby`](VListProps.md#aria-labelledby)

***

### aria-level?

> `optional` **aria-level?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1002

Defines the hierarchical level of an element within a structure.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-level`](VListProps.md#aria-level)

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1007

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-live`](VListProps.md#aria-live)

***

### aria-modal?

> `optional` **aria-modal?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1009

Indicates whether an element is modal when displayed.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-modal`](VListProps.md#aria-modal)

***

### aria-multiline?

> `optional` **aria-multiline?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1011

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-multiline`](VListProps.md#aria-multiline)

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1016

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-multiselectable`](VListProps.md#aria-multiselectable)

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1018

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-orientation`](VListProps.md#aria-orientation)

***

### aria-owns?

> `optional` **aria-owns?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1026

Identifies an element (or elements) in order to define a visual, functional, or contextual
parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
represent the relationship.

#### See

aria-controls.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-owns`](VListProps.md#aria-owns)

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1032

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-placeholder`](VListProps.md#aria-placeholder)

***

### aria-posinset?

> `optional` **aria-posinset?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1039

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-posinset`](VListProps.md#aria-posinset)

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1045

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-pressed`](VListProps.md#aria-pressed)

***

### aria-readonly?

> `optional` **aria-readonly?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1051

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-readonly`](VListProps.md#aria-readonly)

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1058

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-relevant`](VListProps.md#aria-relevant)

***

### aria-required?

> `optional` **aria-required?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1071

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-required`](VListProps.md#aria-required)

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1073

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-roledescription`](VListProps.md#aria-roledescription)

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1079

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-rowcount`](VListProps.md#aria-rowcount)

***

### aria-rowindextext?

> `optional` **aria-rowindextext?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1088

Defines a human-readable text alternative of aria-rowindex.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-rowindextext`](VListProps.md#aria-rowindextext)

***

### aria-selected?

> `optional` **aria-selected?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1100

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-selected`](VListProps.md#aria-selected)

***

### aria-setsize?

> `optional` **aria-setsize?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1107

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-setsize`](VListProps.md#aria-setsize)

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1109

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-sort`](VListProps.md#aria-sort)

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1111

Defines the maximum allowed value for a range widget.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuemax`](VListProps.md#aria-valuemax)

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1113

Defines the minimum allowed value for a range widget.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuemin`](VListProps.md#aria-valuemin)

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1119

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuenow`](VListProps.md#aria-valuenow)

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1121

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

[`VListProps`](VListProps.md).[`aria-valuetext`](VListProps.md#aria-valuetext)

***

### class?

> `optional` **class?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:686

#### Inherited from

`Omit.class`
