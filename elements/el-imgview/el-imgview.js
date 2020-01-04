"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _wrapNativeSuper(e){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(t,e)})(e)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(e,t,n){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&_setPrototypeOf(o,n.prototype),o}).apply(null,arguments)}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("el-imgview",function(){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this))}return _inherits(e,_wrapNativeSuper(HTMLImageElement)),_createClass(e,[{key:"connectedCallback",value:function(){var e=this;this.addEventListener("click",function(){return e.openView()})}},{key:"disconnectedCallback",value:function(){window.removeEventListener("keyup",this.$onEscape)}},{key:"openView",value:function(){document.body.append(this.createView()),document.body.style.overflow="hidden",this.emmit("el-imgview-show"),this.execInlineEvent("el-show")}},{key:"createView",value:function(){var t=this,e=document.createElement("div");return e.classList.add("el-imgview-view"),e.addEventListener("click",function(e){t.removeView()}),e.setAttribute("data-view-loading-text",this.dataset.viewLoadingText||"..."),e.innerHTML='<div class="el-imgview-view__image" style="background-image:url('.concat(this.dataset.view,')"></div>'),e.append(this.createCloseBtn()),this.view=e,this.addCloseListeners(),this.view}},{key:"createCloseBtn",value:function(){var e=this,t=document.createElement("div");return t.classList.add("el-imgview-view__close"),t.addEventListener("click",function(){return e.view.remove()}),t}},{key:"removeView",value:function(){this.view.remove(),document.body.style.overflow="initial",this.emmit("el-imgview-close"),this.execInlineEvent("el-close")}},{key:"addCloseListeners",value:function(){var t=this;this.$onEscape=window.addEventListener("keyup",function(e){"Escape"===e.key&&t.removeView()})}},{key:"emmit",value:function(e){var t=Object.assign(new CustomEvent(e,{detail:this}),{imgview:this});document.dispatchEvent(t)}},{key:"execInlineEvent",value:function(e){if(!this.getAttribute(e))return null;window[this.getAttribute(e).split("(")[0].trim()](this)}}]),e}(),{extends:"img"});