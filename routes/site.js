var site = exports = module.exports;

var Project = require('../models/project'),
	Skill = require('../models/skill');


// GET '/'
site.index = function(req, res, next) {

	Project.getAll(function (err, p_results) {
        if (err) return next(err);

        Skill.getAll(function (err, s_results) {
        	if (err) return next(err);

        	res.render('index', {
				projects: p_results,
				skills: s_results
			});
        });
    });
};