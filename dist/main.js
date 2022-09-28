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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,SAAS;AACV;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,+BAA+B;CAC/B,iCAAiC;CACjC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;;AAGA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,aAAa;AACd","sourcesContent":["* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\tlist-style-type: none;\n}\n\n#root {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\tgrid-template-rows: auto 1fr auto;\n\theight: 100vh;\n}\n\n#header {\n\tdisplay: flex;\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n\tgap: 16px;\n}\n\n#header img {\n\twidth: 50px;\n\theight: auto;\n}\n\n#sidebar {\n\tpadding: 16px;\n}\n\n#project-title {\n\tdisplay: none;\n}\n\n.sidebar-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#content {\n\theight: 100%;\n\tpadding: 16px;\n}\n\ninput[type=\"datetime-local\"]::-webkit-datetime-edit {\n\tdisplay:none;\n}\n\n\n.todo-card {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.completed p {\n\ttext-decoration: line-through;\n}\n\n#footer {\n\tgrid-column: 1 / -1;\n\tpadding: 16px;\n}\n"],"sourceRoot":""}]);
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

	const handleAddProject = title => {
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(title);
	}

	// Callback for model when change is detected to bind handlers to event listener binders of View
	function onTodosChanged(todos) {
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(todos);

		for (const todo of todos) {
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindToggleComplete(todo, handleToggleComplete);
		}
	}

	function onProjectsChanged(projects) {
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayProjects(projects.reverse());

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
		_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleProjectForm();
		for (const [category, f] of Object.entries(_filter)) {
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindShowCategoryTodos(category, handleShowCategoryTodos.bind(null, f));
		}

		const a = _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject('Shopping List');
		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject('Study');

		_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo('a', 'b', 'c', 'd', a);
		const b = _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo('e', 'f', 'g', 'h');

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
		todoTitleInput: _getElement('#todo-title')
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

		const titleText = _createElement('p', undefined, todo.title);

		todoCard.appendChild(checkbox);
		todoCard.appendChild(titleText);

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

		for (const project of projects) {
			let li = _createElement('li', 'project-btn');
			li.dataset.id = project.id;
			li.textContent = project.title;

			_appendChild('projectList', li);
		}
	}

	function toggleProjectForm() {
		_elements.addProjectBtn.addEventListener('click', event => {
			const display = _elements.projectTitleInput.style.display;

			_elements.projectTitleInput.style.display = (display == '') ? 'block' : '';
		});
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
	
	function bindAddTodo(handler) {
		_elements.addTodoForm.addEventListener('submit', event => {
			event.preventDefault();
			const title = _elements.todoTitleInput.value;

			if (title != '') {
				const group = _elements.todoGroup.dataset;
				handler(title, null, null, null, group);
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

	function bindAddProject(handler) {
		_elements.projectTitleInput.addEventListener('focusout', event => {
			const title = _elements.projectTitleInput.value;

			handler(title);

			_clearText(_elements.projectTitleInput);
			_elements.projectTitleInput.style.display = '';
		});
	}
	
	return {
		displayTodos,
		displayProjects,
		toggleProjectForm,
		bindShowCategoryTodos,
		bindShowProjectTodos,
		bindAddTodo,
		bindToggleComplete,
		bindAddProject
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQUNIOztBQUVBO0FBQ0EsK0NBQStDLFdBQVc7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDbEtaO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9taXhpbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGdhcDogMTZweDtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCBwIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsVUFBVTtDQUNWLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0IsaUNBQWlDO0NBQ2pDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7OztBQUdBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNyb290IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGdhcDogMTZweDtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcXG5cXHRkaXNwbGF5Om5vbmU7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCBwIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHdlZWtzVG9EYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwuanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJztcblxuY29uc3QgQ29udHJvbGxlciA9ICgoKSA9PiB7XG5cdGNvbnN0IF9maWx0ZXIgPSB7XG5cdFx0YWxsOiB0b2RvID0+IHRvZG8sXG5cdFx0dG9kYXk6IHRvZG8gPT4gdG9kbyxcblx0XHR3ZWVrOiB0b2RvID0+IHRvZG9cblx0fVxuXG5cdC8vIEhhbmRsZXJzXG5cdGNvbnN0IGhhbmRsZVNob3dQcm9qZWN0VG9kb3MgPSBwcm9qZWN0ID0+IHsgXG5cdFx0TW9kZWwuZ2V0VG9kb3NPZlByb2plY3QocHJvamVjdCk7XG5cdH1cblxuXHRjb25zdCBoYW5kbGVTaG93Q2F0ZWdvcnlUb2RvcyA9IGZpbHRlciA9PiB7XG5cdFx0TW9kZWwuZmlsdGVyVG9kb3MoZmlsdGVyKTtcblx0fVxuXG5cdGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZ3JvdXApID0+IHtcblx0XHRpZiAoJ3Byb2plY3RJZCcgaW4gZ3JvdXApIHtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBNb2RlbC5nZXRQcm9qZWN0KGdyb3VwLnByb2plY3RJZCk7XG5cdFx0XHRNb2RlbC5jcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuXHRcdFx0TW9kZWwuZ2V0VG9kb3NPZlByb2plY3QocHJvamVjdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdE1vZGVsLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cdFx0XHRNb2RlbC5maWx0ZXJUb2RvcyhfZmlsdGVyW2dyb3VwLmZpbHRlcl0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gdG9kbyA9PiB0b2RvLnRvZ2dsZUNvbXBsZXRlKCk7XG5cblx0Y29uc3QgaGFuZGxlQWRkUHJvamVjdCA9IHRpdGxlID0+IHtcblx0XHRNb2RlbC5jcmVhdGVQcm9qZWN0KHRpdGxlKTtcblx0fVxuXG5cdC8vIENhbGxiYWNrIGZvciBtb2RlbCB3aGVuIGNoYW5nZSBpcyBkZXRlY3RlZCB0byBiaW5kIGhhbmRsZXJzIHRvIGV2ZW50IGxpc3RlbmVyIGJpbmRlcnMgb2YgVmlld1xuXHRmdW5jdGlvbiBvblRvZG9zQ2hhbmdlZCh0b2Rvcykge1xuXHRcdFZpZXcuZGlzcGxheVRvZG9zKHRvZG9zKTtcblxuXHRcdGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuXHRcdFx0Vmlldy5iaW5kVG9nZ2xlQ29tcGxldGUodG9kbywgaGFuZGxlVG9nZ2xlQ29tcGxldGUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uUHJvamVjdHNDaGFuZ2VkKHByb2plY3RzKSB7XG5cdFx0Vmlldy5kaXNwbGF5UHJvamVjdHMocHJvamVjdHMucmV2ZXJzZSgpKTtcblxuXHRcdGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuXHRcdFx0Vmlldy5iaW5kU2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0LCBoYW5kbGVTaG93UHJvamVjdFRvZG9zKTtcblx0XHR9XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIHZpZXdcblx0Y29uc3QgX2luaXQgPSAoZnVuY3Rpb24oKSB7XG5cdFx0TW9kZWwuYmluZE1vZGVsQ2hhbmdlZCgnb25Ub2Rvc0NoYW5nZWQnLCBvblRvZG9zQ2hhbmdlZCk7XG5cdFx0TW9kZWwuYmluZE1vZGVsQ2hhbmdlZCgnb25Qcm9qZWN0c0NoYW5nZWQnLCBvblByb2plY3RzQ2hhbmdlZCk7XG5cblx0XHRWaWV3LmJpbmRBZGRUb2RvKGhhbmRsZUFkZFRvZG8pO1xuXHRcdFZpZXcuYmluZEFkZFByb2plY3QoaGFuZGxlQWRkUHJvamVjdCk7XG5cdFx0Vmlldy50b2dnbGVQcm9qZWN0Rm9ybSgpO1xuXHRcdGZvciAoY29uc3QgW2NhdGVnb3J5LCBmXSBvZiBPYmplY3QuZW50cmllcyhfZmlsdGVyKSkge1xuXHRcdFx0Vmlldy5iaW5kU2hvd0NhdGVnb3J5VG9kb3MoY2F0ZWdvcnksIGhhbmRsZVNob3dDYXRlZ29yeVRvZG9zLmJpbmQobnVsbCwgZikpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGEgPSBNb2RlbC5jcmVhdGVQcm9qZWN0KCdTaG9wcGluZyBMaXN0Jyk7XG5cdFx0TW9kZWwuY3JlYXRlUHJvamVjdCgnU3R1ZHknKTtcblxuXHRcdE1vZGVsLmNyZWF0ZVRvZG8oJ2EnLCAnYicsICdjJywgJ2QnLCBhKTtcblx0XHRjb25zdCBiID0gTW9kZWwuY3JlYXRlVG9kbygnZScsICdmJywgJ2cnLCAnaCcpO1xuXG5cdFx0TW9kZWwuZ2V0VG9kb3MoKTtcblx0XHRNb2RlbC5nZXRQcm9qZWN0cygpO1xuXHR9KSgpO1xuXG5cdHJldHVybiB7XG5cdFx0b25Ub2Rvc0NoYW5nZWQsXG5cdFx0b25Qcm9qZWN0c0NoYW5nZWRcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBNb2RlbCA9ICgoKSA9PiB7XG5cdGxldCBfdG9kb3MgPSBbXTtcblx0bGV0IF9wcm9qZWN0cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGdldFRvZG9zKCkge1xuXHRcdHRoaXMub25Ub2Rvc0NoYW5nZWQoX3RvZG9zKTtcblxuXHRcdHJldHVybiBfdG9kb3M7XG5cdH07XG5cblx0ZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG5cdFx0dGhpcy5vblByb2plY3RzQ2hhbmdlZChfcHJvamVjdHMpO1xuXG5cdFx0cmV0dXJuIF9wcm9qZWN0cztcblx0fVxuXG5cdGNvbnN0IGdldFRvZG8gPSBpZCA9PiBfdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT0gaWQpO1xuXG5cdGNvbnN0IGdldFByb2plY3QgPSBpZCA9PiBfcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gaWQpO1xuXG5cdGNvbnN0IGdldFByb2plY3RGcm9tVG9kbyA9IHRvZG8gPT4ge1xuXHRcdHJldHVybiBfcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gdG9kby5wcm9qZWN0SWQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VG9kb3NPZlByb2plY3QocHJvamVjdCkge1xuXHRcdGNvbnN0IHRvZG9zID0gX3RvZG9zLmZpbHRlcih0b2RvID0+IHByb2plY3QuZ2V0VG9kb0lkcygpLmluY2x1ZGVzKHRvZG8uaWQpKTtcblxuXHRcdHRoaXMub25Ub2Rvc0NoYW5nZWQodG9kb3MpO1xuXG5cdFx0cmV0dXJuIHRvZG9zO1xuXHR9XG5cblx0Y29uc3QgZ2V0VW5jb21wbGV0ZWRUb2RvcyA9IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlKTtcblxuXHRmdW5jdGlvbiBmaWx0ZXJUb2RvcyhmaWx0ZXIpIHtcblx0XHRjb25zdCB0b2RvcyA9IF90b2Rvcy5maWx0ZXIoZmlsdGVyKTtcblxuXHRcdHRoaXMub25Ub2Rvc0NoYW5nZWQodG9kb3MpO1xuXG5cdFx0cmV0dXJuIHRvZG9zO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG5cdFx0Y29uc3QgdG9kbyA9IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cblx0XHRfdG9kb3MucHVzaCh0b2RvKTtcblx0XHRpZiAocHJvamVjdCkgX2xpbmtUb2RvQW5kUHJvamVjdCh0b2RvLCBwcm9qZWN0KTtcblxuXHRcdHJldHVybiB0b2RvO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuXHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHRpdGxlKTtcblx0XHRfcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuXHRcdHRoaXMub25Qcm9qZWN0c0NoYW5nZWQoX3Byb2plY3RzKTtcblx0XHRyZXR1cm4gcHJvamVjdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGVkaXRUb2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdFx0Y29uc3QgdG9kbyA9IGdldFRvZG8oaWQpO1xuXHRcdGlmICh0aXRsZSkgdG9kby50aXRsZSA9IHRpdGxlO1xuXHRcdGlmIChkZXNjcmlwdGlvbikgdG9kby50aXRsZSA9IGRlc2NyaXB0aW9uO1xuXHRcdGlmIChkdWVEYXRlKSB0b2RvLnRpdGxlID0gZHVlRGF0ZTtcblx0XHRpZiAocHJpb3JpdHkpIHRvZG8udGl0bGUgPSBwcmlvcml0eTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGlkLCB0aXRsZSkge1xuXHRcdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KGlkKTtcblx0XHRpZiAodGl0bGUpIHByb2plY3QudGl0bGUgPSB0aXRsZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kbykge1xuXHRcdGNvbnN0IGluZGV4ID0gX3RvZG9zLmluZGV4T2YodG9kbyk7XG5cdFx0X3RvZG9zLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRpZiAodG9kby5wcm9qZWN0SWQpIHtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHRvZG8ucHJvamVjdElkKTtcblx0XHRcdHByb2plY3QuZGVsZXRlVG9kb0lkKCk7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuXHRcdGNvbnN0IHRvZG9JZHMgPSBwcm9qZWN0LmdldFRvZG9JZHMoKTtcblx0XHRfdG9kb3MgPSBfdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG9JZHMuaW5jbHVkZXModG9kby5pZCkpO1xuXG5cdFx0Y29uc3QgaW5kZXggPSBfcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRfcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9saW5rVG9kb0FuZFByb2plY3QodG9kbywgcHJvamVjdCkge1xuXHRcdHRvZG8uc2V0UHJvamVjdElkKHByb2plY3QuaWQpO1xuXHRcdHByb2plY3QuYWRkVG9kb0lkKHRvZG8uaWQpXG5cdH1cblxuXHQvLyBCaW5kIG1vZGVsIHRvIGNvbnRyb2xsZXIgdmlhIGNhbGxiYWNrXG5cdGZ1bmN0aW9uIGJpbmRNb2RlbENoYW5nZWQoa2V5LCBjYWxsYmFjaykge1xuXHRcdHRoaXNba2V5XSA9IGNhbGxiYWNrO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRnZXRUb2Rvcyxcblx0XHRnZXRQcm9qZWN0cyxcblx0XHRnZXRUb2RvLFxuXHRcdGdldFByb2plY3QsXG5cdFx0Z2V0UHJvamVjdEZyb21Ub2RvLFxuXHRcdGdldFRvZG9zT2ZQcm9qZWN0LFxuXHRcdGdldFVuY29tcGxldGVkVG9kb3MsXG5cdFx0ZmlsdGVyVG9kb3MsXG5cdFx0Y3JlYXRlVG9kbyxcblx0XHRjcmVhdGVQcm9qZWN0LFxuXHRcdGVkaXRUb2RvLFxuXHRcdGVkaXRQcm9qZWN0LFxuXHRcdGRlbGV0ZVRvZG8sXG5cdFx0ZGVsZXRlUHJvamVjdCxcblx0XHRiaW5kTW9kZWxDaGFuZ2VkXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDsiLCJpbXBvcnQgY2xvc2VzdEluZGV4VG8gZnJvbSBcImRhdGUtZm5zL2ZwL2Nsb3Nlc3RJbmRleFRvXCI7XG5pbXBvcnQgeyBpZE1peGluIH0gZnJvbSAnLi9taXhpbnMuanMnO1xuXG5jb25zdCBwcm9qZWN0UHJvdG8gPSBPYmplY3QuYXNzaWduKHtcblx0bmV4dElkOiAwLFxuXHRnZXRUb2RvSWRzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdG9kb0lkcztcblx0fSxcblx0YWRkVG9kb0lkOiBmdW5jdGlvbihpZCkge1xuXHRcdHRoaXMuX3RvZG9JZHMucHVzaChpZCk7XG5cdH0sXG5cdGRlbGV0ZVRvZG9JZDogZnVuY3Rpb24oaWQpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuX3RvZG9JZHMuaW5kZXhPZihpZCk7XG5cdFx0dGhpcy5fdG9kb0lkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG59LCBpZE1peGluKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuXHRsZXQgb2JqID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0UHJvdG8pO1xuXG5cdG9iai5zZXRJZCgpO1xuXHRvYmouX3RvZG9JZHMgPSBbXTtcblx0b2JqLnRpdGxlID0gdGl0bGU7XG5cdFxuXHRyZXR1cm4gb2JqO1xufTsiLCJpbXBvcnQgeyBpZE1peGluIH0gZnJvbSAnLi9taXhpbnMuanMnO1xuXG5jb25zdCB0b2RvUHJvdG8gPSBPYmplY3QuYXNzaWduKHtcblx0bmV4dElkOiAwLFxuXHRzZXRQcm9qZWN0SWQ6IGZ1bmN0aW9uKGlkKSB7XG5cdFx0dGhpcy5wcm9qZWN0SWQgPSBpZDtcblx0fSxcblx0dG9nZ2xlQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcblx0fVxufSwgaWRNaXhpbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRsZXQgb2JqID0gT2JqZWN0LmNyZWF0ZSh0b2RvUHJvdG8pO1xuXHRcblx0b2JqLnNldElkKCk7XG5cdG9iai50aXRsZSA9IHRpdGxlO1xuXHRvYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0b2JqLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRvYmoucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0b2JqLmNvbXBsZXRlID0gZmFsc2U7XG5cblx0cmV0dXJuIG9iajtcbn0iLCJjb25zdCBWaWV3ID0gKCgpID0+IHtcblx0Ly8gQ2FjaGVkIGVsZW1lbnRzXG5cdGNvbnN0IF9lbGVtZW50cyA9IHtcblx0XHR0b2RvR3JvdXA6IF9nZXRFbGVtZW50KCcjdG9kby1ncm91cCcpLFxuXHRcdHRvZG9DYXJkczogX2dldEVsZW1lbnQoJy50b2RvLWNhcmRzJyksXG5cdFx0cHJvamVjdExpc3Q6IF9nZXRFbGVtZW50KCcjcHJvamVjdC1saXN0JyksXG5cdFx0YWRkUHJvamVjdEJ0bjogX2dldEVsZW1lbnQoJyNhZGQtcHJvamVjdC1idG4nKSxcblx0XHRwcm9qZWN0VGl0bGVJbnB1dDogX2dldEVsZW1lbnQoJyNwcm9qZWN0LXRpdGxlJyksXG5cdFx0YWRkVG9kb0Zvcm06IF9nZXRFbGVtZW50KCcjYWRkLXRvZG8tZm9ybScpLFxuXHRcdHRvZG9UaXRsZUlucHV0OiBfZ2V0RWxlbWVudCgnI3RvZG8tdGl0bGUnKVxuXHR9O1xuXG5cdC8vIEhlbHBlcnNcblx0ZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0aWYgKHRleHQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHRmdW5jdGlvbiBfZ2V0RWxlbWVudChzZWxlY3Rvcikge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9hcHBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0cmV0dXJuIF9lbGVtZW50c1twYXJlbnRdLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9jcmVhdGVUb2RvQ2FyZCh0b2RvKSB7XG5cdFx0bGV0IHRvZG9DYXJkID0gX2NyZWF0ZUVsZW1lbnQoJ2RpdicsICd0b2RvLWNhcmQnKTtcblx0XHR0b2RvQ2FyZC5kYXRhc2V0LmlkID0gdG9kby5pZDtcblxuXHRcdGNvbnN0IGNoZWNrYm94ID0gX2NyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0Y2hlY2tib3guZGF0YXNldC5pZCA9IHRvZG8uaWQ7XG5cdFx0Y2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGU7XG5cblx0XHRpZiAodG9kby5jb21wbGV0ZSkge1xuXHRcdFx0dG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvZG9DYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpdGxlVGV4dCA9IF9jcmVhdGVFbGVtZW50KCdwJywgdW5kZWZpbmVkLCB0b2RvLnRpdGxlKTtcblxuXHRcdHRvZG9DYXJkLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblx0XHR0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG5cdFx0cmV0dXJuIHRvZG9DYXJkXG5cdH1cblxuXHRmdW5jdGlvbiBfY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBfY2xlYXJUZXh0KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnZhbHVlID0gJyc7XG5cdH1cblxuXHQvLyBSZW5kZXIgZWxlbWVudHNcblx0ZnVuY3Rpb24gZGlzcGxheVRvZG9zKHRvZG9zKSB7XG5cdFx0X2NsZWFyRWxlbWVudChfZWxlbWVudHMudG9kb0NhcmRzKTtcblx0XHRfY2xlYXJUZXh0KF9lbGVtZW50cy50b2RvVGl0bGVJbnB1dCk7XG5cblx0XHRmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcblx0XHRcdGNvbnN0IHRvZG9DYXJkID0gX2NyZWF0ZVRvZG9DYXJkKHRvZG8pO1xuXHRcdFx0X2FwcGVuZENoaWxkKCd0b2RvQ2FyZHMnLCB0b2RvQ2FyZCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKHByb2plY3RzKSB7XG5cdFx0X2NsZWFyRWxlbWVudChfZWxlbWVudHMucHJvamVjdExpc3QpO1xuXG5cdFx0Zm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG5cdFx0XHRsZXQgbGkgPSBfY3JlYXRlRWxlbWVudCgnbGknLCAncHJvamVjdC1idG4nKTtcblx0XHRcdGxpLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuXHRcdFx0bGkudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG5cdFx0XHRfYXBwZW5kQ2hpbGQoJ3Byb2plY3RMaXN0JywgbGkpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZVByb2plY3RGb3JtKCkge1xuXHRcdF9lbGVtZW50cy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0Y29uc3QgZGlzcGxheSA9IF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5zdHlsZS5kaXNwbGF5O1xuXG5cdFx0XHRfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQuc3R5bGUuZGlzcGxheSA9IChkaXNwbGF5ID09ICcnKSA/ICdibG9jaycgOiAnJztcblx0XHR9KTtcblx0fVxuXG5cdC8vIEJpbmRlcnMgZm9yIGNvbnRyb2xsZXIgaGFuZGxlcnMgdG8gZXZlbnQgbGlzdGVuZXJzXG5cdGZ1bmN0aW9uIGJpbmRTaG93Q2F0ZWdvcnlUb2RvcyhjYXRlZ29yeSwgaGFuZGxlcikge1xuXHRcdGNvbnN0IGNhdGVnb3J5TGkgPSBfZ2V0RWxlbWVudChgIyR7Y2F0ZWdvcnl9LXRvZG9zYCk7XG5cblx0XHRjYXRlZ29yeUxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0Y29uc3QgdG9kb3MgPSBoYW5kbGVyKGNhdGVnb3J5KTtcblxuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5pbm5lclRleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJyk7XG5cdFx0XHRfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQuZmlsdGVyID0gY2F0ZWdvcnk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kU2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0LCBoYW5kbGVyKSB7XG5cdFx0Y29uc3QgcHJvamVjdExpID0gX2dldEVsZW1lbnQoYGxpW2RhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCJdYCk7XG5cblx0XHRwcm9qZWN0TGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRjb25zdCB0b2RvcyA9IGhhbmRsZXIocHJvamVjdCk7XG5cblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcblx0XHRcdF9lbGVtZW50cy50b2RvR3JvdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuXHRcdFx0X2VsZW1lbnRzLnRvZG9Hcm91cC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cdFx0fSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGJpbmRBZGRUb2RvKGhhbmRsZXIpIHtcblx0XHRfZWxlbWVudHMuYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gX2VsZW1lbnRzLnRvZG9UaXRsZUlucHV0LnZhbHVlO1xuXG5cdFx0XHRpZiAodGl0bGUgIT0gJycpIHtcblx0XHRcdFx0Y29uc3QgZ3JvdXAgPSBfZWxlbWVudHMudG9kb0dyb3VwLmRhdGFzZXQ7XG5cdFx0XHRcdGhhbmRsZXIodGl0bGUsIG51bGwsIG51bGwsIG51bGwsIGdyb3VwKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRUb2dnbGVDb21wbGV0ZSh0b2RvLCBoYW5kbGVyKSB7XG5cdFx0Y29uc3QgY2hlY2tib3ggPSBfZ2V0RWxlbWVudChgaW5wdXRbZGF0YS1pZD1cIiR7dG9kby5pZH1cIl1gKTtcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGhhbmRsZXIodG9kbyk7XG5cblx0XHRcdGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlO1xuXHRcdFx0Y2hlY2tib3gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gYmluZEFkZFByb2plY3QoaGFuZGxlcikge1xuXHRcdF9lbGVtZW50cy5wcm9qZWN0VGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gX2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXG5cdFx0XHRoYW5kbGVyKHRpdGxlKTtcblxuXHRcdFx0X2NsZWFyVGV4dChfZWxlbWVudHMucHJvamVjdFRpdGxlSW5wdXQpO1xuXHRcdFx0X2VsZW1lbnRzLnByb2plY3RUaXRsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHR9KTtcblx0fVxuXHRcblx0cmV0dXJuIHtcblx0XHRkaXNwbGF5VG9kb3MsXG5cdFx0ZGlzcGxheVByb2plY3RzLFxuXHRcdHRvZ2dsZVByb2plY3RGb3JtLFxuXHRcdGJpbmRTaG93Q2F0ZWdvcnlUb2Rvcyxcblx0XHRiaW5kU2hvd1Byb2plY3RUb2Rvcyxcblx0XHRiaW5kQWRkVG9kbyxcblx0XHRiaW5kVG9nZ2xlQ29tcGxldGUsXG5cdFx0YmluZEFkZFByb2plY3Rcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7IiwiZXhwb3J0IGNvbnN0IGlkTWl4aW4gPSB7XG5cdHNldElkKCkge1xuXHRcdHRoaXMuaWQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykubmV4dElkO1xuXHRcdE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5uZXh0SWQgKz0gMTtcblx0fVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9