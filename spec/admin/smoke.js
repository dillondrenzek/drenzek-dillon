// spec.js
// v3.0.4

describe('Admin Home', function(){

	// Smoke Tests
	it('should display admin homepage', function(){
		// Navigate to url
		browser.get('http://localhost:8080/the-work-of/admin');
		var pageTitle = element(by.binding('pageTitle'));
		expect(pageTitle.getText()).toEqual('Admin Home');
	});




});