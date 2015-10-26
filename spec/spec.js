// spec.js
// v3.0.4

describe('Admin Home', function(){

	beforeEach(function(){
		browser.get('http://localhost:8080/the-work-of/admin');
	});

	// describe('Protractor Demo App', function() {
	//   it('should have a title', function() {
	//     browser.get('http://juliemr.github.io/protractor-demo/');

	//     // expect(browser.getTitle()).toEqual('Super Calculator');

	//   });
	// });

	it('should have a page title', function(){
		
		var pageTitle = element(by.binding('pageTitle'));
		expect(pageTitle.getText()).toEqual('Admin Home');


		// element(by.binding('pageTitle')).then(function(pageTitle){
		// 	expect(pageTitle.getText()).toEqual('Admin Home');
		// });
		
	});
});