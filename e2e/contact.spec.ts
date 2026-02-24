import { expect, test } from '@playwright/test';

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('contact-section').scrollIntoViewIfNeeded();
  });

  test('should display contact section with title', async ({ page }) => {
    const contactSection = page.getByTestId('contact-section');
    await expect(contactSection).toBeVisible();

    const title = page.getByTestId('contact-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Get In Touch');
  });

  test('should display contact description', async ({ page }) => {
    const description = page.getByTestId('contact-description');
    await expect(description).toBeVisible();
    await expect(description).toContainText(
      'Have a project in mind or want to collaborate',
    );
    await expect(description).toContainText('Feel free to reach out');
  });

  test('should display all contact links', async ({ page }) => {
    await expect(page.getByTestId('contact-email')).toBeVisible();
    await expect(page.getByTestId('contact-linkedin')).toBeVisible();
    await expect(page.getByTestId('contact-whatsapp')).toBeVisible();
  });

  test('should have correct email link', async ({ page }) => {
    const emailLink = page.getByTestId('contact-email');
    await expect(emailLink).toHaveAttribute(
      'href',
      'mailto:marcosh.evaristo15@gmail.com',
    );
    await expect(emailLink).toHaveAttribute('target', '_blank');
    await expect(emailLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should have correct LinkedIn link', async ({ page }) => {
    const linkedinLink = page.getByTestId('contact-linkedin');
    await expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/marcos-evaristo-a2497393/',
    );
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should have correct WhatsApp link', async ({ page }) => {
    const whatsappLink = page.getByTestId('contact-whatsapp');
    await expect(whatsappLink).toHaveAttribute(
      'href',
      'https://wa.me/+55999400403',
    );
    await expect(whatsappLink).toHaveAttribute('target', '_blank');
    await expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should display contact icons with proper alt text', async ({
    page,
  }) => {
    const emailIcon = page.getByTestId('contact-email').locator('img');
    const linkedinIcon = page.getByTestId('contact-linkedin').locator('img');
    const whatsappIcon = page.getByTestId('contact-whatsapp').locator('img');

    await expect(emailIcon).toHaveAttribute('alt', 'Email');
    await expect(linkedinIcon).toHaveAttribute('alt', 'LinkedIn');
    await expect(whatsappIcon).toHaveAttribute('alt', 'WhatsApp');
  });

  test('should have properly sized contact icons', async ({ page }) => {
    const emailIcon = page.getByTestId('contact-email').locator('img');

    await expect(emailIcon).toHaveAttribute('width', '48');
    await expect(emailIcon).toHaveAttribute('height', '48');
  });

  test('should have white background on icons', async ({ page }) => {
    const emailIcon = page.getByTestId('contact-email').locator('img');
    const classList = await emailIcon.getAttribute('class');

    expect(classList).toContain('bg-white');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.getByTestId('contact-section').scrollIntoViewIfNeeded();

    await expect(page.getByTestId('contact-title')).toBeVisible();
    await expect(page.getByTestId('contact-email')).toBeVisible();
    await expect(page.getByTestId('contact-linkedin')).toBeVisible();
    await expect(page.getByTestId('contact-whatsapp')).toBeVisible();
  });

  test('should contain e-mail, linkedin and whatsapp contact links', async ({
    page,
  }) => {
    const contactLinks = page.locator('a[data-testid^="contact-"]');
    await expect(contactLinks).toHaveCount(3);

    // Check they're visible and properly spaced
    await expect(page.getByTestId('contact-email')).toBeVisible();
    await expect(page.getByTestId('contact-linkedin')).toBeVisible();
    await expect(page.getByTestId('contact-whatsapp')).toBeVisible();
  });
});
