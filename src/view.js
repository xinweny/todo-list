import { format } from 'date-fns';

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

		const editTitleForm = _createElement('input', 'edit-todo-title');
		editTitleForm.value = todo.title;
		editTitleForm.style.display = 'none';

		const formattedDate = (todo.dueDate) ? format(todo.dueDate, 'd LLL yy @ HH:mm') : '';
		const dueDateText = _createElement('p', 'todo-duedate', formattedDate);

		const deleteBtn = _createElement('button', 'delete-todo-btn');
		deleteBtn.dataset.id = todo.id;
		deleteBtn.textContent = 'x';

		_appendChildren(todoCard, [
			checkbox,
			titleText,
			editTitleForm,
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

	function _clearInput(element) {
		element.value = '';
	}

	function _addClassToFocused(className, element, removeElements) {
		element.classList.add(className);

		for (const e of removeElements) {
			if (e != element && e.classList.contains(className)) e.classList.remove(className);
		}
	}

	function _addKeyDownEventListener(element, keyCode) {
		element.addEventListener('keydown', function(event) {
			if (event.keyCode == keyCode) element.blur();
		});
	}

	const _getTodoGroup = () => _elements.todoGroup.dataset;

	const _toggleShowHide = (showElement, hideElement) => {
		hideElement.style.display = 'none';
		showElement.style.display = 'block';
	}

	// Render elements
	function displayTodos(todos) {
		_clearElement(_elements.todoCards);

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
				_toggleShowHide(_elements.editProjectInput, _elements.todoGroup);
				_elements.editProjectInput.value = _elements.todoGroup.textContent;
				_elements.editProjectInput.focus();
			}
		});
	}

	function bindShowEditTodoForm(todo) {
		const todoTitle = _getElement(`.todo-card[data-id="${todo.id}"] .todo-title`);

		todoTitle.addEventListener('dblclick', event => {
			const editTitleForm = _getElement(`.todo-card[data-id="${todo.id}"] .edit-todo-title`);

			_toggleShowHide(editTitleForm, todoTitle);
			editTitleForm.focus();
		});
	}
	
	function bindAddTodo(handler) {
		_elements.addTodoForm.addEventListener('submit', event => {
			event.preventDefault();

			const title = _elements.todoTitleInput.value;
			const priority = _elements.todoPriorityInput.value;
			const dueDate = _elements.todoDueDateInput.value;

			handler(title, null, dueDate, priority, _getTodoGroup());

			_clearInput(_elements.todoTitleInput);
			_clearInput(_elements.todoDueDateInput);
			_elements.todoPriorityInput.selectedIndex = 0;
		});
	}

	function bindDeleteTodo(todo, handler) {
		const deleteTodoBtn = _getElement(`.delete-todo-btn[data-id="${todo.id}"]`);

		deleteTodoBtn.addEventListener('click', event => {
			event.stopPropagation();

			handler(todo, _getTodoGroup());
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

	function bindEditTodoTitle(todo, handler) {
		const id = todo.id;
		const editTodoForm = _getElement(`.todo-card[data-id="${id}"] .edit-todo-title`);

		editTodoForm.addEventListener('blur', event => {
			const todoTitle = _getElement(`.todo-card[data-id="${id}"] .todo-title`);
			const newTitle = editTodoForm.value;

			handler(id, _getTodoGroup(), 'title', newTitle);

			_toggleShowHide(todoTitle, editTodoForm);
			todoTitle.textContent = newTitle;
		});

		_addKeyDownEventListener(editTodoForm, 13);
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
				
				_elements.projectTitleInput.style.display = 'none';
			}
		});
	}

	function bindAddProject(handler) {
		_elements.projectTitleInput.addEventListener('blur', event => {
			const title = _elements.projectTitleInput.value;

			if (title != '') {
				const id = handler(title);
			_getElement(`.project-card[data-id="${id}"]`).click();
			}

			_clearInput(_elements.projectTitleInput);
			_elements.projectTitleInput.style.display = 'none';
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

			_toggleShowHide(_elements.todoGroup, _elements.editProjectInput);
			_elements.todoGroup.textContent = newTitle;
		});

		_addKeyDownEventListener(_elements.editProjectInput, 13);
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
		bindShowEditTodoForm,
		bindAddTodo,
		bindDeleteTodo,
		bindToggleComplete,
		bindEditTodoTitle,
		bindAddProject,
		bindEditProject,
		bindDeleteProject
	};
})();

export default View;