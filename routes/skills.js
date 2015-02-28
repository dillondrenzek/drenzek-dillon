//- Skills Router
//- version 0.5.0
var skills = exports = module.exports;
var Skill = require('../models/skill');

// GET '/skills'
skills.list = function(req, res, next) {
    Skill.getAll(function (err, skills) {
        if (err) return next(err);
        res.render('skills/list', {
            objects: skills
        });
    });
};

// GET '/skills/new'
skills.new = function(req, res, next) {
    res.render('skills/new', {
        model: Skill.prototype,
        keys: Object.keys(Skill.prototype)
    });
};

// GET '/skills/:id'
skills.show = function(req, res, next) {
    Skill.get(req.params.id, function (err, skill) {
        if (err) return next(err);

        skill.getParentSkill(function (err, parent) {
            if (err) return next(err);

            res.render('skills/show', {
                obj: skill,
                projects: [{title: "Project A#"}, {title: "Project B#"}, {title: "Project C#"}],
                experience: [
                    {type: "Professional#", value: "23#"},
                    {type: "Academic#", value: "34#"},
                    {type: "Personal#", value: "0#"}
                    ],
                parentSkill: parent,
                keys: Object.keys(Skill.prototype)
            });
        });
    }); 
};

// GET '/skills/edit/:id'
skills.edit = function(req, res, next) {
    Skill.get(req.params.id, function (err, skill) {
        if (err) return next(err);

        skill.getParentSkill(function (err, parent) {
            if (err) return next(err);
            res.render('skills/edit', {
                parentSkill: parent,
                model: Skill.prototype,
                keys: Object.keys(Skill.prototype),
                obj: skill
            });
        });
    });
};

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
            objects: skills,
            keys: Object.keys(Skill.prototype),
            actions: [
                {label: "Show", action: "/skills/", method: "GET", needsID: true},
                {label: "Edit", action: "/skills/edit/", method: "GET", needsID: true},
                {label: "Destroy", action: "/skills/destroy/", method: "POST", needsID: true}
            ]
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

skills.addParentSkill = function(req, res, next) {


    Skill.get(req.params.id, function (err, skill) {
        if (err) return next(err);

        Skill.getByTitle(req.body.parentSkill, function (err, parent) {
            if (err) return next(err);

            skill.setParentSkill(parent, function (err) {
                if (err) return next(err);
                res.redirect('/skills/edit');
            });
        });
    });
};

