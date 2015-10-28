// Routes & Temporary Data
// version 2.2.3

var api = exports = module.exports;
var Skills = require('../models/Skill');
var Projects = require('../models/Project');

// GET '/projects'
api.projects = {
    list: function(req, res) {
		Projects.getAll(function(err, projects){
			if (err) throw err;
			res.json(projects);
		});
    },
};



api.skills = {

	// GET skills
	list: function(req, res) {
		Skills.getAll(function(err, skills){
			if (err) throw err;
			res.json(skills);
		});
	},

	// POST skills/new
	create: function(req, res) {
		console.log("req.body", req.body);
		Skills.create(req.body, function(err, response){
			if (err) throw err;
			// console.log("api.skill.create", response);
			res.json(response);
		});
	}

};