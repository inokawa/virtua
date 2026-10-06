[**API**](../../API.md)

***

# Interface: VGridProps\<R, C\>

Defined in: [src/solid/VGrid.tsx:129](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L129)

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

Defined in: [src/solid/VGrid.tsx:136](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L136)

Get reference to [VGridHandle](VGridHandle.md).

***

### children

> **children**: (`row`, `col`, `cell`) => `Element`

Defined in: [src/solid/VGrid.tsx:143](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L143)

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

Defined in: [src/solid/VGrid.tsx:147](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L147)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> **cols**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>

Defined in: [src/solid/VGrid.tsx:151](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L151)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> **rowHeight**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>

Defined in: [src/solid/VGrid.tsx:155](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L155)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> **colWidth**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>

Defined in: [src/solid/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L159)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows?

> `optional` **headerRows?**: `number`

Defined in: [src/solid/VGrid.tsx:166](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L166)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows?

> `optional` **sectionRows?**: readonly `number`[]

Defined in: [src/solid/VGrid.tsx:172](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L172)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows?

> `optional` **footerRows?**: `number`

Defined in: [src/solid/VGrid.tsx:179](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L179)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols?

> `optional` **headerCols?**: `number`

Defined in: [src/solid/VGrid.tsx:186](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L186)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols?

> `optional` **footerCols?**: `number`

Defined in: [src/solid/VGrid.tsx:193](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L193)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans?

> `optional` **spans?**: readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[]

Defined in: [src/solid/VGrid.tsx:199](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L199)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted?

> `optional` **keepMounted?**: readonly [`GridCell`](../../core/interfaces/GridCell.md)[]

Defined in: [src/solid/VGrid.tsx:203](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L203)

List of cells that should be always mounted, even when off screen.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/VGrid.tsx:208](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L208)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/solid/VGrid.tsx:213](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L213)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort?

> `optional` **ariaSort?**: [`GridCell`](../../core/interfaces/GridCell.md) & `object`

Defined in: [src/solid/VGrid.tsx:217](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L217)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

#### Type Declaration

##### order

> **order**: `"ascending"` \| `"descending"` \| `"other"`

***

### onVerticalScroll?

> `optional` **onVerticalScroll?**: (`offset`) => `void`

Defined in: [src/solid/VGrid.tsx:222](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L222)

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

Defined in: [src/solid/VGrid.tsx:227](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L227)

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

Defined in: [src/solid/VGrid.tsx:231](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L231)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/solid/VGrid.tsx:235](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/VGrid.tsx#L235)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

***

### slot?

> `optional` **slot?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:690

#### Inherited from

`Omit.slot`

***

### style?

> `optional` **style?**: `CSSProperties`

Defined in: [src/solid/types.ts:6](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/solid/types.ts#L6)

#### Inherited from

`Omit.style`

***

### title?

> `optional` **title?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1233

#### Inherited from

`Omit.title`

***

### dir?

> `optional` **dir?**: `HTMLDir`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1212

#### Inherited from

`Omit.dir`

***

### property?

> `optional` **property?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1269

#### Inherited from

`Omit.property`

***

### is?

> `optional` **is?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1228

#### Inherited from

`Omit.is`

***

### accessKey?

> `optional` **accessKey?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1236

#### Inherited from

`Omit.accessKey`

***

### autoCapitalize?

> `optional` **autoCapitalize?**: `HTMLAutocapitalize`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1237

#### Inherited from

`Omit.autoCapitalize`

***

### contentEditable?

> `optional` **contentEditable?**: `boolean` \| `"inherit"` \| `"plaintext-only"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1238

#### Inherited from

`Omit.contentEditable`

***

### ~~contextMenu?~~

> `optional` **contextMenu?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1277

#### Deprecated

#### Inherited from

`Omit.contextMenu`

***

### draggable?

> `optional` **draggable?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1213

#### Inherited from

`Omit.draggable`

***

### hidden?

> `optional` **hidden?**: `boolean` \| `"until-found"` \| `"hidden"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1216

#### Inherited from

`Omit.hidden`

***

### id?

> `optional` **id?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:688

#### Inherited from

`Omit.id`

***

### lang?

> `optional` **lang?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1229

#### Inherited from

`Omit.lang`

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:689

#### Inherited from

`Omit.nonce`

***

### tabIndex?

> `optional` **tabIndex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:694

#### Inherited from

`Omit.tabIndex`

***

### translate?

> `optional` **translate?**: `"yes"` \| `"no"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1234

#### Inherited from

`Omit.translate`

***

### about?

> `optional` **about?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1265

#### Inherited from

`Omit.about`

***

### datatype?

> `optional` **datatype?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1266

#### Inherited from

`Omit.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1267

#### Inherited from

`Omit.inlist`

***

### prefix?

> `optional` **prefix?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1268

#### Inherited from

`Omit.prefix`

***

### resource?

> `optional` **resource?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1270

#### Inherited from

`Omit.resource`

***

### typeof?

> `optional` **typeof?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1271

#### Inherited from

`Omit.typeof`

***

### vocab?

> `optional` **vocab?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1272

#### Inherited from

`Omit.vocab`

***

### itemProp?

> `optional` **itemProp?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1259

#### Inherited from

`Omit.itemProp`

***

### itemScope?

> `optional` **itemScope?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1261

#### Inherited from

`Omit.itemScope`

***

### itemType?

> `optional` **itemType?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1262

#### Inherited from

`Omit.itemType`

***

### itemRef?

> `optional` **itemRef?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1260

#### Inherited from

`Omit.itemRef`

***

### popover?

> `optional` **popover?**: `boolean` \| `"auto"` \| `"manual"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1231

#### Inherited from

`Omit.popover`

***

### inert?

> `optional` **inert?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1217

#### Inherited from

`Omit.inert`

***

### inputMode?

> `optional` **inputMode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1240

#### Inherited from

`Omit.inputMode`

***

### exportparts?

> `optional` **exportparts?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1215

#### Inherited from

`Omit.exportparts`

***

### part?

> `optional` **part?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1230

#### Inherited from

`Omit.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:816

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

`Omit.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:821

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`Omit.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:848

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

`Omit.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:828

Similar to the global aria-label. Defines a string value that labels the current element,
which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`Omit.aria-braillelabel`

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

`Omit.aria-brailleroledescription`

***

### aria-busy?

> `optional` **aria-busy?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:853

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

`Omit.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:859

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`Omit.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:865

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`Omit.aria-colcount`

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

`Omit.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:874

Defines a human-readable text alternative of the numeric aria-colindex.

#### Inherited from

`Omit.aria-colindextext`

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

`Omit.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:888

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

`Omit.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:893

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

`Omit.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:908

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`Omit.aria-describedby`

***

### aria-description?

> `optional` **aria-description?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:914

Defines a string value that describes or annotates the current element.

#### See

aria-describedby

#### Inherited from

`Omit.aria-description`

***

### aria-details?

> `optional` **aria-details?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:920

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-details`

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

`Omit.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:934

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

`Omit.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:940

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`Omit.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:945

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

`Omit.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:951

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

`Omit.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:957

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

`Omit.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:962

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

`Omit.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:977

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:983

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`Omit.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:988

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

`Omit.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:994

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`Omit.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1000

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1002

Defines the hierarchical level of an element within a structure.

#### Inherited from

`Omit.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1007

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`Omit.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1009

Indicates whether an element is modal when displayed.

#### Inherited from

`Omit.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1011

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`Omit.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1016

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

`Omit.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1018

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`Omit.aria-orientation`

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

`Omit.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1032

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

`Omit.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1039

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`Omit.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1045

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`Omit.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1051

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1058

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

`Omit.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1071

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`Omit.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1073

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`Omit.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1079

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`Omit.aria-rowcount`

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

`Omit.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1088

Defines a human-readable text alternative of aria-rowindex.

#### Inherited from

`Omit.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1094

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`Omit.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1100

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`Omit.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1107

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`Omit.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1109

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`Omit.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1111

Defines the maximum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1113

Defines the minimum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1119

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`Omit.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1121

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`Omit.aria-valuetext`

***

### onCopy?

> `optional` **onCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:316

#### Inherited from

`Omit.onCopy`

***

### onCut?

> `optional` **onCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:318

#### Inherited from

`Omit.onCut`

***

### onPaste?

> `optional` **onPaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:356

#### Inherited from

`Omit.onPaste`

***

### onCompositionEnd?

> `optional` **onCompositionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:307

#### Inherited from

`Omit.onCompositionEnd`

***

### onCompositionStart?

> `optional` **onCompositionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:308

#### Inherited from

`Omit.onCompositionStart`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:309

#### Inherited from

`Omit.onCompositionUpdate`

***

### onFocus?

> `optional` **onFocus?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:332

#### Inherited from

`Omit.onFocus`

***

### onBlur?

> `optional` **onBlur?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:298

#### Inherited from

`Omit.onBlur`

***

### onChange?

> `optional` **onChange?**: `ChangeEventHandlerUnion`\<`HTMLDivElement`, `Event`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:302

#### Inherited from

`Omit.onChange`

***

### onBeforeInput?

> `optional` **onBeforeInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:293

#### Inherited from

`Omit.onBeforeInput`

***

### onInput?

> `optional` **onInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:339

#### Inherited from

`Omit.onInput`

***

### onReset?

> `optional` **onReset?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:371

#### Inherited from

`Omit.onReset`

***

### onSubmit?

> `optional` **onSubmit?**: `EventHandlerUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:387

#### Inherited from

`Omit.onSubmit`

***

### onInvalid?

> `optional` **onInvalid?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:340

#### Inherited from

`Omit.onInvalid`

***

### onLoad?

> `optional` **onLoad?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:344

#### Inherited from

`Omit.onLoad`

***

### onError?

> `optional` **onError?**: `EventHandlerUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:331

#### Inherited from

`Omit.onError`

***

### onKeyDown?

> `optional` **onKeyDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:341

#### Inherited from

`Omit.onKeyDown`

***

### onKeyPress?

> `optional` **onKeyPress?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:342

#### Inherited from

`Omit.onKeyPress`

***

### onKeyUp?

> `optional` **onKeyUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:343

#### Inherited from

`Omit.onKeyUp`

***

### onAbort?

> `optional` **onAbort?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:285

#### Inherited from

`Omit.onAbort`

***

### onCanPlay?

> `optional` **onCanPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:300

#### Inherited from

`Omit.onCanPlay`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:301

#### Inherited from

`Omit.onCanPlayThrough`

***

### onDurationChange?

> `optional` **onDurationChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:328

#### Inherited from

`Omit.onDurationChange`

***

### onEmptied?

> `optional` **onEmptied?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:329

#### Inherited from

`Omit.onEmptied`

***

### onEnded?

> `optional` **onEnded?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:330

#### Inherited from

`Omit.onEnded`

***

### onLoadedData?

> `optional` **onLoadedData?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:345

#### Inherited from

`Omit.onLoadedData`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:346

#### Inherited from

`Omit.onLoadedMetadata`

***

### onLoadStart?

> `optional` **onLoadStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:347

#### Inherited from

`Omit.onLoadStart`

***

### onPause?

> `optional` **onPause?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:357

#### Inherited from

`Omit.onPause`

***

### onPlay?

> `optional` **onPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:358

#### Inherited from

`Omit.onPlay`

***

### onPlaying?

> `optional` **onPlaying?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:359

#### Inherited from

`Omit.onPlaying`

***

### onProgress?

> `optional` **onProgress?**: `EventHandlerUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:369

#### Inherited from

`Omit.onProgress`

***

### onRateChange?

> `optional` **onRateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:370

#### Inherited from

`Omit.onRateChange`

***

### onSeeked?

> `optional` **onSeeked?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:380

#### Inherited from

`Omit.onSeeked`

***

### onSeeking?

> `optional` **onSeeking?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:381

#### Inherited from

`Omit.onSeeking`

***

### onStalled?

> `optional` **onStalled?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:386

#### Inherited from

`Omit.onStalled`

***

### onSuspend?

> `optional` **onSuspend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:388

#### Inherited from

`Omit.onSuspend`

***

### onTimeUpdate?

> `optional` **onTimeUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:389

#### Inherited from

`Omit.onTimeUpdate`

***

### onVolumeChange?

> `optional` **onVolumeChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:399

#### Inherited from

`Omit.onVolumeChange`

***

### onWaiting?

> `optional` **onWaiting?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:400

#### Inherited from

`Omit.onWaiting`

***

### onAuxClick?

> `optional` **onAuxClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:290

#### Inherited from

`Omit.onAuxClick`

***

### onClick?

> `optional` **onClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:303

#### Inherited from

`Omit.onClick`

***

### onContextMenu?

> `optional` **onContextMenu?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:314

#### Inherited from

`Omit.onContextMenu`

***

### onDrag?

> `optional` **onDrag?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:320

#### Inherited from

`Omit.onDrag`

***

### onDragEnd?

> `optional` **onDragEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:321

#### Inherited from

`Omit.onDragEnd`

***

### onDragEnter?

> `optional` **onDragEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:322

#### Inherited from

`Omit.onDragEnter`

***

### onDragExit?

> `optional` **onDragExit?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:323

#### Inherited from

`Omit.onDragExit`

***

### onDragLeave?

> `optional` **onDragLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:324

#### Inherited from

`Omit.onDragLeave`

***

### onDragOver?

> `optional` **onDragOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:325

#### Inherited from

`Omit.onDragOver`

***

### onDragStart?

> `optional` **onDragStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:326

#### Inherited from

`Omit.onDragStart`

***

### onDrop?

> `optional` **onDrop?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:327

#### Inherited from

`Omit.onDrop`

***

### onMouseDown?

> `optional` **onMouseDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:349

#### Inherited from

`Omit.onMouseDown`

***

### onMouseEnter?

> `optional` **onMouseEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:350

#### Inherited from

`Omit.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:351

#### Inherited from

`Omit.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:352

#### Inherited from

`Omit.onMouseMove`

***

### onMouseOut?

> `optional` **onMouseOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:353

#### Inherited from

`Omit.onMouseOut`

***

### onMouseOver?

> `optional` **onMouseOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:354

#### Inherited from

`Omit.onMouseOver`

***

### onMouseUp?

> `optional` **onMouseUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:355

#### Inherited from

`Omit.onMouseUp`

***

### onSelect?

> `optional` **onSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:382

#### Inherited from

`Omit.onSelect`

***

### onTouchCancel?

> `optional` **onTouchCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:391

#### Inherited from

`Omit.onTouchCancel`

***

### onTouchEnd?

> `optional` **onTouchEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:392

#### Inherited from

`Omit.onTouchEnd`

***

### onTouchMove?

> `optional` **onTouchMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:393

#### Inherited from

`Omit.onTouchMove`

***

### onTouchStart?

> `optional` **onTouchStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:394

#### Inherited from

`Omit.onTouchStart`

***

### onPointerDown?

> `optional` **onPointerDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:361

#### Inherited from

`Omit.onPointerDown`

***

### onPointerMove?

> `optional` **onPointerMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:364

#### Inherited from

`Omit.onPointerMove`

***

### onPointerUp?

> `optional` **onPointerUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:368

#### Inherited from

`Omit.onPointerUp`

***

### onPointerCancel?

> `optional` **onPointerCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:360

#### Inherited from

`Omit.onPointerCancel`

***

### onPointerEnter?

> `optional` **onPointerEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:362

#### Inherited from

`Omit.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:363

#### Inherited from

`Omit.onPointerLeave`

***

### onPointerOver?

> `optional` **onPointerOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:366

#### Inherited from

`Omit.onPointerOver`

***

### onPointerOut?

> `optional` **onPointerOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:365

#### Inherited from

`Omit.onPointerOut`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:338

#### Inherited from

`Omit.onGotPointerCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:348

#### Inherited from

`Omit.onLostPointerCapture`

***

### onWheel?

> `optional` **onWheel?**: `EventHandlerUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:401

#### Inherited from

`Omit.onWheel`

***

### onAnimationStart?

> `optional` **onAnimationStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:289

#### Inherited from

`Omit.onAnimationStart`

***

### onAnimationEnd?

> `optional` **onAnimationEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:287

#### Inherited from

`Omit.onAnimationEnd`

***

### onAnimationIteration?

> `optional` **onAnimationIteration?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:288

#### Inherited from

`Omit.onAnimationIteration`

***

### onToggle?

> `optional` **onToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:390

#### Inherited from

`Omit.onToggle`

***

### onBeforeToggle?

> `optional` **onBeforeToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:296

#### Inherited from

`Omit.onBeforeToggle`

***

### onTransitionCancel?

> `optional` **onTransitionCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:395

#### Inherited from

`Omit.onTransitionCancel`

***

### onTransitionEnd?

> `optional` **onTransitionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:396

#### Inherited from

`Omit.onTransitionEnd`

***

### onTransitionRun?

> `optional` **onTransitionRun?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:397

#### Inherited from

`Omit.onTransitionRun`

***

### onTransitionStart?

> `optional` **onTransitionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:398

#### Inherited from

`Omit.onTransitionStart`

***

### ~~contextmenu?~~

> `optional` **contextmenu?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1275

#### Deprecated

#### Inherited from

`Omit.contextmenu`

***

### class?

> `optional` **class?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:686

#### Inherited from

`Omit.class`

***

### onabort?

> `optional` **onabort?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:405

#### Inherited from

`Omit.onabort`

***

### onanimationcancel?

> `optional` **onanimationcancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:406

#### Inherited from

`Omit.onanimationcancel`

***

### onanimationend?

> `optional` **onanimationend?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:407

#### Inherited from

`Omit.onanimationend`

***

### onanimationiteration?

> `optional` **onanimationiteration?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:408

#### Inherited from

`Omit.onanimationiteration`

***

### onanimationstart?

> `optional` **onanimationstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:409

#### Inherited from

`Omit.onanimationstart`

***

### onauxclick?

> `optional` **onauxclick?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:410

#### Inherited from

`Omit.onauxclick`

***

### onbeforeinput?

> `optional` **onbeforeinput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:413

#### Inherited from

`Omit.onbeforeinput`

***

### onbeforematch?

> `optional` **onbeforematch?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:414

#### Inherited from

`Omit.onbeforematch`

***

### onbeforetoggle?

> `optional` **onbeforetoggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:416

#### Inherited from

`Omit.onbeforetoggle`

***

### onblur?

> `optional` **onblur?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:418

#### Inherited from

`Omit.onblur`

***

### oncancel?

> `optional` **oncancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:419

#### Inherited from

`Omit.oncancel`

***

### oncanplay?

> `optional` **oncanplay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:420

#### Inherited from

`Omit.oncanplay`

***

### oncanplaythrough?

> `optional` **oncanplaythrough?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:421

#### Inherited from

`Omit.oncanplaythrough`

***

### onchange?

> `optional` **onchange?**: `ChangeEventHandlerUnion`\<`HTMLDivElement`, `Event`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:422

#### Inherited from

`Omit.onchange`

***

### onclick?

> `optional` **onclick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:423

#### Inherited from

`Omit.onclick`

***

### onclose?

> `optional` **onclose?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:424

#### Inherited from

`Omit.onclose`

***

### oncommand?

> `optional` **oncommand?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:426

#### Inherited from

`Omit.oncommand`

***

### oncontextlost?

> `optional` **oncontextlost?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:433

#### Inherited from

`Omit.oncontextlost`

***

### oncontextmenu?

> `optional` **oncontextmenu?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:434

#### Inherited from

`Omit.oncontextmenu`

***

### oncontextrestored?

> `optional` **oncontextrestored?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:435

#### Inherited from

`Omit.oncontextrestored`

***

### oncopy?

> `optional` **oncopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:436

#### Inherited from

`Omit.oncopy`

***

### oncuechange?

> `optional` **oncuechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:437

#### Inherited from

`Omit.oncuechange`

***

### oncut?

> `optional` **oncut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:438

#### Inherited from

`Omit.oncut`

***

### ondblclick?

> `optional` **ondblclick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:439

#### Inherited from

`Omit.ondblclick`

***

### ondrag?

> `optional` **ondrag?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:440

#### Inherited from

`Omit.ondrag`

***

### ondragend?

> `optional` **ondragend?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:441

#### Inherited from

`Omit.ondragend`

***

### ondragenter?

> `optional` **ondragenter?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:442

#### Inherited from

`Omit.ondragenter`

***

### ondragleave?

> `optional` **ondragleave?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:444

#### Inherited from

`Omit.ondragleave`

***

### ondragover?

> `optional` **ondragover?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:445

#### Inherited from

`Omit.ondragover`

***

### ondragstart?

> `optional` **ondragstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:446

#### Inherited from

`Omit.ondragstart`

***

### ondrop?

> `optional` **ondrop?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:447

#### Inherited from

`Omit.ondrop`

***

### ondurationchange?

> `optional` **ondurationchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:448

#### Inherited from

`Omit.ondurationchange`

***

### onemptied?

> `optional` **onemptied?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:449

#### Inherited from

`Omit.onemptied`

***

### onended?

> `optional` **onended?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:450

#### Inherited from

`Omit.onended`

***

### onerror?

> `optional` **onerror?**: `EventHandlerUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:451

#### Inherited from

`Omit.onerror`

***

### onfocus?

> `optional` **onfocus?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:452

#### Inherited from

`Omit.onfocus`

***

### onformdata?

> `optional` **onformdata?**: `EventHandlerUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:455

#### Inherited from

`Omit.onformdata`

***

### ongotpointercapture?

> `optional` **ongotpointercapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:458

#### Inherited from

`Omit.ongotpointercapture`

***

### oninput?

> `optional` **oninput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:459

#### Inherited from

`Omit.oninput`

***

### oninvalid?

> `optional` **oninvalid?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:460

#### Inherited from

`Omit.oninvalid`

***

### onkeydown?

> `optional` **onkeydown?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:461

#### Inherited from

`Omit.onkeydown`

***

### onkeypress?

> `optional` **onkeypress?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:462

#### Inherited from

`Omit.onkeypress`

***

### onkeyup?

> `optional` **onkeyup?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:463

#### Inherited from

`Omit.onkeyup`

***

### onload?

> `optional` **onload?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:464

#### Inherited from

`Omit.onload`

***

### onloadeddata?

> `optional` **onloadeddata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:465

#### Inherited from

`Omit.onloadeddata`

***

### onloadedmetadata?

> `optional` **onloadedmetadata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:466

#### Inherited from

`Omit.onloadedmetadata`

***

### onloadstart?

> `optional` **onloadstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:467

#### Inherited from

`Omit.onloadstart`

***

### onlostpointercapture?

> `optional` **onlostpointercapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:468

#### Inherited from

`Omit.onlostpointercapture`

***

### onmousedown?

> `optional` **onmousedown?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:469

#### Inherited from

`Omit.onmousedown`

***

### onmouseenter?

> `optional` **onmouseenter?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:470

#### Inherited from

`Omit.onmouseenter`

***

### onmouseleave?

> `optional` **onmouseleave?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:471

#### Inherited from

`Omit.onmouseleave`

***

### onmousemove?

> `optional` **onmousemove?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:472

#### Inherited from

`Omit.onmousemove`

***

### onmouseout?

> `optional` **onmouseout?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:473

#### Inherited from

`Omit.onmouseout`

***

### onmouseover?

> `optional` **onmouseover?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:474

#### Inherited from

`Omit.onmouseover`

***

### onmouseup?

> `optional` **onmouseup?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:475

#### Inherited from

`Omit.onmouseup`

***

### onpaste?

> `optional` **onpaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:476

#### Inherited from

`Omit.onpaste`

***

### onpause?

> `optional` **onpause?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:477

#### Inherited from

`Omit.onpause`

***

### onplay?

> `optional` **onplay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:478

#### Inherited from

`Omit.onplay`

***

### onplaying?

> `optional` **onplaying?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:479

#### Inherited from

`Omit.onplaying`

***

### onpointercancel?

> `optional` **onpointercancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:480

#### Inherited from

`Omit.onpointercancel`

***

### onpointerdown?

> `optional` **onpointerdown?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:481

#### Inherited from

`Omit.onpointerdown`

***

### onpointerenter?

> `optional` **onpointerenter?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:482

#### Inherited from

`Omit.onpointerenter`

***

### onpointerleave?

> `optional` **onpointerleave?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:483

#### Inherited from

`Omit.onpointerleave`

***

### onpointermove?

> `optional` **onpointermove?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:484

#### Inherited from

`Omit.onpointermove`

***

### onpointerout?

> `optional` **onpointerout?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:485

#### Inherited from

`Omit.onpointerout`

***

### onpointerover?

> `optional` **onpointerover?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:486

#### Inherited from

`Omit.onpointerover`

***

### onpointerrawupdate?

> `optional` **onpointerrawupdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:487

#### Inherited from

`Omit.onpointerrawupdate`

***

### onpointerup?

> `optional` **onpointerup?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:488

#### Inherited from

`Omit.onpointerup`

***

### onprogress?

> `optional` **onprogress?**: `EventHandlerUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:489

#### Inherited from

`Omit.onprogress`

***

### onratechange?

> `optional` **onratechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:490

#### Inherited from

`Omit.onratechange`

***

### onreset?

> `optional` **onreset?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:491

#### Inherited from

`Omit.onreset`

***

### onresize?

> `optional` **onresize?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:492

#### Inherited from

`Omit.onresize`

***

### onscroll?

> `optional` **onscroll?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:493

#### Inherited from

`Omit.onscroll`

***

### onscrollend?

> `optional` **onscrollend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:494

#### Inherited from

`Omit.onscrollend`

***

### onsecuritypolicyviolation?

> `optional` **onsecuritypolicyviolation?**: `EventHandlerUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:499

#### Inherited from

`Omit.onsecuritypolicyviolation`

***

### onseeked?

> `optional` **onseeked?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:500

#### Inherited from

`Omit.onseeked`

***

### onseeking?

> `optional` **onseeking?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:501

#### Inherited from

`Omit.onseeking`

***

### onselect?

> `optional` **onselect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:502

#### Inherited from

`Omit.onselect`

***

### onselectionchange?

> `optional` **onselectionchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:503

#### Inherited from

`Omit.onselectionchange`

***

### onselectstart?

> `optional` **onselectstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:504

#### Inherited from

`Omit.onselectstart`

***

### onslotchange?

> `optional` **onslotchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:505

#### Inherited from

`Omit.onslotchange`

***

### onstalled?

> `optional` **onstalled?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:506

#### Inherited from

`Omit.onstalled`

***

### onsubmit?

> `optional` **onsubmit?**: `EventHandlerUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:507

#### Inherited from

`Omit.onsubmit`

***

### onsuspend?

> `optional` **onsuspend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:508

#### Inherited from

`Omit.onsuspend`

***

### ontimeupdate?

> `optional` **ontimeupdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:509

#### Inherited from

`Omit.ontimeupdate`

***

### ontoggle?

> `optional` **ontoggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:510

#### Inherited from

`Omit.ontoggle`

***

### ontouchcancel?

> `optional` **ontouchcancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:511

#### Inherited from

`Omit.ontouchcancel`

***

### ontouchend?

> `optional` **ontouchend?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:512

#### Inherited from

`Omit.ontouchend`

***

### ontouchmove?

> `optional` **ontouchmove?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:513

#### Inherited from

`Omit.ontouchmove`

***

### ontouchstart?

> `optional` **ontouchstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:514

#### Inherited from

`Omit.ontouchstart`

***

### ontransitioncancel?

> `optional` **ontransitioncancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:515

#### Inherited from

`Omit.ontransitioncancel`

***

### ontransitionend?

> `optional` **ontransitionend?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:516

#### Inherited from

`Omit.ontransitionend`

***

### ontransitionrun?

> `optional` **ontransitionrun?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:517

#### Inherited from

`Omit.ontransitionrun`

***

### ontransitionstart?

> `optional` **ontransitionstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:518

#### Inherited from

`Omit.ontransitionstart`

***

### onvolumechange?

> `optional` **onvolumechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:519

#### Inherited from

`Omit.onvolumechange`

***

### onwaiting?

> `optional` **onwaiting?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:520

#### Inherited from

`Omit.onwaiting`

***

### onwheel?

> `optional` **onwheel?**: `EventHandlerUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:521

#### Inherited from

`Omit.onwheel`

***

### innerText?

> `optional` **innerText?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1206

#### Inherited from

`Omit.innerText`

***

### accesskey?

> `optional` **accesskey?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1208

#### Inherited from

`Omit.accesskey`

***

### autocapitalize?

> `optional` **autocapitalize?**: `HTMLAutocapitalize`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1209

#### Inherited from

`Omit.autocapitalize`

***

### autocorrect?

> `optional` **autocorrect?**: `"off"` \| `"on"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1210

#### Inherited from

`Omit.autocorrect`

***

### contenteditable?

> `optional` **contenteditable?**: `boolean` \| `"true"` \| `"false"` \| `"inherit"` \| `"plaintext-only"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1211

#### Inherited from

`Omit.contenteditable`

***

### enterkeyhint?

> `optional` **enterkeyhint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1214

#### Inherited from

`Omit.enterkeyhint`

***

### inputmode?

> `optional` **inputmode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1218

#### Inherited from

`Omit.inputmode`

***

### spellcheck?

> `optional` **spellcheck?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1232

#### Inherited from

`Omit.spellcheck`

***

### exportParts?

> `optional` **exportParts?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1239

#### Inherited from

`Omit.exportParts`

***

### itemid?

> `optional` **itemid?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1252

#### Inherited from

`Omit.itemid`

***

### itemprop?

> `optional` **itemprop?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1253

#### Inherited from

`Omit.itemprop`

***

### itemref?

> `optional` **itemref?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1254

#### Inherited from

`Omit.itemref`

***

### itemscope?

> `optional` **itemscope?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1255

#### Inherited from

`Omit.itemscope`

***

### itemtype?

> `optional` **itemtype?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1256

#### Inherited from

`Omit.itemtype`

***

### itemId?

> `optional` **itemId?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1258

#### Inherited from

`Omit.itemId`

***

### innerHTML?

> `optional` **innerHTML?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:681

#### Inherited from

`Omit.innerHTML`

***

### textContent?

> `optional` **textContent?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:682

#### Inherited from

`Omit.textContent`

***

### autofocus?

> `optional` **autofocus?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:685

#### Inherited from

`Omit.autofocus`

***

### elementtiming?

> `optional` **elementtiming?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:687

#### Inherited from

`Omit.elementtiming`

***

### tabindex?

> `optional` **tabindex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:692

#### Inherited from

`Omit.tabindex`

***

### classList?

> `optional` **classList?**: `ClassList`

Defined in: node\_modules/solid-js/types/jsx.d.ts:146

#### Inherited from

`Omit.classList`

***

### $ServerOnly?

> `optional` **$ServerOnly?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:147

#### Inherited from

`Omit.$ServerOnly`

***

### onAnimationCancel?

> `optional` **onAnimationCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:286

#### Inherited from

`Omit.onAnimationCancel`

***

### onBeforeCopy?

> `optional` **onBeforeCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:291

#### Inherited from

`Omit.onBeforeCopy`

***

### onBeforeCut?

> `optional` **onBeforeCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:292

#### Inherited from

`Omit.onBeforeCut`

***

### onBeforeMatch?

> `optional` **onBeforeMatch?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:294

#### Inherited from

`Omit.onBeforeMatch`

***

### onBeforePaste?

> `optional` **onBeforePaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:295

#### Inherited from

`Omit.onBeforePaste`

***

### onBeforeXRSelect?

> `optional` **onBeforeXRSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:297

#### Inherited from

`Omit.onBeforeXRSelect`

***

### onCancel?

> `optional` **onCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:299

#### Inherited from

`Omit.onCancel`

***

### onClose?

> `optional` **onClose?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:304

#### Inherited from

`Omit.onClose`

***

### onCommand?

> `optional` **onCommand?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:306

#### Inherited from

`Omit.onCommand`

***

### onContentVisibilityAutoStateChange?

> `optional` **onContentVisibilityAutoStateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:310

#### Inherited from

`Omit.onContentVisibilityAutoStateChange`

***

### onContextLost?

> `optional` **onContextLost?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:313

#### Inherited from

`Omit.onContextLost`

***

### onContextRestored?

> `optional` **onContextRestored?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:315

#### Inherited from

`Omit.onContextRestored`

***

### onCueChange?

> `optional` **onCueChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:317

#### Inherited from

`Omit.onCueChange`

***

### onDblClick?

> `optional` **onDblClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:319

#### Inherited from

`Omit.onDblClick`

***

### onFocusIn?

> `optional` **onFocusIn?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:333

#### Inherited from

`Omit.onFocusIn`

***

### onFocusOut?

> `optional` **onFocusOut?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:334

#### Inherited from

`Omit.onFocusOut`

***

### onFormData?

> `optional` **onFormData?**: `EventHandlerUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:335

#### Inherited from

`Omit.onFormData`

***

### onFullscreenChange?

> `optional` **onFullscreenChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:336

#### Inherited from

`Omit.onFullscreenChange`

***

### onFullscreenError?

> `optional` **onFullscreenError?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:337

#### Inherited from

`Omit.onFullscreenError`

***

### onPointerRawUpdate?

> `optional` **onPointerRawUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:367

#### Inherited from

`Omit.onPointerRawUpdate`

***

### onScrollSnapChange?

> `optional` **onScrollSnapChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:376

#### Inherited from

`Omit.onScrollSnapChange`

***

### onScrollSnapChanging?

> `optional` **onScrollSnapChanging?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:378

#### Inherited from

`Omit.onScrollSnapChanging`

***

### onSecurityPolicyViolation?

> `optional` **onSecurityPolicyViolation?**: `EventHandlerUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:379

#### Inherited from

`Omit.onSecurityPolicyViolation`

***

### onSelectionChange?

> `optional` **onSelectionChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:383

#### Inherited from

`Omit.onSelectionChange`

***

### onSelectStart?

> `optional` **onSelectStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:384

#### Inherited from

`Omit.onSelectStart`

***

### onSlotChange?

> `optional` **onSlotChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:385

#### Inherited from

`Omit.onSlotChange`

***

### onbeforecopy?

> `optional` **onbeforecopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:411

#### Inherited from

`Omit.onbeforecopy`

***

### onbeforecut?

> `optional` **onbeforecut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:412

#### Inherited from

`Omit.onbeforecut`

***

### onbeforepaste?

> `optional` **onbeforepaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:415

#### Inherited from

`Omit.onbeforepaste`

***

### onbeforexrselect?

> `optional` **onbeforexrselect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:417

#### Inherited from

`Omit.onbeforexrselect`

***

### oncompositionend?

> `optional` **oncompositionend?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:427

#### Inherited from

`Omit.oncompositionend`

***

### oncompositionstart?

> `optional` **oncompositionstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:428

#### Inherited from

`Omit.oncompositionstart`

***

### oncompositionupdate?

> `optional` **oncompositionupdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:429

#### Inherited from

`Omit.oncompositionupdate`

***

### oncontentvisibilityautostatechange?

> `optional` **oncontentvisibilityautostatechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:430

#### Inherited from

`Omit.oncontentvisibilityautostatechange`

***

### ondragexit?

> `optional` **ondragexit?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:443

#### Inherited from

`Omit.ondragexit`

***

### onfocusin?

> `optional` **onfocusin?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:453

#### Inherited from

`Omit.onfocusin`

***

### onfocusout?

> `optional` **onfocusout?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:454

#### Inherited from

`Omit.onfocusout`

***

### onfullscreenchange?

> `optional` **onfullscreenchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:456

#### Inherited from

`Omit.onfullscreenchange`

***

### onfullscreenerror?

> `optional` **onfullscreenerror?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:457

#### Inherited from

`Omit.onfullscreenerror`

***

### onscrollsnapchange?

> `optional` **onscrollsnapchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:496

#### Inherited from

`Omit.onscrollsnapchange`

***

### onscrollsnapchanging?

> `optional` **onscrollsnapchanging?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:498

#### Inherited from

`Omit.onscrollsnapchanging`

***

### on:abort?

> `optional` **on:abort?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:525

#### Inherited from

`Omit.on:abort`

***

### on:animationcancel?

> `optional` **on:animationcancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:526

#### Inherited from

`Omit.on:animationcancel`

***

### on:animationend?

> `optional` **on:animationend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:527

#### Inherited from

`Omit.on:animationend`

***

### on:animationiteration?

> `optional` **on:animationiteration?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:528

#### Inherited from

`Omit.on:animationiteration`

***

### on:animationstart?

> `optional` **on:animationstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:529

#### Inherited from

`Omit.on:animationstart`

***

### on:auxclick?

> `optional` **on:auxclick?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:530

#### Inherited from

`Omit.on:auxclick`

***

### on:beforecopy?

> `optional` **on:beforecopy?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:531

#### Inherited from

`Omit.on:beforecopy`

***

### on:beforecut?

> `optional` **on:beforecut?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:532

#### Inherited from

`Omit.on:beforecut`

***

### on:beforeinput?

> `optional` **on:beforeinput?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `InputEvent`, `InputEventHandler`\<`HTMLDivElement`, `InputEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:533

#### Inherited from

`Omit.on:beforeinput`

***

### on:beforematch?

> `optional` **on:beforematch?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:536

#### Inherited from

`Omit.on:beforematch`

***

### on:beforepaste?

> `optional` **on:beforepaste?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:537

#### Inherited from

`Omit.on:beforepaste`

***

### on:beforetoggle?

> `optional` **on:beforetoggle?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:538

#### Inherited from

`Omit.on:beforetoggle`

***

### on:beforexrselect?

> `optional` **on:beforexrselect?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:539

#### Inherited from

`Omit.on:beforexrselect`

***

### on:blur?

> `optional` **on:blur?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:540

#### Inherited from

`Omit.on:blur`

***

### on:cancel?

> `optional` **on:cancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:543

#### Inherited from

`Omit.on:cancel`

***

### on:canplay?

> `optional` **on:canplay?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:544

#### Inherited from

`Omit.on:canplay`

***

### on:canplaythrough?

> `optional` **on:canplaythrough?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:545

#### Inherited from

`Omit.on:canplaythrough`

***

### on:change?

> `optional` **on:change?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `ChangeEventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:546

#### Inherited from

`Omit.on:change`

***

### on:click?

> `optional` **on:click?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:547

#### Inherited from

`Omit.on:click`

***

### on:close?

> `optional` **on:close?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:548

#### Inherited from

`Omit.on:close`

***

### on:command?

> `optional` **on:command?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:550

#### Inherited from

`Omit.on:command`

***

### on:compositionend?

> `optional` **on:compositionend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:551

#### Inherited from

`Omit.on:compositionend`

***

### on:compositionstart?

> `optional` **on:compositionstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:552

#### Inherited from

`Omit.on:compositionstart`

***

### on:compositionupdate?

> `optional` **on:compositionupdate?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:553

#### Inherited from

`Omit.on:compositionupdate`

***

### on:contentvisibilityautostatechange?

> `optional` **on:contentvisibilityautostatechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:554

#### Inherited from

`Omit.on:contentvisibilityautostatechange`

***

### on:contextlost?

> `optional` **on:contextlost?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:557

#### Inherited from

`Omit.on:contextlost`

***

### on:contextmenu?

> `optional` **on:contextmenu?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:558

#### Inherited from

`Omit.on:contextmenu`

***

### on:contextrestored?

> `optional` **on:contextrestored?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:559

#### Inherited from

`Omit.on:contextrestored`

***

### on:copy?

> `optional` **on:copy?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:560

#### Inherited from

`Omit.on:copy`

***

### on:cuechange?

> `optional` **on:cuechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:561

#### Inherited from

`Omit.on:cuechange`

***

### on:cut?

> `optional` **on:cut?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:562

#### Inherited from

`Omit.on:cut`

***

### on:dblclick?

> `optional` **on:dblclick?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:563

#### Inherited from

`Omit.on:dblclick`

***

### on:drag?

> `optional` **on:drag?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:564

#### Inherited from

`Omit.on:drag`

***

### on:dragend?

> `optional` **on:dragend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:565

#### Inherited from

`Omit.on:dragend`

***

### on:dragenter?

> `optional` **on:dragenter?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:566

#### Inherited from

`Omit.on:dragenter`

***

### on:dragexit?

> `optional` **on:dragexit?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:567

#### Inherited from

`Omit.on:dragexit`

***

### on:dragleave?

> `optional` **on:dragleave?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:568

#### Inherited from

`Omit.on:dragleave`

***

### on:dragover?

> `optional` **on:dragover?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:569

#### Inherited from

`Omit.on:dragover`

***

### on:dragstart?

> `optional` **on:dragstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:570

#### Inherited from

`Omit.on:dragstart`

***

### on:drop?

> `optional` **on:drop?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:571

#### Inherited from

`Omit.on:drop`

***

### on:durationchange?

> `optional` **on:durationchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:572

#### Inherited from

`Omit.on:durationchange`

***

### on:emptied?

> `optional` **on:emptied?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:573

#### Inherited from

`Omit.on:emptied`

***

### on:ended?

> `optional` **on:ended?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:574

#### Inherited from

`Omit.on:ended`

***

### on:error?

> `optional` **on:error?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:575

#### Inherited from

`Omit.on:error`

***

### on:focus?

> `optional` **on:focus?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:576

#### Inherited from

`Omit.on:focus`

***

### on:focusin?

> `optional` **on:focusin?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:579

#### Inherited from

`Omit.on:focusin`

***

### on:focusout?

> `optional` **on:focusout?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:582

#### Inherited from

`Omit.on:focusout`

***

### on:formdata?

> `optional` **on:formdata?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:585

#### Inherited from

`Omit.on:formdata`

***

### on:fullscreenchange?

> `optional` **on:fullscreenchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:586

#### Inherited from

`Omit.on:fullscreenchange`

***

### on:fullscreenerror?

> `optional` **on:fullscreenerror?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:587

#### Inherited from

`Omit.on:fullscreenerror`

***

### on:gotpointercapture?

> `optional` **on:gotpointercapture?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:588

#### Inherited from

`Omit.on:gotpointercapture`

***

### on:input?

> `optional` **on:input?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `InputEvent`, `InputEventHandler`\<`HTMLDivElement`, `InputEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:589

#### Inherited from

`Omit.on:input`

***

### on:invalid?

> `optional` **on:invalid?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:592

#### Inherited from

`Omit.on:invalid`

***

### on:keydown?

> `optional` **on:keydown?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:593

#### Inherited from

`Omit.on:keydown`

***

### on:keypress?

> `optional` **on:keypress?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:594

#### Inherited from

`Omit.on:keypress`

***

### on:keyup?

> `optional` **on:keyup?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:595

#### Inherited from

`Omit.on:keyup`

***

### on:load?

> `optional` **on:load?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:596

#### Inherited from

`Omit.on:load`

***

### on:loadeddata?

> `optional` **on:loadeddata?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:597

#### Inherited from

`Omit.on:loadeddata`

***

### on:loadedmetadata?

> `optional` **on:loadedmetadata?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:598

#### Inherited from

`Omit.on:loadedmetadata`

***

### on:loadstart?

> `optional` **on:loadstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:599

#### Inherited from

`Omit.on:loadstart`

***

### on:lostpointercapture?

> `optional` **on:lostpointercapture?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:600

#### Inherited from

`Omit.on:lostpointercapture`

***

### on:mousedown?

> `optional` **on:mousedown?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:601

#### Inherited from

`Omit.on:mousedown`

***

### on:mouseenter?

> `optional` **on:mouseenter?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:602

#### Inherited from

`Omit.on:mouseenter`

***

### on:mouseleave?

> `optional` **on:mouseleave?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:603

#### Inherited from

`Omit.on:mouseleave`

***

### on:mousemove?

> `optional` **on:mousemove?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:604

#### Inherited from

`Omit.on:mousemove`

***

### on:mouseout?

> `optional` **on:mouseout?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:605

#### Inherited from

`Omit.on:mouseout`

***

### on:mouseover?

> `optional` **on:mouseover?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:606

#### Inherited from

`Omit.on:mouseover`

***

### on:mouseup?

> `optional` **on:mouseup?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:607

#### Inherited from

`Omit.on:mouseup`

***

### on:paste?

> `optional` **on:paste?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:608

#### Inherited from

`Omit.on:paste`

***

### on:pause?

> `optional` **on:pause?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:609

#### Inherited from

`Omit.on:pause`

***

### on:play?

> `optional` **on:play?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:610

#### Inherited from

`Omit.on:play`

***

### on:playing?

> `optional` **on:playing?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:611

#### Inherited from

`Omit.on:playing`

***

### on:pointercancel?

> `optional` **on:pointercancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:612

#### Inherited from

`Omit.on:pointercancel`

***

### on:pointerdown?

> `optional` **on:pointerdown?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:613

#### Inherited from

`Omit.on:pointerdown`

***

### on:pointerenter?

> `optional` **on:pointerenter?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:614

#### Inherited from

`Omit.on:pointerenter`

***

### on:pointerleave?

> `optional` **on:pointerleave?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:615

#### Inherited from

`Omit.on:pointerleave`

***

### on:pointermove?

> `optional` **on:pointermove?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:616

#### Inherited from

`Omit.on:pointermove`

***

### on:pointerout?

> `optional` **on:pointerout?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:617

#### Inherited from

`Omit.on:pointerout`

***

### on:pointerover?

> `optional` **on:pointerover?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:618

#### Inherited from

`Omit.on:pointerover`

***

### on:pointerrawupdate?

> `optional` **on:pointerrawupdate?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:619

#### Inherited from

`Omit.on:pointerrawupdate`

***

### on:pointerup?

> `optional` **on:pointerup?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:620

#### Inherited from

`Omit.on:pointerup`

***

### on:progress?

> `optional` **on:progress?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:621

#### Inherited from

`Omit.on:progress`

***

### on:ratechange?

> `optional` **on:ratechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:622

#### Inherited from

`Omit.on:ratechange`

***

### on:reset?

> `optional` **on:reset?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:623

#### Inherited from

`Omit.on:reset`

***

### on:resize?

> `optional` **on:resize?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:624

#### Inherited from

`Omit.on:resize`

***

### on:scroll?

> `optional` **on:scroll?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:625

#### Inherited from

`Omit.on:scroll`

***

### on:scrollend?

> `optional` **on:scrollend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:626

#### Inherited from

`Omit.on:scrollend`

***

### on:scrollsnapchange?

> `optional` **on:scrollsnapchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:628

#### Inherited from

`Omit.on:scrollsnapchange`

***

### on:scrollsnapchanging?

> `optional` **on:scrollsnapchanging?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:630

#### Inherited from

`Omit.on:scrollsnapchanging`

***

### on:securitypolicyviolation?

> `optional` **on:securitypolicyviolation?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:631

#### Inherited from

`Omit.on:securitypolicyviolation`

***

### on:seeked?

> `optional` **on:seeked?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:634

#### Inherited from

`Omit.on:seeked`

***

### on:seeking?

> `optional` **on:seeking?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:635

#### Inherited from

`Omit.on:seeking`

***

### on:select?

> `optional` **on:select?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:636

#### Inherited from

`Omit.on:select`

***

### on:selectionchange?

> `optional` **on:selectionchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:637

#### Inherited from

`Omit.on:selectionchange`

***

### on:selectstart?

> `optional` **on:selectstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:638

#### Inherited from

`Omit.on:selectstart`

***

### on:slotchange?

> `optional` **on:slotchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:639

#### Inherited from

`Omit.on:slotchange`

***

### on:stalled?

> `optional` **on:stalled?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:640

#### Inherited from

`Omit.on:stalled`

***

### on:submit?

> `optional` **on:submit?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:641

#### Inherited from

`Omit.on:submit`

***

### on:suspend?

> `optional` **on:suspend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:642

#### Inherited from

`Omit.on:suspend`

***

### on:timeupdate?

> `optional` **on:timeupdate?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:643

#### Inherited from

`Omit.on:timeupdate`

***

### on:toggle?

> `optional` **on:toggle?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:644

#### Inherited from

`Omit.on:toggle`

***

### on:touchcancel?

> `optional` **on:touchcancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:645

#### Inherited from

`Omit.on:touchcancel`

***

### on:touchend?

> `optional` **on:touchend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:646

#### Inherited from

`Omit.on:touchend`

***

### on:touchmove?

> `optional` **on:touchmove?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:647

#### Inherited from

`Omit.on:touchmove`

***

### on:touchstart?

> `optional` **on:touchstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:648

#### Inherited from

`Omit.on:touchstart`

***

### on:transitioncancel?

> `optional` **on:transitioncancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:649

#### Inherited from

`Omit.on:transitioncancel`

***

### on:transitionend?

> `optional` **on:transitionend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:650

#### Inherited from

`Omit.on:transitionend`

***

### on:transitionrun?

> `optional` **on:transitionrun?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:651

#### Inherited from

`Omit.on:transitionrun`

***

### on:transitionstart?

> `optional` **on:transitionstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:652

#### Inherited from

`Omit.on:transitionstart`

***

### on:volumechange?

> `optional` **on:volumechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:653

#### Inherited from

`Omit.on:volumechange`

***

### on:waiting?

> `optional` **on:waiting?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:654

#### Inherited from

`Omit.on:waiting`

***

### on:wheel?

> `optional` **on:wheel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:655

#### Inherited from

`Omit.on:wheel`
