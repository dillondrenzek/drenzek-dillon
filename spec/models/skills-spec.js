// Skill Model Spec
describe('Skill Model', function(){

	beforeEach(function(){
		browser.get('http://localhost:8080/the-work-of/admin');
	});

	// Proven: 	form.new-skill 
	//				input[type="submit"] exists
	//			table.list-skills
	// 				tr.skill count=skills

	it('should create a skill', function(){

		var skillList = element.all(by.repeater('skill in skills'));
		skillList.count().then(function(before){

			var newSkillTitle = 'Test';

			// Fill in form
			$('form.new-skill').$$('input[name="title"]').sendKeys(newSkillTitle);

			// Submit form
			$('form.new-skill').$$('input[type="submit"]').click();

			// Check for new object
			expect(
				$$('table.list-skills').first()
				.$$('tr.skill')
				.filter(function(elem) {
					return elem.getText().then(function(text){
						return text === newSkillTitle;
					});
				}).count()
			).toEqual(1);

			// Check for increase in count
			expect(
				element.all(by.repeater('skill in skills')).count()
			).toEqual(before+1);

		});


	});
	// xit('should get one skill', function(){});
	// xit('should get all skills', function(){});
	// xit('should update one skill', function(){});
	// xit('should destroy one skill', function(){});

});