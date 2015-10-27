// spec.js
// v3.0.4



describe('Admin Home', function(){



	beforeEach(function(){
		// Navigate to url
		browser.get('http://localhost:8080/the-work-of/admin');
	});



	// Smoke Tests
	it('should display admin homepage', function(){
		// find the pageTitle binding
		var pageTitle = element(by.binding('pageTitle'));

		// should read 'Admin Home'
		expect(pageTitle.getText()).toEqual('Admin Home');
	});



	// Displays Skills List
	it('should display list of skills', function(){

		// Find table.list-skills
		var listSkillsTable = $('table.list-skills');
		expect(listSkillsTable.isPresent()).toBe(true);

		// See that there is one tr.skill per skill in skills
		element.all(by.repeater('skill in skills')).count().then(function(count){
			expect(listSkillsTable.$$('tr.skill').count()).toEqual(count);
		});
	});



	// Displays Projects List
	it('should display list of projects', function(){

		// Find table.list-projects
		var listProjectsTable = $('table.list-projects');
		expect(listProjectsTable.isPresent()).toBe(true);

		// See that there is one tr.project per project in projects
		element.all(by.repeater('project in projects')).count().then(function(count){
			expect(listProjectsTable.$$('tr.project').count()).toEqual(count);
		});
	});



	// Displays New Skill Form
	it('should display new skill form', function(){

		// Find form.new-skill
		var newSkillForm = $('form.new-skill');
		expect(newSkillForm.isPresent()).toBe(true);

		// Find a submit button
		var newSkillSubmit = newSkillForm.$$('input[type="submit"]');
		expect(newSkillSubmit.first().isPresent()).toBe(true);

	});

	

	// Displays New Project Form
	it('should display new project form', function(){

		// Find form.new-project
		var newProjectForm = $('form.new-project');
		expect(newProjectForm.isPresent()).toBe(true);

		// Find a submit button
		var newProjectSubmit = newProjectForm.$$('input[type="submit"]');
		expect(newProjectSubmit.first().isPresent()).toBe(true);

	});

	



});