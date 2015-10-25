var Skill = module.exports;
var MongoClient = require('mongodb').MongoClient;

Skill.getAll = function(callback){
	MongoClient.connect('mongodb://localhost:27017/drenzek-dillon', function(err, db) {
		if (err) throw err;

		db.collection('skills').find({}).toArray(function(err, docs){
			if (err) throw err;

			callback(null, docs);

			db.close();
		});
	});
};