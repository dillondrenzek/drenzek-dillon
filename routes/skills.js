var skills = exports = module.exports;
var Skill = require('../models/skill');



// GET '/skills/new'
skills.new = function(req, res, next) {

	res.render('skills', {
		mode: 'new'
	});
}

// POST '/skills/new'
skills.create = function(req, res, next) {
	Skill.create(
		{ title: req.body['title']
		, color: req.body['color']
		, overall: req.body['overall']
		, experience: req.body['experience']
		, outlook: req.body['outlook']
		, love: req.body['love']
		, since: req.body['since'] 
		}, function (err, skill) {
	    	if (err) return next(err);
	    	res.redirect('/skills');
	});
}

// POST '/skills/:id' (delete)
skills.destroy = function(req, res, next) {
	Skill.get(req.params.id, function (err, skill) {
        if (err) return next(err);
        skill.del(function (err) {
            if (err) return next(err);
            res.redirect('/skills');
        });
    });
}



// GET '/skills'

skills.list = function(req, res, next) {

	Skill.getAll(function (err, skills) {
        if (err) return next(err);
        res.render('skills', {
            skills: skills,
            mode: 'index'
        });
    });

};
