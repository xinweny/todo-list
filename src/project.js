import { idMixin } from './mixins.js';

const projectProto = Object.assign({
	nextId: 0,
	getTodoIds: function() {
		return this._todoIds;
	},
	addTodoId: function(id) {
		this._todoIds.push(id);
	},
	deleteTodoId: function(id) {
		const index = this._todoIds.indexOf(id);
		this._todoIds.splice(index, 1);
	}
}, idMixin);

export default function Project(obj) {
	let object = Object.setPrototypeOf(obj, projectProto);

	object.setId();
	object._todoIds = obj._todoIds || [];
	
	return object;
};