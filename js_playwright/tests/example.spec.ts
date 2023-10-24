import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


test('test', async ({ page }) => {
  await page.goto('https://www.mydrivers.com/');
  await page.locator('.jdong11_close').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#news_content_1').getByRole('link', { name: '小米科技春晚来了！旗舰手机、手表等多款新品亮相 很惊喜' }).click();
  const page1 = await page1Promise;
  await page1.locator('#menu_2023').getByRole('link', { name: '首页' }).click();
});
