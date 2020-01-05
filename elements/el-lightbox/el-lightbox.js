"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(t,e,n){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&_setPrototypeOf(i,n.prototype),i}).apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.define("el-lightbox",function(){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))}return _inherits(t,_wrapNativeSuper(HTMLDivElement)),_createClass(t,[{key:"connectedCallback",value:function(){this.createHandler(),this.addCloseListeners()}},{key:"disconnectedCallback",value:function(){window.removeEventListener("keyup",this.$onEscape)}},{key:"createHandler",value:function(){var e=this,t=this.id;t&&(window[t]=function(t){e[t.toLowerCase()]()})}},{key:"open",value:function(){this.setAttribute("data-visible",!0),this.focus(),document.body.style.overflow="hidden",this.emmit("el-lightbox-show"),this.execInlineEvent("data-on:show")}},{key:"close",value:function(){this.removeAttribute("data-visible"),document.body.style.overflow="initial",this.emmit("el-lightbox-close"),this.execInlineEvent("data-on:close")}},{key:"toggle",value:function(){this.hasAttribute("data-visible")?this.close():this.open(),this.emmit("el-lightbox-toggle"),this.execInlineEvent("data-on:toggle")}},{key:"addCloseListeners",value:function(){var e=this;this.addEventListener("click",function(t){t.target===e&&e.close()}),this.$onEscape=window.addEventListener("keyup",function(t){"Escape"===t.key&&e.close()})}},{key:"emmit",value:function(t){var e=Object.assign(new CustomEvent(t,{detail:this}),{lightbox:this});document.dispatchEvent(e)}},{key:"execInlineEvent",value:function(t){if(!this.getAttribute(t))return null;window[this.getAttribute(t).split("(")[0].trim()](this)}}]),t}(),{extends:"div"});