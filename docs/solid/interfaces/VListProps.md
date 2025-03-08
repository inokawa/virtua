[**API**](../../API.md)

***

# Interface: VListProps\<T\>

Defined in: [src/solid/VList.tsx:20](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/VList.tsx#L20)

Props of [VList](../functions/VList.md).

## Extends

- `Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"ref"` \| `"data"` \| `"children"` \| `"overscan"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"onScroll"` \| `"onScrollEnd"`\>.`ViewportComponentAttributes`

## Type Parameters

• **T**

## Properties

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L101)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`number`

#### Returns

`Element`

#### Inherited from

`Pick.children`

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:144](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L144)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop, or scrollLeft if horizontal: true.

#### Returns

`void`

#### Inherited from

`Pick.onScroll`

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:131](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L131)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Inherited from

`Pick.shift`

***

### ref()?

> `optional` **ref**: (`handle`?) => `void`

Defined in: [src/solid/Virtualizer.tsx:93](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L93)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Parameters

##### handle?

[`VirtualizerHandle`](VirtualizerHandle.md)

#### Returns

`void`

#### Inherited from

`Pick.ref`

***

### data

> **data**: `T`[]

Defined in: [src/solid/Virtualizer.tsx:97](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L97)

The data items rendered by this component.

#### Inherited from

`Pick.data`

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/solid/Virtualizer.tsx:106](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L106)

Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
4
```

#### Inherited from

`Pick.overscan`

***

### itemSize?

> `optional` **itemSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L127)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:135](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L135)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

***

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:148](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/Virtualizer.tsx#L148)

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

***

### id?

> `optional` **id**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:899

#### Inherited from

`ViewportComponentAttributes.id`

***

### role?

> `optional` **role**: `"grid"` \| `"table"` \| `"none"` \| `"search"` \| `"link"` \| `"article"` \| `"button"` \| `"dialog"` \| `"figure"` \| `"form"` \| `"img"` \| `"main"` \| `"menu"` \| `"menuitem"` \| `"meter"` \| `"option"` \| `"switch"` \| `"row"` \| `"checkbox"` \| `"listbox"` \| `"radio"` \| `"region"` \| `"cell"` \| `"listitem"` \| `"menubar"` \| `"progressbar"` \| `"separator"` \| `"tab"` \| `"tabpanel"` \| `"toolbar"` \| `"tooltip"` \| `"treeitem"` \| `"scrollbar"` \| `"alert"` \| `"alertdialog"` \| `"application"` \| `"banner"` \| `"columnheader"` \| `"combobox"` \| `"complementary"` \| `"contentinfo"` \| `"definition"` \| `"directory"` \| `"document"` \| `"feed"` \| `"gridcell"` \| `"group"` \| `"heading"` \| `"list"` \| `"log"` \| `"marquee"` \| `"math"` \| `"menuitemcheckbox"` \| `"menuitemradio"` \| `"navigation"` \| `"note"` \| `"presentation"` \| `"radiogroup"` \| `"rowgroup"` \| `"rowheader"` \| `"searchbox"` \| `"slider"` \| `"spinbutton"` \| `"status"` \| `"tablist"` \| `"term"` \| `"textbox"` \| `"timer"` \| `"tree"` \| `"treegrid"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:808

#### Inherited from

`ViewportComponentAttributes.role`

***

### tabIndex?

> `optional` **tabIndex**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:939

#### Inherited from

`ViewportComponentAttributes.tabIndex`

***

### onKeyDown?

> `optional` **onKeyDown**: `EventHandlerUnion`\<`HTMLElement`, `KeyboardEvent`, `EventHandler`\<`HTMLElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:255

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

***

### onWheel?

> `optional` **onWheel**: `EventHandlerUnion`\<`HTMLElement`, `WheelEvent`, `EventHandler`\<`HTMLElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:304

#### Inherited from

`ViewportComponentAttributes.onWheel`

***

### class?

> `optional` **class**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:893

#### Inherited from

`ViewportComponentAttributes.class`

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:533

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:538

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"inline"` \| `"none"` \| `"both"` \| `"list"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:544

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-busy?

> `optional` **aria-busy**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:549

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:555

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:561

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:568

Defines an element's column index or position with respect to the total number of columns
within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colspan?

> `optional` **aria-colspan**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:575

Defines the number of columns spanned by a cell or gridcell within a table, grid, or
treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:582

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"page"` \| `"false"` \| `"true"` \| `"location"` \| `"date"` \| `"step"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:587

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:602

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-details?

> `optional` **aria-details**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:608

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:615

Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"copy"` \| `"none"` \| `"link"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:622

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:628

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:633

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:639

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:645

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"false"` \| `"true"` \| `"tree"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:650

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:665

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"false"` \| `"true"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:671

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:676

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:682

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:688

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:690

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:695

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:697

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:699

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:704

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:706

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:714

Identifies an element (or elements) in order to define a visual, functional, or contextual
parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:720

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:727

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:733

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:739

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:746

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:759

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:761

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:767

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:774

Defines an element's row index or position with respect to the total number of rows within a
table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowspan?

> `optional` **aria-rowspan**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:780

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:786

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:793

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:795

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:797

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:799

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:805

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:807

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: [src/solid/types.ts:7](https://github.com/inokawa/virtua/blob/0ce0cc2cff2931917967ae53679917fd6b9407b9/src/solid/types.ts#L7)

#### Inherited from

`ViewportComponentAttributes.style`
