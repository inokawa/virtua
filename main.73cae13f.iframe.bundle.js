(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[179],{"./node_modules/@storybook/addon-docs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-docs/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/react/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/react/dist sync recursive",module.exports=webpackEmptyContext},"./.storybook/preview.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,parameters:()=>parameters});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen",options:{storySort:{order:["basics","advanced","comparisons"]}}},decorators=[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{background:"whitesmoke",width:"100vw",height:"100vh"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");const external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,importers=[async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.mdx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}const import_meta={},{SERVER_CHANNEL_URL}=dist.C,getProjectAnnotations=()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./.storybook/preview.jsx")]),channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),SERVER_CHANNEL_URL){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({url:SERVER_CHANNEL_URL});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn,getProjectAnnotations}),import_meta.webpackHot&&(import_meta.webpackHot.accept("./storybook-stories.js",(()=>{preview.onStoriesChanged({importFn})})),import_meta.webpackHot.accept(["/home/runner/work/virtua/virtua/node_modules/@storybook/react/preview.js","/home/runner/work/virtua/virtua/node_modules/@storybook/addon-docs/dist/preview.mjs","/home/runner/work/virtua/virtua/.storybook/preview.jsx"],(()=>{preview.onGetProjectAnnotationsChanged({getProjectAnnotations})})))},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./advanced/Chat.stories":["./stories/advanced/Chat.stories.tsx",264,57,465],"./advanced/Chat.stories.tsx":["./stories/advanced/Chat.stories.tsx",264,57,465],"./advanced/InfiniteScrolling.stories":["./stories/advanced/InfiniteScrolling.stories.tsx",264,57,659],"./advanced/InfiniteScrolling.stories.tsx":["./stories/advanced/InfiniteScrolling.stories.tsx",264,57,659],"./advanced/Lazy.stories":["./stories/advanced/Lazy.stories.tsx",57,921],"./advanced/Lazy.stories.tsx":["./stories/advanced/Lazy.stories.tsx",57,921],"./advanced/Search.stories":["./stories/advanced/Search.stories.tsx",264,57,64],"./advanced/Search.stories.tsx":["./stories/advanced/Search.stories.tsx",264,57,64],"./advanced/Table.stories":["./stories/advanced/Table.stories.tsx",57,499],"./advanced/Table.stories.tsx":["./stories/advanced/Table.stories.tsx",57,499],"./advanced/With dnd-kit.stories":["./stories/advanced/With dnd-kit.stories.tsx",184,57,294],"./advanced/With dnd-kit.stories.tsx":["./stories/advanced/With dnd-kit.stories.tsx",184,57,294],"./advanced/With material-ui.stories":["./stories/advanced/With material-ui.stories.tsx",554,57,890],"./advanced/With material-ui.stories.tsx":["./stories/advanced/With material-ui.stories.tsx",554,57,890],"./advanced/With re-resizable.stories":["./stories/advanced/With re-resizable.stories.tsx",278,57,560],"./advanced/With re-resizable.stories.tsx":["./stories/advanced/With re-resizable.stories.tsx",278,57,560],"./advanced/Zoomable.stories":["./stories/advanced/Zoomable.stories.tsx",57,750],"./advanced/Zoomable.stories.tsx":["./stories/advanced/Zoomable.stories.tsx",57,750],"./basics/List.stories":["./stories/basics/List.stories.tsx",57,922],"./basics/List.stories.tsx":["./stories/basics/List.stories.tsx",57,922],"./comparisons/react-cool-virtual.stories":["./stories/comparisons/react-cool-virtual.stories.tsx",512,57,231],"./comparisons/react-cool-virtual.stories.tsx":["./stories/comparisons/react-cool-virtual.stories.tsx",512,57,231],"./comparisons/react-virtual.stories":["./stories/comparisons/react-virtual.stories.tsx",57,422],"./comparisons/react-virtual.stories.tsx":["./stories/comparisons/react-virtual.stories.tsx",57,422],"./comparisons/react-virtualized.stories":["./stories/comparisons/react-virtualized.stories.tsx",606,813,57,592],"./comparisons/react-virtualized.stories.tsx":["./stories/comparisons/react-virtualized.stories.tsx",606,813,57,592],"./comparisons/react-virtuoso.stories":["./stories/comparisons/react-virtuoso.stories.tsx",410,57,799],"./comparisons/react-virtuoso.stories.tsx":["./stories/comparisons/react-virtuoso.stories.tsx",410,57,799],"./comparisons/react-window.stories":["./stories/comparisons/react-window.stories.tsx",606,957,57,283],"./comparisons/react-window.stories.tsx":["./stories/comparisons/react-window.stories.tsx",606,957,57,283]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[222],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);