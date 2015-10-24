// The Work of
// Angular app
// version 3.0.1

var app = angular.module('workApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider

	.state('home', {
		url: '/home',
		controller: 'MainCtrl',
		templateUrl: '/home.html',
		resolve: {

		}
	})

	.state('login', {
		url: '/login',
		controller: 'LoginCtrl',
		templateUrl: '/login.html'
	})

	.state('admin', {
		url: '/admin',
		controller: 'AdminCtrl',
		templateUrl: '/admin.html'
	});

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('home');


});

app.controller('AdminCtrl', [
	'$scope',
	'skills',
	'projects',
	function($scope, skills, projects){
		skills.getAll();
		projects.getAll();
		$scope.pageTitle = "Admin Home";
		$scope.skills = skills.skills;
		$scope.projects = projects.projects;
	}]);

app.controller('LoginCtrl', [
	'$scope',
	function($scope){
		$scope.pageTitle = "Login";
	}]);



app.controller('MainCtrl', [
	'$scope',
	'skills',
	'projects',
	function($scope, skills, projects){
		skills.getAll();
		projects.getAll();

		$scope.pageTitle = ", The Work of";
		$scope.skills = skills.skills;
		$scope.projects = projects.projects;
		// $scope.improvedSkills = skills.improved;
		// $scope
	}]);




app.factory('skills', [
	function(){
		var o = {
			getAll: function() {
				var seedSkills = { 
					all: [
						"HTML(5)",
						"CSS(3)",
						"jQuery",
						"Photoshop",
						"Illustrator",
						"Sketch",
						"JavaScript",
						"Stylus",
						"Jade",
						"Git/GitHub",
						"Mac OS X",
						"UNIX Command Line",
						"Express.js",
						"Node.js",
						"Bootstrap",
						"Gulp.js",
						"Linux",
						"WordPress",
						"Angular.js",
						"MongoDB",
						"Objective-C",
						"Swift",
						"Python",
						"REST APIs",
						"JSON",
						"AJAX",
						"C/C++",
						"Java"
					],
					improved: [
						{title: "JavaScript", value: "+++"},
						{title: "Python", value: "+++"},
						{title: "Java", value: "++"},
						{title: "Photoshop", value: "++"},
						{title: "Node.js", value: "+"},
						{title: "Illustrator", value: "+"}
					],
					web: [
						"HTML",
						"CSS",
						"JavaScript"
					],
					ui: [
						"Photoshop",
						"Illustrator",
						"Sketch"
					],
					programming: [
						"Objective-C",
						"Python",
						"Java"
					]

			};
				angular.copy(seedSkills, o.skills);
				return;
			},
			skills: []
		};
		return o;
	}]);


app.factory('projects', [
	function(){
		var o = {
			getAll: function() {
				var seedProjects = { 
					all: [
						{
				            title: "Capstone Portfolio Website",
				            descriptors: ["Website"],
				            points: [""],
				            // type: "Website",
				            skills: ["Node.js", "Neo4j", "Stylus", "Jade"],
				            description: "A major project in my Capstone class during the Spring of 2015. I went above and beyond the requirements by using Node and the graph database, Neo4j. This is the first version of the site you're on :)",
				            launchURL: "http://drenzek-capstone-portfolio.herokuapp.com",
				            githubURL: "https://github.com/dillondrenzek/drenzek-capstone-portfolio",
				            imageURLs: ["/images/capstone-portfolio-1.jpg",
				                        "/images/capstone-portfolio-2.jpg",
				                        "/images/capstone-portfolio-3.jpg",
				                        "/images/capstone-portfolio-4.jpg"]
				        },
				        {
				            title: "Le Faux Désign Compagnie",
				            descriptors: ["Branding", "Website"],
				            points: ["Advanced Web Design Class",
				                    "ASSIGN: Create a 'fake company'",
				                    "They Seem Like Great People"],
				            skills: ["HTML", "CSS", "UI Design", "Illustrator", "Sketch"],
				            description: "I created a fake design company. The project was part of an advanced web design class I took in the Fall of 2014 at the University of Colorado.",
				            imageURLs: ["/images/le-faux-1.png",
				                        "/images/le-faux-2.jpg"]
				        },
				        {
				            title: "Cold For Now, Always Wondering",
				            descriptors: ["Artwork"],
				            points: ["2015 CU Honors Journal Feature",
				                    "Collage of My Photographs",
				                    "Photoshop Composition"],
				            skills: ["Photoshop", "Photography"],
				            description: "On a frigid November night in Bozeman, Montana, I stood with my camera on a tripod aimed towards the heavens. With hot chocolate in hand, I pondered life's biggest questions. This piece was featured in the University of Colorado's 2015 Honors Journal.",
				            imageURLs: ["/images/always-wondering.jpg"]
				        },
				        {
				            title: "Capstone Project Portal",
				            descriptors: ["Website"],
				            points: [""],
				            skills: ["Node.js", "Jade", "Stylus"],
				            description: "A website for turning in assignments for my Capstone class in Spring 2015. I built an admin space into it to update the website throughout the year. Also where I fell in love with Node.js after porting the site from the Ruby DSL, Sinatra.",
				            launchURL: "http://capstone.drenzek.com",
				            githubURL: "https://github.com/dillondrenzek/drenzek-capstone",
				            imageURLs: ["/images/capstone-portal.png"]
				        },
				        {
				            title: "Gridrunner",
				            descriptors: ["Game", "Website"],
				            points: [""],
				            skills: ["jQuery", "JavaScript", "HTML", "CSS"],
				            description: "The team project I completed with my friend, Logan McCaul, from my Digital Media 2 class in Spring of 2014. The class was hooked the minute we let them play our game.",
				            launchURL: "", // Needs to be put up
				            githubURL: "https://github.com/dillondrenzek/gridrunner/tree/master/dm2-teamproject",
				            imageURLs: ["/images/gridrunner.png"]
				        },
				        {
				            title: "Storm Rebranding Case Study",
				            descriptors: ["Website", "Branding", "Case Study"],
				            points: ["Completed in Copenhagen, Denmark",
				                    "Graphic Design Studio",
				                    "Summer of 2015"],
				            skills: ["Jade", "Stylus", "Node.js", "jQuery"],
				            description: "A case study I did of the Graphic Design project I completed in Denmark during the Summer of 2015.",
				            launchURL: "http://drenzek-storm-feature.herokuapp.com/",
				            githubURL: "https://github.com/dillondrenzek/storm-feature",
				            imageURLs: ["/images/storm.jpg"]
				        },
				        {
				            title: "Drenzek Does Denmark",
				            descriptors: ["Blog", "Website"],
				            points:["My first Angular.js app"],
				            // type: "Blog",
				            skills: ["Angular.js", "MongoDB", "Node.js", "Jade", "Stylus"],
				            description: "A simple blog I created while I was in Denmark to practice using Angular.",
				            launchURL: "http://denmark.drenzek.com",
				            githubURL: "https://github.com/dillondrenzek/drenzek-does-denmark",
				            imageURLs: ["/images/drenzek-does-denmark.png"]
				        },
				        
					],
					current: [ ],
					featured: [ ],

				};
				angular.copy(seedProjects, o.projects);
				return;
			},
			projects: []
		};
		return o;
	}]);