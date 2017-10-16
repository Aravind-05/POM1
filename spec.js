describe('To test a function', function () {

    beforeEach( function() {
        browser.get("http://www.thetestroom.com/jswebapp/index.html");
    });

    var home_page = require('./home_page.js');
    var animal_page = require('./animal_page.js');
    var confirm_page = require('./confirm_page.js');
    

    it('should adopt a obj', function () {

        home_page.entervalue("hello");
        var gethomepagetext = home_page.getvalue();
        expect(gethomepagetext).toBe('hello');
        //home_page.clickbutton();

        var animal_page = home_page.clickbutton();

        var animal_page = require('./animal_page.js');
        animal_page.selectanimal('3');
        //animal_page.clickbutton();

        var confirm_page = animal_page.clickbutton();

        var confirm_page = require('./confirm_page.js');
        expect(confirm_page.gettitle()).toBe('Thank you');
        confirm_page.clickbutton();
    });  


    xit('call animal claSS', function () {

        var animal_page = home_page.clickbutton();
        animal_page.selectanimal('3');
        animal_page.clickbutton();

    });
    
});