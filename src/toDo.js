import { idMixin } from './mixins.js';

const todoProto = Object.assign({
	nextId: 0,
	setProjectId: function(id) {
		this.projectId = id;
	}
}, idMixin);

export default function Todo(title, description, dueDate, priority) {
	let obj = Object.create(todoProto);
	
	obj.setId();
	obj.title = title;
	obj.description = description;
	obj.dueDate = dueDate;
	obj.priority = priority;
	obj.complete = false;

	return obj;
}