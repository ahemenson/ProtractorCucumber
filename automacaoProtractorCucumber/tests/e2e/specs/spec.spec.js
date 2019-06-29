// let specPage = require('../pages/spec.po.js');
// describe('angularjs homepage', function () {
//     it('should greet the named user', function () {
//         specPage.init();

//         specPage.get('http://www.angularjs.org');
//         specPage.setName('Julie');

//         expect(specPage.getGreetingText()).toEqual('Hello Julie!');
//     });
// });


let specPage = require('../pages/spec.po.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(10 * 1000);

Before(function(){
    specPage.init();
})

// Before(async () => {
//     await browser.get('/');
//   });

setDefaultTimeout(10 * 1000);

browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;


// After(async () => {
//   await browser.driver.executeScript('window.sessionStorage.clear(); window.localStorage.clear();');
// });

Given(/^The user go to "([^"]*)"$/, async (end) => {
    // Write code here that turns the phrase above into concrete actions
    await specPage.get(end);  
    await appPage.fillAccessData();  
});

When(/^The user adds "([^"]*)" in the name field$/, async (name) => {
    // Write code here that turns the phrase above into concrete actions
    await specPage.setName(name+'w');
});

Then('The user should see Hello with the username',  async () => {
    // Write code here that turns the phrase above into concrete actions
    await expect(specPage.getGreetingText()).to.eventually.equal('Hello Tulio!');
});