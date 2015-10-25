// Routes & Temporary Data
// version 2.2.3

var api = exports = module.exports;
var seedData = require('../db');
var Skills = require('../models/Skill');

// GET '/projects'
api.projects = {
    list: function(req, res) {
        res.render('test/projects', {
            projects: seedData.projects.v2
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