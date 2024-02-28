import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-web-gqfee634ovzzi.azurewebsites.net/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByText('demouser@microsoft.com').click({
    button: 'right'
  });
  await page.getByText('demouser@microsoft.com').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('demouser@microsoft.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Pass@word1');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] Prism White' }).getByRole('button').click();
  await page.getByRole('link', { name: '[ Checkout ]' }).click();
  await page.getByRole('button', { name: '[ Pay Now ]' }).click();
  await expect(page.getByRole('heading')).toContainText('Thanks for your Order!');
  await page.getByRole('link', { name: 'Log Out' }).click();
});