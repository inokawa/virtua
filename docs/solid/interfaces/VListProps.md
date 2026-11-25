[**API**](../../API.md)

***

# Interface: VListProps\<T\>

Defined in: [src/solid/VList.tsx:21](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/VList.tsx#L21)

Props of [VList](../functions/VList.md).

## Extends

- `Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"ref"` \| `"data"` \| `"children"` \| `"bufferSize"` \| `"itemSize"` \| `"ssrCount"` \| `"shift"` \| `"horizontal"` \| `"cache"` \| `"item"` \| `"onScroll"` \| `"onScrollEnd"` \| `"onResize"` \| `"keepMounted"`\>
- [`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md)

## Type Parameters

### T

`T`

## Indexable

> \[`key`: `` `data-${string}` ``\]: `string` \| `number` \| `boolean` \| `undefined`

## Properties

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:143](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L143)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

#### Inherited from

`Pick.shift`

***

### data

> **data**: readonly `T`[]

Defined in: [src/solid/Virtualizer.tsx:103](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L103)

The data items rendered by this component.

#### Inherited from

`Pick.data`

***

### item?

> `optional` **item?**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/solid/Virtualizer.tsx:122](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L122)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Inherited from

`Pick.item`

***

### children

> **children**: (`data`, `index`) => `Element`

Defined in: [src/solid/Virtualizer.tsx:107](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L107)

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

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/solid/Virtualizer.tsx:166](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L166)

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

### onScrollEnd?

> `optional` **onScrollEnd?**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:170](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L170)

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/solid/Virtualizer.tsx:174](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L174)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

#### Inherited from

`Pick.onResize`

***

### ref?

> `optional` **ref?**: [`VirtualizerHandle`](VirtualizerHandle.md)

Defined in: [src/solid/Virtualizer.tsx:99](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L99)

Get reference to [VirtualizerHandle](VirtualizerHandle.md).

#### Inherited from

`Pick.ref`

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/solid/Virtualizer.tsx:112](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L112)

Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.

#### Default Value

```ts
200
```

#### Inherited from

`Pick.bufferSize`

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/solid/Virtualizer.tsx:133](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L133)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/solid/Virtualizer.tsx:147](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L147)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/solid/Virtualizer.tsx:151](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L151)

List of indexes that should be always mounted, even when off screen.

#### Inherited from

`Pick.keepMounted`

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/solid/Virtualizer.tsx:157](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L157)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Inherited from

`Pick.cache`

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/solid/Virtualizer.tsx:137](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/Virtualizer.tsx#L137)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

#### Inherited from

`Pick.ssrCount`

***

### $key?

> `optional` **$key?**: `string` \| `number`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:261

Entity identity for server markup: the frame morph matches keyed
elements across responses by it, so client state attached to the
element (focus, selection) follows the entity through reorders and
refetches. SSR compiles it to the `_key` attribute; a DOM compile strips
it. On a component, `$key` is slot occurrence identity across
responses (optional; without it identity is positional).

#### Inherited from

`ViewportComponentAttributes.$key`

***

### ~~contextmenu?~~

> `optional` **contextmenu?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1025

#### Deprecated

#### Inherited from

`ViewportComponentAttributes.contextmenu`

***

### hidden?

> `optional` **hidden?**: `"hidden"` \| `"until-found"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:983

#### Inherited from

`ViewportComponentAttributes.hidden`

***

### slot?

> `optional` **slot?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:929

#### Inherited from

`ViewportComponentAttributes.slot`

***

### title?

> `optional` **title?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:999

#### Inherited from

`ViewportComponentAttributes.title`

***

### dir?

> `optional` **dir?**: `RemoveAttribute` \| `HTMLDir`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:971

#### Inherited from

`ViewportComponentAttributes.dir`

***

### property?

> `optional` **property?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1019

#### Inherited from

`ViewportComponentAttributes.property`

***

### is?

> `optional` **is?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:995

#### Inherited from

`ViewportComponentAttributes.is`

***

### draggable?

> `optional` **draggable?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:972

#### Inherited from

`ViewportComponentAttributes.draggable`

***

### id?

> `optional` **id?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:926

#### Inherited from

`ViewportComponentAttributes.id`

***

### lang?

> `optional` **lang?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:996

#### Inherited from

`ViewportComponentAttributes.lang`

***

### nonce?

> `optional` **nonce?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:927

#### Inherited from

`ViewportComponentAttributes.nonce`

***

### translate?

> `optional` **translate?**: `"yes"` \| `"no"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1000

#### Inherited from

`ViewportComponentAttributes.translate`

***

### role?

> `optional` **role?**: `"search"` \| `"link"` \| `"cell"` \| `"columnheader"` \| `"rowheader"` \| `"grid"` \| `"none"` \| `"list"` \| `"article"` \| `"button"` \| `"dialog"` \| `"figure"` \| `"form"` \| `"img"` \| `"main"` \| `"menu"` \| `"meter"` \| `"option"` \| `"table"` \| `"switch"` \| `"math"` \| `"marquee"` \| `"menuitem"` \| `"checkbox"` \| `"listbox"` \| `"radio"` \| `"region"` \| `"row"` \| `"listitem"` \| `"menubar"` \| `"progressbar"` \| `"separator"` \| `"tab"` \| `"tabpanel"` \| `"toolbar"` \| `"tooltip"` \| `"treeitem"` \| `"scrollbar"` \| `"alert"` \| `"alertdialog"` \| `"application"` \| `"banner"` \| `"combobox"` \| `"complementary"` \| `"contentinfo"` \| `"definition"` \| `"directory"` \| `"document"` \| `"feed"` \| `"gridcell"` \| `"group"` \| `"heading"` \| `"log"` \| `"menuitemcheckbox"` \| `"menuitemradio"` \| `"navigation"` \| `"note"` \| `"presentation"` \| `"radiogroup"` \| `"rowgroup"` \| `"searchbox"` \| `"slider"` \| `"spinbutton"` \| `"status"` \| `"tablist"` \| `"term"` \| `"textbox"` \| `"timer"` \| `"tree"` \| `"treegrid"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:620

#### Inherited from

`ViewportComponentAttributes.role`

***

### about?

> `optional` **about?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1015

#### Inherited from

`ViewportComponentAttributes.about`

***

### datatype?

> `optional` **datatype?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1016

#### Inherited from

`ViewportComponentAttributes.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1017

#### Inherited from

`ViewportComponentAttributes.inlist`

***

### prefix?

> `optional` **prefix?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1018

#### Inherited from

`ViewportComponentAttributes.prefix`

***

### resource?

> `optional` **resource?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1020

#### Inherited from

`ViewportComponentAttributes.resource`

***

### typeof?

> `optional` **typeof?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1021

#### Inherited from

`ViewportComponentAttributes.typeof`

***

### vocab?

> `optional` **vocab?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1022

#### Inherited from

`ViewportComponentAttributes.vocab`

***

### popover?

> `optional` **popover?**: `"auto"` \| `"manual"` \| `"hint"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:997

#### Inherited from

`ViewportComponentAttributes.popover`

***

### inert?

> `optional` **inert?**: `boolean` \| `""`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:984

#### Inherited from

`ViewportComponentAttributes.inert`

***

### exportparts?

> `optional` **exportparts?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:982

#### Inherited from

`ViewportComponentAttributes.exportparts`

***

### part?

> `optional` **part?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:928

#### Inherited from

`ViewportComponentAttributes.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:317

Identifies the currently active element when DOM focus is on a composite widget, textbox,
group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:322

Indicates whether assistive technologies will present all, or only parts of, the changed
region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"list"` \| `"inline"` \| `"both"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:349

Indicates whether inputting text could trigger display of one or more predictions of the
user's intended value for an input and specifies how predictions would be presented if they
are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:329

Similar to the global aria-label. Defines a string value that labels the current element,
which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`ViewportComponentAttributes.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:343

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

> `optional` **aria-busy?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:354

Indicates an element is being modified and that assistive technologies MAY want to wait until
the modifications are complete before exposing them to the user.

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `"mixed"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:360

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:366

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:373

Defines an element's column index or position with respect to the total number of columns
within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:375

Defines a human-readable text alternative of the numeric aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:382

Defines the number of columns spanned by a cell or gridcell within a table, grid, or
treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:389

Identifies the element (or elements) whose contents or presence are controlled by the current
element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `"time"` \| `"page"` \| `"step"` \| `"location"` \| `"date"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:394

Indicates the element that represents the current item within a container or set of related
elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:407

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-description?

> `optional` **aria-description?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:413

Defines a string value that describes or annotates the current element.

#### See

aria-describedby

#### Inherited from

`ViewportComponentAttributes.aria-description`

***

### aria-details?

> `optional` **aria-details?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:419

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:426

Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"none"` \| `"copy"` \| `"move"` \| `"execute"` \| `"popup"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:433

Indicates what functions can be performed when a dragged object is released on the drop
target.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:439

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:444

Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:450

Identifies the next element (or elements) in an alternate reading order of content which, at
the user's discretion, allows assistive technology to override the general default of reading
in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:456

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

In ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `"grid"` \| `"dialog"` \| `"menu"` \| `"listbox"` \| `"tree"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:461

Indicates the availability and type of interactive popup element, such as menu or dialog,
that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:474

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `"grammar"` \| `"spelling"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:480

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:485

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:491

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:497

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:499

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:504

Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:506

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:508

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:513

Indicates that the user may select more than one item from the current selectable
descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:515

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:523

Identifies an element (or elements) in order to define a visual, functional, or contextual
parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:529

Defines a short hint (a word or short phrase) intended to aid the user with data entry when
the control has no value. A hint could be a sample value or a brief description of the
expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:536

Defines an element's number or position in the current set of listitems or treeitems. Not
required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `"mixed"` \| `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:542

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:548

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:555

Indicates what notifications the user agent will trigger when the accessibility tree within a
live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:568

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:570

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:576

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:583

Defines an element's row index or position with respect to the total number of rows within a
table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:585

Defines a human-readable text alternative of aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:592

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:598

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:605

Defines the number of items in the current set of listitems or treeitems. Not required if all
elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:607

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:609

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:611

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:617

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:619

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

***

### onCopy?

> `optional` **onCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:771

#### Inherited from

`ViewportComponentAttributes.onCopy`

***

### onCut?

> `optional` **onCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:773

#### Inherited from

`ViewportComponentAttributes.onCut`

***

### onPaste?

> `optional` **onPaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:811

#### Inherited from

`ViewportComponentAttributes.onPaste`

***

### onCompositionEnd?

> `optional` **onCompositionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:762

#### Inherited from

`ViewportComponentAttributes.onCompositionEnd`

***

### onCompositionStart?

> `optional` **onCompositionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:763

#### Inherited from

`ViewportComponentAttributes.onCompositionStart`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `CompositionEvent`, `EventHandler`\<`HTMLDivElement`, `CompositionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:764

#### Inherited from

`ViewportComponentAttributes.onCompositionUpdate`

***

### onFocus?

> `optional` **onFocus?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:787

#### Inherited from

`ViewportComponentAttributes.onFocus`

***

### onBlur?

> `optional` **onBlur?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:754

#### Inherited from

`ViewportComponentAttributes.onBlur`

***

### onChange?

> `optional` **onChange?**: `ChangeEventHandlerUnion`\<`HTMLDivElement`, `Event`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:758

#### Inherited from

`ViewportComponentAttributes.onChange`

***

### onBeforeInput?

> `optional` **onBeforeInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:749

#### Inherited from

`ViewportComponentAttributes.onBeforeInput`

***

### onInput?

> `optional` **onInput?**: `InputEventHandlerUnion`\<`HTMLDivElement`, `InputEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:794

#### Inherited from

`ViewportComponentAttributes.onInput`

***

### onReset?

> `optional` **onReset?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:826

#### Inherited from

`ViewportComponentAttributes.onReset`

***

### onSubmit?

> `optional` **onSubmit?**: `EventHandlerUnion`\<`HTMLDivElement`, `SubmitEvent`, `EventHandler`\<`HTMLDivElement`, `SubmitEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:840

#### Inherited from

`ViewportComponentAttributes.onSubmit`

***

### onInvalid?

> `optional` **onInvalid?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:795

#### Inherited from

`ViewportComponentAttributes.onInvalid`

***

### onLoad?

> `optional` **onLoad?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:799

#### Inherited from

`ViewportComponentAttributes.onLoad`

***

### onError?

> `optional` **onError?**: `EventHandlerUnion`\<`HTMLDivElement`, `ErrorEvent`, `EventHandler`\<`HTMLDivElement`, `ErrorEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:786

#### Inherited from

`ViewportComponentAttributes.onError`

***

### onKeyDown?

> `optional` **onKeyDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:796

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

***

### onKeyPress?

> `optional` **onKeyPress?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:797

#### Inherited from

`ViewportComponentAttributes.onKeyPress`

***

### onKeyUp?

> `optional` **onKeyUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `KeyboardEvent`, `EventHandler`\<`HTMLDivElement`, `KeyboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:798

#### Inherited from

`ViewportComponentAttributes.onKeyUp`

***

### onAbort?

> `optional` **onAbort?**: `EventHandlerUnion`\<`HTMLDivElement`, `UIEvent`, `EventHandler`\<`HTMLDivElement`, `UIEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:741

#### Inherited from

`ViewportComponentAttributes.onAbort`

***

### onCanPlay?

> `optional` **onCanPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:756

#### Inherited from

`ViewportComponentAttributes.onCanPlay`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:757

#### Inherited from

`ViewportComponentAttributes.onCanPlayThrough`

***

### onDurationChange?

> `optional` **onDurationChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:783

#### Inherited from

`ViewportComponentAttributes.onDurationChange`

***

### onEmptied?

> `optional` **onEmptied?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:784

#### Inherited from

`ViewportComponentAttributes.onEmptied`

***

### onEnded?

> `optional` **onEnded?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:785

#### Inherited from

`ViewportComponentAttributes.onEnded`

***

### onLoadedData?

> `optional` **onLoadedData?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:800

#### Inherited from

`ViewportComponentAttributes.onLoadedData`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:801

#### Inherited from

`ViewportComponentAttributes.onLoadedMetadata`

***

### onLoadStart?

> `optional` **onLoadStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:802

#### Inherited from

`ViewportComponentAttributes.onLoadStart`

***

### onPause?

> `optional` **onPause?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:812

#### Inherited from

`ViewportComponentAttributes.onPause`

***

### onPlay?

> `optional` **onPlay?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:813

#### Inherited from

`ViewportComponentAttributes.onPlay`

***

### onPlaying?

> `optional` **onPlaying?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:814

#### Inherited from

`ViewportComponentAttributes.onPlaying`

***

### onProgress?

> `optional` **onProgress?**: `EventHandlerUnion`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>, `EventHandler`\<`HTMLDivElement`, `ProgressEvent`\<`EventTarget`\>\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:824

#### Inherited from

`ViewportComponentAttributes.onProgress`

***

### onRateChange?

> `optional` **onRateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:825

#### Inherited from

`ViewportComponentAttributes.onRateChange`

***

### onSeeked?

> `optional` **onSeeked?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:833

#### Inherited from

`ViewportComponentAttributes.onSeeked`

***

### onSeeking?

> `optional` **onSeeking?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:834

#### Inherited from

`ViewportComponentAttributes.onSeeking`

***

### onStalled?

> `optional` **onStalled?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:839

#### Inherited from

`ViewportComponentAttributes.onStalled`

***

### onSuspend?

> `optional` **onSuspend?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:841

#### Inherited from

`ViewportComponentAttributes.onSuspend`

***

### onTimeUpdate?

> `optional` **onTimeUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:842

#### Inherited from

`ViewportComponentAttributes.onTimeUpdate`

***

### onVolumeChange?

> `optional` **onVolumeChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:852

#### Inherited from

`ViewportComponentAttributes.onVolumeChange`

***

### onWaiting?

> `optional` **onWaiting?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:853

#### Inherited from

`ViewportComponentAttributes.onWaiting`

***

### onAuxClick?

> `optional` **onAuxClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:746

#### Inherited from

`ViewportComponentAttributes.onAuxClick`

***

### onClick?

> `optional` **onClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:759

#### Inherited from

`ViewportComponentAttributes.onClick`

***

### onContextMenu?

> `optional` **onContextMenu?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:769

#### Inherited from

`ViewportComponentAttributes.onContextMenu`

***

### onDrag?

> `optional` **onDrag?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:775

#### Inherited from

`ViewportComponentAttributes.onDrag`

***

### onDragEnd?

> `optional` **onDragEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:776

#### Inherited from

`ViewportComponentAttributes.onDragEnd`

***

### onDragEnter?

> `optional` **onDragEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:777

#### Inherited from

`ViewportComponentAttributes.onDragEnter`

***

### onDragExit?

> `optional` **onDragExit?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:778

#### Inherited from

`ViewportComponentAttributes.onDragExit`

***

### onDragLeave?

> `optional` **onDragLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:779

#### Inherited from

`ViewportComponentAttributes.onDragLeave`

***

### onDragOver?

> `optional` **onDragOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:780

#### Inherited from

`ViewportComponentAttributes.onDragOver`

***

### onDragStart?

> `optional` **onDragStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:781

#### Inherited from

`ViewportComponentAttributes.onDragStart`

***

### onDrop?

> `optional` **onDrop?**: `EventHandlerUnion`\<`HTMLDivElement`, `DragEvent`, `EventHandler`\<`HTMLDivElement`, `DragEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:782

#### Inherited from

`ViewportComponentAttributes.onDrop`

***

### onMouseDown?

> `optional` **onMouseDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:804

#### Inherited from

`ViewportComponentAttributes.onMouseDown`

***

### onMouseEnter?

> `optional` **onMouseEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:805

#### Inherited from

`ViewportComponentAttributes.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:806

#### Inherited from

`ViewportComponentAttributes.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:807

#### Inherited from

`ViewportComponentAttributes.onMouseMove`

***

### onMouseOut?

> `optional` **onMouseOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:808

#### Inherited from

`ViewportComponentAttributes.onMouseOut`

***

### onMouseOver?

> `optional` **onMouseOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:809

#### Inherited from

`ViewportComponentAttributes.onMouseOver`

***

### onMouseUp?

> `optional` **onMouseUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:810

#### Inherited from

`ViewportComponentAttributes.onMouseUp`

***

### onSelect?

> `optional` **onSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:835

#### Inherited from

`ViewportComponentAttributes.onSelect`

***

### onTouchCancel?

> `optional` **onTouchCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:844

#### Inherited from

`ViewportComponentAttributes.onTouchCancel`

***

### onTouchEnd?

> `optional` **onTouchEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:845

#### Inherited from

`ViewportComponentAttributes.onTouchEnd`

***

### onTouchMove?

> `optional` **onTouchMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:846

#### Inherited from

`ViewportComponentAttributes.onTouchMove`

***

### onTouchStart?

> `optional` **onTouchStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TouchEvent`, `EventHandler`\<`HTMLDivElement`, `TouchEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:847

#### Inherited from

`ViewportComponentAttributes.onTouchStart`

***

### onPointerDown?

> `optional` **onPointerDown?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:816

#### Inherited from

`ViewportComponentAttributes.onPointerDown`

***

### onPointerMove?

> `optional` **onPointerMove?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:819

#### Inherited from

`ViewportComponentAttributes.onPointerMove`

***

### onPointerUp?

> `optional` **onPointerUp?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:823

#### Inherited from

`ViewportComponentAttributes.onPointerUp`

***

### onPointerCancel?

> `optional` **onPointerCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:815

#### Inherited from

`ViewportComponentAttributes.onPointerCancel`

***

### onPointerEnter?

> `optional` **onPointerEnter?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:817

#### Inherited from

`ViewportComponentAttributes.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:818

#### Inherited from

`ViewportComponentAttributes.onPointerLeave`

***

### onPointerOver?

> `optional` **onPointerOver?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:821

#### Inherited from

`ViewportComponentAttributes.onPointerOver`

***

### onPointerOut?

> `optional` **onPointerOut?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:820

#### Inherited from

`ViewportComponentAttributes.onPointerOut`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:793

#### Inherited from

`ViewportComponentAttributes.onGotPointerCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:803

#### Inherited from

`ViewportComponentAttributes.onLostPointerCapture`

***

### onWheel?

> `optional` **onWheel?**: `EventHandlerUnion`\<`HTMLDivElement`, `WheelEvent`, `EventHandler`\<`HTMLDivElement`, `WheelEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:854

#### Inherited from

`ViewportComponentAttributes.onWheel`

***

### onAnimationStart?

> `optional` **onAnimationStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:745

#### Inherited from

`ViewportComponentAttributes.onAnimationStart`

***

### onAnimationEnd?

> `optional` **onAnimationEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:743

#### Inherited from

`ViewportComponentAttributes.onAnimationEnd`

***

### onAnimationIteration?

> `optional` **onAnimationIteration?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:744

#### Inherited from

`ViewportComponentAttributes.onAnimationIteration`

***

### onToggle?

> `optional` **onToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:843

#### Inherited from

`ViewportComponentAttributes.onToggle`

***

### onBeforeToggle?

> `optional` **onBeforeToggle?**: `EventHandlerUnion`\<`HTMLDivElement`, `ToggleEvent`, `EventHandler`\<`HTMLDivElement`, `ToggleEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:752

#### Inherited from

`ViewportComponentAttributes.onBeforeToggle`

***

### onTransitionCancel?

> `optional` **onTransitionCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:848

#### Inherited from

`ViewportComponentAttributes.onTransitionCancel`

***

### onTransitionEnd?

> `optional` **onTransitionEnd?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:849

#### Inherited from

`ViewportComponentAttributes.onTransitionEnd`

***

### onTransitionRun?

> `optional` **onTransitionRun?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:850

#### Inherited from

`ViewportComponentAttributes.onTransitionRun`

***

### onTransitionStart?

> `optional` **onTransitionStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `TransitionEvent`, `EventHandler`\<`HTMLDivElement`, `TransitionEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:851

#### Inherited from

`ViewportComponentAttributes.onTransitionStart`

***

### autocapitalize?

> `optional` **autocapitalize?**: `RemoveAttribute` \| `HTMLAutocapitalize`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:963

#### Inherited from

`ViewportComponentAttributes.autocapitalize`

***

### autocorrect?

> `optional` **autocorrect?**: `"off"` \| `"on"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:964

#### Inherited from

`ViewportComponentAttributes.autocorrect`

***

### innerText?

> `optional` **innerText?**: `string` \| `number`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:959

#### Inherited from

`ViewportComponentAttributes.innerText`

***

### spellcheck?

> `optional` **spellcheck?**: `RemoveAttribute` \| `EnumeratedAcceptsEmpty` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:998

#### Inherited from

`ViewportComponentAttributes.spellcheck`

***

### innerHTML?

> `optional` **innerHTML?**: `string`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:906

#### Inherited from

`ViewportComponentAttributes.innerHTML`

***

### textContent?

> `optional` **textContent?**: `string` \| `number`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:907

#### Inherited from

`ViewportComponentAttributes.textContent`

***

### autofocus?

> `optional` **autofocus?**: `boolean` \| `""`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:910

#### Inherited from

`ViewportComponentAttributes.autofocus`

***

### class?

> `optional` **class?**: `string` \| `number` \| `boolean` \| `Record`\<`string`, `boolean` \| `undefined`\> \| `ClassValue`[] \| `null`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:924

Class names to apply. Accepts a string, an object whose keys are class
names and values are booleans (`{ active: isActive() }` — truthy keys
are added), or an array merging strings/objects/nested arrays
(`["card", props.class, { active: isActive() }]`).

For conditional classes, prefer the array+object form. Don't build
class strings manually with concatenation, template literals, or
`.filter(Boolean).join(" ")` — that's the React/`classnames` reflex
and the array+object form replaces it. The array+object form composes
with reactive values directly; manually-built strings re-run the whole
concatenation on every change instead of toggling the affected classes.

#### Inherited from

`ViewportComponentAttributes.class`

***

### accesskey?

> `optional` **accesskey?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:962

#### Inherited from

`ViewportComponentAttributes.accesskey`

***

### contenteditable?

> `optional` **contenteditable?**: `"inherit"` \| `"plaintext-only"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:965

#### Inherited from

`ViewportComponentAttributes.contenteditable`

***

### enterkeyhint?

> `optional` **enterkeyhint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:973

#### Inherited from

`ViewportComponentAttributes.enterkeyhint`

***

### inputmode?

> `optional` **inputmode?**: `"search"` \| `"none"` \| `"text"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:985

#### Inherited from

`ViewportComponentAttributes.inputmode`

***

### virtualkeyboardpolicy?

> `optional` **virtualkeyboardpolicy?**: `"auto"` \| `"manual"` \| `RemoveAttribute` \| `EnumeratedAcceptsEmpty`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1003

**`Experimental`**

#### Inherited from

`ViewportComponentAttributes.virtualkeyboardpolicy`

***

### writingsuggestions?

> `optional` **writingsuggestions?**: `RemoveAttribute` \| `EnumeratedPseudoBoolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1005

**`Experimental`**

#### Inherited from

`ViewportComponentAttributes.writingsuggestions`

***

### itemid?

> `optional` **itemid?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1008

#### Inherited from

`ViewportComponentAttributes.itemid`

***

### itemprop?

> `optional` **itemprop?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1009

#### Inherited from

`ViewportComponentAttributes.itemprop`

***

### itemref?

> `optional` **itemref?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1010

#### Inherited from

`ViewportComponentAttributes.itemref`

***

### itemscope?

> `optional` **itemscope?**: `boolean` \| `""`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1011

#### Inherited from

`ViewportComponentAttributes.itemscope`

***

### itemtype?

> `optional` **itemtype?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:1012

#### Inherited from

`ViewportComponentAttributes.itemtype`

***

### elementtiming?

> `optional` **elementtiming?**: `string` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:925

#### Inherited from

`ViewportComponentAttributes.elementtiming`

***

### tabindex?

> `optional` **tabindex?**: `string` \| `number` \| `RemoveAttribute`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:931

#### Inherited from

`ViewportComponentAttributes.tabindex`

***

### $ServerOnly?

> `optional` **$ServerOnly?**: `boolean`

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:252

#### Inherited from

`ViewportComponentAttributes.$ServerOnly`

***

### onAnimationCancel?

> `optional` **onAnimationCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `AnimationEvent`, `EventHandler`\<`HTMLDivElement`, `AnimationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:742

#### Inherited from

`ViewportComponentAttributes.onAnimationCancel`

***

### onBeforeCopy?

> `optional` **onBeforeCopy?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:747

#### Inherited from

`ViewportComponentAttributes.onBeforeCopy`

***

### onBeforeCut?

> `optional` **onBeforeCut?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:748

#### Inherited from

`ViewportComponentAttributes.onBeforeCut`

***

### onBeforeMatch?

> `optional` **onBeforeMatch?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:750

#### Inherited from

`ViewportComponentAttributes.onBeforeMatch`

***

### onBeforePaste?

> `optional` **onBeforePaste?**: `EventHandlerUnion`\<`HTMLDivElement`, `ClipboardEvent`, `EventHandler`\<`HTMLDivElement`, `ClipboardEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:751

#### Inherited from

`ViewportComponentAttributes.onBeforePaste`

***

### onBeforeXRSelect?

> `optional` **onBeforeXRSelect?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:753

#### Inherited from

`ViewportComponentAttributes.onBeforeXRSelect`

***

### onCancel?

> `optional` **onCancel?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:755

#### Inherited from

`ViewportComponentAttributes.onCancel`

***

### onClose?

> `optional` **onClose?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:760

#### Inherited from

`ViewportComponentAttributes.onClose`

***

### onCommand?

> `optional` **onCommand?**: `EventHandlerUnion`\<`HTMLDivElement`, `CommandEvent`, `EventHandler`\<`HTMLDivElement`, `CommandEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:761

#### Inherited from

`ViewportComponentAttributes.onCommand`

***

### onContentVisibilityAutoStateChange?

> `optional` **onContentVisibilityAutoStateChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`, `EventHandler`\<`HTMLDivElement`, `ContentVisibilityAutoStateChangeEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:765

#### Inherited from

`ViewportComponentAttributes.onContentVisibilityAutoStateChange`

***

### onContextLost?

> `optional` **onContextLost?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:768

#### Inherited from

`ViewportComponentAttributes.onContextLost`

***

### onContextRestored?

> `optional` **onContextRestored?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:770

#### Inherited from

`ViewportComponentAttributes.onContextRestored`

***

### onCueChange?

> `optional` **onCueChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:772

#### Inherited from

`ViewportComponentAttributes.onCueChange`

***

### onDblClick?

> `optional` **onDblClick?**: `EventHandlerUnion`\<`HTMLDivElement`, `MouseEvent`, `EventHandler`\<`HTMLDivElement`, `MouseEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:774

#### Inherited from

`ViewportComponentAttributes.onDblClick`

***

### onFocusIn?

> `optional` **onFocusIn?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:788

#### Inherited from

`ViewportComponentAttributes.onFocusIn`

***

### onFocusOut?

> `optional` **onFocusOut?**: `FocusEventHandlerUnion`\<`HTMLDivElement`, `FocusEvent`\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:789

#### Inherited from

`ViewportComponentAttributes.onFocusOut`

***

### onFormData?

> `optional` **onFormData?**: `EventHandlerUnion`\<`HTMLDivElement`, `FormDataEvent`, `EventHandler`\<`HTMLDivElement`, `FormDataEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:790

#### Inherited from

`ViewportComponentAttributes.onFormData`

***

### onFullscreenChange?

> `optional` **onFullscreenChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:791

#### Inherited from

`ViewportComponentAttributes.onFullscreenChange`

***

### onFullscreenError?

> `optional` **onFullscreenError?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:792

#### Inherited from

`ViewportComponentAttributes.onFullscreenError`

***

### onPointerRawUpdate?

> `optional` **onPointerRawUpdate?**: `EventHandlerUnion`\<`HTMLDivElement`, `PointerEvent`, `EventHandler`\<`HTMLDivElement`, `PointerEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:822

#### Inherited from

`ViewportComponentAttributes.onPointerRawUpdate`

***

### onScrollSnapChange?

> `optional` **onScrollSnapChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `SnapEvent`, `EventHandler`\<`HTMLDivElement`, `SnapEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:830

#### Inherited from

`ViewportComponentAttributes.onScrollSnapChange`

***

### onScrollSnapChanging?

> `optional` **onScrollSnapChanging?**: `EventHandlerUnion`\<`HTMLDivElement`, `SnapEvent`, `EventHandler`\<`HTMLDivElement`, `SnapEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:831

#### Inherited from

`ViewportComponentAttributes.onScrollSnapChanging`

***

### onSecurityPolicyViolation?

> `optional` **onSecurityPolicyViolation?**: `EventHandlerUnion`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`, `EventHandler`\<`HTMLDivElement`, `SecurityPolicyViolationEvent`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:832

#### Inherited from

`ViewportComponentAttributes.onSecurityPolicyViolation`

***

### onSelectionChange?

> `optional` **onSelectionChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:836

#### Inherited from

`ViewportComponentAttributes.onSelectionChange`

***

### onSelectStart?

> `optional` **onSelectStart?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:837

#### Inherited from

`ViewportComponentAttributes.onSelectStart`

***

### onSlotChange?

> `optional` **onSlotChange?**: `EventHandlerUnion`\<`HTMLDivElement`, `Event`, `EventHandler`\<`HTMLDivElement`, `Event`\>\>

Defined in: node\_modules/@solidjs/web/types/jsx.d.ts:838

#### Inherited from

`ViewportComponentAttributes.onSlotChange`

***

### style?

> `optional` **style?**: `CSSProperties`

Defined in: [src/solid/types.ts:7](https://github.com/inokawa/virtua/blob/4504b7c23d500b443f9928025de6f1c2efdb737f/src/solid/types.ts#L7)

#### Inherited from

`ViewportComponentAttributes.style`
