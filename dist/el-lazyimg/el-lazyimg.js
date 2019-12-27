"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(t,e,n){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&_setPrototypeOf(r,n.prototype),r}).apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.define("el-lazyimg",function(){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))}return _inherits(t,_wrapNativeSuper(HTMLImageElement)),_createClass(t,[{key:"connectedCallback",value:function(){this.validate?this.watch():console.log("There is a lazy load <img> element without src or data-src")}},{key:"validate",value:function(){return this.src&&this.dataset.src||this.srcset&&this.dataset.srcset}},{key:"addErrorHandle",value:function(){var t=this;this.onerror=function(){t.unblur(),t.removeEvents()}}},{key:"watch",value:function(){this.addErrorHandle(),"IntersectionObserver"in window?this.intersectionStrategy():(this.onScrollStrategy(),this.loadIfVisible())}},{key:"onScrollStrategy",value:function(){var e=this;this.$onscroll=window.addEventListener("scroll",function(t){setTimeout(function(){e.loadIfVisible()},1)}),this.$onresize=window.addEventListener("resize",function(t){setTimeout(function(){e.loadIfVisible()},1)})}},{key:"intersectionStrategy",value:function(){var n=this,o=new IntersectionObserver(function(t,e){t[0].isIntersecting&&(n.loadImage(),o.unobserve(n))});o.observe(this)}},{key:"loadIfVisible",value:function(){this.hasAttribute("loaded")||this.hasAttribute("loading")||!this.isInViewport(this)||this.loadImage()}},{key:"loadImage",value:function(){this.onload=this.loaded(),this.src&&(this.src=this.dataset.src),this.srcset&&(this.srcset=this.dataset.srcset),this.setAttribute("loading",!0),this.removeEvents()}},{key:"loaded",value:function(){this.setAttribute("loaded",!0),this.unblur(),this.removeAttribute("loading")}},{key:"removeEvents",value:function(){this.$onscroll&&window.removeEventListener("scroll",this.$onscroll),this.$onresize&&window.removeEventListener("scroll",this.$onresize)}},{key:"unblur",value:function(){this.removeAttribute("blur")}},{key:"isInViewport",value:function(t){var e=t.getBoundingClientRect();return 0<=e.bottom&&0<=e.right&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}}]),t}(),{extends:"img"});