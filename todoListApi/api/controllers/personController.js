'use strict';

var mongoose = require('mongoose'),
Person = mongoose.model('Persons');


// list person
exports.person_info = function(req,res){
	Person.find( {} , function(err,person ) {
		if(err)
			res.send(err);
		res.json(person)
	});
};



exports.create_a_person = function(req, res) {
  var new_person = new Person(req.body);
  console.log(req.body)
  new_person.save(function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};
