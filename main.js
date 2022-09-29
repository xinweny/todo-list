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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.clicked {\n\tbackground-color: aqua;\n}\n\n.clicked .delete-project-btn, .sidebar-btn:hover .delete-project-btn {\n\tdisplay: block;\n}\n\n.delete-project-btn {\n\tdisplay: none;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\n#edit-project-title {\n\tdisplay: none;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\twidth: 500px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\tborder-left: 6px solid black;\n\tpadding: 8px;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,SAAS;AACV;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,+BAA+B;CAC/B,iCAAiC;CACjC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;;AAGA;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,6BAA6B;CAC7B,4BAA4B;CAC5B,YAAY;AACb;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,aAAa;AACd","sourcesContent":["* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.clicked {\n\tbackground-color: aqua;\n}\n\n.clicked .delete-project-btn, .sidebar-btn:hover .delete-project-btn {\n\tdisplay: block;\n}\n\n.delete-project-btn {\n\tdisplay: none;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\n#edit-project-title {\n\tdisplay: none;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\twidth: 500px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\tborder-left: 6px solid black;\n\tpadding: 8px;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/Model.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.js */ "./src/View.js");




const Controller = (() => {
	const _filter = {
		all: todo => todo,
		today: todo => todo,
		week: todo => todo
	}

	// Handlers
	const handleShowProjectTodos = project => { 
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodosOfProject(project);
	}

	const handleShowCategoryTodos = filter => {
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].filterTodos(filter);
	}

	const handleAddTodo = (title, description, dueDate, priority, group) => {
		if ('projectId' in group) {
			const project = _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(group.projectId);
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(title, description, dueDate, priority, project);
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodosOfProject(project);
		} else {
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(title, description, dueDate, priority);
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].filterTodos(_filter[group.filter]);
		}
	}

	const handleDeleteTodo = (todo, group) => {
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(todo);

		if ('projectId' in group) {
			const project = _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.projectId);
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodosOfProject(project);
		} else {
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].filterTodos(_filter[group.filter]);
		}
	}

	const handleToggleComplete = todo => todo.toggleComplete();

	const handleAddProject = title => {
		const model = _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(title);

		return model.id;
	}

	const handleEditProject = (id, title) => _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(id, title);

	const handleDeleteProject = project => _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(project);

	// Callback for model when change is detected to bind handlers to event listener binders of View
	function onTodosChanged(todos) {
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(todos);

		for (const todo of todos) {
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindToggleComplete(todo, handleToggleComplete);
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindDeleteTodo(todo, handleDeleteTodo);
		}
	}

	function onProjectsChanged(projects) {
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayProjects(projects);

		for (const project of projects) {
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindShowProjectTodos(project, handleShowProjectTodos);
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindDeleteProject(project, handleDeleteProject);
		}
	}

	// Initialize view
	const _init = (function() {
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindModelChanged('onTodosChanged', onTodosChanged);
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindModelChanged('onProjectsChanged', onProjectsChanged);

		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindAddTodo(handleAddTodo);
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindAddProject(handleAddProject);

		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindToggleProjectForm();
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindShowEditProjectForm();

		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindEditProject(handleEditProject);

		for (const [category, f] of Object.entries(_filter)) {
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindShowCategoryTodos(category, handleShowCategoryTodos.bind(null, f));
		}

		const a = _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject('Shopping List');
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject('Study');

		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo('a', 'b', 'c', 'low', a);
		const b = _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo('e', 'f', 'g', 'high');

		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodos();
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
	})();

	return {
		onTodosChanged,
		onProjectsChanged
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller.js */ "./src/Controller.js");




const Model = (() => {
	let _todos = [];
	let _projects = [];

	function getTodos() {
		this.onTodosChanged(_todos);

		return _todos;
	};

	function getProjects() {
		this.onProjectsChanged(_projects);

		return _projects;
	}

	const getTodo = id => _todos.find(todo => todo.id == id);

	const getProject = id => _projects.find(project => project.id == id);

	const getProjectFromTodo = todo => {
		return _projects.find(project => project.id == todo.projectId);
	}

	function getTodosOfProject(project) {
		const todos = _todos.filter(todo => project.getTodoIds().includes(todo.id));

		this.onTodosChanged(todos);

		return todos;
	}

	const getUncompletedTodos = todos => todos.filter(todo => !todo.complete);

	function filterTodos(filter) {
		const todos = _todos.filter(filter);

		this.onTodosChanged(todos);

		return todos;
	}

	function createTodo(title, description, dueDate, priority, project) {
		const todo = (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority);

		_todos.push(todo);
		if (project) _linkTodoAndProject(todo, project);

		return todo;
	}

	function createProject(title) {
		const project = (0,_Project_js__WEBPACK_IMPORTED_MODULE_1__["default"])(title);
		_projects.push(project);

		this.onProjectsChanged(_projects);
		return project;
	}

	function editTodo(id, property, value) {
		const todo = getTodo(id);
		
		todo[property] = value;
	}

	function editProject(id, title) {
		const project = getProject(id);
		
		project.title = title;

		this.onProjectsChanged(_projects);
	}

	function deleteTodo(todo) {
		const index = _todos.indexOf(todo);
		_todos.splice(index, 1);

		if (todo.projectId) {
			const project = getProject(todo.projectId);
			project.deleteTodoId();
		};
	}

	function deleteProject(project) {
		const todoIds = project.getTodoIds();
		_todos = _todos.filter(todo => !todoIds.includes(todo.id));

		const index = _projects.indexOf(project);
		_projects.splice(index, 1);

		this.onProjectsChanged(_projects);
	}

	function _linkTodoAndProject(todo, project) {
		todo.setProjectId(project.id);
		project.addTodoId(todo.id)
	}

	// Bind model to controller via callback
	function bindModelChanged(key, callback) {
		this[key] = callback;
	}

	return {
		getTodos,
		getProjects,
		getTodo,
		getProject,
		getProjectFromTodo,
		getTodosOfProject,
		getUncompletedTodos,
		filterTodos,
		createTodo,
		createProject,
		editTodo,
		editProject,
		deleteTodo,
		deleteProject,
		bindModelChanged
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _mixins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins.js */ "./src/mixins.js");



const projectProto = Object.assign({
	nextId: 0,
	getTodoIds: function() {
		return this._todoIds;
	},
	addTodoId: function(id) {
		this._todoIds.push(id);
	},
	deleteTodoId: function(id) {
		const index = this._todoIds.indexOf(id);
		this._todoIds.splice(index, 1);
	}
}, _mixins_js__WEBPACK_IMPORTED_MODULE_0__.idMixin);

function Project(title) {
	let obj = Object.create(projectProto);

	obj.setId();
	obj._todoIds = [];
	obj.title = title;
	
	return obj;
};

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _mixins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins.js */ "./src/mixins.js");


const todoProto = Object.assign({
	nextId: 0,
	setProjectId: function(id) {
		this.projectId = id;
	},
	toggleComplete: function() {
		this.complete = !this.complete;
	}
}, _mixins_js__WEBPACK_IMPORTED_MODULE_0__.idMixin);

function Todo(title, description, dueDate, priority) {
	let obj = Object.create(todoProto);
	
	obj.setId();
	obj.title = title;
	obj.description = description;
	obj.dueDate = dueDate;
	obj.priority = priority;
	obj.complete = false;

	return obj;
}

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const View = (() => {
	// Cached elements
	const _elements = {
		allTodosBtn: _getElement('#all-todos'),
		todoGroup: _getElement('#todo-group'),
		todoCards: _getElement('.todo-cards'),
		projectCards: _getElement('#project-cards'),
		addProjectBtn: _getElement('#add-project-btn'),
		projectTitleInput: _getElement('#project-title'),
		addTodoForm: _getElement('#add-todo-form'),
		todoTitleInput: _getElement('#todo-title'),
		todoPriorityInput: _getElement('#todo-priority'),
		todoDueDateInput: _getElement('#todo-duedate'),
		editProjectInput: _getElement('#edit-project-title')
	};

	// Helpers
	function _createElement(tag, className, text) {
		const element = document.createElement(tag);

		if (className) element.classList.add(className);
		if (text) element.textContent = text;

		return element;
	}

	function _getElement(selector) {
		return document.querySelector(selector);
	}

	const _getElements = selector => document.querySelectorAll(selector);

	const _appendChild = (parent, child) => _elements[parent].appendChild(child);

	const _appendChildren = (element, children) => {
		for (const child of children) {
			element.appendChild(child);
		}
	}

	function _createTodoCard(todo) {
		let todoCard = _createElement('div', 'todo-card');
		todoCard.dataset.id = todo.id;

		const checkbox = _createElement('input');
		checkbox.dataset.id = todo.id;
		checkbox.type = 'checkbox';
		checkbox.checked = todo.complete;

		if (todo.complete) {
			todoCard.classList.add('completed');
		} else {
			todoCard.classList.remove('completed');
		}

		const titleText = _createElement('p', 'todo-title', todo.title);

		const dueDateText = _createElement('p', 'todo-duedate', todo.dueDate);

		const deleteBtn = _createElement('button', 'delete-todo-btn');
		deleteBtn.dataset.id = todo.id;
		deleteBtn.textContent = 'x';

		_appendChildren(todoCard, [
			checkbox,
			titleText,
			dueDateText,
			deleteBtn
		]);

		switch (todo.priority) {
			case 'low':
				todoCard.style.borderLeftColor = 'green'; break;
			case 'medium':
				todoCard.style.borderLeftColor = 'orange'; break;
			case 'high':
				todoCard.style.borderLeftColor = 'red'; break;
			default:
				break;
		}

		return todoCard
	}

	function _createProjectCard(project) {
		const projectCard = _createElement('div', 'project-card');
		projectCard.classList.add('sidebar-btn');

		projectCard.dataset.id = project.id;

		const titleText = _createElement('p')
		titleText.textContent = project.title;

		const deleteBtn = _createElement('button', 'delete-project-btn');
		deleteBtn.dataset.id = project.id;
		deleteBtn.textContent = 'x';

		_appendChildren(projectCard, [
			titleText,
			deleteBtn
		]);

		return projectCard;
	}

	function _clearElement(element) {
		element.innerHTML = null;
	}

	function _clearText(element) {
		element.value = '';
	}

	function _addClassToFocused(className, element, removeElements) {
		element.classList.add(className);

		for (const e of removeElements) {
			if (e != element && e.classList.contains(className)) e.classList.remove(className);
		}
	}

	// Render elements
	function displayTodos(todos) {
		_clearElement(_elements.todoCards);
		_clearText(_elements.todoTitleInput);

		for (const todo of todos) {
			const todoCard = _createTodoCard(todo);
			_appendChild('todoCards', todoCard);
		}
	}

	function displayProjects(projects) {
		_clearElement(_elements.projectCards);

		for (let i = projects.length - 1; i >= 0; i--) {
			const projectCard = _createProjectCard(projects[i]);

			_appendChild('projectCards', projectCard);
		}
	}

	// Binders for controller handlers to event listeners
	function bindShowCategoryTodos(category, handler) {
		const categoryDiv = _getElement(`#${category}-todos`);

		categoryDiv.addEventListener('click', event => {
			handler(category);

			_elements.todoGroup.innerText = event.target.textContent;
			_elements.todoGroup.removeAttribute('data-project-id');
			_elements.todoGroup.dataset.filter = category;

			_addClassToFocused('clicked', categoryDiv, _getElements('.sidebar-btn'));
		});
	}

	function bindShowProjectTodos(project, handler) {
		const projectCard = _getElement(`div[data-id="${project.id}"]`);

		projectCard.addEventListener('click', event => {
			handler(project);

			_elements.todoGroup.innerText = project.title;
			_elements.todoGroup.removeAttribute('data-filter');
			_elements.todoGroup.dataset.projectId = project.id;

			_addClassToFocused('clicked', projectCard, _getElements('.sidebar-btn'));
		});
	}

	function bindShowEditProjectForm() {
		_elements.todoGroup.addEventListener('dblclick', event => {
			const projectId = parseInt(_elements.todoGroup.dataset.projectId);

			if (projectId) {
				_elements.todoGroup.style.display = 'none';
				_elements.editProjectInput.style.display = 'block';
				_elements.editProjectInput.value = _elements.todoGroup.textContent;
				_elements.editProjectInput.focus();
			}
		});
	}
	
	function bindAddTodo(handler) {
		_elements.addTodoForm.addEventListener('submit', event => {
			event.preventDefault();

			const title = _elements.todoTitleInput.value;
			const priority = _elements.todoPriorityInput.value;
			const dueDate = _elements.todoDueDateInput.value;

			if (title != '') {
				const group = _elements.todoGroup.dataset;
				handler(title, null, dueDate, priority, group);
			}
		});
	}

	function bindDeleteTodo(todo, handler) {
		const deleteTodoBtn = _getElement(`.delete-todo-btn[data-id="${todo.id}"]`);

		deleteTodoBtn.addEventListener('click', event => {
			event.stopPropagation();

			const group = _elements.todoGroup.dataset;

			handler(todo, group);
		});
	}

	function bindToggleComplete(todo, handler) {
		const checkbox = _getElement(`input[data-id="${todo.id}"]`);
		checkbox.addEventListener('click', event => {
			handler(todo);

			checkbox.checked = todo.complete;
			checkbox.parentElement.classList.toggle('completed');
		})
	}

	function bindToggleProjectForm() {
		_elements.addProjectBtn.addEventListener('click', event => {
			const display = _elements.projectTitleInput.style.display;
			const title = _elements.projectTitleInput.value;

			if (display == '') {
				_elements.projectTitleInput.style.display = 'block';
				_elements.projectTitleInput.focus();
			} else {
				if (title != '') {
					const keyEvent = new KeyboardEvent('keydown', {
						bubbles: false,
						cancelable: true,
						keyCode: 13
					})
					_elements.projectTitleInput.dispatchEvent(keyEvent);
				}
				_elements.projectTitleInput.style.display = '';
			}
		});
	}

	function bindAddProject(handler) {
		_elements.projectTitleInput.addEventListener('blur', event => {
			const title = _elements.projectTitleInput.value;

			const id = handler(title);

			_clearText(_elements.projectTitleInput);
			_elements.projectTitleInput.style.display = '';

			_getElement(`.project-card[data-id="${id}"]`).click();
		});

		_elements.projectTitleInput.addEventListener('keydown', event => {
			if (event.keyCode == 13) _elements.projectTitleInput.blur();
		});
	}

	function bindEditProject(handler) {
		_elements.editProjectInput.addEventListener('blur', event => {
			const newTitle = _elements.editProjectInput.value;
			const id = parseInt(_elements.todoGroup.dataset.projectId);

			handler(id, newTitle);

			_elements.todoGroup.textContent = newTitle;
			_elements.todoGroup.style.display = 'block';
			_elements.editProjectInput.style.display = '';
		});

		_elements.editProjectInput.addEventListener('keydown', event => {
			if (event.keyCode == 13) _elements.editProjectInput.blur();
		});
	}

	function bindDeleteProject(project, handler) {
		const deleteProjectBtn = _getElement(`.delete-project-btn[data-id="${project.id}"]`);

		deleteProjectBtn.addEventListener('click', event => {
			event.stopPropagation();

			handler(project);

			_elements.allTodosBtn.click();
		});
	}
	
	return {
		displayTodos,
		displayProjects,
		bindToggleProjectForm,
		bindShowCategoryTodos,
		bindShowProjectTodos,
		bindShowEditProjectForm,
		bindAddTodo,
		bindDeleteTodo,
		bindToggleComplete,
		bindAddProject,
		bindEditProject,
		bindDeleteProject
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ "./src/mixins.js":
/*!***********************!*\
  !*** ./src/mixins.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idMixin": () => (/* binding */ idMixin)
/* harmony export */ });
const idMixin = {
	setId() {
		this.id = Object.getPrototypeOf(this).nextId;
		Object.getPrototypeOf(this).nextId += 1;
	}
};

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller.js */ "./src/Controller.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGVBQWUsY0FBYyxHQUFHLFFBQVEsMEJBQTBCLEdBQUcsV0FBVyxrQkFBa0Isb0NBQW9DLHNDQUFzQyxrQkFBa0IsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0Isa0JBQWtCLGNBQWMsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLGNBQWMsMkJBQTJCLEdBQUcsMEVBQTBFLG1CQUFtQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsMkRBQTJELGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsaUNBQWlDLGlCQUFpQixHQUFHLGtCQUFrQixrQ0FBa0MsR0FBRyxhQUFhLHdCQUF3QixrQkFBa0IsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsNEJBQTRCLGVBQWUsY0FBYyxHQUFHLFFBQVEsMEJBQTBCLEdBQUcsV0FBVyxrQkFBa0Isb0NBQW9DLHNDQUFzQyxrQkFBa0IsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0Isa0JBQWtCLGNBQWMsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLGNBQWMsMkJBQTJCLEdBQUcsMEVBQTBFLG1CQUFtQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsMkRBQTJELGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsaUNBQWlDLGlCQUFpQixHQUFHLGtCQUFrQixrQ0FBa0MsR0FBRyxhQUFhLHdCQUF3QixrQkFBa0IsR0FBRyxxQkFBcUI7QUFDdnRHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDUjtBQUNGOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbUVBQXVCO0FBQ3pCOztBQUVBO0FBQ0EsRUFBRSw2REFBaUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw0REFBZ0I7QUFDbkMsR0FBRyw0REFBZ0I7QUFDbkIsR0FBRyxtRUFBdUI7QUFDMUIsSUFBSTtBQUNKLEdBQUcsNERBQWdCO0FBQ25CLEdBQUcsNkRBQWlCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDREQUFnQjs7QUFFbEI7QUFDQSxtQkFBbUIsNERBQWdCO0FBQ25DLEdBQUcsbUVBQXVCO0FBQzFCLElBQUk7QUFDSixHQUFHLDZEQUFpQjtBQUNwQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLCtEQUFtQjs7QUFFbkM7QUFDQTs7QUFFQSwwQ0FBMEMsNkRBQWlCOztBQUUzRCx3Q0FBd0MsK0RBQW1COztBQUUzRDtBQUNBO0FBQ0EsRUFBRSw2REFBaUI7O0FBRW5CO0FBQ0EsR0FBRyxtRUFBdUI7QUFDMUIsR0FBRywrREFBbUI7QUFDdEI7QUFDQTs7QUFFQTtBQUNBLEVBQUUsZ0VBQW9COztBQUV0QjtBQUNBLEdBQUcscUVBQXlCO0FBQzVCLEdBQUcsa0VBQXNCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsa0VBQXNCO0FBQ3hCLEVBQUUsa0VBQXNCOztBQUV4QixFQUFFLDREQUFnQjtBQUNsQixFQUFFLCtEQUFtQjs7QUFFckIsRUFBRSxzRUFBMEI7QUFDNUIsRUFBRSx3RUFBNEI7O0FBRTlCLEVBQUUsZ0VBQW9COztBQUV0QjtBQUNBLEdBQUcsc0VBQTBCO0FBQzdCOztBQUVBLFlBQVksK0RBQW1CO0FBQy9CLEVBQUUsK0RBQW1COztBQUVyQixFQUFFLDREQUFnQjtBQUNsQixZQUFZLDREQUFnQjs7QUFFNUIsRUFBRSwwREFBYztBQUNoQixFQUFFLDZEQUFpQjtBQUNuQixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFHSTtBQUNNO0FBQ007O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxvREFBSTs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHVEQUFPO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUM5SG9DO0FBQ2xCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFLCtDQUFPOztBQUVLO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUUsK0NBQU87O0FBRUs7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLFFBQVE7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxrREFBa0QsV0FBVzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGlFQUFpRSxRQUFROztBQUV6RTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5QyxHQUFHO0FBQzVDLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx1RUFBdUUsV0FBVzs7QUFFbEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNqVFo7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21peGlucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxubGkge1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuI3Jvb3Qge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxuXFx0Z2FwOiAxNnB4O1xcbn1cXG5cXG4jaGVhZGVyIGltZyB7XFxuXFx0d2lkdGg6IDUwcHg7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsaWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jbGlja2VkIC5kZWxldGUtcHJvamVjdC1idG4sIC5zaWRlYmFyLWJ0bjpob3ZlciAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuXFxuLnRvZG8tY2FyZCB7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsYWNrO1xcblxcdHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmNvbXBsZXRlZCBwIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsVUFBVTtDQUNWLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0IsaUNBQWlDO0NBQ2pDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7O0FBR0E7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsNEJBQTRCO0NBQzVCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGdhcDogMTZweDtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbGlja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uY2xpY2tlZCAuZGVsZXRlLXByb2plY3QtYnRuLCAuc2lkZWJhci1idG46aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuI2VkaXQtcHJvamVjdC10aXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0Ym9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibGFjaztcXG5cXHRwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5jb21wbGV0ZWQgcCB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbiNmb290ZXIge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB3ZWVrc1RvRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXHRjb25zdCBfZmlsdGVyID0ge1xuXHRcdGFsbDogdG9kbyA9PiB0b2RvLFxuXHRcdHRvZGF5OiB0b2RvID0+IHRvZG8sXG5cdFx0d2VlazogdG9kbyA9PiB0b2RvXG5cdH1cblxuXHQvLyBIYW5kbGVyc1xuXHRjb25zdCBoYW5kbGVTaG93UHJvamVjdFRvZG9zID0gcHJvamVjdCA9PiB7IFxuXHRcdE1vZGVsLmdldFRvZG9zT2ZQcm9qZWN0KHByb2plY3QpO1xuXHR9XG5cblx0Y29uc3QgaGFuZGxlU2hvd0NhdGVnb3J5VG9kb3MgPSBmaWx0ZXIgPT4ge1xuXHRcdE1vZGVsLmZpbHRlclRvZG9zKGZpbHRlcik7XG5cdH1cblxuXHRjb25zdCBoYW5kbGVBZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGdyb3VwKSA9PiB7XG5cdFx0aWYgKCdwcm9qZWN0SWQnIGluIGdyb3VwKSB7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gTW9kZWwuZ2V0UHJvamVjdChncm91cC5wcm9qZWN0SWQpO1xuXHRcdFx0TW9kZWwuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcblx0XHRcdE1vZGVsLmdldFRvZG9zT2ZQcm9qZWN0KHByb2plY3QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRNb2RlbC5jcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXHRcdFx0TW9kZWwuZmlsdGVyVG9kb3MoX2ZpbHRlcltncm91cC5maWx0ZXJdKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKHRvZG8sIGdyb3VwKSA9PiB7XG5cdFx0TW9kZWwuZGVsZXRlVG9kbyh0b2RvKTtcblxuXHRcdGlmICgncHJvamVjdElkJyBpbiBncm91cCkge1xuXHRcdFx0Y29uc3QgcHJvamVjdCA9IE1vZGVsLmdldFByb2plY3QodG9kby5wcm9qZWN0SWQpO1xuXHRcdFx0TW9kZWwuZ2V0VG9kb3NPZlByb2plY3QocHJvamVjdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdE1vZGVsLmZpbHRlclRvZG9zKF9maWx0ZXJbZ3JvdXAuZmlsdGVyXSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlVG9nZ2xlQ29tcGxldGUgPSB0b2RvID0+IHRvZG8udG9nZ2xlQ29tcGxldGUoKTtcblxuXHRjb25zdCBoYW5kbGVBZGRQcm9qZWN0ID0gdGl0bGUgPT4ge1xuXHRcdGNvbnN0IG1vZGVsID0gTW9kZWwuY3JlYXRlUHJvamVjdCh0aXRsZSk7XG5cblx0XHRyZXR1cm4gbW9kZWwuaWQ7XG5cdH1cblxuXHRjb25zdCBoYW5kbGVFZGl0UHJvamVjdCA9IChpZCwgdGl0bGUpID0+IE1vZGVsLmVkaXRQcm9qZWN0KGlkLCB0aXRsZSk7XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IHByb2plY3QgPT4gTW9kZWwuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcblxuXHQvLyBDYWxsYmFjayBmb3IgbW9kZWwgd2hlbiBjaGFuZ2UgaXMgZGV0ZWN0ZWQgdG8gYmluZCBoYW5kbGVycyB0byBldmVudCBsaXN0ZW5lciBiaW5kZXJzIG9mIFZpZXdcblx0ZnVuY3Rpb24gb25Ub2Rvc0NoYW5nZWQodG9kb3MpIHtcblx0XHRWaWV3LmRpc3BsYXlUb2Rvcyh0b2Rvcyk7XG5cblx0XHRmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcblx0XHRcdFZpZXcuYmluZFRvZ2dsZUNvbXBsZXRlKHRvZG8sIGhhbmRsZVRvZ2dsZUNvbXBsZXRlKTtcblx0XHRcdFZpZXcuYmluZERlbGV0ZVRvZG8odG9kbywgaGFuZGxlRGVsZXRlVG9kbyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Qcm9qZWN0c0NoYW5nZWQocHJvamVjdHMpIHtcblx0XHRWaWV3LmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7XG5cblx0XHRmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcblx0XHRcdFZpZXcuYmluZFNob3dQcm9qZWN0VG9kb3MocHJvamVjdCwgaGFuZGxlU2hvd1Byb2plY3RUb2Rvcyk7XG5cdFx0XHRWaWV3LmJpbmREZWxldGVQcm9qZWN0KHByb2plY3QsIGhhbmRsZURlbGV0ZVByb2plY3QpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEluaXRpYWxpemUgdmlld1xuXHRjb25zdCBfaW5pdCA9IChmdW5jdGlvbigpIHtcblx0XHRNb2RlbC5iaW5kTW9kZWxDaGFuZ2VkKCdvblRvZG9zQ2hhbmdlZCcsIG9uVG9kb3NDaGFuZ2VkKTtcblx0XHRNb2RlbC5iaW5kTW9kZWxDaGFuZ2VkKCdvblByb2plY3RzQ2hhbmdlZCcsIG9uUHJvamVjdHNDaGFuZ2VkKTtcblxuXHRcdFZpZXcuYmluZEFkZFRvZG8oaGFuZGxlQWRkVG9kbyk7XG5cdFx0Vmlldy5iaW5kQWRkUHJvamVjdChoYW5kbGVBZGRQcm9qZWN0KTtcblxuXHRcdFZpZXcuYmluZFRvZ2dsZVByb2plY3RGb3JtKCk7XG5cdFx0Vmlldy5iaW5kU2hvd0VkaXRQcm9qZWN0Rm9ybSgpO1xuXG5cdFx0Vmlldy5iaW5kRWRpdFByb2plY3QoaGFuZGxlRWRpdFByb2plY3QpO1xuXG5cdFx0Zm9yIChjb25zdCBbY2F0ZWdvcnksIGZdIG9mIE9iamVjdC5lbnRyaWVzKF9maWx0ZXIpKSB7XG5cdFx0XHRWaWV3LmJpbmRTaG93Q2F0ZWdvcnlUb2RvcyhjYXRlZ29yeSwgaGFuZGxlU2hvd0NhdGVnb3J5VG9kb3MuYmluZChudWxsLCBmKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYSA9IE1vZGVsLmNyZWF0ZVByb2plY3QoJ1Nob3BwaW5nIExpc3QnKTtcblx0XHRNb2RlbC5jcmVhdGVQcm9qZWN0KCdTdHVkeScpO1xuXG5cdFx0TW9kZWwuY3JlYXRlVG9kbygnYScsICdiJywgJ2MnLCAnbG93JywgYSk7XG5cdFx0Y29uc3QgYiA9IE1vZGVsLmNyZWF0ZVRvZG8oJ2UnLCAnZicsICdnJywgJ2hpZ2gnKTtcblxuXHRcdE1vZGVsLmdldFRvZG9zKCk7XG5cdFx0TW9kZWwuZ2V0UHJvamVjdHMoKTtcblx0fSkoKTtcblxuXHRyZXR1cm4ge1xuXHRcdG9uVG9kb3NDaGFuZ2VkLFxuXHRcdG9uUHJvamVjdHNDaGFuZ2VkXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImltcG9ydCBUb2RvIGZyb20gJy4vVG9kby5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyLmpzJztcblxuY29uc3QgTW9kZWwgPSAoKCkgPT4ge1xuXHRsZXQgX3RvZG9zID0gW107XG5cdGxldCBfcHJvamVjdHMgPSBbXTtcblxuXHRmdW5jdGlvbiBnZXRUb2RvcygpIHtcblx0XHR0aGlzLm9uVG9kb3NDaGFuZ2VkKF90b2Rvcyk7XG5cblx0XHRyZXR1cm4gX3RvZG9zO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXHRcdHRoaXMub25Qcm9qZWN0c0NoYW5nZWQoX3Byb2plY3RzKTtcblxuXHRcdHJldHVybiBfcHJvamVjdHM7XG5cdH1cblxuXHRjb25zdCBnZXRUb2RvID0gaWQgPT4gX3RvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IGlkKTtcblxuXHRjb25zdCBnZXRQcm9qZWN0ID0gaWQgPT4gX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGlkKTtcblxuXHRjb25zdCBnZXRQcm9qZWN0RnJvbVRvZG8gPSB0b2RvID0+IHtcblx0XHRyZXR1cm4gX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHRvZG8ucHJvamVjdElkKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRvZG9zT2ZQcm9qZWN0KHByb2plY3QpIHtcblx0XHRjb25zdCB0b2RvcyA9IF90b2Rvcy5maWx0ZXIodG9kbyA9PiBwcm9qZWN0LmdldFRvZG9JZHMoKS5pbmNsdWRlcyh0b2RvLmlkKSk7XG5cblx0XHR0aGlzLm9uVG9kb3NDaGFuZ2VkKHRvZG9zKTtcblxuXHRcdHJldHVybiB0b2Rvcztcblx0fVxuXG5cdGNvbnN0IGdldFVuY29tcGxldGVkVG9kb3MgPSB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZSk7XG5cblx0ZnVuY3Rpb24gZmlsdGVyVG9kb3MoZmlsdGVyKSB7XG5cdFx0Y29uc3QgdG9kb3MgPSBfdG9kb3MuZmlsdGVyKGZpbHRlcik7XG5cblx0XHR0aGlzLm9uVG9kb3NDaGFuZ2VkKHRvZG9zKTtcblxuXHRcdHJldHVybiB0b2Rvcztcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuXHRcdGNvbnN0IHRvZG8gPSBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG5cdFx0X3RvZG9zLnB1c2godG9kbyk7XG5cdFx0aWYgKHByb2plY3QpIF9saW5rVG9kb0FuZFByb2plY3QodG9kbywgcHJvamVjdCk7XG5cblx0XHRyZXR1cm4gdG9kbztcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSk7XG5cdFx0X3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG5cblx0XHR0aGlzLm9uUHJvamVjdHNDaGFuZ2VkKF9wcm9qZWN0cyk7XG5cdFx0cmV0dXJuIHByb2plY3Q7XG5cdH1cblxuXHRmdW5jdGlvbiBlZGl0VG9kbyhpZCwgcHJvcGVydHksIHZhbHVlKSB7XG5cdFx0Y29uc3QgdG9kbyA9IGdldFRvZG8oaWQpO1xuXHRcdFxuXHRcdHRvZG9bcHJvcGVydHldID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBlZGl0UHJvamVjdChpZCwgdGl0bGUpIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChpZCk7XG5cdFx0XG5cdFx0cHJvamVjdC50aXRsZSA9IHRpdGxlO1xuXG5cdFx0dGhpcy5vblByb2plY3RzQ2hhbmdlZChfcHJvamVjdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBfdG9kb3MuaW5kZXhPZih0b2RvKTtcblx0XHRfdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdGlmICh0b2RvLnByb2plY3RJZCkge1xuXHRcdFx0Y29uc3QgcHJvamVjdCA9IGdldFByb2plY3QodG9kby5wcm9qZWN0SWQpO1xuXHRcdFx0cHJvamVjdC5kZWxldGVUb2RvSWQoKTtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0Y29uc3QgdG9kb0lkcyA9IHByb2plY3QuZ2V0VG9kb0lkcygpO1xuXHRcdF90b2RvcyA9IF90b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kb0lkcy5pbmNsdWRlcyh0b2RvLmlkKSk7XG5cblx0XHRjb25zdCBpbmRleCA9IF9wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuXHRcdF9wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0dGhpcy5vblByb2plY3RzQ2hhbmdlZChfcHJvamVjdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2xpbmtUb2RvQW5kUHJvamVjdCh0b2RvLCBwcm9qZWN0KSB7XG5cdFx0dG9kby5zZXRQcm9qZWN0SWQocHJvamVjdC5pZCk7XG5cdFx0cHJvamVjdC5hZGRUb2RvSWQodG9kby5pZClcblx0fVxuXG5cdC8vIEJpbmQgbW9kZWwgdG8gY29udHJvbGxlciB2aWEgY2FsbGJhY2tcblx0ZnVuY3Rpb24gYmluZE1vZGVsQ2hhbmdlZChrZXksIGNhbGxiYWNrKSB7XG5cdFx0dGhpc1trZXldID0gY2FsbGJhY2s7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGdldFRvZG9zLFxuXHRcdGdldFByb2plY3RzLFxuXHRcdGdldFRvZG8sXG5cdFx0Z2V0UHJvamVjdCxcblx0XHRnZXRQcm9qZWN0RnJvbVRvZG8sXG5cdFx0Z2V0VG9kb3NPZlByb2plY3QsXG5cdFx0Z2V0VW5jb21wbGV0ZWRUb2Rvcyxcblx0XHRmaWx0ZXJUb2Rvcyxcblx0XHRjcmVhdGVUb2RvLFxuXHRcdGNyZWF0ZVByb2plY3QsXG5cdFx0ZWRpdFRvZG8sXG5cdFx0ZWRpdFByb2plY3QsXG5cdFx0ZGVsZXRlVG9kbyxcblx0XHRkZWxldGVQcm9qZWN0LFxuXHRcdGJpbmRNb2RlbENoYW5nZWRcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsOyIsImltcG9ydCBjbG9zZXN0SW5kZXhUbyBmcm9tIFwiZGF0ZS1mbnMvZnAvY2xvc2VzdEluZGV4VG9cIjtcbmltcG9ydCB7IGlkTWl4aW4gfSBmcm9tICcuL21peGlucy5qcyc7XG5cbmNvbnN0IHByb2plY3RQcm90byA9IE9iamVjdC5hc3NpZ24oe1xuXHRuZXh0SWQ6IDAsXG5cdGdldFRvZG9JZHM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl90b2RvSWRzO1xuXHR9LFxuXHRhZGRUb2RvSWQ6IGZ1bmN0aW9uKGlkKSB7XG5cdFx0dGhpcy5fdG9kb0lkcy5wdXNoKGlkKTtcblx0fSxcblx0ZGVsZXRlVG9kb0lkOiBmdW5jdGlvbihpZCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5fdG9kb0lkcy5pbmRleE9mKGlkKTtcblx0XHR0aGlzLl90b2RvSWRzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cbn0sIGlkTWl4aW4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKSB7XG5cdGxldCBvYmogPSBPYmplY3QuY3JlYXRlKHByb2plY3RQcm90byk7XG5cblx0b2JqLnNldElkKCk7XG5cdG9iai5fdG9kb0lkcyA9IFtdO1xuXHRvYmoudGl0bGUgPSB0aXRsZTtcblx0XG5cdHJldHVybiBvYmo7XG59OyIsImltcG9ydCB7IGlkTWl4aW4gfSBmcm9tICcuL21peGlucy5qcyc7XG5cbmNvbnN0IHRvZG9Qcm90byA9IE9iamVjdC5hc3NpZ24oe1xuXHRuZXh0SWQ6IDAsXG5cdHNldFByb2plY3RJZDogZnVuY3Rpb24oaWQpIHtcblx0XHR0aGlzLnByb2plY3RJZCA9IGlkO1xuXHR9LFxuXHR0b2dnbGVDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuXHR9XG59LCBpZE1peGluKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdGxldCBvYmogPSBPYmplY3QuY3JlYXRlKHRvZG9Qcm90byk7XG5cdFxuXHRvYmouc2V0SWQoKTtcblx0b2JqLnRpdGxlID0gdGl0bGU7XG5cdG9iai5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRvYmouZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdG9iai5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRvYmouY29tcGxldGUgPSBmYWxzZTtcblxuXHRyZXR1cm4gb2JqO1xufSIsImNvbnN0IFZpZXcgPSAoKCkgPT4ge1xuXHQvLyBDYWNoZWQgZWxlbWVudHNcblx0Y29uc3QgX2VsZW1lbnRzID0ge1xuXHRcdGFsbFRvZG9zQnRuOiBfZ2V0RWxlbWVudCgnI2FsbC10b2RvcycpLFxuXHRcdHRvZG9Hcm91cDogX2dldEVsZW1lbnQoJyN0b2RvLWdyb3VwJyksXG5cdFx0dG9kb0NhcmRzOiBfZ2V0RWxlbWVudCgnLnRvZG8tY2FyZHMnKSxcblx0XHRwcm9qZWN0Q2FyZHM6IF9nZXRFbGVtZW50KCcjcHJvamVjdC1jYXJkcycpLFxuXHRcdGFkZFByb2plY3RCdG46IF9nZXRFbGVtZW50KCcjYWRkLXByb2plY3QtYnRuJyksXG5cdFx0cHJvamVjdFRpdGxlSW5wdXQ6IF9nZXRFbGVtZW50KCcjcHJvamVjdC10aXRsZScpLFxuXHRcdGFkZFRvZG9Gb3JtOiBfZ2V0RWxlbWVudCgnI2FkZC10b2RvLWZvcm0nKSxcblx0XHR0b2RvVGl0bGVJbnB1dDogX2dldEVsZW1lbnQoJyN0b2RvLXRpdGxlJyksXG5cdFx0dG9kb1ByaW9yaXR5SW5wdXQ6IF9nZXRFbGVtZW50KCcjdG9kby1wcmlvcml0eScpLFxuXHRcdHRvZG9EdWVEYXRlSW5wdXQ6IF9nZXRFbGVtZW50KCcjdG9kby1kdWVkYXRlJyksXG5cdFx0ZWRpdFByb2plY3RJbnB1dDogX2dldEVsZW1lbnQoJyNlZGl0LXByb2plY3QtdGl0bGUnKVxuXHR9O1xuXG5cdC8vIEhlbHBlcnNcblx0ZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0aWYgKHRleHQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHRmdW5jdGlvbiBfZ2V0RWxlbWVudChzZWxlY3Rvcikge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0fVxuXG5cdGNvbnN0IF9nZXRFbGVtZW50cyA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG5cdGNvbnN0IF9hcHBlbmRDaGlsZCA9IChwYXJlbnQsIGNoaWxkKSA9PiBfZWxlbWVudHNbcGFyZW50XS5hcHBlbmRDaGlsZChjaGlsZCk7XG5cblx0Y29uc3QgX2FwcGVuZENoaWxkcmVuID0gKGVsZW1lbnQsIGNoaWxkcmVuKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX2NyZWF0ZVRvZG9DYXJkKHRvZG8pIHtcblx0XHRsZXQgdG9kb0NhcmQgPSBfY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RvZG8tY2FyZCcpO1xuXHRcdHRvZG9DYXJkLmRhdGFzZXQuaWQgPSB0b2RvLmlkO1xuXG5cdFx0Y29uc3QgY2hlY2tib3ggPSBfY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRjaGVja2JveC5kYXRhc2V0LmlkID0gdG9kby5pZDtcblx0XHRjaGVja2JveC50eXBlID0gJ2NoZWNrYm94Jztcblx0XHRjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZTtcblxuXHRcdGlmICh0b2RvLmNvbXBsZXRlKSB7XG5cdFx0XHR0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9kb0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGl0bGVUZXh0ID0gX2NyZWF0ZUVsZW1lbnQoJ3AnLCAndG9kby10aXRsZScsIHRvZG8udGl0bGUpO1xuXG5cdFx0Y29uc3QgZHVlRGF0ZVRleHQgPSBfY3JlYXRlRWxlbWVudCgncCcsICd0b2RvLWR1ZWRhdGUnLCB0b2RvLmR1ZURhdGUpO1xuXG5cdFx0Y29uc3QgZGVsZXRlQnRuID0gX2NyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdkZWxldGUtdG9kby1idG4nKTtcblx0XHRkZWxldGVCdG4uZGF0YXNldC5pZCA9IHRvZG8uaWQ7XG5cdFx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ3gnO1xuXG5cdFx0X2FwcGVuZENoaWxkcmVuKHRvZG9DYXJkLCBbXG5cdFx0XHRjaGVja2JveCxcblx0XHRcdHRpdGxlVGV4dCxcblx0XHRcdGR1ZURhdGVUZXh0LFxuXHRcdFx0ZGVsZXRlQnRuXG5cdFx0XSk7XG5cblx0XHRzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcblx0XHRcdGNhc2UgJ2xvdyc6XG5cdFx0XHRcdHRvZG9DYXJkLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICdncmVlbic7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0dG9kb0NhcmQuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gJ29yYW5nZSc7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlnaCc6XG5cdFx0XHRcdHRvZG9DYXJkLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICdyZWQnOyBicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2RvQ2FyZFxuXHR9XG5cblx0ZnVuY3Rpb24gX2NyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IF9jcmVhdGVFbGVtZW50KCdkaXYnLCAncHJvamVjdC1jYXJkJyk7XG5cdFx0cHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1idG4nKTtcblxuXHRcdHByb2plY3RDYXJkLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuXG5cdFx0Y29uc3QgdGl0bGVUZXh0ID0gX2NyZWF0ZUVsZW1lbnQoJ3AnKVxuXHRcdHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cblx0XHRjb25zdCBkZWxldGVCdG4gPSBfY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpO1xuXHRcdGRlbGV0ZUJ0bi5kYXRhc2V0LmlkID0gcHJvamVjdC5pZDtcblx0XHRkZWxldGVCdG4udGV4dENvbnRlbnQgPSAneCc7XG5cblx0XHRfYXBwZW5kQ2hpbGRyZW4ocHJvamVjdENhcmQsIFtcblx0XHRcdHRpdGxlVGV4dCxcblx0XHRcdGRlbGV0ZUJ0blxuXHRcdF0pO1xuXG5cdFx0cmV0dXJuIHByb2plY3RDYXJkO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2NsZWFyRWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2NsZWFyVGV4dChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC52YWx1ZSA9ICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2FkZENsYXNzVG9Gb2N1c2VkKGNsYXNzTmFtZSwgZWxlbWVudCwgcmVtb3ZlRWxlbWVudHMpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuXHRcdGZvciAoY29uc3QgZSBvZiByZW1vdmVFbGVtZW50cykge1xuXHRcdFx0aWYgKGUgIT0gZWxlbWVudCAmJiBlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSBlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZW5kZXIgZWxlbWVudHNcblx0ZnVuY3Rpb24gZGlzcGxheVRvZG9zKHRvZG9zKSB7XG5cdFx0X2NsZWFyRWxlbWVudChfZWxlbWVudHMudG9kb0NhcmRzKTtcblx0XHRfY2xlYXJUZXh0KF9lbGVtZW50cy50b2RvVGl0bGVJbnB1dCk7XG5cblx0XHRmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcblx0XHRcdGNvbnN0IHRvZG9DYXJkID0gX2NyZWF0ZVRvZG9DYXJkKHRvZG8pO1xuXHRcdFx0X2FwcGVuZENoaWxkKCd0b2RvQ2FyZHMnLCB0b2RvQ2FyZCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKHByb2plY3RzKSB7XG5cdFx0X2NsZWFyRWxlbWVudChfZWxlbWVudHMucHJvamVjdENhcmRzKTtcblxuXHRcdGZvciAobGV0IGkgPSBwcm9qZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3QgcHJvamVjdENhcmQgPSBfY3JlYXRlUHJvamVjdENhcmQocHJvamVjdHNbaV0pO1xuXG5cdFx0XHRfYXBwZW5kQ2hpbGQoJ3Byb2plY3RDYXJkcycsIHByb2plY3RDYXJkKTtcblx0XHR9XG5cdH1cblxuXHQvLyBCaW5kZXJzIGZvciBjb250cm9sbGVyIGhhbmRsZXJzIHRvIGV2ZW50IGxpc3RlbmVyc1xuXHRmdW5jdGlvbiBiaW5kU2hvd0NhdGVnb3J5VG9kb3MoY2F0ZWdvcnksIGhhbmRsZXIpIHtcblx0XHRjb25zdCBjYXRlZ29yeURpdiA9IF9nZXRFbGVtZW50KGAjJHtjYXRlZ29yeX0tdG9kb3NgKTtcblxuXHRcdGNhdGVnb3J5RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0aGFuZGxlcihjYXRlZ29yeSk7XG5cblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAuaW5uZXJUZXh0ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcpO1xuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5kYXRhc2V0LmZpbHRlciA9IGNhdGVnb3J5O1xuXG5cdFx0XHRfYWRkQ2xhc3NUb0ZvY3VzZWQoJ2NsaWNrZWQnLCBjYXRlZ29yeURpdiwgX2dldEVsZW1lbnRzKCcuc2lkZWJhci1idG4nKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kU2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0LCBoYW5kbGVyKSB7XG5cdFx0Y29uc3QgcHJvamVjdENhcmQgPSBfZ2V0RWxlbWVudChgZGl2W2RhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCJdYCk7XG5cblx0XHRwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGhhbmRsZXIocHJvamVjdCk7XG5cblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cblx0XHRcdF9hZGRDbGFzc1RvRm9jdXNlZCgnY2xpY2tlZCcsIHByb2plY3RDYXJkLCBfZ2V0RWxlbWVudHMoJy5zaWRlYmFyLWJ0bicpKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRTaG93RWRpdFByb2plY3RGb3JtKCkge1xuXHRcdF9lbGVtZW50cy50b2RvR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRjb25zdCBwcm9qZWN0SWQgPSBwYXJzZUludChfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQucHJvamVjdElkKTtcblxuXHRcdFx0aWYgKHByb2plY3RJZCkge1xuXHRcdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdF9lbGVtZW50cy5lZGl0UHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHRfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC52YWx1ZSA9IF9lbGVtZW50cy50b2RvR3JvdXAudGV4dENvbnRlbnQ7XG5cdFx0XHRcdF9lbGVtZW50cy5lZGl0UHJvamVjdElucHV0LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGJpbmRBZGRUb2RvKGhhbmRsZXIpIHtcblx0XHRfZWxlbWVudHMuYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Y29uc3QgdGl0bGUgPSBfZWxlbWVudHMudG9kb1RpdGxlSW5wdXQudmFsdWU7XG5cdFx0XHRjb25zdCBwcmlvcml0eSA9IF9lbGVtZW50cy50b2RvUHJpb3JpdHlJbnB1dC52YWx1ZTtcblx0XHRcdGNvbnN0IGR1ZURhdGUgPSBfZWxlbWVudHMudG9kb0R1ZURhdGVJbnB1dC52YWx1ZTtcblxuXHRcdFx0aWYgKHRpdGxlICE9ICcnKSB7XG5cdFx0XHRcdGNvbnN0IGdyb3VwID0gX2VsZW1lbnRzLnRvZG9Hcm91cC5kYXRhc2V0O1xuXHRcdFx0XHRoYW5kbGVyKHRpdGxlLCBudWxsLCBkdWVEYXRlLCBwcmlvcml0eSwgZ3JvdXApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZERlbGV0ZVRvZG8odG9kbywgaGFuZGxlcikge1xuXHRcdGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBfZ2V0RWxlbWVudChgLmRlbGV0ZS10b2RvLWJ0bltkYXRhLWlkPVwiJHt0b2RvLmlkfVwiXWApO1xuXG5cdFx0ZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRjb25zdCBncm91cCA9IF9lbGVtZW50cy50b2RvR3JvdXAuZGF0YXNldDtcblxuXHRcdFx0aGFuZGxlcih0b2RvLCBncm91cCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kVG9nZ2xlQ29tcGxldGUodG9kbywgaGFuZGxlcikge1xuXHRcdGNvbnN0IGNoZWNrYm94ID0gX2dldEVsZW1lbnQoYGlucHV0W2RhdGEtaWQ9XCIke3RvZG8uaWR9XCJdYCk7XG5cdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRoYW5kbGVyKHRvZG8pO1xuXG5cdFx0XHRjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZTtcblx0XHRcdGNoZWNrYm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRUb2dnbGVQcm9qZWN0Rm9ybSgpIHtcblx0XHRfZWxlbWVudHMuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IGRpc3BsYXkgPSBfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheTtcblx0XHRcdGNvbnN0IHRpdGxlID0gX2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXG5cdFx0XHRpZiAoZGlzcGxheSA9PSAnJykge1xuXHRcdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5mb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRpdGxlICE9ICcnKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5RXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHtcblx0XHRcdFx0XHRcdGJ1YmJsZXM6IGZhbHNlLFxuXHRcdFx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGtleUNvZGU6IDEzXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuZGlzcGF0Y2hFdmVudChrZXlFdmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRBZGRQcm9qZWN0KGhhbmRsZXIpIHtcblx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gX2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXG5cdFx0XHRjb25zdCBpZCA9IGhhbmRsZXIodGl0bGUpO1xuXG5cdFx0XHRfY2xlYXJUZXh0KF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dCk7XG5cdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG5cdFx0XHRfZ2V0RWxlbWVudChgLnByb2plY3QtY2FyZFtkYXRhLWlkPVwiJHtpZH1cIl1gKS5jbGljaygpO1xuXHRcdH0pO1xuXG5cdFx0X2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG5cdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykgX2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LmJsdXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRFZGl0UHJvamVjdChoYW5kbGVyKSB7XG5cdFx0X2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IG5ld1RpdGxlID0gX2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQudmFsdWU7XG5cdFx0XHRjb25zdCBpZCA9IHBhcnNlSW50KF9lbGVtZW50cy50b2RvR3JvdXAuZGF0YXNldC5wcm9qZWN0SWQpO1xuXG5cdFx0XHRoYW5kbGVyKGlkLCBuZXdUaXRsZSk7XG5cblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAudGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0fSk7XG5cblx0XHRfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIF9lbGVtZW50cy5lZGl0UHJvamVjdElucHV0LmJsdXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmREZWxldGVQcm9qZWN0KHByb2plY3QsIGhhbmRsZXIpIHtcblx0XHRjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gX2dldEVsZW1lbnQoYC5kZWxldGUtcHJvamVjdC1idG5bZGF0YS1pZD1cIiR7cHJvamVjdC5pZH1cIl1gKTtcblxuXHRcdGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0aGFuZGxlcihwcm9qZWN0KTtcblxuXHRcdFx0X2VsZW1lbnRzLmFsbFRvZG9zQnRuLmNsaWNrKCk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdHJldHVybiB7XG5cdFx0ZGlzcGxheVRvZG9zLFxuXHRcdGRpc3BsYXlQcm9qZWN0cyxcblx0XHRiaW5kVG9nZ2xlUHJvamVjdEZvcm0sXG5cdFx0YmluZFNob3dDYXRlZ29yeVRvZG9zLFxuXHRcdGJpbmRTaG93UHJvamVjdFRvZG9zLFxuXHRcdGJpbmRTaG93RWRpdFByb2plY3RGb3JtLFxuXHRcdGJpbmRBZGRUb2RvLFxuXHRcdGJpbmREZWxldGVUb2RvLFxuXHRcdGJpbmRUb2dnbGVDb21wbGV0ZSxcblx0XHRiaW5kQWRkUHJvamVjdCxcblx0XHRiaW5kRWRpdFByb2plY3QsXG5cdFx0YmluZERlbGV0ZVByb2plY3Rcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7IiwiZXhwb3J0IGNvbnN0IGlkTWl4aW4gPSB7XG5cdHNldElkKCkge1xuXHRcdHRoaXMuaWQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykubmV4dElkO1xuXHRcdE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5uZXh0SWQgKz0gMTtcblx0fVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9