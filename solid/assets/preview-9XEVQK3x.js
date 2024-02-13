var t={STORYBOOK_SOLID:"1",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};t.STORYBOOK_RTL&&(document.documentElement.dir="rtl");if(t.STORYBOOK_E2E){const e=document.createElement("style");e.appendChild(document.createTextNode(`* { 
        pointer-events: auto !important;
      }`)),document.head.appendChild(e)}const r={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen",options:{storySort:{order:["basics",["VList","Virtualizer","WindowVirtualizer","VGrid"],"advanced","comparisons"]}}}};export{r as default};
