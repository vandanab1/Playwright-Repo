import {test,expect} from '@playwright/test';

test('Test1: Button clicked under iFrame', async({page})=>{
await page.goto('https://www.learnaqa.info/iframe-windows/');
const frameElement = page.frameLocator('#basic-iframe');
await frameElement.locator('#iframe-button').click();
await page.locator('#send-iframe-message').click();

 })

test('Test2: Form filled under iFrame', async({page})=>{
await page.goto('https://www.learnaqa.info/iframe-windows/');
await page.getByRole('button', { name: 'Form' }).click();
const frameElement = page.frameLocator('#basic-iframe');
await frameElement.locator('#iframe-name').fill('test');
await frameElement.locator('#iframe-email').fill('test@qa.com');
await frameElement.locator('#iframe-comment').fill('Testing iFrame form.');
await frameElement.locator('#iframe-submit').click();

 })

// test('Test3: Validate Nested iFrame Container', async({page})=>{
// await page.goto('https://www.learnaqa.info/iframe-windows/');
// await page.getByRole('button', { name: 'Nested' }).click();
// const outerFrame = page.frameLocator('#basic-iframe');
// await outerFrame.locator('#nested-button').click();
// const innerframe = outerFrame.frameLocator('#inner-iframe');
// await innerframe.locator('#iframe-button').click();
// console.log('Nested iframe button clicked successfully');

//  })