[**API**](../../API.md)

***

# Interface: VListProps\<T\>

Defined in: [src/react/VList.tsx:17](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/VList.tsx#L17)

Props of [VList](../variables/VList.md).

## Extends

- `Pick`\<[`VirtualizerProps`](VirtualizerProps.md)\<`T`\>, `"children"` \| `"data"` \| `"bufferSize"` \| `"itemSize"` \| `"shift"` \| `"horizontal"` \| `"cache"` \| `"ssrCount"` \| `"item"` \| `"onScroll"` \| `"onScrollEnd"` \| `"onResize"` \| `"keepMounted"`\>.[`ViewportComponentAttributes`](../type-aliases/ViewportComponentAttributes.md)

## Type Parameters

### T

`T` = `unknown`

## Properties

### data?

> `optional` **data?**: `ArrayLike`\<`T`\>

Defined in: [src/react/Virtualizer.tsx:109](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L109)

The data items rendered by this component. If you set a function to [VirtualizerProps.children](VirtualizerProps.md#children), you have to set this prop.

#### Inherited from

`Pick.data`

***

### item?

> `optional` **item?**: [`CustomItemComponent`](../type-aliases/CustomItemComponent.md) \| keyof IntrinsicElements

Defined in: [src/react/Virtualizer.tsx:159](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L159)

Component or element type for item element. This component will get [CustomItemComponentProps](CustomItemComponentProps.md) as props.

#### Default Value

```ts
"div"
```

#### Inherited from

`Pick.item`

***

### children

> **children**: `ReactNode` \| ((`data`, `index`) => `ReactElement`)

Defined in: [src/react/Virtualizer.tsx:105](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L105)

Elements rendered by this component.

You can also pass a function and set [VirtualizerProps.data](VirtualizerProps.md#data) to create elements lazily.

#### Inherited from

`Pick.children`

***

### onScroll?

> `optional` **onScroll?**: (`offset`) => `void`

Defined in: [src/react/Virtualizer.tsx:168](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L168)

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

Defined in: [src/react/Virtualizer.tsx:172](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L172)

Callback invoked when scrolling stops.

#### Returns

`void`

#### Inherited from

`Pick.onScrollEnd`

***

### onResize?

> `optional` **onResize?**: () => `void`

Defined in: [src/react/Virtualizer.tsx:176](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L176)

Callback invoked when the size of the viewport or the items changes.

#### Returns

`void`

#### Inherited from

`Pick.onResize`

***

### shift?

> `optional` **shift?**: `boolean`

Defined in: [src/react/Virtualizer.tsx:127](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L127)

Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**

#### Inherited from

`Pick.shift`

***

### bufferSize?

> `optional` **bufferSize?**: `number`

Defined in: [src/react/Virtualizer.tsx:114](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L114)

Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.

#### Default Value

```ts
200
```

#### Inherited from

`Pick.bufferSize`

***

### itemSize?

> `optional` **itemSize?**: `number`

Defined in: [src/react/Virtualizer.tsx:121](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L121)

Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Inherited from

`Pick.itemSize`

***

### horizontal?

> `optional` **horizontal?**: `boolean`

Defined in: [src/react/Virtualizer.tsx:131](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L131)

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Inherited from

`Pick.horizontal`

***

### keepMounted?

> `optional` **keepMounted?**: readonly `number`[]

Defined in: [src/react/Virtualizer.tsx:135](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L135)

List of indexes that should be always mounted, even when off screen.

#### Inherited from

`Pick.keepMounted`

***

### cache?

> `optional` **cache?**: [`CacheSnapshot`](../../core/type-aliases/CacheSnapshot.md)

Defined in: [src/react/Virtualizer.tsx:141](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L141)

You can restore cache by passing a [CacheSnapshot](../../core/type-aliases/CacheSnapshot.md) on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from [VirtualizerHandle.cache](VListHandle.md#cache).

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**

#### Inherited from

`Pick.cache`

***

### ssrCount?

> `optional` **ssrCount?**: `number`

Defined in: [src/react/Virtualizer.tsx:149](https://github.com/inokawa/virtua/blob/9ad857c6a60444d394d580c62785dc50a49fb9a9/src/react/Virtualizer.tsx#L149)

A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

#### Inherited from

`Pick.ssrCount`

***

### slot?

> `optional` **slot?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2900

#### Inherited from

`ViewportComponentAttributes.slot`

***

### style?

> `optional` **style?**: `CSSProperties`

Defined in: node\_modules/@types/react/index.d.ts:2902

#### Inherited from

`ViewportComponentAttributes.style`

***

### title?

> `optional` **title?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2904

#### Inherited from

`ViewportComponentAttributes.title`

***

### dir?

> `optional` **dir?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2893

#### Inherited from

`ViewportComponentAttributes.dir`

***

### property?

> `optional` **property?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2919

#### Inherited from

`ViewportComponentAttributes.property`

***

### is?

> `optional` **is?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2958

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`ViewportComponentAttributes.is`

***

### defaultChecked?

> `optional` **defaultChecked?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2881

#### Inherited from

`ViewportComponentAttributes.defaultChecked`

***

### defaultValue?

> `optional` **defaultValue?**: `string` \| `number` \| readonly `string`[]

Defined in: node\_modules/@types/react/index.d.ts:2882

#### Inherited from

`ViewportComponentAttributes.defaultValue`

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2883

#### Inherited from

`ViewportComponentAttributes.suppressContentEditableWarning`

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2884

#### Inherited from

`ViewportComponentAttributes.suppressHydrationWarning`

***

### accessKey?

> `optional` **accessKey?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2887

#### Inherited from

`ViewportComponentAttributes.accessKey`

***

### autoCapitalize?

> `optional` **autoCapitalize?**: `string` & `object` \| `"none"` \| `"off"` \| `"on"` \| `"sentences"` \| `"words"` \| `"characters"`

Defined in: node\_modules/@types/react/index.d.ts:2888

#### Inherited from

`ViewportComponentAttributes.autoCapitalize`

***

### autoFocus?

> `optional` **autoFocus?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2889

#### Inherited from

`ViewportComponentAttributes.autoFocus`

***

### className?

> `optional` **className?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2890

#### Inherited from

`ViewportComponentAttributes.className`

***

### contentEditable?

> `optional` **contentEditable?**: `"inherit"` \| `Booleanish` \| `"plaintext-only"`

Defined in: node\_modules/@types/react/index.d.ts:2891

#### Inherited from

`ViewportComponentAttributes.contentEditable`

***

### contextMenu?

> `optional` **contextMenu?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2892

#### Inherited from

`ViewportComponentAttributes.contextMenu`

***

### draggable?

> `optional` **draggable?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2894

#### Inherited from

`ViewportComponentAttributes.draggable`

***

### enterKeyHint?

> `optional` **enterKeyHint?**: `"search"` \| `"next"` \| `"enter"` \| `"done"` \| `"go"` \| `"previous"` \| `"send"`

Defined in: node\_modules/@types/react/index.d.ts:2895

#### Inherited from

`ViewportComponentAttributes.enterKeyHint`

***

### hidden?

> `optional` **hidden?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2896

#### Inherited from

`ViewportComponentAttributes.hidden`

***

### id?

> `optional` **id?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2897

#### Inherited from

`ViewportComponentAttributes.id`

***

### lang?

> `optional` **lang?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2898

#### Inherited from

`ViewportComponentAttributes.lang`

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2899

#### Inherited from

`ViewportComponentAttributes.nonce`

***

### spellCheck?

> `optional` **spellCheck?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2901

#### Inherited from

`ViewportComponentAttributes.spellCheck`

***

### tabIndex?

> `optional` **tabIndex?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2903

#### Inherited from

`ViewportComponentAttributes.tabIndex`

***

### translate?

> `optional` **translate?**: `"yes"` \| `"no"`

Defined in: node\_modules/@types/react/index.d.ts:2905

#### Inherited from

`ViewportComponentAttributes.translate`

***

### radioGroup?

> `optional` **radioGroup?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2908

#### Inherited from

`ViewportComponentAttributes.radioGroup`

***

### role?

> `optional` **role?**: `AriaRole`

Defined in: node\_modules/@types/react/index.d.ts:2911

#### Inherited from

`ViewportComponentAttributes.role`

***

### about?

> `optional` **about?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2914

#### Inherited from

`ViewportComponentAttributes.about`

***

### content?

> `optional` **content?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2915

#### Inherited from

`ViewportComponentAttributes.content`

***

### datatype?

> `optional` **datatype?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2916

#### Inherited from

`ViewportComponentAttributes.datatype`

***

### inlist?

> `optional` **inlist?**: `any`

Defined in: node\_modules/@types/react/index.d.ts:2917

#### Inherited from

`ViewportComponentAttributes.inlist`

***

### prefix?

> `optional` **prefix?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2918

#### Inherited from

`ViewportComponentAttributes.prefix`

***

### rel?

> `optional` **rel?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2920

#### Inherited from

`ViewportComponentAttributes.rel`

***

### resource?

> `optional` **resource?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2921

#### Inherited from

`ViewportComponentAttributes.resource`

***

### rev?

> `optional` **rev?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2922

#### Inherited from

`ViewportComponentAttributes.rev`

***

### typeof?

> `optional` **typeof?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2923

#### Inherited from

`ViewportComponentAttributes.typeof`

***

### vocab?

> `optional` **vocab?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2924

#### Inherited from

`ViewportComponentAttributes.vocab`

***

### autoCorrect?

> `optional` **autoCorrect?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2927

#### Inherited from

`ViewportComponentAttributes.autoCorrect`

***

### autoSave?

> `optional` **autoSave?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2928

#### Inherited from

`ViewportComponentAttributes.autoSave`

***

### color?

> `optional` **color?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2929

#### Inherited from

`ViewportComponentAttributes.color`

***

### itemProp?

> `optional` **itemProp?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2930

#### Inherited from

`ViewportComponentAttributes.itemProp`

***

### itemScope?

> `optional` **itemScope?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2931

#### Inherited from

`ViewportComponentAttributes.itemScope`

***

### itemType?

> `optional` **itemType?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2932

#### Inherited from

`ViewportComponentAttributes.itemType`

***

### itemID?

> `optional` **itemID?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2933

#### Inherited from

`ViewportComponentAttributes.itemID`

***

### itemRef?

> `optional` **itemRef?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2934

#### Inherited from

`ViewportComponentAttributes.itemRef`

***

### results?

> `optional` **results?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2935

#### Inherited from

`ViewportComponentAttributes.results`

***

### security?

> `optional` **security?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2936

#### Inherited from

`ViewportComponentAttributes.security`

***

### unselectable?

> `optional` **unselectable?**: `"off"` \| `"on"`

Defined in: node\_modules/@types/react/index.d.ts:2937

#### Inherited from

`ViewportComponentAttributes.unselectable`

***

### popover?

> `optional` **popover?**: `""` \| `"auto"` \| `"manual"` \| `"hint"`

Defined in: node\_modules/@types/react/index.d.ts:2940

#### Inherited from

`ViewportComponentAttributes.popover`

***

### popoverTargetAction?

> `optional` **popoverTargetAction?**: `"toggle"` \| `"hide"` \| `"show"`

Defined in: node\_modules/@types/react/index.d.ts:2941

#### Inherited from

`ViewportComponentAttributes.popoverTargetAction`

***

### popoverTarget?

> `optional` **popoverTarget?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2942

#### Inherited from

`ViewportComponentAttributes.popoverTarget`

***

### inert?

> `optional` **inert?**: `boolean`

Defined in: node\_modules/@types/react/index.d.ts:2948

#### See

[https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert)

#### Inherited from

`ViewportComponentAttributes.inert`

***

### inputMode?

> `optional` **inputMode?**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/@types/react/index.d.ts:2953

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`ViewportComponentAttributes.inputMode`

***

### exportparts?

> `optional` **exportparts?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2962

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/exportparts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts)

#### Inherited from

`ViewportComponentAttributes.exportparts`

***

### part?

> `optional` **part?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2966

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/part](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part)

#### Inherited from

`ViewportComponentAttributes.part`

***

### aria-activedescendant?

> `optional` **aria-activedescendant?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2585

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`ViewportComponentAttributes.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2587

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`ViewportComponentAttributes.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete?**: `"none"` \| `"inline"` \| `"both"` \| `"list"`

Defined in: node\_modules/@types/react/index.d.ts:2592

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`ViewportComponentAttributes.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2598

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`ViewportComponentAttributes.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2603

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`ViewportComponentAttributes.aria-brailleroledescription`

***

### aria-busy?

> `optional` **aria-busy?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2604

#### Inherited from

`ViewportComponentAttributes.aria-busy`

***

### aria-checked?

> `optional` **aria-checked?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/@types/react/index.d.ts:2609

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2614

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`ViewportComponentAttributes.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2619

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2624

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`ViewportComponentAttributes.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2629

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2634

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`ViewportComponentAttributes.aria-controls`

***

### aria-current?

> `optional` **aria-current?**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Defined in: node\_modules/@types/react/index.d.ts:2636

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`ViewportComponentAttributes.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2641

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`ViewportComponentAttributes.aria-describedby`

***

### aria-description?

> `optional` **aria-description?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2646

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-description`

***

### aria-details?

> `optional` **aria-details?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2651

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2656

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`ViewportComponentAttributes.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect?**: `"link"` \| `"copy"` \| `"none"` \| `"move"` \| `"execute"` \| `"popup"`

Defined in: node\_modules/@types/react/index.d.ts:2661

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2666

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2668

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`ViewportComponentAttributes.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2673

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`ViewportComponentAttributes.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2678

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`ViewportComponentAttributes.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup?**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Defined in: node\_modules/@types/react/index.d.ts:2680

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`ViewportComponentAttributes.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2685

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid?**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/@types/react/index.d.ts:2690

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`ViewportComponentAttributes.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2692

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`ViewportComponentAttributes.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2697

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`ViewportComponentAttributes.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2702

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`ViewportComponentAttributes.aria-labelledby`

***

### aria-level?

> `optional` **aria-level?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2704

Defines the hierarchical level of an element within a structure.

#### Inherited from

`ViewportComponentAttributes.aria-level`

***

### aria-live?

> `optional` **aria-live?**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/@types/react/index.d.ts:2706

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`ViewportComponentAttributes.aria-live`

***

### aria-modal?

> `optional` **aria-modal?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2708

Indicates whether an element is modal when displayed.

#### Inherited from

`ViewportComponentAttributes.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2710

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`ViewportComponentAttributes.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2712

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`ViewportComponentAttributes.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation?**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/@types/react/index.d.ts:2714

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`ViewportComponentAttributes.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2720

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`ViewportComponentAttributes.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2725

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`ViewportComponentAttributes.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2730

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`ViewportComponentAttributes.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed?**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/@types/react/index.d.ts:2735

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`ViewportComponentAttributes.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2740

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`ViewportComponentAttributes.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant?**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/@types/react/index.d.ts:2745

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`ViewportComponentAttributes.aria-relevant`

***

### aria-required?

> `optional` **aria-required?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2758

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`ViewportComponentAttributes.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2760

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`ViewportComponentAttributes.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2765

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`ViewportComponentAttributes.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2770

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2775

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`ViewportComponentAttributes.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2780

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`ViewportComponentAttributes.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected?**: `Booleanish`

Defined in: node\_modules/@types/react/index.d.ts:2785

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`ViewportComponentAttributes.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2790

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`ViewportComponentAttributes.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort?**: `"ascending"` \| `"descending"` \| `"other"` \| `"none"`

Defined in: node\_modules/@types/react/index.d.ts:2792

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`ViewportComponentAttributes.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2794

Defines the maximum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2796

Defines the minimum allowed value for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow?**: `number`

Defined in: node\_modules/@types/react/index.d.ts:2801

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`ViewportComponentAttributes.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext?**: `string`

Defined in: node\_modules/@types/react/index.d.ts:2803

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`ViewportComponentAttributes.aria-valuetext`

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML?**: `object`

Defined in: node\_modules/@types/react/index.d.ts:2362

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`ViewportComponentAttributes.dangerouslySetInnerHTML`

***

### onCopy?

> `optional` **onCopy?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2369

#### Inherited from

`ViewportComponentAttributes.onCopy`

***

### onCopyCapture?

> `optional` **onCopyCapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2370

#### Inherited from

`ViewportComponentAttributes.onCopyCapture`

***

### onCut?

> `optional` **onCut?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2371

#### Inherited from

`ViewportComponentAttributes.onCut`

***

### onCutCapture?

> `optional` **onCutCapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2372

#### Inherited from

`ViewportComponentAttributes.onCutCapture`

***

### onPaste?

> `optional` **onPaste?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2373

#### Inherited from

`ViewportComponentAttributes.onPaste`

***

### onPasteCapture?

> `optional` **onPasteCapture?**: `ClipboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2374

#### Inherited from

`ViewportComponentAttributes.onPasteCapture`

***

### onCompositionEnd?

> `optional` **onCompositionEnd?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2377

#### Inherited from

`ViewportComponentAttributes.onCompositionEnd`

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2378

#### Inherited from

`ViewportComponentAttributes.onCompositionEndCapture`

***

### onCompositionStart?

> `optional` **onCompositionStart?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2379

#### Inherited from

`ViewportComponentAttributes.onCompositionStart`

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2380

#### Inherited from

`ViewportComponentAttributes.onCompositionStartCapture`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2381

#### Inherited from

`ViewportComponentAttributes.onCompositionUpdate`

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture?**: `CompositionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2382

#### Inherited from

`ViewportComponentAttributes.onCompositionUpdateCapture`

***

### onFocus?

> `optional` **onFocus?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2385

#### Inherited from

`ViewportComponentAttributes.onFocus`

***

### onFocusCapture?

> `optional` **onFocusCapture?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2386

#### Inherited from

`ViewportComponentAttributes.onFocusCapture`

***

### onBlur?

> `optional` **onBlur?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2387

#### Inherited from

`ViewportComponentAttributes.onBlur`

***

### onBlurCapture?

> `optional` **onBlurCapture?**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2388

#### Inherited from

`ViewportComponentAttributes.onBlurCapture`

***

### onChange?

> `optional` **onChange?**: `ChangeEventHandler`\<`HTMLDivElement`, `Element`\>

Defined in: node\_modules/@types/react/index.d.ts:2391

#### Inherited from

`ViewportComponentAttributes.onChange`

***

### onChangeCapture?

> `optional` **onChangeCapture?**: `ChangeEventHandler`\<`HTMLDivElement`, `Element`\>

Defined in: node\_modules/@types/react/index.d.ts:2392

#### Inherited from

`ViewportComponentAttributes.onChangeCapture`

***

### onBeforeInput?

> `optional` **onBeforeInput?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2393

#### Inherited from

`ViewportComponentAttributes.onBeforeInput`

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2394

#### Inherited from

`ViewportComponentAttributes.onBeforeInputCapture`

***

### onInput?

> `optional` **onInput?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2395

#### Inherited from

`ViewportComponentAttributes.onInput`

***

### onInputCapture?

> `optional` **onInputCapture?**: `InputEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2396

#### Inherited from

`ViewportComponentAttributes.onInputCapture`

***

### onReset?

> `optional` **onReset?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2397

#### Inherited from

`ViewportComponentAttributes.onReset`

***

### onResetCapture?

> `optional` **onResetCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2398

#### Inherited from

`ViewportComponentAttributes.onResetCapture`

***

### onSubmit?

> `optional` **onSubmit?**: `SubmitEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2399

#### Inherited from

`ViewportComponentAttributes.onSubmit`

***

### onSubmitCapture?

> `optional` **onSubmitCapture?**: `SubmitEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2400

#### Inherited from

`ViewportComponentAttributes.onSubmitCapture`

***

### onInvalid?

> `optional` **onInvalid?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2401

#### Inherited from

`ViewportComponentAttributes.onInvalid`

***

### onInvalidCapture?

> `optional` **onInvalidCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2402

#### Inherited from

`ViewportComponentAttributes.onInvalidCapture`

***

### onLoad?

> `optional` **onLoad?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2405

#### Inherited from

`ViewportComponentAttributes.onLoad`

***

### onLoadCapture?

> `optional` **onLoadCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2406

#### Inherited from

`ViewportComponentAttributes.onLoadCapture`

***

### onError?

> `optional` **onError?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2407

#### Inherited from

`ViewportComponentAttributes.onError`

***

### onErrorCapture?

> `optional` **onErrorCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2408

#### Inherited from

`ViewportComponentAttributes.onErrorCapture`

***

### onKeyDown?

> `optional` **onKeyDown?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2411

#### Inherited from

`ViewportComponentAttributes.onKeyDown`

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2412

#### Inherited from

`ViewportComponentAttributes.onKeyDownCapture`

***

### ~~onKeyPress?~~

> `optional` **onKeyPress?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2414

#### Deprecated

Use `onKeyUp` or `onKeyDown` instead

#### Inherited from

`ViewportComponentAttributes.onKeyPress`

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2416

#### Deprecated

Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### Inherited from

`ViewportComponentAttributes.onKeyPressCapture`

***

### onKeyUp?

> `optional` **onKeyUp?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2417

#### Inherited from

`ViewportComponentAttributes.onKeyUp`

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture?**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2418

#### Inherited from

`ViewportComponentAttributes.onKeyUpCapture`

***

### onAbort?

> `optional` **onAbort?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2421

#### Inherited from

`ViewportComponentAttributes.onAbort`

***

### onAbortCapture?

> `optional` **onAbortCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2422

#### Inherited from

`ViewportComponentAttributes.onAbortCapture`

***

### onCanPlay?

> `optional` **onCanPlay?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2423

#### Inherited from

`ViewportComponentAttributes.onCanPlay`

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2424

#### Inherited from

`ViewportComponentAttributes.onCanPlayCapture`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2425

#### Inherited from

`ViewportComponentAttributes.onCanPlayThrough`

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2426

#### Inherited from

`ViewportComponentAttributes.onCanPlayThroughCapture`

***

### onDurationChange?

> `optional` **onDurationChange?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2427

#### Inherited from

`ViewportComponentAttributes.onDurationChange`

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2428

#### Inherited from

`ViewportComponentAttributes.onDurationChangeCapture`

***

### onEmptied?

> `optional` **onEmptied?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2429

#### Inherited from

`ViewportComponentAttributes.onEmptied`

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2430

#### Inherited from

`ViewportComponentAttributes.onEmptiedCapture`

***

### onEncrypted?

> `optional` **onEncrypted?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2431

#### Inherited from

`ViewportComponentAttributes.onEncrypted`

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2432

#### Inherited from

`ViewportComponentAttributes.onEncryptedCapture`

***

### onEnded?

> `optional` **onEnded?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2433

#### Inherited from

`ViewportComponentAttributes.onEnded`

***

### onEndedCapture?

> `optional` **onEndedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2434

#### Inherited from

`ViewportComponentAttributes.onEndedCapture`

***

### onLoadedData?

> `optional` **onLoadedData?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2435

#### Inherited from

`ViewportComponentAttributes.onLoadedData`

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2436

#### Inherited from

`ViewportComponentAttributes.onLoadedDataCapture`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2437

#### Inherited from

`ViewportComponentAttributes.onLoadedMetadata`

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2438

#### Inherited from

`ViewportComponentAttributes.onLoadedMetadataCapture`

***

### onLoadStart?

> `optional` **onLoadStart?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2439

#### Inherited from

`ViewportComponentAttributes.onLoadStart`

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2440

#### Inherited from

`ViewportComponentAttributes.onLoadStartCapture`

***

### onPause?

> `optional` **onPause?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2441

#### Inherited from

`ViewportComponentAttributes.onPause`

***

### onPauseCapture?

> `optional` **onPauseCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2442

#### Inherited from

`ViewportComponentAttributes.onPauseCapture`

***

### onPlay?

> `optional` **onPlay?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2443

#### Inherited from

`ViewportComponentAttributes.onPlay`

***

### onPlayCapture?

> `optional` **onPlayCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2444

#### Inherited from

`ViewportComponentAttributes.onPlayCapture`

***

### onPlaying?

> `optional` **onPlaying?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2445

#### Inherited from

`ViewportComponentAttributes.onPlaying`

***

### onPlayingCapture?

> `optional` **onPlayingCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2446

#### Inherited from

`ViewportComponentAttributes.onPlayingCapture`

***

### onProgress?

> `optional` **onProgress?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2447

#### Inherited from

`ViewportComponentAttributes.onProgress`

***

### onProgressCapture?

> `optional` **onProgressCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2448

#### Inherited from

`ViewportComponentAttributes.onProgressCapture`

***

### onRateChange?

> `optional` **onRateChange?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2449

#### Inherited from

`ViewportComponentAttributes.onRateChange`

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2450

#### Inherited from

`ViewportComponentAttributes.onRateChangeCapture`

***

### onSeeked?

> `optional` **onSeeked?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2451

#### Inherited from

`ViewportComponentAttributes.onSeeked`

***

### onSeekedCapture?

> `optional` **onSeekedCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2452

#### Inherited from

`ViewportComponentAttributes.onSeekedCapture`

***

### onSeeking?

> `optional` **onSeeking?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2453

#### Inherited from

`ViewportComponentAttributes.onSeeking`

***

### onSeekingCapture?

> `optional` **onSeekingCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2454

#### Inherited from

`ViewportComponentAttributes.onSeekingCapture`

***

### onStalled?

> `optional` **onStalled?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2455

#### Inherited from

`ViewportComponentAttributes.onStalled`

***

### onStalledCapture?

> `optional` **onStalledCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2456

#### Inherited from

`ViewportComponentAttributes.onStalledCapture`

***

### onSuspend?

> `optional` **onSuspend?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2457

#### Inherited from

`ViewportComponentAttributes.onSuspend`

***

### onSuspendCapture?

> `optional` **onSuspendCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2458

#### Inherited from

`ViewportComponentAttributes.onSuspendCapture`

***

### onTimeUpdate?

> `optional` **onTimeUpdate?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2459

#### Inherited from

`ViewportComponentAttributes.onTimeUpdate`

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2460

#### Inherited from

`ViewportComponentAttributes.onTimeUpdateCapture`

***

### onVolumeChange?

> `optional` **onVolumeChange?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2461

#### Inherited from

`ViewportComponentAttributes.onVolumeChange`

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2462

#### Inherited from

`ViewportComponentAttributes.onVolumeChangeCapture`

***

### onWaiting?

> `optional` **onWaiting?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2463

#### Inherited from

`ViewportComponentAttributes.onWaiting`

***

### onWaitingCapture?

> `optional` **onWaitingCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2464

#### Inherited from

`ViewportComponentAttributes.onWaitingCapture`

***

### onAuxClick?

> `optional` **onAuxClick?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2467

#### Inherited from

`ViewportComponentAttributes.onAuxClick`

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2468

#### Inherited from

`ViewportComponentAttributes.onAuxClickCapture`

***

### onClick?

> `optional` **onClick?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2469

#### Inherited from

`ViewportComponentAttributes.onClick`

***

### onClickCapture?

> `optional` **onClickCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2470

#### Inherited from

`ViewportComponentAttributes.onClickCapture`

***

### onContextMenu?

> `optional` **onContextMenu?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2471

#### Inherited from

`ViewportComponentAttributes.onContextMenu`

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2472

#### Inherited from

`ViewportComponentAttributes.onContextMenuCapture`

***

### onDoubleClick?

> `optional` **onDoubleClick?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2473

#### Inherited from

`ViewportComponentAttributes.onDoubleClick`

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2474

#### Inherited from

`ViewportComponentAttributes.onDoubleClickCapture`

***

### onDrag?

> `optional` **onDrag?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2475

#### Inherited from

`ViewportComponentAttributes.onDrag`

***

### onDragCapture?

> `optional` **onDragCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2476

#### Inherited from

`ViewportComponentAttributes.onDragCapture`

***

### onDragEnd?

> `optional` **onDragEnd?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2477

#### Inherited from

`ViewportComponentAttributes.onDragEnd`

***

### onDragEndCapture?

> `optional` **onDragEndCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2478

#### Inherited from

`ViewportComponentAttributes.onDragEndCapture`

***

### onDragEnter?

> `optional` **onDragEnter?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2479

#### Inherited from

`ViewportComponentAttributes.onDragEnter`

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2480

#### Inherited from

`ViewportComponentAttributes.onDragEnterCapture`

***

### onDragExit?

> `optional` **onDragExit?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2481

#### Inherited from

`ViewportComponentAttributes.onDragExit`

***

### onDragExitCapture?

> `optional` **onDragExitCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2482

#### Inherited from

`ViewportComponentAttributes.onDragExitCapture`

***

### onDragLeave?

> `optional` **onDragLeave?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2483

#### Inherited from

`ViewportComponentAttributes.onDragLeave`

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2484

#### Inherited from

`ViewportComponentAttributes.onDragLeaveCapture`

***

### onDragOver?

> `optional` **onDragOver?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2485

#### Inherited from

`ViewportComponentAttributes.onDragOver`

***

### onDragOverCapture?

> `optional` **onDragOverCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2486

#### Inherited from

`ViewportComponentAttributes.onDragOverCapture`

***

### onDragStart?

> `optional` **onDragStart?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2487

#### Inherited from

`ViewportComponentAttributes.onDragStart`

***

### onDragStartCapture?

> `optional` **onDragStartCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2488

#### Inherited from

`ViewportComponentAttributes.onDragStartCapture`

***

### onDrop?

> `optional` **onDrop?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2489

#### Inherited from

`ViewportComponentAttributes.onDrop`

***

### onDropCapture?

> `optional` **onDropCapture?**: `DragEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2490

#### Inherited from

`ViewportComponentAttributes.onDropCapture`

***

### onMouseDown?

> `optional` **onMouseDown?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2491

#### Inherited from

`ViewportComponentAttributes.onMouseDown`

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2492

#### Inherited from

`ViewportComponentAttributes.onMouseDownCapture`

***

### onMouseEnter?

> `optional` **onMouseEnter?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2493

#### Inherited from

`ViewportComponentAttributes.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2494

#### Inherited from

`ViewportComponentAttributes.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2495

#### Inherited from

`ViewportComponentAttributes.onMouseMove`

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2496

#### Inherited from

`ViewportComponentAttributes.onMouseMoveCapture`

***

### onMouseOut?

> `optional` **onMouseOut?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2497

#### Inherited from

`ViewportComponentAttributes.onMouseOut`

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2498

#### Inherited from

`ViewportComponentAttributes.onMouseOutCapture`

***

### onMouseOver?

> `optional` **onMouseOver?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2499

#### Inherited from

`ViewportComponentAttributes.onMouseOver`

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2500

#### Inherited from

`ViewportComponentAttributes.onMouseOverCapture`

***

### onMouseUp?

> `optional` **onMouseUp?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2501

#### Inherited from

`ViewportComponentAttributes.onMouseUp`

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture?**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2502

#### Inherited from

`ViewportComponentAttributes.onMouseUpCapture`

***

### onSelect?

> `optional` **onSelect?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2505

#### Inherited from

`ViewportComponentAttributes.onSelect`

***

### onSelectCapture?

> `optional` **onSelectCapture?**: `ReactEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2506

#### Inherited from

`ViewportComponentAttributes.onSelectCapture`

***

### onTouchCancel?

> `optional` **onTouchCancel?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2509

#### Inherited from

`ViewportComponentAttributes.onTouchCancel`

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2510

#### Inherited from

`ViewportComponentAttributes.onTouchCancelCapture`

***

### onTouchEnd?

> `optional` **onTouchEnd?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2511

#### Inherited from

`ViewportComponentAttributes.onTouchEnd`

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2512

#### Inherited from

`ViewportComponentAttributes.onTouchEndCapture`

***

### onTouchMove?

> `optional` **onTouchMove?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2513

#### Inherited from

`ViewportComponentAttributes.onTouchMove`

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2514

#### Inherited from

`ViewportComponentAttributes.onTouchMoveCapture`

***

### onTouchStart?

> `optional` **onTouchStart?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2515

#### Inherited from

`ViewportComponentAttributes.onTouchStart`

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture?**: `TouchEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2516

#### Inherited from

`ViewportComponentAttributes.onTouchStartCapture`

***

### onPointerDown?

> `optional` **onPointerDown?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2519

#### Inherited from

`ViewportComponentAttributes.onPointerDown`

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2520

#### Inherited from

`ViewportComponentAttributes.onPointerDownCapture`

***

### onPointerMove?

> `optional` **onPointerMove?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2521

#### Inherited from

`ViewportComponentAttributes.onPointerMove`

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2522

#### Inherited from

`ViewportComponentAttributes.onPointerMoveCapture`

***

### onPointerUp?

> `optional` **onPointerUp?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2523

#### Inherited from

`ViewportComponentAttributes.onPointerUp`

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2524

#### Inherited from

`ViewportComponentAttributes.onPointerUpCapture`

***

### onPointerCancel?

> `optional` **onPointerCancel?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2525

#### Inherited from

`ViewportComponentAttributes.onPointerCancel`

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2526

#### Inherited from

`ViewportComponentAttributes.onPointerCancelCapture`

***

### onPointerEnter?

> `optional` **onPointerEnter?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2527

#### Inherited from

`ViewportComponentAttributes.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2528

#### Inherited from

`ViewportComponentAttributes.onPointerLeave`

***

### onPointerOver?

> `optional` **onPointerOver?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2529

#### Inherited from

`ViewportComponentAttributes.onPointerOver`

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2530

#### Inherited from

`ViewportComponentAttributes.onPointerOverCapture`

***

### onPointerOut?

> `optional` **onPointerOut?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2531

#### Inherited from

`ViewportComponentAttributes.onPointerOut`

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2532

#### Inherited from

`ViewportComponentAttributes.onPointerOutCapture`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2533

#### Inherited from

`ViewportComponentAttributes.onGotPointerCapture`

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2534

#### Inherited from

`ViewportComponentAttributes.onGotPointerCaptureCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2535

#### Inherited from

`ViewportComponentAttributes.onLostPointerCapture`

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture?**: `PointerEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2536

#### Inherited from

`ViewportComponentAttributes.onLostPointerCaptureCapture`

***

### onScrollCapture?

> `optional` **onScrollCapture?**: `UIEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2540

#### Inherited from

`ViewportComponentAttributes.onScrollCapture`

***

### onScrollEndCapture?

> `optional` **onScrollEndCapture?**: `UIEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2542

#### Inherited from

`ViewportComponentAttributes.onScrollEndCapture`

***

### onWheel?

> `optional` **onWheel?**: `WheelEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2545

#### Inherited from

`ViewportComponentAttributes.onWheel`

***

### onWheelCapture?

> `optional` **onWheelCapture?**: `WheelEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2546

#### Inherited from

`ViewportComponentAttributes.onWheelCapture`

***

### onAnimationStart?

> `optional` **onAnimationStart?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2549

#### Inherited from

`ViewportComponentAttributes.onAnimationStart`

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2550

#### Inherited from

`ViewportComponentAttributes.onAnimationStartCapture`

***

### onAnimationEnd?

> `optional` **onAnimationEnd?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2551

#### Inherited from

`ViewportComponentAttributes.onAnimationEnd`

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2552

#### Inherited from

`ViewportComponentAttributes.onAnimationEndCapture`

***

### onAnimationIteration?

> `optional` **onAnimationIteration?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2553

#### Inherited from

`ViewportComponentAttributes.onAnimationIteration`

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture?**: `AnimationEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2554

#### Inherited from

`ViewportComponentAttributes.onAnimationIterationCapture`

***

### onToggle?

> `optional` **onToggle?**: `ToggleEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2557

#### Inherited from

`ViewportComponentAttributes.onToggle`

***

### onBeforeToggle?

> `optional` **onBeforeToggle?**: `ToggleEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2558

#### Inherited from

`ViewportComponentAttributes.onBeforeToggle`

***

### onTransitionCancel?

> `optional` **onTransitionCancel?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2561

#### Inherited from

`ViewportComponentAttributes.onTransitionCancel`

***

### onTransitionCancelCapture?

> `optional` **onTransitionCancelCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2562

#### Inherited from

`ViewportComponentAttributes.onTransitionCancelCapture`

***

### onTransitionEnd?

> `optional` **onTransitionEnd?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2563

#### Inherited from

`ViewportComponentAttributes.onTransitionEnd`

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2564

#### Inherited from

`ViewportComponentAttributes.onTransitionEndCapture`

***

### onTransitionRun?

> `optional` **onTransitionRun?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2565

#### Inherited from

`ViewportComponentAttributes.onTransitionRun`

***

### onTransitionRunCapture?

> `optional` **onTransitionRunCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2566

#### Inherited from

`ViewportComponentAttributes.onTransitionRunCapture`

***

### onTransitionStart?

> `optional` **onTransitionStart?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2567

#### Inherited from

`ViewportComponentAttributes.onTransitionStart`

***

### onTransitionStartCapture?

> `optional` **onTransitionStartCapture?**: `TransitionEventHandler`\<`HTMLDivElement`\>

Defined in: node\_modules/@types/react/index.d.ts:2568

#### Inherited from

`ViewportComponentAttributes.onTransitionStartCapture`
