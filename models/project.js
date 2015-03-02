// Project Model
// version 0.7.0
var neo4j = require('neo4j'),
    Skill = require('./skill');

var db = new neo4j.GraphDatabase(
	process.env['NEO4J_URL'] ||
	process.env['GRAPHENEDB_URL'] ||
	'http://localhost:7474'
);

//
//  Constructor
//
var Project = module.exports = function Project(_node) {
	this._node = _node;
};

//
//  Properties
//
Object.defineProperties(Project.prototype, {
    
    // READONLY
    'model_label': {
        enumerable: false,
        get: function () { return "Project"; }
    },

    'localURL': {
        enumerable: false,
        get: function () { return "/projects/"+this.id; }
    },

    'id': {
        enumerable: true,
        get: function () { return this._node.id; }
    },

    // SETTABLES
    'title': {
        enumerable: true,
        get: function () { return this._node.data['title']; },
        set: function (title) { this._node.data['title'] = title; }
    },

    'color': {
        enumerable: true,
        get: function () { return this._node.data['color']; },
        set: function (color) { this._node.data['color'] = color; }
    },

    'type': {
        enumerable: true,
        get: function () { return this._node.data['type']; },
        set: function (type) { this._node.data['type'] = type; }
    },

    'date': {
        enumerable: true,
        get: function () { return this._node.data['date']; },
        set: function (date) { this._node.data['date'] = date; }
    },



    // v2.0
    'content': {
        enumerable: false,
        get: function () { return this._node.data['content']; },
        set: function (xp) { this._node.data['content']; }
    },

    // 'externalURL': {
    //     enumerable: true,
    //     get: function () { return this._node.data['content']['externalURL']; },
    //     set: function (externalURL) { this._node.data['content']['externalURL'] = externalURL; }
    // },

    // 'githubURL': {
    //     enumerable: true,
    //     get: function () { return this._node.data['content']['githubURL']; },
    //     set: function (githubURL) { this._node.data['content']['githubURL'] = githubURL; }
    // },

    // 'imageURL': {
    //     enumerable: true,
    //     get: function () { return this._node.data['content']['imageURL']; },
    //     set: function (imageURL) { this._node.data['content']['imageURL'] = imageURL; }
    // },

    // 'description': {
    //     enumerable: true,
    //     get: function () { return this._node.data['content']['description']; },
    //     set: function (description) { this._node.data['content']['description'] = description; }
    // },

    // DEPRECATE v2.0
    'externalURL': {
        enumerable: true,
        get: function () { return this._node.data['externalURL']; },
        set: function (externalURL) { this._node.data['externalURL'] = externalURL; }
    },

    'githubURL': {
        enumerable: true,
        get: function () { return this._node.data['githubURL']; },
        set: function (githubURL) { this._node.data['githubURL'] = githubURL; }
    },

    'imageURL': {
        enumerable: true,
        get: function () { return this._node.data['imageURL']; },
        set: function (imageURL) { this._node.data['imageURL'] = imageURL; }
    },

    'description': {
        enumerable: true,
        get: function () { return this._node.data['description']; },
        set: function (description) { this._node.data['description'] = description; }
    },
    // END DEPRECATE    

    'getExhibitedSkills': {
        enumerable: false,
        value: function (callback) {
            var query = [
                'MATCH (skill:Skill) <-[relationship:EXHIBITS]- (p:Project)',
                'WHERE ID(p) = {projectId}',
                'RETURN skill'
            ].join('\n');

            var params = {
                projectId: this.id
            };

            db.query( query, params, function (err, results) {
                if (err) return callback(err);

                var exhibitedSkills = [];

                results.forEach(function (el, i) {
                    var s = new Skill(results[i]['skill']);
                    exhibitedSkills.push(s);
                });


                callback(null, exhibitedSkills);
            });
        }
    },

    'save': {
        enumerable: false,
        value: function (callback) {
            this._node.save(function (err) {
                callback(err);
            });
        }
    },

    'update': {
        enumerable: false,
        value: function (data, callback) {

            var query = [
                'MATCH (project: Project)',
                'WHERE ID(project) = {id}',
                'SET project = {map}',
                'RETURN project'
            ].join('\n');

            var params = {
                id: this.id,
                map: data
            };

            db.query(query, params, function (err, result) {
                if (err) return callback(err);
                callback(null, new Project(result['project']));
            });
        }
    },

    'del': {
        enumerable: false,
        value: function (callback) {
            var query = [
                'MATCH (project:Project)',
                'WHERE ID(project) = {projectId}',
                'DELETE project'
            ].join('\n');

            var params = {
                projectId: this.id
            };

            db.query(query, params, function (err) {
                callback(err);
            });
        }
    }

});


//
//  Public Class Methods
//
Project.get = function (id, callback) {
    db.getNodeById(id, function (err, node) {
        if (err) return callback(err);
        callback(null, new Project(node));
    });
};

Project.getAll = function (callback) {
    var query = [
        'MATCH (project:Project)',
        'RETURN project',
    ].join('\n');

    db.query(query, null, function (err, results) {
        if (err) return callback(err);
        var projects = results.map(function (result) {
            return new Project(result['project']);
        });
        callback(null, projects);
    });
};

Project.create = function (data, callback) {
    var node = db.createNode(data);
    var project = new Project(node);

    var query = [
        'CREATE (project:Project {data})',
        'RETURN project',
    ].join('\n');

    var params = {
        data: data
    };

    db.query(query, params, function (err, results) {
        if (err) return callback(err);
        var project = new Project(results[0]['project']);
        callback(null, project);
    });
};