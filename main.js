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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\n#edit-project-title {\n\tdisplay: none;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-left: 6px solid black;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,SAAS;AACV;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,+BAA+B;CAC/B,iCAAiC;CACjC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;;AAGA;CACC,aAAa;CACb,mBAAmB;CACnB,4BAA4B;AAC7B;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,aAAa;AACd","sourcesContent":["* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\n#edit-project-title {\n\tdisplay: none;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-left: 6px solid black;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n"],"sourceRoot":""}]);
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
		onProjectsChanged,
		handleEditProject
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
		todoGroup: _getElement('#todo-group'),
		todoCards: _getElement('.todo-cards'),
		projectList: _getElement('#project-list'),
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

	function _appendChild(parent, child) {
		return _elements[parent].appendChild(child);
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

	function _clearElement(element) {
		element.innerHTML = null;
	}

	function _clearText(element) {
		element.value = '';
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
		_clearElement(_elements.projectList);

		for (let i = projects.length - 1; i >= 0; i--) {
			let li = _createElement('li', 'project-btn');
			li.dataset.id = projects[i].id;
			li.textContent = projects[i].title;

			_appendChild('projectList', li);
		}
	}

	// Binders for controller handlers to event listeners
	function bindShowCategoryTodos(category, handler) {
		const categoryLi = _getElement(`#${category}-todos`);

		categoryLi.addEventListener('click', event => {
			const todos = handler(category);

			_elements.todoGroup.innerText = event.target.textContent;
			_elements.todoGroup.removeAttribute('data-project-id');
			_elements.todoGroup.dataset.filter = category;
		});
	}

	function bindShowProjectTodos(project, handler) {
		const projectLi = _getElement(`li[data-id="${project.id}"]`);

		projectLi.addEventListener('click', event => {
			const todos = handler(project);

			_elements.todoGroup.innerText = project.title;
			_elements.todoGroup.removeAttribute('data-filter');
			_elements.todoGroup.dataset.projectId = project.id;
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
		bindEditProject
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsK0NBQStDLFdBQVc7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpREFBaUQsUUFBUTtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDdk9aO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9taXhpbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGdhcDogMTZweDtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuI2VkaXQtcHJvamVjdC10aXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29tcGxldGVkIHAge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7O0FBR0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGdhcDogMTZweDtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuI2VkaXQtcHJvamVjdC10aXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29tcGxldGVkIHAge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgd2Vla3NUb0RheXMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbC5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnO1xuXG5jb25zdCBDb250cm9sbGVyID0gKCgpID0+IHtcblx0Y29uc3QgX2ZpbHRlciA9IHtcblx0XHRhbGw6IHRvZG8gPT4gdG9kbyxcblx0XHR0b2RheTogdG9kbyA9PiB0b2RvLFxuXHRcdHdlZWs6IHRvZG8gPT4gdG9kb1xuXHR9XG5cblx0Ly8gSGFuZGxlcnNcblx0Y29uc3QgaGFuZGxlU2hvd1Byb2plY3RUb2RvcyA9IHByb2plY3QgPT4geyBcblx0XHRNb2RlbC5nZXRUb2Rvc09mUHJvamVjdChwcm9qZWN0KTtcblx0fVxuXG5cdGNvbnN0IGhhbmRsZVNob3dDYXRlZ29yeVRvZG9zID0gZmlsdGVyID0+IHtcblx0XHRNb2RlbC5maWx0ZXJUb2RvcyhmaWx0ZXIpO1xuXHR9XG5cblx0Y29uc3QgaGFuZGxlQWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBncm91cCkgPT4ge1xuXHRcdGlmICgncHJvamVjdElkJyBpbiBncm91cCkge1xuXHRcdFx0Y29uc3QgcHJvamVjdCA9IE1vZGVsLmdldFByb2plY3QoZ3JvdXAucHJvamVjdElkKTtcblx0XHRcdE1vZGVsLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cdFx0XHRNb2RlbC5nZXRUb2Rvc09mUHJvamVjdChwcm9qZWN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0TW9kZWwuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblx0XHRcdE1vZGVsLmZpbHRlclRvZG9zKF9maWx0ZXJbZ3JvdXAuZmlsdGVyXSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlVG9nZ2xlQ29tcGxldGUgPSB0b2RvID0+IHRvZG8udG9nZ2xlQ29tcGxldGUoKTtcblxuXHRjb25zdCBoYW5kbGVBZGRQcm9qZWN0ID0gdGl0bGUgPT4gTW9kZWwuY3JlYXRlUHJvamVjdCh0aXRsZSk7XG5cblx0Y29uc3QgaGFuZGxlRWRpdFByb2plY3QgPSAoaWQsIHRpdGxlKSA9PiBNb2RlbC5lZGl0UHJvamVjdChpZCwgdGl0bGUpO1xuXG5cdC8vIENhbGxiYWNrIGZvciBtb2RlbCB3aGVuIGNoYW5nZSBpcyBkZXRlY3RlZCB0byBiaW5kIGhhbmRsZXJzIHRvIGV2ZW50IGxpc3RlbmVyIGJpbmRlcnMgb2YgVmlld1xuXHRmdW5jdGlvbiBvblRvZG9zQ2hhbmdlZCh0b2Rvcykge1xuXHRcdFZpZXcuZGlzcGxheVRvZG9zKHRvZG9zKTtcblxuXHRcdGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuXHRcdFx0Vmlldy5iaW5kVG9nZ2xlQ29tcGxldGUodG9kbywgaGFuZGxlVG9nZ2xlQ29tcGxldGUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uUHJvamVjdHNDaGFuZ2VkKHByb2plY3RzKSB7XG5cdFx0Vmlldy5kaXNwbGF5UHJvamVjdHMocHJvamVjdHMpO1xuXG5cdFx0Zm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG5cdFx0XHRWaWV3LmJpbmRTaG93UHJvamVjdFRvZG9zKHByb2plY3QsIGhhbmRsZVNob3dQcm9qZWN0VG9kb3MpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEluaXRpYWxpemUgdmlld1xuXHRjb25zdCBfaW5pdCA9IChmdW5jdGlvbigpIHtcblx0XHRNb2RlbC5iaW5kTW9kZWxDaGFuZ2VkKCdvblRvZG9zQ2hhbmdlZCcsIG9uVG9kb3NDaGFuZ2VkKTtcblx0XHRNb2RlbC5iaW5kTW9kZWxDaGFuZ2VkKCdvblByb2plY3RzQ2hhbmdlZCcsIG9uUHJvamVjdHNDaGFuZ2VkKTtcblxuXHRcdFZpZXcuYmluZEFkZFRvZG8oaGFuZGxlQWRkVG9kbyk7XG5cdFx0Vmlldy5iaW5kQWRkUHJvamVjdChoYW5kbGVBZGRQcm9qZWN0KTtcblxuXHRcdFZpZXcuYmluZFRvZ2dsZVByb2plY3RGb3JtKCk7XG5cdFx0Vmlldy5iaW5kU2hvd0VkaXRQcm9qZWN0Rm9ybSgpO1xuXG5cdFx0Vmlldy5iaW5kRWRpdFByb2plY3QoaGFuZGxlRWRpdFByb2plY3QpO1xuXG5cdFx0Zm9yIChjb25zdCBbY2F0ZWdvcnksIGZdIG9mIE9iamVjdC5lbnRyaWVzKF9maWx0ZXIpKSB7XG5cdFx0XHRWaWV3LmJpbmRTaG93Q2F0ZWdvcnlUb2RvcyhjYXRlZ29yeSwgaGFuZGxlU2hvd0NhdGVnb3J5VG9kb3MuYmluZChudWxsLCBmKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYSA9IE1vZGVsLmNyZWF0ZVByb2plY3QoJ1Nob3BwaW5nIExpc3QnKTtcblx0XHRNb2RlbC5jcmVhdGVQcm9qZWN0KCdTdHVkeScpO1xuXG5cdFx0TW9kZWwuY3JlYXRlVG9kbygnYScsICdiJywgJ2MnLCAnbG93JywgYSk7XG5cdFx0Y29uc3QgYiA9IE1vZGVsLmNyZWF0ZVRvZG8oJ2UnLCAnZicsICdnJywgJ2hpZ2gnKTtcblxuXHRcdE1vZGVsLmdldFRvZG9zKCk7XG5cdFx0TW9kZWwuZ2V0UHJvamVjdHMoKTtcblx0fSkoKTtcblxuXHRyZXR1cm4ge1xuXHRcdG9uVG9kb3NDaGFuZ2VkLFxuXHRcdG9uUHJvamVjdHNDaGFuZ2VkLFxuXHRcdGhhbmRsZUVkaXRQcm9qZWN0XG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImltcG9ydCBUb2RvIGZyb20gJy4vVG9kby5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyLmpzJztcblxuY29uc3QgTW9kZWwgPSAoKCkgPT4ge1xuXHRsZXQgX3RvZG9zID0gW107XG5cdGxldCBfcHJvamVjdHMgPSBbXTtcblxuXHRmdW5jdGlvbiBnZXRUb2RvcygpIHtcblx0XHR0aGlzLm9uVG9kb3NDaGFuZ2VkKF90b2Rvcyk7XG5cblx0XHRyZXR1cm4gX3RvZG9zO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXHRcdHRoaXMub25Qcm9qZWN0c0NoYW5nZWQoX3Byb2plY3RzKTtcblxuXHRcdHJldHVybiBfcHJvamVjdHM7XG5cdH1cblxuXHRjb25zdCBnZXRUb2RvID0gaWQgPT4gX3RvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IGlkKTtcblxuXHRjb25zdCBnZXRQcm9qZWN0ID0gaWQgPT4gX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGlkKTtcblxuXHRjb25zdCBnZXRQcm9qZWN0RnJvbVRvZG8gPSB0b2RvID0+IHtcblx0XHRyZXR1cm4gX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHRvZG8ucHJvamVjdElkKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRvZG9zT2ZQcm9qZWN0KHByb2plY3QpIHtcblx0XHRjb25zdCB0b2RvcyA9IF90b2Rvcy5maWx0ZXIodG9kbyA9PiBwcm9qZWN0LmdldFRvZG9JZHMoKS5pbmNsdWRlcyh0b2RvLmlkKSk7XG5cblx0XHR0aGlzLm9uVG9kb3NDaGFuZ2VkKHRvZG9zKTtcblxuXHRcdHJldHVybiB0b2Rvcztcblx0fVxuXG5cdGNvbnN0IGdldFVuY29tcGxldGVkVG9kb3MgPSB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZSk7XG5cblx0ZnVuY3Rpb24gZmlsdGVyVG9kb3MoZmlsdGVyKSB7XG5cdFx0Y29uc3QgdG9kb3MgPSBfdG9kb3MuZmlsdGVyKGZpbHRlcik7XG5cblx0XHR0aGlzLm9uVG9kb3NDaGFuZ2VkKHRvZG9zKTtcblxuXHRcdHJldHVybiB0b2Rvcztcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuXHRcdGNvbnN0IHRvZG8gPSBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG5cdFx0X3RvZG9zLnB1c2godG9kbyk7XG5cdFx0aWYgKHByb2plY3QpIF9saW5rVG9kb0FuZFByb2plY3QodG9kbywgcHJvamVjdCk7XG5cblx0XHRyZXR1cm4gdG9kbztcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSk7XG5cdFx0X3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG5cblx0XHR0aGlzLm9uUHJvamVjdHNDaGFuZ2VkKF9wcm9qZWN0cyk7XG5cdFx0cmV0dXJuIHByb2plY3Q7XG5cdH1cblxuXHRmdW5jdGlvbiBlZGl0VG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRcdGNvbnN0IHRvZG8gPSBnZXRUb2RvKGlkKTtcblx0XHRpZiAodGl0bGUpIHRvZG8udGl0bGUgPSB0aXRsZTtcblx0XHRpZiAoZGVzY3JpcHRpb24pIHRvZG8udGl0bGUgPSBkZXNjcmlwdGlvbjtcblx0XHRpZiAoZHVlRGF0ZSkgdG9kby50aXRsZSA9IGR1ZURhdGU7XG5cdFx0aWYgKHByaW9yaXR5KSB0b2RvLnRpdGxlID0gcHJpb3JpdHk7XG5cdH1cblxuXHRmdW5jdGlvbiBlZGl0UHJvamVjdChpZCwgdGl0bGUpIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChpZCk7XG5cdFx0aWYgKHRpdGxlKSBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG5cblx0XHR0aGlzLm9uUHJvamVjdHNDaGFuZ2VkKF9wcm9qZWN0cyk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pIHtcblx0XHRjb25zdCBpbmRleCA9IF90b2Rvcy5pbmRleE9mKHRvZG8pO1xuXHRcdF90b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0aWYgKHRvZG8ucHJvamVjdElkKSB7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdCh0b2RvLnByb2plY3RJZCk7XG5cdFx0XHRwcm9qZWN0LmRlbGV0ZVRvZG9JZCgpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcblx0XHRjb25zdCB0b2RvSWRzID0gcHJvamVjdC5nZXRUb2RvSWRzKCk7XG5cdFx0X3RvZG9zID0gX3RvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvSWRzLmluY2x1ZGVzKHRvZG8uaWQpKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gX3Byb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG5cdFx0X3Byb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRmdW5jdGlvbiBfbGlua1RvZG9BbmRQcm9qZWN0KHRvZG8sIHByb2plY3QpIHtcblx0XHR0b2RvLnNldFByb2plY3RJZChwcm9qZWN0LmlkKTtcblx0XHRwcm9qZWN0LmFkZFRvZG9JZCh0b2RvLmlkKVxuXHR9XG5cblx0Ly8gQmluZCBtb2RlbCB0byBjb250cm9sbGVyIHZpYSBjYWxsYmFja1xuXHRmdW5jdGlvbiBiaW5kTW9kZWxDaGFuZ2VkKGtleSwgY2FsbGJhY2spIHtcblx0XHR0aGlzW2tleV0gPSBjYWxsYmFjaztcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Z2V0VG9kb3MsXG5cdFx0Z2V0UHJvamVjdHMsXG5cdFx0Z2V0VG9kbyxcblx0XHRnZXRQcm9qZWN0LFxuXHRcdGdldFByb2plY3RGcm9tVG9kbyxcblx0XHRnZXRUb2Rvc09mUHJvamVjdCxcblx0XHRnZXRVbmNvbXBsZXRlZFRvZG9zLFxuXHRcdGZpbHRlclRvZG9zLFxuXHRcdGNyZWF0ZVRvZG8sXG5cdFx0Y3JlYXRlUHJvamVjdCxcblx0XHRlZGl0VG9kbyxcblx0XHRlZGl0UHJvamVjdCxcblx0XHRkZWxldGVUb2RvLFxuXHRcdGRlbGV0ZVByb2plY3QsXG5cdFx0YmluZE1vZGVsQ2hhbmdlZFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7IiwiaW1wb3J0IGNsb3Nlc3RJbmRleFRvIGZyb20gXCJkYXRlLWZucy9mcC9jbG9zZXN0SW5kZXhUb1wiO1xuaW1wb3J0IHsgaWRNaXhpbiB9IGZyb20gJy4vbWl4aW5zLmpzJztcblxuY29uc3QgcHJvamVjdFByb3RvID0gT2JqZWN0LmFzc2lnbih7XG5cdG5leHRJZDogMCxcblx0Z2V0VG9kb0lkczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RvZG9JZHM7XG5cdH0sXG5cdGFkZFRvZG9JZDogZnVuY3Rpb24oaWQpIHtcblx0XHR0aGlzLl90b2RvSWRzLnB1c2goaWQpO1xuXHR9LFxuXHRkZWxldGVUb2RvSWQ6IGZ1bmN0aW9uKGlkKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLl90b2RvSWRzLmluZGV4T2YoaWQpO1xuXHRcdHRoaXMuX3RvZG9JZHMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxufSwgaWRNaXhpbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcblx0bGV0IG9iaiA9IE9iamVjdC5jcmVhdGUocHJvamVjdFByb3RvKTtcblxuXHRvYmouc2V0SWQoKTtcblx0b2JqLl90b2RvSWRzID0gW107XG5cdG9iai50aXRsZSA9IHRpdGxlO1xuXHRcblx0cmV0dXJuIG9iajtcbn07IiwiaW1wb3J0IHsgaWRNaXhpbiB9IGZyb20gJy4vbWl4aW5zLmpzJztcblxuY29uc3QgdG9kb1Byb3RvID0gT2JqZWN0LmFzc2lnbih7XG5cdG5leHRJZDogMCxcblx0c2V0UHJvamVjdElkOiBmdW5jdGlvbihpZCkge1xuXHRcdHRoaXMucHJvamVjdElkID0gaWQ7XG5cdH0sXG5cdHRvZ2dsZUNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG5cdH1cbn0sIGlkTWl4aW4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblx0bGV0IG9iaiA9IE9iamVjdC5jcmVhdGUodG9kb1Byb3RvKTtcblx0XG5cdG9iai5zZXRJZCgpO1xuXHRvYmoudGl0bGUgPSB0aXRsZTtcblx0b2JqLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdG9iai5kdWVEYXRlID0gZHVlRGF0ZTtcblx0b2JqLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdG9iai5jb21wbGV0ZSA9IGZhbHNlO1xuXG5cdHJldHVybiBvYmo7XG59IiwiY29uc3QgVmlldyA9ICgoKSA9PiB7XG5cdC8vIENhY2hlZCBlbGVtZW50c1xuXHRjb25zdCBfZWxlbWVudHMgPSB7XG5cdFx0dG9kb0dyb3VwOiBfZ2V0RWxlbWVudCgnI3RvZG8tZ3JvdXAnKSxcblx0XHR0b2RvQ2FyZHM6IF9nZXRFbGVtZW50KCcudG9kby1jYXJkcycpLFxuXHRcdHByb2plY3RMaXN0OiBfZ2V0RWxlbWVudCgnI3Byb2plY3QtbGlzdCcpLFxuXHRcdGFkZFByb2plY3RCdG46IF9nZXRFbGVtZW50KCcjYWRkLXByb2plY3QtYnRuJyksXG5cdFx0cHJvamVjdFRpdGxlSW5wdXQ6IF9nZXRFbGVtZW50KCcjcHJvamVjdC10aXRsZScpLFxuXHRcdGFkZFRvZG9Gb3JtOiBfZ2V0RWxlbWVudCgnI2FkZC10b2RvLWZvcm0nKSxcblx0XHR0b2RvVGl0bGVJbnB1dDogX2dldEVsZW1lbnQoJyN0b2RvLXRpdGxlJyksXG5cdFx0dG9kb1ByaW9yaXR5SW5wdXQ6IF9nZXRFbGVtZW50KCcjdG9kby1wcmlvcml0eScpLFxuXHRcdHRvZG9EdWVEYXRlSW5wdXQ6IF9nZXRFbGVtZW50KCcjdG9kby1kdWVkYXRlJyksXG5cdFx0ZWRpdFByb2plY3RJbnB1dDogX2dldEVsZW1lbnQoJyNlZGl0LXByb2plY3QtdGl0bGUnKVxuXHR9O1xuXG5cdC8vIEhlbHBlcnNcblx0ZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0aWYgKHRleHQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHRmdW5jdGlvbiBfZ2V0RWxlbWVudChzZWxlY3Rvcikge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9hcHBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0cmV0dXJuIF9lbGVtZW50c1twYXJlbnRdLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9jcmVhdGVUb2RvQ2FyZCh0b2RvKSB7XG5cdFx0bGV0IHRvZG9DYXJkID0gX2NyZWF0ZUVsZW1lbnQoJ2RpdicsICd0b2RvLWNhcmQnKTtcblx0XHR0b2RvQ2FyZC5kYXRhc2V0LmlkID0gdG9kby5pZDtcblxuXHRcdGNvbnN0IGNoZWNrYm94ID0gX2NyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0Y2hlY2tib3guZGF0YXNldC5pZCA9IHRvZG8uaWQ7XG5cdFx0Y2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGU7XG5cblx0XHRpZiAodG9kby5jb21wbGV0ZSkge1xuXHRcdFx0dG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvZG9DYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpdGxlVGV4dCA9IF9jcmVhdGVFbGVtZW50KCdwJywgJycsIHRvZG8udGl0bGUpO1xuXG5cdFx0dG9kb0NhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXHRcdHRvZG9DYXJkLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cblx0XHRzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcblx0XHRcdGNhc2UgJ2xvdyc6XG5cdFx0XHRcdHRvZG9DYXJkLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICdncmVlbic7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0dG9kb0NhcmQuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gJ29yYW5nZSc7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlnaCc6XG5cdFx0XHRcdHRvZG9DYXJkLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICdyZWQnOyBicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2RvQ2FyZFxuXHR9XG5cblx0ZnVuY3Rpb24gX2NsZWFyRWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2NsZWFyVGV4dChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC52YWx1ZSA9ICcnO1xuXHR9XG5cblx0Ly8gUmVuZGVyIGVsZW1lbnRzXG5cdGZ1bmN0aW9uIGRpc3BsYXlUb2Rvcyh0b2Rvcykge1xuXHRcdF9jbGVhckVsZW1lbnQoX2VsZW1lbnRzLnRvZG9DYXJkcyk7XG5cdFx0X2NsZWFyVGV4dChfZWxlbWVudHMudG9kb1RpdGxlSW5wdXQpO1xuXG5cdFx0Zm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG5cdFx0XHRjb25zdCB0b2RvQ2FyZCA9IF9jcmVhdGVUb2RvQ2FyZCh0b2RvKTtcblx0XHRcdF9hcHBlbmRDaGlsZCgndG9kb0NhcmRzJywgdG9kb0NhcmQpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cykge1xuXHRcdF9jbGVhckVsZW1lbnQoX2VsZW1lbnRzLnByb2plY3RMaXN0KTtcblxuXHRcdGZvciAobGV0IGkgPSBwcm9qZWN0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0bGV0IGxpID0gX2NyZWF0ZUVsZW1lbnQoJ2xpJywgJ3Byb2plY3QtYnRuJyk7XG5cdFx0XHRsaS5kYXRhc2V0LmlkID0gcHJvamVjdHNbaV0uaWQ7XG5cdFx0XHRsaS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnRpdGxlO1xuXG5cdFx0XHRfYXBwZW5kQ2hpbGQoJ3Byb2plY3RMaXN0JywgbGkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJpbmRlcnMgZm9yIGNvbnRyb2xsZXIgaGFuZGxlcnMgdG8gZXZlbnQgbGlzdGVuZXJzXG5cdGZ1bmN0aW9uIGJpbmRTaG93Q2F0ZWdvcnlUb2RvcyhjYXRlZ29yeSwgaGFuZGxlcikge1xuXHRcdGNvbnN0IGNhdGVnb3J5TGkgPSBfZ2V0RWxlbWVudChgIyR7Y2F0ZWdvcnl9LXRvZG9zYCk7XG5cblx0XHRjYXRlZ29yeUxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0Y29uc3QgdG9kb3MgPSBoYW5kbGVyKGNhdGVnb3J5KTtcblxuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5pbm5lclRleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQuZmlsdGVyID0gY2F0ZWdvcnk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kU2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0LCBoYW5kbGVyKSB7XG5cdFx0Y29uc3QgcHJvamVjdExpID0gX2dldEVsZW1lbnQoYGxpW2RhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCJdYCk7XG5cblx0XHRwcm9qZWN0TGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRjb25zdCB0b2RvcyA9IGhhbmRsZXIocHJvamVjdCk7XG5cblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kU2hvd0VkaXRQcm9qZWN0Rm9ybSgpIHtcblx0XHRfZWxlbWVudHMudG9kb0dyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0Y29uc3QgcHJvamVjdElkID0gcGFyc2VJbnQoX2VsZW1lbnRzLnRvZG9Hcm91cC5kYXRhc2V0LnByb2plY3RJZCk7XG5cblx0XHRcdGlmIChwcm9qZWN0SWQpIHtcblx0XHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0X2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQudmFsdWUgPSBfZWxlbWVudHMudG9kb0dyb3VwLnRleHRDb250ZW50O1xuXHRcdFx0XHRfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBiaW5kQWRkVG9kbyhoYW5kbGVyKSB7XG5cdFx0X2VsZW1lbnRzLmFkZFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnN0IHRpdGxlID0gX2VsZW1lbnRzLnRvZG9UaXRsZUlucHV0LnZhbHVlO1xuXHRcdFx0Y29uc3QgcHJpb3JpdHkgPSBfZWxlbWVudHMudG9kb1ByaW9yaXR5SW5wdXQudmFsdWU7XG5cdFx0XHRjb25zdCBkdWVEYXRlID0gX2VsZW1lbnRzLnRvZG9EdWVEYXRlSW5wdXQudmFsdWU7XG5cblx0XHRcdGlmICh0aXRsZSAhPSAnJykge1xuXHRcdFx0XHRjb25zdCBncm91cCA9IF9lbGVtZW50cy50b2RvR3JvdXAuZGF0YXNldDtcblx0XHRcdFx0aGFuZGxlcih0aXRsZSwgbnVsbCwgZHVlRGF0ZSwgcHJpb3JpdHksIGdyb3VwKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRUb2dnbGVDb21wbGV0ZSh0b2RvLCBoYW5kbGVyKSB7XG5cdFx0Y29uc3QgY2hlY2tib3ggPSBfZ2V0RWxlbWVudChgaW5wdXRbZGF0YS1pZD1cIiR7dG9kby5pZH1cIl1gKTtcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGhhbmRsZXIodG9kbyk7XG5cblx0XHRcdGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlO1xuXHRcdFx0Y2hlY2tib3gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gYmluZFRvZ2dsZVByb2plY3RGb3JtKCkge1xuXHRcdF9lbGVtZW50cy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0Y29uc3QgZGlzcGxheSA9IF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5zdHlsZS5kaXNwbGF5O1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG5cblx0XHRcdGlmIChkaXNwbGF5ID09ICcnKSB7XG5cdFx0XHRcdF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0X2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LmZvY3VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGl0bGUgIT0gJycpIHtcblx0XHRcdFx0XHRjb25zdCBrZXlFdmVudCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXlkb3duJywge1xuXHRcdFx0XHRcdFx0YnViYmxlczogZmFsc2UsXG5cdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0a2V5Q29kZTogMTNcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5kaXNwYXRjaEV2ZW50KGtleUV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZEFkZFByb2plY3QoaGFuZGxlcikge1xuXHRcdF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZXZlbnQgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG5cblx0XHRcdGhhbmRsZXIodGl0bGUpO1xuXG5cdFx0XHRfY2xlYXJUZXh0KF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dCk7XG5cdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdH0pO1xuXG5cdFx0X2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG5cdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykgX2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LmJsdXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRFZGl0UHJvamVjdChoYW5kbGVyKSB7XG5cdFx0X2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IG5ld1RpdGxlID0gX2VsZW1lbnRzLmVkaXRQcm9qZWN0SW5wdXQudmFsdWU7XG5cdFx0XHRjb25zdCBpZCA9IHBhcnNlSW50KF9lbGVtZW50cy50b2RvR3JvdXAuZGF0YXNldC5wcm9qZWN0SWQpO1xuXG5cdFx0XHRoYW5kbGVyKGlkLCBuZXdUaXRsZSk7XG5cblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAudGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0fSk7XG5cblx0XHRfZWxlbWVudHMuZWRpdFByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIF9lbGVtZW50cy5lZGl0UHJvamVjdElucHV0LmJsdXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdFxuXHRcblx0cmV0dXJuIHtcblx0XHRkaXNwbGF5VG9kb3MsXG5cdFx0ZGlzcGxheVByb2plY3RzLFxuXHRcdGJpbmRUb2dnbGVQcm9qZWN0Rm9ybSxcblx0XHRiaW5kU2hvd0NhdGVnb3J5VG9kb3MsXG5cdFx0YmluZFNob3dQcm9qZWN0VG9kb3MsXG5cdFx0YmluZFNob3dFZGl0UHJvamVjdEZvcm0sXG5cdFx0YmluZEFkZFRvZG8sXG5cdFx0YmluZFRvZ2dsZUNvbXBsZXRlLFxuXHRcdGJpbmRBZGRQcm9qZWN0LFxuXHRcdGJpbmRFZGl0UHJvamVjdFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldzsiLCJleHBvcnQgY29uc3QgaWRNaXhpbiA9IHtcblx0c2V0SWQoKSB7XG5cdFx0dGhpcy5pZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5uZXh0SWQ7XG5cdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLm5leHRJZCArPSAxO1xuXHR9XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=