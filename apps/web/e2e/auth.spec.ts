import { test, expect } from '@playwright/test';

test.describe('Authentication E2E', () => {
  test('should redirect to GitHub and handle login', async ({ page }) => {
    await page.goto('/');
    
    // Check for Login button
    const loginBtn = page.getByRole('button', { name: /sign in/i });
    await expect(loginBtn).toBeVisible();
    
    // Click login
    await loginBtn.click();
    
    // In E2E, we'd mock the GitHub redirect or assume it goes to /api/auth/signin
    await expect(page).toHaveURL(/.*auth\/signin/);
  });

  test('should show user profile after mock login', async ({ page }) => {
    // We use a mock session for E2E testing
    // Set a cookie or localStorage that our useAuth mock understands
    await page.addInitScript(() => {
      window.localStorage.setItem('nextauth.mock-session', 'true');
    });

    await page.goto('/dashboard');
    
    // Verify we are on dashboard
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.getByText(/welcome back/i)).toBeVisible();
  });
});
