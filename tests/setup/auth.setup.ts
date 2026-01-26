import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../utils/env';

setup('authenticate', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto(env.baseURL);
  await login.goto();
  await login.login(env.user, env.password);

  await expect(
    page.getByRole('heading', { name: /Create new agent/i })
  ).toBeVisible();

  await page.context().storageState({ path: 'storageState.json' });
});
