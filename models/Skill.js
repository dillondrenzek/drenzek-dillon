var Skill = module.exports;
var MongoClient = require('mongodb').MongoClient;

Skill.getAll = function(callback){
	// mongoclient.open(function(err, db){
	// 	db.collection('skills').find();
	// 	db.close();
	// });
	MongoClient.connect('mongodb://localhost:27017/drenzek-dillon', function(err, db) {
		if (err) throw err;

		db.collection('skills').find({}).toArray(function(err, docs){
			if (err) throw err;

			callback(null, docs);

			db.close();
		});

	// 	var col = db.collection('skills');
	// 	// callback(null, col.find({}));
	// 	// callback(null, db.collection('skills').find({}));
	// // 	// db.close();
	// });

	// console.log(mongoclient);
	});
};