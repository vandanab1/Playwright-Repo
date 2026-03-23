// @ts-check
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '@pages/loginPage.js';
import { ProductPage } from '@pages/productPage.js';
import loginData from '@data/loginData.json' assert { type: 'json' };

export const test = base.extend({
  // custom fixture for page objects
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  // custom fixture for test data
  // testData: async ({}, use) => {
  //   await use(loginData);
  // }
});

export {expect };