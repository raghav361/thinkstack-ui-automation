import { Page } from '@playwright/test';
import { routes } from '../config/routes';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(routes.login);
  }

  async login(email: string, password: string) {
    await this.page.getByLabel("Email").fill(email);
    await this.page.getByPlaceholder("Enter your Password").fill(password);
    await this.page.getByRole("button", { name: 'Sign in' }).click();
  }
}
