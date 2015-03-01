// skill.js
// version 0.7.0
var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase(
	process.env['NEO4J_URL'] ||
	process.env['GRAPHENEDB_URL'] ||
	'http://localhost:7474'
);

//
//  Constructor
//
var Skill = module.exports = function Skill(_node) {
	this._node = _node;
};


//
//  Properties
//
Object.defineProperties(Skill.prototype, {

    // READONLY
    'model_label': {
        enumerable: false,
        get: function () { return "Skill"; }
    },

    'localURL': {
        enumerable: false,
        get: function () { return "/skills/"+this.id; }
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

    'description': {
        enumerable: true,
        get: function () { return this._node.data['description']; },
        set: function (description) { this._node.data['description'] = description; }
    },

    'since': {
        enumerable: true,
        get: function () { return this._node.data['since']; },
        set: function (since) { this._node.data['since'] = since; }
    },

    // v2.0
    'experience': {
        enumerable: false,
        get: function () { return this._node.data['experience']; },
        set: function (experience) { this._node.data['experience'] = experience; }
    },

    // 'professional': {
    //     enumerable: true,
    //     get: function () { return this._node.data['experience']['professional']; },
    //     set: function (professional) { this._node.data['experience']['professional'] = professional; }
    // },

    // 'academic': {
    //     enumerable: true,
    //     get: function () { return this._node.data['experience']['academic']; },
    //     set: function (academic) { this._node.data['experience']['academic'] = academic; }
    // },

    // 'personal': {
    //     enumerable: true,
    //     get: function () { return this._node.data['experience']['personal']; },
    //     set: function (personal) { this._node.data['experience']['personal'] = personal; }
    // },

    // DEPRECATE v2.0
    'professional': {
        enumerable: true,
        get: function () { return this._node.data['professional']; },
        set: function (professional) { this._node.data['professional'] = professional; }
    },

    'academic': {
        enumerable: true,
        get: function () { return this._node.data['academic']; },
        set: function (academic) { this._node.data['academic'] = academic; }
    },

    'personal': {
        enumerable: true,
        get: function () { return this._node.data['personal']; },
        set: function (personal) { this._node.data['personal'] = personal; }
    },
    // END DEPRECATE

    'outlook': {
        enumerable: true,
        get: function () { return this._node.data['outlook']; },
        set: function (outlook) { this._node.data['outlook'] = outlook; }
    },

    'momentum': {
        enumerable: true,
        get: function () { return this._node.data['momentum']; },
        set: function (momentum) { this._node.data['momentum'] = momentum; }
    }, 

    'confidence': {
        enumerable: true,
        get: function () { return this._node.data['confidence']; },
        set: function (confidence) { this._node.data['confidence'] = confidence; }
    },


    // NON-ENUMERABLES
    'setParentSkill': {
        enumerable: false,
        value: function (parent, callback) {
            this._node.createRelationshipTo(parent._node, 'SUBSKILL', {}, function (err, rel) {
                callback(err);
                console.log("Rel:", rel);
            });
        }
    },

    'getParentSkill': {
        enumerable: false,
        value: function (callback) {
            var query = [
                'MATCH (s:Skill) -[:SUBSKILL]-> (parent)',
                'WHERE ID(s) = {skillId}',
                'RETURN parent'
            ].join('\n');

            var params = {
                skillId: this.id
            };

            db.query( query, params, function (err, results) {
                if (err) return callback(err);
                if (results.length) {
                    var p = new Skill(results[0]['parent']);
                    callback(null, p);
                } else {
                    callback(null, null);
                }
                
            });
        }
    }, 

    'getChildSkills': {
        enumerable: false,
        value: function (callback) {
            var query = [
                'MATCH (s:Skill) <-[:SUBSKILL]- (child)',
                'WHERE ID(s) = {skillId}',
                'RETURN child'
            ].join('\n');

            var params = {
                skillId: this.id
            };

            db.query( query, params, function (err, results) {
                if (err) return callback(err);

                var childSkills = [];

                results.forEach(function (el, i, arr) {
                    var p = new Skill(results[i]['child']);
                    childSkills.push(p);
                });

                callback(null, childSkills);
            });
        }
    },

    // returns projects = [{project: p, experience: {}}]
    'getExhibitingProjects': {
        enumerable: false,
        value: function (callback) {
            var query = [
                'MATCH (s:Skill) <-[relationship:EXHIBITS]- (project:Project)',
                'WHERE ID(s) = {skillId}',
                'RETURN relationship, project'
            ].join('\n');

            var params = {
                skillId: this.id
            };

            db.query( query, params, function (err, results) {
                if (err) return callback(err);
                callback(null, results);
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
                'MATCH (skill: Skill)',
                'WHERE ID(skill) = {id}',
                'SET skill = {map}',
                'RETURN skill'
            ].join('\n');

            var params = {
                id: this.id,
                map: data
            };

            db.query(query, params, function (err, result) {
                if (err) return callback(err);
                callback(null, new Skill(result['skill']));
            });
        }
    },

    'del': {
        enumerable: false,
        value: function (callback) {
            var query = [
                'MATCH (skill:Skill)',
                'WHERE ID(skill) = {skillId}',
                'DELETE skill'
            ].join('\n');

            var params = {
                skillId: this.id
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
Skill.get = function (id, callback) {
    db.getNodeById(id, function (err, node) {
        if (err) return callback(err);
        callback(null, new Skill(node));
    });
};

Skill.getByTitle = function (data, callback) {
    var query = [
        'MATCH (skill:Skill {title: "'+ data +'"})',
        'RETURN skill LIMIT 1'
    ].join('\n');

    var params = {
        data: data
    };

    console.log("params:", params);
    console.log("query:", query);

    db.query(query, null, function (err, results) {
        if (err) return callback(err);
        console.log("Results:", results);
        var skill = results[0]['skill'];
        callback(null, skill);
    });
};

Skill.getAll = function (callback) {
    var query = [
        'MATCH (skill:Skill)',
        'RETURN skill',
    ].join('\n');

    db.query(query, null, function (err, results) {
        if (err) return callback(err);
        var skills = results.map(function (result) {
            return new Skill(result['skill']);
        });
        callback(null, skills);
    });
};

Skill.create = function (data, callback) {
    var node = db.createNode(data);
    var skill = new Skill(node);

    var query = [
        'CREATE (skill:Skill {data})',
        'RETURN skill',
    ].join('\n');

    var params = {
        data: data
    };

    db.query(query, params, function (err, results) {
        if (err) return callback(err);
        var skill = new Skill(results[0]['skill']);
        callback(null, skill);
    });
};
