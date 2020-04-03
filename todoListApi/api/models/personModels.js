'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var personSchema = new Schema ({
	fname: {
		type: String
	},
	lname:{
		type: String
	},
	created_date:{
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model('Persons',personSchema)