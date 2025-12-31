import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { env } from '@utils/env';

test.describe('@regression', () => {
  test('User can login', async ({ page }) => {
    await page.goto(env.baseURL);
    const login = new LoginPage(page);
    await login.goto();
    await login.login(env.user, env.password);
    await expect(page).toHaveURL("https://app.dev.thinkstack.ai/my-agents/");
  });
});
