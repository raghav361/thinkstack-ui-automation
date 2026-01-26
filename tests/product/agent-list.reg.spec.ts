import { test, expect } from '@playwright/test';

test('User reaches agent dashboard', async ({ page }) => {
  await page.goto('/my-agents');

  // Assert we are NOT on login page
  await expect(
    page.getByRole('button', { name: /sign in/i })
  ).not.toBeVisible();

  // Assert some authenticated layout element exists
  await expect(
    page.locator('header')
  ).toBeVisible();
});
