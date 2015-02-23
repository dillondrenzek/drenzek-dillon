var projects = exports = module.exports;
var Project = require('../models/project');

// GET '/projects'
projects.list = function(req, res, next) {
    Project.getAll(function (err, projects) {
        if (err) return next(err);
        res.render('projects/list', {
            projects: projects
        });
    });
};

// GET '/projects/new'
projects.new = function(req, res, next) {
    res.render('projects/new');
};

// GET '/projects/:id'
projects.show = function(req, res, next) {
    Project.get(req.params.id, function (err, project) {
        if (err) return next(err);

        res.render('projects/show', {
            project: project
        });
    }); 
};

// GET '/projects/edit/:id'
projects.edit = function(req, res, next) {
    Project.get(req.params.id, function (err, project) {
        if (err) return next(err);

        res.render('projects/edit', {
            project: project
        });
    });
};

// POST '/projects/new'
projects.create = function(req, res, next) {
    delete req.body['__proto__'];

    Project.create(req.body, function (err, project) {
            if (err) return next(err);
            res.redirect('/projects/edit');
    });
};

// GET '/projects/edit'
projects.list_edit = function(req, res, next) {
    Project.getAll(function (err, projects) {
        if (err) return next(err);

        res.render('projects/list_edit', {
            projects: projects
        });
    });
};

// POST '/projects/edit/:id'
projects.update = function(req, res, next) {
    delete req.body['__proto__'];

    Time.get( req.params.id, function (err, time) {
        time.update(req.body, function (err, result) {
            if (err) return next(err);

            res.redirect('/times/edit');
        });
    });
};

// POST '/projects/destroy/:id'
projects.destroy = function(req, res, next) {
    Project.get(req.params.id, function (err, project) {
        if (err) return next(err);
        project.del(function (err) {
            if (err) return next(err);
            res.redirect('/projects/edit');
        });
    });
};