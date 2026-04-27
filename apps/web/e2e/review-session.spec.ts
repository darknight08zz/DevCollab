import { test, expect } from '@playwright/test';

test.describe('Review Session E2E', () => {
  test.beforeEach(async ({ page }) => {
    // Auth bypass
    await page.addInitScript(() => {
      window.localStorage.setItem('nextauth.mock-session', 'true');
    });
  });

  test('should open a PR and participate in a review session', async ({ page }) => {
    // 1. Navigate to a PR
    await page.goto('/dashboard/test-workspace/repo-123/prs/pr-123');

    // 2. Start Review Session
    const startBtn = page.getByRole('button', { name: /start review session/i });
    await startBtn.click();

    // 3. Verify Live Indicator
    await expect(page.getByText(/live session active/i)).toBeVisible();

    // 4. Add a comment
    const firstLine = page.locator('.diff-line').first();
    await firstLine.hover();
    await page.locator('.add-comment-btn').first().click();

    await page.getByPlaceholder(/write a comment/i).fill('E2E Test Comment');
    await page.getByRole('button', { name: /post/i }).click();

    // 5. Verify comment appears
    await expect(page.getByText('E2E Test Comment')).toBeVisible();
  });
});
