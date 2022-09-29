import Todo from './Todo.js';
import Project from './Project.js';

const Model = (() => {
	let _todos =  _getDataFromLocalStorage('todos', []);
	_todos = _todos.map(e => _setPrototype(e, Todo())).map(_formatTodo);

	let _projects = _getDataFromLocalStorage('projects', []);
	_projects = _projects.map(e => _setPrototype(e, Project()));

	_setNextId(Todo(), _getDataFromLocalStorage('nextTodoId', 0));
	_setNextId(Project(), _getDataFromLocalStorage('nextProjectId', 0));

	function _getDataFromLocalStorage(label, dataToStore) {
		let data = JSON.parse(localStorage.getItem(label));

		if (!data) {
			_saveDataToLocalStorage(label, dataToStore);
			data = dataToStore;
		};
		return data;
	}

	function _saveDataToLocalStorage(label, dataToStore) {
		localStorage.setItem(label, JSON.stringify(dataToStore));
	}

	function _setPrototype(obj, instance) {
		Object.setPrototypeOf(obj, Object.getPrototypeOf(instance));
		return obj;
	}

	function _formatTodo(todo) {
		todo.dueDate = (todo.dueDate) ? new Date(todo.dueDate) : null;
		return todo;
	}

	function _setNextId(obj, id) {
		obj.setNextId(parseInt(id));
	}
	
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

		_saveDataToLocalStorage('todos', _todos);
		_saveDataToLocalStorage('nextTodoId', todo.nextId);

		return todo;
	}

	function createProject(title) {
		const project = Project(title);
		_projects.push(project);

		this.onProjectsChanged(_projects);

		_saveDataToLocalStorage('projects', _projects);
		_saveDataToLocalStorage('nextProjectId', project.nextId);

		return project;
	}

	function editTodo(id, property, value) {
		const todo = getTodo(id);
		
		todo[property] = value;

		_saveDataToLocalStorage('todos', _todos);
	}

	function editProject(id, title) {
		const project = getProject(id);
		
		project.title = title;

		this.onProjectsChanged(_projects);
		_saveDataToLocalStorage('projects', _projects);
	}

	function deleteTodo(todo) {
		const index = _todos.indexOf(todo);
		_todos.splice(index, 1);

		if (todo.projectId) {
			const project = getProject(todo.projectId);
			project.deleteTodoId();
		};

		_saveDataToLocalStorage('todos', _todos);
	}

	function deleteProject(project) {
		const todoIds = project.getTodoIds();
		_todos = _todos.filter(todo => !todoIds.includes(todo.id));

		const index = _projects.indexOf(project);
		_projects.splice(index, 1);

		this.onProjectsChanged(_projects);
		_saveDataToLocalStorage('projects', _projects);
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