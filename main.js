/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: color-mix(in srgb, rgb(31, 29, 23),rgb(70, 70, 189) 80%);
}


.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    gap: 3px;
    min-height: 90vh;
    width: 1000px;
   /*  box-sizing: border-box;  */
} 


.contents {
    display: flex;
    flex-direction: column;
    /* flex-grow: 1;
    flex-shrink: 0; */
    outline: 0.1px solid green;
    justify-content: space-around;
    background-color: rgb(221, 204, 105);
    border-radius: 5%;
    min-height: 3vh; 
    width: 120px;
}

.styNone{
    display: none;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,wIAAwI;IACxI,0EAA0E;AAC9E;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,aAAa;GACd,8BAA8B;AACjC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB;qBACiB;IACjB,0BAA0B;IAC1B,6BAA6B;IAC7B,oCAAoC;IACpC,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background-color: color-mix(in srgb, rgb(31, 29, 23),rgb(70, 70, 189) 80%);\n}\n\n\n.container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; \n    gap: 3px;\n    min-height: 90vh;\n    width: 1000px;\n   /*  box-sizing: border-box;  */\n} \n\n\n.contents {\n    display: flex;\n    flex-direction: column;\n    /* flex-grow: 1;\n    flex-shrink: 0; */\n    outline: 0.1px solid green;\n    justify-content: space-around;\n    background-color: rgb(221, 204, 105);\n    border-radius: 5%;\n    min-height: 3vh; \n    width: 120px;\n}\n\n.styNone{\n    display: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM/board.js":
/*!**************************!*\
  !*** ./src/DOM/board.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gridStructure: () => (/* binding */ gridStructure)
/* harmony export */ });
/* harmony import */ var _battleShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../battleShip */ "./src/battleShip.js");

//import './style.css';




const winner = document.querySelector('.winner');

class gridStructure{
    
    constructor(num=10){
        this.gSize = 400 / num;
        this.play1 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
        this.play2 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
        this.ship1 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(2);
        this.ship2 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
        this.ship3 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(4);
        this.ship4 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(5);
        this.ship12 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(2);
        this.ship22 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
        this.ship32 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(4);
        this.ship42 = new _battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship(5);
        this.arr1 = this.play1.coords;
        this.arr2 = this.play2.coords;
        this.validClick = true; 
    }

    player1(board){
        this.play1.placeShip(this.ship1, [1,3], "horizontal");
        this.play1.placeShip(this.ship2, [0,0], "vertical");
        this.play1.placeShip(this.ship3, [8,6], "horizontal");
        this.play1.placeShip(this.ship4, [2,9], "vertical");
        
        for (let i=0;i<10 ; i++ ) {
            const content = document.createElement('div');
            content.classList.add('content1');
            content.innerText = i;
    
            for (let j=0;j< 10 ; j++) {
                const contents = document.createElement('div');
                contents.classList.add('contents1');
                contents.classList.add('contents');
                contents.id = `${j},${i},1`;
    
                const span = document.createElement('span');
                span.append(this.arr1[j][i]);
                span.classList.add('styNone');
    
                contents.append(span);
                contents.style.height = `${this.gSize}px`;
                contents.style.width = `${this.gSize}px`;
                content.appendChild(contents);
            }
            board.appendChild(content);
            board.classList.add('container');
        }

        const contents1 = document.querySelectorAll('.contents1');
        contents1.forEach(contents => {
            if(contents.textContent !== "null"){
                contents.style.backgroundColor = 'grey';
            }
        });

    }

    player2(board){
        
        // randomly places computer ships
        const comShipNo = placeComputerShips();

        this.play2.placeShip(this.ship12, [comShipNo[0],comShipNo[4]], "horizontal");
        this.play2.placeShip(this.ship22, [comShipNo[1],comShipNo[5]], "vertical");
        this.play2.placeShip(this.ship32, [comShipNo[2],comShipNo[1]], "horizontal");
        this.play2.placeShip(this.ship42, [comShipNo[3],comShipNo[7]], "vertical");

        for (let i=0;i<10 ; i++ ) {
            const content = document.createElement('div');
            content.classList.add('content2');
            content.innerText = i;
    
            for (let j=0;j< 10 ; j++) {
                const contents = document.createElement('div');
                contents.classList.add('contents2');
                contents.classList.add('contents');
                contents.id = `${j},${i},2`;
    
                const span = document.createElement('span');
                span.append(this.arr2[j][i]);
                span.classList.add('styNone');
    
                contents.append(span);
                contents.style.height = `${this.gSize}px`;
                contents.style.width = `${this.gSize}px`;
                content.appendChild(contents);
            }
            board.appendChild(content);
            board.classList.add('container');
        }

        const contents = document.querySelectorAll('.contents2');

        // uncomment below to make computer selection visible.
        /* contents.forEach(contents => {
            if(contents.textContent !== "null"){
                contents.style.backgroundColor = 'grey';
            }
        }); */

        contents.forEach(contents => {
            contents.addEventListener('click', (e) => {


                this.validClick = true;

                if((contents.style.backgroundColor == 'blue') || (contents.style.backgroundColor == 'red') ){
                    this.validClick = false;
                }
    
                if( this.validClick ){ 
                    let ind = e.target.id;
                    if(contents.textContent === "null"){
                        contents.style.backgroundColor = 'blue';
                        this.play2.receiveAttack(ind[0],ind[2]);
                        
                    }else if(contents.textContent !== "null"){
                        contents.style.backgroundColor = 'red';
                        this.play2.receiveAttack(ind[0],ind[2]);
                        
                        if( this.play2.allSank()=== "All ships have been sunk" ){
                            winner.textContent = "Ships sank, you win!!";
                            return;
                        }
                    }
                    
                    let indComp = getComputerChoice(this.arr1, "X", "M");                                   

                    const cont1 = document.getElementById(`${indComp[0]},${indComp[1]},1`);

                    if(cont1.textContent === "null"){
                        cont1.style.backgroundColor = 'blue';
                        this.play1.receiveAttack(indComp[0],indComp[1]);
                        
                    }else if(cont1.textContent !== "null" ){
                        cont1.style.backgroundColor = 'red';
                        this.play1.receiveAttack(indComp[0],indComp[1]);
                        
                        if( this.play1.allSank()=== "All ships have been sunk" ){                           
                            winner.textContent = "Ships sank, computer wins!!";
                            return;
                        }
                    }  
                }
            
                     
            });
        }); 

    }

}

function getComputerChoice(choices,a,b) {
    let randomChosen = Math.floor(Math.random()*choices.length);
    let ran1d = choices[randomChosen];
    let randomNumber = Math.floor(Math.random()*ran1d.length);
    let ran2d = ran1d[randomNumber];
    
    while(ran2d == a || ran2d == b){
        randomChosen = Math.floor(Math.random()*choices.length);
        ran1d = choices[randomChosen];
        randomNumber = Math.floor(Math.random()*ran1d.length);
        ran2d = ran1d[randomNumber];
        
    }

    return [randomChosen, randomNumber,ran2d]; 
}

function placeComputerShips(){
    let allNum = [];
    let a1 = Math.floor(Math.random()*6);
    allNum.push(a1);
    let a2 = Math.floor(Math.random()*6);
    if(!allNum.includes(a2)) allNum.push(a2);
    else {
        a2 = Math.floor(Math.random()*6);
        allNum.push(a2);
    }
    let a3 = Math.floor(Math.random()*6);
    if(!allNum.includes(a3)) allNum.push(a3);
    else {
        a3 = Math.floor(Math.random()*6);
        allNum.push(a3);
    }
    let a4 = Math.floor(Math.random()*6);
    if(!allNum.includes(a4)) allNum.push(a4);
    else {
        a4 = Math.floor(Math.random()*6);
        allNum.push(a4);
    }

    for(let i=0; i<4; i++){
        let randNumber = Math.floor(Math.random()*9);
        allNum.push(randNumber);
    }

    return allNum;
    
}








/***/ }),

/***/ "./src/battleShip.js":
/*!***************************!*\
  !*** ./src/battleShip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });

class Ship{
    constructor(length=null, timesHit=null, sunk=false){
        this.length = length;
        this.timesHit = timesHit;
        this.sunk = sunk;
    }
    hit(){
        return this.timesHit++;
    }
    isSunk(){
        if (this.length == this.timesHit) return this.sunk = true;
    }
}

class Gameboard {

    constructor(){
       this.ships = [];
       this.coords =[];

       let rows = 10, columns = 10;
        //const coords = [];
        for(let i =0; i <rows; i++){
            this.coords[i] = [];
            for(let j = 0; j < columns; j++){
                this.coords[i][j] = null;
            }
        }
    }
    
    placeShip(ship, cord, direcTion){
        
        for(let i=1; i < ship.length; i++){
            if(direcTion == "vertical"){
                this.coords[ cord[0] ][ cord[1] ] = ship.length - 1;
                this.coords[ cord[0] + i][ cord[1] ] = ship.length -1;
            }
            else if(direcTion == "horizontal"){
                this.coords[ cord[0] ][ cord[1] ] = ship.length - 1;
                this.coords[ cord[0] ][ cord[1] + i] = ship.length - 1;
            }
        }

        this.ships.push(ship);
        return this.ships;
    }

    receiveAttack(x,y){
        //const missed =[];
        if(this.coords[x][y] == null){
            this.coords[x][y] = "M";
            //missed
        }
        else{
            for (let ship of this.ships){
                if(this.coords[x][y] == ship.length - 1) {
                    this.coords[x][y] = "X";
                    ship.hit();
                    ship.isSunk();
                } 
            }
        }

        return this.coords;
       /*  if(destroyer.isSunk() && submarine.isSunk() && cruiser.isSunk() && battleShip.isSunk() && carrier.isSunk()){
            return "All ships have been sunk";
        } */
    }

    allSank(){
        let count=0;
        for (let ship of this.ships){
            if(ship.sunk == true) count++;
        }
        if (count == this.ships.length) return "All ships have been sunk";
    }

}

class Player{
    constructor(realPlayer, comPlayer){
        this.realPlayer = realPlayer;
        this.comPlayer = comPlayer;
    }
    players(){
        this.realPlayer = new Gameboard();
        this.comPlayer  = new Gameboard();
    }
}



/* const ship1 = new Ship(length = 3);
ship1.hit(); ship1.hit(); ship1.hit();
console.log(ship1);
ship1.isSunk();
console.log(ship1.isSunk());
console.log(ship1); */





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/board */ "./src/DOM/board.js");




const board1 = document.querySelector('.board1');
const board2 = document.querySelector('.board2');

let boards = new _DOM_board__WEBPACK_IMPORTED_MODULE_1__.gridStructure();

boards.player1(board1);
boards.player2(board2);

const restartButtn = document.querySelector('.clean');
const winner = document.querySelector('.winner');

restartButtn.addEventListener('click', () => {
    
    while(board1.firstChild){
        board1.removeChild(board1.firstChild);
    }

    while(board2.firstChild){
        board2.removeChild(board2.firstChild);
    }

    boards = new _DOM_board__WEBPACK_IMPORTED_MODULE_1__.gridStructure();

    boards.player1(board1);
    boards.player2(board2);
    winner.textContent ="";
})




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQzs7QUFFakM7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7O1VDbEdwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXVCOztBQUU1QztBQUNBOztBQUVBLGlCQUFpQixxREFBYTs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxREFBYTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXR0bGVTaGlwLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCByZ2IoMzEsIDI5LCAyMykscmdiKDcwLCA3MCwgMTg5KSA4MCUpO1xufVxuXG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBnYXA6IDNweDtcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAvKiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICovXG59IFxuXG5cbi5jb250ZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMDsgKi9cbiAgICBvdXRsaW5lOiAwLjFweCBzb2xpZCBncmVlbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMDQsIDEwNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgbWluLWhlaWdodDogM3ZoOyBcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbi5zdHlOb25le1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSx3SUFBd0k7SUFDeEksMEVBQTBFO0FBQzlFOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGFBQWE7R0FDZCw4QkFBOEI7QUFDakM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtxQkFDaUI7SUFDakIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHJnYigzMSwgMjksIDIzKSxyZ2IoNzAsIDcwLCAxODkpIDgwJSk7XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgIGdhcDogM3B4O1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgIC8qICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgKi9cXG59IFxcblxcblxcbi5jb250ZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGZsZXgtZ3JvdzogMTtcXG4gICAgZmxleC1zaHJpbms6IDA7ICovXFxuICAgIG91dGxpbmU6IDAuMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjA0LCAxMDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgbWluLWhlaWdodDogM3ZoOyBcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4uc3R5Tm9uZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbi8vaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSBmcm9tIFwiLi4vYmF0dGxlU2hpcFwiO1xuXG5jb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XG5cbmNsYXNzIGdyaWRTdHJ1Y3R1cmV7XG4gICAgXG4gICAgY29uc3RydWN0b3IobnVtPTEwKXtcbiAgICAgICAgdGhpcy5nU2l6ZSA9IDQwMCAvIG51bTtcbiAgICAgICAgdGhpcy5wbGF5MSA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5wbGF5MiA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwMSA9IG5ldyBTaGlwKDIpO1xuICAgICAgICB0aGlzLnNoaXAyID0gbmV3IFNoaXAoMyk7XG4gICAgICAgIHRoaXMuc2hpcDMgPSBuZXcgU2hpcCg0KTtcbiAgICAgICAgdGhpcy5zaGlwNCA9IG5ldyBTaGlwKDUpO1xuICAgICAgICB0aGlzLnNoaXAxMiA9IG5ldyBTaGlwKDIpO1xuICAgICAgICB0aGlzLnNoaXAyMiA9IG5ldyBTaGlwKDMpO1xuICAgICAgICB0aGlzLnNoaXAzMiA9IG5ldyBTaGlwKDQpO1xuICAgICAgICB0aGlzLnNoaXA0MiA9IG5ldyBTaGlwKDUpO1xuICAgICAgICB0aGlzLmFycjEgPSB0aGlzLnBsYXkxLmNvb3JkcztcbiAgICAgICAgdGhpcy5hcnIyID0gdGhpcy5wbGF5Mi5jb29yZHM7XG4gICAgICAgIHRoaXMudmFsaWRDbGljayA9IHRydWU7IFxuICAgIH1cblxuICAgIHBsYXllcjEoYm9hcmQpe1xuICAgICAgICB0aGlzLnBsYXkxLnBsYWNlU2hpcCh0aGlzLnNoaXAxLCBbMSwzXSwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB0aGlzLnBsYXkxLnBsYWNlU2hpcCh0aGlzLnNoaXAyLCBbMCwwXSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgdGhpcy5wbGF5MS5wbGFjZVNoaXAodGhpcy5zaGlwMywgWzgsNl0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgdGhpcy5wbGF5MS5wbGFjZVNoaXAodGhpcy5zaGlwNCwgWzIsOV0sIFwidmVydGljYWxcIik7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7aTwxMCA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudDEnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gaTtcbiAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDtqPCAxMCA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGVudHMuY2xhc3NMaXN0LmFkZCgnY29udGVudHMxJyk7XG4gICAgICAgICAgICAgICAgY29udGVudHMuY2xhc3NMaXN0LmFkZCgnY29udGVudHMnKTtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5pZCA9IGAke2p9LCR7aX0sMWA7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuLmFwcGVuZCh0aGlzLmFycjFbal1baV0pO1xuICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnc3R5Tm9uZScpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzLmFwcGVuZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmdTaXplfXB4YDtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5zdHlsZS53aWR0aCA9IGAke3RoaXMuZ1NpemV9cHhgO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50czEnKTtcbiAgICAgICAgY29udGVudHMxLmZvckVhY2goY29udGVudHMgPT4ge1xuICAgICAgICAgICAgaWYoY29udGVudHMudGV4dENvbnRlbnQgIT09IFwibnVsbFwiKXtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcGxheWVyMihib2FyZCl7XG4gICAgICAgIFxuICAgICAgICAvLyByYW5kb21seSBwbGFjZXMgY29tcHV0ZXIgc2hpcHNcbiAgICAgICAgY29uc3QgY29tU2hpcE5vID0gcGxhY2VDb21wdXRlclNoaXBzKCk7XG5cbiAgICAgICAgdGhpcy5wbGF5Mi5wbGFjZVNoaXAodGhpcy5zaGlwMTIsIFtjb21TaGlwTm9bMF0sY29tU2hpcE5vWzRdXSwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB0aGlzLnBsYXkyLnBsYWNlU2hpcCh0aGlzLnNoaXAyMiwgW2NvbVNoaXBOb1sxXSxjb21TaGlwTm9bNV1dLCBcInZlcnRpY2FsXCIpO1xuICAgICAgICB0aGlzLnBsYXkyLnBsYWNlU2hpcCh0aGlzLnNoaXAzMiwgW2NvbVNoaXBOb1syXSxjb21TaGlwTm9bMV1dLCBcImhvcml6b250YWxcIik7XG4gICAgICAgIHRoaXMucGxheTIucGxhY2VTaGlwKHRoaXMuc2hpcDQyLCBbY29tU2hpcE5vWzNdLGNvbVNoaXBOb1s3XV0sIFwidmVydGljYWxcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaT0wO2k8MTAgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQyJyk7XG4gICAgICAgICAgICBjb250ZW50LmlubmVyVGV4dCA9IGk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7ajwgMTAgOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRzMicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRzJyk7XG4gICAgICAgICAgICAgICAgY29udGVudHMuaWQgPSBgJHtqfSwke2l9LDJgO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3Bhbi5hcHBlbmQodGhpcy5hcnIyW2pdW2ldKTtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3N0eU5vbmUnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb250ZW50cy5hcHBlbmQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29udGVudHMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nU2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgY29udGVudHMuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdTaXplfXB4YDtcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50czInKTtcblxuICAgICAgICAvLyB1bmNvbW1lbnQgYmVsb3cgdG8gbWFrZSBjb21wdXRlciBzZWxlY3Rpb24gdmlzaWJsZS5cbiAgICAgICAgLyogY29udGVudHMuZm9yRWFjaChjb250ZW50cyA9PiB7XG4gICAgICAgICAgICBpZihjb250ZW50cy50ZXh0Q29udGVudCAhPT0gXCJudWxsXCIpe1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7ICovXG5cbiAgICAgICAgY29udGVudHMuZm9yRWFjaChjb250ZW50cyA9PiB7XG4gICAgICAgICAgICBjb250ZW50cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRDbGljayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZigoY29udGVudHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdibHVlJykgfHwgKGNvbnRlbnRzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAncmVkJykgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnZhbGlkQ2xpY2sgKXsgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGVudHMudGV4dENvbnRlbnQgPT09IFwibnVsbFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheTIucmVjZWl2ZUF0dGFjayhpbmRbMF0saW5kWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihjb250ZW50cy50ZXh0Q29udGVudCAhPT0gXCJudWxsXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkyLnJlY2VpdmVBdHRhY2soaW5kWzBdLGluZFsyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLnBsYXkyLmFsbFNhbmsoKT09PSBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vua1wiICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gXCJTaGlwcyBzYW5rLCB5b3Ugd2luISFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRDb21wID0gZ2V0Q29tcHV0ZXJDaG9pY2UodGhpcy5hcnIxLCBcIlhcIiwgXCJNXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbmRDb21wWzBdfSwke2luZENvbXBbMV19LDFgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihjb250MS50ZXh0Q29udGVudCA9PT0gXCJudWxsXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udDEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5MS5yZWNlaXZlQXR0YWNrKGluZENvbXBbMF0saW5kQ29tcFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoY29udDEudGV4dENvbnRlbnQgIT09IFwibnVsbFwiICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250MS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheTEucmVjZWl2ZUF0dGFjayhpbmRDb21wWzBdLGluZENvbXBbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdGhpcy5wbGF5MS5hbGxTYW5rKCk9PT0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmtcIiApeyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiU2hpcHMgc2FuaywgY29tcHV0ZXIgd2lucyEhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyBcblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlckNob2ljZShjaG9pY2VzLGEsYikge1xuICAgIGxldCByYW5kb21DaG9zZW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY2hvaWNlcy5sZW5ndGgpO1xuICAgIGxldCByYW4xZCA9IGNob2ljZXNbcmFuZG9tQ2hvc2VuXTtcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnJhbjFkLmxlbmd0aCk7XG4gICAgbGV0IHJhbjJkID0gcmFuMWRbcmFuZG9tTnVtYmVyXTtcbiAgICBcbiAgICB3aGlsZShyYW4yZCA9PSBhIHx8IHJhbjJkID09IGIpe1xuICAgICAgICByYW5kb21DaG9zZW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY2hvaWNlcy5sZW5ndGgpO1xuICAgICAgICByYW4xZCA9IGNob2ljZXNbcmFuZG9tQ2hvc2VuXTtcbiAgICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnJhbjFkLmxlbmd0aCk7XG4gICAgICAgIHJhbjJkID0gcmFuMWRbcmFuZG9tTnVtYmVyXTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIFtyYW5kb21DaG9zZW4sIHJhbmRvbU51bWJlcixyYW4yZF07IFxufVxuXG5mdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoKXtcbiAgICBsZXQgYWxsTnVtID0gW107XG4gICAgbGV0IGExID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xuICAgIGFsbE51bS5wdXNoKGExKTtcbiAgICBsZXQgYTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNik7XG4gICAgaWYoIWFsbE51bS5pbmNsdWRlcyhhMikpIGFsbE51bS5wdXNoKGEyKTtcbiAgICBlbHNlIHtcbiAgICAgICAgYTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNik7XG4gICAgICAgIGFsbE51bS5wdXNoKGEyKTtcbiAgICB9XG4gICAgbGV0IGEzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xuICAgIGlmKCFhbGxOdW0uaW5jbHVkZXMoYTMpKSBhbGxOdW0ucHVzaChhMyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGEzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xuICAgICAgICBhbGxOdW0ucHVzaChhMyk7XG4gICAgfVxuICAgIGxldCBhNCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KTtcbiAgICBpZighYWxsTnVtLmluY2x1ZGVzKGE0KSkgYWxsTnVtLnB1c2goYTQpO1xuICAgIGVsc2Uge1xuICAgICAgICBhNCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KTtcbiAgICAgICAgYWxsTnVtLnB1c2goYTQpO1xuICAgIH1cblxuICAgIGZvcihsZXQgaT0wOyBpPDQ7IGkrKyl7XG4gICAgICAgIGxldCByYW5kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpO1xuICAgICAgICBhbGxOdW0ucHVzaChyYW5kTnVtYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsTnVtO1xuICAgIFxufVxuXG5cbmV4cG9ydCB7Z3JpZFN0cnVjdHVyZX07XG5cblxuXG4iLCJcbmNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoPW51bGwsIHRpbWVzSGl0PW51bGwsIHN1bms9ZmFsc2Upe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50aW1lc0hpdCA9IHRpbWVzSGl0O1xuICAgICAgICB0aGlzLnN1bmsgPSBzdW5rO1xuICAgIH1cbiAgICBoaXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXNIaXQrKztcbiAgICB9XG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PSB0aGlzLnRpbWVzSGl0KSByZXR1cm4gdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICB0aGlzLmNvb3JkcyA9W107XG5cbiAgICAgICBsZXQgcm93cyA9IDEwLCBjb2x1bW5zID0gMTA7XG4gICAgICAgIC8vY29uc3QgY29vcmRzID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9MDsgaSA8cm93czsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuY29vcmRzW2ldID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc1tpXVtqXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcGxhY2VTaGlwKHNoaXAsIGNvcmQsIGRpcmVjVGlvbil7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGk9MTsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoZGlyZWNUaW9uID09IFwidmVydGljYWxcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jb29yZHNbIGNvcmRbMF0gXVsgY29yZFsxXSBdID0gc2hpcC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRzWyBjb3JkWzBdICsgaV1bIGNvcmRbMV0gXSA9IHNoaXAubGVuZ3RoIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkaXJlY1Rpb24gPT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRzWyBjb3JkWzBdIF1bIGNvcmRbMV0gXSA9IHNoaXAubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc1sgY29yZFswXSBdWyBjb3JkWzFdICsgaV0gPSBzaGlwLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCx5KXtcbiAgICAgICAgLy9jb25zdCBtaXNzZWQgPVtdO1xuICAgICAgICBpZih0aGlzLmNvb3Jkc1t4XVt5XSA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuY29vcmRzW3hdW3ldID0gXCJNXCI7XG4gICAgICAgICAgICAvL21pc3NlZFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY29vcmRzW3hdW3ldID09IHNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc1t4XVt5XSA9IFwiWFwiO1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmlzU3VuaygpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHM7XG4gICAgICAgLyogIGlmKGRlc3Ryb3llci5pc1N1bmsoKSAmJiBzdWJtYXJpbmUuaXNTdW5rKCkgJiYgY3J1aXNlci5pc1N1bmsoKSAmJiBiYXR0bGVTaGlwLmlzU3VuaygpICYmIGNhcnJpZXIuaXNTdW5rKCkpe1xuICAgICAgICAgICAgcmV0dXJuIFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rXCI7XG4gICAgICAgIH0gKi9cbiAgICB9XG5cbiAgICBhbGxTYW5rKCl7XG4gICAgICAgIGxldCBjb3VudD0wO1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpe1xuICAgICAgICAgICAgaWYoc2hpcC5zdW5rID09IHRydWUpIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID09IHRoaXMuc2hpcHMubGVuZ3RoKSByZXR1cm4gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmtcIjtcbiAgICB9XG5cbn1cblxuY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKHJlYWxQbGF5ZXIsIGNvbVBsYXllcil7XG4gICAgICAgIHRoaXMucmVhbFBsYXllciA9IHJlYWxQbGF5ZXI7XG4gICAgICAgIHRoaXMuY29tUGxheWVyID0gY29tUGxheWVyO1xuICAgIH1cbiAgICBwbGF5ZXJzKCl7XG4gICAgICAgIHRoaXMucmVhbFBsYXllciA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5jb21QbGF5ZXIgID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwLCBHYW1lYm9hcmQsIFBsYXllcn07XG5cbi8qIGNvbnN0IHNoaXAxID0gbmV3IFNoaXAobGVuZ3RoID0gMyk7XG5zaGlwMS5oaXQoKTsgc2hpcDEuaGl0KCk7IHNoaXAxLmhpdCgpO1xuY29uc29sZS5sb2coc2hpcDEpO1xuc2hpcDEuaXNTdW5rKCk7XG5jb25zb2xlLmxvZyhzaGlwMS5pc1N1bmsoKSk7XG5jb25zb2xlLmxvZyhzaGlwMSk7ICovXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgZ3JpZFN0cnVjdHVyZSB9IGZyb20gXCIuL0RPTS9ib2FyZFwiO1xuXG5jb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQxJyk7XG5jb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQyJyk7XG5cbmxldCBib2FyZHMgPSBuZXcgZ3JpZFN0cnVjdHVyZSgpO1xuXG5ib2FyZHMucGxheWVyMShib2FyZDEpO1xuYm9hcmRzLnBsYXllcjIoYm9hcmQyKTtcblxuY29uc3QgcmVzdGFydEJ1dHRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFuJyk7XG5jb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XG5cbnJlc3RhcnRCdXR0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBcbiAgICB3aGlsZShib2FyZDEuZmlyc3RDaGlsZCl7XG4gICAgICAgIGJvYXJkMS5yZW1vdmVDaGlsZChib2FyZDEuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUoYm9hcmQyLmZpcnN0Q2hpbGQpe1xuICAgICAgICBib2FyZDIucmVtb3ZlQ2hpbGQoYm9hcmQyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGJvYXJkcyA9IG5ldyBncmlkU3RydWN0dXJlKCk7XG5cbiAgICBib2FyZHMucGxheWVyMShib2FyZDEpO1xuICAgIGJvYXJkcy5wbGF5ZXIyKGJvYXJkMik7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID1cIlwiO1xufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==