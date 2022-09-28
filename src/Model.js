import Todo from './Todo.js';
import Project from './Project.js';

const Model = (() => {
	let _todos = [];
	let _projects = [];

	const getTodos = () => _todos;

	const getProjects = () => _projects;

	const getTodo = id => _todos.find(todo => todo.id == id);

	const getProject = id => _projects.find(project => project.id == id);

	const getProjectFromTodo = todo => {
		return _projects.find(project => project.id == todo.projectId);
	}

	const getTodosOfProject = project => {
		return _todos.filter(todo => project.getTodoIds().includes(todo.id));
	}

	const getUncompletedTodos = todos => todos.filter(todo => !todo.complete);

	const filterTodos = filter => _todos.filter(filter);

	function createTodo(title, description, dueDate, priority, project) {
		const todo = Todo(title, description, dueDate, priority);

		_todos.push(todo);
		if (project) _linkTodoAndProject(todo, project);

		return todo;
	}

	function createProject(title) {
		const project = Project(title);
		_projects.push(project);

		return project;
	}

	function editTodo(id, title, description, dueDate, priority) {
		const todo = getTodo(id);
		if (title) todo.title = title;
		if (description) todo.title = description;
		if (dueDate) todo.title = dueDate;
		if (priority) todo.title = priority;
	}

	function editProject(id, title) {
		const project = getProject(id);
		if (title) project.title = title;
	}

	function deleteTodo(todo) {
		const index = _todos.indexOf(todo);
		_todos.splice(index, 1);

		if (todo.projectId) {
			const project = getProject(todo.projectId);
			project.deleteTodoId();
		};
	}

	function deleteProject(project) {
		const todoIds = project.getTodoIds();
		_todos = _todos.filter(todo => !todoIds.includes(todo.id));

		const index = _projects.indexOf(project);
		_projects.splice(index, 1);
	}

	function _linkTodoAndProject(todo, project) {
		todo.setProjectId(project.id);
		project.addTodoId(todo.id)
	}

	return {
		getTodos,
		getProjects,
		getTodo,
		getProject,
		getProjectFromTodo,
		getTodosOfProject,
		getUncompletedTodos,
		filterTodos,
		createTodo,
		createProject,
		editTodo,
		editProject,
		deleteTodo,
		deleteProject
	};
})();

export default Model;