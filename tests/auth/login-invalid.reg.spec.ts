import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../utils/env';

test('User sees error on invalid login', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto(env.baseURL);
  await login.goto();

  await login.login(env.user, 'wrong-password');

  await expect(page.getByText("Incorrect username or password.")).toBeVisible();
});