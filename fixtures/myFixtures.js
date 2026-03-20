const {test:base,expect} = require('@playwright/test');
const {LoginPage} = require('@pages/login.page');
const {ProductPage} = require('@pages/product.page');

const test = base.extend({
  //custom page objects
  loginPage: async ({page},use) => {
  await use(new LoginPage(page));
  },
  productPage: async ({page},use) => {
    await use(new ProductPage(page));
  },
  
});
module.exports = {test,expect};

