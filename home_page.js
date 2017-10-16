// Your code here!
var home_page = function () {

    this.entervalue = function (value) {
        element(by.model('person.name')).sendKeys(value);
    };

    this.getvalue = function () {
        return element(by.binding('person.name')).getText();
    };

    this.clickbutton = function () {
        element(by.buttonText('CONTINUE')).click();

    };
};
module.exports = new home_page();
