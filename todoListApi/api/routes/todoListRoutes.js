'use strict';

module.exports = function(app){

	var todoList = require('../controllers/todoListController');
	var person = require('../controllers/personController');

	// todoList Routes
	app.route('/tasks')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);

	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);

	//Person
	app.route('/persons')
		.get(person.person_info)
		.post(person.create_a_person);

};