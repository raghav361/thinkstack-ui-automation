import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../utils/env';

test.describe('@regression', () => {
  test('User can open an agent detail page', async ({ page }) => {
    const login = new LoginPage(page);

    await page.goto(env.baseURL);
    await login.goto();
    await login.login(env.user, env.password);

    // Ensure agent list is visible
    await expect(
      page.getByRole('heading', { name: /Create new agent/i })
    ).toBeVisible();

    // Open the first agent
    await page.getByRole('heading', {}).first().click();

    // Verify agent detail page loaded (read-only assertion)
    await expect(
      page.getByRole('heading', { name: /Analytics/i })
    ).toBeVisible();

  });
});
