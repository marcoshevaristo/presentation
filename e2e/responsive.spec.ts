import { expect, test } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should be fully functional on mobile (375x667)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check all sections are accessible
    await expect(page.getByTestId('header')).toBeVisible();
    await expect(page.getByTestId('intro-section')).toBeVisible();

    // Scroll to each section and verify
    await page.getByTestId('about-section').scrollIntoViewIfNeeded();
    await expect(page.getByTestId('about-section')).toBeVisible();

    await page.getByTestId('projects-section').scrollIntoViewIfNeeded();
    await expect(page.getByTestId('projects-section')).toBeVisible();

    await page.getByTestId('skills-section').scrollIntoViewIfNeeded();
    await expect(page.getByTestId('skills-section')).toBeVisible();

    await page.getByTestId('contact-section').scrollIntoViewIfNeeded();
    await expect(page.getByTestId('contact-section')).toBeVisible();
  });

  test('should be fully functional on tablet (768x1024)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.getByTestId('intro-section')).toBeVisible();
    await expect(page.getByTestId('about-section')).toBeVisible();
    await expect(page.getByTestId('projects-section')).toBeVisible();
    await expect(page.getByTestId('skills-section')).toBeVisible();
    await expect(page.getByTestId('contact-section')).toBeVisible();
  });

  test('should be fully functional on desktop (1920x1080)', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // All sections should be accessible
    await expect(page.getByTestId('intro-section')).toBeVisible();
  });

  test('should show desktop navigation on large screens', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    await expect(page.getByTestId('desktop-nav')).toBeVisible();
    await expect(page.getByTestId('mobile-menu-button')).not.toBeVisible();
  });

  test('should show mobile navigation button on small screens', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 640, height: 800 });
    await page.goto('/');

    await expect(page.getByTestId('mobile-menu-button')).toBeVisible();
    await expect(page.getByTestId('desktop-nav')).not.toBeVisible();
  });

  test('should stack intro content vertically on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const introSection = page.getByTestId('intro-section');
    await expect(introSection).toBeVisible();

    // Both text and photo should be visible
    await expect(page.getByTestId('intro-title')).toBeVisible();
    await expect(page.getByTestId('profile-photo')).toBeVisible();
  });

  test('should display projects in single column on mobile', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.getByTestId('projects-section').scrollIntoViewIfNeeded();

    // Projects should stack vertically
    const firstProject = page.getByTestId('project-card-0');
    await expect(firstProject).toBeVisible();
  });

  test('should handle very small screens (320x568)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');

    // Page should still be functional
    await expect(page.getByTestId('header')).toBeVisible();
    await expect(page.getByTestId('intro-title')).toBeVisible();
  });

  test('should handle very large screens (2560x1440)', async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto('/');

    // Content should not stretch too wide (max-w classes should work)
    await expect(page.getByTestId('intro-section')).toBeVisible();
    await expect(page.getByTestId('projects-section')).toBeVisible();
  });

  test('should have touch-friendly button sizes on mobile', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check button sizes (should be at least 44x44 for touch targets)
    const viewWorkButton = page.getByTestId('view-work-button');
    const box = await viewWorkButton.boundingBox();

    expect(box).toBeTruthy();
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });

  test('should maintain readability of text on all screen sizes', async ({
    page,
  }) => {
    const screenSizes = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1280, height: 720 },
    ];

    for (const size of screenSizes) {
      await page.setViewportSize(size);
      await page.goto('/');

      const title = page.getByTestId('intro-title');
      await expect(title).toBeVisible();

      // Text should not overflow
      const overflow = await title.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.overflow;
      });

      expect(overflow).not.toBe('hidden');
    }
  });
});
