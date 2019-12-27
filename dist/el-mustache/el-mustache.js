"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(t,e,n){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&_setPrototypeOf(r,n.prototype),r}).apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}window.customElements.define("el-mustache",function(){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))}return _inherits(t,_wrapNativeSuper(HTMLDivElement)),_createClass(t,[{key:"attributeChangedCallback",value:function(){this.init()}},{key:"connectedCallback",value:function(){this.init()}},{key:"init",value:function(){"undefined"==typeof Mustache?this.error("This element depends of Mustache template engine"):this.isLazy()?this.lazyLoad():this.getDataAndMount()}},{key:"getDataAndMount",value:function(){var e=this;this.reset();var t=this.dataset.json||"{}";if(t.trim().startsWith("{")){var n=this.parseJsonAttr(t);this.render(n)}else this.httpRequest(t).then(function(t){e.render(t)})}},{key:"parseJsonAttr",value:function(e){try{e=JSON.parse(e)}catch(t){e={},this.error(t)}return e}},{key:"httpRequest",value:function(e){var n=this;return fetch(e,{method:"GET"}).then(function(t){return t.json()}).then(function(t){return n.debug()&&(console.log("El-Mustache Data from : ".concat(e)),console.log(t)),t}).catch(function(t){n.error(t)})}},{key:"render",value:function(t){t=t||{},this.$template||(this.$template=this.innerHTML),this.innerHTML=Mustache.to_html(this.$template,t),this.loaded()}},{key:"error",value:function(t){this.loaded(),this.debug()&&console.error(t)}},{key:"lazyScrollStrategy",value:function(){var e=this;this.$onscroll=window.addEventListener("scroll",function(t){setTimeout(function(){e.loadIfVisible()},1)}),this.$onresize=window.addEventListener("resize",function(t){setTimeout(function(){e.loadIfVisible()},1)})}},{key:"lazyIntersectionStrategy",value:function(){var n=this,o=new IntersectionObserver(function(t,e){t[0].isIntersecting&&(n.getDataAndMount(),o.unobserve(n))});o.observe(this)}},{key:"lazyRemoveEvents",value:function(){this.$onscroll&&window.removeEventListener("scroll",this.$onscroll),this.$onresize&&window.removeEventListener("scroll",this.$onresize)}},{key:"loadIfVisible",value:function(){!this.hasAttribute("loaded")&&this.isInViewport(this)&&(this.getDataAndMount(),this.lazyRemoveEvents())}},{key:"lazyLoad",value:function(){"IntersectionObserver"in window?this.lazyIntersectionStrategy():(this.lazyScrollStrategy(),this.loadIfVisible())}},{key:"isInViewport",value:function(t){var e=t.getBoundingClientRect();return 0<=e.bottom&&0<=e.right&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}},{key:"isLazy",value:function(){return this.hasAttribute("lazy")}},{key:"reset",value:function(){this.removeAttribute("loaded")}},{key:"loaded",value:function(){this.setAttribute("loaded",!0)}},{key:"reset",value:function(){this.removeAttribute("loaded")}},{key:"debug",value:function(){return this.hasAttribute("debug")}}],[{key:"observedAttributes",get:function(){return["data-json"]}}]),t}(),{extends:"div"});