var confirm_page = function () {

    this.gettitle = function () {
        return element(by.css('h1')).getText();
    };
    this.clickbutton = function () {
        element(by.buttonText('BACK TO HOME')).click();
        //return require('./confirm_page.js');
    };
};
module.exports = new confirm_page();