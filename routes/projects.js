var projects = exports = module.exports;
// var Project = require('../models/project');

// GET '/projects'
projects.list = function(req, res, next) {
    res.render('projects/list');
    // Skill.getAll(function (err, projects) {
    //     if (err) return next(err);
    //     res.render('projects/list', {
    //         projects: projects
    //     });
    // });
};

// GET '/projects/:id'
projects.show = function(req, res, next) {
    res.render('projects/show');
    // Skill.get(req.params.id, function (err, skill) {
    //     if (err) return next(err);

    //     res.render('projects/show', {
    //         skill: skill
    //     });
    // }); 
};

// GET '/projects/new'
projects.new = function(req, res, next) {
    res.render('projects/new');
    // res.render('projects/new');
};

// GET '/projects/edit/:id'
projects.edit = function(req, res, next) {
    res.render('projects/edit');
    // Skill.getAll(function (err, projects) {
    //     if (err) return next(err);

    //     res.render('projects/list_edit', {
    //         projects: projects
    //     });
    // });
};

// POST '/projects/new'
projects.create = function(req, res, next) {
    // Skill.create(
    //     { title: req.body['title']
    //     , color: req.body['color']
    //     , overall: req.body['overall']
    //     , experience: req.body['experience']
    //     , outlook: req.body['outlook']
    //     , love: req.body['love']
    //     , since: req.body['since'] 
    //     }, function (err, skill) {
    //         if (err) return next(err);
    res.redirect('/projects');
    // });
};

// POST '/projects/edit/:id'
projects.update = function(req, res, next) {
    res.redirect('/projects');
};

// POST '/projects/destroy/:id'
projects.destroy = function(req, res, next) {
    // Skill.get(req.params.id, function (err, skill) {
    //     if (err) return next(err);
    //     skill.del(function (err) {
    //         if (err) return next(err);
    //         res.redirect('/projects');
    //     });
    // });
    res.redirect('/projects');
};