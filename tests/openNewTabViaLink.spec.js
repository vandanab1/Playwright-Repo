import { test, expect } from '@fixtures/myFixtures';
import loginData from '@data/loginData.json' assert { type: 'json' }; 

test('Open New Tab via Link', async({page, loginPage})=>{

  const validUser = loginData.find(u => u.type === 'valid')
  await loginPage.goto('https://www.saucedemo.com');
  await loginPage.login(validUser.username,validUser.password);
  //await page.locator('.social_twitter').click();
  const [newPage] = await Promise.all([
  page.context().waitForEvent('page'),
  page.locator('.social_twitter').click()
  ]);
   await newPage.waitForLoadState();
  console.log(await newPage.url());
 })