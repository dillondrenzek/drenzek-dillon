//- Projects Router
//- version 0.5.0
var projects = exports = module.exports;
var Project = require('../models/project');

// GET '/projects'
projects.list = function(req, res, next) {
    Project.getAll(function (err, projects) {
        if (err) return next(err);
        res.render('projects/list', {
            objects: projects
        });
    });
};

// GET '/projects/new'
projects.new = function(req, res, next) {
    res.render('projects/new', {
        model: Project.prototype,
        keys: Object.keys(Project.prototype)
    });
};

// GET '/projects/:id'
projects.show = function(req, res, next) {
    Project.get(req.params.id, function (err, project) {
        if (err) return next(err);

        res.render('projects/show', {
            obj: project,
            model: Project.prototype,
            keys: Object.keys(Project.prototype)

        });
    }); 
};

// GET '/projects/edit/:id'
projects.edit = function(req, res, next) {
    Project.get(req.params.id, function (err, project) {
        if (err) return next(err);

        res.render('projects/edit', {
            model: Project.prototype,
            keys: Object.keys(Project.prototype),
            obj: project
        });
    });
};

// POST '/projects/new'
projects.create = function(req, res, next) {
    delete req.body['__proto__'];

    Project.create(req.body, function (err, project) {
        if (err) return next(err);
        res.redirect('/projects');
    });
};

// GET '/projects/edit'
projects.list_edit = function(req, res, next) {
    Project.getAll(function (err, projects) {
        if (err) return next(err);

        console.log(Project.prototype);

        res.render('projects/list_edit', {
            objects: projects,
            keys: Object.keys(Project.prototype),
            actions: [
                {label: "Show", action: "/projects/", method: "GET", needsID: true},
                {label: "Edit", action: "/projects/edit/", method: "GET", needsID: true},
                {label: "Destroy", action: "/projects/destroy/", method: "POST", needsID: true}
            ]
        });
    });
};

// POST '/projects/edit/:id'
projects.update = function(req, res, next) {
    delete req.body['__proto__'];

    Project.get( req.params.id, function (err, project) {
        project.update(req.body, function (err, result) {
            if (err) return next(err);

            res.redirect('/projects/edit');
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




