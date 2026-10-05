[**API**](../../API.md)

***

# Interface: VGridProps\<R, C\>

Defined in: [src/react/VGrid.tsx:126](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L126)

Props of [VGrid](../variables/VGrid.md).

## Extends

- `Omit`\<[`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md), `"role"`\>

## Type Parameters

### R

`R` = `number`

### C

`C` = `number`

## Properties

### children

> **children**: (`row`, `col`, `cell`) => `ReactNode`

Defined in: [src/react/VGrid.tsx:136](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L136)

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

`ReactNode`

***

### rows

> **rows**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`R`\>

Defined in: [src/react/VGrid.tsx:140](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L140)

The rows of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### cols

> **cols**: [`GridAxis`](../../core/type-aliases/GridAxis.md)\<`C`\>

Defined in: [src/react/VGrid.tsx:144](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L144)

The columns of the grid. See [GridAxis](../../core/type-aliases/GridAxis.md) for the accepted values.

***

### rowHeight

> **rowHeight**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`R`\>

Defined in: [src/react/VGrid.tsx:148](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L148)

The heights of the rows. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### colWidth

> **colWidth**: [`GridSize`](../../core/type-aliases/GridSize.md)\<`C`\>

Defined in: [src/react/VGrid.tsx:152](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L152)

The widths of the columns. See [GridSize](../../core/type-aliases/GridSize.md) for the accepted values.

***

### headerRows?

> `optional` **headerRows?**: `number`

Defined in: [src/react/VGrid.tsx:159](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L159)

The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### sectionRows?

> `optional` **sectionRows?**: readonly `number`[]

Defined in: [src/react/VGrid.tsx:165](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L165)

Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**

***

### footerRows?

> `optional` **footerRows?**: `number`

Defined in: [src/react/VGrid.tsx:172](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L172)

The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### headerCols?

> `optional` **headerCols?**: `number`

Defined in: [src/react/VGrid.tsx:179](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L179)

The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### footerCols?

> `optional` **footerCols?**: `number`

Defined in: [src/react/VGrid.tsx:186](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L186)

The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**

#### Default Value

```ts
0
```

***

### spans?

> `optional` **spans?**: readonly [`GridSpan`](../../core/interfaces/GridSpan.md)[]

Defined in: [src/react/VGrid.tsx:192](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L192)

Cells merged over multiple rows and/or columns. See [GridSpan](../../core/interfaces/GridSpan.md) for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.

***

### keepMounted?

> `optional` **keepMounted?**: readonly [`GridCell`](../../core/interfaces/GridCell.md)[]

Defined in: [src/react/VGrid.tsx:196](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L196)

List of cells that should be always mounted, even when off screen.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/react/VGrid.tsx:201](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L201)

Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.

#### Default Value

```ts
200
```

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/react/VGrid.tsx:206](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L206)

The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.

#### Default Value

```ts
0
```

***

### ariaSort?

> `optional` **ariaSort?**: [`GridCell`](../../core/interfaces/GridCell.md) & `object`

Defined in: [src/react/VGrid.tsx:210](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L210)

The header cell of the sorted column or row, and the sort order (`aria-sort`).

#### Type Declaration

##### order

> **order**: `"ascending"` \| `"descending"` \| `"other"`

***

### onVerticalScroll?

> `optional` **onVerticalScroll?**: (`offset`) => `void`

Defined in: [src/react/VGrid.tsx:215](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L215)

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

Defined in: [src/react/VGrid.tsx:220](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L220)

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

Defined in: [src/react/VGrid.tsx:224](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L224)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/react/VGrid.tsx:228](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/react/VGrid.tsx#L228)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

***

### slot?

> `optional` **slot?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2900

#### Inherited from

`Omit.slot`

***

### style?

> `optional` **style?**: `CSSProperties`

Defined in: node\_modules/@types/react/index.d.ts:2902

#### Inherited from

`Omit.style`

***

### title?

> `optional` **title?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2904

#### Inherited from

`Omit.title`

***

### dir?

> `optional` **dir?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2893

#### Inherited from

`Omit.dir`

***

### property?

> `optional` **property?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2919

#### Inherited from

`Omit.property`

***

### is?

> `optional` **is?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2958

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`Omit.is`

***

### defaultChecked?

> `optional` **defaultChecked?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2881

#### Inherited from

`Omit.defaultChecked`

***

### defaultValue?

> `optional` **defaultValue?**: `string` \| `number` \| readonly `string`[]

Defined in: node\_modules/@types/react/index.d.ts:2882

#### Inherited from

`Omit.defaultValue`

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2883

#### Inherited from

`Omit.suppressContentEditableWarning`

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2884

#### Inherited from

`Omit.suppressHydrationWarning`

***

### accessKey?

> `optional` **accessKey?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2887

#### Inherited from

`Omit.accessKey`

***

### autoCapitalize?

> `optional` **autoCapitalize?**: `string` & `object` \| `"none"` \| `"off"` \| `"on"` \| `"sentences"` \| `"words"` \| `"characters"`

Defined in: node\_modules/@types/react/index.d.ts:2888

#### Inherited from

`Omit.autoCapitalize`

***

### autoFocus?

> `optional` **autoFocus?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2889

#### Inherited from

`Omit.autoFocus`

***

### className?

> `optional` **className?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2890

#### Inherited from

`Omit.className`

***

### contentEditable?

> `optional` **contentEditable?**: `"inherit"` \| `Booleanish` \| `"plaintext-only"`

Defined in: node\_modules/@types/react/index.d.ts:2891

#### Inherited from

`Omit.contentEditable`

***

### contextMenu?

> `optional` **contextMenu?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2892

#### Inherited from

`Omit.contextMenu`

***

### draggable?

> `optional` **draggable?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2894

#### Inherited from

`Omit.draggable`

***

### enterKeyHint?

> `optional` **enterKeyHint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"`

Defined in: node\_modules/@types/react/index.d.ts:2895

#### Inherited from

`Omit.enterKeyHint`

***

### hidden?

> `optional` **hidden?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2896

#### Inherited from

`Omit.hidden`

***

### id?

> `optional` **id?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2897

#### Inherited from

`Omit.id`

***

### lang?

> `optional` **lang?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2898

#### Inherited from

`Omit.lang`

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2899

#### Inherited from

`Omit.nonce`

***

### spellCheck?

> `optional` **spellCheck?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2901

#### Inherited from

`Omit.spellCheck`

***

### tabIndex?

> `optional` **tabIndex?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2903

#### Inherited from

`Omit.tabIndex`

***

### translate?

> `optional` **translate?**: `"yes"` \| `"no"`

Defined in: node\_modules/@types/react/index.d.ts:2905

#### Inherited from

`Omit.translate`

***

### radioGroup?

> `optional` **radioGroup?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2908

#### Inherited from

`Omit.radioGroup`

***

### about?

> `optional` **about?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2914

#### Inherited from

`Omit.about`

***

### content?

> `optional` **content?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2915

#### Inherited from

`Omit.content`

***

### datatype?

> `optional` **datatype?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2916

#### Inherited from

`Omit.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/@types/react/index.d.ts:2917

#### Inherited from

`Omit.inlist`

***

### prefix?

> `optional` **prefix?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2918

#### Inherited from

`Omit.prefix`

***

### rel?

> `optional` **rel?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2920

#### Inherited from

`Omit.rel`

***

### resource?

> `optional` **resource?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2921

#### Inherited from

`Omit.resource`

***

### rev?

> `optional` **rev?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2922

#### Inherited from

`Omit.rev`

***

### typeof?

> `optional` **typeof?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2923

#### Inherited from

`Omit.typeof`

***

### vocab?

> `optional` **vocab?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2924

#### Inherited from

`Omit.vocab`

***

### autoCorrect?

> `optional` **autoCorrect?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2927

#### Inherited from

`Omit.autoCorrect`

***

### autoSave?

> `optional` **autoSave?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2928

#### Inherited from

`Omit.autoSave`

***

### color?

> `optional` **color?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2929

#### Inherited from

`Omit.color`

***

### itemProp?

> `optional` **itemProp?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2930

#### Inherited from

`Omit.itemProp`

***

### itemScope?

> `optional` **itemScope?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2931

#### Inherited from

`Omit.itemScope`

***

### itemType?

> `optional` **itemType?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2932

#### Inherited from

`Omit.itemType`

***

### itemID?

> `optional` **itemID?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2933

#### Inherited from

`Omit.itemID`

***

### itemRef?

> `optional` **itemRef?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2934

#### Inherited from

`Omit.itemRef`

***

### results?

> `optional` **results?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2935

#### Inherited from

`Omit.results`

***

### security?

> `optional` **security?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2936

#### Inherited from

`Omit.security`

***

### unselectable?

> `optional` **unselectable?**: `"off"` \| `"on"`

Defined in: node\_modules/@types/react/index.d.ts:2937

#### Inherited from

`Omit.unselectable`

***

### popover?

> `optional` **popover?**: `""` \| `"auto"` \| `"manual"` \| `"hint"`

Defined in: node\_modules/@types/react/index.d.ts:2940

#### Inherited from

`Omit.popover`

***

### popoverTargetAction?

> `optional` **popoverTargetAction?**: `"toggle"` \| `"hide"` \| `"show"`

Defined in: node\_modules/@types/react/index.d.ts:2941

#### Inherited from

`Omit.popoverTargetAction`

***

### popoverTarget?

> `optional` **popoverTarget?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2942

#### Inherited from

`Omit.popoverTarget`

***

### inert?

> `optional` **inert?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2948

#### See

[https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert)

#### Inherited from

`Omit.inert`

***

### inputMode?

> `optional` **inputMode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/@types/react/index.d.ts:2953

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`Omit.inputMode`

***

### exportparts?

> `optional` **exportparts?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2962

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/exportparts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts)

#### Inherited from

`Omit.exportparts`

***

### part?

> `optional` **part?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2966

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/part](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part)

#### Inherited from

`Omit.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2585

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`Omit.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2587

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`Omit.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"`

Defined in: node\_modules/@types/react/index.d.ts:2592

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`Omit.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2598

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`Omit.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2603

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`Omit.aria-brailleroledescription`

***

### aria-busy?

> `optional` **aria-busy?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2604

#### Inherited from

`Omit.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/@types/react/index.d.ts:2609

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`Omit.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2614

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`Omit.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2619

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`Omit.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2624

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`Omit.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2629

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`Omit.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2634

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`Omit.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Defined in: node\_modules/@types/react/index.d.ts:2636

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`Omit.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2641

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`Omit.aria-describedby`

***

### aria-description?

> `optional` **aria-description?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2646

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`Omit.aria-description`

***

### aria-details?

> `optional` **aria-details?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2651

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2656

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`Omit.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/@types/react/index.d.ts:2661

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2666

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`Omit.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2668

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`Omit.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2673

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`Omit.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2678

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Defined in: node\_modules/@types/react/index.d.ts:2680

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`Omit.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2685

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/@types/react/index.d.ts:2690

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`Omit.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2692

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`Omit.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2697

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`Omit.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2702

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2704

Defines the hierarchical level of an element within a structure.

#### Inherited from

`Omit.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/@types/react/index.d.ts:2706

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`Omit.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2708

Indicates whether an element is modal when displayed.

#### Inherited from

`Omit.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2710

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`Omit.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2712

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`Omit.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/@types/react/index.d.ts:2714

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`Omit.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2720

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`Omit.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2725

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`Omit.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2730

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`Omit.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/@types/react/index.d.ts:2735

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`Omit.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2740

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/@types/react/index.d.ts:2745

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`Omit.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2758

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`Omit.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2760

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`Omit.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2765

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`Omit.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2770

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`Omit.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2775

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`Omit.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2780

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`Omit.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2785

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`Omit.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2790

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`Omit.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"`

Defined in: node\_modules/@types/react/index.d.ts:2792

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`Omit.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2794

Defines the maximum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2796

Defines the minimum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2801

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`Omit.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2803

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`Omit.aria-valuetext`

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML?**: `object`

Defined in: node\_modules/@types/react/index.d.ts:2362

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`Omit.dangerouslySetInnerHTML`

***

### onCopy?

> `optional` **onCopy?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2369

#### Inherited from

`Omit.onCopy`

***

### onCopyCapture?

> `optional` **onCopyCapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2370

#### Inherited from

`Omit.onCopyCapture`

***

### onCut?

> `optional` **onCut?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2371

#### Inherited from

`Omit.onCut`

***

### onCutCapture?

> `optional` **onCutCapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2372

#### Inherited from

`Omit.onCutCapture`

***

### onPaste?

> `optional` **onPaste?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2373

#### Inherited from

`Omit.onPaste`

***

### onPasteCapture?

> `optional` **onPasteCapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2374

#### Inherited from

`Omit.onPasteCapture`

***

### onCompositionEnd?

> `optional` **onCompositionEnd?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2377

#### Inherited from

`Omit.onCompositionEnd`

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2378

#### Inherited from

`Omit.onCompositionEndCapture`

***

### onCompositionStart?

> `optional` **onCompositionStart?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2379

#### Inherited from

`Omit.onCompositionStart`

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2380

#### Inherited from

`Omit.onCompositionStartCapture`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2381

#### Inherited from

`Omit.onCompositionUpdate`

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2382

#### Inherited from

`Omit.onCompositionUpdateCapture`

***

### onFocus?

> `optional` **onFocus?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2385

#### Inherited from

`Omit.onFocus`

***

### onFocusCapture?

> `optional` **onFocusCapture?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2386

#### Inherited from

`Omit.onFocusCapture`

***

### onBlur?

> `optional` **onBlur?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2387

#### Inherited from

`Omit.onBlur`

***

### onBlurCapture?

> `optional` **onBlurCapture?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2388

#### Inherited from

`Omit.onBlurCapture`

***

### onChange?

> `optional` **onChange?**: `ChangeEventHandler`\<`HTMLDivElement`, `Element`\>

Defined in: node\_modules/@types/react/index.d.ts:2391

#### Inherited from

`Omit.onChange`

***

### onChangeCapture?

> `optional` **onChangeCapture?**: `ChangeEventHandler`\<`HTMLDivElement`, `Element`\>

Defined in: node\_modules/@types/react/index.d.ts:2392

#### Inherited from

`Omit.onChangeCapture`

***

### onBeforeInput?

> `optional` **onBeforeInput?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2393

#### Inherited from

`Omit.onBeforeInput`

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2394

#### Inherited from

`Omit.onBeforeInputCapture`

***

### onInput?

> `optional` **onInput?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2395

#### Inherited from

`Omit.onInput`

***

### onInputCapture?

> `optional` **onInputCapture?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2396

#### Inherited from

`Omit.onInputCapture`

***

### onReset?

> `optional` **onReset?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2397

#### Inherited from

`Omit.onReset`

***

### onResetCapture?

> `optional` **onResetCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2398

#### Inherited from

`Omit.onResetCapture`

***

### onSubmit?

> `optional` **onSubmit?**: `SubmitEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2399

#### Inherited from

`Omit.onSubmit`

***

### onSubmitCapture?

> `optional` **onSubmitCapture?**: `SubmitEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2400

#### Inherited from

`Omit.onSubmitCapture`

***

### onInvalid?

> `optional` **onInvalid?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2401

#### Inherited from

`Omit.onInvalid`

***

### onInvalidCapture?

> `optional` **onInvalidCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2402

#### Inherited from

`Omit.onInvalidCapture`

***

### onLoad?

> `optional` **onLoad?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2405

#### Inherited from

`Omit.onLoad`

***

### onLoadCapture?

> `optional` **onLoadCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2406

#### Inherited from

`Omit.onLoadCapture`

***

### onError?

> `optional` **onError?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2407

#### Inherited from

`Omit.onError`

***

### onErrorCapture?

> `optional` **onErrorCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2408

#### Inherited from

`Omit.onErrorCapture`

***

### onKeyDown?

> `optional` **onKeyDown?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2411

#### Inherited from

`Omit.onKeyDown`

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2412

#### Inherited from

`Omit.onKeyDownCapture`

***

### ~~onKeyPress?~~

> `optional` **onKeyPress?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2414

#### Deprecated

Use `onKeyUp` or `onKeyDown` instead

#### Inherited from

`Omit.onKeyPress`

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2416

#### Deprecated

Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### Inherited from

`Omit.onKeyPressCapture`

***

### onKeyUp?

> `optional` **onKeyUp?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2417

#### Inherited from

`Omit.onKeyUp`

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2418

#### Inherited from

`Omit.onKeyUpCapture`

***

### onAbort?

> `optional` **onAbort?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2421

#### Inherited from

`Omit.onAbort`

***

### onAbortCapture?

> `optional` **onAbortCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2422

#### Inherited from

`Omit.onAbortCapture`

***

### onCanPlay?

> `optional` **onCanPlay?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2423

#### Inherited from

`Omit.onCanPlay`

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2424

#### Inherited from

`Omit.onCanPlayCapture`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2425

#### Inherited from

`Omit.onCanPlayThrough`

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2426

#### Inherited from

`Omit.onCanPlayThroughCapture`

***

### onDurationChange?

> `optional` **onDurationChange?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2427

#### Inherited from

`Omit.onDurationChange`

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2428

#### Inherited from

`Omit.onDurationChangeCapture`

***

### onEmptied?

> `optional` **onEmptied?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2429

#### Inherited from

`Omit.onEmptied`

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2430

#### Inherited from

`Omit.onEmptiedCapture`

***

### onEncrypted?

> `optional` **onEncrypted?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2431

#### Inherited from

`Omit.onEncrypted`

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2432

#### Inherited from

`Omit.onEncryptedCapture`

***

### onEnded?

> `optional` **onEnded?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2433

#### Inherited from

`Omit.onEnded`

***

### onEndedCapture?

> `optional` **onEndedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2434

#### Inherited from

`Omit.onEndedCapture`

***

### onLoadedData?

> `optional` **onLoadedData?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2435

#### Inherited from

`Omit.onLoadedData`

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2436

#### Inherited from

`Omit.onLoadedDataCapture`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2437

#### Inherited from

`Omit.onLoadedMetadata`

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2438

#### Inherited from

`Omit.onLoadedMetadataCapture`

***

### onLoadStart?

> `optional` **onLoadStart?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2439

#### Inherited from

`Omit.onLoadStart`

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2440

#### Inherited from

`Omit.onLoadStartCapture`

***

### onPause?

> `optional` **onPause?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2441

#### Inherited from

`Omit.onPause`

***

### onPauseCapture?

> `optional` **onPauseCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2442

#### Inherited from

`Omit.onPauseCapture`

***

### onPlay?

> `optional` **onPlay?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2443

#### Inherited from

`Omit.onPlay`

***

### onPlayCapture?

> `optional` **onPlayCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2444

#### Inherited from

`Omit.onPlayCapture`

***

### onPlaying?

> `optional` **onPlaying?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2445

#### Inherited from

`Omit.onPlaying`

***

### onPlayingCapture?

> `optional` **onPlayingCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2446

#### Inherited from

`Omit.onPlayingCapture`

***

### onProgress?

> `optional` **onProgress?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2447

#### Inherited from

`Omit.onProgress`

***

### onProgressCapture?

> `optional` **onProgressCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2448

#### Inherited from

`Omit.onProgressCapture`

***

### onRateChange?

> `optional` **onRateChange?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2449

#### Inherited from

`Omit.onRateChange`

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2450

#### Inherited from

`Omit.onRateChangeCapture`

***

### onSeeked?

> `optional` **onSeeked?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2451

#### Inherited from

`Omit.onSeeked`

***

### onSeekedCapture?

> `optional` **onSeekedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2452

#### Inherited from

`Omit.onSeekedCapture`

***

### onSeeking?

> `optional` **onSeeking?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2453

#### Inherited from

`Omit.onSeeking`

***

### onSeekingCapture?

> `optional` **onSeekingCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2454

#### Inherited from

`Omit.onSeekingCapture`

***

### onStalled?

> `optional` **onStalled?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2455

#### Inherited from

`Omit.onStalled`

***

### onStalledCapture?

> `optional` **onStalledCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2456

#### Inherited from

`Omit.onStalledCapture`

***

### onSuspend?

> `optional` **onSuspend?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2457

#### Inherited from

`Omit.onSuspend`

***

### onSuspendCapture?

> `optional` **onSuspendCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2458

#### Inherited from

`Omit.onSuspendCapture`

***

### onTimeUpdate?

> `optional` **onTimeUpdate?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2459

#### Inherited from

`Omit.onTimeUpdate`

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2460

#### Inherited from

`Omit.onTimeUpdateCapture`

***

### onVolumeChange?

> `optional` **onVolumeChange?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2461

#### Inherited from

`Omit.onVolumeChange`

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2462

#### Inherited from

`Omit.onVolumeChangeCapture`

***

### onWaiting?

> `optional` **onWaiting?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2463

#### Inherited from

`Omit.onWaiting`

***

### onWaitingCapture?

> `optional` **onWaitingCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2464

#### Inherited from

`Omit.onWaitingCapture`

***

### onAuxClick?

> `optional` **onAuxClick?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2467

#### Inherited from

`Omit.onAuxClick`

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2468

#### Inherited from

`Omit.onAuxClickCapture`

***

### onClick?

> `optional` **onClick?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2469

#### Inherited from

`Omit.onClick`

***

### onClickCapture?

> `optional` **onClickCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2470

#### Inherited from

`Omit.onClickCapture`

***

### onContextMenu?

> `optional` **onContextMenu?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2471

#### Inherited from

`Omit.onContextMenu`

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2472

#### Inherited from

`Omit.onContextMenuCapture`

***

### onDoubleClick?

> `optional` **onDoubleClick?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2473

#### Inherited from

`Omit.onDoubleClick`

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2474

#### Inherited from

`Omit.onDoubleClickCapture`

***

### onDrag?

> `optional` **onDrag?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2475

#### Inherited from

`Omit.onDrag`

***

### onDragCapture?

> `optional` **onDragCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2476

#### Inherited from

`Omit.onDragCapture`

***

### onDragEnd?

> `optional` **onDragEnd?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2477

#### Inherited from

`Omit.onDragEnd`

***

### onDragEndCapture?

> `optional` **onDragEndCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2478

#### Inherited from

`Omit.onDragEndCapture`

***

### onDragEnter?

> `optional` **onDragEnter?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2479

#### Inherited from

`Omit.onDragEnter`

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2480

#### Inherited from

`Omit.onDragEnterCapture`

***

### onDragExit?

> `optional` **onDragExit?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2481

#### Inherited from

`Omit.onDragExit`

***

### onDragExitCapture?

> `optional` **onDragExitCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2482

#### Inherited from

`Omit.onDragExitCapture`

***

### onDragLeave?

> `optional` **onDragLeave?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2483

#### Inherited from

`Omit.onDragLeave`

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2484

#### Inherited from

`Omit.onDragLeaveCapture`

***

### onDragOver?

> `optional` **onDragOver?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2485

#### Inherited from

`Omit.onDragOver`

***

### onDragOverCapture?

> `optional` **onDragOverCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2486

#### Inherited from

`Omit.onDragOverCapture`

***

### onDragStart?

> `optional` **onDragStart?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2487

#### Inherited from

`Omit.onDragStart`

***

### onDragStartCapture?

> `optional` **onDragStartCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2488

#### Inherited from

`Omit.onDragStartCapture`

***

### onDrop?

> `optional` **onDrop?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2489

#### Inherited from

`Omit.onDrop`

***

### onDropCapture?

> `optional` **onDropCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2490

#### Inherited from

`Omit.onDropCapture`

***

### onMouseDown?

> `optional` **onMouseDown?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2491

#### Inherited from

`Omit.onMouseDown`

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2492

#### Inherited from

`Omit.onMouseDownCapture`

***

### onMouseEnter?

> `optional` **onMouseEnter?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2493

#### Inherited from

`Omit.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2494

#### Inherited from

`Omit.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2495

#### Inherited from

`Omit.onMouseMove`

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2496

#### Inherited from

`Omit.onMouseMoveCapture`

***

### onMouseOut?

> `optional` **onMouseOut?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2497

#### Inherited from

`Omit.onMouseOut`

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2498

#### Inherited from

`Omit.onMouseOutCapture`

***

### onMouseOver?

> `optional` **onMouseOver?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2499

#### Inherited from

`Omit.onMouseOver`

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2500

#### Inherited from

`Omit.onMouseOverCapture`

***

### onMouseUp?

> `optional` **onMouseUp?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2501

#### Inherited from

`Omit.onMouseUp`

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2502

#### Inherited from

`Omit.onMouseUpCapture`

***

### onSelect?

> `optional` **onSelect?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2505

#### Inherited from

`Omit.onSelect`

***

### onSelectCapture?

> `optional` **onSelectCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2506

#### Inherited from

`Omit.onSelectCapture`

***

### onTouchCancel?

> `optional` **onTouchCancel?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2509

#### Inherited from

`Omit.onTouchCancel`

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2510

#### Inherited from

`Omit.onTouchCancelCapture`

***

### onTouchEnd?

> `optional` **onTouchEnd?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2511

#### Inherited from

`Omit.onTouchEnd`

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2512

#### Inherited from

`Omit.onTouchEndCapture`

***

### onTouchMove?

> `optional` **onTouchMove?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2513

#### Inherited from

`Omit.onTouchMove`

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2514

#### Inherited from

`Omit.onTouchMoveCapture`

***

### onTouchStart?

> `optional` **onTouchStart?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2515

#### Inherited from

`Omit.onTouchStart`

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2516

#### Inherited from

`Omit.onTouchStartCapture`

***

### onPointerDown?

> `optional` **onPointerDown?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2519

#### Inherited from

`Omit.onPointerDown`

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2520

#### Inherited from

`Omit.onPointerDownCapture`

***

### onPointerMove?

> `optional` **onPointerMove?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2521

#### Inherited from

`Omit.onPointerMove`

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2522

#### Inherited from

`Omit.onPointerMoveCapture`

***

### onPointerUp?

> `optional` **onPointerUp?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2523

#### Inherited from

`Omit.onPointerUp`

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2524

#### Inherited from

`Omit.onPointerUpCapture`

***

### onPointerCancel?

> `optional` **onPointerCancel?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2525

#### Inherited from

`Omit.onPointerCancel`

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2526

#### Inherited from

`Omit.onPointerCancelCapture`

***

### onPointerEnter?

> `optional` **onPointerEnter?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2527

#### Inherited from

`Omit.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2528

#### Inherited from

`Omit.onPointerLeave`

***

### onPointerOver?

> `optional` **onPointerOver?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2529

#### Inherited from

`Omit.onPointerOver`

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2530

#### Inherited from

`Omit.onPointerOverCapture`

***

### onPointerOut?

> `optional` **onPointerOut?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2531

#### Inherited from

`Omit.onPointerOut`

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2532

#### Inherited from

`Omit.onPointerOutCapture`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2533

#### Inherited from

`Omit.onGotPointerCapture`

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2534

#### Inherited from

`Omit.onGotPointerCaptureCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2535

#### Inherited from

`Omit.onLostPointerCapture`

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2536

#### Inherited from

`Omit.onLostPointerCaptureCapture`

***

### onScrollCapture?

> `optional` **onScrollCapture?**: `UIEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2540

#### Inherited from

`Omit.onScrollCapture`

***

### onScrollEndCapture?

> `optional` **onScrollEndCapture?**: `UIEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2542

#### Inherited from

`Omit.onScrollEndCapture`

***

### onWheel?

> `optional` **onWheel?**: `WheelEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2545

#### Inherited from

`Omit.onWheel`

***

### onWheelCapture?

> `optional` **onWheelCapture?**: `WheelEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2546

#### Inherited from

`Omit.onWheelCapture`

***

### onAnimationStart?

> `optional` **onAnimationStart?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2549

#### Inherited from

`Omit.onAnimationStart`

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2550

#### Inherited from

`Omit.onAnimationStartCapture`

***

### onAnimationEnd?

> `optional` **onAnimationEnd?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2551

#### Inherited from

`Omit.onAnimationEnd`

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2552

#### Inherited from

`Omit.onAnimationEndCapture`

***

### onAnimationIteration?

> `optional` **onAnimationIteration?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2553

#### Inherited from

`Omit.onAnimationIteration`

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2554

#### Inherited from

`Omit.onAnimationIterationCapture`

***

### onToggle?

> `optional` **onToggle?**: `ToggleEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2557

#### Inherited from

`Omit.onToggle`

***

### onBeforeToggle?

> `optional` **onBeforeToggle?**: `ToggleEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2558

#### Inherited from

`Omit.onBeforeToggle`

***

### onTransitionCancel?

> `optional` **onTransitionCancel?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2561

#### Inherited from

`Omit.onTransitionCancel`

***

### onTransitionCancelCapture?

> `optional` **onTransitionCancelCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2562

#### Inherited from

`Omit.onTransitionCancelCapture`

***

### onTransitionEnd?

> `optional` **onTransitionEnd?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2563

#### Inherited from

`Omit.onTransitionEnd`

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2564

#### Inherited from

`Omit.onTransitionEndCapture`

***

### onTransitionRun?

> `optional` **onTransitionRun?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2565

#### Inherited from

`Omit.onTransitionRun`

***

### onTransitionRunCapture?

> `optional` **onTransitionRunCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2566

#### Inherited from

`Omit.onTransitionRunCapture`

***

### onTransitionStart?

> `optional` **onTransitionStart?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2567

#### Inherited from

`Omit.onTransitionStart`

***

### onTransitionStartCapture?

> `optional` **onTransitionStartCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2568

#### Inherited from

`Omit.onTransitionStartCapture`
