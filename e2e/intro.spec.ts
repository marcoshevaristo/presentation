import { expect, test } from '@playwright/test';

test.describe('Intro Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display intro section with all content', async ({ page }) => {
    const introSection = page.getByTestId('intro-section');
    await expect(introSection).toBeVisible();

    // Wait for animations
    await page.waitForTimeout(1000);

    // Check title
    const title = page.getByTestId('intro-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText("Hi, I'm Marcos Evaristo");

    // Check subtitle
    const subtitle = page.getByTestId('intro-subtitle');
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toContainText('Full Stack Developer');
    await expect(subtitle).toContainText('Frontend specialist');
    await expect(subtitle).toContainText('Problem Solver');

    // Check description
    const description = page.getByTestId('intro-description');
    await expect(description).toBeVisible();
    await expect(description).toContainText('web applications');
  });

  test('should display call-to-action buttons', async ({ page }) => {
    const viewWorkButton = page.getByTestId('view-work-button');
    const getInTouchButton = page.getByTestId('get-in-touch-button');

    await expect(viewWorkButton).toBeVisible();
    await expect(viewWorkButton).toHaveText('View My Work');
    await expect(viewWorkButton).toHaveAttribute('href', '#projects');

    await expect(getInTouchButton).toBeVisible();
    await expect(getInTouchButton).toHaveText('Get In Touch');
    await expect(getInTouchButton).toHaveAttribute('href', '#contact');
  });

  test('should navigate to projects when clicking View My Work', async ({
    page,
  }) => {
    await page.getByTestId('view-work-button').click();
    await page.waitForTimeout(500);

    const projectsSection = page.getByTestId('projects-section');
    await expect(projectsSection).toBeInViewport();
  });

  test('should navigate to contact when clicking Get In Touch', async ({
    page,
  }) => {
    await page.getByTestId('get-in-touch-button').click();
    await page.waitForTimeout(500);

    const contactSection = page.getByTestId('contact-section');
    await expect(contactSection).toBeInViewport();
  });

  test('should display profile photo', async ({ page }) => {
    const profilePhoto = page.getByTestId('profile-photo');
    await expect(profilePhoto).toBeVisible();

    // Check if image is loaded
    const image = profilePhoto.locator('img');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('alt', 'Marcos Evaristo');
  });

  test('should have animation classes applied', async ({ page }) => {
    // Wait for animations to complete
    await page.waitForTimeout(1000);

    const title = page.getByTestId('intro-title');
    await expect(title).toBeVisible();

    // Check that the title is no longer at opacity-0
    const opacity = await title.evaluate((el) => {
      if (!el.parentElement) return '0';
      return window.getComputedStyle(el.parentElement).opacity;
    });
    expect(parseFloat(opacity)).toBeGreaterThan(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await expect(page.getByTestId('intro-title')).toBeVisible();
    await expect(page.getByTestId('intro-subtitle')).toBeVisible();
    await expect(page.getByTestId('view-work-button')).toBeVisible();
    await expect(page.getByTestId('get-in-touch-button')).toBeVisible();
  });
});
