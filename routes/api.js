// Routes & Temporary Data
// version 2.2.3

var api = exports = module.exports;
var seedData = require('../db');
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


// GET skills
api.skills = {
	list: function(req, res) {
		Skills.getAll(function(err, skills){
			if (err) throw err;
			res.json(skills);
		});
	}
};