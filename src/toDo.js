import { idMixin } from './mixins.js';

const todoProto = Object.assign({
	nextId: 0,
	setProjectId: function(id) {
		this.projectId = id;
	},
	toggleComplete: function() {
		this.complete = !this.complete;
	}
}, idMixin);

export default function Todo(title, dueDate, priority) {
	let obj = Object.create(todoProto);
	
	obj.setId();
	obj.title = title;
	obj.dueDate = dueDate;
	obj.priority = priority;
	obj.complete = false;

	return obj;
}