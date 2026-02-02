# Thinkstack UI Automation Framework

A scalable **Playwright + TypeScript** UI automation framework built to validate critical workflows of a SaaS web application, with a strong focus on **stability**, **maintainability**, and **CI readiness**.

---

## What This Project Shows

- Playwright-based automation framework using **Page Object Model (POM)**
- Optimized authentication using **Playwright Storage State**
- Strategies to reduce flaky tests and improve execution reliability
- CI integration with **GitHub Actions** and failure artifacts
- Real-world debugging and CI stability fixes

---

## 🏗️ Project Structure

- **tests/** → Business-level test scenarios

- **pages/** → Page Object abstractions

- **utils/** → Shared helpers and reusable logic

- **.github/** → CI workflows

---

## Flow

- Tests → Page Objects → Playwright → Browser

---

## Key Design Decisions

- **Storage State** is used to avoid repeated logins and reduce flakiness
- Robust selectors and waits are preferred over brittle shortcuts
- CI failures are analyzed and fixed at root cause level
- TypeScript configuration is kept CI-compatible

---

## CI Integration

- Tests run via **GitHub Actions**
- Screenshots and videos captured on failures
- Designed to run consistently in local and CI environments

---

## Running Tests

```
npm install

npx playwright install

npx playwright test
```
