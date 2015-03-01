//- Skills Router
//- version 0.5.0
var skills = exports = module.exports;
var Skill = require('../models/skill'),
    Project = require('../models/project');

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

            skill.getChildSkills(function (err, children) {
                if (err) return next(err);

                skill.getExhibitingProjects(function (err, results) {
                    if (err) return next(err);

                    var projects = [];
                    // v2.0
                    // var experienceTotals = 
                    //     { "Professional": 0
                    //     , "Academic": 0
                    //     , "Personal": 0 };
                    var experienceTotals = 
                        { "Professional": skill.professional
                        , "Academic": skill.academic
                        , "Personal": skill.personal };

                    results.forEach(function (el, i, arr) {
                        // v2.0
                        // var rel_data = el.relationship._data.data;
                        // var prof_xp = rel_data.prof_exp,
                        //     acad_xp = rel_data.acad_exp,
                        //     pers_xp = rel_data.pers_exp;

                        // experienceTotals.Professional += prof_xp;
                        // experienceTotals.Academic += acad_xp;
                        // experienceTotals.Personal += pers_xp;

                        // var project_package = 
                        //     { "project": new Project(el['project'])
                        //     , "experience":
                        //         { "Professional": prof_xp
                        //         , "Academic": acad_xp
                        //         , "Personal": pers_xp }};
                        var project_package = 
                            { "project": new Project(el['project'])};

                        projects.push(project_package);
                    });

                    res.render('skills/show', {
                        obj: skill,
                        projects: projects,
                        experienceTotals: experienceTotals,
                        parentSkill: parent,
                        subskills: children,
                        keys: Object.keys(Skill.prototype)
                    });
                });
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

