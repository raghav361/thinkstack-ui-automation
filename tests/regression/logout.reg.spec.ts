import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../utils/env';

test.describe('@regression', () => {
  test('User can logout successfully', async ({ page }) => {
    const login = new LoginPage(page);

    await page.goto(env.baseURL);
    await login.goto();
    await login.login(env.user, env.password);

    await page.locator("//*[@id=\"__next\"]/div/div/header/div[2]/div/button").click();
    await page.getByRole('button', { name: /Log out/i }).click();

    await expect(
      page.getByRole('button', { name: /sign in/i })
    ).toBeVisible();
  });
});
