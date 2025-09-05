[**API**](../../API.md)

***

# Interface: VListProps\<T\>

Defined in: [src/solid/VList.tsx:20](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/VList.tsx#L20)

Props of [VList](../functions/VList.md).

## Extends

- `Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"ref"` \| `"data"` \| `"children"` \| `"overscan"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"cache"` \| `"item"` \| `"onScroll"` \| `"onScrollEnd"` \| `"keepMounted"`\>.[`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md)

## Type Parameters

### T

`T`

## Properties

### children()

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:109](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L109)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`Accessor`\<`number`\>

#### Returns

`Element`

#### Inherited from

`Pick.children`

***

### onScroll()?

> `optional` **onScroll**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:162](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L162)

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

### onScrollEnd()?

> `optional` **onScrollEnd**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:166](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L166)

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

***

### shift?

> `optional` **shift**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:139](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L139)

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Inherited from

`Pick.shift`

***

### ref()?

> `optional` **ref**: (`handle?`) => `void`

Defined in: [src/solid/Virtualizer.tsx:101](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L101)

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

Defined in: [src/solid/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L105)

The data items rendered by this component.

#### Inherited from

`Pick.data`

***

### overscan?

> `optional` **overscan**: `number`

Defined in: [src/solid/Virtualizer.tsx:114](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L114)

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

Defined in: [src/solid/Virtualizer.tsx:135](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L135)

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

***

### horizontal?

> `optional` **horizontal**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:143](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L143)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

***

### keepMounted?

> `optional` **keepMounted**: `number`[]

Defined in: [src/solid/Virtualizer.tsx:147](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L147)

List of indexes that should be always mounted, even when off screen.

#### Inherited from

`Pick.keepMounted`

***

### cache?

> `optional` **cache**: [`CacheSnapshot`](../../react/interfaces/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:153](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L153)

You can restore cache by passing a [CacheSnapshot](../../react/interfaces/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Inherited from

`Pick.cache`

***

### item?

> `optional` **item**: `ValidComponent`

Defined in: [src/solid/Virtualizer.tsx:124](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/Virtualizer.tsx#L124)

Component or element type for item element.

#### Default Value

```ts
"div"
```

#### Inherited from

`Pick.item`

***

### id?

> `optional` **id**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1068

#### Inherited from

`ViewportComponentAttributes.id`

***

### role?

> `optional` **role**: `"grid"` \| `"table"` \| `"none"` \| `"search"` \| `"link"` \| `"article"` \| `"button"` \| `"dialog"` \| `"figure"` \| `"form"` \| `"img"` \| `"main"` \| `"menu"` \| `"menuitem"` \| `"meter"` \| `"option"` \| `"switch"` \| `"row"` \| `"checkbox"` \| `"listbox"` \| `"radio"` \| `"region"` \| `"cell"` \| `"listitem"` \| `"menubar"` \| `"progressbar"` \| `"separator"` \| `"tab"` \| `"tabpanel"` \| `"toolbar"` \| `"tooltip"` \| `"treeitem"` \| `"scrollbar"` \| `"alert"` \| `"alertdialog"` \| `"application"` \| `"banner"` \| `"columnheader"` \| `"combobox"` \| `"complementary"` \| `"contentinfo"` \| `"definition"` \| `"directory"` \| `"document"` \| `"feed"` \| `"gridcell"` \| `"group"` \| `"heading"` \| `"list"` \| `"log"` \| `"marquee"` \| `"math"` \| `"menuitemcheckbox"` \| `"menuitemradio"` \| `"navigation"` \| `"note"` \| `"presentation"` \| `"radiogroup"` \| `"rowgroup"` \| `"rowheader"` \| `"searchbox"` \| `"slider"` \| `"spinbutton"` \| `"status"` \| `"tablist"` \| `"term"` \| `"textbox"` \| `"timer"` \| `"tree"` \| `"treegrid"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:972

#### Inherited from

`ViewportComponentAttributes.role`

***

### tabIndex?

> `optional` **tabIndex**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1122

#### Inherited from

`ViewportComponentAttributes.tabIndex`

***

### onKeyDown?

> `optional` **onKeyDown**: `EventHandlerUnion`\<`HTMLElement`, `KeyboardEvent`, `EventHandler`\<`HTMLElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:322

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

***

### onWheel?

> `optional` **onWheel**: `EventHandlerUnion`\<`HTMLElement`, `WheelEvent`, `EventHandler`\<`HTMLElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:376

#### Inherited from

`ViewportComponentAttributes.onWheel`

***

### class?

> `optional` **class**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1059

#### Inherited from

`ViewportComponentAttributes.class`

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:666

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:671

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:678

Similar to the global aria-label. Defines a string value that labels the current element,
which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`ViewportComponentAttributes.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:692

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

`ViewportComponentAttributes.aria-brailleroledescription`

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"inline"` \| `"none"` \| `"both"` \| `"list"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:698

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-busy?

> `optional` **aria-busy**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:703

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:709

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:715

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:722

Defines an element's column index or position with respect to the total number of columns
within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:724

Defines a human-readable text alternative of the numeric aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:731

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

Defined in: node\_modules/solid-js/types/jsx.d.ts:738

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"page"` \| `"false"` \| `"true"` \| `"location"` \| `"step"` \| `"date"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:743

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:758

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-description?

> `optional` **aria-description**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:764

Defines a string value that describes or annotates the current element.

#### See

aria-describedby

#### Inherited from

`ViewportComponentAttributes.aria-description`

***

### aria-details?

> `optional` **aria-details**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:770

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:777

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

Defined in: node\_modules/solid-js/types/jsx.d.ts:784

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:790

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:795

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:801

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:807

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"false"` \| `"true"` \| `"tree"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:812

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:827

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"false"` \| `"true"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:833

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:838

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:844

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:850

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:852

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:857

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:859

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:861

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:866

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:868

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:876

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

Defined in: node\_modules/solid-js/types/jsx.d.ts:882

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:889

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:895

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:901

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:908

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:921

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:923

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:929

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:936

Defines an element's row index or position with respect to the total number of rows within a
table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:938

Defines a human-readable text alternative of aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:944

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected**: `boolean` \| `"false"` \| `"true"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:950

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:957

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:959

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:961

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:963

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:969

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:971

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: [src/solid/types.ts:7](https://github.com/inokawa/virtua/blob/05639da613faa73c808608926743fef04c3d8529/src/solid/types.ts#L7)

#### Inherited from

`ViewportComponentAttributes.style`
