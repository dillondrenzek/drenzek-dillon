var contexts = exports = module.exports;
// var Project = require('../models/project');

// GET '/contexts'
contexts.list = function(req, res, next) {
    res.render('contexts/list');
    // Skill.getAll(function (err, contexts) {
    //     if (err) return next(err);
    //     res.render('contexts/list', {
    //         contexts: contexts
    //     });
    // });
};

// GET '/contexts/:id'
contexts.show = function(req, res, next) {
    res.render('contexts/show');
    // Skill.get(req.params.id, function (err, skill) {
    //     if (err) return next(err);

    //     res.render('contexts/show', {
    //         skill: skill
    //     });
    // }); 
};

// GET '/contexts/new'
contexts.new = function(req, res, next) {
    res.render('contexts/new');
    // res.render('contexts/new');
};

// GET '/contexts/edit/:id'
contexts.edit = function(req, res, next) {
    res.render('contexts/edit');
    // Skill.getAll(function (err, contexts) {
    //     if (err) return next(err);

    //     res.render('contexts/list_edit', {
    //         contexts: contexts
    //     });
    // });
};

// POST '/contexts/new'
contexts.create = function(req, res, next) {
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
    res.redirect('/contexts');
    // });
};

// POST '/contexts/edit/:id'
contexts.update = function(req, res, next) {
    res.redirect('/contexts');
};

// POST '/contexts/destroy/:id'
contexts.destroy = function(req, res, next) {
    // Skill.get(req.params.id, function (err, skill) {
    //     if (err) return next(err);
    //     skill.del(function (err) {
    //         if (err) return next(err);
    //         res.redirect('/contexts');
    //     });
    // });
    res.redirect('/contexts');
};