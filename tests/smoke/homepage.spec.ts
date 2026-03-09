import { test, expect } from '@playwright/test';
import { env } from '../../utils/env';

test.describe('@smoke', () => {
  test('Homepage loads', async ({ page }) => {
    await page.goto(env.baseURL);
    await expect(page).toHaveTitle(/Thinkstack/i);
  });
});
