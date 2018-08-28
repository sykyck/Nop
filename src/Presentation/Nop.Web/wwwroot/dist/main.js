(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/Home/home.component.html":
/*!**************************************!*\
  !*** ./src/Home/home.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homePage\" *ngIf=\"categories\">\r\n  <div class=\"push_home_1\">\r\n    <div class=\"block_left\">\r\n      <img [src]=\"categories[0].image.src\" [ngClass]=\"{'activeLeft' : pushsActive1 ==true}\" *ngIf=\"getExtension(Filename)!='mp4'\"\r\n      />\r\n      <div class=\"text-hover-push-home-1 chains-text-push-home-1\" [ngClass]=\"{'chains-text-push-home-1-anim': pushsActive1 ==true}\">\r\n        <div [innerHTML]=\"categories[0].hover\"></div>\r\n      </div>\r\n    </div>\r\n    <div (mouseenter)=\"pushToRight()\" (mouseleave)=\"pushFromRight()\" (click)=\"goToChains()\" class=\"charms\">\r\n      <div>{{categories[0].name}}</div>\r\n    </div>\r\n    <div (mouseenter)=\"pushToLeft()\" (mouseleave)=\"pushFromLeft()\" class=\"chains\" (click)=\"goToCharms()\">\r\n      <div>{{categories[1].name}}</div>\r\n    </div>\r\n    <div (mouseenter)=\"pushToCenter()\" (mouseleave)=\"pushFromCenter()\" class=\"lookbook\" (click)=\"goToLookbook()\" [ngClass]=\"{'lookbook_center_to_right':pushsActive3==true, 'lookbook_center_to_left':pushsActive1==true, 'lookbook_center_to':pushsActive2==true}\">\r\n      <div>{{categories[2].name}}</div>\r\n    </div>\r\n    <div class=\"block_center \" [ngClass]=\"{'block_center_to_right':pushsActive3==true, 'block_center_to_left':pushsActive1==true, 'block_center_to':pushsActive2==true}\">\r\n      <img [src]=\"categories[1].image.src\" *ngIf=\"getExtension(Filename)!='mp4'\" />\r\n      <div class=\"text-hover-push-home-1 lookbook-text-push-home-1\" [ngClass]=\"{'lookbook-text-push-home-1-anim': pushsActive2 ==true}\">\r\n        <div [innerHTML]=\"categories[1].hover\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"block_right \" [ngClass]=\"{'block_right_hover':pushsActive3==true}\">\r\n      <img [src]=\"categories[2].image.src\" *ngIf=\"getExtension(Filename)!='mp4'\" />\r\n      <div class=\"text-hover-push-home-1 charms-text-push-home-1\" [ngClass]=\"{'charms-text-push-home-1-anim': pushsActive3 ==true}\">\r\n        <div [innerHTML]=\"categories[2].hover\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"!sliderVersionTabletMobile\" class=\"push-collection md-only\" [ngClass]=\"{'active' : pushCollectionActive==1}\"\r\n    (mouseenter)=\"pushCollectionActive=1\" (mouseleave)=\"pushCollectionActive=0\">\r\n\r\n    <div class=\"push-collection-1\" [hidden]=\"!(showAllHome == true || showElementHome==1)\" [ngClass]=\"{'activePush' : pushCollectionActive1==1}\"\r\n      (mouseenter)=\"pushCollectionActive1=1\" (mouseleave)=\"pushCollectionActive1=0\" (click)=\"goToPush1(collections[0].name, collections[0].id)\">\r\n      <div class=\"push-collection-media push-collection-media-left\">\r\n        <img [src]=\"collections[0].image.src\" *ngIf=\"getExtension(Filename)!='mp4'\" draggable=\"false\" />\r\n      </div>\r\n      <div class=\"push-collection-text-1\" (click)=\"goToPush()\">\r\n        <div class=\"titre\">{{collections[0].name}}</div>\r\n        <div class=\"description\">{{collections[0].description}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"push-collection-2\" [hidden]=\"!(showAllHome == true || showElementHome==2)\" [ngClass]=\"{'activePush' : pushCollectionActive2==1}\"\r\n      (mouseenter)=\"pushCollectionActive2=1\" (mouseleave)=\"pushCollectionActive2=0\" (click)=\"goToPush(collections[1].name, collections[1].id)\">\r\n      <div class=\"push-collection-media push-collection-media-center\">\r\n        <img [src]=\"collections[1].image.src\" *ngIf=\"getExtension(Filename)!='mp4'\" />\r\n        <div class=\"text-hover-push-collection-2-home-1 summer-text-push-collection-home-1\" [ngClass]=\"{'summer-text-push-collection-home-1-anim': pushCollectionActive2 == 1}\">\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"push-collection-text-2\">\r\n        <div class=\"titre\">{{collections[1].name}}</div>\r\n        <div class=\"description\">{{collections[1].description}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"push-collection-3\" [hidden]=\"!(showAllHome == true || showElementHome==0)\" [ngClass]=\"{'activePush' : pushCollectionActive3==1}\"\r\n      (mouseenter)=\"pushCollectionActive3=1\" (mouseleave)=\"pushCollectionActive3=0\" (click)=\"goToPush(collections[2].name, collections[2].id)\">\r\n      <div class=\"push-collection-media push-collection-media-right\">\r\n        <img [src]=\"collections[2].image.src\" *ngIf=\"getExtension(Filename)!='mp4'\" />\r\n      </div>\r\n      <div class=\"push-collection-text-3\">\r\n        <div class=\"titre\">{{collections[2].name}}</div>\r\n        <div class=\"description\">{{collections[2].description}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"switch-homepage-slide\" [hidden]=\"!showULHome\">\r\n      <ul>\r\n        <li [ngClass]=\"{'active':showElementHome==1}\" (click)=\"showElementHome=1\">1</li>\r\n        <li [ngClass]=\"{'active':showElementHome==2}\" (click)=\"showElementHome=2\">2</li>\r\n        <li [ngClass]=\"{'active':showElementHome==0}\" (click)=\"showElementHome=0\">3</li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div *ngIf=\"sliderVersionTabletMobile\" class=\"push-collection\" [ngClass]=\"{'active' : pushCollectionActive==1}\" (mouseenter)=\"pushCollectionActive=1\"\r\n    (mouseleave)=\"pushCollectionActive=0\">\r\n\r\n    <div class=\"push-collection-1\" [hidden]=\"!(showAllHome == true || showElementHome==1)\" [ngClass]=\"{'activePush' : showElementHome==1}\"\r\n      (swipeleft)=\"swipeLeftCarousel()\" (swiperight)=\"swipeRightCarousel()\" (click)=\"goToPush(collections[0].name, collections[0].id)\">\r\n      <div class=\"push-collection-media push-collection-media-left\">\r\n        <img [src]=\"collections[0].image.src\" draggable=\"false\" />\r\n      </div>\r\n      <div class=\"push-collection-text-1\">\r\n        <div class=\"titre\">{{collections[0].name}}</div>\r\n        <div class=\"description\">{{collections[0].description}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"push-collection-2\" [hidden]=\"!(showAllHome == true || showElementHome==2)\" ngClass=\"{'activePush' : showElementHome==2}\"\r\n      (swipeleft)=\"swipeLeftCarousel()\" (swiperight)=\"swipeRightCarousel()\" (click)=\"goToPush(collections[1].name, collections[1].id)\">\r\n      <div class=\"push-collection-media push-collection-media-center\">\r\n        <img [src]=\"collections[1].image.src\" draggable=\"false\" />\r\n        <div class=\"text-hover-push-collection-2-home-1 summer-text-push-collection-home-1\" ngClass=\"{'summer-text-push-collection-home-1-anim': pushCollectionActive2 == 1}\">\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"push-collection-text-2\">\r\n        <div class=\"titre\">{{collections[1].name}}</div>\r\n        <div class=\"description\">{{collections[1].description}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"push-collection-3\" [hidden]=\"!(showAllHome == true || showElementHome==0)\" [ngClass]=\"{'activePush' : showElementHome==0}\"\r\n      (swipeleft)=\"swipeLeftCarousel()\" (swiperight)=\"swipeRightCarousel()\" (click)=\"goToPush(collections[2].name, collections[2].id)\">\r\n      <div class=\"push-collection-media push-collection-media-right\">\r\n        <img [src]=\"collections[2].image.src\" draggable=\"false\" />\r\n      </div>\r\n      <div class=\"push-collection-text-3\">\r\n        <div class=\"titre\">{{collections[2].name}}</div>\r\n        <div class=\"description\">{{collections[2].description}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"switch-homepage-slide\" [hidden]=\"!showULHome\">\r\n      <ul>\r\n        <li [ngClass]=\"{'active':showElementHome==1}\" (click)=\"showElementHome=1\">1</li>\r\n        <li [ngClass]=\"{'active':showElementHome==2}\" (click)=\"showElementHome=2\">2</li>\r\n        <li [ngClass]=\"{'active':showElementHome==0}\" (click)=\"showElementHome=0\">3</li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/Home/home.component.scss":
/*!**************************************!*\
  !*** ./src/Home/home.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/*\r\n  * Bower externals libraries\r\n  */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\nhtml {\n  box-sizing: border-box; }\n*, *::after, *::before {\n  box-sizing: inherit; }\n/* *** Couleurs de texte *** */\n/*Violet Claire*/\n/*Violet Fonce*/\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n@import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n@import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n/*********************\r\nBASE (MOBILE) SIZE\r\nThis are the mobile styles. It's what people see on their phones. If\r\nyou set a great foundation, you won't need to add too many styles in\r\nthe other stylesheets. Remember, keep it light: Speed is Important.\r\n*********************/\n.push-collection .push-collection-1 .push-collection-media,\n.push-collection .push-collection-2 .push-collection-media,\n.push-collection .push-collection-3 .push-collection-media {\n  overflow: hidden;\n  height: 100vh;\n  width: 100%; }\n.push-collection .push-collection-1 .push-collection-media img,\n  .push-collection .push-collection-1 .push-collection-media video,\n  .push-collection .push-collection-2 .push-collection-media img,\n  .push-collection .push-collection-2 .push-collection-media video,\n  .push-collection .push-collection-3 .push-collection-media img,\n  .push-collection .push-collection-3 .push-collection-media video {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    max-width: none; }\n.push-collection .push-collection-text-1,\n.push-collection .push-collection-text-2,\n.push-collection .push-collection-text-3 {\n  /*♥*/\n  position: absolute;\n  width: 100vw;\n  margin-bottom: 0px;\n  text-align: center;\n  -webkit-transform: translateY(-7em);\n          transform: translateY(-7em); }\n.push-collection .push-collection-text-1 .titre,\n  .push-collection .push-collection-text-2 .titre,\n  .push-collection .push-collection-text-3 .titre {\n    text-transform: uppercase;\n    font-size: 14px;\n    font-family: Belvue;\n    color: #090954; }\n.push-collection .push-collection-text-1 .description,\n  .push-collection .push-collection-text-2 .description,\n  .push-collection .push-collection-text-3 .description {\n    font-size: 14px;\n    font-family: Apercu;\n    color: #090954; }\nbody > img {\n  position: absolute; }\n@media screen and (max-width: 1024px) {\n  .homePage .text-hover-push-home-1 {\n    color: #090954;\n    font-size: 7em;\n    font-family: Belvue; }\n  .homePage .chains-text-push-home-1,\n  .homePage .lookbook-text-push-home-1,\n  .homePage .charms-text-push-home-1 {\n    display: none; }\n  .homePage .chains,\n  .homePage .lookbook,\n  .homePage .charms {\n    position: absolute;\n    left: 50vw;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    z-index: 50;\n    text-align: center;\n    height: calc((100vh - 60px) / 3);\n    align-items: center; }\n  .homePage .chains {\n    top: 60px; }\n  .homePage .lookbook {\n    top: calc(\r (100vh - 60px) / 3 + 60px); }\n  .homePage .charms {\n    top: calc(\r (200vh - 120px) / 3 + 60px); }\n  .homePage .block_left,\n  .homePage .block_center,\n  .homePage .block_right {\n    width: 100vw;\n    height: calc((100vh - 60px) / 3);\n    -webkit-transform: translateY(60px);\n            transform: translateY(60px);\n    float: left;\n    overflow: hidden; }\n    .homePage .block_left > img,\n    .homePage .block_center > img,\n    .homePage .block_right > img {\n      max-width: none;\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; } }\n.push-collection.active {\n  /*☻*/\n  background-color: #090954; }\n.push-collection.active img,\n  .push-collection.active video {\n    opacity: 0.9; }\n.push-collection.active .push-collection-text-1,\n  .push-collection.active .push-collection-text-2,\n  .push-collection.active .push-collection-text-3 {\n    /*♥*/ }\n.push-collection.active .push-collection-text-1 .titre,\n    .push-collection.active .push-collection-text-2 .titre,\n    .push-collection.active .push-collection-text-3 .titre {\n      color: white; }\n.push-collection.active .push-collection-text-1 .description,\n    .push-collection.active .push-collection-text-2 .description,\n    .push-collection.active .push-collection-text-3 .description {\n      color: white; }\n.push-collection.active .switch-homepage-slide ul li {\n    border: 1px solid white; }\n.push-collection.active .switch-homepage-slide ul li.active {\n    background: white; }\n.MenuContainer.active {\n  z-index: 501 !important;\n  position: absolute; }\n.switch-homepage-slide {\n  position: absolute;\n  width: 100vw;\n  -webkit-transform: translateY(-4em);\n          transform: translateY(-4em); }\n.switch-homepage-slide ul {\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto; }\n.switch-homepage-slide ul li {\n      display: inline-block;\n      list-style: none;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      border: 1px solid #090954;\n      background: transparent;\n      margin-right: 10px;\n      font-size: 0px;\n      cursor: pointer; }\n.switch-homepage-slide ul li.active {\n      background: #090954; }\n.push_home_1 {\n  width: 100vw;\n  height: 100vh; }\n.charms,\n.chains,\n.lookbook {\n  display: flex;\n  margin: auto;\n  position: absolute; }\n.charms > div,\n  .chains > div,\n  .lookbook > div {\n    border-radius: 50%;\n    background: white;\n    color: #090954;\n    text-transform: uppercase;\n    font-family: BelweSansLight;\n    font-size: 14px;\n    vertical-align: middle;\n    text-align: center;\n    width: 100px;\n    height: 100px;\n    line-height: 100px; }\n.sliderMobileTablet .charms,\n.sliderMobileTablet .chains,\n.sliderMobileTablet .lookbook {\n  padding-top: 40px; }\n.sliderMobileTablet .charms:hover,\n.sliderMobileTablet .chains:hover,\n.sliderMobileTablet .lookbook:hover {\n  background-color: #090954;\n  color: white; }\n.sliderMobileTablet .chains {\n  top: 300px;\n  left: 35%; }\n.sliderMobileTablet .lookbook {\n  top: 738px;\n  width: 100vw; }\n.sliderMobileTablet .charms {\n  top: 1200px;\n  left: 35%; }\n.sliderMobileTablet ul li {\n  height: 450px;\n  width: 100%;\n  background-size: cover; }\n/*********************\r\nLARGER MOBILE DEVICES\r\nThis is for devices like the Galaxy Note or something that's\r\nlarger than an iPhone but smaller than a tablet. Let's call them\r\ntweeners.\r\n*********************/\n/*********************\r\nTABLET & SMALLER LAPTOPS\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n/*********************\r\nDESKTOP\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n@media only screen and (min-width: 770px) {\n  .push-collection {\n    display: flex;\n    justify-content: space-between;\n    width: 100vw;\n    color: #090954; }\n    .push-collection .push-collection-1,\n    .push-collection .push-collection-3 {\n      width: 34vw; }\n    .push-collection .push-collection-2 {\n      position: absolute;\n      width: 40vw;\n      left: 50vw;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      z-index: 1;\n      overflow: hidden;\n      -webkit-clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);\n              clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%); }\n      .push-collection .push-collection-2 .push-collection-text-2 {\n        text-align: center; }\n    .push-collection .push-collection-1,\n    .push-collection .push-collection-2,\n    .push-collection .push-collection-3 {\n      background: #f9f4ef;\n      letter-spacing: 0.03em; }\n      .push-collection .push-collection-1 .push-collection-media,\n      .push-collection .push-collection-2 .push-collection-media,\n      .push-collection .push-collection-3 .push-collection-media {\n        overflow-y: hidden;\n        height: 260px; }\n        .push-collection .push-collection-1 .push-collection-media img,\n        .push-collection .push-collection-1 .push-collection-media video,\n        .push-collection .push-collection-2 .push-collection-media img,\n        .push-collection .push-collection-2 .push-collection-media video,\n        .push-collection .push-collection-3 .push-collection-media img,\n        .push-collection .push-collection-3 .push-collection-media video {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          transition: all 0.5s ease-in-out;\n          margin: 0; }\n      .push-collection .push-collection-1 .push-collection-text-1,\n      .push-collection .push-collection-1 .push-collection-text-2,\n      .push-collection .push-collection-1 .push-collection-text-3,\n      .push-collection .push-collection-2 .push-collection-text-1,\n      .push-collection .push-collection-2 .push-collection-text-2,\n      .push-collection .push-collection-2 .push-collection-text-3,\n      .push-collection .push-collection-3 .push-collection-text-1,\n      .push-collection .push-collection-3 .push-collection-text-2,\n      .push-collection .push-collection-3 .push-collection-text-3 {\n        position: relative;\n        -webkit-transform: none;\n                transform: none;\n        padding-top: 28px;\n        padding-left: 40px;\n        height: 80px;\n        width: 100%;\n        text-align: left; }\n      .push-collection .push-collection-1.activePush,\n      .push-collection .push-collection-2.activePush,\n      .push-collection .push-collection-3.activePush {\n        background-color: #090954;\n        cursor: pointer; }\n        .push-collection .push-collection-1.activePush .push-collection-text-1,\n        .push-collection .push-collection-1.activePush .push-collection-text-2,\n        .push-collection .push-collection-1.activePush .push-collection-text-3,\n        .push-collection .push-collection-2.activePush .push-collection-text-1,\n        .push-collection .push-collection-2.activePush .push-collection-text-2,\n        .push-collection .push-collection-2.activePush .push-collection-text-3,\n        .push-collection .push-collection-3.activePush .push-collection-text-1,\n        .push-collection .push-collection-3.activePush .push-collection-text-2,\n        .push-collection .push-collection-3.activePush .push-collection-text-3 {\n          color: white; }\n        .push-collection .push-collection-1.activePush img,\n        .push-collection .push-collection-1.activePush video,\n        .push-collection .push-collection-2.activePush img,\n        .push-collection .push-collection-2.activePush video,\n        .push-collection .push-collection-3.activePush img,\n        .push-collection .push-collection-3.activePush video {\n          opacity: 0.9;\n          -webkit-transform: scale(1.2);\n                  transform: scale(1.2); }\n    .push-collection .push-collection-3 .push-collection-text-3 {\n      padding-left: 100px; }\n    .push-collection .push-collection-3.activePush {\n      transition: 1s cubic-bezier(0.4, 0, 0, 1); }\n    .push-collection.active {\n      /*☻*/\n      background-color: transparent; }\n      .push-collection.active img,\n      .push-collection.active video {\n        opacity: 1; }\n      .push-collection.active .push-collection-text-1,\n      .push-collection.active .push-collection-text-2,\n      .push-collection.active .push-collection-text-3 {\n        /*♥*/ }\n        .push-collection.active .push-collection-text-1 .titre,\n        .push-collection.active .push-collection-text-1 .description,\n        .push-collection.active .push-collection-text-2 .titre,\n        .push-collection.active .push-collection-text-2 .description,\n        .push-collection.active .push-collection-text-3 .titre,\n        .push-collection.active .push-collection-text-3 .description {\n          color: inherit; }\n      .push-collection.active .switch-homepage-slide ul li {\n        border: 1px solid #090954; }\n        .push-collection.active .switch-homepage-slide ul li.active {\n          background-color: #090954; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1025px) {\n  .push-collection {\n    height: 500px; }\n    .push-collection .push-collection-1 .push-collection-media,\n    .push-collection .push-collection-2 .push-collection-media,\n    .push-collection .push-collection-3 .push-collection-media {\n      height: 420px; }\n  .homePage {\n    /*Push collection*/ }\n    .homePage .text-hover-push-home-1 {\n      color: #090954;\n      font-size: 7em;\n      font-family: Belvue; }\n    .homePage .chains-text-push-home-1,\n    .homePage .lookbook-text-push-home-1,\n    .homePage .charms-text-push-home-1 {\n      position: absolute;\n      top: 75vh;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      text-align: center; }\n      .homePage .chains-text-push-home-1 > div,\n      .homePage .lookbook-text-push-home-1 > div,\n      .homePage .charms-text-push-home-1 > div {\n        transition: all 0.5s ease-in-out;\n        opacity: 0;\n        width: 100%;\n        -webkit-transform: translateX(-200%);\n                transform: translateX(-200%); }\n    .homePage .chains-text-push-home-1-anim div,\n    .homePage .lookbook-text-push-home-1-anim div,\n    .homePage .charms-text-push-home-1-anim div {\n      opacity: 1;\n      -webkit-transform: none;\n              transform: none; }\n    .homePage .summer-text-push-collection-home-1 {\n      opacity: 0;\n      font-size: 10em;\n      color: white;\n      font-family: Belvue;\n      transition: 0.5s ease-in-out;\n      position: absolute;\n      top: 50px;\n      left: 72%;\n      top: 110%; }\n      .homePage .summer-text-push-collection-home-1 div:nth-child(1) {\n        float: left;\n        -webkit-transform: translateX(-134%);\n                transform: translateX(-134%); }\n      .homePage .summer-text-push-collection-home-1 div:nth-child(2) {\n        clear: both;\n        float: right;\n        position: relative;\n        left: 134%;\n        top: -50px; }\n      .homePage .summer-text-push-collection-home-1 div {\n        transition: 0.3s ease-in-out; }\n    .homePage .summer-text-push-collection-home-1-anim {\n      opacity: 1; }\n      .homePage .summer-text-push-collection-home-1-anim div:nth-child(1) {\n        -webkit-transform: none;\n                transform: none; }\n      .homePage .summer-text-push-collection-home-1-anim div:nth-child(2) {\n        left: 10%;\n        right: 0; }\n    .homePage .push_home_1 .charms,\n    .homePage .push_home_1 .chains,\n    .homePage .push_home_1 .lookbook {\n      position: absolute;\n      top: 60px;\n      z-index: 9;\n      display: flex;\n      width: calc(100vw / 3);\n      height: calc(100vh - 60px); }\n      .homePage .push_home_1 .charms div,\n      .homePage .push_home_1 .chains div,\n      .homePage .push_home_1 .lookbook div {\n        width: 100px;\n        height: 100px;\n        line-height: 100px;\n        margin: auto;\n        border-radius: 50%;\n        background-color: white;\n        color: #090954;\n        text-transform: uppercase;\n        font-family: BelweSansLight;\n        font-size: 14px;\n        vertical-align: middle;\n        text-align: center;\n        letter-spacing: 0.03em; }\n      .homePage .push_home_1 .charms:hover,\n      .homePage .push_home_1 .chains:hover,\n      .homePage .push_home_1 .lookbook:hover {\n        cursor: pointer; }\n        .homePage .push_home_1 .charms:hover div,\n        .homePage .push_home_1 .chains:hover div,\n        .homePage .push_home_1 .lookbook:hover div {\n          background: #090954;\n          color: white; }\n    .homePage .push_home_1 .charms {\n      right: 0; }\n    .homePage .push_home_1 .chains {\n      left: 0; }\n    .homePage .push_home_1 .lookbook {\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      left: 50%; }\n      .homePage .push_home_1 .lookbook > div {\n        transition: -webkit-transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out; }\n    .homePage .push_home_1 .block_left,\n    .homePage .push_home_1 .block_center,\n    .homePage .push_home_1 .block_right {\n      position: absolute;\n      width: calc(100vw / 3);\n      height: 100vh; }\n      .homePage .push_home_1 .block_left > img,\n      .homePage .push_home_1 .block_left > video,\n      .homePage .push_home_1 .block_center > img,\n      .homePage .push_home_1 .block_center > video,\n      .homePage .push_home_1 .block_right > img,\n      .homePage .push_home_1 .block_right > video {\n        transition: 0.3s ease-in-out;\n        max-width: none;\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n    .homePage .push_home_1 .block_center {\n      left: 50vw;\n      z-index: 5;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n    .homePage .push_home_1 .block_right {\n      right: 0; }\n  @supports ((-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0)) or (clip-path: polygon(0 0, 0 0, 0 0, 0 0))) {\n    .activeLeft {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); }\n    .homePage .push_home_1 .block_left,\n    .homePage .push_home_1 .block_center,\n    .homePage .push_home_1 .block_right {\n      width: calc(100vw / 3 * 2);\n      overflow: hidden; }\n    .homePage .push_home_1 .charms,\n    .homePage .push_home_1 .chains,\n    .homePage .push_home_1 .lookbook {\n      position: absolute;\n      width: 300px;\n      height: 300px;\n      transition: 0.5s ease-in-out; }\n    .homePage .push_home_1 .charms {\n      top: 65vh;\n      right: 15%; }\n    .homePage .push_home_1 .chains {\n      top: 50vh; }\n    .homePage .push_home_1 .lookbook {\n      top: 23vh; }\n      .homePage .push_home_1 .lookbook.lookbook_center_to_left > div {\n        -webkit-transform: translate(7.5vw, -100%);\n                transform: translate(7.5vw, -100%); }\n      .homePage .push_home_1 .lookbook.lookbook_center_to_right > div {\n        -webkit-transform: translate(-7.5vw, -100%);\n                transform: translate(-7.5vw, -100%); }\n    .homePage .push_home_1 .chains-text-push-home-1 {\n      top: 110px;\n      left: calc(100vw / 4); }\n    .homePage .push_home_1 .lookbook-text-push-home-1 {\n      top: 10%;\n      font-size: 5em; }\n    .homePage .push_home_1 .charms-text-push-home-1 {\n      top: 50px;\n      left: 40vw; }\n    .homePage .push_home_1 .block_right {\n      -webkit-clip-path: polygon(100% 0, 40% 0, calc(100vw / 6) calc((75vh - 60px) * 0.75), 0 100%, 100% 100%);\n              clip-path: polygon(100% 0, 40% 0, calc(100vw / 6) calc((75vh - 60px) * 0.75), 0 100%, 100% 100%);\n      top: 60px;\n      height: calc(100vh - 60px);\n      transition: -webkit-clip-path 0.3s ease-in-out;\n      transition: clip-path 0.3s ease-in-out;\n      transition: clip-path 0.3s ease-in-out, -webkit-clip-path 0.3s ease-in-out; }\n    .homePage .push_home_1 .block_center {\n      -webkit-clip-path: polygon(78% 0, 22% 0, 50% 75%);\n              clip-path: polygon(78% 0, 22% 0, 50% 75%);\n      top: 60px;\n      width: auto;\n      height: calc(75vh - 60px);\n      transition: -webkit-clip-path 0.3s ease-in-out;\n      transition: clip-path 0.3s ease-in-out;\n      transition: clip-path 0.3s ease-in-out, -webkit-clip-path 0.3s ease-in-out;\n      text-align: center; }\n    .homePage .push_home_1 .block_center_to {\n      -webkit-clip-path: polygon(90% 0, 10% 0, 50% 75%);\n              clip-path: polygon(90% 0, 10% 0, 50% 75%);\n      transition: 0.3s ease-in-out; }\n      .homePage .push_home_1 .block_center_to img,\n      .homePage .push_home_1 .block_center_to video {\n        -webkit-transform: scale(1.2);\n                transform: scale(1.2); }\n    .homePage .push_home_1 .block_center_to_left {\n      -webkit-clip-path: polygon(100% 0, 56% 0, 50% 75%);\n              clip-path: polygon(100% 0, 56% 0, 50% 75%);\n      text-align: right;\n      transition: 0.3s ease-in-out; }\n      .homePage .push_home_1 .block_center_to_left img,\n      .homePage .push_home_1 .block_center_to_left video {\n        top: -156px; }\n    .homePage .push_home_1 .block_center_to_right {\n      -webkit-clip-path: polygon(37% 0, 0 0, 50% 75%);\n              clip-path: polygon(37% 0, 0 0, 50% 75%);\n      transition: 0.3s ease-in-out;\n      text-align: left; }\n      .homePage .push_home_1 .block_center_to_right img,\n      .homePage .push_home_1 .block_center_to_right video {\n        top: -156px; }\n    .homePage .push_home_1 .block_right_hover {\n      -webkit-clip-path: polygon(100% 0, 5% 0, calc(100vw / 6) calc((75vh - 60px) * 0.75), 0 100%, 100% 100%);\n              clip-path: polygon(100% 0, 5% 0, calc(100vw / 6) calc((75vh - 60px) * 0.75), 0 100%, 100% 100%); }\n      .homePage .push_home_1 .block_right_hover img,\n      .homePage .push_home_1 .block_right_hover video {\n        -webkit-transform: scale(1.2);\n                transform: scale(1.2); } }\n  .center_hp {\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    z-index: 1; }\n  .right_hp {\n    position: absolute;\n    top: 55px;\n    width: 100%;\n    height: 100%;\n    left: 20%; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1200px) {\n  @supports ((-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0)) or (clip-path: polygon(0 0, 0 0, 0 0, 0 0))) {\n    .homePage .push_home_1 .chains {\n      left: 10%; }\n    .homePage .push_home_1 .lookbook-text-push-home-1 {\n      font-size: 6em; } } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1500px) {\n  .homePage .push_home_1 .lookbook-text-push-home-1 {\n    font-size: 7em; } }\n/*********************\r\nRETINA (2x RESOLUTION DEVICES)\r\nThis applies to the retina iPhone (4s) and iPad (2,3) along with\r\nother displays with a 2x resolution. You can also create a media\r\nquery for retina AND a certain size if you want. Go Nuts.\r\n*********************/\n/*********************\r\nPRINT STYLESHEET\r\nFeel free to customize this. Remember to add things that won't make\r\nsense to print at the bottom. Things like nav, ads, and forms should\r\nbe set to display none.\r\n*********************/\n/* @media print { */\n/* } */\n"

/***/ }),

/***/ "./src/Home/home.component.ts":
/*!************************************!*\
  !*** ./src/Home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.service */ "./src/Home/home.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService, appRef, renderer, router, homeService, authService) {
        var _this = this;
        this.appService = appService;
        this.appRef = appRef;
        this.renderer = renderer;
        this.router = router;
        this.homeService = homeService;
        this.authService = authService;
        this.pushCollectionActive = 0;
        this.DISCOVER_TXT = 'discover';
        this.lookbook = 'lookbook';
        this.chains = 'chains';
        this.charms = 'charms';
        this.showAll = true;
        this.showAllHome = true;
        if (this.appService.isBrowser) {
            this.appService.screenSizeProperty();
            this.renderer.addClass(document.body, 'colorBackground');
        }
        this.authService.token.subscribe(function (data) {
            if (data !== 'NOTSET') {
                _this.homeService.getCat();
            }
        });
        this.homeService.data.subscribe(function (value) {
            if (value === 'change') {
                _this.categories = _this.homeService.categories.slice();
                _this.categories.forEach(function (cat, index) {
                    _this.categories[index].hover = cat
                        .replace(/&nbsp;/g, ' ')
                        .replace('.retouralaligne.', '<br>');
                });
            }
        });
        this.homeService.collectionResult.subscribe(function (value) {
            _this.collections = _this.homeService.collection.slice();
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appService.isBrowser) {
            console.log('hi this is browswer');
        }
        this.appService.changeInHome.subscribe(function (value) {
            if (value === 'change') {
                _this.hBlockHomeLeft = _this.appService.hBlockHomeLeft;
                _this.sliderVersionCompatible = _this.appService.sliderVersionCompatible;
                _this.sliderVersionCompatibleIE = _this.appService.sliderVersionCompatibleIE;
                _this.sliderVersionTabletMobile = _this.appService.sliderVersionTabletMobile;
                _this.center_svgW = _this.appService.center_svgW;
                _this.center_svgH = _this.appService.center_svgH;
                _this.center_maskImageW = _this.appService.center_maskImageW;
                _this.center_maskImageH = _this.appService.center_maskImageH;
                _this.center_ImageW = _this.appService.center_ImageW;
                _this.center_ImageH = _this.appService.center_ImageH;
                _this.center_ImageX = _this.appService.center_ImageX;
                _this.center_ImageY = _this.appService.center_ImageY;
                _this.right_svgW = _this.appService.right_svgW;
                _this.right_svgH = _this.appService.right_svgH;
                _this.right_maskImageW = _this.appService.right_maskImageW;
                _this.right_maskImageH = _this.appService.right_maskImageH;
                _this.right_ImageW = _this.appService.right_ImageW;
                _this.right_ImageH = _this.appService.right_ImageH;
                _this.right_ImageX = _this.appService.right_ImageX;
                _this.right_ImageY = _this.appService.right_ImageY;
                _this.maskHomeCenter = _this.appService.maskHomeCenter;
                _this.maskHomeRight = _this.appService.maskHomeRight;
                _this.sliderVersionMobile = _this.appService.sliderVersionMobile;
                _this.sliderVersionTablet = _this.appService.sliderVersionTablet;
            }
        });
        this.appService.changeInValues.subscribe(function (value) {
            if (value === 'change') {
                _this.showULFooter = _this.appService.showULFooter;
                _this.showAll = _this.appService.showAll;
                _this.showAllHome = _this.appService.showAllHome;
                _this.showULHome = _this.appService.showULHome;
                _this.showElementFooter = _this.appService.showElementFooter;
                _this.showElementHome = _this.appService.showElementHome;
            }
        });
    };
    HomeComponent.prototype.getExtension = function (path) {
        if (path !== undefined) {
            try {
                var basename = path.split(/[\\/]/).pop();
                var pos = basename.lastIndexOf('.');
                if (basename === '' || pos < 1) {
                    return '';
                }
                return basename.slice(pos + 1);
            }
            catch (e) {
                console.warn(path, e);
                return '';
            }
        }
        else {
            return '';
        }
    };
    HomeComponent.prototype.pushToRight = function () {
        this.pushsActive1 = false;
        this.pushsActive3 = true;
        this.pushsActive2 = false;
        this.categories[0].name = this.DISCOVER_TXT;
    };
    HomeComponent.prototype.pushToLeft = function () {
        this.pushsActive1 = true;
        this.pushsActive3 = false;
        this.pushsActive2 = false;
        this.categories[2].name = this.DISCOVER_TXT;
    };
    HomeComponent.prototype.pushToCenter = function () {
        this.pushsActive1 = false;
        this.pushsActive3 = false;
        this.pushsActive2 = true;
        this.categories[1].name = this.DISCOVER_TXT;
    };
    HomeComponent.prototype.pushFromRight = function () {
        this.pushsActive3 = false;
        this.categories[1].name = this.homeService.categories[1].name;
    };
    HomeComponent.prototype.pushFromLeft = function () {
        this.pushsActive1 = false;
        this.categories[0].name = this.homeService.categories[0].name;
    };
    HomeComponent.prototype.pushFromCenter = function () {
        this.pushsActive2 = false;
        this.categories[2].name = this.homeService.categories[2].name;
    };
    HomeComponent.prototype.swipeLeftCarousel = function () {
        if (this.showElementHome !== 0) {
            this.showElementHome -= 1;
        }
        else {
            this.showElementHome = 2;
        }
    };
    HomeComponent.prototype.swipeRightCarousel = function () {
        if (this.showElementHome !== 2) {
            this.showElementHome += 1;
        }
        else {
            this.showElementHome = 0;
        }
    };
    HomeComponent.prototype.goToChains = function () {
        this.router.navigate(['chains']);
    };
    HomeComponent.prototype.goToCharms = function () {
        this.router.navigate(['charms']);
    };
    HomeComponent.prototype.goToPush = function (name, id) {
        this.router.navigate(['charms', 'category', name, id]);
    };
    HomeComponent.prototype.goToLookbook = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/Home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/Home/home.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/Home/home.service.ts":
/*!**********************************!*\
  !*** ./src/Home/home.service.ts ***!
  \**********************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeService = /** @class */ (function () {
    function HomeService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.categories = [];
        this.collection = [];
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.collectionResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.token = token;
                _this.httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        accept: '*',
                        Authorization: "Bearer " + token
                    })
                };
            }
        });
    }
    HomeService.prototype.getCat = function () {
        var _this = this;
        this.http
            .get('/categories?parent_category_id=0', this.httpOptions)
            .subscribe(function (data) {
            data.categories.forEach(function (cat) {
                if (cat.name === 'Collections') {
                    var id = cat.id;
                    _this.http
                        .get('/categories?parent_category_id=' + id, _this.httpOptions)
                        .subscribe(function (result) {
                        _this.collection = result.categories.slice();
                        result.categories.forEach(function (element, index) {
                            var i = element.name.indexOf('$');
                            _this.collection[index].name = element.name.substring(0, i);
                            _this.collection[index].id = element.name[i + 1];
                        });
                        _this.collectionResult.next('change');
                    });
                }
                else {
                    _this.categories.push(cat);
                }
            });
            _this.data.next('change');
        });
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/Legals/content/content.component.html":
/*!***************************************************!*\
  !*** ./src/Legals/content/content.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-legal-mentions\">\r\n  <div class=\"inner-container\">\r\n    <div [innerHTML]='page' class='content'></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/Legals/content/content.component.scss":
/*!***************************************************!*\
  !*** ./src/Legals/content/content.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/Legals/content/content.component.ts":
/*!*************************************************!*\
  !*** ./src/Legals/content/content.component.ts ***!
  \*************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _legals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../legals.service */ "./src/Legals/legals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContentComponent = /** @class */ (function () {
    function ContentComponent(legals, sanitizer, router) {
        this.legals = legals;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var router = this.router.url;
        switch (router) {
            case '/legals/privacy':
                this.legals.fetchPrivacy();
                this.pageSubscription = this.legals.privacy;
                break;
            case '/legals/pricesAndPayment':
                this.legals.fetchPricesAndPayment();
                this.pageSubscription = this.legals.pricesAndPayment;
                break;
            case '/legals/shippingAndDelivery':
                this.legals.fetchShipping();
                this.pageSubscription = this.legals.shipping;
                break;
            case '/legals/service':
                this.legals.fetchService();
                this.pageSubscription = this.legals.service;
                break;
            case '/legals/terms':
                this.legals.fetchTerms();
                this.pageSubscription = this.legals.terms;
                break;
            default:
                break;
        }
        this.pageSubscription.subscribe(function (data) {
            var first = data.indexOf('class="page-body"');
            var second = data.indexOf('</div>', first);
            _this.page = _this.sanitizer.bypassSecurityTrustHtml(data.substring(first + 18, second));
        });
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        this.pageSubscription.unsubscribe();
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/Legals/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/Legals/content/content.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_legals_service__WEBPACK_IMPORTED_MODULE_3__["LegalService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/Legals/legals.component.html":
/*!******************************************!*\
  !*** ./src/Legals/legals.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"legal_layout\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/Legals/legals.component.scss":
/*!******************************************!*\
  !*** ./src/Legals/legals.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/* *** Custom neat grid for cart popup *** */\n/* $custom-grid--cat-popup-suggest-col: (\r\n\tcolumns: 12,\r\n  gutter: 10px,\r\n);\r\n\r\n$custom-grid--cat-popup-footer: (\r\n\tcolumns: 12,\r\n  gutter: 0px,\r\n); */\n/*\r\n   * Bower externals libraries\r\n   */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/* @import \"assetsbower_components/neat/app/assets/stylesheets/_neat.scss\"; */\n/* *** Couleurs de texte *** */\n/* *** Backgrounds *** */\n/* *** Border *** */\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n @import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n @import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n @import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n@font-face {\n  font-family: BelweSansLight;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n@font-face {\n  font-family: Apercu;\n  src: url(/assets/fonts/Apercu.otf); }\n@font-face {\n  font-family: Belvue;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n/* *** Font Families *** */\n/* *** Restriction de la largeur des images et des iframes (Ex : Vidéos YT) *** */\nimg {\n  max-width: 100%;\n  height: auto;\n  /* Important pour surpasser la taille des images ajoutée par ckeditor */ }\n/* *** Titles *** */\n/* *** Placeholder Color *** */\n/*********************\r\n BASE (MOBILE) SIZE\r\n This are the mobile styles. It's what people see on their phones. If\r\n you set a great foundation, you won't need to add too many styles in\r\n the other stylesheets. Remember, keep it light: Speed is Important.\r\n *********************/\n/* ************************* */\n/* ***** Global styles ***** */\n/* ************************* */\nbutton:focus,\ntextarea:focus,\ninput:focus {\n  outline: none; }\n.form-control:focus {\n  border: 0px;\n  box-shadow: none !important;\n  -webkit-box-shadow: none !important; }\na {\n  cursor: pointer; }\nbody {\n  background-color: #f9f4ef; }\nul,\nli {\n  list-style-image: none;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n.clear {\n  clear: both; }\n/* Titres */\n.page_title {\n  color: #090954;\n  font-family: \"BelweSansLight\", Helvetica, Arial, sans-serif;\n  font-size: 60px;\n  line-height: 60px;\n  margin: 25px 0;\n  word-wrap: break-word; }\n.content_title2 {\n  color: #090954;\n  text-transform: uppercase;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: 0 0 25px; }\n/* ************************* */\n/* ***** Page Content ***** */\n/* ************************* */\n.simple_page_layout .page_title {\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: normal;\n  margin: 45px 0; }\n.simple_page_layout .content_title2 {\n  font-size: 16px;\n  text-align: center;\n  margin: 0 0 35px;\n  clear: both; }\n.simple_page_layout #page > .content {\n  padding: 60px 0; }\n.simple_page_layout .container-simple-page {\n  max-width: 1280px;\n  margin: 0 auto;\n  color: #090954; }\n.simple_page_layout .container-simple-page .inner-container {\n    font-family: \"Apercu\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    max-width: 860px;\n    margin-left: auto;\n    margin-right: auto; }\n.simple_page_layout .container-simple-page .inner-container.mobile_grid_1col {\n      margin-bottom: 50px; }\n.simple_page_layout .container-simple-page p,\n  .simple_page_layout .container-simple-page ul {\n    text-align: justify;\n    margin-bottom: 25px; }\n.simple_page_layout .container-simple-page ul li:before {\n    content: '\\2022';\n    margin-right: 5px;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 20px; }\n.background-page {\n  background-image: url(\"/assets/img/push-collection/8.jpg\");\n  background-size: cover; }\n.background-page header,\n  .background-page .content {\n    background-color: #f9f4ef88; }\n.legal_layout {\n  background-image: url(\"/assets/img/footer-pages-bg.jpg\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100vh;\n  color: #090954; }\n.legal_layout h1,\n  .legal_layout h2 {\n    text-transform: uppercase;\n    font-size: 14px;\n    font-family: 'Belvue', Helvetica, Arial, sans-serif;\n    width: 100%;\n    text-align: center;\n    line-height: 68px; }\n.legal_layout .content {\n    position: relative;\n    top: 30px;\n    margin-bottom: 50px; }\n/*********************\r\n LARGER MOBILE DEVICES\r\n This is for devices like the Galaxy Note or something that's\r\n larger than an iPhone but smaller than a tablet. Let's call them\r\n tweeners.\r\n *********************/\n/*********************\r\n TABLET & SMALLER LAPTOPS\r\n This is the average viewing window. So Desktops, Laptops, and\r\n in general anyone not viewing on a mobile device. Here's where\r\n you can add resource intensive styles.\r\n *********************/\n/*********************\r\n DESKTOP\r\n This is the average viewing window. So Desktops, Laptops, and\r\n in general anyone not viewing on a mobile device. Here's where\r\n you can add resource intensive styles.\r\n *********************/\n@media only screen and (min-width: 770px) {\n  /* ************************* */\n  /* ***** Page Content ***** */\n  /* ************************* */\n  .simple_page_layout .container-simple-page .page_columns {\n    clear: both; }\n  .simple_page_layout .container-simple-page .inner-container.tablet_grid_2col {\n    width: calc(50% - 90px);\n    float: left;\n    margin-left: 60px; }\n    .simple_page_layout .container-simple-page .inner-container.tablet_grid_2col:nth-child(odd) {\n      clear: left; } }\n/*********************\r\n LARGE VIEWING SIZE\r\n This is for the larger monitors and possibly full screen viewers.\r\n *********************/\n@media only screen and (min-width: 1025px) {\n  /* ************************* */\n  /* ***** Page Content ***** */\n  /* ************************* */\n  .simple_page_layout .container-simple-page .inner-container.desktop_grid_2col {\n    width: calc(50% - 90px);\n    float: left;\n    margin-left: 60px; }\n    .simple_page_layout .container-simple-page .inner-container.desktop_grid_2col:nth-child(odd) {\n      clear: left; } }\n/*********************\r\n LARGE VIEWING SIZE\r\n This is for the larger monitors and possibly full screen viewers.\r\n *********************/\n/*********************\r\n LARGE VIEWING SIZE\r\n This is for the larger monitors and possibly full screen viewers.\r\n *********************/\n/*********************\r\n LARGE VIEWING SIZE\r\n This is for the larger monitors and possibly full screen viewers.\r\n *********************/\n/*********************\r\n RETINA (2x RESOLUTION DEVICES)\r\n This applies to the retina iPhone (4s) and iPad (2,3) along with\r\n other displays with a 2x resolution. You can also create a media\r\n query for retina AND a certain size if you want. Go Nuts.\r\n *********************/\n/*********************\r\n PRINT STYLESHEET\r\n Feel free to customize this. Remember to add things that won't make\r\n sense to print at the bottom. Things like nav, ads, and forms should\r\n be set to display none.\r\n *********************/\n/* @media print { */\n/* } */\n"

/***/ }),

/***/ "./src/Legals/legals.component.ts":
/*!****************************************!*\
  !*** ./src/Legals/legals.component.ts ***!
  \****************************************/
/*! exports provided: LegalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalsComponent", function() { return LegalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegalsComponent = /** @class */ (function () {
    function LegalsComponent(renderer) {
        this.renderer = renderer;
        this.renderer.addClass(document.body, 'picBackground');
    }
    LegalsComponent.prototype.ngOnInit = function () { };
    LegalsComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'picBackground');
    };
    LegalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-legal',
            template: __webpack_require__(/*! ./legals.component.html */ "./src/Legals/legals.component.html"),
            styles: [__webpack_require__(/*! ./legals.component.scss */ "./src/Legals/legals.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], LegalsComponent);
    return LegalsComponent;
}());



/***/ }),

/***/ "./src/Legals/legals.module.ts":
/*!*************************************!*\
  !*** ./src/Legals/legals.module.ts ***!
  \*************************************/
/*! exports provided: LegalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalsModule", function() { return LegalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _legalsRouting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legalsRouting.module */ "./src/Legals/legalsRouting.module.ts");
/* harmony import */ var _legals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legals.component */ "./src/Legals/legals.component.ts");
/* harmony import */ var _legals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legals.service */ "./src/Legals/legals.service.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/Legals/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LegalsModule = /** @class */ (function () {
    function LegalsModule() {
    }
    LegalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_legals_component__WEBPACK_IMPORTED_MODULE_4__["LegalsComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _legalsRouting_module__WEBPACK_IMPORTED_MODULE_3__["LegalsRoutingModule"]],
            providers: [_legals_service__WEBPACK_IMPORTED_MODULE_5__["LegalService"]]
        })
    ], LegalsModule);
    return LegalsModule;
}());



/***/ }),

/***/ "./src/Legals/legals.service.ts":
/*!**************************************!*\
  !*** ./src/Legals/legals.service.ts ***!
  \**************************************/
/*! exports provided: LegalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalService", function() { return LegalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        accept: '*'
    })
};
var LegalService = /** @class */ (function () {
    function LegalService(http) {
        this.http = http;
        this.privacy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.pricesAndPayment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.terms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.shipping = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.service = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.baseUrl = 'http://localhost:15536';
    }
    LegalService.prototype.getData = function (url) {
        return this.http.get(url, { responseType: 'text' });
    };
    LegalService.prototype.fetchPrivacy = function () {
        var _this = this;
        var url = this.baseUrl + '/privacy-notice';
        this.getData(url).subscribe(function (page) {
            _this.privacy.next(page);
        });
    };
    LegalService.prototype.fetchPricesAndPayment = function () {
        var _this = this;
        var url = this.baseUrl + '/price-and-payments';
        this.getData(url).subscribe(function (page) {
            _this.pricesAndPayment.next(page);
        });
    };
    LegalService.prototype.fetchService = function () {
        var _this = this;
        var url = this.baseUrl + '/service';
        this.getData(url).subscribe(function (page) {
            _this.service.next(page);
        });
    };
    LegalService.prototype.fetchTerms = function () {
        var _this = this;
        var url = this.baseUrl + '/terms';
        this.getData(url).subscribe(function (page) {
            _this.terms.next(page);
        });
    };
    LegalService.prototype.fetchShipping = function () {
        var _this = this;
        var url = this.baseUrl + '/shipping';
        this.getData(url).subscribe(function (page) {
            _this.shipping.next(page);
        });
    };
    LegalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LegalService);
    return LegalService;
}());



/***/ }),

/***/ "./src/Legals/legalsRouting.module.ts":
/*!********************************************!*\
  !*** ./src/Legals/legalsRouting.module.ts ***!
  \********************************************/
/*! exports provided: LegalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalsRoutingModule", function() { return LegalsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _legals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legals.component */ "./src/Legals/legals.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "./src/Legals/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'legals',
        component: _legals_component__WEBPACK_IMPORTED_MODULE_2__["LegalsComponent"],
        children: [
            { path: 'terms', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'service', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'privacy', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'shippingAndDelivery', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'pricesAndPayment', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: '', redirectTo: 'terms', pathMatch: 'full' }
        ]
    }
];
var LegalsRoutingModule = /** @class */ (function () {
    function LegalsRoutingModule() {
    }
    LegalsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LegalsRoutingModule);
    return LegalsRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-navbar></app-navbar>\r\n  <div class=\" section \">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(appService, authService) {
        this.appService = appService;
        this.authService = authService;
        this.authService.authInit();
        if (this.appService.isBrowser) {
            this.appService.resizeHomePage();
            this.appService.screenSizeProperty();
        }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Home/home.component */ "./src/Home/home.component.ts");
/* harmony import */ var _appRouting_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appRouting.module */ "./src/app/appRouting.module.ts");
/* harmony import */ var _Legals_legals_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Legals/legals.module */ "./src/Legals/legals.module.ts");
/* harmony import */ var _info_info_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../info/info.module */ "./src/info/info.module.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_charms_charms_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../products/charms/charms.module */ "./src/products/charms/charms.module.ts");
/* harmony import */ var _products_chains_chains_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../products/chains/chains.module */ "./src/products/chains/chains.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _Home_home_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Home/home.service */ "./src/Home/home.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cart/cart.service */ "./src/cart/cart.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../cart/cart.component */ "./src/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _Home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _appRouting_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _Legals_legals_module__WEBPACK_IMPORTED_MODULE_6__["LegalsModule"],
                _info_info_module__WEBPACK_IMPORTED_MODULE_7__["InfoModule"],
                _products_charms_charms_module__WEBPACK_IMPORTED_MODULE_10__["CharmsModule"],
                _products_chains_chains_module__WEBPACK_IMPORTED_MODULE_11__["ChainsModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _Home_home_service__WEBPACK_IMPORTED_MODULE_14__["HomeService"], _cart_cart_service__WEBPACK_IMPORTED_MODULE_15__["CartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppService = /** @class */ (function () {
    function AppService(platformId) {
        this.showULFooter = false;
        this.showAll = true;
        this.showAllHome = true;
        this.showULHome = false;
        this.changeInValues = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.changeInHome = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.sliderVersionCompatible = false;
        this.sliderVersionCompatibleIE = true;
        this.sliderVersionTabletMobile = false;
        this.center_svgW = '100%';
        this.center_svgH = '100%';
        this.center_maskImageW = '100%';
        this.center_maskImageH = '100%';
        this.center_ImageW = '350%';
        this.center_ImageH = '100%';
        this.center_ImageX = '-122%';
        this.center_ImageY = '0px';
        this.right_svgW = '100%';
        this.right_svgH = '100%';
        this.right_maskImageW = '100%';
        this.right_maskImageH = '100%';
        this.right_ImageW = '391%';
        this.right_ImageH = '100%';
        this.right_ImageX = '-144%';
        this.right_ImageY = '0';
        this.maskHomeCenter = '/app/img/masks/center_home.png';
        this.maskHomeRight = '/app/img/masks/right_home.png';
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(platformId);
        var a = new ua_parser_js__WEBPACK_IMPORTED_MODULE_2__["UAParser"]();
        this.name = a.getResult().browser.name;
        this.version = a.getResult().browser.version;
    }
    AppService.prototype.resizeHomePage = function () {
        if (this.isBrowser) {
            this.hBlockHomeLeft = window.innerHeight;
            if (this.name === 'IE' && window.innerWidth >= 1024) {
                this.sliderVersionCompatible = false;
                this.sliderVersionCompatibleIE = true;
                this.sliderVersionTabletMobile = false;
                this.center_svgW = '100%';
                this.center_svgH = '100%';
                this.center_maskImageW = '100%';
                this.center_maskImageH = '100%';
                this.center_ImageW = '350%';
                this.center_ImageH = '100%';
                this.center_ImageX = '-122%';
                this.center_ImageY = '0px';
                this.right_svgW = '100%';
                this.right_svgH = '100%';
                this.right_maskImageW = '100%';
                this.right_maskImageH = '100%';
                this.right_ImageW = '391%';
                this.right_ImageH = '100%';
                this.right_ImageX = '-144%';
                this.right_ImageY = '0';
                this.maskHomeCenter = '/app/img/masks/center_home.png';
                this.maskHomeRight = '/app/img/masks/right_home.png';
            }
            else {
                if (window.innerWidth <= 1024) {
                    this.sliderVersionCompatible = false;
                    this.sliderVersionTabletMobile = true;
                    if (window.innerWidth < 768) {
                        this.sliderVersionMobile = true;
                        this.sliderVersionTablet = false;
                        if (window.innerHeight <= 400) {
                            this.sliderVersionMobile = false;
                            this.sliderVersionTablet = true;
                        }
                    }
                    else {
                        this.sliderVersionMobile = false;
                        this.sliderVersionTablet = true;
                    }
                }
                else {
                    this.sliderVersionCompatible = true;
                    this.sliderVersionTabletMobile = false;
                    this.sliderVersionMobile = false;
                    this.sliderVersionTablet = false;
                }
                if (window.innerWidth <= 1024 && this.name === 'IE') {
                    this.sliderVersionCompatible = false;
                    this.sliderVersionTabletMobile = true;
                    this.sliderVersionCompatibleIE = false;
                }
            }
            this.changeInHome.next('change');
        }
    };
    AppService.prototype.resize = function () {
        if (this.isBrowser) {
            var self_1 = this;
            if (this.resizeCallback) {
                return;
            }
            this.resizeCallback = requestAnimationFrame(function () {
                var w = window.innerWidth;
                var h = window.innerHeight;
                self_1.resizeHomePage();
                self_1.resizeCallback = null;
                if (w > 1024) {
                    self_1.showULFooter = false;
                    self_1.showAll = true;
                    self_1.showAllHome = true;
                    self_1.showULHome = false;
                }
                else if (w > 768) {
                    self_1.showULFooter = true;
                    self_1.showAll = false;
                    self_1.showAllHome = true;
                    self_1.showULHome = false;
                    if (self_1.showElementFooter === undefined ||
                        self_1.showElementFooter == null) {
                        self_1.showElementFooter = 1;
                    }
                }
                else {
                    self_1.showAllHome = false;
                    if (self_1.showElementHome === undefined ||
                        self_1.showElementHome == null) {
                        self_1.showElementHome = 1;
                    }
                    self_1.showULHome = true;
                }
                self_1.changeInValues.next('change');
            });
        }
    };
    AppService.prototype.screenSizeProperty = function () {
        if (this.isBrowser) {
            var self_2 = this;
            setTimeout(function () {
                window.onresize = self_2.resize.bind(self_2);
                self_2.resize();
            }, 500);
        }
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/appRouting.module.ts":
/*!**************************************!*\
  !*** ./src/app/appRouting.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/home.component */ "./src/Home/home.component.ts");
/* harmony import */ var _shared_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/about/about.component */ "./src/shared/about/about.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.component */ "./src/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: _Home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _shared_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('NOTSET');
        this.token.next('NOTSET');
    }
    AuthService.prototype.authInit = function () {
        var _this = this;
        var client_id = '312b03ac-053e-4bd5-b6ce-1a15ea9606ad';
        var client_secret = '1e331c31-d1cf-46b4-99cb-1639cfc8c611';
        var scope = 'nop_api';
        var grant_type = 'client_credentials';
        var data = "client_id=" + client_id + "&client_secret=" + client_secret + "&scope=" + scope + "&grant_type=" + grant_type;
        this.http.post('/api/token', data, httpOptions).subscribe(function (result) {
            _this.token.next(result.access_token);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/cart/cart.component.html":
/*!**************************************!*\
  !*** ./src/cart/cart.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"popup_cart_list\" class='active purchaseTunnel' style=\"width: 100%\">\r\n  <div style=\"margin: 20px 0; padding: 25px 0;\">\r\n    <div class=\"popup_cart_continue\">\r\n      <a class=\"continue_btn rounded_btn\" title=\"Continue\" (click)=\"stepBagClick()\">Continue</a>\r\n    </div>\r\n    <h1 class=\"cart_heading\">Cart :</h1>\r\n    <div class=\"cart_list\" *ngIf=\"cartList.length===0\">\r\n      <div class=\"cart_product_item_c\" style=\"width: 100%;\">\r\n        <div class=\"cart_product_title\" style=\"margin: auto; width: 110px;\">\r\n          <span>Cart is Empty</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"cart_list\">\r\n      <ul class=\"products_list\" style=\"margin: 0 35px;\" *ngIf=\"cartList.length>0\">\r\n        <li class=\"product_item mobile_grid_6col tablet_grid_6col desk_grid_3col\" *ngFor=\"let item of cartList | slice:0:4\" (click)=\"toProduit(item.id,item.title)\"\r\n          style=\"cursor: pointer;\">\r\n          <div class=\"product_img\">\r\n            <img [src]=\"item.src\" [alt]=\"item.alt\" width=\"200\" height=\"200\" class=\"lazy\" />\r\n          </div>\r\n          <div class=\"product_title\">{{item.title}}</div>\r\n          <div class=\"product_price\">₹ {{item.price}}</div>\r\n          <div class=\"cart_product_qty\" style=\"display: inline-block;\">\r\n            <span class=\"lbl\">Quantity: &nbsp;</span>\r\n          </div>\r\n          <div class=\"selectNumber\" style=\"display: inline-block;margin-top: 20px; padding-left: 5px;\">\r\n            <div class=\"dropdownSelectedQuantity\">{{item.qty}}\r\n              <span (click)=\"quantityDropdown=!quantityDropdown\">^</span>\r\n            </div>\r\n            <div class=\"dropdownSelectedQuantityList\" [ngClass]=\"{'active':quantityDropdown}\">\r\n              <div (click)=\"changeQuantityPanier(item.id,1); quantityDropdown=false; item.qty = 1;\">1</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,2); quantityDropdown=false; item.qty = 2;\">2</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,3); quantityDropdown=false; item.qty = 3;\">3</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,4); quantityDropdown=false; item.qty = 4;\">4</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,5); quantityDropdown=false; item.qty = 5;\">5</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,6); quantityDropdown=false; item.qty = 6;\">6</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,7); quantityDropdown=false; item.qty = 7;\">7</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,8); quantityDropdown=false; item.qty = 8;\">8</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,9); quantityDropdown=false; item.qty = 9;\">9</div>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- <div class=\"cart_list_item\" *ngFor=\"let item of cartList\">\r\n        <div class=\"cart_product_item_l\">\r\n          <div class=\"cart_product_img\" *ngIf=\"item.src\">\r\n            <img [src]=\"item.src\" width=\"100\" height=\"100\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cart_product_item_c\">\r\n          <div class=\"cart_product_title\">\r\n            <span>{{item.title}}</span>\r\n          </div>\r\n          <div class=\"cart_product_qty\" style=\"display: inline-block;\">\r\n            <span class=\"lbl\">Quantity: &nbsp;</span>\r\n          </div>\r\n          <div class=\"selectNumber\" style=\"display: inline-block;margin-top: 20px; padding-left: 5px;\">\r\n            <div class=\"dropdownSelectedQuantity\" (click)=\"quantityDropdown=!quantityDropdown\">{{item.qty}}</div>\r\n            <div class=\"dropdownSelectedQuantityList\" ngClass=\"{'active':quantityDropdown}\">\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,1); quantityDropdown=false; item.qty = 1;\">1</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,2); quantityDropdown=false; item.qty = 2;\">2</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,3); quantityDropdown=false; item.qty = 3;\">3</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,4); quantityDropdown=false; item.qty = 4;\">4</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,5); quantityDropdown=false; item.qty = 5;\">5</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,6); quantityDropdown=false; item.qty = 6;\">6</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,7); quantityDropdown=false; item.qty = 7;\">7</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,8); quantityDropdown=false; item.qty = 8;\">8</div>\r\n              <div (click)=\"changeQuantityPanier(item.id,item.qty,9); quantityDropdown=false; item.qty = 9;\">9</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cart_product_item_r\">\r\n          <div class=\"cart_product_price\">₹{{item.price}}</div>\r\n          <div class=\"cart_product_del\" *ngIf=\"StepBag==0\" (click)=\"deleteProduct(item.id, item.qty)\" style=\"margin-top: 31px;\">\r\n            <a class=\"btn_del_to_cart\" title=\"\">\r\n              <span class=\"fa fa-times\"></span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n      </div>\r\n    </div> -->\r\n\r\n      <!-- <a id=\"more_btn\" href=\"#\" title=\"More\">+</a> -->\r\n\r\n      <div id=\"send_cart_by_mail\" action=\"\">\r\n        <div class=\"form_item form_item_email\">\r\n          <input class=\"form_email\" name=\"form_item_creation_mail\" type=\"email\" placeholder=\"Send my creation by mail\" />\r\n        </div>\r\n\r\n        <div class=\"form_actions\">\r\n          <button class=\"form_submit\" (click)=\"sendPanier()\" style=\"height: 100%;\">ok</button>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div *ngIf=\"mailIncorrectPanier\">Mail incorrect</div>\r\n        <div *ngIf=\"fieldRequiredPanier\">Field required</div>\r\n        <div *ngIf=\"EmailEnvoyePanier\">Email sent</div>\r\n      </div>\r\n\r\n      <div id=\"send_cart_by_mail\" action=\"\">\r\n        <div class=\"form_item form_item_email\" *ngIf=\"showCodePromo\">\r\n          <input class=\"form_email\" ng-model=\"promotionalCode\" type=\"text\" placeholder=\"Promotional code\" />\r\n        </div>\r\n\r\n        <div class=\"form_actions\" *ngIf=\"showCodePromo\">\r\n          <button class=\"form_submit\" (click)=\"promoCheck()\">ok</button>\r\n        </div>\r\n        <div class=\"form_messages\" *ngIf=\"showCodePromo\">\r\n          <p class=\"error_message\" *ngIf=\"requiredCodePromo\">{{fieldsRequiredMissing}}</p>\r\n          <p class=\"error_message\" *ngIf=\"invalidCodeMsg\">Invalid promotional code</p>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div *ngIf=\"mailIncorrectPanier\">Mail incorrect</div>\r\n        <div *ngIf=\"fieldRequiredPanier\">Field required</div>\r\n        <div *ngIf=\"EmailEnvoyePanier\">Email sent</div>\r\n      </div>\r\n\r\n\r\n      <div id=\"popup_cart_footer\">\r\n        <div id=\"popup_cart_footer_l\" class=\"popup_cart_footer_col\" *ngIf=\"DiscountTTC!='0' && DiscountTTC!=0 && DiscountTTC!='null' && DiscountTTC!=null\"\r\n          style=\"line-height: 20px;\">\r\n          <span class=\"total_lbl\">Discount</span>\r\n        </div>\r\n        <div id=\"popup_cart_footer_r\" class=\"popup_cart_footer_col\" *ngIf=\"DiscountTTC!='0' && DiscountTTC!=0 && DiscountTTC!='null' && DiscountTTC!=null\"\r\n          style=\"line-height: 20px;\">\r\n          <span class=\"total_price\">₹{{DiscountTTC}}</span>\r\n        </div>\r\n\r\n        <div id=\"popup_cart_footer_l\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\" style=\"line-height: 20px;\">\r\n          <span class=\"total_lbl\">Total</span>\r\n        </div>\r\n        <div id=\"popup_cart_footer_r\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\" style=\"line-height: 20px;\">\r\n          <span class=\"total_price\">₹{{TOTALNormal}}</span>\r\n        </div>\r\n        <div id=\"popup_cart_footer_l\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\" style=\"line-height: 20px;\">\r\n          <span class=\"total_lbl\">GST (3%)</span>\r\n        </div>\r\n        <div id=\"popup_cart_footer_r\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\" style=\"line-height: 20px;\">\r\n          <span class=\"total_price\">₹{{SGST}}</span>\r\n        </div>\r\n\r\n        <div id=\"popup_cart_footer_l\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\" style=\"line-height: 20px;\">\r\n          <span class=\"total_lbl\">Shipping/Processing fee</span>\r\n        </div>\r\n        <div id=\"popup_cart_footer_r\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\" style=\"line-height: 20px;\">\r\n          <span class=\"total_price\">₹{{priceDeliveryChoix}}</span>\r\n        </div>\r\n\r\n        <p *ngIf=\"cartListTotalPrice!='0.00'\" style=\"text-transform:none;clear:both;\">\r\n          <br> We offer Free Shipping on all orders above ₹1000 (before tax). The Shipping Fee on Order Value below ₹1000 (before\r\n          tax) is ₹150. On all COD orders, a Processing Fee of ₹50 will be charged.\r\n        </p>\r\n\r\n        <div id=\"popup_cart_footer_l\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\">\r\n          <span class=\"total_lbl\">Total (Tax included)</span>\r\n        </div>\r\n        <div id=\"popup_cart_footer_r\" class=\"popup_cart_footer_col\" *ngIf=\"cartListTotalPrice!='0.00'\">\r\n          <span class=\"total_price\" id=\"totalttcprice\">₹{{cartListTotalPrice}}</span>\r\n        </div>\r\n\r\n        <div class=\"popup_cart_continue\">\r\n          <a class=\"continue_btn rounded_btn\" title=\"Continue\" (click)=\"stepBagClick()\">Continue</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/cart/cart.component.scss":
/*!**************************************!*\
  !*** ./src/cart/cart.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/* *** Custom neat grid for cart popup *** */\n/*\r\n  * Bower externals libraries\r\n  */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/* @import \"../bower_components/neat/app/assets/stylesheets/_neat.scss\"; */\n/* *** Couleurs de texte *** */\n/* *** Backgrounds *** */\n/* *** Border *** */\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n@import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n@import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n@font-face {\n  font-family: BelweSansLight;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n@font-face {\n  font-family: Apercu;\n  src: url(/assets/fonts/Apercu.otf); }\n@font-face {\n  font-family: Belvue;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n/* *** Font Families *** */\n/* *** Restriction de la largeur des images et des iframes (Ex : Vidéos YT) *** */\nimg {\n  max-width: 100%;\n  height: auto;\n  /* Important pour surpasser la taille des images ajoutée par ckeditor */ }\n/* *** Titles *** */\n/* *** Placeholder Color *** */\n/*********************\r\nBASE (MOBILE) SIZE\r\nThis are the mobile styles. It's what people see on their phones. If\r\nyou set a great foundation, you won't need to add too many styles in\r\nthe other stylesheets. Remember, keep it light: Speed is Important.\r\n*********************/\n/* ***** Global styles ***** */\nbutton:focus,\ntextarea:focus,\ninput:focus {\n  outline: none; }\n.form-control:focus {\n  border: 0px;\n  box-shadow: none !important; }\na {\n  cursor: pointer;\n  color: inherit; }\nbody {\n  background-color: #f9f4ef; }\nul,\nli {\n  list-style-image: none;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n.clear {\n  clear: both; }\n.mobile_grid_6col {\n  /* @include span-columns(6); */\n  width: calc(50% - 30px);\n  float: left;\n  margin-left: 20px; }\n/* Titres */\n.page_title {\n  color: #090954;\n  font-family: \"BelweSansLight\", Helvetica, Arial, sans-serif;\n  font-size: 60px;\n  margin: 25px 0; }\n.content_title2 {\n  color: #090954;\n  text-transform: uppercase;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: 0 0 25px; }\n.breadcrumb_container {\n  color: #090954;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 13px; }\n.breadcrumb_container .breadcrumb {\n    padding: 0;\n    margin: 25px 0;\n    text-transform: uppercase;\n    background: none;\n    border-radius: 0; }\n.breadcrumb_container .breadcrumb .breadcrumb_item {\n      display: inline-block;\n      vertical-align: middle; }\n.breadcrumb_container .breadcrumb .breadcrumb_item:before {\n        content: '\\276F';\n        display: inline-block;\n        color: #090954;\n        font-size: 12px;\n        line-height: 0; }\n.breadcrumb_container .breadcrumb .breadcrumb_item:first-child:before {\n        content: normal; }\n.breadcrumb_container .breadcrumb .breadcrumb_item a {\n        color: #090954; }\n/* ***** Cart popup ***** */\n#popup_cart_list {\n  opacity: 1.5;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  visibility: visible;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 99999;\n  overflow-y: auto;\n  padding: 60px 0;\n  box-sizing: border-box;\n  color: #090954;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px; }\n#popup_cart_list #close_cart_list {\n    float: right;\n    margin-right: 35px; }\n#popup_cart_list .cart_list {\n    clear: both; }\n#popup_cart_list .cart_list .cart_list_item {\n      margin-bottom: 30px; }\n#popup_cart_list .cart_list .cart_list_item::after {\n        clear: both;\n        content: \"\";\n        display: block; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_l,\n      #popup_cart_list .cart_list .cart_list_item .cart_product_item_r {\n        width: calc(25% - 43.75px);\n        float: left;\n        margin-left: 35px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_c {\n        width: calc(50% - 52.5px);\n        float: left;\n        margin-left: 35px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_r {\n        text-align: right; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_img {\n        width: 120px;\n        height: 120px;\n        text-align: center; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_img img {\n          max-height: 100%;\n          width: auto; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_qty {\n        margin-top: 20px;\n        text-transform: none; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del {\n        margin-top: 20px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del .btn_del_to_cart {\n          color: #090954;\n          font-size: 0px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del .btn_del_to_cart span {\n            height: 8px;\n            width: 8px;\n            background-image: url(/assets/img/delete_item.svg); }\n#popup_cart_list #more_btn {\n    color: #090954;\n    display: block;\n    margin: 0 35px 20px;\n    text-align: center;\n    font-weight: bold; }\n#popup_cart_list #send_cart_by_mail {\n    margin: 0 35px;\n    margin-top: 0; }\n#popup_cart_list #send_cart_by_mail .form_item,\n    #popup_cart_list #send_cart_by_mail .form_actions {\n      float: left; }\n#popup_cart_list #send_cart_by_mail .form_item {\n      width: 88%; }\n#popup_cart_list #send_cart_by_mail .form_actions {\n      width: 12%; }\n#popup_cart_list #send_cart_by_mail .form_email::-webkit-input-placeholder {\n      /* WebKit, Blink, Edge */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email:-moz-placeholder {\n      /* Mozilla Firefox 4 to 18 */\n      color: #090954;\n      opacity: 1; }\n#popup_cart_list #send_cart_by_mail .form_email::-moz-placeholder {\n      /* Mozilla Firefox 19+ */\n      color: #090954;\n      opacity: 1; }\n#popup_cart_list #send_cart_by_mail .form_email:-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email:placeholder-shown {\n      /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email,\n    #popup_cart_list #send_cart_by_mail .form_submit {\n      display: block;\n      background: none;\n      border: none;\n      border-bottom: 5px solid #f9f4ef;\n      height: 40px;\n      line-height: 40px;\n      width: 100%; }\n#popup_cart_list #send_cart_by_mail .form_submit {\n      text-transform: uppercase;\n      text-align: center;\n      cursor: pointer; }\n#popup_cart_list #popup_cart_suggest {\n    background-color: #f9f4ef;\n    padding: 20px;\n    margin: 40px 25px 0;\n    color: #090954; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_intro {\n      margin-bottom: 35px;\n      text-transform: initial !important;\n      text-align: center; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content {\n      display: -ms-grid;\n      display: grid;\n      -ms-grid-columns: 2fr 1fr;\n          grid-template-columns: 2fr 1fr;\n      grid-gap: 0 30px; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_img {\n        grid-row: span 2; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_price {\n        text-align: right; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_qty {\n        -ms-grid-column: 2;\n        grid-column: 2;\n        text-transform: initial;\n        -ms-grid-row-align: end;\n            align-self: end; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_color select {\n        background: none;\n        border: none;\n        cursor: pointer; }\n#popup_cart_list #popup_cart_suggest .popup_cart_suggest_actions {\n      clear: both;\n      text-align: right;\n      text-transform: uppercase;\n      padding-top: 1.5em; }\n#popup_cart_list #popup_cart_suggest .popup_cart_suggest_actions a {\n        color: #090954;\n        text-decoration: none;\n        border-bottom: 5px solid white; }\n#popup_cart_list #popup_cart_footer {\n    padding: 25px 35px;\n    text-transform: uppercase; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col {\n      /* @include grid-column(4, $custom-grid--cat-popup-footer); */\n      width: calc(50%);\n      float: left;\n      margin-left: 0px;\n      line-height: 80px; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col > span {\n        display: inline-block;\n        line-height: normal;\n        vertical-align: middle; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_c {\n        text-align: center; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_r {\n        text-align: right;\n        width: 30%; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_l {\n        width: 70%; }\n#popup_cart_list .popup_cart_continue {\n    width: 100%;\n    clear: both; }\n#popup_cart_list .popup_cart_continue a {\n      text-decoration: none; }\n#popup_cart_list .popup_cart_continue a:hover {\n        text-decoration: none; }\n.addedToBag {\n  background-color: #ffffff;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  width: 100%;\n  text-align: center;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #090954;\n  padding: 80px 0;\n  opacity: 0;\n  z-index: 9999999;\n  visibility: hidden; }\n.addedToBag .icon {\n    margin-bottom: 25px; }\n.addedToBag.active {\n  opacity: 1;\n  visibility: visible; }\n/* ***** Product Core ***** */\narticle.product {\n  text-align: center;\n  color: #090954;\n  max-width: 270px;\n  margin: 0 auto;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 16px; }\narticle.product h1 {\n    line-height: 40px;\n    font-size: 40px;\n    margin: 40px auto 0; }\narticle.product .product_center {\n    padding: 0 0 25px; }\narticle.product .product_center .product_slider_container .product_slider {\n      width: 100%;\n      min-height: 200px; }\narticle.product .product_center .product_slider_container .product_slider img {\n        max-height: 100%;\n        width: auto; }\narticle.product .product_center .product_slider_pager_items {\n      text-align: center; }\narticle.product .product_center .product_slider_pager_items .product_slider_pager_item {\n        display: inline-block;\n        width: 10px;\n        height: 10px;\n        margin: 0 10px;\n        border-radius: 50%;\n        border: 1px solid #090954;\n        cursor: pointer; }\narticle.product .product_center .product_slider_pager_items .product_slider_pager_item.active {\n          background-color: #090954; }\narticle.product .product_right {\n    position: relative; }\narticle.product .product_right .product_description {\n      line-height: 20px;\n      font-family: \"Apercu\", Helvetica, Arial, sans-serif;\n      font-size: 14px; }\narticle.product .product_actions {\n    clear: both; }\narticle.product .product_actions .product_price {\n      margin: 15px 0;\n      letter-spacing: 0.03em; }\narticle.product .product_actions .product_cart_actions {\n      display: inline-block; }\narticle.product .product_actions .product_cart_actions::after {\n        content: '';\n        display: block;\n        border-bottom: 5px solid white; }\narticle.product .product_actions .product_cart_actions .add_cart_btn {\n        text-transform: uppercase;\n        color: #090954;\n        font-size: 16px;\n        letter-spacing: 0.03em;\n        text-decoration: none; }\n/* ***** Related Products & Products List & Search Results ***** */\n.related_products,\n.products_of_category,\n#search_results {\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin-top: 22.5px;\n  clear: both; }\n.related_products .filter_slide_toggle,\n  .products_of_category .filter_slide_toggle,\n  #search_results .filter_slide_toggle {\n    line-height: 45px; }\n.related_products .content_title2,\n  .products_of_category .content_title2,\n  #search_results .content_title2 {\n    text-align: center; }\n.related_products .related_product_item,\n  .related_products .product_item,\n  .products_of_category .related_product_item,\n  .products_of_category .product_item,\n  #search_results .related_product_item,\n  #search_results .product_item {\n    text-transform: uppercase;\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    color: #090954;\n    cursor: pointer; }\n.related_products .related_product_item:nth-child(odd),\n    .related_products .product_item:nth-child(odd),\n    .products_of_category .related_product_item:nth-child(odd),\n    .products_of_category .product_item:nth-child(odd),\n    #search_results .related_product_item:nth-child(odd),\n    #search_results .product_item:nth-child(odd) {\n      clear: left; }\n.related_products .related_product_item > div,\n    .related_products .product_item > div,\n    .products_of_category .related_product_item > div,\n    .products_of_category .product_item > div,\n    #search_results .related_product_item > div,\n    #search_results .product_item > div {\n      margin-left: auto;\n      margin-right: auto; }\n.related_products .related_product_item > div.related_product_img img, .related_products .related_product_item > div.product_img img,\n      .related_products .product_item > div.related_product_img img,\n      .related_products .product_item > div.product_img img,\n      .products_of_category .related_product_item > div.related_product_img img,\n      .products_of_category .related_product_item > div.product_img img,\n      .products_of_category .product_item > div.related_product_img img,\n      .products_of_category .product_item > div.product_img img,\n      #search_results .related_product_item > div.related_product_img img,\n      #search_results .related_product_item > div.product_img img,\n      #search_results .product_item > div.related_product_img img,\n      #search_results .product_item > div.product_img img {\n        width: 200px; }\n.related_products .related_product_item .related_product_price, .related_products .related_product_item.product_price,\n    .related_products .product_item .related_product_price,\n    .related_products .product_item.product_price,\n    .products_of_category .related_product_item .related_product_price,\n    .products_of_category .related_product_item.product_price,\n    .products_of_category .product_item .related_product_price,\n    .products_of_category .product_item.product_price,\n    #search_results .related_product_item .related_product_price,\n    #search_results .related_product_item.product_price,\n    #search_results .product_item .related_product_price,\n    #search_results .product_item.product_price {\n      font-size: 16px;\n      margin-top: 8px; }\n.products_of_category {\n  transition: opacity 300ms;\n  opacity: 1; }\n.products_of_category #products_filters {\n    text-align: center; }\n.products_of_category #products_filters > .filter_slide_toggle ~ .form_selected_ {\n      display: none; }\n.products_of_category #products_filters .form_selected_:last-child {\n      margin-bottom: 22.5px; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select {\n      box-shadow: none;\n      max-width: 200px;\n      background-position: right center;\n      background-image: url(\"/assets/img/elmts/select_arrow.svg\");\n      background-repeat: no-repeat;\n      cursor: pointer;\n      border: none;\n      border-radius: 0;\n      background-color: transparent;\n      font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n      font-size: 14px;\n      letter-spacing: 0.03em;\n      text-transform: uppercase;\n      color: #090954;\n      cursor: pointer;\n      width: 200px;\n      height: 45px;\n      display: block;\n      line-height: 30px;\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      line-height: 45px;\n      margin: 0 auto;\n      padding: 0px;\n      padding-right: 15px; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select > span {\n        transition: border-bottom 0.5s cubic-bezier(0.4, 0, 0, 1);\n        border-bottom: 5px white solid !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select.active > span {\n        border-bottom-color: transparent !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select.active .dropdown {\n        opacity: 1; }\n.products_of_category #products_filters .form_selected_ .dropdown {\n      position: absolute;\n      padding-top: 10px;\n      opacity: 0;\n      width: 160px;\n      transition: 0.5s cubic-bezier(0.4, 0, 0, 1);\n      background: white;\n      border-radius: 20px;\n      border-color: none;\n      max-height: none !important;\n      border: 0px !important;\n      box-shadow: none !important; }\n.products_of_category #products_filters .form_selected_ .dropdown li {\n        position: relative;\n        border-top: 0px !important;\n        border-left: 0px !important;\n        border-right: 0px !important;\n        margin: 0px !important;\n        line-height: 40px !important;\n        height: 45px; }\n.products_of_category #products_filters .form_selected_ .dropdown li:hover {\n        border-bottom: 5px solid #f9f4ef !important; }\n.products_of_category #products_filters .form_selected_ .dropdown li:hover a {\n          background: white !important; }\n.products_of_category #products_filters .form_selected_ .dropdown a {\n        color: #090954;\n        text-align: center;\n        font-family: Belvue;\n        font-size: 14px;\n        border: 0px !important;\n        box-shadow: none !important; }\n.products_of_category #products_filters .form_selected_ .selected {\n      line-height: 0px !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select:after {\n      content: none !important; }\n.products_of_category #products_filters .form_item_select {\n      border-bottom: 5px solid #ffffff;\n      /* padding-right: 15px; */\n      margin: 0 auto 25px;\n      max-width: 200px;\n      background-position: right center;\n      background-image: url(/assets/img/elmts/select_arrow.svg);\n      background-repeat: no-repeat;\n      overflow: hidden;\n      cursor: pointer; }\n.products_of_category #products_filters .form_item_select .form_select * {\n        background: #090954;\n        color: white;\n        padding: 5px; }\n.products_of_category #products_filters .form_item_select .form_select {\n        border: none;\n        background-color: transparent;\n        font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n        font-size: 14px;\n        text-transform: uppercase;\n        color: #090954;\n        cursor: pointer;\n        /* width: 100%; */\n        /* min-width: 100%; */\n        width: 200px;\n        height: 30px;\n        padding-right: 15px;\n        display: block;\n        line-height: 30px;\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none; }\n.products_of_category .product_item {\n    margin-top: 0;\n    margin-bottom: 80px; }\n.products_of_category .product_item .product_img {\n      margin-bottom: 40px; }\n.related_products_to_top {\n  top: 70%;\n  transition-duration: 1s; }\n/* ***** Sharing section ***** */\n.sharing_section {\n  text-align: center;\n  margin: 30px 0 0;\n  clear: both; }\n.sharing_section .sharing_links li {\n    display: inline-block;\n    margin: 0 5px;\n    font-size: 16px; }\n.sharing_section .sharing_links li a {\n      color: #bbd1ea;\n      display: inline-block;\n      width: 26px;\n      height: 26px;\n      line-height: 26px;\n      border: 1px solid #bbd1ea;\n      border-radius: 50%; }\n.sharing_section .sharing_links li a img {\n        fill: #bbd1ea; }\n.sharing_section .sharing_links li a:hover {\n        color: #090954;\n        border: 1px solid #090954; }\n.sharing_section .sharing_links li a:hover img {\n          fill: #090954; }\n/* ***** Carousel ***** */\nbody {\n  overflow-x: hidden; }\n.carousel-category {\n  height: 50vh;\n  background: white;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  cursor: -webkit-grab; }\n.carousel-category-indicators ul {\n  overflow: hidden;\n  width: 100%;\n  white-space: nowrap;\n  position: absolute;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(-150%);\n          transform: translateY(-150%); }\n.carousel-category-indicators ul > li {\n    transition: 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators .item-indicator {\n  max-width: 300px;\n  width: 44%;\n  display: inline-flex;\n  height: 40px;\n  margin: 0px;\n  padding: 0px;\n  justify-content: center;\n  align-items: center; }\n.carousel-category-indicators .item-indicator .round {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white; }\n.carousel-category-indicators .item-indicator .round::before {\n  content: '';\n  position: absolute;\n  top: auto;\n  left: auto;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  margin: -26px;\n  border: 4px solid white;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2);\n  transition: -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators .item-indicator:not(.active) .round:hover::before {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5); }\n.carousel-category-indicators .item-indicator .round.nohover::before {\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25); }\n.carousel-category-indicators .item-indicator .line {\n  height: 1px;\n  background: white;\n  position: absolute;\n  left: 0;\n  right: 0; }\n.carousel-category-indicators-active {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -150%);\n          transform: translate(-50%, -150%);\n  background-color: white;\n  max-width: 300px;\n  width: 44%;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 20px;\n  color: #090954;\n  font-size: 15px;\n  font-family: Belvue;\n  text-transform: uppercase;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden; }\n.carousel-category-indicators-active > div {\n    transition: -webkit-transform 1s cubic-bezier(0.4, 0, 0, 1);\n    transition: transform 1s cubic-bezier(0.4, 0, 0, 1);\n    transition: transform 1s cubic-bezier(0.4, 0, 0, 1), -webkit-transform 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators-active p {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    margin: 0; }\n.carousel-category-indicators-active:hover {\n  background-color: #f9f4ef; }\n.carousel-category-inner {\n  white-space: nowrap;\n  position: relative;\n  height: 100%;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-inner .item-carousel {\n  display: inline-block; }\n.carousel-category-inner .item-carousel,\n  .carousel-category-inner .item-carousel img {\n    height: 100%;\n    width: 100%; }\n.carousel-category-inner .item-carousel img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    vertical-align: top; }\n/* ********************************* */\n/* ********** Search Page ********** */\n/* ********************************* */\n.input-search {\n  padding: 10px 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  background-color: #f9f4ef; }\n.input-search .img-loop,\n  .input-search #form_item_site_search {\n    float: left; }\n.input-search .img-loop {\n    border-right: 5px solid #ffffff;\n    width: 20%;\n    line-height: 40px;\n    height: 40px;\n    text-align: center;\n    cursor: pointer; }\n.input-search #form_item_site_search {\n    width: 80%; }\n.input-search .form_text,\n  .input-search .form-control {\n    display: block;\n    background: none;\n    border: none;\n    height: 40px;\n    line-height: 40px;\n    width: 100%;\n    text-transform: uppercase;\n    margin: 0;\n    box-shadow: none;\n    border-radius: 0; }\n.input-search .form_text#site_search_field,\n    .input-search .form_text #site_search_field_value,\n    .input-search .form-control#site_search_field,\n    .input-search .form-control #site_search_field_value {\n      padding: 0 40px 0 15px; }\n.input-search .form_text::-webkit-input-placeholder,\n  .input-search .form-control::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    color: #090954; }\n.input-search .form_text:-moz-placeholder,\n  .input-search .form-control:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    color: #090954;\n    opacity: 1; }\n.input-search .form_text::-moz-placeholder,\n  .input-search .form-control::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    color: #090954;\n    opacity: 1; }\n.input-search .form_text:-ms-input-placeholder,\n  .input-search .form-control:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #090954; }\n.input-search .form_text:placeholder-shown,\n  .input-search .form-control:placeholder-shown {\n    /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n    color: #090954; }\n.input-search #close_search {\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    z-index: 9999; }\n.container-produit .stateFormShippingAddress {\n  position: absolute; }\n.container-produit .dropdownSelectedField {\n  width: 100%;\n  text-align: center; }\n.container-produit .input-text {\n  margin-left: auto;\n  margin-right: auto; }\n.container-produit .dropdownSelectedFieldList.active {\n  margin-left: 42px; }\n.container-produit .dropdownSelectedFieldList div {\n  min-width: 53px; }\n/*********************\r\nLARGER MOBILE DEVICES\r\nThis is for devices like the Galaxy Note or something that's\r\nlarger than an iPhone but smaller than a tablet. Let's call them\r\ntweeners.\r\n*********************/\n/*********************\r\nTABLET & SMALLER LAPTOPS\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n/*********************\r\nDESKTOP\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n@media only screen and (min-width: 770px) {\n  /* ***** Global styles ***** */\n  .tablet_grid_4col {\n    width: calc(33.33333333% - 26.66666667px);\n    float: left;\n    margin-left: 20px; }\n  .tablet_grid_6col {\n    width: calc(50% - 30px);\n    float: left;\n    margin-left: 20px; }\n  /* ***** Product Core ***** */\n  article.product {\n    max-width: none;\n    width: calc(100% - 30px);\n    position: relative;\n    /* Vertical alignment */ }\n    article.product h1 {\n      line-height: 60px;\n      font-size: 60px;\n      margin: 25px 0; }\n    article.product .product_left,\n    article.product .product_center,\n    article.product .product_right {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n    article.product .product_center {\n      padding-top: 35px; }\n      article.product .product_center .product_slider_container .product_slider {\n        min-height: 300px;\n        max-height: 320px; }\n    article.product .product_right {\n      margin-right: 25px;\n      padding-bottom: 0;\n      text-align: right; }\n    article.product .product_actions .product_price {\n      margin: 0 auto;\n      position: absolute;\n      bottom: 70px;\n      left: 0;\n      right: 0;\n      z-index: 500; }\n    article.product .product_actions .product_cart_actions {\n      position: absolute;\n      bottom: 30px;\n      text-align: center;\n      width: 100%; }\n    article.product .product_actions .product_cart_actions_to_top {\n      top: 0px;\n      transition-duration: 1s; }\n  .products_of_category #products_filters .form_selected_ {\n    display: inline-block;\n    margin-right: 5%; }\n    .products_of_category #products_filters .form_selected_ .wrap-dd-select {\n      margin: 0 10px;\n      width: auto; }\n  .products_of_category #products_filters .form_selected_:last-child {\n    margin-right: 0px; }\n  .product .product_left,\n  .related_products > .content_title2 {\n    margin-left: 25px;\n    text-align: left; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .products_of_category #products_filters .form_item_select {\n    display: inline-block;\n    margin: 0 25px;\n    max-width: none; }\n    .products_of_category #products_filters .form_item_select .form_select {\n      width: auto; }\n  .addedToBag {\n    left: auto;\n    right: 0;\n    width: 280px;\n    padding: 40px 0; }\n  /* ***** Carousel ***** */\n  .carousel-category {\n    height: 50vh;\n    background: white;\n    overflow-y: hidden;\n    overflow-x: hidden; }\n    .carousel-category .carousel-category-inner,\n    .carousel-category .item-carousel {\n      height: inherit; }\n  .carousel-category-indicators .item-indicator {\n    width: 20%; }\n    .carousel-category-indicators .item-indicator .line {\n      width: 100%; }\n  .carousel-category-indicators-active {\n    width: 20%; }\n  .carousel-category-inner .item-carousel img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    padding-top: 60px; }\n  /* ********************************* */\n  /* ********** Search Page ********** */\n  /* ********************************* */\n  .input-search .img-loop {\n    width: 10%; }\n  .input-search #form_item_site_search {\n    width: 90%; }\n  .container-produit .stateFormShippingAddress {\n    position: absolute; }\n  .container-produit .dropdownSelectedField {\n    width: 100%;\n    text-align: right; }\n  .container-produit .dropdownSelectedFieldList {\n    margin-left: -12px; }\n  .container-produit .dropdownSelectedFieldList.active {\n    margin-left: 91px; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1025px) {\n  /* ***** Global styles ***** */\n  .desk_grid_4col {\n    width: calc(33.33333333% - 26.66666667px);\n    float: left;\n    margin-left: 20px; }\n  .desk_grid_3col {\n    width: calc(25% - 25px);\n    float: left;\n    margin-left: 20px; }\n  /* ***** Cart popup ***** */\n  .addedToBag {\n    width: 400px;\n    padding: 80px 0; }\n  /* ***** Product Core ***** */\n  article.product .product_right,\n  article.product .product_center,\n  article.product .product_left {\n    transition: 1s; }\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 42%; }\n    article.product .product_center .product_slider_item {\n      max-width: 350px;\n      margin-left: auto;\n      margin-right: auto; }\n  article.product .product_right {\n    margin-left: 55%;\n    position: relative;\n    top: initial;\n    right: -28%;\n    -webkit-transform: initial;\n            transform: initial;\n    top: 28%; }\n  article.product .product_left {\n    position: relative;\n    top: initial;\n    -webkit-transform: initial;\n            transform: initial; }\n    article.product .product_left .product_title {\n      position: relative;\n      top: 30%;\n      -webkit-transform: initial;\n              transform: initial;\n      transition: 1s; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 28%;\n      -webkit-transform: initial;\n              transform: initial;\n      transition: 1s; }\n  article.product .product_right {\n    margin-left: initial; }\n    article.product .product_right .product_price {\n      /* bottom: auto;\r\n\t\t\tposition: static; */\n      text-align: left;\n      display: inline-block;\n      width: 23%; }\n    article.product .product_right .product_description {\n      text-align: right;\n      margin: 25px 0; }\n    article.product .product_right .product_cart_actions {\n      display: inline-block; }\n      article.product .product_right .product_cart_actions::after {\n        content: '';\n        display: block;\n        border-bottom: 5px solid white;\n        -webkit-transform: scaleX(0);\n                transform: scaleX(0);\n        -webkit-transform-origin: left;\n                transform-origin: left;\n        transition: -webkit-transform 0.5s;\n        transition: transform 0.5s;\n        transition: transform 0.5s, -webkit-transform 0.5s; }\n      article.product .product_right .product_cart_actions:hover::after {\n        -webkit-transform: none;\n                transform: none; }\n      article.product .product_right .product_cart_actions .add_cart_btn {\n        text-transform: uppercase;\n        color: #090954;\n        text-decoration: none; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .products_of_category #products_filters .form_item,\n  #search_results #products_filters .form_item {\n    margin: 0 50px; }\n  .products_of_category .product_item:nth-child(odd),\n  #search_results .product_item:nth-child(odd) {\n    clear: none; }\n  .products_of_category .product_item:nth-child(4n-7),\n  #search_results .product_item:nth-child(4n-7) {\n    clear: left; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    margin-bottom: 40px; }\n  /* ***** Carousel ***** */\n  body {\n    overflow-x: hidden; }\n  .related_products {\n    position: relative;\n    transition: 1s; }\n  .related_products_list li:nth-child(3) {\n    margin-left: calc(100% / 3 - 6.66667px);\n    clear: initial !important; }\n  .related_products_list li:nth-child(4) {\n    clear: initial !important; }\n  .related_products .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  /* ********************************* */\n  /* ********** Search Page ********** */\n  /* ********************************* */\n  .input-search .img-loop {\n    width: 8%; }\n  .input-search #form_item_site_search {\n    width: 92%; }\n  /*Select*/\n  .products_of_category #products_filters .form_selected_ .wrap-dd-select {\n    min-width: none; }\n  .wrap-dd-select .dropdown {\n    -webkit-transform: translate(-2rem, 0.5rem);\n            transform: translate(-2rem, 0.5rem); }\n  .products_of_category #products_filters .form_selected_ .dropdown li {\n    line-height: 14px; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1200px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 32%; }\n  article.product .product_right {\n    margin-left: 36%;\n    position: relative;\n    top: 243px;\n    right: 10%; }\n  article.product .product_left {\n    position: relative;\n    top: 207px; }\n    article.product .product_left .product_title {\n      z-index: 99;\n      position: fixed;\n      width: 415px;\n      top: 237px; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 19%; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .related_products {\n    position: absolute;\n    top: 68%; }\n  .related_products_list .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  .related_products_to_top .related_products {\n    top: 44%; }\n  .related_products_to_top .product_left .product_title {\n    top: -200px !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 88px !important; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1200px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 32%; }\n  article.product .product_right {\n    margin-left: 36%;\n    position: relative;\n    top: 243px;\n    right: 10%; }\n  article.product .product_left {\n    position: relative;\n    top: 207px; }\n    article.product .product_left .product_title {\n      z-index: 99;\n      position: fixed;\n      width: 415px;\n      top: 237px; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 19%; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .related_products {\n    position: absolute;\n    top: 68%; }\n  .related_products_list .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  .related_products_to_top .related_products {\n    top: 44%; }\n  .related_products_to_top .product_left .product_title {\n    top: -200px !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 88px !important; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1400px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    top: 235px; }\n  article.product .product_right {\n    position: fixed;\n    top: initial;\n    top: 20%;\n    right: 17%; }\n  article.product .product_left {\n    position: fixed;\n    top: initial; }\n    article.product .product_left .product_title {\n      top: 23%; }\n    article.product .product_left .breadcrumb {\n      position: fixed; }\n  article.product .product_right .product_cart_actions {\n    text-align: left;\n    display: inline-block; }\n    article.product .product_right .product_cart_actions .add_cart_btn {\n      text-transform: uppercase;\n      color: #090954; }\n  .related_products_to_top .product_right {\n    top: 0% !important; }\n  .related_products_to_top .product_left .product_title {\n    top: -11% !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 5% !important; }\n  .related_products_to_top .related_products {\n    position: fixed;\n    top: 12%; }\n  .related_products_to_top .content_title2 {\n    margin-left: 1.5%; }\n  .related_products_to_top .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; } }\n/*********************\r\nRETINA (2x RESOLUTION DEVICES)\r\nThis applies to the retina iPhone (4s) and iPad (2,3) along with\r\nother displays with a 2x resolution. You can also create a media\r\nquery for retina AND a certain size if you want. Go Nuts.\r\n*********************/\n/*********************\r\nPRINT STYLESHEET\r\nFeel free to customize this. Remember to add things that won't make\r\nsense to print at the bottom. Things like nav, ads, and forms should\r\nbe set to display none.\r\n*********************/\n/* @media print { */\n/* } */\n.continue_btn {\n  width: 200px;\n  margin: auto; }\n.cart_heading {\n  margin-left: 2em; }\n#send_cart_by_mail {\n  margin-top: 35px; }\n.dropdownSelectedQuantityList {\n  opacity: 0;\n  position: absolute;\n  z-index: 2147483648;\n  visibility: hidden;\n  width: 2em;\n  padding: 0.5em;\n  cursor: pointer;\n  background-color: #fff; }\n.dropdownSelectedQuantityList.active {\n  opacity: 1;\n  margin-top: 22px;\n  visibility: visible; }\n"

/***/ }),

/***/ "./src/cart/cart.component.ts":
/*!************************************!*\
  !*** ./src/cart/cart.component.ts ***!
  \************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.service */ "./src/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(renderer, cartService) {
        this.renderer = renderer;
        this.cartService = cartService;
        this.TOTALNormal = '0.00';
        this.SGST = '0.00';
        this.priceDeliveryChoix = '0.00';
        this.quantityDropdown = false;
        this.cartListTotalPrice = '0.00';
        this.renderer.addClass(document.body, 'colorBackground');
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartList = this.cartService.localCart;
        this.SGST = this.cartService.SGST;
        this.TOTALNormal = this.cartService.TOTALNormal;
        this.cartListTotalPrice = this.cartService.cartListTotalPrice;
        this.cartService.cartUpdated.subscribe(function (value) {
            _this.cartList = _this.cartService.localCart;
            _this.SGST = _this.cartService.SGST;
            _this.TOTALNormal = _this.cartService.TOTALNormal;
            _this.cartListTotalPrice = _this.cartService.cartListTotalPrice;
            console.log(_this.cartList);
        });
    };
    CartComponent.prototype.changeQuantityPanier = function (id, qty) {
        this.cartService.changeQty(id, qty);
    };
    CartComponent.prototype.toProduit = function () { };
    CartComponent.prototype.sendPanier = function () { };
    CartComponent.prototype.promoCheck = function () { };
    CartComponent.prototype.stepBagClick = function () { };
    CartComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'colorBackground');
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/cart/cart.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/cart/cart.service.ts":
/*!**********************************!*\
  !*** ./src/cart/cart.service.ts ***!
  \**********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.localCart = [];
        this.TOTALNormal = '0.00';
        this.SGST = '0.00';
        this.cartListTotalPrice = '0.00';
        this.cartUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CartService.prototype.addToCart = function (product) {
        var _this = this;
        var itemCheck = false;
        this.localCart.forEach(function (item, index) {
            if (item.id === product.id) {
                itemCheck = true;
                _this.localCart[index].qty = _this.localCart[index].qty + 1;
                _this.checkPrice();
            }
        });
        if (!itemCheck) {
            var Obj = __assign({}, product, { qty: 1 });
            this.localCart.push(__assign({}, Obj));
            this.checkPrice();
        }
    };
    CartService.prototype.checkPrice = function () {
        var total = 0;
        this.localCart.forEach(function (product) {
            total = total + product.price * product.qty;
        });
        this.TOTALNormal = '' + total;
        this.SGST = '' + (0.03 * total).toFixed(2);
        this.cartListTotalPrice = '' + (total * 1.03).toFixed(2);
        this.cartUpdated.next('');
    };
    CartService.prototype.changeQty = function (productId, qty) {
        var _this = this;
        this.localCart.forEach(function (item, index) {
            if (item.id === productId) {
                _this.localCart[index].qty = qty;
                _this.checkPrice();
            }
        });
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/directives/clickOutside.directive.ts":
/*!**************************************************!*\
  !*** ./src/directives/clickOutside.directive.ts ***!
  \**************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/info/care/care.component.html":
/*!*******************************************!*\
  !*** ./src/info/care/care.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-legal-mentions\">\r\n  <div class=\"inner-container\">\r\n    <div [innerHTML]='page' class='content'></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/info/care/care.component.scss":
/*!*******************************************!*\
  !*** ./src/info/care/care.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-container {\n  width: 560px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.container p {\n  text-align: justify;\n  margin-bottom: 25px; }\n\n@media screen and (min-width: 200px) and (max-width: 1024px) {\n  .inner-container {\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto; } }\n\n.container-legal-mentions h1,\n.container-legal-mentions h2 {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: Belvue, Helvetica, Arial, sans-serif;\n  width: 100%;\n  text-align: center;\n  line-height: 68px; }\n\n.content {\n  position: relative;\n  top: 30px;\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/info/care/care.component.ts":
/*!*****************************************!*\
  !*** ./src/info/care/care.component.ts ***!
  \*****************************************/
/*! exports provided: CareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareComponent", function() { return CareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info.service */ "./src/info/info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CareComponent = /** @class */ (function () {
    function CareComponent(sanitizer, renderer, info) {
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.info = info;
        this.renderer.addClass(document.body, 'colorBackground');
    }
    CareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info.fetchCare();
        this.info.care.subscribe(function (data) {
            var first = data.indexOf('class="page-body"');
            var second = data.indexOf('</div>', first);
            _this.page = _this.sanitizer.bypassSecurityTrustHtml(data.substring(first + 18, second));
        });
    };
    CareComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'colorBackground');
    };
    CareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-care',
            template: __webpack_require__(/*! ./care.component.html */ "./src/info/care/care.component.html"),
            styles: [__webpack_require__(/*! ./care.component.scss */ "./src/info/care/care.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _info_service__WEBPACK_IMPORTED_MODULE_2__["InfoService"]])
    ], CareComponent);
    return CareComponent;
}());



/***/ }),

/***/ "./src/info/contact/contact.component.html":
/*!*************************************************!*\
  !*** ./src/info/contact/contact.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-contact\">\r\n  <div class=\"title\">\r\n    contact\r\n  </div>\r\n\r\n  <div class=\"version-desktop\" style=\"display: block !important;margin-top: 50px;\">\r\n    <p ng-show=\"successMessage\" class=\"success\" style=\"color: #090954;\">Your message has been sent</p>\r\n\r\n    <div class=\"cl-l\">\r\n      <div class=\"input\" ng-class=\"{'error' : nameFormContactError==true}\">\r\n        <input type=\"text\" placeholder=\"family name *\" ng-model=\"nameFormContact\" ng-class=\"{'error_field' : nameFormContactError==true}\"\r\n        />\r\n        <div class=\"error_descr\" ng-show=\"nameFormContactError==true\">This field is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"cl-r\">\r\n      <div class=\"input\" ng-class=\"{'error' : emailFormContactError==true}\">\r\n        <input type=\"text\" placeholder=\"email *\" ng-model=\"emailFormContact\" ng-class=\"{'error_field' : emailFormContactError==true}\"\r\n        />\r\n        <div class=\"error_descr\" ng-show=\"emailFormContactRequiredError==true\">This field is required</div>\r\n        <div class=\"error_descr\" ng-show=\"emailInvalidFormContactError==true\">This field is not valid</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cl-l\">\r\n      <div class=\"input\" ng-class=\"{'error' : firstnameFormContactError==true}\">\r\n        <input type=\"text\" placeholder=\"first name *\" ng-model=\"firstnameFormContact\" ng-class=\"{'error_field' : firstnameFormContactError==true}\"\r\n        />\r\n        <div class=\"error_descr\" ng-show=\"firstnameFormContactError==true\">This field is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"cl-r\">\r\n      <div class=\"input form_item_select\">\r\n        <select class=\"contact-service form_select\" name=\"Recipient\" required=\"\" aria-required=\"true\" ng-model=\"required\">\r\n          <option value=\"\" disabled=\"\" selected=\"\">You would like to contact&nbsp;: *</option>\r\n          <option value=\"SERVICE_CLIENT\">Customer service</option>\r\n          <option value=\"SERVICE_MARKETING\">Marketing and communication service</option>\r\n          <option value=\"SERVICE_COMMERCIAL\">Sales service</option>\r\n          <option value=\"RESOURCES_HUMAINES\">Human ressources</option>\r\n          <option value=\"OTHERS\">Others</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cl-center\" style=\"\r\n    padding-top: 40px;\r\n    clear: both;\">\r\n      <div class=\"input textarea\">\r\n        <p>subject : </p>\r\n        <textarea ng-model=\"subject\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"button-continue rounded_btn\" ng-click=\"submitContact()\">submit</div>\r\n\r\n  <div class=\"content\">\r\n    <p>We will gladly respond to all your queries and advice you on your purchases. Please feel free to write to us.</p>\r\n    <p>Green Tara (India)\r\n      <br /> No 217, Lower Ground Floor\r\n      <br /> Sector 30\r\n      <br /> Gurgaon – 122 001\r\n      <br /> Tel.: 0124-2382217\r\n      <br /> Email:\r\n      <a href=\"javascript:encode_mail('contact', 'y.jewelry.')\">contact@y.jewelry</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/info/contact/contact.component.scss":
/*!*************************************************!*\
  !*** ./src/info/contact/contact.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/info/contact/contact.component.ts":
/*!***********************************************!*\
  !*** ./src/info/contact/contact.component.ts ***!
  \***********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/info/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/info/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/info/content/content.component.html":
/*!*************************************************!*\
  !*** ./src/info/content/content.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-legal-mentions\">\r\n  <div class=\"inner-container\">\r\n    <div [innerHTML]='page' class='content'></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/info/content/content.component.scss":
/*!*************************************************!*\
  !*** ./src/info/content/content.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/info/content/content.component.ts":
/*!***********************************************!*\
  !*** ./src/info/content/content.component.ts ***!
  \***********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info.service */ "./src/info/info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContentComponent = /** @class */ (function () {
    function ContentComponent(info, sanitizer, router, renderer) {
        this.info = info;
        this.sanitizer = sanitizer;
        this.router = router;
        this.renderer = renderer;
        this.renderer.addClass(document.body, 'picBackground');
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var router = this.router.url;
        switch (router) {
            case '/info/productInformation':
                this.info.fetchProductInformation();
                this.pageSubscription = this.info.productionInformation;
                break;
            case '/info/deliveryReturns':
                this.info.fetchDelivery();
                this.pageSubscription = this.info.delivery;
                break;
            case '/info/warningAboutForgery':
                this.info.fetchWarningAboutForgery();
                this.pageSubscription = this.info.warningAboutForgery;
                break;
            case '/info/productionCondition':
                this.info.fetchProductCondition();
                this.pageSubscription = this.info.productCondition;
                break;
            case '/info/faq':
                this.info.fetchFAQ();
                this.pageSubscription = this.info.faq;
                break;
            default:
                break;
        }
        this.pageSubscription.subscribe(function (data) {
            var first = data.indexOf('class="page-body"');
            var second = data.indexOf('</div>', first);
            _this.page = _this.sanitizer.bypassSecurityTrustHtml(data.substring(first + 18, second));
        });
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        this.pageSubscription.unsubscribe();
        this.renderer.removeClass(document.body, 'picBackground');
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/info/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/info/content/content.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_info_service__WEBPACK_IMPORTED_MODULE_3__["InfoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/info/info.component.html":
/*!**************************************!*\
  !*** ./src/info/info.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"legal_layout\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/info/info.component.scss":
/*!**************************************!*\
  !*** ./src/info/info.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/* *** Custom neat grid for cart popup *** */\n/* $custom-grid--cat-popup-suggest-col: (\r\n\tcolumns: 12,\r\n  gutter: 10px,\r\n);\r\n\r\n$custom-grid--cat-popup-footer: (\r\n\tcolumns: 12,\r\n  gutter: 0px,\r\n); */\n/*\r\n  * Bower externals libraries\r\n  */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/* @import \"assetsbower_components/neat/app/assets/stylesheets/_neat.scss\"; */\n/* *** Couleurs de texte *** */\n/* *** Backgrounds *** */\n/* *** Border *** */\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n@import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n@import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n@font-face {\n  font-family: BelweSansLight;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n@font-face {\n  font-family: Apercu;\n  src: url(/assets/fonts/Apercu.otf); }\n@font-face {\n  font-family: Belvue;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n/* *** Font Families *** */\n/* *** Restriction de la largeur des images et des iframes (Ex : Vidéos YT) *** */\nimg {\n  max-width: 100%;\n  height: auto;\n  /* Important pour surpasser la taille des images ajoutée par ckeditor */ }\n/* *** Titles *** */\n/* *** Placeholder Color *** */\n/*********************\r\nBASE (MOBILE) SIZE\r\nThis are the mobile styles. It's what people see on their phones. If\r\nyou set a great foundation, you won't need to add too many styles in\r\nthe other stylesheets. Remember, keep it light: Speed is Important.\r\n*********************/\n/* ************************* */\n/* ***** Global styles ***** */\n/* ************************* */\nbutton:focus,\ntextarea:focus,\ninput:focus {\n  outline: none; }\n.form-control:focus {\n  border: 0px;\n  box-shadow: none !important;\n  -webkit-box-shadow: none !important; }\na {\n  cursor: pointer; }\nbody {\n  background-color: #f9f4ef; }\nul,\nli {\n  list-style-image: none;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n.clear {\n  clear: both; }\n/* Titres */\n.page_title {\n  color: #090954;\n  font-family: \"BelweSansLight\", Helvetica, Arial, sans-serif;\n  font-size: 60px;\n  line-height: 60px;\n  margin: 25px 0;\n  word-wrap: break-word; }\n.content_title2 {\n  color: #090954;\n  text-transform: uppercase;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: 0 0 25px; }\n/* ************************* */\n/* ***** Page Content ***** */\n/* ************************* */\n.simple_page_layout .page_title {\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: normal;\n  margin: 45px 0; }\n.simple_page_layout .content_title2 {\n  font-size: 16px;\n  text-align: center;\n  margin: 0 0 35px;\n  clear: both; }\n.simple_page_layout #page > .content {\n  padding: 60px 0; }\n.simple_page_layout .container-simple-page {\n  max-width: 1280px;\n  margin: 0 auto;\n  color: #090954; }\n.simple_page_layout .container-simple-page .inner-container {\n    font-family: \"Apercu\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    max-width: 860px;\n    margin-left: auto;\n    margin-right: auto; }\n.simple_page_layout .container-simple-page .inner-container.mobile_grid_1col {\n      margin-bottom: 50px; }\n.simple_page_layout .container-simple-page p,\n  .simple_page_layout .container-simple-page ul {\n    text-align: justify;\n    margin-bottom: 25px; }\n.simple_page_layout .container-simple-page ul li:before {\n    content: '\\2022';\n    margin-right: 5px;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 20px; }\n.background-page {\n  background-image: url(\"/assets/img/push-collection/8.jpg\");\n  background-size: cover; }\n.background-page header,\n  .background-page .content {\n    background-color: #f9f4ef88; }\n.legal_layout {\n  background-image: url(\"/assets/img/footer-pages-bg.jpg\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100vh;\n  color: #090954; }\n.legal_layout h1,\n  .legal_layout h2 {\n    text-transform: uppercase;\n    font-size: 14px;\n    font-family: 'Belvue', Helvetica, Arial, sans-serif;\n    width: 100%;\n    text-align: center;\n    line-height: 68px; }\n.legal_layout .content {\n    position: relative;\n    top: 30px;\n    margin-bottom: 50px; }\n/*********************\r\nLARGER MOBILE DEVICES\r\nThis is for devices like the Galaxy Note or something that's\r\nlarger than an iPhone but smaller than a tablet. Let's call them\r\ntweeners.\r\n*********************/\n/*********************\r\nTABLET & SMALLER LAPTOPS\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n/*********************\r\nDESKTOP\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n@media only screen and (min-width: 770px) {\n  /* ************************* */\n  /* ***** Page Content ***** */\n  /* ************************* */\n  .simple_page_layout .container-simple-page .page_columns {\n    clear: both; }\n  .simple_page_layout .container-simple-page .inner-container.tablet_grid_2col {\n    width: calc(50% - 90px);\n    float: left;\n    margin-left: 60px; }\n    .simple_page_layout .container-simple-page .inner-container.tablet_grid_2col:nth-child(odd) {\n      clear: left; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1025px) {\n  /* ************************* */\n  /* ***** Page Content ***** */\n  /* ************************* */\n  .simple_page_layout .container-simple-page .inner-container.desktop_grid_2col {\n    width: calc(50% - 90px);\n    float: left;\n    margin-left: 60px; }\n    .simple_page_layout .container-simple-page .inner-container.desktop_grid_2col:nth-child(odd) {\n      clear: left; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n/*********************\r\nRETINA (2x RESOLUTION DEVICES)\r\nThis applies to the retina iPhone (4s) and iPad (2,3) along with\r\nother displays with a 2x resolution. You can also create a media\r\nquery for retina AND a certain size if you want. Go Nuts.\r\n*********************/\n/*********************\r\nPRINT STYLESHEET\r\nFeel free to customize this. Remember to add things that won't make\r\nsense to print at the bottom. Things like nav, ads, and forms should\r\nbe set to display none.\r\n*********************/\n/* @media print { */\n/* } */\n"

/***/ }),

/***/ "./src/info/info.component.ts":
/*!************************************!*\
  !*** ./src/info/info.component.ts ***!
  \************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/info/info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/info/info.module.ts":
/*!*********************************!*\
  !*** ./src/info/info.module.ts ***!
  \*********************************/
/*! exports provided: InfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModule", function() { return InfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.component */ "./src/info/info.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _infoRouting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoRouting.module */ "./src/info/infoRouting.module.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ "./src/info/content/content.component.ts");
/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info.service */ "./src/info/info.service.ts");
/* harmony import */ var _care_care_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./care/care.component */ "./src/info/care/care.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/info/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var InfoModule = /** @class */ (function () {
    function InfoModule() {
    }
    InfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_info_component__WEBPACK_IMPORTED_MODULE_1__["InfoComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], _care_care_component__WEBPACK_IMPORTED_MODULE_6__["CareComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _infoRouting_module__WEBPACK_IMPORTED_MODULE_3__["InfoRoutingModule"]],
            providers: [_info_service__WEBPACK_IMPORTED_MODULE_5__["InfoService"]]
        })
    ], InfoModule);
    return InfoModule;
}());



/***/ }),

/***/ "./src/info/info.service.ts":
/*!**********************************!*\
  !*** ./src/info/info.service.ts ***!
  \**********************************/
/*! exports provided: InfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        accept: '*'
    })
};
var InfoService = /** @class */ (function () {
    function InfoService(http) {
        this.http = http;
        this.delivery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.productCondition = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.productionInformation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.warningAboutForgery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.faq = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.care = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.baseUrl = 'http://localhost:15536';
    }
    InfoService.prototype.getData = function (url) {
        return this.http.get(url, { responseType: 'text' });
    };
    InfoService.prototype.fetchDelivery = function () {
        var _this = this;
        var url = this.baseUrl + '/delivery';
        this.getData(url).subscribe(function (page) {
            _this.delivery.next(page);
        });
    };
    InfoService.prototype.fetchProductInformation = function () {
        var _this = this;
        var url = this.baseUrl + '/price-and-payments';
        this.getData(url).subscribe(function (page) {
            _this.productionInformation.next(page);
        });
    };
    InfoService.prototype.fetchProductCondition = function () {
        var _this = this;
        var url = this.baseUrl + '/service';
        this.getData(url).subscribe(function (page) {
            _this.productCondition.next(page);
        });
    };
    InfoService.prototype.fetchWarningAboutForgery = function () {
        var _this = this;
        var url = this.baseUrl + '/terms';
        this.getData(url).subscribe(function (page) {
            _this.warningAboutForgery.next(page);
        });
    };
    InfoService.prototype.fetchFAQ = function () {
        var _this = this;
        var url = this.baseUrl + '/shipping';
        this.getData(url).subscribe(function (page) {
            _this.faq.next(page);
        });
    };
    InfoService.prototype.fetchCare = function () {
        var _this = this;
        var url = this.baseUrl + '/care';
        this.getData(url).subscribe(function (page) {
            _this.care.next(page);
        });
    };
    InfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InfoService);
    return InfoService;
}());



/***/ }),

/***/ "./src/info/infoRouting.module.ts":
/*!****************************************!*\
  !*** ./src/info/infoRouting.module.ts ***!
  \****************************************/
/*! exports provided: InfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoRoutingModule", function() { return InfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.component */ "./src/info/info.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "./src/info/content/content.component.ts");
/* harmony import */ var _care_care_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./care/care.component */ "./src/info/care/care.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'info',
        component: _info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"],
        children: [
            { path: 'productInformation', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'deliveryReturns', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'warningAboutForgery', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'productionCondition', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'faq', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
            { path: 'care', component: _care_care_component__WEBPACK_IMPORTED_MODULE_4__["CareComponent"] },
            { path: '', redirectTo: 'productInformation', pathMatch: 'full' }
        ]
    }
];
var InfoRoutingModule = /** @class */ (function () {
    function InfoRoutingModule() {
    }
    InfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InfoRoutingModule);
    return InfoRoutingModule;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/products/chains/chains.component.html":
/*!***************************************************!*\
  !*** ./src/products/chains/chains.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/products/chains/chains.component.scss":
/*!***************************************************!*\
  !*** ./src/products/chains/chains.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/* *** Custom neat grid for cart popup *** */\n/*\r\n  * Bower externals libraries\r\n  */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/* @import \"../../bower_components/neat/app/assets/stylesheets/_neat.scss\"; */\n/* *** Couleurs de texte *** */\n/* *** Backgrounds *** */\n/* *** Border *** */\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n@import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n@import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n@font-face {\n  font-family: BelweSansLight;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n@font-face {\n  font-family: Apercu;\n  src: url(/assets/fonts/Apercu.otf); }\n@font-face {\n  font-family: Belvue;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n/* *** Font Families *** */\n/* *** Restriction de la largeur des images et des iframes (Ex : Vidéos YT) *** */\nimg {\n  max-width: 100%;\n  height: auto;\n  /* Important pour surpasser la taille des images ajoutée par ckeditor */ }\n/* *** Titles *** */\n/* *** Placeholder Color *** */\n/*********************\r\nBASE (MOBILE) SIZE\r\nThis are the mobile styles. It's what people see on their phones. If\r\nyou set a great foundation, you won't need to add too many styles in\r\nthe other stylesheets. Remember, keep it light: Speed is Important.\r\n*********************/\n/* ***** Global styles ***** */\nbutton:focus,\ntextarea:focus,\ninput:focus {\n  outline: none; }\n.form-control:focus {\n  border: 0px;\n  box-shadow: none !important; }\na {\n  cursor: pointer;\n  color: inherit; }\nbody {\n  background-color: #f9f4ef; }\nul,\nli {\n  list-style-image: none;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n.clear {\n  clear: both; }\n.mobile_grid_6col {\n  /* @include span-columns(6); */\n  width: calc(50% - 30px);\n  float: left;\n  margin-left: 20px; }\n/* Titres */\n.page_title {\n  color: #090954;\n  font-family: \"BelweSansLight\", Helvetica, Arial, sans-serif;\n  font-size: 60px;\n  margin: 25px 0; }\n.content_title2 {\n  color: #090954;\n  text-transform: uppercase;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: 0 0 25px; }\n.breadcrumb_container {\n  color: #090954;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 13px; }\n.breadcrumb_container .breadcrumb {\n    padding: 0;\n    margin: 25px 0;\n    text-transform: uppercase;\n    background: none;\n    border-radius: 0; }\n.breadcrumb_container .breadcrumb .breadcrumb_item {\n      display: inline-block;\n      vertical-align: middle; }\n.breadcrumb_container .breadcrumb .breadcrumb_item:before {\n        content: '\\276F';\n        display: inline-block;\n        color: #090954;\n        font-size: 12px;\n        line-height: 0; }\n.breadcrumb_container .breadcrumb .breadcrumb_item:first-child:before {\n        content: normal; }\n.breadcrumb_container .breadcrumb .breadcrumb_item a {\n        color: #090954; }\n/* ***** Cart popup ***** */\n#popup_cart_list.active {\n  opacity: 1.5;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  visibility: visible; }\n#popup_cart_list {\n  position: fixed;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  right: 0;\n  opacity: 0;\n  visibility: hidden;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99999;\n  overflow-y: auto;\n  background-color: #ffffff;\n  padding: 25px 0;\n  box-sizing: border-box;\n  color: #090954;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px; }\n#popup_cart_list #close_cart_list {\n    float: right;\n    margin-right: 35px; }\n#popup_cart_list .cart_list {\n    clear: both;\n    padding-top: 35px; }\n#popup_cart_list .cart_list .cart_list_item {\n      margin-bottom: 30px; }\n#popup_cart_list .cart_list .cart_list_item::after {\n        clear: both;\n        content: \"\";\n        display: block; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_l,\n      #popup_cart_list .cart_list .cart_list_item .cart_product_item_r {\n        width: calc(25% - 43.75px);\n        float: left;\n        margin-left: 35px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_c {\n        width: calc(50% - 52.5px);\n        float: left;\n        margin-left: 35px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_r {\n        text-align: right; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_img {\n        width: 60px;\n        height: 60px;\n        text-align: center; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_img img {\n          max-height: 100%;\n          width: auto; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_qty {\n        margin-top: 20px;\n        text-transform: none; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del {\n        margin-top: 20px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del .btn_del_to_cart {\n          color: #090954;\n          font-size: 0px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del .btn_del_to_cart span {\n            height: 8px;\n            width: 8px;\n            background-image: url(/assets/img/delete_item.svg); }\n#popup_cart_list #more_btn {\n    color: #090954;\n    display: block;\n    margin: 0 35px 20px;\n    text-align: center;\n    font-weight: bold; }\n#popup_cart_list #send_cart_by_mail {\n    margin: 0 35px;\n    margin-top: 0; }\n#popup_cart_list #send_cart_by_mail .form_item,\n    #popup_cart_list #send_cart_by_mail .form_actions {\n      float: left; }\n#popup_cart_list #send_cart_by_mail .form_item {\n      width: 88%; }\n#popup_cart_list #send_cart_by_mail .form_actions {\n      width: 12%; }\n#popup_cart_list #send_cart_by_mail .form_email::-webkit-input-placeholder {\n      /* WebKit, Blink, Edge */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email:-moz-placeholder {\n      /* Mozilla Firefox 4 to 18 */\n      color: #090954;\n      opacity: 1; }\n#popup_cart_list #send_cart_by_mail .form_email::-moz-placeholder {\n      /* Mozilla Firefox 19+ */\n      color: #090954;\n      opacity: 1; }\n#popup_cart_list #send_cart_by_mail .form_email:-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email:placeholder-shown {\n      /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email,\n    #popup_cart_list #send_cart_by_mail .form_submit {\n      display: block;\n      background: none;\n      border: none;\n      border-bottom: 5px solid #f9f4ef;\n      height: 40px;\n      line-height: 40px;\n      width: 100%; }\n#popup_cart_list #send_cart_by_mail .form_submit {\n      text-transform: uppercase;\n      text-align: center;\n      cursor: pointer; }\n#popup_cart_list #popup_cart_suggest {\n    background-color: #f9f4ef;\n    padding: 20px;\n    margin: 40px 25px 0;\n    color: #090954; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_intro {\n      margin-bottom: 35px;\n      text-transform: initial !important;\n      text-align: center; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content {\n      display: -ms-grid;\n      display: grid;\n      -ms-grid-columns: 2fr 1fr;\n          grid-template-columns: 2fr 1fr;\n      grid-gap: 0 30px; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_img {\n        grid-row: span 2; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_price {\n        text-align: right; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_qty {\n        -ms-grid-column: 2;\n        grid-column: 2;\n        text-transform: initial;\n        -ms-grid-row-align: end;\n            align-self: end; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_color select {\n        background: none;\n        border: none;\n        cursor: pointer; }\n#popup_cart_list #popup_cart_suggest .popup_cart_suggest_actions {\n      clear: both;\n      text-align: right;\n      text-transform: uppercase;\n      padding-top: 1.5em; }\n#popup_cart_list #popup_cart_suggest .popup_cart_suggest_actions a {\n        color: #090954;\n        text-decoration: none;\n        border-bottom: 5px solid white; }\n#popup_cart_list #popup_cart_footer {\n    padding: 25px 35px;\n    text-transform: uppercase; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col {\n      /* @include grid-column(4, $custom-grid--cat-popup-footer); */\n      width: calc(50%);\n      float: left;\n      margin-left: 0px;\n      line-height: 80px; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col > span {\n        display: inline-block;\n        line-height: normal;\n        vertical-align: middle; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_c {\n        text-align: center; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_r {\n        text-align: right;\n        width: 30%; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_l {\n        width: 70%; }\n#popup_cart_list .popup_cart_continue {\n    clear: both; }\n#popup_cart_list .popup_cart_continue a {\n      text-decoration: none; }\n#popup_cart_list .popup_cart_continue a:hover {\n        text-decoration: none; }\n.addedToBag {\n  background-color: #ffffff;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  width: 100%;\n  text-align: center;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #090954;\n  padding: 80px 0;\n  opacity: 0;\n  z-index: 9999999;\n  visibility: hidden; }\n.addedToBag .icon {\n    margin-bottom: 25px; }\n.addedToBag.active {\n  opacity: 1;\n  visibility: visible; }\n/* ***** Product Core ***** */\narticle.product {\n  text-align: center;\n  color: #090954;\n  max-width: 270px;\n  margin: 0 auto;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 16px; }\narticle.product h1 {\n    line-height: 40px;\n    font-size: 40px;\n    margin: 40px auto 0; }\narticle.product .product_center {\n    padding: 0 0 25px; }\narticle.product .product_center .product_slider_container .product_slider {\n      width: 100%;\n      min-height: 200px; }\narticle.product .product_center .product_slider_container .product_slider img {\n        max-height: 100%;\n        width: auto; }\narticle.product .product_center .product_slider_pager_items {\n      text-align: center; }\narticle.product .product_center .product_slider_pager_items .product_slider_pager_item {\n        display: inline-block;\n        width: 10px;\n        height: 10px;\n        margin: 0 10px;\n        border-radius: 50%;\n        border: 1px solid #090954;\n        cursor: pointer; }\narticle.product .product_center .product_slider_pager_items .product_slider_pager_item.active {\n          background-color: #090954; }\narticle.product .product_right {\n    position: relative; }\narticle.product .product_right .product_description {\n      line-height: 20px;\n      font-family: \"Apercu\", Helvetica, Arial, sans-serif;\n      font-size: 14px; }\narticle.product .product_actions {\n    clear: both; }\narticle.product .product_actions .product_price {\n      margin: 15px 0;\n      letter-spacing: 0.03em; }\narticle.product .product_actions .product_cart_actions {\n      display: inline-block; }\narticle.product .product_actions .product_cart_actions::after {\n        content: '';\n        display: block;\n        border-bottom: 5px solid white; }\narticle.product .product_actions .product_cart_actions .add_cart_btn {\n        text-transform: uppercase;\n        color: #090954;\n        font-size: 16px;\n        letter-spacing: 0.03em;\n        text-decoration: none; }\n/* ***** Related Products & Products List & Search Results ***** */\n.related_products,\n.products_of_category,\n#search_results {\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin-top: 22.5px;\n  clear: both; }\n.related_products .filter_slide_toggle,\n  .products_of_category .filter_slide_toggle,\n  #search_results .filter_slide_toggle {\n    line-height: 45px; }\n.related_products .content_title2,\n  .products_of_category .content_title2,\n  #search_results .content_title2 {\n    text-align: center; }\n.related_products .related_product_item,\n  .related_products .product_item,\n  .products_of_category .related_product_item,\n  .products_of_category .product_item,\n  #search_results .related_product_item,\n  #search_results .product_item {\n    text-transform: uppercase;\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    color: #090954;\n    cursor: pointer; }\n.related_products .related_product_item:nth-child(odd),\n    .related_products .product_item:nth-child(odd),\n    .products_of_category .related_product_item:nth-child(odd),\n    .products_of_category .product_item:nth-child(odd),\n    #search_results .related_product_item:nth-child(odd),\n    #search_results .product_item:nth-child(odd) {\n      clear: left; }\n.related_products .related_product_item > div,\n    .related_products .product_item > div,\n    .products_of_category .related_product_item > div,\n    .products_of_category .product_item > div,\n    #search_results .related_product_item > div,\n    #search_results .product_item > div {\n      margin-left: auto;\n      margin-right: auto; }\n.related_products .related_product_item > div.related_product_img img, .related_products .related_product_item > div.product_img img,\n      .related_products .product_item > div.related_product_img img,\n      .related_products .product_item > div.product_img img,\n      .products_of_category .related_product_item > div.related_product_img img,\n      .products_of_category .related_product_item > div.product_img img,\n      .products_of_category .product_item > div.related_product_img img,\n      .products_of_category .product_item > div.product_img img,\n      #search_results .related_product_item > div.related_product_img img,\n      #search_results .related_product_item > div.product_img img,\n      #search_results .product_item > div.related_product_img img,\n      #search_results .product_item > div.product_img img {\n        width: 200px; }\n.related_products .related_product_item .related_product_price, .related_products .related_product_item.product_price,\n    .related_products .product_item .related_product_price,\n    .related_products .product_item.product_price,\n    .products_of_category .related_product_item .related_product_price,\n    .products_of_category .related_product_item.product_price,\n    .products_of_category .product_item .related_product_price,\n    .products_of_category .product_item.product_price,\n    #search_results .related_product_item .related_product_price,\n    #search_results .related_product_item.product_price,\n    #search_results .product_item .related_product_price,\n    #search_results .product_item.product_price {\n      font-size: 16px;\n      margin-top: 8px; }\n.products_of_category {\n  transition: opacity 300ms;\n  opacity: 1; }\n.products_of_category #products_filters {\n    text-align: center; }\n.products_of_category #products_filters > .filter_slide_toggle ~ .form_selected_ {\n      display: none; }\n.products_of_category #products_filters .form_selected_:last-child {\n      margin-bottom: 22.5px; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select {\n      box-shadow: none;\n      max-width: 200px;\n      background-position: right center;\n      background-image: url(\"/assets/img/elmts/select_arrow.svg\");\n      background-repeat: no-repeat;\n      cursor: pointer;\n      border: none;\n      border-radius: 0;\n      background-color: transparent;\n      font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n      font-size: 14px;\n      letter-spacing: 0.03em;\n      text-transform: uppercase;\n      color: #090954;\n      cursor: pointer;\n      width: 200px;\n      height: 45px;\n      display: block;\n      line-height: 30px;\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      line-height: 45px;\n      margin: 0 auto;\n      padding: 0px;\n      padding-right: 15px; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select > span {\n        transition: border-bottom 0.5s cubic-bezier(0.4, 0, 0, 1);\n        border-bottom: 5px white solid !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select.active > span {\n        border-bottom-color: transparent !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select.active .dropdown {\n        opacity: 1; }\n.products_of_category #products_filters .form_selected_ .dropdown {\n      position: absolute;\n      padding-top: 10px;\n      opacity: 0;\n      width: 160px;\n      transition: 0.5s cubic-bezier(0.4, 0, 0, 1);\n      background: white;\n      border-radius: 20px;\n      border-color: none;\n      max-height: none !important;\n      border: 0px !important;\n      box-shadow: none !important; }\n.products_of_category #products_filters .form_selected_ .dropdown li {\n        position: relative;\n        border-top: 0px !important;\n        border-left: 0px !important;\n        border-right: 0px !important;\n        margin: 0px !important;\n        line-height: 40px !important;\n        height: 45px; }\n.products_of_category #products_filters .form_selected_ .dropdown li:hover {\n        border-bottom: 5px solid #f9f4ef !important; }\n.products_of_category #products_filters .form_selected_ .dropdown li:hover a {\n          background: white !important; }\n.products_of_category #products_filters .form_selected_ .dropdown a {\n        color: #090954;\n        text-align: center;\n        font-family: Belvue;\n        font-size: 14px;\n        border: 0px !important;\n        box-shadow: none !important; }\n.products_of_category #products_filters .form_selected_ .selected {\n      line-height: 0px !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select:after {\n      content: none !important; }\n.products_of_category #products_filters .form_item_select {\n      border-bottom: 5px solid #ffffff;\n      /* padding-right: 15px; */\n      margin: 0 auto 25px;\n      max-width: 200px;\n      background-position: right center;\n      background-image: url(/assets/img/elmts/select_arrow.svg);\n      background-repeat: no-repeat;\n      overflow: hidden;\n      cursor: pointer; }\n.products_of_category #products_filters .form_item_select .form_select * {\n        background: #090954;\n        color: white;\n        padding: 5px; }\n.products_of_category #products_filters .form_item_select .form_select {\n        border: none;\n        background-color: transparent;\n        font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n        font-size: 14px;\n        text-transform: uppercase;\n        color: #090954;\n        cursor: pointer;\n        /* width: 100%; */\n        /* min-width: 100%; */\n        width: 200px;\n        height: 30px;\n        padding-right: 15px;\n        display: block;\n        line-height: 30px;\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none; }\n.products_of_category .product_item {\n    margin-top: 0;\n    margin-bottom: 80px; }\n.products_of_category .product_item .product_img {\n      margin-bottom: 40px; }\n.related_products_to_top {\n  top: 70%;\n  transition-duration: 1s; }\n/* ***** Sharing section ***** */\n.sharing_section {\n  text-align: center;\n  margin: 30px 0 0;\n  clear: both; }\n.sharing_section .sharing_links li {\n    display: inline-block;\n    margin: 0 5px;\n    font-size: 16px; }\n.sharing_section .sharing_links li a {\n      color: #bbd1ea;\n      display: inline-block;\n      width: 26px;\n      height: 26px;\n      line-height: 26px;\n      border: 1px solid #bbd1ea;\n      border-radius: 50%; }\n.sharing_section .sharing_links li a img {\n        fill: #bbd1ea; }\n.sharing_section .sharing_links li a:hover {\n        color: #090954;\n        border: 1px solid #090954; }\n.sharing_section .sharing_links li a:hover img {\n          fill: #090954; }\n/* ***** Carousel ***** */\nbody {\n  overflow-x: hidden; }\n.carousel-category {\n  height: 50vh;\n  background: white;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  cursor: -webkit-grab; }\n.carousel-category-indicators ul {\n  overflow: hidden;\n  width: 100%;\n  white-space: nowrap;\n  position: absolute;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(-150%);\n          transform: translateY(-150%); }\n.carousel-category-indicators ul > li {\n    transition: 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators .item-indicator {\n  max-width: 300px;\n  width: 44%;\n  display: inline-flex;\n  height: 40px;\n  margin: 0px;\n  padding: 0px;\n  justify-content: center;\n  align-items: center; }\n.carousel-category-indicators .item-indicator .round {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white; }\n.carousel-category-indicators .item-indicator .round::before {\n  content: '';\n  position: absolute;\n  top: auto;\n  left: auto;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  margin: -26px;\n  border: 4px solid white;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2);\n  transition: -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators .item-indicator:not(.active) .round:hover::before {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5); }\n.carousel-category-indicators .item-indicator .round.nohover::before {\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25); }\n.carousel-category-indicators .item-indicator .line {\n  height: 1px;\n  background: white;\n  position: absolute;\n  left: 0;\n  right: 0; }\n.carousel-category-indicators-active {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -150%);\n          transform: translate(-50%, -150%);\n  background-color: white;\n  max-width: 300px;\n  width: 44%;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 20px;\n  color: #090954;\n  font-size: 15px;\n  font-family: Belvue;\n  text-transform: uppercase;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden; }\n.carousel-category-indicators-active > div {\n    transition: -webkit-transform 1s cubic-bezier(0.4, 0, 0, 1);\n    transition: transform 1s cubic-bezier(0.4, 0, 0, 1);\n    transition: transform 1s cubic-bezier(0.4, 0, 0, 1), -webkit-transform 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators-active p {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    margin: 0; }\n.carousel-category-indicators-active:hover {\n  background-color: #f9f4ef; }\n.carousel-category-inner {\n  white-space: nowrap;\n  position: relative;\n  height: 100%;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-inner .item-carousel {\n  display: inline-block; }\n.carousel-category-inner .item-carousel,\n  .carousel-category-inner .item-carousel img {\n    height: 100%;\n    width: 100%; }\n.carousel-category-inner .item-carousel img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    vertical-align: top; }\n/* ********************************* */\n/* ********** Search Page ********** */\n/* ********************************* */\n.input-search {\n  padding: 10px 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  background-color: #f9f4ef; }\n.input-search .img-loop,\n  .input-search #form_item_site_search {\n    float: left; }\n.input-search .img-loop {\n    border-right: 5px solid #ffffff;\n    width: 20%;\n    line-height: 40px;\n    height: 40px;\n    text-align: center;\n    cursor: pointer; }\n.input-search #form_item_site_search {\n    width: 80%; }\n.input-search .form_text,\n  .input-search .form-control {\n    display: block;\n    background: none;\n    border: none;\n    height: 40px;\n    line-height: 40px;\n    width: 100%;\n    text-transform: uppercase;\n    margin: 0;\n    box-shadow: none;\n    border-radius: 0; }\n.input-search .form_text#site_search_field,\n    .input-search .form_text #site_search_field_value,\n    .input-search .form-control#site_search_field,\n    .input-search .form-control #site_search_field_value {\n      padding: 0 40px 0 15px; }\n.input-search .form_text::-webkit-input-placeholder,\n  .input-search .form-control::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    color: #090954; }\n.input-search .form_text:-moz-placeholder,\n  .input-search .form-control:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    color: #090954;\n    opacity: 1; }\n.input-search .form_text::-moz-placeholder,\n  .input-search .form-control::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    color: #090954;\n    opacity: 1; }\n.input-search .form_text:-ms-input-placeholder,\n  .input-search .form-control:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #090954; }\n.input-search .form_text:placeholder-shown,\n  .input-search .form-control:placeholder-shown {\n    /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n    color: #090954; }\n.input-search #close_search {\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    z-index: 9999; }\n.container-produit .stateFormShippingAddress {\n  position: absolute; }\n.container-produit .dropdownSelectedField {\n  width: 100%;\n  text-align: center; }\n.container-produit .input-text {\n  margin-left: auto;\n  margin-right: auto; }\n.container-produit .dropdownSelectedFieldList.active {\n  margin-left: 42px; }\n.container-produit .dropdownSelectedFieldList div {\n  min-width: 53px; }\n/*********************\r\nLARGER MOBILE DEVICES\r\nThis is for devices like the Galaxy Note or something that's\r\nlarger than an iPhone but smaller than a tablet. Let's call them\r\ntweeners.\r\n*********************/\n/*********************\r\nTABLET & SMALLER LAPTOPS\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n/*********************\r\nDESKTOP\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n@media only screen and (min-width: 770px) {\n  /* ***** Global styles ***** */\n  .tablet_grid_4col {\n    width: calc(33.33333333% - 26.66666667px);\n    float: left;\n    margin-left: 20px; }\n  .tablet_grid_6col {\n    width: calc(50% - 30px);\n    float: left;\n    margin-left: 20px; }\n  /* ***** Product Core ***** */\n  article.product {\n    max-width: none;\n    width: calc(100% - 30px);\n    position: relative;\n    /* Vertical alignment */ }\n    article.product h1 {\n      line-height: 60px;\n      font-size: 60px;\n      margin: 25px 0; }\n    article.product .product_left,\n    article.product .product_center,\n    article.product .product_right {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n    article.product .product_center {\n      padding-top: 35px; }\n      article.product .product_center .product_slider_container .product_slider {\n        min-height: 300px;\n        max-height: 320px; }\n    article.product .product_right {\n      margin-right: 25px;\n      padding-bottom: 0;\n      text-align: right; }\n    article.product .product_actions .product_price {\n      margin: 0 auto;\n      position: absolute;\n      bottom: 70px;\n      left: 0;\n      right: 0;\n      z-index: 500; }\n    article.product .product_actions .product_cart_actions {\n      position: absolute;\n      bottom: 30px;\n      text-align: center;\n      width: 100%; }\n    article.product .product_actions .product_cart_actions_to_top {\n      top: 0px;\n      transition-duration: 1s; }\n  .products_of_category #products_filters .form_selected_ {\n    display: inline-block;\n    margin-right: 5%; }\n    .products_of_category #products_filters .form_selected_ .wrap-dd-select {\n      margin: 0 10px;\n      width: auto; }\n  .products_of_category #products_filters .form_selected_:last-child {\n    margin-right: 0px; }\n  .product .product_left,\n  .related_products > .content_title2 {\n    margin-left: 25px;\n    text-align: left; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .products_of_category #products_filters .form_item_select {\n    display: inline-block;\n    margin: 0 25px;\n    max-width: none; }\n    .products_of_category #products_filters .form_item_select .form_select {\n      width: auto; }\n  #popup_cart_list .popup_cart_continue {\n    width: 52%;\n    margin-left: auto;\n    margin-right: auto; }\n  .addedToBag {\n    left: auto;\n    right: 0;\n    width: 280px;\n    padding: 40px 0; }\n  /* ***** Carousel ***** */\n  .carousel-category {\n    height: 50vh;\n    background: white;\n    overflow-y: hidden;\n    overflow-x: hidden; }\n    .carousel-category .carousel-category-inner,\n    .carousel-category .item-carousel {\n      height: inherit; }\n  .carousel-category-indicators .item-indicator {\n    width: 20%; }\n    .carousel-category-indicators .item-indicator .line {\n      width: 100%; }\n  .carousel-category-indicators-active {\n    width: 20%; }\n  .carousel-category-inner .item-carousel img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    padding-top: 60px; }\n  /* ********************************* */\n  /* ********** Search Page ********** */\n  /* ********************************* */\n  .input-search .img-loop {\n    width: 10%; }\n  .input-search #form_item_site_search {\n    width: 90%; }\n  .container-produit .stateFormShippingAddress {\n    position: absolute; }\n  .container-produit .dropdownSelectedField {\n    width: 100%;\n    text-align: right; }\n  .container-produit .dropdownSelectedFieldList {\n    margin-left: -12px; }\n  .container-produit .dropdownSelectedFieldList.active {\n    margin-left: 91px; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1025px) {\n  /* ***** Global styles ***** */\n  .desk_grid_4col {\n    width: calc(33.33333333% - 26.66666667px);\n    float: left;\n    margin-left: 20px; }\n  .desk_grid_3col {\n    width: calc(25% - 25px);\n    float: left;\n    margin-left: 20px; }\n  /* ***** Cart popup ***** */\n  #popup_cart_list {\n    width: 340px; }\n  .addedToBag {\n    width: 400px;\n    padding: 80px 0; }\n  /* ***** Product Core ***** */\n  article.product .product_right,\n  article.product .product_center,\n  article.product .product_left {\n    transition: 1s; }\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 42%; }\n    article.product .product_center .product_slider_item {\n      max-width: 350px;\n      margin-left: auto;\n      margin-right: auto; }\n  article.product .product_right {\n    margin-left: 55%;\n    position: relative;\n    top: initial;\n    right: -28%;\n    -webkit-transform: initial;\n            transform: initial;\n    top: 28%; }\n  article.product .product_left {\n    position: relative;\n    top: initial;\n    -webkit-transform: initial;\n            transform: initial; }\n    article.product .product_left .product_title {\n      position: relative;\n      top: 30%;\n      -webkit-transform: initial;\n              transform: initial;\n      transition: 1s; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 28%;\n      -webkit-transform: initial;\n              transform: initial;\n      transition: 1s; }\n  article.product .product_right {\n    margin-left: initial; }\n    article.product .product_right .product_price {\n      /* bottom: auto;\r\n\t\t\tposition: static; */\n      text-align: left;\n      display: inline-block;\n      width: 23%; }\n    article.product .product_right .product_description {\n      text-align: right;\n      margin: 25px 0; }\n    article.product .product_right .product_cart_actions {\n      display: inline-block; }\n      article.product .product_right .product_cart_actions::after {\n        content: '';\n        display: block;\n        border-bottom: 5px solid white;\n        -webkit-transform: scaleX(0);\n                transform: scaleX(0);\n        -webkit-transform-origin: left;\n                transform-origin: left;\n        transition: -webkit-transform 0.5s;\n        transition: transform 0.5s;\n        transition: transform 0.5s, -webkit-transform 0.5s; }\n      article.product .product_right .product_cart_actions:hover::after {\n        -webkit-transform: none;\n                transform: none; }\n      article.product .product_right .product_cart_actions .add_cart_btn {\n        text-transform: uppercase;\n        color: #090954;\n        text-decoration: none; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .products_of_category #products_filters .form_item,\n  #search_results #products_filters .form_item {\n    margin: 0 50px; }\n  .products_of_category .product_item:nth-child(odd),\n  #search_results .product_item:nth-child(odd) {\n    clear: none; }\n  .products_of_category .product_item:nth-child(4n-7),\n  #search_results .product_item:nth-child(4n-7) {\n    clear: left; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    margin-bottom: 40px; }\n  /* ***** Carousel ***** */\n  body {\n    overflow-x: hidden; }\n  .related_products {\n    position: relative;\n    transition: 1s; }\n  .related_products_list li:nth-child(3) {\n    margin-left: calc(100% / 3 - 6.66667px);\n    clear: initial !important; }\n  .related_products_list li:nth-child(4) {\n    clear: initial !important; }\n  .related_products .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  /* ********************************* */\n  /* ********** Search Page ********** */\n  /* ********************************* */\n  .input-search .img-loop {\n    width: 8%; }\n  .input-search #form_item_site_search {\n    width: 92%; }\n  /*Select*/\n  .products_of_category #products_filters .form_selected_ .wrap-dd-select {\n    min-width: none; }\n  .wrap-dd-select .dropdown {\n    -webkit-transform: translate(-2rem, 0.5rem);\n            transform: translate(-2rem, 0.5rem); }\n  .products_of_category #products_filters .form_selected_ .dropdown li {\n    line-height: 14px; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1200px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 32%; }\n  article.product .product_right {\n    margin-left: 36%;\n    position: relative;\n    top: 243px;\n    right: 10%; }\n  article.product .product_left {\n    position: relative;\n    top: 207px; }\n    article.product .product_left .product_title {\n      z-index: 99;\n      position: fixed;\n      width: 415px;\n      top: 237px; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 19%; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .related_products {\n    position: absolute;\n    top: 68%; }\n  .related_products_list .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  .related_products_to_top .related_products {\n    top: 44%; }\n  .related_products_to_top .product_left .product_title {\n    top: -200px !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 88px !important; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1200px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 32%; }\n  article.product .product_right {\n    margin-left: 36%;\n    position: relative;\n    top: 243px;\n    right: 10%; }\n  article.product .product_left {\n    position: relative;\n    top: 207px; }\n    article.product .product_left .product_title {\n      z-index: 99;\n      position: fixed;\n      width: 415px;\n      top: 237px; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 19%; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .related_products {\n    position: absolute;\n    top: 68%; }\n  .related_products_list .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  .related_products_to_top .related_products {\n    top: 44%; }\n  .related_products_to_top .product_left .product_title {\n    top: -200px !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 88px !important; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1400px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    top: 235px; }\n  article.product .product_right {\n    position: fixed;\n    top: initial;\n    top: 20%;\n    right: 17%; }\n  article.product .product_left {\n    position: fixed;\n    top: initial; }\n    article.product .product_left .product_title {\n      top: 23%; }\n    article.product .product_left .breadcrumb {\n      position: fixed; }\n  article.product .product_right .product_cart_actions {\n    text-align: left;\n    display: inline-block; }\n    article.product .product_right .product_cart_actions .add_cart_btn {\n      text-transform: uppercase;\n      color: #090954; }\n  .related_products_to_top .product_right {\n    top: 0% !important; }\n  .related_products_to_top .product_left .product_title {\n    top: -11% !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 5% !important; }\n  .related_products_to_top .related_products {\n    position: fixed;\n    top: 12%; }\n  .related_products_to_top .content_title2 {\n    margin-left: 1.5%; }\n  .related_products_to_top .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; } }\n/*********************\r\nRETINA (2x RESOLUTION DEVICES)\r\nThis applies to the retina iPhone (4s) and iPad (2,3) along with\r\nother displays with a 2x resolution. You can also create a media\r\nquery for retina AND a certain size if you want. Go Nuts.\r\n*********************/\n/*********************\r\nPRINT STYLESHEET\r\nFeel free to customize this. Remember to add things that won't make\r\nsense to print at the bottom. Things like nav, ads, and forms should\r\nbe set to display none.\r\n*********************/\n/* @media print { */\n/* } */\n"

/***/ }),

/***/ "./src/products/chains/chains.component.ts":
/*!*************************************************!*\
  !*** ./src/products/chains/chains.component.ts ***!
  \*************************************************/
/*! exports provided: ChainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainsComponent", function() { return ChainsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChainsComponent = /** @class */ (function () {
    function ChainsComponent(appService) {
        this.appService = appService;
    }
    ChainsComponent.prototype.ngOnInit = function () {
        if (this.appService.isBrowser) {
            if (window.innerWidth < 1024) {
                this.leftCarouselText = '-195%';
                if (window.innerWidth < 500) {
                    this.leftCarouselText = '-55%';
                    if (window.innerWidth <= 400) {
                        this.leftCarouselText = '-56%';
                    }
                }
            }
            else {
            }
            var width_1 = window.innerWidth;
            window.addEventListener('resize', function (e) {
                e.stopPropagation();
                if (window.innerWidth === width_1) {
                    return;
                }
                width_1 = window.innerWidth;
                window.location.reload();
            });
        }
    };
    ChainsComponent.prototype.ngOnDestroy = function () { };
    ChainsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chains',
            template: __webpack_require__(/*! ./chains.component.html */ "./src/products/chains/chains.component.html"),
            styles: [__webpack_require__(/*! ./chains.component.scss */ "./src/products/chains/chains.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ChainsComponent);
    return ChainsComponent;
}());



/***/ }),

/***/ "./src/products/chains/chains.module.ts":
/*!**********************************************!*\
  !*** ./src/products/chains/chains.module.ts ***!
  \**********************************************/
/*! exports provided: ChainsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainsModule", function() { return ChainsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _productSharedModule_productShared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productSharedModule/productShared.module */ "./src/products/productSharedModule/productShared.module.ts");
/* harmony import */ var _chainsRouting_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chainsRouting.module */ "./src/products/chains/chainsRouting.module.ts");
/* harmony import */ var _chains_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chains.component */ "./src/products/chains/chains.component.ts");
/* harmony import */ var _item_chainsItem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/chainsItem.component */ "./src/products/chains/item/chainsItem.component.ts");
/* harmony import */ var _listing_chainsListing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listing/chainsListing.component */ "./src/products/chains/listing/chainsListing.component.ts");
/* harmony import */ var _chains_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chains.service */ "./src/products/chains/chains.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChainsModule = /** @class */ (function () {
    function ChainsModule() {
    }
    ChainsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chains_component__WEBPACK_IMPORTED_MODULE_5__["ChainsComponent"], _item_chainsItem_component__WEBPACK_IMPORTED_MODULE_6__["ChainsItemComponent"], _listing_chainsListing_component__WEBPACK_IMPORTED_MODULE_7__["ChainsListingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _productSharedModule_productShared_module__WEBPACK_IMPORTED_MODULE_3__["ProductSharedModule"],
                _chainsRouting_module__WEBPACK_IMPORTED_MODULE_4__["ChainsRoutingModule"]
            ],
            providers: [_chains_service__WEBPACK_IMPORTED_MODULE_8__["ChainsService"]]
        })
    ], ChainsModule);
    return ChainsModule;
}());



/***/ }),

/***/ "./src/products/chains/chains.service.ts":
/*!***********************************************!*\
  !*** ./src/products/chains/chains.service.ts ***!
  \***********************************************/
/*! exports provided: ChainsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainsService", function() { return ChainsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/auth/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChainsService = /** @class */ (function () {
    function ChainsService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.carouselItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.characteristicsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.filters = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productFetched = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.Filters = [];
        this.products = [];
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.token = token;
                _this.httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        accept: '*',
                        Authorization: "Bearer " + token
                    })
                };
            }
        });
    }
    ChainsService.prototype.fetchCategories = function () {
        var _this = this;
        this.http.get('/api/categories/', this.httpOptions).subscribe(function (data) {
            var categoriesList = [];
            data.categories.forEach(function (cat) {
                if (cat.id === 1) {
                    var Obj = {
                        catId: 1,
                        id: 'element1',
                        img: cat.image.src,
                        num: 1,
                        txt: 'All'
                    };
                    categoriesList.unshift(Obj);
                }
                else if (cat.parent_category_id === 1) {
                    var Obj = {
                        catId: cat.id,
                        id: "element" + categoriesList.length,
                        img: cat.image.src,
                        num: categoriesList.length,
                        txt: cat.name
                    };
                    categoriesList.push(Obj);
                }
            });
            _this.carouselItems.next(categoriesList);
        });
    };
    ChainsService.prototype.loadProducts = function (category, filter) {
        var _this = this;
        var url = '/api/products?category_id=' + category;
        if (filter != null) {
            url = url + '&alreadyfiltered_specoption_ids=' + filter;
        }
        this.http.get(url + category, this.httpOptions).subscribe(function (data) {
            var filters = [];
            var addFilter = function (obj, el) {
                var counter = true;
                filters.forEach(function (item, index) {
                    if (item[0].Name === el.attribute_name) {
                        filters[index].push(__assign({}, obj));
                        counter = false;
                    }
                });
                if (counter) {
                    filters.push([__assign({}, obj)]);
                    filters[filters.length - 1].selected = { Name: el.attribute_name };
                    filters[filters.length - 1].menuActive = false;
                }
            };
            data.notFilteredItems.forEach(function (item, i) {
                var obj = {
                    CharacteristicId: item.attribute_option_id,
                    Reference: null,
                    Name: item.attribute_option_name,
                    CharacteristicTypeCode: item.attribute_name,
                    disabled: false,
                    link: item.attribute_filterIds
                };
                addFilter(obj, item);
            });
            data.alreadyFilteredItems.forEach(function (item, i) {
                var obj = {
                    CharacteristicId: item.attribute_option_id,
                    Reference: null,
                    Name: item.attribute_option_name,
                    CharacteristicTypeCode: item.attribute_name,
                    disabled: true,
                    link: item.attribute_filterIds
                };
                addFilter(obj, item);
            });
            _this.Filters = filters;
            _this.characteristicsList.next(filters);
            var productsList = [];
            data.products.forEach(function (item) {
                var Obj = {
                    alt: item.name,
                    id: parseInt(item.id, 10),
                    src: item.image.src,
                    title: item.name,
                    price: item.price
                };
                productsList.push(Obj);
            });
            _this.productsList.next(_this.products);
        });
    };
    ChainsService.prototype.getProduct = function (id) {
        var _this = this;
        this.http.get('/api/products?category_id=' + id).subscribe(function (data) {
            _this.product = data;
            _this.productFetched.next(data);
        });
    };
    ChainsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ChainsService);
    return ChainsService;
}());



/***/ }),

/***/ "./src/products/chains/chainsRouting.module.ts":
/*!*****************************************************!*\
  !*** ./src/products/chains/chainsRouting.module.ts ***!
  \*****************************************************/
/*! exports provided: ChainsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainsRoutingModule", function() { return ChainsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chains_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chains.component */ "./src/products/chains/chains.component.ts");
/* harmony import */ var _listing_chainsListing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/chainsListing.component */ "./src/products/chains/listing/chainsListing.component.ts");
/* harmony import */ var _item_chainsItem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/chainsItem.component */ "./src/products/chains/item/chainsItem.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'chains',
        component: _chains_component__WEBPACK_IMPORTED_MODULE_2__["ChainsComponent"],
        children: [
            { path: '', component: _listing_chainsListing_component__WEBPACK_IMPORTED_MODULE_3__["ChainsListingComponent"], pathMatch: 'full' },
            { path: ':id/:name', component: _item_chainsItem_component__WEBPACK_IMPORTED_MODULE_4__["ChainsItemComponent"] }
        ]
    }
];
var ChainsRoutingModule = /** @class */ (function () {
    function ChainsRoutingModule() {
    }
    ChainsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChainsRoutingModule);
    return ChainsRoutingModule;
}());



/***/ }),

/***/ "./src/products/chains/item/chainsItem.component.html":
/*!************************************************************!*\
  !*** ./src/products/chains/item/chainsItem.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-produit\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <app-singleproduct [data]='product'>\r\n    </app-singleproduct>\r\n\r\n    <section class=\"related_products container\">\r\n      <h2 class=\"content_title2\">You may also like...</h2>\r\n\r\n      <ul class=\"related_products_list\">\r\n        <li class=\"related_product_item mobile_grid_6col\" *ngFor=\"let item of relatedProducts | slice:0:4\" (click)=\"toProduit(item.id,item.title)\"\r\n          style=\"cursor: pointer;\">\r\n          <app-listitem [item]='item'></app-listitem>\r\n        </li>\r\n\r\n      </ul>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n\r\n    <section class=\"sharing_section\">\r\n      <ul class=\"sharing_links\">\r\n        <li>\r\n          <a class=\"fb_icon\" href=\"http://www.facebook.com/sharer/sharer.php?u={{url}}&amp;display=popup\" target=\"_blank\" rel=\"noopener\"\r\n            onclick=\"open(this.href, 'social_share', 'height=400,width=600');return false\">\r\n            <img src=\"./../../assets/img/Facebook.svg\" />\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"twitter_icon\" href=\"https://twitter.com/intent/tweet?text={{url}}\" target=\"_blank\" rel=\"noopener\" onclick=\"open(this.href, 'social_share', 'height=400,width=600');return false\">\r\n            <img src=\"./../../assets/img/Twitter.svg\" />\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"pinterest_icon\" href=\"http://pinterest.com/pin/create/button/?url={{url}}&amp;description=\" target=\"_blank\" rel=\"noopener\"\r\n            onclick=\"open(this.href, 'social_share', 'height=400,width=600');return false\">\r\n            <img src=\"./../../assets/img/Pinterest.svg\" />\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </section>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/products/chains/item/chainsItem.component.scss":
/*!************************************************************!*\
  !*** ./src/products/chains/item/chainsItem.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 780px) {\n  .product_right,\n  .breadcrumb,\n  .product_left,\n  .related_products,\n  .product_title,\n  .product_center {\n    position: relative !important; }\n  .product_right {\n    margin-left: 0 !important;\n    right: 0 !important; }\n  .product_center {\n    left: 0px !important;\n    top: 290px !important; }\n  .product_left,\n  .product_right {\n    top: 140px !important; }\n  .product_title {\n    top: 0px !important; }\n  .sharing_section {\n    position: relative;\n    top: 0px !important;\n    left: 0px !important; }\n  .related_products {\n    margin: 124px 0; }\n  /*.related_products_to_top .product_right {\r\n      position: fixed !important;\r\n      top: 71px !important;\r\n\r\n    }\r\n    .related_products_to_top .product_description {\r\n      display: none;\r\n    }\r\n    .related_products_to_top article.product .product_left .breadcrumb {\r\n      position: fixed !important;\r\n      top: 44px !important;\r\n    }\r\n    .sharing_section{\r\n      position: fixed;\r\n      top: 411px;\r\n      left: 46%;\r\n    }\r\n  .related_products_to_top .related_products {\r\n      top: 52px;\r\n      position: fixed;\r\n  }*/ }\n\n@media (min-width: 1400px) {\n  .product_right,\n  .breadcrumb,\n  .product_left,\n  .related_products,\n  .product_title,\n  .product_center {\n    position: relative !important; }\n  .product_right {\n    margin-left: 0 !important;\n    right: 0 !important; }\n  .product_center {\n    left: 0px !important;\n    top: 290px !important; }\n  .product_left,\n  .product_right {\n    top: 140px !important; }\n  .product_title {\n    top: 0px !important; }\n  .sharing_section {\n    position: relative;\n    top: 0px !important;\n    left: 0px !important; }\n  .related_products {\n    margin-top: 124px; }\n  /*\r\n    article.product .product_right {\r\n      max-width: 400px !important;\r\n    }\r\n    */ }\n"

/***/ }),

/***/ "./src/products/chains/item/chainsItem.component.ts":
/*!**********************************************************!*\
  !*** ./src/products/chains/item/chainsItem.component.ts ***!
  \**********************************************************/
/*! exports provided: ChainsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainsItemComponent", function() { return ChainsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chains_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chains.service */ "./src/products/chains/chains.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChainsItemComponent = /** @class */ (function () {
    function ChainsItemComponent(chainsService, route, router, authService) {
        this.chainsService = chainsService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.url = encodeURIComponent(window.location.href);
    }
    ChainsItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.route.params.subscribe(function (value) {
                    _this.productId = value.id;
                    _this.fetchData(value.id);
                });
            }
        });
    };
    ChainsItemComponent.prototype.fetchData = function (id) {
        var _this = this;
        this.chainsService.getProduct(id);
        this.chainsService.loadProducts(3, null);
        this.chainsService.productFetched.subscribe(function (data) {
            _this.product = data;
        });
        this.chainsService.productsList.subscribe(function (value) {
            _this.relatedProducts = value;
        });
    };
    ChainsItemComponent.prototype.toProduit = function (id, name, event) {
        name = name.split(' ');
        var index = name.indexOf('-');
        name.splice(index, 1);
        name = name.join('-');
        this.router.navigate(['chains', id, name]);
    };
    ChainsItemComponent.prototype.ngOnDestroy = function () { };
    ChainsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chainsitem',
            template: __webpack_require__(/*! ./chainsItem.component.html */ "./src/products/chains/item/chainsItem.component.html"),
            styles: [__webpack_require__(/*! ./chainsItem.component.scss */ "./src/products/chains/item/chainsItem.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_chains_service__WEBPACK_IMPORTED_MODULE_1__["ChainsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ChainsItemComponent);
    return ChainsItemComponent;
}());



/***/ }),

/***/ "./src/products/chains/listing/chainsListing.component.html":
/*!******************************************************************!*\
  !*** ./src/products/chains/listing/chainsListing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <app-linefilteranimation [carouselItems]=\"carouselItems\" (loadProducts)='loadProducts($event)'></app-linefilteranimation>\r\n    <section class=\"products_of_category\">\r\n      <app-filter [Filters]='filters' (filterSelected)='fetchFilteredProducts($event)'></app-filter>\r\n      <ul class=\"products_list\">\r\n        <li class=\"product_item mobile_grid_6col tablet_grid_6col desk_grid_3col\" *ngFor=\"let element of products\" (click)=\"toProduit(element.id, element.title,$event)\">\r\n          <app-listitem [item]='element'></app-listitem>\r\n        </li>\r\n      </ul>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/products/chains/listing/chainsListing.component.scss":
/*!******************************************************************!*\
  !*** ./src/products/chains/listing/chainsListing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-carousel {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -o-user-select: none !important;\n  -ms-user-select: none !important;\n      user-select: none !important; }\n\n.disabled a.dropdown-item {\n  color: gray !important;\n  pointer-events: none; }\n\n.dropdown li a {\n  padding: 10px 0 0; }\n\n.croixshow {\n  background-image: none !important; }\n"

/***/ }),

/***/ "./src/products/chains/listing/chainsListing.component.ts":
/*!****************************************************************!*\
  !*** ./src/products/chains/listing/chainsListing.component.ts ***!
  \****************************************************************/
/*! exports provided: ChainsListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainsListingComponent", function() { return ChainsListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chains_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chains.service */ "./src/products/chains/chains.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChainsListingComponent = /** @class */ (function () {
    function ChainsListingComponent(chainsService, router, authService) {
        this.chainsService = chainsService;
        this.router = router;
        this.authService = authService;
        this.elementSelected = [];
    }
    ChainsListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.chainsService.fetchCategories();
                _this.chainsService.carouselItems.subscribe(function (result) {
                    _this.carouselItems = result;
                    console.log(result);
                });
                _this.chainsService.loadProducts(3, null);
                _this.chainsService.filters.subscribe(function (data) {
                    _this.filters = data;
                });
                _this.chainsService.productsList.subscribe(function (value) {
                    _this.products = value;
                });
            }
        });
    };
    ChainsListingComponent.prototype.loadProducts = function (event) {
        this.chainsService.loadProducts(event, null);
    };
    ChainsListingComponent.prototype.fetchFilteredProducts = function (event) {
        this.chainsService.loadProducts(this.category, event.filter);
    };
    ChainsListingComponent.prototype.toProduit = function (id, name, event) {
        name = name.split(' ');
        var index = name.indexOf('-');
        name.splice(index, 1);
        name = name.join('-');
        this.router.navigate(['chains', id, name]);
    };
    ChainsListingComponent.prototype.ngOnDestroy = function () { };
    ChainsListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chainslisting',
            template: __webpack_require__(/*! ./chainsListing.component.html */ "./src/products/chains/listing/chainsListing.component.html"),
            styles: [__webpack_require__(/*! ./chainsListing.component.scss */ "./src/products/chains/listing/chainsListing.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_chains_service__WEBPACK_IMPORTED_MODULE_1__["ChainsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ChainsListingComponent);
    return ChainsListingComponent;
}());



/***/ }),

/***/ "./src/products/charms/Item/charmsItem.component.html":
/*!************************************************************!*\
  !*** ./src/products/charms/Item/charmsItem.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-produit\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <app-singleproduct [data]='product'>\r\n    </app-singleproduct>\r\n\r\n    <section class=\"related_products container\">\r\n      <h2 class=\"content_title2\">You may also like...</h2>\r\n\r\n      <ul class=\"related_products_list\">\r\n        <li class=\"related_product_item mobile_grid_6col\" *ngFor=\"let item of relatedProducts | slice:0:4\" (click)=\"toProduit(item.id,item.title)\"\r\n          style=\"cursor: pointer;\">\r\n          <app-listitem [item]='item'></app-listitem>\r\n        </li>\r\n\r\n      </ul>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n\r\n    <section class=\"sharing_section\">\r\n      <ul class=\"sharing_links\">\r\n        <li>\r\n          <a class=\"fb_icon\" href=\"http://www.facebook.com/sharer/sharer.php?u={{url}}&amp;display=popup\" target=\"_blank\" rel=\"noopener\"\r\n            onclick=\"open(this.href, 'social_share', 'height=400,width=600');return false\">\r\n            <img src=\"./../../assets/img/Facebook.svg\" />\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"twitter_icon\" href=\"https://twitter.com/intent/tweet?text={{url}}\" target=\"_blank\" rel=\"noopener\" onclick=\"open(this.href, 'social_share', 'height=400,width=600');return false\">\r\n            <img src=\"./../../assets/img/Twitter.svg\" />\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"pinterest_icon\" href=\"http://pinterest.com/pin/create/button/?url={{url}}&amp;description=\" target=\"_blank\" rel=\"noopener\"\r\n            onclick=\"open(this.href, 'social_share', 'height=400,width=600');return false\">\r\n            <img src=\"./../../assets/img/Pinterest.svg\" />\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </section>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/products/charms/Item/charmsItem.component.scss":
/*!************************************************************!*\
  !*** ./src/products/charms/Item/charmsItem.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 780px) {\n  .product_right,\n  .breadcrumb,\n  .product_left,\n  .related_products,\n  .product_title,\n  .product_center {\n    position: relative !important; }\n  .product_right {\n    margin-left: 0 !important;\n    right: 0 !important; }\n  .product_center {\n    left: 0px !important;\n    top: 290px !important; }\n  .product_left,\n  .product_right {\n    top: 140px !important; }\n  .product_title {\n    top: 0px !important; }\n  .sharing_section {\n    position: relative;\n    top: 0px !important;\n    left: 0px !important; }\n  .related_products {\n    margin: 124px 0; }\n  /*.related_products_to_top .product_right {\r\n      position: fixed !important;\r\n      top: 71px !important;\r\n\r\n    }\r\n    .related_products_to_top .product_description {\r\n      display: none;\r\n    }\r\n    .related_products_to_top article.product .product_left .breadcrumb {\r\n      position: fixed !important;\r\n      top: 44px !important;\r\n    }\r\n    .sharing_section{\r\n      position: fixed;\r\n      top: 411px;\r\n      left: 46%;\r\n    }\r\n  .related_products_to_top .related_products {\r\n      top: 52px;\r\n      position: fixed;\r\n  }*/ }\n\n@media (min-width: 1400px) {\n  .product_right,\n  .breadcrumb,\n  .product_left,\n  .related_products,\n  .product_title,\n  .product_center {\n    position: relative !important; }\n  .product_right {\n    margin-left: 0 !important;\n    right: 0 !important; }\n  .product_center {\n    left: 0px !important;\n    top: 290px !important; }\n  .product_left,\n  .product_right {\n    top: 140px !important; }\n  .product_title {\n    top: 0px !important; }\n  .sharing_section {\n    position: relative;\n    top: 0px !important;\n    left: 0px !important; }\n  .related_products {\n    margin-top: 124px; }\n  /*\r\n    article.product .product_right {\r\n      max-width: 400px !important;\r\n    }\r\n    */ }\n"

/***/ }),

/***/ "./src/products/charms/Item/charmsItem.component.ts":
/*!**********************************************************!*\
  !*** ./src/products/charms/Item/charmsItem.component.ts ***!
  \**********************************************************/
/*! exports provided: CharmsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharmsItemComponent", function() { return CharmsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _charms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charms.service */ "./src/products/charms/charms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharmsItemComponent = /** @class */ (function () {
    function CharmsItemComponent(charmsService, route, router, authService) {
        this.charmsService = charmsService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.url = encodeURIComponent(window.location.href);
    }
    CharmsItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.route.params.subscribe(function (value) {
                    _this.productId = value.id;
                    _this.fetchData(value.id);
                });
            }
        });
    };
    CharmsItemComponent.prototype.fetchData = function (id) {
        var _this = this;
        this.charmsService.getProduct(id);
        this.charmsService.loadProducts(1, null);
        this.charmsService.productFetched.subscribe(function (data) {
            _this.product = data;
        });
        this.charmsService.productsList.subscribe(function (value) {
            _this.relatedProducts = value;
        });
    };
    CharmsItemComponent.prototype.toProduit = function (id, name, event) {
        name = name.split(' ');
        var index = name.indexOf('-');
        name.splice(index, 1);
        name = name.join('-');
        this.router.navigate(['charms', id, name]);
    };
    CharmsItemComponent.prototype.ngOnDestroy = function () { };
    CharmsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charmsitem',
            template: __webpack_require__(/*! ./charmsItem.component.html */ "./src/products/charms/Item/charmsItem.component.html"),
            styles: [__webpack_require__(/*! ./charmsItem.component.scss */ "./src/products/charms/Item/charmsItem.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_charms_service__WEBPACK_IMPORTED_MODULE_1__["CharmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CharmsItemComponent);
    return CharmsItemComponent;
}());



/***/ }),

/***/ "./src/products/charms/Listing/charmsListing.component.html":
/*!******************************************************************!*\
  !*** ./src/products/charms/Listing/charmsListing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <app-linefilteranimation [carouselItems]=\"carouselItems\" (loadProducts)='loadProducts($event)'></app-linefilteranimation>\r\n    <section class=\"products_of_category\">\r\n      <app-filter [Filters]='filters' category='carouselItems' (filterSelected)='fetchFilteredProducts($event)'></app-filter>\r\n      <ul class=\"products_list\">\r\n        <li class=\"product_item mobile_grid_6col tablet_grid_6col desk_grid_3col\" *ngFor=\"let element of products\" (click)=\"toProduit(element.id, element.title,$event)\">\r\n          <app-listitem [item]='element'></app-listitem>\r\n        </li>\r\n      </ul>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/products/charms/Listing/charmsListing.component.scss":
/*!******************************************************************!*\
  !*** ./src/products/charms/Listing/charmsListing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-carousel {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -o-user-select: none !important;\n  -ms-user-select: none !important;\n      user-select: none !important; }\n\n.disabled a.dropdown-item {\n  color: gray !important;\n  pointer-events: none; }\n\n.dropdown li a {\n  padding: 10px 0 0; }\n\n.croixshow {\n  background-image: none !important; }\n"

/***/ }),

/***/ "./src/products/charms/Listing/charmsListing.component.ts":
/*!****************************************************************!*\
  !*** ./src/products/charms/Listing/charmsListing.component.ts ***!
  \****************************************************************/
/*! exports provided: CharmsListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharmsListingComponent", function() { return CharmsListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _charms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charms.service */ "./src/products/charms/charms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharmsListingComponent = /** @class */ (function () {
    function CharmsListingComponent(charmsService, router, authService) {
        this.charmsService = charmsService;
        this.router = router;
        this.authService = authService;
        this.elementSelected = [];
    }
    CharmsListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.charmsService.fetchCategories();
                _this.charmsService.carouselItems.subscribe(function (result) {
                    _this.carouselItems = result;
                    console.log(result);
                });
                _this.charmsService.loadProducts(1, null);
                _this.charmsService.filters.subscribe(function (data) {
                    _this.filters = data;
                });
                _this.charmsService.productsList.subscribe(function (value) {
                    _this.products = value;
                });
            }
        });
    };
    CharmsListingComponent.prototype.loadProducts = function (event) {
        this.category = event;
        this.charmsService.loadProducts(event, null);
    };
    CharmsListingComponent.prototype.fetchFilteredProducts = function (event) {
        this.charmsService.loadProducts(event.category, event.filter);
    };
    CharmsListingComponent.prototype.toProduit = function (id, name, event) {
        name = name.split(' ');
        var index = name.indexOf('-');
        name.splice(index, 1);
        name = name.join('-');
        this.router.navigate(['charms', id, name]);
    };
    CharmsListingComponent.prototype.ngOnDestroy = function () { };
    CharmsListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charmslisting',
            template: __webpack_require__(/*! ./charmsListing.component.html */ "./src/products/charms/Listing/charmsListing.component.html"),
            styles: [__webpack_require__(/*! ./charmsListing.component.scss */ "./src/products/charms/Listing/charmsListing.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_charms_service__WEBPACK_IMPORTED_MODULE_1__["CharmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CharmsListingComponent);
    return CharmsListingComponent;
}());



/***/ }),

/***/ "./src/products/charms/categoryWise/categoryWiseListing.component.html":
/*!*****************************************************************************!*\
  !*** ./src/products/charms/categoryWise/categoryWiseListing.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <app-linefilteranimation [carouselItems]=\"carouselItems\" (loadProducts)='loadProducts()'></app-linefilteranimation>\r\n    <section class=\"products_of_category\">\r\n      <app-filter [Filters]='filters' category='carouselItems' (filterSelected)='fetchFilteredProducts($event)'></app-filter>\r\n      <ul class=\"products_list\">\r\n        <li class=\"product_item mobile_grid_6col tablet_grid_6col desk_grid_3col\" *ngFor=\"let element of products\" (click)=\"toProduit(element.id, element.title,$event)\">\r\n          <app-listitem [item]='element'></app-listitem>\r\n        </li>\r\n      </ul>\r\n      <div class=\"clear\"></div>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/products/charms/categoryWise/categoryWiseListing.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/products/charms/categoryWise/categoryWiseListing.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-carousel {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -o-user-select: none !important;\n  -ms-user-select: none !important;\n      user-select: none !important; }\n\n.disabled a.dropdown-item {\n  color: gray !important;\n  pointer-events: none; }\n\n.dropdown li a {\n  padding: 10px 0 0; }\n\n.croixshow {\n  background-image: none !important; }\n"

/***/ }),

/***/ "./src/products/charms/categoryWise/categoryWiseListing.component.ts":
/*!***************************************************************************!*\
  !*** ./src/products/charms/categoryWise/categoryWiseListing.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryWiseListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWiseListingComponent", function() { return CategoryWiseListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _charms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charms.service */ "./src/products/charms/charms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/auth/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryWiseListingComponent = /** @class */ (function () {
    function CategoryWiseListingComponent(charmsService, router, route, authService) {
        this.charmsService = charmsService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.elementSelected = [];
        this.characterisitcsId = [];
    }
    CategoryWiseListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.route.params.subscribe(function (value) {
                    _this.catName = value.name;
                    _this.catId = value.id;
                    _this.charmsService.fetchCategories();
                    _this.charmsService.loadProducts(value.id, null);
                });
                _this.charmsService.carouselItems.subscribe(function (result) {
                    var obj = result.find(function (element) {
                        return element.catId === this.catId;
                    });
                    var element = {
                        num: 1,
                        catId: 1,
                        id: 'element1',
                        txt: obj.name,
                        img: obj.img
                    };
                    _this.carouselItems = [__assign({}, element)];
                });
                _this.charmsService.filters.subscribe(function (data) {
                    _this.filters = data;
                });
                _this.charmsService.productsList.subscribe(function (value) {
                    _this.products = value;
                });
            }
        });
    };
    CategoryWiseListingComponent.prototype.loadProducts = function () { };
    CategoryWiseListingComponent.prototype.fetchFilteredProducts = function (event) {
        this.charmsService.loadProducts(event.category, event.filter);
    };
    CategoryWiseListingComponent.prototype.toProduit = function (id, name, event) {
        name = name.split(' ');
        var index = name.indexOf('-');
        name.splice(index, 1);
        name = name.join('-');
        this.router.navigate(['charms', id, name]);
    };
    CategoryWiseListingComponent.prototype.ngOnDestroy = function () { };
    CategoryWiseListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categorywiselisting',
            template: __webpack_require__(/*! ./categoryWiseListing.component.html */ "./src/products/charms/categoryWise/categoryWiseListing.component.html"),
            styles: [__webpack_require__(/*! ./categoryWiseListing.component.scss */ "./src/products/charms/categoryWise/categoryWiseListing.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_charms_service__WEBPACK_IMPORTED_MODULE_1__["CharmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CategoryWiseListingComponent);
    return CategoryWiseListingComponent;
}());



/***/ }),

/***/ "./src/products/charms/charms.component.html":
/*!***************************************************!*\
  !*** ./src/products/charms/charms.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/products/charms/charms.component.scss":
/*!***************************************************!*\
  !*** ./src/products/charms/charms.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/* *** Custom neat grid for cart popup *** */\n/*\r\n  * Bower externals libraries\r\n  */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/* @import \"../../bower_components/neat/app/assets/stylesheets/_neat.scss\"; */\n/* *** Couleurs de texte *** */\n/* *** Backgrounds *** */\n/* *** Border *** */\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n@import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n@import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n@font-face {\n  font-family: BelweSansLight;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n@font-face {\n  font-family: Apercu;\n  src: url(/assets/fonts/Apercu.otf); }\n@font-face {\n  font-family: Belvue;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n/* *** Font Families *** */\n/* *** Restriction de la largeur des images et des iframes (Ex : Vidéos YT) *** */\nimg {\n  max-width: 100%;\n  height: auto;\n  /* Important pour surpasser la taille des images ajoutée par ckeditor */ }\n/* *** Titles *** */\n/* *** Placeholder Color *** */\n/*********************\r\nBASE (MOBILE) SIZE\r\nThis are the mobile styles. It's what people see on their phones. If\r\nyou set a great foundation, you won't need to add too many styles in\r\nthe other stylesheets. Remember, keep it light: Speed is Important.\r\n*********************/\n/* ***** Global styles ***** */\nbutton:focus,\ntextarea:focus,\ninput:focus {\n  outline: none; }\n.form-control:focus {\n  border: 0px;\n  box-shadow: none !important; }\na {\n  cursor: pointer;\n  color: inherit; }\nbody {\n  background-color: #f9f4ef; }\nul,\nli {\n  list-style-image: none;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n.clear {\n  clear: both; }\n.mobile_grid_6col {\n  /* @include span-columns(6); */\n  width: calc(50% - 30px);\n  float: left;\n  margin-left: 20px; }\n/* Titres */\n.page_title {\n  color: #090954;\n  font-family: \"BelweSansLight\", Helvetica, Arial, sans-serif;\n  font-size: 60px;\n  margin: 25px 0; }\n.content_title2 {\n  color: #090954;\n  text-transform: uppercase;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: 0 0 25px; }\n.breadcrumb_container {\n  color: #090954;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 13px; }\n.breadcrumb_container .breadcrumb {\n    padding: 0;\n    margin: 25px 0;\n    text-transform: uppercase;\n    background: none;\n    border-radius: 0; }\n.breadcrumb_container .breadcrumb .breadcrumb_item {\n      display: inline-block;\n      vertical-align: middle; }\n.breadcrumb_container .breadcrumb .breadcrumb_item:before {\n        content: '\\276F';\n        display: inline-block;\n        color: #090954;\n        font-size: 12px;\n        line-height: 0; }\n.breadcrumb_container .breadcrumb .breadcrumb_item:first-child:before {\n        content: normal; }\n.breadcrumb_container .breadcrumb .breadcrumb_item a {\n        color: #090954; }\n/* ***** Cart popup ***** */\n#popup_cart_list.active {\n  opacity: 1.5;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  visibility: visible; }\n#popup_cart_list {\n  position: fixed;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  right: 0;\n  opacity: 0;\n  visibility: hidden;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99999;\n  overflow-y: auto;\n  background-color: #ffffff;\n  padding: 25px 0;\n  box-sizing: border-box;\n  color: #090954;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px; }\n#popup_cart_list #close_cart_list {\n    float: right;\n    margin-right: 35px; }\n#popup_cart_list .cart_list {\n    clear: both;\n    padding-top: 35px; }\n#popup_cart_list .cart_list .cart_list_item {\n      margin-bottom: 30px; }\n#popup_cart_list .cart_list .cart_list_item::after {\n        clear: both;\n        content: \"\";\n        display: block; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_l,\n      #popup_cart_list .cart_list .cart_list_item .cart_product_item_r {\n        width: calc(25% - 43.75px);\n        float: left;\n        margin-left: 35px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_c {\n        width: calc(50% - 52.5px);\n        float: left;\n        margin-left: 35px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_item_r {\n        text-align: right; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_img {\n        width: 60px;\n        height: 60px;\n        text-align: center; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_img img {\n          max-height: 100%;\n          width: auto; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_qty {\n        margin-top: 20px;\n        text-transform: none; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del {\n        margin-top: 20px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del .btn_del_to_cart {\n          color: #090954;\n          font-size: 0px; }\n#popup_cart_list .cart_list .cart_list_item .cart_product_del .btn_del_to_cart span {\n            height: 8px;\n            width: 8px;\n            background-image: url(/assets/img/delete_item.svg); }\n#popup_cart_list #more_btn {\n    color: #090954;\n    display: block;\n    margin: 0 35px 20px;\n    text-align: center;\n    font-weight: bold; }\n#popup_cart_list #send_cart_by_mail {\n    margin: 0 35px;\n    margin-top: 0; }\n#popup_cart_list #send_cart_by_mail .form_item,\n    #popup_cart_list #send_cart_by_mail .form_actions {\n      float: left; }\n#popup_cart_list #send_cart_by_mail .form_item {\n      width: 88%; }\n#popup_cart_list #send_cart_by_mail .form_actions {\n      width: 12%; }\n#popup_cart_list #send_cart_by_mail .form_email::-webkit-input-placeholder {\n      /* WebKit, Blink, Edge */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email:-moz-placeholder {\n      /* Mozilla Firefox 4 to 18 */\n      color: #090954;\n      opacity: 1; }\n#popup_cart_list #send_cart_by_mail .form_email::-moz-placeholder {\n      /* Mozilla Firefox 19+ */\n      color: #090954;\n      opacity: 1; }\n#popup_cart_list #send_cart_by_mail .form_email:-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email:placeholder-shown {\n      /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n      color: #090954; }\n#popup_cart_list #send_cart_by_mail .form_email,\n    #popup_cart_list #send_cart_by_mail .form_submit {\n      display: block;\n      background: none;\n      border: none;\n      border-bottom: 5px solid #f9f4ef;\n      height: 40px;\n      line-height: 40px;\n      width: 100%; }\n#popup_cart_list #send_cart_by_mail .form_submit {\n      text-transform: uppercase;\n      text-align: center;\n      cursor: pointer; }\n#popup_cart_list #popup_cart_suggest {\n    background-color: #f9f4ef;\n    padding: 20px;\n    margin: 40px 25px 0;\n    color: #090954; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_intro {\n      margin-bottom: 35px;\n      text-transform: initial !important;\n      text-align: center; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content {\n      display: -ms-grid;\n      display: grid;\n      -ms-grid-columns: 2fr 1fr;\n          grid-template-columns: 2fr 1fr;\n      grid-gap: 0 30px; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_img {\n        grid-row: span 2; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_price {\n        text-align: right; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_qty {\n        -ms-grid-column: 2;\n        grid-column: 2;\n        text-transform: initial;\n        -ms-grid-row-align: end;\n            align-self: end; }\n#popup_cart_list #popup_cart_suggest .cart_suggest_content .cart_suggest_color select {\n        background: none;\n        border: none;\n        cursor: pointer; }\n#popup_cart_list #popup_cart_suggest .popup_cart_suggest_actions {\n      clear: both;\n      text-align: right;\n      text-transform: uppercase;\n      padding-top: 1.5em; }\n#popup_cart_list #popup_cart_suggest .popup_cart_suggest_actions a {\n        color: #090954;\n        text-decoration: none;\n        border-bottom: 5px solid white; }\n#popup_cart_list #popup_cart_footer {\n    padding: 25px 35px;\n    text-transform: uppercase; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col {\n      /* @include grid-column(4, $custom-grid--cat-popup-footer); */\n      width: calc(50%);\n      float: left;\n      margin-left: 0px;\n      line-height: 80px; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col > span {\n        display: inline-block;\n        line-height: normal;\n        vertical-align: middle; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_c {\n        text-align: center; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_r {\n        text-align: right;\n        width: 30%; }\n#popup_cart_list #popup_cart_footer .popup_cart_footer_col#popup_cart_footer_l {\n        width: 70%; }\n#popup_cart_list .popup_cart_continue {\n    clear: both; }\n#popup_cart_list .popup_cart_continue a {\n      text-decoration: none; }\n#popup_cart_list .popup_cart_continue a:hover {\n        text-decoration: none; }\n.addedToBag {\n  background-color: #ffffff;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1);\n  width: 100%;\n  text-align: center;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #090954;\n  padding: 80px 0;\n  opacity: 0;\n  z-index: 9999999;\n  visibility: hidden; }\n.addedToBag .icon {\n    margin-bottom: 25px; }\n.addedToBag.active {\n  opacity: 1;\n  visibility: visible; }\n/* ***** Product Core ***** */\narticle.product {\n  text-align: center;\n  color: #090954;\n  max-width: 270px;\n  margin: 0 auto;\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 16px; }\narticle.product h1 {\n    line-height: 40px;\n    font-size: 40px;\n    margin: 40px auto 0; }\narticle.product .product_center {\n    padding: 0 0 25px; }\narticle.product .product_center .product_slider_container .product_slider {\n      width: 100%;\n      min-height: 200px; }\narticle.product .product_center .product_slider_container .product_slider img {\n        max-height: 100%;\n        width: auto; }\narticle.product .product_center .product_slider_pager_items {\n      text-align: center; }\narticle.product .product_center .product_slider_pager_items .product_slider_pager_item {\n        display: inline-block;\n        width: 10px;\n        height: 10px;\n        margin: 0 10px;\n        border-radius: 50%;\n        border: 1px solid #090954;\n        cursor: pointer; }\narticle.product .product_center .product_slider_pager_items .product_slider_pager_item.active {\n          background-color: #090954; }\narticle.product .product_right {\n    position: relative; }\narticle.product .product_right .product_description {\n      line-height: 20px;\n      font-family: \"Apercu\", Helvetica, Arial, sans-serif;\n      font-size: 14px; }\narticle.product .product_actions {\n    clear: both; }\narticle.product .product_actions .product_price {\n      margin: 15px 0;\n      letter-spacing: 0.03em; }\narticle.product .product_actions .product_cart_actions {\n      display: inline-block; }\narticle.product .product_actions .product_cart_actions::after {\n        content: '';\n        display: block;\n        border-bottom: 5px solid white; }\narticle.product .product_actions .product_cart_actions .add_cart_btn {\n        text-transform: uppercase;\n        color: #090954;\n        font-size: 16px;\n        letter-spacing: 0.03em;\n        text-decoration: none; }\n/* ***** Related Products & Products List & Search Results ***** */\n.related_products,\n.products_of_category,\n#search_results {\n  font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin-top: 22.5px;\n  clear: both; }\n.related_products .filter_slide_toggle,\n  .products_of_category .filter_slide_toggle,\n  #search_results .filter_slide_toggle {\n    line-height: 45px; }\n.related_products .content_title2,\n  .products_of_category .content_title2,\n  #search_results .content_title2 {\n    text-align: center; }\n.related_products .related_product_item,\n  .related_products .product_item,\n  .products_of_category .related_product_item,\n  .products_of_category .product_item,\n  #search_results .related_product_item,\n  #search_results .product_item {\n    text-transform: uppercase;\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    color: #090954;\n    cursor: pointer; }\n.related_products .related_product_item:nth-child(odd),\n    .related_products .product_item:nth-child(odd),\n    .products_of_category .related_product_item:nth-child(odd),\n    .products_of_category .product_item:nth-child(odd),\n    #search_results .related_product_item:nth-child(odd),\n    #search_results .product_item:nth-child(odd) {\n      clear: left; }\n.related_products .related_product_item > div,\n    .related_products .product_item > div,\n    .products_of_category .related_product_item > div,\n    .products_of_category .product_item > div,\n    #search_results .related_product_item > div,\n    #search_results .product_item > div {\n      margin-left: auto;\n      margin-right: auto; }\n.related_products .related_product_item > div.related_product_img img, .related_products .related_product_item > div.product_img img,\n      .related_products .product_item > div.related_product_img img,\n      .related_products .product_item > div.product_img img,\n      .products_of_category .related_product_item > div.related_product_img img,\n      .products_of_category .related_product_item > div.product_img img,\n      .products_of_category .product_item > div.related_product_img img,\n      .products_of_category .product_item > div.product_img img,\n      #search_results .related_product_item > div.related_product_img img,\n      #search_results .related_product_item > div.product_img img,\n      #search_results .product_item > div.related_product_img img,\n      #search_results .product_item > div.product_img img {\n        width: 200px; }\n.related_products .related_product_item .related_product_price, .related_products .related_product_item.product_price,\n    .related_products .product_item .related_product_price,\n    .related_products .product_item.product_price,\n    .products_of_category .related_product_item .related_product_price,\n    .products_of_category .related_product_item.product_price,\n    .products_of_category .product_item .related_product_price,\n    .products_of_category .product_item.product_price,\n    #search_results .related_product_item .related_product_price,\n    #search_results .related_product_item.product_price,\n    #search_results .product_item .related_product_price,\n    #search_results .product_item.product_price {\n      font-size: 16px;\n      margin-top: 8px; }\n.products_of_category {\n  transition: opacity 300ms;\n  opacity: 1; }\n.products_of_category #products_filters {\n    text-align: center; }\n.products_of_category #products_filters > .filter_slide_toggle ~ .form_selected_ {\n      display: none; }\n.products_of_category #products_filters .form_selected_:last-child {\n      margin-bottom: 22.5px; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select {\n      box-shadow: none;\n      max-width: 200px;\n      background-position: right center;\n      background-image: url(\"/assets/img/elmts/select_arrow.svg\");\n      background-repeat: no-repeat;\n      cursor: pointer;\n      border: none;\n      border-radius: 0;\n      background-color: transparent;\n      font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n      font-size: 14px;\n      letter-spacing: 0.03em;\n      text-transform: uppercase;\n      color: #090954;\n      cursor: pointer;\n      width: 200px;\n      height: 45px;\n      display: block;\n      line-height: 30px;\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      line-height: 45px;\n      margin: 0 auto;\n      padding: 0px;\n      padding-right: 15px; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select > span {\n        transition: border-bottom 0.5s cubic-bezier(0.4, 0, 0, 1);\n        border-bottom: 5px white solid !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select.active > span {\n        border-bottom-color: transparent !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select.active .dropdown {\n        opacity: 1; }\n.products_of_category #products_filters .form_selected_ .dropdown {\n      position: absolute;\n      padding-top: 10px;\n      opacity: 0;\n      width: 160px;\n      transition: 0.5s cubic-bezier(0.4, 0, 0, 1);\n      background: white;\n      border-radius: 20px;\n      border-color: none;\n      max-height: none !important;\n      border: 0px !important;\n      box-shadow: none !important; }\n.products_of_category #products_filters .form_selected_ .dropdown li {\n        position: relative;\n        border-top: 0px !important;\n        border-left: 0px !important;\n        border-right: 0px !important;\n        margin: 0px !important;\n        line-height: 40px !important;\n        height: 45px; }\n.products_of_category #products_filters .form_selected_ .dropdown li:hover {\n        border-bottom: 5px solid #f9f4ef !important; }\n.products_of_category #products_filters .form_selected_ .dropdown li:hover a {\n          background: white !important; }\n.products_of_category #products_filters .form_selected_ .dropdown a {\n        color: #090954;\n        text-align: center;\n        font-family: Belvue;\n        font-size: 14px;\n        border: 0px !important;\n        box-shadow: none !important; }\n.products_of_category #products_filters .form_selected_ .selected {\n      line-height: 0px !important; }\n.products_of_category #products_filters .form_selected_ .wrap-dd-select:after {\n      content: none !important; }\n.products_of_category #products_filters .form_item_select {\n      border-bottom: 5px solid #ffffff;\n      /* padding-right: 15px; */\n      margin: 0 auto 25px;\n      max-width: 200px;\n      background-position: right center;\n      background-image: url(/assets/img/elmts/select_arrow.svg);\n      background-repeat: no-repeat;\n      overflow: hidden;\n      cursor: pointer; }\n.products_of_category #products_filters .form_item_select .form_select * {\n        background: #090954;\n        color: white;\n        padding: 5px; }\n.products_of_category #products_filters .form_item_select .form_select {\n        border: none;\n        background-color: transparent;\n        font-family: \"Belvue\", Helvetica, Arial, sans-serif;\n        font-size: 14px;\n        text-transform: uppercase;\n        color: #090954;\n        cursor: pointer;\n        /* width: 100%; */\n        /* min-width: 100%; */\n        width: 200px;\n        height: 30px;\n        padding-right: 15px;\n        display: block;\n        line-height: 30px;\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none; }\n.products_of_category .product_item {\n    margin-top: 0;\n    margin-bottom: 80px; }\n.products_of_category .product_item .product_img {\n      margin-bottom: 40px; }\n.related_products_to_top {\n  top: 70%;\n  transition-duration: 1s; }\n/* ***** Sharing section ***** */\n.sharing_section {\n  text-align: center;\n  margin: 30px 0 0;\n  clear: both; }\n.sharing_section .sharing_links li {\n    display: inline-block;\n    margin: 0 5px;\n    font-size: 16px; }\n.sharing_section .sharing_links li a {\n      color: #bbd1ea;\n      display: inline-block;\n      width: 26px;\n      height: 26px;\n      line-height: 26px;\n      border: 1px solid #bbd1ea;\n      border-radius: 50%; }\n.sharing_section .sharing_links li a img {\n        fill: #bbd1ea; }\n.sharing_section .sharing_links li a:hover {\n        color: #090954;\n        border: 1px solid #090954; }\n.sharing_section .sharing_links li a:hover img {\n          fill: #090954; }\n/* ***** Carousel ***** */\nbody {\n  overflow-x: hidden; }\n.carousel-category {\n  height: 50vh;\n  background: white;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  cursor: -webkit-grab; }\n.carousel-category-indicators ul {\n  overflow: hidden;\n  width: 100%;\n  white-space: nowrap;\n  position: absolute;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(-150%);\n          transform: translateY(-150%); }\n.carousel-category-indicators ul > li {\n    transition: 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators .item-indicator {\n  max-width: 300px;\n  width: 44%;\n  display: inline-flex;\n  height: 40px;\n  margin: 0px;\n  padding: 0px;\n  justify-content: center;\n  align-items: center; }\n.carousel-category-indicators .item-indicator .round {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white; }\n.carousel-category-indicators .item-indicator .round::before {\n  content: '';\n  position: absolute;\n  top: auto;\n  left: auto;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  margin: -26px;\n  border: 4px solid white;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2);\n  transition: -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators .item-indicator:not(.active) .round:hover::before {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5); }\n.carousel-category-indicators .item-indicator .round.nohover::before {\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25); }\n.carousel-category-indicators .item-indicator .line {\n  height: 1px;\n  background: white;\n  position: absolute;\n  left: 0;\n  right: 0; }\n.carousel-category-indicators-active {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -150%);\n          transform: translate(-50%, -150%);\n  background-color: white;\n  max-width: 300px;\n  width: 44%;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 20px;\n  color: #090954;\n  font-size: 15px;\n  font-family: Belvue;\n  text-transform: uppercase;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden; }\n.carousel-category-indicators-active > div {\n    transition: -webkit-transform 1s cubic-bezier(0.4, 0, 0, 1);\n    transition: transform 1s cubic-bezier(0.4, 0, 0, 1);\n    transition: transform 1s cubic-bezier(0.4, 0, 0, 1), -webkit-transform 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-indicators-active p {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    margin: 0; }\n.carousel-category-indicators-active:hover {\n  background-color: #f9f4ef; }\n.carousel-category-inner {\n  white-space: nowrap;\n  position: relative;\n  height: 100%;\n  transition: 1s cubic-bezier(0.4, 0, 0, 1); }\n.carousel-category-inner .item-carousel {\n  display: inline-block; }\n.carousel-category-inner .item-carousel,\n  .carousel-category-inner .item-carousel img {\n    height: 100%;\n    width: 100%; }\n.carousel-category-inner .item-carousel img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    vertical-align: top; }\n/* ********************************* */\n/* ********** Search Page ********** */\n/* ********************************* */\n.input-search {\n  padding: 10px 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  background-color: #f9f4ef; }\n.input-search .img-loop,\n  .input-search #form_item_site_search {\n    float: left; }\n.input-search .img-loop {\n    border-right: 5px solid #ffffff;\n    width: 20%;\n    line-height: 40px;\n    height: 40px;\n    text-align: center;\n    cursor: pointer; }\n.input-search #form_item_site_search {\n    width: 80%; }\n.input-search .form_text,\n  .input-search .form-control {\n    display: block;\n    background: none;\n    border: none;\n    height: 40px;\n    line-height: 40px;\n    width: 100%;\n    text-transform: uppercase;\n    margin: 0;\n    box-shadow: none;\n    border-radius: 0; }\n.input-search .form_text#site_search_field,\n    .input-search .form_text #site_search_field_value,\n    .input-search .form-control#site_search_field,\n    .input-search .form-control #site_search_field_value {\n      padding: 0 40px 0 15px; }\n.input-search .form_text::-webkit-input-placeholder,\n  .input-search .form-control::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    color: #090954; }\n.input-search .form_text:-moz-placeholder,\n  .input-search .form-control:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    color: #090954;\n    opacity: 1; }\n.input-search .form_text::-moz-placeholder,\n  .input-search .form-control::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    color: #090954;\n    opacity: 1; }\n.input-search .form_text:-ms-input-placeholder,\n  .input-search .form-control:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #090954; }\n.input-search .form_text:placeholder-shown,\n  .input-search .form-control:placeholder-shown {\n    /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n    color: #090954; }\n.input-search #close_search {\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    z-index: 9999; }\n.container-produit .stateFormShippingAddress {\n  position: absolute; }\n.container-produit .dropdownSelectedField {\n  width: 100%;\n  text-align: center; }\n.container-produit .input-text {\n  margin-left: auto;\n  margin-right: auto; }\n.container-produit .dropdownSelectedFieldList.active {\n  margin-left: 42px; }\n.container-produit .dropdownSelectedFieldList div {\n  min-width: 53px; }\n/*********************\r\nLARGER MOBILE DEVICES\r\nThis is for devices like the Galaxy Note or something that's\r\nlarger than an iPhone but smaller than a tablet. Let's call them\r\ntweeners.\r\n*********************/\n/*********************\r\nTABLET & SMALLER LAPTOPS\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n/*********************\r\nDESKTOP\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n@media only screen and (min-width: 770px) {\n  /* ***** Global styles ***** */\n  .tablet_grid_4col {\n    width: calc(33.33333333% - 26.66666667px);\n    float: left;\n    margin-left: 20px; }\n  .tablet_grid_6col {\n    width: calc(50% - 30px);\n    float: left;\n    margin-left: 20px; }\n  /* ***** Product Core ***** */\n  article.product {\n    max-width: none;\n    width: calc(100% - 30px);\n    position: relative;\n    /* Vertical alignment */ }\n    article.product h1 {\n      line-height: 60px;\n      font-size: 60px;\n      margin: 25px 0; }\n    article.product .product_left,\n    article.product .product_center,\n    article.product .product_right {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n    article.product .product_center {\n      padding-top: 35px; }\n      article.product .product_center .product_slider_container .product_slider {\n        min-height: 300px;\n        max-height: 320px; }\n    article.product .product_right {\n      margin-right: 25px;\n      padding-bottom: 0;\n      text-align: right; }\n    article.product .product_actions .product_price {\n      margin: 0 auto;\n      position: absolute;\n      bottom: 70px;\n      left: 0;\n      right: 0;\n      z-index: 500; }\n    article.product .product_actions .product_cart_actions {\n      position: absolute;\n      bottom: 30px;\n      text-align: center;\n      width: 100%; }\n    article.product .product_actions .product_cart_actions_to_top {\n      top: 0px;\n      transition-duration: 1s; }\n  .products_of_category #products_filters .form_selected_ {\n    display: inline-block;\n    margin-right: 5%; }\n    .products_of_category #products_filters .form_selected_ .wrap-dd-select {\n      margin: 0 10px;\n      width: auto; }\n  .products_of_category #products_filters .form_selected_:last-child {\n    margin-right: 0px; }\n  .product .product_left,\n  .related_products > .content_title2 {\n    margin-left: 25px;\n    text-align: left; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .products_of_category #products_filters .form_item_select {\n    display: inline-block;\n    margin: 0 25px;\n    max-width: none; }\n    .products_of_category #products_filters .form_item_select .form_select {\n      width: auto; }\n  #popup_cart_list .popup_cart_continue {\n    width: 52%;\n    margin-left: auto;\n    margin-right: auto; }\n  .addedToBag {\n    left: auto;\n    right: 0;\n    width: 280px;\n    padding: 40px 0; }\n  /* ***** Carousel ***** */\n  .carousel-category {\n    height: 50vh;\n    background: white;\n    overflow-y: hidden;\n    overflow-x: hidden; }\n    .carousel-category .carousel-category-inner,\n    .carousel-category .item-carousel {\n      height: inherit; }\n  .carousel-category-indicators .item-indicator {\n    width: 20%; }\n    .carousel-category-indicators .item-indicator .line {\n      width: 100%; }\n  .carousel-category-indicators-active {\n    width: 20%; }\n  .carousel-category-inner .item-carousel img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    padding-top: 60px; }\n  /* ********************************* */\n  /* ********** Search Page ********** */\n  /* ********************************* */\n  .input-search .img-loop {\n    width: 10%; }\n  .input-search #form_item_site_search {\n    width: 90%; }\n  .container-produit .stateFormShippingAddress {\n    position: absolute; }\n  .container-produit .dropdownSelectedField {\n    width: 100%;\n    text-align: right; }\n  .container-produit .dropdownSelectedFieldList {\n    margin-left: -12px; }\n  .container-produit .dropdownSelectedFieldList.active {\n    margin-left: 91px; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1025px) {\n  /* ***** Global styles ***** */\n  .desk_grid_4col {\n    width: calc(33.33333333% - 26.66666667px);\n    float: left;\n    margin-left: 20px; }\n  .desk_grid_3col {\n    width: calc(25% - 25px);\n    float: left;\n    margin-left: 20px; }\n  /* ***** Cart popup ***** */\n  #popup_cart_list {\n    width: 340px; }\n  .addedToBag {\n    width: 400px;\n    padding: 80px 0; }\n  /* ***** Product Core ***** */\n  article.product .product_right,\n  article.product .product_center,\n  article.product .product_left {\n    transition: 1s; }\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 42%; }\n    article.product .product_center .product_slider_item {\n      max-width: 350px;\n      margin-left: auto;\n      margin-right: auto; }\n  article.product .product_right {\n    margin-left: 55%;\n    position: relative;\n    top: initial;\n    right: -28%;\n    -webkit-transform: initial;\n            transform: initial;\n    top: 28%; }\n  article.product .product_left {\n    position: relative;\n    top: initial;\n    -webkit-transform: initial;\n            transform: initial; }\n    article.product .product_left .product_title {\n      position: relative;\n      top: 30%;\n      -webkit-transform: initial;\n              transform: initial;\n      transition: 1s; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 28%;\n      -webkit-transform: initial;\n              transform: initial;\n      transition: 1s; }\n  article.product .product_right {\n    margin-left: initial; }\n    article.product .product_right .product_price {\n      /* bottom: auto;\r\n\t\t\tposition: static; */\n      text-align: left;\n      display: inline-block;\n      width: 23%; }\n    article.product .product_right .product_description {\n      text-align: right;\n      margin: 25px 0; }\n    article.product .product_right .product_cart_actions {\n      display: inline-block; }\n      article.product .product_right .product_cart_actions::after {\n        content: '';\n        display: block;\n        border-bottom: 5px solid white;\n        -webkit-transform: scaleX(0);\n                transform: scaleX(0);\n        -webkit-transform-origin: left;\n                transform-origin: left;\n        transition: -webkit-transform 0.5s;\n        transition: transform 0.5s;\n        transition: transform 0.5s, -webkit-transform 0.5s; }\n      article.product .product_right .product_cart_actions:hover::after {\n        -webkit-transform: none;\n                transform: none; }\n      article.product .product_right .product_cart_actions .add_cart_btn {\n        text-transform: uppercase;\n        color: #090954;\n        text-decoration: none; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .products_of_category #products_filters .form_item,\n  #search_results #products_filters .form_item {\n    margin: 0 50px; }\n  .products_of_category .product_item:nth-child(odd),\n  #search_results .product_item:nth-child(odd) {\n    clear: none; }\n  .products_of_category .product_item:nth-child(4n-7),\n  #search_results .product_item:nth-child(4n-7) {\n    clear: left; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    margin-bottom: 40px; }\n  /* ***** Carousel ***** */\n  body {\n    overflow-x: hidden; }\n  .related_products {\n    position: relative;\n    transition: 1s; }\n  .related_products_list li:nth-child(3) {\n    margin-left: calc(100% / 3 - 6.66667px);\n    clear: initial !important; }\n  .related_products_list li:nth-child(4) {\n    clear: initial !important; }\n  .related_products .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  /* ********************************* */\n  /* ********** Search Page ********** */\n  /* ********************************* */\n  .input-search .img-loop {\n    width: 8%; }\n  .input-search #form_item_site_search {\n    width: 92%; }\n  /*Select*/\n  .products_of_category #products_filters .form_selected_ .wrap-dd-select {\n    min-width: none; }\n  .wrap-dd-select .dropdown {\n    -webkit-transform: translate(-2rem, 0.5rem);\n            transform: translate(-2rem, 0.5rem); }\n  .products_of_category #products_filters .form_selected_ .dropdown li {\n    line-height: 14px; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1200px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 32%; }\n  article.product .product_right {\n    margin-left: 36%;\n    position: relative;\n    top: 243px;\n    right: 10%; }\n  article.product .product_left {\n    position: relative;\n    top: 207px; }\n    article.product .product_left .product_title {\n      z-index: 99;\n      position: fixed;\n      width: 415px;\n      top: 237px; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 19%; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .related_products {\n    position: absolute;\n    top: 68%; }\n  .related_products_list .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  .related_products_to_top .related_products {\n    top: 44%; }\n  .related_products_to_top .product_left .product_title {\n    top: -200px !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 88px !important; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1200px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    position: fixed;\n    left: 33%;\n    top: 32%; }\n  article.product .product_right {\n    margin-left: 36%;\n    position: relative;\n    top: 243px;\n    right: 10%; }\n  article.product .product_left {\n    position: relative;\n    top: 207px; }\n    article.product .product_left .product_title {\n      z-index: 99;\n      position: fixed;\n      width: 415px;\n      top: 237px; }\n    article.product .product_left .breadcrumb {\n      position: relative;\n      top: 19%; }\n  /* ***** Sharing section ***** */\n  .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; }\n  /* ***** Related Products & Products List & Search Results ***** */\n  .related_products {\n    position: absolute;\n    top: 68%; }\n  .related_products_list .mobile_grid_6col {\n    width: calc(17% - 30px);\n    float: left;\n    margin-left: 20px; }\n  .related_products_to_top .related_products {\n    top: 44%; }\n  .related_products_to_top .product_left .product_title {\n    top: -200px !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 88px !important; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1400px) {\n  /* ***** Product Core ***** */\n  article.product .product_center {\n    top: 235px; }\n  article.product .product_right {\n    position: fixed;\n    top: initial;\n    top: 20%;\n    right: 17%; }\n  article.product .product_left {\n    position: fixed;\n    top: initial; }\n    article.product .product_left .product_title {\n      top: 23%; }\n    article.product .product_left .breadcrumb {\n      position: fixed; }\n  article.product .product_right .product_cart_actions {\n    text-align: left;\n    display: inline-block; }\n    article.product .product_right .product_cart_actions .add_cart_btn {\n      text-transform: uppercase;\n      color: #090954; }\n  .related_products_to_top .product_right {\n    top: 0% !important; }\n  .related_products_to_top .product_left .product_title {\n    top: -11% !important; }\n  .related_products_to_top .product_left .breadcrumb {\n    top: 5% !important; }\n  .related_products_to_top .related_products {\n    position: fixed;\n    top: 12%; }\n  .related_products_to_top .content_title2 {\n    margin-left: 1.5%; }\n  .related_products_to_top .sharing_section {\n    position: fixed;\n    top: 460px;\n    left: 47%; } }\n/*********************\r\nRETINA (2x RESOLUTION DEVICES)\r\nThis applies to the retina iPhone (4s) and iPad (2,3) along with\r\nother displays with a 2x resolution. You can also create a media\r\nquery for retina AND a certain size if you want. Go Nuts.\r\n*********************/\n/*********************\r\nPRINT STYLESHEET\r\nFeel free to customize this. Remember to add things that won't make\r\nsense to print at the bottom. Things like nav, ads, and forms should\r\nbe set to display none.\r\n*********************/\n/* @media print { */\n/* } */\n"

/***/ }),

/***/ "./src/products/charms/charms.component.ts":
/*!*************************************************!*\
  !*** ./src/products/charms/charms.component.ts ***!
  \*************************************************/
/*! exports provided: CharmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharmsComponent", function() { return CharmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharmsComponent = /** @class */ (function () {
    function CharmsComponent(appService) {
        this.appService = appService;
    }
    CharmsComponent.prototype.ngOnInit = function () {
        if (this.appService.isBrowser) {
            if (window.innerWidth < 1024) {
                this.leftCarouselText = '-195%';
                if (window.innerWidth < 500) {
                    this.leftCarouselText = '-55%';
                    if (window.innerWidth <= 400) {
                        this.leftCarouselText = '-56%';
                    }
                }
            }
            else {
            }
            var width_1 = window.innerWidth;
            window.addEventListener('resize', function (e) {
                e.stopPropagation();
                if (window.innerWidth === width_1) {
                    return;
                }
                width_1 = window.innerWidth;
                window.location.reload();
            });
        }
    };
    CharmsComponent.prototype.ngOnDestroy = function () { };
    CharmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charms',
            template: __webpack_require__(/*! ./charms.component.html */ "./src/products/charms/charms.component.html"),
            styles: [__webpack_require__(/*! ./charms.component.scss */ "./src/products/charms/charms.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], CharmsComponent);
    return CharmsComponent;
}());



/***/ }),

/***/ "./src/products/charms/charms.module.ts":
/*!**********************************************!*\
  !*** ./src/products/charms/charms.module.ts ***!
  \**********************************************/
/*! exports provided: CharmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharmsModule", function() { return CharmsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _productSharedModule_productShared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productSharedModule/productShared.module */ "./src/products/productSharedModule/productShared.module.ts");
/* harmony import */ var _charms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charms.component */ "./src/products/charms/charms.component.ts");
/* harmony import */ var _Item_charmsItem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item/charmsItem.component */ "./src/products/charms/Item/charmsItem.component.ts");
/* harmony import */ var _Listing_charmsListing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Listing/charmsListing.component */ "./src/products/charms/Listing/charmsListing.component.ts");
/* harmony import */ var _charmsRouting_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charmsRouting.module */ "./src/products/charms/charmsRouting.module.ts");
/* harmony import */ var _charms_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charms.service */ "./src/products/charms/charms.service.ts");
/* harmony import */ var _categoryWise_categoryWiseListing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categoryWise/categoryWiseListing.component */ "./src/products/charms/categoryWise/categoryWiseListing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CharmsModule = /** @class */ (function () {
    function CharmsModule() {
    }
    CharmsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _charms_component__WEBPACK_IMPORTED_MODULE_4__["CharmsComponent"],
                _Item_charmsItem_component__WEBPACK_IMPORTED_MODULE_5__["CharmsItemComponent"],
                _Listing_charmsListing_component__WEBPACK_IMPORTED_MODULE_6__["CharmsListingComponent"],
                _categoryWise_categoryWiseListing_component__WEBPACK_IMPORTED_MODULE_9__["CategoryWiseListingComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _productSharedModule_productShared_module__WEBPACK_IMPORTED_MODULE_3__["ProductSharedModule"],
                _charmsRouting_module__WEBPACK_IMPORTED_MODULE_7__["CharmsRoutingModule"]
            ],
            providers: [_charms_service__WEBPACK_IMPORTED_MODULE_8__["CharmsService"]]
        })
    ], CharmsModule);
    return CharmsModule;
}());



/***/ }),

/***/ "./src/products/charms/charms.service.ts":
/*!***********************************************!*\
  !*** ./src/products/charms/charms.service.ts ***!
  \***********************************************/
/*! exports provided: CharmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharmsService", function() { return CharmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/auth/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CharmsService = /** @class */ (function () {
    function CharmsService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.carouselItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.characteristicsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.filters = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.productFetched = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.Filters = [];
        this.products = [];
        this.authService.token.subscribe(function (token) {
            if (token !== 'NOTSET') {
                _this.token = token;
                _this.httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        accept: '*',
                        Authorization: "Bearer " + token
                    })
                };
            }
        });
    }
    CharmsService.prototype.fetchCategories = function () {
        var _this = this;
        this.http.get('/api/categories/', this.httpOptions).subscribe(function (data) {
            var categoriesList = [];
            data.categories.forEach(function (cat) {
                if (cat.id === 1) {
                    var Obj = {
                        catId: 1,
                        id: 'element1',
                        img: cat.image.src,
                        num: 1,
                        txt: 'All'
                    };
                    categoriesList.unshift(Obj);
                }
                else if (cat.parent_category_id === 3) {
                    var Obj = {
                        catId: cat.id,
                        id: "element" + categoriesList.length,
                        img: cat.image.src,
                        num: categoriesList.length,
                        txt: cat.name
                    };
                    categoriesList.push(Obj);
                }
            });
            _this.carouselItems.next(categoriesList);
        });
    };
    CharmsService.prototype.loadProducts = function (category, filter) {
        var _this = this;
        var url = '/api/products?category_id=' + category;
        if (filter != null) {
            url = url + '&alreadyfiltered_specoption_ids=' + filter;
        }
        this.http.get(url + category, this.httpOptions).subscribe(function (data) {
            var filters = [];
            var addFilter = function (obj, el) {
                var counter = true;
                filters.forEach(function (item, index) {
                    if (item[0].Name === el.attribute_name) {
                        filters[index].push(__assign({}, obj));
                        counter = false;
                    }
                });
                if (counter) {
                    filters.push([__assign({}, obj)]);
                    filters[filters.length - 1].selected = { Name: el.attribute_name };
                    filters[filters.length - 1].menuActive = false;
                }
            };
            data.notFilteredItems.forEach(function (item, i) {
                var obj = {
                    CharacteristicId: item.attribute_option_id,
                    Reference: null,
                    Name: item.attribute_option_name,
                    CharacteristicTypeCode: item.attribute_name,
                    disabled: false,
                    link: item.attribute_filterIds
                };
                addFilter(obj, item);
            });
            data.alreadyFilteredItems.forEach(function (item, i) {
                var obj = {
                    CharacteristicId: item.attribute_option_id,
                    Reference: null,
                    Name: item.attribute_option_name,
                    CharacteristicTypeCode: item.attribute_name,
                    disabled: true,
                    link: item.attribute_filterIds
                };
                addFilter(obj, item);
            });
            _this.Filters = filters;
            _this.characteristicsList.next(filters);
            var productsList = [];
            data.products.forEach(function (item) {
                var Obj = {
                    alt: item.name,
                    id: parseInt(item.id, 10),
                    src: item.image.src,
                    title: item.name,
                    price: item.price
                };
                productsList.push(Obj);
            });
            _this.productsList.next(_this.products);
        });
    };
    CharmsService.prototype.getProduct = function (id) {
        var _this = this;
        this.http.get('/api/products?category_id=' + id).subscribe(function (data) {
            _this.product = data;
            _this.productFetched.next(data);
        });
    };
    CharmsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CharmsService);
    return CharmsService;
}());



/***/ }),

/***/ "./src/products/charms/charmsRouting.module.ts":
/*!*****************************************************!*\
  !*** ./src/products/charms/charmsRouting.module.ts ***!
  \*****************************************************/
/*! exports provided: CharmsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharmsRoutingModule", function() { return CharmsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charms.component */ "./src/products/charms/charms.component.ts");
/* harmony import */ var _Listing_charmsListing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Listing/charmsListing.component */ "./src/products/charms/Listing/charmsListing.component.ts");
/* harmony import */ var _Item_charmsItem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item/charmsItem.component */ "./src/products/charms/Item/charmsItem.component.ts");
/* harmony import */ var _categoryWise_categoryWiseListing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoryWise/categoryWiseListing.component */ "./src/products/charms/categoryWise/categoryWiseListing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'charms',
        component: _charms_component__WEBPACK_IMPORTED_MODULE_2__["CharmsComponent"],
        children: [
            { path: '', component: _Listing_charmsListing_component__WEBPACK_IMPORTED_MODULE_3__["CharmsListingComponent"], pathMatch: 'full' },
            { path: ':id/:name', component: _Item_charmsItem_component__WEBPACK_IMPORTED_MODULE_4__["CharmsItemComponent"] },
            { path: 'category/:name/:id', component: _categoryWise_categoryWiseListing_component__WEBPACK_IMPORTED_MODULE_5__["CategoryWiseListingComponent"] }
        ]
    }
];
var CharmsRoutingModule = /** @class */ (function () {
    function CharmsRoutingModule() {
    }
    CharmsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CharmsRoutingModule);
    return CharmsRoutingModule;
}());



/***/ }),

/***/ "./src/products/productSharedModule/listing/filters/filter.component.html":
/*!********************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/filters/filter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"products_filters\" action=\"\" [hidden]=\"!filtreShow\" style= 'background: transparent;'>\r\n  <div (click)=\"hideFilters()\" class=\"filter_slide_toggle\" *ngIf=\"sliderVersionTabletMobile\">\r\n    <a>+ Filters</a>\r\n  </div>\r\n  <div class=\"form_selected_\" *ngFor=\"let filter of Filters; index as i\">\r\n      <div *ngIf='i===0 && category' [ngClass]=\"{'croixshow': category.Selected, 'disabled': dropdownDisabled, 'active': category.menuActive}\" class=\"wrap-dd-select\" tabindex=\"0\" (clickOutside)='category.menuActive = false' style=\"outline: none;\">\r\n          <span class=\"selected\" *ngIf='category.Selected' (click)='unSelectCategory()'>{{category.SelectedName + ' x'}}</span>\r\n          <span class=\"selected\" *ngIf='!category.Selected' (click)='selectCategory()'>Theme</span>\r\n          <ul class=\"dropdown\" *ngIf='category.menuActive'>\r\n              <li *ngFor=\"let item of category\" [ngClass]=\"{'disabled': item.disabled, 'divider': (item.divider && !item['Name']), 'divider-label': (item.divider && item['Name'])}\" (click)=\"item.disabled ? '' : selectCatItem(item);\">\r\n                  <a class=\"dropdown-item\" *ngIf=\"!item.divider\">\r\n                      {{item['Name']}}\r\n                    </a>\r\n                    <span *ngIf=\"item.divider\">\r\n                      {{item['Name']}}\r\n                    </span>\r\n              </li>\r\n          </ul>\r\n        </div>\r\n    <div *ngIf='i>0' [ngClass]=\"{'croixshow': filterSelected[i], 'disabled': dropdownDisabled, 'active': filter.menuActive}\" class=\"wrap-dd-select\" tabindex=\"0\" (clickOutside)='filter.menuActive ? closeAllFilters(i): \"\";' style=\"outline: none;\">\r\n      <span class=\"selected\" *ngIf='filterSelected[i]' (click)='unSelectFilter(i)'>{{filterSelected[i] + ' x'}}</span>\r\n      <span class=\"selected\" *ngIf='!filterSelected[i]' (click)='selectFilter(i)'>{{filter['selected']['Name']}}</span>\r\n      <ul class=\"dropdown\" *ngIf='filter.menuActive'>\r\n          <li *ngFor=\"let item of filter\" [ngClass]=\"{'disabled': item.disabled, 'divider': (item.divider && !item['Name']), 'divider-label': (item.divider && item['Name'])}\"\r\n            (click)=\"item.disabled ? '' : selectItem(item, i);\">\r\n            <a class=\"dropdown-item\" *ngIf=\"!item.divider\">\r\n              {{item['Name']}}\r\n            </a>\r\n            <span *ngIf=\"item.divider\">\r\n              {{item['Name']}}\r\n            </span>\r\n          </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/products/productSharedModule/listing/filters/filter.component.scss":
/*!********************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/filters/filter.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  outline: 0;\n  outline: none; }\n"

/***/ }),

/***/ "./src/products/productSharedModule/listing/filters/filter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/filters/filter.component.ts ***!
  \******************************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/app.service */ "./src/app/app.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterComponent = /** @class */ (function () {
    function FilterComponent(appService) {
        this.appService = appService;
        this.filtreShow = true;
        this.menuActive = false;
        this.selectedFilters = [];
        this.FilterSelected = {};
        this.categorySelect = 1;
        this.filterSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var formSelected = Array.from(document.querySelectorAll('.form_selected_'));
            formSelected.forEach(function (button) {
                if (button.getElementsByClassName('dropdown')[0] !== undefined) {
                    var wrapElem = button.getElementsByClassName('wrap-dd-select')[0];
                    var widthButton = 0;
                    if (wrapElem instanceof HTMLElement) {
                        widthButton = wrapElem.offsetWidth;
                    }
                    var widthDropDown = 160;
                    var calcul = -1 * ((widthDropDown - widthButton) / 1.6);
                    var dropdownElem = button.getElementsByClassName('dropdown')[0];
                    if (dropdownElem instanceof HTMLElement) {
                        dropdownElem.style.marginLeft = calcul + 'px';
                    }
                }
            });
        }, 2000);
        this.appService.changeInHome.subscribe(function (value) {
            if (value === 'change') {
                _this.sliderVersionTabletMobile = _this.appService.sliderVersionTabletMobile;
            }
        });
    };
    Object.defineProperty(FilterComponent.prototype, "Filters", {
        get: function () {
            return this._Filters;
        },
        set: function (Filters) {
            Filters.unshift({});
            this._Filters = Filters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (category) {
            var a;
            category.forEach(function (item) {
                var obj = {
                    CharacteristicId: item.catId,
                    Reference: null,
                    Name: item.txt,
                    CharacteristicTypeCode: null,
                    disabled: false
                };
                a.push(__assign({}, obj));
            });
            a.menuActive = false;
            a.selected = false;
            a.SelectedName = '';
            this._category = a;
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.selectCategory = function () {
        this.category.menuActive = !this.category.menuActive;
    };
    FilterComponent.prototype.unSelectCategory = function () {
        this.categorySelect = 1;
        this.category.menuActive = !this.category.menuActive;
        var item = {
            filter: this.filterSelect,
            category: 1
        };
        this.filterSelected.emit(item);
    };
    FilterComponent.prototype.selectCatItem = function (item) {
        this.categorySelect = item.CharacteristicId;
        this.category.selected = true;
        this.category.selectedName = item['Name'];
        var obj = {
            filter: this.filterSelect,
            category: item.CharacteristicId
        };
        this.filterSelected.emit(obj);
    };
    FilterComponent.prototype.selectFilter = function (i) {
        var _this = this;
        this.Filters.forEach(function (filter, index) {
            if (index === i) {
                _this.Filters[index].menuActive = !_this.Filters[index].menuActive;
            }
            else {
                _this.Filters[index].menuActive = false;
            }
        });
    };
    FilterComponent.prototype.unSelectFilter = function (ID) {
        var _this = this;
        delete this.filterSelected[ID];
        this.Filters[ID].forEach(function (filter) {
            var i = -1;
            var link;
            _this.selectedFilters.forEach(function (item, index) {
                if (filter.CharacteristicId === item.CharacteristicId) {
                    i = index;
                    link = item.link;
                }
                else {
                    i = -1;
                }
            });
            if (i !== -1) {
                _this.selectedFilters.splice(i, 1);
                var item = { filter: link, category: _this.categorySelect };
                _this.filterSelected.emit(item);
            }
        });
    };
    FilterComponent.prototype.closeAllFilters = function (index) {
        this.Filters[index].menuActive = false;
    };
    FilterComponent.prototype.selectItem = function (item, filterType) {
        item.add = true;
        this.selectedFilters.push(item);
        this.filterSelected[filterType] = item.Name;
        this.filterSelect = item.link;
        var obj = {
            filter: this.filterSelect,
            category: this.categorySelect
        };
        this.filterSelected.emit(obj);
    };
    // hideFilters() {
    //   $('#products_filters>.form_selected_').slideToggle();
    //   $('#products_filters>.filter_slide_toggle').text(function(index, text) {
    //     text = text.trim();
    //     return (text.charAt(0) === '-' ? '+' : '-') + text.substr(1);
    //   });
    // }
    FilterComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "filterSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FilterComponent.prototype, "Filters", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FilterComponent.prototype, "category", null);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/products/productSharedModule/listing/filters/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/products/productSharedModule/listing/filters/filter.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-category\">\r\n  <div class=\"carousel-category-inner\" [style]=\"'left :' + leftImage + '%;'\">\r\n    <div class=\"item-carousel\" *ngFor='let item of carouselItems' (swipeleft)=\"swipeLeft(item.id,item.num)\" (swiperight)=\"swipeRight(item.id,item.num)\">\r\n      <img [src]=\"item.img\" class=\"imgCarousel\" draggable=\"false\" [alt]=\"item.txt\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"carousel-category-indicators\">\r\n    <ul>\r\n      <li class=\"item-indicator\" [ngClass]=\"{'active' : activeMenu === item.id}\" *ngFor=' let item of carouselItems' [id]=\"item.id + 'Indicator'\">\r\n        <a (click)=\"setActive(item.id,$event,item.catId)\">\r\n          <div class=\"round\" [id]=\"item.id\"></div>\r\n        </a>\r\n        <div class=\"line\"></div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"carousel-category-indicators-active\" id=\"carousel-category-indicators-active\">\r\n    <div>\r\n      <p [ngClass]=\"{'active' : activeMenu == item.num}\" *ngFor='let item of carouselItems' [id]=\"item.id + 'IndicatorText'\">{{item.txt}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LineFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineFilterComponent", function() { return LineFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineFilterComponent = /** @class */ (function () {
    function LineFilterComponent(activeRoute, appService) {
        this.activeRoute = activeRoute;
        this.appService = appService;
        this.loadProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filtreShow = true;
        this.leftImage = 0;
        this.activeMenu = 1;
        this.elementActiveText = 'fashion';
        this.lien = '';
        this.lastElementLeft = '';
        this.countElementsLeft = 0;
        this.distanceSlider = 100;
    }
    LineFilterComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(LineFilterComponent.prototype, "carouselItems", {
        get: function () {
            return this._carouselItems;
        },
        set: function (carouselItems) {
            this._carouselItems = carouselItems;
            if (this.appService.isBrowser) {
                var self_1 = this;
                if (carouselItems != null) {
                    setTimeout(function () {
                        var widthButton = document.getElementById('element1Indicator')
                            ? document.getElementById('element1Indicator').offsetWidth
                            : undefined;
                        self_1.leftCarouselIndicator = window.innerWidth / 2 - widthButton / 2;
                        document.getElementById('element1Indicator')
                            ? (document.getElementById('element1Indicator').style.marginLeft =
                                window.innerWidth / 2 - widthButton / 2 + 'px')
                            : '';
                        var carouselCategoryElement = document.getElementById('carousel-category-indicators-active').firstElementChild;
                        if (carouselCategoryElement instanceof HTMLElement) {
                            carouselCategoryElement.style.transform = 'none';
                        }
                    }, 500);
                    var queryParams_1 = this.activeRoute.snapshot.queryParams;
                    setTimeout(function () {
                        self_1.getDistanceIndicator();
                        self_1.setPositionIndicators();
                        self_1.setOrderIndicators();
                        for (var key in self_1.carouselItems) {
                            /* **** Filtre url ***** */
                            if (queryParams_1.filter !== undefined) {
                                var filtreSelection = queryParams_1.filter;
                                if (filtreSelection === self_1.carouselItems[key].txt) {
                                    var el = document.getElementById(self_1.carouselItems[key].id)
                                        .parentElement;
                                    el.click();
                                }
                            }
                        }
                    }, 1500);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    LineFilterComponent.prototype.swipeLeft = function (id, num) {
        if (this.appService.isBrowser) {
            if (num === this.carouselItems.length) {
                num = 2;
                this.swipeRight(id, num);
            }
            else {
                setTimeout(function () {
                    var el = document.getElementById('element' + (num + 1))
                        .parentElement;
                    el.click();
                }, 0);
            }
        }
    };
    LineFilterComponent.prototype.swipeRight = function (id, num) {
        if (this.appService.isBrowser) {
            if (num === 1) {
                num = this.carouselItems.length - 1;
                this.swipeLeft(id, num);
            }
            else {
                setTimeout(function () {
                    var el = document.getElementById('element' + (num - 1))
                        .parentElement;
                    el.click();
                }, 10);
            }
        }
    };
    LineFilterComponent.prototype.getOffset = function (el) {
        if (this.appService.isBrowser) {
            el = el.getBoundingClientRect();
            return {
                left: el.left + window.scrollX,
                top: el.top + window.scrollY
            };
        }
    };
    LineFilterComponent.prototype.getDistanceIndicator = function () {
        if (this.appService.isBrowser) {
            this.distance = document.getElementById('element1Indicator')
                ? document.getElementById('element1Indicator').offsetWidth
                : undefined;
        }
    };
    LineFilterComponent.prototype.setPositionIndicators = function () {
        var _this = this;
        if (this.appService.isBrowser) {
            this.countElementsLeft = 0;
            var widthWindow_1 = window.innerWidth;
            this.carouselItems.forEach(function (value, key) {
                var element = document.getElementById(value.id);
                if (element.offsetLeft <= widthWindow_1 / 2) {
                    element.setAttribute('position', 'left');
                    _this.countElementsLeft++;
                }
                else {
                    element.setAttribute('position', 'right');
                }
            });
        }
    };
    LineFilterComponent.prototype.setOrderIndicators = function () {
        if (this.appService.isBrowser) {
            var widthWindow = window.innerWidth;
            var iLeft_1 = this.countElementsLeft - 1;
            var iRight_1 = 1;
            this.carouselItems.forEach(function (value, key) {
                var element = document.getElementById(value.id);
                if (element.getAttribute('position') === 'left') {
                    element.setAttribute('order', '' + iLeft_1);
                    iLeft_1--;
                }
                if (element.getAttribute('position') === 'right') {
                    element.setAttribute('order', '' + iRight_1);
                    iRight_1++;
                }
            });
        }
    };
    LineFilterComponent.prototype.setActive = function (carouselItem, event, catId) {
        if (this.appService.isBrowser) {
            var widthWindow = window.innerWidth;
            this.loadProducts.emit(catId);
            this.activeMenu = carouselItem;
            this.elementActiveText = carouselItem;
            var click = event.screenX;
            var ElementActive = document.getElementById(carouselItem);
            var position = ElementActive.getAttribute('position');
            var order = ElementActive.getAttribute('order');
            if (click <= widthWindow / 2) {
                this.leftCarouselIndicator += parseInt(order, 10) * this.distance;
                this.leftImage += parseInt(order, 10) * 100;
            }
            else {
                this.leftCarouselIndicator -= parseInt(order, 10) * this.distance;
                this.leftImage -= parseInt(order, 10) * 100;
            }
            document.getElementById('element1Indicator').style.marginLeft =
                this.leftCarouselIndicator + 'px';
            var carouselCategoryElement = document.getElementById('carousel-category-indicators-active').firstElementChild;
            if (carouselCategoryElement instanceof HTMLElement) {
                carouselCategoryElement.style.transform =
                    'translateX(' + this.leftImage + '%)';
            }
            document.getElementById(carouselItem).classList.add('nohover');
            this.getDistanceIndicator();
            this.setPositionIndicators();
            this.setOrderIndicators();
            var self_2 = this;
            setTimeout(function () {
                self_2.getDistanceIndicator();
                self_2.setPositionIndicators();
                self_2.setOrderIndicators();
                document.getElementById(carouselItem).classList.remove('nohover');
            }, 1100);
        }
    };
    LineFilterComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LineFilterComponent.prototype, "loadProducts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LineFilterComponent.prototype, "carouselItems", null);
    LineFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linefilteranimation',
            template: __webpack_require__(/*! ./lineFilterAnimation.component.html */ "./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.html"),
            styles: [__webpack_require__(/*! ./lineFilterAnimation.component.scss */ "./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], LineFilterComponent);
    return LineFilterComponent;
}());



/***/ }),

/***/ "./src/products/productSharedModule/listing/listItem/listItem.component.html":
/*!***********************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/listItem/listItem.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product_img\">\r\n  <img [src]=\"item.src\" [alt]=\"item.alt\" width=\"200\" height=\"200\" class=\"lazy\" />\r\n</div>\r\n<div class=\"product_title\">{{item.title}}</div>\r\n<div class=\"product_price\">₹ {{item.price}}</div>\r\n"

/***/ }),

/***/ "./src/products/productSharedModule/listing/listItem/listItem.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/listItem/listItem.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product_img {\n  margin-bottom: 40px; }\n"

/***/ }),

/***/ "./src/products/productSharedModule/listing/listItem/listItem.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/products/productSharedModule/listing/listItem/listItem.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
    }
    ListItemComponent.prototype.ngOnInit = function () { };
    ListItemComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "item", void 0);
    ListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listitem',
            template: __webpack_require__(/*! ./listItem.component.html */ "./src/products/productSharedModule/listing/listItem/listItem.component.html"),
            styles: [__webpack_require__(/*! ./listItem.component.scss */ "./src/products/productSharedModule/listing/listItem/listItem.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/products/productSharedModule/productShared.module.ts":
/*!******************************************************************!*\
  !*** ./src/products/productSharedModule/productShared.module.ts ***!
  \******************************************************************/
/*! exports provided: ProductSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSharedModule", function() { return ProductSharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_listItem_listItem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing/listItem/listItem.component */ "./src/products/productSharedModule/listing/listItem/listItem.component.ts");
/* harmony import */ var _listing_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing/filters/filter.component */ "./src/products/productSharedModule/listing/filters/filter.component.ts");
/* harmony import */ var _listing_lineFilterAnimation_lineFilterAnimation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/lineFilterAnimation/lineFilterAnimation.component */ "./src/products/productSharedModule/listing/lineFilterAnimation/lineFilterAnimation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_clickOutside_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/clickOutside.directive */ "./src/directives/clickOutside.directive.ts");
/* harmony import */ var _singleProduct_singleProduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleProduct/singleProduct.component */ "./src/products/productSharedModule/singleProduct/singleProduct.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductSharedModule = /** @class */ (function () {
    function ProductSharedModule() {
    }
    ProductSharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _listing_listItem_listItem_component__WEBPACK_IMPORTED_MODULE_1__["ListItemComponent"],
                _listing_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"],
                _listing_lineFilterAnimation_lineFilterAnimation_component__WEBPACK_IMPORTED_MODULE_3__["LineFilterComponent"],
                _directives_clickOutside_directive__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"],
                _singleProduct_singleProduct_component__WEBPACK_IMPORTED_MODULE_6__["SingleProductComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]],
            exports: [
                _listing_listItem_listItem_component__WEBPACK_IMPORTED_MODULE_1__["ListItemComponent"],
                _listing_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"],
                _listing_lineFilterAnimation_lineFilterAnimation_component__WEBPACK_IMPORTED_MODULE_3__["LineFilterComponent"],
                _singleProduct_singleProduct_component__WEBPACK_IMPORTED_MODULE_6__["SingleProductComponent"]
            ]
        })
    ], ProductSharedModule);
    return ProductSharedModule;
}());



/***/ }),

/***/ "./src/products/productSharedModule/singleProduct/singleProduct.component.html":
/*!*************************************************************************************!*\
  !*** ./src/products/productSharedModule/singleProduct/singleProduct.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"product\">\r\n  <section class=\"product_left tablet_grid_4col desk_grid_4col\">\r\n    <div class=\"breadcrumb_container\">\r\n      <ul class=\"breadcrumb\">\r\n        <li class=\"breadcrumb_item\">\r\n          <a style=\"cursor: pointer;\" (click)=\"gotocharms();\" title=\"Charms\">Charms</a>\r\n        </li>\r\n        <li class=\"breadcrumb_item\">\r\n          <a title=\"Blue Lagoon\">{{collection}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <h1 class=\"product_title page_title\">\r\n      <div [innerHTML]='name'></div>\r\n    </h1>\r\n  </section>\r\n\r\n  <section class=\"product_center tablet_grid_4col desk_grid_4col\">\r\n    <div class=\"product_slider_container\" id=\"product_slider_container\">\r\n      <ul class=\"product_slider featured\" *ngIf='slides != null' style='display: inline;'>\r\n        <li class=\"product_slider_item\" *ngFor=\"let element of Vslide; index as i\" @ngIfAnimation>\r\n          <div>\r\n            <img [src]=\"element.src\" [alt]=\"element.alt\" width=\"500\" height=\"500\" />\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <div class=\"indicators product_slider_pager_items\" *ngIf='slides != null'>\r\n        <span class='default product_slider_pager_item' *ngFor=\"let y of slides; index as x\" [ngClass]=\"{'active':visibleSlide===x}\"\r\n          (click)=\"changeSlide(x, y)\"></span>\r\n      </div>\r\n\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"product_right tablet_grid_4col desk_grid_4col\">\r\n\r\n    <div class=\"product_description\">\r\n      <div [innerHTML]='description'></div>\r\n      <div *ngIf=\"displayProdPriceLarge\" class=\"product_price product_price_largesize\">{{prodPrice}}</div>\r\n      <div *ngIf=\"displayProdCartBtnLarge\" class=\"product_cart_actions\">\r\n        <a class=\"add_cart_btn\" title=\"Add to cart\" (click)=\"addToCart()\">Add to cart</a>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <div class=\"clear\"></div>\r\n\r\n  <div class=\"product_actions\">\r\n    <div *ngIf=\"displayProdPriceSmall\" class=\"product_price product_price_smallsize\">{{prodPrice}}</div>\r\n    <div *ngIf=\"displayProdCartBtnSmall\" class=\"product_cart_actions\" [ngClass]=\"{'product_cart_actions_to_top':scrollBottom==true}\">\r\n      <a class=\"add_cart_btn\" title=\"Add to cart\" (click)=\"addToCart()\">Add to cart</a>\r\n    </div>\r\n  </div>\r\n</article>\r\n"

/***/ }),

/***/ "./src/products/productSharedModule/singleProduct/singleProduct.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/products/productSharedModule/singleProduct/singleProduct.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/products/productSharedModule/singleProduct/singleProduct.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/products/productSharedModule/singleProduct/singleProduct.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cart/cart.service */ "./src/cart/cart.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent(route, appService, cartService) {
        this.route = route;
        this.appService = appService;
        this.cartService = cartService;
        this.description = '';
        this.name = '';
        this.prodPrice = '';
        this.collection = '';
        this.slides = [];
        this.displayProdPriceLarge = false;
        this.displayProdPriceSmall = false;
        this.visibleSlide = 0;
    }
    Object.defineProperty(SingleProductComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            var _this = this;
            this._data = data;
            if (data.Description) {
                this.description = data.Description;
                var descriptionMeta = data.Description;
                descriptionMeta = descriptionMeta.replace(/<(?:.|\n)*?>/gm, '');
                descriptionMeta = descriptionMeta.replace(/\u00a0/g, '');
                descriptionMeta = descriptionMeta.split('PRODUCT DETAIL');
                descriptionMeta = descriptionMeta[1];
                document
                    .getElementById('description')
                    .setAttribute('content', descriptionMeta);
                this.name = data.name;
                this.collection = data.sku;
                this.prodPrice = '₹ ' + data.Price;
                var MediaProduit = data.images;
                this.slides = [];
                MediaProduit.forEach(function (element, index) {
                    _this.slides.push({
                        src: element.src,
                        alt: 'Product' + index
                    });
                });
                this.Vslide = [__assign({}, this.slides[0])];
            }
        },
        enumerable: true,
        configurable: true
    });
    SingleProductComponent.prototype.ngOnInit = function () {
        if (this.appService.isBrowser) {
            window.scrollTo(0, 0);
            /* *** Full Height if desktop or tablet *** */
            var w = window.innerWidth || document.documentElement.clientWidth;
            var h = window.innerHeight || document.documentElement.clientHeight;
            var headerH = document.getElementById('header').clientHeight;
            /* Layout Height */
            if (w > 768) {
                this.heightProduit = Math.round(h) - Math.round(headerH);
            }
            else {
                this.heightProduit = 'auto';
            }
            /* Product Price & Cart Btn */
            if (w > 1024) {
                this.displayProdPriceLarge = true;
                this.displayProdPriceSmall = false;
                this.displayProdCartBtnLarge = true;
                this.displayProdCartBtnSmall = false;
            }
            else {
                this.displayProdPriceLarge = false;
                this.displayProdPriceSmall = true;
                this.displayProdCartBtnLarge = false;
                this.displayProdCartBtnSmall = true;
            }
        }
    };
    SingleProductComponent.prototype.changeSlide = function (x, y) {
        this.visibleSlide = x;
        this.Vslide = [];
        var self = this;
        setTimeout(function () {
            self.Vslide = [__assign({}, y)];
        }, 1100);
    };
    SingleProductComponent.prototype.addToCart = function () {
        this.cartService.addToCart(__assign({}, this.data, { src: this.data.images[0].src }));
    };
    SingleProductComponent.prototype.gotocharms = function () { };
    SingleProductComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SingleProductComponent.prototype, "data", null);
    SingleProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singleproduct',
            template: __webpack_require__(/*! ./singleProduct.component.html */ "./src/products/productSharedModule/singleProduct/singleProduct.component.html"),
            styles: [__webpack_require__(/*! ./singleProduct.component.scss */ "./src/products/productSharedModule/singleProduct/singleProduct.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('ngIfAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.8s 800ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    opacity: 0.5,
                                    transform: 'translateX(35px)',
                                    offset: 0.3
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                            ]))
                        ]), { optional: true })
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }), {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.8s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    opacity: 0.5,
                                    transform: 'translateX(35px)',
                                    offset: 0.3
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    opacity: 0,
                                    transform: 'translateX(+75%)',
                                    offset: 1.0
                                })
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], SingleProductComponent);
    return SingleProductComponent;
}());



/***/ }),

/***/ "./src/shared/about/about.component.html":
/*!***********************************************!*\
  !*** ./src/shared/about/about.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"legal_layout\">\r\n  <div class=\"container container-legal-mentions\">\r\n    <div class=\"inner-container\">\r\n      <div [innerHTML]='page' class='content'></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/shared/about/about.component.scss":
/*!***********************************************!*\
  !*** ./src/shared/about/about.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-container {\n  width: 750px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.container p {\n  text-align: justify;\n  font-family: Apercu, Helvetica, Arial, sans-serif;\n  margin-bottom: 25px; }\n\n@media screen and (min-width: 200px) and (max-width: 1024px) {\n  .inner-container {\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto; } }\n\n.container-legal-mentions h1,\n.container-legal-mentions h2 {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: Apercu, Helvetica, Arial, sans-serif;\n  width: 100%;\n  text-align: center;\n  line-height: 68px; }\n\n.content {\n  position: relative;\n  top: 30px;\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/shared/about/about.component.ts":
/*!*********************************************!*\
  !*** ./src/shared/about/about.component.ts ***!
  \*********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.service */ "./src/shared/about/about.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(sanitizer, renderer, aboutService) {
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.aboutService = aboutService;
        this.renderer.addClass(document.body, 'colorBackground');
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aboutService.fetchAbout();
        this.aboutService.about.subscribe(function (data) {
            var first = data.indexOf('class="page-body"');
            var second = data.indexOf('</div>', first);
            _this.page = _this.sanitizer.bypassSecurityTrustHtml(data.substring(first + 18, second));
        });
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'colorBackground');
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/shared/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/shared/about/about.component.scss")],
            providers: [_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/shared/about/about.service.ts":
/*!*******************************************!*\
  !*** ./src/shared/about/about.service.ts ***!
  \*******************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutService = /** @class */ (function () {
    function AboutService(http) {
        this.http = http;
        this.about = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.baseUrl = 'http://localhost:15536';
    }
    AboutService.prototype.getData = function (url) {
        return this.http.get(url, { responseType: 'text' });
    };
    AboutService.prototype.fetchAbout = function () {
        var _this = this;
        var url = this.baseUrl + '/about-us';
        this.getData(url).subscribe(function (page) {
            _this.about.next(page);
        });
    };
    AboutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "./src/shared/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/shared/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"idFooter\">\r\n  <div class=\"content-footer\" style=\"text-align:center;\">\r\n    <div class=\"element-footer cash-on-delivery\" [hidden]=\"!(showAll == true || showElementFooter==1)\">\r\n      <div class=\"icon\"></div>\r\n      <div class=\"titre\">Check your Delivery</div>\r\n      <div class=\"text\">Enter your postal code to check availability in your city:</div>\r\n      <div class=\"input-container\">\r\n        <input type=\"text\" placeholder=\"Postal code\" [hidden]=\"postalCodeInput\" />\r\n        <p [hidden]=\"checkFlag(postalCodeMsg)\">Cash on delivery is available!</p>\r\n        <p [hidden]=\"checkFlag(postalCodeMsg)\">PrePaid delivery is available!</p>\r\n        <p [hidden]=\"!postalCodeInput&&postalCodeMsg==0\">Sorry, delivery is unavailable</p>\r\n        <button (click)=\"checkPostalCode()\">ok</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"element-footer secure-payment\" [hidden]=\"!(showAll == true || showElementFooter==2)\">\r\n      <div class=\"icon\"></div>\r\n      <div class=\"titre\">100% Secured Payments</div>\r\n      <div class=\"text\">Take your time, shop safely and securely. All transactions processed on our website are secured by PayU.</div>\r\n    </div>\r\n    <div class=\"element-footer fast-delivery\" [hidden]=\"!(showAll == true || showElementFooter==3)\">\r\n      <div class=\"icon\"></div>\r\n      <div class=\"titre\">fast delivery</div>\r\n      <div class=\"text\">Place an order today before 1pm and be sure to receive your order within 48h</div>\r\n    </div>\r\n    <div class=\"element-footer a-question\" [hidden]=\"!(showAll == true || showElementFooter==4)\">\r\n      <div class=\"icon\"></div>\r\n      <div class=\"titre\">A question?</div>\r\n      <div class=\"text\">\r\n        <span>We would be glad to help ! Feel free to contact us at contact@y.jewelry</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"switch-footer-slide\" [hidden]=\"!showULFooter\">\r\n      <ul>\r\n        <li [ngClass]=\"{'active':showElementFooter==1}\" (click)=\"showElementFooter=1\">1</li>\r\n        <li [ngClass]=\"{'active':showElementFooter==2}\" (click)=\"showElementFooter=2\">2</li>\r\n        <li [ngClass]=\"{'active':showElementFooter==3}\" (click)=\"showElementFooter=3\">3</li>\r\n        <li [ngClass]=\"{'active':showElementFooter==4}\" (click)=\"showElementFooter=4\">4</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/shared/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/shared/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/*\r\n  * Bower externals libraries\r\n  */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/* @import \"bower_components/neat/app/assets/stylesheets/_neat.scss\"; */\n/* *** Couleurs de texte *** */\n/*Violet Claire*/\n/*Violet Fonce*/\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n@import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n@import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n/*********************\r\nBASE (MOBILE) SIZE\r\nThis are the mobile styles. It's what people see on their phones. If\r\nyou set a great foundation, you won't need to add too many styles in\r\nthe other stylesheets. Remember, keep it light: Speed is Important.\r\n*********************/\nfooter {\n  overflow: hidden;\n  transition: all 1s;\n  position: absolute;\n  clear: both;\n  width: 100%; }\nfooter .content-footer {\n    padding-bottom: 40px;\n    background: #bbd1ea; }\nfooter .element-footer {\n    margin: 50px auto 0;\n    width: 259px;\n    text-align: center; }\nfooter .element-footer:first-of-type {\n      margin-top: 0; }\nfooter .element-footer .titre {\n      text-transform: uppercase;\n      font-size: 14px;\n      font-family: Belvue;\n      color: #090954;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      letter-spacing: 0.03em; }\nfooter .element-footer .text {\n      font-size: 14px;\n      font-family: Apercu;\n      color: #090954;\n      line-height: 20px; }\nfooter .element-footer .icon {\n      margin-left: auto;\n      margin-right: auto; }\nfooter .switch-footer-slide ul {\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto; }\nfooter .switch-footer-slide ul li {\n      display: inline-block;\n      list-style: none;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      border: 1px solid #090954;\n      background: transparent;\n      margin-right: 10px;\n      font-size: 0px;\n      cursor: pointer; }\nfooter .switch-footer-slide ul li.active {\n      background: #090954; }\nfooter .cash-on-delivery {\n    padding-top: 50px; }\nfooter .cash-on-delivery .icon {\n      width: 42.553px;\n      height: 39px;\n      background: url(/assets/img/Delivery.svg);\n      background-size: cover; }\nfooter .cash-on-delivery .input-container {\n      border-bottom: 5px solid white;\n      width: 180px;\n      margin-left: auto;\n      margin-right: auto; }\nfooter .cash-on-delivery .input-container input,\n      footer .cash-on-delivery .input-container button {\n        background: transparent;\n        border: 0px; }\nfooter .cash-on-delivery .input-container input {\n        width: 135px;\n        height: 30px;\n        color: #090954;\n        font-family: Apercu;\n        font-size: 14px; }\nfooter .cash-on-delivery .input-container input::-webkit-input-placeholder {\n        color: #090954; }\nfooter .cash-on-delivery .input-container button {\n        width: 40px;\n        height: 30px;\n        text-transform: uppercase;\n        font-family: Belvue;\n        font-size: 14px;\n        color: #090954; }\nfooter .secure-payment .icon {\n    width: 34px;\n    height: 39px;\n    background: url(/assets/img/Security.svg);\n    background-size: cover; }\nfooter .fast-delivery .icon {\n    width: 44px;\n    height: 39px;\n    background: url(/assets/img/Fast-delivery.svg);\n    background-size: cover; }\nfooter .a-question .icon {\n    width: 38px;\n    height: 39px;\n    background: url(/assets/img/Question.svg);\n    background-size: cover; }\n/*********************\r\nLARGER MOBILE DEVICES\r\nThis is for devices like the Galaxy Note or something that's\r\nlarger than an iPhone but smaller than a tablet. Let's call them\r\ntweeners.\r\n*********************/\n/*********************\r\nTABLET & SMALLER LAPTOPS\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n/*********************\r\nDESKTOP\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n@media only screen and (min-width: 770px) {\n  footer .element-footer {\n    padding-top: 50px;\n    margin-top: 50px !important; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1025px) {\n  footer .element-footer {\n    width: 24.6%;\n    vertical-align: top;\n    display: inline-block; }\n    footer .element-footer .text {\n      width: 260px;\n      margin-left: auto;\n      margin-right: auto; }\n  footer .switch-footer-slide {\n    clear: both;\n    float: none; }\n  footer .cash-on-delivery {\n    padding-top: 0px; }\n  footer .secure-payment,\n  footer .fast-delivery,\n  footer .a-question {\n    padding-top: 0px; } }\n/*********************\r\nRETINA (2x RESOLUTION DEVICES)\r\nThis applies to the retina iPhone (4s) and iPad (2,3) along with\r\nother displays with a 2x resolution. You can also create a media\r\nquery for retina AND a certain size if you want. Go Nuts.\r\n*********************/\n/*********************\r\nPRINT STYLESHEET\r\nFeel free to customize this. Remember to add things that won't make\r\nsense to print at the bottom. Things like nav, ads, and forms should\r\nbe set to display none.\r\n*********************/\n/* @media print { */\n/* } */\n"

/***/ }),

/***/ "./src/shared/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/shared/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(appService) {
        this.appService = appService;
        this.postalCodeInput = false;
        this.postalCodeMsg = 0;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showAll = this.appService.showAll;
        this.showElementFooter = this.appService.showElementFooter;
        this.showULFooter = this.appService.showULFooter;
        this.appService.changeInHome.subscribe(function (value) {
            if (value === 'change') {
                _this.showAll = _this.appService.showAll;
                _this.showElementFooter = _this.appService.showElementFooter;
                _this.showULFooter = _this.appService.showULFooter;
            }
        });
    };
    FooterComponent.prototype.checkFlag = function (i) {
        return true;
    };
    FooterComponent.prototype.checkPostalCode = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/shared/navbar/navbar.component.html":
/*!*************************************************!*\
  !*** ./src/shared/navbar/navbar.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\r\n  <div class=\"menu\" [ngClass]=\"{'close':isOpen}\" (click)=\"isOpen=!isOpen;isOpenSearch=false\"></div>\r\n  <div class=\"search\" [ngClass]=\"{'openSearch':isOpenSearch}\" (click)=\"openSearch();\">\r\n    <div id=\"stringSearch\" style=\"display: none;\"></div>\r\n    <!-- <angucomplete id=\"site_search_field\" placeholder=\"Search\" minlength=\"1\" pause=\"400\" class=\"form_text\" selectedobject=\"searchObj\"\r\n      url=\"{{pathSearch}}\" datafield=\"data\" titlefield=\"Name\" inputclass=\"form-control form-control-small\" (click)=\"isOpenSearch=!isOpenSearch\"\r\n    /> -->\r\n  </div>\r\n  <a [routerLink]=\"['home']\">\r\n    <div class=\"logo\" (click)=\"isOpen=false\"></div>\r\n  </a>\r\n  <div class=\"cart\" [ngClass]=\"{'close':isOpenPanier}\" (click)=\"isOpenPanier=true\" [hidden]=\"!StepBag\">\r\n    <div class=\"cart_icon\"></div>\r\n    <p class=\"cart_num_items\" [hidden]=\"!(cartItems!=0 && cartItems!=undefined)\">{{cartItems}}</p>\r\n  </div>\r\n\r\n  <div class=\"account\" [ngClass]=\"{'close':isOpenAccount}\" (click)=\"openAccountPopup()\" [hidden]=\"!StepBag\"></div>\r\n\r\n  <div class=\"MenuContainer\" [ngClass]=\"{'active':isOpen}\">\r\n    <div class=\"imagesMenu\">\r\n      <div class=\"imgMenu\" (click)=\"goToCharms()\">\r\n        <div class=\"img\" style=\"background-image: url('https://medias.y.jewelry/stories/homepage-y-visuel01-min.jpg');\" *ngIf=\"!sliderVersionTabletMobile && getExtension('https://medias.y.jewelry/stories/homepage-y-visuel01-min.jpg')!='mp4'\"></div>\r\n        <div class=\"video\" *ngIf=\"!sliderVersionTabletMobile && getExtension(Filename)=='mp4'\">\r\n          <video width=\"100%\" height=\"100%\" controls=\"controls\">\r\n            <source [src]=\"'https://medias.y.jewelry/stories/homepage-y-visuel01-min.jpg'\" type=\"video/mp4\" />\r\n          </video>\r\n        </div>\r\n        <div class=\"text\">{{charms}}</div>\r\n      </div>\r\n      <div class=\"imgMenu\" (click)=\"goToChains()\">\r\n        <div class=\"img\" style=\"background-image: url('https://medias.y.jewelry/stories/homepage-y-visuel03-min.jpg');\" *ngIf=\"!sliderVersionTabletMobile && getExtension('https://medias.y.jewelry/stories/homepage-y-visuel03-min.jpg')!='mp4'\"></div>\r\n        <div class=\"video\" *ngIf=\"!sliderVersionTabletMobile && getExtension('https://medias.y.jewelry/stories/homepage-y-visuel03-min.jpg')=='mp4'\">\r\n          <video width=\"100%\" height=\"100%\" controls=\"controls\">\r\n            <source [src]=\"'https://medias.y.jewelry/stories/homepage-y-visuel03-min.jpg'\" type=\"video/mp4\" />\r\n          </video>\r\n        </div>\r\n        <div class=\"text\">{{chains}}</div>\r\n      </div>\r\n      <div class=\"imgMenu\" (click)=\"goToLookbook()\">\r\n        <div class=\"img\" style=\"background-image: url('https://medias.y.jewelry/stories/homepage-y-visuel02-min.jpg');\" *ngIf=\"!sliderVersionTabletMobile && getExtension('https://medias.y.jewelry/stories/homepage-y-visuel02-min.jpg')!='mp4'\"></div>\r\n        <div class=\"video\" *ngIf=\"!sliderVersionTabletMobile && getExtension(Filename)=='mp4'\">\r\n          <video width=\"100%\" height=\"100%\" controls=\"controls\">\r\n            <source [src]=\"'https://medias.y.jewelry/stories/homepage-y-visuel02-min.jpg'\" type=\"video/mp4\" />\r\n          </video>\r\n        </div>\r\n        <div class=\"text\">{{lookbook}}</div>\r\n      </div>\r\n      <div class=\"separator clear\">\r\n      </div>\r\n    </div>\r\n\r\n    <nav id=\"menu_all_infos\">\r\n      <div id=\"menu_all_infos_l\" class=\"infoMenu\">\r\n        <div class=\"aboutY\" (click)=\"aboutClick(); isOpen=false\" style=\"cursor: pointer;\">\r\n          <div class=\"titre\">About Y</div>\r\n          <div class=\"text\">\r\n            Y is a Swiss brand with one mission; getting women to make jewelry look good - not the reverse.\r\n            <u>Learn more.</u>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"infoY\">\r\n          <div class=\"titre\">info</div>\r\n          <div class=\"text\">\r\n            <ul>\r\n              <li>\r\n                <a [routerLink]=\"['info','care']\" (click)=\"isOpen=false\">Care for you charms</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['info', 'sizeguide']\" (click)=\"isOpen=false\">Size Guide</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['info','productInformation']\" (click)=\"isOpen=false\">Product Information</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['info','deliveryReturns']\" (click)=\"isOpen=false\">Return, Refund &amp; Cancellation</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['info','warningAboutForgery']\" (click)=\"isOpen=false\">Warning About Forgery</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['info','productionCondition']\" (click)=\"isOpen=false\">Production Condition</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['info','contactus']\" (click)=\"isOpen=false\">Contact Us</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['info','faq']\" (click)=\"isOpen=false\">FAQ</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"legalsY\">\r\n          <div class=\"titre\">legals</div>\r\n          <div class=\"text\">\r\n            <ul>\r\n              <li>\r\n                <a [routerLink]=\"['legals','terms']\" (click)=\"isOpen=false\">Terms &amp; conditions</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['legals','service']\" (click)=\"isOpen=false\">Service Warranty</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['legals','privacy']\" (click)=\"isOpen=false\">Privacy Policy</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['legals','shippingAndDelivery']\" (click)=\"isOpen=false\">Shipping and Delivery Policy</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['legals','pricesAndPayment']\" (click)=\"isOpen=false\">Prices and Payment</a>\r\n              </li>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"clear\"></div>\r\n      </div>\r\n      <div id=\"menu_all_infos_r\">\r\n        <div id=\"menu_all_infos_r_inner\">\r\n\r\n          <div class=\"newsletter\">\r\n            <div class=\"titre\"> monthly Newsletter</div>\r\n            <div id=\"mc_embed_signup\">\r\n              <form action=\"//jewelry.us16.list-manage.com/subscribe/post?u=15d53cca64e2199799f8d813b&amp;id=8af88a9cd4\" method=\"post\"\r\n                id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" rel=\"noopener\"\r\n                novalidate style=\"padding: 0px;\">\r\n                <div id=\"mc_embed_signup_scroll\" class=\"inputNewsletter\">\r\n\r\n                  <div class=\"mc-field-group form_item form_item_email\">\r\n                    <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email form_email\" id=\"mce-EMAIL\" placeholder=\"Enter your email...\"\r\n                    />\r\n\r\n                    <div id=\"mce-responses\" class=\"clear\" style=\"width: 422px;\">\r\n                      <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\r\n                      <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\r\n                    </div>\r\n                  </div>\r\n                  <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\r\n                    <input type=\"text\" name=\"b_15d53cca64e2199799f8d813b_8af88a9cd4\" tabindex=\"-1\" value=\"\">\r\n                  </div>\r\n\r\n                  <div class=\"form_actions\">\r\n                    <input type=\"submit\" value=\"ok\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button form_submit\">\r\n                  </div>\r\n                  <div class=\"clear\"></div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n\r\n            <script type='text/javascript' defer async src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>\r\n          </div>\r\n\r\n          <div class=\"socialY\">\r\n            <div class=\"titre\">follow us!</div>\r\n            <div class=\"text\">\r\n              <ul>\r\n                <li>\r\n                  <a class=\"fb icon\" href=\"https://www.facebook.com/ThisisYjewelry-1735514419791954/\" target=\"_blank\" rel=\"noopener\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\"\r\n                      height=\"30px\" viewBox=\"0 0 35 35\" style=\"enable-background:new 0 0 35 35;\" xml:space=\"preserve\">\r\n                      <g>\r\n                        <g>\r\n                          <g>\r\n                            <path d=\"M20.25,18h-2v7h-3v-7h-2v-3h2v-2c0-2.709,1.318-4,4-4h2v3l-1.691-0.021\r\n                      c-0.809,0-1.309,0.188-1.309,1.021v2l2.666,0.027L20.25,18z M20.916,16.994\" />\r\n                          </g>\r\n                        </g>\r\n                        <path d=\"M17.625,2.125c-8.284,0-15,6.715-15,15c0,8.283,6.716,15,15,15s15-6.717,15-15\r\n                    C32.625,8.84,25.909,2.125,17.625,2.125z M17.625,31.125c-7.731,0-14-6.27-14-14c0-7.732,6.269-14,14-14s14,6.268,14,14\r\n                    C31.625,24.855,25.356,31.125,17.625,31.125z\" />\r\n                      </g>\r\n                    </svg>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a class=\"instagram icon\" href=\"https://www.instagram.com/thisisyjewelry/\" target=\"_blank\" rel=\"noopener\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\"\r\n                      height=\"30px\" viewBox=\"0 0 35 35\" style=\"enable-background:new 0 0 35 35;\" xml:space=\"preserve\">\r\n                      <g>\r\n                        <path style=\"fill:#090954;\" d=\"M21.5,13.5c-0.264,0-0.521,0.105-0.706,0.291C20.606,13.977,20.5,14.235,20.5,14.5\r\n                      c0,0.263,0.106,0.52,0.294,0.707c0.186,0.185,0.442,0.293,0.706,0.293s0.521-0.108,0.706-0.293C22.394,15.02,22.5,14.763,22.5,14.5\r\n                      c0-0.265-0.106-0.523-0.294-0.709C22.022,13.605,21.764,13.5,21.5,13.5z\" />\r\n                        <path style=\"fill:#090954;\" d=\"M17.5,2.5c-8.284,0-15,6.715-15,15c0,8.283,6.716,15,15,15s15-6.717,15-15\r\n                      C32.5,9.215,25.784,2.5,17.5,2.5z M17.5,31.5c-7.731,0-14-6.27-14-14c0-7.732,6.269-14,14-14s14,6.268,14,14\r\n                      C31.5,25.23,25.231,31.5,17.5,31.5z\" />\r\n                        <path class=\"not-fill has-stroke\" style=\"fill:none;stroke:#090954;stroke-miterlimit:10;\" d=\"M24.59,20.841c0,2.203-1.787,3.989-3.99,3.989h-6.021\r\n                      c-2.203,0-3.989-1.786-3.989-3.989V14.82c0-2.203,1.786-3.99,3.989-3.99H20.6c2.203,0,3.99,1.787,3.99,3.99V20.841z\"\r\n                        />\r\n                        <circle class=\"not-fill has-stroke\" style=\"fill:none;stroke:#090954;stroke-miterlimit:10;\" cx=\"17.5\" cy=\"18\" r=\"3.5\" />\r\n                      </g>\r\n                    </svg>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a class=\"twitter icon\" href=\"https://twitter.com/thisisyjewelry\" target=\"_blank\" rel=\"noopener\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\"\r\n                      height=\"30px\" viewBox=\"0 0 35 35\" style=\"enable-background:new 0 0 35 35;\" xml:space=\"preserve\">\r\n                      <g>\r\n                        <g>\r\n                          <g>\r\n                            <g>\r\n                              <path d=\"M26.713,14.145c-0.59,0.26-1.222,0.438-1.886,0.517c0.679-0.405,1.197-1.05,1.442-1.815\r\n                          c-0.635,0.376-1.338,0.649-2.086,0.797c-0.599-0.639-1.451-1.037-2.396-1.037c-1.813,0-3.283,1.471-3.283,3.283\r\n                          c0,0.256,0.028,0.508,0.085,0.748c-2.729-0.138-5.147-1.445-6.767-3.431c-0.283,0.483-0.444,1.048-0.444,1.649\r\n                          c0,1.14,0.58,2.145,1.461,2.732c-0.539-0.018-1.045-0.166-1.488-0.412v0.041c0,1.59,1.133,2.918,2.634,3.22\r\n                          c-0.274,0.073-0.565,0.114-0.865,0.114c-0.212,0-0.417-0.021-0.618-0.061c0.418,1.305,1.631,2.254,3.066,2.28\r\n                          c-1.123,0.88-2.539,1.403-4.077,1.403c-0.265,0-0.526-0.016-0.783-0.045c1.453,0.934,3.179,1.477,5.032,1.477\r\n                          c6.039,0,9.341-5.002,9.341-9.34L25.07,15.84C25.715,15.381,26.273,14.803,26.713,14.145z\" />\r\n                            </g>\r\n                          </g>\r\n                        </g>\r\n                        <path d=\"M17.5,2.5c-8.284,0-15,6.715-15,15c0,8.283,6.716,15,15,15s15-6.717,15-15\r\n                    C32.5,9.215,25.784,2.5,17.5,2.5z M17.5,31.5c-7.731,0-14-6.27-14-14c0-7.732,6.269-14,14-14s14,6.268,14,14\r\n                    C31.5,25.23,25.231,31.5,17.5,31.5z\" />\r\n                      </g>\r\n                    </svg>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a class=\"pinterest icon\" href=\"https://www.pinterest.com/thisisyjewelry\" target=\"_blank\" rel=\"noopener\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\"\r\n                      height=\"30px\" viewBox=\"0 0 35 35\" style=\"enable-background:new 0 0 35 35;\" xml:space=\"preserve\">\r\n                      <g>\r\n                        <g>\r\n                          <g>\r\n                            <path d=\"M18.289,22.105c-0.974-0.076-1.383-0.559-2.146-1.023c-0.42,2.203-0.933,4.314-2.453,5.418\r\n                        c-0.47-3.33,0.688-5.83,1.227-8.484c-0.916-1.543,0.11-4.65,2.044-3.883c2.38,0.941-2.06,5.738,0.921,6.336\r\n                        c3.112,0.627,4.383-5.398,2.452-7.359c-2.788-2.83-8.116-0.064-7.462,3.986c0.16,0.99,1.184,1.291,0.409,2.658\r\n                        c-1.785-0.396-2.317-1.803-2.249-3.68c0.111-3.072,2.761-5.223,5.418-5.521c3.361-0.375,6.517,1.236,6.951,4.396\r\n                        C23.891,18.518,21.884,22.383,18.289,22.105L18.289,22.105z\" />\r\n                          </g>\r\n                        </g>\r\n                        <path d=\"M17.5,2.5c-8.284,0-15,6.715-15,15c0,8.283,6.716,15,15,15s15-6.717,15-15\r\n                    C32.5,9.215,25.784,2.5,17.5,2.5z M17.5,31.5c-7.731,0-14-6.27-14-14c0-7.732,6.269-14,14-14s14,6.268,14,14\r\n                    C31.5,25.23,25.231,31.5,17.5,31.5z\" />\r\n                      </g>\r\n                    </svg>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a class=\"google icon\" href=\"https://www.roposo.com/profile/yjewelry/af274109-1ee0-4ffc-b500-c0dfd0cd165f?query=USER_@yjewelry&num=0&entityID=af274109-1ee0-4ffc-b500-c0dfd0cd165f\"\r\n                    target=\"_blank\" rel=\"noopener\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\"\r\n                      height=\"30px\" viewBox=\"0 0 35 35\" style=\"enable-background:new 0 0 35 35;\" xml:space=\"preserve\">\r\n                      <g>\r\n                        <path d=\"M17.25,2.375c-8.284,0-15,6.715-15,15c0,8.283,6.716,15,15,15s15-6.717,15-15\r\n                      C32.25,9.09,25.534,2.375,17.25,2.375z M17.25,31.375c-7.731,0-14-6.27-14-14c0-7.732,6.269-14,14-14s14,6.268,14,14\r\n                      C31.25,25.105,24.981,31.375,17.25,31.375z\" />\r\n                        <path d=\"M17.904,11.589V7.314c5,0.496,8.975,4.472,9.471,9.471h-4.274\r\n                      C22.654,14.128,20.562,12.036,17.904,11.589z M16.846,11.589V7.314c-4.999,0.496-8.975,4.472-9.471,9.471h4.274\r\n                      C12.096,14.128,14.188,12.036,16.846,11.589z M11.649,17.844H7.375c0.496,4.998,4.472,8.975,9.471,9.471V23.04\r\n                      C14.188,22.592,12.096,20.5,11.649,17.844z M17.904,23.04v4.274c5-0.496,8.975-4.472,9.471-9.471h-4.274\r\n                      C22.654,20.5,20.562,22.592,17.904,23.04z\" />\r\n                      </g>\r\n                    </svg>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"credits\">\r\n            Website by\r\n            <a href=\"https://www.bonjour.agency/\" target=\"_blank\" rel=\"noopener\">Bonjour Paris</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"clear\"></div>\r\n    </nav>\r\n\r\n  </div>\r\n\r\n</header>\r\n"

/***/ }),

/***/ "./src/shared/navbar/navbar.component.scss":
/*!*************************************************!*\
  !*** ./src/shared/navbar/navbar.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Global Stylesheets\r\n */\n/* *** Surcharge neat bourbon *** */\n/* *** Custom neat grid for menu *** */\n/*\r\n  * Bower externals libraries\r\n  */\n/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/* @import \"bower_components/neat/app/assets/stylesheets/_neat.scss\"; */\n/* *** Couleurs de texte *** */\n/*Violet Claire*/\n/*Violet Fonce*/\n/* *** Backgrounds *** */\n/* *** Border *** */\n/*@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);\r\n@import url(https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic);\r\n@import url(https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic);*/\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0460-052f, U+20b4, U+2de0-2dff, U+A640-A69F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+1f00-1fff; }\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0370-03ff; }\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0102-0103, U+1ea0-1ef9, U+20ab; }\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,\r U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url('cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2') format(\"woff2\");\n  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc,\r U+2000-206f, U+2074, U+20ac, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n@font-face {\n  font-family: BelweSansLight;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n@font-face {\n  font-family: Apercu;\n  src: url(/assets/fonts/Apercu.otf); }\n@font-face {\n  font-family: Belvue;\n  src: url(/assets/fonts/BelweSans-Light.otf); }\n/* *** Grayscale mixin *** */\n/* *** buttons *** */\n/* *** Placeholder Color *** */\n/*********************\r\nBASE (MOBILE) SIZE\r\nThis are the mobile styles. It's what people see on their phones. If\r\nyou set a great foundation, you won't need to add too many styles in\r\nthe other stylesheets. Remember, keep it light: Speed is Important.\r\n*********************/\n/* ***** Global styles ***** */\n.clear {\n  clear: both; }\n.rounded_btn {\n  background-color: #bbd1ea;\n  color: #090954;\n  height: 38px;\n  line-height: 38px;\n  width: 100%;\n  display: block;\n  border-radius: 20px;\n  border: none;\n  cursor: pointer;\n  text-align: center; }\n.rounded_btn:hover {\n    color: #bbd1ea;\n    background-color: #090954;\n    text-decoration: none; }\n/*Header*/\n.angucomplete-dropdown {\n  position: absolute;\n  top: 30px;\n  left: 50px !important; }\nheader {\n  height: 60px;\n  width: 100%;\n  position: absolute;\n  z-index: 900;\n  background-color: white;\n  will-change: transform; }\nheader .menu {\n    background-image: url(/assets/img/Menu.svg);\n    -webkit-mask-image: url(/assets/img/Menu.svg);\n            mask-image: url(/assets/img/Menu.svg);\n    background-repeat: no-repeat;\n    width: 16px;\n    height: 11px;\n    top: 25px;\n    left: 20px;\n    position: absolute;\n    cursor: pointer; }\nheader .menu.close {\n    color: #090954;\n    background-image: url(/assets/img/Close.svg);\n    -webkit-mask-image: url(/assets/img/Close.svg);\n            mask-image: url(/assets/img/Close.svg);\n    -webkit-mask-size: cover;\n            mask-size: cover;\n    background-repeat: no-repeat;\n    opacity: 1;\n    background-size: cover !important;\n    width: 15px;\n    height: 15px; }\nheader .search {\n    background-image: url(/assets/img/Search.svg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 14px;\n    height: 16px;\n    top: 22px;\n    left: 60px;\n    position: absolute;\n    cursor: pointer; }\nheader .search input {\n      transition: opacity 1s cubic-bezier(0.4, 0, 0, 1);\n      visibility: hidden;\n      opacity: 0;\n      position: fixed;\n      left: 114px;\n      right: 114px;\n      top: 10px;\n      height: 41px;\n      width: calc(100vw - 114px * 2);\n      padding-left: 10px;\n      background: white;\n      z-index: 999999;\n      border: 0px;\n      font-family: Apercu, Helvetica, Arial, sans-serif;\n      font-size: 14px;\n      color: #090954 !important; }\nheader .openSearch {\n    background-image: url(/assets/img/Close.svg); }\nheader .openSearch input {\n      opacity: 1;\n      visibility: visible; }\nheader .openSearch input::-webkit-input-placeholder {\n      color: #090954; }\nheader .logo {\n    background: url(/assets/img/Logo.svg);\n    background-repeat: no-repeat;\n    background-size: cover !important;\n    width: 40px;\n    height: 40px;\n    top: 9.82px;\n    left: 0;\n    right: 0;\n    position: absolute;\n    cursor: pointer;\n    margin: 0 auto; }\nheader .account {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 20px;\n    right: 60px;\n    z-index: 999;\n    cursor: pointer;\n    background-image: url(/assets/img/Profile.svg);\n    -webkit-mask-image: url(/assets/img/Profile.svg);\n            mask-image: url(/assets/img/Profile.svg);\n    background-repeat: no-repeat; }\nheader .account.close {\n      color: #090954;\n      opacity: 0; }\nheader .cart {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 20px;\n    height: 20px; }\nheader .cart .cart_icon {\n      background-image: url(/assets/img/Cart.svg);\n      background-repeat: no-repeat;\n      width: 100%;\n      height: 100%;\n      cursor: pointer; }\nheader .cart .cart_num_items {\n      position: absolute;\n      z-index: 800;\n      top: -3px;\n      left: -8px;\n      color: #ffffff;\n      text-align: center;\n      width: 15px;\n      height: 15px;\n      line-height: 15px;\n      background-color: #090954;\n      border-radius: 50%;\n      font-size: 10px; }\n.MenuContainer {\n  display: none;\n  position: absolute;\n  width: 100%;\n  top: 60px;\n  background: #f9f4ef; }\n.MenuContainer.active {\n    display: block;\n    -webkit-animation: fadeIn 1s cubic-bezier(0.4, 0, 0, 1);\n            animation: fadeIn 1s cubic-bezier(0.4, 0, 0, 1); }\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    display: block; }\n  to {\n    opacity: 1;\n    display: block; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    display: block; }\n  to {\n    opacity: 1;\n    display: block; } }\n.MenuContainer .separator {\n    background: white;\n    height: 5px;\n    margin: 22.5px 30px; }\n.MenuContainer .imagesMenu {\n    margin-top: 22.5px; }\n.MenuContainer .imagesMenu .imgMenu {\n      cursor: pointer;\n      min-height: 45px;\n      line-height: 45px; }\n.MenuContainer .imagesMenu .imgMenu .img {\n        height: 210.625px;\n        width: 100%;\n        cursor: pointer;\n        /* @include grayscale_element(0); */\n        transition: all 200ms ease-in-out; }\n.MenuContainer .imagesMenu .imgMenu:hover > .img {\n        -webkit-filter: grayscale(100%);\n        -moz-filter: grayscale(100%);\n        filter: grayscale(100%); }\n.MenuContainer .imagesMenu .text {\n      color: #090954;\n      text-align: center;\n      text-transform: uppercase;\n      font-family: BelweSansLight;\n      font-weight: 400;\n      font-size: 18px;\n      letter-spacing: 1.4px; }\n#menu_all_infos a:hover {\n  text-decoration: underline; }\n#menu_all_infos_r {\n  padding-top: 20px; }\n.infoMenu,\n.infoY,\n.legalsY,\n.socialY,\n.newsletter {\n  margin-top: 22.5px; }\n.infoMenu .titre,\n  .infoY .titre,\n  .legalsY .titre,\n  .socialY .titre,\n  .newsletter .titre {\n    color: #090954;\n    text-align: center;\n    line-height: 45px;\n    text-transform: uppercase;\n    font-family: BelweSansLight;\n    font-size: 14px; }\n.infoMenu .text,\n  .infoY .text,\n  .legalsY .text,\n  .socialY .text,\n  .newsletter .text {\n    font-family: Apercu;\n    font-size: 14px;\n    line-height: 20px;\n    color: #090954 !important;\n    text-align: center; }\n.infoMenu .text ul,\n    .infoY .text ul,\n    .legalsY .text ul,\n    .socialY .text ul,\n    .newsletter .text ul {\n      list-style: none;\n      padding: 0px; }\n.infoMenu .text a,\n    .infoY .text a,\n    .legalsY .text a,\n    .socialY .text a,\n    .newsletter .text a {\n      text-decoration: none;\n      color: #090954 !important; }\n.newsletter #mc_embed_signup {\n  /* ***** Surcharge des styles mailchimp ***** */ }\n.newsletter #mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {\n    background: none;\n    text-align: left;\n    margin: 5px 0;\n    padding: 0;\n    color: #b54747;\n    font-weight: normal; }\n.newsletter #mc_embed_signup .inputNewsletter {\n    text-align: center;\n    border-bottom: 5px solid white;\n    max-width: 265px;\n    margin-left: auto;\n    margin-right: auto;\n    /* ***** Remise a zero des styles mailchimp ***** */ }\n.newsletter #mc_embed_signup .inputNewsletter .mc-field-group {\n      clear: none;\n      position: static;\n      width: auto;\n      padding: 0;\n      min-height: 0;\n      text-align: left; }\n.newsletter #mc_embed_signup .inputNewsletter .form_item_text,\n    .newsletter #mc_embed_signup .inputNewsletter .form_item_email {\n      width: 80%;\n      float: left; }\n.newsletter #mc_embed_signup .inputNewsletter .form_actions {\n      width: 20%;\n      float: left; }\n.newsletter #mc_embed_signup .inputNewsletter .form_text,\n    .newsletter #mc_embed_signup .inputNewsletter .form_email,\n    .newsletter #mc_embed_signup .inputNewsletter .form_submit {\n      width: 100%;\n      display: block;\n      height: 30px;\n      line-height: 30px;\n      font-family: Apercu;\n      font-size: 14px;\n      color: #090954;\n      border: none;\n      background: none;\n      padding: 0; }\n.newsletter #mc_embed_signup .inputNewsletter .form_text,\n    .newsletter #mc_embed_signup .inputNewsletter .form_email {\n      text-indent: 0; }\n.newsletter #mc_embed_signup .inputNewsletter .form_text::-webkit-input-placeholder,\n      .newsletter #mc_embed_signup .inputNewsletter .form_email::-webkit-input-placeholder {\n        /* WebKit, Blink, Edge */\n        color: #090954; }\n.newsletter #mc_embed_signup .inputNewsletter .form_text:-moz-placeholder,\n      .newsletter #mc_embed_signup .inputNewsletter .form_email:-moz-placeholder {\n        /* Mozilla Firefox 4 to 18 */\n        color: #090954;\n        opacity: 1; }\n.newsletter #mc_embed_signup .inputNewsletter .form_text::-moz-placeholder,\n      .newsletter #mc_embed_signup .inputNewsletter .form_email::-moz-placeholder {\n        /* Mozilla Firefox 19+ */\n        color: #090954;\n        opacity: 1; }\n.newsletter #mc_embed_signup .inputNewsletter .form_text:-ms-input-placeholder,\n      .newsletter #mc_embed_signup .inputNewsletter .form_email:-ms-input-placeholder {\n        /* Internet Explorer 10-11 */\n        color: #090954; }\n.newsletter #mc_embed_signup .inputNewsletter .form_text:placeholder-shown,\n      .newsletter #mc_embed_signup .inputNewsletter .form_email:placeholder-shown {\n        /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n        color: #090954; }\n.newsletter #mc_embed_signup .inputNewsletter .form_submit {\n      text-transform: uppercase;\n      cursor: pointer; }\n.socialY li {\n  display: inline-block; }\n.socialY li .icon {\n    width: 30px;\n    height: 30px;\n    display: inline-block;\n    margin-right: 5px; }\n.socialY li .icon svg:not(.not-fill),\n    .socialY li .icon path:not(.not-fill),\n    .socialY li .icon circle:not(.not-fill) {\n      fill: #090954 !important; }\n.socialY li .icon svg.has-stroke,\n    .socialY li .icon pathnot.has-stroke,\n    .socialY li .icon circle.has-stroke {\n      stroke: #090954 !important; }\n.socialY li .icon:hover svg:not(.not-fill),\n    .socialY li .icon:hover path:not(.not-fill),\n    .socialY li .icon:hover circle:not(.not-fill) {\n      fill: #bbd1ea !important; }\n.socialY li .icon:hover svg.has-stroke,\n    .socialY li .icon:hover path.has-stroke,\n    .socialY li .icon:hover circle.has-stroke {\n      stroke: #bbd1ea !important; }\n.credits {\n  margin-top: 40px;\n  color: #bbd1ea !important;\n  font-family: Apercu;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 20px; }\n.credits a {\n    color: #bbd1ea !important;\n    text-decoration: none; }\n#popup_account {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  padding: 20px;\n  background: #ffffff;\n  visibility: hidden;\n  z-index: 99999; }\n#popup_account .popup_account_header {\n    padding-bottom: 30px; }\n#popup_account .popup_account_header .account_icon_in_popup {\n      width: 20px;\n      height: 20px;\n      top: 20px;\n      /* left: 75%; */\n      right: 45px;\n      position: absolute;\n      z-index: 999;\n      cursor: pointer;\n      background-image: url(/assets/img/Profile.svg);\n      -webkit-mask-image: url(/assets/img/Profile.svg);\n              mask-image: url(/assets/img/Profile.svg);\n      background-repeat: no-repeat; }\n#popup_account .popup_account_header .account_icon_in_popup.close {\n        color: #090954;\n        opacity: 1;\n        filter: alpha(opacity=100); }\n#popup_account .popup_account_header #close_popup_account {\n      float: right;\n      cursor: pointer; }\n#popup_account .popup_account_content {\n    padding: 0 20px; }\n#popup_account .form_item {\n    margin-bottom: 15px; }\n#popup_account .form_item .form_email,\n    #popup_account .form_item .form_submit,\n    #popup_account .form_item .form_pass,\n    #popup_account .form_item .form_text {\n      display: block;\n      background: none;\n      border: none;\n      border-bottom: 5px solid #f9f4ef;\n      height: 40px;\n      line-height: 40px;\n      color: #090954;\n      width: 100%;\n      text-transform: uppercase;\n      font-family: Univ; }\n#popup_account .form_item .form_email,\n    #popup_account .form_item .form_pass,\n    #popup_account .form_item .form_text {\n      font-size: 14px;\n      text-transform: initial; }\n#popup_account .form_item .form_email::-webkit-input-placeholder,\n    #popup_account .form_item .form_pass::-webkit-input-placeholder,\n    #popup_account .form_item .form_text::-webkit-input-placeholder {\n      /* WebKit, Blink, Edge */\n      color: #090954; }\n#popup_account .form_item .form_email:-moz-placeholder,\n    #popup_account .form_item .form_pass:-moz-placeholder,\n    #popup_account .form_item .form_text:-moz-placeholder {\n      /* Mozilla Firefox 4 to 18 */\n      color: #090954;\n      opacity: 1; }\n#popup_account .form_item .form_email::-moz-placeholder,\n    #popup_account .form_item .form_pass::-moz-placeholder,\n    #popup_account .form_item .form_text::-moz-placeholder {\n      /* Mozilla Firefox 19+ */\n      color: #090954;\n      opacity: 1; }\n#popup_account .form_item .form_email:-ms-input-placeholder,\n    #popup_account .form_item .form_pass:-ms-input-placeholder,\n    #popup_account .form_item .form_text:-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      color: #090954; }\n#popup_account .form_item .form_email:placeholder-shown,\n    #popup_account .form_item .form_pass:placeholder-shown,\n    #popup_account .form_item .form_text:placeholder-shown {\n      /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n      color: #090954; }\n#popup_account .form_item .form_email::-webkit-input-placeholder, #popup_account .form_item .form_email:-ms-input-placeholder, #popup_account .form_item .form_email:-moz-placeholder,\n    #popup_account .form_item .form_pass::-webkit-input-placeholder,\n    #popup_account .form_item .form_pass:-ms-input-placeholder,\n    #popup_account .form_item .form_pass:-moz-placeholder,\n    #popup_account .form_item .form_text::-webkit-input-placeholder,\n    #popup_account .form_item .form_text:-ms-input-placeholder,\n    #popup_account .form_item .form_text:-moz-placeholder {\n      text-transform: uppercase; }\n#popup_account .form_links a {\n    color: #090954;\n    text-decoration: underline;\n    cursor: pointer; }\n#popup_account .form_links + .form_item {\n    margin-top: 30px; }\n#popup_account .form_intro,\n  #popup_account .form_footer {\n    color: #090954;\n    margin-bottom: 15px;\n    text-align: center; }\n#popup_account .form_intro a,\n    #popup_account .form_footer a {\n      color: #090954;\n      text-decoration: underline;\n      cursor: pointer; }\n#popup_account .form_legend {\n    color: #090954;\n    margin-top: 20px; }\n#popup_account .form_actions {\n    margin: 35px 0 0;\n    text-align: center; }\n#popup_account .form_actions .rounded_btn {\n      margin-bottom: 20px; }\n#popup_account .form_actions .rounded_btn.signin_btn, #popup_account .form_actions .rounded_btn.resetpass_btn, #popup_account .form_actions .rounded_btn.signup_btn {\n        text-transform: uppercase; }\n#popup_account .form_actions .rounded_btn.fb_signin_btn, #popup_account .form_actions .rounded_btn.gg_signin_btn {\n        width: 40px;\n        height: 40px;\n        line-height: 40px;\n        border-radius: 50%;\n        display: inline-block;\n        margin: 0 10px; }\n#popup_account .form_actions .rounded_btn.fb_signin_btn .fa, #popup_account .form_actions .rounded_btn.gg_signin_btn .fa {\n          display: inline-block; }\n#popup_account .form_actions .rounded_btn.fb_signin_btn .btn_txt, #popup_account .form_actions .rounded_btn.gg_signin_btn .btn_txt {\n          /* display: inline-block; */\n          display: none; }\n#popup_account .form_actions .rounded_btn.create_acc_btn {\n        background-color: #f9f4ef;\n        color: #090954;\n        height: 38px;\n        line-height: 38px;\n        width: 100%;\n        display: block;\n        border-radius: 20px;\n        border: none;\n        cursor: pointer;\n        text-align: center;\n        text-transform: uppercase; }\n#popup_account .form_actions .rounded_btn.create_acc_btn:hover {\n          color: #f9f4ef;\n          background-color: #090954;\n          text-decoration: none; }\n#popup_account .restpass_success_content {\n    color: #090954;\n    text-align: center; }\n#popup_account .restpass_success_content .restpass_success_icon {\n      /* width: 50px;\r\n      height: 50px;\r\n      @include border-radius(50%);\r\n      background-color: $bg-color2; */\n      margin: 0 auto 30px; }\n#popup_account .restpass_success_content .restpass_success_message {\n      margin-bottom: 35px; }\n#popup_account .restpass_success_content .restpass_success_links a {\n      cursor: pointer;\n      color: #090954;\n      text-decoration: underline; }\n#popup_account.active {\n    visibility: visible; }\n.error_message {\n  color: #b54747; }\n/*********************\r\nLARGER MOBILE DEVICES\r\nThis is for devices like the Galaxy Note or something that's\r\nlarger than an iPhone but smaller than a tablet. Let's call them\r\ntweeners.\r\n*********************/\n/*********************\r\nTABLET & SMALLER LAPTOPS\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n/*********************\r\nDESKTOP\r\nThis is the average viewing window. So Desktops, Laptops, and\r\nin general anyone not viewing on a mobile device. Here's where\r\nyou can add resource intensive styles.\r\n*********************/\n@media only screen and (min-width: 770px) {\n  /*Header*/\n  header .search {\n    top: 22px;\n    left: 60px; }\n  header .logo {\n    top: 10px; }\n  .MenuContainer .separator {\n    margin-left: 40px;\n    margin-right: 40px; }\n  .MenuContainer .imagesMenu .imgMenu .img {\n    height: 160px;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat; }\n  #menu_all_infos {\n    padding-bottom: 30px;\n    padding-top: 20px; }\n  #menu_all_infos_l,\n  #menu_all_infos_r {\n    width: calc(50% - 60px);\n    float: left;\n    margin-left: 40px; }\n  #menu_all_infos_r {\n    padding-top: 0; }\n  .infoMenu {\n    padding: 0; }\n    .infoMenu .aboutY,\n    .infoMenu .newsletter {\n      /* width: 50%;\r\n    float: left; */\n      /* @include grid-column(6, $custom-grid--info-menu); */ }\n  .infoMenu .titre,\n  .infoY .titre,\n  .legalsY .titre,\n  .socialY .titre,\n  .newsletter .titre {\n    text-align: left;\n    /* padding-left: 40px; */\n    margin-top: 20px;\n    margin-bottom: 20px; }\n  .infoMenu .text,\n  .infoY .text,\n  .legalsY .text,\n  .socialY .text,\n  .newsletter .text {\n    text-align: left;\n    /* padding-left: 40px; */ }\n  .newsletter #mc_embed_signup .inputNewsletter {\n    text-align: left;\n    margin-left: 0;\n    margin-right: 0;\n    width: auto;\n    max-width: 170px; }\n  .aboutY,\n  .newsletter {\n    height: 160px; }\n  .infoY,\n  .legalsY {\n    float: left;\n    width: 50%; }\n  .infoY .titre,\n  .legalsY .titre,\n  .socialY .titre {\n    margin-top: 0; }\n  .credits {\n    clear: both;\n    text-align: left;\n    margin: 10px 0 0; }\n  #popup_account {\n    width: 60%;\n    left: auto;\n    right: 0;\n    height: 100%; }\n    #popup_account .popup_account_header .account_icon_in_popup {\n      width: 16px;\n      height: 16px;\n      top: 22.23px;\n      /* left: 90%; */ }\n    #popup_account .form_actions {\n      width: 52%;\n      margin-left: auto;\n      margin-right: auto;\n      text-align: center; }\n      #popup_account .form_actions .rounded_btn.fb_signin_btn, #popup_account .form_actions .rounded_btn.gg_signin_btn {\n        /* @include border-radius(50%);\r\n        width: 40px;\r\n        height: 40px;\r\n        line-height: 40px;\r\n        display: inline-block;\r\n        text-align: center;\r\n        margin: 0 8px; */\n        /* .btn_txt {\r\n          display: none;\r\n        } */ }\n        #popup_account .form_actions .rounded_btn.fb_signin_btn .fa, #popup_account .form_actions .rounded_btn.gg_signin_btn .fa {\n          margin: 0;\n          font-size: 18px; } }\n/*********************\r\nLARGE VIEWING SIZE\r\nThis is for the larger monitors and possibly full screen viewers.\r\n*********************/\n@media only screen and (min-width: 1025px) {\n  .MenuContainer .imagesMenu .imgMenu {\n    width: 33.33%;\n    float: left; }\n    .MenuContainer .imagesMenu .imgMenu .text {\n      margin-top: 35px;\n      margin-bottom: 30px; }\n    .MenuContainer .imagesMenu .imgMenu .img {\n      height: 230px; }\n  .MenuContainer .imagesMenu #imgMenu2 .img {\n    background-position-x: 69%; }\n  .MenuContainer .imagesMenu .text {\n    margin-left: 40px;\n    text-align: left; }\n  #menu_all_infos_l,\n  #menu_all_infos_r {\n    width: calc(33.33333333%);\n    float: left;\n    margin-left: 0;\n    padding-left: 40px;\n    box-sizing: border-box; }\n  #menu_all_infos_r #menu_all_infos_r_inner {\n    max-width: 265px;\n    margin: 0 auto; }\n  .newsletter #mc_embed_signup .inputNewsletter {\n    max-width: 265px; }\n  #popup_account {\n    width: 100%;\n    max-width: 340px;\n    /* .popup_account_header {\r\n    .account_icon_in_popup{\r\n      left: 95.5%;\r\n    }\r\n  } */ }\n    #popup_account .form_intro {\n      max-width: 150px;\n      margin-right: auto;\n      margin-left: auto; }\n    #popup_account .form_actions {\n      width: 100%;\n      /* .rounded_btn {\r\n      &.fb_signin_btn, &.gg_signin_btn {\r\n        @include rounded-btn($bg-color2, $txt-color1);\r\n        margin: 0 0 20px;\r\n\r\n        .fa {\r\n          margin-right: 15px;\r\n        }\r\n        .btn_txt {\r\n          display: inline-block;\r\n        }\r\n      }\r\n    } */ } }\n/*********************\r\nRETINA (2x RESOLUTION DEVICES)\r\nThis applies to the retina iPhone (4s) and iPad (2,3) along with\r\nother displays with a 2x resolution. You can also create a media\r\nquery for retina AND a certain size if you want. Go Nuts.\r\n*********************/\n/*********************\r\nPRINT STYLESHEET\r\nFeel free to customize this. Remember to add things that won't make\r\nsense to print at the bottom. Things like nav, ads, and forms should\r\nbe set to display none.\r\n*********************/\n/* @media print { */\n/* } */\n"

/***/ }),

/***/ "./src/shared/navbar/navbar.component.ts":
/*!***********************************************!*\
  !*** ./src/shared/navbar/navbar.component.ts ***!
  \***********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cart/cart.service */ "./src/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, appService, cartService) {
        this.router = router;
        this.appService = appService;
        this.cartService = cartService;
        this.isOpen = false;
        this.isOpenSearch = false;
        this.isOpenPanier = false;
        this.isOpenAccount = false;
        this.numberItemsPanier = 0;
        this.charms = 'Charms';
        this.chains = 'Chains';
        this.lookbook = 'Lookbook';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems = this.cartService.localCart.length;
        this.sliderVersionTabletMobile = this.appService.sliderVersionTabletMobile;
        this.appService.changeInHome.subscribe(function (value) {
            if (value === 'change') {
                _this.sliderVersionTabletMobile = _this.appService.sliderVersionTabletMobile;
            }
        });
        this.cartService.cartUpdated.subscribe(function (value) {
            _this.cartItems = _this.cartService.localCart.length;
        });
    };
    NavbarComponent.prototype.getExtension = function (path) {
        if (path !== undefined) {
            try {
                var basename = path.split(/[\\/]/).pop();
                var pos = basename.lastIndexOf('.');
                if (basename === '' || pos < 1) {
                    return '';
                }
                return basename.slice(pos + 1);
            }
            catch (e) {
                console.warn(path, e);
                return '';
            }
        }
        else {
            return '';
        }
    };
    NavbarComponent.prototype.aboutClick = function () {
        this.router.navigate(['about']);
        this.isOpen = false;
    };
    NavbarComponent.prototype.goToChains = function () {
        this.router.navigate(['chains']);
        this.isOpen = false;
    };
    NavbarComponent.prototype.goToCharms = function () {
        this.router.navigate(['charms']);
        this.isOpen = false;
    };
    NavbarComponent.prototype.goToLookbook = function () { };
    NavbarComponent.prototype.openSearch = function () { };
    NavbarComponent.prototype.openAccountPopup = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/shared/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/shared/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/shared/about/about.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social/social.component */ "./src/shared/social/social.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_4__["SocialComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_4__["SocialComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/shared/social/social.component.html":
/*!*************************************************!*\
  !*** ./src/shared/social/social.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\r\n  <div class=\"table\">\r\n    <ul class=\"horizontal-list\">\r\n      <li>\r\n        <a class=\"fb icon\" href=\"https://www.facebook.com/ThisisYjewelry-1735514419791954/\" target=\"_blank\" rel=\"noopener\">\r\n          <img src=\"./../../assets/img/Facebook.svg\" />\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"instagram icon\" href=\"https://www.instagram.com/thisisyjewelry/\" target=\"_blank\" rel=\"noopener\">\r\n          <img src=\"./../../assets/img/Instagram.svg\" />\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"twitter icon\" href=\"https://twitter.com/thisisyjewelry\" target=\"_blank\" rel=\"noopener\">\r\n          <img src=\"./../../assets/img/Twitter.svg\" />\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"pinterest icon\" href=\"https://www.pinterest.com/thisisyjewelry\" target=\"_blank\" rel=\"noopener\">\r\n          <img src=\"./../../assets/img/Pinterest.svg\" />\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"google icon\" href=\"https://www.roposo.com/profile/yjewelry/af274109-1ee0-4ffc-b500-c0dfd0cd165f?query=USER_@yjewelry&amp;num=0&amp;entityID=af274109-1ee0-4ffc-b500-c0dfd0cd165f\"\r\n          target=\"_blank\" rel=\"noopener\">\r\n          <img src=\"./../../assets/img/Social-network.svg\" />\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/shared/social/social.component.scss":
/*!*************************************************!*\
  !*** ./src/shared/social/social.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  background: transparent; }\n\n.horizontal-list {\n  list-style: none;\n  margin: 0;\n  padding: 1em 1em; }\n\n.horizontal-list li {\n  display: inline; }\n"

/***/ }),

/***/ "./src/shared/social/social.component.ts":
/*!***********************************************!*\
  !*** ./src/shared/social/social.component.ts ***!
  \***********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/shared/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.scss */ "./src/shared/social/social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\source\repos\YJewellery\src\Presentation\Nop.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map