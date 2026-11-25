[**API**](../../API.md)

***

# Interface: VGridProps\<R, C\>

Defined in: [src/solid/VGrid.tsx:122](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L122)

Props of [VGrid](../functions/VGrid.md).

## Extends

- `Omit`\<[`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md), `"role"`\>

## Type Parameters

### R

`R` = `number`

### C

`C` = `number`

## Indexable

> \[`key`: `` `data-${string}` ``\]: `string` \| `number` \| `boolean` \| `undefined`

## Properties

### ref?

> `optional` **ref?**: [`VGridHandle`](VGridHandle.md)

Defined in: [src/solid/VGrid.tsx:129](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L129)

Get reference to [VGridHandle](VGridHandle.md).

***

### children

> **children**: (`row`, `col`, `cell`) => `Element`

Defined in: [src/solid/VGrid.tsx:136](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L136)

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

Defined in: [src/solid/VGrid.tsx:140](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L140)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> **cols**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>

Defined in: [src/solid/VGrid.tsx:144](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L144)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> **rowHeight**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>

Defined in: [src/solid/VGrid.tsx:148](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L148)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> **colWidth**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>

Defined in: [src/solid/VGrid.tsx:152](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L152)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows?

> `optional` **headerRows?**: `number`

Defined in: [src/solid/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L159)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows?

> `optional` **sectionRows?**: readonly `number`[]

Defined in: [src/solid/VGrid.tsx:165](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L165)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows?

> `optional` **footerRows?**: `number`

Defined in: [src/solid/VGrid.tsx:172](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L172)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols?

> `optional` **headerCols?**: `number`

Defined in: [src/solid/VGrid.tsx:179](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L179)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols?

> `optional` **footerCols?**: `number`

Defined in: [src/solid/VGrid.tsx:186](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L186)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans?

> `optional` **spans?**: readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[]

Defined in: [src/solid/VGrid.tsx:192](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L192)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted?

> `optional` **keepMounted?**: readonly [`GridCell`](../../core/interfaces/GridCell.md)[]

Defined in: [src/solid/VGrid.tsx:196](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L196)

List of cells that should be always mounted, even when off screen.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/VGrid.tsx:201](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L201)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### ssrRowCount?

> `optional` **ssrRowCount?**: `number`

Defined in: [src/solid/VGrid.tsx:207](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L207)

A prop for SSR. If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**Set `ssrColCount` too, as a cell is mounted only when both its row and its column are.**

***

### ssrColCount?

> `optional` **ssrColCount?**: `number`

Defined in: [src/solid/VGrid.tsx:213](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L213)

A prop for SSR. If set, the specified amount of columns will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**Set `ssrRowCount` too, as a cell is mounted only when both its row and its column are.**

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/solid/VGrid.tsx:218](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L218)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort?

> `optional` **ariaSort?**: [`GridCell`](../../core/interfaces/GridCell.md) & `object`

Defined in: [src/solid/VGrid.tsx:222](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L222)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

#### Type Declaration

##### order

> **order**: `"ascending"` \| `"descending"` \| `"other"`

***

### onVerticalScroll?

> `optional` **onVerticalScroll?**: (`offset`) => `void`

Defined in: [src/solid/VGrid.tsx:227](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L227)

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

Defined in: [src/solid/VGrid.tsx:232](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L232)

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

Defined in: [src/solid/VGrid.tsx:236](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L236)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/solid/VGrid.tsx:240](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VGrid.tsx#L240)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

***

### $key?

> `optional` **$key?**: `string` \| `number`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:261

Entity identity for server markup: the frame morph matches keyed
elements across responses by it, so client state attached to the
element (focus, selection) follows the entity through reorders and
refetches. SSR compiles it to the `_key` attribute; a DOM compile strips
it. On a component, `$key` is slot occurrence identity across
responses (optional; without it identity is positional).

#### Inherited from

`Omit.$key`

***

### ~~contextmenu?~~

> `optional` **contextmenu?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1025

#### Deprecated

#### Inherited from

`Omit.contextmenu`

***

### hidden?

> `optional` **hidden?**: `"hidden"` \| `"until-found"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:983

#### Inherited from

`Omit.hidden`

***

### slot?

> `optional` **slot?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:929

#### Inherited from

`Omit.slot`

***

### style?

> `optional` **style?**: `CSSProperties`

Defined in: [src/solid/types.ts:7](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/types.ts#L7)

#### Inherited from

`Omit.style`

***

### title?

> `optional` **title?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:999

#### Inherited from

`Omit.title`

***

### dir?

> `optional` **dir?**: `RemoveAttribute` \| `HTMLDir`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:971

#### Inherited from

`Omit.dir`

***

### property?

> `optional` **property?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1019

#### Inherited from

`Omit.property`

***

### is?

> `optional` **is?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:995

#### Inherited from

`Omit.is`

***

### draggable?

> `optional` **draggable?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:972

#### Inherited from

`Omit.draggable`

***

### id?

> `optional` **id?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:926

#### Inherited from

`Omit.id`

***

### lang?

> `optional` **lang?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:996

#### Inherited from

`Omit.lang`

***

### nonce?

> `optional` **nonce?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:927

#### Inherited from

`Omit.nonce`

***

### translate?

> `optional` **translate?**: `"yes"` \| `"no"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1000

#### Inherited from

`Omit.translate`

***

### about?

> `optional` **about?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1015

#### Inherited from

`Omit.about`

***

### datatype?

> `optional` **datatype?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1016

#### Inherited from

`Omit.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1017

#### Inherited from

`Omit.inlist`

***

### prefix?

> `optional` **prefix?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1018

#### Inherited from

`Omit.prefix`

***

### resource?

> `optional` **resource?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1020

#### Inherited from

`Omit.resource`

***

### typeof?

> `optional` **typeof?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1021

#### Inherited from

`Omit.typeof`

***

### vocab?

> `optional` **vocab?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1022

#### Inherited from

`Omit.vocab`

***

### popover?

> `optional` **popover?**: `"auto"` \| `"manual"` \| `"hint"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:997

#### Inherited from

`Omit.popover`

***

### inert?

> `optional` **inert?**: `boolean` \| `""`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:984

#### Inherited from

`Omit.inert`

***

### exportparts?

> `optional` **exportparts?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:982

#### Inherited from

`Omit.exportparts`

***

### part?

> `optional` **part?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:928

#### Inherited from

`Omit.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:317

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

`Omit.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:322

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`Omit.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"list"` \| `"inline"` \| `"both"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:349

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

`Omit.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:329

Similar to the global aria-label. Defines a string value that labels the current element,
which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`Omit.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:343

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

`Omit.aria-brailleroledescription`

***

### aria-busy?

> `optional` **aria-busy?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:354

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

`Omit.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `"mixed"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:360

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`Omit.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:366

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`Omit.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:373

Defines an element's column index or position with respect to the total number of columns
within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`Omit.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:375

Defines a human-readable text alternative of the numeric aria-colindex.

#### Inherited from

`Omit.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:382

Defines the number of columns spanned by a cell or gridcell within a table, grid, or
treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`Omit.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:389

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

`Omit.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `"time"` \| `"page"` \| `"step"` \| `"location"` \| `"date"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:394

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

`Omit.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:407

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`Omit.aria-describedby`

***

### aria-description?

> `optional` **aria-description?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:413

Defines a string value that describes or annotates the current element.

#### See

aria-describedby

#### Inherited from

`Omit.aria-description`

***

### aria-details?

> `optional` **aria-details?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:419

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:426

Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`Omit.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"none"` \| `"copy"` \| `"move"` \| `"execute"` \| `"popup"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:433

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

`Omit.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:439

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`Omit.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:444

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

`Omit.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:450

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

`Omit.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:456

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

`Omit.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"tree"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:461

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

`Omit.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:474

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `"grammar"` \| `"spelling"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:480

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`Omit.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:485

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

`Omit.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:491

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`Omit.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:497

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:499

Defines the hierarchical level of an element within a structure.

#### Inherited from

`Omit.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:504

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`Omit.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:506

Indicates whether an element is modal when displayed.

#### Inherited from

`Omit.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:508

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`Omit.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:513

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

`Omit.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:515

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`Omit.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:523

Identifies an element (or elements) in order to define a visual, functional, or contextual
parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
represent the relationship.

#### See

aria-controls.

#### Inherited from

`Omit.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:529

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

`Omit.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:536

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`Omit.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `"mixed"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:542

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`Omit.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:548

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:555

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

`Omit.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:568

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`Omit.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:570

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`Omit.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:576

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`Omit.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:583

Defines an element's row index or position with respect to the total number of rows within a
table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`Omit.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:585

Defines a human-readable text alternative of aria-rowindex.

#### Inherited from

`Omit.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:592

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`Omit.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:598

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`Omit.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:605

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`Omit.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:607

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`Omit.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:609

Defines the maximum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:611

Defines the minimum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:617

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`Omit.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:619

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`Omit.aria-valuetext`

***

### onCopy?

> `optional` **onCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:771

#### Inherited from

`Omit.onCopy`

***

### onCut?

> `optional` **onCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:773

#### Inherited from

`Omit.onCut`

***

### onPaste?

> `optional` **onPaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:811

#### Inherited from

`Omit.onPaste`

***

### onCompositionEnd?

> `optional` **onCompositionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:762

#### Inherited from

`Omit.onCompositionEnd`

***

### onCompositionStart?

> `optional` **onCompositionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:763

#### Inherited from

`Omit.onCompositionStart`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:764

#### Inherited from

`Omit.onCompositionUpdate`

***

### onFocus?

> `optional` **onFocus?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:787

#### Inherited from

`Omit.onFocus`

***

### onBlur?

> `optional` **onBlur?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:754

#### Inherited from

`Omit.onBlur`

***

### onChange?

> `optional` **onChange?**: `ChangeEventHandlerUnion`\<`HTMLDivElement`, `Event`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:758

#### Inherited from

`Omit.onChange`

***

### onBeforeInput?

> `optional` **onBeforeInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:749

#### Inherited from

`Omit.onBeforeInput`

***

### onInput?

> `optional` **onInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:794

#### Inherited from

`Omit.onInput`

***

### onReset?

> `optional` **onReset?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:826

#### Inherited from

`Omit.onReset`

***

### onSubmit?

> `optional` **onSubmit?**: `EventHandlerUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:840

#### Inherited from

`Omit.onSubmit`

***

### onInvalid?

> `optional` **onInvalid?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:795

#### Inherited from

`Omit.onInvalid`

***

### onLoad?

> `optional` **onLoad?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:799

#### Inherited from

`Omit.onLoad`

***

### onError?

> `optional` **onError?**: `EventHandlerUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:786

#### Inherited from

`Omit.onError`

***

### onKeyDown?

> `optional` **onKeyDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:796

#### Inherited from

`Omit.onKeyDown`

***

### onKeyPress?

> `optional` **onKeyPress?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:797

#### Inherited from

`Omit.onKeyPress`

***

### onKeyUp?

> `optional` **onKeyUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:798

#### Inherited from

`Omit.onKeyUp`

***

### onAbort?

> `optional` **onAbort?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:741

#### Inherited from

`Omit.onAbort`

***

### onCanPlay?

> `optional` **onCanPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:756

#### Inherited from

`Omit.onCanPlay`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:757

#### Inherited from

`Omit.onCanPlayThrough`

***

### onDurationChange?

> `optional` **onDurationChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:783

#### Inherited from

`Omit.onDurationChange`

***

### onEmptied?

> `optional` **onEmptied?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:784

#### Inherited from

`Omit.onEmptied`

***

### onEnded?

> `optional` **onEnded?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:785

#### Inherited from

`Omit.onEnded`

***

### onLoadedData?

> `optional` **onLoadedData?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:800

#### Inherited from

`Omit.onLoadedData`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:801

#### Inherited from

`Omit.onLoadedMetadata`

***

### onLoadStart?

> `optional` **onLoadStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:802

#### Inherited from

`Omit.onLoadStart`

***

### onPause?

> `optional` **onPause?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:812

#### Inherited from

`Omit.onPause`

***

### onPlay?

> `optional` **onPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:813

#### Inherited from

`Omit.onPlay`

***

### onPlaying?

> `optional` **onPlaying?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:814

#### Inherited from

`Omit.onPlaying`

***

### onProgress?

> `optional` **onProgress?**: `EventHandlerUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:824

#### Inherited from

`Omit.onProgress`

***

### onRateChange?

> `optional` **onRateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:825

#### Inherited from

`Omit.onRateChange`

***

### onSeeked?

> `optional` **onSeeked?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:833

#### Inherited from

`Omit.onSeeked`

***

### onSeeking?

> `optional` **onSeeking?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:834

#### Inherited from

`Omit.onSeeking`

***

### onStalled?

> `optional` **onStalled?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:839

#### Inherited from

`Omit.onStalled`

***

### onSuspend?

> `optional` **onSuspend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:841

#### Inherited from

`Omit.onSuspend`

***

### onTimeUpdate?

> `optional` **onTimeUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:842

#### Inherited from

`Omit.onTimeUpdate`

***

### onVolumeChange?

> `optional` **onVolumeChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:852

#### Inherited from

`Omit.onVolumeChange`

***

### onWaiting?

> `optional` **onWaiting?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:853

#### Inherited from

`Omit.onWaiting`

***

### onAuxClick?

> `optional` **onAuxClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:746

#### Inherited from

`Omit.onAuxClick`

***

### onClick?

> `optional` **onClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:759

#### Inherited from

`Omit.onClick`

***

### onContextMenu?

> `optional` **onContextMenu?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:769

#### Inherited from

`Omit.onContextMenu`

***

### onDrag?

> `optional` **onDrag?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:775

#### Inherited from

`Omit.onDrag`

***

### onDragEnd?

> `optional` **onDragEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:776

#### Inherited from

`Omit.onDragEnd`

***

### onDragEnter?

> `optional` **onDragEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:777

#### Inherited from

`Omit.onDragEnter`

***

### onDragExit?

> `optional` **onDragExit?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:778

#### Inherited from

`Omit.onDragExit`

***

### onDragLeave?

> `optional` **onDragLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:779

#### Inherited from

`Omit.onDragLeave`

***

### onDragOver?

> `optional` **onDragOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:780

#### Inherited from

`Omit.onDragOver`

***

### onDragStart?

> `optional` **onDragStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:781

#### Inherited from

`Omit.onDragStart`

***

### onDrop?

> `optional` **onDrop?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:782

#### Inherited from

`Omit.onDrop`

***

### onMouseDown?

> `optional` **onMouseDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:804

#### Inherited from

`Omit.onMouseDown`

***

### onMouseEnter?

> `optional` **onMouseEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:805

#### Inherited from

`Omit.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:806

#### Inherited from

`Omit.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:807

#### Inherited from

`Omit.onMouseMove`

***

### onMouseOut?

> `optional` **onMouseOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:808

#### Inherited from

`Omit.onMouseOut`

***

### onMouseOver?

> `optional` **onMouseOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:809

#### Inherited from

`Omit.onMouseOver`

***

### onMouseUp?

> `optional` **onMouseUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:810

#### Inherited from

`Omit.onMouseUp`

***

### onSelect?

> `optional` **onSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:835

#### Inherited from

`Omit.onSelect`

***

### onTouchCancel?

> `optional` **onTouchCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:844

#### Inherited from

`Omit.onTouchCancel`

***

### onTouchEnd?

> `optional` **onTouchEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:845

#### Inherited from

`Omit.onTouchEnd`

***

### onTouchMove?

> `optional` **onTouchMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:846

#### Inherited from

`Omit.onTouchMove`

***

### onTouchStart?

> `optional` **onTouchStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:847

#### Inherited from

`Omit.onTouchStart`

***

### onPointerDown?

> `optional` **onPointerDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:816

#### Inherited from

`Omit.onPointerDown`

***

### onPointerMove?

> `optional` **onPointerMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:819

#### Inherited from

`Omit.onPointerMove`

***

### onPointerUp?

> `optional` **onPointerUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:823

#### Inherited from

`Omit.onPointerUp`

***

### onPointerCancel?

> `optional` **onPointerCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:815

#### Inherited from

`Omit.onPointerCancel`

***

### onPointerEnter?

> `optional` **onPointerEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:817

#### Inherited from

`Omit.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:818

#### Inherited from

`Omit.onPointerLeave`

***

### onPointerOver?

> `optional` **onPointerOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:821

#### Inherited from

`Omit.onPointerOver`

***

### onPointerOut?

> `optional` **onPointerOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:820

#### Inherited from

`Omit.onPointerOut`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:793

#### Inherited from

`Omit.onGotPointerCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:803

#### Inherited from

`Omit.onLostPointerCapture`

***

### onWheel?

> `optional` **onWheel?**: `EventHandlerUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:854

#### Inherited from

`Omit.onWheel`

***

### onAnimationStart?

> `optional` **onAnimationStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:745

#### Inherited from

`Omit.onAnimationStart`

***

### onAnimationEnd?

> `optional` **onAnimationEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:743

#### Inherited from

`Omit.onAnimationEnd`

***

### onAnimationIteration?

> `optional` **onAnimationIteration?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:744

#### Inherited from

`Omit.onAnimationIteration`

***

### onToggle?

> `optional` **onToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:843

#### Inherited from

`Omit.onToggle`

***

### onBeforeToggle?

> `optional` **onBeforeToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:752

#### Inherited from

`Omit.onBeforeToggle`

***

### onTransitionCancel?

> `optional` **onTransitionCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:848

#### Inherited from

`Omit.onTransitionCancel`

***

### onTransitionEnd?

> `optional` **onTransitionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:849

#### Inherited from

`Omit.onTransitionEnd`

***

### onTransitionRun?

> `optional` **onTransitionRun?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:850

#### Inherited from

`Omit.onTransitionRun`

***

### onTransitionStart?

> `optional` **onTransitionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:851

#### Inherited from

`Omit.onTransitionStart`

***

### autocapitalize?

> `optional` **autocapitalize?**: `RemoveAttribute` \| `HTMLAutocapitalize`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:963

#### Inherited from

`Omit.autocapitalize`

***

### autocorrect?

> `optional` **autocorrect?**: `"off"` \| `"on"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:964

#### Inherited from

`Omit.autocorrect`

***

### innerText?

> `optional` **innerText?**: `string` \| `number`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:959

#### Inherited from

`Omit.innerText`

***

### spellcheck?

> `optional` **spellcheck?**: `RemoveAttribute` \| `EnumeratedAcceptsEmpty` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:998

#### Inherited from

`Omit.spellcheck`

***

### innerHTML?

> `optional` **innerHTML?**: `string`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:906

#### Inherited from

`Omit.innerHTML`

***

### textContent?

> `optional` **textContent?**: `string` \| `number`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:907

#### Inherited from

`Omit.textContent`

***

### autofocus?

> `optional` **autofocus?**: `boolean` \| `""`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:910

#### Inherited from

`Omit.autofocus`

***

### class?

> `optional` **class?**: `string` \| `number` \| `boolean` \| `Record`\<`string`, `boolean` \| `undefined`\> \| `ClassValue`[] \| `null`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:924

Class names to apply. Accepts a string, an object whose keys are class
names and values are booleans (`{ active: isActive() }` — truthy keys
are added), or an array merging strings/objects/nested arrays
(`["card", props.class, { active: isActive() }]`).

For conditional classes, prefer the array+object form. Don't build
class strings manually with concatenation, template literals, or
`.filter(Boolean).join(" ")` — that's the React/`classnames` reflex
and the array+object form replaces it. The array+object form composes
with reactive values directly; manually-built strings re-run the whole
concatenation on every change instead of toggling the affected classes.

#### Inherited from

`Omit.class`

***

### accesskey?

> `optional` **accesskey?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:962

#### Inherited from

`Omit.accesskey`

***

### contenteditable?

> `optional` **contenteditable?**: `"inherit"` \| `"plaintext-only"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:965

#### Inherited from

`Omit.contenteditable`

***

### enterkeyhint?

> `optional` **enterkeyhint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:973

#### Inherited from

`Omit.enterkeyhint`

***

### inputmode?

> `optional` **inputmode?**: `"search"` \| `"none"` \| `"text"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:985

#### Inherited from

`Omit.inputmode`

***

### virtualkeyboardpolicy?

> `optional` **virtualkeyboardpolicy?**: `"auto"` \| `"manual"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1003

**`Experimental`**

#### Inherited from

`Omit.virtualkeyboardpolicy`

***

### writingsuggestions?

> `optional` **writingsuggestions?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1005

**`Experimental`**

#### Inherited from

`Omit.writingsuggestions`

***

### itemid?

> `optional` **itemid?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1008

#### Inherited from

`Omit.itemid`

***

### itemprop?

> `optional` **itemprop?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1009

#### Inherited from

`Omit.itemprop`

***

### itemref?

> `optional` **itemref?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1010

#### Inherited from

`Omit.itemref`

***

### itemscope?

> `optional` **itemscope?**: `boolean` \| `""`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1011

#### Inherited from

`Omit.itemscope`

***

### itemtype?

> `optional` **itemtype?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1012

#### Inherited from

`Omit.itemtype`

***

### elementtiming?

> `optional` **elementtiming?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:925

#### Inherited from

`Omit.elementtiming`

***

### tabindex?

> `optional` **tabindex?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:931

#### Inherited from

`Omit.tabindex`

***

### $ServerOnly?

> `optional` **$ServerOnly?**: `boolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:252

#### Inherited from

`Omit.$ServerOnly`

***

### onAnimationCancel?

> `optional` **onAnimationCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:742

#### Inherited from

`Omit.onAnimationCancel`

***

### onBeforeCopy?

> `optional` **onBeforeCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:747

#### Inherited from

`Omit.onBeforeCopy`

***

### onBeforeCut?

> `optional` **onBeforeCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:748

#### Inherited from

`Omit.onBeforeCut`

***

### onBeforeMatch?

> `optional` **onBeforeMatch?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:750

#### Inherited from

`Omit.onBeforeMatch`

***

### onBeforePaste?

> `optional` **onBeforePaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:751

#### Inherited from

`Omit.onBeforePaste`

***

### onBeforeXRSelect?

> `optional` **onBeforeXRSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:753

#### Inherited from

`Omit.onBeforeXRSelect`

***

### onCancel?

> `optional` **onCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:755

#### Inherited from

`Omit.onCancel`

***

### onClose?

> `optional` **onClose?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:760

#### Inherited from

`Omit.onClose`

***

### onCommand?

> `optional` **onCommand?**: `EventHandlerUnion`\<`HTMLDivElement`, `CommandEvent`, `EventHandler`\<`HTMLDivElement`, `CommandEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:761

#### Inherited from

`Omit.onCommand`

***

### onContentVisibilityAutoStateChange?

> `optional` **onContentVisibilityAutoStateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:765

#### Inherited from

`Omit.onContentVisibilityAutoStateChange`

***

### onContextLost?

> `optional` **onContextLost?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:768

#### Inherited from

`Omit.onContextLost`

***

### onContextRestored?

> `optional` **onContextRestored?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:770

#### Inherited from

`Omit.onContextRestored`

***

### onCueChange?

> `optional` **onCueChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:772

#### Inherited from

`Omit.onCueChange`

***

### onDblClick?

> `optional` **onDblClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:774

#### Inherited from

`Omit.onDblClick`

***

### onFocusIn?

> `optional` **onFocusIn?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:788

#### Inherited from

`Omit.onFocusIn`

***

### onFocusOut?

> `optional` **onFocusOut?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:789

#### Inherited from

`Omit.onFocusOut`

***

### onFormData?

> `optional` **onFormData?**: `EventHandlerUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:790

#### Inherited from

`Omit.onFormData`

***

### onFullscreenChange?

> `optional` **onFullscreenChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:791

#### Inherited from

`Omit.onFullscreenChange`

***

### onFullscreenError?

> `optional` **onFullscreenError?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:792

#### Inherited from

`Omit.onFullscreenError`

***

### onPointerRawUpdate?

> `optional` **onPointerRawUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:822

#### Inherited from

`Omit.onPointerRawUpdate`

***

### onScrollSnapChange?

> `optional` **onScrollSnapChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `SnapEvent`, `EventHandler`\<`HTMLDivElement`, `SnapEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:830

#### Inherited from

`Omit.onScrollSnapChange`

***

### onScrollSnapChanging?

> `optional` **onScrollSnapChanging?**: `EventHandlerUnion`\<`HTMLDivElement`, `SnapEvent`, `EventHandler`\<`HTMLDivElement`, `SnapEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:831

#### Inherited from

`Omit.onScrollSnapChanging`

***

### onSecurityPolicyViolation?

> `optional` **onSecurityPolicyViolation?**: `EventHandlerUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:832

#### Inherited from

`Omit.onSecurityPolicyViolation`

***

### onSelectionChange?

> `optional` **onSelectionChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:836

#### Inherited from

`Omit.onSelectionChange`

***

### onSelectStart?

> `optional` **onSelectStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:837

#### Inherited from

`Omit.onSelectStart`

***

### onSlotChange?

> `optional` **onSlotChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:838

#### Inherited from

`Omit.onSlotChange`
