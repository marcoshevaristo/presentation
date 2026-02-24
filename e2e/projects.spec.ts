import { expect, test } from '@playwright/test';

test.describe('Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('projects-section').scrollIntoViewIfNeeded();
  });

  test('should display projects section with title', async ({ page }) => {
    const projectsSection = page.getByTestId('projects-section');
    await expect(projectsSection).toBeVisible();

    const title = page.getByTestId('projects-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('My Projects');
  });

  test('should display introduction paragraph', async ({ page }) => {
    const intro = page.getByTestId('projects-intro');
    await expect(intro).toBeVisible();
    await expect(intro).toContainText('Most of my projects up to this point');
    await expect(intro).toContainText('corporate projects');
  });

  test('should display all project cards', async ({ page }) => {
    // There should be 8 projects based on the data
    for (let i = 0; i < 8; i++) {
      await expect(page.getByTestId(`project-card-${i}`)).toBeVisible();
    }
  });

  test('should display project titles', async ({ page }) => {
    // Check some specific project titles
    await expect(page.getByTestId('project-title-0')).toContainText(
      'Equipment fleet manager',
    );
    await expect(page.getByTestId('project-title-1')).toContainText(
      'SaaS platform',
    );
  });

  test('should display project technologies with correct styling', async ({
    page,
  }) => {
    const firstProjectCard = page.getByTestId('project-card-0');
    await firstProjectCard.scrollIntoViewIfNeeded();

    // Check technology badges using test IDs
    await expect(page.getByTestId('project-0-tech-0')).toBeVisible();
    await expect(page.getByTestId('project-0-tech-0')).toContainText('Angular');
    await expect(page.getByTestId('project-0-tech-3')).toContainText('Python');
    await expect(page.getByTestId('project-0-tech-4')).toContainText(
      'Postgres',
    );

    // Check styling classes for accessibility
    const techBadge = page.getByTestId('project-0-tech-0');
    await expect(techBadge).toBeVisible();
    const classList = await techBadge.getAttribute('class');
    expect(classList).toContain('bg-blue-100');
    expect(classList).toContain('text-blue-800');
    expect(classList).toContain('dark:bg-blue-900/50');
    expect(classList).toContain('dark:text-blue-200');
  });

  test('should display project statistics when available', async ({ page }) => {
    // First project has revenue
    const project0Stats = page.getByTestId('project-0-stats');
    await expect(project0Stats).toBeVisible();

    const revenue = page.getByTestId('project-0-revenue');
    await expect(revenue).toBeVisible();
    await expect(revenue).toContainText('$');

    // Second project has both revenue and users
    const project1Revenue = page.getByTestId('project-1-revenue');
    const project1Users = page.getByTestId('project-1-users');

    await expect(project1Revenue).toBeVisible();
    await expect(project1Users).toBeVisible();
    await expect(project1Users).toContainText('users');
  });

  test('should format revenue numbers correctly', async ({ page }) => {
    const revenue = page.getByTestId('project-0-revenue');
    await expect(revenue).toBeVisible();

    // Should use compact notation (like $1.2B)
    const text = await revenue.textContent();
    expect(text).toMatch(/\$[\d.]+[BMK]/);
  });

  test('should display footer note about revenue', async ({ page }) => {
    const footerNote = page.getByTestId('projects-footer-note');
    await expect(footerNote).toBeVisible();
    await expect(footerNote).toContainText(
      'Company annual revenue in their respective currency',
    );
  });

  test('should have hover effects on project cards', async ({ page }) => {
    const projectCard = page.getByTestId('project-card-0');

    // Check that hover class is present
    const classList = await projectCard.getAttribute('class');
    expect(classList).toContain('hover:shadow-lg');
  });

  test('should display project descriptions', async ({ page }) => {
    const firstDescription = page.getByTestId('project-0-description');
    await expect(firstDescription).toBeVisible();
    await expect(firstDescription).toContainText(
      'SaaS application for managing a fleet',
    );
  });

  test('should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    // Projects should still be visible
    await expect(page.getByTestId('project-card-0')).toBeVisible();
    await expect(page.getByTestId('project-card-1')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.getByTestId('projects-section').scrollIntoViewIfNeeded();

    // Check first few projects are visible when scrolling
    await expect(page.getByTestId('project-card-0')).toBeVisible();
    await expect(page.getByTestId('projects-title')).toBeVisible();
  });

  test('should display all 8 projects', async ({ page }) => {
    const projectCards = page.locator('[data-testid^="project-card-"]');
    await expect(projectCards).toHaveCount(8);
  });

  test('should have proper card layout with flex column', async ({ page }) => {
    const projectCard = page.getByTestId('project-card-0');
    const classList = await projectCard.getAttribute('class');

    expect(classList).toContain('flex');
    expect(classList).toContain('flex-col');
  });
});
