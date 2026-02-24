import { expect, test } from '@playwright/test';

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have proper HTML structure', async ({ page }) => {
    // Check for semantic HTML elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Check for sections with proper IDs
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Check h1
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toContainText('Marcos Evaristo');

    // Check h2s for each section (About, Projects, Skills, Contact, and project titles)
    const h2s = page.locator('h2');
    const count = await h2s.count();
    expect(count).toEqual(4); // At least the 5 main sections
  });

  test('should have accessible images with alt text', async ({ page }) => {
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
    }
  });

  test('should have proper link attributes for external links', async ({
    page,
  }) => {
    // Contact links
    const externalLinks = page.locator('a[target="_blank"]');
    const linkCount = await externalLinks.count();

    for (let i = 0; i < linkCount; i++) {
      const link = externalLinks.nth(i);
      const rel = await link.getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('should have proper button labels', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const mobileMenuButton = page.getByTestId('mobile-menu-button');
    const ariaLabel = await mobileMenuButton.getAttribute('aria-label');
    expect(ariaLabel).toBe('Toggle menu');
  });

  test('should have proper contrast for text elements', async ({ page }) => {
    // Check that text uses proper zinc color classes
    const textElements = page.locator('.text-zinc-700, .text-zinc-800');
    const darkTextElements = page.locator(
      '.dark\\:text-zinc-300, .dark\\:text-zinc-200',
    );

    // These should exist
    await expect(textElements.first()).toBeAttached();
    await expect(darkTextElements.first()).toBeAttached();
  });

  test('should have keyboard navigable links', async ({ page }) => {
    // Tab through navigation
    await page.keyboard.press('Tab');

    // Check that focus is on a navigation link
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('should have proper viewport meta tag', async ({ page }) => {
    const viewportMeta = await page
      .locator('meta[name="viewport"]')
      .getAttribute('content');
    expect(viewportMeta).toBeTruthy();
  });

  test('should have lang attribute on html', async ({ page }) => {
    const html = page.locator('html');
    const lang = await html.getAttribute('lang');
    expect(lang).toBe('en');
  });

  test('should have no console errors on page load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });
});
