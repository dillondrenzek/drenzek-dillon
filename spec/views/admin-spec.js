// spec.js
// v3.0.4

// Add the custom locator.
by.addLocator('sectionTitle',
    function(titleText, opt_parentElement, opt_rootSelector) {
  // This function will be serialized as a string and will execute in the
  // browser. The first argument is the text for the button. The second
  // argument is the parent element, if any.
  var using = opt_parentElement,
      sections = using.querySelectorAll('section');

  // Return an array of buttons with the text.
  return Array.prototype.filter.call(sections, function(section) {

  	var title = $('h3');

    return title.textContent === titleText;
  });
});


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

	it('should display list of skills', function(){
		var section = element(by.sectionTitle('LIST SKILLS'));
		var title = section.element(by.css('h3'));
		expect(title.getText()).toEqual('LIST SKILLS');
	});

});