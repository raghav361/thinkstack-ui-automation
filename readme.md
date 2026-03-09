## Thinkstack UI Automation Framework

A scalable **Playwright + TypeScript** UI automation framework built to validate critical workflows of a SaaS web application, with a strong focus on **stability**, **maintainability**, and **CI readiness**.

---

### What This Project Demonstrates

This project showcases how a real-world UI automation framework can be structured and maintained using modern testing practices.

#### Key highlights

- Playwright-based automation framework using **Page Object Model (POM)**.
- Optimized authentication using **Playwright Storage State**.
- Centralized **environment configuration** for **Dev** and **Prod**.
- Clean **route management** for navigation stability
- Test **tagging strategy** for flexible test execution.
- **CI integration** with **GitHub Actions**.
- Automatic **debug artifacts (trace, video, screenshots)** on failures.
- Structured **logging** and **utilities** for easier debugging.

---

### Architecture Overview

```
tests → Page Objects → Playwright → Browser
```

The framework separates responsibilities clearly:
| Layer | Responsibility |
| ------- | ----------------------------------------------------- |
| tests | Business-level test scenarios |
| pages | Page Object abstractions |
| utils | Shared helpers, routes, logging, environment handling |
| env | Environment configuration (Dev / Prod) |
| .github | CI workflow configuration |

---

### Project Structure

```
env/
  dev.env
  prod.env

pages/
  LoginPage.ts

tests/
  auth/
  product/
  setup/
  smoke/

config/
  env.ts
  routes.ts

utils/
  logger.ts

.github/workflows/
  regression-dev.yml
```

---

### Key Design Decisions

- **Storage State Authentication** - Login is performed once during the setup phase and reused across tests to reduce execution time and flakiness.

- **Environment Configuration** - Environment variables control URLs and credentials, enabling the same test suite to run against Dev and Production.

- **Centralized Routing** - Application routes are defined in a single place to avoid hardcoded URLs and simplify navigation updates.

- **Stable Test Practices** - Tests rely on robust selectors, explicit waits, and structured utilities to improve reliability in CI.

---

### CI Integration

- Tests run automatically using GitHub Actions.

- **Key features**:
  - Automated execution on repository updates.
  - Failure artifacts (screenshots, videos, traces)
  - Consistent execution across local and CI environments.

---

### Running Tests

- Install dependencies:

```
npm install
```

- Install dependencies:

```
npx playwright install
```

- Run tests:

```
npx playwright test
```

---

### Environment-Specific Execution

- Run tests against Dev:

```
npm run dev
```

- Run tests against Production:

```
npm run prod
```
