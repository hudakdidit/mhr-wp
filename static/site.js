!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=61)}([function(t,e){t.exports=function(t,e,n){return t instanceof HTMLCollection||t instanceof NodeList||t instanceof Array?Array.prototype.forEach.call(t,e,n):e.call(n,t)}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(0);t.exports=function(t,e,n,i){e="string"==typeof e?e.split(" "):e,e.forEach(function(e){o(t,function(t){t.addEventListener(e,n,i)})})}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(19);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(31),i=n(32);t.exports=n(4)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=function(t){if(null===t||"object"!=typeof t)return t;var e=t.constructor();for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(42),a=o(s),c=n(15),u=n(16),l=o(u);n(17),n(18);var h=function(){function t(){i(this,t),window.$=jQuery,this.touch=!1,this._initToggles(),this._initFastClick();var e=document.querySelectorAll('a[href="#"]');e.length&&Array.prototype.forEach.call(e,function(t){t.addEventListener("click",function(t){return t.preventDefault()})}),this.cards=document.querySelector(".mhr-cards-container"),this.hero=document.querySelector(".hero"),this.main=document.querySelector("main"),this.nav=document.querySelector(".primary-nav"),this.scrollIndicator=document.querySelector(".scroll-indicator"),this.navToggle=document.querySelector("[data-nav-toggle]"),this.hero&&(this._handleResize(),this._handleResize=this._handleResize.bind(this),window.onresize=this._handleResize,this._handleScroll(),this._handleScroll=this._handleScroll.bind(this),window.onscroll=this._handleScroll,this._scrollWindowToTop=this._scrollWindowToTop.bind(this)),this.touch="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;var n=this.touch?"touchstart":"click";this.toggleMenu=this._toggleMenu.bind(this),this.closeMenu=this._closeMenu.bind(this),this.openMenu=this._openMenu.bind(this),this.navToggle&&(this.navToggle.addEventListener(n,this.toggleMenu),this._closeMenu()),document.addEventListener("pjax:complete",this.closeMenu),document.addEventListener("pjax:send",this._destroy.bind(this)),this.tabs=new l.default(n),this.touch&&(document.body.classList.add("touch"),document.body.classList.remove("no-touch"))}return r(t,[{key:"_destroy",value:function(){var t=this.touch?"touchstart":"click";this.navToggle.removeEventListener(t,this.toggleMenu),this.navToggle.removeEventListener("pjax:complete",this.closeMenu)}},{key:"_toggleMenu",value:function(){console.log("toggleMenu called"),this.nav.classList.contains("active")?this._closeMenu():this._openMenu()}},{key:"_openMenu",value:function(){this.nav.classList.add("active"),this.navToggle.classList.remove("fa-bars"),this.navToggle.classList.add("fa-close")}},{key:"_closeMenu",value:function(){this.nav.classList.remove("active"),this.navToggle.classList.remove("fa-close"),this.navToggle.classList.add("fa-bars")}},{key:"_handleResize",value:function(){this.heroDimensions=this.hero.getBoundingClientRect()}},{key:"_handleScroll",value:function(){window.scrollY>(this.heroDimensions.height||window.height)?(this.scrollIndicator.classList.add("back-to-top"),this.nav.classList.add("pin-bottom"),this.scrollIndicator.addEventListener("click",this._scrollWindowToTop)):(this.scrollIndicator.classList.remove("back-to-top"),this.nav.classList.remove("pin-bottom"),this.scrollIndicator.removeEventListener("click",this._scrollWindowToTop))}},{key:"_scrollWindowToTop",value:function(){(0,c.scrollToY)(0,300,"easeInOutQuint")}},{key:"_initToggles",value:function(){var t=document.querySelectorAll(".toggle-group");t.length&&Array.prototype.forEach.call(t,function(e){e.querySelector(".toggle-group__header").addEventListener("click",function(){e.classList.contains("open")?e.classList.remove("open"):(Array.prototype.forEach.call(t,function(t){return t.classList.remove("open")}),e.classList.add("open"))})})}},{key:"_initFastClick",value:function(){"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){a.default.attach(document.body)},!1)}}]),t}();e.default=h},function(t,e){},function(t,e,n){var o=n(11),i=n(45),r=n(0),s=n(60),a=n(6),c=n(44),u=function(t){this.firstrun=!0,n(54).apply(this,[t]),this.log("Pjax options",this.options),this.maxUid=this.lastUid=s(),this.parseDOM(document),a(window,"popstate",function(t){if(t.state){var e=o(this.options);e.url=t.state.url,e.title=t.state.title,e.history=!1,t.state.uid<this.lastUid?e.backward=!0:e.forward=!0,this.lastUid=t.state.uid,this.loadUrl(t.state.url,e)}}.bind(this))};if(u.prototype={log:n(51),getElements:n(50),parseDOM:n(52),refresh:n(55),reload:n(56),attachLink:n(49),forEachSelectors:function(t,e,o){return n(46).bind(this)(this.options.selectors,t,e,o)},switchSelectors:function(t,e,o,i){return n(58).bind(this)(this.options.switches,this.options.switchesOptions,t,e,o,i)},latestChance:function(t){window.location=t},onSwitch:function(){c(window,"resize scroll")},loadContent:function(t,e){var n=document.implementation.createHTMLDocument(),o=/<html[^>]+>/gi,s=/\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi,a=t.match(o);if(a&&a.length&&(a=a[0].match(s),a.length&&(a.shift(),a.forEach(function(t){var e=t.trim().split("=");1===e.length?n.documentElement.setAttribute(e[0],!0):n.documentElement.setAttribute(e[0],e[1].slice(1,-1))}))),n.documentElement.innerHTML=t,this.log("load content",n.documentElement.attributes,n.documentElement.innerHTML.length),document.activeElement&&!document.activeElement.value)try{document.activeElement.blur()}catch(t){}this.switchSelectors(this.options.selectors,n,document,e);var c=Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();c&&document.activeElement!==c&&c.focus(),this.options.selectors.forEach(function(t){r(document.querySelectorAll(t),function(t){i(t)})})},doRequest:n(57),loadUrl:function(t,e){this.log("load href",t,e),c(document,"pjax:send",e),this.doRequest(t,function(n){if(n===!1)return void c(document,"pjax:complete pjax:error",e);document.activeElement.blur();try{this.loadContent(n,e)}catch(e){if(this.options.debug)throw e;return console&&console.error&&console.error("Pjax switch fail: ",e),void this.latestChance(t)}e.history&&(this.firstrun&&(this.lastUid=this.maxUid=s(),this.firstrun=!1,window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid},document.title)),this.lastUid=this.maxUid=s(),window.history.pushState({url:t,title:e.title,uid:this.maxUid},e.title,t)),this.forEachSelectors(function(t){this.parseDOM(t)},this),c(document,"pjax:complete pjax:success",e),e.analytics(),e.scrollTo!==!1&&(e.scrollTo.length>1?window.scrollTo(e.scrollTo[0],e.scrollTo[1]):window.scrollTo(0,e.scrollTo))}.bind(this))}},u.isSupported=n(47),u.isSupported())t.exports=u;else{var l=function(){};for(var h in u.prototype)u.prototype.hasOwnProperty(h)&&"function"==typeof u.prototype[h]&&(l[h]=l);t.exports=l}},function(t,e,n){"use strict";function o(t,e,n){function o(){r+=1/60;var e=r/s,c=a[n](e);e<1?(requestAnimFrame(o),window.scrollTo(0,i+(t-i)*c)):window.scrollTo(0,t)}var i=window.scrollY||document.documentElement.scrollTop,t=t||0,e=e||2e3,n=n||"easeOutSine",r=0,s=Math.max(.1,Math.min(Math.abs(i-t)/e,.8)),a={easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}};o()}Object.defineProperty(e,"__esModule",{value:!0}),e.scrollToY=o,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(e){o(this,t),this.activeTab=void 0,this.initTabs(e)}return i(t,[{key:"initTabs",value:function(){var t=this,e=$(".tabs-group");if(e.length){e.each(function(e,n){t.$tabHeaders=$(n).find(".tabs-header a"),t.$tabSections=$(n).find(".tabs-content"),t.$tabHeaders.each(function(e,n){$(n).on("click",function(n){n.preventDefault(),t.setActiveTab(e)})})});var n=window.location.search?window.location.search.split("=").pop():0;$(".tabs-header a.active").length||this.setActiveTab(n)}}},{key:"resetTabs",value:function(){this.$tabHeaders.each(function(t,e){return $(e).removeClass("active")}),this.$tabSections.each(function(t,e){return $(e).removeClass("active")})}},{key:"setActiveTab",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=window,n=e.history;t!==this.activeTab&&(this.resetTabs(),this.$tabHeaders.eq(t).addClass("active"),this.$tabSections.eq(t).addClass("active"),n.pushState(null,null,""+document.location.origin+document.location.pathname+"?activeTab="+t))}}]),t}();e.default=r},function(t,e){/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,o=arguments.length;for(n=0;n<o;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():function(t){"use strict";if("Element"in t){var e="classList",n="prototype",o=t.Element[n],i=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},s=Array[n].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},a=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],o=0,i=n.length;o<i;o++)this.push(n[o]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=u[n]=[],h=function(){return new u(this)};if(a[n]=Error[n],l.item=function(t){return this[t]||null},l.contains=function(t){return t+="",c(this,t)!==-1},l.add=function(){var t,e=arguments,n=0,o=e.length,i=!1;do{t=e[n]+"",c(this,t)===-1&&(this.push(t),i=!0)}while(++n<o);i&&this._updateClassName()},l.remove=function(){var t,e,n=arguments,o=0,i=n.length,r=!1;do{for(t=n[o]+"",e=c(this,t);e!==-1;)this.splice(e,1),r=!0,e=c(this,t)}while(++o<i);r&&this._updateClassName()},l.toggle=function(t,e){t+="";var n=this.contains(t),o=n?e!==!0&&"remove":e!==!1&&"add";return o&&this[o](t),e===!0||e===!1?e:!n},l.toString=function(){return this.join(" ")},i.defineProperty){var d={get:h,enumerable:!0,configurable:!0};try{i.defineProperty(o,e,d)}catch(t){t.number===-2146823252&&(d.enumerable=!1,i.defineProperty(o,e,d))}}else i[n].__defineGetter__&&o.__defineGetter__(e,h)}}(window.self))},function(t,e,n){n(41),t.exports=n(3).Array.forEach},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(2);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(8),i=n(29),r=n(38),s=n(37),a=n(23);t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,h=6==t,d=5==t||h,f=e||a;return function(e,a,p){for(var m,v,g=r(e),y=i(g),w=o(a,p,3),b=s(y.length),E=0,x=n?f(e,b):c?f(e,0):void 0;b>E;E++)if((d||E in y)&&(m=y[E],v=w(m,E,g),t))if(n)x[E]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:x.push(m)}else if(l)return!1;return h?-1:u||l?l:x}}},function(t,e,n){var o=n(2),i=n(30),r=n(40)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),o(e)&&null===(e=e[r])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var o=n(22);t.exports=function(t,e){return new(o(t))(e)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(2),i=n(1).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e,n){var o=n(1),i=n(3),r=n(9),s=n(33),a=n(8),c="prototype",u=function(t,e,n){var l,h,d,f,p=t&u.F,m=t&u.G,v=t&u.S,g=t&u.P,y=t&u.B,w=m?o:v?o[e]||(o[e]={}):(o[e]||{})[c],b=m?i:i[e]||(i[e]={}),E=b[c]||(b[c]={});m&&(n=e);for(l in n)h=!p&&w&&void 0!==w[l],d=(h?w:n)[l],f=y&&h?a(d,o):g&&"function"==typeof d?a(Function.call,d):d,w&&s(w,l,d,t&u.U),b[l]!=d&&r(b,l,f),g&&E[l]!=d&&(E[l]=d)};o.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(4)&&!n(5)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(7);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(20),i=n(28),r=n(39),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(1),i=n(9),r=n(27),s=n(10)("src"),a="toString",c=Function[a],u=(""+c).split(a);n(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(r(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(r(n,s)||i(n,s,t[e]?""+t[e]:u.join(String(e)))),t===o?t[e]=n:a?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[s]||c.call(this)})},function(t,e,n){var o=n(1),i="__core-js_shared__",r=o[i]||(o[i]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,n){var o=n(5);t.exports=function(t,e){return!!t&&o(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(36),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(24);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(2);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(34)("wks"),i=n(10),r=n(1).Symbol,s="function"==typeof r;(t.exports=function(t){return o[t]||(o[t]=s&&r[t]||(s?r:i)("Symbol."+t))}).store=o},function(t,e,n){"use strict";var o=n(26),i=n(21)(0),r=n(35)([].forEach,!0);o(o.P+o.F*!r,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){var o;!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function i(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var o;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!i.notNeeded(t)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,c=0,u=r.length;c<u;c++)a[r[c]]=n(a[r[c]],a);s&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,o){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,o):i.call(t,e,n,o)},t.addEventListener=function(e,n,o){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(t,e,n,o)}),"function"==typeof t.onclick&&(o=t.onclick,t.addEventListener("click",function(t){o(t)},!1),t.onclick=null)}}var r=navigator.userAgent.indexOf("Windows Phone")>=0,s=navigator.userAgent.indexOf("Android")>0&&!r,a=/iP(ad|hone|od)/.test(navigator.userAgent)&&!r,c=a&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=a&&/OS [6-7]_\d/.test(navigator.userAgent),l=navigator.userAgent.indexOf("BB10")>0;i.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(a&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},i.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!s;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},i.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},i.prototype.determineEventType=function(t){return s&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},i.prototype.focus=function(t){var e;a&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},i.prototype.updateScrollParent=function(t){var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},i.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},i.prototype.onTouchStart=function(t){var e,n,o;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],a){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!c){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},i.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},i.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},i.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},i.prototype.onTouchEnd=function(t){var e,n,o,i,r,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(r=t.changedTouches[0],l=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=l.tagName.toLowerCase())){if(e=this.findControl(l)){if(this.focus(l),s)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-n>100||a&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),a&&"select"===o||(this.targetElement=null,t.preventDefault()),!1);return!(!a||c||!(i=l.fastClickScrollParent)||i.fastClickLastScrollTop===i.scrollTop)||(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},i.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},i.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},i.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},i.prototype.destroy=function(){var t=this.layer;s&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=function(t){var e,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!s)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(l&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},i.attach=function(t,e){return new i(t,e)},void 0!==(o=function(){return i}.call(e,n,e,t))&&(t.exports=o)}()},function(t,e){t.exports=function(t){var e=t.text||t.textContent||t.innerHTML||"",n=document.querySelector("head")||document.documentElement,o=document.createElement("script");if(e.match("document.write"))return console&&console.log&&console.log("Script contains document.write. Can’t be executed correctly. Code skipped ",t),!1;o.type="text/javascript";try{o.appendChild(document.createTextNode(e))}catch(t){o.text=e}return n.insertBefore(o,n.firstChild),n.removeChild(o),!0}},function(t,e,n){var o=n(0);t.exports=function(t,e,n){e="string"==typeof e?e.split(" "):e,e.forEach(function(e){var i;i=document.createEvent("HTMLEvents"),i.initEvent(e,!0,!0),i.eventName=e,n&&Object.keys(n).forEach(function(t){i[t]=n[t]}),o(t,function(t){var e=!1;t.parentNode||t===document||t===window||(e=!0,document.body.appendChild(t)),t.dispatchEvent(i),e&&t.parentNode.removeChild(t)})})}},function(t,e,n){var o=n(0),i=n(43);t.exports=function(t){o(t.querySelectorAll("script"),function(t){t.type&&"text/javascript"!==t.type.toLowerCase()||(t.parentNode&&t.parentNode.removeChild(t),i(t))})}},function(t,e,n){var o=n(0);t.exports=function(t,e,n,i){i=i||document,t.forEach(function(t){o(i.querySelectorAll(t),e,n)})}},function(t,e){t.exports=function(){return window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)}},function(t,e){Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,o=function(){},i=function(){return n.apply(this instanceof o&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,i.prototype=new o,i})},function(t,e,n){n(48);var o=n(6),i=n(11),r="data-pjax-click-state",s=function(t,e){return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey?void t.setAttribute(r,"modifier"):t.protocol!==window.location.protocol||t.host!==window.location.host?void t.setAttribute(r,"external"):t.pathname===window.location.pathname&&t.hash.length>0?void t.setAttribute(r,"anchor-present"):t.hash&&t.href.replace(t.hash,"")===window.location.href.replace(location.hash,"")?void t.setAttribute(r,"anchor"):t.href===window.location.href.split("#")[0]+"#"?void t.setAttribute(r,"anchor-empty"):(e.preventDefault(),this.options.currentUrlFullReload&&t.href===window.location.href.split("#")[0]?(t.setAttribute(r,"reload"),void this.reload()):(t.setAttribute(r,"load"),void this.loadUrl(t.href,i(this.options))))},a=function(t){return t.defaultPrevented||t.returnValue===!1};t.exports=function(t){var e=this;o(t,"click",function(n){a(n)||s.call(e,t,n)}),o(t,"keyup",function(n){if(!a(n))return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey?void t.setAttribute("data-pjax-keyup-state","modifier"):void(13==n.keyCode&&s.call(e,t,n))}.bind(this))}},function(t,e){t.exports=function(t){return t.querySelectorAll(this.options.elements)}},function(t,e){t.exports=function(){this.options.debug&&console&&("function"==typeof console.log?console.log.apply(console,arguments):console.log&&console.log(arguments))}},function(t,e,n){var o=n(0),i=n(53);t.exports=function(t){o(this.getElements(t),i,this)}},function(t,e){t.exports=function(t){switch(t.tagName.toLowerCase()){case"a":t.hasAttribute("data-pjax-click-state")||this.attachLink(t);break;case"form":throw"Pjax doesnt support <form> yet.";default:throw"Pjax can only be applied on <a> or <form> submit"}}},function(t,e){t.exports=function(t){this.options=t,this.options.elements=this.options.elements||"a[href], form[action]",this.options.selectors=this.options.selectors||["title",".js-Pjax"],this.options.switches=this.options.switches||{},this.options.switchesOptions=this.options.switchesOptions||{},this.options.history=this.options.history||!0,this.options.analytics=this.options.analytics||function(){window._gaq&&_gaq.push(["_trackPageview"]),window.ga&&ga("send","pageview",{page:location.pathname,title:document.title})},this.options.scrollTo=void 0===this.options.scrollTo?0:this.options.scrollTo,this.options.cacheBust=void 0===this.options.cacheBust||this.options.cacheBust,this.options.debug=this.options.debug||!1,this.options.switches.head||(this.options.switches.head=this.switchElementsAlt),this.options.switches.body||(this.options.switches.body=this.switchElementsAlt),"function"!=typeof t.analytics&&(t.analytics=function(){})}},function(t,e){t.exports=function(t){this.parseDOM(t||document)}},function(t,e){t.exports=function(){window.location.reload()}},function(t,e){t.exports=function(t,e){var n=new XMLHttpRequest;return n.onreadystatechange=function(){4===n.readyState&&(200===n.status?e(n.responseText,n):e(null,n))},this.options.cacheBust&&(t+=(/[?&]/.test(t)?"&":"?")+(new Date).getTime()),n.open("GET",t,!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(null),n}},function(t,e,n){var o=n(0),i=n(59);t.exports=function(t,e,n,r,s,a){n.forEach(function(n){var c=r.querySelectorAll(n),u=s.querySelectorAll(n);if(this.log&&this.log("Pjax switch",n,c,u),c.length!==u.length)throw"DOM doesn’t look the same on new loaded page: ’"+n+"’ - new "+c.length+", old "+u.length;o(c,function(o,r){var s=u[r];this.log&&this.log("newEl",o,"oldEl",s),t[n]?t[n].bind(this)(s,o,a,e[n]):i.outerHTML.bind(this)(s,o,a)},this)},this)}},function(t,e,n){var o=n(6);t.exports={outerHTML:function(t,e){t.outerHTML=e.outerHTML,this.onSwitch()},innerHTML:function(t,e){t.innerHTML=e.innerHTML,t.className=e.className,this.onSwitch()},sideBySide:function(t,e,n,i){var r=Array.prototype.forEach,s=[],a=[],c=document.createDocumentFragment(),u="animationend webkitAnimationEnd MSAnimationEnd oanimationend",l=0,h=function(t){t.target==t.currentTarget&&--l<=0&&s&&(s.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)}),a.forEach(function(t){t.className=t.className.replace(t.getAttribute("data-pjax-classes"),""),t.removeAttribute("data-pjax-classes")}),a=null,s=null,this.onSwitch())}.bind(this);i=i||{},r.call(t.childNodes,function(t){s.push(t),t.classList&&!t.classList.contains("js-Pjax-remove")&&(t.hasAttribute("data-pjax-classes")&&(t.className=t.className.replace(t.getAttribute("data-pjax-classes"),""),t.removeAttribute("data-pjax-classes")),t.classList.add("js-Pjax-remove"),i.callbacks&&i.callbacks.removeElement&&i.callbacks.removeElement(t),i.classNames&&(t.className+=" "+i.classNames.remove+" "+(n.backward?i.classNames.backward:i.classNames.forward)),l++,o(t,u,h,!0))}),r.call(e.childNodes,function(t){if(t.classList){var e="";i.classNames&&(e=" js-Pjax-add "+i.classNames.add+" "+(n.backward?i.classNames.forward:i.classNames.backward)),i.callbacks&&i.callbacks.addElement&&i.callbacks.addElement(t),t.className+=e,t.setAttribute("data-pjax-classes",e),a.push(t),c.appendChild(t),l++,o(t,u,h,!0)}}),t.className=e.className,t.appendChild(c)}}},function(t,e){t.exports=function(){var t=0;return function(){var e="pjax"+(new Date).getTime()+"_"+t;return t++,e}}()},function(t,e,n){"use strict";n(13);var o=n(12).default,i=n(14),r=new o;document.addEventListener("pjax:send",function(){console.log("Event: pjax:send",arguments)}),document.addEventListener("pjax:complete",function(){console.log("Event: pjax:complete",arguments),r=void 0,r=new o}),document.addEventListener("pjax:error",function(){console.log("Event: pjax:error",arguments)}),document.addEventListener("pjax:success",function(){console.log("Event: pjax:success",arguments)}),document.addEventListener("DOMContentLoaded",function(){new i({elements:"a:not([data-open-window])",selectors:["title","#content"]});console.log("hey")})}]);