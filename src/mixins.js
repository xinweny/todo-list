export const idMixin = {
	setNextId(id) {
		Object.getPrototypeOf(this).nextId = id;
	},
	setId() {
		if (typeof this.id != 'number') {
			this.id = Object.getPrototypeOf(this).nextId;
			Object.getPrototypeOf(this).nextId += 1;
		}
	}
};