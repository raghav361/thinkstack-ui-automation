import { test, expect } from '@playwright/test';
import { env } from '../../utils/env';

test('Homepage loads', async ({ page }) => {
  await page.goto(env.baseURL);
  await expect(page).toHaveTitle(/Thinkstack/i);
});
