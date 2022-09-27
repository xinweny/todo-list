import Controller from './Controller.js';

const View = (() => {
	// Cached elements
	const _elements = {
		content: _getElement('#content'),
		projectList: _getElement('#project-list')
	};

	// Helpers
	function _createElement(tag, className) {
		const element = document.createElement(tag);
		if (className) element.classList.add(className);
		return element;
	}

	function _getElement(selector) {
		return document.querySelector(selector);
	}

	function _getElements(selector) {
		return document.querySelectorAll(selector);
	}

	function _appendChild(parent, child) {
		_elements[parent].appendChild(child);
	}

	function displayTodos(todos) {
		for (const todo of todos) {
			let div = _createElement('div', 'todo-card');
			div.dataset.id = todo.id;
			div.textContent = todo.title;

			_appendChild('content', div);
		}
	}

	function displayProjects(projects) {
		for (const project of projects) {
			let li = _createElement('li', 'project-btn');
			li.dataset.id = project.id;
			li.textContent = project.title;

			_appendChild('projectList', li);
		}
	}

	function clearContent() {
		_elements['content'].innerHTML = null;
	}

	// Binders for controller handlers to event listeners

	return {
		displayTodos,
		displayProjects,
		clearContent
	};
})();

export default View;