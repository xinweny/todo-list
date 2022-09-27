import Model from './Model.js';
import View from './View.js';

const Controller = (() => {
	let toDos = Model.getTodos();
	let projects = Model.getProjects();

	const a = Model.createProject('Shopping List')
	Model.createProject('Study')

	Model.createTodo('a', 'b', 'c', 'd', a)
	const b = Model.createTodo('e', 'f', 'g', 'h')

	View.displayTodos(toDos);
	View.displayProjects(projects);

	return {};
})();

export default Controller;