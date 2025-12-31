import { test, expect } from '@playwright/test';

test('Homepage loads', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://app.dev.thinkstack.ai');
  await expect(page).toHaveTitle(/Thinkstack/i);
});
