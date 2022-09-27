import add from 'date-fns/add';
import Model from './Model.js';
import View from './View.js';

const Controller = (() => {
	const a = Model.createProject('a')
	Model.createProject('b')

	Model.createToDo('a', 'b', 'c', 'd', a)
	const b = Model.createToDo('e', 'f', 'g', 'h')

	return {};
})();

export default Controller;