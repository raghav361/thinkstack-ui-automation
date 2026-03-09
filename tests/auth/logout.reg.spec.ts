import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../utils/env';
import { logStep } from '../../utils/logger';

test.describe('@auth', () => {
  test('User can logout successfully', async ({ page }) => {
    const login = new LoginPage(page);
    logStep('Navigate to the application and log in');
    await page.goto(env.baseURL);
    await login.goto();
    await login.login(env.user, env.password);
    logStep('Click the user menu button');
    await page.locator("//*[@id=\"__next\"]/div/div/header/div[2]/div/button").click();
    logStep('Click the logout button');
    await page.getByRole('button', { name: /Log out/i }).click();
    logStep('Verify that the user is logged out and the sign-in button is visible');
    await expect(
      page.getByRole('button', { name: /sign in/i })
    ).toBeVisible();
  });
});
