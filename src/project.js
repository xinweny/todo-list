import ToDo from "./ToDo.js";

const projectProto = {
	getTodos: () => this.todos,
	addTodo: todo => this.todos.push(todo),
	deleteTodo: i => this.todos.splice(i, 5)
};

export default function Project() {
	let obj = Object.create(projectProto);

	obj.todos = [];
	
	return obj;
};