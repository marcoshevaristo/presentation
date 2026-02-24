# E2E Testing Documentation

This project uses Playwright for comprehensive end-to-end testing with maximum coverage.

## Test Structure

The e2e tests are organized by feature/component:

- **home.spec.ts** - Overall page load and meta tests
- **navigation.spec.ts** - Header navigation (desktop & mobile)
- **intro.spec.ts** - Intro section with CTAs
- **about.spec.ts** - About section content
- **projects.spec.ts** - Projects section with cards and technologies
- **skills.spec.ts** - Skills & Technologies section
- **contact.spec.ts** - Contact section with social links
- **footer.spec.ts** - Footer component
- **accessibility.spec.ts** - Accessibility compliance tests
- **responsive.spec.ts** - Responsive design across viewports
- **performance.spec.ts** - Performance and optimization tests

## Running Tests

### Run all tests
```bash
bun run test:e2e
```

### Run tests with UI
```bash
bun run test:e2e:ui
```

### Run tests in headed mode (see the browser)
```bash
bun run test:e2e:headed
```

### Debug tests
```bash
bun run test:e2e:debug
```

### View test report
```bash
bun run test:e2e:report
```

## Test Coverage

### Components Tested
- ✅ Header with responsive navigation
- ✅ Intro section with animations
- ✅ About section
- ✅ Projects section with all 8 projects
- ✅ Skills section with all categories
- ✅ Contact section with social links
- ✅ Footer

### Features Tested
- ✅ Page load and meta tags
- ✅ All navigation links (desktop & mobile)
- ✅ Mobile menu toggle
- ✅ Section scrolling
- ✅ All CTAs (Call-to-Actions)
- ✅ Image loading and optimization
- ✅ External links (email, LinkedIn, WhatsApp)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessibility compliance
- ✅ Performance metrics

### Viewports Tested
- � Desktop: Chromium (1280x720, 1920x1080, 2560x1440)
- 📱 Mobile Safari: iPhone 12 (390x844)
- 📱 Other mobile sizes tested in responsive tests: 375x667, 320x568
- 📱 Tablet sizes tested: 768x1024

### Browsers/Devices Tested
- ✅ Chromium (Desktop Chrome)
- ✅ Mobile Safari (iPhone 12)

## Test Data Attributes

All components use `data-testid` attributes for reliable test selectors:

- `data-testid="header"` - Header component
- `data-testid="nav-link-{section}"` - Navigation links
- `data-testid="mobile-menu-button"` - Mobile menu toggle
- `data-testid="intro-section"` - Intro section
- `data-testid="intro-title"` - Main title
- `data-testid="view-work-button"` - View My Work CTA
- `data-testid="get-in-touch-button"` - Get In Touch CTA
- `data-testid="about-section"` - About section
- `data-testid="projects-section"` - Projects section
- `data-testid="project-card-{index}"` - Individual project cards
- `data-testid="project-{index}-tech-{index}"` - Technology badges
- `data-testid="skills-section"` - Skills section
- `data-testid="skill-category-{name}"` - Skill categories
- `data-testid="contact-section"` - Contact section
- `data-testid="contact-{platform}"` - Contact links (email, linkedin, whatsapp)
- `data-testid="footer"` - Footer component

## Accessibility Tests

The test suite includes comprehensive accessibility checks:

- ✅ Proper HTML structure (header, main, footer, sections)
- ✅ Heading hierarchy (h1, h2, h3)
- ✅ Image alt text
- ✅ External link attributes (rel="noopener noreferrer")
- ✅ Button labels (aria-label)
- ✅ Text contrast ratios
- ✅ Keyboard navigation
- ✅ Lang attribute
- ✅ Viewport meta tag
- ✅ Console error detection

## Performance Tests

Performance tests verify:

- ✅ Page load time < 3 seconds
- ✅ No layout shifts
- ✅ Image optimization
- ✅ Smooth scrolling
- ✅ Resource loading
- ✅ Rapid navigation handling
- ✅ Memory leak prevention

## CI/CD Integration

The Playwright config is optimized for CI:

- Retries on failure (2 retries in CI)
- Screenshot on failure
- Trace on first retry
- HTML reporter
- Automatic dev server startup

## Writing New Tests

When adding new features:

1. Add `data-testid` attributes to new components
2. Create a new test file in `e2e/` directory
3. Follow the existing test structure
4. Test for functionality, accessibility, and responsiveness
5. Run tests locally before committing

## Best Practices

- Use `data-testid` for test selectors (more reliable than CSS classes)
- Test user interactions, not implementation details
- Include responsive tests for new features
- Verify accessibility for new components
- Check both light and dark mode where relevant
