const todoProto = {
	nextId: 0,
	setId() {
		this.id = Object.getPrototypeOf(this).nextId;
		Object.getPrototypeOf(this).nextId += 1;
	}
};

export default function ToDo(title, description, dueDate, priority) {
	let obj = Object.create(todoProto);
	
	obj.setId();
	obj.title = title;
	obj.description = description;
	obj.dueDate = dueDate;
	obj.priority = priority;
	obj.complete = false;

	return obj;
}