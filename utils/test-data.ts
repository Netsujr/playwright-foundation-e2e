/**
 * Test data constants for E2E tests
 * Centralized data management for maintainability
 */
export const TestData = {
  // Valid credentials for login tests
  validCredentials: {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
  },
  
  // Invalid credentials for negative testing
  invalidCredentials: {
    username: 'invaliduser',
    password: 'wrongpassword',
  },
  
  // Form validation test data
  formData: {
    valid: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    },
    invalid: {
      empty: '',
      invalidEmail: 'not-an-email',
    },
  },
  
  // Expected messages
  messages: {
    loginSuccess: 'You logged into a secure area!',
    loginError: 'Your username is invalid!',
    formSuccess: 'Form submitted successfully',
  },
} as const;
