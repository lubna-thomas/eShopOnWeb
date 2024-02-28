import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-web-gqfee634ovzzi.azurewebsites.net/');
  await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Black' }).getByRole('img').click();
  await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Black' }).getByRole('button').click();
  await page.getByRole('link', { name: '[ Checkout ]' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.getByRole('banner')).toContainText('1');
});