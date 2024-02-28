import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://app-web-gqfee634ovzzi.azurewebsites.net/Basket');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('50');
  await page.locator('article').filter({ hasText: '$' }).nth(1).click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: 'eShop On Web' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.getByRole('banner')).toContainText('1');
});