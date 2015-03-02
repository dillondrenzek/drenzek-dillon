var site = exports = module.exports;

var Project = require('../models/project'),
	Skill = require('../models/skill');


// GET '/'
site.index = function(req, res, next) {

	Project.getAll(function (err, p_results) {
        if (err) return next(err);

        Skill.getTrending( 5, function (err, s_results) {
        	if (err) return next(err);

            // console.log("projects", p_results);

        	res.render('index', {
				projects: p_results,
				skills: s_results
			});
        });
    });
};