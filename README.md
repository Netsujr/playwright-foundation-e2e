# Playwright Foundation E2E

A professional Playwright testing repository demonstrating foundational knowledge of E2E automation for modern frontend applications.

## 📋 Project Description

This repository showcases a well-structured Playwright test automation framework using TypeScript, implementing best practices including:

- **Page Object Model (POM)** pattern for maintainable test code
- **TypeScript** for type safety and better developer experience
- **Structured test organization** with clear separation of concerns
- **Comprehensive test coverage** for login and form validation scenarios
- **Professional configuration** with retries, reporting, and browser support

## 🏗️ Folder Structure

```
playwright-foundation-e2e/
├── tests/                    # Test specifications
│   ├── login.spec.ts        # Login test scenarios
│   └── form-validation.spec.ts  # Form validation tests
├── pages/                    # Page Object Model classes
│   ├── LoginPage.ts         # Login page actions and selectors
│   └── FormPage.ts          # Form page actions and selectors
├── utils/                    # Utility files
│   └── test-data.ts         # Centralized test data
├── playwright.config.ts      # Playwright configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

### Structure Explanation

- **`/tests`**: Contains all test specification files. Each file groups related test scenarios using `test.describe()` blocks.
- **`/pages`**: Contains Page Object Model classes that encapsulate page-specific selectors and actions, promoting code reusability and maintainability.
- **`/utils`**: Contains utility files like test data constants, helper functions, and shared configurations.
- **`playwright.config.ts`**: Central configuration file for Playwright settings, browser selection, and test execution parameters.

## 🚀 Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd playwright-foundation-e2e
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install chromium
   ```

## 🧪 Running Tests

### Run all tests (headless mode)
```bash
npm test
```
or
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```
or
```bash
npx playwright test --headed
```

### Run tests with UI mode (interactive)
```bash
npm run test:ui
```
or
```bash
npx playwright test --ui
```

### Run tests in debug mode
```bash
npm run test:debug
```
or
```bash
npx playwright test --debug
```

### View test report
```bash
npm run test:report
```
or
```bash
npx playwright show-report
```

## 📊 Example Test Output

When you run the tests, you'll see output similar to:

```
Running 6 tests using 1 worker

  ✓ tests/login.spec.ts:10:3 › Login Tests › should successfully login with valid credentials (2.1s)
  ✓ tests/login.spec.ts:18:3 › Login Tests › should display error message with invalid credentials (1.8s)
  ✓ tests/login.spec.ts:26:3 › Login Tests › should not allow login with empty username (1.5s)
  ✓ tests/login.spec.ts:34:3 › Login Tests › should not allow login with empty password (1.4s)
  ✓ tests/form-validation.spec.ts:10:3 › Form Validation Tests › should validate required fields when submitting empty form (1.2s)
  ✓ tests/form-validation.spec.ts:20:3 › Form Validation Tests › should successfully submit form with valid data (1.6s)
  ✓ tests/form-validation.spec.ts:35:3 › Form Validation Tests › should validate email format (1.3s)

  7 passed (11.5s)
```

### Understanding the Output

- **Test count**: Shows total number of tests executed
- **Worker count**: Indicates parallel execution (1 worker = sequential)
- **Test path**: Shows file path, line number, and test description
- **Duration**: Time taken for each test execution
- **Summary**: Total passed/failed tests and overall execution time

## 🎯 Test Scenarios

### Login Tests (`login.spec.ts`)

1. **Valid Login**: Tests successful authentication with correct credentials
2. **Invalid Login**: Verifies error handling for incorrect credentials
3. **Empty Username**: Validates form validation for missing username
4. **Empty Password**: Validates form validation for missing password

### Form Validation Tests (`form-validation.spec.ts`)

1. **Required Fields**: Tests validation when submitting empty form
2. **Valid Submission**: Verifies successful form submission with valid data
3. **Email Format**: Tests email format validation

## ⚙️ Configuration

The `playwright.config.ts` file includes:

- **Browser**: Chromium (Desktop Chrome)
- **Retries**: 1 retry on failure
- **Reporter**: HTML and list reporters enabled
- **Base URL**: https://the-internet.herokuapp.com
- **Screenshots**: Captured on failure
- **Traces**: Collected on first retry

## 🏛️ Page Object Model Pattern

This project implements the Page Object Model pattern, which provides:

- **Encapsulation**: Page-specific selectors and actions are contained within page classes
- **Reusability**: Page methods can be reused across multiple tests
- **Maintainability**: Changes to page structure only require updates in one place
- **Readability**: Tests read like user stories, focusing on "what" rather than "how"

### Example Usage

```typescript
// In a test file
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('username', 'password');
const message = await loginPage.getSuccessMessage();
```

## 🔧 Technologies Used

- **Playwright**: Modern end-to-end testing framework
- **TypeScript**: Type-safe JavaScript for better code quality
- **Node.js**: JavaScript runtime environment

## 📝 Notes

- Tests target the public demo site: https://the-internet.herokuapp.com
- All tests include proper setup in `beforeEach` hooks
- Assertions use Playwright's `expect` API for reliable test validation
- Test data is centralized in `utils/test-data.ts` for easy maintenance

## 🤝 Contributing

This is a demonstration repository. Feel free to use it as a template for your own Playwright projects.

## 📄 License

MIT
