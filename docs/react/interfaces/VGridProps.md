[**API**](../../API.md)

***

# Interface: VGridProps

Defined in: [src/react/VGrid.tsx:188](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L188)

Props of [VGrid](../variables/experimental_VGrid.md).

## Extends

- [`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md)

## Properties

### children()

> **children**: (`arg`) => `ReactNode`

Defined in: [src/react/VGrid.tsx:192](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L192)

A function to create elements rendered by this component.

#### Parameters

##### arg

###### rowIndex

`number`

row index of cell

###### colIndex

`number`

column index of cell

#### Returns

`ReactNode`

***

### row

> **row**: `number`

Defined in: [src/react/VGrid.tsx:205](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L205)

Total row length of grid.

***

### col

> **col**: `number`

Defined in: [src/react/VGrid.tsx:209](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L209)

Total column length of grid.

***

### cellHeight?

> `optional` **cellHeight**: `number`

Defined in: [src/react/VGrid.tsx:214](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L214)

Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

#### Default Value

```ts
40
```

***

### cellWidth?

> `optional` **cellWidth**: `number`

Defined in: [src/react/VGrid.tsx:219](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L219)

Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

#### Default Value

```ts
100
```

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/react/VGrid.tsx:224](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L224)

Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
2
```

***

### initialRowCount?

> `optional` **initialRowCount**: `number`

Defined in: [src/react/VGrid.tsx:228](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L228)

If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

***

### initialColCount?

> `optional` **initialColCount**: `number`

Defined in: [src/react/VGrid.tsx:232](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L232)

If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

***

### item?

> `optional` **item**: keyof IntrinsicElements \| [`CustomCellComponent`](../type-aliases/CustomCellComponent.md)

Defined in: [src/react/VGrid.tsx:237](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L237)

Component or element type for cell element. This component will get [CustomCellComponentProps](CustomCellComponentProps.md) as props.

#### Default Value

```ts
"div"
```

***

### domRef?

> `optional` **domRef**: `Ref`\<`HTMLDivElement`\>

Defined in: [src/react/VGrid.tsx:239](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L239)

Reference to the rendered DOM element (the one that scrolls).

***

### innerDomRef?

> `optional` **innerDomRef**: `Ref`\<`HTMLDivElement`\>

Defined in: [src/react/VGrid.tsx:241](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L241)

Reference to the inner rendered DOM element (the one that contains all the cells).

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/react/VGrid.tsx:245](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L245)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

#### Returns

`void`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/react/VGrid.tsx:249](https://github.com/inokawa/virtua/blob/268af5948545eee27d897af009097898db266a80/src/react/VGrid.tsx#L249)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### className?

> `optional` **className**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2735

#### Inherited from

`ViewportComponentAttributes.className`

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: node\_modules/@types/react/index.d.ts:2747

#### Inherited from

`ViewportComponentAttributes.style`

***

### id?

> `optional` **id**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2742

#### Inherited from

`ViewportComponentAttributes.id`

***

### role?

> `optional` **role**: `AriaRole`

Defined in: node\_modules/@types/react/index.d.ts:2756

#### Inherited from

`ViewportComponentAttributes.role`

***

### tabIndex?

> `optional` **tabIndex**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2748

#### Inherited from

`ViewportComponentAttributes.tabIndex`

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2256

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2390

#### Inherited from

`ViewportComponentAttributes.onWheel`

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2430

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2432

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"none"` \| `"inline"` \| `"both"` \| `"list"`

Defined in: node\_modules/@types/react/index.d.ts:2437

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2443

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`ViewportComponentAttributes.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2448

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`ViewportComponentAttributes.aria-brailleroledescription`

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2449

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/@types/react/index.d.ts:2454

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2459

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2464

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2469

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`ViewportComponentAttributes.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2474

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2479

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"page"` \| `"false"` \| `"true"` \| `"location"` \| `"step"` \| `"date"`

Defined in: node\_modules/@types/react/index.d.ts:2481

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2486

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-description?

> `optional` **aria-description**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2491

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-description`

***

### aria-details?

> `optional` **aria-details**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2496

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2501

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"copy"` \| `"none"` \| `"link"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/@types/react/index.d.ts:2506

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2511

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2513

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2518

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2523

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"false"` \| `"true"` \| `"tree"`

Defined in: node\_modules/@types/react/index.d.ts:2525

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2530

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"false"` \| `"true"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/@types/react/index.d.ts:2535

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2537

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2542

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2547

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2549

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/@types/react/index.d.ts:2551

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2553

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2555

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2557

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/@types/react/index.d.ts:2559

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2565

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2570

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2575

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/@types/react/index.d.ts:2580

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2585

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/@types/react/index.d.ts:2590

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2603

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2605

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2610

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2615

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2620

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`ViewportComponentAttributes.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2625

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2630

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2635

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Defined in: node\_modules/@types/react/index.d.ts:2637

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2639

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2641

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2646

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2648

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`
