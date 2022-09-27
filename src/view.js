import Controller from './Controller.js';

const View = (() => {
	// Helpers
	function createElement(tag, className) {
		const element = document.createElement(tag);
		if (className) element.classList.add(className);
		return element;
	}

	function getElement(selector) {
		return document.querySelector(selector);
	}

	function getElements(selector) {
		return document.querySelectorAll(selector);
	}

	function displayToDos(todos) {
		for (const todo of todos) {
			
		}
	}

	// Cached elements
	const elements = {
		content: getElement('#content'),
		all: getElement('#all')
	};

	// Binders for controller handlers to event listeners

	// Initializer
	const _init = (() => {
		
	})();

	return {
		elements,
		createElement,
		getElement,
		getElements
	};
})();

export default View;