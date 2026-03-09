import { test, expect } from '@playwright/test';
import { routes } from '../../utils/routes';
import { logStep } from '../../utils/logger';
import { log } from 'console';

test.describe('@product', () => {
  test('User reaches agent dashboard', async ({ page }) => {
    logStep('Navigate to the agents page');
    await page.goto(routes.agents);
    // Assert we are NOT on login page
    logStep('Assert user is authenticated by checking for absence of sign in button');  
    await expect(
      page.getByRole('button', { name: /sign in/i })
    ).not.toBeVisible();
    // Assert some authenticated layout element exists
    logStep('Assert user is on agent dashboard by checking for header visibility');
    await expect(
      page.locator('header')
    ).toBeVisible();
  });
});
