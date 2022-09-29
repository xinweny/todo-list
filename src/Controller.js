import { weeksToDays } from 'date-fns';
import Model from './Model.js';
import View from './View.js';

const Controller = (() => {
	const _filter = {
		all: todo => todo,
		today: todo => todo,
		week: todo => todo
	}

	// Handlers
	const handleShowProjectTodos = project => { 
		Model.getTodosOfProject(project);
	}

	const handleShowCategoryTodos = filter => {
		Model.filterTodos(filter);
	}

	const handleAddTodo = (title, description, dueDate, priority, group) => {
		if ('projectId' in group) {
			const project = Model.getProject(group.projectId);
			Model.createTodo(title, description, dueDate, priority, project);
			Model.getTodosOfProject(project);
		} else {
			Model.createTodo(title, description, dueDate, priority);
			Model.filterTodos(_filter[group.filter]);
		}
	}

	const handleDeleteTodo = (todo, group) => {
		Model.deleteTodo(todo);

		if ('projectId' in group) {
			const project = Model.getProject(todo.projectId);
			Model.getTodosOfProject(project);
		} else {
			Model.filterTodos(_filter[group.filter]);
		}
	}

	const handleToggleComplete = todo => todo.toggleComplete();

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
			View.bindToggleComplete(todo, handleToggleComplete);
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

		Model.createTodo('a', 'b', 'c', 'low', a);
		const b = Model.createTodo('e', 'f', 'g', 'high');

		Model.getTodos();
		Model.getProjects();
	})();

	return {
		onTodosChanged,
		onProjectsChanged
	};
})();

export default Controller;