var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "../node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    __name(emptyFunction, "emptyFunction");
    function emptyFunctionWithReset() {
    }
    __name(emptyFunctionWithReset, "emptyFunctionWithReset");
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      __name(shim, "shim");
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      __name(getShim, "getShim");
      ;
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../node_modules/prop-types/index.js"(exports, module) {
    if (false) {
      ReactIs = null;
      throwOnDirectAccess = true;
      module.exports = null(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "../node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal2(a2, b2) {
      if (a2 === b2) return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor) return false;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal2(a2[i2], b2[i2])) return false;
          return true;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size) return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0])) return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!equal2(i2.value[1], b2.get(i2.value[0]))) return false;
          return true;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size) return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0])) return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (a2[i2] !== b2[i2]) return false;
          return true;
        }
        if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf && typeof a2.valueOf === "function" && typeof b2.valueOf === "function") return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString && typeof a2.toString === "function" && typeof b2.toString === "function") return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
        if (hasElementType && a2 instanceof Element) return false;
        for (i2 = length; i2-- !== 0; ) {
          if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a2.$$typeof) {
            continue;
          }
          if (!equal2(a2[keys[i2]], b2[keys[i2]])) return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    }
    __name(equal2, "equal");
    module.exports = /* @__PURE__ */ __name(function isEqual(a2, b2) {
      try {
        return equal2(a2, b2);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    }, "isEqual");
  }
});

// ../node_modules/invariant/browser.js
var require_browser = __commonJS({
  "../node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant = /* @__PURE__ */ __name(function(condition, format, a2, b2, c2, d2, e2, f2) {
      if (false) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a2, b2, c2, d2, e2, f2];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    }, "invariant");
    module.exports = invariant;
  }
});

// ../node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "../node_modules/shallowequal/index.js"(exports, module) {
    module.exports = /* @__PURE__ */ __name(function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    }, "shallowEqual");
  }
});

// ../node_modules/memoizerific/memoizerific.js
var require_memoizerific = __commonJS({
  "../node_modules/memoizerific/memoizerific.js"(exports, module) {
    (function(f2) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f2();
      } else if (typeof define === "function" && define.amd) {
        define([], f2);
      } else {
        var g2;
        if (typeof window !== "undefined") {
          g2 = window;
        } else if (typeof global !== "undefined") {
          g2 = global;
        } else if (typeof self !== "undefined") {
          g2 = self;
        } else {
          g2 = this;
        }
        g2.memoizerific = f2();
      }
    })(function() {
      var define2, module2, exports2;
      return (/* @__PURE__ */ __name(function e2(t2, n3, r3) {
        function s2(o4, u2) {
          if (!n3[o4]) {
            if (!t2[o4]) {
              var a2 = typeof __require == "function" && __require;
              if (!u2 && a2) return a2(o4, true);
              if (i2) return i2(o4, true);
              var f2 = new Error("Cannot find module '" + o4 + "'");
              throw f2.code = "MODULE_NOT_FOUND", f2;
            }
            var l3 = n3[o4] = { exports: {} };
            t2[o4][0].call(l3.exports, function(e3) {
              var n4 = t2[o4][1][e3];
              return s2(n4 ? n4 : e3);
            }, l3, l3.exports, e2, t2, n3, r3);
          }
          return n3[o4].exports;
        }
        __name(s2, "s");
        var i2 = typeof __require == "function" && __require;
        for (var o3 = 0; o3 < r3.length; o3++) s2(r3[o3]);
        return s2;
      }, "e"))({ 1: [function(_dereq_, module3, exports3) {
        module3.exports = function(forceSimilar) {
          if (typeof Map !== "function" || forceSimilar) {
            var Similar = _dereq_("./similar");
            return new Similar();
          } else {
            return /* @__PURE__ */ new Map();
          }
        };
      }, { "./similar": 2 }], 2: [function(_dereq_, module3, exports3) {
        function Similar() {
          this.list = [];
          this.lastItem = void 0;
          this.size = 0;
          return this;
        }
        __name(Similar, "Similar");
        Similar.prototype.get = function(key) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
            return this.lastItem.val;
          }
          index = this.indexOf(key);
          if (index >= 0) {
            this.lastItem = this.list[index];
            return this.list[index].val;
          }
          return void 0;
        };
        Similar.prototype.set = function(key, val) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
            this.lastItem.val = val;
            return this;
          }
          index = this.indexOf(key);
          if (index >= 0) {
            this.lastItem = this.list[index];
            this.list[index].val = val;
            return this;
          }
          this.lastItem = { key, val };
          this.list.push(this.lastItem);
          this.size++;
          return this;
        };
        Similar.prototype.delete = function(key) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
            this.lastItem = void 0;
          }
          index = this.indexOf(key);
          if (index >= 0) {
            this.size--;
            return this.list.splice(index, 1)[0];
          }
          return void 0;
        };
        Similar.prototype.has = function(key) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
            return true;
          }
          index = this.indexOf(key);
          if (index >= 0) {
            this.lastItem = this.list[index];
            return true;
          }
          return false;
        };
        Similar.prototype.forEach = function(callback, thisArg) {
          var i2;
          for (i2 = 0; i2 < this.size; i2++) {
            callback.call(thisArg || this, this.list[i2].val, this.list[i2].key, this);
          }
        };
        Similar.prototype.indexOf = function(key) {
          var i2;
          for (i2 = 0; i2 < this.size; i2++) {
            if (this.isEqual(this.list[i2].key, key)) {
              return i2;
            }
          }
          return -1;
        };
        Similar.prototype.isEqual = function(val1, val2) {
          return val1 === val2 || val1 !== val1 && val2 !== val2;
        };
        module3.exports = Similar;
      }, {}], 3: [function(_dereq_, module3, exports3) {
        var MapOrSimilar = _dereq_("map-or-similar");
        module3.exports = function(limit) {
          var cache = new MapOrSimilar(false), lru = [];
          return function(fn) {
            var memoizerific2 = /* @__PURE__ */ __name(function() {
              var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i2;
              if ((memoizerific2.numArgs || memoizerific2.numArgs === 0) && memoizerific2.numArgs !== argsLengthMinusOne + 1) {
                throw new Error("Memoizerific functions should always be called with the same number of arguments");
              }
              for (i2 = 0; i2 < argsLengthMinusOne; i2++) {
                lruPath[i2] = {
                  cacheItem: currentCache,
                  arg: arguments[i2]
                };
                if (currentCache.has(arguments[i2])) {
                  currentCache = currentCache.get(arguments[i2]);
                  continue;
                }
                isMemoized = false;
                newMap = new MapOrSimilar(false);
                currentCache.set(arguments[i2], newMap);
                currentCache = newMap;
              }
              if (isMemoized) {
                if (currentCache.has(arguments[argsLengthMinusOne])) {
                  fnResult = currentCache.get(arguments[argsLengthMinusOne]);
                } else {
                  isMemoized = false;
                }
              }
              if (!isMemoized) {
                fnResult = fn.apply(null, arguments);
                currentCache.set(arguments[argsLengthMinusOne], fnResult);
              }
              if (limit > 0) {
                lruPath[argsLengthMinusOne] = {
                  cacheItem: currentCache,
                  arg: arguments[argsLengthMinusOne]
                };
                if (isMemoized) {
                  moveToMostRecentLru(lru, lruPath);
                } else {
                  lru.push(lruPath);
                }
                if (lru.length > limit) {
                  removeCachedResult(lru.shift());
                }
              }
              memoizerific2.wasMemoized = isMemoized;
              memoizerific2.numArgs = argsLengthMinusOne + 1;
              return fnResult;
            }, "memoizerific");
            memoizerific2.limit = limit;
            memoizerific2.wasMemoized = false;
            memoizerific2.cache = cache;
            memoizerific2.lru = lru;
            return memoizerific2;
          };
        };
        function moveToMostRecentLru(lru, lruPath) {
          var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i2, ii;
          for (i2 = 0; i2 < lruLen; i2++) {
            isMatch = true;
            for (ii = 0; ii < lruPathLen; ii++) {
              if (!isEqual(lru[i2][ii].arg, lruPath[ii].arg)) {
                isMatch = false;
                break;
              }
            }
            if (isMatch) {
              break;
            }
          }
          lru.push(lru.splice(i2, 1)[0]);
        }
        __name(moveToMostRecentLru, "moveToMostRecentLru");
        function removeCachedResult(removedLru) {
          var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i2;
          currentLru.cacheItem.delete(currentLru.arg);
          for (i2 = removedLruLen - 2; i2 >= 0; i2--) {
            currentLru = removedLru[i2];
            tmp = currentLru.cacheItem.get(currentLru.arg);
            if (!tmp || !tmp.size) {
              currentLru.cacheItem.delete(currentLru.arg);
            } else {
              break;
            }
          }
        }
        __name(removeCachedResult, "removeCachedResult");
        function isEqual(val1, val2) {
          return val1 === val2 || val1 !== val1 && val2 !== val2;
        }
        __name(isEqual, "isEqual");
      }, { "map-or-similar": 1 }] }, {}, [3])(3);
    });
  }
});

// ../node_modules/picoquery/lib/string-util.js
var require_string_util = __commonJS({
  "../node_modules/picoquery/lib/string-util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encodeString = encodeString;
    var hexTable = Array.from({ length: 256 }, (_2, i2) => "%" + ((i2 < 16 ? "0" : "") + i2.toString(16)).toUpperCase());
    var noEscape = new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0
    ]);
    function encodeString(str) {
      const len = str.length;
      if (len === 0) {
        return "";
      }
      let out = "";
      let lastPos = 0;
      let i2 = 0;
      outer: for (; i2 < len; i2++) {
        let c2 = str.charCodeAt(i2);
        while (c2 < 128) {
          if (noEscape[c2] !== 1) {
            if (lastPos < i2)
              out += str.slice(lastPos, i2);
            lastPos = i2 + 1;
            out += hexTable[c2];
          }
          if (++i2 === len)
            break outer;
          c2 = str.charCodeAt(i2);
        }
        if (lastPos < i2)
          out += str.slice(lastPos, i2);
        if (c2 < 2048) {
          lastPos = i2 + 1;
          out += hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63];
          continue;
        }
        if (c2 < 55296 || c2 >= 57344) {
          lastPos = i2 + 1;
          out += hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
          continue;
        }
        ++i2;
        if (i2 >= len) {
          throw new Error("URI malformed");
        }
        const c22 = str.charCodeAt(i2) & 1023;
        lastPos = i2 + 1;
        c2 = 65536 + ((c2 & 1023) << 10 | c22);
        out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
      }
      if (lastPos === 0)
        return str;
      if (lastPos < len)
        return out + str.slice(lastPos);
      return out;
    }
    __name(encodeString, "encodeString");
  }
});

// ../node_modules/picoquery/lib/shared.js
var require_shared = __commonJS({
  "../node_modules/picoquery/lib/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultOptions = exports.defaultShouldSerializeObject = exports.defaultValueSerializer = void 0;
    var string_util_js_1 = require_string_util();
    var defaultValueSerializer = /* @__PURE__ */ __name((value) => {
      switch (typeof value) {
        case "string":
          return (0, string_util_js_1.encodeString)(value);
        case "bigint":
        case "boolean":
          return "" + value;
        case "number":
          if (Number.isFinite(value)) {
            return value < 1e21 ? "" + value : (0, string_util_js_1.encodeString)("" + value);
          }
          break;
      }
      if (value instanceof Date) {
        return (0, string_util_js_1.encodeString)(value.toISOString());
      }
      return "";
    }, "defaultValueSerializer");
    exports.defaultValueSerializer = defaultValueSerializer;
    var defaultShouldSerializeObject = /* @__PURE__ */ __name((val) => {
      return val instanceof Date;
    }, "defaultShouldSerializeObject");
    exports.defaultShouldSerializeObject = defaultShouldSerializeObject;
    var identityFunc = /* @__PURE__ */ __name((v2) => v2, "identityFunc");
    exports.defaultOptions = {
      nesting: true,
      nestingSyntax: "dot",
      arrayRepeat: false,
      arrayRepeatSyntax: "repeat",
      delimiter: 38,
      valueDeserializer: identityFunc,
      valueSerializer: exports.defaultValueSerializer,
      keyDeserializer: identityFunc,
      shouldSerializeObject: exports.defaultShouldSerializeObject
    };
  }
});

// ../node_modules/picoquery/lib/object-util.js
var require_object_util = __commonJS({
  "../node_modules/picoquery/lib/object-util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDeepObject = getDeepObject;
    exports.stringifyObject = stringifyObject;
    var shared_js_1 = require_shared();
    var string_util_js_1 = require_string_util();
    function isPrototypeKey(value) {
      return value === "__proto__" || value === "constructor" || value === "prototype";
    }
    __name(isPrototypeKey, "isPrototypeKey");
    function getDeepObject(obj, key, nextKey, forceObject, forceArray) {
      if (isPrototypeKey(key))
        return obj;
      const currObj = obj[key];
      if (typeof currObj === "object" && currObj !== null) {
        return currObj;
      }
      if (!forceObject && (forceArray || typeof nextKey === "number" || typeof nextKey === "string" && nextKey * 0 === 0 && nextKey.indexOf(".") === -1)) {
        return obj[key] = [];
      }
      return obj[key] = {};
    }
    __name(getDeepObject, "getDeepObject");
    var MAX_DEPTH = 20;
    var strBracketPair = "[]";
    var strBracketLeft = "[";
    var strBracketRight = "]";
    var strDot = ".";
    function stringifyObject(obj, options2, depth = 0, parentKey, isProbableArray) {
      const { nestingSyntax = shared_js_1.defaultOptions.nestingSyntax, arrayRepeat = shared_js_1.defaultOptions.arrayRepeat, arrayRepeatSyntax = shared_js_1.defaultOptions.arrayRepeatSyntax, nesting = shared_js_1.defaultOptions.nesting, delimiter = shared_js_1.defaultOptions.delimiter, valueSerializer = shared_js_1.defaultOptions.valueSerializer, shouldSerializeObject = shared_js_1.defaultOptions.shouldSerializeObject } = options2;
      const strDelimiter = typeof delimiter === "number" ? String.fromCharCode(delimiter) : delimiter;
      const useArrayRepeatKey = isProbableArray === true && arrayRepeat;
      const shouldUseDot = nestingSyntax === "dot" || nestingSyntax === "js" && !isProbableArray;
      if (depth > MAX_DEPTH) {
        return "";
      }
      let result = "";
      let firstKey = true;
      let valueIsProbableArray = false;
      for (const key in obj) {
        const value = obj[key];
        if (value === void 0) {
          continue;
        }
        let path;
        if (parentKey) {
          path = parentKey;
          if (useArrayRepeatKey) {
            if (arrayRepeatSyntax === "bracket") {
              path += strBracketPair;
            }
          } else if (shouldUseDot) {
            path += strDot;
            path += key;
          } else {
            path += strBracketLeft;
            path += key;
            path += strBracketRight;
          }
        } else {
          path = key;
        }
        if (!firstKey) {
          result += strDelimiter;
        }
        if (typeof value === "object" && value !== null && !shouldSerializeObject(value)) {
          valueIsProbableArray = value.pop !== void 0;
          if (nesting || arrayRepeat && valueIsProbableArray) {
            result += stringifyObject(value, options2, depth + 1, path, valueIsProbableArray);
          }
        } else {
          result += (0, string_util_js_1.encodeString)(path);
          result += "=";
          result += valueSerializer(value, key);
        }
        if (firstKey) {
          firstKey = false;
        }
      }
      return result;
    }
    __name(stringifyObject, "stringifyObject");
  }
});

// ../node_modules/picoquery/lib/decode-uri-component.js
var require_decode_uri_component = __commonJS({
  "../node_modules/picoquery/lib/decode-uri-component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeURIComponent = decodeURIComponent;
    var UTF8_ACCEPT = 12;
    var UTF8_REJECT = 0;
    var UTF8_DATA = [
      // The first part of the table maps bytes to character to a transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      7,
      7,
      10,
      9,
      9,
      9,
      11,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      // The second part of the table maps a state to a new state when adding a
      // transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      24,
      36,
      48,
      60,
      72,
      84,
      96,
      0,
      12,
      12,
      12,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // The third part maps the current transition to a mask that needs to apply
      // to the byte.
      127,
      63,
      63,
      63,
      0,
      31,
      15,
      15,
      15,
      7,
      7,
      7
    ];
    function decodeURIComponent(uri) {
      let percentPosition = uri.indexOf("%");
      if (percentPosition === -1) {
        return uri;
      }
      const length = uri.length;
      let decoded = "";
      let last = 0;
      let codepoint = 0;
      let startOfOctets = percentPosition;
      let state = UTF8_ACCEPT;
      while (percentPosition > -1 && percentPosition < length) {
        const high = hexCodeToInt(uri[percentPosition + 1], 4);
        const low = hexCodeToInt(uri[percentPosition + 2], 0);
        const byte = high | low;
        const type = UTF8_DATA[byte];
        state = UTF8_DATA[256 + state + type];
        codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
        if (state === UTF8_ACCEPT) {
          decoded += uri.slice(last, startOfOctets);
          decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(55232 + (codepoint >> 10), 56320 + (codepoint & 1023));
          codepoint = 0;
          last = percentPosition + 3;
          percentPosition = startOfOctets = uri.indexOf("%", last);
        } else if (state === UTF8_REJECT) {
          return null;
        } else {
          percentPosition += 3;
          if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
            continue;
          return null;
        }
      }
      return decoded + uri.slice(last);
    }
    __name(decodeURIComponent, "decodeURIComponent");
    var HEX = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      a: 10,
      A: 10,
      b: 11,
      B: 11,
      c: 12,
      C: 12,
      d: 13,
      D: 13,
      e: 14,
      E: 14,
      f: 15,
      F: 15
    };
    function hexCodeToInt(c2, shift) {
      const i2 = HEX[c2];
      return i2 === void 0 ? 255 : i2 << shift;
    }
    __name(hexCodeToInt, "hexCodeToInt");
  }
});

// ../node_modules/picoquery/lib/parse.js
var require_parse = __commonJS({
  "../node_modules/picoquery/lib/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numberValueDeserializer = exports.numberKeyDeserializer = void 0;
    exports.parse = parse;
    var object_util_js_1 = require_object_util();
    var shared_js_1 = require_shared();
    var decode_uri_component_js_1 = require_decode_uri_component();
    var numberKeyDeserializer = /* @__PURE__ */ __name((key) => {
      const asNumber = Number(key);
      if (!Number.isNaN(asNumber)) {
        return asNumber;
      }
      return key;
    }, "numberKeyDeserializer");
    exports.numberKeyDeserializer = numberKeyDeserializer;
    var numberValueDeserializer = /* @__PURE__ */ __name((value) => {
      const asNumber = Number(value);
      if (!Number.isNaN(asNumber)) {
        return asNumber;
      }
      return value;
    }, "numberValueDeserializer");
    exports.numberValueDeserializer = numberValueDeserializer;
    var regexPlus = /\+/g;
    var Empty = /* @__PURE__ */ __name(function() {
    }, "Empty");
    Empty.prototype = /* @__PURE__ */ Object.create(null);
    function computeKeySlice(input, startIndex, endIndex, keyHasPlus, shouldDecodeKey) {
      let chunk = input.substring(startIndex, endIndex);
      if (keyHasPlus) {
        chunk = chunk.replace(regexPlus, " ");
      }
      if (shouldDecodeKey) {
        chunk = (0, decode_uri_component_js_1.decodeURIComponent)(chunk) || chunk;
      }
      return chunk;
    }
    __name(computeKeySlice, "computeKeySlice");
    function parse(input, options2) {
      const { valueDeserializer = shared_js_1.defaultOptions.valueDeserializer, keyDeserializer = shared_js_1.defaultOptions.keyDeserializer, arrayRepeatSyntax = shared_js_1.defaultOptions.arrayRepeatSyntax, nesting = shared_js_1.defaultOptions.nesting, arrayRepeat = shared_js_1.defaultOptions.arrayRepeat, nestingSyntax = shared_js_1.defaultOptions.nestingSyntax, delimiter = shared_js_1.defaultOptions.delimiter } = options2 ?? {};
      const charDelimiter = typeof delimiter === "string" ? delimiter.charCodeAt(0) : delimiter;
      const isJsNestingSyntax = nestingSyntax === "js";
      const result = new Empty();
      if (typeof input !== "string") {
        return result;
      }
      const inputLength = input.length;
      let value = "";
      let startingIndex = -1;
      let equalityIndex = -1;
      let keySeparatorIndex = -1;
      let currentObj = result;
      let lastKey = void 0;
      let currentKey = "";
      let keyChunk = "";
      let shouldDecodeKey = false;
      let shouldDecodeValue = false;
      let keyHasPlus = false;
      let valueHasPlus = false;
      let keyIsDot = false;
      let hasBothKeyValuePair = false;
      let c2 = 0;
      let arrayRepeatBracketIndex = -1;
      let prevIndex = -1;
      let prevChar = -1;
      for (let i2 = 0; i2 < inputLength + 1; i2++) {
        c2 = i2 !== inputLength ? input.charCodeAt(i2) : charDelimiter;
        if (c2 === charDelimiter) {
          hasBothKeyValuePair = equalityIndex > startingIndex;
          if (!hasBothKeyValuePair) {
            equalityIndex = i2;
          }
          if (keySeparatorIndex !== equalityIndex - 1) {
            keyChunk = computeKeySlice(input, keySeparatorIndex + 1, arrayRepeatBracketIndex > -1 ? arrayRepeatBracketIndex : equalityIndex, keyHasPlus, shouldDecodeKey);
            currentKey = keyDeserializer(keyChunk);
            if (lastKey !== void 0) {
              currentObj = (0, object_util_js_1.getDeepObject)(currentObj, lastKey, currentKey, isJsNestingSyntax && keyIsDot, void 0);
            }
          }
          if (hasBothKeyValuePair || currentKey !== "") {
            if (hasBothKeyValuePair) {
              value = input.slice(equalityIndex + 1, i2);
              if (valueHasPlus) {
                value = value.replace(regexPlus, " ");
              }
              if (shouldDecodeValue) {
                value = (0, decode_uri_component_js_1.decodeURIComponent)(value) || value;
              }
            }
            const newValue = valueDeserializer(value, currentKey);
            if (arrayRepeat) {
              const currentValue = currentObj[currentKey];
              if (currentValue === void 0) {
                if (arrayRepeatBracketIndex > -1) {
                  currentObj[currentKey] = [newValue];
                } else {
                  currentObj[currentKey] = newValue;
                }
              } else if (currentValue.pop) {
                currentValue.push(newValue);
              } else {
                currentObj[currentKey] = [currentValue, newValue];
              }
            } else
              currentObj[currentKey] = newValue;
          }
          value = "";
          startingIndex = i2;
          equalityIndex = i2;
          shouldDecodeKey = false;
          shouldDecodeValue = false;
          keyHasPlus = false;
          valueHasPlus = false;
          keyIsDot = false;
          arrayRepeatBracketIndex = -1;
          keySeparatorIndex = i2;
          currentObj = result;
          lastKey = void 0;
          currentKey = "";
        } else if (c2 === 93) {
          if (arrayRepeat && arrayRepeatSyntax === "bracket") {
            if (prevChar === 91) {
              arrayRepeatBracketIndex = prevIndex;
            }
          }
          if (nesting && (nestingSyntax === "index" || isJsNestingSyntax) && equalityIndex <= startingIndex) {
            if (keySeparatorIndex !== prevIndex) {
              keyChunk = computeKeySlice(input, keySeparatorIndex + 1, i2, keyHasPlus, shouldDecodeKey);
              currentKey = keyDeserializer(keyChunk);
              if (lastKey !== void 0) {
                currentObj = (0, object_util_js_1.getDeepObject)(currentObj, lastKey, currentKey, void 0, void 0);
              }
              lastKey = currentKey;
              keyHasPlus = false;
              shouldDecodeKey = false;
            }
            keySeparatorIndex = i2;
            keyIsDot = false;
          }
        } else if (c2 === 46) {
          if (nesting && (nestingSyntax === "dot" || isJsNestingSyntax) && equalityIndex <= startingIndex) {
            if (keySeparatorIndex !== prevIndex) {
              keyChunk = computeKeySlice(input, keySeparatorIndex + 1, i2, keyHasPlus, shouldDecodeKey);
              currentKey = keyDeserializer(keyChunk);
              if (lastKey !== void 0) {
                currentObj = (0, object_util_js_1.getDeepObject)(currentObj, lastKey, currentKey, isJsNestingSyntax);
              }
              lastKey = currentKey;
              keyHasPlus = false;
              shouldDecodeKey = false;
            }
            keyIsDot = true;
            keySeparatorIndex = i2;
          }
        } else if (c2 === 91) {
          if (nesting && (nestingSyntax === "index" || isJsNestingSyntax) && equalityIndex <= startingIndex) {
            if (keySeparatorIndex !== prevIndex) {
              keyChunk = computeKeySlice(input, keySeparatorIndex + 1, i2, keyHasPlus, shouldDecodeKey);
              currentKey = keyDeserializer(keyChunk);
              if (isJsNestingSyntax && lastKey !== void 0) {
                currentObj = (0, object_util_js_1.getDeepObject)(currentObj, lastKey, currentKey, isJsNestingSyntax);
              }
              lastKey = currentKey;
              keyHasPlus = false;
              shouldDecodeKey = false;
              keyIsDot = false;
            }
            keySeparatorIndex = i2;
          }
        } else if (c2 === 61) {
          if (equalityIndex <= startingIndex) {
            equalityIndex = i2;
          } else {
            shouldDecodeValue = true;
          }
        } else if (c2 === 43) {
          if (equalityIndex > startingIndex) {
            valueHasPlus = true;
          } else {
            keyHasPlus = true;
          }
        } else if (c2 === 37) {
          if (equalityIndex > startingIndex) {
            shouldDecodeValue = true;
          } else {
            shouldDecodeKey = true;
          }
        }
        prevIndex = i2;
        prevChar = c2;
      }
      return result;
    }
    __name(parse, "parse");
  }
});

// ../node_modules/picoquery/lib/stringify.js
var require_stringify = __commonJS({
  "../node_modules/picoquery/lib/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringify = stringify2;
    var object_util_js_1 = require_object_util();
    function stringify2(input, options2) {
      if (input === null || typeof input !== "object") {
        return "";
      }
      const optionsObj = options2 ?? {};
      return (0, object_util_js_1.stringifyObject)(input, optionsObj);
    }
    __name(stringify2, "stringify");
  }
});

// ../node_modules/picoquery/lib/main.js
var require_main = __commonJS({
  "../node_modules/picoquery/lib/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o3, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m2, k2);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m2[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m2[k2];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringify = exports.parse = void 0;
    var parse_js_1 = require_parse();
    Object.defineProperty(exports, "parse", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return parse_js_1.parse;
    }, "get") });
    var stringify_js_1 = require_stringify();
    Object.defineProperty(exports, "stringify", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return stringify_js_1.stringify;
    }, "get") });
    __exportStar(require_shared(), exports);
  }
});

// ../node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "../node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i2 = 0; i2 < selection.rangeCount; i2++) {
        ranges.push(selection.getRangeAt(i2));
      }
      switch (active.tagName.toUpperCase()) {
        // .toUpperCase handles XHTML
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// ../node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "../node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    __name(format, "format");
    function copy3(text, options2) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options2) {
        options2 = {};
      }
      debug = options2.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e2) {
          e2.stopPropagation();
          if (options2.format) {
            e2.preventDefault();
            if (typeof e2.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options2.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e2.clipboardData.clearData();
              e2.clipboardData.setData(options2.format, text);
            }
          }
          if (options2.onCopy) {
            e2.preventDefault();
            options2.onCopy(e2.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options2.format || "text", text);
          options2.onCopy && options2.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options2 ? options2.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    __name(copy3, "copy");
    module.exports = copy3;
  }
});

// ../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b2 = Symbol.for("react.element");
    var c2 = Symbol.for("react.portal");
    var d2 = Symbol.for("react.fragment");
    var e2 = Symbol.for("react.strict_mode");
    var f2 = Symbol.for("react.profiler");
    var g2 = Symbol.for("react.provider");
    var h2 = Symbol.for("react.context");
    var k2 = Symbol.for("react.server_context");
    var l3 = Symbol.for("react.forward_ref");
    var m2 = Symbol.for("react.suspense");
    var n3 = Symbol.for("react.suspense_list");
    var p2 = Symbol.for("react.memo");
    var q2 = Symbol.for("react.lazy");
    var t2 = Symbol.for("react.offscreen");
    var u2;
    u2 = Symbol.for("react.module.reference");
    function v2(a2) {
      if ("object" === typeof a2 && null !== a2) {
        var r3 = a2.$$typeof;
        switch (r3) {
          case b2:
            switch (a2 = a2.type, a2) {
              case d2:
              case f2:
              case e2:
              case m2:
              case n3:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case k2:
                  case h2:
                  case l3:
                  case q2:
                  case p2:
                  case g2:
                    return a2;
                  default:
                    return r3;
                }
            }
          case c2:
            return r3;
        }
      }
    }
    __name(v2, "v");
    exports.ContextConsumer = h2;
    exports.ContextProvider = g2;
    exports.Element = b2;
    exports.ForwardRef = l3;
    exports.Fragment = d2;
    exports.Lazy = q2;
    exports.Memo = p2;
    exports.Portal = c2;
    exports.Profiler = f2;
    exports.StrictMode = e2;
    exports.Suspense = m2;
    exports.SuspenseList = n3;
    exports.isAsyncMode = function() {
      return false;
    };
    exports.isConcurrentMode = function() {
      return false;
    };
    exports.isContextConsumer = function(a2) {
      return v2(a2) === h2;
    };
    exports.isContextProvider = function(a2) {
      return v2(a2) === g2;
    };
    exports.isElement = function(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === b2;
    };
    exports.isForwardRef = function(a2) {
      return v2(a2) === l3;
    };
    exports.isFragment = function(a2) {
      return v2(a2) === d2;
    };
    exports.isLazy = function(a2) {
      return v2(a2) === q2;
    };
    exports.isMemo = function(a2) {
      return v2(a2) === p2;
    };
    exports.isPortal = function(a2) {
      return v2(a2) === c2;
    };
    exports.isProfiler = function(a2) {
      return v2(a2) === f2;
    };
    exports.isStrictMode = function(a2) {
      return v2(a2) === e2;
    };
    exports.isSuspense = function(a2) {
      return v2(a2) === m2;
    };
    exports.isSuspenseList = function(a2) {
      return v2(a2) === n3;
    };
    exports.isValidElementType = function(a2) {
      return "string" === typeof a2 || "function" === typeof a2 || a2 === d2 || a2 === f2 || a2 === e2 || a2 === m2 || a2 === n3 || a2 === t2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q2 || a2.$$typeof === p2 || a2.$$typeof === g2 || a2.$$typeof === h2 || a2.$$typeof === l3 || a2.$$typeof === u2 || void 0 !== a2.getModuleId) ? true : false;
    };
    exports.typeOf = v2;
  }
});

// ../node_modules/downshift/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../node_modules/downshift/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = null;
    }
  }
});

// ../node_modules/fuse.js/dist/fuse.js
var require_fuse = __commonJS({
  "../node_modules/fuse.js/dist/fuse.js"(exports, module) {
    !function(e2, t2) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define("Fuse", [], t2) : "object" == typeof exports ? exports.Fuse = t2() : e2.Fuse = t2();
    }(exports, function() {
      return function(e2) {
        var t2 = {};
        function r3(n3) {
          if (t2[n3]) return t2[n3].exports;
          var o3 = t2[n3] = { i: n3, l: false, exports: {} };
          return e2[n3].call(o3.exports, o3, o3.exports, r3), o3.l = true, o3.exports;
        }
        __name(r3, "r");
        return r3.m = e2, r3.c = t2, r3.d = function(e3, t3, n3) {
          r3.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: n3 });
        }, r3.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, r3.t = function(e3, t3) {
          if (1 & t3 && (e3 = r3(e3)), 8 & t3) return e3;
          if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule) return e3;
          var n3 = /* @__PURE__ */ Object.create(null);
          if (r3.r(n3), Object.defineProperty(n3, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3) for (var o3 in e3) r3.d(n3, o3, function(t4) {
            return e3[t4];
          }.bind(null, o3));
          return n3;
        }, r3.n = function(e3) {
          var t3 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return r3.d(t3, "a", t3), t3;
        }, r3.o = function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, r3.p = "", r3(r3.s = 0);
      }([function(e2, t2, r3) {
        function n3(e3) {
          return (n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        __name(n3, "n");
        function o3(e3, t3) {
          for (var r4 = 0; r4 < t3.length; r4++) {
            var n4 = t3[r4];
            n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e3, n4.key, n4);
          }
        }
        __name(o3, "o");
        var i2 = r3(1), a2 = r3(7), s2 = a2.get, c2 = (a2.deepValue, a2.isArray), h2 = function() {
          function e3(t4, r5) {
            var n4 = r5.location, o4 = void 0 === n4 ? 0 : n4, i3 = r5.distance, a4 = void 0 === i3 ? 100 : i3, c3 = r5.threshold, h3 = void 0 === c3 ? 0.6 : c3, l3 = r5.maxPatternLength, u2 = void 0 === l3 ? 32 : l3, f2 = r5.caseSensitive, v2 = void 0 !== f2 && f2, p2 = r5.tokenSeparator, d2 = void 0 === p2 ? / +/g : p2, g2 = r5.findAllMatches, y2 = void 0 !== g2 && g2, m2 = r5.minMatchCharLength, k2 = void 0 === m2 ? 1 : m2, b2 = r5.id, S2 = void 0 === b2 ? null : b2, x2 = r5.keys, M2 = void 0 === x2 ? [] : x2, _2 = r5.shouldSort, w2 = void 0 === _2 || _2, L2 = r5.getFn, A3 = void 0 === L2 ? s2 : L2, O2 = r5.sortFn, C2 = void 0 === O2 ? function(e4, t5) {
              return e4.score - t5.score;
            } : O2, j2 = r5.tokenize, P3 = void 0 !== j2 && j2, I2 = r5.matchAllTokens, F2 = void 0 !== I2 && I2, T2 = r5.includeMatches, N2 = void 0 !== T2 && T2, z2 = r5.includeScore, E2 = void 0 !== z2 && z2, W2 = r5.verbose, K2 = void 0 !== W2 && W2;
            !function(e4, t5) {
              if (!(e4 instanceof t5)) throw new TypeError("Cannot call a class as a function");
            }(this, e3), this.options = { location: o4, distance: a4, threshold: h3, maxPatternLength: u2, isCaseSensitive: v2, tokenSeparator: d2, findAllMatches: y2, minMatchCharLength: k2, id: S2, keys: M2, includeMatches: N2, includeScore: E2, shouldSort: w2, getFn: A3, sortFn: C2, verbose: K2, tokenize: P3, matchAllTokens: F2 }, this.setCollection(t4), this._processKeys(M2);
          }
          __name(e3, "e");
          var t3, r4, a3;
          return t3 = e3, (r4 = [{ key: "setCollection", value: /* @__PURE__ */ __name(function(e4) {
            return this.list = e4, e4;
          }, "value") }, { key: "_processKeys", value: /* @__PURE__ */ __name(function(e4) {
            if (this._keyWeights = {}, this._keyNames = [], e4.length && "string" == typeof e4[0]) for (var t4 = 0, r5 = e4.length; t4 < r5; t4 += 1) {
              var n4 = e4[t4];
              this._keyWeights[n4] = 1, this._keyNames.push(n4);
            }
            else {
              for (var o4 = null, i3 = null, a4 = 0, s3 = 0, c3 = e4.length; s3 < c3; s3 += 1) {
                var h3 = e4[s3];
                if (!h3.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
                var l3 = h3.name;
                if (this._keyNames.push(l3), !h3.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
                var u2 = h3.weight;
                if (u2 < 0 || u2 > 1) throw new Error('"weight" property in key must bein the range of [0, 1)');
                i3 = null == i3 ? u2 : Math.max(i3, u2), o4 = null == o4 ? u2 : Math.min(o4, u2), this._keyWeights[l3] = u2, a4 += u2;
              }
              if (a4 > 1) throw new Error("Total of weights cannot exceed 1");
            }
          }, "value") }, { key: "search", value: /* @__PURE__ */ __name(function(e4) {
            var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: false };
            this._log('---------\nSearch pattern: "'.concat(e4, '"'));
            var r5 = this._prepareSearchers(e4), n4 = r5.tokenSearchers, o4 = r5.fullSearcher, i3 = this._search(n4, o4);
            return this._computeScore(i3), this.options.shouldSort && this._sort(i3), t4.limit && "number" == typeof t4.limit && (i3 = i3.slice(0, t4.limit)), this._format(i3);
          }, "value") }, { key: "_prepareSearchers", value: /* @__PURE__ */ __name(function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t4 = [];
            if (this.options.tokenize) for (var r5 = e4.split(this.options.tokenSeparator), n4 = 0, o4 = r5.length; n4 < o4; n4 += 1) t4.push(new i2(r5[n4], this.options));
            return { tokenSearchers: t4, fullSearcher: new i2(e4, this.options) };
          }, "value") }, { key: "_search", value: /* @__PURE__ */ __name(function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t4 = arguments.length > 1 ? arguments[1] : void 0, r5 = this.list, n4 = {}, o4 = [];
            if ("string" == typeof r5[0]) {
              for (var i3 = 0, a4 = r5.length; i3 < a4; i3 += 1) this._analyze({ key: "", value: r5[i3], record: i3, index: i3 }, { resultMap: n4, results: o4, tokenSearchers: e4, fullSearcher: t4 });
              return o4;
            }
            for (var s3 = 0, c3 = r5.length; s3 < c3; s3 += 1) for (var h3 = r5[s3], l3 = 0, u2 = this._keyNames.length; l3 < u2; l3 += 1) {
              var f2 = this._keyNames[l3];
              this._analyze({ key: f2, value: this.options.getFn(h3, f2), record: h3, index: s3 }, { resultMap: n4, results: o4, tokenSearchers: e4, fullSearcher: t4 });
            }
            return o4;
          }, "value") }, { key: "_analyze", value: /* @__PURE__ */ __name(function(e4, t4) {
            var r5 = this, n4 = e4.key, o4 = e4.arrayIndex, i3 = void 0 === o4 ? -1 : o4, a4 = e4.value, s3 = e4.record, h3 = e4.index, l3 = t4.tokenSearchers, u2 = void 0 === l3 ? [] : l3, f2 = t4.fullSearcher, v2 = t4.resultMap, p2 = void 0 === v2 ? {} : v2, d2 = t4.results, g2 = void 0 === d2 ? [] : d2;
            !(/* @__PURE__ */ __name(function e5(t5, o5, i4, a5) {
              if (null != o5) {
                if ("string" == typeof o5) {
                  var s4 = false, h4 = -1, l4 = 0;
                  r5._log("\nKey: ".concat("" === n4 ? "--" : n4));
                  var v3 = f2.search(o5);
                  if (r5._log('Full text: "'.concat(o5, '", score: ').concat(v3.score)), r5.options.tokenize) {
                    for (var d3 = o5.split(r5.options.tokenSeparator), y2 = d3.length, m2 = [], k2 = 0, b2 = u2.length; k2 < b2; k2 += 1) {
                      var S2 = u2[k2];
                      r5._log('\nPattern: "'.concat(S2.pattern, '"'));
                      for (var x2 = false, M2 = 0; M2 < y2; M2 += 1) {
                        var _2 = d3[M2], w2 = S2.search(_2), L2 = {};
                        w2.isMatch ? (L2[_2] = w2.score, s4 = true, x2 = true, m2.push(w2.score)) : (L2[_2] = 1, r5.options.matchAllTokens || m2.push(1)), r5._log('Token: "'.concat(_2, '", score: ').concat(L2[_2]));
                      }
                      x2 && (l4 += 1);
                    }
                    h4 = m2[0];
                    for (var A3 = m2.length, O2 = 1; O2 < A3; O2 += 1) h4 += m2[O2];
                    h4 /= A3, r5._log("Token score average:", h4);
                  }
                  var C2 = v3.score;
                  h4 > -1 && (C2 = (C2 + h4) / 2), r5._log("Score average:", C2);
                  var j2 = !r5.options.tokenize || !r5.options.matchAllTokens || l4 >= u2.length;
                  if (r5._log("\nCheck Matches: ".concat(j2)), (s4 || v3.isMatch) && j2) {
                    var P3 = { key: n4, arrayIndex: t5, value: o5, score: C2 };
                    r5.options.includeMatches && (P3.matchedIndices = v3.matchedIndices);
                    var I2 = p2[a5];
                    I2 ? I2.output.push(P3) : (p2[a5] = { item: i4, output: [P3] }, g2.push(p2[a5]));
                  }
                } else if (c2(o5)) for (var F2 = 0, T2 = o5.length; F2 < T2; F2 += 1) e5(F2, o5[F2], i4, a5);
              }
            }, "e"))(i3, a4, s3, h3);
          }, "value") }, { key: "_computeScore", value: /* @__PURE__ */ __name(function(e4) {
            this._log("\n\nComputing score:\n");
            for (var t4 = this._keyWeights, r5 = !!Object.keys(t4).length, n4 = 0, o4 = e4.length; n4 < o4; n4 += 1) {
              for (var i3 = e4[n4], a4 = i3.output, s3 = a4.length, c3 = 1, h3 = 0; h3 < s3; h3 += 1) {
                var l3 = a4[h3], u2 = l3.key, f2 = r5 ? t4[u2] : 1, v2 = 0 === l3.score && t4 && t4[u2] > 0 ? Number.EPSILON : l3.score;
                c3 *= Math.pow(v2, f2);
              }
              i3.score = c3, this._log(i3);
            }
          }, "value") }, { key: "_sort", value: /* @__PURE__ */ __name(function(e4) {
            this._log("\n\nSorting...."), e4.sort(this.options.sortFn);
          }, "value") }, { key: "_format", value: /* @__PURE__ */ __name(function(e4) {
            var t4 = [];
            if (this.options.verbose) {
              var r5 = [];
              this._log("\n\nOutput:\n\n", JSON.stringify(e4, function(e5, t5) {
                if ("object" === n3(t5) && null !== t5) {
                  if (-1 !== r5.indexOf(t5)) return;
                  r5.push(t5);
                }
                return t5;
              }, 2)), r5 = null;
            }
            var o4 = [];
            this.options.includeMatches && o4.push(function(e5, t5) {
              var r6 = e5.output;
              t5.matches = [];
              for (var n4 = 0, o5 = r6.length; n4 < o5; n4 += 1) {
                var i4 = r6[n4];
                if (0 !== i4.matchedIndices.length) {
                  var a5 = { indices: i4.matchedIndices, value: i4.value };
                  i4.key && (a5.key = i4.key), i4.hasOwnProperty("arrayIndex") && i4.arrayIndex > -1 && (a5.arrayIndex = i4.arrayIndex), t5.matches.push(a5);
                }
              }
            }), this.options.includeScore && o4.push(function(e5, t5) {
              t5.score = e5.score;
            });
            for (var i3 = 0, a4 = e4.length; i3 < a4; i3 += 1) {
              var s3 = e4[i3];
              if (this.options.id && (s3.item = this.options.getFn(s3.item, this.options.id)[0]), o4.length) {
                for (var c3 = { item: s3.item }, h3 = 0, l3 = o4.length; h3 < l3; h3 += 1) o4[h3](s3, c3);
                t4.push(c3);
              } else t4.push(s3.item);
            }
            return t4;
          }, "value") }, { key: "_log", value: /* @__PURE__ */ __name(function() {
            var e4;
            this.options.verbose && (e4 = console).log.apply(e4, arguments);
          }, "value") }]) && o3(t3.prototype, r4), a3 && o3(t3, a3), e3;
        }();
        e2.exports = h2;
      }, function(e2, t2, r3) {
        function n3(e3, t3) {
          for (var r4 = 0; r4 < t3.length; r4++) {
            var n4 = t3[r4];
            n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e3, n4.key, n4);
          }
        }
        __name(n3, "n");
        var o3 = r3(2), i2 = r3(3), a2 = r3(6), s2 = function() {
          function e3(t4, r5) {
            var n4 = r5.location, o4 = void 0 === n4 ? 0 : n4, i3 = r5.distance, s4 = void 0 === i3 ? 100 : i3, c2 = r5.threshold, h2 = void 0 === c2 ? 0.6 : c2, l3 = r5.maxPatternLength, u2 = void 0 === l3 ? 32 : l3, f2 = r5.isCaseSensitive, v2 = void 0 !== f2 && f2, p2 = r5.tokenSeparator, d2 = void 0 === p2 ? / +/g : p2, g2 = r5.findAllMatches, y2 = void 0 !== g2 && g2, m2 = r5.minMatchCharLength, k2 = void 0 === m2 ? 1 : m2, b2 = r5.includeMatches, S2 = void 0 !== b2 && b2;
            !function(e4, t5) {
              if (!(e4 instanceof t5)) throw new TypeError("Cannot call a class as a function");
            }(this, e3), this.options = { location: o4, distance: s4, threshold: h2, maxPatternLength: u2, isCaseSensitive: v2, tokenSeparator: d2, findAllMatches: y2, includeMatches: S2, minMatchCharLength: k2 }, this.pattern = v2 ? t4 : t4.toLowerCase(), this.pattern.length <= u2 && (this.patternAlphabet = a2(this.pattern));
          }
          __name(e3, "e");
          var t3, r4, s3;
          return t3 = e3, (r4 = [{ key: "search", value: /* @__PURE__ */ __name(function(e4) {
            var t4 = this.options, r5 = t4.isCaseSensitive, n4 = t4.includeMatches;
            if (r5 || (e4 = e4.toLowerCase()), this.pattern === e4) {
              var a3 = { isMatch: true, score: 0 };
              return n4 && (a3.matchedIndices = [[0, e4.length - 1]]), a3;
            }
            var s4 = this.options, c2 = s4.maxPatternLength, h2 = s4.tokenSeparator;
            if (this.pattern.length > c2) return o3(e4, this.pattern, h2);
            var l3 = this.options, u2 = l3.location, f2 = l3.distance, v2 = l3.threshold, p2 = l3.findAllMatches, d2 = l3.minMatchCharLength;
            return i2(e4, this.pattern, this.patternAlphabet, { location: u2, distance: f2, threshold: v2, findAllMatches: p2, minMatchCharLength: d2, includeMatches: n4 });
          }, "value") }]) && n3(t3.prototype, r4), s3 && n3(t3, s3), e3;
        }();
        e2.exports = s2;
      }, function(e2, t2) {
        var r3 = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
        e2.exports = function(e3, t3) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g, o3 = new RegExp(t3.replace(r3, "\\$&").replace(n3, "|")), i2 = e3.match(o3), a2 = !!i2, s2 = [];
          if (a2) for (var c2 = 0, h2 = i2.length; c2 < h2; c2 += 1) {
            var l3 = i2[c2];
            s2.push([e3.indexOf(l3), l3.length - 1]);
          }
          return { score: a2 ? 0.5 : 1, isMatch: a2, matchedIndices: s2 };
        };
      }, function(e2, t2, r3) {
        var n3 = r3(4), o3 = r3(5);
        e2.exports = function(e3, t3, r4, i2) {
          for (var a2 = i2.location, s2 = void 0 === a2 ? 0 : a2, c2 = i2.distance, h2 = void 0 === c2 ? 100 : c2, l3 = i2.threshold, u2 = void 0 === l3 ? 0.6 : l3, f2 = i2.findAllMatches, v2 = void 0 !== f2 && f2, p2 = i2.minMatchCharLength, d2 = void 0 === p2 ? 1 : p2, g2 = i2.includeMatches, y2 = void 0 !== g2 && g2, m2 = s2, k2 = e3.length, b2 = u2, S2 = e3.indexOf(t3, m2), x2 = t3.length, M2 = [], _2 = 0; _2 < k2; _2 += 1) M2[_2] = 0;
          if (-1 !== S2) {
            var w2 = n3(t3, { errors: 0, currentLocation: S2, expectedLocation: m2, distance: h2 });
            if (b2 = Math.min(w2, b2), -1 !== (S2 = e3.lastIndexOf(t3, m2 + x2))) {
              var L2 = n3(t3, { errors: 0, currentLocation: S2, expectedLocation: m2, distance: h2 });
              b2 = Math.min(L2, b2);
            }
          }
          S2 = -1;
          for (var A3 = [], O2 = 1, C2 = x2 + k2, j2 = 1 << (x2 <= 31 ? x2 - 1 : 30), P3 = 0; P3 < x2; P3 += 1) {
            for (var I2 = 0, F2 = C2; I2 < F2; ) {
              n3(t3, { errors: P3, currentLocation: m2 + F2, expectedLocation: m2, distance: h2 }) <= b2 ? I2 = F2 : C2 = F2, F2 = Math.floor((C2 - I2) / 2 + I2);
            }
            C2 = F2;
            var T2 = Math.max(1, m2 - F2 + 1), N2 = v2 ? k2 : Math.min(m2 + F2, k2) + x2, z2 = Array(N2 + 2);
            z2[N2 + 1] = (1 << P3) - 1;
            for (var E2 = N2; E2 >= T2; E2 -= 1) {
              var W2 = E2 - 1, K2 = r4[e3.charAt(W2)];
              if (K2 && (M2[W2] = 1), z2[E2] = (z2[E2 + 1] << 1 | 1) & K2, 0 !== P3 && (z2[E2] |= (A3[E2 + 1] | A3[E2]) << 1 | 1 | A3[E2 + 1]), z2[E2] & j2 && (O2 = n3(t3, { errors: P3, currentLocation: W2, expectedLocation: m2, distance: h2 })) <= b2) {
                if (b2 = O2, (S2 = W2) <= m2) break;
                T2 = Math.max(1, 2 * m2 - S2);
              }
            }
            if (n3(t3, { errors: P3 + 1, currentLocation: m2, expectedLocation: m2, distance: h2 }) > b2) break;
            A3 = z2;
          }
          var $ = { isMatch: S2 >= 0, score: 0 === O2 ? 1e-3 : O2 };
          return y2 && ($.matchedIndices = o3(M2, d2)), $;
        };
      }, function(e2, t2) {
        e2.exports = function(e3, t3) {
          var r3 = t3.errors, n3 = void 0 === r3 ? 0 : r3, o3 = t3.currentLocation, i2 = void 0 === o3 ? 0 : o3, a2 = t3.expectedLocation, s2 = void 0 === a2 ? 0 : a2, c2 = t3.distance, h2 = void 0 === c2 ? 100 : c2, l3 = n3 / e3.length, u2 = Math.abs(s2 - i2);
          return h2 ? l3 + u2 / h2 : u2 ? 1 : l3;
        };
      }, function(e2, t2) {
        e2.exports = function() {
          for (var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r3 = [], n3 = -1, o3 = -1, i2 = 0, a2 = e3.length; i2 < a2; i2 += 1) {
            var s2 = e3[i2];
            s2 && -1 === n3 ? n3 = i2 : s2 || -1 === n3 || ((o3 = i2 - 1) - n3 + 1 >= t3 && r3.push([n3, o3]), n3 = -1);
          }
          return e3[i2 - 1] && i2 - n3 >= t3 && r3.push([n3, i2 - 1]), r3;
        };
      }, function(e2, t2) {
        e2.exports = function(e3) {
          for (var t3 = {}, r3 = e3.length, n3 = 0; n3 < r3; n3 += 1) t3[e3.charAt(n3)] = 0;
          for (var o3 = 0; o3 < r3; o3 += 1) t3[e3.charAt(o3)] |= 1 << r3 - o3 - 1;
          return t3;
        };
      }, function(e2, t2) {
        var r3 = /* @__PURE__ */ __name(function(e3) {
          return Array.isArray ? Array.isArray(e3) : "[object Array]" === Object.prototype.toString.call(e3);
        }, "r"), n3 = /* @__PURE__ */ __name(function(e3) {
          return null == e3 ? "" : function(e4) {
            if ("string" == typeof e4) return e4;
            var t3 = e4 + "";
            return "0" == t3 && 1 / e4 == -1 / 0 ? "-0" : t3;
          }(e3);
        }, "n"), o3 = /* @__PURE__ */ __name(function(e3) {
          return "string" == typeof e3;
        }, "o"), i2 = /* @__PURE__ */ __name(function(e3) {
          return "number" == typeof e3;
        }, "i");
        e2.exports = { get: /* @__PURE__ */ __name(function(e3, t3) {
          var a2 = [];
          return (/* @__PURE__ */ __name(function e4(t4, s2) {
            if (s2) {
              var c2 = s2.indexOf("."), h2 = s2, l3 = null;
              -1 !== c2 && (h2 = s2.slice(0, c2), l3 = s2.slice(c2 + 1));
              var u2 = t4[h2];
              if (null != u2) if (l3 || !o3(u2) && !i2(u2)) if (r3(u2)) for (var f2 = 0, v2 = u2.length; f2 < v2; f2 += 1) e4(u2[f2], l3);
              else l3 && e4(u2, l3);
              else a2.push(n3(u2));
            } else a2.push(t4);
          }, "e"))(e3, t3), a2;
        }, "get"), isArray: r3, isString: o3, isNum: i2, toString: n3 };
      }]);
    });
  }
});

// ../node_modules/store2/dist/store2.js
var require_store2 = __commonJS({
  "../node_modules/store2/dist/store2.js"(exports, module) {
    (function(window2, define2) {
      var _2 = {
        version: "2.14.4",
        areas: {},
        apis: {},
        nsdelim: ".",
        // utilities
        inherit: /* @__PURE__ */ __name(function(api, o3) {
          for (var p2 in api) {
            if (!o3.hasOwnProperty(p2)) {
              Object.defineProperty(o3, p2, Object.getOwnPropertyDescriptor(api, p2));
            }
          }
          return o3;
        }, "inherit"),
        stringify: /* @__PURE__ */ __name(function(d2, fn) {
          return d2 === void 0 || typeof d2 === "function" ? d2 + "" : JSON.stringify(d2, fn || _2.replace);
        }, "stringify"),
        parse: /* @__PURE__ */ __name(function(s2, fn) {
          try {
            return JSON.parse(s2, fn || _2.revive);
          } catch (e2) {
            return s2;
          }
        }, "parse"),
        // extension hooks
        fn: /* @__PURE__ */ __name(function(name, fn) {
          _2.storeAPI[name] = fn;
          for (var api in _2.apis) {
            _2.apis[api][name] = fn;
          }
        }, "fn"),
        get: /* @__PURE__ */ __name(function(area, key) {
          return area.getItem(key);
        }, "get"),
        set: /* @__PURE__ */ __name(function(area, key, string) {
          area.setItem(key, string);
        }, "set"),
        remove: /* @__PURE__ */ __name(function(area, key) {
          area.removeItem(key);
        }, "remove"),
        key: /* @__PURE__ */ __name(function(area, i2) {
          return area.key(i2);
        }, "key"),
        length: /* @__PURE__ */ __name(function(area) {
          return area.length;
        }, "length"),
        clear: /* @__PURE__ */ __name(function(area) {
          area.clear();
        }, "clear"),
        // core functions
        Store: /* @__PURE__ */ __name(function(id, area, namespace) {
          var store3 = _2.inherit(_2.storeAPI, function(key, data, overwrite) {
            if (arguments.length === 0) {
              return store3.getAll();
            }
            if (typeof data === "function") {
              return store3.transact(key, data, overwrite);
            }
            if (data !== void 0) {
              return store3.set(key, data, overwrite);
            }
            if (typeof key === "string" || typeof key === "number") {
              return store3.get(key);
            }
            if (typeof key === "function") {
              return store3.each(key);
            }
            if (!key) {
              return store3.clear();
            }
            return store3.setAll(key, data);
          });
          store3._id = id;
          try {
            var testKey = "__store2_test";
            area.setItem(testKey, "ok");
            store3._area = area;
            area.removeItem(testKey);
          } catch (e2) {
            store3._area = _2.storage("fake");
          }
          store3._ns = namespace || "";
          if (!_2.areas[id]) {
            _2.areas[id] = store3._area;
          }
          if (!_2.apis[store3._ns + store3._id]) {
            _2.apis[store3._ns + store3._id] = store3;
          }
          return store3;
        }, "Store"),
        storeAPI: {
          // admin functions
          area: /* @__PURE__ */ __name(function(id, area) {
            var store3 = this[id];
            if (!store3 || !store3.area) {
              store3 = _2.Store(id, area, this._ns);
              if (!this[id]) {
                this[id] = store3;
              }
            }
            return store3;
          }, "area"),
          namespace: /* @__PURE__ */ __name(function(namespace, singleArea, delim) {
            delim = delim || this._delim || _2.nsdelim;
            if (!namespace) {
              return this._ns ? this._ns.substring(0, this._ns.length - delim.length) : "";
            }
            var ns = namespace, store3 = this[ns];
            if (!store3 || !store3.namespace) {
              store3 = _2.Store(this._id, this._area, this._ns + ns + delim);
              store3._delim = delim;
              if (!this[ns]) {
                this[ns] = store3;
              }
              if (!singleArea) {
                for (var name in _2.areas) {
                  store3.area(name, _2.areas[name]);
                }
              }
            }
            return store3;
          }, "namespace"),
          isFake: /* @__PURE__ */ __name(function(force) {
            if (force) {
              this._real = this._area;
              this._area = _2.storage("fake");
            } else if (force === false) {
              this._area = this._real || this._area;
            }
            return this._area.name === "fake";
          }, "isFake"),
          toString: /* @__PURE__ */ __name(function() {
            return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
          }, "toString"),
          // storage functions
          has: /* @__PURE__ */ __name(function(key) {
            if (this._area.has) {
              return this._area.has(this._in(key));
            }
            return !!(this._in(key) in this._area);
          }, "has"),
          size: /* @__PURE__ */ __name(function() {
            return this.keys().length;
          }, "size"),
          each: /* @__PURE__ */ __name(function(fn, fill) {
            for (var i2 = 0, m2 = _2.length(this._area); i2 < m2; i2++) {
              var key = this._out(_2.key(this._area, i2));
              if (key !== void 0) {
                if (fn.call(this, key, this.get(key), fill) === false) {
                  break;
                }
              }
              if (m2 > _2.length(this._area)) {
                m2--;
                i2--;
              }
            }
            return fill || this;
          }, "each"),
          keys: /* @__PURE__ */ __name(function(fillList) {
            return this.each(function(k2, v2, list) {
              list.push(k2);
            }, fillList || []);
          }, "keys"),
          get: /* @__PURE__ */ __name(function(key, alt) {
            var s2 = _2.get(this._area, this._in(key)), fn;
            if (typeof alt === "function") {
              fn = alt;
              alt = null;
            }
            return s2 !== null ? _2.parse(s2, fn) : alt != null ? alt : s2;
          }, "get"),
          getAll: /* @__PURE__ */ __name(function(fillObj) {
            return this.each(function(k2, v2, all) {
              all[k2] = v2;
            }, fillObj || {});
          }, "getAll"),
          transact: /* @__PURE__ */ __name(function(key, fn, alt) {
            var val = this.get(key, alt), ret = fn(val);
            this.set(key, ret === void 0 ? val : ret);
            return this;
          }, "transact"),
          set: /* @__PURE__ */ __name(function(key, data, overwrite) {
            var d2 = this.get(key), replacer;
            if (d2 != null && overwrite === false) {
              return data;
            }
            if (typeof overwrite === "function") {
              replacer = overwrite;
              overwrite = void 0;
            }
            return _2.set(this._area, this._in(key), _2.stringify(data, replacer), overwrite) || d2;
          }, "set"),
          setAll: /* @__PURE__ */ __name(function(data, overwrite) {
            var changed, val;
            for (var key in data) {
              val = data[key];
              if (this.set(key, val, overwrite) !== val) {
                changed = true;
              }
            }
            return changed;
          }, "setAll"),
          add: /* @__PURE__ */ __name(function(key, data, replacer) {
            var d2 = this.get(key);
            if (d2 instanceof Array) {
              data = d2.concat(data);
            } else if (d2 !== null) {
              var type = typeof d2;
              if (type === typeof data && type === "object") {
                for (var k2 in data) {
                  d2[k2] = data[k2];
                }
                data = d2;
              } else {
                data = d2 + data;
              }
            }
            _2.set(this._area, this._in(key), _2.stringify(data, replacer));
            return data;
          }, "add"),
          remove: /* @__PURE__ */ __name(function(key, alt) {
            var d2 = this.get(key, alt);
            _2.remove(this._area, this._in(key));
            return d2;
          }, "remove"),
          clear: /* @__PURE__ */ __name(function() {
            if (!this._ns) {
              _2.clear(this._area);
            } else {
              this.each(function(k2) {
                _2.remove(this._area, this._in(k2));
              }, 1);
            }
            return this;
          }, "clear"),
          clearAll: /* @__PURE__ */ __name(function() {
            var area = this._area;
            for (var id in _2.areas) {
              if (_2.areas.hasOwnProperty(id)) {
                this._area = _2.areas[id];
                this.clear();
              }
            }
            this._area = area;
            return this;
          }, "clearAll"),
          // internal use functions
          _in: /* @__PURE__ */ __name(function(k2) {
            if (typeof k2 !== "string") {
              k2 = _2.stringify(k2);
            }
            return this._ns ? this._ns + k2 : k2;
          }, "_in"),
          _out: /* @__PURE__ */ __name(function(k2) {
            return this._ns ? k2 && k2.indexOf(this._ns) === 0 ? k2.substring(this._ns.length) : void 0 : (
              // so each() knows to skip it
              k2
            );
          }, "_out")
        },
        // end _.storeAPI
        storage: /* @__PURE__ */ __name(function(name) {
          return _2.inherit(_2.storageAPI, { items: {}, name });
        }, "storage"),
        storageAPI: {
          length: 0,
          has: /* @__PURE__ */ __name(function(k2) {
            return this.items.hasOwnProperty(k2);
          }, "has"),
          key: /* @__PURE__ */ __name(function(i2) {
            var c2 = 0;
            for (var k2 in this.items) {
              if (this.has(k2) && i2 === c2++) {
                return k2;
              }
            }
          }, "key"),
          setItem: /* @__PURE__ */ __name(function(k2, v2) {
            if (!this.has(k2)) {
              this.length++;
            }
            this.items[k2] = v2;
          }, "setItem"),
          removeItem: /* @__PURE__ */ __name(function(k2) {
            if (this.has(k2)) {
              delete this.items[k2];
              this.length--;
            }
          }, "removeItem"),
          getItem: /* @__PURE__ */ __name(function(k2) {
            return this.has(k2) ? this.items[k2] : null;
          }, "getItem"),
          clear: /* @__PURE__ */ __name(function() {
            for (var k2 in this.items) {
              this.removeItem(k2);
            }
          }, "clear")
        }
        // end _.storageAPI
      };
      var store2 = (
        // safely set this up (throws error in IE10/32bit mode for local files)
        _2.Store("local", function() {
          try {
            return localStorage;
          } catch (e2) {
          }
        }())
      );
      store2.local = store2;
      store2._ = _2;
      store2.area("session", function() {
        try {
          return sessionStorage;
        } catch (e2) {
        }
      }());
      store2.area("page", _2.storage("page"));
      if (typeof define2 === "function" && define2.amd !== void 0) {
        define2("store2", [], function() {
          return store2;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = store2;
      } else {
        if (window2.store) {
          _2.conflict = window2.store;
        }
        window2.store = store2;
      }
    })(exports, exports && exports.define);
  }
});

// global-externals:react
var react_default = __REACT__;
var { Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, act, cloneElement, createContext, createElement, createFactory, createRef, forwardRef, isValidElement, lazy, memo, startTransition, unstable_act, useCallback, useContext, useDebugValue, useDeferredValue, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useReducer, useRef, useState, useSyncExternalStore, useTransition, version } = __REACT__;

// global-externals:storybook/internal/channels
var channels_default = __STORYBOOK_CHANNELS__;
var { Channel, HEARTBEAT_INTERVAL, HEARTBEAT_MAX_LATENCY, PostMessageTransport, WebsocketTransport, createBrowserChannel } = __STORYBOOK_CHANNELS__;

// global-externals:storybook/internal/core-events
var core_events_default = __STORYBOOK_CORE_EVENTS__;
var { ARGTYPES_INFO_REQUEST, ARGTYPES_INFO_RESPONSE, CHANNEL_CREATED, CHANNEL_WS_DISCONNECT, CONFIG_ERROR, CREATE_NEW_STORYFILE_REQUEST, CREATE_NEW_STORYFILE_RESPONSE, CURRENT_STORY_WAS_SET, DOCS_PREPARED, DOCS_RENDERED, FILE_COMPONENT_SEARCH_REQUEST, FILE_COMPONENT_SEARCH_RESPONSE, FORCE_REMOUNT, FORCE_RE_RENDER, GLOBALS_UPDATED, NAVIGATE_URL, OPEN_IN_EDITOR_REQUEST, OPEN_IN_EDITOR_RESPONSE, PLAY_FUNCTION_THREW_EXCEPTION, PRELOAD_ENTRIES, PREVIEW_BUILDER_PROGRESS, PREVIEW_INITIALIZED, PREVIEW_KEYDOWN, REGISTER_SUBSCRIPTION, REQUEST_WHATS_NEW_DATA, RESET_STORY_ARGS, RESULT_WHATS_NEW_DATA, SAVE_STORY_REQUEST, SAVE_STORY_RESPONSE, SELECT_STORY, SET_CONFIG, SET_CURRENT_STORY, SET_FILTER, SET_GLOBALS, SET_INDEX, SET_STORIES, SET_WHATS_NEW_CACHE, SHARED_STATE_CHANGED, SHARED_STATE_SET, STORIES_COLLAPSE_ALL, STORIES_EXPAND_ALL, STORY_ARGS_UPDATED, STORY_CHANGED, STORY_ERRORED, STORY_FINISHED, STORY_HOT_UPDATED, STORY_INDEX_INVALIDATED, STORY_MISSING, STORY_PREPARED, STORY_RENDERED, STORY_RENDER_PHASE_CHANGED, STORY_SPECIFIED, STORY_THREW_EXCEPTION, STORY_UNCHANGED, TELEMETRY_ERROR, TOGGLE_WHATS_NEW_NOTIFICATIONS, UNHANDLED_ERRORS_WHILE_PLAYING, UPDATE_GLOBALS, UPDATE_QUERY_PARAMS, UPDATE_STORY_ARGS } = __STORYBOOK_CORE_EVENTS__;

// ../node_modules/@storybook/global/dist/index.mjs
var scope = (() => {
  let win;
  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof globalThis !== "undefined") {
    win = globalThis;
  } else if (typeof global !== "undefined") {
    win = global;
  } else if (typeof self !== "undefined") {
    win = self;
  } else {
    win = {};
  }
  return win;
})();

// global-externals:@storybook/icons
var icons_exports = {};
__export(icons_exports, {
  AccessibilityAltIcon: () => AccessibilityAltIcon,
  AccessibilityIcon: () => AccessibilityIcon,
  AccessibilityIgnoredIcon: () => AccessibilityIgnoredIcon,
  AddIcon: () => AddIcon,
  AdminIcon: () => AdminIcon,
  AlertAltIcon: () => AlertAltIcon,
  AlertIcon: () => AlertIcon,
  AlignLeftIcon: () => AlignLeftIcon,
  AlignRightIcon: () => AlignRightIcon,
  AppleIcon: () => AppleIcon,
  ArrowBottomLeftIcon: () => ArrowBottomLeftIcon,
  ArrowBottomRightIcon: () => ArrowBottomRightIcon,
  ArrowDownIcon: () => ArrowDownIcon,
  ArrowLeftIcon: () => ArrowLeftIcon,
  ArrowRightIcon: () => ArrowRightIcon,
  ArrowSolidDownIcon: () => ArrowSolidDownIcon,
  ArrowSolidLeftIcon: () => ArrowSolidLeftIcon,
  ArrowSolidRightIcon: () => ArrowSolidRightIcon,
  ArrowSolidUpIcon: () => ArrowSolidUpIcon,
  ArrowTopLeftIcon: () => ArrowTopLeftIcon,
  ArrowTopRightIcon: () => ArrowTopRightIcon,
  ArrowUpIcon: () => ArrowUpIcon,
  AzureDevOpsIcon: () => AzureDevOpsIcon,
  BackIcon: () => BackIcon,
  BasketIcon: () => BasketIcon,
  BatchAcceptIcon: () => BatchAcceptIcon,
  BatchDenyIcon: () => BatchDenyIcon,
  BeakerIcon: () => BeakerIcon,
  BellIcon: () => BellIcon,
  BitbucketIcon: () => BitbucketIcon,
  BoldIcon: () => BoldIcon,
  BookIcon: () => BookIcon,
  BookmarkHollowIcon: () => BookmarkHollowIcon,
  BookmarkIcon: () => BookmarkIcon,
  BottomBarIcon: () => BottomBarIcon,
  BottomBarToggleIcon: () => BottomBarToggleIcon,
  BoxIcon: () => BoxIcon,
  BranchIcon: () => BranchIcon,
  BrowserIcon: () => BrowserIcon,
  BugIcon: () => BugIcon,
  ButtonIcon: () => ButtonIcon,
  CPUIcon: () => CPUIcon,
  CalendarIcon: () => CalendarIcon,
  CameraIcon: () => CameraIcon,
  CameraStabilizeIcon: () => CameraStabilizeIcon,
  CategoryIcon: () => CategoryIcon,
  CertificateIcon: () => CertificateIcon,
  ChangedIcon: () => ChangedIcon,
  ChatIcon: () => ChatIcon,
  CheckIcon: () => CheckIcon,
  ChevronDownIcon: () => ChevronDownIcon,
  ChevronLeftIcon: () => ChevronLeftIcon,
  ChevronRightIcon: () => ChevronRightIcon,
  ChevronSmallDownIcon: () => ChevronSmallDownIcon,
  ChevronSmallLeftIcon: () => ChevronSmallLeftIcon,
  ChevronSmallRightIcon: () => ChevronSmallRightIcon,
  ChevronSmallUpIcon: () => ChevronSmallUpIcon,
  ChevronUpIcon: () => ChevronUpIcon,
  ChromaticIcon: () => ChromaticIcon,
  ChromeIcon: () => ChromeIcon,
  CircleHollowIcon: () => CircleHollowIcon,
  CircleIcon: () => CircleIcon,
  ClearIcon: () => ClearIcon,
  CloseAltIcon: () => CloseAltIcon,
  CloseIcon: () => CloseIcon,
  CloudHollowIcon: () => CloudHollowIcon,
  CloudIcon: () => CloudIcon,
  CogIcon: () => CogIcon,
  CollapseIcon: () => CollapseIcon,
  CommandIcon: () => CommandIcon,
  CommentAddIcon: () => CommentAddIcon,
  CommentIcon: () => CommentIcon,
  CommentsIcon: () => CommentsIcon,
  CommitIcon: () => CommitIcon,
  CompassIcon: () => CompassIcon,
  ComponentDrivenIcon: () => ComponentDrivenIcon,
  ComponentIcon: () => ComponentIcon,
  ContrastIcon: () => ContrastIcon,
  ContrastIgnoredIcon: () => ContrastIgnoredIcon,
  ControlsIcon: () => ControlsIcon,
  CopyIcon: () => CopyIcon,
  CreditIcon: () => CreditIcon,
  CrossIcon: () => CrossIcon,
  DashboardIcon: () => DashboardIcon,
  DatabaseIcon: () => DatabaseIcon,
  DeleteIcon: () => DeleteIcon,
  DiamondIcon: () => DiamondIcon,
  DirectionIcon: () => DirectionIcon,
  DiscordIcon: () => DiscordIcon,
  DocChartIcon: () => DocChartIcon,
  DocListIcon: () => DocListIcon,
  DocumentIcon: () => DocumentIcon,
  DownloadIcon: () => DownloadIcon,
  DragIcon: () => DragIcon,
  EditIcon: () => EditIcon,
  EditorIcon: () => EditorIcon,
  EllipsisIcon: () => EllipsisIcon,
  EmailIcon: () => EmailIcon,
  ExpandAltIcon: () => ExpandAltIcon,
  ExpandIcon: () => ExpandIcon,
  EyeCloseIcon: () => EyeCloseIcon,
  EyeIcon: () => EyeIcon,
  FaceHappyIcon: () => FaceHappyIcon,
  FaceNeutralIcon: () => FaceNeutralIcon,
  FaceSadIcon: () => FaceSadIcon,
  FacebookIcon: () => FacebookIcon,
  FailedIcon: () => FailedIcon,
  FastForwardIcon: () => FastForwardIcon,
  FigmaIcon: () => FigmaIcon,
  FilterIcon: () => FilterIcon,
  FlagIcon: () => FlagIcon,
  FolderIcon: () => FolderIcon,
  FormIcon: () => FormIcon,
  GDriveIcon: () => GDriveIcon,
  GiftIcon: () => GiftIcon,
  GithubIcon: () => GithubIcon,
  GitlabIcon: () => GitlabIcon,
  GlobeIcon: () => GlobeIcon,
  GoogleIcon: () => GoogleIcon,
  GraphBarIcon: () => GraphBarIcon,
  GraphLineIcon: () => GraphLineIcon,
  GraphqlIcon: () => GraphqlIcon,
  GridAltIcon: () => GridAltIcon,
  GridIcon: () => GridIcon,
  GrowIcon: () => GrowIcon,
  HeartHollowIcon: () => HeartHollowIcon,
  HeartIcon: () => HeartIcon,
  HomeIcon: () => HomeIcon,
  HourglassIcon: () => HourglassIcon,
  InfoIcon: () => InfoIcon,
  ItalicIcon: () => ItalicIcon,
  JumpToIcon: () => JumpToIcon,
  KeyIcon: () => KeyIcon,
  LightningIcon: () => LightningIcon,
  LightningOffIcon: () => LightningOffIcon,
  LinkBrokenIcon: () => LinkBrokenIcon,
  LinkIcon: () => LinkIcon,
  LinkedinIcon: () => LinkedinIcon,
  LinuxIcon: () => LinuxIcon,
  ListOrderedIcon: () => ListOrderedIcon,
  ListUnorderedIcon: () => ListUnorderedIcon,
  LocationIcon: () => LocationIcon,
  LockIcon: () => LockIcon,
  MarkdownIcon: () => MarkdownIcon,
  MarkupIcon: () => MarkupIcon,
  MediumIcon: () => MediumIcon,
  MemoryIcon: () => MemoryIcon,
  MenuIcon: () => MenuIcon,
  MergeIcon: () => MergeIcon,
  MirrorIcon: () => MirrorIcon,
  MobileIcon: () => MobileIcon,
  MoonIcon: () => MoonIcon,
  NutIcon: () => NutIcon,
  OutboxIcon: () => OutboxIcon,
  OutlineIcon: () => OutlineIcon,
  PaintBrushAltIcon: () => PaintBrushAltIcon,
  PaintBrushIcon: () => PaintBrushIcon,
  PaperClipIcon: () => PaperClipIcon,
  ParagraphIcon: () => ParagraphIcon,
  PassedIcon: () => PassedIcon,
  PhoneIcon: () => PhoneIcon,
  PhotoDragIcon: () => PhotoDragIcon,
  PhotoIcon: () => PhotoIcon,
  PhotoStabilizeIcon: () => PhotoStabilizeIcon,
  PinAltIcon: () => PinAltIcon,
  PinIcon: () => PinIcon,
  PlayAllHollowIcon: () => PlayAllHollowIcon,
  PlayBackIcon: () => PlayBackIcon,
  PlayHollowIcon: () => PlayHollowIcon,
  PlayIcon: () => PlayIcon,
  PlayNextIcon: () => PlayNextIcon,
  PlusIcon: () => PlusIcon,
  PointerDefaultIcon: () => PointerDefaultIcon,
  PointerHandIcon: () => PointerHandIcon,
  PowerIcon: () => PowerIcon,
  PrintIcon: () => PrintIcon,
  ProceedIcon: () => ProceedIcon,
  ProfileIcon: () => ProfileIcon,
  PullRequestIcon: () => PullRequestIcon,
  QuestionIcon: () => QuestionIcon,
  RSSIcon: () => RSSIcon,
  RedirectIcon: () => RedirectIcon,
  ReduxIcon: () => ReduxIcon,
  RefreshIcon: () => RefreshIcon,
  ReplyIcon: () => ReplyIcon,
  RepoIcon: () => RepoIcon,
  RequestChangeIcon: () => RequestChangeIcon,
  RewindIcon: () => RewindIcon,
  RulerIcon: () => RulerIcon,
  SaveIcon: () => SaveIcon,
  SearchIcon: () => SearchIcon,
  ShareAltIcon: () => ShareAltIcon,
  ShareIcon: () => ShareIcon,
  ShieldIcon: () => ShieldIcon,
  SideBySideIcon: () => SideBySideIcon,
  SidebarAltIcon: () => SidebarAltIcon,
  SidebarAltToggleIcon: () => SidebarAltToggleIcon,
  SidebarIcon: () => SidebarIcon,
  SidebarToggleIcon: () => SidebarToggleIcon,
  SortDownIcon: () => SortDownIcon,
  SortUpIcon: () => SortUpIcon,
  SpeakerIcon: () => SpeakerIcon,
  StackedIcon: () => StackedIcon,
  StarHollowIcon: () => StarHollowIcon,
  StarIcon: () => StarIcon,
  StatusFailIcon: () => StatusFailIcon,
  StatusIcon: () => StatusIcon,
  StatusPassIcon: () => StatusPassIcon,
  StatusWarnIcon: () => StatusWarnIcon,
  StickerIcon: () => StickerIcon,
  StopAltHollowIcon: () => StopAltHollowIcon,
  StopAltIcon: () => StopAltIcon,
  StopIcon: () => StopIcon,
  StorybookIcon: () => StorybookIcon,
  StructureIcon: () => StructureIcon,
  SubtractIcon: () => SubtractIcon,
  SunIcon: () => SunIcon,
  SupportIcon: () => SupportIcon,
  SweepIcon: () => SweepIcon,
  SwitchAltIcon: () => SwitchAltIcon,
  SyncIcon: () => SyncIcon,
  TabletIcon: () => TabletIcon,
  ThumbsUpIcon: () => ThumbsUpIcon,
  TimeIcon: () => TimeIcon,
  TimerIcon: () => TimerIcon,
  TransferIcon: () => TransferIcon,
  TrashIcon: () => TrashIcon,
  TwitterIcon: () => TwitterIcon,
  TypeIcon: () => TypeIcon,
  UbuntuIcon: () => UbuntuIcon,
  UndoIcon: () => UndoIcon,
  UnfoldIcon: () => UnfoldIcon,
  UnlockIcon: () => UnlockIcon,
  UnpinIcon: () => UnpinIcon,
  UploadIcon: () => UploadIcon,
  UserAddIcon: () => UserAddIcon,
  UserAltIcon: () => UserAltIcon,
  UserIcon: () => UserIcon,
  UsersIcon: () => UsersIcon,
  VSCodeIcon: () => VSCodeIcon,
  VerifiedIcon: () => VerifiedIcon,
  VideoIcon: () => VideoIcon,
  WandIcon: () => WandIcon,
  WatchIcon: () => WatchIcon,
  WindowsIcon: () => WindowsIcon,
  WrenchIcon: () => WrenchIcon,
  XIcon: () => XIcon,
  YoutubeIcon: () => YoutubeIcon,
  ZoomIcon: () => ZoomIcon,
  ZoomOutIcon: () => ZoomOutIcon,
  ZoomResetIcon: () => ZoomResetIcon,
  default: () => icons_default,
  iconList: () => iconList
});
var icons_default = __STORYBOOK_ICONS__;
var { AccessibilityAltIcon, AccessibilityIcon, AccessibilityIgnoredIcon, AddIcon, AdminIcon, AlertAltIcon, AlertIcon, AlignLeftIcon, AlignRightIcon, AppleIcon, ArrowBottomLeftIcon, ArrowBottomRightIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowSolidDownIcon, ArrowSolidLeftIcon, ArrowSolidRightIcon, ArrowSolidUpIcon, ArrowTopLeftIcon, ArrowTopRightIcon, ArrowUpIcon, AzureDevOpsIcon, BackIcon, BasketIcon, BatchAcceptIcon, BatchDenyIcon, BeakerIcon, BellIcon, BitbucketIcon, BoldIcon, BookIcon, BookmarkHollowIcon, BookmarkIcon, BottomBarIcon, BottomBarToggleIcon, BoxIcon, BranchIcon, BrowserIcon, BugIcon, ButtonIcon, CPUIcon, CalendarIcon, CameraIcon, CameraStabilizeIcon, CategoryIcon, CertificateIcon, ChangedIcon, ChatIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronSmallDownIcon, ChevronSmallLeftIcon, ChevronSmallRightIcon, ChevronSmallUpIcon, ChevronUpIcon, ChromaticIcon, ChromeIcon, CircleHollowIcon, CircleIcon, ClearIcon, CloseAltIcon, CloseIcon, CloudHollowIcon, CloudIcon, CogIcon, CollapseIcon, CommandIcon, CommentAddIcon, CommentIcon, CommentsIcon, CommitIcon, CompassIcon, ComponentDrivenIcon, ComponentIcon, ContrastIcon, ContrastIgnoredIcon, ControlsIcon, CopyIcon, CreditIcon, CrossIcon, DashboardIcon, DatabaseIcon, DeleteIcon, DiamondIcon, DirectionIcon, DiscordIcon, DocChartIcon, DocListIcon, DocumentIcon, DownloadIcon, DragIcon, EditIcon, EditorIcon, EllipsisIcon, EmailIcon, ExpandAltIcon, ExpandIcon, EyeCloseIcon, EyeIcon, FaceHappyIcon, FaceNeutralIcon, FaceSadIcon, FacebookIcon, FailedIcon, FastForwardIcon, FigmaIcon, FilterIcon, FlagIcon, FolderIcon, FormIcon, GDriveIcon, GiftIcon, GithubIcon, GitlabIcon, GlobeIcon, GoogleIcon, GraphBarIcon, GraphLineIcon, GraphqlIcon, GridAltIcon, GridIcon, GrowIcon, HeartHollowIcon, HeartIcon, HomeIcon, HourglassIcon, InfoIcon, ItalicIcon, JumpToIcon, KeyIcon, LightningIcon, LightningOffIcon, LinkBrokenIcon, LinkIcon, LinkedinIcon, LinuxIcon, ListOrderedIcon, ListUnorderedIcon, LocationIcon, LockIcon, MarkdownIcon, MarkupIcon, MediumIcon, MemoryIcon, MenuIcon, MergeIcon, MirrorIcon, MobileIcon, MoonIcon, NutIcon, OutboxIcon, OutlineIcon, PaintBrushAltIcon, PaintBrushIcon, PaperClipIcon, ParagraphIcon, PassedIcon, PhoneIcon, PhotoDragIcon, PhotoIcon, PhotoStabilizeIcon, PinAltIcon, PinIcon, PlayAllHollowIcon, PlayBackIcon, PlayHollowIcon, PlayIcon, PlayNextIcon, PlusIcon, PointerDefaultIcon, PointerHandIcon, PowerIcon, PrintIcon, ProceedIcon, ProfileIcon, PullRequestIcon, QuestionIcon, RSSIcon, RedirectIcon, ReduxIcon, RefreshIcon, ReplyIcon, RepoIcon, RequestChangeIcon, RewindIcon, RulerIcon, SaveIcon, SearchIcon, ShareAltIcon, ShareIcon, ShieldIcon, SideBySideIcon, SidebarAltIcon, SidebarAltToggleIcon, SidebarIcon, SidebarToggleIcon, SortDownIcon, SortUpIcon, SpeakerIcon, StackedIcon, StarHollowIcon, StarIcon, StatusFailIcon, StatusIcon, StatusPassIcon, StatusWarnIcon, StickerIcon, StopAltHollowIcon, StopAltIcon, StopIcon, StorybookIcon, StructureIcon, SubtractIcon, SunIcon, SupportIcon, SweepIcon, SwitchAltIcon, SyncIcon, TabletIcon, ThumbsUpIcon, TimeIcon, TimerIcon, TransferIcon, TrashIcon, TwitterIcon, TypeIcon, UbuntuIcon, UndoIcon, UnfoldIcon, UnlockIcon, UnpinIcon, UploadIcon, UserAddIcon, UserAltIcon, UserIcon, UsersIcon, VSCodeIcon, VerifiedIcon, VideoIcon, WandIcon, WatchIcon, WindowsIcon, WrenchIcon, XIcon, YoutubeIcon, ZoomIcon, ZoomOutIcon, ZoomResetIcon, iconList } = __STORYBOOK_ICONS__;

// global-externals:storybook/manager-api
var manager_api_default = __STORYBOOK_API__;
var { ActiveTabs, Consumer, ManagerContext, Provider, RequestResponseError, addons, combineParameters, controlOrMetaKey, controlOrMetaSymbol, eventMatchesShortcut, eventToShortcut, experimental_MockUniversalStore, experimental_UniversalStore, experimental_getStatusStore, experimental_getTestProviderStore, experimental_requestResponse, experimental_useStatusStore, experimental_useTestProviderStore, experimental_useUniversalStore, internal_fullStatusStore, internal_fullTestProviderStore, internal_universalStatusStore, internal_universalTestProviderStore, isMacLike, isShortcutTaken, keyToSymbol, merge, mockChannel, optionOrAltSymbol, shortcutMatchesShortcut, shortcutToHumanString, types, useAddonState, useArgTypes, useArgs, useChannel, useGlobalTypes, useGlobals, useParameter, useSharedState, useStoryPrepared, useStorybookApi, useStorybookState } = __STORYBOOK_API__;

// global-externals:storybook/theming
var theming_default = __STORYBOOK_THEMING__;
var { CacheProvider, ClassNames, Global, ThemeProvider, background, color, convert, create, createCache, createGlobal, createReset, css, darken, ensure, ignoreSsrWarning, isPropValid, jsx, keyframes, lighten, styled, themes, typography, useTheme, withTheme } = __STORYBOOK_THEMING__;

// global-externals:storybook/internal/components
var components_default = __STORYBOOK_COMPONENTS__;
var { A, ActionBar, AddonPanel, Badge, Bar, Blockquote, Button, ClipboardCode, Code, DL, Div, DocumentWrapper, EmptyTabContent, ErrorFormatter, FlexBar, Form, H1, H2, H3, H4, H5, H6, HR, IconButton, Img, LI, Link, ListItem, Loader, Modal, OL, P, Placeholder, Pre, ProgressSpinner, ResetWrapper, ScrollArea, Separator, Spaced, Span, StorybookIcon: StorybookIcon2, StorybookLogo, SyntaxHighlighter, TT, TabBar, TabButton, TabWrapper, Table, Tabs, TabsState, TooltipLinkList, TooltipMessage, TooltipNote, UL, WithTooltip, WithTooltipPure, Zoom, codeCommon, components, createCopyToClipboardFunction, getStoryHref, interleaveSeparators, nameSpaceClassNames, resetComponents, withReset } = __STORYBOOK_COMPONENTS__;

// src/toolbar/utils/normalize-toolbar-arg-type.ts
var defaultItemValues = {
  type: "item",
  value: ""
};
var normalizeArgType = /* @__PURE__ */ __name((key, argType) => ({
  ...argType,
  name: argType.name || key,
  description: argType.description || key,
  toolbar: {
    ...argType.toolbar,
    items: argType.toolbar.items.map((_item) => {
      const item = typeof _item === "string" ? { value: _item, title: _item } : _item;
      if (item.type === "reset" && argType.toolbar.icon) {
        item.icon = argType.toolbar.icon;
        item.hideIcon = true;
      }
      return { ...defaultItemValues, ...item };
    })
  }
}), "normalizeArgType");

// src/toolbar/utils/create-cycle-value-array.ts
var disallowedCycleableItemTypes = ["reset"];
var createCycleValueArray = /* @__PURE__ */ __name((items) => {
  const valueArray = items.filter((item) => !disallowedCycleableItemTypes.includes(item.type)).map((item) => item.value);
  return valueArray;
}, "createCycleValueArray");

// src/toolbar/constants.ts
var TOOLBAR_ID = "toolbar";

// src/toolbar/utils/register-shortcuts.ts
var registerShortcuts = /* @__PURE__ */ __name(async (api, id, shortcuts) => {
  if (shortcuts && shortcuts.next) {
    await api.setAddonShortcut(TOOLBAR_ID, {
      label: shortcuts.next.label,
      defaultShortcut: shortcuts.next.keys,
      actionName: `${id}:next`,
      action: shortcuts.next.action
    });
  }
  if (shortcuts && shortcuts.previous) {
    await api.setAddonShortcut(TOOLBAR_ID, {
      label: shortcuts.previous.label,
      defaultShortcut: shortcuts.previous.keys,
      actionName: `${id}:previous`,
      action: shortcuts.previous.action
    });
  }
  if (shortcuts && shortcuts.reset) {
    await api.setAddonShortcut(TOOLBAR_ID, {
      label: shortcuts.reset.label,
      defaultShortcut: shortcuts.reset.keys,
      actionName: `${id}:reset`,
      action: shortcuts.reset.action
    });
  }
}, "registerShortcuts");

// src/toolbar/hoc/withKeyboardCycle.tsx
var withKeyboardCycle = /* @__PURE__ */ __name((Component2) => {
  const WithKeyboardCycle = /* @__PURE__ */ __name((props) => {
    const {
      id,
      toolbar: { items, shortcuts }
    } = props;
    const api = useStorybookApi();
    const [globals, updateGlobals] = useGlobals();
    const cycleValues = useRef([]);
    const currentValue = globals[id];
    const reset = useCallback(() => {
      updateGlobals({ [id]: "" });
    }, [updateGlobals]);
    const setNext = useCallback(() => {
      const values2 = cycleValues.current;
      const currentIndex = values2.indexOf(currentValue);
      const currentIsLast = currentIndex === values2.length - 1;
      const newCurrentIndex = currentIsLast ? 0 : currentIndex + 1;
      const newCurrent = cycleValues.current[newCurrentIndex];
      updateGlobals({ [id]: newCurrent });
    }, [cycleValues, currentValue, updateGlobals]);
    const setPrevious = useCallback(() => {
      const values2 = cycleValues.current;
      const indexOf = values2.indexOf(currentValue);
      const currentIndex = indexOf > -1 ? indexOf : 0;
      const currentIsFirst = currentIndex === 0;
      const newCurrentIndex = currentIsFirst ? values2.length - 1 : currentIndex - 1;
      const newCurrent = cycleValues.current[newCurrentIndex];
      updateGlobals({ [id]: newCurrent });
    }, [cycleValues, currentValue, updateGlobals]);
    useEffect(() => {
      if (shortcuts) {
        registerShortcuts(api, id, {
          next: { ...shortcuts.next, action: setNext },
          previous: { ...shortcuts.previous, action: setPrevious },
          reset: { ...shortcuts.reset, action: reset }
        });
      }
    }, [api, id, shortcuts, setNext, setPrevious, reset]);
    useEffect(() => {
      cycleValues.current = createCycleValueArray(items);
    }, []);
    return react_default.createElement(Component2, { cycleValues: cycleValues.current, ...props });
  }, "WithKeyboardCycle");
  return WithKeyboardCycle;
}, "withKeyboardCycle");

// src/toolbar/utils/get-selected.ts
var getSelectedItem = /* @__PURE__ */ __name(({ currentValue, items }) => {
  const selectedItem = currentValue != null && items.find((item) => item.value === currentValue && item.type !== "reset");
  return selectedItem;
}, "getSelectedItem");
var getSelectedIcon = /* @__PURE__ */ __name(({ currentValue, items }) => {
  const selectedItem = getSelectedItem({ currentValue, items });
  if (selectedItem) {
    return selectedItem.icon;
  }
  return void 0;
}, "getSelectedIcon");
var getSelectedTitle = /* @__PURE__ */ __name(({ currentValue, items }) => {
  const selectedItem = getSelectedItem({ currentValue, items });
  if (selectedItem) {
    return selectedItem.title;
  }
  return void 0;
}, "getSelectedTitle");

// global-externals:storybook/internal/client-logger
var client_logger_default = __STORYBOOK_CLIENT_LOGGER__;
var { deprecate, logger, once, pretty } = __STORYBOOK_CLIENT_LOGGER__;

// src/components/components/icon/icon.tsx
var NEW_ICON_MAP = icons_exports;
var Svg = styled.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;
  path {
    fill: currentColor;
  }
`;
var Icons = /* @__PURE__ */ __name(({
  icon,
  useSymbol,
  __suppressDeprecationWarning = false,
  ...props
}) => {
  if (!__suppressDeprecationWarning) {
    deprecate(
      `Use of the deprecated Icons ${`(${icon})` || ""} component detected. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`
    );
  }
  const findIcon = icons[icon] || null;
  if (!findIcon) {
    logger.warn(
      `Use of an unknown prop ${`(${icon})` || ""} in the Icons component. The Icons component is deprecated. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`
    );
    return null;
  }
  const Icon = NEW_ICON_MAP[findIcon];
  return react_default.createElement(Icon, { ...props });
}, "Icons");
var Symbols = memo(/* @__PURE__ */ __name(function Symbols2({ icons: keys = Object.keys(icons) }) {
  return react_default.createElement(
    Svg,
    {
      viewBox: "0 0 14 14",
      style: { position: "absolute", width: 0, height: 0 },
      "data-chromatic": "ignore"
    },
    keys.map((key) => react_default.createElement("symbol", { id: `icon--${key}`, key }, icons[key]))
  );
}, "Symbols"));
var icons = {
  user: "UserIcon",
  useralt: "UserAltIcon",
  useradd: "UserAddIcon",
  users: "UsersIcon",
  profile: "ProfileIcon",
  facehappy: "FaceHappyIcon",
  faceneutral: "FaceNeutralIcon",
  facesad: "FaceSadIcon",
  accessibility: "AccessibilityIcon",
  accessibilityalt: "AccessibilityAltIcon",
  arrowup: "ChevronUpIcon",
  arrowdown: "ChevronDownIcon",
  arrowleft: "ChevronLeftIcon",
  arrowright: "ChevronRightIcon",
  arrowupalt: "ArrowUpIcon",
  arrowdownalt: "ArrowDownIcon",
  arrowleftalt: "ArrowLeftIcon",
  arrowrightalt: "ArrowRightIcon",
  expandalt: "ExpandAltIcon",
  collapse: "CollapseIcon",
  expand: "ExpandIcon",
  unfold: "UnfoldIcon",
  transfer: "TransferIcon",
  redirect: "RedirectIcon",
  undo: "UndoIcon",
  reply: "ReplyIcon",
  sync: "SyncIcon",
  upload: "UploadIcon",
  download: "DownloadIcon",
  back: "BackIcon",
  proceed: "ProceedIcon",
  refresh: "RefreshIcon",
  globe: "GlobeIcon",
  compass: "CompassIcon",
  location: "LocationIcon",
  pin: "PinIcon",
  time: "TimeIcon",
  dashboard: "DashboardIcon",
  timer: "TimerIcon",
  home: "HomeIcon",
  admin: "AdminIcon",
  info: "InfoIcon",
  question: "QuestionIcon",
  support: "SupportIcon",
  alert: "AlertIcon",
  email: "EmailIcon",
  phone: "PhoneIcon",
  link: "LinkIcon",
  unlink: "LinkBrokenIcon",
  bell: "BellIcon",
  rss: "RSSIcon",
  sharealt: "ShareAltIcon",
  share: "ShareIcon",
  circle: "CircleIcon",
  circlehollow: "CircleHollowIcon",
  bookmarkhollow: "BookmarkHollowIcon",
  bookmark: "BookmarkIcon",
  hearthollow: "HeartHollowIcon",
  heart: "HeartIcon",
  starhollow: "StarHollowIcon",
  star: "StarIcon",
  certificate: "CertificateIcon",
  verified: "VerifiedIcon",
  thumbsup: "ThumbsUpIcon",
  shield: "ShieldIcon",
  basket: "BasketIcon",
  beaker: "BeakerIcon",
  hourglass: "HourglassIcon",
  flag: "FlagIcon",
  cloudhollow: "CloudHollowIcon",
  edit: "EditIcon",
  cog: "CogIcon",
  nut: "NutIcon",
  wrench: "WrenchIcon",
  ellipsis: "EllipsisIcon",
  check: "CheckIcon",
  form: "FormIcon",
  batchdeny: "BatchDenyIcon",
  batchaccept: "BatchAcceptIcon",
  controls: "ControlsIcon",
  plus: "PlusIcon",
  closeAlt: "CloseAltIcon",
  cross: "CrossIcon",
  trash: "TrashIcon",
  pinalt: "PinAltIcon",
  unpin: "UnpinIcon",
  add: "AddIcon",
  subtract: "SubtractIcon",
  close: "CloseIcon",
  delete: "DeleteIcon",
  passed: "PassedIcon",
  changed: "ChangedIcon",
  failed: "FailedIcon",
  clear: "ClearIcon",
  comment: "CommentIcon",
  commentadd: "CommentAddIcon",
  requestchange: "RequestChangeIcon",
  comments: "CommentsIcon",
  lock: "LockIcon",
  unlock: "UnlockIcon",
  key: "KeyIcon",
  outbox: "OutboxIcon",
  credit: "CreditIcon",
  button: "ButtonIcon",
  type: "TypeIcon",
  pointerdefault: "PointerDefaultIcon",
  pointerhand: "PointerHandIcon",
  browser: "BrowserIcon",
  tablet: "TabletIcon",
  mobile: "MobileIcon",
  watch: "WatchIcon",
  sidebar: "SidebarIcon",
  sidebaralt: "SidebarAltIcon",
  sidebaralttoggle: "SidebarAltToggleIcon",
  sidebartoggle: "SidebarToggleIcon",
  bottombar: "BottomBarIcon",
  bottombartoggle: "BottomBarToggleIcon",
  cpu: "CPUIcon",
  database: "DatabaseIcon",
  memory: "MemoryIcon",
  structure: "StructureIcon",
  box: "BoxIcon",
  power: "PowerIcon",
  photo: "PhotoIcon",
  component: "ComponentIcon",
  grid: "GridIcon",
  outline: "OutlineIcon",
  photodrag: "PhotoDragIcon",
  search: "SearchIcon",
  zoom: "ZoomIcon",
  zoomout: "ZoomOutIcon",
  zoomreset: "ZoomResetIcon",
  eye: "EyeIcon",
  eyeclose: "EyeCloseIcon",
  lightning: "LightningIcon",
  lightningoff: "LightningOffIcon",
  contrast: "ContrastIcon",
  switchalt: "SwitchAltIcon",
  mirror: "MirrorIcon",
  grow: "GrowIcon",
  paintbrush: "PaintBrushIcon",
  ruler: "RulerIcon",
  stop: "StopIcon",
  camera: "CameraIcon",
  video: "VideoIcon",
  speaker: "SpeakerIcon",
  play: "PlayIcon",
  playback: "PlayBackIcon",
  playnext: "PlayNextIcon",
  rewind: "RewindIcon",
  fastforward: "FastForwardIcon",
  stopalt: "StopAltIcon",
  sidebyside: "SideBySideIcon",
  stacked: "StackedIcon",
  sun: "SunIcon",
  moon: "MoonIcon",
  book: "BookIcon",
  document: "DocumentIcon",
  copy: "CopyIcon",
  category: "CategoryIcon",
  folder: "FolderIcon",
  print: "PrintIcon",
  graphline: "GraphLineIcon",
  calendar: "CalendarIcon",
  graphbar: "GraphBarIcon",
  menu: "MenuIcon",
  menualt: "MenuIcon",
  filter: "FilterIcon",
  docchart: "DocChartIcon",
  doclist: "DocListIcon",
  markup: "MarkupIcon",
  bold: "BoldIcon",
  paperclip: "PaperClipIcon",
  listordered: "ListOrderedIcon",
  listunordered: "ListUnorderedIcon",
  paragraph: "ParagraphIcon",
  markdown: "MarkdownIcon",
  repository: "RepoIcon",
  commit: "CommitIcon",
  branch: "BranchIcon",
  pullrequest: "PullRequestIcon",
  merge: "MergeIcon",
  apple: "AppleIcon",
  linux: "LinuxIcon",
  ubuntu: "UbuntuIcon",
  windows: "WindowsIcon",
  storybook: "StorybookIcon",
  azuredevops: "AzureDevOpsIcon",
  bitbucket: "BitbucketIcon",
  chrome: "ChromeIcon",
  chromatic: "ChromaticIcon",
  componentdriven: "ComponentDrivenIcon",
  discord: "DiscordIcon",
  facebook: "FacebookIcon",
  figma: "FigmaIcon",
  gdrive: "GDriveIcon",
  github: "GithubIcon",
  gitlab: "GitlabIcon",
  google: "GoogleIcon",
  graphql: "GraphqlIcon",
  medium: "MediumIcon",
  redux: "ReduxIcon",
  twitter: "TwitterIcon",
  youtube: "YoutubeIcon",
  vscode: "VSCodeIcon"
};

// src/toolbar/components/ToolbarMenuButton.tsx
var ToolbarMenuButton = /* @__PURE__ */ __name(({
  active,
  disabled,
  title,
  icon,
  description,
  onClick
}) => {
  return react_default.createElement(
    IconButton,
    {
      active,
      title: description,
      disabled,
      onClick: disabled ? () => {
      } : onClick
    },
    icon && react_default.createElement(Icons, { icon, __suppressDeprecationWarning: true }),
    title ? `\xA0${title}` : null
  );
}, "ToolbarMenuButton");

// src/toolbar/components/ToolbarMenuListItem.tsx
var ToolbarMenuListItem = /* @__PURE__ */ __name(({
  right,
  title,
  value,
  icon,
  hideIcon,
  onClick,
  disabled,
  currentValue
}) => {
  const Icon = icon && react_default.createElement(Icons, { style: { opacity: 1 }, icon, __suppressDeprecationWarning: true });
  const Item = {
    id: value ?? "_reset",
    active: currentValue === value,
    right,
    title,
    disabled,
    onClick
  };
  if (icon && !hideIcon) {
    Item.icon = Icon;
  }
  return Item;
}, "ToolbarMenuListItem");

// src/toolbar/components/ToolbarMenuList.tsx
var ToolbarMenuList = withKeyboardCycle(
  ({
    id,
    name,
    description,
    toolbar: { icon: _icon, items, title: _title, preventDynamicIcon, dynamicTitle }
  }) => {
    const [globals, updateGlobals, storyGlobals] = useGlobals();
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const currentValue = globals[id];
    const hasGlobalValue = !!currentValue;
    const isOverridden = id in storyGlobals;
    let icon = _icon;
    let title = _title;
    if (!preventDynamicIcon) {
      icon = getSelectedIcon({ currentValue, items }) || icon;
    }
    if (dynamicTitle) {
      title = getSelectedTitle({ currentValue, items }) || title;
    }
    if (!title && !icon) {
      console.warn(`Toolbar '${name}' has no title or icon`);
    }
    const handleItemClick = useCallback(
      (value) => {
        updateGlobals({ [id]: value });
      },
      [id, updateGlobals]
    );
    return react_default.createElement(
      WithTooltip,
      {
        placement: "top",
        tooltip: ({ onHide }) => {
          const links = items.filter(({ type }) => {
            let shouldReturn = true;
            if (type === "reset" && !currentValue) {
              shouldReturn = false;
            }
            return shouldReturn;
          }).map((item) => {
            const listItem = ToolbarMenuListItem({
              ...item,
              currentValue,
              disabled: isOverridden,
              onClick: /* @__PURE__ */ __name(() => {
                handleItemClick(item.value);
                onHide();
              }, "onClick")
            });
            return listItem;
          });
          return react_default.createElement(TooltipLinkList, { links });
        },
        closeOnOutsideClick: true,
        onVisibleChange: setIsTooltipVisible
      },
      react_default.createElement(
        ToolbarMenuButton,
        {
          active: isTooltipVisible || hasGlobalValue,
          disabled: isOverridden,
          description: description || "",
          icon,
          title: title || ""
        }
      )
    );
  }
);

// src/toolbar/components/ToolbarManager.tsx
var ToolbarManager = /* @__PURE__ */ __name(() => {
  const globalTypes = useGlobalTypes();
  const globalIds = Object.keys(globalTypes).filter((id) => !!globalTypes[id].toolbar);
  if (!globalIds.length) {
    return null;
  }
  return react_default.createElement(react_default.Fragment, null, react_default.createElement(Separator, null), globalIds.map((id) => {
    const normalizedArgType = normalizeArgType(id, globalTypes[id]);
    return react_default.createElement(ToolbarMenuList, { key: id, id, ...normalizedArgType });
  }));
}, "ToolbarManager");

// global-externals:react-dom/client
var client_default = __REACT_DOM_CLIENT__;
var { createRoot, hydrateRoot } = __REACT_DOM_CLIENT__;

// global-externals:storybook/internal/manager-errors
var manager_errors_default = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;
var { Category, ProviderDoesNotExtendBaseProviderError, StatusTypeIdMismatchError, UncaughtManagerError } = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;

// global-externals:storybook/internal/router
var router_default = __STORYBOOK_ROUTER__;
var { BaseLocationProvider, DEEPLY_EQUAL, Link: Link2, Location, LocationProvider, Match, Route, buildArgsParam, deepDiff, getMatch, parsePath, queryFromLocation, stringifyQuery, useNavigate } = __STORYBOOK_ROUTER__;

// ../node_modules/react-helmet-async/lib/index.module.js
var import_prop_types = __toESM(require_prop_types());
var import_react_fast_compare = __toESM(require_react_fast_compare());
var import_invariant = __toESM(require_browser());
var import_shallowequal = __toESM(require_shallowequal());
function a() {
  return a = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r3 = arguments[e2];
      for (var n3 in r3) Object.prototype.hasOwnProperty.call(r3, n3) && (t2[n3] = r3[n3]);
    }
    return t2;
  }, a.apply(this, arguments);
}
__name(a, "a");
function s(t2, e2) {
  t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, c(t2, e2);
}
__name(s, "s");
function c(t2, e2) {
  return c = Object.setPrototypeOf || function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, c(t2, e2);
}
__name(c, "c");
function u(t2, e2) {
  if (null == t2) return {};
  var r3, n3, i2 = {}, o3 = Object.keys(t2);
  for (n3 = 0; n3 < o3.length; n3++) e2.indexOf(r3 = o3[n3]) >= 0 || (i2[r3] = t2[r3]);
  return i2;
}
__name(u, "u");
var l = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" };
var p = { rel: ["amphtml", "canonical", "alternate"] };
var f = { type: ["application/ld+json"] };
var d = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] };
var h = Object.keys(l).map(function(t2) {
  return l[t2];
});
var m = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" };
var y = Object.keys(m).reduce(function(t2, e2) {
  return t2[m[e2]] = e2, t2;
}, {});
var T = /* @__PURE__ */ __name(function(t2, e2) {
  for (var r3 = t2.length - 1; r3 >= 0; r3 -= 1) {
    var n3 = t2[r3];
    if (Object.prototype.hasOwnProperty.call(n3, e2)) return n3[e2];
  }
  return null;
}, "T");
var g = /* @__PURE__ */ __name(function(t2) {
  var e2 = T(t2, l.TITLE), r3 = T(t2, "titleTemplate");
  if (Array.isArray(e2) && (e2 = e2.join("")), r3 && e2) return r3.replace(/%s/g, function() {
    return e2;
  });
  var n3 = T(t2, "defaultTitle");
  return e2 || n3 || void 0;
}, "g");
var b = /* @__PURE__ */ __name(function(t2) {
  return T(t2, "onChangeClientState") || function() {
  };
}, "b");
var v = /* @__PURE__ */ __name(function(t2, e2) {
  return e2.filter(function(e3) {
    return void 0 !== e3[t2];
  }).map(function(e3) {
    return e3[t2];
  }).reduce(function(t3, e3) {
    return a({}, t3, e3);
  }, {});
}, "v");
var A2 = /* @__PURE__ */ __name(function(t2, e2) {
  return e2.filter(function(t3) {
    return void 0 !== t3[l.BASE];
  }).map(function(t3) {
    return t3[l.BASE];
  }).reverse().reduce(function(e3, r3) {
    if (!e3.length) for (var n3 = Object.keys(r3), i2 = 0; i2 < n3.length; i2 += 1) {
      var o3 = n3[i2].toLowerCase();
      if (-1 !== t2.indexOf(o3) && r3[o3]) return e3.concat(r3);
    }
    return e3;
  }, []);
}, "A");
var C = /* @__PURE__ */ __name(function(t2, e2, r3) {
  var n3 = {};
  return r3.filter(function(e3) {
    return !!Array.isArray(e3[t2]) || (void 0 !== e3[t2] && console && "function" == typeof console.warn && console.warn("Helmet: " + t2 + ' should be of type "Array". Instead found type "' + typeof e3[t2] + '"'), false);
  }).map(function(e3) {
    return e3[t2];
  }).reverse().reduce(function(t3, r4) {
    var i2 = {};
    r4.filter(function(t4) {
      for (var r5, o4 = Object.keys(t4), a2 = 0; a2 < o4.length; a2 += 1) {
        var s3 = o4[a2], c3 = s3.toLowerCase();
        -1 === e2.indexOf(c3) || "rel" === r5 && "canonical" === t4[r5].toLowerCase() || "rel" === c3 && "stylesheet" === t4[c3].toLowerCase() || (r5 = c3), -1 === e2.indexOf(s3) || "innerHTML" !== s3 && "cssText" !== s3 && "itemprop" !== s3 || (r5 = s3);
      }
      if (!r5 || !t4[r5]) return false;
      var u3 = t4[r5].toLowerCase();
      return n3[r5] || (n3[r5] = {}), i2[r5] || (i2[r5] = {}), !n3[r5][u3] && (i2[r5][u3] = true, true);
    }).reverse().forEach(function(e3) {
      return t3.push(e3);
    });
    for (var o3 = Object.keys(i2), s2 = 0; s2 < o3.length; s2 += 1) {
      var c2 = o3[s2], u2 = a({}, n3[c2], i2[c2]);
      n3[c2] = u2;
    }
    return t3;
  }, []).reverse();
}, "C");
var O = /* @__PURE__ */ __name(function(t2, e2) {
  if (Array.isArray(t2) && t2.length) {
    for (var r3 = 0; r3 < t2.length; r3 += 1) if (t2[r3][e2]) return true;
  }
  return false;
}, "O");
var S = /* @__PURE__ */ __name(function(t2) {
  return Array.isArray(t2) ? t2.join("") : t2;
}, "S");
var E = /* @__PURE__ */ __name(function(t2, e2) {
  return Array.isArray(t2) ? t2.reduce(function(t3, r3) {
    return function(t4, e3) {
      for (var r4 = Object.keys(t4), n3 = 0; n3 < r4.length; n3 += 1) if (e3[r4[n3]] && e3[r4[n3]].includes(t4[r4[n3]])) return true;
      return false;
    }(r3, e2) ? t3.priority.push(r3) : t3.default.push(r3), t3;
  }, { priority: [], default: [] }) : { default: t2 };
}, "E");
var I = /* @__PURE__ */ __name(function(t2, e2) {
  var r3;
  return a({}, t2, ((r3 = {})[e2] = void 0, r3));
}, "I");
var P2 = [l.NOSCRIPT, l.SCRIPT, l.STYLE];
var w = /* @__PURE__ */ __name(function(t2, e2) {
  return void 0 === e2 && (e2 = true), false === e2 ? String(t2) : String(t2).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}, "w");
var x = /* @__PURE__ */ __name(function(t2) {
  return Object.keys(t2).reduce(function(e2, r3) {
    var n3 = void 0 !== t2[r3] ? r3 + '="' + t2[r3] + '"' : "" + r3;
    return e2 ? e2 + " " + n3 : n3;
  }, "");
}, "x");
var L = /* @__PURE__ */ __name(function(t2, e2) {
  return void 0 === e2 && (e2 = {}), Object.keys(t2).reduce(function(e3, r3) {
    return e3[m[r3] || r3] = t2[r3], e3;
  }, e2);
}, "L");
var j = /* @__PURE__ */ __name(function(e2, r3) {
  return r3.map(function(r4, n3) {
    var i2, o3 = ((i2 = { key: n3 })["data-rh"] = true, i2);
    return Object.keys(r4).forEach(function(t2) {
      var e3 = m[t2] || t2;
      "innerHTML" === e3 || "cssText" === e3 ? o3.dangerouslySetInnerHTML = { __html: r4.innerHTML || r4.cssText } : o3[e3] = r4[t2];
    }), react_default.createElement(e2, o3);
  });
}, "j");
var M = /* @__PURE__ */ __name(function(e2, r3, n3) {
  switch (e2) {
    case l.TITLE:
      return { toComponent: /* @__PURE__ */ __name(function() {
        return n4 = r3.titleAttributes, (i2 = { key: e3 = r3.title })["data-rh"] = true, o3 = L(n4, i2), [react_default.createElement(l.TITLE, o3, e3)];
        var e3, n4, i2, o3;
      }, "toComponent"), toString: /* @__PURE__ */ __name(function() {
        return function(t2, e3, r4, n4) {
          var i2 = x(r4), o3 = S(e3);
          return i2 ? "<" + t2 + ' data-rh="true" ' + i2 + ">" + w(o3, n4) + "</" + t2 + ">" : "<" + t2 + ' data-rh="true">' + w(o3, n4) + "</" + t2 + ">";
        }(e2, r3.title, r3.titleAttributes, n3);
      }, "toString") };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: /* @__PURE__ */ __name(function() {
        return L(r3);
      }, "toComponent"), toString: /* @__PURE__ */ __name(function() {
        return x(r3);
      }, "toString") };
    default:
      return { toComponent: /* @__PURE__ */ __name(function() {
        return j(e2, r3);
      }, "toComponent"), toString: /* @__PURE__ */ __name(function() {
        return function(t2, e3, r4) {
          return e3.reduce(function(e4, n4) {
            var i2 = Object.keys(n4).filter(function(t3) {
              return !("innerHTML" === t3 || "cssText" === t3);
            }).reduce(function(t3, e5) {
              var i3 = void 0 === n4[e5] ? e5 : e5 + '="' + w(n4[e5], r4) + '"';
              return t3 ? t3 + " " + i3 : i3;
            }, ""), o3 = n4.innerHTML || n4.cssText || "", a2 = -1 === P2.indexOf(t2);
            return e4 + "<" + t2 + ' data-rh="true" ' + i2 + (a2 ? "/>" : ">" + o3 + "</" + t2 + ">");
          }, "");
        }(e2, r3, n3);
      }, "toString") };
  }
}, "M");
var k = /* @__PURE__ */ __name(function(t2) {
  var e2 = t2.baseTag, r3 = t2.bodyAttributes, n3 = t2.encode, i2 = t2.htmlAttributes, o3 = t2.noscriptTags, a2 = t2.styleTags, s2 = t2.title, c2 = void 0 === s2 ? "" : s2, u2 = t2.titleAttributes, h2 = t2.linkTags, m2 = t2.metaTags, y2 = t2.scriptTags, T2 = { toComponent: /* @__PURE__ */ __name(function() {
  }, "toComponent"), toString: /* @__PURE__ */ __name(function() {
    return "";
  }, "toString") };
  if (t2.prioritizeSeoTags) {
    var g2 = function(t3) {
      var e3 = t3.linkTags, r4 = t3.scriptTags, n4 = t3.encode, i3 = E(t3.metaTags, d), o4 = E(e3, p), a3 = E(r4, f);
      return { priorityMethods: { toComponent: /* @__PURE__ */ __name(function() {
        return [].concat(j(l.META, i3.priority), j(l.LINK, o4.priority), j(l.SCRIPT, a3.priority));
      }, "toComponent"), toString: /* @__PURE__ */ __name(function() {
        return M(l.META, i3.priority, n4) + " " + M(l.LINK, o4.priority, n4) + " " + M(l.SCRIPT, a3.priority, n4);
      }, "toString") }, metaTags: i3.default, linkTags: o4.default, scriptTags: a3.default };
    }(t2);
    T2 = g2.priorityMethods, h2 = g2.linkTags, m2 = g2.metaTags, y2 = g2.scriptTags;
  }
  return { priority: T2, base: M(l.BASE, e2, n3), bodyAttributes: M("bodyAttributes", r3, n3), htmlAttributes: M("htmlAttributes", i2, n3), link: M(l.LINK, h2, n3), meta: M(l.META, m2, n3), noscript: M(l.NOSCRIPT, o3, n3), script: M(l.SCRIPT, y2, n3), style: M(l.STYLE, a2, n3), title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n3) };
}, "k");
var H = [];
var N = /* @__PURE__ */ __name(function(t2, e2) {
  var r3 = this;
  void 0 === e2 && (e2 = "undefined" != typeof document), this.instances = [], this.value = { setHelmet: /* @__PURE__ */ __name(function(t3) {
    r3.context.helmet = t3;
  }, "setHelmet"), helmetInstances: { get: /* @__PURE__ */ __name(function() {
    return r3.canUseDOM ? H : r3.instances;
  }, "get"), add: /* @__PURE__ */ __name(function(t3) {
    (r3.canUseDOM ? H : r3.instances).push(t3);
  }, "add"), remove: /* @__PURE__ */ __name(function(t3) {
    var e3 = (r3.canUseDOM ? H : r3.instances).indexOf(t3);
    (r3.canUseDOM ? H : r3.instances).splice(e3, 1);
  }, "remove") } }, this.context = t2, this.canUseDOM = e2, e2 || (t2.helmet = k({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: true, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, "N");
var R = react_default.createContext({});
var D = import_prop_types.default.shape({ setHelmet: import_prop_types.default.func, helmetInstances: import_prop_types.default.shape({ get: import_prop_types.default.func, add: import_prop_types.default.func, remove: import_prop_types.default.func }) });
var U = "undefined" != typeof document;
var q = function(e2) {
  function r3(t2) {
    var n3;
    return (n3 = e2.call(this, t2) || this).helmetData = new N(n3.props.context, r3.canUseDOM), n3;
  }
  __name(r3, "r");
  return s(r3, e2), r3.prototype.render = function() {
    return react_default.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
  }, r3;
}(Component);
q.canUseDOM = U, q.propTypes = { context: import_prop_types.default.shape({ helmet: import_prop_types.default.shape() }), children: import_prop_types.default.node.isRequired }, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
var Y = /* @__PURE__ */ __name(function(t2, e2) {
  var r3, n3 = document.head || document.querySelector(l.HEAD), i2 = n3.querySelectorAll(t2 + "[data-rh]"), o3 = [].slice.call(i2), a2 = [];
  return e2 && e2.length && e2.forEach(function(e3) {
    var n4 = document.createElement(t2);
    for (var i3 in e3) Object.prototype.hasOwnProperty.call(e3, i3) && ("innerHTML" === i3 ? n4.innerHTML = e3.innerHTML : "cssText" === i3 ? n4.styleSheet ? n4.styleSheet.cssText = e3.cssText : n4.appendChild(document.createTextNode(e3.cssText)) : n4.setAttribute(i3, void 0 === e3[i3] ? "" : e3[i3]));
    n4.setAttribute("data-rh", "true"), o3.some(function(t3, e4) {
      return r3 = e4, n4.isEqualNode(t3);
    }) ? o3.splice(r3, 1) : a2.push(n4);
  }), o3.forEach(function(t3) {
    return t3.parentNode.removeChild(t3);
  }), a2.forEach(function(t3) {
    return n3.appendChild(t3);
  }), { oldTags: o3, newTags: a2 };
}, "Y");
var B = /* @__PURE__ */ __name(function(t2, e2) {
  var r3 = document.getElementsByTagName(t2)[0];
  if (r3) {
    for (var n3 = r3.getAttribute("data-rh"), i2 = n3 ? n3.split(",") : [], o3 = [].concat(i2), a2 = Object.keys(e2), s2 = 0; s2 < a2.length; s2 += 1) {
      var c2 = a2[s2], u2 = e2[c2] || "";
      r3.getAttribute(c2) !== u2 && r3.setAttribute(c2, u2), -1 === i2.indexOf(c2) && i2.push(c2);
      var l3 = o3.indexOf(c2);
      -1 !== l3 && o3.splice(l3, 1);
    }
    for (var p2 = o3.length - 1; p2 >= 0; p2 -= 1) r3.removeAttribute(o3[p2]);
    i2.length === o3.length ? r3.removeAttribute("data-rh") : r3.getAttribute("data-rh") !== a2.join(",") && r3.setAttribute("data-rh", a2.join(","));
  }
}, "B");
var K = /* @__PURE__ */ __name(function(t2, e2) {
  var r3 = t2.baseTag, n3 = t2.htmlAttributes, i2 = t2.linkTags, o3 = t2.metaTags, a2 = t2.noscriptTags, s2 = t2.onChangeClientState, c2 = t2.scriptTags, u2 = t2.styleTags, p2 = t2.title, f2 = t2.titleAttributes;
  B(l.BODY, t2.bodyAttributes), B(l.HTML, n3), function(t3, e3) {
    void 0 !== t3 && document.title !== t3 && (document.title = S(t3)), B(l.TITLE, e3);
  }(p2, f2);
  var d2 = { baseTag: Y(l.BASE, r3), linkTags: Y(l.LINK, i2), metaTags: Y(l.META, o3), noscriptTags: Y(l.NOSCRIPT, a2), scriptTags: Y(l.SCRIPT, c2), styleTags: Y(l.STYLE, u2) }, h2 = {}, m2 = {};
  Object.keys(d2).forEach(function(t3) {
    var e3 = d2[t3], r4 = e3.newTags, n4 = e3.oldTags;
    r4.length && (h2[t3] = r4), n4.length && (m2[t3] = d2[t3].oldTags);
  }), e2 && e2(), s2(t2, h2, m2);
}, "K");
var _ = null;
var z = function(t2) {
  function e2() {
    for (var e3, r4 = arguments.length, n3 = new Array(r4), i2 = 0; i2 < r4; i2++) n3[i2] = arguments[i2];
    return (e3 = t2.call.apply(t2, [this].concat(n3)) || this).rendered = false, e3;
  }
  __name(e2, "e");
  s(e2, t2);
  var r3 = e2.prototype;
  return r3.shouldComponentUpdate = function(t3) {
    return !(0, import_shallowequal.default)(t3, this.props);
  }, r3.componentDidUpdate = function() {
    this.emitChange();
  }, r3.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, r3.emitChange = function() {
    var t3, e3, r4 = this.props.context, n3 = r4.setHelmet, i2 = null, o3 = (t3 = r4.helmetInstances.get().map(function(t4) {
      var e4 = a({}, t4.props);
      return delete e4.context, e4;
    }), { baseTag: A2(["href"], t3), bodyAttributes: v("bodyAttributes", t3), defer: T(t3, "defer"), encode: T(t3, "encodeSpecialCharacters"), htmlAttributes: v("htmlAttributes", t3), linkTags: C(l.LINK, ["rel", "href"], t3), metaTags: C(l.META, ["name", "charset", "http-equiv", "property", "itemprop"], t3), noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t3), onChangeClientState: b(t3), scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t3), styleTags: C(l.STYLE, ["cssText"], t3), title: g(t3), titleAttributes: v("titleAttributes", t3), prioritizeSeoTags: O(t3, "prioritizeSeoTags") });
    q.canUseDOM ? (e3 = o3, _ && cancelAnimationFrame(_), e3.defer ? _ = requestAnimationFrame(function() {
      K(e3, function() {
        _ = null;
      });
    }) : (K(e3), _ = null)) : k && (i2 = k(o3)), n3(i2);
  }, r3.init = function() {
    this.rendered || (this.rendered = true, this.props.context.helmetInstances.add(this), this.emitChange());
  }, r3.render = function() {
    return this.init(), null;
  }, e2;
}(Component);
z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
var F = ["children"];
var G = ["children"];
var W = function(e2) {
  function r3() {
    return e2.apply(this, arguments) || this;
  }
  __name(r3, "r");
  s(r3, e2);
  var o3 = r3.prototype;
  return o3.shouldComponentUpdate = function(t2) {
    return !(0, import_react_fast_compare.default)(I(this.props, "helmetData"), I(t2, "helmetData"));
  }, o3.mapNestedChildrenToProps = function(t2, e3) {
    if (!e3) return null;
    switch (t2.type) {
      case l.SCRIPT:
      case l.NOSCRIPT:
        return { innerHTML: e3 };
      case l.STYLE:
        return { cssText: e3 };
      default:
        throw new Error("<" + t2.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o3.flattenArrayTypeChildren = function(t2) {
    var e3, r4 = t2.child, n3 = t2.arrayTypeChildren;
    return a({}, n3, ((e3 = {})[r4.type] = [].concat(n3[r4.type] || [], [a({}, t2.newChildProps, this.mapNestedChildrenToProps(r4, t2.nestedChildren))]), e3));
  }, o3.mapObjectTypeChildren = function(t2) {
    var e3, r4, n3 = t2.child, i2 = t2.newProps, o4 = t2.newChildProps, s2 = t2.nestedChildren;
    switch (n3.type) {
      case l.TITLE:
        return a({}, i2, ((e3 = {})[n3.type] = s2, e3.titleAttributes = a({}, o4), e3));
      case l.BODY:
        return a({}, i2, { bodyAttributes: a({}, o4) });
      case l.HTML:
        return a({}, i2, { htmlAttributes: a({}, o4) });
      default:
        return a({}, i2, ((r4 = {})[n3.type] = a({}, o4), r4));
    }
  }, o3.mapArrayTypeChildrenToProps = function(t2, e3) {
    var r4 = a({}, e3);
    return Object.keys(t2).forEach(function(e4) {
      var n3;
      r4 = a({}, r4, ((n3 = {})[e4] = t2[e4], n3));
    }), r4;
  }, o3.warnOnInvalidChildren = function(t2, e3) {
    return (0, import_invariant.default)(h.some(function(e4) {
      return t2.type === e4;
    }), "function" == typeof t2.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t2.type + "> elements. Refer to our API for more information."), (0, import_invariant.default)(!e3 || "string" == typeof e3 || Array.isArray(e3) && !e3.some(function(t3) {
      return "string" != typeof t3;
    }), "Helmet expects a string as a child of <" + t2.type + ">. Did you forget to wrap your children in braces? ( <" + t2.type + ">{``}</" + t2.type + "> ) Refer to our API for more information."), true;
  }, o3.mapChildrenToProps = function(e3, r4) {
    var n3 = this, i2 = {};
    return react_default.Children.forEach(e3, function(t2) {
      if (t2 && t2.props) {
        var e4 = t2.props, o4 = e4.children, a2 = u(e4, F), s2 = Object.keys(a2).reduce(function(t3, e5) {
          return t3[y[e5] || e5] = a2[e5], t3;
        }, {}), c2 = t2.type;
        switch ("symbol" == typeof c2 ? c2 = c2.toString() : n3.warnOnInvalidChildren(t2, o4), c2) {
          case l.FRAGMENT:
            r4 = n3.mapChildrenToProps(o4, r4);
            break;
          case l.LINK:
          case l.META:
          case l.NOSCRIPT:
          case l.SCRIPT:
          case l.STYLE:
            i2 = n3.flattenArrayTypeChildren({ child: t2, arrayTypeChildren: i2, newChildProps: s2, nestedChildren: o4 });
            break;
          default:
            r4 = n3.mapObjectTypeChildren({ child: t2, newProps: r4, newChildProps: s2, nestedChildren: o4 });
        }
      }
    }), this.mapArrayTypeChildrenToProps(i2, r4);
  }, o3.render = function() {
    var e3 = this.props, r4 = e3.children, n3 = u(e3, G), i2 = a({}, n3), o4 = n3.helmetData;
    return r4 && (i2 = this.mapChildrenToProps(r4, i2)), !o4 || o4 instanceof N || (o4 = new N(o4.context, o4.instances)), o4 ? react_default.createElement(z, a({}, i2, { context: o4.value, helmetData: void 0 })) : react_default.createElement(R.Consumer, null, function(e4) {
      return react_default.createElement(z, a({}, i2, { context: e4 }));
    });
  }, r3;
}(Component);
W.propTypes = { base: import_prop_types.default.object, bodyAttributes: import_prop_types.default.object, children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]), defaultTitle: import_prop_types.default.string, defer: import_prop_types.default.bool, encodeSpecialCharacters: import_prop_types.default.bool, htmlAttributes: import_prop_types.default.object, link: import_prop_types.default.arrayOf(import_prop_types.default.object), meta: import_prop_types.default.arrayOf(import_prop_types.default.object), noscript: import_prop_types.default.arrayOf(import_prop_types.default.object), onChangeClientState: import_prop_types.default.func, script: import_prop_types.default.arrayOf(import_prop_types.default.object), style: import_prop_types.default.arrayOf(import_prop_types.default.object), title: import_prop_types.default.string, titleAttributes: import_prop_types.default.object, titleTemplate: import_prop_types.default.string, prioritizeSeoTags: import_prop_types.default.bool, helmetData: import_prop_types.default.object }, W.defaultProps = { defer: true, encodeSpecialCharacters: true, prioritizeSeoTags: false }, W.displayName = "Helmet";

// src/manager/constants.ts
var BREAKPOINT = 600;
var MEDIA_DESKTOP_BREAKPOINT = `@media (min-width: ${BREAKPOINT}px)`;
var MOBILE_TRANSITION_DURATION = 300;

// src/manager/hooks/useMedia.tsx
function useMediaQuery(query) {
  const getMatches = /* @__PURE__ */ __name((queryMatch) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(queryMatch).matches;
    }
    return false;
  }, "getMatches");
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  __name(handleChange, "handleChange");
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}
__name(useMediaQuery, "useMediaQuery");

// src/manager/components/layout/LayoutProvider.tsx
var LayoutContext = createContext({
  isMobileMenuOpen: false,
  setMobileMenuOpen: /* @__PURE__ */ __name(() => {
  }, "setMobileMenuOpen"),
  isMobileAboutOpen: false,
  setMobileAboutOpen: /* @__PURE__ */ __name(() => {
  }, "setMobileAboutOpen"),
  isMobilePanelOpen: false,
  setMobilePanelOpen: /* @__PURE__ */ __name(() => {
  }, "setMobilePanelOpen"),
  isDesktop: false,
  isMobile: false
});
var LayoutProvider = /* @__PURE__ */ __name(({ children: children2 }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [isMobilePanelOpen, setMobilePanelOpen] = useState(false);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINT}px)`);
  const isMobile = !isDesktop;
  const contextValue = useMemo(
    () => ({
      isMobileMenuOpen,
      setMobileMenuOpen,
      isMobileAboutOpen,
      setMobileAboutOpen,
      isMobilePanelOpen,
      setMobilePanelOpen,
      isDesktop,
      isMobile
    }),
    [
      isMobileMenuOpen,
      setMobileMenuOpen,
      isMobileAboutOpen,
      setMobileAboutOpen,
      isMobilePanelOpen,
      setMobilePanelOpen,
      isDesktop,
      isMobile
    ]
  );
  return react_default.createElement(LayoutContext.Provider, { value: contextValue }, children2);
}, "LayoutProvider");
var useLayout = /* @__PURE__ */ __name(() => useContext(LayoutContext), "useLayout");

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n3) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r3 in t2) ({}).hasOwnProperty.call(t2, r3) && (n3[r3] = t2[r3]);
    }
    return n3;
  }, _extends.apply(null, arguments);
}
__name(_extends, "_extends");

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
__name(_assertThisInitialized, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
__name(_setPrototypeOf, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t2, o3) {
  t2.prototype = Object.create(o3.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o3);
}
__name(_inheritsLoose, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, _getPrototypeOf(t2);
}
__name(_getPrototypeOf, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t2) {
  try {
    return -1 !== Function.toString.call(t2).indexOf("[native code]");
  } catch (n3) {
    return "function" == typeof t2;
  }
}
__name(_isNativeFunction, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = /* @__PURE__ */ __name(function _isNativeReflectConstruct2() {
    return !!t2;
  }, "_isNativeReflectConstruct"))();
}
__name(_isNativeReflectConstruct, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t2, e2, r3) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o3 = [null];
  o3.push.apply(o3, e2);
  var p2 = new (t2.bind.apply(t2, o3))();
  return r3 && _setPrototypeOf(p2, r3.prototype), p2;
}
__name(_construct, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t2) {
  var r3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = /* @__PURE__ */ __name(function _wrapNativeSuper2(t3) {
    if (null === t3 || !_isNativeFunction(t3)) return t3;
    if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r3) {
      if (r3.has(t3)) return r3.get(t3);
      r3.set(t3, Wrapper5);
    }
    function Wrapper5() {
      return _construct(t3, arguments, _getPrototypeOf(this).constructor);
    }
    __name(Wrapper5, "Wrapper");
    return Wrapper5.prototype = Object.create(t3.prototype, {
      constructor: {
        value: Wrapper5,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper5, t3);
  }, "_wrapNativeSuper"), _wrapNativeSuper(t2);
}
__name(_wrapNativeSuper, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var PolishedError = function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    if (true) {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }
    return _assertThisInitialized(_this);
  }
  __name(PolishedError2, "PolishedError");
  return PolishedError2;
}(_wrapNativeSuper(Error));
function endsWith(string, suffix) {
  return string.substr(-suffix.length) === suffix;
}
__name(endsWith, "endsWith");
var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function stripUnit(value) {
  if (typeof value !== "string") return value;
  var matchedValue = value.match(cssRegex$1);
  return matchedValue ? parseFloat(value) : value;
}
__name(stripUnit, "stripUnit");
var pxtoFactory = /* @__PURE__ */ __name(function pxtoFactory2(to) {
  return function(pxval, base) {
    if (base === void 0) {
      base = "16px";
    }
    var newPxval = pxval;
    var newBase = base;
    if (typeof pxval === "string") {
      if (!endsWith(pxval, "px")) {
        throw new PolishedError(69, to, pxval);
      }
      newPxval = stripUnit(pxval);
    }
    if (typeof base === "string") {
      if (!endsWith(base, "px")) {
        throw new PolishedError(70, to, base);
      }
      newBase = stripUnit(base);
    }
    if (typeof newPxval === "string") {
      throw new PolishedError(71, pxval, to);
    }
    if (typeof newBase === "string") {
      throw new PolishedError(72, base, to);
    }
    return "" + newPxval / newBase + to;
  };
}, "pxtoFactory");
var pixelsto = pxtoFactory;
var em = pixelsto("em");
var rem = pixelsto("rem");
function colorToInt(color2) {
  return Math.round(color2 * 255);
}
__name(colorToInt, "colorToInt");
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
__name(convertToInt, "convertToInt");
function hslToRgb(hue, saturation, lightness, convert2) {
  if (convert2 === void 0) {
    convert2 = convertToInt;
  }
  if (saturation === 0) {
    return convert2(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
__name(hslToRgb, "hslToRgb");
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color2) {
  if (typeof color2 !== "string") return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color2;
}
__name(nameToHex, "nameToHex");
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color2) {
  if (typeof color2 !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color2);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
__name(parseToRgb, "parseToRgb");
function rgbToHsl(color2) {
  var red = color2.red / 255;
  var green = color2.green / 255;
  var blue = color2.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    if (color2.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color2.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color2.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color2.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
__name(rgbToHsl, "rgbToHsl");
function parseToHsl(color2) {
  return rgbToHsl(parseToRgb(color2));
}
__name(parseToHsl, "parseToHsl");
var reduceHexValue = /* @__PURE__ */ __name(function reduceHexValue2(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
}, "reduceHexValue");
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
__name(numberToHex, "numberToHex");
function colorToHex(color2) {
  return numberToHex(Math.round(color2 * 255));
}
__name(colorToHex, "colorToHex");
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
__name(convertToHex, "convertToHex");
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
__name(hslToHex, "hslToHex");
function hsl(value, saturation, lightness) {
  if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }
  throw new PolishedError(1);
}
__name(hsl, "hsl");
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }
  throw new PolishedError(2);
}
__name(hsla, "hsla");
function rgb(value, green, blue) {
  if (typeof value === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }
  throw new PolishedError(6);
}
__name(rgb, "rgb");
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
__name(rgba, "rgba");
var isRgb = /* @__PURE__ */ __name(function isRgb2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
}, "isRgb");
var isRgba = /* @__PURE__ */ __name(function isRgba2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && typeof color2.alpha === "number";
}, "isRgba");
var isHsl = /* @__PURE__ */ __name(function isHsl2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
}, "isHsl");
var isHsla = /* @__PURE__ */ __name(function isHsla2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && typeof color2.alpha === "number";
}, "isHsla");
function toColorString(color2) {
  if (typeof color2 !== "object") throw new PolishedError(8);
  if (isRgba(color2)) return rgba(color2);
  if (isRgb(color2)) return rgb(color2);
  if (isHsla(color2)) return hsla(color2);
  if (isHsl(color2)) return hsl(color2);
  throw new PolishedError(8);
}
__name(toColorString, "toColorString");
function curried(f2, length, acc) {
  return /* @__PURE__ */ __name(function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f2.apply(this, combined) : curried(f2, length, combined);
  }, "fn");
}
__name(curried, "curried");
function curry(f2) {
  return curried(f2, f2.length, []);
}
__name(curry, "curry");
function adjustHue(degree, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
}
__name(adjustHue, "adjustHue");
var curriedAdjustHue = curry(adjustHue);
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
__name(guard, "guard");
function darken2(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
__name(darken2, "darken");
var curriedDarken = curry(darken2);
var curriedDarken$1 = curriedDarken;
function desaturate(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}
__name(desaturate, "desaturate");
var curriedDesaturate = curry(desaturate);
function lighten2(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
__name(lighten2, "lighten");
var curriedLighten = curry(lighten2);
var curriedLighten$1 = curriedLighten;
function mix(weight, color2, otherColor) {
  if (color2 === "transparent") return otherColor;
  if (otherColor === "transparent") return color2;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color2);
  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === "number" ? parsedColor1.alpha : 1
  });
  var parsedColor2 = parseToRgb(otherColor);
  var color22 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === "number" ? parsedColor2.alpha : 1
  });
  var alphaDelta = color1.alpha - color22.alpha;
  var x2 = parseFloat(weight) * 2 - 1;
  var y2 = x2 * alphaDelta === -1 ? x2 : x2 + alphaDelta;
  var z2 = 1 + x2 * alphaDelta;
  var weight1 = (y2 / z2 + 1) / 2;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color22.red * weight2),
    green: Math.floor(color1.green * weight1 + color22.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color22.blue * weight2),
    alpha: color1.alpha * parseFloat(weight) + color22.alpha * (1 - parseFloat(weight))
  };
  return rgba(mixedColor);
}
__name(mix, "mix");
var curriedMix = curry(mix);
var mix$1 = curriedMix;
function opacify(amount, color2) {
  if (color2 === "transparent") return color2;
  var parsedColor = parseToRgb(color2);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });
  return rgba(colorWithAlpha);
}
__name(opacify, "opacify");
var curriedOpacify = curry(opacify);
function saturate(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}
__name(saturate, "saturate");
var curriedSaturate = curry(saturate);
function setHue(hue, color2) {
  if (color2 === "transparent") return color2;
  return toColorString(_extends({}, parseToHsl(color2), {
    hue: parseFloat(hue)
  }));
}
__name(setHue, "setHue");
var curriedSetHue = curry(setHue);
function setLightness(lightness, color2) {
  if (color2 === "transparent") return color2;
  return toColorString(_extends({}, parseToHsl(color2), {
    lightness: parseFloat(lightness)
  }));
}
__name(setLightness, "setLightness");
var curriedSetLightness = curry(setLightness);
function setSaturation(saturation, color2) {
  if (color2 === "transparent") return color2;
  return toColorString(_extends({}, parseToHsl(color2), {
    saturation: parseFloat(saturation)
  }));
}
__name(setSaturation, "setSaturation");
var curriedSetSaturation = curry(setSaturation);
function shade(percentage, color2) {
  if (color2 === "transparent") return color2;
  return mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color2);
}
__name(shade, "shade");
var curriedShade = curry(shade);
function tint(percentage, color2) {
  if (color2 === "transparent") return color2;
  return mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color2);
}
__name(tint, "tint");
var curriedTint = curry(tint);
function transparentize(amount, color2) {
  if (color2 === "transparent") return color2;
  var parsedColor = parseToRgb(color2);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
__name(transparentize, "transparentize");
var curriedTransparentize = curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;

// src/manager/components/notifications/NotificationItem.tsx
var slideIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)"
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)"
  }
});
var grow = keyframes({
  "0%": {
    width: "0%"
  },
  "100%": {
    width: "100%"
  }
});
var Notification = styled.div(
  ({ theme }) => ({
    position: "relative",
    display: "flex",
    border: `1px solid ${theme.appBorderColor}`,
    padding: "12px 6px 12px 12px",
    borderRadius: theme.appBorderRadius + 1,
    alignItems: "center",
    animation: `${slideIn} 500ms`,
    background: theme.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
    boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.1)`,
    color: theme.color.inverseText,
    textDecoration: "none",
    overflow: "hidden",
    [MEDIA_DESKTOP_BREAKPOINT]: {
      boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${theme.background.app}`
    }
  }),
  ({ duration, theme }) => duration && {
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 3,
      background: theme.color.secondary,
      animation: `${grow} ${duration}ms linear forwards reverse`
    }
  }
);
var NotificationWithInteractiveStates = styled(Notification)({
  cursor: "pointer",
  border: "none",
  outline: "none",
  textAlign: "left",
  transition: "all 150ms ease-out",
  transform: "translate3d(0, 0, 0)",
  "&:hover": {
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:active": {
    transform: "translate3d(0, 0, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:focus": {
    boxShadow: "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  }
});
var NotificationButton = NotificationWithInteractiveStates.withComponent("div");
var NotificationLink = NotificationWithInteractiveStates.withComponent(Link2);
var NotificationIconWrapper = styled.div({
  display: "flex",
  marginRight: 10,
  alignItems: "center",
  svg: {
    width: 16,
    height: 16
  }
});
var NotificationTextWrapper = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  color: theme.base === "dark" ? theme.color.mediumdark : theme.color.mediumlight
}));
var Headline = styled.div(({ theme, hasIcon }) => ({
  height: "100%",
  alignItems: "center",
  whiteSpace: "balance",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: theme.typography.size.s1,
  lineHeight: "16px",
  fontWeight: theme.typography.weight.bold
}));
var SubHeadline = styled.div(({ theme }) => ({
  color: curriedTransparentize$1(0.25, theme.color.inverseText),
  fontSize: theme.typography.size.s1 - 1,
  lineHeight: "14px",
  marginTop: 2,
  whiteSpace: "balance"
}));
var ItemContent = /* @__PURE__ */ __name(({
  icon,
  content: { headline, subHeadline }
}) => react_default.createElement(react_default.Fragment, null, !icon || react_default.createElement(NotificationIconWrapper, null, icon), react_default.createElement(NotificationTextWrapper, null, react_default.createElement(Headline, { title: headline, hasIcon: !!icon }, headline), subHeadline && react_default.createElement(SubHeadline, null, subHeadline))), "ItemContent");
var DismissButtonWrapper = styled(IconButton)(({ theme }) => ({
  width: 28,
  alignSelf: "center",
  marginTop: 0,
  color: theme.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
}));
var DismissNotificationItem = /* @__PURE__ */ __name(({ onDismiss }) => react_default.createElement(
  DismissButtonWrapper,
  {
    title: "Dismiss notification",
    onClick: (e2) => {
      e2.preventDefault();
      e2.stopPropagation();
      onDismiss();
    }
  },
  react_default.createElement(CloseAltIcon, { size: 12 })
), "DismissNotificationItem");
var NotificationItemSpacer = styled.div({
  height: 48
});
var NotificationItem = /* @__PURE__ */ __name(({
  notification: { content, duration, link, onClear, onClick, id, icon },
  onDismissNotification,
  zIndex
}) => {
  const onTimeout = useCallback(() => {
    onDismissNotification(id);
    if (onClear) {
      onClear({ dismissed: false, timeout: true });
    }
  }, [id, onDismissNotification, onClear]);
  const timer = useRef(null);
  useEffect(() => {
    if (!duration) {
      return;
    }
    timer.current = setTimeout(onTimeout, duration);
    return () => clearTimeout(timer.current);
  }, [duration, onTimeout]);
  const onDismiss = useCallback(() => {
    clearTimeout(timer.current);
    onDismissNotification(id);
    if (onClear) {
      onClear({ dismissed: true, timeout: false });
    }
  }, [id, onDismissNotification, onClear]);
  if (link) {
    return react_default.createElement(NotificationLink, { to: link, duration, style: { zIndex } }, react_default.createElement(ItemContent, { icon, content }), react_default.createElement(DismissNotificationItem, { onDismiss }));
  }
  if (onClick) {
    return react_default.createElement(
      NotificationButton,
      {
        duration,
        onClick: () => onClick({ onDismiss }),
        style: { zIndex }
      },
      react_default.createElement(ItemContent, { icon, content }),
      react_default.createElement(DismissNotificationItem, { onDismiss })
    );
  }
  return react_default.createElement(Notification, { duration, style: { zIndex } }, react_default.createElement(ItemContent, { icon, content }), react_default.createElement(DismissNotificationItem, { onDismiss }));
}, "NotificationItem");
var NotificationItem_default = NotificationItem;

// src/manager/components/notifications/NotificationList.tsx
var NotificationList = /* @__PURE__ */ __name(({
  notifications,
  clearNotification
}) => {
  const { isMobile } = useLayout();
  return react_default.createElement(List, { isMobile }, notifications && notifications.map((notification, index) => react_default.createElement(
    NotificationItem_default,
    {
      key: notification.id,
      onDismissNotification: (id) => clearNotification(id),
      notification,
      zIndex: notifications.length - index
    }
  )));
}, "NotificationList");
var List = styled.div(
  {
    zIndex: 200,
    "> * + *": {
      marginTop: 12
    },
    "&:empty": {
      display: "none"
    }
  },
  ({ isMobile }) => isMobile && {
    position: "fixed",
    bottom: 40,
    margin: 20
  }
);

// src/manager/container/Notifications.tsx
var mapper = /* @__PURE__ */ __name(({ state, api }) => {
  return {
    notifications: state.notifications,
    clearNotification: api.clearNotification
  };
}, "mapper");
var Notifications = /* @__PURE__ */ __name((props) => react_default.createElement(Consumer, { filter: mapper }, (fromState) => react_default.createElement(NotificationList, { ...props, ...fromState })), "Notifications");

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r3, e2) {
  if (null == r3) return {};
  var t2 = {};
  for (var n3 in r3) if ({}.hasOwnProperty.call(r3, n3)) {
    if (-1 !== e2.indexOf(n3)) continue;
    t2[n3] = r3[n3];
  }
  return t2;
}
__name(_objectWithoutPropertiesLoose, "_objectWithoutPropertiesLoose");

// ../node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types4 = __toESM(require_prop_types());

// ../node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
__name(hasClass, "hasClass");

// ../node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
__name(addClass, "addClass");

// ../node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
__name(replaceClassName, "replaceClassName");
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
__name(removeClass, "removeClass");

// ../node_modules/react-transition-group/esm/Transition.js
var import_prop_types3 = __toESM(require_prop_types());

// global-externals:react-dom
var react_dom_default = __REACT_DOM__;
var { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2, createPortal, createRoot: createRoot2, findDOMNode, flushSync, hydrate, hydrateRoot: hydrateRoot2, render, unmountComponentAtNode, unstable_batchedUpdates, unstable_renderSubtreeIntoContainer, version: version2 } = __REACT_DOM__;

// ../node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// ../node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types2 = __toESM(require_prop_types());
var timeoutsShape = false ? import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.shape({
  enter: import_prop_types2.default.number,
  exit: import_prop_types2.default.number,
  appear: import_prop_types2.default.number
}).isRequired]) : null;
var classNamesShape = false ? import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.shape({
  enter: import_prop_types2.default.string,
  exit: import_prop_types2.default.string,
  active: import_prop_types2.default.string
}), import_prop_types2.default.shape({
  enter: import_prop_types2.default.string,
  enterDone: import_prop_types2.default.string,
  enterActive: import_prop_types2.default.string,
  exit: import_prop_types2.default.string,
  exitDone: import_prop_types2.default.string,
  exitActive: import_prop_types2.default.string
})]) : null;

// ../node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext_default = react_default.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = /* @__PURE__ */ __name(function forceReflow2(node) {
  return node.scrollTop;
}, "forceReflow");

// ../node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  __name(Transition2, "Transition");
  Transition2.getDerivedStateFromProps = /* @__PURE__ */ __name(function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  }, "getDerivedStateFromProps");
  var _proto = Transition2.prototype;
  _proto.componentDidMount = /* @__PURE__ */ __name(function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  }, "componentDidMount");
  _proto.componentDidUpdate = /* @__PURE__ */ __name(function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  }, "componentDidUpdate");
  _proto.componentWillUnmount = /* @__PURE__ */ __name(function componentWillUnmount() {
    this.cancelNextCallback();
  }, "componentWillUnmount");
  _proto.getTimeouts = /* @__PURE__ */ __name(function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  }, "getTimeouts");
  _proto.updateStatus = /* @__PURE__ */ __name(function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_default.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  }, "updateStatus");
  _proto.performEnter = /* @__PURE__ */ __name(function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom_default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  }, "performEnter");
  _proto.performExit = /* @__PURE__ */ __name(function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : react_dom_default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  }, "performExit");
  _proto.cancelNextCallback = /* @__PURE__ */ __name(function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  }, "cancelNextCallback");
  _proto.safeSetState = /* @__PURE__ */ __name(function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  }, "safeSetState");
  _proto.setNextCallback = /* @__PURE__ */ __name(function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  }, "setNextCallback");
  _proto.onTransitionEnd = /* @__PURE__ */ __name(function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  }, "onTransitionEnd");
  _proto.render = /* @__PURE__ */ __name(function render2() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children2 = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      react_default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children2 === "function" ? children2(status, childProps) : react_default.cloneElement(react_default.Children.only(children2), childProps))
    );
  }, "render");
  return Transition2;
}(react_default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = false ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types3.default.shape({
    current: typeof Element === "undefined" ? import_prop_types3.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types3.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types3.default.oneOfType([import_prop_types3.default.func.isRequired, import_prop_types3.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types3.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types3.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types3.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types3.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types3.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types3.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: /* @__PURE__ */ __name(function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  }, "timeout"),
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types3.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types3.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types3.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types3.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types3.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types3.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types3.default.func
} : {};
function noop() {
}
__name(noop, "noop");
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// ../node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = /* @__PURE__ */ __name(function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return addClass(node, c2);
  });
}, "addClass");
var removeClass2 = /* @__PURE__ */ __name(function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return removeClass(node, c2);
  });
}, "removeClass");
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  __name(CSSTransition2, "CSSTransition");
  var _proto = CSSTransition2.prototype;
  _proto.addClass = /* @__PURE__ */ __name(function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  }, "addClass");
  _proto.removeClasses = /* @__PURE__ */ __name(function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  }, "removeClasses");
  _proto.render = /* @__PURE__ */ __name(function render2() {
    var _this$props = this.props, _2 = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return react_default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, "render");
  return CSSTransition2;
}(react_default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = false ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types4.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types4.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types4.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types4.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types4.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types4.default.func
}) : {};

// ../node_modules/react-transition-group/esm/ReplaceTransition.js
var import_prop_types6 = __toESM(require_prop_types());

// ../node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types5 = __toESM(require_prop_types());

// ../node_modules/react-transition-group/esm/utils/ChildMapping.js
function getChildMapping(children2, mapFn) {
  var mapper5 = /* @__PURE__ */ __name(function mapper6(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  }, "mapper");
  var result = /* @__PURE__ */ Object.create(null);
  if (children2) Children.map(children2, function(c2) {
    return c2;
  }).forEach(function(child) {
    result[child.key] = mapper5(child);
  });
  return result;
}
__name(getChildMapping, "getChildMapping");
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  __name(getValueForKey, "getValueForKey");
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i2;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i2 = 0; i2 < nextKeysPending[nextKey].length; i2++) {
        var pendingNextKey = nextKeysPending[nextKey][i2];
        childMapping[nextKeysPending[nextKey][i2]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i2 = 0; i2 < pendingKeys.length; i2++) {
    childMapping[pendingKeys[i2]] = getValueForKey(pendingKeys[i2]);
  }
  return childMapping;
}
__name(mergeChildMappings, "mergeChildMappings");
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
__name(getProp, "getProp");
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
__name(getInitialChildMapping, "getInitialChildMapping");
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children2 = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children2).forEach(function(key) {
    var child = children2[key];
    if (!isValidElement(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children2[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children2[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      children2[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children2;
}
__name(getNextChildMapping, "getNextChildMapping");

// ../node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: /* @__PURE__ */ __name(function childFactory(child) {
    return child;
  }, "childFactory")
};
var TransitionGroup = function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  __name(TransitionGroup2, "TransitionGroup");
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = /* @__PURE__ */ __name(function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  }, "componentDidMount");
  _proto.componentWillUnmount = /* @__PURE__ */ __name(function componentWillUnmount() {
    this.mounted = false;
  }, "componentWillUnmount");
  TransitionGroup2.getDerivedStateFromProps = /* @__PURE__ */ __name(function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  }, "getDerivedStateFromProps");
  _proto.handleExited = /* @__PURE__ */ __name(function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children2 = _extends({}, state.children);
        delete children2[child.key];
        return {
          children: children2
        };
      });
    }
  }, "handleExited");
  _proto.render = /* @__PURE__ */ __name(function render2() {
    var _this$props = this.props, Component2 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children2 = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component2 === null) {
      return react_default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children2);
    }
    return react_default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, react_default.createElement(Component2, props, children2));
  }, "render");
  return TransitionGroup2;
}(react_default.Component);
TransitionGroup.propTypes = false ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types5.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types5.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types5.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types5.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types5.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types5.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// ../node_modules/react-transition-group/esm/ReplaceTransition.js
var ReplaceTransition = function(_React$Component) {
  _inheritsLoose(ReplaceTransition2, _React$Component);
  function ReplaceTransition2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.handleEnter = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _this.handleLifecycle("onEnter", 0, args);
    };
    _this.handleEntering = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _this.handleLifecycle("onEntering", 0, args);
    };
    _this.handleEntered = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _this.handleLifecycle("onEntered", 0, args);
    };
    _this.handleExit = function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return _this.handleLifecycle("onExit", 1, args);
    };
    _this.handleExiting = function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return _this.handleLifecycle("onExiting", 1, args);
    };
    _this.handleExited = function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return _this.handleLifecycle("onExited", 1, args);
    };
    return _this;
  }
  __name(ReplaceTransition2, "ReplaceTransition");
  var _proto = ReplaceTransition2.prototype;
  _proto.handleLifecycle = /* @__PURE__ */ __name(function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;
    var children2 = this.props.children;
    var child = react_default.Children.toArray(children2)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? void 0 : react_dom_default.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  }, "handleLifecycle");
  _proto.render = /* @__PURE__ */ __name(function render2() {
    var _this$props = this.props, children2 = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
    var _React$Children$toArr = react_default.Children.toArray(children2), first = _React$Children$toArr[0], second = _React$Children$toArr[1];
    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return react_default.createElement(TransitionGroup_default, props, inProp ? react_default.cloneElement(first, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react_default.cloneElement(second, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  }, "render");
  return ReplaceTransition2;
}(react_default.Component);
ReplaceTransition.propTypes = false ? {
  in: import_prop_types6.default.bool.isRequired,
  children: /* @__PURE__ */ __name(function children(props, propName) {
    if (react_default.Children.count(props[propName]) !== 2) return new Error('"' + propName + '" must be exactly two transition components.');
    return null;
  }, "children")
} : {};

// ../node_modules/react-transition-group/esm/SwitchTransition.js
var import_prop_types7 = __toESM(require_prop_types());
var _leaveRenders;
var _enterRenders;
function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;
  if (react_default.isValidElement(oldChildren) && react_default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }
  return true;
}
__name(areChildrenDifferent, "areChildrenDifferent");
var modes = {
  out: "out-in",
  in: "in-out"
};
var callHook = /* @__PURE__ */ __name(function callHook2(element, name, cb) {
  return function() {
    var _element$props;
    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
}, "callHook");
var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function(_ref) {
  var current = _ref.current, changeState = _ref.changeState;
  return react_default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function(_ref2) {
  var current = _ref2.current, changeState = _ref2.changeState, children2 = _ref2.children;
  return [current, react_default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function(_ref3) {
  var children2 = _ref3.children, changeState = _ref3.changeState;
  return react_default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERED, react_default.cloneElement(children2, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function(_ref4) {
  var current = _ref4.current, children2 = _ref4.children, changeState = _ref4.changeState;
  return [react_default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERED, react_default.cloneElement(children2, {
        in: true
      }));
    })
  }), react_default.cloneElement(children2, {
    in: true
  })];
}, _enterRenders);
var SwitchTransition = function(_React$Component) {
  _inheritsLoose(SwitchTransition2, _React$Component);
  function SwitchTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;
    _this.changeState = function(status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }
      _this.setState({
        status,
        current
      });
    };
    return _this;
  }
  __name(SwitchTransition2, "SwitchTransition");
  var _proto = SwitchTransition2.prototype;
  _proto.componentDidMount = /* @__PURE__ */ __name(function componentDidMount() {
    this.appeared = true;
  }, "componentDidMount");
  SwitchTransition2.getDerivedStateFromProps = /* @__PURE__ */ __name(function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }
    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }
    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }
    return {
      current: react_default.cloneElement(props.children, {
        in: true
      })
    };
  }, "getDerivedStateFromProps");
  _proto.render = /* @__PURE__ */ __name(function render2() {
    var _this$props = this.props, children2 = _this$props.children, mode = _this$props.mode, _this$state = this.state, status = _this$state.status, current = _this$state.current;
    var data = {
      children: children2,
      current,
      changeState: this.changeState,
      status
    };
    var component;
    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;
      case EXITING:
        component = leaveRenders[mode](data);
        break;
      case ENTERED:
        component = current;
    }
    return react_default.createElement(TransitionGroupContext_default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  }, "render");
  return SwitchTransition2;
}(react_default.Component);
SwitchTransition.propTypes = false ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: import_prop_types7.default.oneOf([modes.in, modes.out]),
  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: import_prop_types7.default.oneOfType([import_prop_types7.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

// src/manager/hooks/useModalDialog.ts
function useModalDialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (dialogNode) {
      if (isOpen) {
        if (!dialogNode.hasAttribute("open")) {
          dialogNode.showModal();
        }
      }
    }
  }, [isOpen]);
  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (dialogNode) {
      const handleDialogCloseEvent = /* @__PURE__ */ __name((event) => {
        if (isOpen) {
          event.preventDefault();
          onClose();
        }
      }, "handleDialogCloseEvent");
      const handleEscapeKey = /* @__PURE__ */ __name((event) => {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          onClose();
        }
      }, "handleEscapeKey");
      dialogNode.addEventListener("close", handleDialogCloseEvent);
      dialogNode.addEventListener("keydown", handleEscapeKey);
      return () => {
        dialogNode.removeEventListener("close", handleDialogCloseEvent);
        dialogNode.removeEventListener("keydown", handleEscapeKey);
      };
    }
    return void 0;
  }, [isOpen, onClose]);
  return dialogRef;
}
__name(useModalDialog, "useModalDialog");

// src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var Container = styled.dialog(({ theme, state }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  top: "auto",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "100vw",
  background: theme.background.content,
  height: "42vh",
  zIndex: 11,
  overflow: "hidden",
  border: "none",
  padding: 0,
  margin: 0,
  transform: `translateY(${(() => {
    if (state === "entering" || state === "entered") {
      return "0";
    }
    return "100%";
  })()})`,
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  "&[open]": {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    top: "auto",
    width: "100%",
    maxWidth: "100vw",
    margin: 0
  }
}));
var ContentContainer = styled.div(({ state }) => ({
  width: "100%",
  height: "100%",
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  opacity: state === "entered" || state === "entering" ? 1 : 0
}));
var MobileAddonsDrawer = /* @__PURE__ */ __name(({
  children: children2,
  id,
  isOpen,
  onClose
}) => {
  const dialogRef = useModalDialog({ isOpen, onClose });
  const forceCloseDialog = useCallback(() => {
    if (dialogRef.current && dialogRef.current.hasAttribute("open")) {
      dialogRef.current.close();
    }
  }, []);
  return react_default.createElement(
    Transition_default,
    {
      nodeRef: dialogRef,
      in: isOpen,
      timeout: MOBILE_TRANSITION_DURATION,
      mountOnEnter: true,
      unmountOnExit: true,
      onExited: () => {
        forceCloseDialog();
      }
    },
    (state) => react_default.createElement(Container, { ref: dialogRef, state, id, "aria-label": "Addon panel" }, react_default.createElement(ContentContainer, { state }, children2))
  );
}, "MobileAddonsDrawer");

// src/manager/components/upgrade/UpgradeBlock.tsx
var UpgradeBlock = /* @__PURE__ */ __name(({ onNavigateToWhatsNew }) => {
  const api = useStorybookApi();
  const [activeTab, setActiveTab] = useState("npm");
  return react_default.createElement(Container2, null, react_default.createElement("strong", null, "You are on Storybook ", api.getCurrentVersion().version), react_default.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), react_default.createElement(Tabs2, null, react_default.createElement(ButtonTab, { active: activeTab === "npm", onClick: () => setActiveTab("npm") }, "npm"), react_default.createElement(ButtonTab, { active: activeTab === "yarn", onClick: () => setActiveTab("yarn") }, "yarn"), react_default.createElement(ButtonTab, { active: activeTab === "pnpm", onClick: () => setActiveTab("pnpm") }, "pnpm")), react_default.createElement(Code2, null, activeTab === "npm" ? "npx storybook@latest upgrade" : `${activeTab} dlx storybook@latest upgrade`), onNavigateToWhatsNew && react_default.createElement(Link, { onClick: onNavigateToWhatsNew }, "See what's new in Storybook"));
}, "UpgradeBlock");
var Container2 = styled.div(({ theme }) => ({
  border: "1px solid",
  borderRadius: 5,
  padding: 20,
  marginTop: 0,
  borderColor: theme.appBorderColor,
  fontSize: theme.typography.size.s2,
  width: "100%",
  [MEDIA_DESKTOP_BREAKPOINT]: {
    maxWidth: 400
  }
}));
var Tabs2 = styled.div({
  display: "flex",
  gap: 2
});
var Code2 = styled.pre(({ theme }) => ({
  background: theme.base === "light" ? "rgba(0, 0, 0, 0.05)" : theme.appBorderColor,
  fontSize: theme.typography.size.s2 - 1,
  margin: "4px 0 16px"
}));
var ButtonTab = styled.button(({ theme, active }) => ({
  all: "unset",
  alignItems: "center",
  gap: 10,
  color: theme.color.defaultText,
  fontSize: theme.typography.size.s2 - 1,
  borderBottom: "2px solid transparent",
  borderBottomColor: active ? theme.color.secondary : "none",
  padding: "0 10px 5px",
  marginBottom: "5px",
  cursor: "pointer"
}));

// src/manager/components/mobile/about/MobileAbout.tsx
var MobileAbout = /* @__PURE__ */ __name(() => {
  const { isMobileAboutOpen, setMobileAboutOpen } = useLayout();
  const aboutRef = useRef(null);
  return react_default.createElement(
    Transition_default,
    {
      nodeRef: aboutRef,
      in: isMobileAboutOpen,
      timeout: MOBILE_TRANSITION_DURATION,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true
    },
    (state) => react_default.createElement(Container3, { ref: aboutRef, state, transitionDuration: MOBILE_TRANSITION_DURATION }, react_default.createElement(Button2, { onClick: () => setMobileAboutOpen(false), title: "Close about section" }, react_default.createElement(ArrowLeftIcon, null), "Back"), react_default.createElement(LinkContainer, null, react_default.createElement(LinkLine, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, react_default.createElement(LinkLeft, null, react_default.createElement(GithubIcon, null), react_default.createElement("span", null, "Github")), react_default.createElement(ShareAltIcon, { width: 12 })), react_default.createElement(
      LinkLine,
      {
        href: "https://storybook.js.org/docs/get-started/install/?ref=ui",
        target: "_blank"
      },
      react_default.createElement(LinkLeft, null, react_default.createElement(StorybookIcon, null), react_default.createElement("span", null, "Documentation")),
      react_default.createElement(ShareAltIcon, { width: 12 })
    )), react_default.createElement(UpgradeBlock, null), react_default.createElement(BottomText, null, "Open source software maintained by", " ", react_default.createElement(Link, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", react_default.createElement(Link, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
}, "MobileAbout");
var Container3 = styled.div(
  ({ theme, state, transitionDuration }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${transitionDuration}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: theme.color.defaultText,
    background: theme.background.content,
    opacity: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`
  })
);
var LinkContainer = styled.div({
  marginTop: 20,
  marginBottom: 20
});
var LinkLine = styled.a(({ theme }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: theme.typography.size.s2 - 1,
  height: 52,
  borderBottom: `1px solid ${theme.appBorderColor}`,
  cursor: "pointer",
  padding: "0 10px",
  "&:last-child": {
    borderBottom: "none"
  }
}));
var LinkLeft = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: theme.typography.size.s2 - 1,
  height: 40,
  gap: 5
}));
var BottomText = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  marginTop: 30
}));
var Button2 = styled.button(({ theme }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "currentColor",
  fontSize: theme.typography.size.s2 - 1,
  padding: "0 10px"
}));

// src/manager/components/mobile/navigation/MobileMenuDrawer.tsx
var MobileMenuDrawer = /* @__PURE__ */ __name(({ children: children2, id }) => {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const { isMobileMenuOpen, setMobileMenuOpen, isMobileAboutOpen, setMobileAboutOpen } = useLayout();
  const handleClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, [setMobileMenuOpen]);
  const dialogRef = useModalDialog({
    isOpen: isMobileMenuOpen,
    onClose: handleClose
  });
  const forceCloseDialog = useCallback(() => {
    if (dialogRef.current && dialogRef.current.hasAttribute("open")) {
      dialogRef.current.close();
    }
  }, []);
  return react_default.createElement(react_default.Fragment, null, react_default.createElement(
    Transition_default,
    {
      nodeRef: dialogRef,
      in: isMobileMenuOpen,
      timeout: MOBILE_TRANSITION_DURATION,
      mountOnEnter: true,
      unmountOnExit: true,
      onExited: () => {
        setMobileAboutOpen(false);
        forceCloseDialog();
      }
    },
    (state) => react_default.createElement(Container4, { ref: dialogRef, state, id, "aria-label": "Navigation menu" }, react_default.createElement(
      Transition_default,
      {
        nodeRef: sidebarRef,
        in: !isMobileAboutOpen,
        timeout: MOBILE_TRANSITION_DURATION
      },
      (sidebarState) => react_default.createElement(SidebarContainer, { ref: sidebarRef, state: sidebarState }, children2)
    ), react_default.createElement(MobileAbout, null))
  ), react_default.createElement(
    Transition_default,
    {
      nodeRef: overlayRef,
      in: isMobileMenuOpen,
      timeout: MOBILE_TRANSITION_DURATION,
      mountOnEnter: true,
      unmountOnExit: true
    },
    (state) => react_default.createElement(
      Overlay,
      {
        ref: overlayRef,
        state,
        onClick: handleClose,
        "aria-label": "Close navigation menu"
      }
    )
  ));
}, "MobileMenuDrawer");
var Container4 = styled.dialog(({ theme, state }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  top: "auto",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "100vw",
  background: theme.background.content,
  height: "80%",
  zIndex: 11,
  borderRadius: "10px 10px 0 0",
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  overflow: "hidden",
  transform: `${(() => {
    if (state === "entering") {
      return "translateY(0)";
    }
    if (state === "entered") {
      return "translateY(0)";
    }
    if (state === "exiting") {
      return "translateY(100%)";
    }
    if (state === "exited") {
      return "translateY(100%)";
    }
    return "translateY(0)";
  })()}`,
  border: "none",
  padding: 0,
  margin: 0,
  "&[open]": {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    top: "auto",
    width: "100%",
    maxWidth: "100vw",
    margin: 0
  }
}));
var SidebarContainer = styled.div(({ theme, state }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  overflow: "hidden",
  opacity: `${(() => {
    if (state === "entered") {
      return 1;
    }
    if (state === "entering") {
      return 1;
    }
    if (state === "exiting") {
      return 0;
    }
    if (state === "exited") {
      return 0;
    }
    return 1;
  })()}`,
  transform: `${(() => {
    switch (state) {
      case "entering":
      case "entered":
        return "translateX(0)";
      case "exiting":
      case "exited":
        return "translateX(-20px)";
      default:
        return "translateX(0)";
    }
  })()}`
}));
var Overlay = styled.div(({ state }) => ({
  position: "fixed",
  boxSizing: "border-box",
  background: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  transition: `all ${MOBILE_TRANSITION_DURATION}ms ease-in-out`,
  cursor: "pointer",
  opacity: `${(() => {
    switch (state) {
      case "entering":
      case "entered":
        return 1;
      case "exiting":
      case "exited":
        return 0;
      default:
        return 0;
    }
  })()}`,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.6)"
  }
}));

// src/manager/components/mobile/navigation/MobileNavigation.tsx
function combineIndexes(rootIndex, refs) {
  const combinedIndex = { ...rootIndex || {} };
  Object.values(refs).forEach((ref) => {
    if (ref.index) {
      Object.assign(combinedIndex, ref.index);
    }
  });
  return combinedIndex;
}
__name(combineIndexes, "combineIndexes");
var useFullStoryName = /* @__PURE__ */ __name(() => {
  const { index, refs } = useStorybookState();
  const api = useStorybookApi();
  const currentStory = api.getCurrentStoryData();
  if (!currentStory) {
    return "";
  }
  const combinedIndex = combineIndexes(index, refs || {});
  let fullStoryName = currentStory.renderLabel?.(currentStory, api) || currentStory.name;
  let node = combinedIndex[currentStory.id];
  while (node && "parent" in node && node.parent && combinedIndex[node.parent] && fullStoryName.length < 24) {
    node = combinedIndex[node.parent];
    const parentName = node.renderLabel?.(node, api) || node.name;
    fullStoryName = `${parentName}/${fullStoryName}`;
  }
  return fullStoryName;
}, "useFullStoryName");
var MobileNavigation = /* @__PURE__ */ __name(({
  menu,
  panel,
  showPanel,
  ...props
}) => {
  const { isMobileMenuOpen, isMobilePanelOpen, setMobileMenuOpen, setMobilePanelOpen } = useLayout();
  const fullStoryName = useFullStoryName();
  const handleAddonPanelClose = /* @__PURE__ */ __name(() => {
    setMobilePanelOpen(false);
  }, "handleAddonPanelClose");
  return react_default.createElement(Container5, { ...props }, react_default.createElement(MobileMenuDrawer, { id: "storybook-mobile-menu" }, menu), react_default.createElement(
    MobileAddonsDrawer,
    {
      id: "storybook-mobile-addon-panel",
      isOpen: isMobilePanelOpen,
      onClose: handleAddonPanelClose
    },
    panel
  ), !isMobilePanelOpen && react_default.createElement(Nav, { className: "sb-bar", role: "toolbar", "aria-label": "Mobile navigation controls" }, react_default.createElement(
    Button3,
    {
      onClick: () => setMobileMenuOpen(!isMobileMenuOpen),
      "aria-label": "Open navigation menu",
      "aria-expanded": isMobileMenuOpen,
      "aria-controls": "storybook-mobile-menu"
    },
    react_default.createElement(MenuIcon, null),
    react_default.createElement(Text, null, fullStoryName)
  ), showPanel && react_default.createElement(
    IconButton,
    {
      onClick: () => setMobilePanelOpen(true),
      "aria-label": "Open addon panel",
      "aria-expanded": isMobilePanelOpen,
      "aria-controls": "storybook-mobile-addon-panel"
    },
    react_default.createElement(BottomBarToggleIcon, null)
  )));
}, "MobileNavigation");
var Container5 = styled.div(({ theme }) => ({
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
  background: theme.barBg,
  borderTop: `1px solid ${theme.appBorderColor}`
}));
var Nav = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: 40,
  padding: "0 6px"
});
var Button3 = styled.button(({ theme }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: theme.barTextColor,
  fontSize: `${theme.typography.size.s2 - 1}px`,
  padding: "0 7px",
  fontWeight: theme.typography.weight.bold,
  WebkitLineClamp: 1,
  "> svg": {
    width: 14,
    height: 14,
    flexShrink: 0
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.color.secondary}`,
    outlineOffset: 2
  }
}));
var Text = styled.p({
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

// src/manager/components/layout/useDragging.ts
var SNAP_THRESHOLD_PX = 30;
var SIDEBAR_MIN_WIDTH_PX = 240;
var RIGHT_PANEL_MIN_WIDTH_PX = 270;
var MIN_WIDTH_STIFFNESS = 0.9;
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
__name(clamp, "clamp");
function interpolate(relativeValue, min, max) {
  return min + (max - min) * relativeValue;
}
__name(interpolate, "interpolate");
function useDragging({
  setState,
  isPanelShown,
  isDesktop
}) {
  const panelResizerRef = useRef(null);
  const sidebarResizerRef = useRef(null);
  useEffect(() => {
    const panelResizer = panelResizerRef.current;
    const sidebarResizer = sidebarResizerRef.current;
    const previewIframe = document.querySelector("#storybook-preview-wrapper");
    let draggedElement = null;
    const onDragStart = /* @__PURE__ */ __name((e2) => {
      e2.preventDefault();
      setState((state) => ({
        ...state,
        isDragging: true
      }));
      if (e2.currentTarget === panelResizer) {
        draggedElement = panelResizer;
      } else if (e2.currentTarget === sidebarResizer) {
        draggedElement = sidebarResizer;
      }
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onDragEnd);
      if (previewIframe) {
        previewIframe.style.pointerEvents = "none";
      }
    }, "onDragStart");
    const onDragEnd = /* @__PURE__ */ __name((e2) => {
      setState((state) => {
        if (draggedElement === sidebarResizer) {
          if (state.navSize < SIDEBAR_MIN_WIDTH_PX && state.navSize > 0) {
            return {
              ...state,
              isDragging: false,
              navSize: SIDEBAR_MIN_WIDTH_PX
            };
          }
        }
        if (draggedElement === panelResizer) {
          if (state.panelPosition === "right" && state.rightPanelWidth < RIGHT_PANEL_MIN_WIDTH_PX && state.rightPanelWidth > 0) {
            return {
              ...state,
              isDragging: false,
              rightPanelWidth: RIGHT_PANEL_MIN_WIDTH_PX
            };
          }
        }
        return {
          ...state,
          isDragging: false
        };
      });
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", onDragEnd);
      previewIframe?.removeAttribute("style");
      draggedElement = null;
    }, "onDragEnd");
    const onDrag = /* @__PURE__ */ __name((e2) => {
      if (e2.buttons === 0) {
        onDragEnd(e2);
        return;
      }
      setState((state) => {
        if (draggedElement === sidebarResizer) {
          const sidebarDragX = e2.clientX;
          if (sidebarDragX === state.navSize) {
            return state;
          }
          if (sidebarDragX <= SNAP_THRESHOLD_PX) {
            return {
              ...state,
              navSize: 0
            };
          }
          if (sidebarDragX <= SIDEBAR_MIN_WIDTH_PX) {
            return {
              ...state,
              navSize: interpolate(MIN_WIDTH_STIFFNESS, sidebarDragX, SIDEBAR_MIN_WIDTH_PX)
            };
          }
          return {
            ...state,
            // @ts-expect-error (non strict)
            navSize: clamp(sidebarDragX, 0, e2.view.innerWidth)
          };
        }
        if (draggedElement === panelResizer) {
          const sizeAxisState = state.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth";
          const panelDragSize = state.panelPosition === "bottom" ? (
            // @ts-expect-error (non strict)
            e2.view.innerHeight - e2.clientY
          ) : (
            // @ts-expect-error (non strict)
            e2.view.innerWidth - e2.clientX
          );
          if (panelDragSize === state[sizeAxisState]) {
            return state;
          }
          if (panelDragSize <= SNAP_THRESHOLD_PX) {
            return {
              ...state,
              [sizeAxisState]: 0
            };
          }
          if (state.panelPosition === "right" && panelDragSize <= RIGHT_PANEL_MIN_WIDTH_PX) {
            return {
              ...state,
              [sizeAxisState]: interpolate(
                MIN_WIDTH_STIFFNESS,
                panelDragSize,
                RIGHT_PANEL_MIN_WIDTH_PX
              )
            };
          }
          const sizeAxisMax = (
            // @ts-expect-error (non strict)
            state.panelPosition === "bottom" ? e2.view.innerHeight : e2.view.innerWidth
          );
          return {
            ...state,
            [sizeAxisState]: clamp(panelDragSize, 0, sizeAxisMax)
          };
        }
        return state;
      });
    }, "onDrag");
    panelResizer?.addEventListener("mousedown", onDragStart);
    sidebarResizer?.addEventListener("mousedown", onDragStart);
    return () => {
      panelResizer?.removeEventListener("mousedown", onDragStart);
      sidebarResizer?.removeEventListener("mousedown", onDragStart);
      previewIframe?.removeAttribute("style");
    };
  }, [
    // we need to rerun this effect when the panel is shown/hidden or when changing between mobile/desktop to re-attach the event listeners
    isPanelShown,
    isDesktop,
    setState
  ]);
  return { panelResizerRef, sidebarResizerRef };
}
__name(useDragging, "useDragging");

// src/manager/components/layout/Layout.tsx
var MINIMUM_CONTENT_WIDTH_PX = 100;
var layoutStateIsEqual = /* @__PURE__ */ __name((state, other) => state.navSize === other.navSize && state.bottomPanelHeight === other.bottomPanelHeight && state.rightPanelWidth === other.rightPanelWidth && state.panelPosition === other.panelPosition, "layoutStateIsEqual");
var useLayoutSyncingState = /* @__PURE__ */ __name(({
  api,
  managerLayoutState,
  setManagerLayoutState,
  isDesktop,
  hasTab
}) => {
  const prevManagerLayoutStateRef = react_default.useRef(managerLayoutState);
  const [internalDraggingSizeState, setInternalDraggingSizeState] = useState({
    ...managerLayoutState,
    isDragging: false
  });
  useEffect(() => {
    if (internalDraggingSizeState.isDragging || // don't interrupt user's drag
    layoutStateIsEqual(managerLayoutState, prevManagerLayoutStateRef.current)) {
      return;
    }
    prevManagerLayoutStateRef.current = managerLayoutState;
    setInternalDraggingSizeState((state) => ({ ...state, ...managerLayoutState }));
  }, [internalDraggingSizeState.isDragging, managerLayoutState, setInternalDraggingSizeState]);
  useLayoutEffect(() => {
    if (internalDraggingSizeState.isDragging || // wait with syncing managerLayoutState until user is done dragging
    layoutStateIsEqual(managerLayoutState, internalDraggingSizeState)) {
      return;
    }
    const nextState = {
      navSize: internalDraggingSizeState.navSize,
      bottomPanelHeight: internalDraggingSizeState.bottomPanelHeight,
      rightPanelWidth: internalDraggingSizeState.rightPanelWidth
    };
    prevManagerLayoutStateRef.current = {
      ...prevManagerLayoutStateRef.current,
      ...nextState
    };
    setManagerLayoutState(nextState);
  }, [internalDraggingSizeState, setManagerLayoutState]);
  const isPagesShown = managerLayoutState.viewMode !== "story" && managerLayoutState.viewMode !== "docs";
  const isPanelShown = managerLayoutState.viewMode === "story" && !hasTab;
  const { panelResizerRef, sidebarResizerRef } = useDragging({
    setState: setInternalDraggingSizeState,
    isPanelShown,
    isDesktop
  });
  const { navSize, rightPanelWidth, bottomPanelHeight } = internalDraggingSizeState.isDragging ? internalDraggingSizeState : managerLayoutState;
  const customisedNavSize = api.getNavSizeWithCustomisations?.(navSize) ?? navSize;
  const customisedShowPanel = api.getShowPanelWithCustomisations?.(isPanelShown) ?? isPanelShown;
  return {
    navSize: customisedNavSize,
    rightPanelWidth,
    bottomPanelHeight,
    panelPosition: managerLayoutState.panelPosition,
    panelResizerRef,
    sidebarResizerRef,
    showPages: isPagesShown,
    showPanel: customisedShowPanel,
    isDragging: internalDraggingSizeState.isDragging
  };
}, "useLayoutSyncingState");
var MainContentMatcher = /* @__PURE__ */ __name(({ children: children2 }) => {
  return react_default.createElement(Match, { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: false }, ({ match }) => react_default.createElement(ContentContainer2, { shown: !!match }, children2));
}, "MainContentMatcher");
var OrderedMobileNavigation = styled(MobileNavigation)({
  order: 1
});
var Layout = /* @__PURE__ */ __name(({ managerLayoutState, setManagerLayoutState, hasTab, ...slots }) => {
  const { isDesktop, isMobile } = useLayout();
  const api = useStorybookApi();
  const {
    navSize,
    rightPanelWidth,
    bottomPanelHeight,
    panelPosition,
    panelResizerRef,
    sidebarResizerRef,
    showPages,
    showPanel,
    isDragging
  } = useLayoutSyncingState({ api, managerLayoutState, setManagerLayoutState, isDesktop, hasTab });
  return react_default.createElement(
    LayoutContainer,
    {
      navSize,
      rightPanelWidth,
      bottomPanelHeight,
      panelPosition: managerLayoutState.panelPosition,
      isDragging,
      viewMode: managerLayoutState.viewMode,
      showPanel
    },
    showPages && react_default.createElement(PagesContainer, null, slots.slotPages),
    isDesktop && react_default.createElement(react_default.Fragment, null, react_default.createElement(SidebarContainer2, null, react_default.createElement(Drag, { ref: sidebarResizerRef }), slots.slotSidebar), react_default.createElement(MainContentMatcher, null, slots.slotMain), showPanel && react_default.createElement(PanelContainer, { position: panelPosition }, react_default.createElement(
      Drag,
      {
        orientation: panelPosition === "bottom" ? "horizontal" : "vertical",
        position: panelPosition === "bottom" ? "left" : "right",
        ref: panelResizerRef
      }
    ), slots.slotPanel)),
    isMobile && react_default.createElement(react_default.Fragment, null, react_default.createElement(
      OrderedMobileNavigation,
      {
        menu: slots.slotSidebar,
        panel: slots.slotPanel,
        showPanel
      }
    ), react_default.createElement(MainContentMatcher, null, slots.slotMain), react_default.createElement(Notifications, null))
  );
}, "Layout");
var LayoutContainer = styled.div(
  ({ navSize, rightPanelWidth, bottomPanelHeight, viewMode, panelPosition, showPanel }) => {
    return {
      width: "100%",
      height: ["100vh", "100dvh"],
      // This array is a special Emotion syntax to set a fallback if 100dvh is not supported
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      colorScheme: "light dark",
      [MEDIA_DESKTOP_BREAKPOINT]: {
        display: "grid",
        gap: 0,
        gridTemplateColumns: `minmax(0, ${navSize}px) minmax(${MINIMUM_CONTENT_WIDTH_PX}px, 1fr) minmax(0, ${rightPanelWidth}px)`,
        gridTemplateRows: `1fr minmax(0, ${bottomPanelHeight}px)`,
        gridTemplateAreas: (() => {
          if (!showPanel) {
            return `"sidebar content content"
                  "sidebar content content"`;
          }
          if (panelPosition === "right") {
            return `"sidebar content panel"
                  "sidebar content panel"`;
          }
          return `"sidebar content content"
                "sidebar panel   panel"`;
        })()
      }
    };
  }
);
var SidebarContainer2 = styled.div(({ theme }) => ({
  backgroundColor: theme.background.app,
  gridArea: "sidebar",
  position: "relative",
  borderRight: `1px solid ${theme.color.border}`
}));
var ContentContainer2 = styled.div(({ theme, shown }) => ({
  flex: 1,
  position: "relative",
  backgroundColor: theme.background.content,
  display: shown ? "grid" : "none",
  // This is needed to make the content container fill the available space
  overflow: "auto",
  [MEDIA_DESKTOP_BREAKPOINT]: {
    flex: "auto",
    gridArea: "content"
  }
}));
var PagesContainer = styled.div(({ theme }) => ({
  gridRowStart: "sidebar-start",
  gridRowEnd: "-1",
  gridColumnStart: "sidebar-end",
  gridColumnEnd: "-1",
  backgroundColor: theme.background.content,
  zIndex: 1
}));
var PanelContainer = styled.div(
  ({ theme, position }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: theme.background.content,
    borderTop: position === "bottom" ? `1px solid ${theme.color.border}` : void 0,
    borderLeft: position === "right" ? `1px solid ${theme.color.border}` : void 0
  })
);
var Drag = styled.div(
  ({ theme }) => ({
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    zIndex: 100,
    "&:after": {
      content: '""',
      display: "block",
      backgroundColor: theme.color.secondary
    },
    "&:hover": {
      opacity: 1
    }
  }),
  ({ orientation = "vertical", position = "left" }) => {
    if (orientation === "vertical") {
      return {
        width: position === "left" ? 10 : 13,
        height: "100%",
        top: 0,
        right: position === "left" ? "-7px" : void 0,
        left: position === "right" ? "-7px" : void 0,
        "&:after": {
          width: 1,
          height: "100%",
          marginLeft: position === "left" ? 3 : 6
        },
        "&:hover": {
          cursor: "col-resize"
        }
      };
    }
    return {
      width: "100%",
      height: "13px",
      top: "-7px",
      left: 0,
      "&:after": {
        width: "100%",
        height: 1,
        marginTop: 6
      },
      "&:hover": {
        cursor: "row-resize"
      }
    };
  }
);

// global-externals:storybook/internal/types
var types_default = __STORYBOOK_TYPES__;
var { Addon_TypesEnum } = __STORYBOOK_TYPES__;

// src/core-events/index.ts
var events = /* @__PURE__ */ ((events2) => {
  events2["CHANNEL_WS_DISCONNECT"] = "channelWSDisconnect";
  events2["CHANNEL_CREATED"] = "channelCreated";
  events2["CONFIG_ERROR"] = "configError";
  events2["STORY_INDEX_INVALIDATED"] = "storyIndexInvalidated";
  events2["STORY_SPECIFIED"] = "storySpecified";
  events2["SET_CONFIG"] = "setConfig";
  events2["SET_STORIES"] = "setStories";
  events2["SET_INDEX"] = "setIndex";
  events2["SET_CURRENT_STORY"] = "setCurrentStory";
  events2["CURRENT_STORY_WAS_SET"] = "currentStoryWasSet";
  events2["FORCE_RE_RENDER"] = "forceReRender";
  events2["FORCE_REMOUNT"] = "forceRemount";
  events2["PRELOAD_ENTRIES"] = "preloadStories";
  events2["STORY_PREPARED"] = "storyPrepared";
  events2["DOCS_PREPARED"] = "docsPrepared";
  events2["STORY_CHANGED"] = "storyChanged";
  events2["STORY_UNCHANGED"] = "storyUnchanged";
  events2["STORY_RENDERED"] = "storyRendered";
  events2["STORY_FINISHED"] = "storyFinished";
  events2["STORY_MISSING"] = "storyMissing";
  events2["STORY_ERRORED"] = "storyErrored";
  events2["STORY_THREW_EXCEPTION"] = "storyThrewException";
  events2["STORY_RENDER_PHASE_CHANGED"] = "storyRenderPhaseChanged";
  events2["STORY_HOT_UPDATED"] = "storyHotUpdated";
  events2["PLAY_FUNCTION_THREW_EXCEPTION"] = "playFunctionThrewException";
  events2["UNHANDLED_ERRORS_WHILE_PLAYING"] = "unhandledErrorsWhilePlaying";
  events2["UPDATE_STORY_ARGS"] = "updateStoryArgs";
  events2["STORY_ARGS_UPDATED"] = "storyArgsUpdated";
  events2["RESET_STORY_ARGS"] = "resetStoryArgs";
  events2["SET_FILTER"] = "setFilter";
  events2["SET_GLOBALS"] = "setGlobals";
  events2["UPDATE_GLOBALS"] = "updateGlobals";
  events2["GLOBALS_UPDATED"] = "globalsUpdated";
  events2["REGISTER_SUBSCRIPTION"] = "registerSubscription";
  events2["PREVIEW_INITIALIZED"] = "previewInitialized";
  events2["PREVIEW_KEYDOWN"] = "previewKeydown";
  events2["PREVIEW_BUILDER_PROGRESS"] = "preview_builder_progress";
  events2["SELECT_STORY"] = "selectStory";
  events2["STORIES_COLLAPSE_ALL"] = "storiesCollapseAll";
  events2["STORIES_EXPAND_ALL"] = "storiesExpandAll";
  events2["DOCS_RENDERED"] = "docsRendered";
  events2["SHARED_STATE_CHANGED"] = "sharedStateChanged";
  events2["SHARED_STATE_SET"] = "sharedStateSet";
  events2["NAVIGATE_URL"] = "navigateUrl";
  events2["UPDATE_QUERY_PARAMS"] = "updateQueryParams";
  events2["REQUEST_WHATS_NEW_DATA"] = "requestWhatsNewData";
  events2["RESULT_WHATS_NEW_DATA"] = "resultWhatsNewData";
  events2["SET_WHATS_NEW_CACHE"] = "setWhatsNewCache";
  events2["TOGGLE_WHATS_NEW_NOTIFICATIONS"] = "toggleWhatsNewNotifications";
  events2["TELEMETRY_ERROR"] = "telemetryError";
  events2["FILE_COMPONENT_SEARCH_REQUEST"] = "fileComponentSearchRequest";
  events2["FILE_COMPONENT_SEARCH_RESPONSE"] = "fileComponentSearchResponse";
  events2["SAVE_STORY_REQUEST"] = "saveStoryRequest";
  events2["SAVE_STORY_RESPONSE"] = "saveStoryResponse";
  events2["ARGTYPES_INFO_REQUEST"] = "argtypesInfoRequest";
  events2["ARGTYPES_INFO_RESPONSE"] = "argtypesInfoResponse";
  events2["CREATE_NEW_STORYFILE_REQUEST"] = "createNewStoryfileRequest";
  events2["CREATE_NEW_STORYFILE_RESPONSE"] = "createNewStoryfileResponse";
  events2["OPEN_IN_EDITOR_REQUEST"] = "openInEditorRequest";
  events2["OPEN_IN_EDITOR_RESPONSE"] = "openInEditorResponse";
  return events2;
})(events || {});
var {
  CHANNEL_WS_DISCONNECT: CHANNEL_WS_DISCONNECT2,
  CHANNEL_CREATED: CHANNEL_CREATED2,
  CONFIG_ERROR: CONFIG_ERROR2,
  CREATE_NEW_STORYFILE_REQUEST: CREATE_NEW_STORYFILE_REQUEST2,
  CREATE_NEW_STORYFILE_RESPONSE: CREATE_NEW_STORYFILE_RESPONSE2,
  CURRENT_STORY_WAS_SET: CURRENT_STORY_WAS_SET2,
  DOCS_PREPARED: DOCS_PREPARED2,
  DOCS_RENDERED: DOCS_RENDERED2,
  FILE_COMPONENT_SEARCH_REQUEST: FILE_COMPONENT_SEARCH_REQUEST2,
  FILE_COMPONENT_SEARCH_RESPONSE: FILE_COMPONENT_SEARCH_RESPONSE2,
  FORCE_RE_RENDER: FORCE_RE_RENDER2,
  FORCE_REMOUNT: FORCE_REMOUNT2,
  GLOBALS_UPDATED: GLOBALS_UPDATED2,
  NAVIGATE_URL: NAVIGATE_URL2,
  PLAY_FUNCTION_THREW_EXCEPTION: PLAY_FUNCTION_THREW_EXCEPTION2,
  UNHANDLED_ERRORS_WHILE_PLAYING: UNHANDLED_ERRORS_WHILE_PLAYING2,
  PRELOAD_ENTRIES: PRELOAD_ENTRIES2,
  PREVIEW_INITIALIZED: PREVIEW_INITIALIZED2,
  PREVIEW_BUILDER_PROGRESS: PREVIEW_BUILDER_PROGRESS2,
  PREVIEW_KEYDOWN: PREVIEW_KEYDOWN2,
  REGISTER_SUBSCRIPTION: REGISTER_SUBSCRIPTION2,
  RESET_STORY_ARGS: RESET_STORY_ARGS2,
  SELECT_STORY: SELECT_STORY2,
  SET_CONFIG: SET_CONFIG2,
  SET_CURRENT_STORY: SET_CURRENT_STORY2,
  SET_FILTER: SET_FILTER2,
  SET_GLOBALS: SET_GLOBALS2,
  SET_INDEX: SET_INDEX2,
  SET_STORIES: SET_STORIES2,
  SHARED_STATE_CHANGED: SHARED_STATE_CHANGED2,
  SHARED_STATE_SET: SHARED_STATE_SET2,
  STORIES_COLLAPSE_ALL: STORIES_COLLAPSE_ALL2,
  STORIES_EXPAND_ALL: STORIES_EXPAND_ALL2,
  STORY_ARGS_UPDATED: STORY_ARGS_UPDATED2,
  STORY_CHANGED: STORY_CHANGED2,
  STORY_ERRORED: STORY_ERRORED2,
  STORY_INDEX_INVALIDATED: STORY_INDEX_INVALIDATED2,
  STORY_MISSING: STORY_MISSING2,
  STORY_PREPARED: STORY_PREPARED2,
  STORY_RENDER_PHASE_CHANGED: STORY_RENDER_PHASE_CHANGED2,
  STORY_RENDERED: STORY_RENDERED2,
  STORY_FINISHED: STORY_FINISHED2,
  STORY_SPECIFIED: STORY_SPECIFIED2,
  STORY_THREW_EXCEPTION: STORY_THREW_EXCEPTION2,
  STORY_UNCHANGED: STORY_UNCHANGED2,
  STORY_HOT_UPDATED: STORY_HOT_UPDATED2,
  UPDATE_GLOBALS: UPDATE_GLOBALS2,
  UPDATE_QUERY_PARAMS: UPDATE_QUERY_PARAMS2,
  UPDATE_STORY_ARGS: UPDATE_STORY_ARGS2,
  REQUEST_WHATS_NEW_DATA: REQUEST_WHATS_NEW_DATA2,
  RESULT_WHATS_NEW_DATA: RESULT_WHATS_NEW_DATA2,
  SET_WHATS_NEW_CACHE: SET_WHATS_NEW_CACHE2,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: TOGGLE_WHATS_NEW_NOTIFICATIONS2,
  TELEMETRY_ERROR: TELEMETRY_ERROR2,
  SAVE_STORY_REQUEST: SAVE_STORY_REQUEST2,
  SAVE_STORY_RESPONSE: SAVE_STORY_RESPONSE2,
  ARGTYPES_INFO_REQUEST: ARGTYPES_INFO_REQUEST2,
  ARGTYPES_INFO_RESPONSE: ARGTYPES_INFO_RESPONSE2,
  OPEN_IN_EDITOR_REQUEST: OPEN_IN_EDITOR_REQUEST2,
  OPEN_IN_EDITOR_RESPONSE: OPEN_IN_EDITOR_RESPONSE2
} = events;

// src/manager/components/panel/Panel.tsx
var _SafeTab = class _SafeTab extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }
  // @ts-expect-error (we know this is broken)
  render() {
    const { hasError } = this.state;
    const { children: children2 } = this.props;
    if (hasError) {
      return react_default.createElement("h1", null, "Something went wrong.");
    }
    return children2;
  }
};
__name(_SafeTab, "SafeTab");
var SafeTab = _SafeTab;
var AddonPanel2 = react_default.memo(
  ({
    panels,
    shortcuts,
    actions,
    selectedPanel = null,
    panelPosition = "right",
    absolute = true
  }) => {
    const { isDesktop, setMobilePanelOpen } = useLayout();
    return react_default.createElement(
      Tabs,
      {
        absolute,
        ...selectedPanel && panels[selectedPanel] ? { selected: selectedPanel } : {},
        menuName: "Addons",
        actions,
        showToolsWhenEmpty: true,
        emptyState: react_default.createElement(
          EmptyTabContent,
          {
            title: "Storybook add-ons",
            description: react_default.createElement(react_default.Fragment, null, "Integrate your tools with Storybook to connect workflows and unlock advanced features."),
            footer: react_default.createElement(Link, { href: "https://storybook.js.org/addons?ref=ui", target: "_blank", withArrow: true }, react_default.createElement(DocumentIcon, null), " Explore integrations catalog")
          }
        ),
        tools: react_default.createElement(Actions, null, isDesktop ? react_default.createElement(react_default.Fragment, null, react_default.createElement(
          IconButton,
          {
            key: "position",
            onClick: actions.togglePosition,
            title: `Change addon orientation [${shortcutToHumanString(
              shortcuts.panelPosition
            )}]`
          },
          panelPosition === "bottom" ? react_default.createElement(SidebarAltIcon, null) : react_default.createElement(BottomBarIcon, null)
        ), react_default.createElement(
          IconButton,
          {
            key: "visibility",
            onClick: actions.toggleVisibility,
            title: `Hide addons [${shortcutToHumanString(shortcuts.togglePanel)}]`
          },
          react_default.createElement(CloseIcon, null)
        )) : react_default.createElement(IconButton, { onClick: () => setMobilePanelOpen(false), "aria-label": "Close addon panel" }, react_default.createElement(CloseIcon, null))),
        id: "storybook-panel-root"
      },
      Object.entries(panels).map(([k2, v2]) => (
        // @ts-expect-error (we know this is broken)
        react_default.createElement(SafeTab, { key: k2, id: k2, title: typeof v2.title === "function" ? react_default.createElement(v2.title, null) : v2.title }, v2.render)
      ))
    );
  }
);
AddonPanel2.displayName = "AddonPanel";
var Actions = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 6
});

// src/manager/container/Panel.tsx
var Panel = /* @__PURE__ */ __name((props) => {
  const api = useStorybookApi();
  const state = useStorybookState();
  const [story, setStory] = useState(api.getCurrentStoryData());
  useChannel(
    {
      [STORY_PREPARED2]: () => {
        setStory(api.getCurrentStoryData());
      }
    },
    []
  );
  const { parameters, type } = story ?? {};
  const panelActions = useMemo(
    () => ({
      onSelect: /* @__PURE__ */ __name((panel) => api.setSelectedPanel(panel), "onSelect"),
      toggleVisibility: /* @__PURE__ */ __name(() => api.togglePanel(), "toggleVisibility"),
      togglePosition: /* @__PURE__ */ __name(() => api.togglePanelPosition(), "togglePosition")
    }),
    [api]
  );
  const panels = useMemo(() => {
    const allPanels = api.getElements(Addon_TypesEnum.PANEL);
    if (!allPanels || type !== "story") {
      return allPanels;
    }
    const filteredPanels = {};
    Object.entries(allPanels).forEach(([id, p2]) => {
      const { paramKey } = p2;
      if (paramKey && parameters && parameters[paramKey] && parameters[paramKey].disable) {
        return;
      }
      if (p2.disabled === true || typeof p2.disabled === "function" && p2.disabled(parameters)) {
        return;
      }
      filteredPanels[id] = p2;
    });
    return filteredPanels;
  }, [api, type, parameters]);
  return react_default.createElement(
    AddonPanel2,
    {
      panels,
      selectedPanel: api.getSelectedPanel(),
      panelPosition: state.layout.panelPosition,
      actions: panelActions,
      shortcuts: api.getShortcutKeys(),
      ...props
    }
  );
}, "Panel");
var Panel_default = Panel;

// src/manager/container/Preview.tsx
var import_memoizerific = __toESM(require_memoizerific(), 1);

// src/manager/components/preview/Iframe.tsx
var StyledIframe = styled.iframe(({ theme }) => ({
  backgroundColor: theme.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: `auto`,
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
}));
function IFrame(props) {
  const { active, id, title, src, allowFullScreen, scale, ...rest2 } = props;
  const iFrameRef = react_default.useRef(null);
  return react_default.createElement(Zoom.IFrame, { scale, active, iFrameRef }, react_default.createElement(
    StyledIframe,
    {
      "data-is-storybook": active ? "true" : "false",
      onLoad: (e2) => e2.currentTarget.setAttribute("data-is-loaded", "true"),
      id,
      title,
      src,
      allow: "clipboard-write;",
      allowFullScreen,
      ref: iFrameRef,
      ...rest2
    }
  ));
}
__name(IFrame, "IFrame");

// src/manager/components/preview/utils/stringifyQueryParams.tsx
var import_picoquery = __toESM(require_main(), 1);
var stringifyQueryParams = /* @__PURE__ */ __name((queryParams) => {
  const result = (0, import_picoquery.stringify)(queryParams);
  if (result === "") {
    return "";
  }
  return `&${result}`;
}, "stringifyQueryParams");

// src/manager/components/preview/FramesRenderer.tsx
var getActive = /* @__PURE__ */ __name((refId, refs) => {
  if (refId && refs[refId]) {
    return `storybook-ref-${refId}`;
  }
  return "storybook-preview-iframe";
}, "getActive");
var SkipToSidebarLink = styled(Button)(({ theme }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    position: "absolute",
    display: "block",
    top: 10,
    right: 15,
    padding: "10px 15px",
    fontSize: theme.typography.size.s1,
    transform: "translateY(-100px)",
    "&:focus": {
      transform: "translateY(0)",
      zIndex: 1
    }
  }
}));
var whenSidebarIsVisible = /* @__PURE__ */ __name(({ api, state }) => ({
  isFullscreen: api.getIsFullscreen(),
  isNavShown: api.getIsNavShown(),
  selectedStoryId: state.storyId
}), "whenSidebarIsVisible");
var styles = {
  '#root [data-is-storybook="false"]': {
    display: "none"
  },
  '#root [data-is-storybook="true"]': {
    display: "block"
  }
};
var FramesRenderer = /* @__PURE__ */ __name(({
  refs,
  scale,
  viewMode = "story",
  refId,
  queryParams = {},
  baseUrl,
  storyId = "*"
}) => {
  const version3 = refs[refId]?.version;
  const stringifiedQueryParams = stringifyQueryParams({
    ...queryParams,
    ...version3 && { version: version3 }
  });
  const active = getActive(refId, refs);
  const { current: frames } = useRef({});
  const refsToLoad = Object.values(refs).filter((ref) => {
    return ref.type === "auto-inject" || ref.id === refId;
  }, {});
  if (!frames["storybook-preview-iframe"]) {
    frames["storybook-preview-iframe"] = getStoryHref(baseUrl, storyId, {
      ...queryParams,
      ...version3 && { version: version3 },
      viewMode
    });
  }
  refsToLoad.forEach((ref) => {
    const id = `storybook-ref-${ref.id}`;
    const existingUrl = frames[id]?.split("/iframe.html")[0];
    if (!existingUrl || ref.url !== existingUrl) {
      const newUrl = `${ref.url}/iframe.html?id=${storyId}&viewMode=${viewMode}&refId=${ref.id}${stringifiedQueryParams}`;
      frames[id] = newUrl;
    }
  });
  return react_default.createElement(Fragment, null, react_default.createElement(Global, { styles }), react_default.createElement(Consumer, { filter: whenSidebarIsVisible }, ({ isFullscreen, isNavShown, selectedStoryId }) => {
    if (isFullscreen || !isNavShown || !selectedStoryId) {
      return null;
    }
    return react_default.createElement(SkipToSidebarLink, { asChild: true }, react_default.createElement("a", { href: `#${selectedStoryId}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"));
  }), Object.entries(frames).map(([id, src]) => {
    return react_default.createElement(Fragment, { key: id }, react_default.createElement(
      IFrame,
      {
        active: id === active,
        key: id,
        id,
        title: id,
        src,
        allowFullScreen: true,
        scale
      }
    ));
  }));
}, "FramesRenderer");

// src/manager/components/preview/Toolbar.tsx
var fullScreenMapper = /* @__PURE__ */ __name(({ api, state }) => {
  return {
    toggle: api.toggleFullscreen,
    isFullscreen: api.getIsFullscreen(),
    shortcut: shortcutToHumanString(api.getShortcutKeys().fullScreen),
    hasPanel: Object.keys(api.getElements(Addon_TypesEnum.PANEL)).length > 0,
    singleStory: state.singleStory
  };
}, "fullScreenMapper");
var fullScreenTool = {
  title: "fullscreen",
  id: "fullscreen",
  type: types.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ __name((p2) => ["story", "docs"].includes(p2.viewMode), "match"),
  render: /* @__PURE__ */ __name(() => {
    const { isMobile } = useLayout();
    if (isMobile) {
      return null;
    }
    return react_default.createElement(Consumer, { filter: fullScreenMapper }, ({ toggle, isFullscreen, shortcut, hasPanel, singleStory }) => (!singleStory || singleStory && hasPanel) && react_default.createElement(
      IconButton,
      {
        key: "full",
        onClick: toggle,
        title: `${isFullscreen ? "Exit full screen" : "Go full screen"} [${shortcut}]`,
        "aria-label": isFullscreen ? "Exit full screen" : "Go full screen"
      },
      isFullscreen ? react_default.createElement(CloseIcon, null) : react_default.createElement(ExpandIcon, null)
    ));
  }, "render")
};
var ToolbarComp = react_default.memo(/* @__PURE__ */ __name(function ToolbarComp2({
  isShown,
  tools,
  toolsExtra,
  tabs,
  tabId,
  api
}) {
  const id = useId();
  return tabs || tools || toolsExtra ? react_default.createElement(
    Toolbar,
    {
      className: "sb-bar",
      key: "toolbar",
      shown: isShown,
      "data-test-id": "sb-preview-toolbar",
      "aria-labelledby": id
    },
    react_default.createElement("span", { className: "sb-sr-only", id }, "Toolbar"),
    react_default.createElement(ToolbarInner, null, react_default.createElement(ToolbarLeft, null, tabs.length > 1 ? react_default.createElement(Fragment, null, react_default.createElement(TabBar, { key: "tabs" }, tabs.map((tab, index) => {
      return react_default.createElement(
        TabButton,
        {
          disabled: !!tab.disabled,
          active: tab.id === tabId || tab.id === "canvas" && !tabId,
          onClick: () => {
            api.applyQueryParams({ tab: tab.id === "canvas" ? void 0 : tab.id });
          },
          key: tab.id || `tab-${index}`
        },
        tab.title
      );
    })), react_default.createElement(Separator, null)) : null, react_default.createElement(Tools, { key: "left", list: tools })), react_default.createElement(ToolbarRight, null, react_default.createElement(Tools, { key: "right", list: toolsExtra })))
  ) : null;
}, "ToolbarComp"));
var Tools = react_default.memo(/* @__PURE__ */ __name(function Tools2({ list }) {
  return react_default.createElement(react_default.Fragment, null, list.filter(Boolean).map(({ render: Render, id, ...t2 }, index) => (
    // @ts-expect-error (Converted from ts-ignore)
    react_default.createElement(Render, { key: id || t2.key || `f-${index}` })
  )));
}, "Tools"));
function toolbarItemHasBeenExcluded(item, entry) {
  const parameters = entry?.type === "story" && entry?.prepared ? entry?.parameters : {};
  const toolbarItemsFromStoryParameters = "toolbar" in parameters ? parameters.toolbar : void 0;
  const { toolbar: toolbarItemsFromAddonsConfig } = addons.getConfig();
  const toolbarItems = merge(
    toolbarItemsFromAddonsConfig || {},
    toolbarItemsFromStoryParameters || {}
  );
  return toolbarItems ? !!toolbarItems[item?.id]?.hidden : false;
}
__name(toolbarItemHasBeenExcluded, "toolbarItemHasBeenExcluded");
function filterToolsSide(tools, entry, viewMode, location, path, tabId) {
  const filter = /* @__PURE__ */ __name((item) => item && (!item.match || item.match({
    storyId: entry?.id,
    refId: entry?.refId,
    viewMode,
    location,
    path,
    tabId
  })) && !toolbarItemHasBeenExcluded(item, entry), "filter");
  return tools.filter(filter);
}
__name(filterToolsSide, "filterToolsSide");
var Toolbar = styled.section(({ theme, shown }) => ({
  position: "relative",
  color: theme.barTextColor,
  width: "100%",
  flexShrink: 0,
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: shown ? 0 : -40,
  boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
  background: theme.barBg,
  scrollbarColor: `${theme.barTextColor} ${theme.barBg}`,
  scrollbarWidth: "thin",
  zIndex: 4
}));
var ToolbarInner = styled.div({
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  marginLeft: 10,
  marginRight: 10
});
var ToolbarLeft = styled.div({
  display: "flex",
  whiteSpace: "nowrap",
  flexBasis: "auto",
  gap: 6,
  alignItems: "center"
});
var ToolbarRight = styled(ToolbarLeft)({
  marginLeft: 30
});

// src/manager/components/preview/utils/components.ts
var PreviewContainer = styled.main({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden"
});
var FrameWrap = styled.div({
  overflow: "auto",
  width: "100%",
  zIndex: 3,
  background: "transparent",
  flex: 1
});
var CanvasWrap = styled.div(
  {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "auto",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  ({ show }) => ({ display: show ? "grid" : "none" })
);
var UnstyledLink = styled(Link2)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
});
var DesktopOnly = styled.span({
  // Hides full screen icon at mobile breakpoint defined in app.js
  "@media (max-width: 599px)": {
    display: "none"
  }
});
var IframeWrapper = styled.div(({ theme }) => ({
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  position: "relative",
  width: "100%",
  height: "100%"
}));
var LoaderWrapper = styled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: theme.background.preview,
  zIndex: 1
}));

// src/manager/components/preview/Wrappers.tsx
var ApplyWrappers = /* @__PURE__ */ __name(({
  wrappers,
  id,
  storyId,
  children: children2
}) => {
  return react_default.createElement(Fragment, null, wrappers.reduceRight(
    (acc, wrapper, index) => react_default.createElement(wrapper.render, { ...{ index, children: acc, id, storyId } }),
    children2
  ));
}, "ApplyWrappers");
var defaultWrappers = [
  {
    id: "iframe-wrapper",
    type: Addon_TypesEnum.PREVIEW,
    render: /* @__PURE__ */ __name((p2) => react_default.createElement(IframeWrapper, { id: "storybook-preview-wrapper" }, p2.children), "render")
  }
];

// src/manager/components/preview/tools/zoom.tsx
var initialZoom = 1;
var Context = createContext({ value: initialZoom, set: /* @__PURE__ */ __name((v2) => {
}, "set") });
var _ZoomProvider = class _ZoomProvider extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: initialZoom
    };
    this.set = /* @__PURE__ */ __name((value) => this.setState({ value }), "set");
  }
  render() {
    const { children: children2, shouldScale } = this.props;
    const { set } = this;
    const { value } = this.state;
    return react_default.createElement(Context.Provider, { value: { value: shouldScale ? value : initialZoom, set } }, children2);
  }
};
__name(_ZoomProvider, "ZoomProvider");
var ZoomProvider = _ZoomProvider;
var { Consumer: ZoomConsumer } = Context;
var Zoom2 = memo(/* @__PURE__ */ __name(function Zoom3({ zoomIn, zoomOut, reset }) {
  return react_default.createElement(react_default.Fragment, null, react_default.createElement(IconButton, { key: "zoomin", onClick: zoomIn, title: "Zoom in" }, react_default.createElement(ZoomIcon, null)), react_default.createElement(IconButton, { key: "zoomout", onClick: zoomOut, title: "Zoom out" }, react_default.createElement(ZoomOutIcon, null)), react_default.createElement(IconButton, { key: "zoomreset", onClick: reset, title: "Reset zoom" }, react_default.createElement(ZoomResetIcon, null)));
}, "Zoom"));
var ZoomWrapper = memo(/* @__PURE__ */ __name(function ZoomWrapper2({
  set,
  value
}) {
  const zoomIn = useCallback(
    (e2) => {
      e2.preventDefault();
      set(0.8 * value);
    },
    [set, value]
  );
  const zoomOut = useCallback(
    (e2) => {
      e2.preventDefault();
      set(1.25 * value);
    },
    [set, value]
  );
  const reset = useCallback(
    (e2) => {
      e2.preventDefault();
      set(initialZoom);
    },
    [set, initialZoom]
  );
  return react_default.createElement(Zoom2, { key: "zoom", ...{ zoomIn, zoomOut, reset } });
}, "ZoomWrapper"));
function ZoomToolRenderer() {
  return react_default.createElement(react_default.Fragment, null, react_default.createElement(ZoomConsumer, null, ({ set, value }) => react_default.createElement(ZoomWrapper, { ...{ set, value } })), react_default.createElement(Separator, null));
}
__name(ZoomToolRenderer, "ZoomToolRenderer");
var zoomTool = {
  title: "zoom",
  id: "zoom",
  type: types.TOOL,
  match: /* @__PURE__ */ __name(({ viewMode, tabId }) => viewMode === "story" && !tabId, "match"),
  render: ZoomToolRenderer
};

// src/manager/components/preview/Preview.tsx
var canvasMapper = /* @__PURE__ */ __name(({ state, api }) => ({
  storyId: state.storyId,
  refId: state.refId,
  viewMode: state.viewMode,
  customCanvas: api.renderPreview,
  queryParams: state.customQueryParams,
  getElements: api.getElements,
  entry: api.getData(state.storyId, state.refId),
  previewInitialized: state.previewInitialized,
  refs: state.refs
}), "canvasMapper");
var createCanvasTab = /* @__PURE__ */ __name(() => ({
  id: "canvas",
  type: types.TAB,
  title: "Canvas",
  route: /* @__PURE__ */ __name(({ storyId, refId }) => refId ? `/story/${refId}_${storyId}` : `/story/${storyId}`, "route"),
  match: /* @__PURE__ */ __name(({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)), "match"),
  render: /* @__PURE__ */ __name(() => null, "render")
}), "createCanvasTab");
var Preview = react_default.memo(/* @__PURE__ */ __name(function Preview2(props) {
  const {
    api,
    id: previewId,
    options: options2,
    viewMode,
    storyId,
    entry = void 0,
    description,
    baseUrl,
    withLoader = true,
    tools,
    toolsExtra,
    tabs,
    wrappers,
    tabId
  } = props;
  const tabContent = tabs.find((tab) => tab.id === tabId)?.render;
  const shouldScale = viewMode === "story";
  const { showToolbar } = options2;
  const customisedShowToolbar = api.getShowToolbarWithCustomisations(showToolbar);
  const previousStoryId = useRef(storyId);
  useEffect(() => {
    if (entry && viewMode) {
      if (storyId === previousStoryId.current) {
        return;
      }
      previousStoryId.current = storyId;
      if (viewMode.match(/docs|story/)) {
        const { refId, id } = entry;
        api.emit(SET_CURRENT_STORY, {
          storyId: id,
          viewMode,
          options: { target: refId }
        });
      }
    }
  }, [entry, viewMode, storyId, api]);
  return react_default.createElement(Fragment, null, previewId === "main" && react_default.createElement(W, { key: "description" }, react_default.createElement("title", null, description)), react_default.createElement(ZoomProvider, { shouldScale }, react_default.createElement(PreviewContainer, null, react_default.createElement(
    ToolbarComp,
    {
      key: "tools",
      isShown: customisedShowToolbar,
      tabId,
      tabs,
      tools,
      toolsExtra,
      api
    }
  ), react_default.createElement(FrameWrap, { key: "frame" }, tabContent && react_default.createElement(IframeWrapper, null, tabContent({ active: true })), react_default.createElement(CanvasWrap, { show: !tabId }, react_default.createElement(Canvas, { ...{ withLoader, baseUrl }, wrappers }))))));
}, "Preview"));
var Canvas = /* @__PURE__ */ __name(({ baseUrl, withLoader, wrappers }) => {
  return react_default.createElement(Consumer, { filter: canvasMapper }, ({
    entry,
    refs,
    customCanvas,
    storyId,
    refId,
    viewMode,
    queryParams,
    previewInitialized
  }) => {
    const id = "canvas";
    const [progress, setProgress] = useState(void 0);
    useEffect(() => {
      if (scope.CONFIG_TYPE === "DEVELOPMENT") {
        try {
          const channel = addons.getChannel();
          channel.on(PREVIEW_BUILDER_PROGRESS, (options2) => {
            setProgress(options2);
          });
        } catch {
        }
      }
    }, []);
    const refLoading = !!refs[refId] && !refs[refId].previewInitialized;
    const isBuilding = !(progress?.value === 1 || progress === void 0);
    const rootLoading = !refId && (!previewInitialized || isBuilding);
    const isLoading = entry ? refLoading || rootLoading : rootLoading;
    return react_default.createElement(ZoomConsumer, null, ({ value: scale }) => {
      return react_default.createElement(react_default.Fragment, null, withLoader && isLoading && react_default.createElement(LoaderWrapper, null, react_default.createElement(Loader, { id: "preview-loader", role: "progressbar", progress })), react_default.createElement(ApplyWrappers, { id, storyId, viewMode, wrappers }, customCanvas ? customCanvas(storyId, viewMode, id, baseUrl, scale, queryParams) : react_default.createElement(
        FramesRenderer,
        {
          baseUrl,
          refs,
          scale,
          entry,
          viewMode,
          refId,
          queryParams,
          storyId
        }
      )));
    });
  });
}, "Canvas");
function filterTabs(panels, parameters) {
  const { previewTabs } = addons.getConfig();
  const parametersTabs = parameters ? parameters.previewTabs : void 0;
  if (previewTabs || parametersTabs) {
    const tabs = merge(previewTabs || {}, parametersTabs || {});
    const arrTabs = Object.keys(tabs).map((key, index) => ({
      index,
      ...typeof tabs[key] === "string" ? { title: tabs[key] } : tabs[key],
      id: key
    }));
    return panels.filter((panel) => {
      const t2 = arrTabs.find((tab) => tab.id === panel.id);
      return t2 === void 0 || t2.id === "canvas" || !t2.hidden;
    }).map((panel, index) => ({ ...panel, index })).sort((p1, p2) => {
      const tab_1 = arrTabs.find((tab) => tab.id === p1.id);
      const index_1 = tab_1 ? tab_1.index : arrTabs.length + p1.index;
      const tab_2 = arrTabs.find((tab) => tab.id === p2.id);
      const index_2 = tab_2 ? tab_2.index : arrTabs.length + p2.index;
      return index_1 - index_2;
    }).map((panel) => {
      const t2 = arrTabs.find((tab) => tab.id === panel.id);
      if (t2) {
        return {
          ...panel,
          title: t2.title || panel.title,
          disabled: t2.disabled,
          hidden: t2.hidden
        };
      }
      return panel;
    });
  }
  return panels;
}
__name(filterTabs, "filterTabs");

// src/manager/components/preview/tools/addons.tsx
var menuMapper = /* @__PURE__ */ __name(({ api, state }) => ({
  isVisible: api.getIsPanelShown(),
  singleStory: state.singleStory,
  panelPosition: state.layout.panelPosition,
  toggle: /* @__PURE__ */ __name(() => api.togglePanel(), "toggle")
}), "menuMapper");
var addonsTool = {
  title: "addons",
  id: "addons",
  type: types.TOOL,
  match: /* @__PURE__ */ __name(({ viewMode, tabId }) => viewMode === "story" && !tabId, "match"),
  render: /* @__PURE__ */ __name(() => react_default.createElement(Consumer, { filter: menuMapper }, ({ isVisible, toggle, singleStory, panelPosition }) => !singleStory && !isVisible && react_default.createElement(react_default.Fragment, null, react_default.createElement(IconButton, { "aria-label": "Show addons", key: "addons", onClick: toggle, title: "Show addons" }, panelPosition === "bottom" ? react_default.createElement(BottomBarIcon, null) : react_default.createElement(SidebarAltIcon, null)))), "render")
};

// src/manager/components/preview/tools/menu.tsx
var menuMapper2 = /* @__PURE__ */ __name(({ api, state }) => ({
  isVisible: api.getIsNavShown(),
  singleStory: state.singleStory,
  toggle: /* @__PURE__ */ __name(() => api.toggleNav(), "toggle")
}), "menuMapper");
var menuTool = {
  title: "menu",
  id: "menu",
  type: types.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ __name(({ viewMode }) => ["story", "docs"].includes(viewMode), "match"),
  render: /* @__PURE__ */ __name(() => react_default.createElement(Consumer, { filter: menuMapper2 }, ({ isVisible, toggle, singleStory }) => !singleStory && !isVisible && react_default.createElement(react_default.Fragment, null, react_default.createElement(IconButton, { "aria-label": "Show sidebar", key: "menu", onClick: toggle, title: "Show sidebar" }, react_default.createElement(MenuIcon, null)), react_default.createElement(Separator, null))), "render")
};

// src/manager/components/preview/tools/open-in-editor.tsx
var mapper2 = /* @__PURE__ */ __name(({ state, api }) => {
  const { storyId, refId } = state;
  const entry = api.getData(storyId, refId);
  const isCompositionStory = !!refId;
  return {
    storyId,
    isCompositionStory,
    importPath: entry?.importPath
  };
}, "mapper");
var openInEditorTool = {
  title: "open-in-editor",
  id: "open-in-editor",
  type: types.TOOL,
  match: /* @__PURE__ */ __name(({ viewMode, tabId }) => scope.CONFIG_TYPE === "DEVELOPMENT" && (viewMode === "story" || viewMode === "docs") && !tabId, "match"),
  render: /* @__PURE__ */ __name(() => react_default.createElement(Consumer, { filter: mapper2 }, ({ importPath, isCompositionStory }) => {
    const api = useStorybookApi();
    if (isCompositionStory || !importPath) {
      return null;
    }
    return react_default.createElement(
      IconButton,
      {
        key: "open-in-editor",
        onClick: () => api.openInEditor({
          file: importPath
        }),
        title: "Open in editor",
        "aria-label": "Open in editor"
      },
      react_default.createElement(EditorIcon, null)
    );
  }), "render")
};

// src/manager/components/preview/tools/remount.tsx
var StyledAnimatedIconButton = styled(IconButton)(({ theme, animating, disabled }) => ({
  opacity: disabled ? 0.5 : 1,
  svg: {
    animation: animating ? `${theme.animation.rotate360} 1000ms ease-out` : void 0
  }
}));
var menuMapper3 = /* @__PURE__ */ __name(({ api, state }) => {
  const { storyId } = state;
  return {
    storyId,
    remount: /* @__PURE__ */ __name(() => api.emit(FORCE_REMOUNT, { storyId: state.storyId }), "remount"),
    api
  };
}, "menuMapper");
var remountTool = {
  title: "remount",
  id: "remount",
  type: types.TOOL,
  match: /* @__PURE__ */ __name(({ viewMode, tabId }) => viewMode === "story" && !tabId, "match"),
  render: /* @__PURE__ */ __name(() => react_default.createElement(Consumer, { filter: menuMapper3 }, ({ remount, storyId, api }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const remountComponent = /* @__PURE__ */ __name(() => {
      if (!storyId) {
        return;
      }
      remount();
    }, "remountComponent");
    api.on(FORCE_REMOUNT, () => {
      setIsAnimating(true);
    });
    return react_default.createElement(
      StyledAnimatedIconButton,
      {
        key: "remount",
        title: "Remount component",
        onClick: remountComponent,
        onAnimationEnd: () => setIsAnimating(false),
        animating: isAnimating,
        disabled: !storyId
      },
      react_default.createElement(SyncIcon, null)
    );
  }), "render")
};

// src/manager/components/preview/tools/share.tsx
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard(), 1);

// ../node_modules/qrcode.react/lib/esm/index.js
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value, "__defNormalProp");
var __spreadValues = /* @__PURE__ */ __name((a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
}, "__spreadValues");
var __objRest = /* @__PURE__ */ __name((source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
}, "__objRest");
var qrcodegen;
((qrcodegen2) => {
  var _a, _b;
  const _QrCode = (_a = class {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version3, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version3;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version3 < _a.MIN_VERSION || version3 > _a.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7)
        throw new RangeError("Mask value out of range");
      this.size = version3 * 4 + 17;
      let row = [];
      for (let i2 = 0; i2 < this.size; i2++)
        row.push(false);
      for (let i2 = 0; i2 < this.size; i2++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i2 = 0; i2 < 8; i2++) {
          this.applyMask(i2);
          this.drawFormatBits(i2);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i2;
            minPenalty = penalty;
          }
          this.applyMask(i2);
        }
      }
      assert(0 <= msk && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return _a.encodeSegments(segs, ecl);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return _a.encodeSegments([seg], ecl);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(_a.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _a.MAX_VERSION) || mask < -1 || mask > 7)
        throw new RangeError("Invalid value");
      let version3;
      let dataUsedBits;
      for (version3 = minVersion; ; version3++) {
        const dataCapacityBits2 = _a.getNumDataCodewords(version3, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version3);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version3 >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [_a.Ecc.MEDIUM, _a.Ecc.QUARTILE, _a.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= _a.getNumDataCodewords(version3, newEcl) * 8)
          ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version3), bb);
        for (const b2 of seg.getData())
          bb.push(b2);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = _a.getNumDataCodewords(version3, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
        appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length)
        dataCodewords.push(0);
      bb.forEach((b2, i2) => dataCodewords[i2 >>> 3] |= b2 << 7 - (i2 & 7));
      return new _a(version3, ecl, dataCodewords, mask);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x2, y2) {
      return 0 <= x2 && x2 < this.size && 0 <= y2 && y2 < this.size && this.modules[y2][x2];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i2 = 0; i2 < this.size; i2++) {
        this.setFunctionModule(6, i2, i2 % 2 == 0);
        this.setFunctionModule(i2, 6, i2 % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i2 = 0; i2 < numAlign; i2++) {
        for (let j2 = 0; j2 < numAlign; j2++) {
          if (!(i2 == 0 && j2 == 0 || i2 == 0 && j2 == numAlign - 1 || i2 == numAlign - 1 && j2 == 0))
            this.drawAlignmentPattern(alignPatPos[i2], alignPatPos[j2]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem2 = data;
      for (let i2 = 0; i2 < 10; i2++)
        rem2 = rem2 << 1 ^ (rem2 >>> 9) * 1335;
      const bits = (data << 10 | rem2) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i2 = 0; i2 <= 5; i2++)
        this.setFunctionModule(8, i2, getBit(bits, i2));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i2 = 9; i2 < 15; i2++)
        this.setFunctionModule(14 - i2, 8, getBit(bits, i2));
      for (let i2 = 0; i2 < 8; i2++)
        this.setFunctionModule(this.size - 1 - i2, 8, getBit(bits, i2));
      for (let i2 = 8; i2 < 15; i2++)
        this.setFunctionModule(8, this.size - 15 + i2, getBit(bits, i2));
      this.setFunctionModule(8, this.size - 8, true);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let rem2 = this.version;
      for (let i2 = 0; i2 < 12; i2++)
        rem2 = rem2 << 1 ^ (rem2 >>> 11) * 7973;
      const bits = this.version << 12 | rem2;
      assert(bits >>> 18 == 0);
      for (let i2 = 0; i2 < 18; i2++) {
        const color2 = getBit(bits, i2);
        const a2 = this.size - 11 + i2 % 3;
        const b2 = Math.floor(i2 / 3);
        this.setFunctionModule(a2, b2, color2);
        this.setFunctionModule(b2, a2, color2);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x2, y2) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x2 + dx;
          const yy = y2 + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
            this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x2, y2) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++)
          this.setFunctionModule(x2 + dx, y2 + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x2, y2, isDark) {
      this.modules[y2][x2] = isDark;
      this.isFunction[y2][x2] = true;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != _a.getNumDataCodewords(ver, ecl))
        throw new RangeError("Invalid argument");
      const numBlocks = _a.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = _a.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(_a.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = _a.reedSolomonComputeDivisor(blockEccLen);
      for (let i2 = 0, k2 = 0; i2 < numBlocks; i2++) {
        let dat = data.slice(k2, k2 + shortBlockLen - blockEccLen + (i2 < numShortBlocks ? 0 : 1));
        k2 += dat.length;
        const ecc = _a.reedSolomonComputeRemainder(dat, rsDiv);
        if (i2 < numShortBlocks)
          dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i2 = 0; i2 < blocks[0].length; i2++) {
        blocks.forEach((block, j2) => {
          if (i2 != shortBlockLen - blockEccLen || j2 >= numShortBlocks)
            result.push(block[i2]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
      if (data.length != Math.floor(_a.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i2 = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right == 6)
          right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j2 = 0; j2 < 2; j2++) {
            const x2 = right - j2;
            const upward = (right + 1 & 2) == 0;
            const y2 = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y2][x2] && i2 < data.length * 8) {
              this.modules[y2][x2] = getBit(data[i2 >>> 3], 7 - (i2 & 7));
              i2++;
            }
          }
        }
      }
      assert(i2 == data.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
      if (mask < 0 || mask > 7)
        throw new RangeError("Mask value out of range");
      for (let y2 = 0; y2 < this.size; y2++) {
        for (let x2 = 0; x2 < this.size; x2++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x2 + y2) % 2 == 0;
              break;
            case 1:
              invert = y2 % 2 == 0;
              break;
            case 2:
              invert = x2 % 3 == 0;
              break;
            case 3:
              invert = (x2 + y2) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x2 / 3) + Math.floor(y2 / 2)) % 2 == 0;
              break;
            case 5:
              invert = x2 * y2 % 2 + x2 * y2 % 3 == 0;
              break;
            case 6:
              invert = (x2 * y2 % 2 + x2 * y2 % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x2 + y2) % 2 + x2 * y2 % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y2][x2] && invert)
            this.modules[y2][x2] = !this.modules[y2][x2];
        }
      }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let result = 0;
      for (let y2 = 0; y2 < this.size; y2++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x2 = 0; x2 < this.size; x2++) {
          if (this.modules[y2][x2] == runColor) {
            runX++;
            if (runX == 5)
              result += _a.PENALTY_N1;
            else if (runX > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _a.PENALTY_N3;
            runColor = this.modules[y2][x2];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _a.PENALTY_N3;
      }
      for (let x2 = 0; x2 < this.size; x2++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y2 = 0; y2 < this.size; y2++) {
          if (this.modules[y2][x2] == runColor) {
            runY++;
            if (runY == 5)
              result += _a.PENALTY_N1;
            else if (runY > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _a.PENALTY_N3;
            runColor = this.modules[y2][x2];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _a.PENALTY_N3;
      }
      for (let y2 = 0; y2 < this.size - 1; y2++) {
        for (let x2 = 0; x2 < this.size - 1; x2++) {
          const color2 = this.modules[y2][x2];
          if (color2 == this.modules[y2][x2 + 1] && color2 == this.modules[y2 + 1][x2] && color2 == this.modules[y2 + 1][x2 + 1])
            result += _a.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules)
        dark = row.reduce((sum, color2) => sum + (color2 ? 1 : 0), dark);
      const total = this.size * this.size;
      const k2 = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(0 <= k2 && k2 <= 9);
      result += k2 * _a.PENALTY_N4;
      assert(0 <= result && result <= 2568888);
      return result;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step)
          result.splice(1, 0, pos);
        return result;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(ver) {
      if (ver < _a.MIN_VERSION || ver > _a.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7)
          result -= 36;
      }
      assert(208 <= result && result <= 29648);
      return result;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(_a.getNumRawDataModules(ver) / 8) - _a.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _a.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255)
        throw new RangeError("Degree out of range");
      let result = [];
      for (let i2 = 0; i2 < degree - 1; i2++)
        result.push(0);
      result.push(1);
      let root = 1;
      for (let i2 = 0; i2 < degree; i2++) {
        for (let j2 = 0; j2 < result.length; j2++) {
          result[j2] = _a.reedSolomonMultiply(result[j2], root);
          if (j2 + 1 < result.length)
            result[j2] ^= result[j2 + 1];
        }
        root = _a.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_2) => 0);
      for (const b2 of data) {
        const factor = b2 ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i2) => result[i2] ^= _a.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(x2, y2) {
      if (x2 >>> 8 != 0 || y2 >>> 8 != 0)
        throw new RangeError("Byte out of range");
      let z2 = 0;
      for (let i2 = 7; i2 >= 0; i2--) {
        z2 = z2 << 1 ^ (z2 >>> 7) * 285;
        z2 ^= (y2 >>> i2 & 1) * x2;
      }
      assert(z2 >>> 8 == 0);
      return z2;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
      const n3 = runHistory[1];
      assert(n3 <= this.size * 3);
      const core = n3 > 0 && runHistory[2] == n3 && runHistory[3] == n3 * 3 && runHistory[4] == n3 && runHistory[5] == n3;
      return (core && runHistory[0] >= n3 * 4 && runHistory[6] >= n3 ? 1 : 0) + (core && runHistory[6] >= n3 * 4 && runHistory[0] >= n3 ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0)
        currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  }, __name(_a, "_QrCode"), _a);
  _QrCode.MIN_VERSION = 1;
  _QrCode.MAX_VERSION = 40;
  _QrCode.PENALTY_N1 = 3;
  _QrCode.PENALTY_N2 = 3;
  _QrCode.PENALTY_N3 = 40;
  _QrCode.PENALTY_N4 = 10;
  _QrCode.ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ];
  _QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ];
  let QrCode = _QrCode;
  qrcodegen2.QrCode = _QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (let i2 = len - 1; i2 >= 0; i2--)
      bb.push(val >>> i2 & 1);
  }
  __name(appendBits, "appendBits");
  function getBit(x2, i2) {
    return (x2 >>> i2 & 1) != 0;
  }
  __name(getBit, "getBit");
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }
  __name(assert, "assert");
  const _QrSegment = (_b = class {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0)
        throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(data) {
      let bb = [];
      for (const b2 of data)
        appendBits(b2, 8, bb);
      return new _b(_b.Mode.BYTE, data.length, bb);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(digits) {
      if (!_b.isNumeric(digits))
        throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i2 = 0; i2 < digits.length; ) {
        const n3 = Math.min(digits.length - i2, 3);
        appendBits(parseInt(digits.substring(i2, i2 + n3), 10), n3 * 3 + 1, bb);
        i2 += n3;
      }
      return new _b(_b.Mode.NUMERIC, digits.length, bb);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(text) {
      if (!_b.isAlphanumeric(text))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i2;
      for (i2 = 0; i2 + 2 <= text.length; i2 += 2) {
        let temp = _b.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i2)) * 45;
        temp += _b.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i2 + 1));
        appendBits(temp, 11, bb);
      }
      if (i2 < text.length)
        appendBits(_b.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i2)), 6, bb);
      return new _b(_b.Mode.ALPHANUMERIC, text.length, bb);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(text) {
      if (text == "")
        return [];
      else if (_b.isNumeric(text))
        return [_b.makeNumeric(text)];
      else if (_b.isAlphanumeric(text))
        return [_b.makeAlphanumeric(text)];
      else
        return [_b.makeBytes(_b.toUtf8ByteArray(text))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0)
        throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7)
        appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else
        throw new RangeError("ECI assignment value out of range");
      return new _b(_b.Mode.ECI, 0, bb);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(text) {
      return _b.NUMERIC_REGEX.test(text);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(text) {
      return _b.ALPHANUMERIC_REGEX.test(text);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(segs, version3) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version3);
        if (seg.numChars >= 1 << ccbits)
          return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i2 = 0; i2 < str.length; i2++) {
        if (str.charAt(i2) != "%")
          result.push(str.charCodeAt(i2));
        else {
          result.push(parseInt(str.substring(i2 + 1, i2 + 3), 16));
          i2 += 2;
        }
      }
      return result;
    }
  }, __name(_b, "_QrSegment"), _b);
  _QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  _QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  _QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let QrSegment = _QrSegment;
  qrcodegen2.QrSegment = _QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  let QrCode;
  ((QrCode2) => {
    var _a;
    const _Ecc = (_a = class {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    }, __name(_a, "_Ecc"), _a);
    _Ecc.LOW = new _Ecc(0, 1);
    _Ecc.MEDIUM = new _Ecc(1, 0);
    _Ecc.QUARTILE = new _Ecc(2, 3);
    _Ecc.HIGH = new _Ecc(3, 2);
    let Ecc = _Ecc;
    QrCode2.Ecc = _Ecc;
  })(QrCode = qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  let QrSegment;
  ((QrSegment2) => {
    var _a;
    const _Mode = (_a = class {
      /*-- Constructor and fields --*/
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    }, __name(_a, "_Mode"), _a);
    _Mode.NUMERIC = new _Mode(1, [10, 12, 14]);
    _Mode.ALPHANUMERIC = new _Mode(2, [9, 11, 13]);
    _Mode.BYTE = new _Mode(4, [8, 16, 16]);
    _Mode.KANJI = new _Mode(8, [8, 10, 12]);
    _Mode.ECI = new _Mode(7, [0, 0, 0]);
    let Mode = _Mode;
    QrSegment2.Mode = _Mode;
  })(QrSegment = qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;
var ERROR_LEVEL_MAP = {
  L: qrcodegen_default.QrCode.Ecc.LOW,
  M: qrcodegen_default.QrCode.Ecc.MEDIUM,
  Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
  H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var DEFAULT_MINVERSION = 1;
var SPEC_MARGIN_SIZE = 4;
var DEFAULT_MARGIN_SIZE = 0;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
  const ops = [];
  modules.forEach(function(row, y2) {
    let start = null;
    row.forEach(function(cell, x2) {
      if (!cell && start !== null) {
        ops.push(
          `M${start + margin} ${y2 + margin}h${x2 - start}v1H${start + margin}z`
        );
        start = null;
        return;
      }
      if (x2 === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push(`M${x2 + margin},${y2 + margin} h1v1H${x2 + margin}z`);
        } else {
          ops.push(
            `M${start + margin},${y2 + margin} h${x2 + 1 - start}v1H${start + margin}z`
          );
        }
        return;
      }
      if (cell && start === null) {
        start = x2;
      }
    });
  });
  return ops.join("");
}
__name(generatePath, "generatePath");
function excavateModules(modules, excavation) {
  return modules.slice().map((row, y2) => {
    if (y2 < excavation.y || y2 >= excavation.y + excavation.h) {
      return row;
    }
    return row.map((cell, x2) => {
      if (x2 < excavation.x || x2 >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}
__name(excavateModules, "excavateModules");
function getImageSettings(cells, size, margin, imageSettings) {
  if (imageSettings == null) {
    return null;
  }
  const numCells = cells.length + margin * 2;
  const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  const scale = numCells / size;
  const w2 = (imageSettings.width || defaultSize) * scale;
  const h2 = (imageSettings.height || defaultSize) * scale;
  const x2 = imageSettings.x == null ? cells.length / 2 - w2 / 2 : imageSettings.x * scale;
  const y2 = imageSettings.y == null ? cells.length / 2 - h2 / 2 : imageSettings.y * scale;
  const opacity = imageSettings.opacity == null ? 1 : imageSettings.opacity;
  let excavation = null;
  if (imageSettings.excavate) {
    let floorX = Math.floor(x2);
    let floorY = Math.floor(y2);
    let ceilW = Math.ceil(w2 + x2 - floorX);
    let ceilH = Math.ceil(h2 + y2 - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }
  const crossOrigin = imageSettings.crossOrigin;
  return { x: x2, y: y2, h: h2, w: w2, excavation, opacity, crossOrigin };
}
__name(getImageSettings, "getImageSettings");
function getMarginSize(includeMargin, marginSize) {
  if (marginSize != null) {
    return Math.max(Math.floor(marginSize), 0);
  }
  return includeMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
}
__name(getMarginSize, "getMarginSize");
function useQRCode({
  value,
  level,
  minVersion,
  includeMargin,
  marginSize,
  imageSettings,
  size,
  boostLevel
}) {
  let qrcode = react_default.useMemo(() => {
    const values2 = Array.isArray(value) ? value : [value];
    const segments = values2.reduce((accum, v2) => {
      accum.push(...qrcodegen_default.QrSegment.makeSegments(v2));
      return accum;
    }, []);
    return qrcodegen_default.QrCode.encodeSegments(
      segments,
      ERROR_LEVEL_MAP[level],
      minVersion,
      void 0,
      void 0,
      boostLevel
    );
  }, [value, level, minVersion, boostLevel]);
  const { cells, margin, numCells, calculatedImageSettings } = react_default.useMemo(() => {
    let cells2 = qrcode.getModules();
    const margin2 = getMarginSize(includeMargin, marginSize);
    const numCells2 = cells2.length + margin2 * 2;
    const calculatedImageSettings2 = getImageSettings(
      cells2,
      size,
      margin2,
      imageSettings
    );
    return {
      cells: cells2,
      margin: margin2,
      numCells: numCells2,
      calculatedImageSettings: calculatedImageSettings2
    };
  }, [qrcode, size, imageSettings, includeMargin, marginSize]);
  return {
    qrcode,
    margin,
    cells,
    numCells,
    calculatedImageSettings
  };
}
__name(useQRCode, "useQRCode");
var SUPPORTS_PATH2D = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e2) {
    return false;
  }
  return true;
}();
var QRCodeCanvas = react_default.forwardRef(
  /* @__PURE__ */ __name(function QRCodeCanvas2(props, forwardedRef) {
    const _a = props, {
      value,
      size = DEFAULT_SIZE,
      level = DEFAULT_LEVEL,
      bgColor = DEFAULT_BGCOLOR,
      fgColor = DEFAULT_FGCOLOR,
      includeMargin = DEFAULT_INCLUDEMARGIN,
      minVersion = DEFAULT_MINVERSION,
      boostLevel,
      marginSize,
      imageSettings
    } = _a, extraProps = __objRest(_a, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "marginSize",
      "imageSettings"
    ]);
    const _b = extraProps, { style } = _b, otherProps = __objRest(_b, ["style"]);
    const imgSrc = imageSettings == null ? void 0 : imageSettings.src;
    const _canvas = react_default.useRef(null);
    const _image = react_default.useRef(null);
    const setCanvasRef = react_default.useCallback(
      (node) => {
        _canvas.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef]
    );
    const [isImgLoaded, setIsImageLoaded] = react_default.useState(false);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
      value,
      level,
      minVersion,
      boostLevel,
      includeMargin,
      marginSize,
      imageSettings,
      size
    });
    react_default.useEffect(() => {
      if (_canvas.current != null) {
        const canvas = _canvas.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return;
        }
        let cellsToDraw = cells;
        const image = _image.current;
        const haveImageToRender = calculatedImageSettings != null && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
        if (haveImageToRender) {
          if (calculatedImageSettings.excavation != null) {
            cellsToDraw = excavateModules(
              cells,
              calculatedImageSettings.excavation
            );
          }
        }
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.height = canvas.width = size * pixelRatio;
        const scale = size / numCells * pixelRatio;
        ctx.scale(scale, scale);
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, numCells, numCells);
        ctx.fillStyle = fgColor;
        if (SUPPORTS_PATH2D) {
          ctx.fill(new Path2D(generatePath(cellsToDraw, margin)));
        } else {
          cells.forEach(function(row, rdx) {
            row.forEach(function(cell, cdx) {
              if (cell) {
                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
              }
            });
          });
        }
        if (calculatedImageSettings) {
          ctx.globalAlpha = calculatedImageSettings.opacity;
        }
        if (haveImageToRender) {
          ctx.drawImage(
            image,
            calculatedImageSettings.x + margin,
            calculatedImageSettings.y + margin,
            calculatedImageSettings.w,
            calculatedImageSettings.h
          );
        }
      }
    });
    react_default.useEffect(() => {
      setIsImageLoaded(false);
    }, [imgSrc]);
    const canvasStyle = __spreadValues({ height: size, width: size }, style);
    let img = null;
    if (imgSrc != null) {
      img = react_default.createElement(
        "img",
        {
          src: imgSrc,
          key: imgSrc,
          style: { display: "none" },
          onLoad: /* @__PURE__ */ __name(() => {
            setIsImageLoaded(true);
          }, "onLoad"),
          ref: _image,
          crossOrigin: calculatedImageSettings == null ? void 0 : calculatedImageSettings.crossOrigin
        }
      );
    }
    return react_default.createElement(react_default.Fragment, null, react_default.createElement(
      "canvas",
      __spreadValues({
        style: canvasStyle,
        height: size,
        width: size,
        ref: setCanvasRef,
        role: "img"
      }, otherProps)
    ), img);
  }, "QRCodeCanvas2")
);
QRCodeCanvas.displayName = "QRCodeCanvas";
var QRCodeSVG = react_default.forwardRef(
  /* @__PURE__ */ __name(function QRCodeSVG2(props, forwardedRef) {
    const _a = props, {
      value,
      size = DEFAULT_SIZE,
      level = DEFAULT_LEVEL,
      bgColor = DEFAULT_BGCOLOR,
      fgColor = DEFAULT_FGCOLOR,
      includeMargin = DEFAULT_INCLUDEMARGIN,
      minVersion = DEFAULT_MINVERSION,
      boostLevel,
      title,
      marginSize,
      imageSettings
    } = _a, otherProps = __objRest(_a, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings"
    ]);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
      value,
      level,
      minVersion,
      boostLevel,
      includeMargin,
      marginSize,
      imageSettings,
      size
    });
    let cellsToDraw = cells;
    let image = null;
    if (imageSettings != null && calculatedImageSettings != null) {
      if (calculatedImageSettings.excavation != null) {
        cellsToDraw = excavateModules(
          cells,
          calculatedImageSettings.excavation
        );
      }
      image = react_default.createElement(
        "image",
        {
          href: imageSettings.src,
          height: calculatedImageSettings.h,
          width: calculatedImageSettings.w,
          x: calculatedImageSettings.x + margin,
          y: calculatedImageSettings.y + margin,
          preserveAspectRatio: "none",
          opacity: calculatedImageSettings.opacity,
          crossOrigin: calculatedImageSettings.crossOrigin
        }
      );
    }
    const fgPath = generatePath(cellsToDraw, margin);
    return react_default.createElement(
      "svg",
      __spreadValues({
        height: size,
        width: size,
        viewBox: `0 0 ${numCells} ${numCells}`,
        ref: forwardedRef,
        role: "img"
      }, otherProps),
      !!title && react_default.createElement("title", null, title),
      react_default.createElement(
        "path",
        {
          fill: bgColor,
          d: `M0,0 h${numCells}v${numCells}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      react_default.createElement("path", { fill: fgColor, d: fgPath, shapeRendering: "crispEdges" }),
      image
    );
  }, "QRCodeSVG2")
);
QRCodeSVG.displayName = "QRCodeSVG";

// src/manager/container/Menu.tsx
var focusableUIElements = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
};
var Key = styled.span(({ theme }) => ({
  display: "inline-block",
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  background: theme.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
  color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none",
  padding: "0 6px"
}));
var KeyChild = styled.code(({ theme }) => ({
  padding: 0,
  fontFamily: theme.typography.fonts.base,
  verticalAlign: "middle",
  "& + &": {
    marginLeft: 6
  }
}));
var Shortcut = /* @__PURE__ */ __name(({ keys }) => react_default.createElement(Key, null, keys.map((key) => react_default.createElement(KeyChild, { key }, shortcutToHumanString([key])))), "Shortcut");
var useMenu = /* @__PURE__ */ __name((state, api, showToolbar, isFullscreen, isPanelShown, isNavShown, enableShortcuts) => {
  const shortcutKeys = api.getShortcutKeys();
  const about = useMemo(
    () => ({
      id: "about",
      title: "About your Storybook",
      onClick: /* @__PURE__ */ __name(() => api.changeSettingsTab("about"), "onClick"),
      icon: react_default.createElement(InfoIcon, null)
    }),
    [api]
  );
  const documentation = useMemo(() => {
    const docsUrl = api.getDocsUrl({ versioned: true, renderer: true });
    return {
      id: "documentation",
      title: "Documentation",
      href: docsUrl,
      icon: react_default.createElement(ShareAltIcon, null)
    };
  }, [api]);
  const whatsNewNotificationsEnabled = state.whatsNewData?.status === "SUCCESS" && !state.disableWhatsNewNotifications;
  const isWhatsNewUnread = api.isWhatsNewUnread();
  const whatsNew = useMemo(
    () => ({
      id: "whats-new",
      title: "What's new?",
      onClick: /* @__PURE__ */ __name(() => api.changeSettingsTab("whats-new"), "onClick"),
      right: whatsNewNotificationsEnabled && isWhatsNewUnread && react_default.createElement(Badge, { status: "positive" }, "Check it out"),
      icon: react_default.createElement(WandIcon, null)
    }),
    [api, whatsNewNotificationsEnabled, isWhatsNewUnread]
  );
  const shortcuts = useMemo(
    () => ({
      id: "shortcuts",
      title: "Keyboard shortcuts",
      onClick: /* @__PURE__ */ __name(() => api.changeSettingsTab("shortcuts"), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.shortcutsPage }) : null,
      icon: react_default.createElement(CommandIcon, null)
    }),
    [api, enableShortcuts, shortcutKeys.shortcutsPage]
  );
  const sidebarToggle = useMemo(
    () => ({
      id: "S",
      title: "Show sidebar",
      onClick: /* @__PURE__ */ __name(() => api.toggleNav(), "onClick"),
      active: isNavShown,
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.toggleNav }) : null,
      icon: isNavShown ? react_default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, isNavShown]
  );
  const toolbarToogle = useMemo(
    () => ({
      id: "T",
      title: "Show toolbar",
      onClick: /* @__PURE__ */ __name(() => api.toggleToolbar(), "onClick"),
      active: showToolbar,
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.toolbar }) : null,
      icon: showToolbar ? react_default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, showToolbar]
  );
  const addonsToggle = useMemo(
    () => ({
      id: "A",
      title: "Show addons panel",
      onClick: /* @__PURE__ */ __name(() => api.togglePanel(), "onClick"),
      active: isPanelShown,
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.togglePanel }) : null,
      icon: isPanelShown ? react_default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, isPanelShown]
  );
  const addonsOrientationToggle = useMemo(
    () => ({
      id: "D",
      title: "Change addons orientation",
      onClick: /* @__PURE__ */ __name(() => api.togglePanelPosition(), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.panelPosition }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const fullscreenToggle = useMemo(
    () => ({
      id: "F",
      title: "Go full screen",
      onClick: /* @__PURE__ */ __name(() => api.toggleFullscreen(), "onClick"),
      active: isFullscreen,
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.fullScreen }) : null,
      icon: isFullscreen ? react_default.createElement(CheckIcon, null) : null
    }),
    [api, enableShortcuts, shortcutKeys, isFullscreen]
  );
  const searchToggle = useMemo(
    () => ({
      id: "/",
      title: "Search",
      onClick: /* @__PURE__ */ __name(() => api.focusOnUIElement(focusableUIElements.storySearchField), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.search }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const up = useMemo(
    () => ({
      id: "up",
      title: "Previous component",
      onClick: /* @__PURE__ */ __name(() => api.jumpToComponent(-1), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.prevComponent }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const down = useMemo(
    () => ({
      id: "down",
      title: "Next component",
      onClick: /* @__PURE__ */ __name(() => api.jumpToComponent(1), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.nextComponent }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const prev = useMemo(
    () => ({
      id: "prev",
      title: "Previous story",
      onClick: /* @__PURE__ */ __name(() => api.jumpToStory(-1), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.prevStory }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const next = useMemo(
    () => ({
      id: "next",
      title: "Next story",
      onClick: /* @__PURE__ */ __name(() => api.jumpToStory(1), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.nextStory }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const collapse = useMemo(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: /* @__PURE__ */ __name(() => api.emit(STORIES_COLLAPSE_ALL), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.collapseAll }) : null
    }),
    [api, enableShortcuts, shortcutKeys]
  );
  const getAddonsShortcuts = useCallback(() => {
    const addonsShortcuts = api.getAddonsShortcuts();
    const keys = shortcutKeys;
    return Object.entries(addonsShortcuts).filter(([_2, { showInMenu }]) => showInMenu).map(([actionName, { label, action }]) => ({
      id: actionName,
      title: label,
      onClick: /* @__PURE__ */ __name(() => action(), "onClick"),
      right: enableShortcuts ? react_default.createElement(Shortcut, { keys: keys[actionName] }) : null
    }));
  }, [api, enableShortcuts, shortcutKeys]);
  return useMemo(
    () => [
      [
        about,
        ...state.whatsNewData?.status === "SUCCESS" ? [whatsNew] : [],
        documentation,
        ...enableShortcuts ? [shortcuts] : []
      ],
      [
        sidebarToggle,
        toolbarToogle,
        addonsToggle,
        addonsOrientationToggle,
        fullscreenToggle,
        searchToggle,
        up,
        down,
        prev,
        next,
        collapse
      ],
      getAddonsShortcuts()
    ],
    [
      about,
      state,
      whatsNew,
      documentation,
      shortcuts,
      sidebarToggle,
      toolbarToogle,
      addonsToggle,
      addonsOrientationToggle,
      fullscreenToggle,
      searchToggle,
      up,
      down,
      prev,
      next,
      collapse,
      getAddonsShortcuts,
      enableShortcuts
    ]
  );
}, "useMenu");

// src/manager/components/preview/tools/share.tsx
var { PREVIEW_URL, document: document2 } = scope;
var mapper3 = /* @__PURE__ */ __name(({ state }) => {
  const { storyId, refId, refs } = state;
  const { location } = document2;
  const ref = refs[refId];
  let baseUrl = `${location.origin}${location.pathname}`;
  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }
  return {
    refId,
    baseUrl: ref ? `${ref.url}/iframe.html` : PREVIEW_URL || `${baseUrl}iframe.html`,
    storyId,
    queryParams: state.customQueryParams
  };
}, "mapper");
var QRContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  padding: 8,
  maxWidth: 200
}));
var QRImageContainer = styled.div(() => ({
  width: 64,
  height: 64,
  marginRight: 12,
  backgroundColor: "white",
  padding: 2
}));
var QRImage = /* @__PURE__ */ __name(({ value }) => {
  const theme = useTheme();
  return react_default.createElement(QRImageContainer, null, react_default.createElement(QRCodeSVG, { value, marginSize: 0, size: 60, fgColor: theme.color.darkest }));
}, "QRImage");
var QRContent = styled.div(() => ({}));
var QRTitle = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s1,
  marginBottom: 4
}));
var QRDescription = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s1,
  color: theme.textMutedColor
}));
function ShareMenu({
  baseUrl,
  storyId,
  queryParams,
  qrUrl,
  isDevelopment
}) {
  const api = useStorybookApi();
  const shortcutKeys = api.getShortcutKeys();
  const enableShortcuts = !!shortcutKeys;
  const [copied, setCopied] = useState(false);
  const copyStoryLink = shortcutKeys?.copyStoryLink;
  const links = useMemo(() => {
    const copyTitle = copied ? "Copied!" : "Copy story link";
    const baseLinks = [
      [
        {
          id: "copy-link",
          title: copyTitle,
          icon: react_default.createElement(LinkIcon, null),
          right: enableShortcuts ? react_default.createElement(Shortcut, { keys: copyStoryLink }) : null,
          onClick: /* @__PURE__ */ __name(() => {
            (0, import_copy_to_clipboard.default)(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2e3);
          }, "onClick")
        },
        {
          id: "open-new-tab",
          title: "Open in isolation mode",
          icon: react_default.createElement(BugIcon, null),
          onClick: /* @__PURE__ */ __name(() => {
            const href = getStoryHref(baseUrl, storyId, queryParams);
            window.open(href, "_blank", "noopener,noreferrer");
          }, "onClick")
        }
      ]
    ];
    baseLinks.push([
      {
        id: "qr-section",
        // @ts-expect-error (non strict)
        content: react_default.createElement(QRContainer, null, react_default.createElement(QRImage, { value: qrUrl }), react_default.createElement(QRContent, null, react_default.createElement(QRTitle, null, "Scan to open"), react_default.createElement(QRDescription, null, isDevelopment ? "Device must be on the same network." : "View story on another device.")))
      }
    ]);
    return baseLinks;
  }, [baseUrl, storyId, queryParams, copied, qrUrl, enableShortcuts, copyStoryLink, isDevelopment]);
  return react_default.createElement(TooltipLinkList, { links, style: { width: 210 } });
}
__name(ShareMenu, "ShareMenu");
var shareTool = {
  title: "share",
  id: "share",
  type: types.TOOL,
  match: /* @__PURE__ */ __name(({ viewMode, tabId }) => viewMode === "story" && !tabId, "match"),
  render: /* @__PURE__ */ __name(() => {
    return react_default.createElement(Consumer, { filter: mapper3 }, ({ baseUrl, storyId, queryParams }) => {
      const isDevelopment = scope.CONFIG_TYPE === "DEVELOPMENT";
      const storyUrl = scope.STORYBOOK_NETWORK_ADDRESS ? new URL(window.location.search, scope.STORYBOOK_NETWORK_ADDRESS).href : window.location.href;
      return storyId ? react_default.createElement(
        WithTooltip,
        {
          hasChrome: true,
          placement: "bottom",
          tooltip: react_default.createElement(ShareMenu, { ...{ baseUrl, storyId, queryParams, qrUrl: storyUrl, isDevelopment } })
        },
        react_default.createElement(IconButton, { title: "Share" }, react_default.createElement(ShareIcon, null))
      ) : null;
    });
  }, "render")
};

// src/manager/container/Preview.tsx
var defaultTabs = [createCanvasTab()];
var defaultTools = [menuTool, remountTool, zoomTool];
var defaultToolsExtra = [addonsTool, fullScreenTool, shareTool, openInEditorTool];
var emptyTabsList = [];
var memoizedTabs = (0, import_memoizerific.default)(1)(
  (_2, tabElements, parameters, showTabs) => showTabs ? filterTabs([...defaultTabs, ...Object.values(tabElements)], parameters) : emptyTabsList
);
var memoizedTools = (0, import_memoizerific.default)(1)(
  (_2, toolElements, filterProps) => filterToolsSide([...defaultTools, ...Object.values(toolElements)], ...filterProps)
);
var memoizedExtra = (0, import_memoizerific.default)(1)(
  (_2, extraElements, filterProps) => filterToolsSide([...defaultToolsExtra, ...Object.values(extraElements)], ...filterProps)
);
var memoizedWrapper = (0, import_memoizerific.default)(1)((_2, previewElements) => [
  ...defaultWrappers,
  ...Object.values(previewElements)
]);
var { PREVIEW_URL: PREVIEW_URL2 } = scope;
var splitTitleAddExtraSpace = /* @__PURE__ */ __name((input) => input.split("/").join(" / ").replace(/\s\s/, " "), "splitTitleAddExtraSpace");
var getDescription = /* @__PURE__ */ __name((item) => {
  if (item?.type === "story" || item?.type === "docs") {
    const { title, name } = item;
    return title && name ? splitTitleAddExtraSpace(`${title} - ${name} \u22C5 Storybook`) : "Storybook";
  }
  return item?.name ? `${item.name} \u22C5 Storybook` : "Storybook";
}, "getDescription");
var mapper4 = /* @__PURE__ */ __name(({
  api,
  state
  // @ts-expect-error (non strict)
}) => {
  const { layout, location, customQueryParams, storyId, refs, viewMode, path, refId } = state;
  const entry = api.getData(storyId, refId);
  const tabsList = Object.values(api.getElements(Addon_TypesEnum.TAB));
  const wrapperList = Object.values(api.getElements(Addon_TypesEnum.PREVIEW));
  const toolsList = Object.values(api.getElements(Addon_TypesEnum.TOOL));
  const toolsExtraList = Object.values(api.getElements(Addon_TypesEnum.TOOLEXTRA));
  const tabId = api.getQueryParam("tab");
  const tools = memoizedTools(toolsList.length, api.getElements(Addon_TypesEnum.TOOL), [
    entry,
    viewMode,
    location,
    path,
    // @ts-expect-error (non strict)
    tabId
  ]);
  const toolsExtra = memoizedExtra(
    toolsExtraList.length,
    api.getElements(Addon_TypesEnum.TOOLEXTRA),
    // @ts-expect-error (non strict)
    [entry, viewMode, location, path, tabId]
  );
  return {
    api,
    entry,
    options: layout,
    description: getDescription(entry),
    viewMode,
    refs,
    storyId,
    baseUrl: PREVIEW_URL2 || "iframe.html",
    queryParams: customQueryParams,
    tools,
    toolsExtra,
    tabs: memoizedTabs(
      tabsList.length,
      api.getElements(Addon_TypesEnum.TAB),
      entry ? entry.parameters : void 0,
      layout.showTabs
    ),
    wrappers: memoizedWrapper(
      wrapperList.length,
      api.getElements(Addon_TypesEnum.PREVIEW)
    ),
    tabId
  };
}, "mapper");
var PreviewConnected = react_default.memo(/* @__PURE__ */ __name(function PreviewConnected2(props) {
  return react_default.createElement(Consumer, { filter: mapper4 }, (fromState) => react_default.createElement(Preview, { ...props, ...fromState }));
}, "PreviewConnected"));
var Preview_default = PreviewConnected;

// src/manager/hooks/useDebounce.ts
function useDebounce(value, delay2) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay2);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay2]);
  return debouncedValue;
}
__name(useDebounce, "useDebounce");

// src/manager/hooks/useMeasure.tsx
function useMeasure() {
  const [dimensions, setDimensions] = react_default.useState({
    width: null,
    height: null
  });
  const prevObserver = react_default.useRef(null);
  const customRef = react_default.useCallback((node) => {
    if (prevObserver.current) {
      prevObserver.current.disconnect();
      prevObserver.current = null;
    }
    if (node?.nodeType === Node.ELEMENT_NODE) {
      const observer = new ResizeObserver(([entry]) => {
        if (entry && entry.borderBoxSize) {
          const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
          setDimensions({ width, height });
        }
      });
      observer.observe(node);
      prevObserver.current = observer;
    }
  }, []);
  return [customRef, dimensions];
}
__name(useMeasure, "useMeasure");

// ../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo2(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  function memoizedFunction() {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = /* @__PURE__ */ __name((str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      }, "pad");
      console.info(
        `%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  }
  __name(memoizedFunction, "memoizedFunction");
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
__name(memo2, "memo");
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
__name(notUndefined, "notUndefined");
var approxEqual = /* @__PURE__ */ __name((a2, b2) => Math.abs(a2 - b2) < 1.01, "approxEqual");
var debounce = /* @__PURE__ */ __name((targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
}, "debounce");

// ../node_modules/@tanstack/virtual-core/dist/esm/index.js
var getRect = /* @__PURE__ */ __name((element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
}, "getRect");
var defaultKeyExtractor = /* @__PURE__ */ __name((index) => index, "defaultKeyExtractor");
var defaultRangeExtractor = /* @__PURE__ */ __name((range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i2 = start; i2 <= end; i2++) {
    arr.push(i2);
  }
  return arr;
}, "defaultRangeExtractor");
var observeElementRect = /* @__PURE__ */ __name((instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = /* @__PURE__ */ __name((rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  }, "handler");
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = /* @__PURE__ */ __name(() => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    }, "run");
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
}, "observeElementRect");
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = /* @__PURE__ */ __name((instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = /* @__PURE__ */ __name((isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  }, "createHandler");
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
}, "observeElementOffset");
var measureElement = /* @__PURE__ */ __name((element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, "measureElement");
var elementScroll = /* @__PURE__ */ __name((offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
}, "elementScroll");
var _Virtualizer = class _Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get2 = /* @__PURE__ */ __name(() => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = /* @__PURE__ */ __name(() => {
              this._measureElement(entry.target, entry);
            }, "run");
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      }, "get");
      return {
        disconnect: /* @__PURE__ */ __name(() => {
          var _a;
          (_a = get2()) == null ? void 0 : _a.disconnect();
          _ro = null;
        }, "disconnect"),
        observe: /* @__PURE__ */ __name((target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        }, "observe"),
        unobserve: /* @__PURE__ */ __name((target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.unobserve(target);
        }, "unobserve")
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: /* @__PURE__ */ __name(() => {
        }, "onChange"),
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo2(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: /* @__PURE__ */ __name(() => this.options.debug, "debug"),
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d2) => d2());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m2 = index - 1; m2 >= 0; m2--) {
        const measurement = measurements[m2];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a2, b2) => {
        if (a2.end === b2.end) {
          return a2.index - b2.index;
        }
        return a2.end - b2.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo2(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo2(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i2 = min; i2 < count; i2++) {
          const key = getItemKey(i2);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i2 - 1] : this.getFurthestMeasurement(measurements, i2);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i2);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i2 % this.options.lanes;
          measurements[i2] = {
            index: i2,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: /* @__PURE__ */ __name(() => this.options.debug, "debug")
      }
    );
    this.calculateRange = memo2(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset,
          lanes
        }) : null;
      },
      {
        key: false,
        debug: /* @__PURE__ */ __name(() => this.options.debug, "debug")
      }
    );
    this.getVirtualIndexes = memo2(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count
        });
      },
      {
        key: false,
        debug: /* @__PURE__ */ __name(() => this.options.debug, "debug")
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index = this.indexFromElement(node);
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index, size) => {
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          if (false) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo2(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k2 = 0, len = indexes.length; k2 < len; k2++) {
          const i2 = indexes[k2];
          const measurement = measurements[i2];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: /* @__PURE__ */ __name(() => this.options.debug, "debug")
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size) / 2;
      } else if (align === "end") {
        toOffset -= size;
      }
      const maxOffset = this.getTotalSize() + this.options.scrollMargin - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.measurementsCache[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      index = Math.max(0, Math.min(index, this.options.count - 1));
      let attempts = 0;
      const maxAttempts = 10;
      const tryScroll = /* @__PURE__ */ __name((currentAlign) => {
        if (!this.targetWindow) return;
        const offsetInfo = this.getOffsetForIndex(index, currentAlign);
        if (!offsetInfo) {
          console.warn("Failed to get offset for index:", index);
          return;
        }
        const [offset, align] = offsetInfo;
        this._scrollToOffset(offset, { adjustments: void 0, behavior });
        this.targetWindow.requestAnimationFrame(() => {
          const currentOffset = this.getScrollOffset();
          const afterInfo = this.getOffsetForIndex(index, align);
          if (!afterInfo) {
            console.warn("Failed to get offset for index:", index);
            return;
          }
          if (!approxEqual(afterInfo[0], currentOffset)) {
            scheduleRetry(align);
          }
        });
      }, "tryScroll");
      const scheduleRetry = /* @__PURE__ */ __name((align) => {
        if (!this.targetWindow) return;
        attempts++;
        if (attempts < maxAttempts) {
          if (false) {
            console.info("Schedule retry", attempts, maxAttempts);
          }
          this.targetWindow.requestAnimationFrame(() => tryScroll(align));
        } else {
          console.warn(
            `Failed to scroll to index ${index} after ${maxAttempts} attempts.`
          );
        }
      }, "scheduleRetry");
      tryScroll(initialAlign);
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        end = ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0;
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
};
__name(_Virtualizer, "Virtualizer");
var Virtualizer = _Virtualizer;
var findNearestBinarySearch = /* @__PURE__ */ __name((low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
}, "findNearestBinarySearch");
function calculateRange({
  measurements,
  outerSize,
  scrollOffset,
  lanes
}) {
  const lastIndex = measurements.length - 1;
  const getOffset = /* @__PURE__ */ __name((index) => measurements[index].start, "getOffset");
  if (measurements.length <= lanes) {
    return {
      startIndex: 0,
      endIndex: lastIndex
    };
  }
  let startIndex = findNearestBinarySearch(
    0,
    lastIndex,
    getOffset,
    scrollOffset
  );
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}
__name(calculateRange, "calculateRange");

// ../node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;
function useVirtualizerBase(options2) {
  const rerender = useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options2,
    onChange: /* @__PURE__ */ __name((instance2, sync) => {
      var _a;
      if (sync) {
        flushSync(rerender);
      } else {
        rerender();
      }
      (_a = options2.onChange) == null ? void 0 : _a.call(options2, instance2, sync);
    }, "onChange")
  };
  const [instance] = useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
__name(useVirtualizerBase, "useVirtualizerBase");
function useVirtualizer(options2) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options2
  });
}
__name(useVirtualizer, "useVirtualizer");

// src/manager/components/sidebar/FIleSearchList.utils.tsx
var useArrowKeyNavigation = /* @__PURE__ */ __name(({
  parentRef,
  rowVirtualizer,
  selectedItem
}) => {
  useEffect(() => {
    const handleArrowKeys = /* @__PURE__ */ __name((event) => {
      if (!parentRef.current) {
        return;
      }
      const maxIndex = rowVirtualizer.options.count;
      const activeElement = document.activeElement;
      const rowIndex = parseInt(activeElement.getAttribute("data-index") || "-1", 10);
      const isActiveElementInput = activeElement.tagName === "INPUT";
      const getFirstElement = /* @__PURE__ */ __name(() => document.querySelector('[data-index="0"]'), "getFirstElement");
      const getLastElement = /* @__PURE__ */ __name(() => document.querySelector(`[data-index="${maxIndex - 1}"]`), "getLastElement");
      if (event.code === "ArrowDown" && activeElement) {
        event.stopPropagation();
        if (isActiveElementInput) {
          getFirstElement()?.focus();
          return;
        }
        if (rowIndex === maxIndex - 1) {
          flushSync(() => {
            rowVirtualizer.scrollToIndex(0, { align: "start" });
          });
          setTimeout(() => {
            getFirstElement()?.focus();
          }, 100);
          return;
        }
        if (selectedItem === rowIndex) {
          const firstSubListItem = document.querySelector(
            `[data-index-position="${selectedItem}_first"]`
          );
          firstSubListItem?.focus();
          return;
        }
        if (selectedItem !== null) {
          const isLastElementSelected = activeElement.getAttribute("data-index-position")?.includes("last");
          if (isLastElementSelected) {
            const nextElement2 = document.querySelector(
              `[data-index="${selectedItem + 1}"]`
            );
            nextElement2?.focus();
            return;
          }
        }
        const nextElement = activeElement.nextElementSibling;
        nextElement?.focus();
      }
      if (event.code === "ArrowUp" && activeElement) {
        if (isActiveElementInput) {
          flushSync(() => {
            rowVirtualizer.scrollToIndex(maxIndex - 1, { align: "start" });
          });
          setTimeout(() => {
            getLastElement()?.focus();
          }, 100);
          return;
        }
        if (selectedItem !== null) {
          const isLastElementSelected = activeElement.getAttribute("data-index-position")?.includes("first");
          if (isLastElementSelected) {
            const prevElement = document.querySelector(
              `[data-index="${selectedItem}"]`
            );
            prevElement?.focus();
            return;
          }
        }
        const previousElement = activeElement.previousElementSibling;
        previousElement?.focus();
      }
    }, "handleArrowKeys");
    document.addEventListener("keydown", handleArrowKeys, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleArrowKeys, { capture: true });
    };
  }, [rowVirtualizer, selectedItem, parentRef]);
}, "useArrowKeyNavigation");

// src/manager/components/sidebar/FileList.tsx
var FileListWrapper = styled("div")(({ theme }) => ({
  marginTop: "-16px",
  // after element which fades out the list
  "&::after": {
    content: '""',
    position: "fixed",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
    height: "80px",
    background: `linear-gradient(${rgba(theme.barBg, 0)} 10%, ${theme.barBg} 80%)`
  }
}));
var FileList = styled("div")(({ theme }) => ({
  height: "280px",
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  position: "relative",
  "::-webkit-scrollbar": {
    display: "none"
  }
}));
var FileListLi = styled("li")(({ theme }) => ({
  ":focus-visible": {
    outline: "none",
    ".file-list-item": {
      borderRadius: "4px",
      background: theme.base === "dark" ? "rgba(255,255,255,.1)" : theme.color.mediumlight,
      "> svg": {
        display: "flex"
      }
    }
  }
}));
var FileListItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative"
}));
var FileListItemContentWrapper = styled.div(({ theme, selected, disabled, error }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px",
  cursor: "pointer",
  borderRadius: "4px",
  ...selected && {
    borderRadius: "4px",
    background: theme.base === "dark" ? "rgba(255,255,255,.1)" : theme.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  ...disabled && {
    cursor: "not-allowed",
    div: {
      color: `${theme.color.mediumdark} !important`
    }
  },
  ...error && {
    background: theme.base === "light" ? "#00000011" : "#00000033"
  },
  "&:hover": {
    background: error ? "#00000022" : theme.base === "dark" ? "rgba(255,255,255,.1)" : theme.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  }
}));
var FileListUl = styled("ul")({
  margin: 0,
  padding: "0 0 0 0",
  width: "100%",
  position: "relative"
});
var FileListItemContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "calc(100% - 50px)"
});
var FileListIconWrapper = styled("div")(({ theme, error }) => ({
  color: error ? theme.color.negativeText : theme.color.secondary
}));
var FileListItemLabel = styled("div")(({ theme, error }) => ({
  color: error ? theme.color.negativeText : theme.base === "dark" ? theme.color.lighter : theme.color.darkest,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
}));
var FileListItemPath = styled("div")(({ theme }) => ({
  color: theme.color.mediumdark,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
}));
var FileListExport = styled("ul")(({ theme }) => ({
  margin: 0,
  padding: 0
}));
var FileListItemExport = styled("li")(({ theme, error }) => ({
  padding: "8px 16px 8px 16px",
  marginLeft: "30px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "4px",
  ":focus-visible": {
    outline: "none"
  },
  ...error && {
    background: "#F9ECEC",
    color: theme.color.negativeText
  },
  "&:hover,:focus-visible": {
    background: error ? "#F9ECEC" : theme.base === "dark" ? "rgba(255, 255, 255, 0.1)" : theme.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  "> div > svg": {
    color: error ? theme.color.negativeText : theme.color.secondary
  }
}));
var FileListItemExportName = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "calc(100% - 20px)"
}));
var FileListItemExportNameContent = styled("span")(({ theme }) => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "calc(100% - 160px)",
  display: "inline-block"
}));
var DefaultExport = styled("span")(({ theme }) => ({
  display: "inline-block",
  padding: `1px ${theme.appBorderRadius}px`,
  borderRadius: "2px",
  fontSize: "10px",
  color: theme.base === "dark" ? theme.color.lightest : "#727272",
  backgroundColor: theme.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "#F2F4F5"
}));
var NoResults = styled("div")(({ theme }) => ({
  textAlign: "center",
  maxWidth: "334px",
  margin: "16px auto 50px auto",
  fontSize: "14px",
  color: theme.base === "dark" ? theme.color.lightest : "#000"
}));
var NoResultsDescription = styled("p")(({ theme }) => ({
  margin: 0,
  color: theme.base === "dark" ? theme.color.defaultText : theme.color.mediumdark
}));

// src/manager/components/sidebar/FileSearchListSkeleton.tsx
var FileListItemContentWrapperSkeleton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px"
}));
var FileListItemContentSkeleton = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  borderRadius: "3px"
});
var FileListIconWrapperSkeleton = styled.div(({ theme }) => ({
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginTop: "1px",
  background: theme.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${theme.animation.glow} 1.5s ease-in-out infinite`
}));
var FileListItemSkeleton = styled.div(({ theme }) => ({
  height: "16px",
  borderRadius: "3px",
  background: theme.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
  width: "100%",
  maxWidth: "100%",
  "+ div": {
    marginTop: "6px"
  }
}));
var FileSearchListLoadingSkeleton = /* @__PURE__ */ __name(() => {
  return react_default.createElement(FileList, null, [1, 2, 3].map((result) => react_default.createElement(FileListItem, { key: result }, react_default.createElement(FileListItemContentWrapperSkeleton, null, react_default.createElement(FileListIconWrapperSkeleton, null), react_default.createElement(FileListItemContentSkeleton, null, react_default.createElement(FileListItemSkeleton, { style: { width: "90px" } }), react_default.createElement(FileListItemSkeleton, { style: { width: "300px" } }))))));
}, "FileSearchListLoadingSkeleton");

// src/manager/components/sidebar/FileSearchList.tsx
var ChevronRightIconStyled = styled(ChevronRightIcon)(({ theme }) => ({
  display: "none",
  alignSelf: "center",
  color: theme.color.mediumdark
}));
var ChevronDownIconStyled = styled(ChevronDownIcon)(({ theme }) => ({
  display: "none",
  alignSelf: "center",
  color: theme.color.mediumdark
}));
var FileSearchList = memo(/* @__PURE__ */ __name(function FileSearchList2({
  isLoading,
  searchResults,
  onNewStory,
  errorItemId
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const parentRef = react_default.useRef();
  const sortedSearchResults = useMemo(() => {
    return [...searchResults ?? []]?.sort((a2, b2) => {
      const isALowPriority = a2.exportedComponents === null || a2.exportedComponents?.length === 0;
      const hasAStory = a2.storyFileExists;
      const isBLowPriority = b2.exportedComponents === null || b2.exportedComponents?.length === 0;
      const hasBStory = b2.storyFileExists;
      if (hasAStory && !hasBStory) {
        return -1;
      }
      if (hasBStory && !hasAStory) {
        return 1;
      }
      if (isALowPriority && !isBLowPriority) {
        return 1;
      }
      if (!isALowPriority && isBLowPriority) {
        return -1;
      }
      return 0;
    });
  }, [searchResults]);
  const count = searchResults?.length || 0;
  const rowVirtualizer = useVirtualizer({
    count,
    // @ts-expect-error (non strict)
    getScrollElement: /* @__PURE__ */ __name(() => parentRef.current, "getScrollElement"),
    paddingStart: 16,
    paddingEnd: 40,
    estimateSize: /* @__PURE__ */ __name(() => 54, "estimateSize"),
    overscan: 2
  });
  useArrowKeyNavigation({ rowVirtualizer, parentRef, selectedItem });
  const handleFileItemSelection = useCallback(
    ({ virtualItem, searchResult, itemId }) => {
      if (searchResult?.exportedComponents?.length > 1) {
        setSelectedItem((sItem) => {
          if (sItem === virtualItem.index) {
            return null;
          }
          return virtualItem.index;
        });
      } else if (searchResult?.exportedComponents?.length === 1) {
        onNewStory({
          componentExportName: searchResult.exportedComponents[0].name,
          componentFilePath: searchResult.filepath,
          componentIsDefaultExport: searchResult.exportedComponents[0].default,
          selectedItemId: itemId,
          componentExportCount: 1
        });
      }
    },
    [onNewStory]
  );
  const handleFileItemComponentSelection = useCallback(
    ({ searchResult, component, id }) => {
      onNewStory({
        componentExportName: component.name,
        componentFilePath: searchResult.filepath,
        componentIsDefaultExport: component.default,
        selectedItemId: id,
        // @ts-expect-error (non strict)
        componentExportCount: searchResult.exportedComponents.length
      });
    },
    [onNewStory]
  );
  const ListItem2 = useCallback(
    ({ virtualItem, selected, searchResult }) => {
      const itemError = errorItemId === searchResult.filepath;
      const itemSelected = selected === virtualItem.index;
      return react_default.createElement(
        FileListItem,
        {
          "aria-expanded": itemSelected,
          "aria-controls": `file-list-export-${virtualItem.index}`,
          id: `file-list-item-wrapper-${virtualItem.index}`
        },
        react_default.createElement(
          FileListItemContentWrapper,
          {
            className: "file-list-item",
            selected: itemSelected,
            error: itemError,
            disabled: searchResult.exportedComponents === null || searchResult.exportedComponents?.length === 0
          },
          react_default.createElement(FileListIconWrapper, { error: itemError }, react_default.createElement(ComponentIcon, null)),
          react_default.createElement(FileListItemContent, null, react_default.createElement(FileListItemLabel, { error: itemError }, searchResult.filepath.split("/").at(-1)), react_default.createElement(FileListItemPath, null, searchResult.filepath)),
          itemSelected ? react_default.createElement(ChevronDownIconStyled, null) : react_default.createElement(ChevronRightIconStyled, null)
        ),
        searchResult?.exportedComponents?.length > 1 && itemSelected && react_default.createElement(
          FileListExport,
          {
            role: "region",
            id: `file-list-export-${virtualItem.index}`,
            "aria-labelledby": `file-list-item-wrapper-${virtualItem.index}`,
            onClick: (e2) => {
              e2.stopPropagation();
            },
            onKeyUp: (e2) => {
              if (e2.key === "Enter") {
                e2.stopPropagation();
              }
            }
          },
          searchResult.exportedComponents?.map((component, itemExportId) => {
            const itemExportError = errorItemId === `${searchResult.filepath}_${itemExportId}`;
            const position = itemExportId === 0 ? "first" : (
              // @ts-expect-error (non strict)
              itemExportId === searchResult.exportedComponents.length - 1 ? "last" : "middle"
            );
            return react_default.createElement(
              FileListItemExport,
              {
                tabIndex: 0,
                "data-index-position": `${virtualItem.index}_${position}`,
                key: component.name,
                error: itemExportError,
                onClick: () => {
                  handleFileItemComponentSelection({
                    searchResult,
                    component,
                    id: `${searchResult.filepath}_${itemExportId}`
                  });
                },
                onKeyUp: (event) => {
                  if (event.key === "Enter") {
                    handleFileItemComponentSelection({
                      searchResult,
                      component,
                      id: `${searchResult.filepath}_${itemExportId}`
                    });
                  }
                }
              },
              react_default.createElement(FileListItemExportName, null, react_default.createElement(ComponentIcon, null), component.default ? react_default.createElement(react_default.Fragment, null, react_default.createElement(FileListItemExportNameContent, null, searchResult.filepath.split("/").at(-1)?.split(".")?.at(0)), react_default.createElement(DefaultExport, null, "Default export")) : component.name),
              react_default.createElement(ChevronRightIconStyled, null)
            );
          })
        )
      );
    },
    [handleFileItemComponentSelection, errorItemId]
  );
  if (isLoading && (searchResults === null || searchResults?.length === 0)) {
    return react_default.createElement(FileSearchListLoadingSkeleton, null);
  }
  if (searchResults?.length === 0) {
    return react_default.createElement(NoResults, null, react_default.createElement("p", null, "We could not find any file with that name"), react_default.createElement(NoResultsDescription, null, "You may want to try using different keywords, check for typos, and adjust your filters"));
  }
  if (sortedSearchResults?.length > 0) {
    return react_default.createElement(FileListWrapper, null, react_default.createElement(FileList, { ref: parentRef }, react_default.createElement(
      FileListUl,
      {
        style: {
          height: `${rowVirtualizer.getTotalSize()}px`
        }
      },
      rowVirtualizer.getVirtualItems().map((virtualItem) => {
        const searchResult = sortedSearchResults[virtualItem.index];
        const noExports = searchResult.exportedComponents === null || searchResult.exportedComponents?.length === 0;
        const itemProps = {};
        return react_default.createElement(
          FileListLi,
          {
            key: virtualItem.key,
            "data-index": virtualItem.index,
            ref: rowVirtualizer.measureElement,
            onClick: () => {
              handleFileItemSelection({
                virtualItem,
                itemId: searchResult.filepath,
                searchResult
              });
            },
            onKeyUp: (event) => {
              if (event.key === "Enter") {
                handleFileItemSelection({
                  virtualItem,
                  itemId: searchResult.filepath,
                  searchResult
                });
              }
            },
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${virtualItem.start}px)`
            },
            tabIndex: 0
          },
          noExports ? react_default.createElement(
            WithTooltip,
            {
              ...itemProps,
              style: { width: "100%" },
              hasChrome: false,
              closeOnOutsideClick: true,
              tooltip: react_default.createElement(
                TooltipNote,
                {
                  note: noExports ? "We can't evaluate exports for this file. You can't create a story for it automatically" : null
                }
              )
            },
            react_default.createElement(
              ListItem2,
              {
                searchResult,
                selected: selectedItem,
                virtualItem
              }
            )
          ) : react_default.createElement(
            ListItem2,
            {
              ...itemProps,
              key: virtualItem.index,
              searchResult,
              selected: selectedItem,
              virtualItem
            }
          )
        );
      })
    )));
  }
  return null;
}, "FileSearchList"));

// src/manager/components/sidebar/FileSearchModal.tsx
var MODAL_HEIGHT = 418;
var ModalStyled = styled(Modal)(() => ({
  boxShadow: "none",
  background: "transparent",
  overflow: "visible"
}));
var ModalChild = styled.div(({ theme, height }) => ({
  backgroundColor: theme.background.bar,
  borderRadius: 6,
  boxShadow: `rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 18px -10px`,
  padding: "16px",
  transition: "height 0.3s",
  height: height ? `${height + 32}px` : "auto",
  overflow: "hidden"
}));
var ModalContent = styled(Modal.Content)(({ theme }) => ({
  margin: 0,
  color: theme.base === "dark" ? theme.color.lighter : theme.color.mediumdark
}));
var ModalInput = styled(Form.Input)(({ theme }) => ({
  paddingLeft: 40,
  paddingRight: 28,
  fontSize: 14,
  height: 40,
  ...theme.base === "light" && {
    color: theme.color.darkest
  },
  "::placeholder": {
    color: theme.color.mediumdark
  },
  "&:invalid:not(:placeholder-shown)": {
    boxShadow: `${theme.color.negative} 0 0 0 1px inset`
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
}));
var SearchField = styled.div({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative"
});
var SearchIconWrapper = styled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 16,
  zIndex: 1,
  pointerEvents: "none",
  color: theme.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%"
}));
var LoadingIcon = styled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 16,
  zIndex: 1,
  color: theme.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  animation: "spin 1s linear infinite"
}));
var ModalError = styled(Modal.Error)({
  position: "absolute",
  padding: "8px 40px 8px 16px",
  bottom: 0,
  maxHeight: "initial",
  width: "100%",
  div: {
    wordBreak: "break-word"
  },
  "> div": {
    padding: 0
  }
});
var ModalErrorCloseIcon = styled(CloseAltIcon)({
  position: "absolute",
  top: 4,
  right: -24,
  cursor: "pointer"
});
var FileSearchModal = /* @__PURE__ */ __name(({
  open,
  onOpenChange,
  fileSearchQuery,
  setFileSearchQuery,
  isLoading,
  error,
  searchResults,
  onCreateNewStory,
  setError,
  container
}) => {
  const [modalContentRef, modalContentDimensions] = useMeasure();
  const [modalMaxHeight, setModalMaxHeight] = useState(modalContentDimensions.height);
  const [, startTransition2] = useTransition();
  const [searchInputValue, setSearchInputValue] = useState(fileSearchQuery);
  useEffect(() => {
    if (modalMaxHeight < modalContentDimensions.height) {
      setModalMaxHeight(modalContentDimensions.height);
    }
  }, [modalContentDimensions.height, modalMaxHeight]);
  return react_default.createElement(
    ModalStyled,
    {
      height: MODAL_HEIGHT,
      width: 440,
      open,
      onOpenChange,
      onEscapeKeyDown: () => {
        onOpenChange(false);
      },
      onInteractOutside: () => {
        onOpenChange(false);
      },
      container
    },
    react_default.createElement(ModalChild, { height: fileSearchQuery === "" ? modalContentDimensions.height : modalMaxHeight }, react_default.createElement(ModalContent, { ref: modalContentRef }, react_default.createElement(Modal.Header, null, react_default.createElement(Modal.Title, null, "Add a new story"), react_default.createElement(Modal.Description, null, "We will create a new story for your component")), react_default.createElement(SearchField, null, react_default.createElement(SearchIconWrapper, null, react_default.createElement(SearchIcon, null)), react_default.createElement(
      ModalInput,
      {
        placeholder: "./components/**/*.tsx",
        type: "search",
        required: true,
        autoFocus: true,
        value: searchInputValue,
        onChange: (e2) => {
          const newValue = e2.target.value;
          setSearchInputValue(newValue);
          startTransition2(() => {
            setFileSearchQuery(newValue);
          });
        }
      }
    ), isLoading && react_default.createElement(LoadingIcon, null, react_default.createElement(SyncIcon, null))), react_default.createElement(
      FileSearchList,
      {
        errorItemId: error?.selectedItemId,
        isLoading,
        searchResults,
        onNewStory: onCreateNewStory
      }
    ))),
    error && fileSearchQuery !== "" && react_default.createElement(ModalError, null, react_default.createElement("div", null, error.error), react_default.createElement(
      ModalErrorCloseIcon,
      {
        onClick: () => {
          setError(null);
        }
      }
    ))
  );
}, "FileSearchModal");

// src/manager/components/sidebar/FileSearchModal.utils.tsx
function extractSeededRequiredArgs(argTypes) {
  const extractedArgTypes = Object.keys(argTypes).reduce(
    (acc, key) => {
      const argType = argTypes[key];
      if (typeof argType.control === "object" && "type" in argType.control) {
        switch (argType.control.type) {
          case "object":
            acc[key] = {};
            break;
          case "inline-radio":
          case "radio":
          case "inline-check":
          case "check":
          case "select":
          case "multi-select":
            acc[key] = argType.control.options?.[0];
            break;
          case "color":
            acc[key] = "#000000";
            break;
          default:
            break;
        }
      }
      setArgType(argType.type, acc, key);
      return acc;
    },
    {}
  );
  return extractedArgTypes;
}
__name(extractSeededRequiredArgs, "extractSeededRequiredArgs");
function setArgType(type, obj, objKey) {
  if (typeof type === "string" || !type.required) {
    return;
  }
  switch (type.name) {
    case "boolean":
      obj[objKey] = true;
      break;
    case "number":
      obj[objKey] = 0;
      break;
    case "string":
      obj[objKey] = objKey;
      break;
    case "array":
      obj[objKey] = [];
      break;
    case "object":
      obj[objKey] = {};
      Object.entries(type.value ?? {}).forEach(([typeKey, typeVal]) => {
        setArgType(typeVal, obj[objKey], typeKey);
      });
      break;
    case "function":
      obj[objKey] = () => {
      };
      break;
    case "intersection":
      if (type.value?.every((v2) => v2.name === "object")) {
        obj[objKey] = {};
        type.value?.forEach((typeVal) => {
          if (typeVal.name === "object") {
            Object.entries(typeVal.value ?? {}).forEach(([typeValKey, typeValVal]) => {
              setArgType(typeValVal, obj[objKey], typeValKey);
            });
          }
        });
      }
      break;
    case "union":
      if (type.value?.[0] !== void 0) {
        setArgType(type.value[0], obj, objKey);
      }
      break;
    case "enum":
      if (type.value?.[0] !== void 0) {
        obj[objKey] = type.value?.[0];
      }
      break;
    case "other":
      if (typeof type.value === "string" && type.value === "tuple") {
        obj[objKey] = [];
      }
      break;
    default:
      break;
  }
}
__name(setArgType, "setArgType");
async function trySelectNewStory(selectStory, storyId, attempt = 1) {
  if (attempt > 10) {
    throw new Error("We could not select the new story. Please try again.");
  }
  try {
    await selectStory(storyId);
  } catch (e2) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return trySelectNewStory(selectStory, storyId, attempt + 1);
  }
}
__name(trySelectNewStory, "trySelectNewStory");

// src/manager/components/sidebar/CreateNewStoryFileModal.tsx
var stringifyArgs = /* @__PURE__ */ __name((args) => JSON.stringify(args, (_2, value) => {
  if (typeof value === "function") {
    return "__sb_empty_function_arg__";
  }
  return value;
}), "stringifyArgs");
var CreateNewStoryFileModal = /* @__PURE__ */ __name(({ open, onOpenChange }) => {
  const [isLoading, setLoading] = useState(false);
  const [fileSearchQuery, setFileSearchQuery] = useState("");
  const fileSearchQueryDebounced = useDebounce(fileSearchQuery, 600);
  const fileSearchQueryDeferred = useDeferredValue(fileSearchQueryDebounced);
  const emittedValue = useRef(null);
  const [error, setError] = useState(
    null
  );
  const api = useStorybookApi();
  const [searchResults, setSearchResults] = useState(null);
  const handleSuccessfullyCreatedStory = useCallback(
    (componentExportName) => {
      api.addNotification({
        id: "create-new-story-file-success",
        content: {
          headline: "Story file created",
          subHeadline: `${componentExportName} was created`
        },
        duration: 8e3,
        icon: react_default.createElement(CheckIcon, null)
      });
      onOpenChange(false);
    },
    [api, onOpenChange]
  );
  const handleStoryAlreadyExists = useCallback(() => {
    api.addNotification({
      id: "create-new-story-file-error",
      content: {
        headline: "Story already exists",
        subHeadline: `Successfully navigated to existing story`
      },
      duration: 8e3,
      icon: react_default.createElement(CheckIcon, null)
    });
    onOpenChange(false);
  }, [api, onOpenChange]);
  const handleFileSearch = useCallback(() => {
    setLoading(true);
    const channel = addons.getChannel();
    const set = /* @__PURE__ */ __name((data) => {
      const isLatestRequest = data.id === fileSearchQueryDeferred;
      if (isLatestRequest) {
        if (data.success) {
          setSearchResults(data.payload.files);
        } else {
          setError({ error: data.error });
        }
        channel.off(FILE_COMPONENT_SEARCH_RESPONSE, set);
        setLoading(false);
        emittedValue.current = null;
      }
    }, "set");
    channel.on(FILE_COMPONENT_SEARCH_RESPONSE, set);
    if (fileSearchQueryDeferred !== "" && emittedValue.current !== fileSearchQueryDeferred) {
      emittedValue.current = fileSearchQueryDeferred;
      channel.emit(FILE_COMPONENT_SEARCH_REQUEST, {
        id: fileSearchQueryDeferred,
        payload: {}
      });
    } else {
      setSearchResults(null);
      setLoading(false);
    }
    return () => {
      channel.off(FILE_COMPONENT_SEARCH_RESPONSE, set);
    };
  }, [fileSearchQueryDeferred]);
  const handleCreateNewStory = useCallback(
    async ({
      componentExportName,
      componentFilePath,
      componentIsDefaultExport,
      componentExportCount,
      selectedItemId
    }) => {
      try {
        const channel = addons.getChannel();
        const createNewStoryResult = await experimental_requestResponse(channel, CREATE_NEW_STORYFILE_REQUEST, CREATE_NEW_STORYFILE_RESPONSE, {
          componentExportName,
          componentFilePath,
          componentIsDefaultExport,
          componentExportCount
        });
        setError(null);
        const storyId = createNewStoryResult.storyId;
        await trySelectNewStory(api.selectStory, storyId);
        try {
          const argTypesInfoResult = await experimental_requestResponse(channel, ARGTYPES_INFO_REQUEST, ARGTYPES_INFO_RESPONSE, {
            storyId
          });
          const argTypes = argTypesInfoResult.argTypes;
          const requiredArgs = extractSeededRequiredArgs(argTypes);
          await experimental_requestResponse(
            channel,
            SAVE_STORY_REQUEST,
            SAVE_STORY_RESPONSE,
            {
              args: stringifyArgs(requiredArgs),
              importPath: createNewStoryResult.storyFilePath,
              csfId: storyId
            }
          );
        } catch (e2) {
        }
        handleSuccessfullyCreatedStory(componentExportName);
        handleFileSearch();
      } catch (e2) {
        switch (e2?.payload?.type) {
          case "STORY_FILE_EXISTS":
            const err = e2;
            await trySelectNewStory(api.selectStory, err.payload.kind);
            handleStoryAlreadyExists();
            break;
          default:
            setError({ selectedItemId, error: e2?.message });
            break;
        }
      }
    },
    [api?.selectStory, handleSuccessfullyCreatedStory, handleFileSearch, handleStoryAlreadyExists]
  );
  useEffect(() => {
    setError(null);
  }, [fileSearchQueryDeferred]);
  useEffect(() => {
    return handleFileSearch();
  }, [handleFileSearch]);
  return react_default.createElement(
    FileSearchModal,
    {
      error,
      fileSearchQuery,
      fileSearchQueryDeferred,
      onCreateNewStory: handleCreateNewStory,
      isLoading,
      onOpenChange,
      open,
      searchResults,
      setError,
      setFileSearchQuery
    }
  );
}, "CreateNewStoryFileModal");

// src/manager/components/sidebar/HighlightStyles.tsx
var HighlightStyles = /* @__PURE__ */ __name(({ refId, itemId }) => react_default.createElement(
  Global,
  {
    styles: ({ color: color2 }) => {
      const background2 = curriedTransparentize$1(0.85, color2.secondary);
      return {
        [`[data-ref-id="${refId}"][data-item-id="${itemId}"]:not([data-selected="true"])`]: {
          [`&[data-nodetype="component"], &[data-nodetype="group"]`]: {
            background: background2,
            "&:hover, &:focus": { background: background2 }
          },
          [`&[data-nodetype="story"], &[data-nodetype="document"], &[data-nodetype="test"]`]: {
            color: color2.defaultText,
            background: background2,
            "&:hover, &:focus": { background: background2 }
          }
        }
      };
    }
  }
), "HighlightStyles");

// src/manager/utils/tree.ts
var import_memoizerific2 = __toESM(require_memoizerific(), 1);
var { document: document3, window: globalWindow } = scope;
var createId = /* @__PURE__ */ __name((itemId, refId) => !refId || refId === DEFAULT_REF_ID ? itemId : `${refId}_${itemId}`, "createId");
var getLink = /* @__PURE__ */ __name((item, refId) => {
  return `${document3.location.pathname}?path=/${item.type}/${createId(item.id, refId)}`;
}, "getLink");
var get = (0, import_memoizerific2.default)(1e3)((id, dataset) => dataset[id]);
var getParent = (0, import_memoizerific2.default)(1e3)((id, dataset) => {
  const item = get(id, dataset);
  return item && item.type !== "root" ? get(item.parent, dataset) : void 0;
});
var getParents = (0, import_memoizerific2.default)(1e3)((id, dataset) => {
  const parent = getParent(id, dataset);
  return parent ? [parent, ...getParents(parent.id, dataset)] : [];
});
var getAncestorIds = (0, import_memoizerific2.default)(1e3)(
  (data, id) => getParents(id, data).map((item) => item.id)
);
var getDescendantIds = (0, import_memoizerific2.default)(1e3)((data, id, skipLeafs) => {
  const entry = data[id];
  if (!entry || !("children" in entry) || !entry.children) {
    return [];
  }
  return entry.children.reduce((acc, childId) => {
    const child = data[childId];
    if (!child || skipLeafs && (child.type === "story" || child.type === "docs")) {
      return acc;
    }
    acc.push(childId, ...getDescendantIds(data, childId, skipLeafs));
    return acc;
  }, []);
});
function getPath(item, ref) {
  const parent = item.type !== "root" && item.parent ? ref.index[item.parent] : null;
  if (parent) {
    return [...getPath(parent, ref), parent.name];
  }
  return ref.id === DEFAULT_REF_ID ? [] : [ref.title || ref.id];
}
__name(getPath, "getPath");
var searchItem = /* @__PURE__ */ __name((item, ref) => {
  return { ...item, refId: ref.id, path: getPath(item, ref) };
}, "searchItem");
function cycle(array, index, delta) {
  let next = index + delta % array.length;
  if (next < 0) {
    next = array.length + next;
  }
  if (next >= array.length) {
    next -= array.length;
  }
  return next;
}
__name(cycle, "cycle");
var scrollIntoView = /* @__PURE__ */ __name((element, center = false) => {
  if (!element) {
    return;
  }
  const { top, bottom } = element.getBoundingClientRect();
  if (!top || !bottom) {
    return;
  }
  const bottomOffset = document3?.querySelector("#sidebar-bottom-wrapper")?.getBoundingClientRect().top || globalWindow.innerHeight || document3.documentElement.clientHeight;
  if (bottom > bottomOffset) {
    element.scrollIntoView({ block: center ? "center" : "nearest" });
  }
}, "scrollIntoView");
var getStateType = /* @__PURE__ */ __name((isLoading, isAuthRequired, isError, isEmpty) => {
  switch (true) {
    case isAuthRequired:
      return "auth";
    case isError:
      return "error";
    case isLoading:
      return "loading";
    case isEmpty:
      return "empty";
    default:
      return "ready";
  }
}, "getStateType");
var isAncestor = /* @__PURE__ */ __name((element, maybeAncestor) => {
  if (!element || !maybeAncestor) {
    return false;
  }
  if (element === maybeAncestor) {
    return true;
  }
  return isAncestor(element.parentElement || void 0, maybeAncestor);
}, "isAncestor");
var removeNoiseFromName = /* @__PURE__ */ __name((storyName) => storyName.replaceAll(/(\s|-|_)/gi, ""), "removeNoiseFromName");
var isStoryHoistable = /* @__PURE__ */ __name((storyName, componentName) => removeNoiseFromName(storyName) === removeNoiseFromName(componentName), "isStoryHoistable");

// src/manager/components/sidebar/Loader.tsx
var LOADER_SEQUENCE = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3];
var Loadingitem = styled.div(
  {
    cursor: "progress",
    fontSize: 13,
    height: "16px",
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    overflow: "hidden"
  },
  ({ depth = 0 }) => ({
    marginLeft: depth * 15,
    maxWidth: 85 - depth * 5
  }),
  ({ theme }) => theme.animation.inlineGlow,
  ({ theme }) => ({
    background: theme.appBorderColor
  })
);
var Contained = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20
});
var Loader2 = /* @__PURE__ */ __name(({ size }) => {
  const repeats = Math.ceil(size / LOADER_SEQUENCE.length);
  const sequence = Array.from(Array(repeats)).fill(LOADER_SEQUENCE).flat().slice(0, size);
  return react_default.createElement(Fragment, null, sequence.map((depth, index) => react_default.createElement(Loadingitem, { depth, key: index })));
}, "Loader");

// src/manager/components/sidebar/NoResults.tsx
var NoResults2 = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  textWrap: "balance",
  gap: 4,
  padding: "20px 0",
  lineHeight: `18px`,
  fontSize: `${theme.typography.size.s2}px`,
  color: theme.color.defaultText,
  small: {
    color: theme.textMutedColor,
    fontSize: `${theme.typography.size.s1}px`
  }
}));

// src/manager/components/sidebar/RefBlocks.tsx
var { window: globalWindow2 } = scope;
var TextStyle = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  lineHeight: "20px",
  margin: 0
}));
var Text2 = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  lineHeight: "20px",
  margin: 0,
  code: {
    fontSize: theme.typography.size.s1
  },
  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8
  }
}));
var ErrorDisplay = styled.pre(
  {
    width: 420,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "auto",
    whiteSpace: "pre"
  },
  ({ theme }) => ({
    color: theme.color.dark
  })
);
var AuthBlock = /* @__PURE__ */ __name(({ loginUrl, id }) => {
  const [isAuthAttempted, setAuthAttempted] = useState(false);
  const refresh = useCallback(() => {
    globalWindow2.document.location.reload();
  }, []);
  const open = useCallback((e2) => {
    e2.preventDefault();
    const childWindow = globalWindow2.open(loginUrl, `storybook_auth_${id}`, "resizable,scrollbars");
    const timer = setInterval(() => {
      if (!childWindow) {
        logger.error("unable to access loginUrl window");
        clearInterval(timer);
      } else if (childWindow.closed) {
        clearInterval(timer);
        setAuthAttempted(true);
      }
    }, 1e3);
  }, []);
  return react_default.createElement(Contained, null, react_default.createElement(Spaced, null, isAuthAttempted ? react_default.createElement(Fragment, null, react_default.createElement(Text2, null, "Authentication on ", react_default.createElement("strong", null, loginUrl), " concluded. Refresh the page to fetch this Storybook."), react_default.createElement("div", null, react_default.createElement(Button, { size: "small", variant: "outline", onClick: refresh }, react_default.createElement(SyncIcon, null), "Refresh now"))) : react_default.createElement(Fragment, null, react_default.createElement(Text2, null, "Sign in to browse this Storybook."), react_default.createElement("div", null, react_default.createElement(Button, { size: "small", variant: "outline", onClick: open }, react_default.createElement(LockIcon, null), "Sign in")))));
}, "AuthBlock");
var ErrorBlock = /* @__PURE__ */ __name(({ error }) => react_default.createElement(Contained, null, react_default.createElement(Spaced, null, react_default.createElement(TextStyle, null, "Oh no! Something went wrong loading this Storybook.", react_default.createElement("br", null), react_default.createElement(
  WithTooltip,
  {
    tooltip: react_default.createElement(ErrorDisplay, null, react_default.createElement(ErrorFormatter, { error }))
  },
  react_default.createElement(Link, { isButton: true }, "View error ", react_default.createElement(ChevronDownIcon, null))
), " ", react_default.createElement(Link, { withArrow: true, href: "https://storybook.js.org/docs?ref=ui", cancel: false, target: "_blank" }, "View docs")))), "ErrorBlock");
var FlexSpaced = styled(Spaced)({
  display: "flex"
});
var WideSpaced = styled(Spaced)({
  flex: 1
});
var EmptyBlock = /* @__PURE__ */ __name(({ isMain, hasEntries }) => react_default.createElement(Contained, null, react_default.createElement(FlexSpaced, { col: 1 }, react_default.createElement(WideSpaced, null, hasEntries ? react_default.createElement(NoResults2, null, react_default.createElement("strong", null, "No stories found"), react_default.createElement("small", null, "Your selected filters did not match any stories.")) : isMain ? react_default.createElement(Text2, null, "Oh no! Your Storybook is empty. This can happen when:", react_default.createElement("ul", null, react_default.createElement("li", null, "Your", " ", react_default.createElement(
  Link,
  {
    href: "https://storybook.js.org/docs/api/main-config/main-config-stories?ref=ui",
    cancel: false,
    target: "_blank"
  },
  "stories glob configuration"
), " ", "does not match any files.", " "), react_default.createElement("li", null, "You have", " ", react_default.createElement(
  Link,
  {
    href: "https://storybook.js.org/docs/writing-stories?ref=ui",
    cancel: false,
    target: "_blank"
  },
  "no stories defined"
), " ", "in your story files.", " "))) : react_default.createElement(Text2, null, "This composed Storybook is empty. Perhaps no stories match your selected filters.")))), "EmptyBlock");
var LoaderBlock = /* @__PURE__ */ __name(({ isMain }) => react_default.createElement(Contained, null, react_default.createElement(Loader2, { size: isMain ? 17 : 5 })), "LoaderBlock");

// src/manager/components/sidebar/RefIndicator.tsx
var { document: document4, window: globalWindow3 } = scope;
var IndicatorPlacement = styled.aside(({ theme }) => ({
  height: 16,
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: theme.layoutMargin
  }
}));
var IndicatorClickTarget = styled.button(({ theme }) => ({
  height: 20,
  width: 20,
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "100%",
  cursor: "pointer",
  color: theme.base === "light" ? curriedTransparentize$1(0.3, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText),
  "&:hover": {
    color: theme.barSelectedColor
  },
  "&:focus": {
    color: theme.barSelectedColor,
    borderColor: theme.color.secondary
  },
  svg: {
    height: 10,
    width: 10,
    transition: "all 150ms ease-out",
    color: "inherit"
  }
}));
var MessageTitle = styled.span(({ theme }) => ({
  fontWeight: theme.typography.weight.bold
}));
var Message = styled.a(({ theme }) => ({
  textDecoration: "none",
  lineHeight: "16px",
  padding: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  color: theme.color.defaultText,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.appBorderColor}`
  },
  "&:hover": {
    background: theme.background.hoverable,
    color: theme.color.darker
  },
  "&:link": {
    color: theme.color.darker
  },
  "&:active": {
    color: theme.color.darker
  },
  "&:focus": {
    color: theme.color.darker
  },
  "& > *": {
    flex: 1
  },
  "& > svg": {
    marginTop: 3,
    width: 16,
    height: 16,
    marginRight: 10,
    flex: "unset"
  }
}));
var MessageWrapper = styled.div({
  width: 280,
  boxSizing: "border-box",
  borderRadius: 8,
  overflow: "hidden"
});
var Version = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: theme.typography.size.s1,
  fontWeight: theme.typography.weight.regular,
  color: theme.base === "light" ? curriedTransparentize$1(0.3, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText),
  "& > * + *": {
    marginLeft: 4
  },
  svg: {
    height: 10,
    width: 10
  }
}));
var CurrentVersion = /* @__PURE__ */ __name(({ url, versions }) => {
  const currentVersionId = useMemo(() => {
    const c2 = Object.entries(versions).find(([k2, v2]) => v2 === url);
    return c2 && c2[0] ? c2[0] : "current";
  }, [url, versions]);
  return react_default.createElement(Version, null, react_default.createElement("span", null, currentVersionId), react_default.createElement(ChevronDownIcon, null));
}, "CurrentVersion");
var RefIndicator = react_default.memo(
  forwardRef(
    ({ state, ...ref }, forwardedRef) => {
      const api = useStorybookApi();
      const list = useMemo(() => Object.values(ref.index || {}), [ref.index]);
      const componentCount = useMemo(
        () => list.filter((v2) => v2.type === "component").length,
        [list]
      );
      const leafCount = useMemo(
        () => list.filter((v2) => v2.type === "docs" || v2.type === "story").length,
        [list]
      );
      return react_default.createElement(IndicatorPlacement, { ref: forwardedRef }, react_default.createElement(
        WithTooltip,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: true,
          tooltip: react_default.createElement(MessageWrapper, null, react_default.createElement(Spaced, { row: 0 }, state === "loading" && react_default.createElement(LoadingMessage, { url: ref.url }), (state === "error" || state === "empty") && react_default.createElement(ErrorOccurredMessage, { url: ref.url }), state === "ready" && react_default.createElement(react_default.Fragment, null, react_default.createElement(ReadyMessage, { ...{ url: ref.url, componentCount, leafCount } }), ref.sourceUrl && react_default.createElement(SourceCodeMessage, { url: ref.sourceUrl })), state === "auth" && react_default.createElement(LoginRequiredMessage, { ...ref }), ref.type === "auto-inject" && state !== "error" && react_default.createElement(PerformanceDegradedMessage, null), state !== "loading" && react_default.createElement(ReadDocsMessage, null)))
        },
        react_default.createElement(IndicatorClickTarget, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, react_default.createElement(GlobeIcon, null))
      ), ref.versions && Object.keys(ref.versions).length ? react_default.createElement(
        WithTooltip,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: true,
          tooltip: (tooltip) => react_default.createElement(
            TooltipLinkList,
            {
              links: Object.entries(ref.versions).map(([id, href]) => ({
                icon: href === ref.url ? react_default.createElement(CheckIcon, null) : void 0,
                id,
                title: id,
                href,
                onClick: /* @__PURE__ */ __name((event, item) => {
                  event.preventDefault();
                  api.changeRefVersion(ref.id, item.href);
                  tooltip.onHide();
                }, "onClick")
              }))
            }
          )
        },
        react_default.createElement(CurrentVersion, { url: ref.url, versions: ref.versions })
      ) : null);
    }
  )
);
var ReadyMessage = /* @__PURE__ */ __name(({ url, componentCount, leafCount }) => {
  const theme = useTheme();
  return react_default.createElement(Message, { href: url.replace(/\/?$/, "/index.html"), target: "_blank" }, react_default.createElement(GlobeIcon, { color: theme.color.secondary }), react_default.createElement("div", null, react_default.createElement(MessageTitle, null, "View external Storybook"), react_default.createElement("div", null, "Explore ", componentCount, " components and ", leafCount, " stories in a new browser tab.")));
}, "ReadyMessage");
var SourceCodeMessage = /* @__PURE__ */ __name(({ url }) => {
  const theme = useTheme();
  return react_default.createElement(Message, { href: url, target: "_blank" }, react_default.createElement(MarkupIcon, { color: theme.color.secondary }), react_default.createElement("div", null, react_default.createElement(MessageTitle, null, "View source code")));
}, "SourceCodeMessage");
var LoginRequiredMessage = /* @__PURE__ */ __name(({ loginUrl, id }) => {
  const theme = useTheme();
  const open = useCallback((e2) => {
    e2.preventDefault();
    const childWindow = globalWindow3.open(loginUrl, `storybook_auth_${id}`, "resizable,scrollbars");
    const timer = setInterval(() => {
      if (!childWindow) {
        clearInterval(timer);
      } else if (childWindow.closed) {
        clearInterval(timer);
        document4.location.reload();
      }
    }, 1e3);
  }, []);
  return react_default.createElement(Message, { onClick: open }, react_default.createElement(LockIcon, { color: theme.color.gold }), react_default.createElement("div", null, react_default.createElement(MessageTitle, null, "Log in required"), react_default.createElement("div", null, "You need to authenticate to view this Storybook's components.")));
}, "LoginRequiredMessage");
var ReadDocsMessage = /* @__PURE__ */ __name(() => {
  const theme = useTheme();
  return react_default.createElement(
    Message,
    {
      href: "https://storybook.js.org/docs/sharing/storybook-composition?ref=ui",
      target: "_blank"
    },
    react_default.createElement(DocumentIcon, { color: theme.color.green }),
    react_default.createElement("div", null, react_default.createElement(MessageTitle, null, "Read Composition docs"), react_default.createElement("div", null, "Learn how to combine multiple Storybooks into one."))
  );
}, "ReadDocsMessage");
var ErrorOccurredMessage = /* @__PURE__ */ __name(({ url }) => {
  const theme = useTheme();
  return react_default.createElement(Message, { href: url.replace(/\/?$/, "/index.html"), target: "_blank" }, react_default.createElement(AlertIcon, { color: theme.color.negative }), react_default.createElement("div", null, react_default.createElement(MessageTitle, null, "Something went wrong"), react_default.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
}, "ErrorOccurredMessage");
var LoadingMessage = /* @__PURE__ */ __name(({ url }) => {
  const theme = useTheme();
  return react_default.createElement(Message, { href: url.replace(/\/?$/, "/index.html"), target: "_blank" }, react_default.createElement(TimeIcon, { color: theme.color.secondary }), react_default.createElement("div", null, react_default.createElement(MessageTitle, null, "Please wait"), react_default.createElement("div", null, "This Storybook is loading.")));
}, "LoadingMessage");
var PerformanceDegradedMessage = /* @__PURE__ */ __name(() => {
  const theme = useTheme();
  return react_default.createElement(
    Message,
    {
      href: "https://storybook.js.org/docs/sharing/storybook-composition?ref=ui",
      target: "_blank"
    },
    react_default.createElement(LightningIcon, { color: theme.color.gold }),
    react_default.createElement("div", null, react_default.createElement(MessageTitle, null, "Reduce lag"), react_default.createElement("div", null, "Learn how to speed up Composition performance."))
  );
}, "PerformanceDegradedMessage");

// src/manager/components/sidebar/IconSymbols.tsx
var Svg2 = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`;
var GROUP_ID = "icon--group";
var COMPONENT_ID = "icon--component";
var DOCUMENT_ID = "icon--document";
var STORY_ID = "icon--story";
var TEST_ID = "icon--test";
var SUCCESS_ID = "icon--success";
var ERROR_ID = "icon--error";
var WARNING_ID = "icon--warning";
var DOT_ID = "icon--dot";
var IconSymbols = /* @__PURE__ */ __name(() => {
  return react_default.createElement(Svg2, { "data-chromatic": "ignore" }, react_default.createElement("symbol", { id: GROUP_ID }, react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: COMPONENT_ID }, react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: DOCUMENT_ID }, react_default.createElement(
    "path",
    {
      d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
      fill: "currentColor"
    }
  ), react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: STORY_ID }, react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: TEST_ID }, react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 4V2h1.5v4.134l.067.116L8.827 8H5.173l1.01-1.75.067-.116V6zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: SUCCESS_ID }, react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: ERROR_ID }, react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 4a3 3 0 100 6 3 3 0 000-6zM3 7a4 4 0 118 0 4 4 0 01-8 0z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: WARNING_ID }, react_default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.497.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
      fill: "currentColor"
    }
  )), react_default.createElement("symbol", { id: DOT_ID }, react_default.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "currentColor" })));
}, "IconSymbols");
var UseSymbol = /* @__PURE__ */ __name(({ type }) => {
  if (type === "group") {
    return react_default.createElement("use", { xlinkHref: `#${GROUP_ID}` });
  }
  if (type === "component") {
    return react_default.createElement("use", { xlinkHref: `#${COMPONENT_ID}` });
  }
  if (type === "document") {
    return react_default.createElement("use", { xlinkHref: `#${DOCUMENT_ID}` });
  }
  if (type === "story") {
    return react_default.createElement("use", { xlinkHref: `#${STORY_ID}` });
  }
  if (type === "test") {
    return react_default.createElement("use", { xlinkHref: `#${TEST_ID}` });
  }
  if (type === "success") {
    return react_default.createElement("use", { xlinkHref: `#${SUCCESS_ID}` });
  }
  if (type === "error") {
    return react_default.createElement("use", { xlinkHref: `#${ERROR_ID}` });
  }
  if (type === "warning") {
    return react_default.createElement("use", { xlinkHref: `#${WARNING_ID}` });
  }
  if (type === "dot") {
    return react_default.createElement("use", { xlinkHref: `#${DOT_ID}` });
  }
  return null;
}, "UseSymbol");

// src/manager/utils/status.tsx
var SmallIcons = styled(CircleIcon)({
  // specificity hack
  "&&&": {
    width: 6,
    height: 6
  }
});
var LoadingIcons = styled(SmallIcons)(({ theme: { animation, color: color2, base } }) => ({
  // specificity hack
  animation: `${animation.glow} 1.5s ease-in-out infinite`,
  color: base === "light" ? color2.mediumdark : color2.darker
}));
var statusPriority = [
  "status-value:unknown",
  "status-value:pending",
  "status-value:success",
  "status-value:warning",
  "status-value:error"
];
var statusMapping = {
  ["status-value:unknown"]: [null, null],
  ["status-value:pending"]: [react_default.createElement(LoadingIcons, { key: "icon" }), "currentColor"],
  ["status-value:success"]: [
    react_default.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, react_default.createElement(UseSymbol, { type: "success" })),
    "currentColor"
  ],
  ["status-value:warning"]: [
    react_default.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, react_default.createElement(UseSymbol, { type: "warning" })),
    "#A15C20"
  ],
  ["status-value:error"]: [
    react_default.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, react_default.createElement(UseSymbol, { type: "error" })),
    "#D43900"
  ]
};
var getMostCriticalStatusValue = /* @__PURE__ */ __name((statusValues) => {
  return statusPriority.reduce(
    (acc, value) => statusValues.includes(value) ? value : acc,
    "status-value:unknown"
  );
}, "getMostCriticalStatusValue");
function getGroupStatus(collapsedData, allStatuses) {
  return Object.values(collapsedData).reduce((acc, item) => {
    if (item.type === "group" || item.type === "component" || item.type === "story") {
      const leafs = getDescendantIds(collapsedData, item.id, false).map((id) => collapsedData[id]).filter((i2) => i2.type === "story");
      const combinedStatus = getMostCriticalStatusValue(
        // @ts-expect-error (non strict)
        leafs.flatMap((story) => Object.values(allStatuses[story.id] || {})).map((s2) => s2.value)
      );
      if (combinedStatus) {
        acc[item.id] = combinedStatus;
      }
    }
    return acc;
  }, {});
}
__name(getGroupStatus, "getGroupStatus");

// src/manager/components/sidebar/ContextMenu.tsx
var import_copy_to_clipboard2 = __toESM(require_copy_to_clipboard(), 1);

// src/manager/components/sidebar/StatusButton.tsx
var withStatusColor = /* @__PURE__ */ __name(({ theme, status }) => {
  const defaultColor = theme.base === "light" ? curriedTransparentize$1(0.3, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText);
  return {
    color: {
      "status-value:pending": defaultColor,
      "status-value:success": theme.color.positive,
      "status-value:error": theme.color.negative,
      "status-value:warning": theme.color.warning,
      "status-value:unknown": defaultColor
    }[status]
  };
}, "withStatusColor");
var StatusLabel = styled.div(withStatusColor, {
  margin: 3
});
var StatusButton = styled(IconButton)(
  withStatusColor,
  ({ theme, height, width }) => ({
    transition: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: width || 28,
    height: height || 28,
    "&:hover": {
      color: theme.color.secondary,
      background: theme.base === "dark" ? curriedDarken$1(0.3, theme.color.secondary) : curriedLighten$1(0.4, theme.color.secondary)
    },
    '[data-selected="true"] &': {
      background: theme.color.secondary,
      boxShadow: `0 0 5px 5px ${theme.color.secondary}`,
      "&:hover": {
        background: curriedLighten$1(0.1, theme.color.secondary)
      }
    },
    "&:focus": {
      color: theme.color.secondary,
      borderColor: theme.color.secondary,
      "&:not(:focus-visible)": {
        borderColor: "transparent"
      }
    }
  }),
  ({ theme, selectedItem }) => selectedItem && {
    "&:hover": {
      boxShadow: `inset 0 0 0 2px ${theme.color.secondary}`,
      background: "rgba(255, 255, 255, 0.2)"
    }
  }
);

// src/manager/components/sidebar/ContextMenu.tsx
var empty = {
  onMouseEnter: /* @__PURE__ */ __name(() => {
  }, "onMouseEnter"),
  node: null
};
var PositionedWithTooltip = styled(WithTooltip)({
  position: "absolute",
  right: 0,
  zIndex: 1
});
var FloatingStatusButton = styled(StatusButton)({
  background: "var(--tree-node-background-hover)",
  boxShadow: "0 0 5px 5px var(--tree-node-background-hover)"
});
var useContextMenu = /* @__PURE__ */ __name((context, links, api) => {
  const [hoverCount, setHoverCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [copyText, setCopyText] = react_default.useState("Copy story name");
  const shortcutKeys = api.getShortcutKeys();
  const enableShortcuts = !!shortcutKeys;
  const topLinks = useMemo(() => {
    const defaultLinks = [];
    if (context && "importPath" in context) {
      defaultLinks.push({
        id: "open-in-editor",
        title: "Open in editor",
        icon: react_default.createElement(EditorIcon, null),
        right: enableShortcuts ? react_default.createElement(Shortcut, { keys: shortcutKeys.openInEditor }) : null,
        onClick: /* @__PURE__ */ __name((e2) => {
          e2.preventDefault();
          api.openInEditor({
            file: context.importPath
          });
        }, "onClick")
      });
    }
    if (context.type === "story") {
      defaultLinks.push({
        id: "copy-story-name",
        title: copyText,
        icon: react_default.createElement(CopyIcon, null),
        // TODO: bring this back once we want to add shortcuts for this
        // right:
        //   enableShortcuts && shortcutKeys.copyStoryName ? (
        //     <Shortcut keys={shortcutKeys.copyStoryName} />
        //   ) : null,
        onClick: /* @__PURE__ */ __name((e2) => {
          e2.preventDefault();
          (0, import_copy_to_clipboard2.default)(context.exportName);
          setCopyText("Copied!");
          setTimeout(() => {
            setCopyText("Copy story name");
          }, 2e3);
        }, "onClick")
      });
    }
    return defaultLinks;
  }, [context, copyText, enableShortcuts, shortcutKeys]);
  const handlers = useMemo(() => {
    return {
      onMouseEnter: /* @__PURE__ */ __name(() => {
        setHoverCount((c2) => c2 + 1);
      }, "onMouseEnter"),
      onOpen: /* @__PURE__ */ __name((event) => {
        event.stopPropagation();
        setIsOpen(true);
      }, "onOpen"),
      onClose: /* @__PURE__ */ __name(() => {
        setIsOpen(false);
      }, "onClose")
    };
  }, []);
  const providerLinks = useMemo(() => {
    const registeredTestProviders = api.getElements(Addon_TypesEnum.experimental_TEST_PROVIDER);
    if (hoverCount) {
      return generateTestProviderLinks(registeredTestProviders, context);
    }
    return [];
  }, [api, context, hoverCount]);
  const shouldRender = !context.refId && (providerLinks.length > 0 || links.length > 0 || topLinks.length > 0);
  return useMemo(() => {
    if (globalThis.CONFIG_TYPE !== "DEVELOPMENT") {
      return empty;
    }
    return {
      onMouseEnter: handlers.onMouseEnter,
      node: shouldRender ? react_default.createElement(
        PositionedWithTooltip,
        {
          "data-displayed": isOpen ? "on" : "off",
          closeOnOutsideClick: true,
          placement: "bottom-end",
          "data-testid": "context-menu",
          onVisibleChange: (visible) => {
            if (!visible) {
              handlers.onClose();
            } else {
              setIsOpen(true);
            }
          },
          tooltip: react_default.createElement(LiveContextMenu, { context, links: [...topLinks, ...links] })
        },
        react_default.createElement(FloatingStatusButton, { type: "button", status: "status-value:pending" }, react_default.createElement(EllipsisIcon, null))
      ) : null
    };
  }, [context, handlers, isOpen, shouldRender, links, topLinks]);
}, "useContextMenu");
var LiveContextMenu = /* @__PURE__ */ __name(({
  context,
  links,
  ...rest2
}) => {
  const registeredTestProviders = useStorybookApi().getElements(
    Addon_TypesEnum.experimental_TEST_PROVIDER
  );
  const providerLinks = generateTestProviderLinks(registeredTestProviders, context);
  const groups = Array.isArray(links[0]) || links.length === 0 ? links : [links];
  const all = groups.concat([providerLinks]);
  return react_default.createElement(TooltipLinkList, { ...rest2, links: all });
}, "LiveContextMenu");
function generateTestProviderLinks(registeredTestProviders, context) {
  return Object.entries(registeredTestProviders).map(([testProviderId, state]) => {
    if (!state) {
      return null;
    }
    const content = state.sidebarContextMenu?.({ context });
    if (!content) {
      return null;
    }
    return {
      id: testProviderId,
      content
    };
  }).filter(Boolean);
}
__name(generateTestProviderLinks, "generateTestProviderLinks");

// src/manager/components/sidebar/StatusContext.tsx
var StatusContext = createContext({});
var useStatusSummary = /* @__PURE__ */ __name((item) => {
  const { data, allStatuses, groupStatus } = useContext(StatusContext);
  const summary = {
    counts: {
      "status-value:pending": 0,
      "status-value:success": 0,
      "status-value:error": 0,
      "status-value:warning": 0,
      "status-value:unknown": 0
    },
    statusesByValue: {
      "status-value:pending": {},
      "status-value:success": {},
      "status-value:error": {},
      "status-value:warning": {},
      "status-value:unknown": {}
    }
  };
  if (data && allStatuses && groupStatus && ["status-value:pending", "status-value:warning", "status-value:error"].includes(
    groupStatus[item.id]
  )) {
    for (const storyId of getDescendantIds(data, item.id, false)) {
      for (const status of Object.values(allStatuses[storyId] ?? {})) {
        summary.counts[status.value]++;
        summary.statusesByValue[status.value][storyId] ??= [];
        summary.statusesByValue[status.value][storyId].push(status);
      }
    }
  }
  return summary;
}, "useStatusSummary");

// src/manager/components/sidebar/components/CollapseIcon.tsx
var CollapseIconWrapper = styled.div(({ isExpanded }) => ({
  width: 8,
  height: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: isExpanded ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
}));
var CollapseIcon2 = /* @__PURE__ */ __name((props) => react_default.createElement(CollapseIconWrapper, { ...props }, react_default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", fill: "none" }, react_default.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z"
  }
))), "CollapseIcon");

// src/manager/components/sidebar/TreeNode.tsx
var TypeIcon2 = styled.svg(
  ({ theme, type }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color: (() => {
      if (type === "group") {
        return theme.base === "dark" ? theme.color.primary : theme.color.ultraviolet;
      }
      if (type === "component") {
        return theme.color.secondary;
      }
      if (type === "document") {
        return theme.base === "dark" ? theme.color.gold : "#ff8300";
      }
      if (type === "story") {
        return theme.color.seafoam;
      }
      if (type === "test") {
        return theme.color.green;
      }
      return "currentColor";
    })()
  })
);
var commonNodeStyles = /* @__PURE__ */ __name(({
  theme,
  depth = 0,
  isExpandable = false
}) => ({
  flex: 1,
  width: "100%",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  textDecoration: "none",
  border: "none",
  color: "inherit",
  fontSize: `${theme.typography.size.s2}px`,
  fontWeight: "inherit",
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingLeft: `${(isExpandable ? 8 : 22) + depth * 18}px`,
  paddingTop: 5,
  paddingBottom: 4,
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word"
}), "commonNodeStyles");
var BranchNode = styled.button(commonNodeStyles);
var LeafNode = styled.a(commonNodeStyles);
var RootNode = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 4,
  fontSize: `${theme.typography.size.s1 - 1}px`,
  fontWeight: theme.typography.weight.bold,
  lineHeight: "16px",
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: theme.textMutedColor
}));
var Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 2
});
var GroupNode = react_default.memo(/* @__PURE__ */ __name(function GroupNode2({
  children: children2,
  isExpanded = false,
  isExpandable = false,
  ...props
}) {
  return react_default.createElement(BranchNode, { isExpandable, tabIndex: -1, ...props }, react_default.createElement(Wrapper, null, isExpandable && react_default.createElement(CollapseIcon2, { isExpanded }), react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" }, react_default.createElement(UseSymbol, { type: "group" }))), children2);
}, "GroupNode"));
var ComponentNode = react_default.memo(
  /* @__PURE__ */ __name(function ComponentNode2({
    theme,
    children: children2,
    isExpanded = false,
    isExpandable = false,
    isSelected,
    ...props
  }) {
    return react_default.createElement(BranchNode, { isExpandable, tabIndex: -1, ...props }, react_default.createElement(Wrapper, null, isExpandable && react_default.createElement(CollapseIcon2, { isExpanded }), react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "12", height: "12", type: "component" }, react_default.createElement(UseSymbol, { type: "component" }))), children2);
  }, "ComponentNode")
);
var DocumentNode = react_default.memo(/* @__PURE__ */ __name(function DocumentNode2({ theme, children: children2, docsMode, ...props }) {
  return react_default.createElement(LeafNode, { tabIndex: -1, ...props }, react_default.createElement(Wrapper, null, react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, react_default.createElement(UseSymbol, { type: "document" }))), children2);
}, "DocumentNode"));
var StoryNode = react_default.memo(/* @__PURE__ */ __name(function StoryNode2({
  theme,
  children: children2,
  isExpandable = false,
  isExpanded = false,
  isSelected,
  ...props
}) {
  return react_default.createElement(BranchNode, { isExpandable, tabIndex: -1, ...props }, react_default.createElement(Wrapper, null, isExpandable && react_default.createElement(CollapseIcon2, { isExpanded }), react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, react_default.createElement(UseSymbol, { type: "story" }))), children2);
}, "StoryNode"));
var TestNode = react_default.memo(/* @__PURE__ */ __name(function TestNode2({
  theme,
  children: children2,
  ...props
}) {
  return react_default.createElement(LeafNode, { tabIndex: -1, ...props }, react_default.createElement(Wrapper, null, react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "12", height: "12", type: "test" }, react_default.createElement(UseSymbol, { type: "test" }))), children2);
}, "TestNode"));

// ../node_modules/es-toolkit/dist/function/debounce.mjs
function debounce2(func, debounceMs, { signal, edges } = {}) {
  let pendingThis = void 0;
  let pendingArgs = null;
  const leading = edges != null && edges.includes("leading");
  const trailing = edges == null || edges.includes("trailing");
  const invoke = /* @__PURE__ */ __name(() => {
    if (pendingArgs !== null) {
      func.apply(pendingThis, pendingArgs);
      pendingThis = void 0;
      pendingArgs = null;
    }
  }, "invoke");
  const onTimerEnd = /* @__PURE__ */ __name(() => {
    if (trailing) {
      invoke();
    }
    cancel();
  }, "onTimerEnd");
  let timeoutId = null;
  const schedule = /* @__PURE__ */ __name(() => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      onTimerEnd();
    }, debounceMs);
  }, "schedule");
  const cancelTimer = /* @__PURE__ */ __name(() => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }, "cancelTimer");
  const cancel = /* @__PURE__ */ __name(() => {
    cancelTimer();
    pendingThis = void 0;
    pendingArgs = null;
  }, "cancel");
  const flush = /* @__PURE__ */ __name(() => {
    invoke();
  }, "flush");
  const debounced = /* @__PURE__ */ __name(function(...args) {
    if (signal?.aborted) {
      return;
    }
    pendingThis = this;
    pendingArgs = args;
    const isFirstCall = timeoutId == null;
    schedule();
    if (leading && isFirstCall) {
      invoke();
    }
  }, "debounced");
  debounced.schedule = schedule;
  debounced.cancel = cancel;
  debounced.flush = flush;
  signal?.addEventListener("abort", cancel, { once: true });
  return debounced;
}
__name(debounce2, "debounce");

// ../node_modules/es-toolkit/dist/function/partial.mjs
function partial(func, ...partialArgs) {
  return partialImpl(func, placeholderSymbol, ...partialArgs);
}
__name(partial, "partial");
function partialImpl(func, placeholder, ...partialArgs) {
  const partialed = /* @__PURE__ */ __name(function(...providedArgs) {
    let providedArgsIndex = 0;
    const substitutedArgs = partialArgs.slice().map((arg) => arg === placeholder ? providedArgs[providedArgsIndex++] : arg);
    const remainingArgs = providedArgs.slice(providedArgsIndex);
    return func.apply(this, substitutedArgs.concat(remainingArgs));
  }, "partialed");
  if (func.prototype) {
    partialed.prototype = Object.create(func.prototype);
  }
  return partialed;
}
__name(partialImpl, "partialImpl");
var placeholderSymbol = Symbol("partial.placeholder");
partial.placeholder = placeholderSymbol;

// ../node_modules/es-toolkit/dist/function/partialRight.mjs
function partialRight(func, ...partialArgs) {
  return partialRightImpl(func, placeholderSymbol2, ...partialArgs);
}
__name(partialRight, "partialRight");
function partialRightImpl(func, placeholder, ...partialArgs) {
  const partialedRight = /* @__PURE__ */ __name(function(...providedArgs) {
    const placeholderLength = partialArgs.filter((arg) => arg === placeholder).length;
    const rangeLength = Math.max(providedArgs.length - placeholderLength, 0);
    const remainingArgs = providedArgs.slice(0, rangeLength);
    let providedArgsIndex = rangeLength;
    const substitutedArgs = partialArgs.slice().map((arg) => arg === placeholder ? providedArgs[providedArgsIndex++] : arg);
    return func.apply(this, remainingArgs.concat(substitutedArgs));
  }, "partialedRight");
  if (func.prototype) {
    partialedRight.prototype = Object.create(func.prototype);
  }
  return partialedRight;
}
__name(partialRightImpl, "partialRightImpl");
var placeholderSymbol2 = Symbol("partialRight.placeholder");
partialRight.placeholder = placeholderSymbol2;

// ../node_modules/es-toolkit/dist/function/retry.mjs
var DEFAULT_RETRIES = Number.POSITIVE_INFINITY;

// ../node_modules/es-toolkit/dist/function/throttle.mjs
function throttle(func, throttleMs, { signal, edges = ["leading", "trailing"] } = {}) {
  let pendingAt = null;
  const debounced = debounce2(func, throttleMs, { signal, edges });
  const throttled = /* @__PURE__ */ __name(function(...args) {
    if (pendingAt == null) {
      pendingAt = Date.now();
    } else {
      if (Date.now() - pendingAt >= throttleMs) {
        pendingAt = Date.now();
        debounced.cancel();
      }
    }
    debounced(...args);
  }, "throttled");
  throttled.cancel = debounced.cancel;
  throttled.flush = debounced.flush;
  return throttled;
}
__name(throttle, "throttle");

// src/manager/keybinding.ts
var codeToKeyMap = {
  // event.code => event.key
  Space: " ",
  Slash: "/",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Escape: "Escape",
  Enter: "Enter"
};
var allFalse = { alt: false, ctrl: false, meta: false, shift: false };
var matchesModifiers = /* @__PURE__ */ __name((modifiers, event) => {
  const { alt, ctrl, meta, shift } = modifiers === false ? allFalse : modifiers;
  if (typeof alt === "boolean" && alt !== event.altKey) {
    return false;
  }
  if (typeof ctrl === "boolean" && ctrl !== event.ctrlKey) {
    return false;
  }
  if (typeof meta === "boolean" && meta !== event.metaKey) {
    return false;
  }
  if (typeof shift === "boolean" && shift !== event.shiftKey) {
    return false;
  }
  return true;
}, "matchesModifiers");
var matchesKeyCode = /* @__PURE__ */ __name((code, event) => {
  return event.code ? event.code === code : event.key === codeToKeyMap[code];
}, "matchesKeyCode");

// src/manager/components/sidebar/useExpanded.ts
var { document: document5 } = scope;
var initializeExpanded = /* @__PURE__ */ __name(({
  refId,
  data,
  initialExpanded,
  highlightedRef,
  rootIds,
  selectedStoryId
}) => {
  const selectedStory = selectedStoryId && data[selectedStoryId];
  const candidates = [...rootIds];
  if (highlightedRef.current?.refId === refId) {
    candidates.push(...getAncestorIds(data, highlightedRef.current?.itemId));
  }
  if (selectedStory && "children" in selectedStory && selectedStory.children?.length) {
    candidates.push(selectedStoryId);
  }
  return candidates.reduce(
    // @ts-expect-error (non strict)
    (acc, id) => Object.assign(acc, { [id]: id in initialExpanded ? initialExpanded[id] : true }),
    {}
  );
}, "initializeExpanded");
var noop3 = /* @__PURE__ */ __name(() => {
}, "noop");
var useExpanded = /* @__PURE__ */ __name(({
  containerRef,
  isBrowsing,
  refId,
  data,
  initialExpanded,
  rootIds,
  highlightedRef,
  setHighlightedItemId,
  selectedStoryId,
  onSelectStoryId
}) => {
  const api = useStorybookApi();
  const [expanded, setExpanded] = useReducer(
    (state, { ids, value }) => ids.reduce((acc, id) => Object.assign(acc, { [id]: value }), { ...state }),
    // @ts-expect-error (non strict)
    { refId, data, highlightedRef, rootIds, initialExpanded, selectedStoryId },
    initializeExpanded
  );
  const getElementByDataItemId = useCallback(
    (id) => containerRef.current?.querySelector(`[data-item-id="${id}"]`),
    [containerRef]
  );
  const highlightElement = useCallback(
    (element) => {
      setHighlightedItemId(element.getAttribute("data-item-id"));
      scrollIntoView(element);
    },
    [setHighlightedItemId]
  );
  const updateExpanded = useCallback(
    ({ ids, value }) => {
      setExpanded({ ids, value });
      if (ids.length === 1) {
        const element = containerRef.current?.querySelector(
          `[data-item-id="${ids[0]}"][data-ref-id="${refId}"]`
        );
        if (element) {
          highlightElement(element);
        }
      }
    },
    [containerRef, highlightElement, refId]
  );
  useEffect(() => {
    setExpanded({ ids: getAncestorIds(data, selectedStoryId), value: true });
  }, [data, selectedStoryId]);
  const collapseAll = useCallback(() => {
    const ids = Object.keys(data).filter((id) => !rootIds.includes(id));
    setExpanded({ ids, value: false });
  }, [data, rootIds]);
  const expandAll = useCallback(() => {
    setExpanded({ ids: Object.keys(data), value: true });
  }, [data]);
  useEffect(() => {
    if (!api) {
      return noop3;
    }
    api.on(STORIES_COLLAPSE_ALL, collapseAll);
    api.on(STORIES_EXPAND_ALL, expandAll);
    return () => {
      api.off(STORIES_COLLAPSE_ALL, collapseAll);
      api.off(STORIES_EXPAND_ALL, expandAll);
    };
  }, [api, collapseAll, expandAll]);
  useEffect(() => {
    const menuElement = document5.getElementById("storybook-explorer-menu");
    const navigateTree = throttle((event) => {
      const highlightedItemId = highlightedRef.current?.refId === refId && highlightedRef.current?.itemId;
      if (!isBrowsing || !containerRef.current || !highlightedItemId || event.repeat) {
        return;
      }
      if (!matchesModifiers(false, event)) {
        return;
      }
      const isEnter = matchesKeyCode("Enter", event);
      const isSpace = matchesKeyCode("Space", event);
      const isArrowLeft = matchesKeyCode("ArrowLeft", event);
      const isArrowRight = matchesKeyCode("ArrowRight", event);
      if (!(isEnter || isSpace || isArrowLeft || isArrowRight)) {
        return;
      }
      const highlightedElement = getElementByDataItemId(highlightedItemId);
      if (!highlightedElement || highlightedElement.getAttribute("data-ref-id") !== refId) {
        return;
      }
      const target = event.target;
      if (!isAncestor(menuElement, target) && !isAncestor(target, menuElement)) {
        return;
      }
      if (target.hasAttribute("data-action")) {
        if (isEnter || isSpace) {
          return;
        }
        target.blur();
      }
      const type = highlightedElement.getAttribute("data-nodetype");
      if (type && (isEnter || isSpace) && ["component", "story", "document", "test"].includes(type)) {
        onSelectStoryId(highlightedItemId);
      }
      const isExpanded = highlightedElement.getAttribute("aria-expanded");
      if (isArrowLeft) {
        if (isExpanded === "true") {
          setExpanded({ ids: [highlightedItemId], value: false });
          return;
        }
        const parentId = highlightedElement.getAttribute("data-parent-id");
        const parentElement = parentId && getElementByDataItemId(parentId);
        if (parentElement && parentElement.getAttribute("data-highlightable") === "true") {
          highlightElement(parentElement);
          return;
        }
        setExpanded({ ids: getDescendantIds(data, highlightedItemId, true), value: false });
        return;
      }
      if (isArrowRight) {
        if (isExpanded === "false") {
          updateExpanded({ ids: [highlightedItemId], value: true });
        } else if (isExpanded === "true") {
          updateExpanded({ ids: getDescendantIds(data, highlightedItemId, true), value: true });
        }
      }
    }, 60);
    document5.addEventListener("keydown", navigateTree);
    return () => document5.removeEventListener("keydown", navigateTree);
  }, [
    containerRef,
    isBrowsing,
    refId,
    data,
    highlightedRef,
    setHighlightedItemId,
    onSelectStoryId
  ]);
  return [expanded, updateExpanded];
}, "useExpanded");

// src/manager/components/sidebar/Tree.tsx
var Container6 = styled.div((props) => ({
  marginTop: props.hasOrphans ? 20 : 0,
  marginBottom: 20
}));
var CollapseButton = styled.button({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  borderRadius: 4,
  transition: "color 150ms, box-shadow 150ms",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  height: 28,
  "&:hover, &:focus": {
    outline: "none",
    background: "var(--tree-node-background-hover)"
  }
});
var LeafNodeStyleWrapper = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  color: theme.color.defaultText,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  overflow: "hidden",
  "--tree-node-background-hover": theme.background.content,
  [MEDIA_DESKTOP_BREAKPOINT]: {
    "--tree-node-background-hover": theme.background.app
  },
  "&:hover, &:focus": {
    "--tree-node-background-hover": theme.base === "dark" ? curriedDarken$1(0.35, theme.color.secondary) : curriedLighten$1(0.45, theme.color.secondary),
    background: "var(--tree-node-background-hover)",
    outline: "none"
  },
  '& [data-displayed="off"]': {
    visibility: "hidden"
  },
  '&:hover [data-displayed="off"]': {
    visibility: "visible"
  },
  '& [data-displayed="on"] + *': {
    visibility: "hidden"
  },
  '&:hover [data-displayed="off"] + *': {
    visibility: "hidden"
  },
  '&[data-selected="true"]': {
    color: theme.color.lightest,
    background: theme.color.secondary,
    fontWeight: theme.typography.weight.bold,
    "&&:hover, &&:focus": {
      "--tree-node-background-hover": theme.color.secondary,
      background: "var(--tree-node-background-hover)"
    },
    svg: { color: theme.color.lightest }
  },
  a: { color: "currentColor" }
}));
var SkipToContentLink = styled(Button)(({ theme }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    fontSize: "10px",
    overflow: "hidden",
    width: 1,
    height: "20px",
    boxSizing: "border-box",
    opacity: 0,
    padding: 0,
    "&:focus": {
      opacity: 1,
      padding: "5px 10px",
      background: "white",
      color: theme.color.secondary,
      width: "auto"
    }
  }
}));
var SuccessStatusIcon = /* @__PURE__ */ __name((props) => {
  const theme = useTheme();
  return react_default.createElement(StatusPassIcon, { ...props, color: theme.color.positive });
}, "SuccessStatusIcon");
var ErrorStatusIcon = /* @__PURE__ */ __name((props) => {
  const theme = useTheme();
  return react_default.createElement(StatusFailIcon, { ...props, color: theme.color.negative });
}, "ErrorStatusIcon");
var WarnStatusIcon = /* @__PURE__ */ __name((props) => {
  const theme = useTheme();
  return react_default.createElement(StatusWarnIcon, { ...props, color: theme.color.warning });
}, "WarnStatusIcon");
var PendingStatusIcon = /* @__PURE__ */ __name((props) => {
  const theme = useTheme();
  return react_default.createElement(SyncIcon, { ...props, size: 12, color: theme.color.defaultText });
}, "PendingStatusIcon");
var StatusIconMap = {
  "status-value:success": react_default.createElement(SuccessStatusIcon, null),
  "status-value:error": react_default.createElement(ErrorStatusIcon, null),
  "status-value:warning": react_default.createElement(WarnStatusIcon, null),
  "status-value:pending": react_default.createElement(PendingStatusIcon, null),
  "status-value:unknown": null
};
var statusOrder = [
  "status-value:success",
  "status-value:error",
  "status-value:warning",
  "status-value:pending",
  "status-value:unknown"
];
var Node2 = react_default.memo(/* @__PURE__ */ __name(function Node3(props) {
  const {
    item,
    statuses,
    groupStatus,
    refId,
    docsMode,
    isOrphan,
    isDisplayed,
    isSelected,
    isFullyExpanded,
    setFullyExpanded,
    isExpanded,
    setExpanded,
    onSelectStoryId,
    api
  } = props;
  const { isDesktop, isMobile, setMobileMenuOpen } = useLayout();
  const { counts, statusesByValue } = useStatusSummary(item);
  if (!isDisplayed) {
    return null;
  }
  const statusLinks = useMemo(() => {
    if (item.type === "story" || item.type === "docs") {
      return Object.entries(statuses).filter(([, status]) => status.sidebarContextMenu !== false).sort((a2, b2) => statusOrder.indexOf(a2[1].value) - statusOrder.indexOf(b2[1].value)).map(([typeId, status]) => ({
        id: typeId,
        title: status.title,
        description: status.description,
        "aria-label": `Test status for ${status.title}: ${status.value}`,
        icon: StatusIconMap[status.value],
        onClick: /* @__PURE__ */ __name(() => {
          onSelectStoryId(item.id);
          internal_fullStatusStore.selectStatuses([status]);
        }, "onClick")
      }));
    }
    if (item.type === "component" || item.type === "group") {
      const links = [];
      const errorCount = counts["status-value:error"];
      const warningCount = counts["status-value:warning"];
      if (errorCount) {
        links.push({
          id: "errors",
          icon: StatusIconMap["status-value:error"],
          title: `${errorCount} ${errorCount === 1 ? "story" : "stories"} with errors`,
          onClick: /* @__PURE__ */ __name(() => {
            const [firstStoryId] = Object.entries(statusesByValue["status-value:error"])[0];
            onSelectStoryId(firstStoryId);
            const errorStatuses = Object.values(statusesByValue["status-value:error"]).flat();
            internal_fullStatusStore.selectStatuses(errorStatuses);
          }, "onClick")
        });
      }
      if (warningCount) {
        links.push({
          id: "warnings",
          icon: StatusIconMap["status-value:warning"],
          title: `${warningCount} ${warningCount === 1 ? "story" : "stories"} with warnings`,
          onClick: /* @__PURE__ */ __name(() => {
            const [firstStoryId] = Object.entries(statusesByValue["status-value:warning"])[0];
            onSelectStoryId(firstStoryId);
            const warningStatuses = Object.values(statusesByValue["status-value:warning"]).flat();
            internal_fullStatusStore.selectStatuses(warningStatuses);
          }, "onClick")
        });
      }
      return links;
    }
    return [];
  }, [counts, item.id, item.type, onSelectStoryId, statuses, statusesByValue]);
  const id = createId(item.id, refId);
  const contextMenu = refId === "storybook_internal" ? useContextMenu(item, statusLinks, api) : { node: null, onMouseEnter: /* @__PURE__ */ __name(() => {
  }, "onMouseEnter") };
  if (item.type === "root") {
    return react_default.createElement(
      RootNode,
      {
        key: id,
        id,
        className: "sidebar-subheading",
        "data-ref-id": refId,
        "data-item-id": item.id,
        "data-nodetype": "root"
      },
      react_default.createElement(
        CollapseButton,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (event) => {
            event.preventDefault();
            setExpanded({ ids: [item.id], value: !isExpanded });
          },
          "aria-expanded": isExpanded
        },
        react_default.createElement(CollapseIcon2, { isExpanded }),
        item.renderLabel?.(item, api) || item.name
      ),
      isExpanded && react_default.createElement(
        IconButton,
        {
          className: "sidebar-subheading-action",
          "aria-label": isFullyExpanded ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": isFullyExpanded,
          onClick: (event) => {
            event.preventDefault();
            setFullyExpanded();
          }
        },
        isFullyExpanded ? react_default.createElement(CollapseIcon, null) : react_default.createElement(ExpandAltIcon, null)
      )
    );
  }
  const itemStatus = getMostCriticalStatusValue(Object.values(statuses || {}).map((s2) => s2.value));
  const [itemIcon, itemColor] = statusMapping[itemStatus];
  const itemStatusButton = itemIcon ? react_default.createElement(
    StatusButton,
    {
      "aria-label": `Test status: ${itemStatus.replace("status-value:", "")}`,
      role: "status",
      type: "button",
      status: itemStatus,
      selectedItem: isSelected
    },
    itemIcon
  ) : null;
  if (item.type === "component" || item.type === "group" || item.type === "story" && "children" in item && item.children) {
    const { children: children2 = [] } = item;
    const BranchNode2 = { component: ComponentNode, group: GroupNode, story: StoryNode }[item.type];
    const status = getMostCriticalStatusValue([itemStatus, groupStatus?.[item.id]]);
    const color2 = status ? statusMapping[status][1] : null;
    const showBranchStatus = status === "status-value:error" || status === "status-value:warning";
    return react_default.createElement(
      LeafNodeStyleWrapper,
      {
        key: id,
        className: "sidebar-item",
        "data-selected": isSelected,
        "data-ref-id": refId,
        "data-item-id": item.id,
        "data-parent-id": item.parent,
        "data-nodetype": item.type,
        "data-highlightable": isDisplayed,
        onMouseEnter: contextMenu.onMouseEnter
      },
      react_default.createElement(
        BranchNode2,
        {
          id,
          style: color2 && !isSelected ? { color: color2 } : {},
          "aria-controls": children2.join(" "),
          "aria-expanded": isExpanded,
          depth: isOrphan ? item.depth : item.depth - 1,
          isExpandable: children2.length > 0,
          isExpanded,
          onClick: (event) => {
            event.preventDefault();
            if (item.type === "story") {
              onSelectStoryId(item.id);
              if (!isExpanded || isSelected) {
                setExpanded({ ids: [item.id], value: !isExpanded });
              }
            } else if (item.type === "component") {
              if (!isExpanded && isDesktop) {
                onSelectStoryId(item.id);
              }
              setExpanded({ ids: [item.id], value: !isExpanded });
            } else {
              setExpanded({ ids: [item.id], value: !isExpanded });
            }
          },
          onMouseEnter: () => {
            if (item.type === "component" || item.type === "story") {
              api.emit(PRELOAD_ENTRIES, {
                ids: [children2[0]],
                options: { target: refId }
              });
            }
          }
        },
        item.renderLabel?.(item, api) || item.name
      ),
      isSelected && react_default.createElement(SkipToContentLink, { asChild: true }, react_default.createElement("a", { href: "#storybook-preview-wrapper" }, "Skip to canvas")),
      contextMenu.node,
      showBranchStatus ? react_default.createElement(StatusButton, { type: "button", status, selectedItem: isSelected }, react_default.createElement("svg", { key: "icon", viewBox: "0 0 6 6", width: "6", height: "6", type: "dot" }, react_default.createElement(UseSymbol, { type: "dot" }))) : itemStatusButton
    );
  }
  const isTest = item.type === "story" && item.subtype === "test";
  const LeafNode2 = isTest ? TestNode : { docs: DocumentNode, story: StoryNode }[item.type];
  const nodeType = isTest ? "test" : { docs: "document", story: "story" }[item.type];
  return react_default.createElement(
    LeafNodeStyleWrapper,
    {
      key: id,
      className: "sidebar-item",
      "data-selected": isSelected,
      "data-ref-id": refId,
      "data-item-id": item.id,
      "data-parent-id": item.parent,
      "data-nodetype": nodeType,
      "data-highlightable": isDisplayed,
      onMouseEnter: contextMenu.onMouseEnter
    },
    react_default.createElement(
      LeafNode2,
      {
        style: itemColor && !isSelected ? { color: itemColor } : {},
        href: getLink(item, refId),
        id,
        depth: isOrphan ? item.depth : item.depth - 1,
        onClick: (event) => {
          event.preventDefault();
          onSelectStoryId(item.id);
          if (isMobile) {
            setMobileMenuOpen(false);
          }
        },
        ...item.type === "docs" && { docsMode }
      },
      item.renderLabel?.(item, api) || item.name
    ),
    isSelected && react_default.createElement(SkipToContentLink, { asChild: true }, react_default.createElement("a", { href: "#storybook-preview-wrapper" }, "Skip to canvas")),
    contextMenu.node,
    itemStatusButton
  );
}, "Node"));
var Root = react_default.memo(/* @__PURE__ */ __name(function Root2({
  setExpanded,
  isFullyExpanded,
  expandableDescendants,
  ...props
}) {
  const setFullyExpanded = useCallback(
    () => setExpanded({ ids: expandableDescendants, value: !isFullyExpanded }),
    [setExpanded, isFullyExpanded, expandableDescendants]
  );
  return react_default.createElement(
    Node2,
    {
      ...props,
      setExpanded,
      isFullyExpanded,
      setFullyExpanded
    }
  );
}, "Root"));
var Tree = react_default.memo(/* @__PURE__ */ __name(function Tree2({
  isBrowsing,
  isMain,
  refId,
  data,
  allStatuses,
  docsMode,
  highlightedRef,
  setHighlightedItemId,
  selectedStoryId,
  onSelectStoryId
}) {
  const containerRef = useRef(null);
  const api = useStorybookApi();
  const [rootIds, orphanIds, initialExpanded] = useMemo(
    () => Object.keys(data).reduce(
      (acc, id) => {
        const item = data[id];
        if (item.type === "root") {
          acc[0].push(id);
        } else if (!item.parent) {
          acc[1].push(id);
        }
        if (item.type === "root" && item.startCollapsed) {
          acc[2][id] = false;
        }
        return acc;
      },
      [[], [], {}]
    ),
    [data]
  );
  const { expandableDescendants } = useMemo(() => {
    return [...orphanIds, ...rootIds].reduce(
      (acc, nodeId) => {
        acc.expandableDescendants[nodeId] = getDescendantIds(data, nodeId, false).filter(
          (d2) => !["story", "docs"].includes(data[d2].type)
        );
        return acc;
      },
      { orphansFirst: [], expandableDescendants: {} }
    );
  }, [data, rootIds, orphanIds]);
  const singleStoryComponentIds = useMemo(() => {
    return Object.keys(data).filter((id) => {
      const entry = data[id];
      if (entry.type !== "component") {
        return false;
      }
      const { children: children2 = [], name } = entry;
      if (children2.length !== 1) {
        return false;
      }
      const onlyChild = data[children2[0]];
      if (onlyChild.type === "docs") {
        return true;
      }
      if (onlyChild.type === "story" && onlyChild.subtype === "story") {
        return isStoryHoistable(onlyChild.name, name);
      }
      return false;
    });
  }, [data]);
  const collapsedItems = useMemo(
    () => Object.keys(data).filter((id) => !singleStoryComponentIds.includes(id)),
    [data, singleStoryComponentIds]
  );
  const collapsedData = useMemo(() => {
    return singleStoryComponentIds.reduce(
      (acc, id) => {
        const { children: children2, parent, name } = data[id];
        const [childId] = children2;
        if (parent) {
          const siblings = [...data[parent].children];
          siblings[siblings.indexOf(id)] = childId;
          acc[parent] = { ...data[parent], children: siblings };
        }
        acc[childId] = {
          ...data[childId],
          name,
          parent,
          depth: data[childId].depth - 1
        };
        return acc;
      },
      { ...data }
    );
  }, [data, singleStoryComponentIds]);
  const ancestry = useMemo(() => {
    return collapsedItems.reduce(
      (acc, id) => Object.assign(acc, { [id]: getAncestorIds(collapsedData, id) }),
      {}
    );
  }, [collapsedItems, collapsedData]);
  const [expanded, setExpanded] = useExpanded({
    // @ts-expect-error (non strict)
    containerRef,
    isBrowsing,
    refId,
    data: collapsedData,
    initialExpanded,
    rootIds,
    highlightedRef,
    setHighlightedItemId,
    selectedStoryId,
    onSelectStoryId
  });
  const groupStatus = useMemo(
    () => getGroupStatus(collapsedData, allStatuses ?? {}),
    [collapsedData, allStatuses]
  );
  const treeItems = useMemo(() => {
    return collapsedItems.map((itemId) => {
      const item = collapsedData[itemId];
      const id = createId(itemId, refId);
      if (item.type === "root") {
        const descendants = expandableDescendants[item.id];
        const isFullyExpanded = descendants.every((d2) => expanded[d2]);
        return (
          // @ts-expect-error (TODO)
          react_default.createElement(
            Root,
            {
              api,
              key: id,
              item,
              refId,
              collapsedData,
              isOrphan: false,
              isDisplayed: true,
              isSelected: selectedStoryId === itemId,
              isExpanded: !!expanded[itemId],
              setExpanded,
              isFullyExpanded,
              expandableDescendants: descendants,
              onSelectStoryId
            }
          )
        );
      }
      const isDisplayed = !item.parent || ancestry[itemId].every((a2) => expanded[a2]);
      if (isDisplayed === false) {
        return null;
      }
      return react_default.createElement(
        Node2,
        {
          api,
          collapsedData,
          key: id,
          item,
          statuses: allStatuses?.[itemId] ?? {},
          groupStatus,
          refId,
          docsMode,
          isOrphan: orphanIds.some((oid) => itemId === oid || itemId.startsWith(`${oid}-`)),
          isDisplayed,
          isSelected: selectedStoryId === itemId,
          isExpanded: !!expanded[itemId],
          setExpanded,
          onSelectStoryId
        }
      );
    });
  }, [
    ancestry,
    api,
    collapsedData,
    collapsedItems,
    docsMode,
    expandableDescendants,
    expanded,
    groupStatus,
    onSelectStoryId,
    orphanIds,
    refId,
    selectedStoryId,
    setExpanded,
    allStatuses
  ]);
  return react_default.createElement(StatusContext.Provider, { value: { data, allStatuses, groupStatus } }, react_default.createElement(Container6, { ref: containerRef, hasOrphans: isMain && orphanIds.length > 0 }, react_default.createElement(IconSymbols, null), treeItems));
}, "Tree"));

// src/manager/components/sidebar/Refs.tsx
var Wrapper2 = styled.div(({ isMain }) => ({
  position: "relative",
  marginTop: isMain ? void 0 : 0
}));
var RefHead = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2,
  // Similar to ListItem.tsx
  textDecoration: "none",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "100%",
  marginTop: 20,
  paddingTop: 16,
  paddingBottom: 12,
  borderTop: `1px solid ${theme.appBorderColor}`,
  color: theme.base === "light" ? theme.color.defaultText : curriedTransparentize$1(0.2, theme.color.defaultText)
}));
var RefTitle = styled.div({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  overflow: "hidden",
  marginLeft: 2
});
var CollapseButton2 = styled.button(({ theme }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  "&:focus": {
    borderColor: theme.color.secondary,
    "span:first-of-type": {
      borderLeftColor: theme.color.secondary
    }
  }
}));
var Ref = react_default.memo(/* @__PURE__ */ __name(function Ref2(props) {
  const { docsOptions } = useStorybookState();
  const api = useStorybookApi();
  const {
    filteredIndex: index,
    id: refId,
    title = refId,
    isLoading: isLoadingMain,
    isBrowsing,
    hasEntries,
    selectedStoryId,
    highlightedRef,
    setHighlighted,
    loginUrl,
    type,
    expanded = true,
    indexError,
    previewInitialized,
    allStatuses
  } = props;
  const length = useMemo(() => index ? Object.keys(index).length : 0, [index]);
  const indicatorRef = useRef(null);
  const isMain = refId === DEFAULT_REF_ID;
  const isLoadingInjected = type === "auto-inject" && !previewInitialized || type === "server-checked";
  const isLoading = isLoadingMain || isLoadingInjected || type === "unknown";
  const isError = !!indexError;
  const isEmpty = !isLoading && length === 0;
  const isAuthRequired = !!loginUrl && length === 0;
  const state = getStateType(isLoading, isAuthRequired, isError, isEmpty);
  const [isExpanded, setExpanded] = useState(expanded);
  useEffect(() => {
    if (index && selectedStoryId && index[selectedStoryId]) {
      setExpanded(true);
    }
  }, [setExpanded, index, selectedStoryId]);
  const handleClick = useCallback(() => setExpanded((value) => !value), [setExpanded]);
  const setHighlightedItemId = useCallback(
    (itemId) => setHighlighted({ itemId, refId }),
    [setHighlighted, refId]
  );
  const onSelectStoryId = useCallback(
    (storyId) => api?.selectStory(storyId, void 0, { ref: isMain ? void 0 : refId }),
    [api, isMain, refId]
  );
  return react_default.createElement(react_default.Fragment, null, isMain || react_default.createElement(
    RefHead,
    {
      "aria-label": `${isExpanded ? "Hide" : "Show"} ${title} stories`,
      "aria-expanded": isExpanded
    },
    react_default.createElement(CollapseButton2, { "data-action": "collapse-ref", onClick: handleClick }, react_default.createElement(CollapseIcon2, { isExpanded }), react_default.createElement(RefTitle, { title }, title)),
    react_default.createElement(RefIndicator, { ...props, state, ref: indicatorRef })
  ), isExpanded && react_default.createElement(Wrapper2, { "data-title": title, isMain }, state === "auth" && react_default.createElement(AuthBlock, { id: refId, loginUrl }), state === "error" && react_default.createElement(ErrorBlock, { error: indexError }), state === "loading" && react_default.createElement(LoaderBlock, { isMain }), state === "empty" && react_default.createElement(EmptyBlock, { isMain, hasEntries }), state === "ready" && react_default.createElement(
    Tree,
    {
      allStatuses,
      isBrowsing,
      isMain,
      refId,
      data: index,
      docsMode: docsOptions.docsMode,
      selectedStoryId,
      onSelectStoryId,
      highlightedRef,
      setHighlightedItemId
    }
  )));
}, "Ref"));

// src/manager/components/sidebar/useHighlighted.ts
var { document: document6, window: globalWindow4 } = scope;
var fromSelection = /* @__PURE__ */ __name((selection) => selection ? { itemId: selection.storyId, refId: selection.refId } : null, "fromSelection");
var scrollToSelector = /* @__PURE__ */ __name((selector, options2 = {}, _attempt = 1) => {
  const { containerRef, center = false, attempts = 3, delay: delay2 = 500 } = options2;
  const element = (containerRef ? containerRef.current : document6)?.querySelector(selector);
  if (element) {
    scrollIntoView(element, center);
  } else if (_attempt <= attempts) {
    setTimeout(scrollToSelector, delay2, selector, options2, _attempt + 1);
  }
}, "scrollToSelector");
var useHighlighted = /* @__PURE__ */ __name(({
  containerRef,
  isLoading,
  isBrowsing,
  selected
}) => {
  const initialHighlight = fromSelection(selected);
  const highlightedRef = useRef(initialHighlight);
  const [highlighted, setHighlighted] = useState(initialHighlight);
  const api = useStorybookApi();
  const updateHighlighted = useCallback(
    (highlight) => {
      highlightedRef.current = highlight;
      setHighlighted(highlight);
    },
    [highlightedRef]
  );
  const highlightElement = useCallback(
    (element, center = false) => {
      const itemId = element.getAttribute("data-item-id");
      const refId = element.getAttribute("data-ref-id");
      if (!itemId || !refId) {
        return;
      }
      updateHighlighted({ itemId, refId });
      scrollIntoView(element, center);
    },
    [updateHighlighted]
  );
  useEffect(() => {
    const highlight = fromSelection(selected);
    updateHighlighted(highlight);
    if (highlight) {
      scrollToSelector(`[data-item-id="${highlight.itemId}"][data-ref-id="${highlight.refId}"]`, {
        containerRef,
        center: true
      });
    }
  }, [containerRef, selected, updateHighlighted]);
  useEffect(() => {
    const menuElement = document6.getElementById("storybook-explorer-menu");
    let lastRequestId;
    const navigateTree = /* @__PURE__ */ __name((event) => {
      if (isLoading || !isBrowsing || !containerRef.current) {
        return;
      }
      if (!matchesModifiers(false, event)) {
        return;
      }
      const isArrowUp = matchesKeyCode("ArrowUp", event);
      const isArrowDown = matchesKeyCode("ArrowDown", event);
      if (!(isArrowUp || isArrowDown)) {
        return;
      }
      const requestId = globalWindow4.requestAnimationFrame(() => {
        globalWindow4.cancelAnimationFrame(lastRequestId);
        lastRequestId = requestId;
        const target = event.target;
        if (!isAncestor(menuElement, target) && !isAncestor(target, menuElement)) {
          return;
        }
        if (target.hasAttribute("data-action")) {
          target.blur();
        }
        const highlightable = Array.from(
          containerRef.current?.querySelectorAll("[data-highlightable=true]") || []
        );
        const currentIndex = highlightable.findIndex(
          (el) => el.getAttribute("data-item-id") === highlightedRef.current?.itemId && el.getAttribute("data-ref-id") === highlightedRef.current?.refId
        );
        const nextIndex = cycle(highlightable, currentIndex, isArrowUp ? -1 : 1);
        const didRunAround = isArrowUp ? nextIndex === highlightable.length - 1 : nextIndex === 0;
        highlightElement(highlightable[nextIndex], didRunAround);
        if (highlightable[nextIndex].getAttribute("data-nodetype") === "component") {
          const { itemId, refId } = highlightedRef.current;
          const item = api.resolveStory(itemId, refId === "storybook_internal" ? void 0 : refId);
          if (item?.type === "component") {
            api.emit(PRELOAD_ENTRIES, {
              ids: [item.children[0]],
              options: { target: refId }
            });
          }
        }
      });
    }, "navigateTree");
    document6.addEventListener("keydown", navigateTree);
    return () => document6.removeEventListener("keydown", navigateTree);
  }, [api, containerRef, isLoading, isBrowsing, highlightedRef, highlightElement]);
  return [highlighted, updateHighlighted, highlightedRef];
}, "useHighlighted");

// src/manager/components/sidebar/Explorer.tsx
var Explorer = react_default.memo(/* @__PURE__ */ __name(function Explorer2({
  hasEntries,
  isLoading,
  isBrowsing,
  dataset,
  selected
}) {
  const containerRef = useRef(null);
  const [highlighted, setHighlighted, highlightedRef] = useHighlighted({
    containerRef,
    isLoading,
    isBrowsing,
    selected
  });
  return react_default.createElement(
    "div",
    {
      ref: containerRef,
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": highlighted?.refId,
      "data-highlighted-item-id": highlighted?.itemId
    },
    highlighted && react_default.createElement(HighlightStyles, { ...highlighted }),
    dataset.entries.map(([refId, ref]) => react_default.createElement(
      Ref,
      {
        ...ref,
        key: refId,
        isLoading,
        isBrowsing,
        hasEntries,
        selectedStoryId: selected?.refId === ref.id ? selected.storyId : null,
        highlightedRef,
        setHighlighted
      }
    ))
  );
}, "Explorer"));

// src/manager/components/sidebar/Brand.tsx
var StorybookLogoStyled = styled(StorybookLogo)(({ theme }) => ({
  width: "auto",
  height: "22px !important",
  display: "block",
  color: theme.base === "light" ? theme.color.defaultText : theme.color.lightest
}));
var Img2 = styled.img({
  display: "block",
  maxWidth: "150px !important",
  maxHeight: "100px"
});
var LogoLink = styled.a(({ theme }) => ({
  display: "inline-block",
  height: "100%",
  margin: "-3px -4px",
  padding: "2px 3px",
  border: "1px solid transparent",
  borderRadius: 3,
  color: "inherit",
  textDecoration: "none",
  "&:focus": {
    outline: 0,
    borderColor: theme.color.secondary
  }
}));
var Brand = withTheme(({ theme }) => {
  const { title = "Storybook", url = "./", image, target } = theme.brand;
  const targetValue = target || (url === "./" ? "" : "_blank");
  if (image === null) {
    if (title === null) {
      return null;
    }
    if (!url) {
      return react_default.createElement("div", { dangerouslySetInnerHTML: { __html: title } });
    }
    return react_default.createElement(LogoLink, { href: url, target: targetValue, dangerouslySetInnerHTML: { __html: title } });
  }
  const logo = image ? react_default.createElement(Img2, { src: image, alt: title }) : react_default.createElement(StorybookLogoStyled, { alt: title });
  if (url) {
    return react_default.createElement(LogoLink, { title, href: url, target: targetValue }, logo);
  }
  return react_default.createElement("div", null, logo);
});

// src/manager/components/sidebar/Menu.tsx
var SidebarIconButton = styled(IconButton)(({ highlighted, theme, isMobile }) => ({
  position: "relative",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1,
  ...isMobile && {
    width: 36,
    height: 36
  },
  ...highlighted && {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: "50%",
      background: theme.background.app,
      border: `1px solid ${theme.background.app}`,
      boxShadow: `0 0 0 2px ${theme.background.app}`
    },
    "&:after": {
      background: theme.color.positive,
      border: `1px solid rgba(0, 0, 0, 0.1)`,
      boxShadow: `0 0 0 2px ${theme.background.app}`
    },
    "&:hover:after, &:focus-visible:after": {
      boxShadow: `0 0 0 2px ${curriedTransparentize$1(0.88, theme.color.secondary)}`
    }
  }
}));
var MenuButtonGroup = styled.div({
  display: "flex",
  gap: 6
});
var SidebarMenuList = /* @__PURE__ */ __name(({ menu, onClick }) => {
  return react_default.createElement(TooltipLinkList, { links: menu, onClick });
}, "SidebarMenuList");
var SidebarMenu = /* @__PURE__ */ __name(({ menu, isHighlighted, onClick }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const { isMobile, setMobileMenuOpen } = useLayout();
  if (isMobile) {
    return react_default.createElement(MenuButtonGroup, null, react_default.createElement(
      SidebarIconButton,
      {
        title: "About Storybook",
        "aria-label": "About Storybook",
        highlighted: !!isHighlighted,
        active: false,
        onClick,
        isMobile: true
      },
      react_default.createElement(CogIcon, null)
    ), react_default.createElement(
      SidebarIconButton,
      {
        title: "Close menu",
        "aria-label": "Close menu",
        highlighted: false,
        active: false,
        onClick: () => setMobileMenuOpen(false),
        isMobile: true
      },
      react_default.createElement(CloseIcon, null)
    ));
  }
  return react_default.createElement(
    WithTooltip,
    {
      placement: "top",
      closeOnOutsideClick: true,
      tooltip: ({ onHide }) => react_default.createElement(SidebarMenuList, { onClick: onHide, menu }),
      onVisibleChange: setIsTooltipVisible
    },
    react_default.createElement(
      SidebarIconButton,
      {
        title: "Settings",
        "aria-label": "Settings",
        highlighted: !!isHighlighted,
        active: isTooltipVisible,
        size: "medium",
        isMobile: false
      },
      react_default.createElement(CogIcon, null)
    )
  );
}, "SidebarMenu");

// src/manager/components/sidebar/Heading.tsx
var BrandArea = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  fontWeight: theme.typography.weight.bold,
  color: theme.color.defaultText,
  marginRight: 20,
  display: "flex",
  width: "100%",
  alignItems: "center",
  minHeight: 22,
  "& > * > *": {
    maxWidth: "100%"
  },
  "& > *": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    flex: "1 1 auto"
  }
}));
var HeadingWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  minHeight: 42,
  paddingLeft: 8
});
var SkipToCanvasLink = styled(Button)(({ theme }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    position: "absolute",
    fontSize: theme.typography.size.s1,
    zIndex: 3,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
    transition: "opacity 150ms ease-out",
    "&:focus": {
      width: "100%",
      height: "inherit",
      padding: "10px 15px",
      margin: 0,
      clip: "unset",
      overflow: "unset",
      opacity: 1
    }
  }
}));
var Heading = /* @__PURE__ */ __name(({
  menuHighlighted = false,
  menu,
  skipLinkHref,
  isLoading,
  onMenuClick,
  ...props
}) => {
  return react_default.createElement(HeadingWrapper, { ...props }, skipLinkHref && react_default.createElement(SkipToCanvasLink, { asChild: true }, react_default.createElement("a", { href: skipLinkHref, tabIndex: 0 }, "Skip to canvas")), react_default.createElement(BrandArea, null, react_default.createElement(Brand, null)), react_default.createElement(SidebarMenu, { menu, isHighlighted: menuHighlighted, onClick: onMenuClick }));
}, "Heading");

// ../node_modules/downshift/dist/downshift.esm.js
var import_prop_types8 = __toESM(require_prop_types());
var import_react_is = __toESM(require_react_is());

// ../node_modules/compute-scroll-into-view/dist/index.js
var t = /* @__PURE__ */ __name((t2) => "object" == typeof t2 && null != t2 && 1 === t2.nodeType, "t");
var e = /* @__PURE__ */ __name((t2, e2) => (!e2 || "hidden" !== t2) && ("visible" !== t2 && "clip" !== t2), "e");
var n2 = /* @__PURE__ */ __name((t2, n3) => {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    const o3 = getComputedStyle(t2, null);
    return e(o3.overflowY, n3) || e(o3.overflowX, n3) || ((t3) => {
      const e2 = ((t4) => {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView) return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      })(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    })(t2);
  }
  return false;
}, "n");
var o2 = /* @__PURE__ */ __name((t2, e2, n3, o3, l3, r3, i2, s2) => r3 < t2 && i2 > e2 || r3 > t2 && i2 < e2 ? 0 : r3 <= t2 && s2 <= n3 || i2 >= e2 && s2 >= n3 ? r3 - t2 - o3 : i2 > e2 && s2 < n3 || r3 < t2 && s2 > n3 ? i2 - e2 + l3 : 0, "o");
var l2 = /* @__PURE__ */ __name((t2) => {
  const e2 = t2.parentElement;
  return null == e2 ? t2.getRootNode().host || null : e2;
}, "l");
var r2 = /* @__PURE__ */ __name((e2, r3) => {
  var i2, s2, d2, h2;
  if ("undefined" == typeof document) return [];
  const { scrollMode: c2, block: f2, inline: u2, boundary: a2, skipOverflowHiddenElements: g2 } = r3, p2 = "function" == typeof a2 ? a2 : (t2) => t2 !== a2;
  if (!t(e2)) throw new TypeError("Invalid target");
  const m2 = document.scrollingElement || document.documentElement, w2 = [];
  let W2 = e2;
  for (; t(W2) && p2(W2); ) {
    if (W2 = l2(W2), W2 === m2) {
      w2.push(W2);
      break;
    }
    null != W2 && W2 === document.body && n2(W2) && !n2(document.documentElement) || null != W2 && n2(W2, g2) && w2.push(W2);
  }
  const b2 = null != (s2 = null == (i2 = window.visualViewport) ? void 0 : i2.width) ? s2 : innerWidth, H7 = null != (h2 = null == (d2 = window.visualViewport) ? void 0 : d2.height) ? h2 : innerHeight, { scrollX: y2, scrollY: M2 } = window, { height: v2, width: E2, top: x2, right: C2, bottom: I2, left: R2 } = e2.getBoundingClientRect(), { top: T2, right: B2, bottom: F2, left: V } = ((t2) => {
    const e3 = window.getComputedStyle(t2);
    return { top: parseFloat(e3.scrollMarginTop) || 0, right: parseFloat(e3.scrollMarginRight) || 0, bottom: parseFloat(e3.scrollMarginBottom) || 0, left: parseFloat(e3.scrollMarginLeft) || 0 };
  })(e2);
  let k2 = "start" === f2 || "nearest" === f2 ? x2 - T2 : "end" === f2 ? I2 + F2 : x2 + v2 / 2 - T2 + F2, D2 = "center" === u2 ? R2 + E2 / 2 - V + B2 : "end" === u2 ? C2 + B2 : R2 - V;
  const L2 = [];
  for (let t2 = 0; t2 < w2.length; t2++) {
    const e3 = w2[t2], { height: l3, width: r4, top: i3, right: s3, bottom: d3, left: h3 } = e3.getBoundingClientRect();
    if ("if-needed" === c2 && x2 >= 0 && R2 >= 0 && I2 <= H7 && C2 <= b2 && (e3 === m2 && !n2(e3) || x2 >= i3 && I2 <= d3 && R2 >= h3 && C2 <= s3)) return L2;
    const a3 = getComputedStyle(e3), g3 = parseInt(a3.borderLeftWidth, 10), p3 = parseInt(a3.borderTopWidth, 10), W3 = parseInt(a3.borderRightWidth, 10), T3 = parseInt(a3.borderBottomWidth, 10);
    let B3 = 0, F3 = 0;
    const V2 = "offsetWidth" in e3 ? e3.offsetWidth - e3.clientWidth - g3 - W3 : 0, S2 = "offsetHeight" in e3 ? e3.offsetHeight - e3.clientHeight - p3 - T3 : 0, X = "offsetWidth" in e3 ? 0 === e3.offsetWidth ? 0 : r4 / e3.offsetWidth : 0, Y2 = "offsetHeight" in e3 ? 0 === e3.offsetHeight ? 0 : l3 / e3.offsetHeight : 0;
    if (m2 === e3) B3 = "start" === f2 ? k2 : "end" === f2 ? k2 - H7 : "nearest" === f2 ? o2(M2, M2 + H7, H7, p3, T3, M2 + k2, M2 + k2 + v2, v2) : k2 - H7 / 2, F3 = "start" === u2 ? D2 : "center" === u2 ? D2 - b2 / 2 : "end" === u2 ? D2 - b2 : o2(y2, y2 + b2, b2, g3, W3, y2 + D2, y2 + D2 + E2, E2), B3 = Math.max(0, B3 + M2), F3 = Math.max(0, F3 + y2);
    else {
      B3 = "start" === f2 ? k2 - i3 - p3 : "end" === f2 ? k2 - d3 + T3 + S2 : "nearest" === f2 ? o2(i3, d3, l3, p3, T3 + S2, k2, k2 + v2, v2) : k2 - (i3 + l3 / 2) + S2 / 2, F3 = "start" === u2 ? D2 - h3 - g3 : "center" === u2 ? D2 - (h3 + r4 / 2) + V2 / 2 : "end" === u2 ? D2 - s3 + W3 + V2 : o2(h3, s3, r4, g3, W3 + V2, D2, D2 + E2, E2);
      const { scrollLeft: t3, scrollTop: n3 } = e3;
      B3 = 0 === Y2 ? 0 : Math.max(0, Math.min(n3 + B3 / Y2, e3.scrollHeight - l3 / Y2 + S2)), F3 = 0 === X ? 0 : Math.max(0, Math.min(t3 + F3 / X, e3.scrollWidth - r4 / X + V2)), k2 += n3 - B3, D2 += t3 - F3;
    }
    L2.push({ el: e3, top: B3, left: F3 });
  }
  return L2;
}, "r");

// ../node_modules/tslib/tslib.es6.mjs
var __assign = /* @__PURE__ */ __name(function() {
  __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t2) {
    for (var s2, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  }, "__assign");
  return __assign.apply(this, arguments);
}, "__assign");

// ../node_modules/downshift/dist/downshift.esm.js
var idCounter = 0;
function cbToCb(cb) {
  return typeof cb === "function" ? cb : noop4;
}
__name(cbToCb, "cbToCb");
function noop4() {
}
__name(noop4, "noop");
function scrollIntoView2(node, menuNode) {
  if (!node) {
    return;
  }
  var actions = r2(node, {
    boundary: menuNode,
    block: "nearest",
    scrollMode: "if-needed"
  });
  actions.forEach(function(_ref) {
    var el = _ref.el, top = _ref.top, left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
__name(scrollIntoView2, "scrollIntoView");
function isOrContainsNode(parent, child, environment) {
  var result = parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
  return result;
}
__name(isOrContainsNode, "isOrContainsNode");
function debounce3(fn, time) {
  var timeoutId;
  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
  __name(cancel, "cancel");
  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel();
    timeoutId = setTimeout(function() {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }
  __name(wrapper, "wrapper");
  wrapper.cancel = cancel;
  return wrapper;
}
__name(debounce3, "debounce");
function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return fns.some(function(fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return event.preventDownshiftDefault || event.hasOwnProperty("nativeEvent") && event.nativeEvent.preventDownshiftDefault;
    });
  };
}
__name(callAllEventHandlers, "callAllEventHandlers");
function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }
  return function(node) {
    refs.forEach(function(ref) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
__name(handleRefs, "handleRefs");
function generateId() {
  return String(idCounter++);
}
__name(generateId, "generateId");
function getA11yStatusMessage(_ref2) {
  var isOpen = _ref2.isOpen, resultCount = _ref2.resultCount, previousResultCount = _ref2.previousResultCount;
  if (!isOpen) {
    return "";
  }
  if (!resultCount) {
    return "No results are available.";
  }
  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }
  return "";
}
__name(getA11yStatusMessage, "getA11yStatusMessage");
function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? (
    /* istanbul ignore next (preact) */
    arg[0]
  ) : arg;
  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
__name(unwrapArray, "unwrapArray");
function isDOMElement(element) {
  return typeof element.type === "string";
}
__name(isDOMElement, "isDOMElement");
function getElementProps(element) {
  return element.props;
}
__name(getElementProps, "getElementProps");
var stateKeys = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function pickState(state) {
  if (state === void 0) {
    state = {};
  }
  var result = {};
  stateKeys.forEach(function(k2) {
    if (state.hasOwnProperty(k2)) {
      result[k2] = state[k2];
    }
  });
  return result;
}
__name(pickState, "pickState");
function getState(state, props) {
  if (!state || !props) {
    return state;
  }
  return Object.keys(state).reduce(function(prevState, key) {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
__name(getState, "getState");
function isControlledProp(props, key) {
  return props[key] !== void 0;
}
__name(isControlledProp, "isControlledProp");
function normalizeArrowKey(event) {
  var key = event.key, keyCode = event.keyCode;
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0) {
    return "Arrow" + key;
  }
  return key;
}
__name(normalizeArrowKey, "normalizeArrowKey");
function getHighlightedIndex(start, offset, items, isItemDisabled2, circular) {
  if (circular === void 0) {
    circular = false;
  }
  var count = items.length;
  if (count === 0) {
    return -1;
  }
  var itemsLastIndex = count - 1;
  if (typeof start !== "number" || start < 0 || start > itemsLastIndex) {
    start = offset > 0 ? -1 : itemsLastIndex + 1;
  }
  var current = start + offset;
  if (current < 0) {
    current = circular ? itemsLastIndex : 0;
  } else if (current > itemsLastIndex) {
    current = circular ? 0 : itemsLastIndex;
  }
  var highlightedIndex = getNonDisabledIndex(current, offset < 0, items, isItemDisabled2, circular);
  if (highlightedIndex === -1) {
    return start >= count ? -1 : start;
  }
  return highlightedIndex;
}
__name(getHighlightedIndex, "getHighlightedIndex");
function getNonDisabledIndex(start, backwards, items, isItemDisabled2, circular) {
  if (circular === void 0) {
    circular = false;
  }
  var count = items.length;
  if (backwards) {
    for (var index = start; index >= 0; index--) {
      if (!isItemDisabled2(items[index], index)) {
        return index;
      }
    }
  } else {
    for (var _index = start; _index < count; _index++) {
      if (!isItemDisabled2(items[_index], _index)) {
        return _index;
      }
    }
  }
  if (circular) {
    return getNonDisabledIndex(backwards ? count - 1 : 0, backwards, items, isItemDisabled2);
  }
  return -1;
}
__name(getNonDisabledIndex, "getNonDisabledIndex");
function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }
  return environment && downshiftElements.some(function(contextNode) {
    return contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment));
  });
}
__name(targetWithinDownshift, "targetWithinDownshift");
if (false) {
  validateControlledUnchanged = /* @__PURE__ */ __name(function validateControlledUnchanged(state, prevProps, nextProps) {
    var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
    Object.keys(state).forEach(function(propKey) {
      if (prevProps[propKey] !== void 0 && nextProps[propKey] === void 0) {
        console.error('downshift: A component has changed the controlled prop "' + propKey + '" to be uncontrolled. ' + warningDescription);
      } else if (prevProps[propKey] === void 0 && nextProps[propKey] !== void 0) {
        console.error('downshift: A component has changed the uncontrolled prop "' + propKey + '" to be controlled. ' + warningDescription);
      }
    });
  }, "validateControlledUnchanged");
}
var cleanupStatus = debounce3(function(documentProp) {
  getStatusDiv(documentProp).textContent = "";
}, 500);
function getStatusDiv(documentProp) {
  var statusDiv = documentProp.getElementById("a11y-status-message");
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = documentProp.createElement("div");
  statusDiv.setAttribute("id", "a11y-status-message");
  statusDiv.setAttribute("role", "status");
  statusDiv.setAttribute("aria-live", "polite");
  statusDiv.setAttribute("aria-relevant", "additions text");
  Object.assign(statusDiv.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}
__name(getStatusDiv, "getStatusDiv");
function setStatus(status, documentProp) {
  if (!status || !documentProp) {
    return;
  }
  var div = getStatusDiv(documentProp);
  div.textContent = status;
  cleanupStatus(documentProp);
}
__name(setStatus, "setStatus");
function cleanupStatusDiv(documentProp) {
  var statusDiv = documentProp == null ? void 0 : documentProp.getElementById("a11y-status-message");
  if (statusDiv) {
    statusDiv.remove();
  }
}
__name(cleanupStatusDiv, "cleanupStatusDiv");
var unknown = false ? "__autocomplete_unknown__" : 0;
var mouseUp = false ? "__autocomplete_mouseup__" : 1;
var itemMouseEnter = false ? "__autocomplete_item_mouseenter__" : 2;
var keyDownArrowUp = false ? "__autocomplete_keydown_arrow_up__" : 3;
var keyDownArrowDown = false ? "__autocomplete_keydown_arrow_down__" : 4;
var keyDownEscape = false ? "__autocomplete_keydown_escape__" : 5;
var keyDownEnter = false ? "__autocomplete_keydown_enter__" : 6;
var keyDownHome = false ? "__autocomplete_keydown_home__" : 7;
var keyDownEnd = false ? "__autocomplete_keydown_end__" : 8;
var clickItem = false ? "__autocomplete_click_item__" : 9;
var blurInput = false ? "__autocomplete_blur_input__" : 10;
var changeInput = false ? "__autocomplete_change_input__" : 11;
var keyDownSpaceButton = false ? "__autocomplete_keydown_space_button__" : 12;
var clickButton = false ? "__autocomplete_click_button__" : 13;
var blurButton = false ? "__autocomplete_blur_button__" : 14;
var controlledPropUpdatedSelectedItem = false ? "__autocomplete_controlled_prop_updated_selected_item__" : 15;
var touchEnd = false ? "__autocomplete_touchend__" : 16;
var stateChangeTypes$3 = Object.freeze({
  __proto__: null,
  blurButton,
  blurInput,
  changeInput,
  clickButton,
  clickItem,
  controlledPropUpdatedSelectedItem,
  itemMouseEnter,
  keyDownArrowDown,
  keyDownArrowUp,
  keyDownEnd,
  keyDownEnter,
  keyDownEscape,
  keyDownHome,
  keyDownSpaceButton,
  mouseUp,
  touchEnd,
  unknown
});
var _excluded$3 = ["refKey", "ref"];
var _excluded2$3 = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"];
var _excluded3$2 = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"];
var _excluded4$2 = ["refKey", "ref"];
var _excluded5 = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"];
var Downshift = function() {
  var Downshift2 = function(_Component) {
    function Downshift3(_props) {
      var _this;
      _this = _Component.call(this, _props) || this;
      _this.id = _this.props.id || "downshift-" + generateId();
      _this.menuId = _this.props.menuId || _this.id + "-menu";
      _this.labelId = _this.props.labelId || _this.id + "-label";
      _this.inputId = _this.props.inputId || _this.id + "-input";
      _this.getItemId = _this.props.getItemId || function(index) {
        return _this.id + "-item-" + index;
      };
      _this.items = [];
      _this.itemCount = null;
      _this.previousResultCount = 0;
      _this.timeoutIds = [];
      _this.internalSetTimeout = function(fn, time) {
        var id = setTimeout(function() {
          _this.timeoutIds = _this.timeoutIds.filter(function(i2) {
            return i2 !== id;
          });
          fn();
        }, time);
        _this.timeoutIds.push(id);
      };
      _this.setItemCount = function(count) {
        _this.itemCount = count;
      };
      _this.unsetItemCount = function() {
        _this.itemCount = null;
      };
      _this.isItemDisabled = function(_item, index) {
        var currentElementNode = _this.getItemNodeFromIndex(index);
        return currentElementNode && currentElementNode.hasAttribute("disabled");
      };
      _this.setHighlightedIndex = function(highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(_extends({
          highlightedIndex
        }, otherStateToSet));
      };
      _this.clearSelection = function(cb) {
        _this.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: _this.props.defaultHighlightedIndex,
          isOpen: _this.props.defaultIsOpen
        }, cb);
      };
      _this.selectItem = function(item, otherStateToSet, cb) {
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(_extends({
          isOpen: _this.props.defaultIsOpen,
          highlightedIndex: _this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: _this.props.itemToString(item)
        }, otherStateToSet), cb);
      };
      _this.selectItemAtIndex = function(itemIndex, otherStateToSet, cb) {
        var item = _this.items[itemIndex];
        if (item == null) {
          return;
        }
        _this.selectItem(item, otherStateToSet, cb);
      };
      _this.selectHighlightedItem = function(otherStateToSet, cb) {
        return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
      };
      _this.internalSetState = function(stateToSet, cb) {
        var isItemSelected, onChangeArg;
        var onStateChangeArg = {};
        var isStateToSetFunction = typeof stateToSet === "function";
        if (!isStateToSetFunction && stateToSet.hasOwnProperty("inputValue")) {
          _this.props.onInputValueChange(stateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), stateToSet));
        }
        return _this.setState(function(state) {
          var _newStateToSet;
          state = _this.getState(state);
          var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;
          newStateToSet = _this.props.stateReducer(state, newStateToSet);
          isItemSelected = newStateToSet.hasOwnProperty("selectedItem");
          var nextState = {};
          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }
          (_newStateToSet = newStateToSet).type || (_newStateToSet.type = unknown);
          Object.keys(newStateToSet).forEach(function(key) {
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            }
            if (key === "type") {
              return;
            }
            newStateToSet[key];
            if (!isControlledProp(_this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          });
          if (isStateToSetFunction && newStateToSet.hasOwnProperty("inputValue")) {
            _this.props.onInputValueChange(newStateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), newStateToSet));
          }
          return nextState;
        }, function() {
          cbToCb(cb)();
          var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
          if (hasMoreStateThanType) {
            _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
          }
          if (isItemSelected) {
            _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
          }
          if (onChangeArg !== void 0) {
            _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
          }
          _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
        });
      };
      _this.rootRef = function(node) {
        return _this._rootNode = node;
      };
      _this.getRootProps = function(_temp, _temp2) {
        var _extends2;
        var _ref = _temp === void 0 ? {} : _temp, _ref$refKey = _ref.refKey, refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey, ref = _ref.ref, rest2 = _objectWithoutPropertiesLoose(_ref, _excluded$3);
        var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$suppressRefErro = _ref2.suppressRefError, suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;
        var _this$getState = _this.getState(), isOpen = _this$getState.isOpen;
        return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, _this.rootRef), _extends2.role = "combobox", _extends2["aria-expanded"] = isOpen, _extends2["aria-haspopup"] = "listbox", _extends2["aria-owns"] = isOpen ? _this.menuId : void 0, _extends2["aria-labelledby"] = _this.labelId, _extends2), rest2);
      };
      _this.keyDownHandlers = {
        ArrowDown: /* @__PURE__ */ __name(function ArrowDown(event) {
          var _this2 = this;
          event.preventDefault();
          if (this.getState().isOpen) {
            var amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, function() {
              var itemCount = _this2.getItemCount();
              if (itemCount > 0) {
                var _this2$getState = _this2.getState(), highlightedIndex = _this2$getState.highlightedIndex;
                var nextHighlightedIndex = getHighlightedIndex(highlightedIndex, 1, {
                  length: itemCount
                }, _this2.isItemDisabled, true);
                _this2.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        }, "ArrowDown"),
        ArrowUp: /* @__PURE__ */ __name(function ArrowUp(event) {
          var _this3 = this;
          event.preventDefault();
          if (this.getState().isOpen) {
            var amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, function() {
              var itemCount = _this3.getItemCount();
              if (itemCount > 0) {
                var _this3$getState = _this3.getState(), highlightedIndex = _this3$getState.highlightedIndex;
                var nextHighlightedIndex = getHighlightedIndex(highlightedIndex, -1, {
                  length: itemCount
                }, _this3.isItemDisabled, true);
                _this3.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        }, "ArrowUp"),
        Enter: /* @__PURE__ */ __name(function Enter(event) {
          if (event.which === 229) {
            return;
          }
          var _this$getState2 = this.getState(), isOpen = _this$getState2.isOpen, highlightedIndex = _this$getState2.highlightedIndex;
          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            var item = this.items[highlightedIndex];
            var itemNode = this.getItemNodeFromIndex(highlightedIndex);
            if (item == null || itemNode && itemNode.hasAttribute("disabled")) {
              return;
            }
            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        }, "Enter"),
        Escape: /* @__PURE__ */ __name(function Escape(event) {
          event.preventDefault();
          this.reset(_extends({
            type: keyDownEscape
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }, "Escape")
      };
      _this.buttonKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
        " ": /* @__PURE__ */ __name(function _2(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }, "_")
      });
      _this.inputKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
        Home: /* @__PURE__ */ __name(function Home(event) {
          var _this$getState3 = this.getState(), isOpen = _this$getState3.isOpen;
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          var itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          var newHighlightedIndex = getNonDisabledIndex(0, false, {
            length: itemCount
          }, this.isItemDisabled);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        }, "Home"),
        End: /* @__PURE__ */ __name(function End(event) {
          var _this$getState4 = this.getState(), isOpen = _this$getState4.isOpen;
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          var itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          var newHighlightedIndex = getNonDisabledIndex(itemCount - 1, true, {
            length: itemCount
          }, this.isItemDisabled);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }, "End")
      });
      _this.getToggleButtonProps = function(_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3, onClick = _ref3.onClick;
        _ref3.onPress;
        var onKeyDown = _ref3.onKeyDown, onKeyUp = _ref3.onKeyUp, onBlur = _ref3.onBlur, rest2 = _objectWithoutPropertiesLoose(_ref3, _excluded2$3);
        var _this$getState5 = _this.getState(), isOpen = _this$getState5.isOpen;
        var enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        var eventHandlers = rest2.disabled ? {} : enabledEventHandlers;
        return _extends({
          type: "button",
          role: "button",
          "aria-label": isOpen ? "close menu" : "open menu",
          "aria-haspopup": true,
          "data-toggle": true
        }, eventHandlers, rest2);
      };
      _this.buttonHandleKeyUp = function(event) {
        event.preventDefault();
      };
      _this.buttonHandleKeyDown = function(event) {
        var key = normalizeArrowKey(event);
        if (_this.buttonKeyDownHandlers[key]) {
          _this.buttonKeyDownHandlers[key].call(_this, event);
        }
      };
      _this.buttonHandleClick = function(event) {
        event.preventDefault();
        if (_this.props.environment) {
          var _this$props$environme = _this.props.environment.document, body = _this$props$environme.body, activeElement = _this$props$environme.activeElement;
          if (body && body === activeElement) {
            event.target.focus();
          }
        }
        if (false) {
          _this.toggleMenu({
            type: clickButton
          });
        } else {
          _this.internalSetTimeout(function() {
            return _this.toggleMenu({
              type: clickButton
            });
          });
        }
      };
      _this.buttonHandleBlur = function(event) {
        var blurTarget = event.target;
        _this.internalSetTimeout(function() {
          if (_this.isMouseDown || !_this.props.environment) {
            return;
          }
          var activeElement = _this.props.environment.document.activeElement;
          if ((activeElement == null || activeElement.id !== _this.inputId) && activeElement !== blurTarget) {
            _this.reset({
              type: blurButton
            });
          }
        });
      };
      _this.getLabelProps = function(props) {
        return _extends({
          htmlFor: _this.inputId,
          id: _this.labelId
        }, props);
      };
      _this.getInputProps = function(_temp4) {
        var _ref4 = _temp4 === void 0 ? {} : _temp4, onKeyDown = _ref4.onKeyDown, onBlur = _ref4.onBlur, onChange = _ref4.onChange, onInput = _ref4.onInput;
        _ref4.onChangeText;
        var rest2 = _objectWithoutPropertiesLoose(_ref4, _excluded3$2);
        var onChangeKey;
        var eventHandlers = {};
        {
          onChangeKey = "onChange";
        }
        var _this$getState6 = _this.getState(), inputValue = _this$getState6.inputValue, isOpen = _this$getState6.isOpen, highlightedIndex = _this$getState6.highlightedIndex;
        if (!rest2.disabled) {
          var _eventHandlers;
          eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
        }
        return _extends({
          "aria-autocomplete": "list",
          "aria-activedescendant": isOpen && typeof highlightedIndex === "number" && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : void 0,
          "aria-controls": isOpen ? _this.menuId : void 0,
          "aria-labelledby": rest2 && rest2["aria-label"] ? void 0 : _this.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: inputValue,
          id: _this.inputId
        }, eventHandlers, rest2);
      };
      _this.inputHandleKeyDown = function(event) {
        var key = normalizeArrowKey(event);
        if (key && _this.inputKeyDownHandlers[key]) {
          _this.inputKeyDownHandlers[key].call(_this, event);
        }
      };
      _this.inputHandleChange = function(event) {
        _this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: _this.props.defaultHighlightedIndex
        });
      };
      _this.inputHandleBlur = function() {
        _this.internalSetTimeout(function() {
          var _activeElement$datase;
          if (_this.isMouseDown || !_this.props.environment) {
            return;
          }
          var activeElement = _this.props.environment.document.activeElement;
          var downshiftButtonIsActive = (activeElement == null || (_activeElement$datase = activeElement.dataset) == null ? void 0 : _activeElement$datase.toggle) && _this._rootNode && _this._rootNode.contains(activeElement);
          if (!downshiftButtonIsActive) {
            _this.reset({
              type: blurInput
            });
          }
        });
      };
      _this.menuRef = function(node) {
        _this._menuNode = node;
      };
      _this.getMenuProps = function(_temp5, _temp6) {
        var _extends3;
        var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$refKey = _ref5.refKey, refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey, ref = _ref5.ref, props = _objectWithoutPropertiesLoose(_ref5, _excluded4$2);
        var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$suppressRefErro = _ref6.suppressRefError, suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;
        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = "listbox", _extends3["aria-labelledby"] = props && props["aria-label"] ? void 0 : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
      };
      _this.getItemProps = function(_temp7) {
        var _enabledEventHandlers;
        var _ref7 = _temp7 === void 0 ? {} : _temp7, onMouseMove = _ref7.onMouseMove, onMouseDown = _ref7.onMouseDown, onClick = _ref7.onClick;
        _ref7.onPress;
        var index = _ref7.index, _ref7$item = _ref7.item, item = _ref7$item === void 0 ? true ? (
          /* istanbul ignore next */
          void 0
        ) : requiredProp("getItemProps", "item") : _ref7$item, rest2 = _objectWithoutPropertiesLoose(_ref7, _excluded5);
        if (index === void 0) {
          _this.items.push(item);
          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }
        var onSelectKey = "onClick";
        var customClickHandler = onClick;
        var enabledEventHandlers = (_enabledEventHandlers = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: callAllEventHandlers(onMouseMove, function() {
            if (index === _this.getState().highlightedIndex) {
              return;
            }
            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            });
            _this.avoidScrolling = true;
            _this.internalSetTimeout(function() {
              return _this.avoidScrolling = false;
            }, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, function(event) {
            event.preventDefault();
          })
        }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function() {
          _this.selectItemAtIndex(index, {
            type: clickItem
          });
        }), _enabledEventHandlers);
        var eventHandlers = rest2.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return _extends({
          id: _this.getItemId(index),
          role: "option",
          "aria-selected": _this.getState().highlightedIndex === index
        }, eventHandlers, rest2);
      };
      _this.clearItems = function() {
        _this.items = [];
      };
      _this.reset = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(function(_ref8) {
          var selectedItem = _ref8.selectedItem;
          return _extends({
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem)
          }, otherStateToSet);
        }, cb);
      };
      _this.toggleMenu = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(function(_ref9) {
          var isOpen = _ref9.isOpen;
          return _extends({
            isOpen: !isOpen
          }, isOpen && {
            highlightedIndex: _this.props.defaultHighlightedIndex
          }, otherStateToSet);
        }, function() {
          var _this$getState7 = _this.getState(), isOpen = _this$getState7.isOpen, highlightedIndex = _this$getState7.highlightedIndex;
          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === "number") {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }
          cbToCb(cb)();
        });
      };
      _this.openMenu = function(cb) {
        _this.internalSetState({
          isOpen: true
        }, cb);
      };
      _this.closeMenu = function(cb) {
        _this.internalSetState({
          isOpen: false
        }, cb);
      };
      _this.updateStatus = debounce3(function() {
        var _this$props;
        if (!((_this$props = _this.props) != null && (_this$props = _this$props.environment) != null && _this$props.document)) {
          return;
        }
        var state = _this.getState();
        var item = _this.items[state.highlightedIndex];
        var resultCount = _this.getItemCount();
        var status = _this.props.getA11yStatusMessage(_extends({
          itemToString: _this.props.itemToString,
          previousResultCount: _this.previousResultCount,
          resultCount,
          highlightedItem: item
        }, state));
        _this.previousResultCount = resultCount;
        setStatus(status, _this.props.environment.document);
      }, 200);
      var _this$props2 = _this.props, defaultHighlightedIndex = _this$props2.defaultHighlightedIndex, _this$props2$initialH = _this$props2.initialHighlightedIndex, _highlightedIndex = _this$props2$initialH === void 0 ? defaultHighlightedIndex : _this$props2$initialH, defaultIsOpen = _this$props2.defaultIsOpen, _this$props2$initialI = _this$props2.initialIsOpen, _isOpen = _this$props2$initialI === void 0 ? defaultIsOpen : _this$props2$initialI, _this$props2$initialI2 = _this$props2.initialInputValue, _inputValue = _this$props2$initialI2 === void 0 ? "" : _this$props2$initialI2, _this$props2$initialS = _this$props2.initialSelectedItem, _selectedItem = _this$props2$initialS === void 0 ? null : _this$props2$initialS;
      var _state = _this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });
      if (_state.selectedItem != null && _this.props.initialInputValue === void 0) {
        _state.inputValue = _this.props.itemToString(_state.selectedItem);
      }
      _this.state = _state;
      return _this;
    }
    __name(Downshift3, "Downshift");
    _inheritsLoose(Downshift3, _Component);
    var _proto = Downshift3.prototype;
    _proto.internalClearTimeouts = /* @__PURE__ */ __name(function internalClearTimeouts() {
      this.timeoutIds.forEach(function(id) {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }, "internalClearTimeouts");
    _proto.getState = /* @__PURE__ */ __name(function getState$1(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }
      return getState(stateToMerge, this.props);
    }, "getState$1");
    _proto.getItemCount = /* @__PURE__ */ __name(function getItemCount() {
      var itemCount = this.items.length;
      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== void 0) {
        itemCount = this.props.itemCount;
      }
      return itemCount;
    }, "getItemCount");
    _proto.getItemNodeFromIndex = /* @__PURE__ */ __name(function getItemNodeFromIndex(index) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(index)) : null;
    }, "getItemNodeFromIndex");
    _proto.scrollHighlightedItemIntoView = /* @__PURE__ */ __name(function scrollHighlightedItemIntoView() {
      {
        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    }, "scrollHighlightedItemIntoView");
    _proto.moveHighlightedIndex = /* @__PURE__ */ __name(function moveHighlightedIndex(amount, otherStateToSet) {
      var itemCount = this.getItemCount();
      var _this$getState8 = this.getState(), highlightedIndex = _this$getState8.highlightedIndex;
      if (itemCount > 0) {
        var nextHighlightedIndex = getHighlightedIndex(highlightedIndex, amount, {
          length: itemCount
        }, this.isItemDisabled, true);
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    }, "moveHighlightedIndex");
    _proto.getStateAndHelpers = /* @__PURE__ */ __name(function getStateAndHelpers() {
      var _this$getState9 = this.getState(), highlightedIndex = _this$getState9.highlightedIndex, inputValue = _this$getState9.inputValue, selectedItem = _this$getState9.selectedItem, isOpen = _this$getState9.isOpen;
      var itemToString2 = this.props.itemToString;
      var id = this.id;
      var getRootProps = this.getRootProps, getToggleButtonProps = this.getToggleButtonProps, getLabelProps = this.getLabelProps, getMenuProps = this.getMenuProps, getInputProps = this.getInputProps, getItemProps = this.getItemProps, openMenu = this.openMenu, closeMenu = this.closeMenu, toggleMenu = this.toggleMenu, selectItem = this.selectItem, selectItemAtIndex = this.selectItemAtIndex, selectHighlightedItem = this.selectHighlightedItem, setHighlightedIndex = this.setHighlightedIndex, clearSelection = this.clearSelection, clearItems = this.clearItems, reset = this.reset, setItemCount = this.setItemCount, unsetItemCount = this.unsetItemCount, setState = this.internalSetState;
      return {
        // prop getters
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        // actions
        reset,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        setItemCount,
        unsetItemCount,
        setState,
        // props
        itemToString: itemToString2,
        // derived
        id,
        // state
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      };
    }, "getStateAndHelpers");
    _proto.componentDidMount = /* @__PURE__ */ __name(function componentDidMount() {
      var _this4 = this;
      if (false) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
      if (!this.props.environment) {
        this.cleanup = function() {
          _this4.internalClearTimeouts();
        };
      } else {
        var onMouseDown = /* @__PURE__ */ __name(function onMouseDown2() {
          _this4.isMouseDown = true;
        }, "onMouseDown");
        var onMouseUp = /* @__PURE__ */ __name(function onMouseUp2(event) {
          _this4.isMouseDown = false;
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this4._rootNode, _this4._menuNode], _this4.props.environment);
          if (!contextWithinDownshift && _this4.getState().isOpen) {
            _this4.reset({
              type: mouseUp
            }, function() {
              return _this4.props.onOuterClick(_this4.getStateAndHelpers());
            });
          }
        }, "onMouseUp");
        var onTouchStart = /* @__PURE__ */ __name(function onTouchStart2() {
          _this4.isTouchMove = false;
        }, "onTouchStart");
        var onTouchMove = /* @__PURE__ */ __name(function onTouchMove2() {
          _this4.isTouchMove = true;
        }, "onTouchMove");
        var onTouchEnd = /* @__PURE__ */ __name(function onTouchEnd2(event) {
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this4._rootNode, _this4._menuNode], _this4.props.environment, false);
          if (!_this4.isTouchMove && !contextWithinDownshift && _this4.getState().isOpen) {
            _this4.reset({
              type: touchEnd
            }, function() {
              return _this4.props.onOuterClick(_this4.getStateAndHelpers());
            });
          }
        }, "onTouchEnd");
        var environment = this.props.environment;
        environment.addEventListener("mousedown", onMouseDown);
        environment.addEventListener("mouseup", onMouseUp);
        environment.addEventListener("touchstart", onTouchStart);
        environment.addEventListener("touchmove", onTouchMove);
        environment.addEventListener("touchend", onTouchEnd);
        this.cleanup = function() {
          _this4.internalClearTimeouts();
          _this4.updateStatus.cancel();
          environment.removeEventListener("mousedown", onMouseDown);
          environment.removeEventListener("mouseup", onMouseUp);
          environment.removeEventListener("touchstart", onTouchStart);
          environment.removeEventListener("touchmove", onTouchMove);
          environment.removeEventListener("touchend", onTouchEnd);
        };
      }
    }, "componentDidMount");
    _proto.shouldScroll = /* @__PURE__ */ __name(function shouldScroll(prevState, prevProps) {
      var _ref0 = this.props.highlightedIndex === void 0 ? this.getState() : this.props, currentHighlightedIndex = _ref0.highlightedIndex;
      var _ref1 = prevProps.highlightedIndex === void 0 ? prevState : prevProps, prevHighlightedIndex = _ref1.highlightedIndex;
      var scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      var scrollWhenNavigating = currentHighlightedIndex !== prevHighlightedIndex;
      return scrollWhenOpen || scrollWhenNavigating;
    }, "shouldScroll");
    _proto.componentDidUpdate = /* @__PURE__ */ __name(function componentDidUpdate(prevProps, prevState) {
      if (false) {
        validateControlledUnchanged(this.state, prevProps, this.props);
        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }
      if (isControlledProp(this.props, "selectedItem") && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }
      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      {
        this.updateStatus();
      }
    }, "componentDidUpdate");
    _proto.componentWillUnmount = /* @__PURE__ */ __name(function componentWillUnmount() {
      this.cleanup();
    }, "componentWillUnmount");
    _proto.render = /* @__PURE__ */ __name(function render2() {
      var children2 = unwrapArray(this.props.children, noop4);
      this.clearItems();
      this.getRootProps.called = false;
      this.getRootProps.refKey = void 0;
      this.getRootProps.suppressRefError = void 0;
      this.getMenuProps.called = false;
      this.getMenuProps.refKey = void 0;
      this.getMenuProps.suppressRefError = void 0;
      this.getLabelProps.called = false;
      this.getInputProps.called = false;
      var element = unwrapArray(children2(this.getStateAndHelpers()));
      if (!element) {
        return null;
      }
      if (this.getRootProps.called || this.props.suppressRefError) {
        if (false) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }
        return element;
      } else if (isDOMElement(element)) {
        return cloneElement(element, this.getRootProps(getElementProps(element)));
      }
      if (false) {
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
      }
      return void 0;
    }, "render");
    return Downshift3;
  }(Component);
  Downshift2.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage,
    itemToString: /* @__PURE__ */ __name(function itemToString2(i2) {
      if (i2 == null) {
        return "";
      }
      if (false) {
        console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", i2);
      }
      return String(i2);
    }, "itemToString"),
    onStateChange: noop4,
    onInputValueChange: noop4,
    onUserAction: noop4,
    onChange: noop4,
    onSelect: noop4,
    onOuterClick: noop4,
    selectedItemChanged: /* @__PURE__ */ __name(function selectedItemChanged(prevItem, item) {
      return prevItem !== item;
    }, "selectedItemChanged"),
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window === "undefined" || false ? void 0 : window
    ),
    stateReducer: /* @__PURE__ */ __name(function stateReducer2(state, stateToSet) {
      return stateToSet;
    }, "stateReducer"),
    suppressRefError: false,
    scrollIntoView: scrollIntoView2
  };
  Downshift2.stateChangeTypes = stateChangeTypes$3;
  return Downshift2;
}();
false ? Downshift.propTypes = {
  children: import_prop_types8.default.func,
  defaultHighlightedIndex: import_prop_types8.default.number,
  defaultIsOpen: import_prop_types8.default.bool,
  initialHighlightedIndex: import_prop_types8.default.number,
  initialSelectedItem: import_prop_types8.default.any,
  initialInputValue: import_prop_types8.default.string,
  initialIsOpen: import_prop_types8.default.bool,
  getA11yStatusMessage: import_prop_types8.default.func,
  itemToString: import_prop_types8.default.func,
  onChange: import_prop_types8.default.func,
  onSelect: import_prop_types8.default.func,
  onStateChange: import_prop_types8.default.func,
  onInputValueChange: import_prop_types8.default.func,
  onUserAction: import_prop_types8.default.func,
  onOuterClick: import_prop_types8.default.func,
  selectedItemChanged: import_prop_types8.default.func,
  stateReducer: import_prop_types8.default.func,
  itemCount: import_prop_types8.default.number,
  id: import_prop_types8.default.string,
  environment: import_prop_types8.default.shape({
    addEventListener: import_prop_types8.default.func.isRequired,
    removeEventListener: import_prop_types8.default.func.isRequired,
    document: import_prop_types8.default.shape({
      createElement: import_prop_types8.default.func.isRequired,
      getElementById: import_prop_types8.default.func.isRequired,
      activeElement: import_prop_types8.default.any.isRequired,
      body: import_prop_types8.default.any.isRequired
    }).isRequired,
    Node: import_prop_types8.default.func.isRequired
  }),
  suppressRefError: import_prop_types8.default.bool,
  scrollIntoView: import_prop_types8.default.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: import_prop_types8.default.any,
  isOpen: import_prop_types8.default.bool,
  inputValue: import_prop_types8.default.string,
  highlightedIndex: import_prop_types8.default.number,
  labelId: import_prop_types8.default.string,
  inputId: import_prop_types8.default.string,
  menuId: import_prop_types8.default.string,
  getItemId: import_prop_types8.default.func
  /* eslint-enable react/no-unused-prop-types */
} : void 0;
var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ""
};
function callOnChangeProps(action, state, newState) {
  var props = action.props, type = action.type;
  var changes = {};
  Object.keys(state).forEach(function(key) {
    invokeOnChangeHandler(key, action, state, newState);
    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });
  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange(_extends({
      type
    }, changes));
  }
}
__name(callOnChangeProps, "callOnChangeProps");
function invokeOnChangeHandler(key, action, state, newState) {
  var props = action.props, type = action.type;
  var handler = "on" + capitalizeString(key) + "Change";
  if (props[handler] && newState[key] !== void 0 && newState[key] !== state[key]) {
    props[handler](_extends({
      type
    }, newState));
  }
}
__name(invokeOnChangeHandler, "invokeOnChangeHandler");
function stateReducer(s2, a2) {
  return a2.changes;
}
__name(stateReducer, "stateReducer");
var updateA11yStatus = debounce3(function(status, document11) {
  setStatus(status, document11);
}, 200);
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
var useElementIds = "useId" in react_default ? /* @__PURE__ */ __name(function useElementIds2(_ref) {
  var id = _ref.id, labelId = _ref.labelId, menuId = _ref.menuId, getItemId = _ref.getItemId, toggleButtonId = _ref.toggleButtonId, inputId = _ref.inputId;
  var reactId = "downshift-" + react_default.useId();
  if (!id) {
    id = reactId;
  }
  var elementIdsRef = useRef({
    labelId: labelId || id + "-label",
    menuId: menuId || id + "-menu",
    getItemId: getItemId || function(index) {
      return id + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || id + "-toggle-button",
    inputId: inputId || id + "-input"
  });
  return elementIdsRef.current;
}, "useElementIds") : /* @__PURE__ */ __name(function useElementIds3(_ref2) {
  var _ref2$id = _ref2.id, id = _ref2$id === void 0 ? "downshift-" + generateId() : _ref2$id, labelId = _ref2.labelId, menuId = _ref2.menuId, getItemId = _ref2.getItemId, toggleButtonId = _ref2.toggleButtonId, inputId = _ref2.inputId;
  var elementIdsRef = useRef({
    labelId: labelId || id + "-label",
    menuId: menuId || id + "-menu",
    getItemId: getItemId || function(index) {
      return id + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || id + "-toggle-button",
    inputId: inputId || id + "-input"
  });
  return elementIdsRef.current;
}, "useElementIds");
function getItemAndIndex(itemProp, indexProp, items, errorMessage) {
  var item, index;
  if (itemProp === void 0) {
    if (indexProp === void 0) {
      throw new Error(errorMessage);
    }
    item = items[indexProp];
    index = indexProp;
  } else {
    index = indexProp === void 0 ? items.indexOf(itemProp) : indexProp;
    item = itemProp;
  }
  return [item, index];
}
__name(getItemAndIndex, "getItemAndIndex");
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
__name(isAcceptedCharacterKey, "isAcceptedCharacterKey");
function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}
__name(capitalizeString, "capitalizeString");
function useLatestRef(val) {
  var ref = useRef(val);
  ref.current = val;
  return ref;
}
__name(useLatestRef, "useLatestRef");
function useEnhancedReducer(reducer, props, createInitialState, isStateEqual2) {
  var prevStateRef = useRef();
  var actionRef = useRef();
  var enhancedReducer = useCallback(function(state2, action2) {
    actionRef.current = action2;
    state2 = getState(state2, action2.props);
    var changes = reducer(state2, action2);
    var newState = action2.props.stateReducer(state2, _extends({}, action2, {
      changes
    }));
    return newState;
  }, [reducer]);
  var _useReducer = useReducer(enhancedReducer, props, createInitialState), state = _useReducer[0], dispatch = _useReducer[1];
  var propsRef = useLatestRef(props);
  var dispatchWithProps = useCallback(function(action2) {
    return dispatch(_extends({
      props: propsRef.current
    }, action2));
  }, [propsRef]);
  var action = actionRef.current;
  useEffect(function() {
    var prevState = getState(prevStateRef.current, action == null ? void 0 : action.props);
    var shouldCallOnChangeProps = action && prevStateRef.current && !isStateEqual2(prevState, state);
    if (shouldCallOnChangeProps) {
      callOnChangeProps(action, prevState, state);
    }
    prevStateRef.current = state;
  }, [state, action, isStateEqual2]);
  return [state, dispatchWithProps];
}
__name(useEnhancedReducer, "useEnhancedReducer");
function useControlledReducer$1(reducer, props, createInitialState, isStateEqual2) {
  var _useEnhancedReducer = useEnhancedReducer(reducer, props, createInitialState, isStateEqual2), state = _useEnhancedReducer[0], dispatch = _useEnhancedReducer[1];
  return [getState(state, props), dispatch];
}
__name(useControlledReducer$1, "useControlledReducer$1");
var defaultProps$3 = {
  itemToString: /* @__PURE__ */ __name(function itemToString(item) {
    return item ? String(item) : "";
  }, "itemToString"),
  itemToKey: /* @__PURE__ */ __name(function itemToKey(item) {
    return item;
  }, "itemToKey"),
  stateReducer,
  scrollIntoView: scrollIntoView2,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window === "undefined" || false ? void 0 : window
  )
};
function getDefaultValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  var defaultValue = props["default" + capitalizeString(propKey)];
  if (defaultValue !== void 0) {
    return defaultValue;
  }
  return defaultStateValues2[propKey];
}
__name(getDefaultValue$1, "getDefaultValue$1");
function getInitialValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  var value = props[propKey];
  if (value !== void 0) {
    return value;
  }
  var initialValue = props["initial" + capitalizeString(propKey)];
  if (initialValue !== void 0) {
    return initialValue;
  }
  return getDefaultValue$1(props, propKey, defaultStateValues2);
}
__name(getInitialValue$1, "getInitialValue$1");
function getInitialState$2(props) {
  var selectedItem = getInitialValue$1(props, "selectedItem");
  var isOpen = getInitialValue$1(props, "isOpen");
  var highlightedIndex = getInitialHighlightedIndex(props);
  var inputValue = getInitialValue$1(props, "inputValue");
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.findIndex(function(item) {
      return props.itemToKey(item) === props.itemToKey(selectedItem);
    }) : highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
__name(getInitialState$2, "getInitialState$2");
function getHighlightedIndexOnOpen(props, state, offset) {
  var items = props.items, initialHighlightedIndex = props.initialHighlightedIndex, defaultHighlightedIndex = props.defaultHighlightedIndex, isItemDisabled2 = props.isItemDisabled, itemToKey2 = props.itemToKey;
  var selectedItem = state.selectedItem, highlightedIndex = state.highlightedIndex;
  if (items.length === 0) {
    return -1;
  }
  if (initialHighlightedIndex !== void 0 && highlightedIndex === initialHighlightedIndex && !isItemDisabled2(items[initialHighlightedIndex], initialHighlightedIndex)) {
    return initialHighlightedIndex;
  }
  if (defaultHighlightedIndex !== void 0 && !isItemDisabled2(items[defaultHighlightedIndex], defaultHighlightedIndex)) {
    return defaultHighlightedIndex;
  }
  if (selectedItem) {
    return items.findIndex(function(item) {
      return itemToKey2(selectedItem) === itemToKey2(item);
    });
  }
  if (offset < 0 && !isItemDisabled2(items[items.length - 1], items.length - 1)) {
    return items.length - 1;
  }
  if (offset > 0 && !isItemDisabled2(items[0], 0)) {
    return 0;
  }
  return -1;
}
__name(getHighlightedIndexOnOpen, "getHighlightedIndexOnOpen");
function useMouseAndTouchTracker(environment, handleBlur, downshiftElementsRefs) {
  var mouseAndTouchTrackersRef = useRef({
    isMouseDown: false,
    isTouchMove: false,
    isTouchEnd: false
  });
  useEffect(function() {
    if (!environment) {
      return noop4;
    }
    var downshiftElements = downshiftElementsRefs.map(function(ref) {
      return ref.current;
    });
    function onMouseDown() {
      mouseAndTouchTrackersRef.current.isTouchEnd = false;
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    }
    __name(onMouseDown, "onMouseDown");
    function onMouseUp(event) {
      mouseAndTouchTrackersRef.current.isMouseDown = false;
      if (!targetWithinDownshift(event.target, downshiftElements, environment)) {
        handleBlur();
      }
    }
    __name(onMouseUp, "onMouseUp");
    function onTouchStart() {
      mouseAndTouchTrackersRef.current.isTouchEnd = false;
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    }
    __name(onTouchStart, "onTouchStart");
    function onTouchMove() {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    }
    __name(onTouchMove, "onTouchMove");
    function onTouchEnd(event) {
      mouseAndTouchTrackersRef.current.isTouchEnd = true;
      if (!mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElements, environment, false)) {
        handleBlur();
      }
    }
    __name(onTouchEnd, "onTouchEnd");
    environment.addEventListener("mousedown", onMouseDown);
    environment.addEventListener("mouseup", onMouseUp);
    environment.addEventListener("touchstart", onTouchStart);
    environment.addEventListener("touchmove", onTouchMove);
    environment.addEventListener("touchend", onTouchEnd);
    return /* @__PURE__ */ __name(function cleanup() {
      environment.removeEventListener("mousedown", onMouseDown);
      environment.removeEventListener("mouseup", onMouseUp);
      environment.removeEventListener("touchstart", onTouchStart);
      environment.removeEventListener("touchmove", onTouchMove);
      environment.removeEventListener("touchend", onTouchEnd);
    }, "cleanup");
  }, [downshiftElementsRefs, environment, handleBlur]);
  return mouseAndTouchTrackersRef.current;
}
__name(useMouseAndTouchTracker, "useMouseAndTouchTracker");
var useGetterPropsCalledChecker = /* @__PURE__ */ __name(function useGetterPropsCalledChecker2() {
  return noop4;
}, "useGetterPropsCalledChecker");
if (false) {
  useGetterPropsCalledChecker = /* @__PURE__ */ __name(function useGetterPropsCalledChecker3() {
    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }
    var getterPropsCalledRef = useRef(propKeys.reduce(function(acc, propKey) {
      acc[propKey] = {};
      return acc;
    }, {}));
    useEffect(function() {
      Object.keys(getterPropsCalledRef.current).forEach(function(propKey) {
        var propCallInfo = getterPropsCalledRef.current[propKey];
        if (!Object.keys(propCallInfo).length) {
          console.error("downshift: You forgot to call the " + propKey + " getter function on your component / element.");
          return;
        }
        var suppressRefError = propCallInfo.suppressRefError, refKey = propCallInfo.refKey, elementRef = propCallInfo.elementRef;
        if (suppressRefError) {
          return;
        }
        if (!(elementRef != null && elementRef.current)) {
          console.error('downshift: The ref prop "' + refKey + '" from ' + propKey + " was not applied correctly on your element.");
        }
      });
    }, []);
    var setGetterPropCallInfo = useCallback(function(propKey, suppressRefError, refKey, elementRef) {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError,
        refKey,
        elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  }, "useGetterPropsCalledChecker");
}
function useA11yMessageStatus(getA11yStatusMessage2, options2, dependencyArray, environment) {
  if (environment === void 0) {
    environment = {};
  }
  var document11 = environment.document;
  var isInitialMount = useIsInitialMount();
  useEffect(function() {
    if (!getA11yStatusMessage2 || isInitialMount || false || !document11) {
      return;
    }
    var status = getA11yStatusMessage2(options2);
    updateA11yStatus(status, document11);
  }, dependencyArray);
  useEffect(function() {
    return function() {
      updateA11yStatus.cancel();
      cleanupStatusDiv(document11);
    };
  }, [document11]);
}
__name(useA11yMessageStatus, "useA11yMessageStatus");
function useScrollIntoView(_ref3) {
  var highlightedIndex = _ref3.highlightedIndex, isOpen = _ref3.isOpen, itemRefs = _ref3.itemRefs, getItemNodeFromIndex = _ref3.getItemNodeFromIndex, menuElement = _ref3.menuElement, scrollIntoViewProp = _ref3.scrollIntoView;
  var shouldScrollRef = useRef(true);
  useIsomorphicLayoutEffect2(function() {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }
    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    }
  }, [highlightedIndex]);
  return shouldScrollRef;
}
__name(useScrollIntoView, "useScrollIntoView");
var useControlPropsValidator = noop4;
if (false) {
  useControlPropsValidator = /* @__PURE__ */ __name(function useControlPropsValidator2(_ref4) {
    var props = _ref4.props, state = _ref4.state;
    var prevPropsRef = useRef(props);
    var isInitialMount = useIsInitialMount();
    useEffect(function() {
      if (isInitialMount) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props, isInitialMount]);
  }, "useControlPropsValidator");
}
function getChangesOnSelection(props, highlightedIndex, inputValue) {
  var _props$items;
  if (inputValue === void 0) {
    inputValue = true;
  }
  var shouldSelect = ((_props$items = props.items) == null ? void 0 : _props$items.length) && highlightedIndex >= 0;
  return _extends({
    isOpen: false,
    highlightedIndex: -1
  }, shouldSelect && _extends({
    selectedItem: props.items[highlightedIndex],
    isOpen: getDefaultValue$1(props, "isOpen"),
    highlightedIndex: getDefaultValue$1(props, "highlightedIndex")
  }, inputValue && {
    inputValue: props.itemToString(props.items[highlightedIndex])
  }));
}
__name(getChangesOnSelection, "getChangesOnSelection");
function isDropdownsStateEqual(prevState, newState) {
  return prevState.isOpen === newState.isOpen && prevState.inputValue === newState.inputValue && prevState.highlightedIndex === newState.highlightedIndex && prevState.selectedItem === newState.selectedItem;
}
__name(isDropdownsStateEqual, "isDropdownsStateEqual");
function useIsInitialMount() {
  var isInitialMountRef = react_default.useRef(true);
  react_default.useEffect(function() {
    isInitialMountRef.current = false;
    return function() {
      isInitialMountRef.current = true;
    };
  }, []);
  return isInitialMountRef.current;
}
__name(useIsInitialMount, "useIsInitialMount");
function getDefaultHighlightedIndex(props) {
  var highlightedIndex = getDefaultValue$1(props, "highlightedIndex");
  if (highlightedIndex > -1 && props.isItemDisabled(props.items[highlightedIndex], highlightedIndex)) {
    return -1;
  }
  return highlightedIndex;
}
__name(getDefaultHighlightedIndex, "getDefaultHighlightedIndex");
function getInitialHighlightedIndex(props) {
  var highlightedIndex = getInitialValue$1(props, "highlightedIndex");
  if (highlightedIndex > -1 && props.isItemDisabled(props.items[highlightedIndex], highlightedIndex)) {
    return -1;
  }
  return highlightedIndex;
}
__name(getInitialHighlightedIndex, "getInitialHighlightedIndex");
var commonPropTypes = {
  environment: import_prop_types8.default.shape({
    addEventListener: import_prop_types8.default.func.isRequired,
    removeEventListener: import_prop_types8.default.func.isRequired,
    document: import_prop_types8.default.shape({
      createElement: import_prop_types8.default.func.isRequired,
      getElementById: import_prop_types8.default.func.isRequired,
      activeElement: import_prop_types8.default.any.isRequired,
      body: import_prop_types8.default.any.isRequired
    }).isRequired,
    Node: import_prop_types8.default.func.isRequired
  }),
  itemToString: import_prop_types8.default.func,
  itemToKey: import_prop_types8.default.func,
  stateReducer: import_prop_types8.default.func
};
var commonDropdownPropTypes = _extends({}, commonPropTypes, {
  getA11yStatusMessage: import_prop_types8.default.func,
  highlightedIndex: import_prop_types8.default.number,
  defaultHighlightedIndex: import_prop_types8.default.number,
  initialHighlightedIndex: import_prop_types8.default.number,
  isOpen: import_prop_types8.default.bool,
  defaultIsOpen: import_prop_types8.default.bool,
  initialIsOpen: import_prop_types8.default.bool,
  selectedItem: import_prop_types8.default.any,
  initialSelectedItem: import_prop_types8.default.any,
  defaultSelectedItem: import_prop_types8.default.any,
  id: import_prop_types8.default.string,
  labelId: import_prop_types8.default.string,
  menuId: import_prop_types8.default.string,
  getItemId: import_prop_types8.default.func,
  toggleButtonId: import_prop_types8.default.string,
  onSelectedItemChange: import_prop_types8.default.func,
  onHighlightedIndexChange: import_prop_types8.default.func,
  onStateChange: import_prop_types8.default.func,
  onIsOpenChange: import_prop_types8.default.func,
  scrollIntoView: import_prop_types8.default.func
});
function downshiftCommonReducer(state, action, stateChangeTypes2) {
  var type = action.type, props = action.props;
  var changes;
  switch (type) {
    case stateChangeTypes2.ItemMouseMove:
      changes = {
        highlightedIndex: action.disabled ? -1 : action.index
      };
      break;
    case stateChangeTypes2.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;
    case stateChangeTypes2.ToggleButtonClick:
    case stateChangeTypes2.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;
    case stateChangeTypes2.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: props.isItemDisabled(props.items[action.highlightedIndex], action.highlightedIndex) ? -1 : action.highlightedIndex
      };
      break;
    case stateChangeTypes2.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;
    case stateChangeTypes2.FunctionReset:
      changes = {
        highlightedIndex: getDefaultHighlightedIndex(props),
        isOpen: getDefaultValue$1(props, "isOpen"),
        selectedItem: getDefaultValue$1(props, "selectedItem"),
        inputValue: getDefaultValue$1(props, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return _extends({}, state, changes);
}
__name(downshiftCommonReducer, "downshiftCommonReducer");
function getItemIndexByCharacterKey(_a) {
  var keysSoFar = _a.keysSoFar, highlightedIndex = _a.highlightedIndex, items = _a.items, itemToString2 = _a.itemToString, isItemDisabled2 = _a.isItemDisabled;
  var lowerCasedKeysSoFar = keysSoFar.toLowerCase();
  for (var index = 0; index < items.length; index++) {
    var offsetIndex = (index + highlightedIndex + (keysSoFar.length < 2 ? 1 : 0)) % items.length;
    var item = items[offsetIndex];
    if (item !== void 0 && itemToString2(item).toLowerCase().startsWith(lowerCasedKeysSoFar) && !isItemDisabled2(item, offsetIndex)) {
      return offsetIndex;
    }
  }
  return highlightedIndex;
}
__name(getItemIndexByCharacterKey, "getItemIndexByCharacterKey");
var propTypes$2 = __assign(__assign({}, commonDropdownPropTypes), { items: import_prop_types8.default.array.isRequired, isItemDisabled: import_prop_types8.default.func });
var defaultProps$2 = __assign(__assign({}, defaultProps$3), { isItemDisabled: /* @__PURE__ */ __name(function() {
  return false;
}, "isItemDisabled") });
var validatePropTypes$2 = noop4;
if (false) {
  validatePropTypes$2 = /* @__PURE__ */ __name(function(options2, caller) {
    import_prop_types8.default.checkPropTypes(propTypes$2, options2, "prop", caller.name);
  }, "validatePropTypes$2");
}
var ToggleButtonClick$1 = false ? "__togglebutton_click__" : 0;
var ToggleButtonKeyDownArrowDown = false ? "__togglebutton_keydown_arrow_down__" : 1;
var ToggleButtonKeyDownArrowUp = false ? "__togglebutton_keydown_arrow_up__" : 2;
var ToggleButtonKeyDownCharacter = false ? "__togglebutton_keydown_character__" : 3;
var ToggleButtonKeyDownEscape = false ? "__togglebutton_keydown_escape__" : 4;
var ToggleButtonKeyDownHome = false ? "__togglebutton_keydown_home__" : 5;
var ToggleButtonKeyDownEnd = false ? "__togglebutton_keydown_end__" : 6;
var ToggleButtonKeyDownEnter = false ? "__togglebutton_keydown_enter__" : 7;
var ToggleButtonKeyDownSpaceButton = false ? "__togglebutton_keydown_space_button__" : 8;
var ToggleButtonKeyDownPageUp = false ? "__togglebutton_keydown_page_up__" : 9;
var ToggleButtonKeyDownPageDown = false ? "__togglebutton_keydown_page_down__" : 10;
var ToggleButtonBlur = false ? "__togglebutton_blur__" : 11;
var MenuMouseLeave$1 = false ? "__menu_mouse_leave__" : 12;
var ItemMouseMove$1 = false ? "__item_mouse_move__" : 13;
var ItemClick$1 = false ? "__item_click__" : 14;
var FunctionToggleMenu$1 = false ? "__function_toggle_menu__" : 15;
var FunctionOpenMenu$1 = false ? "__function_open_menu__" : 16;
var FunctionCloseMenu$1 = false ? "__function_close_menu__" : 17;
var FunctionSetHighlightedIndex$1 = false ? "__function_set_highlighted_index__" : 18;
var FunctionSelectItem$1 = false ? "__function_select_item__" : 19;
var FunctionSetInputValue$1 = false ? "__function_set_input_value__" : 20;
var FunctionReset$2 = false ? "__function_reset__" : 21;
var stateChangeTypes$2 = Object.freeze({
  __proto__: null,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionReset: FunctionReset$2,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionToggleMenu: FunctionToggleMenu$1,
  ItemClick: ItemClick$1,
  ItemMouseMove: ItemMouseMove$1,
  MenuMouseLeave: MenuMouseLeave$1,
  ToggleButtonBlur,
  ToggleButtonClick: ToggleButtonClick$1,
  ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter,
  ToggleButtonKeyDownEnd,
  ToggleButtonKeyDownEnter,
  ToggleButtonKeyDownEscape,
  ToggleButtonKeyDownHome,
  ToggleButtonKeyDownPageDown,
  ToggleButtonKeyDownPageUp,
  ToggleButtonKeyDownSpaceButton
});
function downshiftSelectReducer(state, action) {
  var _props$items;
  var type = action.type, props = action.props, altKey = action.altKey;
  var changes;
  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultHighlightedIndex(props),
        selectedItem: props.items[action.index]
      };
      break;
    case ToggleButtonKeyDownCharacter:
      {
        var lowercasedKey = action.key;
        var inputValue = "" + state.inputValue + lowercasedKey;
        var prevHighlightedIndex = !state.isOpen && state.selectedItem ? props.items.findIndex(function(item) {
          return props.itemToKey(item) === props.itemToKey(state.selectedItem);
        }) : state.highlightedIndex;
        var highlightedIndex = getItemIndexByCharacterKey({
          keysSoFar: inputValue,
          highlightedIndex: prevHighlightedIndex,
          items: props.items,
          itemToString: props.itemToString,
          isItemDisabled: props.isItemDisabled
        });
        changes = {
          inputValue,
          highlightedIndex,
          isOpen: true
        };
      }
      break;
    case ToggleButtonKeyDownArrowDown:
      {
        var _highlightedIndex = state.isOpen ? getHighlightedIndex(state.highlightedIndex, 1, props.items, props.isItemDisabled) : altKey && state.selectedItem == null ? -1 : getHighlightedIndexOnOpen(props, state, 1);
        changes = {
          highlightedIndex: _highlightedIndex,
          isOpen: true
        };
      }
      break;
    case ToggleButtonKeyDownArrowUp:
      if (state.isOpen && altKey) {
        changes = getChangesOnSelection(props, state.highlightedIndex, false);
      } else {
        var _highlightedIndex2 = state.isOpen ? getHighlightedIndex(state.highlightedIndex, -1, props.items, props.isItemDisabled) : getHighlightedIndexOnOpen(props, state, -1);
        changes = {
          highlightedIndex: _highlightedIndex2,
          isOpen: true
        };
      }
      break;
    // only triggered when menu is open.
    case ToggleButtonKeyDownEnter:
    case ToggleButtonKeyDownSpaceButton:
      changes = getChangesOnSelection(props, state.highlightedIndex, false);
      break;
    case ToggleButtonKeyDownHome:
      changes = {
        highlightedIndex: getNonDisabledIndex(0, false, props.items, props.isItemDisabled),
        isOpen: true
      };
      break;
    case ToggleButtonKeyDownEnd:
      changes = {
        highlightedIndex: getNonDisabledIndex(props.items.length - 1, true, props.items, props.isItemDisabled),
        isOpen: true
      };
      break;
    case ToggleButtonKeyDownPageUp:
      changes = {
        highlightedIndex: getHighlightedIndex(state.highlightedIndex, -10, props.items, props.isItemDisabled)
      };
      break;
    case ToggleButtonKeyDownPageDown:
      changes = {
        highlightedIndex: getHighlightedIndex(state.highlightedIndex, 10, props.items, props.isItemDisabled)
      };
      break;
    case ToggleButtonKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case ToggleButtonBlur:
      changes = _extends({
        isOpen: false,
        highlightedIndex: -1
      }, state.highlightedIndex >= 0 && ((_props$items = props.items) == null ? void 0 : _props$items.length) && {
        selectedItem: props.items[state.highlightedIndex]
      });
      break;
    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }
  return _extends({}, state, changes);
}
__name(downshiftSelectReducer, "downshiftSelectReducer");
var _excluded$2 = ["onClick"];
var _excluded2$2 = ["onMouseLeave", "refKey", "ref"];
var _excluded3$1 = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"];
var _excluded4$1 = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
useSelect.stateChangeTypes = stateChangeTypes$2;
function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$2(userProps, useSelect);
  var props = _extends({}, defaultProps$2, userProps);
  var scrollIntoView3 = props.scrollIntoView, environment = props.environment, getA11yStatusMessage2 = props.getA11yStatusMessage;
  var _useControlledReducer = useControlledReducer$1(downshiftSelectReducer, props, getInitialState$2, isDropdownsStateEqual), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
  var isOpen = state.isOpen, highlightedIndex = state.highlightedIndex, selectedItem = state.selectedItem, inputValue = state.inputValue;
  var toggleButtonRef = useRef(null);
  var menuRef = useRef(null);
  var itemRefs = useRef({});
  var clearTimeoutRef = useRef(null);
  var elementIds = useElementIds(props);
  var latest = useLatestRef({
    state,
    props
  });
  var getItemNodeFromIndex = useCallback(function(index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]);
  useA11yMessageStatus(getA11yStatusMessage2, state, [isOpen, highlightedIndex, selectedItem, inputValue], environment);
  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex
  });
  useEffect(function() {
    clearTimeoutRef.current = debounce3(function(outerDispatch) {
      outerDispatch({
        type: FunctionSetInputValue$1,
        inputValue: ""
      });
    }, 500);
    return function() {
      clearTimeoutRef.current.cancel();
    };
  }, []);
  useEffect(function() {
    if (!inputValue) {
      return;
    }
    clearTimeoutRef.current(dispatch);
  }, [dispatch, inputValue]);
  useControlPropsValidator({
    props,
    state
  });
  useEffect(function() {
    var focusOnOpen = getInitialValue$1(props, "isOpen");
    if (focusOnOpen && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, []);
  var mouseAndTouchTrackers = useMouseAndTouchTracker(environment, useCallback(/* @__PURE__ */ __name(function handleBlur() {
    if (latest.current.state.isOpen) {
      dispatch({
        type: ToggleButtonBlur
      });
    }
  }, "handleBlur"), [dispatch, latest]), useMemo(function() {
    return [menuRef, toggleButtonRef];
  }, [menuRef.current, toggleButtonRef.current]));
  var setGetterPropCallInfo = useGetterPropsCalledChecker("getMenuProps", "getToggleButtonProps");
  useEffect(function() {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  var toggleButtonKeyDownHandlers = useMemo(function() {
    return {
      ArrowDown: /* @__PURE__ */ __name(function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowDown,
          altKey: event.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ __name(function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowUp,
          altKey: event.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ __name(function Home(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownHome
        });
      }, "Home"),
      End: /* @__PURE__ */ __name(function End(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownEnd
        });
      }, "End"),
      Escape: /* @__PURE__ */ __name(function Escape() {
        if (latest.current.state.isOpen) {
          dispatch({
            type: ToggleButtonKeyDownEscape
          });
        }
      }, "Escape"),
      Enter: /* @__PURE__ */ __name(function Enter(event) {
        event.preventDefault();
        dispatch({
          type: latest.current.state.isOpen ? ToggleButtonKeyDownEnter : ToggleButtonClick$1
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ __name(function PageUp(event) {
        if (latest.current.state.isOpen) {
          event.preventDefault();
          dispatch({
            type: ToggleButtonKeyDownPageUp
          });
        }
      }, "PageUp"),
      PageDown: /* @__PURE__ */ __name(function PageDown(event) {
        if (latest.current.state.isOpen) {
          event.preventDefault();
          dispatch({
            type: ToggleButtonKeyDownPageDown
          });
        }
      }, "PageDown"),
      " ": /* @__PURE__ */ __name(function _2(event) {
        event.preventDefault();
        var currentState = latest.current.state;
        if (!currentState.isOpen) {
          dispatch({
            type: ToggleButtonClick$1
          });
          return;
        }
        if (currentState.inputValue) {
          dispatch({
            type: ToggleButtonKeyDownCharacter,
            key: " "
          });
        } else {
          dispatch({
            type: ToggleButtonKeyDownSpaceButton
          });
        }
      }, "_")
    };
  }, [dispatch, latest]);
  var toggleMenu = useCallback(function() {
    dispatch({
      type: FunctionToggleMenu$1
    });
  }, [dispatch]);
  var closeMenu = useCallback(function() {
    dispatch({
      type: FunctionCloseMenu$1
    });
  }, [dispatch]);
  var openMenu = useCallback(function() {
    dispatch({
      type: FunctionOpenMenu$1
    });
  }, [dispatch]);
  var setHighlightedIndex = useCallback(function(newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex$1,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = useCallback(function(newSelectedItem) {
    dispatch({
      type: FunctionSelectItem$1,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var reset = useCallback(function() {
    dispatch({
      type: FunctionReset$2
    });
  }, [dispatch]);
  var setInputValue = useCallback(function(newInputValue) {
    dispatch({
      type: FunctionSetInputValue$1,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var getLabelProps = useCallback(function(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, onClick = _ref.onClick, labelProps = _objectWithoutPropertiesLoose(_ref, _excluded$2);
    var labelHandleClick = /* @__PURE__ */ __name(function labelHandleClick2() {
      var _toggleButtonRef$curr;
      (_toggleButtonRef$curr = toggleButtonRef.current) == null || _toggleButtonRef$curr.focus();
    }, "labelHandleClick");
    return _extends({
      id: elementIds.labelId,
      htmlFor: elementIds.toggleButtonId,
      onClick: callAllEventHandlers(onClick, labelHandleClick)
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = useCallback(function(_temp2, _temp3) {
    var _extends2;
    var _ref2 = _temp2 === void 0 ? {} : _temp2, onMouseLeave = _ref2.onMouseLeave, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, ref = _ref2.ref, rest2 = _objectWithoutPropertiesLoose(_ref2, _excluded2$2);
    var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$suppressRefErro = _ref3.suppressRefError, suppressRefError = _ref3$suppressRefErro === void 0 ? false : _ref3$suppressRefErro;
    var menuHandleMouseLeave = /* @__PURE__ */ __name(function menuHandleMouseLeave2() {
      dispatch({
        type: MenuMouseLeave$1
      });
    }, "menuHandleMouseLeave");
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function(menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIds.menuId, _extends2.role = "listbox", _extends2["aria-labelledby"] = rest2 && rest2["aria-label"] ? void 0 : "" + elementIds.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, menuHandleMouseLeave), _extends2), rest2);
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  var getToggleButtonProps = useCallback(function(_temp4, _temp5) {
    var _extends3;
    var _ref4 = _temp4 === void 0 ? {} : _temp4, onBlur = _ref4.onBlur, onClick = _ref4.onClick;
    _ref4.onPress;
    var onKeyDown = _ref4.onKeyDown, _ref4$refKey = _ref4.refKey, refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey, ref = _ref4.ref, rest2 = _objectWithoutPropertiesLoose(_ref4, _excluded3$1);
    var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$suppressRefErro = _ref5.suppressRefError, suppressRefError = _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro;
    var latestState = latest.current.state;
    var toggleButtonHandleClick = /* @__PURE__ */ __name(function toggleButtonHandleClick2() {
      dispatch({
        type: ToggleButtonClick$1
      });
    }, "toggleButtonHandleClick");
    var toggleButtonHandleBlur = /* @__PURE__ */ __name(function toggleButtonHandleBlur2() {
      if (latestState.isOpen && !mouseAndTouchTrackers.isMouseDown) {
        dispatch({
          type: ToggleButtonBlur
        });
      }
    }, "toggleButtonHandleBlur");
    var toggleButtonHandleKeyDown = /* @__PURE__ */ __name(function toggleButtonHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && toggleButtonKeyDownHandlers[key]) {
        toggleButtonKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: ToggleButtonKeyDownCharacter,
          key
        });
      }
    }, "toggleButtonHandleKeyDown");
    var toggleProps = _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends3["aria-activedescendant"] = latestState.isOpen && latestState.highlightedIndex > -1 ? elementIds.getItemId(latestState.highlightedIndex) : "", _extends3["aria-controls"] = elementIds.menuId, _extends3["aria-expanded"] = latest.current.state.isOpen, _extends3["aria-haspopup"] = "listbox", _extends3["aria-labelledby"] = rest2 && rest2["aria-label"] ? void 0 : "" + elementIds.labelId, _extends3.id = elementIds.toggleButtonId, _extends3.role = "combobox", _extends3.tabIndex = 0, _extends3.onBlur = callAllEventHandlers(onBlur, toggleButtonHandleBlur), _extends3), rest2);
    if (!rest2.disabled) {
      {
        toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
        toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
      }
    }
    setGetterPropCallInfo("getToggleButtonProps", suppressRefError, refKey, toggleButtonRef);
    return toggleProps;
  }, [dispatch, elementIds, latest, mouseAndTouchTrackers, setGetterPropCallInfo, toggleButtonKeyDownHandlers]);
  var getItemProps = useCallback(function(_temp6) {
    var _extends4;
    var _ref6 = _temp6 === void 0 ? {} : _temp6, itemProp = _ref6.item, indexProp = _ref6.index, onMouseMove = _ref6.onMouseMove, onClick = _ref6.onClick, onMouseDown = _ref6.onMouseDown;
    _ref6.onPress;
    var _ref6$refKey = _ref6.refKey, refKey = _ref6$refKey === void 0 ? "ref" : _ref6$refKey, disabledProp = _ref6.disabled, ref = _ref6.ref, rest2 = _objectWithoutPropertiesLoose(_ref6, _excluded4$1);
    if (disabledProp !== void 0) {
      console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    }
    var _latest$current = latest.current, latestState = _latest$current.state, latestProps = _latest$current.props;
    var _getItemAndIndex = getItemAndIndex(itemProp, indexProp, latestProps.items, "Pass either item or index to getItemProps!"), item = _getItemAndIndex[0], index = _getItemAndIndex[1];
    var disabled = latestProps.isItemDisabled(item, index);
    var itemHandleMouseMove = /* @__PURE__ */ __name(function itemHandleMouseMove2() {
      if (mouseAndTouchTrackers.isTouchEnd || index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove$1,
        index,
        disabled
      });
    }, "itemHandleMouseMove");
    var itemHandleClick = /* @__PURE__ */ __name(function itemHandleClick2() {
      dispatch({
        type: ItemClick$1,
        index
      });
    }, "itemHandleClick");
    var itemHandleMouseDown = /* @__PURE__ */ __name(function itemHandleMouseDown2(e2) {
      return e2.preventDefault();
    }, "itemHandleMouseDown");
    var itemProps = _extends((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function(itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(index)] = itemNode;
      }
    }), _extends4["aria-disabled"] = disabled, _extends4["aria-selected"] = item === latestState.selectedItem, _extends4.id = elementIds.getItemId(index), _extends4.role = "option", _extends4), rest2);
    if (!disabled) {
      {
        itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
      }
    }
    itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
    itemProps.onMouseDown = callAllEventHandlers(onMouseDown, itemHandleMouseDown);
    return itemProps;
  }, [latest, elementIds, mouseAndTouchTrackers, shouldScrollRef, dispatch]);
  return {
    // prop getters.
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    // actions.
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    selectItem,
    reset,
    setInputValue,
    // state.
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
__name(useSelect, "useSelect");
var InputKeyDownArrowDown = false ? "__input_keydown_arrow_down__" : 0;
var InputKeyDownArrowUp = false ? "__input_keydown_arrow_up__" : 1;
var InputKeyDownEscape = false ? "__input_keydown_escape__" : 2;
var InputKeyDownHome = false ? "__input_keydown_home__" : 3;
var InputKeyDownEnd = false ? "__input_keydown_end__" : 4;
var InputKeyDownPageUp = false ? "__input_keydown_page_up__" : 5;
var InputKeyDownPageDown = false ? "__input_keydown_page_down__" : 6;
var InputKeyDownEnter = false ? "__input_keydown_enter__" : 7;
var InputChange = false ? "__input_change__" : 8;
var InputBlur = false ? "__input_blur__" : 9;
var InputClick = false ? "__input_click__" : 10;
var MenuMouseLeave = false ? "__menu_mouse_leave__" : 11;
var ItemMouseMove = false ? "__item_mouse_move__" : 12;
var ItemClick = false ? "__item_click__" : 13;
var ToggleButtonClick = false ? "__togglebutton_click__" : 14;
var FunctionToggleMenu = false ? "__function_toggle_menu__" : 15;
var FunctionOpenMenu = false ? "__function_open_menu__" : 16;
var FunctionCloseMenu = false ? "__function_close_menu__" : 17;
var FunctionSetHighlightedIndex = false ? "__function_set_highlighted_index__" : 18;
var FunctionSelectItem = false ? "__function_select_item__" : 19;
var FunctionSetInputValue = false ? "__function_set_input_value__" : 20;
var FunctionReset$1 = false ? "__function_reset__" : 21;
var ControlledPropUpdatedSelectedItem = false ? "__controlled_prop_updated_selected_item__" : 22;
var stateChangeTypes$1 = Object.freeze({
  __proto__: null,
  ControlledPropUpdatedSelectedItem,
  FunctionCloseMenu,
  FunctionOpenMenu,
  FunctionReset: FunctionReset$1,
  FunctionSelectItem,
  FunctionSetHighlightedIndex,
  FunctionSetInputValue,
  FunctionToggleMenu,
  InputBlur,
  InputChange,
  InputClick,
  InputKeyDownArrowDown,
  InputKeyDownArrowUp,
  InputKeyDownEnd,
  InputKeyDownEnter,
  InputKeyDownEscape,
  InputKeyDownHome,
  InputKeyDownPageDown,
  InputKeyDownPageUp,
  ItemClick,
  ItemMouseMove,
  MenuMouseLeave,
  ToggleButtonClick
});
function getInitialState$1(props) {
  var initialState = getInitialState$2(props);
  var selectedItem = initialState.selectedItem;
  var inputValue = initialState.inputValue;
  if (inputValue === "" && selectedItem && props.defaultInputValue === void 0 && props.initialInputValue === void 0 && props.inputValue === void 0) {
    inputValue = props.itemToString(selectedItem);
  }
  return _extends({}, initialState, {
    inputValue
  });
}
__name(getInitialState$1, "getInitialState$1");
var propTypes$1 = _extends({}, commonDropdownPropTypes, {
  items: import_prop_types8.default.array.isRequired,
  isItemDisabled: import_prop_types8.default.func,
  inputValue: import_prop_types8.default.string,
  defaultInputValue: import_prop_types8.default.string,
  initialInputValue: import_prop_types8.default.string,
  inputId: import_prop_types8.default.string,
  onInputValueChange: import_prop_types8.default.func
});
function useControlledReducer(reducer, props, createInitialState, isStateEqual2) {
  var previousSelectedItemRef = useRef();
  var _useEnhancedReducer = useEnhancedReducer(reducer, props, createInitialState, isStateEqual2), state = _useEnhancedReducer[0], dispatch = _useEnhancedReducer[1];
  var isInitialMount = useIsInitialMount();
  useEffect(function() {
    if (!isControlledProp(props, "selectedItem")) {
      return;
    }
    if (!isInitialMount) {
      var shouldCallDispatch = props.itemToKey(props.selectedItem) !== props.itemToKey(previousSelectedItemRef.current);
      if (shouldCallDispatch) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }
    }
    previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
  }, [state.selectedItem, props.selectedItem]);
  return [getState(state, props), dispatch];
}
__name(useControlledReducer, "useControlledReducer");
var validatePropTypes$1 = noop4;
if (false) {
  validatePropTypes$1 = /* @__PURE__ */ __name(function validatePropTypes2(options2, caller) {
    import_prop_types8.default.checkPropTypes(propTypes$1, options2, "prop", caller.name);
  }, "validatePropTypes");
}
var defaultProps$1 = _extends({}, defaultProps$3, {
  isItemDisabled: /* @__PURE__ */ __name(function isItemDisabled() {
    return false;
  }, "isItemDisabled")
});
function downshiftUseComboboxReducer(state, action) {
  var _props$items;
  var type = action.type, props = action.props, altKey = action.altKey;
  var changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultHighlightedIndex(props),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;
    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getHighlightedIndex(state.highlightedIndex, 1, props.items, props.isItemDisabled, true)
        };
      } else {
        changes = {
          highlightedIndex: altKey && state.selectedItem == null ? -1 : getHighlightedIndexOnOpen(props, state, 1),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownArrowUp:
      if (state.isOpen) {
        if (altKey) {
          changes = getChangesOnSelection(props, state.highlightedIndex);
        } else {
          changes = {
            highlightedIndex: getHighlightedIndex(state.highlightedIndex, -1, props.items, props.isItemDisabled, true)
          };
        }
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownEnter:
      changes = getChangesOnSelection(props, state.highlightedIndex);
      break;
    case InputKeyDownEscape:
      changes = _extends({
        isOpen: false,
        highlightedIndex: -1
      }, !state.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case InputKeyDownPageUp:
      changes = {
        highlightedIndex: getHighlightedIndex(state.highlightedIndex, -10, props.items, props.isItemDisabled, true)
      };
      break;
    case InputKeyDownPageDown:
      changes = {
        highlightedIndex: getHighlightedIndex(state.highlightedIndex, 10, props.items, props.isItemDisabled, true)
      };
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNonDisabledIndex(0, false, props.items, props.isItemDisabled)
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNonDisabledIndex(props.items.length - 1, true, props.items, props.isItemDisabled)
      };
      break;
    case InputBlur:
      changes = _extends({
        isOpen: false,
        highlightedIndex: -1
      }, state.highlightedIndex >= 0 && ((_props$items = props.items) == null ? void 0 : _props$items.length) && action.selectItem && {
        selectedItem: props.items[state.highlightedIndex],
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;
    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultHighlightedIndex(props),
        inputValue: action.inputValue
      };
      break;
    case InputClick:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return _extends({}, state, changes);
}
__name(downshiftUseComboboxReducer, "downshiftUseComboboxReducer");
var _excluded$1 = ["onMouseLeave", "refKey", "ref"];
var _excluded2$1 = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"];
var _excluded3 = ["onClick", "onPress", "refKey", "ref"];
var _excluded4 = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
useCombobox.stateChangeTypes = stateChangeTypes$1;
function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$1(userProps, useCombobox);
  var props = _extends({}, defaultProps$1, userProps);
  var items = props.items, scrollIntoView3 = props.scrollIntoView, environment = props.environment, getA11yStatusMessage2 = props.getA11yStatusMessage;
  var _useControlledReducer = useControlledReducer(downshiftUseComboboxReducer, props, getInitialState$1, isDropdownsStateEqual), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
  var isOpen = state.isOpen, highlightedIndex = state.highlightedIndex, selectedItem = state.selectedItem, inputValue = state.inputValue;
  var menuRef = useRef(null);
  var itemRefs = useRef({});
  var inputRef = useRef(null);
  var toggleButtonRef = useRef(null);
  var isInitialMount = useIsInitialMount();
  var elementIds = useElementIds(props);
  var previousResultCountRef = useRef();
  var latest = useLatestRef({
    state,
    props
  });
  var getItemNodeFromIndex = useCallback(function(index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]);
  useA11yMessageStatus(getA11yStatusMessage2, state, [isOpen, highlightedIndex, selectedItem, inputValue], environment);
  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex
  });
  useControlPropsValidator({
    props,
    state
  });
  useEffect(function() {
    var focusOnOpen = getInitialValue$1(props, "isOpen");
    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(function() {
    if (!isInitialMount) {
      previousResultCountRef.current = items.length;
    }
  });
  var mouseAndTouchTrackers = useMouseAndTouchTracker(environment, useCallback(/* @__PURE__ */ __name(function handleBlur() {
    if (latest.current.state.isOpen) {
      dispatch({
        type: InputBlur,
        selectItem: false
      });
    }
  }, "handleBlur"), [dispatch, latest]), useMemo(function() {
    return [menuRef, toggleButtonRef, inputRef];
  }, [menuRef.current, toggleButtonRef.current, inputRef.current]));
  var setGetterPropCallInfo = useGetterPropsCalledChecker("getInputProps", "getMenuProps");
  useEffect(function() {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  useEffect(function() {
    var _inputRef$current;
    if (!isOpen || !(environment != null && environment.document) || !(inputRef != null && (_inputRef$current = inputRef.current) != null && _inputRef$current.focus)) {
      return;
    }
    if (environment.document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, environment]);
  var inputKeyDownHandlers = useMemo(function() {
    return {
      ArrowDown: /* @__PURE__ */ __name(function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowDown,
          altKey: event.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ __name(function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowUp,
          altKey: event.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ __name(function Home(event) {
        if (!latest.current.state.isOpen) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownHome
        });
      }, "Home"),
      End: /* @__PURE__ */ __name(function End(event) {
        if (!latest.current.state.isOpen) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownEnd
        });
      }, "End"),
      Escape: /* @__PURE__ */ __name(function Escape(event) {
        var latestState = latest.current.state;
        if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownEscape
          });
        }
      }, "Escape"),
      Enter: /* @__PURE__ */ __name(function Enter(event) {
        var latestState = latest.current.state;
        if (!latestState.isOpen || event.which === 229) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownEnter
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ __name(function PageUp(event) {
        if (latest.current.state.isOpen) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownPageUp
          });
        }
      }, "PageUp"),
      PageDown: /* @__PURE__ */ __name(function PageDown(event) {
        if (latest.current.state.isOpen) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownPageDown
          });
        }
      }, "PageDown")
    };
  }, [dispatch, latest]);
  var getLabelProps = useCallback(function(labelProps) {
    return _extends({
      id: elementIds.labelId,
      htmlFor: elementIds.inputId
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = useCallback(function(_temp, _temp2) {
    var _extends2;
    var _ref = _temp === void 0 ? {} : _temp, onMouseLeave = _ref.onMouseLeave, _ref$refKey = _ref.refKey, refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey, ref = _ref.ref, rest2 = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$suppressRefErro = _ref2.suppressRefError, suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function(menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIds.menuId, _extends2.role = "listbox", _extends2["aria-labelledby"] = rest2 && rest2["aria-label"] ? void 0 : "" + elementIds.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, function() {
      dispatch({
        type: MenuMouseLeave
      });
    }), _extends2), rest2);
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  var getItemProps = useCallback(function(_temp3) {
    var _extends3, _ref4;
    var _ref3 = _temp3 === void 0 ? {} : _temp3, itemProp = _ref3.item, indexProp = _ref3.index, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, ref = _ref3.ref, onMouseMove = _ref3.onMouseMove, onMouseDown = _ref3.onMouseDown, onClick = _ref3.onClick;
    _ref3.onPress;
    var disabledProp = _ref3.disabled, rest2 = _objectWithoutPropertiesLoose(_ref3, _excluded2$1);
    if (disabledProp !== void 0) {
      console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    }
    var _latest$current = latest.current, latestProps = _latest$current.props, latestState = _latest$current.state;
    var _getItemAndIndex = getItemAndIndex(itemProp, indexProp, latestProps.items, "Pass either item or index to getItemProps!"), item = _getItemAndIndex[0], index = _getItemAndIndex[1];
    var disabled = latestProps.isItemDisabled(item, index);
    var onSelectKey = "onClick";
    var customClickHandler = onClick;
    var itemHandleMouseMove = /* @__PURE__ */ __name(function itemHandleMouseMove2() {
      if (mouseAndTouchTrackers.isTouchEnd || index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index,
        disabled
      });
    }, "itemHandleMouseMove");
    var itemHandleClick = /* @__PURE__ */ __name(function itemHandleClick2() {
      dispatch({
        type: ItemClick,
        index
      });
    }, "itemHandleClick");
    var itemHandleMouseDown = /* @__PURE__ */ __name(function itemHandleMouseDown2(e2) {
      return e2.preventDefault();
    }, "itemHandleMouseDown");
    return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(index)] = itemNode;
      }
    }), _extends3["aria-disabled"] = disabled, _extends3["aria-selected"] = index === latestState.highlightedIndex, _extends3.id = elementIds.getItemId(index), _extends3.role = "option", _extends3), !disabled && (_ref4 = {}, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, itemHandleClick), _ref4), {
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove),
      onMouseDown: callAllEventHandlers(onMouseDown, itemHandleMouseDown)
    }, rest2);
  }, [dispatch, elementIds, latest, mouseAndTouchTrackers, shouldScrollRef]);
  var getToggleButtonProps = useCallback(function(_temp4) {
    var _extends4;
    var _ref5 = _temp4 === void 0 ? {} : _temp4, onClick = _ref5.onClick;
    _ref5.onPress;
    var _ref5$refKey = _ref5.refKey, refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey, ref = _ref5.ref, rest2 = _objectWithoutPropertiesLoose(_ref5, _excluded3);
    var latestState = latest.current.state;
    var toggleButtonHandleClick = /* @__PURE__ */ __name(function toggleButtonHandleClick2() {
      dispatch({
        type: ToggleButtonClick
      });
    }, "toggleButtonHandleClick");
    return _extends((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function(toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends4["aria-controls"] = elementIds.menuId, _extends4["aria-expanded"] = latestState.isOpen, _extends4.id = elementIds.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest2.disabled && _extends({}, {
      onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
    }), rest2);
  }, [dispatch, latest, elementIds]);
  var getInputProps = useCallback(function(_temp5, _temp6) {
    var _extends5;
    var _ref6 = _temp5 === void 0 ? {} : _temp5, onKeyDown = _ref6.onKeyDown, onChange = _ref6.onChange, onInput = _ref6.onInput, onBlur = _ref6.onBlur;
    _ref6.onChangeText;
    var onClick = _ref6.onClick, _ref6$refKey = _ref6.refKey, refKey = _ref6$refKey === void 0 ? "ref" : _ref6$refKey, ref = _ref6.ref, rest2 = _objectWithoutPropertiesLoose(_ref6, _excluded4);
    var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$suppressRefErro = _ref7.suppressRefError, suppressRefError = _ref7$suppressRefErro === void 0 ? false : _ref7$suppressRefErro;
    setGetterPropCallInfo("getInputProps", suppressRefError, refKey, inputRef);
    var latestState = latest.current.state;
    var inputHandleKeyDown = /* @__PURE__ */ __name(function inputHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    }, "inputHandleKeyDown");
    var inputHandleChange = /* @__PURE__ */ __name(function inputHandleChange2(event) {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    }, "inputHandleChange");
    var inputHandleBlur = /* @__PURE__ */ __name(function inputHandleBlur2(event) {
      if (environment != null && environment.document && latestState.isOpen && !mouseAndTouchTrackers.isMouseDown) {
        var isBlurByTabChange = event.relatedTarget === null && environment.document.activeElement !== environment.document.body;
        dispatch({
          type: InputBlur,
          selectItem: !isBlurByTabChange
        });
      }
    }, "inputHandleBlur");
    var inputHandleClick = /* @__PURE__ */ __name(function inputHandleClick2() {
      dispatch({
        type: InputClick
      });
    }, "inputHandleClick");
    var onChangeKey = "onChange";
    var eventHandlers = {};
    if (!rest2.disabled) {
      var _eventHandlers;
      eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers.onClick = callAllEventHandlers(onClick, inputHandleClick), _eventHandlers);
    }
    return _extends((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function(inputNode) {
      inputRef.current = inputNode;
    }), _extends5["aria-activedescendant"] = latestState.isOpen && latestState.highlightedIndex > -1 ? elementIds.getItemId(latestState.highlightedIndex) : "", _extends5["aria-autocomplete"] = "list", _extends5["aria-controls"] = elementIds.menuId, _extends5["aria-expanded"] = latestState.isOpen, _extends5["aria-labelledby"] = rest2 && rest2["aria-label"] ? void 0 : elementIds.labelId, _extends5.autoComplete = "off", _extends5.id = elementIds.inputId, _extends5.role = "combobox", _extends5.value = latestState.inputValue, _extends5), eventHandlers, rest2);
  }, [dispatch, elementIds, environment, inputKeyDownHandlers, latest, mouseAndTouchTrackers, setGetterPropCallInfo]);
  var toggleMenu = useCallback(function() {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  var closeMenu = useCallback(function() {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  var openMenu = useCallback(function() {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  var setHighlightedIndex = useCallback(function(newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = useCallback(function(newSelectedItem) {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var setInputValue = useCallback(function(newInputValue) {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var reset = useCallback(function() {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    // prop getters.
    getItemProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    // actions.
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    setInputValue,
    selectItem,
    reset,
    // state.
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
__name(useCombobox, "useCombobox");
var defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};
function getInitialValue(props, propKey) {
  return getInitialValue$1(props, propKey, defaultStateValues);
}
__name(getInitialValue, "getInitialValue");
function getDefaultValue(props, propKey) {
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
__name(getDefaultValue, "getDefaultValue");
function getInitialState(props) {
  var activeIndex = getInitialValue(props, "activeIndex");
  var selectedItems = getInitialValue(props, "selectedItems");
  return {
    activeIndex,
    selectedItems
  };
}
__name(getInitialState, "getInitialState");
function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }
  var element = event.target;
  if (element instanceof HTMLInputElement && // if element is a text input
  element.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }
  return true;
}
__name(isKeyDownOperationPermitted, "isKeyDownOperationPermitted");
function isStateEqual(prevState, newState) {
  return prevState.selectedItems === newState.selectedItems && prevState.activeIndex === newState.activeIndex;
}
__name(isStateEqual, "isStateEqual");
var propTypes = {
  stateReducer: commonPropTypes.stateReducer,
  itemToKey: commonPropTypes.itemToKey,
  environment: commonPropTypes.environment,
  selectedItems: import_prop_types8.default.array,
  initialSelectedItems: import_prop_types8.default.array,
  defaultSelectedItems: import_prop_types8.default.array,
  getA11yStatusMessage: import_prop_types8.default.func,
  activeIndex: import_prop_types8.default.number,
  initialActiveIndex: import_prop_types8.default.number,
  defaultActiveIndex: import_prop_types8.default.number,
  onActiveIndexChange: import_prop_types8.default.func,
  onSelectedItemsChange: import_prop_types8.default.func,
  keyNavigationNext: import_prop_types8.default.string,
  keyNavigationPrevious: import_prop_types8.default.string
};
var defaultProps2 = {
  itemToKey: defaultProps$3.itemToKey,
  stateReducer: defaultProps$3.stateReducer,
  environment: defaultProps$3.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
};
var validatePropTypes = noop4;
if (false) {
  validatePropTypes = /* @__PURE__ */ __name(function validatePropTypes2(options2, caller) {
    import_prop_types8.default.checkPropTypes(propTypes, options2, "prop", caller.name);
  }, "validatePropTypes");
}
var SelectedItemClick = false ? "__selected_item_click__" : 0;
var SelectedItemKeyDownDelete = false ? "__selected_item_keydown_delete__" : 1;
var SelectedItemKeyDownBackspace = false ? "__selected_item_keydown_backspace__" : 2;
var SelectedItemKeyDownNavigationNext = false ? "__selected_item_keydown_navigation_next__" : 3;
var SelectedItemKeyDownNavigationPrevious = false ? "__selected_item_keydown_navigation_previous__" : 4;
var DropdownKeyDownNavigationPrevious = false ? "__dropdown_keydown_navigation_previous__" : 5;
var DropdownKeyDownBackspace = false ? "__dropdown_keydown_backspace__" : 6;
var DropdownClick = false ? "__dropdown_click__" : 7;
var FunctionAddSelectedItem = false ? "__function_add_selected_item__" : 8;
var FunctionRemoveSelectedItem = false ? "__function_remove_selected_item__" : 9;
var FunctionSetSelectedItems = false ? "__function_set_selected_items__" : 10;
var FunctionSetActiveIndex = false ? "__function_set_active_index__" : 11;
var FunctionReset = false ? "__function_reset__" : 12;
var stateChangeTypes = Object.freeze({
  __proto__: null,
  DropdownClick,
  DropdownKeyDownBackspace,
  DropdownKeyDownNavigationPrevious,
  FunctionAddSelectedItem,
  FunctionRemoveSelectedItem,
  FunctionReset,
  FunctionSetActiveIndex,
  FunctionSetSelectedItems,
  SelectedItemClick,
  SelectedItemKeyDownBackspace,
  SelectedItemKeyDownDelete,
  SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious
});
function downshiftMultipleSelectionReducer(state, action) {
  var type = action.type, index = action.index, props = action.props, selectedItem = action.selectedItem;
  var activeIndex = state.activeIndex, selectedItems = state.selectedItems;
  var changes;
  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;
    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;
    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;
    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete: {
      if (activeIndex < 0) {
        break;
      }
      var newActiveIndex = activeIndex;
      if (selectedItems.length === 1) {
        newActiveIndex = -1;
      } else if (activeIndex === selectedItems.length - 1) {
        newActiveIndex = selectedItems.length - 2;
      }
      changes = _extends({
        selectedItems: [].concat(selectedItems.slice(0, activeIndex), selectedItems.slice(activeIndex + 1))
      }, {
        activeIndex: newActiveIndex
      });
      break;
    }
    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;
    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;
    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [].concat(selectedItems, [selectedItem])
      };
      break;
    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;
    case FunctionRemoveSelectedItem: {
      var _newActiveIndex = activeIndex;
      var selectedItemIndex = selectedItems.findIndex(function(item) {
        return props.itemToKey(item) === props.itemToKey(selectedItem);
      });
      if (selectedItemIndex < 0) {
        break;
      }
      if (selectedItems.length === 1) {
        _newActiveIndex = -1;
      } else if (selectedItemIndex === selectedItems.length - 1) {
        _newActiveIndex = selectedItems.length - 2;
      }
      changes = {
        selectedItems: [].concat(selectedItems.slice(0, selectedItemIndex), selectedItems.slice(selectedItemIndex + 1)),
        activeIndex: _newActiveIndex
      };
      break;
    }
    case FunctionSetSelectedItems: {
      var newSelectedItems = action.selectedItems;
      changes = {
        selectedItems: newSelectedItems
      };
      break;
    }
    case FunctionSetActiveIndex: {
      var _newActiveIndex2 = action.activeIndex;
      changes = {
        activeIndex: _newActiveIndex2
      };
      break;
    }
    case FunctionReset:
      changes = {
        activeIndex: getDefaultValue(props, "activeIndex"),
        selectedItems: getDefaultValue(props, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return _extends({}, state, changes);
}
__name(downshiftMultipleSelectionReducer, "downshiftMultipleSelectionReducer");
var _excluded = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"];
var _excluded2 = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
useMultipleSelection.stateChangeTypes = stateChangeTypes;
function useMultipleSelection(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes(userProps, useMultipleSelection);
  var props = _extends({}, defaultProps2, userProps);
  var getA11yStatusMessage2 = props.getA11yStatusMessage, environment = props.environment, keyNavigationNext = props.keyNavigationNext, keyNavigationPrevious = props.keyNavigationPrevious;
  var _useControlledReducer = useControlledReducer$1(downshiftMultipleSelectionReducer, props, getInitialState, isStateEqual), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
  var activeIndex = state.activeIndex, selectedItems = state.selectedItems;
  var isInitialMount = useIsInitialMount();
  var dropdownRef = useRef(null);
  var selectedItemRefs = useRef();
  selectedItemRefs.current = [];
  var latest = useLatestRef({
    state,
    props
  });
  useA11yMessageStatus(getA11yStatusMessage2, state, [activeIndex, selectedItems], environment);
  useEffect(function() {
    if (isInitialMount) {
      return;
    }
    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);
  useControlPropsValidator({
    props,
    state
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker("getDropdownProps");
  var selectedItemKeyDownHandlers = useMemo(function() {
    var _ref;
    return _ref = {}, _ref[keyNavigationPrevious] = function() {
      dispatch({
        type: SelectedItemKeyDownNavigationPrevious
      });
    }, _ref[keyNavigationNext] = function() {
      dispatch({
        type: SelectedItemKeyDownNavigationNext
      });
    }, _ref.Delete = /* @__PURE__ */ __name(function Delete() {
      dispatch({
        type: SelectedItemKeyDownDelete
      });
    }, "Delete"), _ref.Backspace = /* @__PURE__ */ __name(function Backspace() {
      dispatch({
        type: SelectedItemKeyDownBackspace
      });
    }, "Backspace"), _ref;
  }, [dispatch, keyNavigationNext, keyNavigationPrevious]);
  var dropdownKeyDownHandlers = useMemo(function() {
    var _ref2;
    return _ref2 = {}, _ref2[keyNavigationPrevious] = function(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownNavigationPrevious
        });
      }
    }, _ref2.Backspace = /* @__PURE__ */ __name(function Backspace(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownBackspace
        });
      }
    }, "Backspace"), _ref2;
  }, [dispatch, keyNavigationPrevious]);
  var getSelectedItemProps = useCallback(function(_temp) {
    var _extends2;
    var _ref3 = _temp === void 0 ? {} : _temp, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, ref = _ref3.ref, onClick = _ref3.onClick, onKeyDown = _ref3.onKeyDown, selectedItemProp = _ref3.selectedItem, indexProp = _ref3.index, rest2 = _objectWithoutPropertiesLoose(_ref3, _excluded);
    var latestState = latest.current.state;
    var _getItemAndIndex = getItemAndIndex(selectedItemProp, indexProp, latestState.selectedItems, "Pass either item or index to getSelectedItemProps!"), index = _getItemAndIndex[1];
    var isFocusable = index > -1 && index === latestState.activeIndex;
    var selectedItemHandleClick = /* @__PURE__ */ __name(function selectedItemHandleClick2() {
      dispatch({
        type: SelectedItemClick,
        index
      });
    }, "selectedItemHandleClick");
    var selectedItemHandleKeyDown = /* @__PURE__ */ __name(function selectedItemHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && selectedItemKeyDownHandlers[key]) {
        selectedItemKeyDownHandlers[key](event);
      }
    }, "selectedItemHandleKeyDown");
    return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function(selectedItemNode) {
      if (selectedItemNode) {
        selectedItemRefs.current.push(selectedItemNode);
      }
    }), _extends2.tabIndex = isFocusable ? 0 : -1, _extends2.onClick = callAllEventHandlers(onClick, selectedItemHandleClick), _extends2.onKeyDown = callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown), _extends2), rest2);
  }, [dispatch, latest, selectedItemKeyDownHandlers]);
  var getDropdownProps = useCallback(function(_temp2, _temp3) {
    var _extends3;
    var _ref4 = _temp2 === void 0 ? {} : _temp2, _ref4$refKey = _ref4.refKey, refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey, ref = _ref4.ref, onKeyDown = _ref4.onKeyDown, onClick = _ref4.onClick, _ref4$preventKeyActio = _ref4.preventKeyAction, preventKeyAction = _ref4$preventKeyActio === void 0 ? false : _ref4$preventKeyActio, rest2 = _objectWithoutPropertiesLoose(_ref4, _excluded2);
    var _ref5 = _temp3 === void 0 ? {} : _temp3, _ref5$suppressRefErro = _ref5.suppressRefError, suppressRefError = _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro;
    setGetterPropCallInfo("getDropdownProps", suppressRefError, refKey, dropdownRef);
    var dropdownHandleKeyDown = /* @__PURE__ */ __name(function dropdownHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && dropdownKeyDownHandlers[key]) {
        dropdownKeyDownHandlers[key](event);
      }
    }, "dropdownHandleKeyDown");
    var dropdownHandleClick = /* @__PURE__ */ __name(function dropdownHandleClick2() {
      dispatch({
        type: DropdownClick
      });
    }, "dropdownHandleClick");
    return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(dropdownNode) {
      if (dropdownNode) {
        dropdownRef.current = dropdownNode;
      }
    }), _extends3), !preventKeyAction && {
      onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
      onClick: callAllEventHandlers(onClick, dropdownHandleClick)
    }, rest2);
  }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]);
  var addSelectedItem = useCallback(function(selectedItem) {
    dispatch({
      type: FunctionAddSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  var removeSelectedItem = useCallback(function(selectedItem) {
    dispatch({
      type: FunctionRemoveSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  var setSelectedItems = useCallback(function(newSelectedItems) {
    dispatch({
      type: FunctionSetSelectedItems,
      selectedItems: newSelectedItems
    });
  }, [dispatch]);
  var setActiveIndex = useCallback(function(newActiveIndex) {
    dispatch({
      type: FunctionSetActiveIndex,
      activeIndex: newActiveIndex
    });
  }, [dispatch]);
  var reset = useCallback(function() {
    dispatch({
      type: FunctionReset
    });
  }, [dispatch]);
  return {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    setActiveIndex,
    reset,
    selectedItems,
    activeIndex
  };
}
__name(useMultipleSelection, "useMultipleSelection");

// src/manager/components/sidebar/Search.tsx
var import_fuse = __toESM(require_fuse(), 1);

// src/manager/components/sidebar/types.ts
function isExpandType(x2) {
  return !!(x2 && x2.showAll);
}
__name(isExpandType, "isExpandType");
function isSearchResult(x2) {
  return !!(x2 && x2.item);
}
__name(isSearchResult, "isSearchResult");

// src/manager/components/sidebar/Search.tsx
var { document: document7 } = scope;
var DEFAULT_MAX_SEARCH_RESULTS = 50;
var options = {
  shouldSort: true,
  tokenize: true,
  findAllMatches: true,
  includeScore: true,
  includeMatches: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "name", weight: 0.7 },
    { name: "path", weight: 0.3 }
  ]
};
var SearchBar = styled.div({
  display: "flex",
  flexDirection: "row",
  columnGap: 6
});
var ScreenReaderLabel = styled.label({
  position: "absolute",
  left: -1e4,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
});
var SearchField2 = styled.div(({ theme, isMobile }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: isMobile ? 4 : 2,
  flexGrow: 1,
  height: isMobile ? 36 : 32,
  width: "100%",
  boxShadow: `${theme.button.border} 0 0 0 1px inset`,
  borderRadius: theme.appBorderRadius + 2,
  "&:has(input:focus), &:has(input:active)": {
    boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
    background: theme.background.app
  }
}));
var IconWrapper = styled.div(({ theme, onClick }) => ({
  cursor: onClick ? "pointer" : "default",
  flex: "0 0 28px",
  height: "100%",
  pointerEvents: onClick ? "auto" : "none",
  color: theme.textMutedColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
var Input = styled.input(({ theme, isMobile }) => ({
  appearance: "none",
  height: 28,
  width: "100%",
  padding: 0,
  border: 0,
  background: "transparent",
  fontSize: isMobile ? "16px" : `${theme.typography.size.s1 + 1}px`,
  fontFamily: "inherit",
  transition: "all 150ms",
  color: theme.color.defaultText,
  outline: 0,
  "&::placeholder": {
    color: theme.textMutedColor,
    opacity: 1
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
}));
var FocusKey = styled.code(({ theme }) => ({
  margin: 5,
  marginTop: 6,
  height: 16,
  fontFamily: theme.typography.fonts.base,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  gap: 4,
  flexShrink: 0
}));
var FocusKeyCmd = styled.span({
  fontSize: "14px"
});
var Actions2 = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 2
});
var FocusContainer = styled.div({ outline: 0 });
var Search = react_default.memo(/* @__PURE__ */ __name(function Search2({
  children: children2,
  dataset,
  enableShortcuts = true,
  getLastViewed,
  initialQuery = "",
  searchBarContent,
  searchFieldContent
}) {
  const api = useStorybookApi();
  const inputRef = useRef(null);
  const [inputPlaceholder, setPlaceholder] = useState("Find components");
  const [allComponents, showAllComponents] = useState(false);
  const searchShortcut = api ? shortcutToHumanString(api.getShortcutKeys().search) : "/";
  const makeFuse = useCallback(() => {
    const list = dataset.entries.reduce((acc, [refId, { index, allStatuses }]) => {
      const groupStatus = getGroupStatus(index || {}, allStatuses ?? {});
      if (index) {
        acc.push(
          ...Object.values(index).map((item) => {
            const storyStatuses = allStatuses?.[item.id];
            const mostCriticalStatusValue = storyStatuses ? getMostCriticalStatusValue(Object.values(storyStatuses).map((s2) => s2.value)) : null;
            return {
              ...searchItem(item, dataset.hash[refId]),
              status: mostCriticalStatusValue ?? groupStatus[item.id] ?? null
            };
          })
        );
      }
      return acc;
    }, []);
    return new import_fuse.default(list, options);
  }, [dataset]);
  const getResults = useCallback(
    (input) => {
      const fuse = makeFuse();
      if (!input) {
        return [];
      }
      let results = [];
      const resultIds = /* @__PURE__ */ new Set();
      const distinctResults = fuse.search(input).filter(({ item }) => {
        if (!(item.type === "component" || item.type === "docs" || item.type === "story") || // @ts-expect-error (non strict)
        resultIds.has(item.parent)) {
          return false;
        }
        resultIds.add(item.id);
        return true;
      });
      if (distinctResults.length) {
        results = distinctResults.slice(0, allComponents ? 1e3 : DEFAULT_MAX_SEARCH_RESULTS);
        if (distinctResults.length > DEFAULT_MAX_SEARCH_RESULTS && !allComponents) {
          results.push({
            showAll: /* @__PURE__ */ __name(() => showAllComponents(true), "showAll"),
            totalCount: distinctResults.length,
            moreCount: distinctResults.length - DEFAULT_MAX_SEARCH_RESULTS
          });
        }
      }
      return results;
    },
    [allComponents, makeFuse]
  );
  const onSelect = useCallback(
    (selectedItem) => {
      if (isSearchResult(selectedItem)) {
        const { id, refId } = selectedItem.item;
        api?.selectStory(id, void 0, { ref: refId !== DEFAULT_REF_ID && refId });
        inputRef.current.blur();
        showAllComponents(false);
        return;
      }
      if (isExpandType(selectedItem)) {
        selectedItem.showAll();
      }
    },
    [api]
  );
  const onInputValueChange = useCallback((inputValue, stateAndHelpers) => {
    showAllComponents(false);
  }, []);
  const stateReducer2 = useCallback(
    (state, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.blurInput: {
          return {
            ...changes,
            // Prevent clearing the input on blur
            inputValue: state.inputValue,
            // Return to the tree view after selecting an item
            isOpen: state.inputValue && !state.selectedItem
          };
        }
        case Downshift.stateChangeTypes.mouseUp: {
          return state;
        }
        case Downshift.stateChangeTypes.keyDownEscape: {
          if (state.inputValue) {
            return { ...changes, inputValue: "", isOpen: true, selectedItem: null };
          }
          return { ...changes, isOpen: false, selectedItem: null };
        }
        case Downshift.stateChangeTypes.clickItem:
        case Downshift.stateChangeTypes.keyDownEnter: {
          if (isSearchResult(changes.selectedItem)) {
            return { ...changes, inputValue: state.inputValue };
          }
          if (isExpandType(changes.selectedItem)) {
            return state;
          }
          return changes;
        }
        default:
          return changes;
      }
    },
    []
  );
  const { isMobile } = useLayout();
  return (
    // @ts-expect-error (non strict)
    react_default.createElement(
      Downshift,
      {
        initialInputValue: initialQuery,
        stateReducer: stateReducer2,
        itemToString: (result) => result?.item?.name || "",
        scrollIntoView: (e2) => scrollIntoView(e2),
        onSelect,
        onInputValueChange
      },
      ({
        isOpen,
        openMenu,
        closeMenu,
        inputValue,
        clearSelection,
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getRootProps,
        highlightedIndex
      }) => {
        const input = inputValue ? inputValue.trim() : "";
        let results = input ? getResults(input) : [];
        const lastViewed = !input && getLastViewed();
        if (lastViewed && lastViewed.length) {
          results = lastViewed.reduce((acc, { storyId, refId }) => {
            const data = dataset.hash[refId];
            if (data && data.index && data.index[storyId]) {
              const story = data.index[storyId];
              const item = story.type === "story" ? data.index[story.parent] : story;
              if (!acc.some((res) => res.item.refId === refId && res.item.id === item.id)) {
                acc.push({ item: searchItem(item, dataset.hash[refId]), matches: [], score: 0 });
              }
            }
            return acc;
          }, []);
        }
        const inputId = "storybook-explorer-searchfield";
        const inputProps = getInputProps({
          id: inputId,
          ref: inputRef,
          required: true,
          type: "search",
          placeholder: inputPlaceholder,
          onFocus: /* @__PURE__ */ __name(() => {
            openMenu();
            setPlaceholder("Type to find...");
          }, "onFocus"),
          onBlur: /* @__PURE__ */ __name(() => setPlaceholder("Find components"), "onBlur"),
          onKeyDown: /* @__PURE__ */ __name((e2) => {
            if (e2.key === "Escape" && inputValue.length === 0) {
              inputRef.current.blur();
            }
          }, "onKeyDown")
        });
        const labelProps = getLabelProps({
          htmlFor: inputId
        });
        return react_default.createElement(react_default.Fragment, null, react_default.createElement(ScreenReaderLabel, { ...labelProps }, "Search for components"), react_default.createElement(SearchBar, null, react_default.createElement(
          SearchField2,
          {
            ...getRootProps({ refKey: "" }, { suppressRefError: true }),
            isMobile,
            className: "search-field"
          },
          react_default.createElement(IconWrapper, null, react_default.createElement(SearchIcon, null)),
          react_default.createElement(Input, { ...inputProps, isMobile }),
          !isMobile && enableShortcuts && !isOpen && react_default.createElement(FocusKey, null, searchShortcut === "\u2318 K" ? react_default.createElement(react_default.Fragment, null, react_default.createElement(FocusKeyCmd, null, "\u2318"), "K") : searchShortcut),
          react_default.createElement(Actions2, null, isOpen && react_default.createElement(IconButton, { onClick: () => clearSelection() }, react_default.createElement(CloseIcon, null)), searchFieldContent)
        ), searchBarContent), react_default.createElement(FocusContainer, { tabIndex: 0, id: "storybook-explorer-menu" }, children2({
          query: input,
          results,
          isBrowsing: !isOpen && document7.activeElement !== inputRef.current,
          closeMenu,
          getMenuProps,
          getItemProps,
          highlightedIndex
        })));
      }
    )
  );
}, "Search"));

// src/manager/components/sidebar/SearchResults.tsx
var { document: document8 } = scope;
var ResultsList = styled.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
});
var ResultRow = styled.li(({ theme, isHighlighted }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  textAlign: "left",
  color: "inherit",
  fontSize: `${theme.typography.size.s2}px`,
  background: isHighlighted ? theme.background.hoverable : "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 7,
  paddingBottom: 7,
  paddingLeft: 8,
  paddingRight: 8,
  "&:hover, &:focus": {
    background: curriedTransparentize$1(0.93, theme.color.secondary),
    outline: "none"
  }
}));
var IconWrapper2 = styled.div({
  marginTop: 2
});
var ResultRowContent = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
});
var Mark = styled.mark(({ theme }) => ({
  background: "transparent",
  color: theme.color.secondary
}));
var MoreWrapper = styled.div({
  marginTop: 8
});
var RecentlyOpenedTitle = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: `${theme.typography.size.s1 - 1}px`,
  fontWeight: theme.typography.weight.bold,
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: theme.textMutedColor,
  marginTop: 16,
  marginBottom: 4,
  alignItems: "center",
  ".search-result-recentlyOpened-clear": {
    visibility: "hidden"
  },
  "&:hover": {
    ".search-result-recentlyOpened-clear": {
      visibility: "visible"
    }
  }
}));
var Highlight = react_default.memo(/* @__PURE__ */ __name(function Highlight2({
  children: children2,
  match
}) {
  if (!match) {
    return children2;
  }
  const { value, indices } = match;
  const { nodes: result } = indices.reduce(
    ({ cursor, nodes }, [start, end], index, { length }) => {
      nodes.push(react_default.createElement("span", { key: `${index}-1` }, value.slice(cursor, start)));
      nodes.push(react_default.createElement(Mark, { key: `${index}-2` }, value.slice(start, end + 1)));
      if (index === length - 1) {
        nodes.push(react_default.createElement("span", { key: `${index}-3` }, value.slice(end + 1)));
      }
      return { cursor: end + 1, nodes };
    },
    { cursor: 0, nodes: [] }
  );
  return react_default.createElement("span", null, result);
}, "Highlight"));
var Title = styled.div(({ theme }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));
var Path = styled.div(({ theme }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  fontSize: `${theme.typography.size.s1 - 1}px`,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& > span + span": {
    "&:before": {
      content: "' / '"
    }
  }
}));
var Result = react_default.memo(/* @__PURE__ */ __name(function Result2({ item, matches, onClick, ...props }) {
  const click = useCallback(
    (event) => {
      event.preventDefault();
      onClick?.(event);
    },
    [onClick]
  );
  const api = useStorybookApi();
  useEffect(() => {
    if (api && props.isHighlighted && item.type === "component") {
      api.emit(PRELOAD_ENTRIES, { ids: [item.children[0]] }, { options: { target: item.refId } });
    }
  }, [props.isHighlighted, item]);
  const nameMatch = matches.find((match) => match.key === "name");
  const pathMatches = matches.filter((match) => match.key === "path");
  const [icon] = item.status ? statusMapping[item.status] : [];
  return react_default.createElement(ResultRow, { ...props, onClick: click }, react_default.createElement(IconWrapper2, null, item.type === "component" && react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, react_default.createElement(UseSymbol, { type: "component" })), item.type === "story" && react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "14", height: "14", type: item.subtype }, react_default.createElement(UseSymbol, { type: item.subtype })), !(item.type === "component" || item.type === "story") && react_default.createElement(TypeIcon2, { viewBox: "0 0 14 14", width: "14", height: "14", type: "document" }, react_default.createElement(UseSymbol, { type: "document" }))), react_default.createElement(ResultRowContent, { className: "search-result-item--label" }, react_default.createElement(Title, null, react_default.createElement(Highlight, { match: nameMatch }, item.name)), react_default.createElement(Path, null, item.path.map((group, index) => react_default.createElement("span", { key: index }, react_default.createElement(Highlight, { match: pathMatches.find((match) => match.arrayIndex === index) }, group))))), item.status ? react_default.createElement(StatusLabel, { status: item.status }, icon) : null);
}, "Result"));
var SearchResults = react_default.memo(/* @__PURE__ */ __name(function SearchResults2({
  query,
  results,
  closeMenu,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  isLoading = false,
  enableShortcuts = true,
  clearLastViewed
}) {
  const api = useStorybookApi();
  useEffect(() => {
    const handleEscape = /* @__PURE__ */ __name((event) => {
      if (!enableShortcuts || isLoading || event.repeat) {
        return;
      }
      if (matchesModifiers(false, event) && matchesKeyCode("Escape", event)) {
        const target = event.target;
        if (target?.id === "storybook-explorer-searchfield") {
          return;
        }
        event.preventDefault();
        closeMenu();
      }
    }, "handleEscape");
    document8.addEventListener("keydown", handleEscape);
    return () => document8.removeEventListener("keydown", handleEscape);
  }, [closeMenu, enableShortcuts, isLoading]);
  const mouseOverHandler = useCallback((event) => {
    if (!api) {
      return;
    }
    const currentTarget = event.currentTarget;
    const storyId = currentTarget.getAttribute("data-id");
    const refId = currentTarget.getAttribute("data-refid");
    const item = api.resolveStory(storyId, refId === "storybook_internal" ? void 0 : refId);
    if (item?.type === "component") {
      api.emit(PRELOAD_ENTRIES, {
        // @ts-expect-error (TODO)
        ids: [item.isLeaf ? item.id : item.children[0]],
        options: { target: refId }
      });
    }
  }, []);
  const handleClearLastViewed = /* @__PURE__ */ __name(() => {
    clearLastViewed();
    closeMenu();
  }, "handleClearLastViewed");
  return react_default.createElement(ResultsList, { ...getMenuProps(), key: "results-list" }, results.length > 0 && !query && react_default.createElement(RecentlyOpenedTitle, { className: "search-result-recentlyOpened" }, "Recently opened", react_default.createElement(
    IconButton,
    {
      className: "search-result-recentlyOpened-clear",
      onClick: handleClearLastViewed
    },
    react_default.createElement(TrashIcon, null)
  )), results.length === 0 && query && react_default.createElement("li", null, react_default.createElement(NoResults2, null, react_default.createElement("strong", null, "No components found"), react_default.createElement("small", null, "Find components by name or path."))), results.map((result, index) => {
    if (isExpandType(result)) {
      const props = { ...results, ...getItemProps({ key: index, index, item: result }) };
      const { key: key2, ...rest2 } = props;
      return react_default.createElement(MoreWrapper, { key: "search-result-expand" }, react_default.createElement(Button, { key: key2, ...rest2, size: "small" }, "Show ", result.moreCount, " more results"));
    }
    const { item } = result;
    const key = `${item.refId}::${item.id}`;
    return react_default.createElement(
      Result,
      {
        ...result,
        ...getItemProps({ key, index, item: result }),
        isHighlighted: highlightedIndex === index,
        key,
        "data-id": result.item.id,
        "data-refid": result.item.refId,
        onMouseOver: mouseOverHandler,
        className: "search-result-item"
      }
    );
  }));
}, "SearchResults"));

// src/manager/components/sidebar/useDynamicFavicon.ts
var STATUSES = ["active", "critical", "negative", "positive", "warning"];
var initialIcon;
var getFaviconUrl = /* @__PURE__ */ __name((initialHref = "./favicon.svg", status) => {
  initialIcon ??= initialHref;
  const href = initialIcon + (status && STATUSES.includes(status) ? `?status=${status}` : "");
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ href, status });
    img.onerror = () => resolve({ href: initialIcon, status });
    img.src = href;
  });
}, "getFaviconUrl");
var useDynamicFavicon = /* @__PURE__ */ __name((status) => {
  const links = useRef(document.head.querySelectorAll("link[rel*='icon']"));
  useEffect(() => {
    let isMounted = true;
    const [element, ...others] = links.current;
    if (element && !others.length) {
      getFaviconUrl(element.href, status).then(
        (result) => {
          if (isMounted && result.status === status && element.dataset.status !== status) {
            element.href = result.href;
            if (result.status) {
              element.dataset.status = result.status;
            } else {
              delete element.dataset.status;
            }
          }
        },
        () => {
          if (isMounted) {
            element.href = initialIcon;
          }
        }
      );
      return () => {
        isMounted = false;
        element.href = initialIcon;
      };
    }
  }, [status]);
}, "useDynamicFavicon");

// src/manager/components/sidebar/TestingModule.tsx
var DEFAULT_HEIGHT = 500;
var spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "10%": { transform: "rotate(10deg)" },
  "40%": { transform: "rotate(170deg)" },
  "50%": { transform: "rotate(180deg)" },
  "60%": { transform: "rotate(190deg)" },
  "90%": { transform: "rotate(350deg)" },
  "100%": { transform: "rotate(360deg)" }
});
var Outline = styled.div(({ crashed, failed, running, updated, theme }) => ({
  position: "relative",
  lineHeight: "16px",
  width: "100%",
  padding: 1,
  overflow: "hidden",
  backgroundColor: `var(--sb-sidebar-bottom-card-background, ${theme.background.content})`,
  borderRadius: `var(--sb-sidebar-bottom-card-border-radius, ${theme.appBorderRadius + 1}px)`,
  boxShadow: `inset 0 0 0 1px ${crashed && !running ? theme.color.negative : updated ? theme.color.positive : theme.appBorderColor}, var(--sb-sidebar-bottom-card-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${theme.background.app})`,
  transition: "box-shadow 1s",
  "&:after": {
    content: '""',
    display: running ? "block" : "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: "calc(max(100vw, 100vh) * -0.5)",
    marginTop: "calc(max(100vw, 100vh) * -0.5)",
    height: "max(100vw, 100vh)",
    width: "max(100vw, 100vh)",
    animation: `${spin} 3s linear infinite`,
    background: failed ? (
      // Hardcoded colors to prevent themes from messing with them (orange+gold, secondary+seafoam)
      `conic-gradient(transparent 90deg, #FC521F 150deg, #FFAE00 210deg, transparent 270deg)`
    ) : `conic-gradient(transparent 90deg, #029CFD 150deg, #37D5D3 210deg, transparent 270deg)`,
    opacity: 1,
    willChange: "auto"
  }
}));
var Card = styled.div(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  borderRadius: theme.appBorderRadius,
  backgroundColor: theme.background.content,
  display: "flex",
  flexDirection: "column-reverse",
  "&:hover #testing-module-collapse-toggle": {
    opacity: 1
  }
}));
var Collapsible = styled.div(({ theme }) => ({
  overflow: "hidden",
  willChange: "auto",
  boxShadow: `inset 0 -1px 0 ${theme.appBorderColor}`
}));
var Content = styled.div({
  display: "flex",
  flexDirection: "column"
});
var Bar2 = styled.div(({ onClick }) => ({
  display: "flex",
  width: "100%",
  cursor: onClick ? "pointer" : "default",
  userSelect: "none",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  padding: 4,
  gap: 4
}));
var Action = styled.div({
  display: "flex",
  flexBasis: "100%",
  containerType: "inline-size"
});
var Filters = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  gap: 4
});
var CollapseToggle = styled(Button)({
  opacity: 0,
  transition: "opacity 250ms",
  willChange: "auto",
  "&:focus, &:hover": {
    opacity: 1
  }
});
var RunButton = styled(Button)({
  // 90px is the width of the button when the label is visible
  "@container (max-width: 90px)": {
    span: {
      display: "none"
    }
  }
});
var StatusButton2 = styled(Button)(
  { minWidth: 28 },
  ({ active, status, theme }) => !active && (theme.base === "light" ? {
    background: {
      negative: theme.background.negative,
      warning: theme.background.warning
    }[status],
    color: {
      negative: theme.color.negativeText,
      warning: theme.color.warningText
    }[status]
  } : {
    background: {
      negative: `${theme.color.negative}22`,
      warning: `${theme.color.warning}22`
    }[status],
    color: {
      negative: theme.color.negative,
      warning: theme.color.warning
    }[status]
  })
);
var TestProvider = styled.div(({ theme }) => ({
  padding: 4,
  "&:not(:last-child)": {
    boxShadow: `inset 0 -1px 0 ${theme.appBorderColor}`
  }
}));
var TestingModule = /* @__PURE__ */ __name(({
  registeredTestProviders,
  testProviderStates,
  hasStatuses,
  clearStatuses,
  onRunAll,
  errorCount,
  errorsActive,
  setErrorsActive,
  warningCount,
  warningsActive,
  setWarningsActive,
  successCount
}) => {
  const timeoutRef = useRef(null);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(DEFAULT_HEIGHT);
  const [isCollapsed, setCollapsed] = useState(true);
  const [isChangingCollapse, setChangingCollapse] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const settingsUpdatedTimeoutRef = useRef();
  useEffect(() => {
    const unsubscribe = internal_fullTestProviderStore.onSettingsChanged(() => {
      setIsUpdated(true);
      clearTimeout(settingsUpdatedTimeoutRef.current);
      settingsUpdatedTimeoutRef.current = setTimeout(() => {
        setIsUpdated(false);
      }, 1e3);
    });
    return () => {
      unsubscribe();
      clearTimeout(settingsUpdatedTimeoutRef.current);
    };
  }, []);
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current?.getBoundingClientRect().height || DEFAULT_HEIGHT);
      const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          if (contentRef.current && !isCollapsed) {
            const height = contentRef.current?.getBoundingClientRect().height || DEFAULT_HEIGHT;
            setMaxHeight(height);
          }
        });
      });
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [isCollapsed]);
  const toggleCollapsed = useCallback((event, value) => {
    event?.stopPropagation();
    setChangingCollapse(true);
    setCollapsed((s2) => value ?? !s2);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setChangingCollapse(false);
    }, 250);
  }, []);
  const isRunning = Object.values(testProviderStates).some(
    (testProviderState) => testProviderState === "test-provider-state:running"
  );
  const isCrashed = Object.values(testProviderStates).some(
    (testProviderState) => testProviderState === "test-provider-state:crashed"
  );
  const hasTestProviders = Object.values(registeredTestProviders).length > 0;
  useEffect(() => {
    if (isCrashed && isCollapsed) {
      toggleCollapsed(void 0, false);
    }
  }, [isCrashed, isCollapsed, toggleCollapsed]);
  useDynamicFavicon(
    isCrashed ? "critical" : errorCount > 0 ? "negative" : warningCount > 0 ? "warning" : isRunning ? "active" : successCount > 0 ? "positive" : void 0
  );
  if (!hasTestProviders && !errorCount && !warningCount) {
    return null;
  }
  return react_default.createElement(
    Outline,
    {
      id: "storybook-testing-module",
      running: isRunning,
      crashed: isCrashed,
      failed: errorCount > 0,
      updated: isUpdated,
      "data-updated": isUpdated
    },
    react_default.createElement(Card, null, react_default.createElement(Bar2, { ...hasTestProviders ? { onClick: /* @__PURE__ */ __name((e2) => toggleCollapsed(e2), "onClick") } : {} }, react_default.createElement(Action, null, hasTestProviders && react_default.createElement(
      WithTooltip,
      {
        hasChrome: false,
        tooltip: react_default.createElement(TooltipNote, { note: isRunning ? "Running tests..." : "Start all tests" }),
        trigger: "hover"
      },
      react_default.createElement(
        RunButton,
        {
          size: "medium",
          variant: "ghost",
          padding: "small",
          onClick: (e2) => {
            e2.stopPropagation();
            onRunAll();
          },
          disabled: isRunning
        },
        react_default.createElement(PlayAllHollowIcon, null),
        react_default.createElement("span", null, isRunning ? "Running..." : "Run tests")
      )
    )), react_default.createElement(Filters, null, hasTestProviders && react_default.createElement(
      WithTooltip,
      {
        hasChrome: false,
        tooltip: react_default.createElement(
          TooltipNote,
          {
            note: isCollapsed ? "Expand testing module" : "Collapse testing module"
          }
        ),
        trigger: "hover"
      },
      react_default.createElement(
        CollapseToggle,
        {
          size: "medium",
          variant: "ghost",
          padding: "small",
          onClick: (e2) => toggleCollapsed(e2),
          id: "testing-module-collapse-toggle",
          "aria-label": isCollapsed ? "Expand testing module" : "Collapse testing module"
        },
        react_default.createElement(
          ChevronSmallUpIcon,
          {
            style: {
              transform: isCollapsed ? "none" : "rotate(180deg)",
              transition: "transform 250ms",
              willChange: "auto"
            }
          }
        )
      )
    ), errorCount > 0 && react_default.createElement(
      WithTooltip,
      {
        hasChrome: false,
        tooltip: react_default.createElement(TooltipNote, { note: "Toggle errors" }),
        trigger: "hover"
      },
      react_default.createElement(
        StatusButton2,
        {
          id: "errors-found-filter",
          size: "medium",
          variant: "ghost",
          padding: errorCount < 10 ? "medium" : "small",
          status: "negative",
          active: errorsActive,
          onClick: (e2) => {
            e2.stopPropagation();
            setErrorsActive(!errorsActive);
          },
          "aria-label": "Toggle errors"
        },
        errorCount < 1e3 ? errorCount : "999+"
      )
    ), warningCount > 0 && react_default.createElement(
      WithTooltip,
      {
        hasChrome: false,
        tooltip: react_default.createElement(TooltipNote, { note: "Toggle warnings" }),
        trigger: "hover"
      },
      react_default.createElement(
        StatusButton2,
        {
          id: "warnings-found-filter",
          size: "medium",
          variant: "ghost",
          padding: warningCount < 10 ? "medium" : "small",
          status: "warning",
          active: warningsActive,
          onClick: (e2) => {
            e2.stopPropagation();
            setWarningsActive(!warningsActive);
          },
          "aria-label": "Toggle warnings"
        },
        warningCount < 1e3 ? warningCount : "999+"
      )
    ), hasStatuses && react_default.createElement(
      WithTooltip,
      {
        hasChrome: false,
        tooltip: react_default.createElement(
          TooltipNote,
          {
            note: isRunning ? "Can't clear statuses while tests are running" : "Clear all statuses"
          }
        ),
        trigger: "hover"
      },
      react_default.createElement(
        IconButton,
        {
          id: "clear-statuses",
          size: "medium",
          onClick: (e2) => {
            e2.stopPropagation();
            clearStatuses();
          },
          disabled: isRunning,
          "aria-label": isRunning ? "Can't clear statuses while tests are running" : "Clear all statuses"
        },
        react_default.createElement(SweepIcon, null)
      )
    ))), hasTestProviders && react_default.createElement(
      Collapsible,
      {
        "data-testid": "collapse",
        ...isCollapsed && { inert: "" },
        style: {
          transition: isChangingCollapse ? "max-height 250ms" : "max-height 0ms",
          display: hasTestProviders ? "block" : "none",
          maxHeight: isCollapsed ? 0 : maxHeight
        }
      },
      react_default.createElement(Content, { ref: contentRef }, Object.values(registeredTestProviders).map((registeredTestProvider) => {
        const { render: Render, id } = registeredTestProvider;
        if (!Render) {
          once.warn(
            `No render function found for test provider with id '${id}', skipping...`
          );
          return null;
        }
        return react_default.createElement(TestProvider, { key: id, "data-module-id": id }, react_default.createElement(Render, null));
      }))
    ))
  );
}, "TestingModule");

// src/manager/components/sidebar/SidebarBottom.tsx
var SIDEBAR_BOTTOM_SPACER_ID = "sidebar-bottom-spacer";
var SIDEBAR_BOTTOM_WRAPPER_ID = "sidebar-bottom-wrapper";
var filterNone = /* @__PURE__ */ __name(() => true, "filterNone");
var filterWarn = /* @__PURE__ */ __name(({ statuses = {} }) => Object.values(statuses).some(({ value }) => value === "status-value:warning"), "filterWarn");
var filterError = /* @__PURE__ */ __name(({ statuses = {} }) => Object.values(statuses).some(({ value }) => value === "status-value:error"), "filterError");
var filterBoth = /* @__PURE__ */ __name(({ statuses = {} }) => Object.values(statuses).some(
  ({ value }) => ["status-value:warning", "status-value:error"].includes(value)
), "filterBoth");
var getFilter = /* @__PURE__ */ __name((warningsActive = false, errorsActive = false) => {
  if (warningsActive && errorsActive) {
    return filterBoth;
  }
  if (warningsActive) {
    return filterWarn;
  }
  if (errorsActive) {
    return filterError;
  }
  return filterNone;
}, "getFilter");
var Spacer = styled.div({
  pointerEvents: "none"
});
var Content2 = styled.div(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "12px 0",
  margin: "0 12px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  color: theme.color.defaultText,
  fontSize: theme.typography.size.s1,
  overflow: "hidden",
  "&:empty": {
    display: "none"
  },
  // Integrators can use these to style their custom additions
  "--sb-sidebar-bottom-card-background": theme.background.content,
  "--sb-sidebar-bottom-card-border": `1px solid ${theme.appBorderColor}`,
  "--sb-sidebar-bottom-card-border-radius": `${theme.appBorderRadius + 1}px`,
  "--sb-sidebar-bottom-card-box-shadow": `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${theme.background.app}`
}));
var SidebarBottomBase = /* @__PURE__ */ __name(({
  api,
  notifications = [],
  errorCount,
  warningCount,
  successCount,
  hasStatuses,
  isDevelopment,
  testProviderStates,
  registeredTestProviders,
  onRunAll
}) => {
  const spacerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [warningsActive, setWarningsActive] = useState(false);
  const [errorsActive, setErrorsActive] = useState(false);
  useEffect(() => {
    if (spacerRef.current && wrapperRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (spacerRef.current && wrapperRef.current) {
          spacerRef.current.style.height = `${wrapperRef.current.scrollHeight}px`;
        }
      });
      resizeObserver.observe(wrapperRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);
  useEffect(() => {
    const filter = getFilter(warningCount > 0 && warningsActive, errorCount > 0 && errorsActive);
    api.experimental_setFilter("sidebar-bottom-filter", filter);
  }, [api, warningCount, errorCount, warningsActive, errorsActive]);
  if (!warningCount && !errorCount && Object.values(registeredTestProviders).length === 0 && notifications.length === 0) {
    return null;
  }
  return react_default.createElement(Fragment, null, react_default.createElement(Spacer, { id: SIDEBAR_BOTTOM_SPACER_ID, ref: spacerRef }), react_default.createElement(Content2, { id: SIDEBAR_BOTTOM_WRAPPER_ID, ref: wrapperRef }, react_default.createElement(NotificationList, { notifications, clearNotification: api.clearNotification }), isDevelopment && react_default.createElement(
    TestingModule,
    {
      ...{
        registeredTestProviders,
        testProviderStates,
        onRunAll: /* @__PURE__ */ __name(() => {
          onRunAll();
          setErrorsActive(false);
          setWarningsActive(false);
        }, "onRunAll"),
        hasStatuses,
        clearStatuses: /* @__PURE__ */ __name(() => {
          internal_fullStatusStore.unset();
          internal_fullTestProviderStore.clearAll();
          setErrorsActive(false);
          setWarningsActive(false);
        }, "clearStatuses"),
        errorCount,
        errorsActive,
        setErrorsActive,
        warningCount,
        warningsActive,
        setWarningsActive,
        successCount
      }
    }
  )));
}, "SidebarBottomBase");
var SidebarBottom = /* @__PURE__ */ __name(({ isDevelopment }) => {
  const api = useStorybookApi();
  const registeredTestProviders = api.getElements(Addon_TypesEnum.experimental_TEST_PROVIDER);
  const { notifications } = useStorybookState();
  const { hasStatuses, errorCount, warningCount, successCount } = experimental_useStatusStore(
    (statuses) => {
      return Object.values(statuses).reduce(
        (result, storyStatuses) => {
          Object.values(storyStatuses).forEach((status) => {
            result.hasStatuses = true;
            if (status.value === "status-value:error") {
              result.errorCount += 1;
            }
            if (status.value === "status-value:warning") {
              result.warningCount += 1;
            }
            if (status.value === "status-value:success") {
              result.successCount += 1;
            }
          });
          return result;
        },
        { errorCount: 0, warningCount: 0, successCount: 0, hasStatuses: false }
      );
    }
  );
  const testProviderStates = experimental_useTestProviderStore();
  return react_default.createElement(
    SidebarBottomBase,
    {
      api,
      notifications,
      hasStatuses,
      errorCount,
      warningCount,
      successCount,
      isDevelopment,
      testProviderStates,
      registeredTestProviders,
      onRunAll: internal_fullTestProviderStore.runAll
    }
  );
}, "SidebarBottom");

// src/manager/components/sidebar/TagsFilterPanel.tsx
var groupByType = /* @__PURE__ */ __name((filters) => filters.reduce(
  (acc, filter) => {
    acc[filter.type] = acc[filter.type] || [];
    acc[filter.type].push(filter);
    return acc;
  },
  {}
), "groupByType");
var Wrapper3 = styled.div({
  minWidth: 240,
  maxWidth: 300
});
var Actions3 = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 4,
  padding: 4,
  borderBottom: `1px solid ${theme.appBorderColor}`
}));
var TagRow = styled.div({
  display: "flex",
  "& button": {
    width: 64,
    maxWidth: 64,
    marginLeft: 4,
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: "normal",
    transition: "all 150ms"
  },
  "&:not(:hover)": {
    "& button": {
      marginLeft: 0,
      maxWidth: 0,
      opacity: 0
    },
    "& svg + input": {
      display: "none"
    }
  }
});
var Label = styled.div({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});
var MutedText = styled.span(({ theme }) => ({
  color: theme.textMutedColor
}));
var TagsFilterPanel = /* @__PURE__ */ __name(({
  api,
  filtersById,
  includedFilters,
  excludedFilters,
  toggleFilter,
  setAllFilters,
  resetFilters,
  isDevelopment,
  isDefaultSelection,
  hasDefaultSelection
}) => {
  const ref = useRef(null);
  const renderLink = /* @__PURE__ */ __name(({
    id,
    type,
    title,
    icon,
    count
  }) => {
    const onToggle = /* @__PURE__ */ __name((selected, excluded) => toggleFilter(id, selected, excluded), "onToggle");
    const isIncluded = includedFilters.has(id);
    const isExcluded = excludedFilters.has(id);
    const isChecked = isIncluded || isExcluded;
    const toggleTagLabel = `${isChecked ? "Remove" : "Add"} ${type} filter: ${title}`;
    const invertButtonLabel = `${isExcluded ? "Include" : "Exclude"} ${type}: ${title}`;
    if (count === 0 && type === "built-in") {
      return void 0;
    }
    return {
      id: `filter-${type}-${id}`,
      content: react_default.createElement(TagRow, null, react_default.createElement(
        WithTooltip,
        {
          delayShow: 1e3,
          hasChrome: false,
          style: { minWidth: 0, flex: 1 },
          tooltip: react_default.createElement(TooltipNote, { note: toggleTagLabel }),
          trigger: "hover"
        },
        react_default.createElement(
          ListItem,
          {
            as: "label",
            icon: react_default.createElement(react_default.Fragment, null, isExcluded ? react_default.createElement(DeleteIcon, null) : isIncluded ? null : icon, react_default.createElement(
              Form.Checkbox,
              {
                checked: isChecked,
                onChange: () => onToggle(!isChecked),
                "data-tag": title
              }
            )),
            "aria-label": toggleTagLabel,
            title: react_default.createElement(Label, null, title, isExcluded && react_default.createElement(MutedText, null, " (excluded)")),
            right: isExcluded ? react_default.createElement("s", null, count) : react_default.createElement("span", null, count)
          }
        )
      ), react_default.createElement(
        WithTooltip,
        {
          delayShow: 1e3,
          hasChrome: false,
          tooltip: react_default.createElement(TooltipNote, { note: invertButtonLabel }),
          trigger: "hover"
        },
        react_default.createElement(
          Button,
          {
            variant: "ghost",
            size: "medium",
            onClick: () => onToggle(true, !isExcluded),
            "aria-label": invertButtonLabel
          },
          isExcluded ? "Include" : "Exclude"
        )
      ))
    };
  }, "renderLink");
  const groups = groupByType(Object.values(filtersById));
  const links = Object.values(groups).map(
    (group) => group.sort((a2, b2) => a2.id.localeCompare(b2.id)).map((filter) => renderLink(filter)).filter(Boolean)
  );
  if (!groups.tag?.length && isDevelopment) {
    links.push([
      {
        id: "tags-docs",
        title: "Learn how to add tags",
        icon: react_default.createElement(DocumentIcon, null),
        right: react_default.createElement(ShareAltIcon, null),
        href: api.getDocsUrl({ subpath: "writing-stories/tags#custom-tags" })
      }
    ]);
  }
  const filtersLabel = includedFilters.size === 0 && excludedFilters.size === 0 ? "Select all" : "Clear filters";
  return react_default.createElement(Wrapper3, { ref }, Object.keys(filtersById).length > 0 && react_default.createElement(Actions3, null, includedFilters.size === 0 && excludedFilters.size === 0 ? react_default.createElement(
    IconButton,
    {
      id: "select-all",
      "aria-label": filtersLabel,
      key: "select-all",
      onClick: () => setAllFilters(true)
    },
    react_default.createElement(BatchAcceptIcon, null),
    filtersLabel
  ) : react_default.createElement(
    IconButton,
    {
      id: "deselect-all",
      "aria-label": filtersLabel,
      key: "deselect-all",
      onClick: () => setAllFilters(false)
    },
    react_default.createElement(SweepIcon, null),
    filtersLabel
  ), hasDefaultSelection && react_default.createElement(
    WithTooltip,
    {
      delayShow: 1e3,
      hasChrome: false,
      tooltip: react_default.createElement(TooltipNote, { note: "Reset to default selection" }),
      trigger: "hover"
    },
    react_default.createElement(
      IconButton,
      {
        id: "reset-filters",
        key: "reset-filters",
        onClick: resetFilters,
        "aria-label": "Reset filters",
        disabled: isDefaultSelection
      },
      react_default.createElement(UndoIcon, null)
    )
  )), react_default.createElement(TooltipLinkList, { links }));
}, "TagsFilterPanel");

// src/manager/components/sidebar/TagsFilter.tsx
var TAGS_FILTER = "tags-filter";
var BUILT_IN_TAGS = /* @__PURE__ */ new Set([
  "dev",
  "test",
  "autodocs",
  "attached-mdx",
  "unattached-mdx",
  "play-fn",
  "test-fn"
]);
var add = /* @__PURE__ */ __name((set, id) => {
  const copy3 = new Set(set);
  copy3.add(id);
  return copy3;
}, "add");
var remove = /* @__PURE__ */ __name((set, id) => {
  const copy3 = new Set(set);
  copy3.delete(id);
  return copy3;
}, "remove");
var equal = /* @__PURE__ */ __name((left, right) => left.size === right.size && (/* @__PURE__ */ new Set([...left, ...right])).size === left.size, "equal");
var Wrapper4 = styled.div({
  position: "relative"
});
var TagSelected = styled(Badge)(({ theme }) => ({
  position: "absolute",
  top: 7,
  right: 7,
  transform: "translate(50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 3,
  height: 6,
  minWidth: 6,
  lineHeight: "px",
  boxShadow: `${theme.barSelectedColor} 0 0 0 1px inset`,
  fontSize: theme.typography.size.s1 - 1,
  background: theme.color.secondary,
  color: theme.color.lightest
}));
var TagsFilter = /* @__PURE__ */ __name(({ api, indexJson, isDevelopment, tagPresets }) => {
  const filtersById = useMemo(() => {
    const userTagsCounts = Object.values(indexJson.entries).reduce(
      (acc, entry) => {
        entry.tags?.forEach((tag) => {
          if (!BUILT_IN_TAGS.has(tag)) {
            acc[tag] = (acc[tag] || 0) + 1;
          }
        });
        return acc;
      },
      {}
    );
    const userFilters = Object.fromEntries(
      Object.entries(userTagsCounts).map(([tag, count]) => {
        const filterFn = /* @__PURE__ */ __name((entry, excluded) => excluded ? !entry.tags?.includes(tag) : !!entry.tags?.includes(tag), "filterFn");
        return [tag, { id: tag, type: "tag", title: tag, count, filterFn }];
      })
    );
    const withCount = /* @__PURE__ */ __name((filterFn) => ({
      count: Object.values(indexJson.entries).filter((entry) => filterFn(entry)).length,
      filterFn
    }), "withCount");
    const builtInFilters = {
      _docs: {
        id: "_docs",
        type: "built-in",
        title: "Documentation",
        icon: react_default.createElement(DocumentIcon, { color: color.gold }),
        ...withCount(
          (entry, excluded) => excluded ? entry.type !== "docs" : entry.type === "docs"
        )
      },
      _play: {
        id: "_play",
        type: "built-in",
        title: "Play",
        icon: react_default.createElement(PlayHollowIcon, { color: color.seafoam }),
        ...withCount(
          (entry, excluded) => excluded ? entry.type !== "story" || !entry.tags?.includes("play-fn") : entry.type === "story" && !!entry.tags?.includes("play-fn")
        )
      },
      _test: {
        id: "_test",
        type: "built-in",
        title: "Testing",
        icon: react_default.createElement(BeakerIcon, { color: color.green }),
        ...withCount(
          (entry, excluded) => excluded ? entry.type !== "story" || entry.subtype !== "test" : entry.type === "story" && entry.subtype === "test"
        )
      }
    };
    return { ...userFilters, ...builtInFilters };
  }, [indexJson.entries]);
  const { defaultIncluded, defaultExcluded } = useMemo(() => {
    return Object.entries(tagPresets).reduce(
      (acc, [tag, { defaultFilterSelection }]) => {
        if (defaultFilterSelection === "include") {
          acc.defaultIncluded.add(tag);
        } else if (defaultFilterSelection === "exclude") {
          acc.defaultExcluded.add(tag);
        }
        return acc;
      },
      { defaultIncluded: /* @__PURE__ */ new Set(), defaultExcluded: /* @__PURE__ */ new Set() }
    );
  }, [tagPresets]);
  const [includedFilters, setIncludedFilters] = useState(new Set(defaultIncluded));
  const [excludedFilters, setExcludedFilters] = useState(new Set(defaultExcluded));
  const [expanded, setExpanded] = useState(false);
  const tagsActive = includedFilters.size > 0 || excludedFilters.size > 0;
  const resetFilters = useCallback(() => {
    setIncludedFilters(new Set(defaultIncluded));
    setExcludedFilters(new Set(defaultExcluded));
  }, [defaultIncluded, defaultExcluded]);
  useEffect(resetFilters, [resetFilters]);
  useEffect(() => {
    api.experimental_setFilter(TAGS_FILTER, (item) => {
      const included = Object.values(
        groupByType(Array.from(includedFilters).map((id) => filtersById[id]))
      );
      const excluded = Object.values(
        groupByType(Array.from(excludedFilters).map((id) => filtersById[id]))
      );
      return (!included.length || included.every((group) => group.some(({ filterFn }) => filterFn(item, false)))) && (!excluded.length || excluded.every((group) => group.every(({ filterFn }) => filterFn(item, true))));
    });
  }, [api, includedFilters, excludedFilters, filtersById]);
  const toggleFilter = useCallback(
    (id, selected, excluded) => {
      if (excluded === true) {
        setExcludedFilters(add(excludedFilters, id));
        setIncludedFilters(remove(includedFilters, id));
      } else if (excluded === false) {
        setIncludedFilters(add(includedFilters, id));
        setExcludedFilters(remove(excludedFilters, id));
      } else if (selected) {
        setIncludedFilters(add(includedFilters, id));
        setExcludedFilters(remove(excludedFilters, id));
      } else {
        setIncludedFilters(remove(includedFilters, id));
        setExcludedFilters(remove(excludedFilters, id));
      }
    },
    [includedFilters, excludedFilters]
  );
  const setAllFilters = useCallback(
    (selected) => {
      if (selected) {
        setIncludedFilters(new Set(Object.keys(filtersById)));
      } else {
        setIncludedFilters(/* @__PURE__ */ new Set());
      }
      setExcludedFilters(/* @__PURE__ */ new Set());
    },
    [filtersById]
  );
  const handleToggleExpand = useCallback(
    (event) => {
      event.preventDefault();
      setExpanded(!expanded);
    },
    [expanded, setExpanded]
  );
  if (Object.keys(filtersById).length === 0 && !isDevelopment) {
    return null;
  }
  return react_default.createElement(
    WithTooltip,
    {
      placement: "bottom",
      trigger: "click",
      onVisibleChange: setExpanded,
      portalContainer: "#storybook-mobile-menu",
      tooltip: () => react_default.createElement(
        TagsFilterPanel,
        {
          api,
          filtersById,
          includedFilters,
          excludedFilters,
          toggleFilter,
          setAllFilters,
          resetFilters,
          isDevelopment,
          isDefaultSelection: equal(includedFilters, defaultIncluded) && equal(excludedFilters, defaultExcluded),
          hasDefaultSelection: defaultIncluded.size > 0 || defaultExcluded.size > 0
        }
      ),
      closeOnOutsideClick: true
    },
    react_default.createElement(Wrapper4, null, react_default.createElement(IconButton, { key: "tags", title: "Tag filters", active: tagsActive, onClick: handleToggleExpand }, react_default.createElement(FilterIcon, null)), includedFilters.size + excludedFilters.size > 0 && react_default.createElement(TagSelected, null))
  );
}, "TagsFilter");

// src/manager/components/sidebar/useLastViewed.ts
var import_store2 = __toESM(require_store2(), 1);
var save = debounce2((value) => import_store2.default.set("lastViewedStoryIds", value), 1e3);
var useLastViewed = /* @__PURE__ */ __name((selection) => {
  const initialLastViewedStoryIds = useMemo(() => {
    const items = import_store2.default.get("lastViewedStoryIds");
    if (!items || !Array.isArray(items)) {
      return [];
    }
    if (!items.some((item) => typeof item === "object" && item.storyId && item.refId)) {
      return [];
    }
    return items;
  }, [import_store2.default]);
  const lastViewedRef = useRef(initialLastViewedStoryIds);
  const updateLastViewed = useCallback(
    (story) => {
      const items = lastViewedRef.current;
      const index = items.findIndex(
        ({ storyId, refId }) => storyId === story.storyId && refId === story.refId
      );
      if (index === 0) {
        return;
      }
      if (index === -1) {
        lastViewedRef.current = [story, ...items];
      } else {
        lastViewedRef.current = [story, ...items.slice(0, index), ...items.slice(index + 1)];
      }
      save(lastViewedRef.current);
    },
    [lastViewedRef]
  );
  useEffect(() => {
    if (selection) {
      updateLastViewed(selection);
    }
  }, [selection]);
  return {
    getLastViewed: useCallback(() => lastViewedRef.current, [lastViewedRef]),
    clearLastViewed: useCallback(() => {
      lastViewedRef.current = lastViewedRef.current.slice(0, 1);
      save(lastViewedRef.current);
    }, [lastViewedRef])
  };
}, "useLastViewed");

// src/manager/components/sidebar/Sidebar.tsx
var DEFAULT_REF_ID = "storybook_internal";
var Container7 = styled.nav(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: theme.background.content,
  [MEDIA_DESKTOP_BREAKPOINT]: {
    background: theme.background.app
  }
}));
var Top = styled(Spaced)({
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 20,
  paddingTop: 16,
  flex: 1
});
var TooltipNoteWrapper = styled(TooltipNote)({
  margin: 0
});
var CreateNewStoryButton = styled(IconButton)(({ theme, isMobile }) => ({
  color: theme.color.mediumdark,
  width: isMobile ? 36 : 32,
  height: isMobile ? 36 : 32,
  borderRadius: theme.appBorderRadius + 2
}));
var Swap = react_default.memo(/* @__PURE__ */ __name(function Swap2({
  children: children2,
  condition
}) {
  const [a2, b2] = react_default.Children.toArray(children2);
  return react_default.createElement(react_default.Fragment, null, react_default.createElement("div", { style: { display: condition ? "block" : "none" } }, a2), react_default.createElement("div", { style: { display: condition ? "none" : "block" } }, b2));
}, "Swap"));
var useCombination = /* @__PURE__ */ __name((index, indexError, previewInitialized, allStatuses, refs) => {
  const hash = useMemo(
    () => ({
      [DEFAULT_REF_ID]: {
        index,
        filteredIndex: index,
        indexError,
        previewInitialized,
        allStatuses,
        title: null,
        id: DEFAULT_REF_ID,
        url: "iframe.html"
      },
      ...refs
    }),
    [refs, index, indexError, previewInitialized, allStatuses]
  );
  return useMemo(() => ({ hash, entries: Object.entries(hash) }), [hash]);
}, "useCombination");
var isRendererReact = scope.STORYBOOK_RENDERER === "react";
var Sidebar = react_default.memo(/* @__PURE__ */ __name(function Sidebar2({
  // @ts-expect-error (non strict)
  storyId = null,
  refId = DEFAULT_REF_ID,
  index,
  indexJson,
  indexError,
  allStatuses,
  previewInitialized,
  menu,
  menuHighlighted = false,
  enableShortcuts = true,
  isDevelopment = scope.CONFIG_TYPE === "DEVELOPMENT",
  refs = {},
  onMenuClick,
  showCreateStoryButton = isDevelopment && isRendererReact
}) {
  const [isFileSearchModalOpen, setIsFileSearchModalOpen] = useState(false);
  const selected = useMemo(() => storyId && { storyId, refId }, [storyId, refId]);
  const dataset = useCombination(index, indexError, previewInitialized, allStatuses, refs);
  const isLoading = !index && !indexError;
  const hasEntries = Object.keys(indexJson?.entries ?? {}).length > 0;
  const lastViewedProps = useLastViewed(selected);
  const { isMobile } = useLayout();
  const api = useStorybookApi();
  const tagPresets = useMemo(
    () => Object.entries(scope.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
      const [tag, option] = entry;
      acc[tag] = option;
      return acc;
    }, {}),
    []
  );
  return react_default.createElement(Container7, { className: "container sidebar-container", "aria-label": "Global" }, react_default.createElement(ScrollArea, { vertical: true, offset: 3, scrollbarSize: 6 }, react_default.createElement(Top, { row: 1.6 }, react_default.createElement(
    Heading,
    {
      className: "sidebar-header",
      menuHighlighted,
      menu,
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading,
      onMenuClick
    }
  ), react_default.createElement(
    Search,
    {
      dataset,
      enableShortcuts,
      searchBarContent: showCreateStoryButton && react_default.createElement(react_default.Fragment, null, react_default.createElement(
        WithTooltip,
        {
          trigger: "hover",
          hasChrome: false,
          tooltip: react_default.createElement(TooltipNoteWrapper, { note: "Create a new story" })
        },
        react_default.createElement(
          CreateNewStoryButton,
          {
            "aria-label": "Create a new story",
            isMobile,
            onClick: () => {
              setIsFileSearchModalOpen(true);
            },
            variant: "outline"
          },
          react_default.createElement(PlusIcon, null)
        )
      ), react_default.createElement(
        CreateNewStoryFileModal,
        {
          open: isFileSearchModalOpen,
          onOpenChange: setIsFileSearchModalOpen
        }
      )),
      searchFieldContent: indexJson && react_default.createElement(
        TagsFilter,
        {
          api,
          indexJson,
          isDevelopment,
          tagPresets
        }
      ),
      ...lastViewedProps
    },
    ({
      query,
      results,
      isBrowsing,
      closeMenu,
      getMenuProps,
      getItemProps,
      highlightedIndex
    }) => react_default.createElement(Swap, { condition: isBrowsing }, react_default.createElement(
      Explorer,
      {
        dataset,
        selected,
        isLoading,
        isBrowsing,
        hasEntries
      }
    ), react_default.createElement(
      SearchResults,
      {
        query,
        results,
        closeMenu,
        getMenuProps,
        getItemProps,
        highlightedIndex,
        enableShortcuts,
        isLoading,
        clearLastViewed: lastViewedProps.clearLastViewed
      }
    ))
  )), isMobile || isLoading ? null : react_default.createElement(SidebarBottom, { isDevelopment })));
}, "Sidebar"));

// src/manager/container/Sidebar.tsx
var Sidebar3 = react_default.memo(/* @__PURE__ */ __name(function Sideber({ onMenuClick }) {
  const mapper5 = /* @__PURE__ */ __name(({ state, api }) => {
    const {
      ui: { name, url, enableShortcuts },
      viewMode,
      storyId,
      refId,
      layout: { showToolbar },
      // FIXME: This is the actual `index.json` index where the `index` below
      // is actually the stories hash. We should fix this up and make it consistent.
      internal_index,
      filteredIndex: index,
      indexError,
      previewInitialized,
      refs
    } = state;
    const menu = useMenu(
      state,
      api,
      showToolbar,
      api.getIsFullscreen(),
      api.getIsPanelShown(),
      api.getIsNavShown(),
      enableShortcuts
    );
    const whatsNewNotificationsEnabled = state.whatsNewData?.status === "SUCCESS" && !state.disableWhatsNewNotifications;
    return {
      title: name,
      url,
      indexJson: internal_index,
      index,
      indexError,
      previewInitialized,
      refs,
      storyId,
      refId,
      viewMode,
      menu,
      menuHighlighted: whatsNewNotificationsEnabled && api.isWhatsNewUnread(),
      enableShortcuts
    };
  }, "mapper");
  return react_default.createElement(Consumer, { filter: mapper5 }, (fromState) => {
    const allStatuses = experimental_useStatusStore();
    return react_default.createElement(Sidebar, { ...fromState, allStatuses, onMenuClick });
  });
}, "Sideber"));
var Sidebar_default = Sidebar3;

// src/manager/App.tsx
var App = /* @__PURE__ */ __name(({ managerLayoutState, setManagerLayoutState, pages, hasTab }) => {
  const { setMobileAboutOpen } = useLayout();
  return react_default.createElement(react_default.Fragment, null, react_default.createElement(Global, { styles: createGlobal }), react_default.createElement(
    Layout,
    {
      hasTab,
      managerLayoutState,
      setManagerLayoutState,
      slotMain: react_default.createElement(Preview_default, { id: "main", withLoader: true }),
      slotSidebar: react_default.createElement(Sidebar_default, { onMenuClick: () => setMobileAboutOpen((state) => !state) }),
      slotPanel: react_default.createElement(Panel_default, null),
      slotPages: pages.map(({ id, render: Content4 }) => react_default.createElement(Content4, { key: id }))
    }
  ));
}, "App");

// src/manager/provider.ts
var _Provider = class _Provider {
  getElements(_type) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(_api) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    console.error("Provider.getConfig() is not implemented!");
    return {};
  }
};
__name(_Provider, "Provider");
var Provider2 = _Provider;

// src/manager/settings/About.tsx
var Container8 = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 40
});
var Header = styled.header({
  marginBottom: 32,
  alignItems: "center",
  display: "flex",
  "> svg": {
    height: 48,
    width: "auto",
    marginRight: 8
  }
});
var Footer = styled.div(({ theme }) => ({
  marginBottom: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.base === "light" ? theme.color.dark : theme.color.lightest,
  fontWeight: theme.typography.weight.regular,
  fontSize: theme.typography.size.s2
}));
var Actions4 = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  marginTop: 24,
  gap: 16
});
var StyledLink = styled(Link)(({ theme }) => ({
  "&&": {
    fontWeight: theme.typography.weight.bold,
    color: theme.base === "light" ? theme.color.dark : theme.color.light
  },
  "&:hover": {
    color: theme.base === "light" ? theme.color.darkest : theme.color.lightest
  }
}));
var AboutScreen = /* @__PURE__ */ __name(({ onNavigateToWhatsNew }) => {
  return react_default.createElement(Container8, null, react_default.createElement(Header, null, react_default.createElement(StorybookLogo, { alt: "Storybook" })), react_default.createElement(UpgradeBlock, { onNavigateToWhatsNew }), react_default.createElement(Footer, null, react_default.createElement(Actions4, null, react_default.createElement(Button, { asChild: true }, react_default.createElement("a", { href: "https://github.com/storybookjs/storybook" }, react_default.createElement(GithubIcon, null), "GitHub")), react_default.createElement(Button, { asChild: true }, react_default.createElement("a", { href: "https://storybook.js.org/docs?ref=ui" }, react_default.createElement(DocumentIcon, { style: { display: "inline", marginRight: 5 } }), "Documentation"))), react_default.createElement("div", null, "Open source software maintained by", " ", react_default.createElement(StyledLink, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", react_default.createElement(StyledLink, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community"))));
}, "AboutScreen");

// src/manager/settings/AboutPage.tsx
var _NotificationClearer = class _NotificationClearer extends Component {
  componentDidMount() {
    const { api, notificationId } = this.props;
    api.clearNotification(notificationId);
  }
  render() {
    const { children: children2 } = this.props;
    return children2;
  }
};
__name(_NotificationClearer, "NotificationClearer");
var NotificationClearer = _NotificationClearer;
var AboutPage = /* @__PURE__ */ __name(() => {
  const api = useStorybookApi();
  const state = useStorybookState();
  const onNavigateToWhatsNew = useCallback(() => {
    api.changeSettingsTab("whats-new");
  }, [api]);
  return react_default.createElement(NotificationClearer, { api, notificationId: "update" }, react_default.createElement(
    AboutScreen,
    {
      onNavigateToWhatsNew: state.whatsNewData?.status === "SUCCESS" ? onNavigateToWhatsNew : void 0
    }
  ));
}, "AboutPage");

// src/manager/settings/SettingsFooter.tsx
var Footer2 = styled.div(({ theme }) => ({
  display: "flex",
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${theme.appBorderColor}`,
  fontWeight: theme.typography.weight.bold,
  "& > * + *": {
    marginLeft: 20
  }
}));
var SettingsFooter = /* @__PURE__ */ __name((props) => react_default.createElement(Footer2, { ...props }, react_default.createElement(Link, { secondary: true, href: "https://storybook.js.org?ref=ui", cancel: false, target: "_blank" }, "Docs"), react_default.createElement(Link, { secondary: true, href: "https://github.com/storybookjs/storybook", cancel: false, target: "_blank" }, "GitHub"), react_default.createElement(
  Link,
  {
    secondary: true,
    href: "https://storybook.js.org/community?ref=ui#support",
    cancel: false,
    target: "_blank"
  },
  "Support"
)), "SettingsFooter");
var SettingsFooter_default = SettingsFooter;

// src/manager/settings/shortcuts.tsx
var Header2 = styled.header(({ theme }) => ({
  marginBottom: 20,
  fontSize: theme.typography.size.m3,
  fontWeight: theme.typography.weight.bold,
  alignItems: "center",
  display: "flex"
}));
var HeaderItem = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold
}));
var GridHeaderRow = styled.div({
  alignSelf: "flex-end",
  display: "grid",
  margin: "10px 0",
  gridTemplateColumns: "1fr 1fr 12px",
  "& > *:last-of-type": {
    gridColumn: "2 / 2",
    justifySelf: "flex-end",
    gridRow: "1"
  }
});
var Row = styled.div(({ theme }) => ({
  padding: "6px 0",
  borderTop: `1px solid ${theme.appBorderColor}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 0px"
}));
var GridWrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(auto, auto)",
  marginBottom: 20
});
var Description = styled.div({
  alignSelf: "center"
});
var TextInput = styled(Form.Input)(
  ({ valid, theme }) => valid === "error" ? {
    animation: `${theme.animation.jiggle} 700ms ease-out`
  } : {},
  {
    display: "flex",
    width: 80,
    flexDirection: "column",
    justifySelf: "flex-end",
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center"
  }
);
var Fade = keyframes`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`;
var SuccessIcon = styled(CheckIcon)(
  ({ valid, theme }) => valid === "valid" ? {
    color: theme.color.positive,
    animation: `${Fade} 2s ease forwards`
  } : {
    opacity: 0
  },
  {
    alignSelf: "center",
    display: "flex",
    marginLeft: 10,
    height: 14,
    width: 14
  }
);
var Container9 = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  padding: `3rem 20px`,
  maxWidth: 600,
  margin: "0 auto"
}));
var shortcutLabels = {
  fullScreen: "Go full screen",
  togglePanel: "Toggle addons",
  panelPosition: "Toggle addons orientation",
  toggleNav: "Toggle sidebar",
  toolbar: "Toggle canvas toolbar",
  search: "Focus search",
  focusNav: "Focus sidebar",
  focusIframe: "Focus canvas",
  focusPanel: "Focus addons",
  prevComponent: "Previous component",
  nextComponent: "Next component",
  prevStory: "Previous story",
  nextStory: "Next story",
  shortcutsPage: "Go to shortcuts page",
  aboutPage: "Go to about page",
  collapseAll: "Collapse all items on sidebar",
  expandAll: "Expand all items on sidebar",
  remount: "Remount component",
  openInEditor: "Open story in editor",
  copyStoryLink: "Copy story link to clipboard"
  // TODO: bring this back once we want to add shortcuts for this
  // copyStoryName: 'Copy story name to clipboard',
};
var fixedShortcuts = ["escape"];
function toShortcutState(shortcutKeys) {
  return Object.entries(shortcutKeys).reduce(
    // @ts-expect-error (non strict)
    (acc, [feature, shortcut]) => fixedShortcuts.includes(feature) ? acc : { ...acc, [feature]: { shortcut, error: false } },
    {}
  );
}
__name(toShortcutState, "toShortcutState");
var _ShortcutsScreen = class _ShortcutsScreen extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = /* @__PURE__ */ __name((e2) => {
      const { activeFeature, shortcutKeys } = this.state;
      if (e2.key === "Backspace") {
        return this.restoreDefault();
      }
      const shortcut = eventToShortcut(e2);
      if (!shortcut) {
        return false;
      }
      const normalizedShortcut = shortcut.map(
        (key) => Array.isArray(key) ? key.at(-1) : key
      );
      const error = !!Object.entries(shortcutKeys).find(
        ([feature, { shortcut: existingShortcut }]) => feature !== activeFeature && existingShortcut && shortcutMatchesShortcut(normalizedShortcut, existingShortcut)
      );
      return this.setState({
        shortcutKeys: { ...shortcutKeys, [activeFeature]: { shortcut: normalizedShortcut, error } }
      });
    }, "onKeyDown");
    this.onFocus = /* @__PURE__ */ __name((focusedInput) => () => {
      const { shortcutKeys } = this.state;
      this.setState({
        activeFeature: focusedInput,
        shortcutKeys: {
          ...shortcutKeys,
          [focusedInput]: { shortcut: null, error: false }
        }
      });
    }, "onFocus");
    this.onBlur = /* @__PURE__ */ __name(async () => {
      const { shortcutKeys, activeFeature } = this.state;
      if (shortcutKeys[activeFeature]) {
        const { shortcut, error } = shortcutKeys[activeFeature];
        if (!shortcut || error) {
          return this.restoreDefault();
        }
        return this.saveShortcut();
      }
      return false;
    }, "onBlur");
    this.saveShortcut = /* @__PURE__ */ __name(async () => {
      const { activeFeature, shortcutKeys } = this.state;
      const { setShortcut } = this.props;
      await setShortcut(activeFeature, shortcutKeys[activeFeature].shortcut);
      this.setState({ successField: activeFeature });
    }, "saveShortcut");
    this.restoreDefaults = /* @__PURE__ */ __name(async () => {
      const { restoreAllDefaultShortcuts } = this.props;
      const defaultShortcuts = await restoreAllDefaultShortcuts();
      return this.setState({ shortcutKeys: toShortcutState(defaultShortcuts) });
    }, "restoreDefaults");
    this.restoreDefault = /* @__PURE__ */ __name(async () => {
      const { activeFeature, shortcutKeys } = this.state;
      const { restoreDefaultShortcut } = this.props;
      const defaultShortcut = await restoreDefaultShortcut(activeFeature);
      return this.setState({
        shortcutKeys: {
          ...shortcutKeys,
          ...toShortcutState({ [activeFeature]: defaultShortcut })
        }
      });
    }, "restoreDefault");
    this.displaySuccessMessage = /* @__PURE__ */ __name((activeElement) => {
      const { successField, shortcutKeys } = this.state;
      return activeElement === successField && shortcutKeys[activeElement].error === false ? "valid" : void 0;
    }, "displaySuccessMessage");
    this.displayError = /* @__PURE__ */ __name((activeElement) => {
      const { activeFeature, shortcutKeys } = this.state;
      return activeElement === activeFeature && shortcutKeys[activeElement].error === true ? "error" : void 0;
    }, "displayError");
    this.renderKeyInput = /* @__PURE__ */ __name(() => {
      const { shortcutKeys, addonsShortcutLabels } = this.state;
      const arr = Object.entries(shortcutKeys).map(([feature, { shortcut }]) => react_default.createElement(Row, { key: feature }, react_default.createElement(Description, null, shortcutLabels[feature] || addonsShortcutLabels[feature]), react_default.createElement(
        TextInput,
        {
          spellCheck: "false",
          valid: this.displayError(feature),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(feature),
          onKeyDown: this.onKeyDown,
          value: shortcut ? shortcutToHumanString(shortcut) : "",
          placeholder: "Type keys",
          readOnly: true
        }
      ), react_default.createElement(SuccessIcon, { valid: this.displaySuccessMessage(feature) })));
      return arr;
    }, "renderKeyInput");
    this.renderKeyForm = /* @__PURE__ */ __name(() => react_default.createElement(GridWrapper, null, react_default.createElement(GridHeaderRow, null, react_default.createElement(HeaderItem, null, "Commands"), react_default.createElement(HeaderItem, null, "Shortcut")), this.renderKeyInput()), "renderKeyForm");
    this.state = {
      // @ts-expect-error (non strict)
      activeFeature: void 0,
      // @ts-expect-error (non strict)
      successField: void 0,
      // The initial shortcutKeys that come from props are the defaults/what was saved
      // As the user interacts with the page, the state stores the temporary, unsaved shortcuts
      // This object also includes the error attached to each shortcut
      // @ts-expect-error (non strict)
      shortcutKeys: toShortcutState(props.shortcutKeys),
      addonsShortcutLabels: props.addonsShortcutLabels
    };
  }
  render() {
    const layout = this.renderKeyForm();
    return react_default.createElement(Container9, null, react_default.createElement(Header2, null, "Keyboard shortcuts"), layout, react_default.createElement(
      Button,
      {
        variant: "outline",
        size: "small",
        id: "restoreDefaultsHotkeys",
        onClick: this.restoreDefaults
      },
      "Restore defaults"
    ), react_default.createElement(SettingsFooter_default, null));
  }
};
__name(_ShortcutsScreen, "ShortcutsScreen");
var ShortcutsScreen = _ShortcutsScreen;

// src/manager/settings/ShortcutsPage.tsx
var ShortcutsPage = /* @__PURE__ */ __name(() => react_default.createElement(Consumer, null, ({
  api: {
    getShortcutKeys,
    getAddonsShortcutLabels,
    setShortcut,
    restoreDefaultShortcut,
    restoreAllDefaultShortcuts
  }
}) => react_default.createElement(
  ShortcutsScreen,
  {
    shortcutKeys: getShortcutKeys(),
    addonsShortcutLabels: getAddonsShortcutLabels(),
    ...{ setShortcut, restoreDefaultShortcut, restoreAllDefaultShortcuts }
  }
)), "ShortcutsPage");

// src/manager/settings/whats_new.tsx
var Centered = styled.div({
  top: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "100%",
  textAlign: "center"
});
var LoaderWrapper2 = styled.div({
  position: "relative",
  height: "32px"
});
var Message2 = styled.div(({ theme }) => ({
  paddingTop: "12px",
  color: theme.textMutedColor,
  maxWidth: "295px",
  margin: "0 auto",
  fontSize: `${theme.typography.size.s1}px`,
  lineHeight: `16px`
}));
var Container10 = styled.div(({ theme }) => ({
  position: "absolute",
  width: "100%",
  bottom: "40px",
  background: theme.background.bar,
  fontSize: `13px`,
  borderTop: "1px solid",
  borderColor: theme.appBorderColor,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}));
var WhatsNewFooter = /* @__PURE__ */ __name(({
  isNotificationsEnabled,
  onToggleNotifications,
  onCopyLink
}) => {
  const theme = useTheme();
  const [copyText, setCopyText] = useState("Copy Link");
  const copyLink = /* @__PURE__ */ __name(() => {
    onCopyLink();
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy Link"), 4e3);
  }, "copyLink");
  return react_default.createElement(Container10, null, react_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, react_default.createElement(HeartIcon, { color: theme.color.mediumdark }), react_default.createElement("div", null, "Share this with your team."), react_default.createElement(Button, { onClick: copyLink, size: "small", variant: "ghost" }, copyText)), isNotificationsEnabled ? react_default.createElement(Button, { size: "small", variant: "ghost", onClick: onToggleNotifications }, react_default.createElement(EyeCloseIcon, null), "Hide notifications") : react_default.createElement(Button, { size: "small", variant: "ghost", onClick: onToggleNotifications }, react_default.createElement(EyeIcon, null), "Show notifications"));
}, "WhatsNewFooter");
var Iframe = styled.iframe(
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100%",
    height: "calc(100% - 80px)",
    background: "white"
  },
  ({ isLoaded }) => ({ visibility: isLoaded ? "visible" : "hidden" })
);
var AlertIcon2 = styled((props) => react_default.createElement(AlertIcon, { ...props }))(({ theme }) => ({
  color: theme.textMutedColor,
  width: 32,
  height: 32,
  margin: "0 auto"
}));
var WhatsNewLoader = /* @__PURE__ */ __name(() => react_default.createElement(Centered, null, react_default.createElement(LoaderWrapper2, null, react_default.createElement(Loader, null)), react_default.createElement(Message2, null, "Loading...")), "WhatsNewLoader");
var MaxWaitTimeMessaging = /* @__PURE__ */ __name(() => react_default.createElement(Centered, null, react_default.createElement(AlertIcon2, null), react_default.createElement(Message2, null, "The page couldn't be loaded. Check your internet connection and try again.")), "MaxWaitTimeMessaging");
var PureWhatsNewScreen = /* @__PURE__ */ __name(({
  didHitMaxWaitTime,
  isLoaded,
  onLoad,
  url,
  onCopyLink,
  onToggleNotifications,
  isNotificationsEnabled
}) => react_default.createElement(Fragment, null, !isLoaded && !didHitMaxWaitTime && react_default.createElement(WhatsNewLoader, null), didHitMaxWaitTime ? react_default.createElement(MaxWaitTimeMessaging, null) : react_default.createElement(react_default.Fragment, null, react_default.createElement(Iframe, { isLoaded, onLoad, src: url, title: `What's new?` }), react_default.createElement(
  WhatsNewFooter,
  {
    isNotificationsEnabled,
    onToggleNotifications,
    onCopyLink
  }
))), "PureWhatsNewScreen");
var MAX_WAIT_TIME = 1e4;
var WhatsNewScreen = /* @__PURE__ */ __name(() => {
  const api = useStorybookApi();
  const state = useStorybookState();
  const { whatsNewData } = state;
  const [isLoaded, setLoaded] = useState(false);
  const [didHitMaxWaitTime, setDidHitMaxWaitTime] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => !isLoaded && setDidHitMaxWaitTime(true), MAX_WAIT_TIME);
    return () => clearTimeout(timer);
  }, [isLoaded]);
  if (whatsNewData?.status !== "SUCCESS") {
    return null;
  }
  const isNotificationsEnabled = !whatsNewData.disableWhatsNewNotifications;
  return react_default.createElement(
    PureWhatsNewScreen,
    {
      didHitMaxWaitTime,
      isLoaded,
      onLoad: () => {
        api.whatsNewHasBeenRead();
        setLoaded(true);
      },
      url: whatsNewData.url,
      isNotificationsEnabled,
      onCopyLink: () => {
        navigator.clipboard?.writeText(whatsNewData.blogUrl ?? whatsNewData.url);
      },
      onToggleNotifications: () => {
        if (isNotificationsEnabled) {
          if (scope.confirm("All update notifications will no longer be shown. Are you sure?")) {
            api.toggleWhatsNewNotifications();
          }
        } else {
          api.toggleWhatsNewNotifications();
        }
      }
    }
  );
}, "WhatsNewScreen");

// src/manager/settings/whats_new_page.tsx
var WhatsNewPage = /* @__PURE__ */ __name(() => {
  return react_default.createElement(WhatsNewScreen, null);
}, "WhatsNewPage");

// src/manager/settings/index.tsx
var { document: document9 } = scope;
var Header3 = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
  background: theme.barBg,
  paddingRight: 8
}));
var TabBarButton = react_default.memo(/* @__PURE__ */ __name(function TabBarButton2({
  changeTab,
  id,
  title
}) {
  return react_default.createElement(Location, null, ({ path }) => {
    const active = path.includes(`settings/${id}`);
    return react_default.createElement(
      TabButton,
      {
        id: `tabbutton-${id}`,
        className: ["tabbutton"].concat(active ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active,
        onClick: () => changeTab(id),
        role: "tab"
      },
      title
    );
  });
}, "TabBarButton"));
var Content3 = styled(ScrollArea)(({ theme }) => ({
  background: theme.background.content
}));
var Pages = /* @__PURE__ */ __name(({ changeTab, onClose, enableShortcuts = true, enableWhatsNew }) => {
  react_default.useEffect(() => {
    const handleEscape = /* @__PURE__ */ __name((event) => {
      if (!enableShortcuts || event.repeat) {
        return;
      }
      if (matchesModifiers(false, event) && matchesKeyCode("Escape", event)) {
        event.preventDefault();
        onClose();
      }
    }, "handleEscape");
    document9.addEventListener("keydown", handleEscape);
    return () => document9.removeEventListener("keydown", handleEscape);
  }, [enableShortcuts, onClose]);
  return react_default.createElement(Fragment, null, react_default.createElement(Header3, { className: "sb-bar" }, react_default.createElement(TabBar, { role: "tablist" }, react_default.createElement(TabBarButton, { id: "about", title: "About", changeTab }), enableWhatsNew && react_default.createElement(TabBarButton, { id: "whats-new", title: "What's new?", changeTab }), react_default.createElement(TabBarButton, { id: "shortcuts", title: "Keyboard shortcuts", changeTab })), react_default.createElement(
    IconButton,
    {
      onClick: (e2) => {
        e2.preventDefault();
        return onClose();
      },
      title: "Close settings page"
    },
    react_default.createElement(CloseIcon, null)
  )), react_default.createElement(Content3, { vertical: true, horizontal: false }, react_default.createElement(Route, { path: "about" }, react_default.createElement(AboutPage, { key: "about" })), react_default.createElement(Route, { path: "whats-new" }, react_default.createElement(WhatsNewPage, { key: "whats-new" })), react_default.createElement(Route, { path: "shortcuts" }, react_default.createElement(ShortcutsPage, { key: "shortcuts" }))));
}, "Pages");
var SettingsPages = /* @__PURE__ */ __name(() => {
  const api = useStorybookApi();
  const state = useStorybookState();
  const changeTab = /* @__PURE__ */ __name((tab) => api.changeSettingsTab(tab), "changeTab");
  return react_default.createElement(
    Pages,
    {
      enableWhatsNew: state.whatsNewData?.status === "SUCCESS",
      enableShortcuts: state.ui.enableShortcuts,
      changeTab,
      onClose: api.closeSettings
    }
  );
}, "SettingsPages");
var settingsPageAddon = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: types.experimental_PAGE,
  render: /* @__PURE__ */ __name(() => react_default.createElement(Route, { path: "/settings/", startsWith: true }, react_default.createElement(SettingsPages, null)), "render")
};

// src/manager/index.tsx
ThemeProvider.displayName = "ThemeProvider";
q.displayName = "HelmetProvider";
var Root3 = /* @__PURE__ */ __name(({ provider }) => react_default.createElement(q, { key: "helmet.Provider" }, react_default.createElement(LocationProvider, { key: "location.provider" }, react_default.createElement(Main, { provider }))), "Root");
var Main = /* @__PURE__ */ __name(({ provider }) => {
  const navigate = useNavigate();
  return react_default.createElement(Location, { key: "location.consumer" }, (locationData) => react_default.createElement(
    Provider,
    {
      key: "manager",
      provider,
      ...locationData,
      navigate,
      docsOptions: scope?.DOCS_OPTIONS || {}
    },
    (combo) => {
      const { state, api } = combo;
      const setManagerLayoutState = useCallback(
        (sizes) => {
          api.setSizes(sizes);
        },
        [api]
      );
      const pages = useMemo(
        () => [settingsPageAddon, ...Object.values(api.getElements(types.experimental_PAGE))],
        [Object.keys(api.getElements(types.experimental_PAGE)).join()]
      );
      return react_default.createElement(ThemeProvider, { key: "theme.provider", theme: ensure(state.theme) }, react_default.createElement(LayoutProvider, null, react_default.createElement(
        App,
        {
          key: "app",
          pages,
          managerLayoutState: {
            ...state.layout,
            viewMode: state.viewMode
          },
          hasTab: !!api.getQueryParam("tab"),
          setManagerLayoutState
        }
      )));
    }
  ));
}, "Main");
function renderStorybookUI(domNode, provider) {
  if (!(provider instanceof Provider2)) {
    throw new ProviderDoesNotExtendBaseProviderError();
  }
  const root = createRoot(domNode);
  root.render(react_default.createElement(Root3, { key: "root", provider }));
}
__name(renderStorybookUI, "renderStorybookUI");

// src/manager/runtime.tsx
var WS_DISCONNECTED_NOTIFICATION_ID = "CORE/WS_DISCONNECTED";
addons.register(
  TOOLBAR_ID,
  () => addons.add(TOOLBAR_ID, {
    title: TOOLBAR_ID,
    type: types.TOOL,
    match: /* @__PURE__ */ __name(({ tabId }) => !tabId, "match"),
    render: /* @__PURE__ */ __name(() => react_default.createElement(ToolbarManager, null), "render")
  })
);
var _ReactProvider = class _ReactProvider extends Provider2 {
  constructor() {
    super();
    this.wsDisconnected = false;
    const channel = createBrowserChannel({ page: "manager" });
    addons.setChannel(channel);
    channel.emit(CHANNEL_CREATED);
    this.addons = addons;
    this.channel = channel;
    scope.__STORYBOOK_ADDONS_CHANNEL__ = channel;
  }
  getElements(type) {
    return this.addons.getElements(type);
  }
  getConfig() {
    return this.addons.getConfig();
  }
  handleAPI(api) {
    this.addons.loadAddons(api);
    this.channel.on(CHANNEL_WS_DISCONNECT, (ev) => {
      const TIMEOUT_CODE = 3008;
      this.wsDisconnected = true;
      api.addNotification({
        id: WS_DISCONNECTED_NOTIFICATION_ID,
        content: {
          headline: ev.code === TIMEOUT_CODE ? "Server timed out" : "Connection lost",
          subHeadline: "Please restart your Storybook server and reload the page"
        },
        icon: react_default.createElement(FailedIcon, { color: color.negative }),
        link: void 0
      });
    });
  }
};
__name(_ReactProvider, "ReactProvider");
var ReactProvider = _ReactProvider;
var { document: document10 } = scope;
var rootEl = document10.getElementById("root");
setTimeout(() => {
  renderStorybookUI(rootEl, new ReactProvider());
}, 0);
