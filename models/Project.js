var Project = module.exports;
var MongoClient = require('mongodb').MongoClient;

Project.getAll = function(callback){
	MongoClient.connect("mongodb://localhost:27017/drenzek-dillon", function(err, db){
		if (err) throw err;
		
		db.collection("projects").find({}).toArray(function(err, docs){
			if (err) throw err;
			callback(null, docs);
			db.close();
		});
	});
};