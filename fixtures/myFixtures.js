const {test:base,expect} = require('@playwright/test');
const {LoginPage} = require('@pages/login.page');
const {ProductPage} = require('@pages/product.page');
const loginData = require('@data/loginData.json');

const test = base.extend({
  //custom fixture for page objects
  loginPage: async ({page},use) => {
  await use(new LoginPage(page));
  },
  productPage: async ({page},use) => {
    await use(new ProductPage(page));
  },
   // custom fixture for test data
  testData: async ({}, use) => {
    await use(loginData);
  }

});
module.exports = {test,expect};