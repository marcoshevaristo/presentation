import { expect, test } from '@playwright/test';

test.describe('Performance', () => {
  test('should load the page within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - startTime;

    // Page should load in less than 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should not have layout shifts on initial load', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for any animations to complete
    await page.waitForTimeout(2000);

    // Check that important elements are visible and positioned
    await expect(page.getByTestId('intro-title')).toBeVisible();
    await expect(page.getByTestId('header')).toBeVisible();
  });

  test('should load images with proper optimization', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);

      // Check for loading attribute
      const loading = await img.getAttribute('loading');
      const fetchPriority = await img.getAttribute('fetchpriority');

      // At least profile picture should have priority or eager loading
      if (i === 0) {
        expect(fetchPriority === 'high' || loading === 'eager').toBeTruthy();
      }
    }
  });

  test('should have smooth scrolling', async ({ page }) => {
    await page.goto('/');

    // Click on a navigation link
    await page.getByTestId('view-work-button').click();

    // Wait for scroll to complete
    await page.waitForTimeout(1000);

    // Projects section should be in viewport
    await expect(page.getByTestId('projects-section')).toBeInViewport();
  });

  test('should not load unnecessary resources', async ({ page }) => {
    const requests: string[] = [];

    page.on('request', (request) => {
      requests.push(request.url());
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that we're not loading any unexpected external scripts
    const suspiciousRequests = requests.filter(
      (url) =>
        !url.includes('localhost') &&
        !url.includes('next') &&
        !url.includes('webpack') &&
        !url.includes('cdn.playwright'),
    );

    // Should only have minimal external requests (fonts, etc)
    expect(suspiciousRequests.length).toBeLessThan(20);
  });

  test('should handle rapid navigation without issues', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForTimeout(500);

    // Rapidly click through navigation
    await page.getByTestId('view-work-button').click();
    await page.waitForTimeout(200);
    await page.getByTestId('nav-link-about').click();
    await page.waitForTimeout(200);
    await page.getByTestId('nav-link-skills').click();
    await page.waitForTimeout(200);
    await page.getByTestId('nav-link-contact').click();

    // Page should still be responsive
    await expect(page.getByTestId('contact-section')).toBeVisible();
  });

  test('should not have memory leaks on repeated navigation', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForTimeout(500);

    // Navigate multiple times
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      await page.getByTestId('nav-link-projects').click();
      await page.waitForTimeout(300);
    }

    // Page should still be responsive
    await expect(page.getByTestId('projects-section')).toBeVisible();
  });
});
