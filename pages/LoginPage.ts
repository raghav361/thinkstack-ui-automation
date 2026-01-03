import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://app.dev.thinkstack.ai/login/");
  }

  async login(email: string, password: string) {
    await this.page.getByLabel("Email").fill(email);
    await this.page.getByPlaceholder("Enter your Password").fill(password);
    await this.page.getByRole("button", { name: 'Sign in' }).click();
  }
}
