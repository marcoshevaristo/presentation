import { expect, test } from '@playwright/test';

test.describe('About Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to about section
    await page.getByTestId('about-section').scrollIntoViewIfNeeded();
  });

  test('should display about section', async ({ page }) => {
    const aboutSection = page.getByTestId('about-section');
    await expect(aboutSection).toBeVisible();

    const title = page.getByTestId('about-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('About Me');
  });

  test('should display about content paragraphs', async ({ page }) => {
    // Check for paragraph content using test IDs
    await expect(page.getByTestId('about-paragraph-1')).toBeVisible();
    await expect(page.getByTestId('about-paragraph-1')).toContainText(
      'passionate developer',
    );

    await expect(page.getByTestId('about-paragraph-2')).toBeVisible();
    await expect(page.getByTestId('about-paragraph-2')).toContainText(
      'journey in software development',
    );

    await expect(page.getByTestId('about-paragraph-3')).toBeVisible();
    await expect(page.getByTestId('about-paragraph-3')).toContainText(
      'continuous improvement',
    );
  });

  test('should calculate years of experience correctly', async ({ page }) => {
    const currentYear = new Date().getFullYear();
    const expectedYears = currentYear - 2016;

    const paragraph2 = page.getByTestId('about-paragraph-2');
    await expect(paragraph2).toContainText(`${expectedYears} years ago`);
  });

  test('should have proper background styling', async ({ page }) => {
    const aboutSection = page.getByTestId('about-section');
    const classList = await aboutSection.getAttribute('class');

    expect(classList).toContain('bg-zinc-50');
    expect(classList).toContain('dark:bg-zinc-900/50');
  });

  test('should be visible and readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const aboutSection = page.getByTestId('about-section');
    await aboutSection.scrollIntoViewIfNeeded();

    await expect(page.getByTestId('about-title')).toBeVisible();
    await expect(page.getByTestId('about-paragraph-1')).toBeVisible();
  });
});
