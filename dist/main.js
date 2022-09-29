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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.clicked {\n\tbackground-color: aqua;\n}\n\n.clicked .delete-project-btn, .sidebar-btn:hover .delete-project-btn {\n\tdisplay: block;\n}\n\n.delete-project-btn {\n\tdisplay: none;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\n#edit-project-title {\n\tdisplay: none;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-left: 6px solid black;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,SAAS;AACV;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,+BAA+B;CAC/B,iCAAiC;CACjC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;;AAGA;CACC,aAAa;CACb,mBAAmB;CACnB,4BAA4B;AAC7B;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,aAAa;AACd","sourcesContent":["* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.clicked {\n\tbackground-color: aqua;\n}\n\n.clicked .delete-project-btn, .sidebar-btn:hover .delete-project-btn {\n\tdisplay: block;\n}\n\n.delete-project-btn {\n\tdisplay: none;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\n#edit-project-title {\n\tdisplay: none;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-left: 6px solid black;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n"],"sourceRoot":""}]);
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

	const handleToggleComplete = todo => todo.toggleComplete();

	const handleAddProject = title => _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(title);

	const handleEditProject = (id, title) => _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(id, title);

	const handleDeleteProject = project => _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(project);

	// Callback for model when change is detected to bind handlers to event listener binders of View
	function onTodosChanged(todos) {
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(todos);

		for (const todo of todos) {
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindToggleComplete(todo, handleToggleComplete);
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

	function editTodo(id, title, description, dueDate, priority) {
		const todo = getTodo(id);
		if (title) todo.title = title;
		if (description) todo.title = description;
		if (dueDate) todo.title = dueDate;
		if (priority) todo.title = priority;
	}

	function editProject(id, title) {
		const project = getProject(id);
		if (title) project.title = title;

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

		const titleText = _createElement('p', '', todo.title);

		todoCard.appendChild(checkbox);
		todoCard.appendChild(titleText);

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
		const div = _createElement('div', 'project-card');
		div.classList.add('sidebar-btn');

		div.dataset.id = project.id;

		const title = _createElement('p')
		title.textContent = project.title;

		const deleteBtn = _createElement('button', 'delete-project-btn');
		deleteBtn.dataset.id = project.id;
		deleteBtn.textContent = 'x';

		div.appendChild(title);
		div.appendChild(deleteBtn);

		return div;
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

			handler(title);

			_clearText(_elements.projectTitleInput);
			_elements.projectTitleInput.style.display = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx1RUFBdUUsV0FBVzs7QUFFbEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDaFJaO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9taXhpbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGdhcDogMTZweDtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbGlja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uY2xpY2tlZCAuZGVsZXRlLXByb2plY3QtYnRuLCAuc2lkZWJhci1idG46aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuI2VkaXQtcHJvamVjdC10aXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29tcGxldGVkIHAge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOzs7QUFHQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxubGkge1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuI3Jvb3Qge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxuXFx0Z2FwOiAxNnB4O1xcbn1cXG5cXG4jaGVhZGVyIGltZyB7XFxuXFx0d2lkdGg6IDUwcHg7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsaWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jbGlja2VkIC5kZWxldGUtcHJvamVjdC1idG4sIC5zaWRlYmFyLWJ0bjpob3ZlciAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuXFxuLnRvZG8tY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb21wbGV0ZWQgcCB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbiNmb290ZXIge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB3ZWVrc1RvRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXHRjb25zdCBfZmlsdGVyID0ge1xuXHRcdGFsbDogdG9kbyA9PiB0b2RvLFxuXHRcdHRvZGF5OiB0b2RvID0+IHRvZG8sXG5cdFx0d2VlazogdG9kbyA9PiB0b2RvXG5cdH1cblxuXHQvLyBIYW5kbGVyc1xuXHRjb25zdCBoYW5kbGVTaG93UHJvamVjdFRvZG9zID0gcHJvamVjdCA9PiB7IFxuXHRcdE1vZGVsLmdldFRvZG9zT2ZQcm9qZWN0KHByb2plY3QpO1xuXHR9XG5cblx0Y29uc3QgaGFuZGxlU2hvd0NhdGVnb3J5VG9kb3MgPSBmaWx0ZXIgPT4ge1xuXHRcdE1vZGVsLmZpbHRlclRvZG9zKGZpbHRlcik7XG5cdH1cblxuXHRjb25zdCBoYW5kbGVBZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGdyb3VwKSA9PiB7XG5cdFx0aWYgKCdwcm9qZWN0SWQnIGluIGdyb3VwKSB7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gTW9kZWwuZ2V0UHJvamVjdChncm91cC5wcm9qZWN0SWQpO1xuXHRcdFx0TW9kZWwuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcblx0XHRcdE1vZGVsLmdldFRvZG9zT2ZQcm9qZWN0KHByb2plY3QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRNb2RlbC5jcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXHRcdFx0TW9kZWwuZmlsdGVyVG9kb3MoX2ZpbHRlcltncm91cC5maWx0ZXJdKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBoYW5kbGVUb2dnbGVDb21wbGV0ZSA9IHRvZG8gPT4gdG9kby50b2dnbGVDb21wbGV0ZSgpO1xuXG5cdGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSB0aXRsZSA9PiBNb2RlbC5jcmVhdGVQcm9qZWN0KHRpdGxlKTtcblxuXHRjb25zdCBoYW5kbGVFZGl0UHJvamVjdCA9IChpZCwgdGl0bGUpID0+IE1vZGVsLmVkaXRQcm9qZWN0KGlkLCB0aXRsZSk7XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IHByb2plY3QgPT4gTW9kZWwuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcblxuXHQvLyBDYWxsYmFjayBmb3IgbW9kZWwgd2hlbiBjaGFuZ2UgaXMgZGV0ZWN0ZWQgdG8gYmluZCBoYW5kbGVycyB0byBldmVudCBsaXN0ZW5lciBiaW5kZXJzIG9mIFZpZXdcblx0ZnVuY3Rpb24gb25Ub2Rvc0NoYW5nZWQodG9kb3MpIHtcblx0XHRWaWV3LmRpc3BsYXlUb2Rvcyh0b2Rvcyk7XG5cblx0XHRmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcblx0XHRcdFZpZXcuYmluZFRvZ2dsZUNvbXBsZXRlKHRvZG8sIGhhbmRsZVRvZ2dsZUNvbXBsZXRlKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBvblByb2plY3RzQ2hhbmdlZChwcm9qZWN0cykge1xuXHRcdFZpZXcuZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcblxuXHRcdGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuXHRcdFx0Vmlldy5iaW5kU2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0LCBoYW5kbGVTaG93UHJvamVjdFRvZG9zKTtcblx0XHRcdFZpZXcuYmluZERlbGV0ZVByb2plY3QocHJvamVjdCwgaGFuZGxlRGVsZXRlUHJvamVjdCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSB2aWV3XG5cdGNvbnN0IF9pbml0ID0gKGZ1bmN0aW9uKCkge1xuXHRcdE1vZGVsLmJpbmRNb2RlbENoYW5nZWQoJ29uVG9kb3NDaGFuZ2VkJywgb25Ub2Rvc0NoYW5nZWQpO1xuXHRcdE1vZGVsLmJpbmRNb2RlbENoYW5nZWQoJ29uUHJvamVjdHNDaGFuZ2VkJywgb25Qcm9qZWN0c0NoYW5nZWQpO1xuXG5cdFx0Vmlldy5iaW5kQWRkVG9kbyhoYW5kbGVBZGRUb2RvKTtcblx0XHRWaWV3LmJpbmRBZGRQcm9qZWN0KGhhbmRsZUFkZFByb2plY3QpO1xuXG5cdFx0Vmlldy5iaW5kVG9nZ2xlUHJvamVjdEZvcm0oKTtcblx0XHRWaWV3LmJpbmRTaG93RWRpdFByb2plY3RGb3JtKCk7XG5cblx0XHRWaWV3LmJpbmRFZGl0UHJvamVjdChoYW5kbGVFZGl0UHJvamVjdCk7XG5cblx0XHRmb3IgKGNvbnN0IFtjYXRlZ29yeSwgZl0gb2YgT2JqZWN0LmVudHJpZXMoX2ZpbHRlcikpIHtcblx0XHRcdFZpZXcuYmluZFNob3dDYXRlZ29yeVRvZG9zKGNhdGVnb3J5LCBoYW5kbGVTaG93Q2F0ZWdvcnlUb2Rvcy5iaW5kKG51bGwsIGYpKTtcblx0XHR9XG5cblx0XHRjb25zdCBhID0gTW9kZWwuY3JlYXRlUHJvamVjdCgnU2hvcHBpbmcgTGlzdCcpO1xuXHRcdE1vZGVsLmNyZWF0ZVByb2plY3QoJ1N0dWR5Jyk7XG5cblx0XHRNb2RlbC5jcmVhdGVUb2RvKCdhJywgJ2InLCAnYycsICdsb3cnLCBhKTtcblx0XHRjb25zdCBiID0gTW9kZWwuY3JlYXRlVG9kbygnZScsICdmJywgJ2cnLCAnaGlnaCcpO1xuXG5cdFx0TW9kZWwuZ2V0VG9kb3MoKTtcblx0XHRNb2RlbC5nZXRQcm9qZWN0cygpO1xuXHR9KSgpO1xuXG5cdHJldHVybiB7XG5cdFx0b25Ub2Rvc0NoYW5nZWQsXG5cdFx0b25Qcm9qZWN0c0NoYW5nZWRcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBNb2RlbCA9ICgoKSA9PiB7XG5cdGxldCBfdG9kb3MgPSBbXTtcblx0bGV0IF9wcm9qZWN0cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGdldFRvZG9zKCkge1xuXHRcdHRoaXMub25Ub2Rvc0NoYW5nZWQoX3RvZG9zKTtcblxuXHRcdHJldHVybiBfdG9kb3M7XG5cdH07XG5cblx0ZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG5cdFx0dGhpcy5vblByb2plY3RzQ2hhbmdlZChfcHJvamVjdHMpO1xuXG5cdFx0cmV0dXJuIF9wcm9qZWN0cztcblx0fVxuXG5cdGNvbnN0IGdldFRvZG8gPSBpZCA9PiBfdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT0gaWQpO1xuXG5cdGNvbnN0IGdldFByb2plY3QgPSBpZCA9PiBfcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gaWQpO1xuXG5cdGNvbnN0IGdldFByb2plY3RGcm9tVG9kbyA9IHRvZG8gPT4ge1xuXHRcdHJldHVybiBfcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gdG9kby5wcm9qZWN0SWQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VG9kb3NPZlByb2plY3QocHJvamVjdCkge1xuXHRcdGNvbnN0IHRvZG9zID0gX3RvZG9zLmZpbHRlcih0b2RvID0+IHByb2plY3QuZ2V0VG9kb0lkcygpLmluY2x1ZGVzKHRvZG8uaWQpKTtcblxuXHRcdHRoaXMub25Ub2Rvc0NoYW5nZWQodG9kb3MpO1xuXG5cdFx0cmV0dXJuIHRvZG9zO1xuXHR9XG5cblx0Y29uc3QgZ2V0VW5jb21wbGV0ZWRUb2RvcyA9IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlKTtcblxuXHRmdW5jdGlvbiBmaWx0ZXJUb2RvcyhmaWx0ZXIpIHtcblx0XHRjb25zdCB0b2RvcyA9IF90b2Rvcy5maWx0ZXIoZmlsdGVyKTtcblxuXHRcdHRoaXMub25Ub2Rvc0NoYW5nZWQodG9kb3MpO1xuXG5cdFx0cmV0dXJuIHRvZG9zO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG5cdFx0Y29uc3QgdG9kbyA9IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cblx0XHRfdG9kb3MucHVzaCh0b2RvKTtcblx0XHRpZiAocHJvamVjdCkgX2xpbmtUb2RvQW5kUHJvamVjdCh0b2RvLCBwcm9qZWN0KTtcblxuXHRcdHJldHVybiB0b2RvO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuXHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHRpdGxlKTtcblx0XHRfcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuXHRcdHRoaXMub25Qcm9qZWN0c0NoYW5nZWQoX3Byb2plY3RzKTtcblx0XHRyZXR1cm4gcHJvamVjdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGVkaXRUb2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdFx0Y29uc3QgdG9kbyA9IGdldFRvZG8oaWQpO1xuXHRcdGlmICh0aXRsZSkgdG9kby50aXRsZSA9IHRpdGxlO1xuXHRcdGlmIChkZXNjcmlwdGlvbikgdG9kby50aXRsZSA9IGRlc2NyaXB0aW9uO1xuXHRcdGlmIChkdWVEYXRlKSB0b2RvLnRpdGxlID0gZHVlRGF0ZTtcblx0XHRpZiAocHJpb3JpdHkpIHRvZG8udGl0bGUgPSBwcmlvcml0eTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGlkLCB0aXRsZSkge1xuXHRcdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KGlkKTtcblx0XHRpZiAodGl0bGUpIHByb2plY3QudGl0bGUgPSB0aXRsZTtcblxuXHRcdHRoaXMub25Qcm9qZWN0c0NoYW5nZWQoX3Byb2plY3RzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kbykge1xuXHRcdGNvbnN0IGluZGV4ID0gX3RvZG9zLmluZGV4T2YodG9kbyk7XG5cdFx0X3RvZG9zLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRpZiAodG9kby5wcm9qZWN0SWQpIHtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHRvZG8ucHJvamVjdElkKTtcblx0XHRcdHByb2plY3QuZGVsZXRlVG9kb0lkKCk7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuXHRcdGNvbnN0IHRvZG9JZHMgPSBwcm9qZWN0LmdldFRvZG9JZHMoKTtcblx0XHRfdG9kb3MgPSBfdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG9JZHMuaW5jbHVkZXModG9kby5pZCkpO1xuXG5cdFx0Y29uc3QgaW5kZXggPSBfcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRfcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdHRoaXMub25Qcm9qZWN0c0NoYW5nZWQoX3Byb2plY3RzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9saW5rVG9kb0FuZFByb2plY3QodG9kbywgcHJvamVjdCkge1xuXHRcdHRvZG8uc2V0UHJvamVjdElkKHByb2plY3QuaWQpO1xuXHRcdHByb2plY3QuYWRkVG9kb0lkKHRvZG8uaWQpXG5cdH1cblxuXHQvLyBCaW5kIG1vZGVsIHRvIGNvbnRyb2xsZXIgdmlhIGNhbGxiYWNrXG5cdGZ1bmN0aW9uIGJpbmRNb2RlbENoYW5nZWQoa2V5LCBjYWxsYmFjaykge1xuXHRcdHRoaXNba2V5XSA9IGNhbGxiYWNrO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRnZXRUb2Rvcyxcblx0XHRnZXRQcm9qZWN0cyxcblx0XHRnZXRUb2RvLFxuXHRcdGdldFByb2plY3QsXG5cdFx0Z2V0UHJvamVjdEZyb21Ub2RvLFxuXHRcdGdldFRvZG9zT2ZQcm9qZWN0LFxuXHRcdGdldFVuY29tcGxldGVkVG9kb3MsXG5cdFx0ZmlsdGVyVG9kb3MsXG5cdFx0Y3JlYXRlVG9kbyxcblx0XHRjcmVhdGVQcm9qZWN0LFxuXHRcdGVkaXRUb2RvLFxuXHRcdGVkaXRQcm9qZWN0LFxuXHRcdGRlbGV0ZVRvZG8sXG5cdFx0ZGVsZXRlUHJvamVjdCxcblx0XHRiaW5kTW9kZWxDaGFuZ2VkXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDsiLCJpbXBvcnQgY2xvc2VzdEluZGV4VG8gZnJvbSBcImRhdGUtZm5zL2ZwL2Nsb3Nlc3RJbmRleFRvXCI7XG5pbXBvcnQgeyBpZE1peGluIH0gZnJvbSAnLi9taXhpbnMuanMnO1xuXG5jb25zdCBwcm9qZWN0UHJvdG8gPSBPYmplY3QuYXNzaWduKHtcblx0bmV4dElkOiAwLFxuXHRnZXRUb2RvSWRzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdG9kb0lkcztcblx0fSxcblx0YWRkVG9kb0lkOiBmdW5jdGlvbihpZCkge1xuXHRcdHRoaXMuX3RvZG9JZHMucHVzaChpZCk7XG5cdH0sXG5cdGRlbGV0ZVRvZG9JZDogZnVuY3Rpb24oaWQpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuX3RvZG9JZHMuaW5kZXhPZihpZCk7XG5cdFx0dGhpcy5fdG9kb0lkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG59LCBpZE1peGluKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuXHRsZXQgb2JqID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0UHJvdG8pO1xuXG5cdG9iai5zZXRJZCgpO1xuXHRvYmouX3RvZG9JZHMgPSBbXTtcblx0b2JqLnRpdGxlID0gdGl0bGU7XG5cdFxuXHRyZXR1cm4gb2JqO1xufTsiLCJpbXBvcnQgeyBpZE1peGluIH0gZnJvbSAnLi9taXhpbnMuanMnO1xuXG5jb25zdCB0b2RvUHJvdG8gPSBPYmplY3QuYXNzaWduKHtcblx0bmV4dElkOiAwLFxuXHRzZXRQcm9qZWN0SWQ6IGZ1bmN0aW9uKGlkKSB7XG5cdFx0dGhpcy5wcm9qZWN0SWQgPSBpZDtcblx0fSxcblx0dG9nZ2xlQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcblx0fVxufSwgaWRNaXhpbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRsZXQgb2JqID0gT2JqZWN0LmNyZWF0ZSh0b2RvUHJvdG8pO1xuXHRcblx0b2JqLnNldElkKCk7XG5cdG9iai50aXRsZSA9IHRpdGxlO1xuXHRvYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0b2JqLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRvYmoucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0b2JqLmNvbXBsZXRlID0gZmFsc2U7XG5cblx0cmV0dXJuIG9iajtcbn0iLCJjb25zdCBWaWV3ID0gKCgpID0+IHtcblx0Ly8gQ2FjaGVkIGVsZW1lbnRzXG5cdGNvbnN0IF9lbGVtZW50cyA9IHtcblx0XHRhbGxUb2Rvc0J0bjogX2dldEVsZW1lbnQoJyNhbGwtdG9kb3MnKSxcblx0XHR0b2RvR3JvdXA6IF9nZXRFbGVtZW50KCcjdG9kby1ncm91cCcpLFxuXHRcdHRvZG9DYXJkczogX2dldEVsZW1lbnQoJy50b2RvLWNhcmRzJyksXG5cdFx0cHJvamVjdENhcmRzOiBfZ2V0RWxlbWVudCgnI3Byb2plY3QtY2FyZHMnKSxcblx0XHRhZGRQcm9qZWN0QnRuOiBfZ2V0RWxlbWVudCgnI2FkZC1wcm9qZWN0LWJ0bicpLFxuXHRcdHByb2plY3RUaXRsZUlucHV0OiBfZ2V0RWxlbWVudCgnI3Byb2plY3QtdGl0bGUnKSxcblx0XHRhZGRUb2RvRm9ybTogX2dldEVsZW1lbnQoJyNhZGQtdG9kby1mb3JtJyksXG5cdFx0dG9kb1RpdGxlSW5wdXQ6IF9nZXRFbGVtZW50KCcjdG9kby10aXRsZScpLFxuXHRcdHRvZG9Qcmlvcml0eUlucHV0OiBfZ2V0RWxlbWVudCgnI3RvZG8tcHJpb3JpdHknKSxcblx0XHR0b2RvRHVlRGF0ZUlucHV0OiBfZ2V0RWxlbWVudCgnI3RvZG8tZHVlZGF0ZScpLFxuXHRcdGVkaXRQcm9qZWN0SW5wdXQ6IF9nZXRFbGVtZW50KCcjZWRpdC1wcm9qZWN0LXRpdGxlJylcblx0fTtcblxuXHQvLyBIZWxwZXJzXG5cdGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCB0ZXh0KSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuXHRcdGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdGlmICh0ZXh0KSBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0ZnVuY3Rpb24gX2dldEVsZW1lbnQoc2VsZWN0b3IpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cdH1cblxuXHRjb25zdCBfZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuXHRjb25zdCBfYXBwZW5kQ2hpbGQgPSAocGFyZW50LCBjaGlsZCkgPT4gX2VsZW1lbnRzW3BhcmVudF0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXG5cdGZ1bmN0aW9uIF9jcmVhdGVUb2RvQ2FyZCh0b2RvKSB7XG5cdFx0bGV0IHRvZG9DYXJkID0gX2NyZWF0ZUVsZW1lbnQoJ2RpdicsICd0b2RvLWNhcmQnKTtcblx0XHR0b2RvQ2FyZC5kYXRhc2V0LmlkID0gdG9kby5pZDtcblxuXHRcdGNvbnN0IGNoZWNrYm94ID0gX2NyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0Y2hlY2tib3guZGF0YXNldC5pZCA9IHRvZG8uaWQ7XG5cdFx0Y2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGU7XG5cblx0XHRpZiAodG9kby5jb21wbGV0ZSkge1xuXHRcdFx0dG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvZG9DYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpdGxlVGV4dCA9IF9jcmVhdGVFbGVtZW50KCdwJywgJycsIHRvZG8udGl0bGUpO1xuXG5cdFx0dG9kb0NhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXHRcdHRvZG9DYXJkLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cblx0XHRzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcblx0XHRcdGNhc2UgJ2xvdyc6XG5cdFx0XHRcdHRvZG9DYXJkLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICdncmVlbic7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0dG9kb0NhcmQuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gJ29yYW5nZSc7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlnaCc6XG5cdFx0XHRcdHRvZG9DYXJkLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICdyZWQnOyBicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2RvQ2FyZFxuXHR9XG5cblx0ZnVuY3Rpb24gX2NyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcblx0XHRjb25zdCBkaXYgPSBfY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtY2FyZCcpO1xuXHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJ0bicpO1xuXG5cdFx0ZGl2LmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuXG5cdFx0Y29uc3QgdGl0bGUgPSBfY3JlYXRlRWxlbWVudCgncCcpXG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG5cdFx0Y29uc3QgZGVsZXRlQnRuID0gX2NyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdkZWxldGUtcHJvamVjdC1idG4nKTtcblx0XHRkZWxldGVCdG4uZGF0YXNldC5pZCA9IHByb2plY3QuaWQ7XG5cdFx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ3gnO1xuXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuXHRcdHJldHVybiBkaXY7XG5cdH1cblxuXHRmdW5jdGlvbiBfY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBfY2xlYXJUZXh0KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnZhbHVlID0gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBfYWRkQ2xhc3NUb0ZvY3VzZWQoY2xhc3NOYW1lLCBlbGVtZW50LCByZW1vdmVFbGVtZW50cykge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG5cdFx0Zm9yIChjb25zdCBlIG9mIHJlbW92ZUVsZW1lbnRzKSB7XG5cdFx0XHRpZiAoZSAhPSBlbGVtZW50ICYmIGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJlbmRlciBlbGVtZW50c1xuXHRmdW5jdGlvbiBkaXNwbGF5VG9kb3ModG9kb3MpIHtcblx0XHRfY2xlYXJFbGVtZW50KF9lbGVtZW50cy50b2RvQ2FyZHMpO1xuXHRcdF9jbGVhclRleHQoX2VsZW1lbnRzLnRvZG9UaXRsZUlucHV0KTtcblxuXHRcdGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuXHRcdFx0Y29uc3QgdG9kb0NhcmQgPSBfY3JlYXRlVG9kb0NhcmQodG9kbyk7XG5cdFx0XHRfYXBwZW5kQ2hpbGQoJ3RvZG9DYXJkcycsIHRvZG9DYXJkKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpIHtcblx0XHRfY2xlYXJFbGVtZW50KF9lbGVtZW50cy5wcm9qZWN0Q2FyZHMpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IHByb2plY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IF9jcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0c1tpXSk7XG5cblx0XHRcdF9hcHBlbmRDaGlsZCgncHJvamVjdENhcmRzJywgcHJvamVjdENhcmQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJpbmRlcnMgZm9yIGNvbnRyb2xsZXIgaGFuZGxlcnMgdG8gZXZlbnQgbGlzdGVuZXJzXG5cdGZ1bmN0aW9uIGJpbmRTaG93Q2F0ZWdvcnlUb2RvcyhjYXRlZ29yeSwgaGFuZGxlcikge1xuXHRcdGNvbnN0IGNhdGVnb3J5RGl2ID0gX2dldEVsZW1lbnQoYCMke2NhdGVnb3J5fS10b2Rvc2ApO1xuXG5cdFx0Y2F0ZWdvcnlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRoYW5kbGVyKGNhdGVnb3J5KTtcblxuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5pbm5lclRleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQuZmlsdGVyID0gY2F0ZWdvcnk7XG5cblx0XHRcdF9hZGRDbGFzc1RvRm9jdXNlZCgnY2xpY2tlZCcsIGNhdGVnb3J5RGl2LCBfZ2V0RWxlbWVudHMoJy5zaWRlYmFyLWJ0bicpKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRTaG93UHJvamVjdFRvZG9zKHByb2plY3QsIGhhbmRsZXIpIHtcblx0XHRjb25zdCBwcm9qZWN0Q2FyZCA9IF9nZXRFbGVtZW50KGBkaXZbZGF0YS1pZD1cIiR7cHJvamVjdC5pZH1cIl1gKTtcblxuXHRcdHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0aGFuZGxlcihwcm9qZWN0KTtcblxuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcblxuXHRcdFx0X2FkZENsYXNzVG9Gb2N1c2VkKCdjbGlja2VkJywgcHJvamVjdENhcmQsIF9nZXRFbGVtZW50cygnLnNpZGViYXItYnRuJykpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZFNob3dFZGl0UHJvamVjdEZvcm0oKSB7XG5cdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RJZCA9IHBhcnNlSW50KF9lbGVtZW50cy50b2RvR3JvdXAuZGF0YXNldC5wcm9qZWN0SWQpO1xuXG5cdFx0XHRpZiAocHJvamVjdElkKSB7XG5cdFx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0X2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdF9lbGVtZW50cy5lZGl0UHJvamVjdElucHV0LnZhbHVlID0gX2VsZW1lbnRzLnRvZG9Hcm91cC50ZXh0Q29udGVudDtcblx0XHRcdFx0X2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gYmluZEFkZFRvZG8oaGFuZGxlcikge1xuXHRcdF9lbGVtZW50cy5hZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRjb25zdCB0aXRsZSA9IF9lbGVtZW50cy50b2RvVGl0bGVJbnB1dC52YWx1ZTtcblx0XHRcdGNvbnN0IHByaW9yaXR5ID0gX2VsZW1lbnRzLnRvZG9Qcmlvcml0eUlucHV0LnZhbHVlO1xuXHRcdFx0Y29uc3QgZHVlRGF0ZSA9IF9lbGVtZW50cy50b2RvRHVlRGF0ZUlucHV0LnZhbHVlO1xuXG5cdFx0XHRpZiAodGl0bGUgIT0gJycpIHtcblx0XHRcdFx0Y29uc3QgZ3JvdXAgPSBfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQ7XG5cdFx0XHRcdGhhbmRsZXIodGl0bGUsIG51bGwsIGR1ZURhdGUsIHByaW9yaXR5LCBncm91cCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kVG9nZ2xlQ29tcGxldGUodG9kbywgaGFuZGxlcikge1xuXHRcdGNvbnN0IGNoZWNrYm94ID0gX2dldEVsZW1lbnQoYGlucHV0W2RhdGEtaWQ9XCIke3RvZG8uaWR9XCJdYCk7XG5cdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRoYW5kbGVyKHRvZG8pO1xuXG5cdFx0XHRjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZTtcblx0XHRcdGNoZWNrYm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRUb2dnbGVQcm9qZWN0Rm9ybSgpIHtcblx0XHRfZWxlbWVudHMuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IGRpc3BsYXkgPSBfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheTtcblx0XHRcdGNvbnN0IHRpdGxlID0gX2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXG5cdFx0XHRpZiAoZGlzcGxheSA9PSAnJykge1xuXHRcdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5mb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRpdGxlICE9ICcnKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5RXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHtcblx0XHRcdFx0XHRcdGJ1YmJsZXM6IGZhbHNlLFxuXHRcdFx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGtleUNvZGU6IDEzXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuZGlzcGF0Y2hFdmVudChrZXlFdmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRBZGRQcm9qZWN0KGhhbmRsZXIpIHtcblx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gX2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXG5cdFx0XHRoYW5kbGVyKHRpdGxlKTtcblxuXHRcdFx0X2NsZWFyVGV4dChfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQpO1xuXHRcdFx0X2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHR9KTtcblxuXHRcdF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5ibHVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRWRpdFByb2plY3QoaGFuZGxlcikge1xuXHRcdF9lbGVtZW50cy5lZGl0UHJvamVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBldmVudCA9PiB7XG5cdFx0XHRjb25zdCBuZXdUaXRsZSA9IF9lbGVtZW50cy5lZGl0UHJvamVjdElucHV0LnZhbHVlO1xuXHRcdFx0Y29uc3QgaWQgPSBwYXJzZUludChfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQucHJvamVjdElkKTtcblxuXHRcdFx0aGFuZGxlcihpZCwgbmV3VGl0bGUpO1xuXG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0X2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdH0pO1xuXG5cdFx0X2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcblx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDEzKSBfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC5ibHVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRGVsZXRlUHJvamVjdChwcm9qZWN0LCBoYW5kbGVyKSB7XG5cdFx0Y29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IF9nZXRFbGVtZW50KGAuZGVsZXRlLXByb2plY3QtYnRuW2RhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCJdYCk7XG5cblx0XHRkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdGhhbmRsZXIocHJvamVjdCk7XG5cblx0XHRcdF9lbGVtZW50cy5hbGxUb2Rvc0J0bi5jbGljaygpO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRyZXR1cm4ge1xuXHRcdGRpc3BsYXlUb2Rvcyxcblx0XHRkaXNwbGF5UHJvamVjdHMsXG5cdFx0YmluZFRvZ2dsZVByb2plY3RGb3JtLFxuXHRcdGJpbmRTaG93Q2F0ZWdvcnlUb2Rvcyxcblx0XHRiaW5kU2hvd1Byb2plY3RUb2Rvcyxcblx0XHRiaW5kU2hvd0VkaXRQcm9qZWN0Rm9ybSxcblx0XHRiaW5kQWRkVG9kbyxcblx0XHRiaW5kVG9nZ2xlQ29tcGxldGUsXG5cdFx0YmluZEFkZFByb2plY3QsXG5cdFx0YmluZEVkaXRQcm9qZWN0LFxuXHRcdGJpbmREZWxldGVQcm9qZWN0XG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3OyIsImV4cG9ydCBjb25zdCBpZE1peGluID0ge1xuXHRzZXRJZCgpIHtcblx0XHR0aGlzLmlkID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLm5leHRJZDtcblx0XHRPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykubmV4dElkICs9IDE7XG5cdH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIuanMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==