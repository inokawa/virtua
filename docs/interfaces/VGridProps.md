# Interface: VGridProps

Props of [VGrid](../API.md#vgrid).

## Hierarchy

- [`ViewportComponentAttributes`](../API.md#viewportcomponentattributes)

  ↳ **`VGridProps`**

## Table of contents

### Properties

- [children](VGridProps.md#children)
- [row](VGridProps.md#row)
- [col](VGridProps.md#col)
- [cellHeight](VGridProps.md#cellheight)
- [cellWidth](VGridProps.md#cellwidth)
- [overscan](VGridProps.md#overscan)
- [initialRowCount](VGridProps.md#initialrowcount)
- [initialColCount](VGridProps.md#initialcolcount)
- [rtl](VGridProps.md#rtl)
- [components](VGridProps.md#components)
- [className](VGridProps.md#classname)
- [style](VGridProps.md#style)
- [id](VGridProps.md#id)
- [role](VGridProps.md#role)
- [tabIndex](VGridProps.md#tabindex)
- [aria-activedescendant](VGridProps.md#aria-activedescendant)
- [aria-atomic](VGridProps.md#aria-atomic)
- [aria-autocomplete](VGridProps.md#aria-autocomplete)
- [aria-braillelabel](VGridProps.md#aria-braillelabel)
- [aria-brailleroledescription](VGridProps.md#aria-brailleroledescription)
- [aria-busy](VGridProps.md#aria-busy)
- [aria-checked](VGridProps.md#aria-checked)
- [aria-colcount](VGridProps.md#aria-colcount)
- [aria-colindex](VGridProps.md#aria-colindex)
- [aria-colindextext](VGridProps.md#aria-colindextext)
- [aria-colspan](VGridProps.md#aria-colspan)
- [aria-controls](VGridProps.md#aria-controls)
- [aria-current](VGridProps.md#aria-current)
- [aria-describedby](VGridProps.md#aria-describedby)
- [aria-description](VGridProps.md#aria-description)
- [aria-details](VGridProps.md#aria-details)
- [aria-disabled](VGridProps.md#aria-disabled)
- [aria-dropeffect](VGridProps.md#aria-dropeffect)
- [aria-errormessage](VGridProps.md#aria-errormessage)
- [aria-expanded](VGridProps.md#aria-expanded)
- [aria-flowto](VGridProps.md#aria-flowto)
- [aria-grabbed](VGridProps.md#aria-grabbed)
- [aria-haspopup](VGridProps.md#aria-haspopup)
- [aria-hidden](VGridProps.md#aria-hidden)
- [aria-invalid](VGridProps.md#aria-invalid)
- [aria-keyshortcuts](VGridProps.md#aria-keyshortcuts)
- [aria-label](VGridProps.md#aria-label)
- [aria-labelledby](VGridProps.md#aria-labelledby)
- [aria-level](VGridProps.md#aria-level)
- [aria-live](VGridProps.md#aria-live)
- [aria-modal](VGridProps.md#aria-modal)
- [aria-multiline](VGridProps.md#aria-multiline)
- [aria-multiselectable](VGridProps.md#aria-multiselectable)
- [aria-orientation](VGridProps.md#aria-orientation)
- [aria-owns](VGridProps.md#aria-owns)
- [aria-placeholder](VGridProps.md#aria-placeholder)
- [aria-posinset](VGridProps.md#aria-posinset)
- [aria-pressed](VGridProps.md#aria-pressed)
- [aria-readonly](VGridProps.md#aria-readonly)
- [aria-relevant](VGridProps.md#aria-relevant)
- [aria-required](VGridProps.md#aria-required)
- [aria-roledescription](VGridProps.md#aria-roledescription)
- [aria-rowcount](VGridProps.md#aria-rowcount)
- [aria-rowindex](VGridProps.md#aria-rowindex)
- [aria-rowindextext](VGridProps.md#aria-rowindextext)
- [aria-rowspan](VGridProps.md#aria-rowspan)
- [aria-selected](VGridProps.md#aria-selected)
- [aria-setsize](VGridProps.md#aria-setsize)
- [aria-sort](VGridProps.md#aria-sort)
- [aria-valuemax](VGridProps.md#aria-valuemax)
- [aria-valuemin](VGridProps.md#aria-valuemin)
- [aria-valuenow](VGridProps.md#aria-valuenow)
- [aria-valuetext](VGridProps.md#aria-valuetext)

## Properties

### children

• **children**: (`arg`: { `rowIndex`: `number` ; `colIndex`: `number`  }) => `ReactNode`

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

[src/react/VGrid.tsx:189](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L189)

___

### row

• **row**: `number`

Total row length of grid.

#### Defined in

[src/react/VGrid.tsx:202](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L202)

___

### col

• **col**: `number`

Total column length of grid.

#### Defined in

[src/react/VGrid.tsx:206](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L206)

___

### cellHeight

• `Optional` **cellHeight**: `number`

Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

40

#### Defined in

[src/react/VGrid.tsx:211](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L211)

___

### cellWidth

• `Optional` **cellWidth**: `number`

Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.

**`Default Value`**

100

#### Defined in

[src/react/VGrid.tsx:216](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L216)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

2

#### Defined in

[src/react/VGrid.tsx:221](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L221)

___

### initialRowCount

• `Optional` **initialRowCount**: `number`

If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

#### Defined in

[src/react/VGrid.tsx:225](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L225)

___

### initialColCount

• `Optional` **initialColCount**: `number`

If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

#### Defined in

[src/react/VGrid.tsx:229](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L229)

___

### rtl

• `Optional` **rtl**: `boolean`

You have to set true if you use this component under `direction: rtl` style.

#### Defined in

[src/react/VGrid.tsx:233](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L233)

___

### components

• `Optional` **components**: `Object`

Customized components for advanced usage.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Root?` | `ForwardRefExoticComponent`<[`CustomViewportComponentProps`](CustomViewportComponentProps.md) & `RefAttributes`<`any`\>\> | Component for scrollable element. This component will get [CustomViewportComponentProps](CustomViewportComponentProps.md) as props. **`Default Value`** DefaultViewport |
| `Cell?` | `CustomCellComponentOrElement` | Component or element type for cell element. This component will get [CustomCellComponentProps](CustomCellComponentProps.md) as props. **`Default Value`** "div" |

#### Defined in

[src/react/VGrid.tsx:237](https://github.com/inokawa/virtua/blob/56c801c7/src/react/VGrid.tsx#L237)

___

### className

• `Optional` **className**: `string`

#### Inherited from

ViewportComponentAttributes.className

#### Defined in

node_modules/@types/react/index.d.ts:1930

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

ViewportComponentAttributes.style

#### Defined in

node_modules/@types/react/index.d.ts:1942

___

### id

• `Optional` **id**: `string`

#### Inherited from

ViewportComponentAttributes.id

#### Defined in

node_modules/@types/react/index.d.ts:1936

___

### role

• `Optional` **role**: `AriaRole`

#### Inherited from

ViewportComponentAttributes.role

#### Defined in

node_modules/@types/react/index.d.ts:1951

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

ViewportComponentAttributes.tabIndex

#### Defined in

node_modules/@types/react/index.d.ts:1943

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

ViewportComponentAttributes.aria-activedescendant

#### Defined in

node_modules/@types/react/index.d.ts:1637

___

### aria-atomic

• `Optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

ViewportComponentAttributes.aria-atomic

#### Defined in

node_modules/@types/react/index.d.ts:1639

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"list"`` \| ``"none"`` \| ``"inline"`` \| ``"both"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

ViewportComponentAttributes.aria-autocomplete

#### Defined in

node_modules/@types/react/index.d.ts:1644

___

### aria-braillelabel

• `Optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

**`See`**

aria-label.

#### Inherited from

ViewportComponentAttributes.aria-braillelabel

#### Defined in

node_modules/@types/react/index.d.ts:1650

___

### aria-brailleroledescription

• `Optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

**`See`**

aria-roledescription.

#### Inherited from

ViewportComponentAttributes.aria-brailleroledescription

#### Defined in

node_modules/@types/react/index.d.ts:1655

___

### aria-busy

• `Optional` **aria-busy**: `Booleanish`

#### Inherited from

ViewportComponentAttributes.aria-busy

#### Defined in

node_modules/@types/react/index.d.ts:1656

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

node_modules/@types/react/index.d.ts:1661

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`See`**

aria-colindex.

#### Inherited from

ViewportComponentAttributes.aria-colcount

#### Defined in

node_modules/@types/react/index.d.ts:1666

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

node_modules/@types/react/index.d.ts:1671

___

### aria-colindextext

• `Optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

**`See`**

aria-rowindextext.

#### Inherited from

ViewportComponentAttributes.aria-colindextext

#### Defined in

node_modules/@types/react/index.d.ts:1676

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

node_modules/@types/react/index.d.ts:1681

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`See`**

aria-owns.

#### Inherited from

ViewportComponentAttributes.aria-controls

#### Defined in

node_modules/@types/react/index.d.ts:1686

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"time"`` \| ``"page"`` \| ``"false"`` \| ``"true"`` \| ``"step"`` \| ``"location"`` \| ``"date"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

ViewportComponentAttributes.aria-current

#### Defined in

node_modules/@types/react/index.d.ts:1688

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`See`**

aria-labelledby

#### Inherited from

ViewportComponentAttributes.aria-describedby

#### Defined in

node_modules/@types/react/index.d.ts:1693

___

### aria-description

• `Optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

**`See`**

related aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-description

#### Defined in

node_modules/@types/react/index.d.ts:1698

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`See`**

aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-details

#### Defined in

node_modules/@types/react/index.d.ts:1703

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

node_modules/@types/react/index.d.ts:1708

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"copy"`` \| ``"link"`` \| ``"none"`` \| ``"move"`` \| ``"execute"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

ViewportComponentAttributes.aria-dropeffect

#### Defined in

node_modules/@types/react/index.d.ts:1713

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

node_modules/@types/react/index.d.ts:1718

___

### aria-expanded

• `Optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

ViewportComponentAttributes.aria-expanded

#### Defined in

node_modules/@types/react/index.d.ts:1720

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

ViewportComponentAttributes.aria-flowto

#### Defined in

node_modules/@types/react/index.d.ts:1725

___

### aria-grabbed

• `Optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

ViewportComponentAttributes.aria-grabbed

#### Defined in

node_modules/@types/react/index.d.ts:1730

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"dialog"`` \| ``"menu"`` \| ``"grid"`` \| ``"listbox"`` \| ``"tree"`` \| ``"false"`` \| ``"true"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

ViewportComponentAttributes.aria-haspopup

#### Defined in

node_modules/@types/react/index.d.ts:1732

___

### aria-hidden

• `Optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

**`See`**

aria-disabled.

#### Inherited from

ViewportComponentAttributes.aria-hidden

#### Defined in

node_modules/@types/react/index.d.ts:1737

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"false"`` \| ``"true"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`See`**

aria-errormessage.

#### Inherited from

ViewportComponentAttributes.aria-invalid

#### Defined in

node_modules/@types/react/index.d.ts:1742

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

ViewportComponentAttributes.aria-keyshortcuts

#### Defined in

node_modules/@types/react/index.d.ts:1744

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`See`**

aria-labelledby.

#### Inherited from

ViewportComponentAttributes.aria-label

#### Defined in

node_modules/@types/react/index.d.ts:1749

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`See`**

aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:1754

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

ViewportComponentAttributes.aria-level

#### Defined in

node_modules/@types/react/index.d.ts:1756

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

ViewportComponentAttributes.aria-live

#### Defined in

node_modules/@types/react/index.d.ts:1758

___

### aria-modal

• `Optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

ViewportComponentAttributes.aria-modal

#### Defined in

node_modules/@types/react/index.d.ts:1760

___

### aria-multiline

• `Optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

ViewportComponentAttributes.aria-multiline

#### Defined in

node_modules/@types/react/index.d.ts:1762

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

ViewportComponentAttributes.aria-multiselectable

#### Defined in

node_modules/@types/react/index.d.ts:1764

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

ViewportComponentAttributes.aria-orientation

#### Defined in

node_modules/@types/react/index.d.ts:1766

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

node_modules/@types/react/index.d.ts:1772

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

ViewportComponentAttributes.aria-placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1777

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-setsize.

#### Inherited from

ViewportComponentAttributes.aria-posinset

#### Defined in

node_modules/@types/react/index.d.ts:1782

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

node_modules/@types/react/index.d.ts:1787

___

### aria-readonly

• `Optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

**`See`**

aria-disabled.

#### Inherited from

ViewportComponentAttributes.aria-readonly

#### Defined in

node_modules/@types/react/index.d.ts:1792

___

### aria-relevant

• `Optional` **aria-relevant**: ``"text"`` \| ``"all"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`See`**

aria-atomic.

#### Inherited from

ViewportComponentAttributes.aria-relevant

#### Defined in

node_modules/@types/react/index.d.ts:1797

___

### aria-required

• `Optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

ViewportComponentAttributes.aria-required

#### Defined in

node_modules/@types/react/index.d.ts:1799

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

ViewportComponentAttributes.aria-roledescription

#### Defined in

node_modules/@types/react/index.d.ts:1801

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`See`**

aria-rowindex.

#### Inherited from

ViewportComponentAttributes.aria-rowcount

#### Defined in

node_modules/@types/react/index.d.ts:1806

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

node_modules/@types/react/index.d.ts:1811

___

### aria-rowindextext

• `Optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

**`See`**

aria-colindextext.

#### Inherited from

ViewportComponentAttributes.aria-rowindextext

#### Defined in

node_modules/@types/react/index.d.ts:1816

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

node_modules/@types/react/index.d.ts:1821

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

node_modules/@types/react/index.d.ts:1826

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-posinset.

#### Inherited from

ViewportComponentAttributes.aria-setsize

#### Defined in

node_modules/@types/react/index.d.ts:1831

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

ViewportComponentAttributes.aria-sort

#### Defined in

node_modules/@types/react/index.d.ts:1833

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuemax

#### Defined in

node_modules/@types/react/index.d.ts:1835

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuemin

#### Defined in

node_modules/@types/react/index.d.ts:1837

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`See`**

aria-valuetext.

#### Inherited from

ViewportComponentAttributes.aria-valuenow

#### Defined in

node_modules/@types/react/index.d.ts:1842

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuetext

#### Defined in

node_modules/@types/react/index.d.ts:1844
