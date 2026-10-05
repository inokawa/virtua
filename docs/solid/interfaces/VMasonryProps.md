[**API**](../../API.md)

***

# Interface: VMasonryProps\<T\>

Defined in: [src/solid/VMasonry.tsx:129](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L129)

Props of [VMasonry](../functions/VMasonry.md).

## Extends

- [`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md)

## Type Parameters

### T

`T`

## Properties

### ref?

> `optional` **ref?**: [`VMasonryHandle`](VMasonryHandle.md) \| ((`handle?`) => `void`)

Defined in: [src/solid/VMasonry.tsx:133](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L133)

Get reference to [VMasonryHandle](VMasonryHandle.md).

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/VMasonry.tsx:137](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L137)

The data items rendered by this component.

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/VMasonry.tsx:141](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L141)

The elements renderer function.

#### Parameters

##### data

`T`

##### index

`Accessor`\<`number`\>

#### Returns

`Element`

***

### lanes

> **lanes**: `number`

Defined in: [src/solid/VMasonry.tsx:145](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L145)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/solid/VMasonry.tsx:150](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L150)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/VMasonry.tsx:157](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L157)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/VMasonry.tsx:162](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L162)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/solid/VMasonry.tsx:166](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L166)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/VMasonry.tsx:172](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L172)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VMasonryHandle.cache](VMasonryHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/solid/VMasonry.tsx:177](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L177)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop.

#### Returns

`void`

***

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/VMasonry.tsx:181](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/VMasonry.tsx#L181)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### slot?

> `optional` **slot?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:690

#### Inherited from

`ViewportComponentAttributes.slot`

***

### title?

> `optional` **title?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1233

#### Inherited from

`ViewportComponentAttributes.title`

***

### dir?

> `optional` **dir?**: `HTMLDir`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1212

#### Inherited from

`ViewportComponentAttributes.dir`

***

### property?

> `optional` **property?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1269

#### Inherited from

`ViewportComponentAttributes.property`

***

### is?

> `optional` **is?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1228

#### Inherited from

`ViewportComponentAttributes.is`

***

### accessKey?

> `optional` **accessKey?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1236

#### Inherited from

`ViewportComponentAttributes.accessKey`

***

### autoCapitalize?

> `optional` **autoCapitalize?**: `HTMLAutocapitalize`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1237

#### Inherited from

`ViewportComponentAttributes.autoCapitalize`

***

### contentEditable?

> `optional` **contentEditable?**: `boolean` \| `"inherit"` \| `"plaintext-only"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1238

#### Inherited from

`ViewportComponentAttributes.contentEditable`

***

### ~~contextMenu?~~

> `optional` **contextMenu?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1277

#### Deprecated

#### Inherited from

`ViewportComponentAttributes.contextMenu`

***

### draggable?

> `optional` **draggable?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1213

#### Inherited from

`ViewportComponentAttributes.draggable`

***

### hidden?

> `optional` **hidden?**: `boolean` \| `"until-found"` \| `"hidden"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1216

#### Inherited from

`ViewportComponentAttributes.hidden`

***

### id?

> `optional` **id?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:688

#### Inherited from

`ViewportComponentAttributes.id`

***

### lang?

> `optional` **lang?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1229

#### Inherited from

`ViewportComponentAttributes.lang`

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:689

#### Inherited from

`ViewportComponentAttributes.nonce`

***

### tabIndex?

> `optional` **tabIndex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:694

#### Inherited from

`ViewportComponentAttributes.tabIndex`

***

### translate?

> `optional` **translate?**: `"yes"` \| `"no"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1234

#### Inherited from

`ViewportComponentAttributes.translate`

***

### role?

> `optional` **role?**: `"article"` \| `"button"` \| `"dialog"` \| `"figure"` \| `"form"` \| `"img"` \| `"link"` \| `"main"` \| `"menu"` \| `"meter"` \| `"option"` \| `"search"` \| `"table"` \| `"switch"` \| `"math"` \| `"marquee"` \| `"menuitem"` \| `"cell"` \| `"columnheader"` \| `"rowheader"` \| `"grid"` \| `"none"` \| `"checkbox"` \| `"listbox"` \| `"radio"` \| `"region"` \| `"row"` \| `"listitem"` \| `"menubar"` \| `"progressbar"` \| `"separator"` \| `"tab"` \| `"tabpanel"` \| `"toolbar"` \| `"tooltip"` \| `"treeitem"` \| `"scrollbar"` \| `"alert"` \| `"alertdialog"` \| `"application"` \| `"banner"` \| `"combobox"` \| `"complementary"` \| `"contentinfo"` \| `"definition"` \| `"directory"` \| `"document"` \| `"feed"` \| `"gridcell"` \| `"group"` \| `"heading"` \| `"list"` \| `"log"` \| `"menuitemcheckbox"` \| `"menuitemradio"` \| `"navigation"` \| `"note"` \| `"presentation"` \| `"radiogroup"` \| `"rowgroup"` \| `"searchbox"` \| `"slider"` \| `"spinbutton"` \| `"status"` \| `"tablist"` \| `"term"` \| `"textbox"` \| `"timer"` \| `"tree"` \| `"treegrid"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1122

#### Inherited from

`ViewportComponentAttributes.role`

***

### about?

> `optional` **about?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1265

#### Inherited from

`ViewportComponentAttributes.about`

***

### datatype?

> `optional` **datatype?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1266

#### Inherited from

`ViewportComponentAttributes.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1267

#### Inherited from

`ViewportComponentAttributes.inlist`

***

### prefix?

> `optional` **prefix?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1268

#### Inherited from

`ViewportComponentAttributes.prefix`

***

### resource?

> `optional` **resource?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1270

#### Inherited from

`ViewportComponentAttributes.resource`

***

### typeof?

> `optional` **typeof?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1271

#### Inherited from

`ViewportComponentAttributes.typeof`

***

### vocab?

> `optional` **vocab?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1272

#### Inherited from

`ViewportComponentAttributes.vocab`

***

### itemProp?

> `optional` **itemProp?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1259

#### Inherited from

`ViewportComponentAttributes.itemProp`

***

### itemScope?

> `optional` **itemScope?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1261

#### Inherited from

`ViewportComponentAttributes.itemScope`

***

### itemType?

> `optional` **itemType?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1262

#### Inherited from

`ViewportComponentAttributes.itemType`

***

### itemRef?

> `optional` **itemRef?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1260

#### Inherited from

`ViewportComponentAttributes.itemRef`

***

### popover?

> `optional` **popover?**: `boolean` \| `"auto"` \| `"manual"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1231

#### Inherited from

`ViewportComponentAttributes.popover`

***

### inert?

> `optional` **inert?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1217

#### Inherited from

`ViewportComponentAttributes.inert`

***

### inputMode?

> `optional` **inputMode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1240

#### Inherited from

`ViewportComponentAttributes.inputMode`

***

### exportparts?

> `optional` **exportparts?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1215

#### Inherited from

`ViewportComponentAttributes.exportparts`

***

### part?

> `optional` **part?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1230

#### Inherited from

`ViewportComponentAttributes.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:816

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:821

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:848

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:828

Similar to the global aria-label. Defines a string value that labels the current element,
which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`ViewportComponentAttributes.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:842

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

### aria-busy?

> `optional` **aria-busy?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:853

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:859

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:865

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:872

Defines an element's column index or position with respect to the total number of columns
within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:874

Defines a human-readable text alternative of the numeric aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:881

Defines the number of columns spanned by a cell or gridcell within a table, grid, or
treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:888

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:893

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:908

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-description?

> `optional` **aria-description?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:914

Defines a string value that describes or annotates the current element.

#### See

aria-describedby

#### Inherited from

`ViewportComponentAttributes.aria-description`

***

### aria-details?

> `optional` **aria-details?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:920

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:927

Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:934

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:940

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:945

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:951

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:957

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:962

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:977

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:983

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:988

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:994

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1000

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1002

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1007

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1009

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1011

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1016

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1018

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1026

Identifies an element (or elements) in order to define a visual, functional, or contextual
parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1032

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1039

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1045

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1051

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1058

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1071

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1073

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1079

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1086

Defines an element's row index or position with respect to the total number of rows within a
table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1088

Defines a human-readable text alternative of aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1094

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1100

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1107

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1109

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1111

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1113

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1119

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1121

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

***

### onCopy?

> `optional` **onCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:316

#### Inherited from

`ViewportComponentAttributes.onCopy`

***

### onCut?

> `optional` **onCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:318

#### Inherited from

`ViewportComponentAttributes.onCut`

***

### onPaste?

> `optional` **onPaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:356

#### Inherited from

`ViewportComponentAttributes.onPaste`

***

### onCompositionEnd?

> `optional` **onCompositionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:307

#### Inherited from

`ViewportComponentAttributes.onCompositionEnd`

***

### onCompositionStart?

> `optional` **onCompositionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:308

#### Inherited from

`ViewportComponentAttributes.onCompositionStart`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:309

#### Inherited from

`ViewportComponentAttributes.onCompositionUpdate`

***

### onFocus?

> `optional` **onFocus?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:332

#### Inherited from

`ViewportComponentAttributes.onFocus`

***

### onBlur?

> `optional` **onBlur?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:298

#### Inherited from

`ViewportComponentAttributes.onBlur`

***

### onChange?

> `optional` **onChange?**: `ChangeEventHandlerUnion`\<`HTMLDivElement`, `Event`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:302

#### Inherited from

`ViewportComponentAttributes.onChange`

***

### onBeforeInput?

> `optional` **onBeforeInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:293

#### Inherited from

`ViewportComponentAttributes.onBeforeInput`

***

### onInput?

> `optional` **onInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:339

#### Inherited from

`ViewportComponentAttributes.onInput`

***

### onReset?

> `optional` **onReset?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:371

#### Inherited from

`ViewportComponentAttributes.onReset`

***

### onSubmit?

> `optional` **onSubmit?**: `EventHandlerUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:387

#### Inherited from

`ViewportComponentAttributes.onSubmit`

***

### onInvalid?

> `optional` **onInvalid?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:340

#### Inherited from

`ViewportComponentAttributes.onInvalid`

***

### onLoad?

> `optional` **onLoad?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:344

#### Inherited from

`ViewportComponentAttributes.onLoad`

***

### onError?

> `optional` **onError?**: `EventHandlerUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:331

#### Inherited from

`ViewportComponentAttributes.onError`

***

### onKeyDown?

> `optional` **onKeyDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:341

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

***

### onKeyPress?

> `optional` **onKeyPress?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:342

#### Inherited from

`ViewportComponentAttributes.onKeyPress`

***

### onKeyUp?

> `optional` **onKeyUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:343

#### Inherited from

`ViewportComponentAttributes.onKeyUp`

***

### onAbort?

> `optional` **onAbort?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:285

#### Inherited from

`ViewportComponentAttributes.onAbort`

***

### onCanPlay?

> `optional` **onCanPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:300

#### Inherited from

`ViewportComponentAttributes.onCanPlay`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:301

#### Inherited from

`ViewportComponentAttributes.onCanPlayThrough`

***

### onDurationChange?

> `optional` **onDurationChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:328

#### Inherited from

`ViewportComponentAttributes.onDurationChange`

***

### onEmptied?

> `optional` **onEmptied?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:329

#### Inherited from

`ViewportComponentAttributes.onEmptied`

***

### onEnded?

> `optional` **onEnded?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:330

#### Inherited from

`ViewportComponentAttributes.onEnded`

***

### onLoadedData?

> `optional` **onLoadedData?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:345

#### Inherited from

`ViewportComponentAttributes.onLoadedData`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:346

#### Inherited from

`ViewportComponentAttributes.onLoadedMetadata`

***

### onLoadStart?

> `optional` **onLoadStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:347

#### Inherited from

`ViewportComponentAttributes.onLoadStart`

***

### onPause?

> `optional` **onPause?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:357

#### Inherited from

`ViewportComponentAttributes.onPause`

***

### onPlay?

> `optional` **onPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:358

#### Inherited from

`ViewportComponentAttributes.onPlay`

***

### onPlaying?

> `optional` **onPlaying?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:359

#### Inherited from

`ViewportComponentAttributes.onPlaying`

***

### onProgress?

> `optional` **onProgress?**: `EventHandlerUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:369

#### Inherited from

`ViewportComponentAttributes.onProgress`

***

### onRateChange?

> `optional` **onRateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:370

#### Inherited from

`ViewportComponentAttributes.onRateChange`

***

### onSeeked?

> `optional` **onSeeked?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:380

#### Inherited from

`ViewportComponentAttributes.onSeeked`

***

### onSeeking?

> `optional` **onSeeking?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:381

#### Inherited from

`ViewportComponentAttributes.onSeeking`

***

### onStalled?

> `optional` **onStalled?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:386

#### Inherited from

`ViewportComponentAttributes.onStalled`

***

### onSuspend?

> `optional` **onSuspend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:388

#### Inherited from

`ViewportComponentAttributes.onSuspend`

***

### onTimeUpdate?

> `optional` **onTimeUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:389

#### Inherited from

`ViewportComponentAttributes.onTimeUpdate`

***

### onVolumeChange?

> `optional` **onVolumeChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:399

#### Inherited from

`ViewportComponentAttributes.onVolumeChange`

***

### onWaiting?

> `optional` **onWaiting?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:400

#### Inherited from

`ViewportComponentAttributes.onWaiting`

***

### onAuxClick?

> `optional` **onAuxClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:290

#### Inherited from

`ViewportComponentAttributes.onAuxClick`

***

### onClick?

> `optional` **onClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:303

#### Inherited from

`ViewportComponentAttributes.onClick`

***

### onContextMenu?

> `optional` **onContextMenu?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:314

#### Inherited from

`ViewportComponentAttributes.onContextMenu`

***

### onDrag?

> `optional` **onDrag?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:320

#### Inherited from

`ViewportComponentAttributes.onDrag`

***

### onDragEnd?

> `optional` **onDragEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:321

#### Inherited from

`ViewportComponentAttributes.onDragEnd`

***

### onDragEnter?

> `optional` **onDragEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:322

#### Inherited from

`ViewportComponentAttributes.onDragEnter`

***

### onDragExit?

> `optional` **onDragExit?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:323

#### Inherited from

`ViewportComponentAttributes.onDragExit`

***

### onDragLeave?

> `optional` **onDragLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:324

#### Inherited from

`ViewportComponentAttributes.onDragLeave`

***

### onDragOver?

> `optional` **onDragOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:325

#### Inherited from

`ViewportComponentAttributes.onDragOver`

***

### onDragStart?

> `optional` **onDragStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:326

#### Inherited from

`ViewportComponentAttributes.onDragStart`

***

### onDrop?

> `optional` **onDrop?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:327

#### Inherited from

`ViewportComponentAttributes.onDrop`

***

### onMouseDown?

> `optional` **onMouseDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:349

#### Inherited from

`ViewportComponentAttributes.onMouseDown`

***

### onMouseEnter?

> `optional` **onMouseEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:350

#### Inherited from

`ViewportComponentAttributes.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:351

#### Inherited from

`ViewportComponentAttributes.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:352

#### Inherited from

`ViewportComponentAttributes.onMouseMove`

***

### onMouseOut?

> `optional` **onMouseOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:353

#### Inherited from

`ViewportComponentAttributes.onMouseOut`

***

### onMouseOver?

> `optional` **onMouseOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:354

#### Inherited from

`ViewportComponentAttributes.onMouseOver`

***

### onMouseUp?

> `optional` **onMouseUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:355

#### Inherited from

`ViewportComponentAttributes.onMouseUp`

***

### onSelect?

> `optional` **onSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:382

#### Inherited from

`ViewportComponentAttributes.onSelect`

***

### onTouchCancel?

> `optional` **onTouchCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:391

#### Inherited from

`ViewportComponentAttributes.onTouchCancel`

***

### onTouchEnd?

> `optional` **onTouchEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:392

#### Inherited from

`ViewportComponentAttributes.onTouchEnd`

***

### onTouchMove?

> `optional` **onTouchMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:393

#### Inherited from

`ViewportComponentAttributes.onTouchMove`

***

### onTouchStart?

> `optional` **onTouchStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:394

#### Inherited from

`ViewportComponentAttributes.onTouchStart`

***

### onPointerDown?

> `optional` **onPointerDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:361

#### Inherited from

`ViewportComponentAttributes.onPointerDown`

***

### onPointerMove?

> `optional` **onPointerMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:364

#### Inherited from

`ViewportComponentAttributes.onPointerMove`

***

### onPointerUp?

> `optional` **onPointerUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:368

#### Inherited from

`ViewportComponentAttributes.onPointerUp`

***

### onPointerCancel?

> `optional` **onPointerCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:360

#### Inherited from

`ViewportComponentAttributes.onPointerCancel`

***

### onPointerEnter?

> `optional` **onPointerEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:362

#### Inherited from

`ViewportComponentAttributes.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:363

#### Inherited from

`ViewportComponentAttributes.onPointerLeave`

***

### onPointerOver?

> `optional` **onPointerOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:366

#### Inherited from

`ViewportComponentAttributes.onPointerOver`

***

### onPointerOut?

> `optional` **onPointerOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:365

#### Inherited from

`ViewportComponentAttributes.onPointerOut`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:338

#### Inherited from

`ViewportComponentAttributes.onGotPointerCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:348

#### Inherited from

`ViewportComponentAttributes.onLostPointerCapture`

***

### onWheel?

> `optional` **onWheel?**: `EventHandlerUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:401

#### Inherited from

`ViewportComponentAttributes.onWheel`

***

### onAnimationStart?

> `optional` **onAnimationStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:289

#### Inherited from

`ViewportComponentAttributes.onAnimationStart`

***

### onAnimationEnd?

> `optional` **onAnimationEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:287

#### Inherited from

`ViewportComponentAttributes.onAnimationEnd`

***

### onAnimationIteration?

> `optional` **onAnimationIteration?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:288

#### Inherited from

`ViewportComponentAttributes.onAnimationIteration`

***

### onToggle?

> `optional` **onToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:390

#### Inherited from

`ViewportComponentAttributes.onToggle`

***

### onBeforeToggle?

> `optional` **onBeforeToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:296

#### Inherited from

`ViewportComponentAttributes.onBeforeToggle`

***

### onTransitionCancel?

> `optional` **onTransitionCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:395

#### Inherited from

`ViewportComponentAttributes.onTransitionCancel`

***

### onTransitionEnd?

> `optional` **onTransitionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:396

#### Inherited from

`ViewportComponentAttributes.onTransitionEnd`

***

### onTransitionRun?

> `optional` **onTransitionRun?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:397

#### Inherited from

`ViewportComponentAttributes.onTransitionRun`

***

### onTransitionStart?

> `optional` **onTransitionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:398

#### Inherited from

`ViewportComponentAttributes.onTransitionStart`

***

### ~~contextmenu?~~

> `optional` **contextmenu?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1275

#### Deprecated

#### Inherited from

`ViewportComponentAttributes.contextmenu`

***

### class?

> `optional` **class?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:686

#### Inherited from

`ViewportComponentAttributes.class`

***

### onabort?

> `optional` **onabort?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:405

#### Inherited from

`ViewportComponentAttributes.onabort`

***

### onanimationcancel?

> `optional` **onanimationcancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:406

#### Inherited from

`ViewportComponentAttributes.onanimationcancel`

***

### onanimationend?

> `optional` **onanimationend?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:407

#### Inherited from

`ViewportComponentAttributes.onanimationend`

***

### onanimationiteration?

> `optional` **onanimationiteration?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:408

#### Inherited from

`ViewportComponentAttributes.onanimationiteration`

***

### onanimationstart?

> `optional` **onanimationstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:409

#### Inherited from

`ViewportComponentAttributes.onanimationstart`

***

### onauxclick?

> `optional` **onauxclick?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:410

#### Inherited from

`ViewportComponentAttributes.onauxclick`

***

### onbeforeinput?

> `optional` **onbeforeinput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:413

#### Inherited from

`ViewportComponentAttributes.onbeforeinput`

***

### onbeforematch?

> `optional` **onbeforematch?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:414

#### Inherited from

`ViewportComponentAttributes.onbeforematch`

***

### onbeforetoggle?

> `optional` **onbeforetoggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:416

#### Inherited from

`ViewportComponentAttributes.onbeforetoggle`

***

### onblur?

> `optional` **onblur?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:418

#### Inherited from

`ViewportComponentAttributes.onblur`

***

### oncancel?

> `optional` **oncancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:419

#### Inherited from

`ViewportComponentAttributes.oncancel`

***

### oncanplay?

> `optional` **oncanplay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:420

#### Inherited from

`ViewportComponentAttributes.oncanplay`

***

### oncanplaythrough?

> `optional` **oncanplaythrough?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:421

#### Inherited from

`ViewportComponentAttributes.oncanplaythrough`

***

### onchange?

> `optional` **onchange?**: `ChangeEventHandlerUnion`\<`HTMLDivElement`, `Event`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:422

#### Inherited from

`ViewportComponentAttributes.onchange`

***

### onclick?

> `optional` **onclick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:423

#### Inherited from

`ViewportComponentAttributes.onclick`

***

### onclose?

> `optional` **onclose?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:424

#### Inherited from

`ViewportComponentAttributes.onclose`

***

### oncommand?

> `optional` **oncommand?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:426

#### Inherited from

`ViewportComponentAttributes.oncommand`

***

### oncontextlost?

> `optional` **oncontextlost?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:433

#### Inherited from

`ViewportComponentAttributes.oncontextlost`

***

### oncontextmenu?

> `optional` **oncontextmenu?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:434

#### Inherited from

`ViewportComponentAttributes.oncontextmenu`

***

### oncontextrestored?

> `optional` **oncontextrestored?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:435

#### Inherited from

`ViewportComponentAttributes.oncontextrestored`

***

### oncopy?

> `optional` **oncopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:436

#### Inherited from

`ViewportComponentAttributes.oncopy`

***

### oncuechange?

> `optional` **oncuechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:437

#### Inherited from

`ViewportComponentAttributes.oncuechange`

***

### oncut?

> `optional` **oncut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:438

#### Inherited from

`ViewportComponentAttributes.oncut`

***

### ondblclick?

> `optional` **ondblclick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:439

#### Inherited from

`ViewportComponentAttributes.ondblclick`

***

### ondrag?

> `optional` **ondrag?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:440

#### Inherited from

`ViewportComponentAttributes.ondrag`

***

### ondragend?

> `optional` **ondragend?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:441

#### Inherited from

`ViewportComponentAttributes.ondragend`

***

### ondragenter?

> `optional` **ondragenter?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:442

#### Inherited from

`ViewportComponentAttributes.ondragenter`

***

### ondragleave?

> `optional` **ondragleave?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:444

#### Inherited from

`ViewportComponentAttributes.ondragleave`

***

### ondragover?

> `optional` **ondragover?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:445

#### Inherited from

`ViewportComponentAttributes.ondragover`

***

### ondragstart?

> `optional` **ondragstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:446

#### Inherited from

`ViewportComponentAttributes.ondragstart`

***

### ondrop?

> `optional` **ondrop?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:447

#### Inherited from

`ViewportComponentAttributes.ondrop`

***

### ondurationchange?

> `optional` **ondurationchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:448

#### Inherited from

`ViewportComponentAttributes.ondurationchange`

***

### onemptied?

> `optional` **onemptied?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:449

#### Inherited from

`ViewportComponentAttributes.onemptied`

***

### onended?

> `optional` **onended?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:450

#### Inherited from

`ViewportComponentAttributes.onended`

***

### onerror?

> `optional` **onerror?**: `EventHandlerUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:451

#### Inherited from

`ViewportComponentAttributes.onerror`

***

### onfocus?

> `optional` **onfocus?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:452

#### Inherited from

`ViewportComponentAttributes.onfocus`

***

### onformdata?

> `optional` **onformdata?**: `EventHandlerUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:455

#### Inherited from

`ViewportComponentAttributes.onformdata`

***

### ongotpointercapture?

> `optional` **ongotpointercapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:458

#### Inherited from

`ViewportComponentAttributes.ongotpointercapture`

***

### oninput?

> `optional` **oninput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:459

#### Inherited from

`ViewportComponentAttributes.oninput`

***

### oninvalid?

> `optional` **oninvalid?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:460

#### Inherited from

`ViewportComponentAttributes.oninvalid`

***

### onkeydown?

> `optional` **onkeydown?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:461

#### Inherited from

`ViewportComponentAttributes.onkeydown`

***

### onkeypress?

> `optional` **onkeypress?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:462

#### Inherited from

`ViewportComponentAttributes.onkeypress`

***

### onkeyup?

> `optional` **onkeyup?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:463

#### Inherited from

`ViewportComponentAttributes.onkeyup`

***

### onload?

> `optional` **onload?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:464

#### Inherited from

`ViewportComponentAttributes.onload`

***

### onloadeddata?

> `optional` **onloadeddata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:465

#### Inherited from

`ViewportComponentAttributes.onloadeddata`

***

### onloadedmetadata?

> `optional` **onloadedmetadata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:466

#### Inherited from

`ViewportComponentAttributes.onloadedmetadata`

***

### onloadstart?

> `optional` **onloadstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:467

#### Inherited from

`ViewportComponentAttributes.onloadstart`

***

### onlostpointercapture?

> `optional` **onlostpointercapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:468

#### Inherited from

`ViewportComponentAttributes.onlostpointercapture`

***

### onmousedown?

> `optional` **onmousedown?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:469

#### Inherited from

`ViewportComponentAttributes.onmousedown`

***

### onmouseenter?

> `optional` **onmouseenter?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:470

#### Inherited from

`ViewportComponentAttributes.onmouseenter`

***

### onmouseleave?

> `optional` **onmouseleave?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:471

#### Inherited from

`ViewportComponentAttributes.onmouseleave`

***

### onmousemove?

> `optional` **onmousemove?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:472

#### Inherited from

`ViewportComponentAttributes.onmousemove`

***

### onmouseout?

> `optional` **onmouseout?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:473

#### Inherited from

`ViewportComponentAttributes.onmouseout`

***

### onmouseover?

> `optional` **onmouseover?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:474

#### Inherited from

`ViewportComponentAttributes.onmouseover`

***

### onmouseup?

> `optional` **onmouseup?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:475

#### Inherited from

`ViewportComponentAttributes.onmouseup`

***

### onpaste?

> `optional` **onpaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:476

#### Inherited from

`ViewportComponentAttributes.onpaste`

***

### onpause?

> `optional` **onpause?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:477

#### Inherited from

`ViewportComponentAttributes.onpause`

***

### onplay?

> `optional` **onplay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:478

#### Inherited from

`ViewportComponentAttributes.onplay`

***

### onplaying?

> `optional` **onplaying?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:479

#### Inherited from

`ViewportComponentAttributes.onplaying`

***

### onpointercancel?

> `optional` **onpointercancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:480

#### Inherited from

`ViewportComponentAttributes.onpointercancel`

***

### onpointerdown?

> `optional` **onpointerdown?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:481

#### Inherited from

`ViewportComponentAttributes.onpointerdown`

***

### onpointerenter?

> `optional` **onpointerenter?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:482

#### Inherited from

`ViewportComponentAttributes.onpointerenter`

***

### onpointerleave?

> `optional` **onpointerleave?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:483

#### Inherited from

`ViewportComponentAttributes.onpointerleave`

***

### onpointermove?

> `optional` **onpointermove?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:484

#### Inherited from

`ViewportComponentAttributes.onpointermove`

***

### onpointerout?

> `optional` **onpointerout?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:485

#### Inherited from

`ViewportComponentAttributes.onpointerout`

***

### onpointerover?

> `optional` **onpointerover?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:486

#### Inherited from

`ViewportComponentAttributes.onpointerover`

***

### onpointerrawupdate?

> `optional` **onpointerrawupdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:487

#### Inherited from

`ViewportComponentAttributes.onpointerrawupdate`

***

### onpointerup?

> `optional` **onpointerup?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:488

#### Inherited from

`ViewportComponentAttributes.onpointerup`

***

### onprogress?

> `optional` **onprogress?**: `EventHandlerUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:489

#### Inherited from

`ViewportComponentAttributes.onprogress`

***

### onratechange?

> `optional` **onratechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:490

#### Inherited from

`ViewportComponentAttributes.onratechange`

***

### onreset?

> `optional` **onreset?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:491

#### Inherited from

`ViewportComponentAttributes.onreset`

***

### onresize?

> `optional` **onresize?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:492

#### Inherited from

`ViewportComponentAttributes.onresize`

***

### onscroll?

> `optional` **onscroll?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:493

#### Inherited from

`ViewportComponentAttributes.onscroll`

***

### onscrollend?

> `optional` **onscrollend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:494

#### Inherited from

`ViewportComponentAttributes.onscrollend`

***

### onsecuritypolicyviolation?

> `optional` **onsecuritypolicyviolation?**: `EventHandlerUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:499

#### Inherited from

`ViewportComponentAttributes.onsecuritypolicyviolation`

***

### onseeked?

> `optional` **onseeked?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:500

#### Inherited from

`ViewportComponentAttributes.onseeked`

***

### onseeking?

> `optional` **onseeking?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:501

#### Inherited from

`ViewportComponentAttributes.onseeking`

***

### onselect?

> `optional` **onselect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:502

#### Inherited from

`ViewportComponentAttributes.onselect`

***

### onselectionchange?

> `optional` **onselectionchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:503

#### Inherited from

`ViewportComponentAttributes.onselectionchange`

***

### onselectstart?

> `optional` **onselectstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:504

#### Inherited from

`ViewportComponentAttributes.onselectstart`

***

### onslotchange?

> `optional` **onslotchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:505

#### Inherited from

`ViewportComponentAttributes.onslotchange`

***

### onstalled?

> `optional` **onstalled?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:506

#### Inherited from

`ViewportComponentAttributes.onstalled`

***

### onsubmit?

> `optional` **onsubmit?**: `EventHandlerUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:507

#### Inherited from

`ViewportComponentAttributes.onsubmit`

***

### onsuspend?

> `optional` **onsuspend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:508

#### Inherited from

`ViewportComponentAttributes.onsuspend`

***

### ontimeupdate?

> `optional` **ontimeupdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:509

#### Inherited from

`ViewportComponentAttributes.ontimeupdate`

***

### ontoggle?

> `optional` **ontoggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:510

#### Inherited from

`ViewportComponentAttributes.ontoggle`

***

### ontouchcancel?

> `optional` **ontouchcancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:511

#### Inherited from

`ViewportComponentAttributes.ontouchcancel`

***

### ontouchend?

> `optional` **ontouchend?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:512

#### Inherited from

`ViewportComponentAttributes.ontouchend`

***

### ontouchmove?

> `optional` **ontouchmove?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:513

#### Inherited from

`ViewportComponentAttributes.ontouchmove`

***

### ontouchstart?

> `optional` **ontouchstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:514

#### Inherited from

`ViewportComponentAttributes.ontouchstart`

***

### ontransitioncancel?

> `optional` **ontransitioncancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:515

#### Inherited from

`ViewportComponentAttributes.ontransitioncancel`

***

### ontransitionend?

> `optional` **ontransitionend?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:516

#### Inherited from

`ViewportComponentAttributes.ontransitionend`

***

### ontransitionrun?

> `optional` **ontransitionrun?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:517

#### Inherited from

`ViewportComponentAttributes.ontransitionrun`

***

### ontransitionstart?

> `optional` **ontransitionstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:518

#### Inherited from

`ViewportComponentAttributes.ontransitionstart`

***

### onvolumechange?

> `optional` **onvolumechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:519

#### Inherited from

`ViewportComponentAttributes.onvolumechange`

***

### onwaiting?

> `optional` **onwaiting?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:520

#### Inherited from

`ViewportComponentAttributes.onwaiting`

***

### onwheel?

> `optional` **onwheel?**: `EventHandlerUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:521

#### Inherited from

`ViewportComponentAttributes.onwheel`

***

### innerText?

> `optional` **innerText?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1206

#### Inherited from

`ViewportComponentAttributes.innerText`

***

### accesskey?

> `optional` **accesskey?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1208

#### Inherited from

`ViewportComponentAttributes.accesskey`

***

### autocapitalize?

> `optional` **autocapitalize?**: `HTMLAutocapitalize`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1209

#### Inherited from

`ViewportComponentAttributes.autocapitalize`

***

### autocorrect?

> `optional` **autocorrect?**: `"off"` \| `"on"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1210

#### Inherited from

`ViewportComponentAttributes.autocorrect`

***

### contenteditable?

> `optional` **contenteditable?**: `boolean` \| `"true"` \| `"false"` \| `"inherit"` \| `"plaintext-only"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1211

#### Inherited from

`ViewportComponentAttributes.contenteditable`

***

### enterkeyhint?

> `optional` **enterkeyhint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1214

#### Inherited from

`ViewportComponentAttributes.enterkeyhint`

***

### inputmode?

> `optional` **inputmode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1218

#### Inherited from

`ViewportComponentAttributes.inputmode`

***

### spellcheck?

> `optional` **spellcheck?**: `boolean` \| `"true"` \| `"false"`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1232

#### Inherited from

`ViewportComponentAttributes.spellcheck`

***

### exportParts?

> `optional` **exportParts?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1239

#### Inherited from

`ViewportComponentAttributes.exportParts`

***

### itemid?

> `optional` **itemid?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1252

#### Inherited from

`ViewportComponentAttributes.itemid`

***

### itemprop?

> `optional` **itemprop?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1253

#### Inherited from

`ViewportComponentAttributes.itemprop`

***

### itemref?

> `optional` **itemref?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1254

#### Inherited from

`ViewportComponentAttributes.itemref`

***

### itemscope?

> `optional` **itemscope?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1255

#### Inherited from

`ViewportComponentAttributes.itemscope`

***

### itemtype?

> `optional` **itemtype?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1256

#### Inherited from

`ViewportComponentAttributes.itemtype`

***

### itemId?

> `optional` **itemId?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:1258

#### Inherited from

`ViewportComponentAttributes.itemId`

***

### innerHTML?

> `optional` **innerHTML?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:681

#### Inherited from

`ViewportComponentAttributes.innerHTML`

***

### textContent?

> `optional` **textContent?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:682

#### Inherited from

`ViewportComponentAttributes.textContent`

***

### autofocus?

> `optional` **autofocus?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:685

#### Inherited from

`ViewportComponentAttributes.autofocus`

***

### elementtiming?

> `optional` **elementtiming?**: `string`

Defined in: node\_modules/solid-js/types/jsx.d.ts:687

#### Inherited from

`ViewportComponentAttributes.elementtiming`

***

### tabindex?

> `optional` **tabindex?**: `string` \| `number`

Defined in: node\_modules/solid-js/types/jsx.d.ts:692

#### Inherited from

`ViewportComponentAttributes.tabindex`

***

### classList?

> `optional` **classList?**: `ClassList`

Defined in: node\_modules/solid-js/types/jsx.d.ts:146

#### Inherited from

`ViewportComponentAttributes.classList`

***

### $ServerOnly?

> `optional` **$ServerOnly?**: `boolean`

Defined in: node\_modules/solid-js/types/jsx.d.ts:147

#### Inherited from

`ViewportComponentAttributes.$ServerOnly`

***

### onAnimationCancel?

> `optional` **onAnimationCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:286

#### Inherited from

`ViewportComponentAttributes.onAnimationCancel`

***

### onBeforeCopy?

> `optional` **onBeforeCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:291

#### Inherited from

`ViewportComponentAttributes.onBeforeCopy`

***

### onBeforeCut?

> `optional` **onBeforeCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:292

#### Inherited from

`ViewportComponentAttributes.onBeforeCut`

***

### onBeforeMatch?

> `optional` **onBeforeMatch?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:294

#### Inherited from

`ViewportComponentAttributes.onBeforeMatch`

***

### onBeforePaste?

> `optional` **onBeforePaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:295

#### Inherited from

`ViewportComponentAttributes.onBeforePaste`

***

### onBeforeXRSelect?

> `optional` **onBeforeXRSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:297

#### Inherited from

`ViewportComponentAttributes.onBeforeXRSelect`

***

### onCancel?

> `optional` **onCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:299

#### Inherited from

`ViewportComponentAttributes.onCancel`

***

### onClose?

> `optional` **onClose?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:304

#### Inherited from

`ViewportComponentAttributes.onClose`

***

### onCommand?

> `optional` **onCommand?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:306

#### Inherited from

`ViewportComponentAttributes.onCommand`

***

### onContentVisibilityAutoStateChange?

> `optional` **onContentVisibilityAutoStateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:310

#### Inherited from

`ViewportComponentAttributes.onContentVisibilityAutoStateChange`

***

### onContextLost?

> `optional` **onContextLost?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:313

#### Inherited from

`ViewportComponentAttributes.onContextLost`

***

### onContextRestored?

> `optional` **onContextRestored?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:315

#### Inherited from

`ViewportComponentAttributes.onContextRestored`

***

### onCueChange?

> `optional` **onCueChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:317

#### Inherited from

`ViewportComponentAttributes.onCueChange`

***

### onDblClick?

> `optional` **onDblClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:319

#### Inherited from

`ViewportComponentAttributes.onDblClick`

***

### onFocusIn?

> `optional` **onFocusIn?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:333

#### Inherited from

`ViewportComponentAttributes.onFocusIn`

***

### onFocusOut?

> `optional` **onFocusOut?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:334

#### Inherited from

`ViewportComponentAttributes.onFocusOut`

***

### onFormData?

> `optional` **onFormData?**: `EventHandlerUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:335

#### Inherited from

`ViewportComponentAttributes.onFormData`

***

### onFullscreenChange?

> `optional` **onFullscreenChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:336

#### Inherited from

`ViewportComponentAttributes.onFullscreenChange`

***

### onFullscreenError?

> `optional` **onFullscreenError?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:337

#### Inherited from

`ViewportComponentAttributes.onFullscreenError`

***

### onPointerRawUpdate?

> `optional` **onPointerRawUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:367

#### Inherited from

`ViewportComponentAttributes.onPointerRawUpdate`

***

### onResize?

> `optional` **onResize?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:372

#### Inherited from

`ViewportComponentAttributes.onResize`

***

### onScrollSnapChange?

> `optional` **onScrollSnapChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:376

#### Inherited from

`ViewportComponentAttributes.onScrollSnapChange`

***

### onScrollSnapChanging?

> `optional` **onScrollSnapChanging?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:378

#### Inherited from

`ViewportComponentAttributes.onScrollSnapChanging`

***

### onSecurityPolicyViolation?

> `optional` **onSecurityPolicyViolation?**: `EventHandlerUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:379

#### Inherited from

`ViewportComponentAttributes.onSecurityPolicyViolation`

***

### onSelectionChange?

> `optional` **onSelectionChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:383

#### Inherited from

`ViewportComponentAttributes.onSelectionChange`

***

### onSelectStart?

> `optional` **onSelectStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:384

#### Inherited from

`ViewportComponentAttributes.onSelectStart`

***

### onSlotChange?

> `optional` **onSlotChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:385

#### Inherited from

`ViewportComponentAttributes.onSlotChange`

***

### onbeforecopy?

> `optional` **onbeforecopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:411

#### Inherited from

`ViewportComponentAttributes.onbeforecopy`

***

### onbeforecut?

> `optional` **onbeforecut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:412

#### Inherited from

`ViewportComponentAttributes.onbeforecut`

***

### onbeforepaste?

> `optional` **onbeforepaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:415

#### Inherited from

`ViewportComponentAttributes.onbeforepaste`

***

### onbeforexrselect?

> `optional` **onbeforexrselect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:417

#### Inherited from

`ViewportComponentAttributes.onbeforexrselect`

***

### oncompositionend?

> `optional` **oncompositionend?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:427

#### Inherited from

`ViewportComponentAttributes.oncompositionend`

***

### oncompositionstart?

> `optional` **oncompositionstart?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:428

#### Inherited from

`ViewportComponentAttributes.oncompositionstart`

***

### oncompositionupdate?

> `optional` **oncompositionupdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:429

#### Inherited from

`ViewportComponentAttributes.oncompositionupdate`

***

### oncontentvisibilityautostatechange?

> `optional` **oncontentvisibilityautostatechange?**: `EventHandlerUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:430

#### Inherited from

`ViewportComponentAttributes.oncontentvisibilityautostatechange`

***

### ondragexit?

> `optional` **ondragexit?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:443

#### Inherited from

`ViewportComponentAttributes.ondragexit`

***

### onfocusin?

> `optional` **onfocusin?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:453

#### Inherited from

`ViewportComponentAttributes.onfocusin`

***

### onfocusout?

> `optional` **onfocusout?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:454

#### Inherited from

`ViewportComponentAttributes.onfocusout`

***

### onfullscreenchange?

> `optional` **onfullscreenchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:456

#### Inherited from

`ViewportComponentAttributes.onfullscreenchange`

***

### onfullscreenerror?

> `optional` **onfullscreenerror?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:457

#### Inherited from

`ViewportComponentAttributes.onfullscreenerror`

***

### onscrollsnapchange?

> `optional` **onscrollsnapchange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:496

#### Inherited from

`ViewportComponentAttributes.onscrollsnapchange`

***

### onscrollsnapchanging?

> `optional` **onscrollsnapchanging?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:498

#### Inherited from

`ViewportComponentAttributes.onscrollsnapchanging`

***

### on:abort?

> `optional` **on:abort?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:525

#### Inherited from

`ViewportComponentAttributes.on:abort`

***

### on:animationcancel?

> `optional` **on:animationcancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:526

#### Inherited from

`ViewportComponentAttributes.on:animationcancel`

***

### on:animationend?

> `optional` **on:animationend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:527

#### Inherited from

`ViewportComponentAttributes.on:animationend`

***

### on:animationiteration?

> `optional` **on:animationiteration?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:528

#### Inherited from

`ViewportComponentAttributes.on:animationiteration`

***

### on:animationstart?

> `optional` **on:animationstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:529

#### Inherited from

`ViewportComponentAttributes.on:animationstart`

***

### on:auxclick?

> `optional` **on:auxclick?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:530

#### Inherited from

`ViewportComponentAttributes.on:auxclick`

***

### on:beforecopy?

> `optional` **on:beforecopy?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:531

#### Inherited from

`ViewportComponentAttributes.on:beforecopy`

***

### on:beforecut?

> `optional` **on:beforecut?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:532

#### Inherited from

`ViewportComponentAttributes.on:beforecut`

***

### on:beforeinput?

> `optional` **on:beforeinput?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `InputEvent`, `InputEventHandler`\<`HTMLDivElement`, `InputEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:533

#### Inherited from

`ViewportComponentAttributes.on:beforeinput`

***

### on:beforematch?

> `optional` **on:beforematch?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:536

#### Inherited from

`ViewportComponentAttributes.on:beforematch`

***

### on:beforepaste?

> `optional` **on:beforepaste?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:537

#### Inherited from

`ViewportComponentAttributes.on:beforepaste`

***

### on:beforetoggle?

> `optional` **on:beforetoggle?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:538

#### Inherited from

`ViewportComponentAttributes.on:beforetoggle`

***

### on:beforexrselect?

> `optional` **on:beforexrselect?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:539

#### Inherited from

`ViewportComponentAttributes.on:beforexrselect`

***

### on:blur?

> `optional` **on:blur?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:540

#### Inherited from

`ViewportComponentAttributes.on:blur`

***

### on:cancel?

> `optional` **on:cancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:543

#### Inherited from

`ViewportComponentAttributes.on:cancel`

***

### on:canplay?

> `optional` **on:canplay?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:544

#### Inherited from

`ViewportComponentAttributes.on:canplay`

***

### on:canplaythrough?

> `optional` **on:canplaythrough?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:545

#### Inherited from

`ViewportComponentAttributes.on:canplaythrough`

***

### on:change?

> `optional` **on:change?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `ChangeEventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:546

#### Inherited from

`ViewportComponentAttributes.on:change`

***

### on:click?

> `optional` **on:click?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:547

#### Inherited from

`ViewportComponentAttributes.on:click`

***

### on:close?

> `optional` **on:close?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:548

#### Inherited from

`ViewportComponentAttributes.on:close`

***

### on:command?

> `optional` **on:command?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:550

#### Inherited from

`ViewportComponentAttributes.on:command`

***

### on:compositionend?

> `optional` **on:compositionend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:551

#### Inherited from

`ViewportComponentAttributes.on:compositionend`

***

### on:compositionstart?

> `optional` **on:compositionstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:552

#### Inherited from

`ViewportComponentAttributes.on:compositionstart`

***

### on:compositionupdate?

> `optional` **on:compositionupdate?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:553

#### Inherited from

`ViewportComponentAttributes.on:compositionupdate`

***

### on:contentvisibilityautostatechange?

> `optional` **on:contentvisibilityautostatechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:554

#### Inherited from

`ViewportComponentAttributes.on:contentvisibilityautostatechange`

***

### on:contextlost?

> `optional` **on:contextlost?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:557

#### Inherited from

`ViewportComponentAttributes.on:contextlost`

***

### on:contextmenu?

> `optional` **on:contextmenu?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:558

#### Inherited from

`ViewportComponentAttributes.on:contextmenu`

***

### on:contextrestored?

> `optional` **on:contextrestored?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:559

#### Inherited from

`ViewportComponentAttributes.on:contextrestored`

***

### on:copy?

> `optional` **on:copy?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:560

#### Inherited from

`ViewportComponentAttributes.on:copy`

***

### on:cuechange?

> `optional` **on:cuechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:561

#### Inherited from

`ViewportComponentAttributes.on:cuechange`

***

### on:cut?

> `optional` **on:cut?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:562

#### Inherited from

`ViewportComponentAttributes.on:cut`

***

### on:dblclick?

> `optional` **on:dblclick?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:563

#### Inherited from

`ViewportComponentAttributes.on:dblclick`

***

### on:drag?

> `optional` **on:drag?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:564

#### Inherited from

`ViewportComponentAttributes.on:drag`

***

### on:dragend?

> `optional` **on:dragend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:565

#### Inherited from

`ViewportComponentAttributes.on:dragend`

***

### on:dragenter?

> `optional` **on:dragenter?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:566

#### Inherited from

`ViewportComponentAttributes.on:dragenter`

***

### on:dragexit?

> `optional` **on:dragexit?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:567

#### Inherited from

`ViewportComponentAttributes.on:dragexit`

***

### on:dragleave?

> `optional` **on:dragleave?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:568

#### Inherited from

`ViewportComponentAttributes.on:dragleave`

***

### on:dragover?

> `optional` **on:dragover?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:569

#### Inherited from

`ViewportComponentAttributes.on:dragover`

***

### on:dragstart?

> `optional` **on:dragstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:570

#### Inherited from

`ViewportComponentAttributes.on:dragstart`

***

### on:drop?

> `optional` **on:drop?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:571

#### Inherited from

`ViewportComponentAttributes.on:drop`

***

### on:durationchange?

> `optional` **on:durationchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:572

#### Inherited from

`ViewportComponentAttributes.on:durationchange`

***

### on:emptied?

> `optional` **on:emptied?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:573

#### Inherited from

`ViewportComponentAttributes.on:emptied`

***

### on:ended?

> `optional` **on:ended?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:574

#### Inherited from

`ViewportComponentAttributes.on:ended`

***

### on:error?

> `optional` **on:error?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:575

#### Inherited from

`ViewportComponentAttributes.on:error`

***

### on:focus?

> `optional` **on:focus?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:576

#### Inherited from

`ViewportComponentAttributes.on:focus`

***

### on:focusin?

> `optional` **on:focusin?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:579

#### Inherited from

`ViewportComponentAttributes.on:focusin`

***

### on:focusout?

> `optional` **on:focusout?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FocusEvent`, `FocusEventHandler`\<`HTMLDivElement`, `FocusEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:582

#### Inherited from

`ViewportComponentAttributes.on:focusout`

***

### on:formdata?

> `optional` **on:formdata?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:585

#### Inherited from

`ViewportComponentAttributes.on:formdata`

***

### on:fullscreenchange?

> `optional` **on:fullscreenchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:586

#### Inherited from

`ViewportComponentAttributes.on:fullscreenchange`

***

### on:fullscreenerror?

> `optional` **on:fullscreenerror?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:587

#### Inherited from

`ViewportComponentAttributes.on:fullscreenerror`

***

### on:gotpointercapture?

> `optional` **on:gotpointercapture?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:588

#### Inherited from

`ViewportComponentAttributes.on:gotpointercapture`

***

### on:input?

> `optional` **on:input?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `InputEvent`, `InputEventHandler`\<`HTMLDivElement`, `InputEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:589

#### Inherited from

`ViewportComponentAttributes.on:input`

***

### on:invalid?

> `optional` **on:invalid?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:592

#### Inherited from

`ViewportComponentAttributes.on:invalid`

***

### on:keydown?

> `optional` **on:keydown?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:593

#### Inherited from

`ViewportComponentAttributes.on:keydown`

***

### on:keypress?

> `optional` **on:keypress?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:594

#### Inherited from

`ViewportComponentAttributes.on:keypress`

***

### on:keyup?

> `optional` **on:keyup?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:595

#### Inherited from

`ViewportComponentAttributes.on:keyup`

***

### on:load?

> `optional` **on:load?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:596

#### Inherited from

`ViewportComponentAttributes.on:load`

***

### on:loadeddata?

> `optional` **on:loadeddata?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:597

#### Inherited from

`ViewportComponentAttributes.on:loadeddata`

***

### on:loadedmetadata?

> `optional` **on:loadedmetadata?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:598

#### Inherited from

`ViewportComponentAttributes.on:loadedmetadata`

***

### on:loadstart?

> `optional` **on:loadstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:599

#### Inherited from

`ViewportComponentAttributes.on:loadstart`

***

### on:lostpointercapture?

> `optional` **on:lostpointercapture?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:600

#### Inherited from

`ViewportComponentAttributes.on:lostpointercapture`

***

### on:mousedown?

> `optional` **on:mousedown?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:601

#### Inherited from

`ViewportComponentAttributes.on:mousedown`

***

### on:mouseenter?

> `optional` **on:mouseenter?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:602

#### Inherited from

`ViewportComponentAttributes.on:mouseenter`

***

### on:mouseleave?

> `optional` **on:mouseleave?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:603

#### Inherited from

`ViewportComponentAttributes.on:mouseleave`

***

### on:mousemove?

> `optional` **on:mousemove?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:604

#### Inherited from

`ViewportComponentAttributes.on:mousemove`

***

### on:mouseout?

> `optional` **on:mouseout?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:605

#### Inherited from

`ViewportComponentAttributes.on:mouseout`

***

### on:mouseover?

> `optional` **on:mouseover?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:606

#### Inherited from

`ViewportComponentAttributes.on:mouseover`

***

### on:mouseup?

> `optional` **on:mouseup?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:607

#### Inherited from

`ViewportComponentAttributes.on:mouseup`

***

### on:paste?

> `optional` **on:paste?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:608

#### Inherited from

`ViewportComponentAttributes.on:paste`

***

### on:pause?

> `optional` **on:pause?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:609

#### Inherited from

`ViewportComponentAttributes.on:pause`

***

### on:play?

> `optional` **on:play?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:610

#### Inherited from

`ViewportComponentAttributes.on:play`

***

### on:playing?

> `optional` **on:playing?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:611

#### Inherited from

`ViewportComponentAttributes.on:playing`

***

### on:pointercancel?

> `optional` **on:pointercancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:612

#### Inherited from

`ViewportComponentAttributes.on:pointercancel`

***

### on:pointerdown?

> `optional` **on:pointerdown?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:613

#### Inherited from

`ViewportComponentAttributes.on:pointerdown`

***

### on:pointerenter?

> `optional` **on:pointerenter?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:614

#### Inherited from

`ViewportComponentAttributes.on:pointerenter`

***

### on:pointerleave?

> `optional` **on:pointerleave?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:615

#### Inherited from

`ViewportComponentAttributes.on:pointerleave`

***

### on:pointermove?

> `optional` **on:pointermove?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:616

#### Inherited from

`ViewportComponentAttributes.on:pointermove`

***

### on:pointerout?

> `optional` **on:pointerout?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:617

#### Inherited from

`ViewportComponentAttributes.on:pointerout`

***

### on:pointerover?

> `optional` **on:pointerover?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:618

#### Inherited from

`ViewportComponentAttributes.on:pointerover`

***

### on:pointerrawupdate?

> `optional` **on:pointerrawupdate?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:619

#### Inherited from

`ViewportComponentAttributes.on:pointerrawupdate`

***

### on:pointerup?

> `optional` **on:pointerup?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:620

#### Inherited from

`ViewportComponentAttributes.on:pointerup`

***

### on:progress?

> `optional` **on:progress?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:621

#### Inherited from

`ViewportComponentAttributes.on:progress`

***

### on:ratechange?

> `optional` **on:ratechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:622

#### Inherited from

`ViewportComponentAttributes.on:ratechange`

***

### on:reset?

> `optional` **on:reset?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:623

#### Inherited from

`ViewportComponentAttributes.on:reset`

***

### on:resize?

> `optional` **on:resize?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:624

#### Inherited from

`ViewportComponentAttributes.on:resize`

***

### on:scroll?

> `optional` **on:scroll?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:625

#### Inherited from

`ViewportComponentAttributes.on:scroll`

***

### on:scrollend?

> `optional` **on:scrollend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:626

#### Inherited from

`ViewportComponentAttributes.on:scrollend`

***

### on:scrollsnapchange?

> `optional` **on:scrollsnapchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:628

#### Inherited from

`ViewportComponentAttributes.on:scrollsnapchange`

***

### on:scrollsnapchanging?

> `optional` **on:scrollsnapchanging?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:630

#### Inherited from

`ViewportComponentAttributes.on:scrollsnapchanging`

***

### on:securitypolicyviolation?

> `optional` **on:securitypolicyviolation?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:631

#### Inherited from

`ViewportComponentAttributes.on:securitypolicyviolation`

***

### on:seeked?

> `optional` **on:seeked?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:634

#### Inherited from

`ViewportComponentAttributes.on:seeked`

***

### on:seeking?

> `optional` **on:seeking?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:635

#### Inherited from

`ViewportComponentAttributes.on:seeking`

***

### on:select?

> `optional` **on:select?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:636

#### Inherited from

`ViewportComponentAttributes.on:select`

***

### on:selectionchange?

> `optional` **on:selectionchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:637

#### Inherited from

`ViewportComponentAttributes.on:selectionchange`

***

### on:selectstart?

> `optional` **on:selectstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:638

#### Inherited from

`ViewportComponentAttributes.on:selectstart`

***

### on:slotchange?

> `optional` **on:slotchange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:639

#### Inherited from

`ViewportComponentAttributes.on:slotchange`

***

### on:stalled?

> `optional` **on:stalled?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:640

#### Inherited from

`ViewportComponentAttributes.on:stalled`

***

### on:submit?

> `optional` **on:submit?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:641

#### Inherited from

`ViewportComponentAttributes.on:submit`

***

### on:suspend?

> `optional` **on:suspend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:642

#### Inherited from

`ViewportComponentAttributes.on:suspend`

***

### on:timeupdate?

> `optional` **on:timeupdate?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:643

#### Inherited from

`ViewportComponentAttributes.on:timeupdate`

***

### on:toggle?

> `optional` **on:toggle?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:644

#### Inherited from

`ViewportComponentAttributes.on:toggle`

***

### on:touchcancel?

> `optional` **on:touchcancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:645

#### Inherited from

`ViewportComponentAttributes.on:touchcancel`

***

### on:touchend?

> `optional` **on:touchend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:646

#### Inherited from

`ViewportComponentAttributes.on:touchend`

***

### on:touchmove?

> `optional` **on:touchmove?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:647

#### Inherited from

`ViewportComponentAttributes.on:touchmove`

***

### on:touchstart?

> `optional` **on:touchstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:648

#### Inherited from

`ViewportComponentAttributes.on:touchstart`

***

### on:transitioncancel?

> `optional` **on:transitioncancel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:649

#### Inherited from

`ViewportComponentAttributes.on:transitioncancel`

***

### on:transitionend?

> `optional` **on:transitionend?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:650

#### Inherited from

`ViewportComponentAttributes.on:transitionend`

***

### on:transitionrun?

> `optional` **on:transitionrun?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:651

#### Inherited from

`ViewportComponentAttributes.on:transitionrun`

***

### on:transitionstart?

> `optional` **on:transitionstart?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:652

#### Inherited from

`ViewportComponentAttributes.on:transitionstart`

***

### on:volumechange?

> `optional` **on:volumechange?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:653

#### Inherited from

`ViewportComponentAttributes.on:volumechange`

***

### on:waiting?

> `optional` **on:waiting?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:654

#### Inherited from

`ViewportComponentAttributes.on:waiting`

***

### on:wheel?

> `optional` **on:wheel?**: `EventHandlerWithOptionsUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/solid-js/types/jsx.d.ts:655

#### Inherited from

`ViewportComponentAttributes.on:wheel`

***

### style?

> `optional` **style?**: `CSSProperties`

Defined in: [src/solid/types.ts:6](https://github.com/inokawa/virtua/blob/d568d326bf50279b556bf13f61cfd7270e191dac/src/solid/types.ts#L6)

#### Inherited from

`ViewportComponentAttributes.style`
