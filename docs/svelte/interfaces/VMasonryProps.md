[**API**](../../API.md)

***

# Interface: VMasonryProps\<T\>

Defined in: [src/svelte/VMasonry.type.ts:8](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L8)

Props of [VMasonry](../variables/VList.md).

## Extends

- `ViewportComponentAttributes`

## Type Parameters

### T

`T`

## Indexable

> \[`key`: `symbol`\]: `false` \| `Attachment`\<`HTMLDivElement`\> \| `null` \| `undefined`

> \[`key`: `` `data-${string}` ``\]: `any`

## Properties

### data

> **data**: readonly `T`[]

Defined in: [src/svelte/VMasonry.type.ts:12](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L12)

The data items rendered by this component.

***

### children

> **children**: `Snippet`\<\[`T`, `number`\]\>

Defined in: [src/svelte/VMasonry.type.ts:16](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L16)

The elements renderer snippet.

***

### getKey?

> `optional` **getKey?**: (`data`, `index`) => `string` \| `number`

Defined in: [src/svelte/VMasonry.type.ts:21](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L21)

Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.

#### Parameters

##### data

`T`

##### index

`number`

#### Returns

`string` \| `number`

#### Default

```ts
defaultGetKey (returns index of item)
```

***

### lanes

> **lanes**: `number`

Defined in: [src/svelte/VMasonry.type.ts:25](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L25)

The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.

***

### gap?

> `optional` **gap?**: `number`

Defined in: [src/svelte/VMasonry.type.ts:30](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L30)

The gap between the items and the lanes in pixels, which is not included in the sizes.

#### Default Value

```ts
0
```

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/svelte/VMasonry.type.ts:37](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L37)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/svelte/VMasonry.type.ts:42](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L42)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/svelte/VMasonry.type.ts:46](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L46)

List of indexes that should be always mounted, even when off screen.

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/svelte/VMasonry.type.ts:52](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L52)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VMasonryHandle.getCache](VMasonryHandle.md#getcache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

***

### onscroll?

> `optional` **onscroll?**: (`offset`) => `void`

Defined in: [src/svelte/VMasonry.type.ts:57](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L57)

Callback invoked whenever scroll offset changes.

#### Parameters

##### offset

`number`

Current scrollTop.

#### Returns

`void`

***

### onscrollend?

> `optional` **onscrollend?**: () => `void`

Defined in: [src/svelte/VMasonry.type.ts:61](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L61)

Callback invoked when scrolling stops.

#### Returns

`void`

***

### onresize?

> `optional` **onresize?**: () => `void`

Defined in: [src/svelte/VMasonry.type.ts:65](https://github.com/inokawa/virtua/blob/ebdd6cc8543da115845328fdabf9a0214eec12b8/src/svelte/VMasonry.type.ts#L65)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

***

### slot?

> `optional` **slot?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:777

#### Inherited from

`ViewportComponentAttributes.slot`

***

### style?

> `optional` **style?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:779

#### Inherited from

`ViewportComponentAttributes.style`

***

### title?

> `optional` **title?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:781

#### Inherited from

`ViewportComponentAttributes.title`

***

### dir?

> `optional` **dir?**: `"rtl"` \| `"auto"` \| `"ltr"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:759

#### Inherited from

`ViewportComponentAttributes.dir`

***

### property?

> `optional` **property?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:798

#### Inherited from

`ViewportComponentAttributes.property`

***

### is?

> `optional` **is?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:835

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

`ViewportComponentAttributes.is`

***

### draggable?

> `optional` **draggable?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:760

#### Inherited from

`ViewportComponentAttributes.draggable`

***

### hidden?

> `optional` **hidden?**: `boolean` \| `""` \| `"until-found"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:772

#### Inherited from

`ViewportComponentAttributes.hidden`

***

### id?

> `optional` **id?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:773

#### Inherited from

`ViewportComponentAttributes.id`

***

### lang?

> `optional` **lang?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:774

#### Inherited from

`ViewportComponentAttributes.lang`

***

### translate?

> `optional` **translate?**: `""` \| `"yes"` \| `"no"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:782

#### Inherited from

`ViewportComponentAttributes.translate`

***

### role?

> `optional` **role?**: `AriaRole` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:791

#### Inherited from

`ViewportComponentAttributes.role`

***

### about?

> `optional` **about?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:794

#### Inherited from

`ViewportComponentAttributes.about`

***

### datatype?

> `optional` **datatype?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:795

#### Inherited from

`ViewportComponentAttributes.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/svelte/elements.d.ts:796

#### Inherited from

`ViewportComponentAttributes.inlist`

***

### prefix?

> `optional` **prefix?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:797

#### Inherited from

`ViewportComponentAttributes.prefix`

***

### resource?

> `optional` **resource?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:799

#### Inherited from

`ViewportComponentAttributes.resource`

***

### typeof?

> `optional` **typeof?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:800

#### Inherited from

`ViewportComponentAttributes.typeof`

***

### vocab?

> `optional` **vocab?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:801

#### Inherited from

`ViewportComponentAttributes.vocab`

***

### color?

> `optional` **color?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:805

#### Inherited from

`ViewportComponentAttributes.color`

***

### results?

> `optional` **results?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:811

#### Inherited from

`ViewportComponentAttributes.results`

***

### security?

> `optional` **security?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:812

#### Inherited from

`ViewportComponentAttributes.security`

***

### unselectable?

> `optional` **unselectable?**: `"off"` \| `"on"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:813

#### Inherited from

`ViewportComponentAttributes.unselectable`

***

### popover?

> `optional` **popover?**: `""` \| `"auto"` \| `"manual"` \| `"hint"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:784

#### Inherited from

`ViewportComponentAttributes.popover`

***

### inert?

> `optional` **inert?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:783

#### Inherited from

`ViewportComponentAttributes.inert`

***

### part?

> `optional` **part?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:775

#### Inherited from

`ViewportComponentAttributes.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:481

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:483

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:488

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-busy?

> `optional` **aria-busy?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:490

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:495

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:500

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:505

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colspan?

> `optional` **aria-colspan?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:510

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:515

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `"time"` \| `"page"` \| `"step"` \| `"location"` \| `"date"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:517

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:522

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-details?

> `optional` **aria-details?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:527

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:532

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:537

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:542

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:544

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:549

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:554

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `"dialog"` \| `"menu"` \| `"grid"` \| `"listbox"` \| `"tree"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:556

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:561

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `"grammar"` \| `"spelling"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:566

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:568

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:573

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:578

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:580

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:582

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:584

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:586

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:588

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:590

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:596

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:601

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:606

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:611

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:616

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:621

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:635

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:637

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:642

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:647

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:652

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:657

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:662

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:664

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:666

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:668

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:673

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:675

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

***

### contextmenu?

> `optional` **contextmenu?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:758

#### Inherited from

`ViewportComponentAttributes.contextmenu`

***

### radiogroup?

> `optional` **radiogroup?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:788

#### Inherited from

`ViewportComponentAttributes.radiogroup`

***

### class?

> `optional` **class?**: `ClassValue` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:756

#### Inherited from

`ViewportComponentAttributes.class`

***

### onabort?

> `optional` **onabort?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:193

#### Inherited from

`ViewportComponentAttributes.onabort`

***

### onanimationend?

> `optional` **onanimationend?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:403

#### Inherited from

`ViewportComponentAttributes.onanimationend`

***

### onanimationiteration?

> `optional` **onanimationiteration?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:406

#### Inherited from

`ViewportComponentAttributes.onanimationiteration`

***

### onanimationstart?

> `optional` **onanimationstart?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:400

#### Inherited from

`ViewportComponentAttributes.onanimationstart`

***

### onauxclick?

> `optional` **onauxclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:264

#### Inherited from

`ViewportComponentAttributes.onauxclick`

***

### onbeforeinput?

> `optional` **onbeforeinput?**: `EventHandler`\<`InputEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:131

#### Inherited from

`ViewportComponentAttributes.onbeforeinput`

***

### onbeforematch?

> `optional` **onbeforematch?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:452

#### Inherited from

`ViewportComponentAttributes.onbeforematch`

***

### onbeforetoggle?

> `optional` **onbeforetoggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:160

#### Inherited from

`ViewportComponentAttributes.onbeforetoggle`

***

### onblur?

> `optional` **onblur?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:123

#### Inherited from

`ViewportComponentAttributes.onblur`

***

### oncancel?

> `optional` **oncancel?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:455

#### Inherited from

`ViewportComponentAttributes.oncancel`

***

### oncanplay?

> `optional` **oncanplay?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:196

#### Inherited from

`ViewportComponentAttributes.oncanplay`

***

### oncanplaythrough?

> `optional` **oncanplaythrough?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:199

#### Inherited from

`ViewportComponentAttributes.oncanplaythrough`

***

### onchange?

> `optional` **onchange?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:128

#### Inherited from

`ViewportComponentAttributes.onchange`

***

### onclick?

> `optional` **onclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:267

#### Inherited from

`ViewportComponentAttributes.onclick`

***

### onclose?

> `optional` **onclose?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:458

#### Inherited from

`ViewportComponentAttributes.onclose`

***

### oncontextmenu?

> `optional` **oncontextmenu?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:270

#### Inherited from

`ViewportComponentAttributes.oncontextmenu`

***

### oncopy?

> `optional` **oncopy?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:92

#### Inherited from

`ViewportComponentAttributes.oncopy`

***

### oncuechange?

> `optional` **oncuechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:202

#### Inherited from

`ViewportComponentAttributes.oncuechange`

***

### oncut?

> `optional` **oncut?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:95

#### Inherited from

`ViewportComponentAttributes.oncut`

***

### ondblclick?

> `optional` **ondblclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:273

#### Inherited from

`ViewportComponentAttributes.ondblclick`

***

### ondrag?

> `optional` **ondrag?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:276

#### Inherited from

`ViewportComponentAttributes.ondrag`

***

### ondragend?

> `optional` **ondragend?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:279

#### Inherited from

`ViewportComponentAttributes.ondragend`

***

### ondragenter?

> `optional` **ondragenter?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:282

#### Inherited from

`ViewportComponentAttributes.ondragenter`

***

### ondragleave?

> `optional` **ondragleave?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:288

#### Inherited from

`ViewportComponentAttributes.ondragleave`

***

### ondragover?

> `optional` **ondragover?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:291

#### Inherited from

`ViewportComponentAttributes.ondragover`

***

### ondragstart?

> `optional` **ondragstart?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:294

#### Inherited from

`ViewportComponentAttributes.ondragstart`

***

### ondrop?

> `optional` **ondrop?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:297

#### Inherited from

`ViewportComponentAttributes.ondrop`

***

### ondurationchange?

> `optional` **ondurationchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:205

#### Inherited from

`ViewportComponentAttributes.ondurationchange`

***

### onemptied?

> `optional` **onemptied?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:208

#### Inherited from

`ViewportComponentAttributes.onemptied`

***

### onended?

> `optional` **onended?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:214

#### Inherited from

`ViewportComponentAttributes.onended`

***

### onerror?

> `optional` **onerror?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:155

#### Inherited from

`ViewportComponentAttributes.onerror`

***

### onfocus?

> `optional` **onfocus?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:114

#### Inherited from

`ViewportComponentAttributes.onfocus`

***

### onformdata?

> `optional` **onformdata?**: `EventHandler`\<`FormDataEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:147

#### Inherited from

`ViewportComponentAttributes.onformdata`

***

### ongotpointercapture?

> `optional` **ongotpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:346

#### Inherited from

`ViewportComponentAttributes.ongotpointercapture`

***

### oninput?

> `optional` **oninput?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:135

#### Inherited from

`ViewportComponentAttributes.oninput`

***

### oninvalid?

> `optional` **oninvalid?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:144

#### Inherited from

`ViewportComponentAttributes.oninvalid`

***

### onkeydown?

> `optional` **onkeydown?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:182

#### Inherited from

`ViewportComponentAttributes.onkeydown`

***

### onkeypress?

> `optional` **onkeypress?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:185

#### Inherited from

`ViewportComponentAttributes.onkeypress`

***

### onkeyup?

> `optional` **onkeyup?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:188

#### Inherited from

`ViewportComponentAttributes.onkeyup`

***

### onload?

> `optional` **onload?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:152

#### Inherited from

`ViewportComponentAttributes.onload`

***

### onloadeddata?

> `optional` **onloadeddata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:217

#### Inherited from

`ViewportComponentAttributes.onloadeddata`

***

### onloadedmetadata?

> `optional` **onloadedmetadata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:220

#### Inherited from

`ViewportComponentAttributes.onloadedmetadata`

***

### onloadstart?

> `optional` **onloadstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:223

#### Inherited from

`ViewportComponentAttributes.onloadstart`

***

### onlostpointercapture?

> `optional` **onlostpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:373

#### Inherited from

`ViewportComponentAttributes.onlostpointercapture`

***

### onmousedown?

> `optional` **onmousedown?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:300

#### Inherited from

`ViewportComponentAttributes.onmousedown`

***

### onmouseenter?

> `optional` **onmouseenter?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:303

#### Inherited from

`ViewportComponentAttributes.onmouseenter`

***

### onmouseleave?

> `optional` **onmouseleave?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:305

#### Inherited from

`ViewportComponentAttributes.onmouseleave`

***

### onmousemove?

> `optional` **onmousemove?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:307

#### Inherited from

`ViewportComponentAttributes.onmousemove`

***

### onmouseout?

> `optional` **onmouseout?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:310

#### Inherited from

`ViewportComponentAttributes.onmouseout`

***

### onmouseover?

> `optional` **onmouseover?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:313

#### Inherited from

`ViewportComponentAttributes.onmouseover`

***

### onmouseup?

> `optional` **onmouseup?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:316

#### Inherited from

`ViewportComponentAttributes.onmouseup`

***

### onpaste?

> `optional` **onpaste?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:98

#### Inherited from

`ViewportComponentAttributes.onpaste`

***

### onpause?

> `optional` **onpause?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:226

#### Inherited from

`ViewportComponentAttributes.onpause`

***

### onplay?

> `optional` **onplay?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:229

#### Inherited from

`ViewportComponentAttributes.onplay`

***

### onplaying?

> `optional` **onplaying?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:232

#### Inherited from

`ViewportComponentAttributes.onplaying`

***

### onpointercancel?

> `optional` **onpointercancel?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:349

#### Inherited from

`ViewportComponentAttributes.onpointercancel`

***

### onpointerdown?

> `optional` **onpointerdown?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:352

#### Inherited from

`ViewportComponentAttributes.onpointerdown`

***

### onpointerenter?

> `optional` **onpointerenter?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:355

#### Inherited from

`ViewportComponentAttributes.onpointerenter`

***

### onpointerleave?

> `optional` **onpointerleave?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:358

#### Inherited from

`ViewportComponentAttributes.onpointerleave`

***

### onpointermove?

> `optional` **onpointermove?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:361

#### Inherited from

`ViewportComponentAttributes.onpointermove`

***

### onpointerout?

> `optional` **onpointerout?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:364

#### Inherited from

`ViewportComponentAttributes.onpointerout`

***

### onpointerover?

> `optional` **onpointerover?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:367

#### Inherited from

`ViewportComponentAttributes.onpointerover`

***

### onpointerup?

> `optional` **onpointerup?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:370

#### Inherited from

`ViewportComponentAttributes.onpointerup`

***

### onprogress?

> `optional` **onprogress?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:235

#### Inherited from

`ViewportComponentAttributes.onprogress`

***

### onratechange?

> `optional` **onratechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:238

#### Inherited from

`ViewportComponentAttributes.onratechange`

***

### onreset?

> `optional` **onreset?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:138

#### Inherited from

`ViewportComponentAttributes.onreset`

***

### onseeked?

> `optional` **onseeked?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:241

#### Inherited from

`ViewportComponentAttributes.onseeked`

***

### onseeking?

> `optional` **onseeking?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:244

#### Inherited from

`ViewportComponentAttributes.onseeking`

***

### onselect?

> `optional` **onselect?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:321

#### Inherited from

`ViewportComponentAttributes.onselect`

***

### onselectionchange?

> `optional` **onselectionchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:324

#### Inherited from

`ViewportComponentAttributes.onselectionchange`

***

### onselectstart?

> `optional` **onselectstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:327

#### Inherited from

`ViewportComponentAttributes.onselectstart`

***

### onstalled?

> `optional` **onstalled?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:247

#### Inherited from

`ViewportComponentAttributes.onstalled`

***

### onsubmit?

> `optional` **onsubmit?**: `EventHandler`\<`SubmitEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:141

#### Inherited from

`ViewportComponentAttributes.onsubmit`

***

### onsuspend?

> `optional` **onsuspend?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:250

#### Inherited from

`ViewportComponentAttributes.onsuspend`

***

### ontimeupdate?

> `optional` **ontimeupdate?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:253

#### Inherited from

`ViewportComponentAttributes.ontimeupdate`

***

### ontoggle?

> `optional` **ontoggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:163

#### Inherited from

`ViewportComponentAttributes.ontoggle`

***

### ontouchcancel?

> `optional` **ontouchcancel?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:332

#### Inherited from

`ViewportComponentAttributes.ontouchcancel`

***

### ontouchend?

> `optional` **ontouchend?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:335

#### Inherited from

`ViewportComponentAttributes.ontouchend`

***

### ontouchmove?

> `optional` **ontouchmove?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:338

#### Inherited from

`ViewportComponentAttributes.ontouchmove`

***

### ontouchstart?

> `optional` **ontouchstart?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:341

#### Inherited from

`ViewportComponentAttributes.ontouchstart`

***

### ontransitioncancel?

> `optional` **ontransitioncancel?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:420

#### Inherited from

`ViewportComponentAttributes.ontransitioncancel`

***

### ontransitionend?

> `optional` **ontransitionend?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:417

#### Inherited from

`ViewportComponentAttributes.ontransitionend`

***

### ontransitionrun?

> `optional` **ontransitionrun?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:414

#### Inherited from

`ViewportComponentAttributes.ontransitionrun`

***

### ontransitionstart?

> `optional` **ontransitionstart?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:411

#### Inherited from

`ViewportComponentAttributes.ontransitionstart`

***

### onvolumechange?

> `optional` **onvolumechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:256

#### Inherited from

`ViewportComponentAttributes.onvolumechange`

***

### onwaiting?

> `optional` **onwaiting?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:259

#### Inherited from

`ViewportComponentAttributes.onwaiting`

***

### onwheel?

> `optional` **onwheel?**: `WheelEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:395

#### Inherited from

`ViewportComponentAttributes.onwheel`

***

### ongamepadconnected?

> `optional` **ongamepadconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:378

#### Inherited from

`ViewportComponentAttributes.ongamepadconnected`

***

### ongamepaddisconnected?

> `optional` **ongamepaddisconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:380

#### Inherited from

`ViewportComponentAttributes.ongamepaddisconnected`

***

### onmessage?

> `optional` **onmessage?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:439

#### Inherited from

`ViewportComponentAttributes.onmessage`

***

### onmessageerror?

> `optional` **onmessageerror?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:442

#### Inherited from

`ViewportComponentAttributes.onmessageerror`

***

### accesskey?

> `optional` **accesskey?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:753

#### Inherited from

`ViewportComponentAttributes.accesskey`

***

### autocapitalize?

> `optional` **autocapitalize?**: `"none"` \| `"off"` \| `"on"` \| `"sentences"` \| `"words"` \| `"characters"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:754

#### Inherited from

`ViewportComponentAttributes.autocapitalize`

***

### contenteditable?

> `optional` **contenteditable?**: `"inherit"` \| `"plaintext-only"` \| `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:757

#### Inherited from

`ViewportComponentAttributes.contenteditable`

***

### enterkeyhint?

> `optional` **enterkeyhint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:762

#### Inherited from

`ViewportComponentAttributes.enterkeyhint`

***

### inputmode?

> `optional` **inputmode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:820

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

`ViewportComponentAttributes.inputmode`

***

### spellcheck?

> `optional` **spellcheck?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:778

#### Inherited from

`ViewportComponentAttributes.spellcheck`

***

### itemid?

> `optional` **itemid?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:809

#### Inherited from

`ViewportComponentAttributes.itemid`

***

### itemprop?

> `optional` **itemprop?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:806

#### Inherited from

`ViewportComponentAttributes.itemprop`

***

### itemref?

> `optional` **itemref?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:810

#### Inherited from

`ViewportComponentAttributes.itemref`

***

### itemscope?

> `optional` **itemscope?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:807

#### Inherited from

`ViewportComponentAttributes.itemscope`

***

### itemtype?

> `optional` **itemtype?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:808

#### Inherited from

`ViewportComponentAttributes.itemtype`

***

### autofocus?

> `optional` **autofocus?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:755

#### Inherited from

`ViewportComponentAttributes.autofocus`

***

### elementtiming?

> `optional` **elementtiming?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:761

#### Inherited from

`ViewportComponentAttributes.elementtiming`

***

### tabindex?

> `optional` **tabindex?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:780

#### Inherited from

`ViewportComponentAttributes.tabindex`

***

### oncompositionend?

> `optional` **oncompositionend?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:103

#### Inherited from

`ViewportComponentAttributes.oncompositionend`

***

### oncompositionstart?

> `optional` **oncompositionstart?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:106

#### Inherited from

`ViewportComponentAttributes.oncompositionstart`

***

### oncompositionupdate?

> `optional` **oncompositionupdate?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:109

#### Inherited from

`ViewportComponentAttributes.oncompositionupdate`

***

### oncontentvisibilityautostatechange?

> `optional` **oncontentvisibilityautostatechange?**: `ContentVisibilityAutoStateChangeEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:171

#### Inherited from

`ViewportComponentAttributes.oncontentvisibilityautostatechange`

***

### ondragexit?

> `optional` **ondragexit?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:285

#### Inherited from

`ViewportComponentAttributes.ondragexit`

***

### onfocusin?

> `optional` **onfocusin?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:117

#### Inherited from

`ViewportComponentAttributes.onfocusin`

***

### onfocusout?

> `optional` **onfocusout?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:120

#### Inherited from

`ViewportComponentAttributes.onfocusout`

***

### onfullscreenchange?

> `optional` **onfullscreenchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:461

#### Inherited from

`ViewportComponentAttributes.onfullscreenchange`

***

### onfullscreenerror?

> `optional` **onfullscreenerror?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:464

#### Inherited from

`ViewportComponentAttributes.onfullscreenerror`

***

### on:abort?

> `optional` **on:abort?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:192

#### Inherited from

`ViewportComponentAttributes.on:abort`

***

### on:animationend?

> `optional` **on:animationend?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:402

#### Inherited from

`ViewportComponentAttributes.on:animationend`

***

### on:animationiteration?

> `optional` **on:animationiteration?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:405

#### Inherited from

`ViewportComponentAttributes.on:animationiteration`

***

### on:animationstart?

> `optional` **on:animationstart?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:399

#### Inherited from

`ViewportComponentAttributes.on:animationstart`

***

### on:auxclick?

> `optional` **on:auxclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:263

#### Inherited from

`ViewportComponentAttributes.on:auxclick`

***

### on:beforeinput?

> `optional` **on:beforeinput?**: `EventHandler`\<`InputEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:130

#### Inherited from

`ViewportComponentAttributes.on:beforeinput`

***

### on:beforematch?

> `optional` **on:beforematch?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:451

#### Inherited from

`ViewportComponentAttributes.on:beforematch`

***

### on:beforetoggle?

> `optional` **on:beforetoggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:159

#### Inherited from

`ViewportComponentAttributes.on:beforetoggle`

***

### on:blur?

> `optional` **on:blur?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:122

#### Inherited from

`ViewportComponentAttributes.on:blur`

***

### on:cancel?

> `optional` **on:cancel?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:454

#### Inherited from

`ViewportComponentAttributes.on:cancel`

***

### on:canplay?

> `optional` **on:canplay?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:195

#### Inherited from

`ViewportComponentAttributes.on:canplay`

***

### on:canplaythrough?

> `optional` **on:canplaythrough?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:198

#### Inherited from

`ViewportComponentAttributes.on:canplaythrough`

***

### on:change?

> `optional` **on:change?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:127

#### Inherited from

`ViewportComponentAttributes.on:change`

***

### on:click?

> `optional` **on:click?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:266

#### Inherited from

`ViewportComponentAttributes.on:click`

***

### on:close?

> `optional` **on:close?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:457

#### Inherited from

`ViewportComponentAttributes.on:close`

***

### on:compositionend?

> `optional` **on:compositionend?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:102

#### Inherited from

`ViewportComponentAttributes.on:compositionend`

***

### on:compositionstart?

> `optional` **on:compositionstart?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:105

#### Inherited from

`ViewportComponentAttributes.on:compositionstart`

***

### on:compositionupdate?

> `optional` **on:compositionupdate?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:108

#### Inherited from

`ViewportComponentAttributes.on:compositionupdate`

***

### on:contentvisibilityautostatechange?

> `optional` **on:contentvisibilityautostatechange?**: `ContentVisibilityAutoStateChangeEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:167

#### Inherited from

`ViewportComponentAttributes.on:contentvisibilityautostatechange`

***

### on:contextmenu?

> `optional` **on:contextmenu?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:269

#### Inherited from

`ViewportComponentAttributes.on:contextmenu`

***

### on:copy?

> `optional` **on:copy?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:91

#### Inherited from

`ViewportComponentAttributes.on:copy`

***

### on:cuechange?

> `optional` **on:cuechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:201

#### Inherited from

`ViewportComponentAttributes.on:cuechange`

***

### on:cut?

> `optional` **on:cut?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:94

#### Inherited from

`ViewportComponentAttributes.on:cut`

***

### on:dblclick?

> `optional` **on:dblclick?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:272

#### Inherited from

`ViewportComponentAttributes.on:dblclick`

***

### on:drag?

> `optional` **on:drag?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:275

#### Inherited from

`ViewportComponentAttributes.on:drag`

***

### on:dragend?

> `optional` **on:dragend?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:278

#### Inherited from

`ViewportComponentAttributes.on:dragend`

***

### on:dragenter?

> `optional` **on:dragenter?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:281

#### Inherited from

`ViewportComponentAttributes.on:dragenter`

***

### on:dragexit?

> `optional` **on:dragexit?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:284

#### Inherited from

`ViewportComponentAttributes.on:dragexit`

***

### on:dragleave?

> `optional` **on:dragleave?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:287

#### Inherited from

`ViewportComponentAttributes.on:dragleave`

***

### on:dragover?

> `optional` **on:dragover?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:290

#### Inherited from

`ViewportComponentAttributes.on:dragover`

***

### on:dragstart?

> `optional` **on:dragstart?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:293

#### Inherited from

`ViewportComponentAttributes.on:dragstart`

***

### on:drop?

> `optional` **on:drop?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:296

#### Inherited from

`ViewportComponentAttributes.on:drop`

***

### on:durationchange?

> `optional` **on:durationchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:204

#### Inherited from

`ViewportComponentAttributes.on:durationchange`

***

### on:emptied?

> `optional` **on:emptied?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:207

#### Inherited from

`ViewportComponentAttributes.on:emptied`

***

### on:ended?

> `optional` **on:ended?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:213

#### Inherited from

`ViewportComponentAttributes.on:ended`

***

### on:error?

> `optional` **on:error?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:154

#### Inherited from

`ViewportComponentAttributes.on:error`

***

### on:focus?

> `optional` **on:focus?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:113

#### Inherited from

`ViewportComponentAttributes.on:focus`

***

### on:focusin?

> `optional` **on:focusin?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:116

#### Inherited from

`ViewportComponentAttributes.on:focusin`

***

### on:focusout?

> `optional` **on:focusout?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:119

#### Inherited from

`ViewportComponentAttributes.on:focusout`

***

### on:formdata?

> `optional` **on:formdata?**: `EventHandler`\<`FormDataEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:146

#### Inherited from

`ViewportComponentAttributes.on:formdata`

***

### on:fullscreenchange?

> `optional` **on:fullscreenchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:460

#### Inherited from

`ViewportComponentAttributes.on:fullscreenchange`

***

### on:fullscreenerror?

> `optional` **on:fullscreenerror?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:463

#### Inherited from

`ViewportComponentAttributes.on:fullscreenerror`

***

### on:gotpointercapture?

> `optional` **on:gotpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:345

#### Inherited from

`ViewportComponentAttributes.on:gotpointercapture`

***

### on:input?

> `optional` **on:input?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:134

#### Inherited from

`ViewportComponentAttributes.on:input`

***

### on:invalid?

> `optional` **on:invalid?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:143

#### Inherited from

`ViewportComponentAttributes.on:invalid`

***

### on:keydown?

> `optional` **on:keydown?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:181

#### Inherited from

`ViewportComponentAttributes.on:keydown`

***

### on:keypress?

> `optional` **on:keypress?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:184

#### Inherited from

`ViewportComponentAttributes.on:keypress`

***

### on:keyup?

> `optional` **on:keyup?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:187

#### Inherited from

`ViewportComponentAttributes.on:keyup`

***

### on:load?

> `optional` **on:load?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:151

#### Inherited from

`ViewportComponentAttributes.on:load`

***

### on:loadeddata?

> `optional` **on:loadeddata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:216

#### Inherited from

`ViewportComponentAttributes.on:loadeddata`

***

### on:loadedmetadata?

> `optional` **on:loadedmetadata?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:219

#### Inherited from

`ViewportComponentAttributes.on:loadedmetadata`

***

### on:loadstart?

> `optional` **on:loadstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:222

#### Inherited from

`ViewportComponentAttributes.on:loadstart`

***

### on:lostpointercapture?

> `optional` **on:lostpointercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:372

#### Inherited from

`ViewportComponentAttributes.on:lostpointercapture`

***

### on:mousedown?

> `optional` **on:mousedown?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:299

#### Inherited from

`ViewportComponentAttributes.on:mousedown`

***

### on:mouseenter?

> `optional` **on:mouseenter?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:302

#### Inherited from

`ViewportComponentAttributes.on:mouseenter`

***

### on:mouseleave?

> `optional` **on:mouseleave?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:304

#### Inherited from

`ViewportComponentAttributes.on:mouseleave`

***

### on:mousemove?

> `optional` **on:mousemove?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:306

#### Inherited from

`ViewportComponentAttributes.on:mousemove`

***

### on:mouseout?

> `optional` **on:mouseout?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:309

#### Inherited from

`ViewportComponentAttributes.on:mouseout`

***

### on:mouseover?

> `optional` **on:mouseover?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:312

#### Inherited from

`ViewportComponentAttributes.on:mouseover`

***

### on:mouseup?

> `optional` **on:mouseup?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:315

#### Inherited from

`ViewportComponentAttributes.on:mouseup`

***

### on:paste?

> `optional` **on:paste?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:97

#### Inherited from

`ViewportComponentAttributes.on:paste`

***

### on:pause?

> `optional` **on:pause?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:225

#### Inherited from

`ViewportComponentAttributes.on:pause`

***

### on:play?

> `optional` **on:play?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:228

#### Inherited from

`ViewportComponentAttributes.on:play`

***

### on:playing?

> `optional` **on:playing?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:231

#### Inherited from

`ViewportComponentAttributes.on:playing`

***

### on:pointercancel?

> `optional` **on:pointercancel?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:348

#### Inherited from

`ViewportComponentAttributes.on:pointercancel`

***

### on:pointerdown?

> `optional` **on:pointerdown?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:351

#### Inherited from

`ViewportComponentAttributes.on:pointerdown`

***

### on:pointerenter?

> `optional` **on:pointerenter?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:354

#### Inherited from

`ViewportComponentAttributes.on:pointerenter`

***

### on:pointerleave?

> `optional` **on:pointerleave?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:357

#### Inherited from

`ViewportComponentAttributes.on:pointerleave`

***

### on:pointermove?

> `optional` **on:pointermove?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:360

#### Inherited from

`ViewportComponentAttributes.on:pointermove`

***

### on:pointerout?

> `optional` **on:pointerout?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:363

#### Inherited from

`ViewportComponentAttributes.on:pointerout`

***

### on:pointerover?

> `optional` **on:pointerover?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:366

#### Inherited from

`ViewportComponentAttributes.on:pointerover`

***

### on:pointerup?

> `optional` **on:pointerup?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:369

#### Inherited from

`ViewportComponentAttributes.on:pointerup`

***

### on:progress?

> `optional` **on:progress?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:234

#### Inherited from

`ViewportComponentAttributes.on:progress`

***

### on:ratechange?

> `optional` **on:ratechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:237

#### Inherited from

`ViewportComponentAttributes.on:ratechange`

***

### on:reset?

> `optional` **on:reset?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:137

#### Inherited from

`ViewportComponentAttributes.on:reset`

***

### on:resize?

> `optional` **on:resize?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:389

#### Inherited from

`ViewportComponentAttributes.on:resize`

***

### on:scroll?

> `optional` **on:scroll?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:383

#### Inherited from

`ViewportComponentAttributes.on:scroll`

***

### on:scrollend?

> `optional` **on:scrollend?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:386

#### Inherited from

`ViewportComponentAttributes.on:scrollend`

***

### on:seeked?

> `optional` **on:seeked?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:240

#### Inherited from

`ViewportComponentAttributes.on:seeked`

***

### on:seeking?

> `optional` **on:seeking?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:243

#### Inherited from

`ViewportComponentAttributes.on:seeking`

***

### on:select?

> `optional` **on:select?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:320

#### Inherited from

`ViewportComponentAttributes.on:select`

***

### on:selectionchange?

> `optional` **on:selectionchange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:323

#### Inherited from

`ViewportComponentAttributes.on:selectionchange`

***

### on:selectstart?

> `optional` **on:selectstart?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:326

#### Inherited from

`ViewportComponentAttributes.on:selectstart`

***

### on:stalled?

> `optional` **on:stalled?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:246

#### Inherited from

`ViewportComponentAttributes.on:stalled`

***

### on:submit?

> `optional` **on:submit?**: `EventHandler`\<`SubmitEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:140

#### Inherited from

`ViewportComponentAttributes.on:submit`

***

### on:suspend?

> `optional` **on:suspend?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:249

#### Inherited from

`ViewportComponentAttributes.on:suspend`

***

### on:timeupdate?

> `optional` **on:timeupdate?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:252

#### Inherited from

`ViewportComponentAttributes.on:timeupdate`

***

### on:toggle?

> `optional` **on:toggle?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:162

#### Inherited from

`ViewportComponentAttributes.on:toggle`

***

### on:touchcancel?

> `optional` **on:touchcancel?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:331

#### Inherited from

`ViewportComponentAttributes.on:touchcancel`

***

### on:touchend?

> `optional` **on:touchend?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:334

#### Inherited from

`ViewportComponentAttributes.on:touchend`

***

### on:touchmove?

> `optional` **on:touchmove?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:337

#### Inherited from

`ViewportComponentAttributes.on:touchmove`

***

### on:touchstart?

> `optional` **on:touchstart?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:340

#### Inherited from

`ViewportComponentAttributes.on:touchstart`

***

### on:transitioncancel?

> `optional` **on:transitioncancel?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:419

#### Inherited from

`ViewportComponentAttributes.on:transitioncancel`

***

### on:transitionend?

> `optional` **on:transitionend?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:416

#### Inherited from

`ViewportComponentAttributes.on:transitionend`

***

### on:transitionrun?

> `optional` **on:transitionrun?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:413

#### Inherited from

`ViewportComponentAttributes.on:transitionrun`

***

### on:transitionstart?

> `optional` **on:transitionstart?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:410

#### Inherited from

`ViewportComponentAttributes.on:transitionstart`

***

### on:volumechange?

> `optional` **on:volumechange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:255

#### Inherited from

`ViewportComponentAttributes.on:volumechange`

***

### on:waiting?

> `optional` **on:waiting?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:258

#### Inherited from

`ViewportComponentAttributes.on:waiting`

***

### on:wheel?

> `optional` **on:wheel?**: `WheelEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:394

#### Inherited from

`ViewportComponentAttributes.on:wheel`

***

### placeholder?

> `optional` **placeholder?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:776

#### Inherited from

`ViewportComponentAttributes.placeholder`

***

### writingsuggestions?

> `optional` **writingsuggestions?**: `Booleanish` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:785

#### Inherited from

`ViewportComponentAttributes.writingsuggestions`

***

### autosave?

> `optional` **autosave?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:804

#### Inherited from

`ViewportComponentAttributes.autosave`

***

### bind:innerHTML?

> `optional` **bind:innerHTML?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:840

Elements with the contenteditable attribute support `innerHTML`, `textContent` and `innerText` bindings.

#### Inherited from

`ViewportComponentAttributes.bind:innerHTML`

***

### bind:textContent?

> `optional` **bind:textContent?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:844

Elements with the contenteditable attribute support `innerHTML`, `textContent` and `innerText` bindings.

#### Inherited from

`ViewportComponentAttributes.bind:textContent`

***

### bind:innerText?

> `optional` **bind:innerText?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:848

Elements with the contenteditable attribute support `innerHTML`, `textContent` and `innerText` bindings.

#### Inherited from

`ViewportComponentAttributes.bind:innerText`

***

### bind:focused?

> `readonly` `optional` **bind:focused?**: `boolean` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:850

#### Inherited from

`ViewportComponentAttributes.bind:focused`

***

### bind:offsetWidth?

> `readonly` `optional` **bind:offsetWidth?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:851

#### Inherited from

`ViewportComponentAttributes.bind:offsetWidth`

***

### bind:offsetHeight?

> `readonly` `optional` **bind:offsetHeight?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:852

#### Inherited from

`ViewportComponentAttributes.bind:offsetHeight`

***

### oncopycapture?

> `optional` **oncopycapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:93

#### Inherited from

`ViewportComponentAttributes.oncopycapture`

***

### oncutcapture?

> `optional` **oncutcapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:96

#### Inherited from

`ViewportComponentAttributes.oncutcapture`

***

### onpastecapture?

> `optional` **onpastecapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:99

#### Inherited from

`ViewportComponentAttributes.onpastecapture`

***

### oncompositionendcapture?

> `optional` **oncompositionendcapture?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:104

#### Inherited from

`ViewportComponentAttributes.oncompositionendcapture`

***

### oncompositionstartcapture?

> `optional` **oncompositionstartcapture?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:107

#### Inherited from

`ViewportComponentAttributes.oncompositionstartcapture`

***

### oncompositionupdatecapture?

> `optional` **oncompositionupdatecapture?**: `CompositionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:110

#### Inherited from

`ViewportComponentAttributes.oncompositionupdatecapture`

***

### onfocuscapture?

> `optional` **onfocuscapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:115

#### Inherited from

`ViewportComponentAttributes.onfocuscapture`

***

### onfocusincapture?

> `optional` **onfocusincapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:118

#### Inherited from

`ViewportComponentAttributes.onfocusincapture`

***

### onfocusoutcapture?

> `optional` **onfocusoutcapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:121

#### Inherited from

`ViewportComponentAttributes.onfocusoutcapture`

***

### onblurcapture?

> `optional` **onblurcapture?**: `FocusEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:124

#### Inherited from

`ViewportComponentAttributes.onblurcapture`

***

### onchangecapture?

> `optional` **onchangecapture?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:129

#### Inherited from

`ViewportComponentAttributes.onchangecapture`

***

### onbeforeinputcapture?

> `optional` **onbeforeinputcapture?**: `EventHandler`\<`InputEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:132

#### Inherited from

`ViewportComponentAttributes.onbeforeinputcapture`

***

### oninputcapture?

> `optional` **oninputcapture?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:136

#### Inherited from

`ViewportComponentAttributes.oninputcapture`

***

### onresetcapture?

> `optional` **onresetcapture?**: `FormEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:139

#### Inherited from

`ViewportComponentAttributes.onresetcapture`

***

### onsubmitcapture?

> `optional` **onsubmitcapture?**: `EventHandler`\<`SubmitEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:142

#### Inherited from

`ViewportComponentAttributes.onsubmitcapture`

***

### oninvalidcapture?

> `optional` **oninvalidcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:145

#### Inherited from

`ViewportComponentAttributes.oninvalidcapture`

***

### onformdatacapture?

> `optional` **onformdatacapture?**: `EventHandler`\<`FormDataEvent`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:148

#### Inherited from

`ViewportComponentAttributes.onformdatacapture`

***

### onloadcapture?

> `optional` **onloadcapture?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:153

#### Inherited from

`ViewportComponentAttributes.onloadcapture`

***

### onerrorcapture?

> `optional` **onerrorcapture?**: `EventHandler`\<`Event`, `Element`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:156

#### Inherited from

`ViewportComponentAttributes.onerrorcapture`

***

### onbeforetogglecapture?

> `optional` **onbeforetogglecapture?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:161

#### Inherited from

`ViewportComponentAttributes.onbeforetogglecapture`

***

### ontogglecapture?

> `optional` **ontogglecapture?**: `ToggleEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:164

#### Inherited from

`ViewportComponentAttributes.ontogglecapture`

***

### oncontentvisibilityautostatechangecapture?

> `optional` **oncontentvisibilityautostatechangecapture?**: `ContentVisibilityAutoStateChangeEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:175

#### Inherited from

`ViewportComponentAttributes.oncontentvisibilityautostatechangecapture`

***

### onkeydowncapture?

> `optional` **onkeydowncapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:183

#### Inherited from

`ViewportComponentAttributes.onkeydowncapture`

***

### onkeypresscapture?

> `optional` **onkeypresscapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:186

#### Inherited from

`ViewportComponentAttributes.onkeypresscapture`

***

### onkeyupcapture?

> `optional` **onkeyupcapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:189

#### Inherited from

`ViewportComponentAttributes.onkeyupcapture`

***

### onabortcapture?

> `optional` **onabortcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:194

#### Inherited from

`ViewportComponentAttributes.onabortcapture`

***

### oncanplaycapture?

> `optional` **oncanplaycapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:197

#### Inherited from

`ViewportComponentAttributes.oncanplaycapture`

***

### oncanplaythroughcapture?

> `optional` **oncanplaythroughcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:200

#### Inherited from

`ViewportComponentAttributes.oncanplaythroughcapture`

***

### oncuechangecapture?

> `optional` **oncuechangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:203

#### Inherited from

`ViewportComponentAttributes.oncuechangecapture`

***

### ondurationchangecapture?

> `optional` **ondurationchangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:206

#### Inherited from

`ViewportComponentAttributes.ondurationchangecapture`

***

### onemptiedcapture?

> `optional` **onemptiedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:209

#### Inherited from

`ViewportComponentAttributes.onemptiedcapture`

***

### on:encrypted?

> `optional` **on:encrypted?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:210

#### Inherited from

`ViewportComponentAttributes.on:encrypted`

***

### onencrypted?

> `optional` **onencrypted?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:211

#### Inherited from

`ViewportComponentAttributes.onencrypted`

***

### onencryptedcapture?

> `optional` **onencryptedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:212

#### Inherited from

`ViewportComponentAttributes.onencryptedcapture`

***

### onendedcapture?

> `optional` **onendedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:215

#### Inherited from

`ViewportComponentAttributes.onendedcapture`

***

### onloadeddatacapture?

> `optional` **onloadeddatacapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:218

#### Inherited from

`ViewportComponentAttributes.onloadeddatacapture`

***

### onloadedmetadatacapture?

> `optional` **onloadedmetadatacapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:221

#### Inherited from

`ViewportComponentAttributes.onloadedmetadatacapture`

***

### onloadstartcapture?

> `optional` **onloadstartcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:224

#### Inherited from

`ViewportComponentAttributes.onloadstartcapture`

***

### onpausecapture?

> `optional` **onpausecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:227

#### Inherited from

`ViewportComponentAttributes.onpausecapture`

***

### onplaycapture?

> `optional` **onplaycapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:230

#### Inherited from

`ViewportComponentAttributes.onplaycapture`

***

### onplayingcapture?

> `optional` **onplayingcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:233

#### Inherited from

`ViewportComponentAttributes.onplayingcapture`

***

### onprogresscapture?

> `optional` **onprogresscapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:236

#### Inherited from

`ViewportComponentAttributes.onprogresscapture`

***

### onratechangecapture?

> `optional` **onratechangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:239

#### Inherited from

`ViewportComponentAttributes.onratechangecapture`

***

### onseekedcapture?

> `optional` **onseekedcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:242

#### Inherited from

`ViewportComponentAttributes.onseekedcapture`

***

### onseekingcapture?

> `optional` **onseekingcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:245

#### Inherited from

`ViewportComponentAttributes.onseekingcapture`

***

### onstalledcapture?

> `optional` **onstalledcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:248

#### Inherited from

`ViewportComponentAttributes.onstalledcapture`

***

### onsuspendcapture?

> `optional` **onsuspendcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:251

#### Inherited from

`ViewportComponentAttributes.onsuspendcapture`

***

### ontimeupdatecapture?

> `optional` **ontimeupdatecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:254

#### Inherited from

`ViewportComponentAttributes.ontimeupdatecapture`

***

### onvolumechangecapture?

> `optional` **onvolumechangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:257

#### Inherited from

`ViewportComponentAttributes.onvolumechangecapture`

***

### onwaitingcapture?

> `optional` **onwaitingcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:260

#### Inherited from

`ViewportComponentAttributes.onwaitingcapture`

***

### onauxclickcapture?

> `optional` **onauxclickcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:265

#### Inherited from

`ViewportComponentAttributes.onauxclickcapture`

***

### onclickcapture?

> `optional` **onclickcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:268

#### Inherited from

`ViewportComponentAttributes.onclickcapture`

***

### oncontextmenucapture?

> `optional` **oncontextmenucapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:271

#### Inherited from

`ViewportComponentAttributes.oncontextmenucapture`

***

### ondblclickcapture?

> `optional` **ondblclickcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:274

#### Inherited from

`ViewportComponentAttributes.ondblclickcapture`

***

### ondragcapture?

> `optional` **ondragcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:277

#### Inherited from

`ViewportComponentAttributes.ondragcapture`

***

### ondragendcapture?

> `optional` **ondragendcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:280

#### Inherited from

`ViewportComponentAttributes.ondragendcapture`

***

### ondragentercapture?

> `optional` **ondragentercapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:283

#### Inherited from

`ViewportComponentAttributes.ondragentercapture`

***

### ondragexitcapture?

> `optional` **ondragexitcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:286

#### Inherited from

`ViewportComponentAttributes.ondragexitcapture`

***

### ondragleavecapture?

> `optional` **ondragleavecapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:289

#### Inherited from

`ViewportComponentAttributes.ondragleavecapture`

***

### ondragovercapture?

> `optional` **ondragovercapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:292

#### Inherited from

`ViewportComponentAttributes.ondragovercapture`

***

### ondragstartcapture?

> `optional` **ondragstartcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:295

#### Inherited from

`ViewportComponentAttributes.ondragstartcapture`

***

### ondropcapture?

> `optional` **ondropcapture?**: `DragEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:298

#### Inherited from

`ViewportComponentAttributes.ondropcapture`

***

### onmousedowncapture?

> `optional` **onmousedowncapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:301

#### Inherited from

`ViewportComponentAttributes.onmousedowncapture`

***

### onmousemovecapture?

> `optional` **onmousemovecapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:308

#### Inherited from

`ViewportComponentAttributes.onmousemovecapture`

***

### onmouseoutcapture?

> `optional` **onmouseoutcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:311

#### Inherited from

`ViewportComponentAttributes.onmouseoutcapture`

***

### onmouseovercapture?

> `optional` **onmouseovercapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:314

#### Inherited from

`ViewportComponentAttributes.onmouseovercapture`

***

### onmouseupcapture?

> `optional` **onmouseupcapture?**: `MouseEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:317

#### Inherited from

`ViewportComponentAttributes.onmouseupcapture`

***

### onselectcapture?

> `optional` **onselectcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:322

#### Inherited from

`ViewportComponentAttributes.onselectcapture`

***

### onselectionchangecapture?

> `optional` **onselectionchangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:325

#### Inherited from

`ViewportComponentAttributes.onselectionchangecapture`

***

### onselectstartcapture?

> `optional` **onselectstartcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:328

#### Inherited from

`ViewportComponentAttributes.onselectstartcapture`

***

### ontouchcancelcapture?

> `optional` **ontouchcancelcapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:333

#### Inherited from

`ViewportComponentAttributes.ontouchcancelcapture`

***

### ontouchendcapture?

> `optional` **ontouchendcapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:336

#### Inherited from

`ViewportComponentAttributes.ontouchendcapture`

***

### ontouchmovecapture?

> `optional` **ontouchmovecapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:339

#### Inherited from

`ViewportComponentAttributes.ontouchmovecapture`

***

### ontouchstartcapture?

> `optional` **ontouchstartcapture?**: `TouchEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:342

#### Inherited from

`ViewportComponentAttributes.ontouchstartcapture`

***

### ongotpointercapturecapture?

> `optional` **ongotpointercapturecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:347

#### Inherited from

`ViewportComponentAttributes.ongotpointercapturecapture`

***

### onpointercancelcapture?

> `optional` **onpointercancelcapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:350

#### Inherited from

`ViewportComponentAttributes.onpointercancelcapture`

***

### onpointerdowncapture?

> `optional` **onpointerdowncapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:353

#### Inherited from

`ViewportComponentAttributes.onpointerdowncapture`

***

### onpointerentercapture?

> `optional` **onpointerentercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:356

#### Inherited from

`ViewportComponentAttributes.onpointerentercapture`

***

### onpointerleavecapture?

> `optional` **onpointerleavecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:359

#### Inherited from

`ViewportComponentAttributes.onpointerleavecapture`

***

### onpointermovecapture?

> `optional` **onpointermovecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:362

#### Inherited from

`ViewportComponentAttributes.onpointermovecapture`

***

### onpointeroutcapture?

> `optional` **onpointeroutcapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:365

#### Inherited from

`ViewportComponentAttributes.onpointeroutcapture`

***

### onpointerovercapture?

> `optional` **onpointerovercapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:368

#### Inherited from

`ViewportComponentAttributes.onpointerovercapture`

***

### onpointerupcapture?

> `optional` **onpointerupcapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:371

#### Inherited from

`ViewportComponentAttributes.onpointerupcapture`

***

### onlostpointercapturecapture?

> `optional` **onlostpointercapturecapture?**: `PointerEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:374

#### Inherited from

`ViewportComponentAttributes.onlostpointercapturecapture`

***

### on:gamepadconnected?

> `optional` **on:gamepadconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:377

#### Inherited from

`ViewportComponentAttributes.on:gamepadconnected`

***

### on:gamepaddisconnected?

> `optional` **on:gamepaddisconnected?**: `GamepadEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:379

#### Inherited from

`ViewportComponentAttributes.on:gamepaddisconnected`

***

### onscrollcapture?

> `optional` **onscrollcapture?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:385

#### Inherited from

`ViewportComponentAttributes.onscrollcapture`

***

### onscrollendcapture?

> `optional` **onscrollendcapture?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:388

#### Inherited from

`ViewportComponentAttributes.onscrollendcapture`

***

### onresizecapture?

> `optional` **onresizecapture?**: `UIEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:391

#### Inherited from

`ViewportComponentAttributes.onresizecapture`

***

### onwheelcapture?

> `optional` **onwheelcapture?**: `WheelEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:396

#### Inherited from

`ViewportComponentAttributes.onwheelcapture`

***

### onanimationstartcapture?

> `optional` **onanimationstartcapture?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:401

#### Inherited from

`ViewportComponentAttributes.onanimationstartcapture`

***

### onanimationendcapture?

> `optional` **onanimationendcapture?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:404

#### Inherited from

`ViewportComponentAttributes.onanimationendcapture`

***

### onanimationiterationcapture?

> `optional` **onanimationiterationcapture?**: `AnimationEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:407

#### Inherited from

`ViewportComponentAttributes.onanimationiterationcapture`

***

### ontransitionstartcapture?

> `optional` **ontransitionstartcapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:412

#### Inherited from

`ViewportComponentAttributes.ontransitionstartcapture`

***

### ontransitionruncapture?

> `optional` **ontransitionruncapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:415

#### Inherited from

`ViewportComponentAttributes.ontransitionruncapture`

***

### ontransitionendcapture?

> `optional` **ontransitionendcapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:418

#### Inherited from

`ViewportComponentAttributes.ontransitionendcapture`

***

### ontransitioncancelcapture?

> `optional` **ontransitioncancelcapture?**: `TransitionEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:421

#### Inherited from

`ViewportComponentAttributes.ontransitioncancelcapture`

***

### on:outrostart?

> `optional` **on:outrostart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:424

#### Inherited from

`ViewportComponentAttributes.on:outrostart`

***

### onoutrostart?

> `optional` **onoutrostart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:425

#### Inherited from

`ViewportComponentAttributes.onoutrostart`

***

### onoutrostartcapture?

> `optional` **onoutrostartcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:426

#### Inherited from

`ViewportComponentAttributes.onoutrostartcapture`

***

### on:outroend?

> `optional` **on:outroend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:427

#### Inherited from

`ViewportComponentAttributes.on:outroend`

***

### onoutroend?

> `optional` **onoutroend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:428

#### Inherited from

`ViewportComponentAttributes.onoutroend`

***

### onoutroendcapture?

> `optional` **onoutroendcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:429

#### Inherited from

`ViewportComponentAttributes.onoutroendcapture`

***

### on:introstart?

> `optional` **on:introstart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:430

#### Inherited from

`ViewportComponentAttributes.on:introstart`

***

### onintrostart?

> `optional` **onintrostart?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:431

#### Inherited from

`ViewportComponentAttributes.onintrostart`

***

### onintrostartcapture?

> `optional` **onintrostartcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:432

#### Inherited from

`ViewportComponentAttributes.onintrostartcapture`

***

### on:introend?

> `optional` **on:introend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:433

#### Inherited from

`ViewportComponentAttributes.on:introend`

***

### onintroend?

> `optional` **onintroend?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:434

#### Inherited from

`ViewportComponentAttributes.onintroend`

***

### onintroendcapture?

> `optional` **onintroendcapture?**: `EventHandler`\<`CustomEvent`\<`null`\>, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:435

#### Inherited from

`ViewportComponentAttributes.onintroendcapture`

***

### on:message?

> `optional` **on:message?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:438

#### Inherited from

`ViewportComponentAttributes.on:message`

***

### onmessagecapture?

> `optional` **onmessagecapture?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:440

#### Inherited from

`ViewportComponentAttributes.onmessagecapture`

***

### on:messageerror?

> `optional` **on:messageerror?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:441

#### Inherited from

`ViewportComponentAttributes.on:messageerror`

***

### onmessageerrorcapture?

> `optional` **onmessageerrorcapture?**: `MessageEventHandler`\<`HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:443

#### Inherited from

`ViewportComponentAttributes.onmessageerrorcapture`

***

### on:visibilitychange?

> `optional` **on:visibilitychange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:446

#### Inherited from

`ViewportComponentAttributes.on:visibilitychange`

***

### onvisibilitychange?

> `optional` **onvisibilitychange?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:447

#### Inherited from

`ViewportComponentAttributes.onvisibilitychange`

***

### onvisibilitychangecapture?

> `optional` **onvisibilitychangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:448

#### Inherited from

`ViewportComponentAttributes.onvisibilitychangecapture`

***

### onbeforematchcapture?

> `optional` **onbeforematchcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:453

#### Inherited from

`ViewportComponentAttributes.onbeforematchcapture`

***

### oncancelcapture?

> `optional` **oncancelcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:456

#### Inherited from

`ViewportComponentAttributes.oncancelcapture`

***

### onclosecapture?

> `optional` **onclosecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:459

#### Inherited from

`ViewportComponentAttributes.onclosecapture`

***

### onfullscreenchangecapture?

> `optional` **onfullscreenchangecapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:462

#### Inherited from

`ViewportComponentAttributes.onfullscreenchangecapture`

***

### onfullscreenerrorcapture?

> `optional` **onfullscreenerrorcapture?**: `EventHandler`\<`Event`, `HTMLDivElement`\> \| `null`

Defined in: node\_modules/svelte/elements.d.ts:465

#### Inherited from

`ViewportComponentAttributes.onfullscreenerrorcapture`

***

### bind:contentRect?

> `readonly` `optional` **bind:contentRect?**: `DOMRectReadOnly` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:468

#### Inherited from

`ViewportComponentAttributes.bind:contentRect`

***

### bind:contentBoxSize?

> `readonly` `optional` **bind:contentBoxSize?**: `ResizeObserverSize`[] \| `null`

Defined in: node\_modules/svelte/elements.d.ts:469

#### Inherited from

`ViewportComponentAttributes.bind:contentBoxSize`

***

### bind:borderBoxSize?

> `readonly` `optional` **bind:borderBoxSize?**: `ResizeObserverSize`[] \| `null`

Defined in: node\_modules/svelte/elements.d.ts:470

#### Inherited from

`ViewportComponentAttributes.bind:borderBoxSize`

***

### bind:devicePixelContentBoxSize?

> `readonly` `optional` **bind:devicePixelContentBoxSize?**: `ResizeObserverSize`[] \| `null`

Defined in: node\_modules/svelte/elements.d.ts:471

#### Inherited from

`ViewportComponentAttributes.bind:devicePixelContentBoxSize`

***

### bind:clientWidth?

> `readonly` `optional` **bind:clientWidth?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:472

#### Inherited from

`ViewportComponentAttributes.bind:clientWidth`

***

### bind:clientHeight?

> `readonly` `optional` **bind:clientHeight?**: `number` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:473

#### Inherited from

`ViewportComponentAttributes.bind:clientHeight`

***

### xmlns?

> `optional` **xmlns?**: `string` \| `null`

Defined in: node\_modules/svelte/elements.d.ts:475

#### Inherited from

`ViewportComponentAttributes.xmlns`
