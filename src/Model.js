import Todo from './Todo.js';
import Project from './Project.js';

const Model = (() => {
	let _todos = [];
	let _projects = [];

	function getTodos() {
		this.onTodosChanged(_todos);

		return _todos;
	};

	function getProjects() {
		this.onProjectsChanged(_projects);

		return _projects;
	}

	const getTodo = id => _todos.find(todo => todo.id == id);

	const getProject = id => _projects.find(project => project.id == id);

	const getProjectFromTodo = todo => {
		return _projects.find(project => project.id == todo.projectId);
	}

	function getTodosOfProject(project) {
		const todos = _todos.filter(todo => project.getTodoIds().includes(todo.id));

		this.onTodosChanged(todos);

		return todos;
	}

	const getUncompletedTodos = todos => todos.filter(todo => !todo.complete);

	function filterTodos(filter) {
		const todos = _todos.filter(filter);

		this.onTodosChanged(todos);

		return todos;
	}

	function createTodo(title, dueDate, priority, project) {
		const todo = Todo(title, dueDate, priority);

		_todos.push(todo);
		if (project) _linkTodoAndProject(todo, project);

		return todo;
	}

	function createProject(title) {
		const project = Project(title);
		_projects.push(project);

		this.onProjectsChanged(_projects);
		return project;
	}

	function editTodo(id, property, value) {
		const todo = getTodo(id);
		
		todo[property] = value;
	}

	function editProject(id, title) {
		const project = getProject(id);
		
		project.title = title;

		this.onProjectsChanged(_projects);
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

		this.onProjectsChanged(_projects);
	}

	function _linkTodoAndProject(todo, project) {
		todo.setProjectId(project.id);
		project.addTodoId(todo.id)
	}

	// Bind model to controller via callback
	function bindModelChanged(key, callback) {
		this[key] = callback;
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
		deleteProject,
		bindModelChanged
	};
})();

export default Model;