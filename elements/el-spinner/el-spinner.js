!function(t,e){"function"==typeof define&&define.amd?define(["dependency"],e):"object"==typeof module&&module.exports?module.exports=e(require("dependency")):t.returnExports=e(t.dependency)}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function c(t){var o="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,n)}function n(){return u(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&a(r,n.prototype),r}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.define("el-spinner",function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).call(this))}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(t,c(HTMLDivElement)),e=t,o=[{key:"observedAttributes",get:function(){return["data-size","data-color"]}}],(n=[{key:"connectedCallback",value:function(){this.sizefy(),this.create(),this.colorize()}},{key:"attributeChangedCallback",value:function(t){switch(t.toLowerCase()){case"data-color":this.colorize();break;case"data-size":this.sizefy()}}},{key:"sizefy",value:function(){var t=this.getAttribute("data-size");t&&(+t&&(t="".concat(t,"px")),this.style.width=t,this.style.height=t)}},{key:"create",value:function(){var t=document.createElement("div");t.classList.add("el-spinner-main"),this.append(t)}},{key:"colorize",value:function(){this.hasAttribute("data-color")&&(this.style.color=this.getAttribute("data-color"))}}])&&r(e.prototype,n),o&&r(e,o),t}(),{extends:"div"})});