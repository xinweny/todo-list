const View = (() => {
	// Cached elements
	const _elements = {
		todoGroup: _getElement('#todo-group'),
		todoCards: _getElement('.todo-cards'),
		projectList: _getElement('#project-list'),
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

	function _getElements(selector) {
		return document.querySelectorAll(selector);
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

	function displayTodos(todos) {
		for (const todo of todos) {
			const todoCard = _createTodoCard(todo);
			_appendChild('todoCards', todoCard);
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

	function _clearElement(element) {
		element.innerHTML = null;
	}

	function _clearText(element) {
		element.value = '';
	}

	// Binders for controller handlers to event listeners
	function bindShowCategoryTodos(category, handler) {
		const categoryLi = _getElement(`#${category}-todos`);

		categoryLi.addEventListener('click', event => {
			const todos = handler(category);

			_elements.todoGroup.innerText = event.target.textContent;
			_elements.todoGroup.removeAttribute('data-project-id');
			_elements.todoGroup.dataset.filter = category;

			_clearElement(_elements.todoCards);
			displayTodos(todos);
		});
	}

	function bindShowProjectTodos(project, handler) {
		const projectLi = _getElement(`li[data-id="${project.id}"]`);

		projectLi.addEventListener('click', event => {
			const todos = handler(project);

			_elements.todoGroup.innerText = project.title;
			_elements.todoGroup.removeAttribute('data-filter');
			_elements.todoGroup.dataset.projectId = project.id;

			_clearElement(_elements.todoCards);
			displayTodos(todos);
		});
	}
	
	function bindAddTodo(handler) {
		_elements.addTodoForm.addEventListener('submit', event => {
			event.preventDefault();
			const title = _elements.todoTitleInput.value;

			if (title != '') {
				const group = _elements.todoGroup.dataset;
				const todos = handler(title, null, null, null, group);

				_clearText(_elements.todoTitleInput);
				_clearElement(_elements.todoCards);
				displayTodos(todos);
			}
		});
	}

	function bindToggleComplete(todo, handler) {
		const checkbox = _getElement(`input[data-id="${todo.id}"]`);
		checkbox.addEventListener('click', event => {
			handler(todo);
			console.log("hi")

			checkbox.checked = todo.complete;
			checkbox.parentElement.classList.toggle('completed');
		})
	}
	
	return {
		displayTodos,
		displayProjects,
		bindShowCategoryTodos,
		bindShowProjectTodos,
		bindAddTodo,
		bindToggleComplete
	};
})();

export default View;