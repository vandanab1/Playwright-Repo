import {test,expect} from '@playwright/test';

test('Button under Shadow Dom on practice site',async({page})=>{
await page.goto('https://practice.expandtesting.com/shadowdom');
const button = page.locator('#shadow-host >>> #my-btn');
  await button.click();
console.log('shadow button clicked on practice site');
})

test('Button under Shandow Dom on learnQA site', async({page})=>{
await page.goto('https://www.learnaqa.info/shadow-dom/');
await page.locator('#create-basic-shadow').click();
await page.locator('#shadow-host-element >>> #shadow-btn').click();
console.log('shadow button clicked on learnQA site');

})