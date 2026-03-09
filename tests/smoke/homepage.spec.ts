import { test, expect } from '@playwright/test';
import { env } from '../../utils/env';
import { logStep } from '../../utils/logger';
import { log } from 'console';

test.describe('@smoke', () => {
  test('Homepage loads', async ({ page }) => {
    logStep('Navigating to homepage');
    await page.goto(env.baseURL);
    logStep('Homepage loaded successfully');
    await expect(page).toHaveTitle(/Thinkstack/i);
  });
});
