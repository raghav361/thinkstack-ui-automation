import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../config/env';
import { logStep } from '../../utils/logger';
import { log } from 'console';

test.describe('@auth', () => {
  test('User sees error on invalid login', async ({ page }) => {
    logStep('Navigate to the login page');
    const login = new LoginPage(page);
    await page.goto(env.baseURL);
    await login.goto();
    logStep('Perform login with invalid credentials');
    await login.login(env.user, 'wrong-password');
    logStep('Verify that an error message is displayed');
    await expect(page.getByText("Incorrect username or password.")).toBeVisible();
  });
});
