import ToDo from './ToDo.js';
import Project from './Project.js';

const Model = (() => {
	let _toDos = [];
	let _projects = [];

	const getToDos = () => _toDos;
	const getProjects = () => _projects;
	const getToDo = (id) => _toDos.find(todo => todo.id == id);
	const getProject = (id) => _projects.find(project => project.id == id);

	const getTodoProject = (todo) => {
		_projects.find(project => project.id == todo.projectId);
	}

	function createToDo(title, description, dueDate, priority, project) {
		const toDo = ToDo(title, description, dueDate, priority);

		_toDos.push(toDo);
		if (project) _linkToDoAndProject(toDo, project);

		return toDo;
	}

	function createProject(title) {
		const project = Project(title);
		_projects.push(project);

		return project;
	}

	function deleteToDo(toDo) {
		const index = _toDos.indexOf(toDo);
		_toDos.splice(index, 1);

		if (toDo.projectId) {
			const project = getProject(toDo.projectId);
			project.deleteTodoId();
		};
	}

	function deleteProject(project) {
		const todoIds = project.getTodoIds();
		_toDos = _toDos.filter(todo => !todoIds.includes(todo.id));

		const index = _projects.indexOf(project);
		_projects.splice(index, 1);
	}

	function _linkToDoAndProject(toDo, project) {
		toDo.setProjectId(project.id);
		project.addTodoId(toDo.id)
	}

	return {
		getToDos,
		getProjects,
		getToDo,
		getProject,
		getTodoProject,
		createToDo,
		createProject,
		deleteToDo,
		deleteProject
	};
})();

export default Model;