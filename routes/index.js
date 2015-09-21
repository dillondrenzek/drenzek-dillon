// Routes & Temporary Data
// version 2.2.0

var routes = exports = module.exports;

// GET '/test'
routes.test = function(req, res) {
    res.render('test');
};

// GET '/'
routes.index = function(req, res, next) {

    res.render('index', {
    	projects: [
    	{
    		title: "Capstone Portfolio Website",
    		type: "Website",
    		skills: ["Node.js", "Neo4j", "Stylus", "Jade"],
    		description: "A major project in my Capstone class during the Spring of 2015. I went above and beyond the requirements by using Node and the graph database, Neo4j. This is the first version of the site you're on :)",
    		launchURL: "http://drenzek-capstone-portfolio.herokuapp.com",
    		githubURL: "https://github.com/dillondrenzek/drenzek-capstone-portfolio",
    		// imageURL: "images/drenzek-portfolio-v1.jpg",
            imageURLs: ["images/large-images/drenzek-dillon-v1-1.png",
                        "images/large-images/drenzek-dillon-v1-2.png",
                        "images/large-images/drenzek-dillon-v1-3.png",
                        "images/large-images/drenzek-dillon-v1-4.png"],
    		// imageAlt: "First Version of My Portfolio"
    	},
    	{
    		title: "Capstone Project Portal",
    		type: "Website",
    		skills: ["Node.js", "Jade", "Stylus"],
    		description: "A website for turning in assignments for my Capstone class in Spring 2015. I built an admin space into it to update the website throughout the year. Also where I fell in love with Node.js after porting the site from the Ruby DSL, Sinatra.",
    		launchURL: "http://capstone.drenzek.com",
    		githubURL: "https://github.com/dillondrenzek/drenzek-capstone",
    		imageURLs: ["images/capstone-portal.png"],
    		imageAlt: "Capstone Project Portal"
    	},
    	{
    		title: "Storm Rebranding Case Study",
    		type: "Website",
    		skills: ["Jade", "Stylus", "Node.js", "jQuery"],
    		description: "A case study I did of my Graphic Design project completed in Denmark during the Summer of 2015.",
    		launchURL: "http://drenzek-storm-feature.herokuapp.com/",
			githubURL: "https://github.com/dillondrenzek/storm-feature",
			imageURLs: ["images/storm.jpg"],
			// imageAlt: "Storm"
    	},
    	{
    		title: "Drenzek Does Denmark",
    		type: "Blog",
    		skills: ["Angular.js", "MongoDB", "Node.js", "Jade", "Stylus"],
    		description: "A simple blog I created while I was in Denmark to practice using Angular.",
    		launchURL: "http://denmark.drenzek.com",
			githubURL: "https://github.com/dillondrenzek/drenzek-does-denmark",
			imageURLs: ["images/drenzek-does-denmark.png"],
			// imageAlt: "Drenzek Does Denmark"
    	}
    	
    	],
    	skills: {
    		web: ["HTML/CSS",
					"JavaScript",
					"jQuery",
					"Node.js",
					"Stylus"],
    		design: ["Photoshop",
    				"Illustrator",
    				"Sketch"],
    		learning: ["Angular.js","MongoDB","Neo4j"]
    	}
    });
};



