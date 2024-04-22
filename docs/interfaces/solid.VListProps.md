# Interface: VListProps\<T\>

[solid](../modules/solid.md).VListProps

Props of [VList](../modules/solid.md#vlist).

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Pick`\<[`VirtualizerProps`](solid.VirtualizerProps.md)\<`T`\>, ``"ref"`` \| ``"data"`` \| ``"children"`` \| ``"overscan"`` \| ``"itemSize"`` \| ``"shift"`` \| ``"horizontal"`` \| ``"onScroll"`` \| ``"onScrollEnd"`` \| ``"onRangeChange"``\>

- `ViewportComponentAttributes`

  ↳ **`VListProps`**

## Table of contents

### Properties

- [children](solid.VListProps.md#children)
- [onScroll](solid.VListProps.md#onscroll)
- [ref](solid.VListProps.md#ref)
- [shift](solid.VListProps.md#shift)
- [data](solid.VListProps.md#data)
- [overscan](solid.VListProps.md#overscan)
- [itemSize](solid.VListProps.md#itemsize)
- [horizontal](solid.VListProps.md#horizontal)
- [onScrollEnd](solid.VListProps.md#onscrollend)
- [onRangeChange](solid.VListProps.md#onrangechange)
- [id](solid.VListProps.md#id)
- [role](solid.VListProps.md#role)
- [tabIndex](solid.VListProps.md#tabindex)
- [onKeyDown](solid.VListProps.md#onkeydown)
- [class](solid.VListProps.md#class)
- [aria-activedescendant](solid.VListProps.md#aria-activedescendant)
- [aria-atomic](solid.VListProps.md#aria-atomic)
- [aria-autocomplete](solid.VListProps.md#aria-autocomplete)
- [aria-busy](solid.VListProps.md#aria-busy)
- [aria-checked](solid.VListProps.md#aria-checked)
- [aria-colcount](solid.VListProps.md#aria-colcount)
- [aria-colindex](solid.VListProps.md#aria-colindex)
- [aria-colspan](solid.VListProps.md#aria-colspan)
- [aria-controls](solid.VListProps.md#aria-controls)
- [aria-current](solid.VListProps.md#aria-current)
- [aria-describedby](solid.VListProps.md#aria-describedby)
- [aria-details](solid.VListProps.md#aria-details)
- [aria-disabled](solid.VListProps.md#aria-disabled)
- [aria-dropeffect](solid.VListProps.md#aria-dropeffect)
- [aria-errormessage](solid.VListProps.md#aria-errormessage)
- [aria-expanded](solid.VListProps.md#aria-expanded)
- [aria-flowto](solid.VListProps.md#aria-flowto)
- [aria-grabbed](solid.VListProps.md#aria-grabbed)
- [aria-haspopup](solid.VListProps.md#aria-haspopup)
- [aria-hidden](solid.VListProps.md#aria-hidden)
- [aria-invalid](solid.VListProps.md#aria-invalid)
- [aria-keyshortcuts](solid.VListProps.md#aria-keyshortcuts)
- [aria-label](solid.VListProps.md#aria-label)
- [aria-labelledby](solid.VListProps.md#aria-labelledby)
- [aria-level](solid.VListProps.md#aria-level)
- [aria-live](solid.VListProps.md#aria-live)
- [aria-modal](solid.VListProps.md#aria-modal)
- [aria-multiline](solid.VListProps.md#aria-multiline)
- [aria-multiselectable](solid.VListProps.md#aria-multiselectable)
- [aria-orientation](solid.VListProps.md#aria-orientation)
- [aria-owns](solid.VListProps.md#aria-owns)
- [aria-placeholder](solid.VListProps.md#aria-placeholder)
- [aria-posinset](solid.VListProps.md#aria-posinset)
- [aria-pressed](solid.VListProps.md#aria-pressed)
- [aria-readonly](solid.VListProps.md#aria-readonly)
- [aria-relevant](solid.VListProps.md#aria-relevant)
- [aria-required](solid.VListProps.md#aria-required)
- [aria-roledescription](solid.VListProps.md#aria-roledescription)
- [aria-rowcount](solid.VListProps.md#aria-rowcount)
- [aria-rowindex](solid.VListProps.md#aria-rowindex)
- [aria-rowspan](solid.VListProps.md#aria-rowspan)
- [aria-selected](solid.VListProps.md#aria-selected)
- [aria-setsize](solid.VListProps.md#aria-setsize)
- [aria-sort](solid.VListProps.md#aria-sort)
- [aria-valuemax](solid.VListProps.md#aria-valuemax)
- [aria-valuemin](solid.VListProps.md#aria-valuemin)
- [aria-valuenow](solid.VListProps.md#aria-valuenow)
- [aria-valuetext](solid.VListProps.md#aria-valuetext)
- [style](solid.VListProps.md#style)

## Properties

### children

• **children**: (`data`: `T`, `index`: `number`) => `Element`

The elements renderer function.

#### Type declaration

▸ (`data`, `index`): `Element`

The elements renderer function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `index` | `number` |

##### Returns

`Element`

#### Inherited from

Pick.children

#### Defined in

[src/solid/Virtualizer.tsx:86](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L86)

___

### onScroll

• `Optional` **onScroll**: (`offset`: `number`) => `void`

Callback invoked whenever scroll offset changes.

**`Param`**

Current scrollTop or scrollLeft.

#### Type declaration

▸ (`offset`): `void`

Callback invoked whenever scroll offset changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Current scrollTop or scrollLeft. |

##### Returns

`void`

#### Inherited from

Pick.onScroll

#### Defined in

[src/solid/Virtualizer.tsx:111](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L111)

___

### ref

• `Optional` **ref**: (`handle?`: [`VirtualizerHandle`](solid.VirtualizerHandle.md)) => `void`

Get reference to [VirtualizerHandle](solid.VirtualizerHandle.md).

#### Type declaration

▸ (`handle?`): `void`

Get reference to [VirtualizerHandle](solid.VirtualizerHandle.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `handle?` | [`VirtualizerHandle`](solid.VirtualizerHandle.md) |

##### Returns

`void`

#### Inherited from

Pick.ref

#### Defined in

[src/solid/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L78)

___

### shift

• `Optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Inherited from

Pick.shift

#### Defined in

[src/solid/Virtualizer.tsx:102](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L102)

___

### data

• **data**: `T`[]

The data items rendered by this component.

#### Inherited from

Pick.data

#### Defined in

[src/solid/Virtualizer.tsx:82](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L82)

___

### overscan

• `Optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Inherited from

Pick.overscan

#### Defined in

[src/solid/Virtualizer.tsx:91](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L91)

___

### itemSize

• `Optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

Pick.itemSize

#### Defined in

[src/solid/Virtualizer.tsx:98](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L98)

___

### horizontal

• `Optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

Pick.horizontal

#### Defined in

[src/solid/Virtualizer.tsx:106](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L106)

___

### onScrollEnd

• `Optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Type declaration

▸ (): `void`

Callback invoked when scrolling stops.

##### Returns

`void`

#### Inherited from

Pick.onScrollEnd

#### Defined in

[src/solid/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L115)

___

### onRangeChange

• `Optional` **onRangeChange**: (`startIndex`: `number`, `endIndex`: `number`) => `void`

Callback invoked when visible items range changes.

#### Type declaration

▸ (`startIndex`, `endIndex`): `void`

Callback invoked when visible items range changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | The start index of viewable items. |
| `endIndex` | `number` | The end index of viewable items. |

##### Returns

`void`

#### Inherited from

Pick.onRangeChange

#### Defined in

[src/solid/Virtualizer.tsx:119](https://github.com/inokawa/virtua/blob/86627b53/src/solid/Virtualizer.tsx#L119)

___

### id

• `Optional` **id**: `string`

#### Inherited from

ViewportComponentAttributes.id

#### Defined in

node_modules/solid-js/types/jsx.d.ts:724

___

### role

• `Optional` **role**: ``"grid"`` \| ``"table"`` \| ``"none"`` \| ``"search"`` \| ``"link"`` \| ``"article"`` \| ``"button"`` \| ``"dialog"`` \| ``"figure"`` \| ``"form"`` \| ``"img"`` \| ``"main"`` \| ``"menu"`` \| ``"menuitem"`` \| ``"meter"`` \| ``"option"`` \| ``"switch"`` \| ``"row"`` \| ``"checkbox"`` \| ``"listbox"`` \| ``"radio"`` \| ``"region"`` \| ``"cell"`` \| ``"listitem"`` \| ``"menubar"`` \| ``"progressbar"`` \| ``"separator"`` \| ``"tab"`` \| ``"tabpanel"`` \| ``"toolbar"`` \| ``"tooltip"`` \| ``"treeitem"`` \| ``"scrollbar"`` \| ``"alert"`` \| ``"alertdialog"`` \| ``"application"`` \| ``"banner"`` \| ``"columnheader"`` \| ``"combobox"`` \| ``"complementary"`` \| ``"contentinfo"`` \| ``"definition"`` \| ``"directory"`` \| ``"document"`` \| ``"feed"`` \| ``"gridcell"`` \| ``"group"`` \| ``"heading"`` \| ``"list"`` \| ``"log"`` \| ``"marquee"`` \| ``"math"`` \| ``"menuitemcheckbox"`` \| ``"menuitemradio"`` \| ``"navigation"`` \| ``"note"`` \| ``"presentation"`` \| ``"radiogroup"`` \| ``"rowgroup"`` \| ``"rowheader"`` \| ``"searchbox"`` \| ``"slider"`` \| ``"spinbutton"`` \| ``"status"`` \| ``"tablist"`` \| ``"term"`` \| ``"textbox"`` \| ``"timer"`` \| ``"tree"`` \| ``"treegrid"``

#### Inherited from

ViewportComponentAttributes.role

#### Defined in

node_modules/solid-js/types/jsx.d.ts:634

node_modules/solid-js/types/jsx.d.ts:634

___

### tabIndex

• `Optional` **tabIndex**: `string` \| `number`

#### Inherited from

ViewportComponentAttributes.tabIndex

#### Defined in

node_modules/solid-js/types/jsx.d.ts:754

___

### onKeyDown

• `Optional` **onKeyDown**: `EventHandlerUnion`\<`HTMLElement`, `KeyboardEvent`\>

#### Inherited from

ViewportComponentAttributes.onKeyDown

#### Defined in

node_modules/solid-js/types/jsx.d.ts:246

___

### class

• `Optional` **class**: `string`

#### Inherited from

ViewportComponentAttributes.class

#### Defined in

node_modules/solid-js/types/jsx.d.ts:718

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

ViewportComponentAttributes.aria-activedescendant

#### Defined in

node_modules/solid-js/types/jsx.d.ts:441

___

### aria-atomic

• `Optional` **aria-atomic**: `boolean` \| ``"false"`` \| ``"true"``

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

ViewportComponentAttributes.aria-atomic

#### Defined in

node_modules/solid-js/types/jsx.d.ts:443

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"inline"`` \| ``"none"`` \| ``"both"`` \| ``"list"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

ViewportComponentAttributes.aria-autocomplete

#### Defined in

node_modules/solid-js/types/jsx.d.ts:448

___

### aria-busy

• `Optional` **aria-busy**: `boolean` \| ``"false"`` \| ``"true"``

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

ViewportComponentAttributes.aria-busy

#### Defined in

node_modules/solid-js/types/jsx.d.ts:450

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

node_modules/solid-js/types/jsx.d.ts:455

___

### aria-colcount

• `Optional` **aria-colcount**: `string` \| `number`

Defines the total number of columns in a table, grid, or treegrid.

**`See`**

aria-colindex.

#### Inherited from

ViewportComponentAttributes.aria-colcount

#### Defined in

node_modules/solid-js/types/jsx.d.ts:460

___

### aria-colindex

• `Optional` **aria-colindex**: `string` \| `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`See`**

 - aria-colcount
 - aria-colspan.

#### Inherited from

ViewportComponentAttributes.aria-colindex

#### Defined in

node_modules/solid-js/types/jsx.d.ts:465

___

### aria-colspan

• `Optional` **aria-colspan**: `string` \| `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-colindex
 - aria-rowspan.

#### Inherited from

ViewportComponentAttributes.aria-colspan

#### Defined in

node_modules/solid-js/types/jsx.d.ts:470

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`See`**

aria-owns.

#### Inherited from

ViewportComponentAttributes.aria-controls

#### Defined in

node_modules/solid-js/types/jsx.d.ts:475

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"time"`` \| ``"page"`` \| ``"false"`` \| ``"true"`` \| ``"location"`` \| ``"step"`` \| ``"date"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

ViewportComponentAttributes.aria-current

#### Defined in

node_modules/solid-js/types/jsx.d.ts:477

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`See`**

aria-labelledby

#### Inherited from

ViewportComponentAttributes.aria-describedby

#### Defined in

node_modules/solid-js/types/jsx.d.ts:482

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`See`**

aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-details

#### Defined in

node_modules/solid-js/types/jsx.d.ts:487

___

### aria-disabled

• `Optional` **aria-disabled**: `boolean` \| ``"false"`` \| ``"true"``

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`See`**

 - aria-hidden
 - aria-readonly.

#### Inherited from

ViewportComponentAttributes.aria-disabled

#### Defined in

node_modules/solid-js/types/jsx.d.ts:492

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"copy"`` \| ``"none"`` \| ``"link"`` \| ``"move"`` \| ``"execute"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

ViewportComponentAttributes.aria-dropeffect

#### Defined in

node_modules/solid-js/types/jsx.d.ts:497

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

node_modules/solid-js/types/jsx.d.ts:502

___

### aria-expanded

• `Optional` **aria-expanded**: `boolean` \| ``"false"`` \| ``"true"``

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

ViewportComponentAttributes.aria-expanded

#### Defined in

node_modules/solid-js/types/jsx.d.ts:504

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

ViewportComponentAttributes.aria-flowto

#### Defined in

node_modules/solid-js/types/jsx.d.ts:509

___

### aria-grabbed

• `Optional` **aria-grabbed**: `boolean` \| ``"false"`` \| ``"true"``

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`Deprecated`**

in ARIA 1.1

#### Inherited from

ViewportComponentAttributes.aria-grabbed

#### Defined in

node_modules/solid-js/types/jsx.d.ts:514

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"grid"`` \| ``"dialog"`` \| ``"menu"`` \| ``"listbox"`` \| ``"false"`` \| ``"true"`` \| ``"tree"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

ViewportComponentAttributes.aria-haspopup

#### Defined in

node_modules/solid-js/types/jsx.d.ts:516

___

### aria-hidden

• `Optional` **aria-hidden**: `boolean` \| ``"false"`` \| ``"true"``

Indicates whether the element is exposed to an accessibility API.

**`See`**

aria-disabled.

#### Inherited from

ViewportComponentAttributes.aria-hidden

#### Defined in

node_modules/solid-js/types/jsx.d.ts:521

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"false"`` \| ``"true"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`See`**

aria-errormessage.

#### Inherited from

ViewportComponentAttributes.aria-invalid

#### Defined in

node_modules/solid-js/types/jsx.d.ts:526

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

ViewportComponentAttributes.aria-keyshortcuts

#### Defined in

node_modules/solid-js/types/jsx.d.ts:528

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`See`**

aria-labelledby.

#### Inherited from

ViewportComponentAttributes.aria-label

#### Defined in

node_modules/solid-js/types/jsx.d.ts:533

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`See`**

aria-describedby.

#### Inherited from

ViewportComponentAttributes.aria-labelledby

#### Defined in

node_modules/solid-js/types/jsx.d.ts:538

___

### aria-level

• `Optional` **aria-level**: `string` \| `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

ViewportComponentAttributes.aria-level

#### Defined in

node_modules/solid-js/types/jsx.d.ts:540

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

ViewportComponentAttributes.aria-live

#### Defined in

node_modules/solid-js/types/jsx.d.ts:542

___

### aria-modal

• `Optional` **aria-modal**: `boolean` \| ``"false"`` \| ``"true"``

Indicates whether an element is modal when displayed.

#### Inherited from

ViewportComponentAttributes.aria-modal

#### Defined in

node_modules/solid-js/types/jsx.d.ts:544

___

### aria-multiline

• `Optional` **aria-multiline**: `boolean` \| ``"false"`` \| ``"true"``

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

ViewportComponentAttributes.aria-multiline

#### Defined in

node_modules/solid-js/types/jsx.d.ts:546

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: `boolean` \| ``"false"`` \| ``"true"``

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

ViewportComponentAttributes.aria-multiselectable

#### Defined in

node_modules/solid-js/types/jsx.d.ts:548

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

ViewportComponentAttributes.aria-orientation

#### Defined in

node_modules/solid-js/types/jsx.d.ts:550

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

node_modules/solid-js/types/jsx.d.ts:556

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

ViewportComponentAttributes.aria-placeholder

#### Defined in

node_modules/solid-js/types/jsx.d.ts:561

___

### aria-posinset

• `Optional` **aria-posinset**: `string` \| `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-setsize.

#### Inherited from

ViewportComponentAttributes.aria-posinset

#### Defined in

node_modules/solid-js/types/jsx.d.ts:566

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

node_modules/solid-js/types/jsx.d.ts:571

___

### aria-readonly

• `Optional` **aria-readonly**: `boolean` \| ``"false"`` \| ``"true"``

Indicates that the element is not editable, but is otherwise operable.

**`See`**

aria-disabled.

#### Inherited from

ViewportComponentAttributes.aria-readonly

#### Defined in

node_modules/solid-js/types/jsx.d.ts:576

___

### aria-relevant

• `Optional` **aria-relevant**: ``"text"`` \| ``"all"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`See`**

aria-atomic.

#### Inherited from

ViewportComponentAttributes.aria-relevant

#### Defined in

node_modules/solid-js/types/jsx.d.ts:581

___

### aria-required

• `Optional` **aria-required**: `boolean` \| ``"false"`` \| ``"true"``

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

ViewportComponentAttributes.aria-required

#### Defined in

node_modules/solid-js/types/jsx.d.ts:593

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

ViewportComponentAttributes.aria-roledescription

#### Defined in

node_modules/solid-js/types/jsx.d.ts:595

___

### aria-rowcount

• `Optional` **aria-rowcount**: `string` \| `number`

Defines the total number of rows in a table, grid, or treegrid.

**`See`**

aria-rowindex.

#### Inherited from

ViewportComponentAttributes.aria-rowcount

#### Defined in

node_modules/solid-js/types/jsx.d.ts:600

___

### aria-rowindex

• `Optional` **aria-rowindex**: `string` \| `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`See`**

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

ViewportComponentAttributes.aria-rowindex

#### Defined in

node_modules/solid-js/types/jsx.d.ts:605

___

### aria-rowspan

• `Optional` **aria-rowspan**: `string` \| `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`See`**

 - aria-rowindex
 - aria-colspan.

#### Inherited from

ViewportComponentAttributes.aria-rowspan

#### Defined in

node_modules/solid-js/types/jsx.d.ts:610

___

### aria-selected

• `Optional` **aria-selected**: `boolean` \| ``"false"`` \| ``"true"``

Indicates the current "selected" state of various widgets.

**`See`**

 - aria-checked
 - aria-pressed.

#### Inherited from

ViewportComponentAttributes.aria-selected

#### Defined in

node_modules/solid-js/types/jsx.d.ts:615

___

### aria-setsize

• `Optional` **aria-setsize**: `string` \| `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`See`**

aria-posinset.

#### Inherited from

ViewportComponentAttributes.aria-setsize

#### Defined in

node_modules/solid-js/types/jsx.d.ts:620

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

ViewportComponentAttributes.aria-sort

#### Defined in

node_modules/solid-js/types/jsx.d.ts:622

___

### aria-valuemax

• `Optional` **aria-valuemax**: `string` \| `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuemax

#### Defined in

node_modules/solid-js/types/jsx.d.ts:624

___

### aria-valuemin

• `Optional` **aria-valuemin**: `string` \| `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuemin

#### Defined in

node_modules/solid-js/types/jsx.d.ts:626

___

### aria-valuenow

• `Optional` **aria-valuenow**: `string` \| `number`

Defines the current value for a range widget.

**`See`**

aria-valuetext.

#### Inherited from

ViewportComponentAttributes.aria-valuenow

#### Defined in

node_modules/solid-js/types/jsx.d.ts:631

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

ViewportComponentAttributes.aria-valuetext

#### Defined in

node_modules/solid-js/types/jsx.d.ts:633

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

ViewportComponentAttributes.style

#### Defined in

[src/solid/types.ts:7](https://github.com/inokawa/virtua/blob/86627b53/src/solid/types.ts#L7)
