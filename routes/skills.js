var skills = exports = module.exports;
var Skill = require('../models/skill');

// GET '/skills'
skills.list = function(req, res, next) {
    Skill.getAll(function (err, skills) {
        if (err) return next(err);
        res.render('skills/list', {
            skills: skills
        });
    });
};

// GET '/skills/new'
skills.new = function(req, res, next) {
    res.render('skills/new');
};

// GET '/skills/:id'
skills.show = function(req, res, next) {
    Skill.get(req.params.id, function (err, skill) {
        if (err) return next(err);

        res.render('skills/show', {
            skill: skill
        });
    }); 
};

// GET '/skills/edit/:id'
skills.edit = function(req, res, next) {
    Skill.get(req.params.id, function (err, skill) {
        if (err) return next(err);

        res.render('skills/edit', {
            skill: skill
        });
    });
}

// POST '/skills/new'
skills.create = function(req, res, next) {
    delete req.body['__proto__'];

    Skill.create(req.body, function (err, skill) {
            if (err) return next(err);
            res.redirect('/skills');
    });
};

// GET '/skills/edit'
skills.list_edit = function(req, res, next) {
    Skill.getAll(function (err, skills) {
        if (err) return next(err);

        res.render('skills/list_edit', {
            skills: skills
        });
    });
};

// POST '/skills/edit/:id'
skills.update = function(req, res, next) {

    delete req.body['__proto__'];

    Skill.get( req.params.id, function (err, skill) {
        skill.update(req.body, function (err, result) {
            if (err) return next(err);

            res.redirect('/skills/edit');
        });
    });
};

// POST '/skills/destroy/:id'
skills.destroy = function(req, res, next) {
    Skill.get(req.params.id, function (err, skill) {
        if (err) return next(err);
        skill.del(function (err) {
            if (err) return next(err);
            res.redirect('/skills/edit');
        });
    });
};



