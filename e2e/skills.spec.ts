import { expect, test } from '@playwright/test';

test.describe('Skills Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('skills-section').scrollIntoViewIfNeeded();
  });

  test('should display skills section with title', async ({ page }) => {
    const skillsSection = page.getByTestId('skills-section');
    await expect(skillsSection).toBeVisible();

    const title = page.getByTestId('skills-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Skills & Technologies');
  });

  test('should display all three skill categories', async ({ page }) => {
    await expect(page.getByTestId('skill-category-frontend')).toBeVisible();
    await expect(page.getByTestId('skill-category-backend')).toBeVisible();
    await expect(
      page.getByTestId('skill-category-tools & others'),
    ).toBeVisible();
  });

  test('should display category titles', async ({ page }) => {
    await expect(page.getByTestId('skill-category-title-frontend')).toHaveText(
      'Frontend',
    );
    await expect(page.getByTestId('skill-category-title-backend')).toHaveText(
      'Backend',
    );
    await expect(
      page.getByTestId('skill-category-title-tools & others'),
    ).toHaveText('Tools & Others');
  });

  test('should display Frontend skills', async ({ page }) => {
    // Check for specific frontend skills using test IDs
    await expect(page.getByTestId('skill-frontend-0')).toBeVisible(); // Angular
    await expect(page.getByTestId('skill-frontend-0')).toContainText('Angular');
    await expect(page.getByTestId('skill-frontend-1')).toContainText(
      'React.js',
    );
    await expect(page.getByTestId('skill-frontend-2')).toContainText('Next.js');
    await expect(page.getByTestId('skill-frontend-3')).toContainText('Vue.js');
    await expect(page.getByTestId('skill-frontend-4')).toContainText(
      'JavaScript',
    );
    await expect(page.getByTestId('skill-frontend-5')).toContainText(
      'TypeScript',
    );
    await expect(page.getByTestId('skill-frontend-6')).toContainText(
      'TailwindCSS',
    );
    await expect(page.getByTestId('skill-frontend-7')).toContainText(
      'HTML/CSS',
    );
  });

  test('should display Backend skills', async ({ page }) => {
    // Check for backend skills using test IDs
    await expect(page.getByTestId('skill-backend-0')).toBeVisible();
    await expect(page.getByTestId('skill-backend-0')).toContainText('Node.js');
    await expect(page.getByTestId('skill-backend-1')).toContainText('Express');
    await expect(page.getByTestId('skill-backend-2')).toContainText('Python');
    await expect(page.getByTestId('skill-backend-3')).toContainText(
      'PostgreSQL',
    );
    await expect(page.getByTestId('skill-backend-4')).toContainText('MongoDB');
    await expect(page.getByTestId('skill-backend-5')).toContainText(
      'REST APIs',
    );
  });

  test('should display Tools & Others skills', async ({ page }) => {
    // Check for tools skills using test IDs
    await expect(page.getByTestId('skill-tools & others-0')).toBeVisible();
    await expect(page.getByTestId('skill-tools & others-0')).toContainText(
      'Git',
    );
    await expect(page.getByTestId('skill-tools & others-1')).toContainText(
      'Docker',
    );
    await expect(page.getByTestId('skill-tools & others-2')).toContainText(
      'Bun',
    );
    await expect(page.getByTestId('skill-tools & others-3')).toContainText(
      'NPM',
    );
    await expect(page.getByTestId('skill-tools & others-4')).toContainText(
      'Vercel',
    );
    await expect(page.getByTestId('skill-tools & others-5')).toContainText(
      'CI/CD',
    );
  });

  test('should have bullet points for each skill', async ({ page }) => {
    const firstSkill = page.getByTestId('skill-frontend-0');

    // Check that there's a bullet point (blue circle)
    const bulletPoint = firstSkill.locator('span.bg-blue-600');
    await expect(bulletPoint).toBeVisible();
  });

  test('should have accessible text colors', async ({ page }) => {
    const skill = page.getByTestId('skill-frontend-0');
    const classList = await skill.getAttribute('class');

    expect(classList).toContain('text-zinc-700');
    expect(classList).toContain('dark:text-zinc-300');
  });

  test('should have proper card styling', async ({ page }) => {
    const category = page.getByTestId('skill-category-frontend');
    const classList = await category.getAttribute('class');

    expect(classList).toContain('bg-white');
    expect(classList).toContain('dark:bg-zinc-900');
    expect(classList).toContain('border');
    expect(classList).toContain('rounded-lg');
  });

  test('should have proper background styling', async ({ page }) => {
    const skillsSection = page.getByTestId('skills-section');
    const classList = await skillsSection.getAttribute('class');

    expect(classList).toContain('bg-zinc-50');
    expect(classList).toContain('dark:bg-zinc-900/50');
  });

  test('should display in grid layout on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    // All three categories should be visible side by side
    const frontend = page.getByTestId('skill-category-frontend');
    const backend = page.getByTestId('skill-category-backend');
    const tools = page.getByTestId('skill-category-tools & others');

    await expect(frontend).toBeVisible();
    await expect(backend).toBeVisible();
    await expect(tools).toBeVisible();
  });

  test('should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    await page.getByTestId('skills-section').scrollIntoViewIfNeeded();

    await expect(page.getByTestId('skill-category-frontend')).toBeVisible();
    await expect(page.getByTestId('skill-category-backend')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.getByTestId('skills-section').scrollIntoViewIfNeeded();

    await expect(page.getByTestId('skills-title')).toBeVisible();
    await expect(page.getByTestId('skill-category-frontend')).toBeVisible();
  });

  test('should count correct number of skills in each category', async ({
    page,
  }) => {
    // Frontend should have 8 skills
    const frontendSkills = page.locator('[data-testid^="skill-frontend-"]');
    await expect(frontendSkills).toHaveCount(8);

    // Backend should have 6 skills
    const backendSkills = page.locator('[data-testid^="skill-backend-"]');
    await expect(backendSkills).toHaveCount(6);

    // Tools & Others should have 6 skills
    const toolsSkills = page.locator('[data-testid^="skill-tools & others-"]');
    await expect(toolsSkills).toHaveCount(6);
  });
});
