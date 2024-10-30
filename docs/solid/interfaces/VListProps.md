[**API**](../../API.md) • **Docs**

***

# Interface: VListProps\<T\>

Props of [VList](../functions/VList.md).

## Extends

- `Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"ref"` \| `"data"` \| `"children"` \| `"overscan"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"onScroll"` \| `"onScrollEnd"` \| `"onRangeChange"`\>.`ViewportComponentAttributes`

## Type Parameters

• **T**

## Properties

### children()

> **children**: (`data`, `index`) => `Element`

The elements renderer function.

#### Parameters

• **data**: `T`

• **index**: `number`

#### Returns

`Element`

#### Inherited from

`Pick.children`

#### Defined in

[src/solid/Virtualizer.tsx:89](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L89)

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Callback invoked whenever scroll offset changes.

#### Parameters

• **offset**: `number`

Current scrollTop or scrollLeft.

#### Returns

`void`

#### Inherited from

`Pick.onScroll`

#### Defined in

[src/solid/Virtualizer.tsx:132](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L132)

***

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

• **handle?**: [`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

#### Inherited from

`Pick.ref`

#### Defined in

[src/solid/Virtualizer.tsx:81](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L81)

***

### shift?

> `optional` **shift**: `boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Inherited from

`Pick.shift`

#### Defined in

[src/solid/Virtualizer.tsx:119](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L119)

***

### data

> **data**: `T`[]

The data items rendered by this component.

#### Inherited from

`Pick.data`

#### Defined in

[src/solid/Virtualizer.tsx:85](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L85)

***

### overscan?

> `optional` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Inherited from

`Pick.overscan`

#### Defined in

[src/solid/Virtualizer.tsx:94](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L94)

***

### itemSize?

> `optional` **itemSize**: `number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

#### Defined in

[src/solid/Virtualizer.tsx:115](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L115)

***

### horizontal?

> `optional` **horizontal**: `boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

#### Defined in

[src/solid/Virtualizer.tsx:123](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L123)

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

#### Defined in

[src/solid/Virtualizer.tsx:136](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L136)

***

### onRangeChange()?

> `optional` **onRangeChange**: (`startIndex`, `endIndex`) => `void`

Callback invoked when visible items range changes.

#### Parameters

• **startIndex**: `number`

The start index of viewable items.

• **endIndex**: `number`

The end index of viewable items.

#### Returns

`void`

#### Inherited from

`Pick.onRangeChange`

#### Defined in

[src/solid/Virtualizer.tsx:140](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/Virtualizer.tsx#L140)

***

### id?

> `optional` **id**: `string`

#### Inherited from

`ViewportComponentAttributes.id`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:899

***

### role?

> `optional` **role**: `"grid"` \| `"table"` \| `"none"` \| `"search"` \| `"link"` \| `"article"` \| `"button"` \| `"dialog"` \| `"figure"` \| `"form"` \| `"img"` \| `"main"` \| `"menu"` \| `"menuitem"` \| `"meter"` \| `"option"` \| `"switch"` \| `"row"` \| `"checkbox"` \| `"listbox"` \| `"radio"` \| `"region"` \| `"cell"` \| `"listitem"` \| `"menubar"` \| `"progressbar"` \| `"separator"` \| `"tab"` \| `"tabpanel"` \| `"toolbar"` \| `"tooltip"` \| `"treeitem"` \| `"scrollbar"` \| `"alert"` \| `"alertdialog"` \| `"application"` \| `"banner"` \| `"columnheader"` \| `"combobox"` \| `"complementary"` \| `"contentinfo"` \| `"definition"` \| `"directory"` \| `"document"` \| `"feed"` \| `"gridcell"` \| `"group"` \| `"heading"` \| `"list"` \| `"log"` \| `"marquee"` \| `"math"` \| `"menuitemcheckbox"` \| `"menuitemradio"` \| `"navigation"` \| `"note"` \| `"presentation"` \| `"radiogroup"` \| `"rowgroup"` \| `"rowheader"` \| `"searchbox"` \| `"slider"` \| `"spinbutton"` \| `"status"` \| `"tablist"` \| `"term"` \| `"textbox"` \| `"timer"` \| `"tree"` \| `"treegrid"`

#### Inherited from

`ViewportComponentAttributes.role`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:808

***

### tabIndex?

> `optional` **tabIndex**: `string` \| `number`

#### Inherited from

`ViewportComponentAttributes.tabIndex`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:939

***

### onKeyDown?

> `optional` **onKeyDown**: `EventHandlerUnion`\<`HTMLElement`, `KeyboardEvent`, `EventHandler`\<`HTMLElement`, `KeyboardEvent`\>\>

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:255

***

### onWheel?

> `optional` **onWheel**: `EventHandlerUnion`\<`HTMLElement`, `WheelEvent`, `EventHandler`\<`HTMLElement`, `WheelEvent`\>\>

#### Inherited from

`ViewportComponentAttributes.onWheel`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:304

***

### class?

> `optional` **class**: `string`

#### Inherited from

`ViewportComponentAttributes.class`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:893

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:533

***

### aria-atomic?

> `optional` **aria-atomic**: `boolean` \| `"false"` \| `"true"`

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:538

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"inline"` \| `"none"` \| `"both"` \| `"list"`

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:544

***

### aria-busy?

> `optional` **aria-busy**: `boolean` \| `"false"` \| `"true"`

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

`ViewportComponentAttributes.aria-busy`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:549

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

node\_modules/solid-js/types/jsx.d.ts:555

***

### aria-colcount?

> `optional` **aria-colcount**: `string` \| `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:561

***

### aria-colindex?

> `optional` **aria-colindex**: `string` \| `number`

Defines an element's column index or position with respect to the total number of columns
within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:568

***

### aria-colspan?

> `optional` **aria-colspan**: `string` \| `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or
treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:575

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:582

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"page"` \| `"false"` \| `"true"` \| `"location"` \| `"date"` \| `"step"`

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:587

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:602

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:608

***

### aria-disabled?

> `optional` **aria-disabled**: `boolean` \| `"false"` \| `"true"`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:615

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"copy"` \| `"none"` \| `"link"` \| `"move"` \| `"execute"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:622

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

node\_modules/solid-js/types/jsx.d.ts:628

***

### aria-expanded?

> `optional` **aria-expanded**: `boolean` \| `"false"` \| `"true"`

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:633

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:639

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `boolean` \| `"false"` \| `"true"`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:645

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"false"` \| `"true"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:650

***

### aria-hidden?

> `optional` **aria-hidden**: `boolean` \| `"false"` \| `"true"`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:665

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"false"` \| `"true"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:671

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:676

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:682

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:688

***

### aria-level?

> `optional` **aria-level**: `string` \| `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:690

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:695

***

### aria-modal?

> `optional` **aria-modal**: `boolean` \| `"false"` \| `"true"`

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:697

***

### aria-multiline?

> `optional` **aria-multiline**: `boolean` \| `"false"` \| `"true"`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:699

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `boolean` \| `"false"` \| `"true"`

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:704

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:706

***

### aria-owns?

> `optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual
parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:714

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:720

***

### aria-posinset?

> `optional` **aria-posinset**: `string` \| `number`

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:727

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

node\_modules/solid-js/types/jsx.d.ts:733

***

### aria-readonly?

> `optional` **aria-readonly**: `boolean` \| `"false"` \| `"true"`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:739

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:746

***

### aria-required?

> `optional` **aria-required**: `boolean` \| `"false"` \| `"true"`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:759

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:761

***

### aria-rowcount?

> `optional` **aria-rowcount**: `string` \| `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:767

***

### aria-rowindex?

> `optional` **aria-rowindex**: `string` \| `number`

Defines an element's row index or position with respect to the total number of rows within a
table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:774

***

### aria-rowspan?

> `optional` **aria-rowspan**: `string` \| `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:780

***

### aria-selected?

> `optional` **aria-selected**: `boolean` \| `"false"` \| `"true"`

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:786

***

### aria-setsize?

> `optional` **aria-setsize**: `string` \| `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:793

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:795

***

### aria-valuemax?

> `optional` **aria-valuemax**: `string` \| `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:797

***

### aria-valuemin?

> `optional` **aria-valuemin**: `string` \| `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:799

***

### aria-valuenow?

> `optional` **aria-valuenow**: `string` \| `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:805

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

#### Defined in

node\_modules/solid-js/types/jsx.d.ts:807

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`ViewportComponentAttributes.style`

#### Defined in

[src/solid/types.ts:7](https://github.com/inokawa/virtua/blob/08d8d51c9ef9e4787fdb60c111e66e6fda55b507/src/solid/types.ts#L7)
