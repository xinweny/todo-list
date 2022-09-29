import Model from './Model.js';
import View from './View.js';
import { isThisWeek } from 'date-fns';

const Controller = (() => {
	const _filter = {
		all: todo => todo,
		today: todo => _filterToday(todo.dueDate),
		week: todo => _filterThisWeek(todo.dueDate)
	}

	// Date filters
	function _filterToday(date) {
		const today = new Date();

		return (
			date.getDate() == today.getDate() &&
			date.getMonth() == today.getMonth() &&
			date.getYear() == today.getYear()
			);
	}

	const _filterThisWeek = date => isThisWeek(date);

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

	const handleAddTodo = (title, description, dueDate, priority, group) => {
		const date = (dueDate) ? new Date(dueDate) : null;
		const project = ('projectId' in group) ? Model.getProject(group.projectId) : null;

		Model.createTodo(title, description, date, priority, project);
		_determineTodosRender(group);
	}

	const handleDeleteTodo = (todo, group) => {
		Model.deleteTodo(todo);
		_determineTodosRender(group);
	}

	const handleToggleComplete = todo => todo.toggleComplete();

	const handleEditTodo = (id, group, property, value) => {
		const newValue = (property == 'dueDate') ? new Date(value) : value;

		Model.editTodo(id, property, newValue);
		_determineTodosRender(group);
	}

	const handleAddProject = title => {
		const model = Model.createProject(title);

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
			View.bindToggleComplete(todo, handleToggleComplete);
			View.bindEditTodoTitle(todo.id, handleEditTodo);
			View.bindEditTodoDueDate(todo.id, handleEditTodo);
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

		const a = Model.createProject('Shopping List');
		Model.createProject('Study');

		Model.createTodo('a', 'b', new Date(), 'low', a);
		const b = Model.createTodo('e', 'f', new Date(), 'high');

		Model.getTodos();
		Model.getProjects();
	})();

	return {
		onTodosChanged,
		onProjectsChanged
	};
})();

export default Controller;