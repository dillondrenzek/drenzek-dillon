// Seed Data Module Index File
// Version 2.2.3

var exports = module.exports;

var MongoClient = require('mongodb');

exports.skills = require('./skills');
exports.projects = require('./projects');
// exports.connect = function(){
// 	exports.db = MongoClient.connect("mongodb://localhost:27017/dillon", function(err, database) {
// 		if (err) throw err;
// 		// console.log("Connected to mongodb://localhost:27017/dillon",);
// 		exports.db = database;
// 	});
// };
// exports.seed = function(){
// 	console.log("projects",exports.projects.v2);

// 	exports.projects.v2.forEach(function(){
// 		exports.db.collection('projects').insertOne(this, function(err, result) {
// 			assert.equal(err, null);
// 			console.log("Inserted a document into the projects collection.");
// 			// callback(result);
// 		});
// 	});

// };



// data.db = 

// data.db = require('./mongo');
