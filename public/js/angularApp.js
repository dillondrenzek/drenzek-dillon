// drenzekDillon
// Angular app
// version 3.1

var app = angular.module('drenzekDillon', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider
	.state('home', {
		url: '/',
		controller: 'MainCtrl',
		templateUrl: '/home.html',
	})
	.state('projects.list', {
		url: '/projects',
		controller: 'MainCtrl',
		templateUrl: ''


	});

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('home');
});

app.controller('MainCtrl', [
	'$scope',
	'skills',
	'projects',
	function($scope, skills, projects){

		$scope.pageTitle = ", The Work of";
		$scope.skills = skills;
		$scope.projects = projects;
		$scope.wordFromTheAuthor = "I'm psyched you're here! I'm an Up & Coming Web Developer and this is my little corner of the Internet. Ever since I was a kid, I've played with data of all sorts and looked for creative ways to display that information. Some of my earliest inspirations were the scoreboards during sporting events, so I guess you could say this is my personal \"scoreboard.\" I've taken my resume, and my portfolio and turned it into a scoreboard of my skills and projects. Play around and see what you can find and then drop me a note at dillon@drenzek.com!<br><br> Cheers,<br>Dillon";

		// $scope.pageTitle = "";

		// $scope

	}]);





app.factory('skills', [
	function(){
		return {
			web: ["HTML/CSS", "JavaScript", "jQuery", "Stylus", "MongoDB", "Node.js", "Angular.js"],
			ui: ["Photoshop", "Illustrator", "Sketch", "InDesign"],
			programming: ["Objective-C", "C/C++", "Python",],
		};
		
	}]);

app.factory('projects', [
	function(){
		return {
			all: [
			{
				title: 'Capstone Portfolio',
				type: 'Website',
				skills: ['Node.js', 'Express.js', 'Neo4j', 'Jade', 'Stylus'],
				bulletPoints: ['Major project in senior Capstone class at CU',
				'How I fell in love with Node.js & server-side JavaScript', 'Utilized graph database Neo4j'],
				imageUrls: ['images/capstone-portfolio-1.jpg']
			},{
				title: 'Native',
				type: 'iOS App',
				skills: ['Objective-C', 'Sketch'],
				bulletPoints: ['I implemented pixel-perfect views from mockups', 'Helped define product requirements','Participated in Techstars Boulder', 'Company still running in CO named Pana']
			},{
				title: 'Drenzek Does Denmark',
				type: 'Website',
				skills: ['Angular.js', 'MongoDB', 'Node.js', 'Express.js', 'Stylus'],
				bulletPoints: ['Blog I built abroad in Denmark to Practice Angular.js', 'Uses Mongoose to help interface with MongoDB', 'Has an Admin interface with authentication'],
				imageUrls: ['images/drenzek-does-denmark.png'],
				launchUrl: 'http://denmark.drenzek.com',
				githubUrl: 'https://github.com/dillondrenzek/drenzek-does-denmark'
			},{
				title: 'Storm Branding & Case Study',
				type: 'Branding, Website',
				skills: ['Photoshop', 'Illustrator', 'InDesign', 'HTML/CSS', 'Node.js'],
				bulletPoints: ['Rebranding of Copenhagen\'s premiere fashion shop', 'Completed Summer of 2015 during study abroad in Denmark', 'Website serves as case study'],
				imageUrls: ['images/storm.jpg']
			},],
		};
	}]);










