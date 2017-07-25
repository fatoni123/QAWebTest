describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://192.168.1.6:8080/');

    expect(browser.getTitle()).toEqual('AngularJS User Registration and Login Example');

    	element(by.id('register_button')).click(); 	
    	
  });

  it('should fill registration form', function() {
	element(by.model('vm.user.firstName')).sendKeys("myFirstName");
	element(by.model('vm.user.lastName')).sendKeys("myLastName");
	element(by.model('vm.user.username')).sendKeys("myusername");
	element(by.model('vm.user.password')).sendKeys("mypassword");
	element(by.id('register')).click();	
	    expect(element(by.binding('flash.message')).getText()).
        toEqual('Registration successful'); // notification because account not exist

  });


  it('should fill login form and login and logout', function() {
	element(by.model('vm.username')).sendKeys("myusername");
	element(by.model('vm.password')).sendKeys("mypassword");
	element(by.id('login_button')).click();	
	element(by.id('logout_button')).click();	
  });  

    it('try to register with same username and password', function() {
    	element(by.id('register_button')).click();	
	element(by.model('vm.user.firstName')).sendKeys("myFirstName");
	element(by.model('vm.user.lastName')).sendKeys("myLastName");
	element(by.model('vm.user.username')).sendKeys("myusername");
	element(by.model('vm.user.password')).sendKeys("mypassword");
	element(by.id('register')).click();	
	    expect(element(by.binding('flash.message')).getText()).
        toEqual('Username "myusername" is already taken'); // notification because account not exist
	element(by.id('cancel_button')).click();	

  });

    it('Login and delete account plus Logout', function() {
	element(by.model('vm.username')).sendKeys("myusername");
	element(by.model('vm.password')).sendKeys("mypassword");
	element(by.id('login_button')).click();	
	element(by.id('delete_button')).click();	
	element(by.id('logout_button')).click();
	
  });

  it('try to login with deleted account', function() {
	element(by.model('vm.username')).sendKeys("myusername");
	element(by.model('vm.password')).sendKeys("mypassword");
	element(by.id('login_button')).click();	
    expect(element(by.binding('flash.message')).getText()).
        toEqual('Username or password is incorrect'); // notification because account not exist
  });	
	
 

});