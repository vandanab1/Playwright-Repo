import { test, expect } from '@fixtures/myFixtures';
import loginData from '@data/loginData.json' assert { type: 'json' };

test('Validation product', async({loginPage,productPage})=>{
const validUser = loginData.find(u => u.type === 'valid');
await loginPage.goto();
await loginPage.login(validUser.username, validUser.password);
await expect(productPage.getProduct()).toHaveCount(6);
await expect(productPage.options).toHaveCount(4);
await productPage.dropdown.selectOption({label:'Name (A to Z)'});
});