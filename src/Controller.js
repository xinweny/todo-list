import Model from './Model.js';
import View from './View.js';
import { isThisWeek } from 'date-fns';

const Controller = (() => {
	const _filter = {
		all: todo => todo,
		today: todo => _filterToday(todo.dueDate),
		week: todo => isThisWeek(todo.dueDate)
	}

	// Date filters
	function _filterToday(date) {
		const today = new Date();

		if (date) {
			return (
				date.getDate() == today.getDate() &&
				date.getMonth() == today.getMonth() &&
				date.getYear() == today.getYear()
				);
		} else {
			return false;
		}
	}

	const _determineTodosRender = group => {
		if ('projectId' in group) {
			const project = Model.getProject(group.projectId);
			Model.getTodosOfProject(project);
		} else {
			Model.filterTodos(_filter[group.filter]);
		}
	}

	// Handlers
	const handleShowProjectTodos = project => { 
		Model.getTodosOfProject(project);
	}

	const handleShowCategoryTodos = filter => {
		Model.filterTodos(filter);
	}

	const handleAddTodo = (obj, group) => {
		const project = ('projectId' in group) ? Model.getProject(group.projectId) : null;

		if (obj.dueDate == '') obj.dueDate = null;

		Model.createTodo(obj, project);
		_determineTodosRender(group);
	}

	const handleDeleteTodo = (todo, group) => {
		Model.deleteTodo(todo);
		_determineTodosRender(group);
	}

	const handleEditTodo = (id, group, property, value) => {
		let newValue = value;

		Model.editTodo(id, property, newValue);
		_determineTodosRender(group);
	}

	const handleAddProject = obj => {
		const model = Model.createProject(obj);

		return model.id;
	}

	const handleEditProject = (id, title) => Model.editProject(id, title);

	const handleDeleteProject = project => Model.deleteProject(project);

	// Callback for model when change is detected to bind handlers to event listener binders of View
	function onTodosChanged(todos) {
		View.displayTodos(todos);

		for (const todo of todos) {
			View.bindShowEditTodoTitleForm(todo);
			View.bindShowEditTodoDueDateForm(todo);
			View.bindToggleComplete(todo, handleEditTodo);
			View.bindEditTodoTitle(todo.id, handleEditTodo);
			View.bindEditTodoDueDate(todo.id, handleEditTodo);
			View.bindEditTodoPriority(todo.id, handleEditTodo);
			View.bindDeleteTodo(todo, handleDeleteTodo);
		}
	}

	function onProjectsChanged(projects) {
		View.displayProjects(projects);

		for (const project of projects) {
			View.bindShowProjectTodos(project, handleShowProjectTodos);
			View.bindDeleteProject(project, handleDeleteProject);
		}
	}

	// Initialize view
	const _init = (function() {
		Model.bindModelChanged('onTodosChanged', onTodosChanged);
		Model.bindModelChanged('onProjectsChanged', onProjectsChanged);

		View.bindAddTodo(handleAddTodo);
		View.bindAddProject(handleAddProject);

		View.bindToggleProjectForm();
		View.bindShowEditProjectForm();

		View.bindEditProject(handleEditProject);

		for (const [category, f] of Object.entries(_filter)) {
			View.bindShowCategoryTodos(category, handleShowCategoryTodos.bind(null, f));
		}

		Model.getTodos();
		Model.getProjects();
	})();

	return {
		onTodosChanged,
		onProjectsChanged
	};
})();

export default Controller;