import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../utils/env';
import { routes } from '../../utils/routes';
import { logStep } from '../../utils/logger';
import { log } from 'console';

test.describe('@auth', () => {
  test('User can login', async ({ page }) => {
    logStep('Navigate to the login page');
    await page.goto(env.baseURL);
    const login = new LoginPage(page);
    logStep('Perform login with valid credentials');
    await login.goto();
    await login.login(env.user, env.password);
    logStep('Verify that the user is redirected to the agents page');
    await expect(page).toHaveURL(routes.agents);
  });  
});
