var site = exports = module.exports;
var Project = require('../models/project');
var Skill = require('../models/skill'),
        Project = require('../models/project'),
        Time = require('../models/time'),
        Context = require('../models/context'),

        jsonData = require('../json/data.json'),

        skillsArray = jsonData.skills,
        projectsArray = jsonData.projects,
        timesArray = jsonData.times,
        contextsArray = jsonData.contexts;


// GET '/'
site.index = function(req, res, next) {
	res.render('index');
};

site.seed = function(req, res, next) {

    this.skills_reset = false,
        this.projects_reset = false,
        this.times_reset = false,
        this.contexts_reset = false;
	
    // erase any skills
    Skill.getAll (function (err, skills) { if (err) return next(err);
        skills.forEach( function(skill, i, arr) {
            skill.del(function (err) { 
            	if (err) return next(err);
                this.skills_reset = true;
            });
        });
    });

    Project.getAll (function (err, projects) { if (err) return next(err);
        projects.forEach( function(project, i, arr) {
            project.del(function (err) { 
                if (err) return next(err);
                this.projects_reset = true;
            });
        });
    });

    Time.getAll (function (err, times) { if (err) return next(err);
        times.forEach( function(time, i, arr) {
            time.del(function (err) { 
                if (err) return next(err);
                this.times_reset = true;
            });
        });
    });

    Context.getAll (function (err, contexts) { if (err) return next(err);
        contexts.forEach( function(context, i, arr) {
            context.del(function (err) { 
                if (err) return next(err);
                this.contexts_reset = true;
            });
        });
    });

    while ( !skills_reset && !projects_reset && !times_reset && !contexts_reset ) {
        process.stdout.write("skills_reset:" + skills_reset + "\r" + "\n");
        process.stdout.write("projects_reset:" + projects_reset + "\r" + "\n");
        process.stdout.write("times_reset:" + times_reset + "\r" + "\n");
        process.stdout.write("contexts_reset:" + contexts_reset + "\r" + "\n");
    }

    if (skills_reset && projects_reset && times_reset && contexts_reset) {
        console.log("Reset all Models.");

        skillsArray.forEach( function(el, i, arr) {
            Skill.create(el, function(err, result) {
                if (err) return next(err);
                console.log("Created Skill:", el.title);
            });
        });

        contextsArray.forEach( function(el, i, arr) {
            Context.create(el, function(err, result) {
                if (err) return next(err);
                console.log("Created context:", el.title);
            });
        });

        projectsArray.forEach( function(el, i, arr) {
            Project.create(el, function(err, result) {
                if (err) return next(err);
                console.log("Created project:", el.title);
            });
        });

        timesArray.forEach( function(el, i, arr) {
            Time.create(el, function(err, result) {
                if (err) return next(err);
                console.log("Created time:", el.title);
            });
        });
    };

    res.render('index');
};