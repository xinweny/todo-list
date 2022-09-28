import { weeksToDays } from 'date-fns';
import Model from './Model.js';
import View from './View.js';

const Controller = (() => {
	let todos = Model.getTodos();
	let projects = Model.getProjects();
	const filter = {
		all: todo => todo,
		today: todo => todo,
		week: todo => todo
	}

	const a = Model.createProject('Shopping List')
	Model.createProject('Study')

	Model.createTodo('a', 'b', 'c', 'd', a)
	const b = Model.createTodo('e', 'f', 'g', 'h')

	View.displayTodos(todos);
	View.displayProjects(projects);

	// Handlers
	const handleShowProjectTodos = project => Model.getTodosOfProject(project);

	const handleShowCategoryTodos = filter => Model.filterTodos(filter);

	const handleAddTodo = (title, description, dueDate, priority, group) => {
		if ('projectId' in group) {
			const project = Model.getProject(group.projectId);
			Model.createTodo(title, description, dueDate, priority, project);

			return Model.getTodosOfProject(project);
		} else {
			Model.createTodo(title, description, dueDate, priority);

			return Model.filterTodos(filter[group.filter]);
		}
	}

	const handleToggleComplete = (todo) => {
		todo.toggleComplete();
	};

	// Bind handlers to event listener binders of View
	for (const project of projects) {
		View.bindShowProjectTodos(project, handleShowProjectTodos);
	}

	for (const [category, f] of Object.entries(filter)) {
		View.bindShowCategoryTodos(category, handleShowCategoryTodos.bind(null, f))
	}

	View.bindAddTodo(handleAddTodo);

	for (const todo of todos) {
		View.bindToggleComplete(todo, handleToggleComplete);
	}

	return {};
})();

export default Controller;