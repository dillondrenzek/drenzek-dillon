// spec.js
// v3.0.4

describe('Admin Home', function(){

	// Smoke Tests
	it('should display admin homepage', function(){
		// Navigate to url
		browser.get('http://localhost:8080/the-work-of/admin');

		// find the pageTitle binding
		var pageTitle = element(by.binding('pageTitle'));

		// should read 'Admin Home'
		expect(pageTitle.getText()).toEqual('Admin Home');
	});




});