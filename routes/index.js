var routes = exports = module.exports;

routes.index = function(req, res) {
	res.render('index');
};

routes.skills = function(req, res) {

	var options = {
		skills: [

			{ title: "Adobe Illustrator"
			, color: "#eb7125"
			, overall: "93"
			, experience: "high"
			, outlook: "great"
			, love: 4.5
			, since: "July 2008"}, 

			{ title: "HTML"
			, color: "#894D26"
			, overall: "86"
			, experience: "very high"
			, outlook: "excellent"
			, love: 4.7
			, since: "21st Birthday"}, 

			{ title: "Ruby On Rails"
			, color: "#A42028"
			, overall: "74"
			, experience: "low"
			, outlook: "poor"
			, love: 3.3
			, since: "Spring 2013"}, 

			{ title: "Objective-C"
			, color: "#2D7B8F"
			, overall: "91"
			, experience: "high"
			, outlook: "great"
			, love: 4.3
			, since: "Fall 2013"}, 

			{ title: "Node.js"
			, color: "#80BD01"
			, overall: "64"
			, experience: "new"
			, outlook: "excellent"
			, love: 4.7
			, since: "Feb 2015"}, 

			{ title: "No Experience"
			, color: ""
			, overall: ""
			, experience: ""
			, outlook: ""
			, love: 0
			, since: ""}
		],
	}

	res.render('skills', options);
};