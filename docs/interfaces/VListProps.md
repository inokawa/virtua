# Interface: VListProps

Props of [VList](../API.md#vlist).

## Hierarchy

- [`WindowComponentAttributes`](../API.md#windowcomponentattributes)

  ↳ **`VListProps`**

## Table of contents

### Properties

- [children](VListProps.md#children)
- [overscan](VListProps.md#overscan)
- [initialItemSize](VListProps.md#initialitemsize)
- [initialItemCount](VListProps.md#initialitemcount)
- [horizontal](VListProps.md#horizontal)
- [mode](VListProps.md#mode)
- [element](VListProps.md#element)
- [itemElement](VListProps.md#itemelement)
- [onScroll](VListProps.md#onscroll)
- [onScrollStop](VListProps.md#onscrollstop)
- [onRangeChange](VListProps.md#onrangechange)
- [className](VListProps.md#classname)
- [style](VListProps.md#style)
- [id](VListProps.md#id)
- [role](VListProps.md#role)
- [tabIndex](VListProps.md#tabindex)
- [aria-activedescendant](VListProps.md#aria-activedescendant)
- [aria-atomic](VListProps.md#aria-atomic)
- [aria-autocomplete](VListProps.md#aria-autocomplete)
- [aria-braillelabel](VListProps.md#aria-braillelabel)
- [aria-brailleroledescription](VListProps.md#aria-brailleroledescription)
- [aria-busy](VListProps.md#aria-busy)
- [aria-checked](VListProps.md#aria-checked)
- [aria-colcount](VListProps.md#aria-colcount)
- [aria-colindex](VListProps.md#aria-colindex)
- [aria-colindextext](VListProps.md#aria-colindextext)
- [aria-colspan](VListProps.md#aria-colspan)
- [aria-controls](VListProps.md#aria-controls)
- [aria-current](VListProps.md#aria-current)
- [aria-describedby](VListProps.md#aria-describedby)
- [aria-description](VListProps.md#aria-description)
- [aria-details](VListProps.md#aria-details)
- [aria-disabled](VListProps.md#aria-disabled)
- [aria-dropeffect](VListProps.md#aria-dropeffect)
- [aria-errormessage](VListProps.md#aria-errormessage)
- [aria-expanded](VListProps.md#aria-expanded)
- [aria-flowto](VListProps.md#aria-flowto)
- [aria-grabbed](VListProps.md#aria-grabbed)
- [aria-haspopup](VListProps.md#aria-haspopup)
- [aria-hidden](VListProps.md#aria-hidden)
- [aria-invalid](VListProps.md#aria-invalid)
- [aria-keyshortcuts](VListProps.md#aria-keyshortcuts)
- [aria-label](VListProps.md#aria-label)
- [aria-labelledby](VListProps.md#aria-labelledby)
- [aria-level](VListProps.md#aria-level)
- [aria-live](VListProps.md#aria-live)
- [aria-modal](VListProps.md#aria-modal)
- [aria-multiline](VListProps.md#aria-multiline)
- [aria-multiselectable](VListProps.md#aria-multiselectable)
- [aria-orientation](VListProps.md#aria-orientation)
- [aria-owns](VListProps.md#aria-owns)
- [aria-placeholder](VListProps.md#aria-placeholder)
- [aria-posinset](VListProps.md#aria-posinset)
- [aria-pressed](VListProps.md#aria-pressed)
- [aria-readonly](VListProps.md#aria-readonly)
- [aria-relevant](VListProps.md#aria-relevant)
- [aria-required](VListProps.md#aria-required)
- [aria-roledescription](VListProps.md#aria-roledescription)
- [aria-rowcount](VListProps.md#aria-rowcount)
- [aria-rowindex](VListProps.md#aria-rowindex)
- [aria-rowindextext](VListProps.md#aria-rowindextext)
- [aria-rowspan](VListProps.md#aria-rowspan)
- [aria-selected](VListProps.md#aria-selected)
- [aria-setsize](VListProps.md#aria-setsize)
- [aria-sort](VListProps.md#aria-sort)
- [aria-valuemax](VListProps.md#aria-valuemax)
- [aria-valuemin](VListProps.md#aria-valuemin)
- [aria-valuenow](VListProps.md#aria-valuenow)
- [aria-valuetext](VListProps.md#aria-valuetext)

## Properties

### children

• **children**: `ReactNode`

Elements rendered by this component.

#### Defined in

[src/react/VList.tsx:199](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L199)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

4

#### Defined in

[src/react/VList.tsx:204](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L204)

___

### initialItemSize

• `Optional` **initialItemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/react/VList.tsx:211](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L211)

___

### initialItemCount

• `Optional` **initialItemCount**: `number`

If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.

#### Defined in

[src/react/VList.tsx:215](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L215)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/react/VList.tsx:219](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L219)

___

### mode

• `Optional` **mode**: [`ScrollMode`](../API.md#scrollmode)

Scroll modes that should be set in certain situations.

- `reverse`: This mode will Adjust some styles to be suitable for bottom-to-top scrolling.
- `rtl`: You have to set this mode if you use this component under `direction: rtl` style.

#### Defined in

[src/react/VList.tsx:226](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L226)

___

### element

• `Optional` **element**: `ForwardRefExoticComponent`<[`CustomWindowComponentProps`](CustomWindowComponentProps.md) & `RefAttributes`<`any`\>\>

Customized element type for scrollable element. This element will get [CustomWindowComponentProps](CustomWindowComponentProps.md) as props.

**`Default Value`**

DefaultWindow

#### Defined in

[src/react/VList.tsx:231](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L231)

___

### itemElement

• `Optional` **itemElement**: `CustomItemComponentOrElement`

Customized element type for item element. This element will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

**`Default Value`**

"div"

#### Defined in

[src/react/VList.tsx:236](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L236)

___

### onScroll

• `Optional` **onScroll**: (`offset`: `number`) => `void`

#### Type declaration

▸ (`offset`): `void`

Callback invoked whenever scroll offset changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Current scrollTop or scrollLeft. |

##### Returns

`void`

#### Defined in

[src/react/VList.tsx:241](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L241)

___

### onScrollStop

• `Optional` **onScrollStop**: () => `void`

#### Type declaration

▸ (): `void`

Callback invoked when scrolling stops.

##### Returns

`void`

#### Defined in

[src/react/VList.tsx:245](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L245)

___

### onRangeChange

• `Optional` **onRangeChange**: (`payload`: { `start`: `number` ; `end`: `number` ; `count`: `number`  }) => `void`

#### Type declaration

▸ (`payload`): `void`

Callback invoked when visible items range changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `Object` | - |
| `payload.start` | `number` | The start index of viewable items. |
| `payload.end` | `number` | The end index of viewable items. |
| `payload.count` | `number` | The total count of items. |

##### Returns

`void`

#### Defined in

[src/react/VList.tsx:249](https://github.com/inokawa/virtua/blob/57416e5/src/react/VList.tsx#L249)

___

### className

• `Optional` **className**: `string`

#### Inherited from

WindowComponentAttributes.className

#### Defined in

node_modules/@types/react/index.d.ts:1923

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

WindowComponentAttributes.style

#### Defined in

node_modules/@types/react/index.d.ts:1935

___

### id

• `Optional` **id**: `string`

#### Inherited from

WindowComponentAttributes.id

#### Defined in

node_modules/@types/react/index.d.ts:1929

___

### role

• `Optional` **role**: `AriaRole`

#### Inherited from

WindowComponentAttributes.role

#### Defined in

node_modules/@types/react/index.d.ts:1944

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

WindowComponentAttributes.tabIndex

#### Defined in

node_modules/@types/react/index.d.ts:1936

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

WindowComponentAttributes.aria-activedescendant

#### Defined in

node_modules/@types/react/index.d.ts:1630

___

### aria-atomic

• `Optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

WindowComponentAttributes.aria-atomic

#### Defined in

node_modules/@types/react/index.d.ts:1632

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"list"`` \| ``"none"`` \| ``"both"`` \| ``"inline"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

WindowComponentAttributes.aria-autocomplete

#### Defined in

node_modules/@types/react/index.d.ts:1637

___

### aria-braillelabel

• `Optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

**`See`**

aria-label.

#### Inherited from

WindowComponentAttributes.aria-braillelabel

#### Defined in

node_modules/@types/react/index.d.ts:1643

___

### aria-brailleroledescription

• `Optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

**`See`**

aria-roledescription.

#### Inherited from

WindowComponentAttributes.aria-brailleroledescription

#### Defined in

node_modules/@types/react/index.d.ts:1648

___

### aria-busy

• `Optional` **aria-busy**: `Booleanish`

#### Inherited from

WindowComponentAttributes.aria-busy

#### Defined in

node_modules/@types/react/index.d.ts:1649

___

### aria-checked

• `Optional` **aria-checked**: `boolean` \| ``"mixed"`` \| ``"false"`` \| ``"true"``

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`See`**

 - aria-pressed
 - aria-selected.

#### Inherited from

WindowComponentAttributes.aria-checked

#### Defined in

node_modules/@types/react/index.d.ts:1654

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`See`**

aria-colindex.

#### Inherited from

WindowComponentAttributes.aria-colcount

#### Defined in

node_modules/@types/react/index.d.ts:1659

___

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`See`**

 - aria-colcount
 - aria-colspan.

#### Inherited from

WindowComponentAttributes.aria-colindex

#### Defined in

node_modules/@types/react/index.d.ts:1664

___

### aria-colindextext

• `Optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

**`See`**

aria-rowindextext.

#### Inherited from

WindowComponentAttributes.aria-colindextext

#### Defined in

node_modules/@types/react/index.d.ts:1669

___

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-colindex
 - aria-rowspan.

#### Inherited from

WindowComponentAttributes.aria-colspan

#### Defined in

node_modules/@types/react/index.d.ts:1674

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`See`**

aria-owns.

#### Inherited from

WindowComponentAttributes.aria-controls

#### Defined in

node_modules/@types/react/index.d.ts:1679

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"time"`` \| ``"page"`` \| ``"false"`` \| ``"true"`` \| ``"step"`` \| ``"location"`` \| ``"date"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

WindowComponentAttributes.aria-current

#### Defined in

node_modules/@types/react/index.d.ts:1681

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`See`**

aria-labelledby

#### Inherited from

WindowComponentAttributes.aria-describedby

#### Defined in

node_modules/@types/react/index.d.ts:1686

___

### aria-description

• `Optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

**`See`**

related aria-describedby.

#### Inherited from

WindowComponentAttributes.aria-description

#### Defined in

node_modules/@types/react/index.d.ts:1691

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`See`**

aria-describedby.

#### Inherited from

WindowComponentAttributes.aria-details

#### Defined in

node_modules/@types/react/index.d.ts:1696

___

### aria-disabled

• `Optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`See`**

 - aria-hidden
 - aria-readonly.

#### Inherited from

WindowComponentAttributes.aria-disabled

#### Defined in

node_modules/@types/react/index.d.ts:1701

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"copy"`` \| ``"link"`` \| ``"none"`` \| ``"move"`` \| ``"execute"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

WindowComponentAttributes.aria-dropeffect

#### Defined in

node_modules/@types/react/index.d.ts:1706

___

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`See`**

 - aria-invalid
 - aria-describedby.

#### Inherited from

WindowComponentAttributes.aria-errormessage

#### Defined in

node_modules/@types/react/index.d.ts:1711

___

### aria-expanded

• `Optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

WindowComponentAttributes.aria-expanded

#### Defined in

node_modules/@types/react/index.d.ts:1713

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

WindowComponentAttributes.aria-flowto

#### Defined in

node_modules/@types/react/index.d.ts:1718

___

### aria-grabbed

• `Optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

WindowComponentAttributes.aria-grabbed

#### Defined in

node_modules/@types/react/index.d.ts:1723

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"dialog"`` \| ``"menu"`` \| ``"grid"`` \| ``"listbox"`` \| ``"tree"`` \| ``"false"`` \| ``"true"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

WindowComponentAttributes.aria-haspopup

#### Defined in

node_modules/@types/react/index.d.ts:1725

___

### aria-hidden

• `Optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

**`See`**

aria-disabled.

#### Inherited from

WindowComponentAttributes.aria-hidden

#### Defined in

node_modules/@types/react/index.d.ts:1730

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"false"`` \| ``"true"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`See`**

aria-errormessage.

#### Inherited from

WindowComponentAttributes.aria-invalid

#### Defined in

node_modules/@types/react/index.d.ts:1735

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

WindowComponentAttributes.aria-keyshortcuts

#### Defined in

node_modules/@types/react/index.d.ts:1737

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`See`**

aria-labelledby.

#### Inherited from

WindowComponentAttributes.aria-label

#### Defined in

node_modules/@types/react/index.d.ts:1742

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`See`**

aria-describedby.

#### Inherited from

WindowComponentAttributes.aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:1747

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

WindowComponentAttributes.aria-level

#### Defined in

node_modules/@types/react/index.d.ts:1749

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

WindowComponentAttributes.aria-live

#### Defined in

node_modules/@types/react/index.d.ts:1751

___

### aria-modal

• `Optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

WindowComponentAttributes.aria-modal

#### Defined in

node_modules/@types/react/index.d.ts:1753

___

### aria-multiline

• `Optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

WindowComponentAttributes.aria-multiline

#### Defined in

node_modules/@types/react/index.d.ts:1755

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

WindowComponentAttributes.aria-multiselectable

#### Defined in

node_modules/@types/react/index.d.ts:1757

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

WindowComponentAttributes.aria-orientation

#### Defined in

node_modules/@types/react/index.d.ts:1759

___

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`See`**

aria-controls.

#### Inherited from

WindowComponentAttributes.aria-owns

#### Defined in

node_modules/@types/react/index.d.ts:1765

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

WindowComponentAttributes.aria-placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1770

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-setsize.

#### Inherited from

WindowComponentAttributes.aria-posinset

#### Defined in

node_modules/@types/react/index.d.ts:1775

___

### aria-pressed

• `Optional` **aria-pressed**: `boolean` \| ``"mixed"`` \| ``"false"`` \| ``"true"``

Indicates the current "pressed" state of toggle buttons.

**`See`**

 - aria-checked
 - aria-selected.

#### Inherited from

WindowComponentAttributes.aria-pressed

#### Defined in

node_modules/@types/react/index.d.ts:1780

___

### aria-readonly

• `Optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

**`See`**

aria-disabled.

#### Inherited from

WindowComponentAttributes.aria-readonly

#### Defined in

node_modules/@types/react/index.d.ts:1785

___

### aria-relevant

• `Optional` **aria-relevant**: ``"text"`` \| ``"all"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`See`**

aria-atomic.

#### Inherited from

WindowComponentAttributes.aria-relevant

#### Defined in

node_modules/@types/react/index.d.ts:1790

___

### aria-required

• `Optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

WindowComponentAttributes.aria-required

#### Defined in

node_modules/@types/react/index.d.ts:1792

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

WindowComponentAttributes.aria-roledescription

#### Defined in

node_modules/@types/react/index.d.ts:1794

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`See`**

aria-rowindex.

#### Inherited from

WindowComponentAttributes.aria-rowcount

#### Defined in

node_modules/@types/react/index.d.ts:1799

___

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`See`**

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

WindowComponentAttributes.aria-rowindex

#### Defined in

node_modules/@types/react/index.d.ts:1804

___

### aria-rowindextext

• `Optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

**`See`**

aria-colindextext.

#### Inherited from

WindowComponentAttributes.aria-rowindextext

#### Defined in

node_modules/@types/react/index.d.ts:1809

___

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-rowindex
 - aria-colspan.

#### Inherited from

WindowComponentAttributes.aria-rowspan

#### Defined in

node_modules/@types/react/index.d.ts:1814

___

### aria-selected

• `Optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

**`See`**

 - aria-checked
 - aria-pressed.

#### Inherited from

WindowComponentAttributes.aria-selected

#### Defined in

node_modules/@types/react/index.d.ts:1819

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-posinset.

#### Inherited from

WindowComponentAttributes.aria-setsize

#### Defined in

node_modules/@types/react/index.d.ts:1824

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

WindowComponentAttributes.aria-sort

#### Defined in

node_modules/@types/react/index.d.ts:1826

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

WindowComponentAttributes.aria-valuemax

#### Defined in

node_modules/@types/react/index.d.ts:1828

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

WindowComponentAttributes.aria-valuemin

#### Defined in

node_modules/@types/react/index.d.ts:1830

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`See`**

aria-valuetext.

#### Inherited from

WindowComponentAttributes.aria-valuenow

#### Defined in

node_modules/@types/react/index.d.ts:1835

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

WindowComponentAttributes.aria-valuetext

#### Defined in

node_modules/@types/react/index.d.ts:1837
