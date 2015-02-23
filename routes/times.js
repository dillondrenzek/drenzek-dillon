var times = exports = module.exports;
// var Time = require('../models/time');

// GET '/times'
times.list = function(req, res, next) {
    res.render('times/list');
    // Skill.getAll(function (err, times) {
    //     if (err) return next(err);
    //     res.render('times/list', {
    //         times: times
    //     });
    // });
};

// GET '/times/:id'
times.show = function(req, res, next) {
    res.render('times/show');
    // Skill.get(req.params.id, function (err, skill) {
    //     if (err) return next(err);

    //     res.render('times/show', {
    //         skill: skill
    //     });
    // }); 
};

// GET '/times/new'
times.new = function(req, res, next) {
    res.render('times/new');
    // res.render('times/new');
};

// GET '/times/edit/:id'
times.edit = function(req, res, next) {
    res.render('times/edit');
    // Skill.getAll(function (err, times) {
    //     if (err) return next(err);

    //     res.render('times/list_edit', {
    //         times: times
    //     });
    // });
};

// POST '/times/new'
times.create = function(req, res, next) {
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
    res.redirect('/times');
    // });
};

// POST '/times/edit/:id'
times.update = function(req, res, next) {
    res.redirect('/times');
};

// POST '/times/destroy/:id'
times.destroy = function(req, res, next) {
    // Skill.get(req.params.id, function (err, skill) {
    //     if (err) return next(err);
    //     skill.del(function (err) {
    //         if (err) return next(err);
    //         res.redirect('/times');
    //     });
    // });
    res.redirect('/times');
};