import { expect, test } from '@playwright/test';

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  });

  test('should display footer', async ({ page }) => {
    const footer = page.getByTestId('footer');
    await expect(footer).toBeVisible();
  });

  test('should display copyright with current year', async ({ page }) => {
    const currentYear = new Date().getFullYear();
    const copyright = page.getByTestId('footer-copyright');

    await expect(copyright).toBeVisible();
    await expect(copyright).toContainText(`© ${currentYear} Marcos Evaristo`);
    await expect(copyright).toContainText('All rights reserved');
  });

  test('should display tech stack information', async ({ page }) => {
    const techStack = page.getByTestId('footer-tech-stack');
    await expect(techStack).toBeVisible();
    await expect(techStack).toContainText(
      'Built with Next.js 16, TypeScript, and Tailwind CSS',
    );
  });

  test('should have proper border styling', async ({ page }) => {
    const footer = page.getByTestId('footer');
    const classList = await footer.getAttribute('class');

    expect(classList).toContain('border-t');
    expect(classList).toContain('border-zinc-200');
    expect(classList).toContain('dark:border-zinc-800');
  });

  test('should have proper text colors', async ({ page }) => {
    const footer = page.getByTestId('footer');
    const textContainer = footer.locator('.text-center').first();
    const classList = await textContainer.getAttribute('class');

    expect(classList).toContain('text-zinc-700');
    expect(classList).toContain('dark:text-zinc-300');
  });

  test('should be visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.getByTestId('footer');
    await expect(footer).toBeVisible();
  });

  test('should have centered text', async ({ page }) => {
    const footer = page.getByTestId('footer');
    const textContainer = footer.locator('.text-center').first();
    const classList = await textContainer.getAttribute('class');

    expect(classList).toContain('text-center');
  });
});
