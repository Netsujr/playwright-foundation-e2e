import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for Form Page
 * Encapsulates selectors and actions for form validation testing
 */
export class FormPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessages: Locator;

  constructor(page: Page) {
    this.page = page;
    // Selectors for formy-project.herokuapp.com/form
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.emailInput = page.locator('#email');
    this.submitButton = page.locator('a.btn.btn-lg.btn-primary');
    this.successMessage = page.locator('.alert.alert-success');
    this.errorMessages = page.locator('.alert-danger, .invalid-feedback, [class*="error"]');
  }

  /**
   * Navigate to a form page
   * Using a simple demo form page for demonstration
   */
  async goto(): Promise<void> {
    // Using a public demo form page suitable for validation testing
    await this.page.goto('https://formy-project.herokuapp.com/form');
  }

  /**
   * Fill form fields with provided data
   * @param firstName - First name value
   * @param lastName - Last name value
   * @param email - Email value
   */
  async fillForm(firstName: string, lastName: string, email: string): Promise<void> {
    if (firstName) await this.firstNameInput.fill(firstName);
    if (lastName) await this.lastNameInput.fill(lastName);
    if (email) await this.emailInput.fill(email);
  }

  /**
   * Submit the form
   */
  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Submit empty form (for validation testing)
   */
  async submitEmptyForm(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Get all error messages
   * @returns Array of error message texts
   */
  async getErrorMessages(): Promise<string[]> {
    const count = await this.errorMessages.count();
    const messages: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await this.errorMessages.nth(i).textContent();
      if (text) messages.push(text.trim());
    }
    return messages;
  }

  /**
   * Get success message text
   * @returns Success message text
   */
  async getSuccessMessage(): Promise<string> {
    return await this.successMessage.textContent() || '';
  }

  /**
   * Check if any error messages are visible
   * @returns True if error messages are visible
   */
  async hasErrorMessages(): Promise<boolean> {
    const count = await this.errorMessages.count();
    return count > 0;
  }

  /**
   * Check if success message is visible
   * @returns True if success message is visible
   */
  async isSuccessMessageVisible(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }
}
