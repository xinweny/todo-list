import { format, parseISO } from 'date-fns';

const View = (() => {
	// Cached elements
	const _elements = {
		filterTodosBtns: _getElements('#todo-categories div'),
		todoGroup: _getElement('#todo-group'),
		todoCards: _getElement('.todo-cards'),
		projectCards: _getElement('#project-cards'),
		addProjectBtn: _getElement('#add-project-btn'),
		projectTitleInput: _getElement('#project-title'),
		addTodoForm: _getElement('#add-todo-form'),
		todoTitleInput: _getElement('#add-todo-title'),
		todoPriorityInput: _getElement('#add-todo-priority'),
		todoDueDateInput: _getElement('#add-todo-duedate'),
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

	function _getElements(selector) {
		return Array.from(document.querySelectorAll(selector));
	}

	const _appendChild = (parent, child) => _elements[parent].appendChild(child);

	const _appendChildren = (element, children) => {
		for (const child of children) {
			element.appendChild(child);
		}
	}

	function _createTodoCard(todo) {
		let todoCard = _createElement('div', 'todo-card');
		todoCard.dataset.id = todo.id;

		const checkbox = _createElement('input', 'todo-checkbox');
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

		const dueDateDiv = _createElement('div', 'todo-duedate-div');
		const formattedDate = (todo.dueDate) ? format(parseISO(todo.dueDate), "d LLL") : '';
		const dueDateText = _createElement('p', 'todo-duedate', formattedDate);

		const editDueDateForm = _createElement('input', 'edit-todo-duedate');
		editDueDateForm.type = "date";
		editDueDateForm.value = todo.dueDate;
		editDueDateForm.style.display = (todo.dueDate) ? 'none' : 'block';
		_appendChildren(dueDateDiv, [dueDateText, editDueDateForm]);

		const deleteBtn = _createElement('button', 'delete-todo-btn');
		deleteBtn.textContent = 'x';

		const todoPriority = _createElement('select', 'todo-priority');
		for (const priority of ['none', 'low', 'medium', 'high']) {
			const option = _createElement('option');
			option.value = priority;
			option.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
			todoPriority.appendChild(option);
		}

		const colorMap = {
			none: 'gray',
			low: 'green',
			medium: 'yellow',
			high: 'red'
		};

		_setPriorityStyling(todoPriority, todoCard, todo.priority, colorMap[todo.priority]);

		_appendChildren(todoCard, [
			checkbox,
			titleText,
			editTitleForm,
			todoPriority,
			dueDateDiv,
			deleteBtn
		]);

		return todoCard
	}

	function _createProjectCard(project) {
		const projectCard = _createElement('div', 'project-card');
		projectCard.classList.add('sidebar-btn');

		projectCard.dataset.id = project.id;

		const titleDiv = _createElement('div', 'project-title-div');
		const titleText = _createElement('p')
		titleText.textContent = project.title;

		const todoCounter = _createElement('div', 'todo-counter');
		todoCounter.textContent = project._todoIds.length;

		_appendChildren(titleDiv, [titleText, todoCounter]);

		const deleteBtn = _createElement('button', 'delete-project-btn');
		deleteBtn.dataset.id = project.id;
		deleteBtn.textContent = 'x';


		_appendChildren(projectCard, [
			titleDiv,
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

	const _getTodoDataset = () => _elements.todoGroup.dataset;

	const _toggleShowHide = (showElement, hideElement) => {
		hideElement.style.display = 'none';
		showElement.style.display = 'block';
	}

	const _getTodoCardChild = (id, cls) => _getElement(`.todo-card[data-id="${id}"] .${cls}`);

	function _setPriorityStyling(todoPriority, todoCard, text, color) {
		todoPriority.value = text;
		todoPriority.style.color = color;
		todoPriority.style.borderColor = color;
		todoCard.style.borderLeftColor = color;
	}

	// Render dynamic elements
	function displayTodos(todos) {
		_clearElement(_elements.todoCards);

		for (let i = todos.length - 1; i >= 0; i--) {
			const todoCard = _createTodoCard(todos[i]);
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

	function updateTodoFilterCounter(group, length) {

		const selector = (typeof group == 'number') ? `.project-card[data-id="${group}"] .todo-counter` : `#${group}-todos .todo-counter`;

		const counter = _getElement(selector);
		counter.textContent = length;
	}

	// Binders for controller handlers to event listeners
	function bindShowCategoryTodos(category, handler) {
		const categoryDiv = _getElement(`#${category}-todos`);

		categoryDiv.addEventListener('click', event => {
			handler(category);

			_elements.todoGroup.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
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
		_elements.todoGroup.addEventListener('click', event => {
			const projectId = parseInt(_elements.todoGroup.dataset.projectId);

			if (projectId) {
				_toggleShowHide(_elements.editProjectInput, _elements.todoGroup);
				_elements.editProjectInput.value = _elements.todoGroup.textContent;
				_elements.editProjectInput.focus();
			}
		});
	}

	function bindShowEditTodoTitleForm(todo) {
		const todoTitle = _getTodoCardChild(todo.id, 'todo-title');

		todoTitle.addEventListener('click', event => {
			const editTitleForm = _getTodoCardChild(todo.id, 'edit-todo-title');

			_toggleShowHide(editTitleForm, todoTitle);
			editTitleForm.focus();
		});
	}

	function bindShowEditTodoDueDateForm(todo) {
		const todoDueDate = _getTodoCardChild(todo.id, 'todo-duedate');

		todoDueDate.addEventListener('click', event => {
			const editDueDateForm = _getTodoCardChild(todo.id, 'edit-todo-duedate');

			editDueDateForm.showPicker();
		});
	}
	
	function bindAddTodo(handler) {
		_elements.addTodoForm.addEventListener('submit', event => {
			event.preventDefault();

			let obj = {};
			obj.title = _elements.todoTitleInput.value;
			obj.priority = _elements.todoPriorityInput.value;
			obj.dueDate = _elements.todoDueDateInput.value;

			handler(obj, _getTodoDataset());

			_clearInput(_elements.todoTitleInput);
			_clearInput(_elements.todoDueDateInput);
			_elements.todoPriorityInput.selectedIndex = 0;
		});
	}

	function bindDeleteTodo(todo, handler) {
		const deleteTodoBtn = _getTodoCardChild(todo.id, 'delete-todo-btn');

		deleteTodoBtn.addEventListener('click', event => {
			event.stopPropagation();

			handler(todo, _getTodoDataset());
		});
	}

	function bindToggleComplete(todo, handler) {
		const checkbox = _getTodoCardChild(todo.id, 'todo-checkbox');
		checkbox.addEventListener('click', event => {
			handler(todo.id, _getTodoDataset(), 'complete', !todo.complete);

			checkbox.checked = todo.complete;
			checkbox.parentElement.classList.toggle('completed');
		})
	}

	function bindEditTodoTitle(id, handler) {
		const editTodoForm = _getTodoCardChild(id, 'edit-todo-title');

		editTodoForm.addEventListener('blur', event => {
			const todoTitle = _getTodoCardChild(id, 'todo-title');
			const newTitle = editTodoForm.value;

			handler(id, _getTodoDataset(), 'title', newTitle);

			_toggleShowHide(todoTitle, editTodoForm);
			todoTitle.textContent = newTitle;
		});

		_addKeyDownEventListener(editTodoForm, 13);
	}

	function bindEditTodoDueDate(id, handler) {
		const editDueDateForm = _getTodoCardChild(id, 'edit-todo-duedate');

		editDueDateForm.addEventListener('change', event => {
			const todoDueDate = _getTodoCardChild(id, 'todo-duedate');
			const newDueDate = editDueDateForm.value;

			handler(id, _getTodoDataset(), 'dueDate', newDueDate);
			todoDueDate.textContent = newDueDate;
		});
	}

	function bindEditTodoPriority(id, handler) {
		const editPriorityForm = _getTodoCardChild(id, 'todo-priority');

		editPriorityForm.addEventListener('change', event => {
			const newPriority = editPriorityForm.value;

			handler(id, _getTodoDataset(), 'priority', newPriority);
		})
	}

	function bindToggleProjectForm() {
		_elements.addProjectBtn.addEventListener('click', event => {
			const formDisplay = _elements.projectTitleInput.style.display;
			const title = _elements.projectTitleInput.value;

			if (formDisplay == 'none' || formDisplay == '') {
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
			const obj = {};
			obj.title = _elements.projectTitleInput.value;

			if (obj.title != '') {
				const id = handler(obj);
				_getElement(`.project-card[data-id="${id}"]`).click();
			}

			_clearInput(_elements.projectTitleInput);
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

			_elements.filterTodosBtns[0].click();
		});
	}
	
	return {
		displayTodos,
		displayProjects,
		updateTodoFilterCounter,
		bindToggleProjectForm,
		bindShowCategoryTodos,
		bindShowProjectTodos,
		bindShowEditProjectForm,
		bindShowEditTodoTitleForm,
		bindShowEditTodoDueDateForm,
		bindAddTodo,
		bindDeleteTodo,
		bindToggleComplete,
		bindEditTodoTitle,
		bindEditTodoDueDate,
		bindEditTodoPriority,
		bindAddProject,
		bindEditProject,
		bindDeleteProject
	};
})();

export default View;