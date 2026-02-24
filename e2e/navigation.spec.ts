import { expect, test } from '@playwright/test';

test.describe('Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display header with navigation', async ({ page }) => {
    await page.waitForTimeout(500); // Wait for header to load
    await expect(page.getByTestId('header')).toBeVisible();
    await expect(page.getByTestId('logo')).toBeVisible();
  });

  test('should have all navigation links on desktop', async ({ page }) => {
    // Ensure we're on desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });

    const desktopNav = page.getByTestId('desktop-nav');
    await expect(desktopNav).toBeVisible();

    // Check all links are present
    await expect(page.getByTestId('nav-link-home')).toBeVisible();
    await expect(page.getByTestId('nav-link-about')).toBeVisible();
    await expect(page.getByTestId('nav-link-projects')).toBeVisible();
    await expect(page.getByTestId('nav-link-skills')).toBeVisible();
    await expect(page.getByTestId('nav-link-contact')).toBeVisible();
  });

  test('should navigate to sections when clicking nav links', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    // Click About link
    await page.getByTestId('nav-link-about').click();
    await page.waitForTimeout(800); // Wait for smooth scroll

    // Check if about section is in viewport
    const aboutSection = page.getByTestId('about-section');
    await expect(aboutSection).toBeInViewport();
  });

  test('should show mobile menu button on mobile viewport', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const mobileMenuButton = page.getByTestId('mobile-menu-button');
    await expect(mobileMenuButton).toBeVisible();

    // Desktop nav should be hidden
    const desktopNav = page.getByTestId('desktop-nav');
    await expect(desktopNav).not.toBeVisible();
  });

  test('should toggle mobile menu when clicking menu button', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const mobileMenuButton = page.getByTestId('mobile-menu-button');

    // Initially, mobile nav should not exist
    await expect(page.getByTestId('mobile-nav')).not.toBeVisible();

    // Click to open
    await mobileMenuButton.click();
    await expect(page.getByTestId('mobile-nav')).toBeVisible();

    // Check all mobile nav links are visible
    await expect(page.getByTestId('mobile-nav-link-home')).toBeVisible();
    await expect(page.getByTestId('mobile-nav-link-about')).toBeVisible();
    await expect(page.getByTestId('mobile-nav-link-projects')).toBeVisible();
    await expect(page.getByTestId('mobile-nav-link-skills')).toBeVisible();
    await expect(page.getByTestId('mobile-nav-link-contact')).toBeVisible();

    // Click to close
    await mobileMenuButton.click();
    await expect(page.getByTestId('mobile-nav')).not.toBeVisible();
  });

  test('should close mobile menu when clicking a nav link', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Open mobile menu
    await page.getByTestId('mobile-menu-button').click();
    await expect(page.getByTestId('mobile-nav')).toBeVisible();

    // Click a nav link
    await page.getByTestId('mobile-nav-link-about').click();

    // Menu should close
    await expect(page.getByTestId('mobile-nav')).not.toBeVisible();
  });

  test('should have proper aria-label on mobile menu button', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const mobileMenuButton = page.getByTestId('mobile-menu-button');
    await expect(mobileMenuButton).toHaveAttribute('aria-label', 'Toggle menu');
  });
});
