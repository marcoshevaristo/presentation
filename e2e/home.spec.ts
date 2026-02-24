import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the home page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Marcos Evaristo/);
  });

  test('should display all main sections', async ({ page }) => {
    // Check all sections are present
    await expect(page.getByTestId('intro-section')).toBeVisible();
    await expect(page.getByTestId('about-section')).toBeVisible();
    await expect(page.getByTestId('projects-section')).toBeVisible();
    await expect(page.getByTestId('skills-section')).toBeVisible();
    await expect(page.getByTestId('contact-section')).toBeVisible();
    await expect(page.getByTestId('footer')).toBeVisible();
  });

  test('should have proper meta description', async ({ page }) => {
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute('content');
    expect(description).toContain('Full Stack Developer');
  });
});
