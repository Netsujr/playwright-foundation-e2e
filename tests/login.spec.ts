import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestData } from '../utils/test-data';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should successfully login with valid credentials', async () => {
    // Arrange
    const { username, password } = TestData.validCredentials;

    // Act
    await loginPage.login(username, password);

    // Assert
    await expect(loginPage.successMessage).toBeVisible();
    const successMessage = await loginPage.getSuccessMessage();
    expect(successMessage).toContain(TestData.messages.loginSuccess);
  });

  test('should display error message with invalid credentials', async () => {
    // Arrange
    const { username, password } = TestData.invalidCredentials;

    // Act
    await loginPage.login(username, password);

    // Assert
    await expect(loginPage.errorMessage).toBeVisible();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(TestData.messages.loginError);
  });

  test('should not allow login with empty username', async () => {
    // Act
    await loginPage.login('', TestData.validCredentials.password);

    // Assert
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('should not allow login with empty password', async () => {
    // Act
    await loginPage.login(TestData.validCredentials.username, '');

    // Assert
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
