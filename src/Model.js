import Todo from './Todo.js';
import Project from './Project.js';

const Model = (() => {
	// Initial data
	function _initProjects() {
		return [
			Project({ 
				title: 'Chores',
				_todoIds: [0, 1]
			}),
			Project({
				title: 'Grocery list',
				_todoIds: [2, 3]
			})
		];
	}

	function _initTodos() {
		return [
			Todo({
				title: 'Wash dishes',
				dueDate: '2022-09-30',
				priority: 'low',
				projectId: 0
			}),
			Todo({
				title:'Feed cats', 
				dueDate: '2022-09-30', 
				priority: 'medium',
				projectId: 0
			}),
			Todo({
				title: 'Apples', 
				dueDate: null, 
				priority: 'none',
				projectId: 1
			}),
			Todo({
				title: 'Chicken',
				dueDate: null, 
				priority: 'medium',
				projectId: 1
			})
		];
	}
	
	// Initialize Model
	let _projects = _getDataFromLocalStorage('projects', Project, _initProjects);
	let _todos =  _getDataFromLocalStorage('todos', Todo, _initTodos);

	_setNextId(_projects);
	_setNextId(_todos);

	function _getDataFromLocalStorage(label, cls, initData) {
		let data = JSON.parse(localStorage.getItem(label));

		if (!data) {
			data = initData();
			_saveDataToLocalStorage(label, data);
		} else {
			data = data.map(e => cls(e));
		};

		return data;
	}

	function _saveDataToLocalStorage(label, dataToStore) {
		localStorage.setItem(label, JSON.stringify(dataToStore));
	}

	function _setNextId(array) {
		if (array.length > 0) {
			const nextId = Math.max(...array.map(e => e.id)) + 1;
			array[0].setNextId(nextId);
		}
	}
	
	function getTodos(change=true) {
		if (change) this.onTodosChanged(_todos);

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

	function createTodo(obj, project) {
		const todo = Todo(obj);

		_todos.push(todo);
		if (project) {
			_linkTodoAndProject(todo, project);
			_saveDataToLocalStorage('projects', _projects);
		}

		_saveDataToLocalStorage('todos', _todos);

		return todo;
	}

	function createProject(obj) {
		const project = Project(obj);
		_projects.push(project);

		this.onProjectsChanged(_projects);

		_saveDataToLocalStorage('projects', _projects);

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
			_saveDataToLocalStorage('projects', _projects);
		};

		_saveDataToLocalStorage('todos', _todos);
	}

	function deleteProject(project) {
		const todoIds = project.getTodoIds();
		_todos = _todos.filter(todo => !todoIds.includes(todo.id));

		const index = _projects.indexOf(project);
		_projects.splice(index, 1);

		this.onProjectsChanged(_projects);

		_saveDataToLocalStorage('todos', _todos);
		_saveDataToLocalStorage('projects', _projects);
	}

	function _linkTodoAndProject(todo, project) {
		todo.setProjectId(project.id);
		project.addTodoId(todo.id);

		return todo;
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