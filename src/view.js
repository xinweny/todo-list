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

export default View;