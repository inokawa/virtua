[**API**](../../API.md)

***

# Interface: VGridProps

Props of [VGrid](../functions/experimental_VGrid.md).

## Extends

- [`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md)

## Properties

### children()

> **children**: (`arg`) => `ReactNode`

A function to create elements rendered by this component.

#### Parameters

##### arg

###### arg.rowIndex

`number`

row index of cell

###### arg.colIndex

`number`

column index of cell

#### Returns

`ReactNode`

#### Defined in

[src/react/VGrid.tsx:154](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L154)

***

### row

> **row**: `number`

Total row length of grid.

#### Defined in

[src/react/VGrid.tsx:167](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L167)

***

### col

> **col**: `number`

Total column length of grid.

#### Defined in

[src/react/VGrid.tsx:171](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L171)

***

### cellHeight?

> `optional` **cellHeight**: `number`

Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

#### Default Value

```ts
40
```

#### Defined in

[src/react/VGrid.tsx:176](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L176)

***

### cellWidth?

> `optional` **cellWidth**: `number`

Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

#### Default Value

```ts
100
```

#### Defined in

[src/react/VGrid.tsx:181](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L181)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
2
```

#### Defined in

[src/react/VGrid.tsx:186](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L186)

***

### initialRowCount?

> `optional` **initialRowCount**: `number`

If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

#### Defined in

[src/react/VGrid.tsx:190](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L190)

***

### initialColCount?

> `optional` **initialColCount**: `number`

If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

#### Defined in

[src/react/VGrid.tsx:194](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L194)

***

### item?

> `optional` **item**: keyof IntrinsicElements \| [`CustomCellComponent`](../type-aliases/CustomCellComponent.md)

Component or element type for cell element. This component will get [CustomCellComponentProps](CustomCellComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Defined in

[src/react/VGrid.tsx:199](https://github.com/inokawa/virtua/blob/35dfa1c6e2e6854ecd417abe6fb93c829e7500e4/src/react/VGrid.tsx#L199)

***

### className?

> `optional` **className**: `string`

#### Inherited from

`ViewportComponentAttributes.className`

#### Defined in

node\_modules/@types/react/index.d.ts:2904

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`ViewportComponentAttributes.style`

#### Defined in

node\_modules/@types/react/index.d.ts:2916

***

### id?

> `optional` **id**: `string`

#### Inherited from

`ViewportComponentAttributes.id`

#### Defined in

node\_modules/@types/react/index.d.ts:2911

***

### role?

> `optional` **role**: `AriaRole`

#### Inherited from

`ViewportComponentAttributes.role`

#### Defined in

node\_modules/@types/react/index.d.ts:2925

***

### tabIndex?

> `optional` **tabIndex**: `number`

#### Inherited from

`ViewportComponentAttributes.tabIndex`

#### Defined in

node\_modules/@types/react/index.d.ts:2917

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLElement`\>

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2435

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLElement`\>

#### Inherited from

`ViewportComponentAttributes.onWheel`

#### Defined in

node\_modules/@types/react/index.d.ts:2569

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

#### Defined in

node\_modules/@types/react/index.d.ts:2599

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

#### Defined in

node\_modules/@types/react/index.d.ts:2601

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"inline"` \| `"none"` \| `"both"` \| `"list"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

#### Defined in

node\_modules/@types/react/index.d.ts:2606

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`ViewportComponentAttributes.aria-braillelabel`

#### Defined in

node\_modules/@types/react/index.d.ts:2612

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`ViewportComponentAttributes.aria-brailleroledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2617

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

#### Inherited from

`ViewportComponentAttributes.aria-busy`

#### Defined in

node\_modules/@types/react/index.d.ts:2618

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

node\_modules/@types/react/index.d.ts:2623

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2628

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

node\_modules/@types/react/index.d.ts:2633

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`ViewportComponentAttributes.aria-colindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2638

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

node\_modules/@types/react/index.d.ts:2643

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

#### Defined in

node\_modules/@types/react/index.d.ts:2648

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"page"` \| `"false"` \| `"true"` \| `"location"` \| `"date"` \| `"step"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

#### Defined in

node\_modules/@types/react/index.d.ts:2650

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

#### Defined in

node\_modules/@types/react/index.d.ts:2655

***

### aria-description?

> `optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-description`

#### Defined in

node\_modules/@types/react/index.d.ts:2660

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

#### Defined in

node\_modules/@types/react/index.d.ts:2665

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

node\_modules/@types/react/index.d.ts:2670

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"copy"` \| `"none"` \| `"link"` \| `"move"` \| `"execute"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

#### Defined in

node\_modules/@types/react/index.d.ts:2675

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

node\_modules/@types/react/index.d.ts:2680

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

#### Defined in

node\_modules/@types/react/index.d.ts:2682

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

#### Defined in

node\_modules/@types/react/index.d.ts:2687

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

#### Defined in

node\_modules/@types/react/index.d.ts:2692

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"false"` \| `"true"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

#### Defined in

node\_modules/@types/react/index.d.ts:2694

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2699

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"false"` \| `"true"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2704

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

#### Defined in

node\_modules/@types/react/index.d.ts:2706

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

#### Defined in

node\_modules/@types/react/index.d.ts:2711

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

#### Defined in

node\_modules/@types/react/index.d.ts:2716

***

### aria-level?

> `optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

#### Defined in

node\_modules/@types/react/index.d.ts:2718

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

#### Defined in

node\_modules/@types/react/index.d.ts:2720

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

#### Defined in

node\_modules/@types/react/index.d.ts:2722

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

#### Defined in

node\_modules/@types/react/index.d.ts:2724

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2726

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

#### Defined in

node\_modules/@types/react/index.d.ts:2728

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

node\_modules/@types/react/index.d.ts:2734

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

#### Defined in

node\_modules/@types/react/index.d.ts:2739

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

#### Defined in

node\_modules/@types/react/index.d.ts:2744

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

node\_modules/@types/react/index.d.ts:2749

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

#### Defined in

node\_modules/@types/react/index.d.ts:2754

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

#### Defined in

node\_modules/@types/react/index.d.ts:2759

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

#### Defined in

node\_modules/@types/react/index.d.ts:2772

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2774

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2779

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

node\_modules/@types/react/index.d.ts:2784

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`ViewportComponentAttributes.aria-rowindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2789

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

node\_modules/@types/react/index.d.ts:2794

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

node\_modules/@types/react/index.d.ts:2799

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

#### Defined in

node\_modules/@types/react/index.d.ts:2804

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

#### Defined in

node\_modules/@types/react/index.d.ts:2806

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

#### Defined in

node\_modules/@types/react/index.d.ts:2808

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

#### Defined in

node\_modules/@types/react/index.d.ts:2810

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

#### Defined in

node\_modules/@types/react/index.d.ts:2815

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

#### Defined in

node\_modules/@types/react/index.d.ts:2817
