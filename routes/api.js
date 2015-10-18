// Routes & Temporary Data
// version 2.2.3

var api = exports = module.exports;
var seedData = require('../db');

// GET '/projects'
api.projects = {
    list: function(req, res) {
        res.render('test/projects', {
            projects: seedData.projects.v2
        });
    },

};