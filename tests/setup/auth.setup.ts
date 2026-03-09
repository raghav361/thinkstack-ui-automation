import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../config/env';
import { logStep } from '../../utils/logger';
import { log } from 'console';

setup('authenticate', async ({ page }) => {
  const login = new LoginPage(page);
  logStep('Authenticating user');
  await page.goto(env.baseURL);
  await login.goto();
  await login.login(env.user, env.password);
  logStep('User authenticated successfully');
  await expect(
    page.getByRole('heading', { name: /Create new agent/i })
  ).toBeVisible();
  logStep('Saving storage state to storageState.json');
  await page.context().storageState({ path: 'storageState.json' });
});
