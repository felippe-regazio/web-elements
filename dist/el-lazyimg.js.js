!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=14)}([function(t,e,n){"use strict";function r(t){for(var e=-1,n=0;n<f.length;n++)if(f[n].identifier===t){e=n;break}return e}function o(t,e){for(var n={},o=[],i=0;i<t.length;i++){var a=t[i],u=e.base?a[0]+e.base:a[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var d=r(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1===d?f.push({identifier:l,updater:c(p,e),references:1}):(f[d].references++,f[d].updater(p)),o.push(l)}return o}function i(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=l(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}function a(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function u(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function c(t,e){var n,r,o;if(e.singleton){var c=h++;n=p||(p=i(e)),r=a.bind(null,n,c,!1),o=a.bind(null,n,c,!0)}else n=i(e),r=u.bind(null,n,e),o=function(){!function(t){null!==t.parentNode&&t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}var s=function(){var t;return function(){return void 0===t&&(t=!(!(window&&document&&document.all)||window.atob)),t}}(),l=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),f=[],d=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}(),p=null,h=0;t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=o(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var a=r(n[i]);f[a].references--}for(var u=o(t,e),c=0;c<n.length;c++){var s=r(n[c]);0===f[s].references&&(f[s].updater(),f.splice(s,1))}n=u}}}},function(t){"use strict";function e(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(r),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n,t);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i,a=0;a<this.length;a++)null!=(i=this[a][0])&&(o[i]=!0);for(var u,c=0;c<t.length;c++)u=[].concat(t[c]),(!r||!o[u[0]])&&(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))},n}},,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){function n(){return u(t,arguments,l(this).constructor)}if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function u(){return(u=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var f=n(15);n.n(f);customElements.define("el-lazyimg",function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n.call(this)}!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t);var n=function(t){return function(){var e,n=l(t);if(c()){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)}}(e);return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(e,[{key:"connectedCallback",value:function(){this.validate?this.watch():console.log("There is a lazy load <img> element without src or data-src")}},{key:"validate",value:function(){return this.src&&this.dataset.src||this.srcset&&this.dataset.srcset}},{key:"addErrorHandle",value:function(){var t=this;this.onerror=function(){t.unblur(),t.removeEvents()}}},{key:"watch",value:function(){this.addErrorHandle(),"IntersectionObserver"in window?this.intersectionStrategy():(this.onScrollStrategy(),this.loadIfVisible())}},{key:"onScrollStrategy",value:function(){var t=this;this.$onscroll=window.addEventListener("scroll",(function(){setTimeout((function(){t.loadIfVisible()}),1)})),this.$onresize=window.addEventListener("resize",(function(){setTimeout((function(){t.loadIfVisible()}),1)}))}},{key:"intersectionStrategy",value:function(){var t=this,e=new IntersectionObserver((function(n){n[0].isIntersecting&&(t.loadImage(),e.unobserve(t))}));e.observe(this)}},{key:"loadIfVisible",value:function(){this.hasAttribute("data-loaded")||this.hasAttribute("data-loading")||!this.isInViewport(this)||this.loadImage()}},{key:"loadImage",value:function(){this.onload=this.loaded(),this.src&&(this.src=this.dataset.src),this.srcset&&(this.srcset=this.dataset.srcset),this.setAttribute("data-loading",!0),this.removeEvents()}},{key:"loaded",value:function(){this.setAttribute("data-loaded",!0),this.removeAttribute("data-loading"),this.unblur(),this.emmit("el-lazyimg-loaded"),this.execInlineEvent("data-on:loaded")}},{key:"removeEvents",value:function(){this.$onscroll&&window.removeEventListener("scroll",this.$onscroll),this.$onresize&&window.removeEventListener("scroll",this.$onresize)}},{key:"unblur",value:function(){this.removeAttribute("data-blur")}},{key:"isInViewport",value:function(t){var e=t.getBoundingClientRect();return 0<=e.bottom&&0<=e.right&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}},{key:"emmit",value:function(t){var e=Object.assign(new CustomEvent(t,{detail:this}),{lazyimg:this});document.dispatchEvent(e)}},{key:"execInlineEvent",value:function(t){return this.getAttribute(t)?void window[this.getAttribute(t).split("(")[0].trim()](this):null}}]),e}(a(HTMLImageElement)),{extends:"img"})},function(t,e,n){var r=n(0),o=n(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);r(o,{insert:"head",singleton:!1});var i=o.locals?o.locals:{};t.exports=i},function(t,e,n){(e=n(1)(!1)).push([t.i,'[is="el-lazyimg"]{max-width:100%}[is="el-lazyimg"][data-blur]:not([data-loaded]){filter:blur(3px)}[is="el-lazyimg"][data-loading]{transition:400ms}\n',""]),t.exports=e}]).default}));