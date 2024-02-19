# Interface: VGridProps

[react](../modules/react.md).VGridProps

Props of [VGrid](../modules/react.md#experimental_vgrid).

## Hierarchy

- [`ViewportComponentAttributes`](../modules/react.md#viewportcomponentattributes)

  ↳ **`VGridProps`**

## Table of contents

### Properties

- [children](react.VGridProps.md#children)
- [row](react.VGridProps.md#row)
- [col](react.VGridProps.md#col)
- [cellHeight](react.VGridProps.md#cellheight)
- [cellWidth](react.VGridProps.md#cellwidth)
- [overscan](react.VGridProps.md#overscan)
- [initialRowCount](react.VGridProps.md#initialrowcount)
- [initialColCount](react.VGridProps.md#initialcolcount)
- [item](react.VGridProps.md#item)
- [className](react.VGridProps.md#classname)
- [style](react.VGridProps.md#style)
- [id](react.VGridProps.md#id)
- [role](react.VGridProps.md#role)
- [tabIndex](react.VGridProps.md#tabindex)
- [onKeyDown](react.VGridProps.md#onkeydown)
- [aria-activedescendant](react.VGridProps.md#aria-activedescendant)
- [aria-atomic](react.VGridProps.md#aria-atomic)
- [aria-autocomplete](react.VGridProps.md#aria-autocomplete)
- [aria-braillelabel](react.VGridProps.md#aria-braillelabel)
- [aria-brailleroledescription](react.VGridProps.md#aria-brailleroledescription)
- [aria-busy](react.VGridProps.md#aria-busy)
- [aria-checked](react.VGridProps.md#aria-checked)
- [aria-colcount](react.VGridProps.md#aria-colcount)
- [aria-colindex](react.VGridProps.md#aria-colindex)
- [aria-colindextext](react.VGridProps.md#aria-colindextext)
- [aria-colspan](react.VGridProps.md#aria-colspan)
- [aria-controls](react.VGridProps.md#aria-controls)
- [aria-current](react.VGridProps.md#aria-current)
- [aria-describedby](react.VGridProps.md#aria-describedby)
- [aria-description](react.VGridProps.md#aria-description)
- [aria-details](react.VGridProps.md#aria-details)
- [aria-disabled](react.VGridProps.md#aria-disabled)
- [aria-dropeffect](react.VGridProps.md#aria-dropeffect)
- [aria-errormessage](react.VGridProps.md#aria-errormessage)
- [aria-expanded](react.VGridProps.md#aria-expanded)
- [aria-flowto](react.VGridProps.md#aria-flowto)
- [aria-grabbed](react.VGridProps.md#aria-grabbed)
- [aria-haspopup](react.VGridProps.md#aria-haspopup)
- [aria-hidden](react.VGridProps.md#aria-hidden)
- [aria-invalid](react.VGridProps.md#aria-invalid)
- [aria-keyshortcuts](react.VGridProps.md#aria-keyshortcuts)
- [aria-label](react.VGridProps.md#aria-label)
- [aria-labelledby](react.VGridProps.md#aria-labelledby)
- [aria-level](react.VGridProps.md#aria-level)
- [aria-live](react.VGridProps.md#aria-live)
- [aria-modal](react.VGridProps.md#aria-modal)
- [aria-multiline](react.VGridProps.md#aria-multiline)
- [aria-multiselectable](react.VGridProps.md#aria-multiselectable)
- [aria-orientation](react.VGridProps.md#aria-orientation)
- [aria-owns](react.VGridProps.md#aria-owns)
- [aria-placeholder](react.VGridProps.md#aria-placeholder)
- [aria-posinset](react.VGridProps.md#aria-posinset)
- [aria-pressed](react.VGridProps.md#aria-pressed)
- [aria-readonly](react.VGridProps.md#aria-readonly)
- [aria-relevant](react.VGridProps.md#aria-relevant)
- [aria-required](react.VGridProps.md#aria-required)
- [aria-roledescription](react.VGridProps.md#aria-roledescription)
- [aria-rowcount](react.VGridProps.md#aria-rowcount)
- [aria-rowindex](react.VGridProps.md#aria-rowindex)
- [aria-rowindextext](react.VGridProps.md#aria-rowindextext)
- [aria-rowspan](react.VGridProps.md#aria-rowspan)
- [aria-selected](react.VGridProps.md#aria-selected)
- [aria-setsize](react.VGridProps.md#aria-setsize)
- [aria-sort](react.VGridProps.md#aria-sort)
- [aria-valuemax](react.VGridProps.md#aria-valuemax)
- [aria-valuemin](react.VGridProps.md#aria-valuemin)
- [aria-valuenow](react.VGridProps.md#aria-valuenow)
- [aria-valuetext](react.VGridProps.md#aria-valuetext)

## Properties

### children

• **children**: (`arg`: \{ `rowIndex`: `number` ; `colIndex`: `number`  }) => `ReactNode`

A function to create elements rendered by this component.

#### Type declaration

▸ (`arg`): `ReactNode`

A function to create elements rendered by this component.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `Object` | - |
| `arg.rowIndex` | `number` | row index of cell |
| `arg.colIndex` | `number` | column index of cell |

##### Returns

`ReactNode`

#### Defined in

[src/react/VGrid.tsx:144](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L144)

___

### row

• **row**: `number`

Total row length of grid.

#### Defined in

[src/react/VGrid.tsx:157](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L157)

___

### col

• **col**: `number`

Total column length of grid.

#### Defined in

[src/react/VGrid.tsx:161](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L161)

___

### cellHeight

• `Optional` **cellHeight**: `number`

Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

```ts
40
```

#### Defined in

[src/react/VGrid.tsx:166](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L166)

___

### cellWidth

• `Optional` **cellWidth**: `number`

Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

```ts
100
```

#### Defined in

[src/react/VGrid.tsx:171](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L171)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
2
```

#### Defined in

[src/react/VGrid.tsx:176](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L176)

___

### initialRowCount

• `Optional` **initialRowCount**: `number`

If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

#### Defined in

[src/react/VGrid.tsx:180](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L180)

___

### initialColCount

• `Optional` **initialColCount**: `number`

If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

#### Defined in

[src/react/VGrid.tsx:184](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L184)

___

### item

• `Optional` **item**: keyof IntrinsicElements \| [`CustomCellComponent`](../modules/react.md#customcellcomponent)

Component or element type for cell element. This component will get [CustomCellComponentProps](react.CustomCellComponentProps.md) as props.

**`Default Value`**

```ts
"div"
```

#### Defined in

[src/react/VGrid.tsx:189](https://github.com/inokawa/virtua/blob/9bad093d/src/react/VGrid.tsx#L189)

___

### className

• `Optional` **className**: `string`

#### Inherited from

ViewportComponentAttributes.className

#### Defined in

node_modules/@types/react/index.d.ts:2790

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

ViewportComponentAttributes.style

#### Defined in

node_modules/@types/react/index.d.ts:2801

___

### id

• `Optional` **id**: `string`

#### Inherited from

ViewportComponentAttributes.id

#### Defined in

node_modules/@types/react/index.d.ts:2796

___

### role

• `Optional` **role**: `AriaRole`

#### Inherited from

ViewportComponentAttributes.role

#### Defined in

node_modules/@types/react/index.d.ts:2810

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

ViewportComponentAttributes.tabIndex

#### Defined in

node_modules/@types/react/index.d.ts:2802

___

### onKeyDown

• `Optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLElement`\>

#### Inherited from

ViewportComponentAttributes.onKeyDown

#### Defined in

node_modules/@types/react/index.d.ts:2320

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

ViewportComponentAttributes.aria-activedescendant

#### Defined in

node_modules/@types/react/index.d.ts:2486

___

### aria-atomic

• `Optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

ViewportComponentAttributes.aria-atomic

#### Defined in

node_modules/@types/react/index.d.ts:2488

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"inline"`` \| ``"none"`` \| ``"both"`` \| ``"list"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

ViewportComponentAttributes.aria-autocomplete

#### Defined in

node_modules/@types/react/index.d.ts:2493

___

### aria-braillelabel

• `Optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

**`See`**

aria-label.

#### Inherited from

ViewportComponentAttributes.aria-braillelabel

#### Defined in

node_modules/@types/react/index.d.ts:2499

___

### aria-brailleroledescription

• `Optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

**`See`**

aria-roledescription.

#### Inherited from

ViewportComponentAttributes.aria-brailleroledescription

#### Defined in

node_modules/@types/react/index.d.ts:2504

___

### aria-busy

• `Optional` **aria-busy**: `Booleanish`

#### Inherited from

ViewportComponentAttributes.aria-busy

#### Defined in

node_modules/@types/react/index.d.ts:2505

___

### aria-checked

• `Optional` **aria-checked**: `boolean` \| ``"mixed"`` \| ``"false"`` \| ``"true"``

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`See`**

 - aria-pressed
 - aria-selected.

#### Inherited from

ViewportComponentAttributes.aria-checked

#### Defined in

node_modules/@types/react/index.d.ts:2510

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`See`**

aria-colindex.

#### Inherited from

ViewportComponentAttributes.aria-colcount

#### Defined in

node_modules/@types/react/index.d.ts:2515

___

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`See`**

 - aria-colcount
 - aria-colspan.

#### Inherited from

ViewportComponentAttributes.aria-colindex

#### Defined in

node_modules/@types/react/index.d.ts:2520

___

### aria-colindextext

• `Optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

**`See`**

aria-rowindextext.

#### Inherited from

ViewportComponentAttributes.aria-colindextext

#### Defined in

node_modules/@types/react/index.d.ts:2525

___

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-colindex
 - aria-rowspan.

#### Inherited from

ViewportComponentAttributes.aria-colspan

#### Defined in

node_modules/@types/react/index.d.ts:2530

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`See`**

aria-owns.

#### Inherited from

ViewportComponentAttributes.aria-controls

#### Defined in

node_modules/@types/react/index.d.ts:2535

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"time"`` \| ``"page"`` \| ``"false"`` \| ``"true"`` \| ``"location"`` \| ``"step"`` \| ``"date"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

ViewportComponentAttributes.aria-current

#### Defined in

node_modules/@types/react/index.d.ts:2537

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`See`**

aria-labelledby

#### Inherited from

ViewportComponentAttributes.aria-describedby

#### Defined in

node_modules/@types/react/index.d.ts:2542

___

### aria-description

• `Optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

**`See`**

related aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-description

#### Defined in

node_modules/@types/react/index.d.ts:2547

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`See`**

aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-details

#### Defined in

node_modules/@types/react/index.d.ts:2552

___

### aria-disabled

• `Optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`See`**

 - aria-hidden
 - aria-readonly.

#### Inherited from

ViewportComponentAttributes.aria-disabled

#### Defined in

node_modules/@types/react/index.d.ts:2557

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"copy"`` \| ``"none"`` \| ``"link"`` \| ``"move"`` \| ``"execute"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

ViewportComponentAttributes.aria-dropeffect

#### Defined in

node_modules/@types/react/index.d.ts:2562

___

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`See`**

 - aria-invalid
 - aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-errormessage

#### Defined in

node_modules/@types/react/index.d.ts:2567

___

### aria-expanded

• `Optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

ViewportComponentAttributes.aria-expanded

#### Defined in

node_modules/@types/react/index.d.ts:2569

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

ViewportComponentAttributes.aria-flowto

#### Defined in

node_modules/@types/react/index.d.ts:2574

___

### aria-grabbed

• `Optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

ViewportComponentAttributes.aria-grabbed

#### Defined in

node_modules/@types/react/index.d.ts:2579

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"grid"`` \| ``"dialog"`` \| ``"menu"`` \| ``"listbox"`` \| ``"false"`` \| ``"true"`` \| ``"tree"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

ViewportComponentAttributes.aria-haspopup

#### Defined in

node_modules/@types/react/index.d.ts:2581

___

### aria-hidden

• `Optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

**`See`**

aria-disabled.

#### Inherited from

ViewportComponentAttributes.aria-hidden

#### Defined in

node_modules/@types/react/index.d.ts:2586

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"false"`` \| ``"true"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`See`**

aria-errormessage.

#### Inherited from

ViewportComponentAttributes.aria-invalid

#### Defined in

node_modules/@types/react/index.d.ts:2591

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

ViewportComponentAttributes.aria-keyshortcuts

#### Defined in

node_modules/@types/react/index.d.ts:2593

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`See`**

aria-labelledby.

#### Inherited from

ViewportComponentAttributes.aria-label

#### Defined in

node_modules/@types/react/index.d.ts:2598

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`See`**

aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:2603

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

ViewportComponentAttributes.aria-level

#### Defined in

node_modules/@types/react/index.d.ts:2605

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

ViewportComponentAttributes.aria-live

#### Defined in

node_modules/@types/react/index.d.ts:2607

___

### aria-modal

• `Optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

ViewportComponentAttributes.aria-modal

#### Defined in

node_modules/@types/react/index.d.ts:2609

___

### aria-multiline

• `Optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

ViewportComponentAttributes.aria-multiline

#### Defined in

node_modules/@types/react/index.d.ts:2611

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

ViewportComponentAttributes.aria-multiselectable

#### Defined in

node_modules/@types/react/index.d.ts:2613

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

ViewportComponentAttributes.aria-orientation

#### Defined in

node_modules/@types/react/index.d.ts:2615

___

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`See`**

aria-controls.

#### Inherited from

ViewportComponentAttributes.aria-owns

#### Defined in

node_modules/@types/react/index.d.ts:2621

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

ViewportComponentAttributes.aria-placeholder

#### Defined in

node_modules/@types/react/index.d.ts:2626

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-setsize.

#### Inherited from

ViewportComponentAttributes.aria-posinset

#### Defined in

node_modules/@types/react/index.d.ts:2631

___

### aria-pressed

• `Optional` **aria-pressed**: `boolean` \| ``"mixed"`` \| ``"false"`` \| ``"true"``

Indicates the current "pressed" state of toggle buttons.

**`See`**

 - aria-checked
 - aria-selected.

#### Inherited from

ViewportComponentAttributes.aria-pressed

#### Defined in

node_modules/@types/react/index.d.ts:2636

___

### aria-readonly

• `Optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

**`See`**

aria-disabled.

#### Inherited from

ViewportComponentAttributes.aria-readonly

#### Defined in

node_modules/@types/react/index.d.ts:2641

___

### aria-relevant

• `Optional` **aria-relevant**: ``"text"`` \| ``"all"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`See`**

aria-atomic.

#### Inherited from

ViewportComponentAttributes.aria-relevant

#### Defined in

node_modules/@types/react/index.d.ts:2646

___

### aria-required

• `Optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

ViewportComponentAttributes.aria-required

#### Defined in

node_modules/@types/react/index.d.ts:2659

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

ViewportComponentAttributes.aria-roledescription

#### Defined in

node_modules/@types/react/index.d.ts:2661

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`See`**

aria-rowindex.

#### Inherited from

ViewportComponentAttributes.aria-rowcount

#### Defined in

node_modules/@types/react/index.d.ts:2666

___

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`See`**

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

ViewportComponentAttributes.aria-rowindex

#### Defined in

node_modules/@types/react/index.d.ts:2671

___

### aria-rowindextext

• `Optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

**`See`**

aria-colindextext.

#### Inherited from

ViewportComponentAttributes.aria-rowindextext

#### Defined in

node_modules/@types/react/index.d.ts:2676

___

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-rowindex
 - aria-colspan.

#### Inherited from

ViewportComponentAttributes.aria-rowspan

#### Defined in

node_modules/@types/react/index.d.ts:2681

___

### aria-selected

• `Optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

**`See`**

 - aria-checked
 - aria-pressed.

#### Inherited from

ViewportComponentAttributes.aria-selected

#### Defined in

node_modules/@types/react/index.d.ts:2686

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-posinset.

#### Inherited from

ViewportComponentAttributes.aria-setsize

#### Defined in

node_modules/@types/react/index.d.ts:2691

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

ViewportComponentAttributes.aria-sort

#### Defined in

node_modules/@types/react/index.d.ts:2693

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuemax

#### Defined in

node_modules/@types/react/index.d.ts:2695

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuemin

#### Defined in

node_modules/@types/react/index.d.ts:2697

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`See`**

aria-valuetext.

#### Inherited from

ViewportComponentAttributes.aria-valuenow

#### Defined in

node_modules/@types/react/index.d.ts:2702

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuetext

#### Defined in

node_modules/@types/react/index.d.ts:2704
