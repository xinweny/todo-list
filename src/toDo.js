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

export default function Todo(obj) {
	let object = Object.setPrototypeOf(obj, todoProto);
	
	object.setId();
	object.dueDate = obj.dueDate || null;
	object.priority = obj.priority;

	object.complete = obj.complete || false;

	return obj;
}